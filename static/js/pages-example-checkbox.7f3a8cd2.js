(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-checkbox"],{"0f7c":function(e,a,t){"use strict";(function(e){var l=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=l(t("28cb")),c={mixins:[o.default],watch:{checked:function(a){e.log(a)},checkedList:function(a){e.log(a),a.length>0?this.$u.toast("选中值："+JSON.stringify(a)):this.$u.toast("没有选择！")}},data:function(){return{checked:!1,checkedList:[{id:"CHN",name:"中国"}],items:[{id:"USA",name:"美国",disabled:!0},{id:"CHN",name:"中国"},{id:"BRA",name:"巴西"},{id:"JPN",name:"日本",disabled:!0},{id:"ENG",name:"英国"},{id:"FRA",name:"法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国法国"}],data:{props:{dataList:{name:"dataList",description:"yd-checkbox-group 分类列表数据",type:"Array",defaultValue:[],value:[],controlType:!1},dataLabelField:{name:"dataLabelField",description:"yd-checkbox-group 实际数据值字段 传入该属性不用处理获取的列表数据",type:"String",defaultValue:"label",value:"name",controlType:!1},dataValueField:{name:"dataValueField",description:"yd-checkbox-group 实际数据键字段 传入该属性不用处理获取的列表数据",type:"String",defaultValue:"value",value:"id",controlType:!1},mode:{name:"mode",description:"yd-checkbox-group 排列方式",type:"String",defaultValue:"across",value:"across",controlType:"yd-section-tab",taboption:{key:0,list:[{label:"across",value:"across"},{label:"vertical",value:"vertical"}]}},itemborder:{name:"itemborder",description:"yd-checkbox-group 选项是否有边框。排列方式横排有效",type:"Boolean",defaultValue:!1,value:!1,controlType:"yd-section-tab",taboption:{key:1,list:[{label:"是",value:!0},{label:"否",value:!1}]}},customItem:{name:"customItem",description:"yd-checkbox-group 选项是否自定义显示内容。排列方式竖排有效",type:"Boolean",defaultValue:!1,value:!1,controlType:"yd-section-tab",taboption:{key:1,list:[{label:"是",value:!0},{label:"否",value:!1}]}},multiple:{name:"multiple",description:"yd-checkbox-group 是否多选",type:"Boolean",defaultValue:!0,value:!0,controlType:"yd-section-tab",taboption:{key:0,list:[{label:"是",value:!0},{label:"否",value:!1}],changeEvent:"multipleChange"}},checkedColor:{name:"checkedColor",description:"yd-checkbox-group/yd-checkbox 自定义checkbox选中颜色",type:"String",defaultValue:"",value:"",controlType:"yd-section-tab",taboption:{key:0,list:[{label:"primary",value:"#3195fa"},{label:"success",value:"#67c23a"},{label:"warning",value:"#e6a23c"},{label:"danger",value:"#f56c6c"}]}},type:{name:"type",description:"yd-checkbox-group/yd-checkbox checkbox类型",type:"String",defaultValue:"square",value:"square",controlType:"yd-section-tab",taboption:{key:0,list:[{label:"square",value:"square"},{label:"circle",value:"circle"}]}},size:{name:"size",description:"yd-checkbox-group/yd-checkbox checkbox大小尺寸",type:"Number",defaultValue:"",value:50,resetValue:50,controlType:"slider",min:24,max:60,step:1},disabled:{name:"disabled",description:"yd-checkbox 是否禁用，yd-checkbox-group禁用通过数据中disabled字段判断是否禁用",type:"Boolean",defaultValue:!1,value:!1,lastItem:!0,controlType:"yd-section-tab",taboption:{key:1,list:[{label:"禁用",value:!0},{label:"启用",value:!1}]}}},events:[{name:"handle-disabled",description:"yd-checkbox-group/yd-checkbox 禁用点击触发",callbackParam:"{} item"}],slots:[{name:"default",slotParams:"item",description:'yd-checkbox-group 自定义右侧显示内容 yd-checkbox-group customItem属性为true生效 通过v-slot="{item}" {{item.name}}获取当前选择值'},{name:"default",description:"yd-checkbox 自定义右侧显示内容"}]}}},methods:{handleDisabled:function(e){this.$u.toast("禁止选择 "+e.name+"！")},multipleChange:function(){this.checkedList=[{id:"CHN",name:"中国"}]}}};a.default=c}).call(this,t("5a52")["default"])},3233:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return l}));var l={ydCheckboxGroup:t("cb95").default,ydCheckbox:t("d85b").default,demoController:t("9b75").default},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("v-uni-view",{class:e.demoViewClass},[t("v-uni-scroll-view",{staticClass:"dome-scroll-view bg-fff",attrs:{"scroll-y":!0}},[t("v-uni-view",{staticClass:"pd-24"},[t("v-uni-view",[t("v-uni-view",{staticClass:"fwb mg-b-20"},[e._v("yd-checkbox-group")]),t("yd-checkbox-group",{attrs:{dataList:e.items,dataLabelField:"name",dataValueField:"id",mode:e.data.props["mode"].value,itemborder:e.data.props["itemborder"].value,multiple:e.data.props["multiple"].value,customItem:e.data.props["customItem"].value,size:e.data.props["size"].value,type:e.data.props["type"].value,checkedColor:e.data.props["checkedColor"].value},on:{"handle-disabled":function(a){arguments[0]=a=e.$handleEvent(a),e.handleDisabled.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(a){var l=a.item;return[t("v-uni-view",{staticClass:"pd-y-20"},[t("v-uni-view",[e._v(e._s(l.id))]),t("v-uni-view",[e._v(e._s(l.name))])],1)]}}]),model:{value:e.checkedList,callback:function(a){e.checkedList=a},expression:"checkedList"}})],1),t("v-uni-view",{staticClass:"mg-t-30"},[t("v-uni-view",{staticClass:"fwb mg-b-20"},[e._v("单独使用yd-checkbox")]),t("yd-checkbox",{attrs:{size:e.data.props["size"].value,type:e.data.props["type"].value,checkedColor:e.data.props["checkedColor"].value,disabled:e.data.props["disabled"].value},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}},[e._v("记住密码")])],1)],1)],1)],1),t("demo-controller",{on:{multipleChange:function(a){arguments[0]=a=e.$handleEvent(a),e.multipleChange.apply(void 0,arguments)}},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}})],1)},c=[]},9358:function(e,a,t){"use strict";t.r(a);var l=t("3233"),o=t("bf1d");for(var c in o)"default"!==c&&function(e){t.d(a,e,(function(){return o[e]}))}(c);var i,d=t("f0c5"),n=Object(d["a"])(o["default"],l["b"],l["c"],!1,null,null,null,!1,l["a"],i);a["default"]=n.exports},bf1d:function(e,a,t){"use strict";t.r(a);var l=t("0f7c"),o=t.n(l);for(var c in l)"default"!==c&&function(e){t.d(a,e,(function(){return l[e]}))}(c);a["default"]=o.a}}]);