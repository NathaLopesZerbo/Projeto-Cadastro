(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function nn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tt={exports:{}},at={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Xn(){if(ve)return at;ve=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,a,o){var s=null;if(o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),"key"in a){o={};for(var f in a)f!=="key"&&(o[f]=a[f])}else o=a;return a=o.ref,{$$typeof:t,type:r,key:s,ref:a!==void 0?a:null,props:o}}return at.Fragment=e,at.jsx=n,at.jsxs=n,at}var xe;function Bn(){return xe||(xe=1,Tt.exports=Xn()),Tt.exports}Bn();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Vn(t,e,n){return(e=Jn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(n),!0).forEach(function(r){Vn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Kn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jn(t){var e=Kn(t,"string");return typeof e=="symbol"?e:e+""}const Ee=()=>{};let oe={},rn={},an=null,on={mark:Ee,measure:Ee};try{typeof window<"u"&&(oe=window),typeof document<"u"&&(rn=document),typeof MutationObserver<"u"&&(an=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}const{userAgent:we=""}=oe.navigator||{},q=oe,P=rn,Oe=an,pt=on;q.document;const W=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",sn=~we.indexOf("MSIE")||~we.indexOf("Trident/");var Qn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},tr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R="classic",At="duotone",er="sharp",nr="sharp-duotone",cn=[R,At,er,nr],rr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ar={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},or=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ir={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},sr=["fak","fa-kit","fakd","fa-kit-duotone"],Pe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fr=["kit"],lr={kit:{"fa-kit":"fak"}},cr=["fak","fakd"],ur={kit:{fak:"fa-kit"}},Se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mr=["fak","fa-kit","fakd","fa-kit-duotone"],pr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},hr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},yr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ut=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...dr,...yr],br=["solid","regular","light","thin","duotone","brands"],un=[1,2,3,4,5,6,7,8,9,10],vr=un.concat([11,12,13,14,15,16,17,18,19,20]),xr=[...Object.keys(hr),...br,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(un.map(t=>"".concat(t,"x"))).concat(vr.map(t=>"w-".concat(t))),Ar={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Y="___FONT_AWESOME___",Wt=16,dn="fa",mn="svg-inline--fa",K="data-fa-i2svg",Ht="data-fa-pseudo-element",Er="data-fa-pseudo-element-pending",ie="data-prefix",se="data-icon",_e="fontawesome-i2svg",wr="async",Or=["HTML","HEAD","STYLE","SCRIPT"],pn=(()=>{try{return!0}catch{return!1}})();function ct(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[R]}})}const gn=l({},fn);gn[R]=l(l(l(l({},{"fa-duotone":"duotone"}),fn[R]),Pe.kit),Pe["kit-duotone"]);const Pr=ct(gn),$t=l({},ir);$t[R]=l(l(l(l({},{duotone:"fad"}),$t[R]),Se.kit),Se["kit-duotone"]);const ke=ct($t),qt=l({},Yt);qt[R]=l(l({},qt[R]),ur.kit);const fe=ct(qt),Gt=l({},gr);Gt[R]=l(l({},Gt[R]),lr.kit);ct(Gt);const Sr=Qn,hn="fa-layers-text",_r=Zn,kr=l({},rr);ct(kr);const Tr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct=tr,Cr=[...fr,...xr],it=q.FontAwesomeConfig||{};function Ir(t){var e=P.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Nr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Nr(Ir(n));a!=null&&(it[r]=a)});const yn={styleDefault:"solid",familyDefault:R,cssPrefix:dn,replacementClass:mn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);const nt=l(l({},yn),it);nt.autoReplaceSvg||(nt.observeMutations=!1);const m={};Object.keys(yn).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){nt[t]=e,st.forEach(n=>n(m))},get:function(){return nt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){nt.cssPrefix=t,st.forEach(e=>e(m))},get:function(){return nt.cssPrefix}});q.FontAwesomeConfig=m;const st=[];function Rr(t){return st.push(t),()=>{st.splice(st.indexOf(t),1)}}const $=Wt,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fr(t){if(!t||!W)return;const e=P.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=P.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return P.head.insertBefore(e,r),t}const Mr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){let t=12,e="";for(;t-- >0;)e+=Mr[Math.random()*62|0];return e}function rt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function le(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function bn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(bn(t[n]),'" '),"").trim()}function Et(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ce(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function jr(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(f)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:d,path:u}}function Dr(t){let{transform:e,width:n=Wt,height:r=Wt,startCentered:a=!1}=t,o="";return a&&sn?o+="translate(".concat(e.x/$-n/2,"em, ").concat(e.y/$-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):o+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),o+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var zr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function vn(){const t=dn,e=mn,n=m.cssPrefix,r=m.replacementClass;let a=zr;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(f,".".concat(r))}return a}let Te=!1;function It(){m.autoAddCss&&!Te&&(Fr(vn()),Te=!0)}var Yr={mixout(){return{dom:{css:vn,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}};const U=q||{};U[Y]||(U[Y]={});U[Y].styles||(U[Y].styles={});U[Y].hooks||(U[Y].hooks={});U[Y].shims||(U[Y].shims=[]);var z=U[Y];const xn=[],An=function(){P.removeEventListener("DOMContentLoaded",An),bt=1,xn.map(t=>t())};let bt=!1;W&&(bt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),bt||P.addEventListener("DOMContentLoaded",An));function Ur(t){W&&(bt?setTimeout(t,0):xn.push(t))}function ut(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?bn(t):"<".concat(e," ").concat(Lr(n),">").concat(r.map(ut).join(""),"</").concat(e,">")}function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Nt=function(e,n,r,a){var o=Object.keys(e),s=o.length,f=n,d,u,p;for(r===void 0?(d=1,p=e[o[0]]):(d=0,p=r);d<s;d++)u=o[d],p=f(p,e[u],u,e);return p};function Wr(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Xt(t){const e=Wr(t);return e.length===1?e[0].toString(16):null}function Hr(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ie(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Ie(e);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(t,Ie(e)):z.styles[t]=l(l({},z.styles[t]||{}),a),t==="fas"&&Bt("fa",e)}const{styles:lt,shims:$r}=z,En=Object.keys(fe),qr=En.reduce((t,e)=>(t[e]=Object.keys(fe[e]),t),{});let ue=null,wn={},On={},Pn={},Sn={},_n={};function Gr(t){return~Cr.indexOf(t)}function Xr(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Gr(a)?a:null}const kn=()=>{const t=r=>Nt(lt,(a,o,s)=>(a[s]=Nt(o,r,{}),a),{});wn=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(f=>typeof f=="number").forEach(f=>{r[f.toString(16)]=o}),r)),On=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(f=>typeof f=="string").forEach(f=>{r[f]=o}),r)),_n=t((r,a,o)=>{const s=a[2];return r[o]=o,s.forEach(f=>{r[f]=o}),r});const e="far"in lt||m.autoFetchSvg,n=Nt($r,(r,a)=>{const o=a[0];let s=a[1];const f=a[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pn=n.names,Sn=n.unicodes,ue=wt(m.styleDefault,{family:m.familyDefault})};Rr(t=>{ue=wt(t.styleDefault,{family:m.familyDefault})});kn();function de(t,e){return(wn[t]||{})[e]}function Br(t,e){return(On[t]||{})[e]}function V(t,e){return(_n[t]||{})[e]}function Tn(t){return Pn[t]||{prefix:null,iconName:null}}function Vr(t){const e=Sn[t],n=de("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return ue}const Cn=()=>({prefix:null,iconName:null,rest:[]});function Kr(t){let e=R;const n=En.reduce((r,a)=>(r[a]="".concat(m.cssPrefix,"-").concat(a),r),{});return cn.forEach(r=>{(t.includes(n[r])||t.some(a=>qr[r].includes(a)))&&(e=r)}),e}function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=R}=e,r=Pr[n][t];if(n===At&&!t)return"fad";const a=ke[n][t]||ke[n][r],o=t in z.styles?t:null;return a||o||null}function Jr(t){let e=[],n=null;return t.forEach(r=>{const a=Xr(m.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function Ne(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ot(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=Ut.concat(mr),o=Ne(t.filter(v=>a.includes(v))),s=Ne(t.filter(v=>!Ut.includes(v))),f=o.filter(v=>(r=v,!ln.includes(v))),[d=null]=f,u=Kr(o),p=l(l({},Jr(s)),{},{prefix:wt(d,{family:u})});return l(l(l({},p),ea({values:t,family:u,styles:lt,config:m,canonical:p,givenPrefix:r})),Qr(n,r,p))}function Qr(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const o=e==="fa"?Tn(a):{},s=V(r,a);return a=o.iconName||s||a,r=o.prefix||r,r==="far"&&!lt.far&&lt.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Zr=cn.filter(t=>t!==R||t!==At),ta=Object.keys(Yt).filter(t=>t!==R).map(t=>Object.keys(Yt[t])).flat();function ea(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:o={},config:s={}}=t,f=n===At,d=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(d||u||p)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Zr.includes(n)&&(Object.keys(o).find(g=>ta.includes(g))||s.autoFetchSvg)){const g=or.get(n).defaultShortPrefixId;r.prefix=g,r.iconName=V(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=G()||"fas"),r}class na{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),a[o]),Bt(o,a[o]);const s=fe[R][o];s&&Bt(s,a[o]),kn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:s,icon:f}=r[a],d=f[2];e[o]||(e[o]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(e[o][u]=f)}),e[o][s]=f}),e}}let Re=[],Z={};const et={},ra=Object.keys(et);function aa(t,e){let{mixoutsTo:n}=e;return Re=t,Z={},Object.keys(et).forEach(r=>{ra.indexOf(r)===-1&&delete et[r]}),Re.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Z[s]||(Z[s]=[]),Z[s].push(o[s])})}r.provides&&r.provides(et)}),n}function Vt(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Z[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Z[t]||[]).forEach(o=>{o.apply(null,n)})}function X(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=V(n,e)||e,Ce(In.definitions,n,e)||Ce(z.styles,n,e)}const In=new na,oa=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},ia={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(J("beforeI2svg",t),X("pseudoElements2svg",t),X("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ur(()=>{fa({autoReplaceSvgRoot:e}),J("watch",t)})}},sa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=wt(t[0]);return{prefix:n,iconName:V(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Sr))){const e=Ot(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:V(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:V(e,t)||t}}}},M={noAuto:oa,config:m,dom:ia,parse:sa,library:In,findIconDefinition:Kt,toHtml:ut},fa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=P}=t;(Object.keys(z.styles).length>0||m.autoFetchSvg)&&W&&m.autoReplaceSvg&&M.dom.i2svg({node:e})};function Pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ut(n))}}),Object.defineProperty(t,"node",{get:function(){if(!W)return;const n=P.createElement("div");return n.innerHTML=t.html,n.children}}),t}function la(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:s}=t;if(ce(s)&&n.found&&!r.found){const{width:f,height:d}=n,u={x:f/d/2,y:.5};a.style=Et(l(l({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function ca(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},a),{},{id:s}),children:r}]}]}function me(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:s,title:f,maskId:d,titleId:u,extra:p,watchable:v=!1}=t,{width:g,height:_}=n.found?n:e,N=cr.includes(r),F=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(A=>p.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(p.classes).join(" ");let O={children:[],attributes:l(l({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:F,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(_)})};const T=N&&!~p.classes.indexOf("fa-fw")?{width:"".concat(g/_*16*.0625,"em")}:{};v&&(O.attributes[K]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||ft())},children:[f]}),delete O.attributes.title);const S=l(l({},O),{},{prefix:r,iconName:a,main:e,mask:n,maskId:d,transform:o,symbol:s,styles:l(l({},T),p.styles)}),{children:C,attributes:L}=n.found&&e.found?X("generateAbstractMask",S)||{children:[],attributes:{}}:X("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=C,S.attributes=L,s?ca(S):la(S)}function Fe(t){const{content:e,width:n,height:r,transform:a,title:o,extra:s,watchable:f=!1}=t,d=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});f&&(d[K]="");const u=l({},s.styles);ce(a)&&(u.transform=Dr({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const p=Et(u);p.length>0&&(d.style=p);const v=[];return v.push({tag:"span",attributes:d,children:[e]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function ua(t){const{content:e,title:n,extra:r}=t,a=l(l(l({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Et(r.styles);o.length>0&&(a.style=o);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Rt}=z;function Jt(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const da={found:!1,width:512,height:512};function ma(t,e){!pn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=G()),new Promise((r,a)=>{if(n==="fa"){const o=Tn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Rt[e]&&Rt[e][t]){const o=Rt[e][t];return r(Jt(o))}ma(t,e),r(l(l({},da),{},{icon:m.showMissingIcons&&t?X("missingIconAbstract")||{}:{}}))})}const Me=()=>{},Zt=m.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Me,measure:Me},ot='FA "6.7.2"',pa=t=>(Zt.mark("".concat(ot," ").concat(t," begins")),()=>Nn(t)),Nn=t=>{Zt.mark("".concat(ot," ").concat(t," ends")),Zt.measure("".concat(ot," ").concat(t),"".concat(ot," ").concat(t," begins"),"".concat(ot," ").concat(t," ends"))};var pe={begin:pa,end:Nn};const ht=()=>{};function Le(t){return typeof(t.getAttribute?t.getAttribute(K):null)=="string"}function ga(t){const e=t.getAttribute?t.getAttribute(ie):null,n=t.getAttribute?t.getAttribute(se):null;return e&&n}function ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function ya(){return m.autoReplaceSvg===!0?yt.replace:yt[m.autoReplaceSvg]||yt.replace}function ba(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function va(t){return P.createElement(t)}function Rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ba:va}=e;if(typeof t=="string")return P.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Rn(o,{ceFn:n}))}),r}function xa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const yt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Rn(n),e)}),e.getAttribute(K)===null&&m.keepOriginalSource){let n=P.createComment(xa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~le(e).indexOf(m.replacementClass))return yt.replace(t);const r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,f)=>(f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>ut(o)).join(`
`);e.setAttribute(K,""),e.innerHTML=a}};function je(t){t()}function Fn(t,e){const n=typeof e=="function"?e:ht;if(t.length===0)n();else{let r=je;m.mutateApproach===wr&&(r=q.requestAnimationFrame||je),r(()=>{const a=ya(),o=pe.begin("mutate");t.map(a),o(),n()})}}let ge=!1;function Mn(){ge=!0}function te(){ge=!1}let vt=null;function De(t){if(!Oe||!m.observeMutations)return;const{treeCallback:e=ht,nodeCallback:n=ht,pseudoElementsCallback:r=ht,observeMutationsRoot:a=P}=t;vt=new Oe(o=>{if(ge)return;const s=G();rt(o).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!Le(f.addedNodes[0])&&(m.searchPseudoElements&&r(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&m.searchPseudoElements&&r(f.target.parentNode),f.type==="attributes"&&Le(f.target)&&~Tr.indexOf(f.attributeName))if(f.attributeName==="class"&&ga(f.target)){const{prefix:d,iconName:u}=Ot(le(f.target));f.target.setAttribute(ie,d||s),u&&f.target.setAttribute(se,u)}else ha(f.target)&&n(f.target)})}),W&&vt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Aa(){vt&&vt.disconnect()}function Ea(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const o=a.split(":"),s=o[0],f=o.slice(1);return s&&f.length>0&&(r[s]=f.join(":").trim()),r},{})),n}function wa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=Ot(le(t));return a.prefix||(a.prefix=G()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Br(a.prefix,t.innerText)||de(a.prefix,Xt(t.innerText))),!a.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Oa(t){const e=rt(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=wa(t),o=Oa(t),s=Vt("parseNodeAttributes",{},t);let f=e.styleParser?Ea(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:f,attributes:o}},s)}const{styles:Sa}=z;function Ln(t){const e=m.autoReplaceSvg==="nest"?ze(t,{styleParser:!1}):ze(t);return~e.extra.classes.indexOf(hn)?X("generateLayersText",t,e):X("generateSvgReplacementMutation",t,e)}function _a(){return[...sr,...Ut]}function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();const n=P.documentElement.classList,r=p=>n.add("".concat(_e,"-").concat(p)),a=p=>n.remove("".concat(_e,"-").concat(p)),o=m.autoFetchSvg?_a():ln.concat(Object.keys(Sa));o.includes("fa")||o.push("fa");const s=[".".concat(hn,":not([").concat(K,"])")].concat(o.map(p=>".".concat(p,":not([").concat(K,"])"))).join(", ");if(s.length===0)return Promise.resolve();let f=[];try{f=rt(t.querySelectorAll(s))}catch{}if(f.length>0)r("pending"),a("complete");else return Promise.resolve();const d=pe.begin("onTree"),u=f.reduce((p,v)=>{try{const g=Ln(v);g&&p.push(g)}catch(g){pn||g.name==="MissingIcon"&&console.error(g)}return p},[]);return new Promise((p,v)=>{Promise.all(u).then(g=>{Fn(g,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),d(),p()})}).catch(g=>{d(),v(g)})})}function ka(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ln(t).then(n=>{n&&Fn([n],e)})}function Ta(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Kt(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Kt(a||{})),t(r,l(l({},n),{},{mask:a}))}}const Ca=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,symbol:r=!1,mask:a=null,maskId:o=null,title:s=null,titleId:f=null,classes:d=[],attributes:u={},styles:p={}}=e;if(!t)return;const{prefix:v,iconName:g,icon:_}=t;return Pt(l({type:"icon"},t),()=>(J("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?u["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(f||ft()):(u["aria-hidden"]="true",u.focusable="false")),me({icons:{main:Jt(_),mask:a?Jt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:l(l({},D),n),symbol:r,title:s,maskId:o,titleId:f,extra:{attributes:u,styles:p,classes:d}})))};var Ia={mixout(){return{icon:Ta(Ca)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ye,t.nodeCallback=ka,t}}},provides(t){t.i2svg=function(e){const{node:n=P,callback:r=()=>{}}=e;return Ye(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:o,prefix:s,transform:f,symbol:d,mask:u,maskId:p,extra:v}=n;return new Promise((g,_)=>{Promise.all([Qt(r,s),u.iconName?Qt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[F,O]=N;g([e,me({icons:{main:F,mask:O},prefix:s,iconName:r,transform:f,symbol:d,maskId:p,title:a,titleId:o,extra:v,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:s}=e;const f=Et(s);f.length>0&&(r.style=f);let d;return ce(o)&&(d=X("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:r}}}},Na={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Pt({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ra={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return Pt({type:"counter",content:t},()=>(J("beforeDOMElementCreation",{content:t,params:e}),ua({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...r]}})))}}}},Fa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,title:r=null,classes:a=[],attributes:o={},styles:s={}}=e;return Pt({type:"text",content:t},()=>(J("beforeDOMElementCreation",{content:t,params:e}),Fe({content:t,transform:l(l({},D),n),title:r,extra:{attributes:o,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:o}=n;let s=null,f=null;if(sn){const d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/d,f=u.height/d}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Fe({content:e.innerHTML,width:s,height:f,transform:a,title:r,extra:o,watchable:!0})])}}};const Ma=new RegExp('"',"ug"),Ue=[1105920,1112319],We=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ar),Ar),pr),ee=Object.keys(We).reduce((t,e)=>(t[e.toLowerCase()]=We[e],t),{}),La=Object.keys(ee).reduce((t,e)=>{const n=ee[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ja(t){const e=t.replace(Ma,""),n=Hr(e,0),r=n>=Ue[0]&&n<=Ue[1],a=e.length===2?e[0]===e[1]:!1;return{value:Xt(a?e[0]:e),isSecondary:r||a}}function Da(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(ee[n]||{})[a]||La[n]}function He(t,e){const n="".concat(Er).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const s=rt(t.children).filter(g=>g.getAttribute(Ht)===e)[0],f=q.getComputedStyle(t,e),d=f.getPropertyValue("font-family"),u=d.match(_r),p=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&v!=="none"&&v!==""){const g=f.getPropertyValue("content");let _=Da(d,p);const{value:N,isSecondary:F}=ja(g),O=u[0].startsWith("FontAwesome");let T=de(_,N),S=T;if(O){const C=Vr(N);C.iconName&&C.prefix&&(T=C.iconName,_=C.prefix)}if(T&&!F&&(!s||s.getAttribute(ie)!==_||s.getAttribute(se)!==S)){t.setAttribute(n,S),s&&t.removeChild(s);const C=Pa(),{extra:L}=C;L.attributes[Ht]=e,Qt(T,_).then(A=>{const dt=me(l(l({},C),{},{icons:{main:A,mask:Cn()},prefix:_,iconName:S,extra:L,watchable:!0})),B=P.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=dt.map(St=>ut(St)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function za(t){return Promise.all([He(t,"::before"),He(t,"::after")])}function Ya(t){return t.parentNode!==document.head&&!~Or.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $e(t){if(W)return new Promise((e,n)=>{const r=rt(t.querySelectorAll("*")).filter(Ya).map(za),a=pe.begin("searchPseudoElements");Mn(),Promise.all(r).then(()=>{a(),te(),e()}).catch(()=>{a(),te(),n()})})}var Ua={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=$e,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=P}=e;m.searchPseudoElements&&$e(n)}}};let qe=!1;var Wa={mixout(){return{dom:{unwatch(){Mn(),qe=!0}}}},hooks(){return{bootstrap(){De(Vt("mutationObserverCallbacks",{}))},noAuto(){Aa()},watch(t){const{observeMutationsRoot:e}=t;qe?te():De(Vt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ge=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ha={mixout(){return{parse:{transform:t=>Ge(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ge(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e;const s={transform:"translate(".concat(a/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(f," ").concat(d," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:p,path:v};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const Ft={x:0,y:0,width:"100%",height:"100%"};function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $a(t){return t.tag==="g"?t.children:[t]}var qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ot(n.split(" ").map(a=>a.trim())):Cn();return r.prefix||(r.prefix=G()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:s,transform:f}=e;const{width:d,icon:u}=a,{width:p,icon:v}=o,g=jr({transform:f,containerWidth:p,iconWidth:d}),_={tag:"rect",attributes:l(l({},Ft),{},{fill:"white"})},N=u.children?{children:u.children.map(Xe)}:{},F={tag:"g",attributes:l({},g.inner),children:[Xe(l({tag:u.tag,attributes:l(l({},u.attributes),g.path)},N))]},O={tag:"g",attributes:l({},g.outer),children:[F]},T="mask-".concat(s||ft()),S="clip-".concat(s||ft()),C={tag:"mask",attributes:l(l({},Ft),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,O]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:$a(v)},C]};return n.push(L,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(T,")")},Ft)}),{children:n,attributes:r}}}},Ga={provides(t){let e=!1;q.matchMedia&&(e=q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Xa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ba=[Yr,Ia,Na,Ra,Fa,Ua,Wa,Ha,qa,Ga,Xa];aa(Ba,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;const ne=M.parse;M.findIconDefinition;M.toHtml;const Va=M.icon;M.layer;M.text;M.counter;var Mt={exports:{}},Lt,Be;function Ka(){if(Be)return Lt;Be=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lt=t,Lt}var jt,Ve;function Ja(){if(Ve)return jt;Ve=1;var t=Ka();function e(){}function n(){}return n.resetWarningCache=e,jt=function(){function r(s,f,d,u,p,v){if(v!==t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},jt}var Ke;function Qa(){return Ke||(Ke=1,Mt.exports=Ja()()),Mt.exports}var Za=Qa();const x=nn(Za);var Dt={exports:{}},b={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je;function to(){if(Je)return b;Je=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),s=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(i){return i===null||typeof i!="object"?null:(i=v&&i[v]||i["@@iterator"],typeof i=="function"?i:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,F={};function O(i,c,h){this.props=i,this.context=c,this.refs=F,this.updater=h||_}O.prototype.isReactComponent={},O.prototype.setState=function(i,c){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,c,"setState")},O.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function T(){}T.prototype=O.prototype;function S(i,c,h){this.props=i,this.context=c,this.refs=F,this.updater=h||_}var C=S.prototype=new T;C.constructor=S,N(C,O.prototype),C.isPureReactComponent=!0;var L=Array.isArray,A={H:null,A:null,T:null,S:null},dt=Object.prototype.hasOwnProperty;function B(i,c,h,y,w,k){return h=k.ref,{$$typeof:t,type:i,key:c,ref:h!==void 0?h:null,props:k}}function St(i,c){return B(i.type,c,void 0,void 0,void 0,i.props)}function _t(i){return typeof i=="object"&&i!==null&&i.$$typeof===t}function Wn(i){var c={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(h){return c[h]})}var he=/\/+/g;function kt(i,c){return typeof i=="object"&&i!==null&&i.key!=null?Wn(""+i.key):c.toString(36)}function ye(){}function Hn(i){switch(i.status){case"fulfilled":return i.value;case"rejected":throw i.reason;default:switch(typeof i.status=="string"?i.then(ye,ye):(i.status="pending",i.then(function(c){i.status==="pending"&&(i.status="fulfilled",i.value=c)},function(c){i.status==="pending"&&(i.status="rejected",i.reason=c)})),i.status){case"fulfilled":return i.value;case"rejected":throw i.reason}}throw i}function Q(i,c,h,y,w){var k=typeof i;(k==="undefined"||k==="boolean")&&(i=null);var E=!1;if(i===null)E=!0;else switch(k){case"bigint":case"string":case"number":E=!0;break;case"object":switch(i.$$typeof){case t:case e:E=!0;break;case p:return E=i._init,Q(E(i._payload),c,h,y,w)}}if(E)return w=w(i),E=y===""?"."+kt(i,0):y,L(w)?(h="",E!=null&&(h=E.replace(he,"$&/")+"/"),Q(w,c,h,"",function(Gn){return Gn})):w!=null&&(_t(w)&&(w=St(w,h+(w.key==null||i&&i.key===w.key?"":(""+w.key).replace(he,"$&/")+"/")+E)),c.push(w)),1;E=0;var H=y===""?".":y+":";if(L(i))for(var I=0;I<i.length;I++)y=i[I],k=H+kt(y,I),E+=Q(y,c,h,k,w);else if(I=g(i),typeof I=="function")for(i=I.call(i),I=0;!(y=i.next()).done;)y=y.value,k=H+kt(y,I++),E+=Q(y,c,h,k,w);else if(k==="object"){if(typeof i.then=="function")return Q(Hn(i),c,h,y,w);throw c=String(i),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.")}return E}function mt(i,c,h){if(i==null)return i;var y=[],w=0;return Q(i,y,"","",function(k){return c.call(h,k,w++)}),y}function $n(i){if(i._status===-1){var c=i._result;c=c(),c.then(function(h){(i._status===0||i._status===-1)&&(i._status=1,i._result=h)},function(h){(i._status===0||i._status===-1)&&(i._status=2,i._result=h)}),i._status===-1&&(i._status=0,i._result=c)}if(i._status===1)return i._result.default;throw i._result}var be=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function qn(){}return b.Children={map:mt,forEach:function(i,c,h){mt(i,function(){c.apply(this,arguments)},h)},count:function(i){var c=0;return mt(i,function(){c++}),c},toArray:function(i){return mt(i,function(c){return c})||[]},only:function(i){if(!_t(i))throw Error("React.Children.only expected to receive a single React element child.");return i}},b.Component=O,b.Fragment=n,b.Profiler=a,b.PureComponent=S,b.StrictMode=r,b.Suspense=d,b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,b.act=function(){throw Error("act(...) is not supported in production builds of React.")},b.cache=function(i){return function(){return i.apply(null,arguments)}},b.cloneElement=function(i,c,h){if(i==null)throw Error("The argument must be a React element, but you passed "+i+".");var y=N({},i.props),w=i.key,k=void 0;if(c!=null)for(E in c.ref!==void 0&&(k=void 0),c.key!==void 0&&(w=""+c.key),c)!dt.call(c,E)||E==="key"||E==="__self"||E==="__source"||E==="ref"&&c.ref===void 0||(y[E]=c[E]);var E=arguments.length-2;if(E===1)y.children=h;else if(1<E){for(var H=Array(E),I=0;I<E;I++)H[I]=arguments[I+2];y.children=H}return B(i.type,w,void 0,void 0,k,y)},b.createContext=function(i){return i={$$typeof:s,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider=i,i.Consumer={$$typeof:o,_context:i},i},b.createElement=function(i,c,h){var y,w={},k=null;if(c!=null)for(y in c.key!==void 0&&(k=""+c.key),c)dt.call(c,y)&&y!=="key"&&y!=="__self"&&y!=="__source"&&(w[y]=c[y]);var E=arguments.length-2;if(E===1)w.children=h;else if(1<E){for(var H=Array(E),I=0;I<E;I++)H[I]=arguments[I+2];w.children=H}if(i&&i.defaultProps)for(y in E=i.defaultProps,E)w[y]===void 0&&(w[y]=E[y]);return B(i,k,void 0,void 0,null,w)},b.createRef=function(){return{current:null}},b.forwardRef=function(i){return{$$typeof:f,render:i}},b.isValidElement=_t,b.lazy=function(i){return{$$typeof:p,_payload:{_status:-1,_result:i},_init:$n}},b.memo=function(i,c){return{$$typeof:u,type:i,compare:c===void 0?null:c}},b.startTransition=function(i){var c=A.T,h={};A.T=h;try{var y=i(),w=A.S;w!==null&&w(h,y),typeof y=="object"&&y!==null&&typeof y.then=="function"&&y.then(qn,be)}catch(k){be(k)}finally{A.T=c}},b.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},b.use=function(i){return A.H.use(i)},b.useActionState=function(i,c,h){return A.H.useActionState(i,c,h)},b.useCallback=function(i,c){return A.H.useCallback(i,c)},b.useContext=function(i){return A.H.useContext(i)},b.useDebugValue=function(){},b.useDeferredValue=function(i,c){return A.H.useDeferredValue(i,c)},b.useEffect=function(i,c){return A.H.useEffect(i,c)},b.useId=function(){return A.H.useId()},b.useImperativeHandle=function(i,c,h){return A.H.useImperativeHandle(i,c,h)},b.useInsertionEffect=function(i,c){return A.H.useInsertionEffect(i,c)},b.useLayoutEffect=function(i,c){return A.H.useLayoutEffect(i,c)},b.useMemo=function(i,c){return A.H.useMemo(i,c)},b.useOptimistic=function(i,c){return A.H.useOptimistic(i,c)},b.useReducer=function(i,c,h){return A.H.useReducer(i,c,h)},b.useRef=function(i){return A.H.useRef(i)},b.useState=function(i){return A.H.useState(i)},b.useSyncExternalStore=function(i,c,h){return A.H.useSyncExternalStore(i,c,h)},b.useTransition=function(){return A.H.useTransition()},b.version="19.0.0",b}var Qe;function eo(){return Qe||(Qe=1,Dt.exports=to()),Dt.exports}var no=eo();const jn=nn(no);function Ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ze(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ro(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ao(t,e){if(t==null)return{};var n=ro(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function re(t){return oo(t)||io(t)||so(t)||fo()}function oo(t){if(Array.isArray(t))return ae(t)}function io(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function so(t,e){if(t){if(typeof t=="string")return ae(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(t,e)}}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,s=t.shake,f=t.flash,d=t.spin,u=t.spinPulse,p=t.spinReverse,v=t.pulse,g=t.fixedWidth,_=t.inverse,N=t.border,F=t.listItem,O=t.flip,T=t.size,S=t.rotation,C=t.pull,L=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":s,"fa-flash":f,"fa-spin":d,"fa-spin-reverse":p,"fa-spin-pulse":u,"fa-pulse":v,"fa-fw":g,"fa-inverse":_,"fa-border":N,"fa-li":F,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},tt(e,"fa-".concat(T),typeof T<"u"&&T!==null),tt(e,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),tt(e,"fa-pull-".concat(C),typeof C<"u"&&C!==null),tt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(L).map(function(A){return L[A]?A:null}).filter(function(A){return A})}function co(t){return t=t-0,t===t}function Dn(t){return co(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var uo=["style"];function mo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function po(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Dn(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[mo(a)]=o:e[a]=o,e},{})}function zn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(d){return zn(t,d)}),a=Object.keys(e.attributes||{}).reduce(function(d,u){var p=e.attributes[u];switch(u){case"class":d.attrs.className=p,delete e.attributes.class;break;case"style":d.attrs.style=po(p);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?d.attrs[u.toLowerCase()]=p:d.attrs[Dn(u)]=p}return d},{attrs:{}}),o=n.style,s=o===void 0?{}:o,f=ao(n,uo);return a.attrs.style=j(j({},a.attrs.style),s),t.apply(void 0,[e.tag,j(j({},a.attrs),f)].concat(re(r)))}var Yn=!1;try{Yn=!0}catch{}function go(){if(!Yn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function tn(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(t&&xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tt({},t,e):{}}var en={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Un=jn.forwardRef(function(t,e){var n=j(j({},en),t),r=n.icon,a=n.mask,o=n.symbol,s=n.className,f=n.title,d=n.titleId,u=n.maskId,p=tn(r),v=zt("classes",[].concat(re(lo(n)),re((s||"").split(" ")))),g=zt("transform",typeof n.transform=="string"?ne.transform(n.transform):n.transform),_=zt("mask",tn(a)),N=Va(p,j(j(j(j({},v),g),_),{},{symbol:o,title:f,titleId:d,maskId:u}));if(!N)return go("Could not find icon",p),null;var F=N.abstract,O={ref:e};return Object.keys(n).forEach(function(T){en.hasOwnProperty(T)||(O[T]=n[T])}),ho(F[0],O)});Un.displayName="FontAwesomeIcon";Un.propTypes={beat:x.bool,border:x.bool,beatFade:x.bool,bounce:x.bool,className:x.string,fade:x.bool,flash:x.bool,mask:x.oneOfType([x.object,x.array,x.string]),maskId:x.string,fixedWidth:x.bool,inverse:x.bool,flip:x.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.oneOfType([x.object,x.array,x.string]),listItem:x.bool,pull:x.oneOf(["right","left"]),pulse:x.bool,rotation:x.oneOf([0,90,180,270]),shake:x.bool,size:x.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.bool,spinPulse:x.bool,spinReverse:x.bool,symbol:x.oneOfType([x.bool,x.string]),title:x.string,titleId:x.string,transform:x.oneOfType([x.string,x.object]),swapOpacity:x.bool};var ho=zn.bind(null,jn.createElement);
