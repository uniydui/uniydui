(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-tabbar-tabbar"],{"0374":function(n,t,e){"use strict";e.r(t);var a=e("69b7"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},5079:function(n,t,e){"use strict";e.r(t);var a=e("de27"),u=e("0374");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);var i=e("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,"c5dfc5c8",null);t["default"]=c.exports},"69b7":function(n,t,e){"use strict";var a=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("f499")),r={data:function(){return{currentIndex:2,value:""}},methods:{ontabtap:function(n){this.value=(0,u.default)(n)}}};t.default=r},de27:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("ydui-tabbar",{on:{change:function(t){t=n.$handleEvent(t),n.ontabtap(t)}},model:{value:n.currentIndex,callback:function(t){n.currentIndex=t},expression:"currentIndex"}}),e("v-uni-view",{staticClass:"padding-md"},[n._v(n._s(n.currentIndex))]),e("v-uni-view",{staticClass:"padding-x-md"},[n._v(n._s(n.value))])],1)},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})}}]);