(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-form-template-form-template"],{"15e7":function(t,e,i){"use strict";var r=i("b6ab"),s=i.n(r);s.a},"203a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6b54"),i("87b3");var r={data:function(){return{form:{text:"",password:"",address:"",code:"",tel:"",provinceCode:"110000",cityCode:"110100",districCode:"110101"},rules:[{name:"text",checkType:"string",checkRule:"1,",errorMsg:"请输入用户名"},{name:"password",checkType:"string",checkRule:"1,",errorMsg:"请输入密码"},{name:"tel",checkType:"string",checkRule:"1,",errorMsg:"请输入联系电话"},{name:"address",checkType:"string",checkRule:"1,",errorMsg:"请输入地址"},{name:"code",checkType:"string",checkRule:"1,",errorMsg:"请输入验证码"}],pickerIndex:0,time_pickerVal:"9:00",date_pickerVal:this.$yduiUtil.getDateString(0).date,startDate:this.$yduiUtil.getDateString(-365).date,endDate:this.$yduiUtil.getDateString(0).date,pickerArray:["中国","美国","巴西","日本"],citySelectResult:""}},methods:{pickerChange:function(e){t.log(e.target.value.length),e.target.value.length||(this.pickerIndex=e.target.value),e.target.value.length>0&&e.target.value.length<6&&(this.time_pickerVal=e.target.value),e.target.value.length>5&&(this.date_pickerVal=e.target.value),uni.showToast({title:e.target.value.toString(),duration:2e3,icon:"none"})},citySelectChange:function(e){this.citySelectResult=e.result,this.form.provinceCode=e.resultList[0].value,this.form.cityCode=e.resultList[1].value,this.form.districCode=e.resultList[2].value,t.log(this.form)},save:function(){var t=this.$yduiUtil.formCheck(this.form,this.rules);t&&(uni.showLoading({title:"提交中..."}),setTimeout(function(){uni.hideLoading(),uni.showToast({title:"提交成功",duration:2e3})},2e3))}}};e.default=r}).call(this,i("5a52")["default"])},"28e7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * ydui风格颜色 \r\n */.icon-locationfill[data-v-35e08b89]{margin-left:%?10?%;color:#23a389}',""])},"8df9":function(t,e,i){"use strict";i.r(e);var r=i("203a"),s=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);e["default"]=s.a},aa0c:function(t,e,i){"use strict";i.r(e);var r=i("f370"),s=i("8df9");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("15e7");var n=i("2877"),l=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"35e08b89",null);e["default"]=l.exports},b6ab:function(t,e,i){var r=i("28e7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=i("4f06").default;s("fb18bad8",r,!0,{sourceMap:!1,shadowMode:!1})},f370:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("ydui-list",[i("ydui-list-item",{attrs:{titleText:"文本输入框"}},[i("ydui-input",{attrs:{slot:"listRight",required:"",placeholder:"请输入用户名"},slot:"listRight",model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),i("ydui-list-item",{attrs:{titleText:"数字输入框"}},[i("ydui-input",{attrs:{slot:"listRight",type:"number",maxlength:11,required:"",placeholder:"请输入手机号码"},slot:"listRight",model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),i("ydui-list-item",{attrs:{titleText:"密码输入框"}},[i("ydui-input",{attrs:{slot:"listRight",password:"",required:"",placeholder:"请输入密码"},slot:"listRight",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("ydui-list-item",{attrs:{titleText:"带图标",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{placeholder:"请输入地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),i("v-uni-view",{staticClass:"ydui-icon icon-locationfill"})],1)],1),i("ydui-list-item",{attrs:{titleText:"带按钮",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{type:"number",placeholder:"请输入获取验"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),i("ydui-button",{attrs:{text:"获取验证码",size:"mini",customStyle:{height:"56rpx",marginLeft:"10rpx"}}})],1)],1)],1),i("ydui-list",{attrs:{marginTop:""}},[i("v-uni-picker",{attrs:{value:t.pickerIndex,range:t.pickerArray},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"普通选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.pickerArray[t.pickerIndex]))])],1)],1),i("v-uni-picker",{attrs:{mode:"time",value:t.time_pickerVal,start:"09:01",end:"21:01"},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"时间选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.time_pickerVal))])],1)],1),i("v-uni-picker",{attrs:{mode:"date",value:t.date_pickerVal,start:t.startDate,end:t.endDate},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"日期选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.date_pickerVal))])],1)],1),i("ydui-list-item",{attrs:{titleText:"城市选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listRight"},on:{click:function(e){e=t.$handleEvent(e),t.$refs.citySelect.open()}},slot:"listRight"},[t._v(t._s(t.citySelectResult?t.citySelectResult:"请选择地区"))])],1)],1),i("v-uni-view",{staticClass:"margin-top-md"},[i("ydui-button",{attrs:{text:"提交表单"},nativeOn:{click:function(e){return t.save(e)}}})],1),i("ydui-select",{ref:"citySelect",attrs:{defaultVal:[t.form.provinceCode,t.form.cityCode,t.form.districCode]},on:{change:function(e){e=t.$handleEvent(e),t.citySelectChange(e)}}})],1)},s=[];i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s})}}]);