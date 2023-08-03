System.register(["./index-legacy-94c2a1e6.js"],(function(e,t){"use strict";var n,r,i;return{setters:[e=>{n=e.i,r=e.e,i=e.f}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
e("createSwipeBackGesture",((e,t,s,o,c)=>{const a=e.ownerDocument.defaultView,u=n(e),d=e=>u?-e.deltaX:e.deltaX;return r({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>(e=>{const{startX:t}=e;return u?t>=a.innerWidth-50:t<=50})(e)&&t(),onStart:s,onMove:e=>{const t=d(e)/a.innerWidth;o(t)},onEnd:e=>{const t=d(e),n=a.innerWidth,r=t/n,s=(e=>u?-e.velocityX:e.velocityX)(e),o=s>=0&&(s>.2||t>n/2),l=(o?1-r:r)*n;let h=0;if(l>5){const e=l/Math.abs(s);h=Math.min(e,540)}c(o,r<=0?.01:i(0,r,.9999),h)}})}))}}}));
