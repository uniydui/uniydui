(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-category-category"],{"42a5":function(t,e,n){"use strict";n.r(e);var r=n("52ac"),i=n("47d5");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var a=n("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"496bacf3",null);e["default"]=c.exports},"47d5":function(t,e,n){"use strict";n.r(e);var r=n("b030"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},"52ac":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100%"}},[n("ydui-bg",{attrs:{height:"430rpx",imgURL:"../../../static/ydui_img/avatar.jpg"}}),n("v-uni-view",{staticStyle:{height:"calc(100% - 430rpx)"}},[n("ydui-category",[n("v-uni-view",{attrs:{slot:"categoryList"},slot:"categoryList"},t._l(50,function(e,r){return n("ydui-category-item",{key:r,attrs:{current:t.current==r},nativeOn:{click:function(e){return t.itemClick(r)}}},[t._v(t._s("商品分类"+(r+1)))])}),1),n("v-uni-view",{staticClass:"ydui-flex ydui-xy-center padding-top-lg",attrs:{slot:"categoryContent"},slot:"categoryContent"},[t._v(t._s("分类"+(t.current+1)+"的商品列表"))])],1)],1)],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},b030:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{current:0,categoryList:[]}},methods:{itemClick:function(t){this.current=t}}};e.default=r}}]);