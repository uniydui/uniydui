(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-form-template-form-template"],{"83b2":function(t,e,i){"use strict";i.r(e);var s=i("f0ae"),r=i.n(s);for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);e["default"]=r.a},"94a2":function(t,e,i){"use strict";i.r(e);var s=i("b884"),r=i("83b2");for(var l in r)"default"!==l&&function(t){i.d(e,t,function(){return r[t]})}(l);var o=i("2877"),n=Object(o["a"])(r["default"],s["a"],s["b"],!1,null,"75d0812d",null);e["default"]=n.exports},b884:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("ydui-list",[i("ydui-list-item",{attrs:{titleText:"文本输入框"}},[i("ydui-input",{attrs:{slot:"listRight",required:"",placeholder:"请输入用户名"},slot:"listRight",model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),i("ydui-list-item",{attrs:{titleText:"数字输入框"}},[i("ydui-input",{attrs:{slot:"listRight",type:"number",maxlength:11,required:"",placeholder:"请输入手机号码"},slot:"listRight",model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),i("ydui-list-item",{attrs:{titleText:"密码输入框"}},[i("ydui-input",{attrs:{slot:"listRight",password:"",required:"",placeholder:"请输入密码"},slot:"listRight",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("ydui-list-item",{attrs:{titleText:"带图标",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{placeholder:"请输入地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),i("v-uni-view",{staticClass:"ydui-icon icon-location",staticStyle:{"margin-left":"10upx"}})],1)],1),i("ydui-list-item",{attrs:{titleText:"带按钮",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{type:"number",placeholder:"请输入获取验"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),i("ydui-button",{attrs:{text:"获取验证码",size:"mini",customStyle:{height:"56rpx",marginLeft:"10rpx"}}})],1)],1)],1),i("ydui-list",{attrs:{marginTop:""}},[i("ydui-list-item",{attrs:{titleText:"普通选择器",showArrow:""}},[i("v-uni-picker",{attrs:{slot:"listRight",value:t.pickerIndex,range:t.pickerArray},on:{change:function(e){e=t.$handleEvent(e),t.pickerChange(e)}},slot:"listRight"},[i("v-uni-view",{staticClass:"ydui-p-gray"},[t._v(t._s(t.pickerArray[t.pickerIndex]))])],1)],1),i("ydui-list-item",{attrs:{titleText:"城市选择器",showArrow:""}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listRight"},on:{click:function(e){e=t.$handleEvent(e),t.$refs.citySelect.open()}},slot:"listRight"},[t._v(t._s(t.citySelectResult?t.citySelectResult:"请选择地区"))])],1)],1),i("ydui-button",{attrs:{text:"提交表单",customStyle:{margin:"24rpx auto"}},nativeOn:{click:function(e){return t.save(e)}}}),i("ydui-select",{ref:"citySelect",attrs:{defaultVal:[t.form.provinceCode,t.form.cityCode,t.form.districCode]},on:{change:function(e){e=t.$handleEvent(e),t.citySelectChange(e)}}})],1)},r=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r})},f0ae:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{form:{text:"",password:"",address:"",code:"",tel:"",provinceCode:"110000",cityCode:"110100",districCode:"110101"},rules:[{name:"text",checkType:"string",checkRule:"1,",errorMsg:"请输入用户名"},{name:"password",checkType:"string",checkRule:"1,",errorMsg:"请输入密码"},{name:"tel",checkType:"string",checkRule:"1,",errorMsg:"请输入联系电话"},{name:"address",checkType:"string",checkRule:"1,",errorMsg:"请输入地址"},{name:"code",checkType:"string",checkRule:"1,",errorMsg:"请输入验证码"}],pickerIndex:0,pickerArray:["中国","美国","巴西","日本"],citySelectResult:""}},methods:{pickerChange:function(t){this.pickerIndex=t.target.value},citySelectChange:function(e){this.citySelectResult=e.result,this.form.provinceCode=e.resultList[0].value,this.form.cityCode=e.resultList[1].value,this.form.districCode=e.resultList[2].value,t.log(this.form)},save:function(){var t=this.$yduiUtil.formCheck(this.form,this.rules);t&&(uni.showLoading({title:"提交中..."}),setTimeout(function(){uni.hideLoading(),uni.showToast({title:"提交成功",duration:2e3})},2e3))}}};e.default=i}).call(this,i("5a52")["default"])}}]);