(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ydui-demo-layout-layout"],{"0c7f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".item[data-v-f5517892]{background:#8799a3;color:#fff;border-radius:%?10?%;width:50%;margin-bottom:%?20?%}.item-y[data-v-f5517892]{background:#8799a3;border-radius:%?10?%;color:#fff;width:%?22?%}.flex-items uni-view[data-v-f5517892]{height:%?80?%;color:#fff;text-align:center;line-height:%?80?%;background:#8799a3}.flex-items uni-view[data-v-f5517892]:last-child{background:#2997ff}",""])},2297:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{num1:1,num2:1,betweenX:!1,centerX:!1,endX:!1,betweenY:!1,centerY:!1,endY:!1,currentIndex:0,tabBars:[{name:"flex布局",value:"flex"},{name:"辅助布局",value:"assist"}]}},methods:{setNum:function(t,i){this.num1=t,this.num2=i}}};i.default=n},5574:function(t,i,e){"use strict";var n=e("d12b"),a=e.n(n);a.a},"5efc":function(t,i,e){"use strict";e.r(i);var n=e("2297"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"9e62":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("ydui-tabbar",{attrs:{tabBars:t.tabBars},on:{ontabtap:function(i){i=t.$handleEvent(i),t.ontabtap(i)}},model:{value:t.currentIndex,callback:function(i){t.currentIndex=i},expression:"currentIndex"}}),0==t.currentIndex?e("ydui-card",[e("ydui-card-item",[e("ydui-group-title",[t._v("不使用flex布局类")]),e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",size:"mini",text:"A element"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini",text:"A element"}})],1)],1),e("ydui-card-item",[e("ydui-group-title",[e("v-uni-view",{staticClass:"ydui-flex ydui-x-between ydui-y-center",staticStyle:{width:"100%"}},[e("v-uni-view",[t._v("flex布局子元素比例")]),e("v-uni-view",{staticClass:"ydui-flex"},[e("ydui-button",{attrs:{size:"mini",text:"1:2"},nativeOn:{click:function(i){return t.setNum(1,2)}}}),e("ydui-button",{attrs:{size:"mini",text:"1:3",marginLeft:"20rpx"},nativeOn:{click:function(i){return t.setNum(1,3)}}}),e("ydui-button",{attrs:{size:"mini",text:"3:1",marginLeft:"20rpx"},nativeOn:{click:function(i){return t.setNum(3,1)}}})],1)],1)],1),e("v-uni-view",{staticClass:"flex-items ydui-flex"},[e("v-uni-view",{class:"ydui-item-"+t.num1},[t._v(t._s(t.num1))]),e("v-uni-view",{class:"ydui-item-"+t.num2},[t._v(t._s(t.num2))])],1)],1),e("ydui-card-item",[e("ydui-group-title",[t._v("使用flex布局类元素x方向排列")]),e("v-uni-view",{staticClass:"padding-md ydui-flex"},[e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini",text:t.betweenX?"默认对齐":"两端对齐"},nativeOn:{click:function(i){t.betweenX=!t.betweenX,t.centerX=!1,t.endX=!1}}}),e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini",text:t.centerX?"默认对齐":"居中对齐"},nativeOn:{click:function(i){t.centerX=!t.centerX,t.betweenX=!1,t.endX=!1}}}),e("ydui-button",{attrs:{size:"mini",text:t.endX?"默认对齐":"末尾对齐"},nativeOn:{click:function(i){t.endX=!t.endX,t.centerX=!1,t.betweenX=!1}}})],1),t.betweenX?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-x-between'")]):t._e(),t.centerX?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-x-center'")]):t._e(),t.endX?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-x-end'")]):t._e(),t.centerX||t.betweenX||t.endX?t._e():e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex'")]),e("v-uni-view",{staticClass:"padding-md ydui-flex",class:[t.betweenX?"ydui-x-between":"",t.centerX?"ydui-x-center":"",t.endX?"ydui-x-end":""]},[t._l(5,(function(t,i){return e("ydui-button",{key:i,staticClass:"margin-right-xs",attrs:{bgColor:"#8799A3",size:"mini",text:i+1}})})),e("ydui-button",{attrs:{bgColor:"#8799A3",size:"mini",text:"6"}})],2)],1),e("ydui-card-item",[e("ydui-group-title",[t._v("使用flex布局类元素y方向排列")]),e("v-uni-view",{staticClass:"padding-md ydui-flex"},[e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini",text:t.betweenY?"默认对齐":"垂直居中"},nativeOn:{click:function(i){t.betweenY=!t.betweenY,t.centerY=!1,t.endY=!1}}}),e("ydui-button",{staticClass:"margin-right-xs",attrs:{size:"mini",text:t.centerY?"默认对齐":"居中对齐"},nativeOn:{click:function(i){t.centerY=!t.centerY,t.betweenY=!1,t.endY=!1}}}),e("ydui-button",{attrs:{size:"mini",text:t.endY?"默认对齐":"末尾对齐"},nativeOn:{click:function(i){t.endY=!t.endY,t.centerY=!1,t.betweenY=!1}}})],1),t.betweenY?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-xy-center'")]):t._e(),t.centerY?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-x-center'")]):t._e(),t.endY?e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex ydui-x-end'")]):t._e(),t.centerY||t.betweenY||t.endY?t._e():e("v-uni-view",{staticClass:"padding-x-md"},[t._v("class='ydui-flex'")]),e("v-uni-view",{staticClass:"padding-md ydui-flex",class:[t.betweenY?"ydui-xy-center":"",t.centerY?"ydui-y-center":"",t.endY?"ydui-y-end":""],staticStyle:{height:"300upx"}},[e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"60upx"}},[t._v("1")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"100upx"}},[t._v("2")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"140upx"}},[t._v("3")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"180upx"}},[t._v("4")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"140upx"}},[t._v("5")]),e("v-uni-view",{staticClass:"item-y padding-xs margin-right-md",staticStyle:{height:"100upx"}},[t._v("6")]),e("v-uni-view",{staticClass:"item-y padding-xs",staticStyle:{height:"60upx"}},[t._v("7")])],1)],1)],1):t._e(),1==t.currentIndex?e("ydui-card",[e("ydui-group-title",[t._v("外边距：四边、x方向、y方向、上下左右")]),e("ydui-card-item",[e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-x-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-y-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-top-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-bottom-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"margin-left-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",text:"margin-right-${size}",size:"mini"}})],1)],1),e("ydui-card-item",[e("ydui-group-title",[t._v("内边距：四边、x方向、y方向、上下左右")]),e("v-uni-view",{staticClass:"padding-md"},[e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-x-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-y-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-top-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-bottom-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",marginBottom:"20rpx",text:"padding-left-${size}",size:"mini"}}),e("ydui-button",{attrs:{bgColor:"#8799A3",text:"padding-right-${size}",size:"mini"}})],1)],1),e("v-uni-view",{staticStyle:{color:"#666666"}},[e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[t._v("注：")]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[t._v('1.在需要边距的元素按照边距的大小直接上面的类名即可 如`class="padding-md"`表示该元素内边距四面都是24upx')]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-xs"},[t._v("2.size的可取值为xs、md、lg,分别为16upx、24upx、32upx几种常用边距")]),e("v-uni-view",{staticClass:"padding-x-md padding-bottom-md"},[t._v("3.修改ydui/common/ydui-app.scss文件中定义的变量$ydui-xs-size，$ydui-md-size，$ydui-lg-size值可以自定义size的大小")])],1)],1):t._e()],1)},a=[];e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return a}))},aa02:function(t,i,e){"use strict";e.r(i);var n=e("9e62"),a=e("5efc");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("5574");var d=e("2877"),u=Object(d["a"])(a["default"],n["a"],n["b"],!1,null,"f5517892",null);i["default"]=u.exports},d12b:function(t,i,e){var n=e("0c7f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0bc26e98",n,!0,{sourceMap:!1,shadowMode:!1})}}]);