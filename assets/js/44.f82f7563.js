(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{447:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"minimap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimap"}},[t._v("#")]),t._v(" MiniMap")]),t._v(" "),a("h3",{attrs:{id:"启用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用"}},[t._v("#")]),t._v(" 启用")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LogicFlow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MiniMap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/extension'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/extension/lib/style/index.css'")]),t._v("\n\nLogicFlow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MiniMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示"}},[t._v("#")]),t._v(" 显示")]),t._v(" "),a("p",[t._v("引入 mini-map 后默认不展示，需要手动开启显示。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1.0 以上")]),t._v("\nlf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minimap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftPosition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topPosition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1.0 以下")]),t._v("\nMiniMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftPosition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topPosition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("show()")]),t._v(" 支持传入样式属性 left 和 top 的值，用来确定 mini-map 在画布中的位置。")]),t._v(" "),a("p",[t._v("只提供 left 和 top 这两个值是因为可以与"),a("code",[t._v("lf.getPointByClient")]),t._v(" API 配合使用，如果想实现更加灵活的样式，可以直接通过类名设置样式。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lf-mini-map")]),t._v(" - mini-map 根元素")]),t._v(" "),a("li",[a("code",[t._v("lf-mini-map-header")]),t._v(" - mini-map 头部元素")]),t._v(" "),a("li",[a("code",[t._v("lf-mini-map-graph")]),t._v(" - mini-map 画布元素")]),t._v(" "),a("li",[a("code",[t._v("lf-mini-map-close")]),t._v(" - mini-map 关闭图标元素")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("MiniMap.show()")]),t._v("必须在"),a("code",[t._v("lf.render()")]),t._v("后调用。")])]),t._v(" "),a("h3",{attrs:{id:"隐藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏"}},[t._v("#")]),t._v(" 隐藏")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1.0 以上")]),t._v("\nlf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minimap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1.0 以下")]),t._v("\nMiniMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/intelligent-matsumoto-t1dc5?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"intelligent-matsumoto-t1dc5",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])}),[],!1,null,null,null);s.default=e.exports}}]);