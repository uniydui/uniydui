(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-category"],{"0707":function(t,e,a){"use strict";a.r(e);var n=a("7123"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"0b6c":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.yd-category-item[data-v-3a2a9f6d]{padding:%?24?%;text-align:center;background:#f8f8f8;position:relative}.yd-category-item[data-v-3a2a9f6d]:after{content:"";width:0;height:0;border-left:%?6?% solid #3195fa;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all .3s;transition:all .3s}.yd-category-item.current[data-v-3a2a9f6d]{color:#3195fa;background:#fff;font-weight:600}.yd-category-item.current[data-v-3a2a9f6d]:after{height:100%}',""]),t.exports=e},"0c23":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={ydCategoryItem:a("cc45").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"yd-category flex"},[t.showLeftList?a("v-uni-scroll-view",{staticClass:"yd-category-list",attrs:{"scroll-y":!0}},[t.categoryList.length>0?t._l(t.categoryList,(function(e,n){return a("yd-category-item",{key:n,attrs:{current:t.currentKey==n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._itemClick(n)}}},[t._v(t._s(e[t.dataLabelField]))])})):t._t("categoryList")],2):t._e(),a("v-uni-scroll-view",{staticClass:"yd-category-content",attrs:{"scroll-y":!0}},[t._t("default")],2)],1)},o=[]},1859:function(t,e,a){"use strict";var n=a("6037"),r=a.n(n);r.a},"25bf":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.yd-category[data-v-62034360]{height:100%}.yd-category .yd-category-list[data-v-62034360],\r\n.yd-category .yd-category-content[data-v-62034360]{height:100%}.yd-category .yd-category-list[data-v-62034360]{width:%?220?%}.yd-category .yd-category-content[data-v-62034360]{background:#fff}',""]),t.exports=e},"2ab8":function(t,e,a){"use strict";a.r(e);var n=a("0c23"),r=a("a514");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("1859");var c,i=a("f0c5"),u=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"62034360",null,!1,n["a"],c);e["default"]=u.exports},4316:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"yd-category-item",props:{current:{type:Boolean,default:!1}},methods:{_click:function(){this.$emit("click")}}};e.default=n},"550a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"yd-category",props:{categoryList:{type:Array,default:function(){return[]}},dataLabelField:{type:String,default:"label"},dataValueField:{type:String,default:"value"},showLeftList:{type:Boolean,default:!0}},data:function(){return{currentKey:0}},methods:{_itemClick:function(t){this.currentKey=t,this.$emit("change",this.categoryList[t])}}};e.default=n},"5a35":function(t,e,a){var n=a("0b6c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("156fe5c2",n,!0,{sourceMap:!1,shadowMode:!1})},6037:function(t,e,a){var n=a("25bf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("10dfdbd0",n,!0,{sourceMap:!1,shadowMode:!1})},7123:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("28cb")),o={mixins:[r.default],data:function(){return{categoryList:[],categoryContent:"",data:{props:{categoryList:{name:"categoryList",description:"yd-category 分类列表数据",type:"Array",defaultValue:[],value:[],controlType:!1},dataLabelField:{name:"dataLabelField",description:"yd-category 实际数据值字段 传入该属性不用处理获取的列表数据",type:"String",defaultValue:"label",value:"name",controlType:!1},dataValueField:{name:"dataValueField",description:"yd-category 实际数据键字段 传入该属性不用处理获取的列表数据",type:"String",defaultValue:"value",value:"id",controlType:!1},showLeftList:{name:"showLeftList",description:"yd-category 是否显示左侧分类菜单，如果这个组件作为二级分类，则可能没有分类只有类容。",type:"Boolean",defaultValue:!0,value:!0,lastItem:!0,controlType:"yd-section-tab",taboption:{key:0,list:[{label:"是",value:!0},{label:"否",value:!1}]}}},events:!1,slots:[{name:"default",description:"自定义右侧显示内容"},{name:"categoryList",description:"自定义分类列表，不传入categoryList属性"}]}}},created:function(){for(var t=0;t<50;t++)0==t&&(this.categoryContent="商品分类".concat(t+1,"的分类列表")),this.data.props.categoryList.value.push({name:"商品分类"+(t+1),id:t})},methods:{categoryChange:function(e){this.categoryContent="".concat(e.name,"的分类列表"),t.log(e)}}};e.default=o}).call(this,a("5a52")["default"])},"820f":function(t,e,a){"use strict";a.r(e);var n=a("4316"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},8437:function(t,e,a){"use strict";a.r(e);var n=a("c544"),r=a("0707");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);var c,i=a("f0c5"),u=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=u.exports},a514:function(t,e,a){"use strict";a.r(e);var n=a("550a"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},c544:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={ydCategory:a("2ab8").default,demoController:a("9b75").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{class:t.demoViewClass},[a("v-uni-scroll-view",{staticClass:"dome-scroll-view",attrs:{"scroll-y":!0}},[a("yd-category",{attrs:{categoryList:t.data.props["categoryList"].value,dataLabelField:t.data.props["dataLabelField"].value,dataValueField:t.data.props["dataValueField"].value,showLeftList:t.data.props["showLeftList"].value},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.categoryChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex flex-xy-center per-h-100"},[t._v(t._s(t.categoryContent))])],1)],1)],1),a("demo-controller",{model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1)},o=[]},cc45:function(t,e,a){"use strict";a.r(e);var n=a("fe66"),r=a("820f");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("fb49");var c,i=a("f0c5"),u=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"3a2a9f6d",null,!1,n["a"],c);e["default"]=u.exports},fb49:function(t,e,a){"use strict";var n=a("5a35"),r=a.n(n);r.a},fe66:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"yd-category-item yd-toe pd-y-24",class:{current:t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._click.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]}}]);