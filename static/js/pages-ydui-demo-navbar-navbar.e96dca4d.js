(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-navbar-navbar"],{5573:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{searchVal:"",tabIndex:0,tabBars:[{name:"出售中",value:0},{name:"已下架",value:1}],menuList:[{id:0,name:"发起聊天",icon:"icon-message"},{id:1,name:"添加朋友",icon:"icon-friend_add_light"},{id:2,name:"扫一扫",icon:"icon-scan_light"},{id:3,name:"收付款",icon:"icon-recharge"}]}},methods:{navTabClick:function(n){this.tabIndex=n},addClick:function(){uni.showToast({title:"点击了添加按钮",duration:2e3})},moreClick:function(n){var t=uni.getSystemInfoSync(),i=(t.windowWidth,t.windowHeight,{x:uni.upx2px(12),y:n.currentTarget.offsetTop+30});this.$refs.moreMenu.open(i)},menuItemClick:function(n){this.$refs.moreMenu.close(),uni.showToast({title:"点击了"+(n+1)+"按钮",duration:2e3})},search:function(n){this.searchVal=n}}};t.default=e},"72f0":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("ydui-group-title",{attrs:{type:"line"}},[n._v("基础用法")]),i("ydui-navbar",{attrs:{navTitle:"自定义导航"},on:{addClick:function(t){t=n.$handleEvent(t),n.addClick(t)},search:function(t){t=n.$handleEvent(t),n.search(t)}}}),i("v-uni-view",{staticClass:"padding-md"},[n._v("默认显示搜索、添加按钮")]),n.searchVal?i("v-uni-view",{staticClass:"padding-md"},[n._v("执行搜索关键字:"+n._s(n.searchVal))]):n._e(),i("ydui-group-title",{attrs:{type:"line"}},[n._v("显示更多按钮")]),i("ydui-navbar",{attrs:{navTitle:"显示更多按钮",showMore:""},on:{moreClick:function(t){t=n.$handleEvent(t),n.moreClick(t)}}}),i("v-uni-view",{staticClass:"padding-md"},[n._v(':showMore="true"')]),i("ydui-group-title",{attrs:{type:"line"}},[n._v("自定义操作按钮")]),i("ydui-navbar",{attrs:{customBtn:""}},[i("v-uni-view",{staticClass:"ydui-flex custom-btns",attrs:{slot:"btns"},slot:"btns"},[i("v-uni-view",{staticClass:"ydui-icon icon-scan"}),i("v-uni-view",{staticClass:"ydui-icon icon-roundcheck"}),i("v-uni-view",{staticClass:"ydui-icon icon-pic"}),i("v-uni-view",{staticClass:"ydui-icon icon-pic"})],1)],1),i("v-uni-view",{staticClass:"padding-md"},[i("v-uni-view",[n._v(':customBtn="true" 自定义操作按钮最多显示三个操作按钮，超过三个请使用more按钮')])],1),i("ydui-group-title",{attrs:{type:"line"}},[n._v("带选项卡的导航")]),i("ydui-navbar",{attrs:{tabBars:n.tabBars},on:{addClick:function(t){t=n.$handleEvent(t),n.addClick(t)},search:function(t){t=n.$handleEvent(t),n.search(t)},navTabClick:function(t){t=n.$handleEvent(t),n.navTabClick(t)}}}),i("v-uni-view",[n._v(n._s(n.tabBars[n.tabIndex].name))]),i("yduiMenu",{ref:"moreMenu",attrs:{menuList:n.menuList},on:{menuItemClick:function(t){t=n.$handleEvent(t),n.menuItemClick(t)}}})],1)},a=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return a})},a28b:function(n,t,i){var e=i("ac7c");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("1f3e1edf",e,!0,{sourceMap:!1,shadowMode:!1})},ac7c:function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * ydui风格颜色 \r\n */.custom-btns .ydui-icon[data-v-fa37be66]{color:#fff;font-size:%?46?%}.custom-btns .ydui-icon[data-v-fa37be66]:not(:last-child){margin-right:%?10?%}',""])},b503:function(n,t,i){"use strict";i.r(t);var e=i("72f0"),a=i("dd5b");for(var s in a)"default"!==s&&function(n){i.d(t,n,function(){return a[n]})}(s);i("d44d");var u=i("2877"),c=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"fa37be66",null);t["default"]=c.exports},d44d:function(n,t,i){"use strict";var e=i("a28b"),a=i.n(e);a.a},dd5b:function(n,t,i){"use strict";i.r(t);var e=i("5573"),a=i.n(e);for(var s in e)"default"!==s&&function(n){i.d(t,n,function(){return e[n]})}(s);t["default"]=a.a}}]);