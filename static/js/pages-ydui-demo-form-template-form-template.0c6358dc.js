(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-form-template-form-template"],{"4b57":function(t,e,i){"use strict";i.r(e);var s=i("dfb2"),a=i("aefd");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e324");var l=i("2877"),n=Object(l["a"])(a["default"],s["a"],s["b"],!1,null,"7111ff0c",null);e["default"]=n.exports},aefd:function(t,e,i){"use strict";i.r(e);var s=i("da4c"),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);e["default"]=a.a},be40:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".icon-locationfill[data-v-7111ff0c]{margin-left:%?10?%;color:#2997ff}",""])},da4c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6b54");var s={data:function(){return{uploadData:{savePath:"test"},uploads:[],maxUploadCount:6,form:{text:"",password:"",address:"",code:"",tel:"",provinceCode:"510000",cityCode:"510100",districCode:"510107"},rules:[{name:"text",checkType:"string",checkRule:"1,",errorMsg:"请输入用户名"},{name:"password",checkType:"string",checkRule:"1,",errorMsg:"请输入密码"},{name:"tel",checkType:"string",checkRule:"1,",errorMsg:"请输入联系电话"},{name:"address",checkType:"string",checkRule:"1,",errorMsg:"请输入地址"},{name:"code",checkType:"string",checkRule:"1,",errorMsg:"请输入验证码"}],pickerIndex:0,time_pickerVal:"9:00",date_pickerVal:this.$yduiUtil.getDateString(0).date,startDate:this.$yduiUtil.getDateString(-365).date,endDate:this.$yduiUtil.getDateString(365).date,pickerArray:["中国","美国","巴西","日本"],citySelectResult:""}},methods:{uploadResult:function(e){this.uploads=e,t.log(e)},pickerChange:function(t){"general"==t.currentTarget.id&&(this.pickerIndex=t.target.value),"time"==t.currentTarget.id&&(this.time_pickerVal=t.target.value),"date"==t.currentTarget.id&&(this.date_pickerVal=t.target.value),uni.showToast({title:t.target.value.toString(),duration:2e3,icon:"none"})},switchChange:function(e){t.log(e)},citySelectChange:function(e){t.log(e),this.citySelectResult=e.result,this.form.provinceCode=e.resultList[0].value,this.form.cityCode=e.resultList[1].value,this.form.districCode=e.resultList[2].value,uni.showToast({title:JSON.stringify(e.resultList),duration:2e3,icon:"none"})},save:function(){var t=this.$yduiUtil.formCheck(this.form,this.rules);t&&(uni.showLoading({title:"提交中..."}),setTimeout((function(){uni.hideLoading(),uni.showToast({title:"提交成功",duration:2e3})}),2e3))}}};e.default=s}).call(this,i("5a52")["default"])},dfb2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("ydui-list",[i("ydui-list-item",{attrs:{titleText:"文本输入框"}},[i("ydui-input",{attrs:{slot:"listRight",required:"",placeholder:"请输入用户名"},slot:"listRight",model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),i("ydui-list-item",{attrs:{titleText:"数字输入框"}},[i("ydui-input",{attrs:{slot:"listRight",type:"number",maxlength:11,required:"",placeholder:"请输入手机号码"},slot:"listRight",model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),i("ydui-list-item",{attrs:{titleText:"密码输入框"}},[i("ydui-input",{attrs:{slot:"listRight",password:"",required:"",placeholder:"请输入密码"},slot:"listRight",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("ydui-list-item",{attrs:{titleText:"带图标",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between ydui-y-center",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{placeholder:"请输入地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),i("v-uni-view",{staticClass:"ydui-icon icon-locationfill"})],1)],1),i("ydui-list-item",{attrs:{titleText:"带按钮",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between ydui-y-center",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{type:"number",placeholder:"请输入获取验"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),i("ydui-button",{attrs:{text:"获取验证码",size:"mini",height:"56rpx",marginLeft:"10rpx"}})],1)],1)],1),i("ydui-list",{attrs:{marginTop:""}},[i("ydui-list-item",{attrs:{titleText:"开关",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-end",attrs:{slot:"listRight"},slot:"listRight"},[i("v-uni-switch",{attrs:{id:"test",color:"#2997FF",checked:!0},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1)],1),i("ydui-list-item",{attrs:{titleText:"checkbox",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-end",attrs:{slot:"listRight"},slot:"listRight"},[i("v-uni-switch",{attrs:{id:"test1",color:"#2997FF",type:"checkbox",checked:!0},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1)],1)],1),i("ydui-list",{attrs:{marginTop:""}},[i("ydui-list-item",{attrs:{titleText:"上传图片",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-end",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.uploads.length)+"/"+t._s(t.maxUploadCount))])],1),i("ydui-upload",{attrs:{dataParam:t.uploadData,maxUploadCount:t.maxUploadCount},on:{uploadResult:function(e){e=t.$handleEvent(e),t.uploadResult(e)}}})],1),i("ydui-list",{attrs:{marginTop:""}},[i("v-uni-picker",{attrs:{id:"general",value:t.pickerIndex,range:t.pickerArray},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"普通选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-t-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.pickerArray[t.pickerIndex]))])],1)],1),i("v-uni-picker",{attrs:{id:"time",mode:"time",value:t.time_pickerVal,start:"00:00",end:"21:00"},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"时间选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-t-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.time_pickerVal))])],1)],1),i("v-uni-picker",{attrs:{id:"date",mode:"date",value:t.date_pickerVal},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}}},[i("ydui-list-item",{attrs:{titleText:"日期选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-t-gray",attrs:{slot:"listRight"},slot:"listRight"},[t._v(t._s(t.date_pickerVal))])],1)],1),i("ydui-list-item",{attrs:{titleText:"城市选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-t-gray",attrs:{slot:"listRight"},on:{click:function(e){e=t.$handleEvent(e),t.$refs.citySelect.open()}},slot:"listRight"},[t._v(t._s(t.citySelectResult?t.citySelectResult:"请选择地区"))])],1)],1),i("v-uni-view",{staticClass:"margin-top-md"},[i("ydui-button",{attrs:{marginBottom:"24rpx",text:"提交表单"},nativeOn:{click:function(e){return t.save(e)}}})],1),i("ydui-select",{ref:"citySelect",attrs:{defaultVal:[t.form.provinceCode,t.form.cityCode,t.form.districCode]},on:{change:function(e){e=t.$handleEvent(e),t.citySelectChange(e)}}})],1)},a=[];i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}))},e324:function(t,e,i){"use strict";var s=i("f087"),a=i.n(s);a.a},f087:function(t,e,i){var s=i("be40");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("00c97f31",s,!0,{sourceMap:!1,shadowMode:!1})}}]);