(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-popup-popup"],{"00a6":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{staticClass:"btn",attrs:{size:"mini",text:"默认中间"},nativeOn:{click:function(n){return t.openPopup()}}}),e("ydui-button",{staticClass:"btn",attrs:{size:"mini",text:"底部"},nativeOn:{click:function(n){return t.openPopup("bottom")}}}),e("ydui-button",{staticClass:"btn",attrs:{size:"mini",text:"顶部"},nativeOn:{click:function(n){return t.openPopup("top")}}}),e("ydui-button",{staticClass:"btn",attrs:{size:"mini",text:"底部弹窗带header"},nativeOn:{click:function(n){return t.openPopup("bottom","请选择客户")}}}),e("ydui-button",{staticClass:"btn",attrs:{size:"mini",text:"点击蒙层不关闭弹窗"},nativeOn:{click:function(n){return t.openPopup("bottom","请选择客户",!1)}}}),e("ydui-popup",{ref:"testPopup",attrs:{type:t.type,customStyle:t.customStyle,popupTitle:t.popupTitle,maskClick:t.maskClick}},[e("v-uni-scroll-view",{style:{height:"560upx"},attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"padding-md"},[t._v("弹窗显示内容")])],1),"top"!=t.type?e("ydui-button",{attrs:{text:"确定",radius:!1,fullWidth:""},nativeOn:{click:function(n){return t.$refs.testPopup.close()}}}):t._e()],1)],1)},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"356f":function(t,n,e){"use strict";e.r(n);var i=e("e67d"),u=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=u.a},"4bdd":function(t,n,e){"use strict";var i=e("5f2c"),u=e.n(i);u.a},5917:function(t,n,e){"use strict";e.r(n);var i=e("00a6"),u=e("356f");for(var s in u)"default"!==s&&function(t){e.d(n,t,function(){return u[t]})}(s);e("4bdd");var o=e("2877"),r=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,"31b7e418",null);n["default"]=r.exports},"5f2c":function(t,n,e){var i=e("e0ff");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var u=e("4f06").default;u("ac35ccc8",i,!0,{sourceMap:!1,shadowMode:!1})},e0ff:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * ydui风格颜色 \r\n */.btn[data-v-31b7e418]{margin-bottom:%?20?%}',""])},e67d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{type:"",customStyle:{background:"#fff"},popupTitle:"",maskClick:!0}},methods:{openPopup:function(t,n,e){this.type=t,this.popupTitle=n,this.maskClick=e,this.$refs.testPopup.open()}}};n.default=i}}]);