(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-layout-layout"],{"1e2a":function(i,t,e){"use strict";var n=e("8afc"),s=e.n(n);s.a},"5d85":function(i,t,e){"use strict";e.r(t);var n=e("7666"),s=e("f46c");for(var a in s)"default"!==a&&function(i){e.d(t,i,function(){return s[i]})}(a);e("1e2a");var d,u=e("f0c5"),r=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"22c61862",null,!1,n["a"],d);t["default"]=r.exports},7666:function(i,t,e){"use strict";var n,s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("ydui-tabbar",{attrs:{tabBars:i.tabBars},on:{ontabtap:function(t){arguments[0]=t=i.$handleEvent(t),i.ontabtap.apply(void 0,arguments)}},model:{value:i.currentIndex,callback:function(t){i.currentIndex=t},expression:"currentIndex"}}),0==i.currentIndex?e("ydui-card",[e("ydui-card-item",[e("ydui-group-title",[i._v("不使用flex布局类")]),e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("A element")]),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini"}},[i._v("A element")])],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-x-between ydui-y-center",staticStyle:{width:"100%"}},[e("v-uni-view",[i._v("flex布局子元素比例")]),e("v-uni-view",{staticClass:"ydui-flex"},[e("ydui-button",{attrs:{size:"mini"},nativeOn:{click:function(t){return i.setNum(1,2)}}},[i._v("1:2")]),e("ydui-button",{attrs:{size:"mini",marginLeft:"20rpx"},nativeOn:{click:function(t){return i.setNum(1,3)}}},[i._v("1:3")]),e("ydui-button",{attrs:{size:"mini",marginLeft:"20rpx"},nativeOn:{click:function(t){return i.setNum(3,1)}}},[i._v("3:1")])],1)],1)],1),e("v-uni-view",{staticClass:"flex-items ydui-flex"},[e("v-uni-view",{class:"ydui-item-"+i.num1},[i._v(i._s(i.num1))]),e("v-uni-view",{class:"ydui-item-"+i.num2},[i._v(i._s(i.num2))])],1)],1),e("ydui-card-item",[e("ydui-group-title",[i._v("使用flex布局类元素x方向排列")]),e("v-uni-view",{staticClass:"padding-md ydui-flex"},[e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini"},nativeOn:{click:function(t){i.betweenX=!i.betweenX,i.centerX=!1,i.endX=!1}}},[i._v(i._s(i.betweenX?"默认对齐":"两端对齐"))]),e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini"},nativeOn:{click:function(t){i.centerX=!i.centerX,i.betweenX=!1,i.endX=!1}}},[i._v(i._s(i.centerX?"默认对齐":"居中对齐"))]),e("ydui-button",{attrs:{size:"mini"},nativeOn:{click:function(t){i.endX=!i.endX,i.centerX=!1,i.betweenX=!1}}},[i._v(i._s(i.endX?"默认对齐":"末尾对齐"))])],1),i.betweenX?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-x-between'")]):i._e(),i.centerX?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-x-center'")]):i._e(),i.endX?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-x-end'")]):i._e(),i.centerX||i.betweenX||i.endX?i._e():e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex'")]),e("v-uni-view",{staticClass:"padding-md ydui-flex",class:[i.betweenX?"ydui-x-between":"",i.centerX?"ydui-x-center":"",i.endX?"ydui-x-end":""]},[i._l(5,function(t,n){return e("ydui-button",{key:n,staticClass:"margin-right-xs",attrs:{bgColor:"#8799A3",size:"mini"}},[i._v(i._s(n+1))])}),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini"}},[i._v("6")])],2)],1),e("ydui-card-item",[e("ydui-group-title",[i._v("使用flex布局类元素y方向排列")]),e("v-uni-view",{staticClass:"padding-md ydui-flex"},[e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini"},nativeOn:{click:function(t){i.betweenY=!i.betweenY,i.centerY=!1,i.endY=!1}}},[i._v(i._s(i.betweenY?"默认对齐":"垂直居中"))]),e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini"},nativeOn:{click:function(t){i.centerY=!i.centerY,i.betweenY=!1,i.endY=!1}}},[i._v(i._s(i.centerY?"默认对齐":"居中对齐"))]),e("ydui-button",{attrs:{size:"mini"},nativeOn:{click:function(t){i.endY=!i.endY,i.centerY=!1,i.betweenY=!1}}},[i._v(i._s(i.endY?"默认对齐":"末尾对齐"))])],1),i.betweenY?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-xy-center'")]):i._e(),i.centerY?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-x-center'")]):i._e(),i.endY?e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex ydui-x-end'")]):i._e(),i.centerY||i.betweenY||i.endY?i._e():e("v-uni-view",{staticClass:"padding-x-md"},[i._v("class='ydui-flex'")]),e("v-uni-view",{staticClass:"padding-md ydui-flex",class:[i.betweenY?"ydui-xy-center":"",i.centerY?"ydui-y-center":"",i.endY?"ydui-y-end":""],staticStyle:{height:"300upx"}},[e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"60upx"}},[i._v("1")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"100upx"}},[i._v("2")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"140upx"}},[i._v("3")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"180upx"}},[i._v("4")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"140upx"}},[i._v("5")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"100upx"}},[i._v("6")]),e("v-uni-view",{staticClass:"item-y padding-xs",staticStyle:{height:"60upx"}},[i._v("7")])],1)],1)],1):i._e(),1==i.currentIndex?e("ydui-card",[e("ydui-group-title",[i._v("外边距：四边、x方向、y方向、上下左右")]),e("ydui-card-item",[e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-x-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-y-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-top-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-bottom-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("margin-left-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini"}},[i._v("margin-right-${size}")])],1)],1),e("ydui-card-item",[e("ydui-group-title",[i._v("内边距：四边、x方向、y方向、上下左右")]),e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-x-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-y-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-top-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-bottom-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini"}},[i._v("padding-left-${size}")]),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini"}},[i._v("padding-right-${size}")])],1)],1),e("v-uni-view",{staticStyle:{color:"#666666"}},[e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[i._v("注：")]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[i._v('1.在需要边距的元素按照边距的大小直接上面的类名即可 如`class="padding-md"`表示该元素内边距四面都是24upx')]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[i._v("2.size的可取值为xs、md、lg,分别为16upx、24upx、32upx几种常用边距")]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-md"},[i._v("3.修改ydui/common/ydui-app.scss文件中定义的变量$ydui-xs-size，$ydui-md-size，$ydui-lg-size值可以自定义size的大小")])],1)],1):i._e()],1)},a=[];e.d(t,"b",function(){return s}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return n})},"8afc":function(i,t,e){var n=e("a845");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var s=e("4f06").default;s("927911ba",n,!0,{sourceMap:!1,shadowMode:!1})},"994f":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{num1:1,num2:1,betweenX:!1,centerX:!1,endX:!1,betweenY:!1,centerY:!1,endY:!1,currentIndex:0,tabBars:[{name:"flex布局",value:"flex"},{name:"辅助布局",value:"assist"}]}},methods:{setNum:function(i,t){this.num1=i,this.num2=t}}};t.default=n},a845:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * app风格颜色 \r\n */.item[data-v-22c61862]{background:#8799a3;color:#fff;border-radius:%?10?%;width:50%;margin-bottom:%?20?%}.item-y[data-v-22c61862]{background:#8799a3;border-radius:%?10?%;color:#fff;width:%?22?%}.flex-items uni-view[data-v-22c61862]{height:%?80?%;color:#fff;text-align:center;line-height:%?80?%;background:#8799a3}.flex-items uni-view[data-v-22c61862]:last-child{background:#2997ff}',""])},f46c:function(i,t,e){"use strict";e.r(t);var n=e("994f"),s=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,function(){return n[i]})}(a);t["default"]=s.a}}]);