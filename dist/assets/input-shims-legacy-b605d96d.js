System.register(["./index9-legacy-cc7b4398.js","./index-legacy-94c2a1e6.js"],(function(e,t){"use strict";var n,o,r,i,a,s,d,l;return{setters:[e=>{n=e.f,o=e.g,r=e.a},e=>{i=e.a,a=e.b,s=e.c,d=e.p,l=e.d}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=new WeakMap,c=(e,n,o,r=0,i=!1)=>{t.has(e)!==o&&(o?m(e,n,r,i):f(e,n))},u=e=>e===e.getRootNode().activeElement,m=(e,n,o,r=!1)=>{const i=n.parentNode,a=n.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,r&&(a.disabled=!0),i.appendChild(a),t.set(e,a);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${o}px,0) scale(0)`},f=(e,n)=>{const o=t.get(e);o&&(t.delete(e),o.remove()),e.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",v=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,d=.75*Math.min(t.bottom,o-n)-i,l=s-r,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,r-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-s)}},y=async(e,t,n,i,a,s=!1)=>{if(!n&&!i)return;const d=((e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||i,a);if(n&&Math.abs(d.scrollAmount)<4)t.focus();else if(c(e,t,!0,d.inputSafeY,s),t.focus(),l((()=>e.click())),"undefined"!=typeof window){let i;const a=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",a),n&&await r(n,0,d.scrollAmount,d.scrollDuration),c(e,t,!1,d.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",a)};if(n){const e=await o(n),r=e.scrollHeight-e.clientHeight;if(d.scrollAmount>r-e.scrollTop)return"password"===t.type?(d.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",a),void(i=setTimeout(a,1e3))}a()}},w=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},g="$ionPaddingTimer",h=(e,t)=>{var o,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(o=e.parentElement)||void 0===o?void 0:o.parentElement)||void 0===r?void 0:r.tagName))return;const i=n(e);if(null===i)return;const a=i[g];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[g]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)};e("startInputShims",((e,t)=>{const o=document,r="ios"===t,l="android"===t,m=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",r),g=e.getBoolean("inputBlurring",r),E=e.getBoolean("scrollPadding",!0),S=Array.from(o.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,L=new WeakMap,x=async e=>{await new Promise((t=>s(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),r=n(e),p=r?null:e.closest("ion-footer");if(o){if(r&&v&&!b.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{u(t)&&c(e,t,n)},r=()=>c(e,t,!1),s=()=>o(!0),d=()=>o(!1);return i(n,"ionScrollStart",s),i(n,"ionScrollEnd",d),t.addEventListener("blur",r),()=>{a(n,"ionScrollStart",s),a(n,"ionScrollEnd",d),t.addEventListener("ionBlur",r)}})(e,o,r);b.set(e,t)}if("date"!==o.type&&"datetime-local"!==o.type&&(r||p)&&f&&!L.has(e)){const t=((e,t,n,o,r,i=!1)=>{let a;const s=e=>{a=d(e)},l=s=>{if(!a)return;const l=d(s);w(6,a,l)||u(t)||y(e,t,n,o,r,i)};return e.addEventListener("touchstart",s,{capture:!0,passive:!0}),e.addEventListener("touchend",l,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",l,!0)}})(e,o,r,p,m,l);L.set(e,t)}}};g&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},r=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(p))return;const i=o.target;i!==r&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};i(n,"ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",a,!1)})(),E&&(e=>{const t=document,n=t=>{h(t.target,e)},o=e=>{h(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(m);for(const n of S)x(n);o.addEventListener("ionInputDidLoad",(e=>{x(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{(e=>{if(v){const t=b.get(e);t&&t(),b.delete(e)}if(f){const t=L.get(e);t&&t(),L.delete(e)}})(e.detail)}))}))}}}));
