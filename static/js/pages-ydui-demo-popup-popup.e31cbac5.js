(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-popup-popup"],{"040b":function(t,i,e){var n=e("0b08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var u=e("4f06").default;u("734df47f",n,!0,{sourceMap:!1,shadowMode:!1})},"0b08":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * ydui风格颜色 \r\n */.btn[data-v-dd6e7a2e]{margin-bottom:%?20?%}',""])},"356f":function(t,i,e){"use strict";e.r(i);var n=e("e67d"),u=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=u.a},"3fc5":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("ydui-card",[e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-y-center ydui-x-between",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("默认中间")]),e("ydui-button",{attrs:{size:"mini",text:"点击查看"},nativeOn:{click:function(i){return t.openPopup("center")}}})],1)],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-y-center ydui-x-between",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("从底部弹出")]),e("ydui-button",{attrs:{size:"mini",text:"点击查看"},nativeOn:{click:function(i){return t.openPopup("bottom")}}})],1)],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-y-center ydui-x-between",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("从顶部弹出")]),e("ydui-button",{attrs:{size:"mini",text:"点击查看"},nativeOn:{click:function(i){return t.openPopup("top")}}})],1)],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-y-center ydui-x-between",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("底部弹窗带header")]),e("ydui-button",{attrs:{size:"mini",text:"点击查看"},nativeOn:{click:function(i){return t.openPopup("bottom","请选择客户")}}})],1)],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-y-center ydui-x-between",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("点击蒙层不关闭弹窗")]),e("ydui-button",{attrs:{size:"mini",text:"点击查看"},nativeOn:{click:function(i){return t.openPopup("bottom","请选择客户",!1)}}})],1)],1)],1)],1),e("ydui-popup",{ref:"testPopup",attrs:{type:t.type,popupTitle:t.popupTitle,maskClick:t.maskClick}},[e("v-uni-scroll-view",{staticStyle:{height:"580upx"},attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"padding-md"},[t._v("弹窗显示内容")])],1),"top"!=t.type?e("ydui-button",{attrs:{text:"确定",radius:!1,fullWidth:""},nativeOn:{click:function(i){return t.$refs.testPopup.close()}}}):t._e()],1)],1)},u=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return u})},5917:function(t,i,e){"use strict";e.r(i);var n=e("3fc5"),u=e("356f");for(var r in u)"default"!==r&&function(t){e.d(i,t,function(){return u[t]})}(r);e("6656");var o=e("2877"),s=Object(o["a"])(u["default"],n["a"],n["b"],!1,null,"dd6e7a2e",null);i["default"]=s.exports},6656:function(t,i,e){"use strict";var n=e("040b"),u=e.n(n);u.a},e67d:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{type:"",popupTitle:"",maskClick:!0}},methods:{openPopup:function(t,i,e){this.type=t,this.popupTitle=i,this.maskClick=e,this.$refs.testPopup.open()}}};i.default=n}}]);