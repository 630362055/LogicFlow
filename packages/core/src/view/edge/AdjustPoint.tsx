import { h, Component } from 'preact';
import EventEmitter from '../../event/eventEmitter';
import { BaseEdgeModel } from '../../model/edge';
import GraphModel from '../../model/GraphModel';
import Circle from '../basic-shape/Circle';
import { createDrag } from '../../util/drag';
import { targetNodeInfo } from '../../util/node';
import { Point } from '../../type';
import { EventType, ModelType } from '../../constant/constant';

interface IProps {
  x: number;
  y: number;
  type: AdjustType;
  id?: string;
  graphModel: GraphModel;
  edgeModel: BaseEdgeModel;
}
interface IState {
  draging: boolean;
  endX: number;
  endY: number;
}

interface OldEdge {
  startPoint: Point;
  endPoint: Point;
  pointsList: Point[];
}

enum AdjustType {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export default class AdjustPoint extends Component<IProps, IState> {
  dragHandler: Function;
  oldEdge: OldEdge;
  constructor() {
    super();
    this.state = {
      draging: false,
      endX: 0,
      endY: 0,
    };
    this.dragHandler = createDrag({
      onDragStart: this.onDragStart,
      onDraging: this.onDraging,
      onDragEnd: this.onDragEnd,
    });
  }
  onDragStart = () => {
    const {
      x, y, edgeModel,
    } = this.props;
    const { startPoint, endPoint, pointsList } = edgeModel;
    // 记录下原始路径信息，在调整中，如果放弃调整，进行路径还原
    this.oldEdge = {
      startPoint,
      endPoint,
      pointsList,
    };
    this.setState({
      endX: x,
      endY: y,
      draging: true,
    });
  };
  onDraging = ({ deltaX, deltaY }) => {
    const { endX, endY } = this.state;
    const { graphModel, type } = this.props;
    const { transformModel } = graphModel;
    const [x, y] = transformModel.moveCanvasPointByHtml(
      [endX, endY],
      deltaX,
      deltaY,
    );
    this.setState({
      endX: x,
      endY: y,
      draging: true,
    });
    // 调整过程中实时更新路径
    const { edgeModel } = this.props;
    const info = targetNodeInfo({ x: endX, y: endY }, graphModel);
    // 如果一定的坐标能够找到目标节点，预结算当前节点与目标节点的路径进行展示
    if (info && info.node) {
      let params;
      const { startPoint, endPoint, sourceNode, targetNode } = edgeModel;
      if (type === AdjustType.SOURCE) {
        params = {
          startPoint: { x: info.anchor.x, y: info.anchor.y },
          endPoint: { x: endPoint.x, y: endPoint.y },
          sourceNode: info.node,
          targetNode,
        };
      } else if (type === AdjustType.TARGET) {
        params = {
          startPoint: { x: startPoint.x, y: startPoint.y },
          endPoint: { x: info.anchor.x, y: info.anchor.y },
          sourceNode,
          targetNode: info.node,
        };
      }
      edgeModel.updateAfterAdjustStartAndEnd(params);
    } else if (type === AdjustType.SOURCE) {
      // 如果没有找到目标节点，更显起终点为当前坐标
      edgeModel.updateStartPoint({ x, y });
    } else if (type === AdjustType.TARGET) {
      edgeModel.updateEndPoint({ x, y });
    }
  };
  onDragEnd = () => {
    // 将状态置为非拖拽状态
    this.setState({
      draging: false,
    });
    const {
      graphModel, edgeModel, type,
    } = this.props;
    const { endX, endY, draging } = this.state;
    const info = targetNodeInfo({ x: endX, y: endY }, graphModel);
    // 没有draging就结束边
    if (!draging) return;
    // 如果找到目标节点，删除老边，创建新边
    if (info && info.node) {
      const edgeData = edgeModel.getData();
      let createEdgeInfo = {
        ...edgeData,
        sourceAnchorId: '',
        targetAnchorId: '',
        text: edgeData?.text?.value || '',
      };
      // 根据调整点是边的起点或重点，计算创建边需要的参数
      if (type === AdjustType.SOURCE) {
        createEdgeInfo = {
          ...createEdgeInfo,
          sourceNodeId: info.node.id,
          sourceAnchorId: info.anchor.id,
          startPoint: { x: info.anchor.x, y: info.anchor.y },
          targetNodeId: edgeModel.targetNodeId,
          endPoint: { ...edgeModel.endPoint },
        };
      } else if (type === AdjustType.TARGET) {
        createEdgeInfo = {
          ...createEdgeInfo,
          sourceNodeId: edgeModel.sourceNodeId,
          startPoint: { ...edgeModel.startPoint },
          targetNodeId: info.node.id,
          targetAnchorId: info.anchor.id,
          endPoint: { x: info.anchor.x, y: info.anchor.y },
        };
      }
      // 为了保证id不变必须要先删除老边，再创建新边，创建新边是会判断是否有重复的id
      // 删除老边
      graphModel.deleteEdgeById(edgeModel.id);
      // 创建新边
      const edge = graphModel.addEdge({ ...createEdgeInfo }) as BaseEdgeModel;
      // 向外抛出事件
      graphModel.eventCenter.emit(
        EventType.EDGE_EXCHANGE_NODE,
        { data: { newEdge: edge.getData(), oldEdge: edgeModel.getData() } },
      );
    } else {
      // 如果没有找到目标节点，还原边
      this.recoveryEdge();
    }
  };
  // 还原边
  recoveryEdge = () => {
    const { edgeModel } = this.props;
    const { startPoint, endPoint, pointsList } = this.oldEdge;
    edgeModel.updateStartPoint(startPoint);
    edgeModel.updateEndPoint(endPoint);
    // 折线和曲线还需要更新其pointsList
    if (edgeModel.modelType !== ModelType.LINE_EDGE) {
      edgeModel.pointsList = pointsList;
      edgeModel.initPoints();
    }
  };
  // 调整点的样式默认从主题中读取， 可以复写此方法进行更加个性化的自定义
  // 目前仅支持圆形图标进行标识，可以从圆形的r和颜色上进行调整
  getAdjustPointStyle = () => {
    const { graphModel: { theme } } = this.props;
    const { edgeAdjust } = theme;
    return edgeAdjust;
  };

  render() {
    const { x, y } = this.props;
    const { draging } = this.state;
    const style = this.getAdjustPointStyle();
    return (
      <g>
        <Circle
          className="lf-edge-adjust-point"
          {...style}
          {...{ x, y }}
          onMouseDown={this.dragHandler}
          pointer-events={draging ? 'none' : ''}
        />
      </g>
    );
  }

}
