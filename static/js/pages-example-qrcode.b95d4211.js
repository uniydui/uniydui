(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-qrcode"],{"0ee4":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={};(function(){function e(t){this.mode=o.MODE_8BIT_BYTE,this.data=t}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}e.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},n.prototype={addData:function(t){var r=new e(t);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=h.getRSBlocks(t,this.errorCorrectLevel),r=new c,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),s.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=s.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,l=this.modules[i][s];l&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=s.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1));var f=s.getMask(e,n,a-u);f&&(l=!l),this.modules[n][a-u]=l,o--,-1==o&&(i++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,r){for(var o=h.getRSBlocks(t,e),i=new c,a=0;a<r.length;a++){var u=r[a];i.put(u.mode,4),i.put(u.getLength(),s.getLengthInBits(u.mode,t)),u.write(i)}var l=0;for(a=0;a<o.length;a++)l+=o[a].dataCount;if(i.getLengthInBits()>8*l)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*l+")");i.getLengthInBits()+4<=8*l&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*l)break;if(i.put(n.PAD0,8),i.getLengthInBits()>=8*l)break;i.put(n.PAD1,8)}return n.createBytes(i,o)},n.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,h=e[u].totalCount-l;n=Math.max(n,l),o=Math.max(o,h),i[u]=new Array(l);for(var c=0;c<i[u].length;c++)i[u][c]=255&t.buffer[c+r];r+=l;var d=s.getErrorCorrectPolynomial(h),g=new f(i[u],d.getLength()-1),m=g.mod(d);a[u]=new Array(d.getLength()-1);for(c=0;c<a[u].length;c++){var v=c+m.getLength()-a[u].length;a[u][c]=v>=0?m.get(v):0}}var p=0;for(c=0;c<e.length;c++)p+=e[c].totalCount;var C=new Array(p),T=0;for(c=0;c<n;c++)for(u=0;u<e.length;u++)c<i[u].length&&(C[T++]=i[u][c]);for(c=0;c<o;c++)for(u=0;u<e.length;u++)c<a[u].length&&(C[T++]=a[u][c]);return C};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new f([1],0),r=0;r<t;r++)e=e.multiply(new f([1,u.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var f=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&f++;var h=Math.abs(100*f/e/e-50)/5;return r+=10*h,r}},u={glog:function(t){if(t<1)throw new Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)u.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)u.EXP_TABLE[l]=u.EXP_TABLE[l-4]^u.EXP_TABLE[l-5]^u.EXP_TABLE[l-6]^u.EXP_TABLE[l-8];for(l=0;l<255;l++)u.LOG_TABLE[u.EXP_TABLE[l]]=l;function f(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function h(t,e){this.totalCount=t,this.dataCount=e}function c(){this.buffer=new Array,this.length=0}function d(t){for(var e,r="",n=0;n<t.length;n++)e=t.charCodeAt(n),e>=1&&e<=127?r+=t.charAt(n):e>2047?(r+=String.fromCharCode(224|e>>12&15),r+=String.fromCharCode(128|e>>6&63),r+=String.fromCharCode(128|e>>0&63)):(r+=String.fromCharCode(192|e>>6&31),r+=String.fromCharCode(128|e>>0&63));return r}f.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=u.gexp(u.glog(this.get(r))+u.glog(t.get(n)));return new f(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=u.glog(this.get(0))-u.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=u.gexp(u.glog(t.get(n))+e);return new f(r,0).mod(t)}},h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(t,e){var r=h.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var a=r[3*i+0],s=r[3*i+1],u=r[3*i+2],l=0;l<a;l++)o.push(new h(s,u));return o},h.getRsBlockTable=function(t,e){switch(e){case i.L:return h.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return h.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return h.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return h.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},c.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},r={defaults:{size:258,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",correctLevel:3,typeNumber:-1},make:function(e){var r={canvasId:e.canvasId,componentInstance:e.componentInstance,text:e.text,size:this.defaults.size,margin:this.defaults.margin,backgroundColor:this.defaults.backgroundColor,foregroundColor:this.defaults.foregroundColor,fileType:this.defaults.fileType,correctLevel:this.defaults.correctLevel,typeNumber:this.defaults.typeNumber};if(e)for(var o in e)r[o]=e[o];function i(){var t=new n(e.typeNumber,e.correctLevel);t.addData(d(e.text)),t.make();var r=uni.createCanvasContext(e.canvasId,e.componentInstance);r.setFillStyle(e.backgroundColor),r.fillRect(0,0,e.size,e.size);for(var o=(e.size-2*e.margin)/t.getModuleCount(),i=o,a=0;a<t.getModuleCount();a++)for(var s=0;s<t.getModuleCount();s++){var u=t.isDark(a,s)?e.foregroundColor:e.backgroundColor;r.setFillStyle(u);var l=Math.round(s*o)+e.margin,f=Math.round(a*i)+e.margin,h=Math.ceil((s+1)*o)-Math.floor(s*o),c=Math.ceil((a+1)*o)-Math.floor(a*o);r.fillRect(l,f,h,c)}setTimeout((function(){r.draw(!1,(function(){setTimeout((function(){uni.canvasToTempFilePath({canvasId:e.canvasId,fileType:e.fileType,width:e.size,height:e.size,destWidth:e.size,destHeight:e.size,success:function(t){e.success&&e.success(t.tempFilePath)},fail:function(t){e.fail&&e.fail(t)},complete:function(t){e.complete&&e.complete(t)}},e.componentInstance)}),e.text.length+100)}))}),150)}e=r,e.canvasId?i():t.error("uQRCode: Please set canvasId!")}}})();var n=r;e.default=n}).call(this,r("5a52")["default"])},"2d11":function(t,e,r){"use strict";r.r(e);var n=r("48fd"),o=r("5c32");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var a,s=r("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=u.exports},4678:function(t,e,r){"use strict";var n=r("4ea4");r("cb29"),r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("0ee4")),i={props:{cid:{type:String,default:"codeCanvas"},text:{type:String,required:!0},size:{type:Number,default:129},margin:{type:Number,default:0},bgColor:{type:String,default:"#fff"},foregColor:{type:String,default:"#000"},backgroundImage:{type:String},logo:{type:String},init:{type:Boolean,default:!1}},data:function(){return{filePath:""}},mounted:function(){this.init&&this.make()},methods:{make:function(){var t=this,e={canvasId:this.cid,componentInstance:this,text:this.text,size:this.size,margin:this.margin,backgroundColor:this.bgColor,foregroundColor:this.foregColor,success:function(e){t.filePath=e,t.complete(e)}};this.backgroundImage&&(e.backgroundColor="rgba(255,255,255,0)",e.success=function(e){t.drawBackgroundImage(e),t.complete(e)}),this.logo&&(e.backgroundColor="rgba(255,255,255,0)",e.success=function(e){t.drawLogo(e),t.complete(e)}),o.default.make(e)},complete:function(t){this.$emit("complete",t)},drawBackgroundImage:function(t){var e=this,r=uni.createCanvasContext(this.cid,this);r.drawImage(this.backgroundImage,0,0,this.size,this.size),r.drawImage(t,0,0,this.size,this.size),r.draw(!1,(function(){uni.canvasToTempFilePath({canvasId:e.cid,success:function(t){e.filePath=t.tempFilePath}})}))},drawLogo:function(t){var e=this,r=uni.createCanvasContext(this.cid,this);r.drawImage(t,0,0,this.size,this.size);var n=this.size/4,o=this.size/2-n/2,i=o,a=n+10,s=this.size/2-a/2,u=s,l=5;this.fillRoundRect(r,l,s,u,a,a),r.drawImage(this.logo,o,i,n,n),r.draw(!1,(function(){uni.canvasToTempFilePath({canvasId:e.cid,success:function(t){e.filePath=t.tempFilePath}})}))},fillRoundRect:function(t,e,r,n,o,i){t.save(),t.translate(r,n),t.beginPath(),t.arc(o-e,i-e,e,0,Math.PI/2),t.lineTo(e,i),t.arc(e,i-e,e,Math.PI/2,Math.PI),t.lineTo(0,e),t.arc(e,e,e,Math.PI,3*Math.PI/2),t.lineTo(o-e,0),t.arc(o-e,e,e,3*Math.PI/2,2*Math.PI),t.lineTo(o,i-e),t.closePath(),t.setFillStyle("#fff"),t.fill(),t.restore()}}};e.default=i},"48fd":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-canvas",{style:{width:t.size+"px",height:t.size+"px"},attrs:{id:t.cid,"canvas-id":t.cid}})],1)},i=[]},"5c32":function(t,e,r){"use strict";r.r(e);var n=r("4678"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"9ac3":function(t,e,r){"use strict";r.r(e);var n=r("f48c"),o=r("d6a9");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var a,s=r("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=u.exports},c92c:function(t,e,r){"use strict";(function(t){var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("28cb")),i={mixins:[o.default],data:function(){return{data:{props:{text:{name:"text",description:"二维码内容",type:"String",defaultValue:""},size:{name:"size",description:"二维码大小",type:"Number",defaultValue:129,value:150},bgColor:{name:"bgColor",description:"二维码背景颜色，没有图片背景跟logo生效",type:"String",defaultValue:"#fff"},foreColor:{name:"foreColor",description:"二维码颜色",type:"String",defaultValue:"#000"},logo:{name:"logo",description:"二维码logo 值为logo路径如：/static/yd.png",type:"String",defaultValue:""},init:{name:"init",description:"是否初始化生成",type:"Boolean",defaultValue:"false"}},events:[{name:"complete",description:"生成完成事件",callbackParam:"path"}],slots:!1}}},methods:{sizeSliderChange:function(t){this.$refs.qrcode.make()},makeComplete:function(e){t.log(e)}}};e.default=i}).call(this,r("5a52")["default"])},d6a9:function(t,e,r){"use strict";r.r(e);var n=r("c92c"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},f48c:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={ydQrcode:r("2d11").default,ydButton:r("805d").default,demoController:r("9b75").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{class:t.demoViewClass},[r("yd-qrcode",{ref:"qrcode",attrs:{size:t.data.props["size"].value,logo:"/static/yd.png",text:"https://uniydui.github.io/uniydui/"},on:{complete:function(e){arguments[0]=e=t.$handleEvent(e),t.makeComplete.apply(void 0,arguments)}}})],1),r("v-uni-view",{staticClass:"pd-t-24"},[r("yd-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.qrcode.make()}}},[t._v("生成二维码")])],1),r("demo-controller",{on:{sizeSliderChange:function(e){arguments[0]=e=t.$handleEvent(e),t.sizeSliderChange.apply(void 0,arguments)}},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1)},i=[]}}]);