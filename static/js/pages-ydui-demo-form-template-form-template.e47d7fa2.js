(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-form-template-form-template"],{"1ce1":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("ydui-list",[i("ydui-list-item",{attrs:{titleText:"文本输入框"}},[i("ydui-input",{attrs:{slot:"listRight",required:"",placeholder:"请输入文本"},slot:"listRight",model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),i("ydui-list-item",{attrs:{titleText:"数字输入框"}},[i("ydui-input",{attrs:{slot:"listRight",type:"number",maxlength:11,required:"",placeholder:"请输入手机号码"},slot:"listRight",model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),i("ydui-list-item",{attrs:{titleText:"密码输入框"}},[i("ydui-input",{attrs:{slot:"listRight",password:"",required:"",placeholder:"请输入密码"},slot:"listRight",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("ydui-list-item",{attrs:{titleText:"带图标",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{placeholder:"请输入地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),i("v-uni-view",{staticClass:"ydui-icon icon-location",staticStyle:{"margin-left":"10upx"}})],1)],1),i("ydui-list-item",{attrs:{titleText:"带按钮",lineBreak:""}},[i("v-uni-view",{staticClass:"ydui-flex ydui-x-between",attrs:{slot:"listRight"},slot:"listRight"},[i("ydui-input",{staticClass:"ydui-item-1",attrs:{type:"number",placeholder:"请输入获取验"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),i("ydui-button",{attrs:{text:"获取验证码",size:"mini",customStyle:{height:"56rpx",marginLeft:"10rpx"}}})],1)],1)],1),i("ydui-list",{attrs:{marginTop:""}},[i("ydui-list-item",{attrs:{titleText:"普通选择器",showArrow:"",pickerMode:"selector"}},[i("v-uni-view",{staticClass:"ydui-p-gray",attrs:{slot:"listPicker"},slot:"listPicker"},[t._v("请选择")])],1)],1)],1)},r=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r})},"83b2":function(t,e,i){"use strict";i.r(e);var s=i("f0ae"),r=i.n(s);for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);e["default"]=r.a},"94a2":function(t,e,i){"use strict";i.r(e);var s=i("1ce1"),r=i("83b2");for(var l in r)"default"!==l&&function(t){i.d(e,t,function(){return r[t]})}(l);var a=i("2877"),o=Object(a["a"])(r["default"],s["a"],s["b"],!1,null,"b8485e62",null);e["default"]=o.exports},f0ae:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{form:{text:"",password:"",address:"",code:"",tel:""}}}};e.default=s}}]);