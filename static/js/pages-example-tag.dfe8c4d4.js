(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-tag"],{"0828":function(e,a,r){"use strict";var t=r("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(r("28cb")),n={mixins:[o.default],data:function(){return{slotText:"标签一",data:{props:{type:{name:"type",description:"标签类型 number类型没有padding",type:"String",defaultValue:"",value:"",controlType:"yd-section-tab",taboption:{key:0,list:[{label:"circle",value:"circle"},{label:"circleLeft",value:"circleLeft"},{label:"circleRight",value:"circleRight"},{label:"number",value:"number"}],changeEvent:"typeChange"}},bgColor:{name:"bgColor",description:"背景颜色",type:"String",defaultValue:"",value:"#f56c6c",controlType:"yd-section-tab",taboption:{key:3,list:[{label:"primary",value:"#3195fa"},{label:"success",value:"#67c23a"},{label:"warning",value:"#e6a23c"},{label:"danger",value:"#f56c6c"},{label:"none",value:""}]}},border:{name:"border",description:"是否边框",type:"Boolean",defaultValue:"false",value:!1,controlType:"yd-section-tab",taboption:{key:1,list:[{label:"是",value:!0},{label:"否",value:!1}],changeEvent:"borderChange"}},borderColor:{name:"borderColor",description:"边框颜色",type:"String",defaultValue:"",value:"#f56c6c",controlType:"yd-section-tab",taboption:{key:3,list:[{label:"primary",value:"#3195fa"},{label:"success",value:"#67c23a"},{label:"warning",value:"#e6a23c"},{label:"danger",value:"#f56c6c"},{label:"none",value:""}]}},color:{name:"color",description:"字体颜色",type:"String",defaultValue:"",value:"#fff",controlType:"yd-section-tab",taboption:{key:0,list:[{label:"fff",value:"#fff"},{label:"333",value:"#333"}]}},radius:{name:"radius",description:"圆角大小",type:"Number",defaultValue:0,value:0,resetValue:0,controlType:"slider",min:0,max:10,step:1}},events:!1,slots:[{name:"default",description:"自定义内容"}]}}},methods:{typeChange:function(e){var a=e.props["type"].taboption;"number"==a.list[a.key].value?this.slotText=99:this.slotText="标签一"},borderChange:function(e){var a=e.props["border"].taboption;a.list[a.key].value?e.props.bgColor.taboption.key=4:e.props.bgColor.taboption.key=3,e.props.bgColor.value=e.props.bgColor.taboption.list[e.props.bgColor.taboption.key].value}}};a.default=n},"2e09":function(e,a,r){"use strict";r.d(a,"b",(function(){return o})),r.d(a,"c",(function(){return n})),r.d(a,"a",(function(){return t}));var t={ydTag:r("afa2").default,demoController:r("9b75").default},o=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-uni-view",[r("v-uni-view",{class:e.demoViewClass},[r("yd-tag",{attrs:{bgColor:e.data.props["bgColor"].value,type:e.data.props["type"].value,radius:e.data.props["radius"].value,borderColor:e.data.props["borderColor"].value,color:e.data.props["color"].value,border:e.data.props["border"].value}},[e._v(e._s(e.slotText))])],1),r("demo-controller",{on:{typeChange:function(a){arguments[0]=a=e.$handleEvent(a),e.typeChange.apply(void 0,arguments)},borderChange:function(a){arguments[0]=a=e.$handleEvent(a),e.borderChange.apply(void 0,arguments)}},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}})],1)},n=[]},"3ad2":function(e,a,r){"use strict";var t;r.d(a,"b",(function(){return o})),r.d(a,"c",(function(){return n})),r.d(a,"a",(function(){return t}));var o=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-uni-view",{staticClass:"yd-tag",class:[e.border?"yd-tag-border":"","circle"===e.type?"yd-tag-circle":"","circleLeft"===e.type?"yd-tag-circle-left":"","circleRight"===e.type?"yd-tag-circle-right":"","number"===e.type?"yd-tag-number yd-toe":""],style:{background:e.bgColor?e.bgColor:"",borderColor:e.borderColor?e.borderColor:"",color:e.color?e.color:"",borderRadius:e.radius?e.radius+"rpx":""}},[e._t("default")],2)},n=[]},"4b96":function(e,a,r){"use strict";r.r(a);var t=r("2e09"),o=r("bead");for(var n in o)"default"!==n&&function(e){r.d(a,e,(function(){return o[e]}))}(n);var l,i=r("f0c5"),d=Object(i["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],l);a["default"]=d.exports},5335:function(e,a,r){"use strict";r.r(a);var t=r("8580"),o=r.n(t);for(var n in t)"default"!==n&&function(e){r.d(a,e,(function(){return t[e]}))}(n);a["default"]=o.a},"705b":function(e,a,r){var t=r("24fb");a=t(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.yd-tag[data-v-77e99fa6]{background:#ededed;color:#666;line-height:1;display:inline-block;padding:%?8?% %?20?%;font-size:%?24?%}.yd-tag-border[data-v-77e99fa6]{border:%?2?% solid #ededed;background:none}.yd-tag-circle[data-v-77e99fa6]{border-radius:%?1000?%}.yd-tag-circle-left[data-v-77e99fa6]{border-radius:%?1000?% 0 0 %?1000?%}.yd-tag-circle-right[data-v-77e99fa6]{border-radius:0 %?1000?% %?1000?% 0}.yd-tag-number[data-v-77e99fa6]{padding:0;max-width:%?64?%;min-width:%?32?%;height:%?32?%;text-align:center;line-height:%?32?%;border-radius:%?1000?%;background:#ff3d15;color:#fff}',""]),e.exports=a},7549:function(e,a,r){"use strict";var t=r("e2f0"),o=r.n(t);o.a},8580:function(e,a,r){"use strict";r("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={name:"yd-tag",props:{type:{type:String,default:""},border:{type:Boolean,default:!1},radius:[Number],bgColor:[String],borderColor:[String],color:[String]},data:function(){return{}}};a.default=t},afa2:function(e,a,r){"use strict";r.r(a);var t=r("3ad2"),o=r("5335");for(var n in o)"default"!==n&&function(e){r.d(a,e,(function(){return o[e]}))}(n);r("7549");var l,i=r("f0c5"),d=Object(i["a"])(o["default"],t["b"],t["c"],!1,null,"77e99fa6",null,!1,t["a"],l);a["default"]=d.exports},bead:function(e,a,r){"use strict";r.r(a);var t=r("0828"),o=r.n(t);for(var n in t)"default"!==n&&function(e){r.d(a,e,(function(){return t[e]}))}(n);a["default"]=o.a},e2f0:function(e,a,r){var t=r("705b");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=r("4f06").default;o("6d346b7c",t,!0,{sourceMap:!1,shadowMode:!1})}}]);