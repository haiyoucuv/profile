var jP=Object.defineProperty;var VP=(n,A,i)=>A in n?jP(n,A,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[A]=i;var Mn=(n,A,i)=>VP(n,typeof A!="symbol"?A+"":A,i);var DH={exports:{}},rc={},SH={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),WP=Symbol.for("react.portal"),zP=Symbol.for("react.fragment"),ZP=Symbol.for("react.strict_mode"),XP=Symbol.for("react.profiler"),$P=Symbol.for("react.provider"),A2=Symbol.for("react.context"),e2=Symbol.for("react.forward_ref"),t2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),n2=Symbol.for("react.lazy"),wG=Symbol.iterator;function r2(n){return n===null||typeof n!="object"?null:(n=wG&&n[wG]||n["@@iterator"],typeof n=="function"?n:null)}var wH={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},MH=Object.assign,RH={};function Lg(n,A,i){this.props=n,this.context=A,this.refs=RH,this.updater=i||wH}Lg.prototype.isReactComponent={};Lg.prototype.setState=function(n,A){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,A,"setState")};Lg.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function bH(){}bH.prototype=Lg.prototype;function TB(n,A,i){this.props=n,this.context=A,this.refs=RH,this.updater=i||wH}var GB=TB.prototype=new bH;GB.constructor=TB;MH(GB,Lg.prototype);GB.isPureReactComponent=!0;var MG=Array.isArray,vH=Object.prototype.hasOwnProperty,xB={current:null},NH={key:!0,ref:!0,__self:!0,__source:!0};function FH(n,A,i){var t,o={},s=null,g=null;if(A!=null)for(t in A.ref!==void 0&&(g=A.ref),A.key!==void 0&&(s=""+A.key),A)vH.call(A,t)&&!NH.hasOwnProperty(t)&&(o[t]=A[t]);var a=arguments.length-2;if(a===1)o.children=i;else if(1<a){for(var I=Array(a),_=0;_<a;_++)I[_]=arguments[_+2];o.children=I}if(n&&n.defaultProps)for(t in a=n.defaultProps,a)o[t]===void 0&&(o[t]=a[t]);return{$$typeof:$a,type:n,key:s,ref:g,props:o,_owner:xB.current}}function o2(n,A){return{$$typeof:$a,type:n.type,key:A,ref:n.ref,props:n.props,_owner:n._owner}}function kB(n){return typeof n=="object"&&n!==null&&n.$$typeof===$a}function s2(n){var A={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(i){return A[i]})}var RG=/\/+/g;function Fc(n,A){return typeof n=="object"&&n!==null&&n.key!=null?s2(""+n.key):A.toString(36)}function IC(n,A,i,t,o){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var g=!1;if(n===null)g=!0;else switch(s){case"string":case"number":g=!0;break;case"object":switch(n.$$typeof){case $a:case WP:g=!0}}if(g)return g=n,o=o(g),n=t===""?"."+Fc(g,0):t,MG(o)?(i="",n!=null&&(i=n.replace(RG,"$&/")+"/"),IC(o,A,i,"",function(_){return _})):o!=null&&(kB(o)&&(o=o2(o,i+(!o.key||g&&g.key===o.key?"":(""+o.key).replace(RG,"$&/")+"/")+n)),A.push(o)),1;if(g=0,t=t===""?".":t+":",MG(n))for(var a=0;a<n.length;a++){s=n[a];var I=t+Fc(s,a);g+=IC(s,A,i,I,o)}else if(I=r2(n),typeof I=="function")for(n=I.call(n),a=0;!(s=n.next()).done;)s=s.value,I=t+Fc(s,a++),g+=IC(s,A,i,I,o);else if(s==="object")throw A=String(n),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return g}function BI(n,A,i){if(n==null)return n;var t=[],o=0;return IC(n,t,"","",function(s){return A.call(i,s,o++)}),t}function g2(n){if(n._status===-1){var A=n._result;A=A(),A.then(function(i){(n._status===0||n._status===-1)&&(n._status=1,n._result=i)},function(i){(n._status===0||n._status===-1)&&(n._status=2,n._result=i)}),n._status===-1&&(n._status=0,n._result=A)}if(n._status===1)return n._result.default;throw n._result}var Oi={current:null},CC={transition:null},a2={ReactCurrentDispatcher:Oi,ReactCurrentBatchConfig:CC,ReactCurrentOwner:xB};function LH(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:BI,forEach:function(n,A,i){BI(n,function(){A.apply(this,arguments)},i)},count:function(n){var A=0;return BI(n,function(){A++}),A},toArray:function(n){return BI(n,function(A){return A})||[]},only:function(n){if(!kB(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=Lg;Ye.Fragment=zP;Ye.Profiler=XP;Ye.PureComponent=TB;Ye.StrictMode=ZP;Ye.Suspense=t2;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2;Ye.act=LH;Ye.cloneElement=function(n,A,i){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=MH({},n.props),o=n.key,s=n.ref,g=n._owner;if(A!=null){if(A.ref!==void 0&&(s=A.ref,g=xB.current),A.key!==void 0&&(o=""+A.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(I in A)vH.call(A,I)&&!NH.hasOwnProperty(I)&&(t[I]=A[I]===void 0&&a!==void 0?a[I]:A[I])}var I=arguments.length-2;if(I===1)t.children=i;else if(1<I){a=Array(I);for(var _=0;_<I;_++)a[_]=arguments[_+2];t.children=a}return{$$typeof:$a,type:n.type,key:o,ref:s,props:t,_owner:g}};Ye.createContext=function(n){return n={$$typeof:A2,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$P,_context:n},n.Consumer=n};Ye.createElement=FH;Ye.createFactory=function(n){var A=FH.bind(null,n);return A.type=n,A};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:e2,render:n}};Ye.isValidElement=kB;Ye.lazy=function(n){return{$$typeof:n2,_payload:{_status:-1,_result:n},_init:g2}};Ye.memo=function(n,A){return{$$typeof:i2,type:n,compare:A===void 0?null:A}};Ye.startTransition=function(n){var A=CC.transition;CC.transition={};try{n()}finally{CC.transition=A}};Ye.unstable_act=LH;Ye.useCallback=function(n,A){return Oi.current.useCallback(n,A)};Ye.useContext=function(n){return Oi.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return Oi.current.useDeferredValue(n)};Ye.useEffect=function(n,A){return Oi.current.useEffect(n,A)};Ye.useId=function(){return Oi.current.useId()};Ye.useImperativeHandle=function(n,A,i){return Oi.current.useImperativeHandle(n,A,i)};Ye.useInsertionEffect=function(n,A){return Oi.current.useInsertionEffect(n,A)};Ye.useLayoutEffect=function(n,A){return Oi.current.useLayoutEffect(n,A)};Ye.useMemo=function(n,A){return Oi.current.useMemo(n,A)};Ye.useReducer=function(n,A,i){return Oi.current.useReducer(n,A,i)};Ye.useRef=function(n){return Oi.current.useRef(n)};Ye.useState=function(n){return Oi.current.useState(n)};Ye.useSyncExternalStore=function(n,A,i){return Oi.current.useSyncExternalStore(n,A,i)};Ye.useTransition=function(){return Oi.current.useTransition()};Ye.version="18.3.1";SH.exports=Ye;var UH=SH.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I2=UH,C2=Symbol.for("react.element"),c2=Symbol.for("react.fragment"),_2=Object.prototype.hasOwnProperty,p2=I2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B2={key:!0,ref:!0,__self:!0,__source:!0};function TH(n,A,i){var t,o={},s=null,g=null;i!==void 0&&(s=""+i),A.key!==void 0&&(s=""+A.key),A.ref!==void 0&&(g=A.ref);for(t in A)_2.call(A,t)&&!B2.hasOwnProperty(t)&&(o[t]=A[t]);if(n&&n.defaultProps)for(t in A=n.defaultProps,A)o[t]===void 0&&(o[t]=A[t]);return{$$typeof:C2,type:n,key:s,ref:g,props:o,_owner:p2.current}}rc.Fragment=c2;rc.jsx=TH;rc.jsxs=TH;DH.exports=rc;var gz=DH.exports,GH={exports:{}},Qn={},xH={exports:{}},kH={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function A(H,oA){var pA=H.length;H.push(oA);A:for(;0<pA;){var bA=pA-1>>>1,OA=H[bA];if(0<o(OA,oA))H[bA]=oA,H[pA]=OA,pA=bA;else break A}}function i(H){return H.length===0?null:H[0]}function t(H){if(H.length===0)return null;var oA=H[0],pA=H.pop();if(pA!==oA){H[0]=pA;A:for(var bA=0,OA=H.length,Ne=OA>>>1;bA<Ne;){var rA=2*(bA+1)-1,uA=H[rA],TA=rA+1,MA=H[TA];if(0>o(uA,pA))TA<OA&&0>o(MA,uA)?(H[bA]=MA,H[TA]=pA,bA=TA):(H[bA]=uA,H[rA]=pA,bA=rA);else if(TA<OA&&0>o(MA,pA))H[bA]=MA,H[TA]=pA,bA=TA;else break A}}return oA}function o(H,oA){var pA=H.sortIndex-oA.sortIndex;return pA!==0?pA:H.id-oA.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var g=Date,a=g.now();n.unstable_now=function(){return g.now()-a}}var I=[],_=[],p=1,B=null,l=3,Q=!1,h=!1,y=!1,u=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(H){for(var oA=i(_);oA!==null;){if(oA.callback===null)t(_);else if(oA.startTime<=H)t(_),oA.sortIndex=oA.expirationTime,A(I,oA);else break;oA=i(_)}}function D(H){if(y=!1,m(H),!h)if(i(I)!==null)h=!0,tA(L);else{var oA=i(_);oA!==null&&fA(D,oA.startTime-H)}}function L(H,oA){h=!1,y&&(y=!1,E(U),U=-1),Q=!0;var pA=l;try{for(m(oA),B=i(I);B!==null&&(!(B.expirationTime>oA)||H&&!G());){var bA=B.callback;if(typeof bA=="function"){B.callback=null,l=B.priorityLevel;var OA=bA(B.expirationTime<=oA);oA=n.unstable_now(),typeof OA=="function"?B.callback=OA:B===i(I)&&t(I),m(oA)}else t(I);B=i(I)}if(B!==null)var Ne=!0;else{var rA=i(_);rA!==null&&fA(D,rA.startTime-oA),Ne=!1}return Ne}finally{B=null,l=pA,Q=!1}}var v=!1,N=null,U=-1,b=5,S=-1;function G(){return!(n.unstable_now()-S<b)}function nA(){if(N!==null){var H=n.unstable_now();S=H;var oA=!0;try{oA=N(!0,H)}finally{oA?X():(v=!1,N=null)}}else v=!1}var X;if(typeof f=="function")X=function(){f(nA)};else if(typeof MessageChannel<"u"){var gA=new MessageChannel,EA=gA.port2;gA.port1.onmessage=nA,X=function(){EA.postMessage(null)}}else X=function(){u(nA,0)};function tA(H){N=H,v||(v=!0,X())}function fA(H,oA){U=u(function(){H(n.unstable_now())},oA)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){h||Q||(h=!0,tA(L))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return l},n.unstable_getFirstCallbackNode=function(){return i(I)},n.unstable_next=function(H){switch(l){case 1:case 2:case 3:var oA=3;break;default:oA=l}var pA=l;l=oA;try{return H()}finally{l=pA}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,oA){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var pA=l;l=H;try{return oA()}finally{l=pA}},n.unstable_scheduleCallback=function(H,oA,pA){var bA=n.unstable_now();switch(typeof pA=="object"&&pA!==null?(pA=pA.delay,pA=typeof pA=="number"&&0<pA?bA+pA:bA):pA=bA,H){case 1:var OA=-1;break;case 2:OA=250;break;case 5:OA=1073741823;break;case 4:OA=1e4;break;default:OA=5e3}return OA=pA+OA,H={id:p++,callback:oA,priorityLevel:H,startTime:pA,expirationTime:OA,sortIndex:-1},pA>bA?(H.sortIndex=pA,A(_,H),i(I)===null&&H===i(_)&&(y?(E(U),U=-1):y=!0,fA(D,pA-bA))):(H.sortIndex=OA,A(I,H),h||Q||(h=!0,tA(L))),H},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(H){var oA=l;return function(){var pA=l;l=oA;try{return H.apply(this,arguments)}finally{l=pA}}}})(kH);xH.exports=kH;var l2=xH.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E2=UH,En=l2;function hA(n){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+n,i=1;i<arguments.length;i++)A+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+n+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HH=new Set,Na={};function ws(n,A){Qg(n,A),Qg(n+"Capture",A)}function Qg(n,A){for(Na[n]=A,n=0;n<A.length;n++)HH.add(A[n])}var to=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W_=Object.prototype.hasOwnProperty,Q2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bG={},vG={};function d2(n){return W_.call(vG,n)?!0:W_.call(bG,n)?!1:Q2.test(n)?vG[n]=!0:(bG[n]=!0,!1)}function h2(n,A,i,t){if(i!==null&&i.type===0)return!1;switch(typeof A){case"function":case"symbol":return!0;case"boolean":return t?!1:i!==null?!i.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function u2(n,A,i,t){if(A===null||typeof A>"u"||h2(n,A,i,t))return!0;if(t)return!1;if(i!==null)switch(i.type){case 3:return!A;case 4:return A===!1;case 5:return isNaN(A);case 6:return isNaN(A)||1>A}return!1}function Yi(n,A,i,t,o,s,g){this.acceptsBooleans=A===2||A===3||A===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=n,this.type=A,this.sanitizeURL=s,this.removeEmptyString=g}var Mi={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mi[n]=new Yi(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var A=n[0];Mi[A]=new Yi(A,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mi[n]=new Yi(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mi[n]=new Yi(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mi[n]=new Yi(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mi[n]=new Yi(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mi[n]=new Yi(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mi[n]=new Yi(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mi[n]=new Yi(n,5,!1,n.toLowerCase(),null,!1,!1)});var HB=/[\-:]([a-z])/g;function KB(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var A=n.replace(HB,KB);Mi[A]=new Yi(A,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var A=n.replace(HB,KB);Mi[A]=new Yi(A,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var A=n.replace(HB,KB);Mi[A]=new Yi(A,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mi[n]=new Yi(n,1,!1,n.toLowerCase(),null,!1,!1)});Mi.xlinkHref=new Yi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mi[n]=new Yi(n,1,!1,n.toLowerCase(),null,!0,!0)});function PB(n,A,i,t){var o=Mi.hasOwnProperty(A)?Mi[A]:null;(o!==null?o.type!==0:t||!(2<A.length)||A[0]!=="o"&&A[0]!=="O"||A[1]!=="n"&&A[1]!=="N")&&(u2(A,i,o,t)&&(i=null),t||o===null?d2(A)&&(i===null?n.removeAttribute(A):n.setAttribute(A,""+i)):o.mustUseProperty?n[o.propertyName]=i===null?o.type===3?!1:"":i:(A=o.attributeName,t=o.attributeNamespace,i===null?n.removeAttribute(A):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,t?n.setAttributeNS(t,A,i):n.setAttribute(A,i))))}var ao=E2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lI=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),JB=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),KH=Symbol.for("react.provider"),PH=Symbol.for("react.context"),OB=Symbol.for("react.forward_ref"),Z_=Symbol.for("react.suspense"),X_=Symbol.for("react.suspense_list"),YB=Symbol.for("react.memo"),fo=Symbol.for("react.lazy"),JH=Symbol.for("react.offscreen"),NG=Symbol.iterator;function zg(n){return n===null||typeof n!="object"?null:(n=NG&&n[NG]||n["@@iterator"],typeof n=="function"?n:null)}var Ot=Object.assign,Lc;function _a(n){if(Lc===void 0)try{throw Error()}catch(i){var A=i.stack.trim().match(/\n( *(at )?)/);Lc=A&&A[1]||""}return`
`+Lc+n}var Uc=!1;function Tc(n,A){if(!n||Uc)return"";Uc=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(A)if(A=function(){throw Error()},Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(_){var t=_}Reflect.construct(n,[],A)}else{try{A.call()}catch(_){t=_}n.call(A.prototype)}else{try{throw Error()}catch(_){t=_}n()}}catch(_){if(_&&t&&typeof _.stack=="string"){for(var o=_.stack.split(`
`),s=t.stack.split(`
`),g=o.length-1,a=s.length-1;1<=g&&0<=a&&o[g]!==s[a];)a--;for(;1<=g&&0<=a;g--,a--)if(o[g]!==s[a]){if(g!==1||a!==1)do if(g--,a--,0>a||o[g]!==s[a]){var I=`
`+o[g].replace(" at new "," at ");return n.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",n.displayName)),I}while(1<=g&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=i}return(n=n?n.displayName||n.name:"")?_a(n):""}function f2(n){switch(n.tag){case 5:return _a(n.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return n=Tc(n.type,!1),n;case 11:return n=Tc(n.type.render,!1),n;case 1:return n=Tc(n.type,!0),n;default:return""}}function $_(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ws:return"Fragment";case Vs:return"Portal";case z_:return"Profiler";case JB:return"StrictMode";case Z_:return"Suspense";case X_:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case PH:return(n.displayName||"Context")+".Consumer";case KH:return(n._context.displayName||"Context")+".Provider";case OB:var A=n.render;return n=n.displayName,n||(n=A.displayName||A.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case YB:return A=n.displayName||null,A!==null?A:$_(n.type)||"Memo";case fo:A=n._payload,n=n._init;try{return $_(n(A))}catch{}}return null}function y2(n){var A=n.type;switch(n.tag){case 24:return"Cache";case 9:return(A.displayName||"Context")+".Consumer";case 10:return(A._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=A.render,n=n.displayName||n.name||"",A.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return A;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $_(A);case 8:return A===JB?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A}return null}function Po(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function OH(n){var A=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(A==="checkbox"||A==="radio")}function m2(n){var A=OH(n)?"checked":"value",i=Object.getOwnPropertyDescriptor(n.constructor.prototype,A),t=""+n[A];if(!n.hasOwnProperty(A)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,s=i.set;return Object.defineProperty(n,A,{configurable:!0,get:function(){return o.call(this)},set:function(g){t=""+g,s.call(this,g)}}),Object.defineProperty(n,A,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(g){t=""+g},stopTracking:function(){n._valueTracker=null,delete n[A]}}}}function EI(n){n._valueTracker||(n._valueTracker=m2(n))}function YH(n){if(!n)return!1;var A=n._valueTracker;if(!A)return!0;var i=A.getValue(),t="";return n&&(t=OH(n)?n.checked?"true":"false":n.value),n=t,n!==i?(A.setValue(n),!0):!1}function RC(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ap(n,A){var i=A.checked;return Ot({},A,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??n._wrapperState.initialChecked})}function FG(n,A){var i=A.defaultValue==null?"":A.defaultValue,t=A.checked!=null?A.checked:A.defaultChecked;i=Po(A.value!=null?A.value:i),n._wrapperState={initialChecked:t,initialValue:i,controlled:A.type==="checkbox"||A.type==="radio"?A.checked!=null:A.value!=null}}function qH(n,A){A=A.checked,A!=null&&PB(n,"checked",A,!1)}function ep(n,A){qH(n,A);var i=Po(A.value),t=A.type;if(i!=null)t==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+i):n.value!==""+i&&(n.value=""+i);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}A.hasOwnProperty("value")?tp(n,A.type,i):A.hasOwnProperty("defaultValue")&&tp(n,A.type,Po(A.defaultValue)),A.checked==null&&A.defaultChecked!=null&&(n.defaultChecked=!!A.defaultChecked)}function LG(n,A,i){if(A.hasOwnProperty("value")||A.hasOwnProperty("defaultValue")){var t=A.type;if(!(t!=="submit"&&t!=="reset"||A.value!==void 0&&A.value!==null))return;A=""+n._wrapperState.initialValue,i||A===n.value||(n.value=A),n.defaultValue=A}i=n.name,i!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,i!==""&&(n.name=i)}function tp(n,A,i){(A!=="number"||RC(n.ownerDocument)!==n)&&(i==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+i&&(n.defaultValue=""+i))}var pa=Array.isArray;function sg(n,A,i,t){if(n=n.options,A){A={};for(var o=0;o<i.length;o++)A["$"+i[o]]=!0;for(i=0;i<n.length;i++)o=A.hasOwnProperty("$"+n[i].value),n[i].selected!==o&&(n[i].selected=o),o&&t&&(n[i].defaultSelected=!0)}else{for(i=""+Po(i),A=null,o=0;o<n.length;o++){if(n[o].value===i){n[o].selected=!0,t&&(n[o].defaultSelected=!0);return}A!==null||n[o].disabled||(A=n[o])}A!==null&&(A.selected=!0)}}function ip(n,A){if(A.dangerouslySetInnerHTML!=null)throw Error(hA(91));return Ot({},A,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function UG(n,A){var i=A.value;if(i==null){if(i=A.children,A=A.defaultValue,i!=null){if(A!=null)throw Error(hA(92));if(pa(i)){if(1<i.length)throw Error(hA(93));i=i[0]}A=i}A==null&&(A=""),i=A}n._wrapperState={initialValue:Po(i)}}function jH(n,A){var i=Po(A.value),t=Po(A.defaultValue);i!=null&&(i=""+i,i!==n.value&&(n.value=i),A.defaultValue==null&&n.defaultValue!==i&&(n.defaultValue=i)),t!=null&&(n.defaultValue=""+t)}function TG(n){var A=n.textContent;A===n._wrapperState.initialValue&&A!==""&&A!==null&&(n.value=A)}function VH(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(n,A){return n==null||n==="http://www.w3.org/1999/xhtml"?VH(A):n==="http://www.w3.org/2000/svg"&&A==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var QI,WH=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(A,i,t,o){MSApp.execUnsafeLocalFunction(function(){return n(A,i,t,o)})}:n}(function(n,A){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=A;else{for(QI=QI||document.createElement("div"),QI.innerHTML="<svg>"+A.valueOf().toString()+"</svg>",A=QI.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;A.firstChild;)n.appendChild(A.firstChild)}});function Fa(n,A){if(A){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=A;return}}n.textContent=A}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D2=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(n){D2.forEach(function(A){A=A+n.charAt(0).toUpperCase()+n.substring(1),ha[A]=ha[n]})});function zH(n,A,i){return A==null||typeof A=="boolean"||A===""?"":i||typeof A!="number"||A===0||ha.hasOwnProperty(n)&&ha[n]?(""+A).trim():A+"px"}function ZH(n,A){n=n.style;for(var i in A)if(A.hasOwnProperty(i)){var t=i.indexOf("--")===0,o=zH(i,A[i],t);i==="float"&&(i="cssFloat"),t?n.setProperty(i,o):n[i]=o}}var S2=Ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(n,A){if(A){if(S2[n]&&(A.children!=null||A.dangerouslySetInnerHTML!=null))throw Error(hA(137,n));if(A.dangerouslySetInnerHTML!=null){if(A.children!=null)throw Error(hA(60));if(typeof A.dangerouslySetInnerHTML!="object"||!("__html"in A.dangerouslySetInnerHTML))throw Error(hA(61))}if(A.style!=null&&typeof A.style!="object")throw Error(hA(62))}}function op(n,A){if(n.indexOf("-")===-1)return typeof A.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function qB(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gp=null,gg=null,ag=null;function GG(n){if(n=tI(n)){if(typeof gp!="function")throw Error(hA(280));var A=n.stateNode;A&&(A=Ic(A),gp(n.stateNode,n.type,A))}}function XH(n){gg?ag?ag.push(n):ag=[n]:gg=n}function $H(){if(gg){var n=gg,A=ag;if(ag=gg=null,GG(n),A)for(n=0;n<A.length;n++)GG(A[n])}}function AK(n,A){return n(A)}function eK(){}var Gc=!1;function tK(n,A,i){if(Gc)return n(A,i);Gc=!0;try{return AK(n,A,i)}finally{Gc=!1,(gg!==null||ag!==null)&&(eK(),$H())}}function La(n,A){var i=n.stateNode;if(i===null)return null;var t=Ic(i);if(t===null)return null;i=t[A];A:switch(A){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break A;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(hA(231,A,typeof i));return i}var ap=!1;if(to)try{var Zg={};Object.defineProperty(Zg,"passive",{get:function(){ap=!0}}),window.addEventListener("test",Zg,Zg),window.removeEventListener("test",Zg,Zg)}catch{ap=!1}function w2(n,A,i,t,o,s,g,a,I){var _=Array.prototype.slice.call(arguments,3);try{A.apply(i,_)}catch(p){this.onError(p)}}var ua=!1,bC=null,vC=!1,Ip=null,M2={onError:function(n){ua=!0,bC=n}};function R2(n,A,i,t,o,s,g,a,I){ua=!1,bC=null,w2.apply(M2,arguments)}function b2(n,A,i,t,o,s,g,a,I){if(R2.apply(this,arguments),ua){if(ua){var _=bC;ua=!1,bC=null}else throw Error(hA(198));vC||(vC=!0,Ip=_)}}function Ms(n){var A=n,i=n;if(n.alternate)for(;A.return;)A=A.return;else{n=A;do A=n,A.flags&4098&&(i=A.return),n=A.return;while(n)}return A.tag===3?i:null}function iK(n){if(n.tag===13){var A=n.memoizedState;if(A===null&&(n=n.alternate,n!==null&&(A=n.memoizedState)),A!==null)return A.dehydrated}return null}function xG(n){if(Ms(n)!==n)throw Error(hA(188))}function v2(n){var A=n.alternate;if(!A){if(A=Ms(n),A===null)throw Error(hA(188));return A!==n?null:n}for(var i=n,t=A;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(t=o.return,t!==null){i=t;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return xG(o),n;if(s===t)return xG(o),A;s=s.sibling}throw Error(hA(188))}if(i.return!==t.return)i=o,t=s;else{for(var g=!1,a=o.child;a;){if(a===i){g=!0,i=o,t=s;break}if(a===t){g=!0,t=o,i=s;break}a=a.sibling}if(!g){for(a=s.child;a;){if(a===i){g=!0,i=s,t=o;break}if(a===t){g=!0,t=s,i=o;break}a=a.sibling}if(!g)throw Error(hA(189))}}if(i.alternate!==t)throw Error(hA(190))}if(i.tag!==3)throw Error(hA(188));return i.stateNode.current===i?n:A}function nK(n){return n=v2(n),n!==null?rK(n):null}function rK(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var A=rK(n);if(A!==null)return A;n=n.sibling}return null}var oK=En.unstable_scheduleCallback,kG=En.unstable_cancelCallback,N2=En.unstable_shouldYield,F2=En.unstable_requestPaint,Zt=En.unstable_now,L2=En.unstable_getCurrentPriorityLevel,jB=En.unstable_ImmediatePriority,sK=En.unstable_UserBlockingPriority,NC=En.unstable_NormalPriority,U2=En.unstable_LowPriority,gK=En.unstable_IdlePriority,oc=null,Mr=null;function T2(n){if(Mr&&typeof Mr.onCommitFiberRoot=="function")try{Mr.onCommitFiberRoot(oc,n,void 0,(n.current.flags&128)===128)}catch{}}var sr=Math.clz32?Math.clz32:k2,G2=Math.log,x2=Math.LN2;function k2(n){return n>>>=0,n===0?32:31-(G2(n)/x2|0)|0}var dI=64,hI=4194304;function Ba(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function FC(n,A){var i=n.pendingLanes;if(i===0)return 0;var t=0,o=n.suspendedLanes,s=n.pingedLanes,g=i&268435455;if(g!==0){var a=g&~o;a!==0?t=Ba(a):(s&=g,s!==0&&(t=Ba(s)))}else g=i&~o,g!==0?t=Ba(g):s!==0&&(t=Ba(s));if(t===0)return 0;if(A!==0&&A!==t&&!(A&o)&&(o=t&-t,s=A&-A,o>=s||o===16&&(s&4194240)!==0))return A;if(t&4&&(t|=i&16),A=n.entangledLanes,A!==0)for(n=n.entanglements,A&=t;0<A;)i=31-sr(A),o=1<<i,t|=n[i],A&=~o;return t}function H2(n,A){switch(n){case 1:case 2:case 4:return A+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K2(n,A){for(var i=n.suspendedLanes,t=n.pingedLanes,o=n.expirationTimes,s=n.pendingLanes;0<s;){var g=31-sr(s),a=1<<g,I=o[g];I===-1?(!(a&i)||a&t)&&(o[g]=H2(a,A)):I<=A&&(n.expiredLanes|=a),s&=~a}}function Cp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function aK(){var n=dI;return dI<<=1,!(dI&4194240)&&(dI=64),n}function xc(n){for(var A=[],i=0;31>i;i++)A.push(n);return A}function AI(n,A,i){n.pendingLanes|=A,A!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,A=31-sr(A),n[A]=i}function P2(n,A){var i=n.pendingLanes&~A;n.pendingLanes=A,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=A,n.mutableReadLanes&=A,n.entangledLanes&=A,A=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<i;){var o=31-sr(i),s=1<<o;A[o]=0,t[o]=-1,n[o]=-1,i&=~s}}function VB(n,A){var i=n.entangledLanes|=A;for(n=n.entanglements;i;){var t=31-sr(i),o=1<<t;o&A|n[t]&A&&(n[t]|=A),i&=~o}}var pt=0;function IK(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var CK,WB,cK,_K,pK,cp=!1,uI=[],No=null,Fo=null,Lo=null,Ua=new Map,Ta=new Map,mo=[],J2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function HG(n,A){switch(n){case"focusin":case"focusout":No=null;break;case"dragenter":case"dragleave":Fo=null;break;case"mouseover":case"mouseout":Lo=null;break;case"pointerover":case"pointerout":Ua.delete(A.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(A.pointerId)}}function Xg(n,A,i,t,o,s){return n===null||n.nativeEvent!==s?(n={blockedOn:A,domEventName:i,eventSystemFlags:t,nativeEvent:s,targetContainers:[o]},A!==null&&(A=tI(A),A!==null&&WB(A)),n):(n.eventSystemFlags|=t,A=n.targetContainers,o!==null&&A.indexOf(o)===-1&&A.push(o),n)}function O2(n,A,i,t,o){switch(A){case"focusin":return No=Xg(No,n,A,i,t,o),!0;case"dragenter":return Fo=Xg(Fo,n,A,i,t,o),!0;case"mouseover":return Lo=Xg(Lo,n,A,i,t,o),!0;case"pointerover":var s=o.pointerId;return Ua.set(s,Xg(Ua.get(s)||null,n,A,i,t,o)),!0;case"gotpointercapture":return s=o.pointerId,Ta.set(s,Xg(Ta.get(s)||null,n,A,i,t,o)),!0}return!1}function BK(n){var A=Is(n.target);if(A!==null){var i=Ms(A);if(i!==null){if(A=i.tag,A===13){if(A=iK(i),A!==null){n.blockedOn=A,pK(n.priority,function(){cK(i)});return}}else if(A===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cC(n){if(n.blockedOn!==null)return!1;for(var A=n.targetContainers;0<A.length;){var i=_p(n.domEventName,n.eventSystemFlags,A[0],n.nativeEvent);if(i===null){i=n.nativeEvent;var t=new i.constructor(i.type,i);sp=t,i.target.dispatchEvent(t),sp=null}else return A=tI(i),A!==null&&WB(A),n.blockedOn=i,!1;A.shift()}return!0}function KG(n,A,i){cC(n)&&i.delete(A)}function Y2(){cp=!1,No!==null&&cC(No)&&(No=null),Fo!==null&&cC(Fo)&&(Fo=null),Lo!==null&&cC(Lo)&&(Lo=null),Ua.forEach(KG),Ta.forEach(KG)}function $g(n,A){n.blockedOn===A&&(n.blockedOn=null,cp||(cp=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Y2)))}function Ga(n){function A(o){return $g(o,n)}if(0<uI.length){$g(uI[0],n);for(var i=1;i<uI.length;i++){var t=uI[i];t.blockedOn===n&&(t.blockedOn=null)}}for(No!==null&&$g(No,n),Fo!==null&&$g(Fo,n),Lo!==null&&$g(Lo,n),Ua.forEach(A),Ta.forEach(A),i=0;i<mo.length;i++)t=mo[i],t.blockedOn===n&&(t.blockedOn=null);for(;0<mo.length&&(i=mo[0],i.blockedOn===null);)BK(i),i.blockedOn===null&&mo.shift()}var Ig=ao.ReactCurrentBatchConfig,LC=!0;function q2(n,A,i,t){var o=pt,s=Ig.transition;Ig.transition=null;try{pt=1,zB(n,A,i,t)}finally{pt=o,Ig.transition=s}}function j2(n,A,i,t){var o=pt,s=Ig.transition;Ig.transition=null;try{pt=4,zB(n,A,i,t)}finally{pt=o,Ig.transition=s}}function zB(n,A,i,t){if(LC){var o=_p(n,A,i,t);if(o===null)Vc(n,A,t,UC,i),HG(n,t);else if(O2(o,n,A,i,t))t.stopPropagation();else if(HG(n,t),A&4&&-1<J2.indexOf(n)){for(;o!==null;){var s=tI(o);if(s!==null&&CK(s),s=_p(n,A,i,t),s===null&&Vc(n,A,t,UC,i),s===o)break;o=s}o!==null&&t.stopPropagation()}else Vc(n,A,t,null,i)}}var UC=null;function _p(n,A,i,t){if(UC=null,n=qB(t),n=Is(n),n!==null)if(A=Ms(n),A===null)n=null;else if(i=A.tag,i===13){if(n=iK(A),n!==null)return n;n=null}else if(i===3){if(A.stateNode.current.memoizedState.isDehydrated)return A.tag===3?A.stateNode.containerInfo:null;n=null}else A!==n&&(n=null);return UC=n,null}function lK(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L2()){case jB:return 1;case sK:return 4;case NC:case U2:return 16;case gK:return 536870912;default:return 16}default:return 16}}var Mo=null,ZB=null,_C=null;function EK(){if(_C)return _C;var n,A=ZB,i=A.length,t,o="value"in Mo?Mo.value:Mo.textContent,s=o.length;for(n=0;n<i&&A[n]===o[n];n++);var g=i-n;for(t=1;t<=g&&A[i-t]===o[s-t];t++);return _C=o.slice(n,1<t?1-t:void 0)}function pC(n){var A=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&A===13&&(n=13)):n=A,n===10&&(n=13),32<=n||n===13?n:0}function fI(){return!0}function PG(){return!1}function dn(n){function A(i,t,o,s,g){this._reactName=i,this._targetInst=o,this.type=t,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(i=n[a],this[a]=i?i(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fI:PG,this.isPropagationStopped=PG,this}return Ot(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=fI)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=fI)},persist:function(){},isPersistent:fI}),A}var Ug={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},XB=dn(Ug),eI=Ot({},Ug,{view:0,detail:0}),V2=dn(eI),kc,Hc,Aa,sc=Ot({},eI,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$B,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(kc=n.screenX-Aa.screenX,Hc=n.screenY-Aa.screenY):Hc=kc=0,Aa=n),kc)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),JG=dn(sc),W2=Ot({},sc,{dataTransfer:0}),z2=dn(W2),Z2=Ot({},eI,{relatedTarget:0}),Kc=dn(Z2),X2=Ot({},Ug,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=dn(X2),AJ=Ot({},Ug,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),eJ=dn(AJ),tJ=Ot({},Ug,{data:0}),OG=dn(tJ),iJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nJ={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rJ={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oJ(n){var A=this.nativeEvent;return A.getModifierState?A.getModifierState(n):(n=rJ[n])?!!A[n]:!1}function $B(){return oJ}var sJ=Ot({},eI,{key:function(n){if(n.key){var A=iJ[n.key]||n.key;if(A!=="Unidentified")return A}return n.type==="keypress"?(n=pC(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nJ[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$B,charCode:function(n){return n.type==="keypress"?pC(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pC(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gJ=dn(sJ),aJ=Ot({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),YG=dn(aJ),IJ=Ot({},eI,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$B}),CJ=dn(IJ),cJ=Ot({},Ug,{propertyName:0,elapsedTime:0,pseudoElement:0}),_J=dn(cJ),pJ=Ot({},sc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),BJ=dn(pJ),lJ=[9,13,27,32],Al=to&&"CompositionEvent"in window,fa=null;to&&"documentMode"in document&&(fa=document.documentMode);var EJ=to&&"TextEvent"in window&&!fa,QK=to&&(!Al||fa&&8<fa&&11>=fa),qG=" ",jG=!1;function dK(n,A){switch(n){case"keyup":return lJ.indexOf(A.keyCode)!==-1;case"keydown":return A.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hK(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function QJ(n,A){switch(n){case"compositionend":return hK(A);case"keypress":return A.which!==32?null:(jG=!0,qG);case"textInput":return n=A.data,n===qG&&jG?null:n;default:return null}}function dJ(n,A){if(zs)return n==="compositionend"||!Al&&dK(n,A)?(n=EK(),_C=ZB=Mo=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(A.ctrlKey||A.altKey||A.metaKey)||A.ctrlKey&&A.altKey){if(A.char&&1<A.char.length)return A.char;if(A.which)return String.fromCharCode(A.which)}return null;case"compositionend":return QK&&A.locale!=="ko"?null:A.data;default:return null}}var hJ={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function VG(n){var A=n&&n.nodeName&&n.nodeName.toLowerCase();return A==="input"?!!hJ[n.type]:A==="textarea"}function uK(n,A,i,t){XH(t),A=TC(A,"onChange"),0<A.length&&(i=new XB("onChange","change",null,i,t),n.push({event:i,listeners:A}))}var ya=null,xa=null;function uJ(n){NK(n,0)}function gc(n){var A=$s(n);if(YH(A))return n}function fJ(n,A){if(n==="change")return A}var fK=!1;if(to){var Pc;if(to){var Jc="oninput"in document;if(!Jc){var WG=document.createElement("div");WG.setAttribute("oninput","return;"),Jc=typeof WG.oninput=="function"}Pc=Jc}else Pc=!1;fK=Pc&&(!document.documentMode||9<document.documentMode)}function zG(){ya&&(ya.detachEvent("onpropertychange",yK),xa=ya=null)}function yK(n){if(n.propertyName==="value"&&gc(xa)){var A=[];uK(A,xa,n,qB(n)),tK(uJ,A)}}function yJ(n,A,i){n==="focusin"?(zG(),ya=A,xa=i,ya.attachEvent("onpropertychange",yK)):n==="focusout"&&zG()}function mJ(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(xa)}function DJ(n,A){if(n==="click")return gc(A)}function SJ(n,A){if(n==="input"||n==="change")return gc(A)}function wJ(n,A){return n===A&&(n!==0||1/n===1/A)||n!==n&&A!==A}var Ir=typeof Object.is=="function"?Object.is:wJ;function ka(n,A){if(Ir(n,A))return!0;if(typeof n!="object"||n===null||typeof A!="object"||A===null)return!1;var i=Object.keys(n),t=Object.keys(A);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var o=i[t];if(!W_.call(A,o)||!Ir(n[o],A[o]))return!1}return!0}function ZG(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function XG(n,A){var i=ZG(n);n=0;for(var t;i;){if(i.nodeType===3){if(t=n+i.textContent.length,n<=A&&t>=A)return{node:i,offset:A-n};n=t}A:{for(;i;){if(i.nextSibling){i=i.nextSibling;break A}i=i.parentNode}i=void 0}i=ZG(i)}}function mK(n,A){return n&&A?n===A?!0:n&&n.nodeType===3?!1:A&&A.nodeType===3?mK(n,A.parentNode):"contains"in n?n.contains(A):n.compareDocumentPosition?!!(n.compareDocumentPosition(A)&16):!1:!1}function DK(){for(var n=window,A=RC();A instanceof n.HTMLIFrameElement;){try{var i=typeof A.contentWindow.location.href=="string"}catch{i=!1}if(i)n=A.contentWindow;else break;A=RC(n.document)}return A}function el(n){var A=n&&n.nodeName&&n.nodeName.toLowerCase();return A&&(A==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||A==="textarea"||n.contentEditable==="true")}function MJ(n){var A=DK(),i=n.focusedElem,t=n.selectionRange;if(A!==i&&i&&i.ownerDocument&&mK(i.ownerDocument.documentElement,i)){if(t!==null&&el(i)){if(A=t.start,n=t.end,n===void 0&&(n=A),"selectionStart"in i)i.selectionStart=A,i.selectionEnd=Math.min(n,i.value.length);else if(n=(A=i.ownerDocument||document)&&A.defaultView||window,n.getSelection){n=n.getSelection();var o=i.textContent.length,s=Math.min(t.start,o);t=t.end===void 0?s:Math.min(t.end,o),!n.extend&&s>t&&(o=t,t=s,s=o),o=XG(i,s);var g=XG(i,t);o&&g&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(A=A.createRange(),A.setStart(o.node,o.offset),n.removeAllRanges(),s>t?(n.addRange(A),n.extend(g.node,g.offset)):(A.setEnd(g.node,g.offset),n.addRange(A)))}}for(A=[],n=i;n=n.parentNode;)n.nodeType===1&&A.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<A.length;i++)n=A[i],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var RJ=to&&"documentMode"in document&&11>=document.documentMode,Zs=null,pp=null,ma=null,Bp=!1;function $G(n,A,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Bp||Zs==null||Zs!==RC(t)||(t=Zs,"selectionStart"in t&&el(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ma&&ka(ma,t)||(ma=t,t=TC(pp,"onSelect"),0<t.length&&(A=new XB("onSelect","select",null,A,i),n.push({event:A,listeners:t}),A.target=Zs)))}function yI(n,A){var i={};return i[n.toLowerCase()]=A.toLowerCase(),i["Webkit"+n]="webkit"+A,i["Moz"+n]="moz"+A,i}var Xs={animationend:yI("Animation","AnimationEnd"),animationiteration:yI("Animation","AnimationIteration"),animationstart:yI("Animation","AnimationStart"),transitionend:yI("Transition","TransitionEnd")},Oc={},SK={};to&&(SK=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ac(n){if(Oc[n])return Oc[n];if(!Xs[n])return n;var A=Xs[n],i;for(i in A)if(A.hasOwnProperty(i)&&i in SK)return Oc[n]=A[i];return n}var wK=ac("animationend"),MK=ac("animationiteration"),RK=ac("animationstart"),bK=ac("transitionend"),vK=new Map,Ax="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yo(n,A){vK.set(n,A),ws(A,[n])}for(var Yc=0;Yc<Ax.length;Yc++){var qc=Ax[Yc],bJ=qc.toLowerCase(),vJ=qc[0].toUpperCase()+qc.slice(1);Yo(bJ,"on"+vJ)}Yo(wK,"onAnimationEnd");Yo(MK,"onAnimationIteration");Yo(RK,"onAnimationStart");Yo("dblclick","onDoubleClick");Yo("focusin","onFocus");Yo("focusout","onBlur");Yo(bK,"onTransitionEnd");Qg("onMouseEnter",["mouseout","mouseover"]);Qg("onMouseLeave",["mouseout","mouseover"]);Qg("onPointerEnter",["pointerout","pointerover"]);Qg("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NJ=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function ex(n,A,i){var t=n.type||"unknown-event";n.currentTarget=i,b2(t,A,void 0,n),n.currentTarget=null}function NK(n,A){A=(A&4)!==0;for(var i=0;i<n.length;i++){var t=n[i],o=t.event;t=t.listeners;A:{var s=void 0;if(A)for(var g=t.length-1;0<=g;g--){var a=t[g],I=a.instance,_=a.currentTarget;if(a=a.listener,I!==s&&o.isPropagationStopped())break A;ex(o,a,_),s=I}else for(g=0;g<t.length;g++){if(a=t[g],I=a.instance,_=a.currentTarget,a=a.listener,I!==s&&o.isPropagationStopped())break A;ex(o,a,_),s=I}}}if(vC)throw n=Ip,vC=!1,Ip=null,n}function Mt(n,A){var i=A[hp];i===void 0&&(i=A[hp]=new Set);var t=n+"__bubble";i.has(t)||(FK(A,n,2,!1),i.add(t))}function jc(n,A,i){var t=0;A&&(t|=4),FK(i,n,t,A)}var mI="_reactListening"+Math.random().toString(36).slice(2);function Ha(n){if(!n[mI]){n[mI]=!0,HH.forEach(function(i){i!=="selectionchange"&&(NJ.has(i)||jc(i,!1,n),jc(i,!0,n))});var A=n.nodeType===9?n:n.ownerDocument;A===null||A[mI]||(A[mI]=!0,jc("selectionchange",!1,A))}}function FK(n,A,i,t){switch(lK(A)){case 1:var o=q2;break;case 4:o=j2;break;default:o=zB}i=o.bind(null,A,i,n),o=void 0,!ap||A!=="touchstart"&&A!=="touchmove"&&A!=="wheel"||(o=!0),t?o!==void 0?n.addEventListener(A,i,{capture:!0,passive:o}):n.addEventListener(A,i,!0):o!==void 0?n.addEventListener(A,i,{passive:o}):n.addEventListener(A,i,!1)}function Vc(n,A,i,t,o){var s=t;if(!(A&1)&&!(A&2)&&t!==null)A:for(;;){if(t===null)return;var g=t.tag;if(g===3||g===4){var a=t.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(g===4)for(g=t.return;g!==null;){var I=g.tag;if((I===3||I===4)&&(I=g.stateNode.containerInfo,I===o||I.nodeType===8&&I.parentNode===o))return;g=g.return}for(;a!==null;){if(g=Is(a),g===null)return;if(I=g.tag,I===5||I===6){t=s=g;continue A}a=a.parentNode}}t=t.return}tK(function(){var _=s,p=qB(i),B=[];A:{var l=vK.get(n);if(l!==void 0){var Q=XB,h=n;switch(n){case"keypress":if(pC(i)===0)break A;case"keydown":case"keyup":Q=gJ;break;case"focusin":h="focus",Q=Kc;break;case"focusout":h="blur",Q=Kc;break;case"beforeblur":case"afterblur":Q=Kc;break;case"click":if(i.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=JG;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=z2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=CJ;break;case wK:case MK:case RK:Q=$2;break;case bK:Q=_J;break;case"scroll":Q=V2;break;case"wheel":Q=BJ;break;case"copy":case"cut":case"paste":Q=eJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=YG}var y=(A&4)!==0,u=!y&&n==="scroll",E=y?l!==null?l+"Capture":null:l;y=[];for(var f=_,m;f!==null;){m=f;var D=m.stateNode;if(m.tag===5&&D!==null&&(m=D,E!==null&&(D=La(f,E),D!=null&&y.push(Ka(f,D,m)))),u)break;f=f.return}0<y.length&&(l=new Q(l,h,null,i,p),B.push({event:l,listeners:y}))}}if(!(A&7)){A:{if(l=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",l&&i!==sp&&(h=i.relatedTarget||i.fromElement)&&(Is(h)||h[io]))break A;if((Q||l)&&(l=p.window===p?p:(l=p.ownerDocument)?l.defaultView||l.parentWindow:window,Q?(h=i.relatedTarget||i.toElement,Q=_,h=h?Is(h):null,h!==null&&(u=Ms(h),h!==u||h.tag!==5&&h.tag!==6)&&(h=null)):(Q=null,h=_),Q!==h)){if(y=JG,D="onMouseLeave",E="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(y=YG,D="onPointerLeave",E="onPointerEnter",f="pointer"),u=Q==null?l:$s(Q),m=h==null?l:$s(h),l=new y(D,f+"leave",Q,i,p),l.target=u,l.relatedTarget=m,D=null,Is(p)===_&&(y=new y(E,f+"enter",h,i,p),y.target=m,y.relatedTarget=u,D=y),u=D,Q&&h)e:{for(y=Q,E=h,f=0,m=y;m;m=vs(m))f++;for(m=0,D=E;D;D=vs(D))m++;for(;0<f-m;)y=vs(y),f--;for(;0<m-f;)E=vs(E),m--;for(;f--;){if(y===E||E!==null&&y===E.alternate)break e;y=vs(y),E=vs(E)}y=null}else y=null;Q!==null&&tx(B,l,Q,y,!1),h!==null&&u!==null&&tx(B,u,h,y,!0)}}A:{if(l=_?$s(_):window,Q=l.nodeName&&l.nodeName.toLowerCase(),Q==="select"||Q==="input"&&l.type==="file")var L=fJ;else if(VG(l))if(fK)L=SJ;else{L=mJ;var v=yJ}else(Q=l.nodeName)&&Q.toLowerCase()==="input"&&(l.type==="checkbox"||l.type==="radio")&&(L=DJ);if(L&&(L=L(n,_))){uK(B,L,i,p);break A}v&&v(n,l,_),n==="focusout"&&(v=l._wrapperState)&&v.controlled&&l.type==="number"&&tp(l,"number",l.value)}switch(v=_?$s(_):window,n){case"focusin":(VG(v)||v.contentEditable==="true")&&(Zs=v,pp=_,ma=null);break;case"focusout":ma=pp=Zs=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,$G(B,i,p);break;case"selectionchange":if(RJ)break;case"keydown":case"keyup":$G(B,i,p)}var N;if(Al)A:{switch(n){case"compositionstart":var U="onCompositionStart";break A;case"compositionend":U="onCompositionEnd";break A;case"compositionupdate":U="onCompositionUpdate";break A}U=void 0}else zs?dK(n,i)&&(U="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(U="onCompositionStart");U&&(QK&&i.locale!=="ko"&&(zs||U!=="onCompositionStart"?U==="onCompositionEnd"&&zs&&(N=EK()):(Mo=p,ZB="value"in Mo?Mo.value:Mo.textContent,zs=!0)),v=TC(_,U),0<v.length&&(U=new OG(U,n,null,i,p),B.push({event:U,listeners:v}),N?U.data=N:(N=hK(i),N!==null&&(U.data=N)))),(N=EJ?QJ(n,i):dJ(n,i))&&(_=TC(_,"onBeforeInput"),0<_.length&&(p=new OG("onBeforeInput","beforeinput",null,i,p),B.push({event:p,listeners:_}),p.data=N))}NK(B,A)})}function Ka(n,A,i){return{instance:n,listener:A,currentTarget:i}}function TC(n,A){for(var i=A+"Capture",t=[];n!==null;){var o=n,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=La(n,i),s!=null&&t.unshift(Ka(n,s,o)),s=La(n,A),s!=null&&t.push(Ka(n,s,o))),n=n.return}return t}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tx(n,A,i,t,o){for(var s=A._reactName,g=[];i!==null&&i!==t;){var a=i,I=a.alternate,_=a.stateNode;if(I!==null&&I===t)break;a.tag===5&&_!==null&&(a=_,o?(I=La(i,s),I!=null&&g.unshift(Ka(i,I,a))):o||(I=La(i,s),I!=null&&g.push(Ka(i,I,a)))),i=i.return}g.length!==0&&n.push({event:A,listeners:g})}var FJ=/\r\n?/g,LJ=/\u0000|\uFFFD/g;function ix(n){return(typeof n=="string"?n:""+n).replace(FJ,`
`).replace(LJ,"")}function DI(n,A,i){if(A=ix(A),ix(n)!==A&&i)throw Error(hA(425))}function GC(){}var lp=null,Ep=null;function Qp(n,A){return n==="textarea"||n==="noscript"||typeof A.children=="string"||typeof A.children=="number"||typeof A.dangerouslySetInnerHTML=="object"&&A.dangerouslySetInnerHTML!==null&&A.dangerouslySetInnerHTML.__html!=null}var dp=typeof setTimeout=="function"?setTimeout:void 0,UJ=typeof clearTimeout=="function"?clearTimeout:void 0,nx=typeof Promise=="function"?Promise:void 0,TJ=typeof queueMicrotask=="function"?queueMicrotask:typeof nx<"u"?function(n){return nx.resolve(null).then(n).catch(GJ)}:dp;function GJ(n){setTimeout(function(){throw n})}function Wc(n,A){var i=A,t=0;do{var o=i.nextSibling;if(n.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(t===0){n.removeChild(o),Ga(A);return}t--}else i!=="$"&&i!=="$?"&&i!=="$!"||t++;i=o}while(i);Ga(A)}function Uo(n){for(;n!=null;n=n.nextSibling){var A=n.nodeType;if(A===1||A===3)break;if(A===8){if(A=n.data,A==="$"||A==="$!"||A==="$?")break;if(A==="/$")return null}}return n}function rx(n){n=n.previousSibling;for(var A=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"){if(A===0)return n;A--}else i==="/$"&&A++}n=n.previousSibling}return null}var Tg=Math.random().toString(36).slice(2),yr="__reactFiber$"+Tg,Pa="__reactProps$"+Tg,io="__reactContainer$"+Tg,hp="__reactEvents$"+Tg,xJ="__reactListeners$"+Tg,kJ="__reactHandles$"+Tg;function Is(n){var A=n[yr];if(A)return A;for(var i=n.parentNode;i;){if(A=i[io]||i[yr]){if(i=A.alternate,A.child!==null||i!==null&&i.child!==null)for(n=rx(n);n!==null;){if(i=n[yr])return i;n=rx(n)}return A}n=i,i=n.parentNode}return null}function tI(n){return n=n[yr]||n[io],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(hA(33))}function Ic(n){return n[Pa]||null}var up=[],Ag=-1;function qo(n){return{current:n}}function bt(n){0>Ag||(n.current=up[Ag],up[Ag]=null,Ag--)}function ut(n,A){Ag++,up[Ag]=n.current,n.current=A}var Jo={},Gi=qo(Jo),nn=qo(!1),Es=Jo;function dg(n,A){var i=n.type.contextTypes;if(!i)return Jo;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===A)return t.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in i)o[s]=A[s];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=A,n.__reactInternalMemoizedMaskedChildContext=o),o}function rn(n){return n=n.childContextTypes,n!=null}function xC(){bt(nn),bt(Gi)}function ox(n,A,i){if(Gi.current!==Jo)throw Error(hA(168));ut(Gi,A),ut(nn,i)}function LK(n,A,i){var t=n.stateNode;if(A=A.childContextTypes,typeof t.getChildContext!="function")return i;t=t.getChildContext();for(var o in t)if(!(o in A))throw Error(hA(108,y2(n)||"Unknown",o));return Ot({},i,t)}function kC(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jo,Es=Gi.current,ut(Gi,n),ut(nn,nn.current),!0}function sx(n,A,i){var t=n.stateNode;if(!t)throw Error(hA(169));i?(n=LK(n,A,Es),t.__reactInternalMemoizedMergedChildContext=n,bt(nn),bt(Gi),ut(Gi,n)):bt(nn),ut(nn,i)}var qr=null,Cc=!1,zc=!1;function UK(n){qr===null?qr=[n]:qr.push(n)}function HJ(n){Cc=!0,UK(n)}function jo(){if(!zc&&qr!==null){zc=!0;var n=0,A=pt;try{var i=qr;for(pt=1;n<i.length;n++){var t=i[n];do t=t(!0);while(t!==null)}qr=null,Cc=!1}catch(o){throw qr!==null&&(qr=qr.slice(n+1)),oK(jB,jo),o}finally{pt=A,zc=!1}}return null}var eg=[],tg=0,HC=null,KC=0,Nn=[],Fn=0,Qs=null,jr=1,Vr="";function ns(n,A){eg[tg++]=KC,eg[tg++]=HC,HC=n,KC=A}function TK(n,A,i){Nn[Fn++]=jr,Nn[Fn++]=Vr,Nn[Fn++]=Qs,Qs=n;var t=jr;n=Vr;var o=32-sr(t)-1;t&=~(1<<o),i+=1;var s=32-sr(A)+o;if(30<s){var g=o-o%5;s=(t&(1<<g)-1).toString(32),t>>=g,o-=g,jr=1<<32-sr(A)+o|i<<o|t,Vr=s+n}else jr=1<<s|i<<o|t,Vr=n}function tl(n){n.return!==null&&(ns(n,1),TK(n,1,0))}function il(n){for(;n===HC;)HC=eg[--tg],eg[tg]=null,KC=eg[--tg],eg[tg]=null;for(;n===Qs;)Qs=Nn[--Fn],Nn[Fn]=null,Vr=Nn[--Fn],Nn[Fn]=null,jr=Nn[--Fn],Nn[Fn]=null}var ln=null,Bn=null,Ht=!1,ir=null;function GK(n,A){var i=Tn(5,null,null,0);i.elementType="DELETED",i.stateNode=A,i.return=n,A=n.deletions,A===null?(n.deletions=[i],n.flags|=16):A.push(i)}function gx(n,A){switch(n.tag){case 5:var i=n.type;return A=A.nodeType!==1||i.toLowerCase()!==A.nodeName.toLowerCase()?null:A,A!==null?(n.stateNode=A,ln=n,Bn=Uo(A.firstChild),!0):!1;case 6:return A=n.pendingProps===""||A.nodeType!==3?null:A,A!==null?(n.stateNode=A,ln=n,Bn=null,!0):!1;case 13:return A=A.nodeType!==8?null:A,A!==null?(i=Qs!==null?{id:jr,overflow:Vr}:null,n.memoizedState={dehydrated:A,treeContext:i,retryLane:1073741824},i=Tn(18,null,null,0),i.stateNode=A,i.return=n,n.child=i,ln=n,Bn=null,!0):!1;default:return!1}}function fp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yp(n){if(Ht){var A=Bn;if(A){var i=A;if(!gx(n,A)){if(fp(n))throw Error(hA(418));A=Uo(i.nextSibling);var t=ln;A&&gx(n,A)?GK(t,i):(n.flags=n.flags&-4097|2,Ht=!1,ln=n)}}else{if(fp(n))throw Error(hA(418));n.flags=n.flags&-4097|2,Ht=!1,ln=n}}}function ax(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function SI(n){if(n!==ln)return!1;if(!Ht)return ax(n),Ht=!0,!1;var A;if((A=n.tag!==3)&&!(A=n.tag!==5)&&(A=n.type,A=A!=="head"&&A!=="body"&&!Qp(n.type,n.memoizedProps)),A&&(A=Bn)){if(fp(n))throw xK(),Error(hA(418));for(;A;)GK(n,A),A=Uo(A.nextSibling)}if(ax(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(hA(317));A:{for(n=n.nextSibling,A=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"){if(A===0){Bn=Uo(n.nextSibling);break A}A--}else i!=="$"&&i!=="$!"&&i!=="$?"||A++}n=n.nextSibling}Bn=null}}else Bn=ln?Uo(n.stateNode.nextSibling):null;return!0}function xK(){for(var n=Bn;n;)n=Uo(n.nextSibling)}function hg(){Bn=ln=null,Ht=!1}function nl(n){ir===null?ir=[n]:ir.push(n)}var KJ=ao.ReactCurrentBatchConfig;function ea(n,A,i){if(n=i.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(hA(309));var t=i.stateNode}if(!t)throw Error(hA(147,n));var o=t,s=""+n;return A!==null&&A.ref!==null&&typeof A.ref=="function"&&A.ref._stringRef===s?A.ref:(A=function(g){var a=o.refs;g===null?delete a[s]:a[s]=g},A._stringRef=s,A)}if(typeof n!="string")throw Error(hA(284));if(!i._owner)throw Error(hA(290,n))}return n}function wI(n,A){throw n=Object.prototype.toString.call(A),Error(hA(31,n==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":n))}function Ix(n){var A=n._init;return A(n._payload)}function kK(n){function A(E,f){if(n){var m=E.deletions;m===null?(E.deletions=[f],E.flags|=16):m.push(f)}}function i(E,f){if(!n)return null;for(;f!==null;)A(E,f),f=f.sibling;return null}function t(E,f){for(E=new Map;f!==null;)f.key!==null?E.set(f.key,f):E.set(f.index,f),f=f.sibling;return E}function o(E,f){return E=ko(E,f),E.index=0,E.sibling=null,E}function s(E,f,m){return E.index=m,n?(m=E.alternate,m!==null?(m=m.index,m<f?(E.flags|=2,f):m):(E.flags|=2,f)):(E.flags|=1048576,f)}function g(E){return n&&E.alternate===null&&(E.flags|=2),E}function a(E,f,m,D){return f===null||f.tag!==6?(f=i_(m,E.mode,D),f.return=E,f):(f=o(f,m),f.return=E,f)}function I(E,f,m,D){var L=m.type;return L===Ws?p(E,f,m.props.children,D,m.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fo&&Ix(L)===f.type)?(D=o(f,m.props),D.ref=ea(E,f,m),D.return=E,D):(D=uC(m.type,m.key,m.props,null,E.mode,D),D.ref=ea(E,f,m),D.return=E,D)}function _(E,f,m,D){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=n_(m,E.mode,D),f.return=E,f):(f=o(f,m.children||[]),f.return=E,f)}function p(E,f,m,D,L){return f===null||f.tag!==7?(f=Bs(m,E.mode,D,L),f.return=E,f):(f=o(f,m),f.return=E,f)}function B(E,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=i_(""+f,E.mode,m),f.return=E,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lI:return m=uC(f.type,f.key,f.props,null,E.mode,m),m.ref=ea(E,null,f),m.return=E,m;case Vs:return f=n_(f,E.mode,m),f.return=E,f;case fo:var D=f._init;return B(E,D(f._payload),m)}if(pa(f)||zg(f))return f=Bs(f,E.mode,m,null),f.return=E,f;wI(E,f)}return null}function l(E,f,m,D){var L=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return L!==null?null:a(E,f,""+m,D);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lI:return m.key===L?I(E,f,m,D):null;case Vs:return m.key===L?_(E,f,m,D):null;case fo:return L=m._init,l(E,f,L(m._payload),D)}if(pa(m)||zg(m))return L!==null?null:p(E,f,m,D,null);wI(E,m)}return null}function Q(E,f,m,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(m)||null,a(f,E,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case lI:return E=E.get(D.key===null?m:D.key)||null,I(f,E,D,L);case Vs:return E=E.get(D.key===null?m:D.key)||null,_(f,E,D,L);case fo:var v=D._init;return Q(E,f,m,v(D._payload),L)}if(pa(D)||zg(D))return E=E.get(m)||null,p(f,E,D,L,null);wI(f,D)}return null}function h(E,f,m,D){for(var L=null,v=null,N=f,U=f=0,b=null;N!==null&&U<m.length;U++){N.index>U?(b=N,N=null):b=N.sibling;var S=l(E,N,m[U],D);if(S===null){N===null&&(N=b);break}n&&N&&S.alternate===null&&A(E,N),f=s(S,f,U),v===null?L=S:v.sibling=S,v=S,N=b}if(U===m.length)return i(E,N),Ht&&ns(E,U),L;if(N===null){for(;U<m.length;U++)N=B(E,m[U],D),N!==null&&(f=s(N,f,U),v===null?L=N:v.sibling=N,v=N);return Ht&&ns(E,U),L}for(N=t(E,N);U<m.length;U++)b=Q(N,E,U,m[U],D),b!==null&&(n&&b.alternate!==null&&N.delete(b.key===null?U:b.key),f=s(b,f,U),v===null?L=b:v.sibling=b,v=b);return n&&N.forEach(function(G){return A(E,G)}),Ht&&ns(E,U),L}function y(E,f,m,D){var L=zg(m);if(typeof L!="function")throw Error(hA(150));if(m=L.call(m),m==null)throw Error(hA(151));for(var v=L=null,N=f,U=f=0,b=null,S=m.next();N!==null&&!S.done;U++,S=m.next()){N.index>U?(b=N,N=null):b=N.sibling;var G=l(E,N,S.value,D);if(G===null){N===null&&(N=b);break}n&&N&&G.alternate===null&&A(E,N),f=s(G,f,U),v===null?L=G:v.sibling=G,v=G,N=b}if(S.done)return i(E,N),Ht&&ns(E,U),L;if(N===null){for(;!S.done;U++,S=m.next())S=B(E,S.value,D),S!==null&&(f=s(S,f,U),v===null?L=S:v.sibling=S,v=S);return Ht&&ns(E,U),L}for(N=t(E,N);!S.done;U++,S=m.next())S=Q(N,E,U,S.value,D),S!==null&&(n&&S.alternate!==null&&N.delete(S.key===null?U:S.key),f=s(S,f,U),v===null?L=S:v.sibling=S,v=S);return n&&N.forEach(function(nA){return A(E,nA)}),Ht&&ns(E,U),L}function u(E,f,m,D){if(typeof m=="object"&&m!==null&&m.type===Ws&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lI:A:{for(var L=m.key,v=f;v!==null;){if(v.key===L){if(L=m.type,L===Ws){if(v.tag===7){i(E,v.sibling),f=o(v,m.props.children),f.return=E,E=f;break A}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fo&&Ix(L)===v.type){i(E,v.sibling),f=o(v,m.props),f.ref=ea(E,v,m),f.return=E,E=f;break A}i(E,v);break}else A(E,v);v=v.sibling}m.type===Ws?(f=Bs(m.props.children,E.mode,D,m.key),f.return=E,E=f):(D=uC(m.type,m.key,m.props,null,E.mode,D),D.ref=ea(E,f,m),D.return=E,E=D)}return g(E);case Vs:A:{for(v=m.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){i(E,f.sibling),f=o(f,m.children||[]),f.return=E,E=f;break A}else{i(E,f);break}else A(E,f);f=f.sibling}f=n_(m,E.mode,D),f.return=E,E=f}return g(E);case fo:return v=m._init,u(E,f,v(m._payload),D)}if(pa(m))return h(E,f,m,D);if(zg(m))return y(E,f,m,D);wI(E,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(i(E,f.sibling),f=o(f,m),f.return=E,E=f):(i(E,f),f=i_(m,E.mode,D),f.return=E,E=f),g(E)):i(E,f)}return u}var ug=kK(!0),HK=kK(!1),PC=qo(null),JC=null,ig=null,rl=null;function ol(){rl=ig=JC=null}function sl(n){var A=PC.current;bt(PC),n._currentValue=A}function mp(n,A,i){for(;n!==null;){var t=n.alternate;if((n.childLanes&A)!==A?(n.childLanes|=A,t!==null&&(t.childLanes|=A)):t!==null&&(t.childLanes&A)!==A&&(t.childLanes|=A),n===i)break;n=n.return}}function Cg(n,A){JC=n,rl=ig=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&A&&(tn=!0),n.firstContext=null)}function Pn(n){var A=n._currentValue;if(rl!==n)if(n={context:n,memoizedValue:A,next:null},ig===null){if(JC===null)throw Error(hA(308));ig=n,JC.dependencies={lanes:0,firstContext:n}}else ig=ig.next=n;return A}var Cs=null;function gl(n){Cs===null?Cs=[n]:Cs.push(n)}function KK(n,A,i,t){var o=A.interleaved;return o===null?(i.next=i,gl(A)):(i.next=o.next,o.next=i),A.interleaved=i,no(n,t)}function no(n,A){n.lanes|=A;var i=n.alternate;for(i!==null&&(i.lanes|=A),i=n,n=n.return;n!==null;)n.childLanes|=A,i=n.alternate,i!==null&&(i.childLanes|=A),i=n,n=n.return;return i.tag===3?i.stateNode:null}var yo=!1;function al(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function PK(n,A){n=n.updateQueue,A.updateQueue===n&&(A.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $r(n,A){return{eventTime:n,lane:A,tag:0,payload:null,callback:null,next:null}}function To(n,A,i){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,it&2){var o=t.pending;return o===null?A.next=A:(A.next=o.next,o.next=A),t.pending=A,no(n,i)}return o=t.interleaved,o===null?(A.next=A,gl(t)):(A.next=o.next,o.next=A),t.interleaved=A,no(n,i)}function BC(n,A,i){if(A=A.updateQueue,A!==null&&(A=A.shared,(i&4194240)!==0)){var t=A.lanes;t&=n.pendingLanes,i|=t,A.lanes=i,VB(n,i)}}function Cx(n,A){var i=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?o=s=g:s=s.next=g,i=i.next}while(i!==null);s===null?o=s=A:s=s.next=A}else o=s=A;i={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:t.shared,effects:t.effects},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=A:n.next=A,i.lastBaseUpdate=A}function OC(n,A,i,t){var o=n.updateQueue;yo=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var I=a,_=I.next;I.next=null,g===null?s=_:g.next=_,g=I;var p=n.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==g&&(a===null?p.firstBaseUpdate=_:a.next=_,p.lastBaseUpdate=I))}if(s!==null){var B=o.baseState;g=0,p=_=I=null,a=s;do{var l=a.lane,Q=a.eventTime;if((t&l)===l){p!==null&&(p=p.next={eventTime:Q,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var h=n,y=a;switch(l=A,Q=i,y.tag){case 1:if(h=y.payload,typeof h=="function"){B=h.call(Q,B,l);break A}B=h;break A;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,l=typeof h=="function"?h.call(Q,B,l):h,l==null)break A;B=Ot({},B,l);break A;case 2:yo=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,l=o.effects,l===null?o.effects=[a]:l.push(a))}else Q={eventTime:Q,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(_=p=Q,I=B):p=p.next=Q,g|=l;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;l=a,a=l.next,l.next=null,o.lastBaseUpdate=l,o.shared.pending=null}}while(!0);if(p===null&&(I=B),o.baseState=I,o.firstBaseUpdate=_,o.lastBaseUpdate=p,A=o.shared.interleaved,A!==null){o=A;do g|=o.lane,o=o.next;while(o!==A)}else s===null&&(o.shared.lanes=0);hs|=g,n.lanes=g,n.memoizedState=B}}function cx(n,A,i){if(n=A.effects,A.effects=null,n!==null)for(A=0;A<n.length;A++){var t=n[A],o=t.callback;if(o!==null){if(t.callback=null,t=i,typeof o!="function")throw Error(hA(191,o));o.call(t)}}}var iI={},Rr=qo(iI),Ja=qo(iI),Oa=qo(iI);function cs(n){if(n===iI)throw Error(hA(174));return n}function Il(n,A){switch(ut(Oa,A),ut(Ja,n),ut(Rr,iI),n=A.nodeType,n){case 9:case 11:A=(A=A.documentElement)?A.namespaceURI:np(null,"");break;default:n=n===8?A.parentNode:A,A=n.namespaceURI||null,n=n.tagName,A=np(A,n)}bt(Rr),ut(Rr,A)}function fg(){bt(Rr),bt(Ja),bt(Oa)}function JK(n){cs(Oa.current);var A=cs(Rr.current),i=np(A,n.type);A!==i&&(ut(Ja,n),ut(Rr,i))}function Cl(n){Ja.current===n&&(bt(Rr),bt(Ja))}var Pt=qo(0);function YC(n){for(var A=n;A!==null;){if(A.tag===13){var i=A.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return A}else if(A.tag===19&&A.memoizedProps.revealOrder!==void 0){if(A.flags&128)return A}else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===n)break;for(;A.sibling===null;){if(A.return===null||A.return===n)return null;A=A.return}A.sibling.return=A.return,A=A.sibling}return null}var Zc=[];function cl(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var lC=ao.ReactCurrentDispatcher,Xc=ao.ReactCurrentBatchConfig,ds=0,Jt=null,ni=null,ci=null,qC=!1,Da=!1,Ya=0,PJ=0;function Ni(){throw Error(hA(321))}function _l(n,A){if(A===null)return!1;for(var i=0;i<A.length&&i<n.length;i++)if(!Ir(n[i],A[i]))return!1;return!0}function pl(n,A,i,t,o,s){if(ds=s,Jt=A,A.memoizedState=null,A.updateQueue=null,A.lanes=0,lC.current=n===null||n.memoizedState===null?qJ:jJ,n=i(t,o),Da){s=0;do{if(Da=!1,Ya=0,25<=s)throw Error(hA(301));s+=1,ci=ni=null,A.updateQueue=null,lC.current=VJ,n=i(t,o)}while(Da)}if(lC.current=jC,A=ni!==null&&ni.next!==null,ds=0,ci=ni=Jt=null,qC=!1,A)throw Error(hA(300));return n}function Bl(){var n=Ya!==0;return Ya=0,n}function fr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ci===null?Jt.memoizedState=ci=n:ci=ci.next=n,ci}function Jn(){if(ni===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=ni.next;var A=ci===null?Jt.memoizedState:ci.next;if(A!==null)ci=A,ni=n;else{if(n===null)throw Error(hA(310));ni=n,n={memoizedState:ni.memoizedState,baseState:ni.baseState,baseQueue:ni.baseQueue,queue:ni.queue,next:null},ci===null?Jt.memoizedState=ci=n:ci=ci.next=n}return ci}function qa(n,A){return typeof A=="function"?A(n):A}function $c(n){var A=Jn(),i=A.queue;if(i===null)throw Error(hA(311));i.lastRenderedReducer=n;var t=ni,o=t.baseQueue,s=i.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,i.pending=null}if(o!==null){s=o.next,t=t.baseState;var a=g=null,I=null,_=s;do{var p=_.lane;if((ds&p)===p)I!==null&&(I=I.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),t=_.hasEagerState?_.eagerState:n(t,_.action);else{var B={lane:p,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};I===null?(a=I=B,g=t):I=I.next=B,Jt.lanes|=p,hs|=p}_=_.next}while(_!==null&&_!==s);I===null?g=t:I.next=a,Ir(t,A.memoizedState)||(tn=!0),A.memoizedState=t,A.baseState=g,A.baseQueue=I,i.lastRenderedState=t}if(n=i.interleaved,n!==null){o=n;do s=o.lane,Jt.lanes|=s,hs|=s,o=o.next;while(o!==n)}else o===null&&(i.lanes=0);return[A.memoizedState,i.dispatch]}function A_(n){var A=Jn(),i=A.queue;if(i===null)throw Error(hA(311));i.lastRenderedReducer=n;var t=i.dispatch,o=i.pending,s=A.memoizedState;if(o!==null){i.pending=null;var g=o=o.next;do s=n(s,g.action),g=g.next;while(g!==o);Ir(s,A.memoizedState)||(tn=!0),A.memoizedState=s,A.baseQueue===null&&(A.baseState=s),i.lastRenderedState=s}return[s,t]}function OK(){}function YK(n,A){var i=Jt,t=Jn(),o=A(),s=!Ir(t.memoizedState,o);if(s&&(t.memoizedState=o,tn=!0),t=t.queue,ll(VK.bind(null,i,t,n),[n]),t.getSnapshot!==A||s||ci!==null&&ci.memoizedState.tag&1){if(i.flags|=2048,ja(9,jK.bind(null,i,t,o,A),void 0,null),pi===null)throw Error(hA(349));ds&30||qK(i,A,o)}return o}function qK(n,A,i){n.flags|=16384,n={getSnapshot:A,value:i},A=Jt.updateQueue,A===null?(A={lastEffect:null,stores:null},Jt.updateQueue=A,A.stores=[n]):(i=A.stores,i===null?A.stores=[n]:i.push(n))}function jK(n,A,i,t){A.value=i,A.getSnapshot=t,WK(A)&&zK(n)}function VK(n,A,i){return i(function(){WK(A)&&zK(n)})}function WK(n){var A=n.getSnapshot;n=n.value;try{var i=A();return!Ir(n,i)}catch{return!0}}function zK(n){var A=no(n,1);A!==null&&gr(A,n,1,-1)}function _x(n){var A=fr();return typeof n=="function"&&(n=n()),A.memoizedState=A.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},A.queue=n,n=n.dispatch=YJ.bind(null,Jt,n),[A.memoizedState,n]}function ja(n,A,i,t){return n={tag:n,create:A,destroy:i,deps:t,next:null},A=Jt.updateQueue,A===null?(A={lastEffect:null,stores:null},Jt.updateQueue=A,A.lastEffect=n.next=n):(i=A.lastEffect,i===null?A.lastEffect=n.next=n:(t=i.next,i.next=n,n.next=t,A.lastEffect=n)),n}function ZK(){return Jn().memoizedState}function EC(n,A,i,t){var o=fr();Jt.flags|=n,o.memoizedState=ja(1|A,i,void 0,t===void 0?null:t)}function cc(n,A,i,t){var o=Jn();t=t===void 0?null:t;var s=void 0;if(ni!==null){var g=ni.memoizedState;if(s=g.destroy,t!==null&&_l(t,g.deps)){o.memoizedState=ja(A,i,s,t);return}}Jt.flags|=n,o.memoizedState=ja(1|A,i,s,t)}function px(n,A){return EC(8390656,8,n,A)}function ll(n,A){return cc(2048,8,n,A)}function XK(n,A){return cc(4,2,n,A)}function $K(n,A){return cc(4,4,n,A)}function A1(n,A){if(typeof A=="function")return n=n(),A(n),function(){A(null)};if(A!=null)return n=n(),A.current=n,function(){A.current=null}}function e1(n,A,i){return i=i!=null?i.concat([n]):null,cc(4,4,A1.bind(null,A,n),i)}function El(){}function t1(n,A){var i=Jn();A=A===void 0?null:A;var t=i.memoizedState;return t!==null&&A!==null&&_l(A,t[1])?t[0]:(i.memoizedState=[n,A],n)}function i1(n,A){var i=Jn();A=A===void 0?null:A;var t=i.memoizedState;return t!==null&&A!==null&&_l(A,t[1])?t[0]:(n=n(),i.memoizedState=[n,A],n)}function n1(n,A,i){return ds&21?(Ir(i,A)||(i=aK(),Jt.lanes|=i,hs|=i,n.baseState=!0),A):(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=i)}function JJ(n,A){var i=pt;pt=i!==0&&4>i?i:4,n(!0);var t=Xc.transition;Xc.transition={};try{n(!1),A()}finally{pt=i,Xc.transition=t}}function r1(){return Jn().memoizedState}function OJ(n,A,i){var t=xo(n);if(i={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null},o1(n))s1(A,i);else if(i=KK(n,A,i,t),i!==null){var o=Ji();gr(i,n,t,o),g1(i,A,t)}}function YJ(n,A,i){var t=xo(n),o={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null};if(o1(n))s1(A,o);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=A.lastRenderedReducer,s!==null))try{var g=A.lastRenderedState,a=s(g,i);if(o.hasEagerState=!0,o.eagerState=a,Ir(a,g)){var I=A.interleaved;I===null?(o.next=o,gl(A)):(o.next=I.next,I.next=o),A.interleaved=o;return}}catch{}finally{}i=KK(n,A,o,t),i!==null&&(o=Ji(),gr(i,n,t,o),g1(i,A,t))}}function o1(n){var A=n.alternate;return n===Jt||A!==null&&A===Jt}function s1(n,A){Da=qC=!0;var i=n.pending;i===null?A.next=A:(A.next=i.next,i.next=A),n.pending=A}function g1(n,A,i){if(i&4194240){var t=A.lanes;t&=n.pendingLanes,i|=t,A.lanes=i,VB(n,i)}}var jC={readContext:Pn,useCallback:Ni,useContext:Ni,useEffect:Ni,useImperativeHandle:Ni,useInsertionEffect:Ni,useLayoutEffect:Ni,useMemo:Ni,useReducer:Ni,useRef:Ni,useState:Ni,useDebugValue:Ni,useDeferredValue:Ni,useTransition:Ni,useMutableSource:Ni,useSyncExternalStore:Ni,useId:Ni,unstable_isNewReconciler:!1},qJ={readContext:Pn,useCallback:function(n,A){return fr().memoizedState=[n,A===void 0?null:A],n},useContext:Pn,useEffect:px,useImperativeHandle:function(n,A,i){return i=i!=null?i.concat([n]):null,EC(4194308,4,A1.bind(null,A,n),i)},useLayoutEffect:function(n,A){return EC(4194308,4,n,A)},useInsertionEffect:function(n,A){return EC(4,2,n,A)},useMemo:function(n,A){var i=fr();return A=A===void 0?null:A,n=n(),i.memoizedState=[n,A],n},useReducer:function(n,A,i){var t=fr();return A=i!==void 0?i(A):A,t.memoizedState=t.baseState=A,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:A},t.queue=n,n=n.dispatch=OJ.bind(null,Jt,n),[t.memoizedState,n]},useRef:function(n){var A=fr();return n={current:n},A.memoizedState=n},useState:_x,useDebugValue:El,useDeferredValue:function(n){return fr().memoizedState=n},useTransition:function(){var n=_x(!1),A=n[0];return n=JJ.bind(null,n[1]),fr().memoizedState=n,[A,n]},useMutableSource:function(){},useSyncExternalStore:function(n,A,i){var t=Jt,o=fr();if(Ht){if(i===void 0)throw Error(hA(407));i=i()}else{if(i=A(),pi===null)throw Error(hA(349));ds&30||qK(t,A,i)}o.memoizedState=i;var s={value:i,getSnapshot:A};return o.queue=s,px(VK.bind(null,t,s,n),[n]),t.flags|=2048,ja(9,jK.bind(null,t,s,i,A),void 0,null),i},useId:function(){var n=fr(),A=pi.identifierPrefix;if(Ht){var i=Vr,t=jr;i=(t&~(1<<32-sr(t)-1)).toString(32)+i,A=":"+A+"R"+i,i=Ya++,0<i&&(A+="H"+i.toString(32)),A+=":"}else i=PJ++,A=":"+A+"r"+i.toString(32)+":";return n.memoizedState=A},unstable_isNewReconciler:!1},jJ={readContext:Pn,useCallback:t1,useContext:Pn,useEffect:ll,useImperativeHandle:e1,useInsertionEffect:XK,useLayoutEffect:$K,useMemo:i1,useReducer:$c,useRef:ZK,useState:function(){return $c(qa)},useDebugValue:El,useDeferredValue:function(n){var A=Jn();return n1(A,ni.memoizedState,n)},useTransition:function(){var n=$c(qa)[0],A=Jn().memoizedState;return[n,A]},useMutableSource:OK,useSyncExternalStore:YK,useId:r1,unstable_isNewReconciler:!1},VJ={readContext:Pn,useCallback:t1,useContext:Pn,useEffect:ll,useImperativeHandle:e1,useInsertionEffect:XK,useLayoutEffect:$K,useMemo:i1,useReducer:A_,useRef:ZK,useState:function(){return A_(qa)},useDebugValue:El,useDeferredValue:function(n){var A=Jn();return ni===null?A.memoizedState=n:n1(A,ni.memoizedState,n)},useTransition:function(){var n=A_(qa)[0],A=Jn().memoizedState;return[n,A]},useMutableSource:OK,useSyncExternalStore:YK,useId:r1,unstable_isNewReconciler:!1};function er(n,A){if(n&&n.defaultProps){A=Ot({},A),n=n.defaultProps;for(var i in n)A[i]===void 0&&(A[i]=n[i]);return A}return A}function Dp(n,A,i,t){A=n.memoizedState,i=i(t,A),i=i==null?A:Ot({},A,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var _c={isMounted:function(n){return(n=n._reactInternals)?Ms(n)===n:!1},enqueueSetState:function(n,A,i){n=n._reactInternals;var t=Ji(),o=xo(n),s=$r(t,o);s.payload=A,i!=null&&(s.callback=i),A=To(n,s,o),A!==null&&(gr(A,n,o,t),BC(A,n,o))},enqueueReplaceState:function(n,A,i){n=n._reactInternals;var t=Ji(),o=xo(n),s=$r(t,o);s.tag=1,s.payload=A,i!=null&&(s.callback=i),A=To(n,s,o),A!==null&&(gr(A,n,o,t),BC(A,n,o))},enqueueForceUpdate:function(n,A){n=n._reactInternals;var i=Ji(),t=xo(n),o=$r(i,t);o.tag=2,A!=null&&(o.callback=A),A=To(n,o,t),A!==null&&(gr(A,n,t,i),BC(A,n,t))}};function Bx(n,A,i,t,o,s,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,s,g):A.prototype&&A.prototype.isPureReactComponent?!ka(i,t)||!ka(o,s):!0}function a1(n,A,i){var t=!1,o=Jo,s=A.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(o=rn(A)?Es:Gi.current,t=A.contextTypes,s=(t=t!=null)?dg(n,o):Jo),A=new A(i,s),n.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=_c,n.stateNode=A,A._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=s),A}function lx(n,A,i,t){n=A.state,typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps(i,t),typeof A.UNSAFE_componentWillReceiveProps=="function"&&A.UNSAFE_componentWillReceiveProps(i,t),A.state!==n&&_c.enqueueReplaceState(A,A.state,null)}function Sp(n,A,i,t){var o=n.stateNode;o.props=i,o.state=n.memoizedState,o.refs={},al(n);var s=A.contextType;typeof s=="object"&&s!==null?o.context=Pn(s):(s=rn(A)?Es:Gi.current,o.context=dg(n,s)),o.state=n.memoizedState,s=A.getDerivedStateFromProps,typeof s=="function"&&(Dp(n,A,s,i),o.state=n.memoizedState),typeof A.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(A=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),A!==o.state&&_c.enqueueReplaceState(o,o.state,null),OC(n,i,o,t),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function yg(n,A){try{var i="",t=A;do i+=f2(t),t=t.return;while(t);var o=i}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:A,stack:o,digest:null}}function e_(n,A,i){return{value:n,source:null,stack:i??null,digest:A??null}}function wp(n,A){try{console.error(A.value)}catch(i){setTimeout(function(){throw i})}}var WJ=typeof WeakMap=="function"?WeakMap:Map;function I1(n,A,i){i=$r(-1,i),i.tag=3,i.payload={element:null};var t=A.value;return i.callback=function(){WC||(WC=!0,Gp=t),wp(n,A)},i}function C1(n,A,i){i=$r(-1,i),i.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var o=A.value;i.payload=function(){return t(o)},i.callback=function(){wp(n,A)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){wp(n,A),typeof t!="function"&&(Go===null?Go=new Set([this]):Go.add(this));var g=A.stack;this.componentDidCatch(A.value,{componentStack:g!==null?g:""})}),i}function Ex(n,A,i){var t=n.pingCache;if(t===null){t=n.pingCache=new WJ;var o=new Set;t.set(A,o)}else o=t.get(A),o===void 0&&(o=new Set,t.set(A,o));o.has(i)||(o.add(i),n=aO.bind(null,n,A,i),A.then(n,n))}function Qx(n){do{var A;if((A=n.tag===13)&&(A=n.memoizedState,A=A!==null?A.dehydrated!==null:!0),A)return n;n=n.return}while(n!==null);return null}function dx(n,A,i,t,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===A?n.flags|=65536:(n.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(A=$r(-1,1),A.tag=2,To(i,A,1))),i.lanes|=1),n)}var zJ=ao.ReactCurrentOwner,tn=!1;function Ki(n,A,i,t){A.child=n===null?HK(A,null,i,t):ug(A,n.child,i,t)}function hx(n,A,i,t,o){i=i.render;var s=A.ref;return Cg(A,o),t=pl(n,A,i,t,s,o),i=Bl(),n!==null&&!tn?(A.updateQueue=n.updateQueue,A.flags&=-2053,n.lanes&=~o,ro(n,A,o)):(Ht&&i&&tl(A),A.flags|=1,Ki(n,A,t,o),A.child)}function ux(n,A,i,t,o){if(n===null){var s=i.type;return typeof s=="function"&&!Dl(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(A.tag=15,A.type=s,c1(n,A,s,t,o)):(n=uC(i.type,null,t,A,A.mode,o),n.ref=A.ref,n.return=A,A.child=n)}if(s=n.child,!(n.lanes&o)){var g=s.memoizedProps;if(i=i.compare,i=i!==null?i:ka,i(g,t)&&n.ref===A.ref)return ro(n,A,o)}return A.flags|=1,n=ko(s,t),n.ref=A.ref,n.return=A,A.child=n}function c1(n,A,i,t,o){if(n!==null){var s=n.memoizedProps;if(ka(s,t)&&n.ref===A.ref)if(tn=!1,A.pendingProps=t=s,(n.lanes&o)!==0)n.flags&131072&&(tn=!0);else return A.lanes=n.lanes,ro(n,A,o)}return Mp(n,A,i,t,o)}function _1(n,A,i){var t=A.pendingProps,o=t.children,s=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(A.mode&1))A.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(rg,pn),pn|=i;else{if(!(i&1073741824))return n=s!==null?s.baseLanes|i:i,A.lanes=A.childLanes=1073741824,A.memoizedState={baseLanes:n,cachePool:null,transitions:null},A.updateQueue=null,ut(rg,pn),pn|=n,null;A.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:i,ut(rg,pn),pn|=t}else s!==null?(t=s.baseLanes|i,A.memoizedState=null):t=i,ut(rg,pn),pn|=t;return Ki(n,A,o,i),A.child}function p1(n,A){var i=A.ref;(n===null&&i!==null||n!==null&&n.ref!==i)&&(A.flags|=512,A.flags|=2097152)}function Mp(n,A,i,t,o){var s=rn(i)?Es:Gi.current;return s=dg(A,s),Cg(A,o),i=pl(n,A,i,t,s,o),t=Bl(),n!==null&&!tn?(A.updateQueue=n.updateQueue,A.flags&=-2053,n.lanes&=~o,ro(n,A,o)):(Ht&&t&&tl(A),A.flags|=1,Ki(n,A,i,o),A.child)}function fx(n,A,i,t,o){if(rn(i)){var s=!0;kC(A)}else s=!1;if(Cg(A,o),A.stateNode===null)QC(n,A),a1(A,i,t),Sp(A,i,t,o),t=!0;else if(n===null){var g=A.stateNode,a=A.memoizedProps;g.props=a;var I=g.context,_=i.contextType;typeof _=="object"&&_!==null?_=Pn(_):(_=rn(i)?Es:Gi.current,_=dg(A,_));var p=i.getDerivedStateFromProps,B=typeof p=="function"||typeof g.getSnapshotBeforeUpdate=="function";B||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(a!==t||I!==_)&&lx(A,g,t,_),yo=!1;var l=A.memoizedState;g.state=l,OC(A,t,g,o),I=A.memoizedState,a!==t||l!==I||nn.current||yo?(typeof p=="function"&&(Dp(A,i,p,t),I=A.memoizedState),(a=yo||Bx(A,i,a,t,l,I,_))?(B||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(A.flags|=4194308)):(typeof g.componentDidMount=="function"&&(A.flags|=4194308),A.memoizedProps=t,A.memoizedState=I),g.props=t,g.state=I,g.context=_,t=a):(typeof g.componentDidMount=="function"&&(A.flags|=4194308),t=!1)}else{g=A.stateNode,PK(n,A),a=A.memoizedProps,_=A.type===A.elementType?a:er(A.type,a),g.props=_,B=A.pendingProps,l=g.context,I=i.contextType,typeof I=="object"&&I!==null?I=Pn(I):(I=rn(i)?Es:Gi.current,I=dg(A,I));var Q=i.getDerivedStateFromProps;(p=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(a!==B||l!==I)&&lx(A,g,t,I),yo=!1,l=A.memoizedState,g.state=l,OC(A,t,g,o);var h=A.memoizedState;a!==B||l!==h||nn.current||yo?(typeof Q=="function"&&(Dp(A,i,Q,t),h=A.memoizedState),(_=yo||Bx(A,i,_,t,l,h,I)||!1)?(p||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(t,h,I),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(t,h,I)),typeof g.componentDidUpdate=="function"&&(A.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(A.flags|=1024)):(typeof g.componentDidUpdate!="function"||a===n.memoizedProps&&l===n.memoizedState||(A.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&l===n.memoizedState||(A.flags|=1024),A.memoizedProps=t,A.memoizedState=h),g.props=t,g.state=h,g.context=I,t=_):(typeof g.componentDidUpdate!="function"||a===n.memoizedProps&&l===n.memoizedState||(A.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&l===n.memoizedState||(A.flags|=1024),t=!1)}return Rp(n,A,i,t,s,o)}function Rp(n,A,i,t,o,s){p1(n,A);var g=(A.flags&128)!==0;if(!t&&!g)return o&&sx(A,i,!1),ro(n,A,s);t=A.stateNode,zJ.current=A;var a=g&&typeof i.getDerivedStateFromError!="function"?null:t.render();return A.flags|=1,n!==null&&g?(A.child=ug(A,n.child,null,s),A.child=ug(A,null,a,s)):Ki(n,A,a,s),A.memoizedState=t.state,o&&sx(A,i,!0),A.child}function B1(n){var A=n.stateNode;A.pendingContext?ox(n,A.pendingContext,A.pendingContext!==A.context):A.context&&ox(n,A.context,!1),Il(n,A.containerInfo)}function yx(n,A,i,t,o){return hg(),nl(o),A.flags|=256,Ki(n,A,i,t),A.child}var bp={dehydrated:null,treeContext:null,retryLane:0};function vp(n){return{baseLanes:n,cachePool:null,transitions:null}}function l1(n,A,i){var t=A.pendingProps,o=Pt.current,s=!1,g=(A.flags&128)!==0,a;if((a=g)||(a=n!==null&&n.memoizedState===null?!1:(o&2)!==0),a?(s=!0,A.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),ut(Pt,o&1),n===null)return yp(A),n=A.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(A.mode&1?n.data==="$!"?A.lanes=8:A.lanes=1073741824:A.lanes=1,null):(g=t.children,n=t.fallback,s?(t=A.mode,s=A.child,g={mode:"hidden",children:g},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=g):s=lc(g,t,0,null),n=Bs(n,t,i,null),s.return=A,n.return=A,s.sibling=n,A.child=s,A.child.memoizedState=vp(i),A.memoizedState=bp,n):Ql(A,g));if(o=n.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return ZJ(n,A,g,t,a,o,i);if(s){s=t.fallback,g=A.mode,o=n.child,a=o.sibling;var I={mode:"hidden",children:t.children};return!(g&1)&&A.child!==o?(t=A.child,t.childLanes=0,t.pendingProps=I,A.deletions=null):(t=ko(o,I),t.subtreeFlags=o.subtreeFlags&14680064),a!==null?s=ko(a,s):(s=Bs(s,g,i,null),s.flags|=2),s.return=A,t.return=A,t.sibling=s,A.child=t,t=s,s=A.child,g=n.child.memoizedState,g=g===null?vp(i):{baseLanes:g.baseLanes|i,cachePool:null,transitions:g.transitions},s.memoizedState=g,s.childLanes=n.childLanes&~i,A.memoizedState=bp,t}return s=n.child,n=s.sibling,t=ko(s,{mode:"visible",children:t.children}),!(A.mode&1)&&(t.lanes=i),t.return=A,t.sibling=null,n!==null&&(i=A.deletions,i===null?(A.deletions=[n],A.flags|=16):i.push(n)),A.child=t,A.memoizedState=null,t}function Ql(n,A){return A=lc({mode:"visible",children:A},n.mode,0,null),A.return=n,n.child=A}function MI(n,A,i,t){return t!==null&&nl(t),ug(A,n.child,null,i),n=Ql(A,A.pendingProps.children),n.flags|=2,A.memoizedState=null,n}function ZJ(n,A,i,t,o,s,g){if(i)return A.flags&256?(A.flags&=-257,t=e_(Error(hA(422))),MI(n,A,g,t)):A.memoizedState!==null?(A.child=n.child,A.flags|=128,null):(s=t.fallback,o=A.mode,t=lc({mode:"visible",children:t.children},o,0,null),s=Bs(s,o,g,null),s.flags|=2,t.return=A,s.return=A,t.sibling=s,A.child=t,A.mode&1&&ug(A,n.child,null,g),A.child.memoizedState=vp(g),A.memoizedState=bp,s);if(!(A.mode&1))return MI(n,A,g,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var a=t.dgst;return t=a,s=Error(hA(419)),t=e_(s,t,void 0),MI(n,A,g,t)}if(a=(g&n.childLanes)!==0,tn||a){if(t=pi,t!==null){switch(g&-g){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|g)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,no(n,o),gr(t,n,o,-1))}return ml(),t=e_(Error(hA(421))),MI(n,A,g,t)}return o.data==="$?"?(A.flags|=128,A.child=n.child,A=IO.bind(null,n),o._reactRetry=A,null):(n=s.treeContext,Bn=Uo(o.nextSibling),ln=A,Ht=!0,ir=null,n!==null&&(Nn[Fn++]=jr,Nn[Fn++]=Vr,Nn[Fn++]=Qs,jr=n.id,Vr=n.overflow,Qs=A),A=Ql(A,t.children),A.flags|=4096,A)}function mx(n,A,i){n.lanes|=A;var t=n.alternate;t!==null&&(t.lanes|=A),mp(n.return,A,i)}function t_(n,A,i,t,o){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:A,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:o}:(s.isBackwards=A,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=i,s.tailMode=o)}function E1(n,A,i){var t=A.pendingProps,o=t.revealOrder,s=t.tail;if(Ki(n,A,t.children,i),t=Pt.current,t&2)t=t&1|2,A.flags|=128;else{if(n!==null&&n.flags&128)A:for(n=A.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mx(n,i,A);else if(n.tag===19)mx(n,i,A);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===A)break A;for(;n.sibling===null;){if(n.return===null||n.return===A)break A;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(ut(Pt,t),!(A.mode&1))A.memoizedState=null;else switch(o){case"forwards":for(i=A.child,o=null;i!==null;)n=i.alternate,n!==null&&YC(n)===null&&(o=i),i=i.sibling;i=o,i===null?(o=A.child,A.child=null):(o=i.sibling,i.sibling=null),t_(A,!1,o,i,s);break;case"backwards":for(i=null,o=A.child,A.child=null;o!==null;){if(n=o.alternate,n!==null&&YC(n)===null){A.child=o;break}n=o.sibling,o.sibling=i,i=o,o=n}t_(A,!0,i,null,s);break;case"together":t_(A,!1,null,null,void 0);break;default:A.memoizedState=null}return A.child}function QC(n,A){!(A.mode&1)&&n!==null&&(n.alternate=null,A.alternate=null,A.flags|=2)}function ro(n,A,i){if(n!==null&&(A.dependencies=n.dependencies),hs|=A.lanes,!(i&A.childLanes))return null;if(n!==null&&A.child!==n.child)throw Error(hA(153));if(A.child!==null){for(n=A.child,i=ko(n,n.pendingProps),A.child=i,i.return=A;n.sibling!==null;)n=n.sibling,i=i.sibling=ko(n,n.pendingProps),i.return=A;i.sibling=null}return A.child}function XJ(n,A,i){switch(A.tag){case 3:B1(A),hg();break;case 5:JK(A);break;case 1:rn(A.type)&&kC(A);break;case 4:Il(A,A.stateNode.containerInfo);break;case 10:var t=A.type._context,o=A.memoizedProps.value;ut(PC,t._currentValue),t._currentValue=o;break;case 13:if(t=A.memoizedState,t!==null)return t.dehydrated!==null?(ut(Pt,Pt.current&1),A.flags|=128,null):i&A.child.childLanes?l1(n,A,i):(ut(Pt,Pt.current&1),n=ro(n,A,i),n!==null?n.sibling:null);ut(Pt,Pt.current&1);break;case 19:if(t=(i&A.childLanes)!==0,n.flags&128){if(t)return E1(n,A,i);A.flags|=128}if(o=A.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ut(Pt,Pt.current),t)break;return null;case 22:case 23:return A.lanes=0,_1(n,A,i)}return ro(n,A,i)}var Q1,Np,d1,h1;Q1=function(n,A){for(var i=A.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===A)break;for(;i.sibling===null;){if(i.return===null||i.return===A)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Np=function(){};d1=function(n,A,i,t){var o=n.memoizedProps;if(o!==t){n=A.stateNode,cs(Rr.current);var s=null;switch(i){case"input":o=Ap(n,o),t=Ap(n,t),s=[];break;case"select":o=Ot({},o,{value:void 0}),t=Ot({},t,{value:void 0}),s=[];break;case"textarea":o=ip(n,o),t=ip(n,t),s=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=GC)}rp(i,t);var g;i=null;for(_ in o)if(!t.hasOwnProperty(_)&&o.hasOwnProperty(_)&&o[_]!=null)if(_==="style"){var a=o[_];for(g in a)a.hasOwnProperty(g)&&(i||(i={}),i[g]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(Na.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in t){var I=t[_];if(a=o!=null?o[_]:void 0,t.hasOwnProperty(_)&&I!==a&&(I!=null||a!=null))if(_==="style")if(a){for(g in a)!a.hasOwnProperty(g)||I&&I.hasOwnProperty(g)||(i||(i={}),i[g]="");for(g in I)I.hasOwnProperty(g)&&a[g]!==I[g]&&(i||(i={}),i[g]=I[g])}else i||(s||(s=[]),s.push(_,i)),i=I;else _==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,a=a?a.__html:void 0,I!=null&&a!==I&&(s=s||[]).push(_,I)):_==="children"?typeof I!="string"&&typeof I!="number"||(s=s||[]).push(_,""+I):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(Na.hasOwnProperty(_)?(I!=null&&_==="onScroll"&&Mt("scroll",n),s||a===I||(s=[])):(s=s||[]).push(_,I))}i&&(s=s||[]).push("style",i);var _=s;(A.updateQueue=_)&&(A.flags|=4)}};h1=function(n,A,i,t){i!==t&&(A.flags|=4)};function ta(n,A){if(!Ht)switch(n.tailMode){case"hidden":A=n.tail;for(var i=null;A!==null;)A.alternate!==null&&(i=A),A=A.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?A||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function Fi(n){var A=n.alternate!==null&&n.alternate.child===n.child,i=0,t=0;if(A)for(var o=n.child;o!==null;)i|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)i|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=t,n.childLanes=i,A}function $J(n,A,i){var t=A.pendingProps;switch(il(A),A.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fi(A),null;case 1:return rn(A.type)&&xC(),Fi(A),null;case 3:return t=A.stateNode,fg(),bt(nn),bt(Gi),cl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(SI(A)?A.flags|=4:n===null||n.memoizedState.isDehydrated&&!(A.flags&256)||(A.flags|=1024,ir!==null&&(Hp(ir),ir=null))),Np(n,A),Fi(A),null;case 5:Cl(A);var o=cs(Oa.current);if(i=A.type,n!==null&&A.stateNode!=null)d1(n,A,i,t,o),n.ref!==A.ref&&(A.flags|=512,A.flags|=2097152);else{if(!t){if(A.stateNode===null)throw Error(hA(166));return Fi(A),null}if(n=cs(Rr.current),SI(A)){t=A.stateNode,i=A.type;var s=A.memoizedProps;switch(t[yr]=A,t[Pa]=s,n=(A.mode&1)!==0,i){case"dialog":Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":case"embed":Mt("load",t);break;case"video":case"audio":for(o=0;o<la.length;o++)Mt(la[o],t);break;case"source":Mt("error",t);break;case"img":case"image":case"link":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"input":FG(t,s),Mt("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",t);break;case"textarea":UG(t,s),Mt("invalid",t)}rp(i,s),o=null;for(var g in s)if(s.hasOwnProperty(g)){var a=s[g];g==="children"?typeof a=="string"?t.textContent!==a&&(s.suppressHydrationWarning!==!0&&DI(t.textContent,a,n),o=["children",a]):typeof a=="number"&&t.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&DI(t.textContent,a,n),o=["children",""+a]):Na.hasOwnProperty(g)&&a!=null&&g==="onScroll"&&Mt("scroll",t)}switch(i){case"input":EI(t),LG(t,s,!0);break;case"textarea":EI(t),TG(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=GC)}t=o,A.updateQueue=t,t!==null&&(A.flags|=4)}else{g=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=VH(i)),n==="http://www.w3.org/1999/xhtml"?i==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=g.createElement(i,{is:t.is}):(n=g.createElement(i),i==="select"&&(g=n,t.multiple?g.multiple=!0:t.size&&(g.size=t.size))):n=g.createElementNS(n,i),n[yr]=A,n[Pa]=t,Q1(n,A,!1,!1),A.stateNode=n;A:{switch(g=op(i,t),i){case"dialog":Mt("cancel",n),Mt("close",n),o=t;break;case"iframe":case"object":case"embed":Mt("load",n),o=t;break;case"video":case"audio":for(o=0;o<la.length;o++)Mt(la[o],n);o=t;break;case"source":Mt("error",n),o=t;break;case"img":case"image":case"link":Mt("error",n),Mt("load",n),o=t;break;case"details":Mt("toggle",n),o=t;break;case"input":FG(n,t),o=Ap(n,t),Mt("invalid",n);break;case"option":o=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},o=Ot({},t,{value:void 0}),Mt("invalid",n);break;case"textarea":UG(n,t),o=ip(n,t),Mt("invalid",n);break;default:o=t}rp(i,o),a=o;for(s in a)if(a.hasOwnProperty(s)){var I=a[s];s==="style"?ZH(n,I):s==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&WH(n,I)):s==="children"?typeof I=="string"?(i!=="textarea"||I!=="")&&Fa(n,I):typeof I=="number"&&Fa(n,""+I):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?I!=null&&s==="onScroll"&&Mt("scroll",n):I!=null&&PB(n,s,I,g))}switch(i){case"input":EI(n),LG(n,t,!1);break;case"textarea":EI(n),TG(n);break;case"option":t.value!=null&&n.setAttribute("value",""+Po(t.value));break;case"select":n.multiple=!!t.multiple,s=t.value,s!=null?sg(n,!!t.multiple,s,!1):t.defaultValue!=null&&sg(n,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=GC)}switch(i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break A;case"img":t=!0;break A;default:t=!1}}t&&(A.flags|=4)}A.ref!==null&&(A.flags|=512,A.flags|=2097152)}return Fi(A),null;case 6:if(n&&A.stateNode!=null)h1(n,A,n.memoizedProps,t);else{if(typeof t!="string"&&A.stateNode===null)throw Error(hA(166));if(i=cs(Oa.current),cs(Rr.current),SI(A)){if(t=A.stateNode,i=A.memoizedProps,t[yr]=A,(s=t.nodeValue!==i)&&(n=ln,n!==null))switch(n.tag){case 3:DI(t.nodeValue,i,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&DI(t.nodeValue,i,(n.mode&1)!==0)}s&&(A.flags|=4)}else t=(i.nodeType===9?i:i.ownerDocument).createTextNode(t),t[yr]=A,A.stateNode=t}return Fi(A),null;case 13:if(bt(Pt),t=A.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Bn!==null&&A.mode&1&&!(A.flags&128))xK(),hg(),A.flags|=98560,s=!1;else if(s=SI(A),t!==null&&t.dehydrated!==null){if(n===null){if(!s)throw Error(hA(318));if(s=A.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(hA(317));s[yr]=A}else hg(),!(A.flags&128)&&(A.memoizedState=null),A.flags|=4;Fi(A),s=!1}else ir!==null&&(Hp(ir),ir=null),s=!0;if(!s)return A.flags&65536?A:null}return A.flags&128?(A.lanes=i,A):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(A.child.flags|=8192,A.mode&1&&(n===null||Pt.current&1?ri===0&&(ri=3):ml())),A.updateQueue!==null&&(A.flags|=4),Fi(A),null);case 4:return fg(),Np(n,A),n===null&&Ha(A.stateNode.containerInfo),Fi(A),null;case 10:return sl(A.type._context),Fi(A),null;case 17:return rn(A.type)&&xC(),Fi(A),null;case 19:if(bt(Pt),s=A.memoizedState,s===null)return Fi(A),null;if(t=(A.flags&128)!==0,g=s.rendering,g===null)if(t)ta(s,!1);else{if(ri!==0||n!==null&&n.flags&128)for(n=A.child;n!==null;){if(g=YC(n),g!==null){for(A.flags|=128,ta(s,!1),t=g.updateQueue,t!==null&&(A.updateQueue=t,A.flags|=4),A.subtreeFlags=0,t=i,i=A.child;i!==null;)s=i,n=t,s.flags&=14680066,g=s.alternate,g===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=g.childLanes,s.lanes=g.lanes,s.child=g.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=g.memoizedProps,s.memoizedState=g.memoizedState,s.updateQueue=g.updateQueue,s.type=g.type,n=g.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),i=i.sibling;return ut(Pt,Pt.current&1|2),A.child}n=n.sibling}s.tail!==null&&Zt()>mg&&(A.flags|=128,t=!0,ta(s,!1),A.lanes=4194304)}else{if(!t)if(n=YC(g),n!==null){if(A.flags|=128,t=!0,i=n.updateQueue,i!==null&&(A.updateQueue=i,A.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!g.alternate&&!Ht)return Fi(A),null}else 2*Zt()-s.renderingStartTime>mg&&i!==1073741824&&(A.flags|=128,t=!0,ta(s,!1),A.lanes=4194304);s.isBackwards?(g.sibling=A.child,A.child=g):(i=s.last,i!==null?i.sibling=g:A.child=g,s.last=g)}return s.tail!==null?(A=s.tail,s.rendering=A,s.tail=A.sibling,s.renderingStartTime=Zt(),A.sibling=null,i=Pt.current,ut(Pt,t?i&1|2:i&1),A):(Fi(A),null);case 22:case 23:return yl(),t=A.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(A.flags|=8192),t&&A.mode&1?pn&1073741824&&(Fi(A),A.subtreeFlags&6&&(A.flags|=8192)):Fi(A),null;case 24:return null;case 25:return null}throw Error(hA(156,A.tag))}function AO(n,A){switch(il(A),A.tag){case 1:return rn(A.type)&&xC(),n=A.flags,n&65536?(A.flags=n&-65537|128,A):null;case 3:return fg(),bt(nn),bt(Gi),cl(),n=A.flags,n&65536&&!(n&128)?(A.flags=n&-65537|128,A):null;case 5:return Cl(A),null;case 13:if(bt(Pt),n=A.memoizedState,n!==null&&n.dehydrated!==null){if(A.alternate===null)throw Error(hA(340));hg()}return n=A.flags,n&65536?(A.flags=n&-65537|128,A):null;case 19:return bt(Pt),null;case 4:return fg(),null;case 10:return sl(A.type._context),null;case 22:case 23:return yl(),null;case 24:return null;default:return null}}var RI=!1,Ti=!1,eO=typeof WeakSet=="function"?WeakSet:Set,qA=null;function ng(n,A){var i=n.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(t){Vt(n,A,t)}else i.current=null}function Fp(n,A,i){try{i()}catch(t){Vt(n,A,t)}}var Dx=!1;function tO(n,A){if(lp=LC,n=DK(),el(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else A:{i=(i=n.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var o=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break A}var g=0,a=-1,I=-1,_=0,p=0,B=n,l=null;e:for(;;){for(var Q;B!==i||o!==0&&B.nodeType!==3||(a=g+o),B!==s||t!==0&&B.nodeType!==3||(I=g+t),B.nodeType===3&&(g+=B.nodeValue.length),(Q=B.firstChild)!==null;)l=B,B=Q;for(;;){if(B===n)break e;if(l===i&&++_===o&&(a=g),l===s&&++p===t&&(I=g),(Q=B.nextSibling)!==null)break;B=l,l=B.parentNode}B=Q}i=a===-1||I===-1?null:{start:a,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ep={focusedElem:n,selectionRange:i},LC=!1,qA=A;qA!==null;)if(A=qA,n=A.child,(A.subtreeFlags&1028)!==0&&n!==null)n.return=A,qA=n;else for(;qA!==null;){A=qA;try{var h=A.alternate;if(A.flags&1024)switch(A.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,u=h.memoizedState,E=A.stateNode,f=E.getSnapshotBeforeUpdate(A.elementType===A.type?y:er(A.type,y),u);E.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=A.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(hA(163))}}catch(D){Vt(A,A.return,D)}if(n=A.sibling,n!==null){n.return=A.return,qA=n;break}qA=A.return}return h=Dx,Dx=!1,h}function Sa(n,A,i){var t=A.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&n)===n){var s=o.destroy;o.destroy=void 0,s!==void 0&&Fp(A,i,s)}o=o.next}while(o!==t)}}function pc(n,A){if(A=A.updateQueue,A=A!==null?A.lastEffect:null,A!==null){var i=A=A.next;do{if((i.tag&n)===n){var t=i.create;i.destroy=t()}i=i.next}while(i!==A)}}function Lp(n){var A=n.ref;if(A!==null){var i=n.stateNode;switch(n.tag){case 5:n=i;break;default:n=i}typeof A=="function"?A(n):A.current=n}}function u1(n){var A=n.alternate;A!==null&&(n.alternate=null,u1(A)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(A=n.stateNode,A!==null&&(delete A[yr],delete A[Pa],delete A[hp],delete A[xJ],delete A[kJ])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function f1(n){return n.tag===5||n.tag===3||n.tag===4}function Sx(n){A:for(;;){for(;n.sibling===null;){if(n.return===null||f1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue A;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Up(n,A,i){var t=n.tag;if(t===5||t===6)n=n.stateNode,A?i.nodeType===8?i.parentNode.insertBefore(n,A):i.insertBefore(n,A):(i.nodeType===8?(A=i.parentNode,A.insertBefore(n,i)):(A=i,A.appendChild(n)),i=i._reactRootContainer,i!=null||A.onclick!==null||(A.onclick=GC));else if(t!==4&&(n=n.child,n!==null))for(Up(n,A,i),n=n.sibling;n!==null;)Up(n,A,i),n=n.sibling}function Tp(n,A,i){var t=n.tag;if(t===5||t===6)n=n.stateNode,A?i.insertBefore(n,A):i.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Tp(n,A,i),n=n.sibling;n!==null;)Tp(n,A,i),n=n.sibling}var mi=null,tr=!1;function co(n,A,i){for(i=i.child;i!==null;)y1(n,A,i),i=i.sibling}function y1(n,A,i){if(Mr&&typeof Mr.onCommitFiberUnmount=="function")try{Mr.onCommitFiberUnmount(oc,i)}catch{}switch(i.tag){case 5:Ti||ng(i,A);case 6:var t=mi,o=tr;mi=null,co(n,A,i),mi=t,tr=o,mi!==null&&(tr?(n=mi,i=i.stateNode,n.nodeType===8?n.parentNode.removeChild(i):n.removeChild(i)):mi.removeChild(i.stateNode));break;case 18:mi!==null&&(tr?(n=mi,i=i.stateNode,n.nodeType===8?Wc(n.parentNode,i):n.nodeType===1&&Wc(n,i),Ga(n)):Wc(mi,i.stateNode));break;case 4:t=mi,o=tr,mi=i.stateNode.containerInfo,tr=!0,co(n,A,i),mi=t,tr=o;break;case 0:case 11:case 14:case 15:if(!Ti&&(t=i.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var s=o,g=s.destroy;s=s.tag,g!==void 0&&(s&2||s&4)&&Fp(i,A,g),o=o.next}while(o!==t)}co(n,A,i);break;case 1:if(!Ti&&(ng(i,A),t=i.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=i.memoizedProps,t.state=i.memoizedState,t.componentWillUnmount()}catch(a){Vt(i,A,a)}co(n,A,i);break;case 21:co(n,A,i);break;case 22:i.mode&1?(Ti=(t=Ti)||i.memoizedState!==null,co(n,A,i),Ti=t):co(n,A,i);break;default:co(n,A,i)}}function wx(n){var A=n.updateQueue;if(A!==null){n.updateQueue=null;var i=n.stateNode;i===null&&(i=n.stateNode=new eO),A.forEach(function(t){var o=CO.bind(null,n,t);i.has(t)||(i.add(t),t.then(o,o))})}}function zn(n,A){var i=A.deletions;if(i!==null)for(var t=0;t<i.length;t++){var o=i[t];try{var s=n,g=A,a=g;A:for(;a!==null;){switch(a.tag){case 5:mi=a.stateNode,tr=!1;break A;case 3:mi=a.stateNode.containerInfo,tr=!0;break A;case 4:mi=a.stateNode.containerInfo,tr=!0;break A}a=a.return}if(mi===null)throw Error(hA(160));y1(s,g,o),mi=null,tr=!1;var I=o.alternate;I!==null&&(I.return=null),o.return=null}catch(_){Vt(o,A,_)}}if(A.subtreeFlags&12854)for(A=A.child;A!==null;)m1(A,n),A=A.sibling}function m1(n,A){var i=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zn(A,n),dr(n),t&4){try{Sa(3,n,n.return),pc(3,n)}catch(y){Vt(n,n.return,y)}try{Sa(5,n,n.return)}catch(y){Vt(n,n.return,y)}}break;case 1:zn(A,n),dr(n),t&512&&i!==null&&ng(i,i.return);break;case 5:if(zn(A,n),dr(n),t&512&&i!==null&&ng(i,i.return),n.flags&32){var o=n.stateNode;try{Fa(o,"")}catch(y){Vt(n,n.return,y)}}if(t&4&&(o=n.stateNode,o!=null)){var s=n.memoizedProps,g=i!==null?i.memoizedProps:s,a=n.type,I=n.updateQueue;if(n.updateQueue=null,I!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qH(o,s),op(a,g);var _=op(a,s);for(g=0;g<I.length;g+=2){var p=I[g],B=I[g+1];p==="style"?ZH(o,B):p==="dangerouslySetInnerHTML"?WH(o,B):p==="children"?Fa(o,B):PB(o,p,B,_)}switch(a){case"input":ep(o,s);break;case"textarea":jH(o,s);break;case"select":var l=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?sg(o,!!s.multiple,Q,!1):l!==!!s.multiple&&(s.defaultValue!=null?sg(o,!!s.multiple,s.defaultValue,!0):sg(o,!!s.multiple,s.multiple?[]:"",!1))}o[Pa]=s}catch(y){Vt(n,n.return,y)}}break;case 6:if(zn(A,n),dr(n),t&4){if(n.stateNode===null)throw Error(hA(162));o=n.stateNode,s=n.memoizedProps;try{o.nodeValue=s}catch(y){Vt(n,n.return,y)}}break;case 3:if(zn(A,n),dr(n),t&4&&i!==null&&i.memoizedState.isDehydrated)try{Ga(A.containerInfo)}catch(y){Vt(n,n.return,y)}break;case 4:zn(A,n),dr(n);break;case 13:zn(A,n),dr(n),o=n.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(ul=Zt())),t&4&&wx(n);break;case 22:if(p=i!==null&&i.memoizedState!==null,n.mode&1?(Ti=(_=Ti)||p,zn(A,n),Ti=_):zn(A,n),dr(n),t&8192){if(_=n.memoizedState!==null,(n.stateNode.isHidden=_)&&!p&&n.mode&1)for(qA=n,p=n.child;p!==null;){for(B=qA=p;qA!==null;){switch(l=qA,Q=l.child,l.tag){case 0:case 11:case 14:case 15:Sa(4,l,l.return);break;case 1:ng(l,l.return);var h=l.stateNode;if(typeof h.componentWillUnmount=="function"){t=l,i=l.return;try{A=t,h.props=A.memoizedProps,h.state=A.memoizedState,h.componentWillUnmount()}catch(y){Vt(t,i,y)}}break;case 5:ng(l,l.return);break;case 22:if(l.memoizedState!==null){Rx(B);continue}}Q!==null?(Q.return=l,qA=Q):Rx(B)}p=p.sibling}A:for(p=null,B=n;;){if(B.tag===5){if(p===null){p=B;try{o=B.stateNode,_?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=B.stateNode,I=B.memoizedProps.style,g=I!=null&&I.hasOwnProperty("display")?I.display:null,a.style.display=zH("display",g))}catch(y){Vt(n,n.return,y)}}}else if(B.tag===6){if(p===null)try{B.stateNode.nodeValue=_?"":B.memoizedProps}catch(y){Vt(n,n.return,y)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===n)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===n)break A;for(;B.sibling===null;){if(B.return===null||B.return===n)break A;p===B&&(p=null),B=B.return}p===B&&(p=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:zn(A,n),dr(n),t&4&&wx(n);break;case 21:break;default:zn(A,n),dr(n)}}function dr(n){var A=n.flags;if(A&2){try{A:{for(var i=n.return;i!==null;){if(f1(i)){var t=i;break A}i=i.return}throw Error(hA(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(Fa(o,""),t.flags&=-33);var s=Sx(n);Tp(n,s,o);break;case 3:case 4:var g=t.stateNode.containerInfo,a=Sx(n);Up(n,a,g);break;default:throw Error(hA(161))}}catch(I){Vt(n,n.return,I)}n.flags&=-3}A&4096&&(n.flags&=-4097)}function iO(n,A,i){qA=n,D1(n)}function D1(n,A,i){for(var t=(n.mode&1)!==0;qA!==null;){var o=qA,s=o.child;if(o.tag===22&&t){var g=o.memoizedState!==null||RI;if(!g){var a=o.alternate,I=a!==null&&a.memoizedState!==null||Ti;a=RI;var _=Ti;if(RI=g,(Ti=I)&&!_)for(qA=o;qA!==null;)g=qA,I=g.child,g.tag===22&&g.memoizedState!==null?bx(o):I!==null?(I.return=g,qA=I):bx(o);for(;s!==null;)qA=s,D1(s),s=s.sibling;qA=o,RI=a,Ti=_}Mx(n)}else o.subtreeFlags&8772&&s!==null?(s.return=o,qA=s):Mx(n)}}function Mx(n){for(;qA!==null;){var A=qA;if(A.flags&8772){var i=A.alternate;try{if(A.flags&8772)switch(A.tag){case 0:case 11:case 15:Ti||pc(5,A);break;case 1:var t=A.stateNode;if(A.flags&4&&!Ti)if(i===null)t.componentDidMount();else{var o=A.elementType===A.type?i.memoizedProps:er(A.type,i.memoizedProps);t.componentDidUpdate(o,i.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=A.updateQueue;s!==null&&cx(A,s,t);break;case 3:var g=A.updateQueue;if(g!==null){if(i=null,A.child!==null)switch(A.child.tag){case 5:i=A.child.stateNode;break;case 1:i=A.child.stateNode}cx(A,g,i)}break;case 5:var a=A.stateNode;if(i===null&&A.flags&4){i=a;var I=A.memoizedProps;switch(A.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&i.focus();break;case"img":I.src&&(i.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(A.memoizedState===null){var _=A.alternate;if(_!==null){var p=_.memoizedState;if(p!==null){var B=p.dehydrated;B!==null&&Ga(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(hA(163))}Ti||A.flags&512&&Lp(A)}catch(l){Vt(A,A.return,l)}}if(A===n){qA=null;break}if(i=A.sibling,i!==null){i.return=A.return,qA=i;break}qA=A.return}}function Rx(n){for(;qA!==null;){var A=qA;if(A===n){qA=null;break}var i=A.sibling;if(i!==null){i.return=A.return,qA=i;break}qA=A.return}}function bx(n){for(;qA!==null;){var A=qA;try{switch(A.tag){case 0:case 11:case 15:var i=A.return;try{pc(4,A)}catch(I){Vt(A,i,I)}break;case 1:var t=A.stateNode;if(typeof t.componentDidMount=="function"){var o=A.return;try{t.componentDidMount()}catch(I){Vt(A,o,I)}}var s=A.return;try{Lp(A)}catch(I){Vt(A,s,I)}break;case 5:var g=A.return;try{Lp(A)}catch(I){Vt(A,g,I)}}}catch(I){Vt(A,A.return,I)}if(A===n){qA=null;break}var a=A.sibling;if(a!==null){a.return=A.return,qA=a;break}qA=A.return}}var nO=Math.ceil,VC=ao.ReactCurrentDispatcher,dl=ao.ReactCurrentOwner,Hn=ao.ReactCurrentBatchConfig,it=0,pi=null,ei=null,wi=0,pn=0,rg=qo(0),ri=0,Va=null,hs=0,Bc=0,hl=0,wa=null,An=null,ul=0,mg=1/0,Or=null,WC=!1,Gp=null,Go=null,bI=!1,Ro=null,zC=0,Ma=0,xp=null,dC=-1,hC=0;function Ji(){return it&6?Zt():dC!==-1?dC:dC=Zt()}function xo(n){return n.mode&1?it&2&&wi!==0?wi&-wi:KJ.transition!==null?(hC===0&&(hC=aK()),hC):(n=pt,n!==0||(n=window.event,n=n===void 0?16:lK(n.type)),n):1}function gr(n,A,i,t){if(50<Ma)throw Ma=0,xp=null,Error(hA(185));AI(n,i,t),(!(it&2)||n!==pi)&&(n===pi&&(!(it&2)&&(Bc|=i),ri===4&&Do(n,wi)),on(n,t),i===1&&it===0&&!(A.mode&1)&&(mg=Zt()+500,Cc&&jo()))}function on(n,A){var i=n.callbackNode;K2(n,A);var t=FC(n,n===pi?wi:0);if(t===0)i!==null&&kG(i),n.callbackNode=null,n.callbackPriority=0;else if(A=t&-t,n.callbackPriority!==A){if(i!=null&&kG(i),A===1)n.tag===0?HJ(vx.bind(null,n)):UK(vx.bind(null,n)),TJ(function(){!(it&6)&&jo()}),i=null;else{switch(IK(t)){case 1:i=jB;break;case 4:i=sK;break;case 16:i=NC;break;case 536870912:i=gK;break;default:i=NC}i=F1(i,S1.bind(null,n))}n.callbackPriority=A,n.callbackNode=i}}function S1(n,A){if(dC=-1,hC=0,it&6)throw Error(hA(327));var i=n.callbackNode;if(cg()&&n.callbackNode!==i)return null;var t=FC(n,n===pi?wi:0);if(t===0)return null;if(t&30||t&n.expiredLanes||A)A=ZC(n,t);else{A=t;var o=it;it|=2;var s=M1();(pi!==n||wi!==A)&&(Or=null,mg=Zt()+500,ps(n,A));do try{sO();break}catch(a){w1(n,a)}while(!0);ol(),VC.current=s,it=o,ei!==null?A=0:(pi=null,wi=0,A=ri)}if(A!==0){if(A===2&&(o=Cp(n),o!==0&&(t=o,A=kp(n,o))),A===1)throw i=Va,ps(n,0),Do(n,t),on(n,Zt()),i;if(A===6)Do(n,t);else{if(o=n.current.alternate,!(t&30)&&!rO(o)&&(A=ZC(n,t),A===2&&(s=Cp(n),s!==0&&(t=s,A=kp(n,s))),A===1))throw i=Va,ps(n,0),Do(n,t),on(n,Zt()),i;switch(n.finishedWork=o,n.finishedLanes=t,A){case 0:case 1:throw Error(hA(345));case 2:rs(n,An,Or);break;case 3:if(Do(n,t),(t&130023424)===t&&(A=ul+500-Zt(),10<A)){if(FC(n,0)!==0)break;if(o=n.suspendedLanes,(o&t)!==t){Ji(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=dp(rs.bind(null,n,An,Or),A);break}rs(n,An,Or);break;case 4:if(Do(n,t),(t&4194240)===t)break;for(A=n.eventTimes,o=-1;0<t;){var g=31-sr(t);s=1<<g,g=A[g],g>o&&(o=g),t&=~s}if(t=o,t=Zt()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*nO(t/1960))-t,10<t){n.timeoutHandle=dp(rs.bind(null,n,An,Or),t);break}rs(n,An,Or);break;case 5:rs(n,An,Or);break;default:throw Error(hA(329))}}}return on(n,Zt()),n.callbackNode===i?S1.bind(null,n):null}function kp(n,A){var i=wa;return n.current.memoizedState.isDehydrated&&(ps(n,A).flags|=256),n=ZC(n,A),n!==2&&(A=An,An=i,A!==null&&Hp(A)),n}function Hp(n){An===null?An=n:An.push.apply(An,n)}function rO(n){for(var A=n;;){if(A.flags&16384){var i=A.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var t=0;t<i.length;t++){var o=i[t],s=o.getSnapshot;o=o.value;try{if(!Ir(s(),o))return!1}catch{return!1}}}if(i=A.child,A.subtreeFlags&16384&&i!==null)i.return=A,A=i;else{if(A===n)break;for(;A.sibling===null;){if(A.return===null||A.return===n)return!0;A=A.return}A.sibling.return=A.return,A=A.sibling}}return!0}function Do(n,A){for(A&=~hl,A&=~Bc,n.suspendedLanes|=A,n.pingedLanes&=~A,n=n.expirationTimes;0<A;){var i=31-sr(A),t=1<<i;n[i]=-1,A&=~t}}function vx(n){if(it&6)throw Error(hA(327));cg();var A=FC(n,0);if(!(A&1))return on(n,Zt()),null;var i=ZC(n,A);if(n.tag!==0&&i===2){var t=Cp(n);t!==0&&(A=t,i=kp(n,t))}if(i===1)throw i=Va,ps(n,0),Do(n,A),on(n,Zt()),i;if(i===6)throw Error(hA(345));return n.finishedWork=n.current.alternate,n.finishedLanes=A,rs(n,An,Or),on(n,Zt()),null}function fl(n,A){var i=it;it|=1;try{return n(A)}finally{it=i,it===0&&(mg=Zt()+500,Cc&&jo())}}function us(n){Ro!==null&&Ro.tag===0&&!(it&6)&&cg();var A=it;it|=1;var i=Hn.transition,t=pt;try{if(Hn.transition=null,pt=1,n)return n()}finally{pt=t,Hn.transition=i,it=A,!(it&6)&&jo()}}function yl(){pn=rg.current,bt(rg)}function ps(n,A){n.finishedWork=null,n.finishedLanes=0;var i=n.timeoutHandle;if(i!==-1&&(n.timeoutHandle=-1,UJ(i)),ei!==null)for(i=ei.return;i!==null;){var t=i;switch(il(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&xC();break;case 3:fg(),bt(nn),bt(Gi),cl();break;case 5:Cl(t);break;case 4:fg();break;case 13:bt(Pt);break;case 19:bt(Pt);break;case 10:sl(t.type._context);break;case 22:case 23:yl()}i=i.return}if(pi=n,ei=n=ko(n.current,null),wi=pn=A,ri=0,Va=null,hl=Bc=hs=0,An=wa=null,Cs!==null){for(A=0;A<Cs.length;A++)if(i=Cs[A],t=i.interleaved,t!==null){i.interleaved=null;var o=t.next,s=i.pending;if(s!==null){var g=s.next;s.next=o,t.next=g}i.pending=t}Cs=null}return n}function w1(n,A){do{var i=ei;try{if(ol(),lC.current=jC,qC){for(var t=Jt.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}qC=!1}if(ds=0,ci=ni=Jt=null,Da=!1,Ya=0,dl.current=null,i===null||i.return===null){ri=1,Va=A,ei=null;break}A:{var s=n,g=i.return,a=i,I=A;if(A=wi,a.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var _=I,p=a,B=p.tag;if(!(p.mode&1)&&(B===0||B===11||B===15)){var l=p.alternate;l?(p.updateQueue=l.updateQueue,p.memoizedState=l.memoizedState,p.lanes=l.lanes):(p.updateQueue=null,p.memoizedState=null)}var Q=Qx(g);if(Q!==null){Q.flags&=-257,dx(Q,g,a,s,A),Q.mode&1&&Ex(s,_,A),A=Q,I=_;var h=A.updateQueue;if(h===null){var y=new Set;y.add(I),A.updateQueue=y}else h.add(I);break A}else{if(!(A&1)){Ex(s,_,A),ml();break A}I=Error(hA(426))}}else if(Ht&&a.mode&1){var u=Qx(g);if(u!==null){!(u.flags&65536)&&(u.flags|=256),dx(u,g,a,s,A),nl(yg(I,a));break A}}s=I=yg(I,a),ri!==4&&(ri=2),wa===null?wa=[s]:wa.push(s),s=g;do{switch(s.tag){case 3:s.flags|=65536,A&=-A,s.lanes|=A;var E=I1(s,I,A);Cx(s,E);break A;case 1:a=I;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Go===null||!Go.has(m)))){s.flags|=65536,A&=-A,s.lanes|=A;var D=C1(s,a,A);Cx(s,D);break A}}s=s.return}while(s!==null)}b1(i)}catch(L){A=L,ei===i&&i!==null&&(ei=i=i.return);continue}break}while(!0)}function M1(){var n=VC.current;return VC.current=jC,n===null?jC:n}function ml(){(ri===0||ri===3||ri===2)&&(ri=4),pi===null||!(hs&268435455)&&!(Bc&268435455)||Do(pi,wi)}function ZC(n,A){var i=it;it|=2;var t=M1();(pi!==n||wi!==A)&&(Or=null,ps(n,A));do try{oO();break}catch(o){w1(n,o)}while(!0);if(ol(),it=i,VC.current=t,ei!==null)throw Error(hA(261));return pi=null,wi=0,ri}function oO(){for(;ei!==null;)R1(ei)}function sO(){for(;ei!==null&&!N2();)R1(ei)}function R1(n){var A=N1(n.alternate,n,pn);n.memoizedProps=n.pendingProps,A===null?b1(n):ei=A,dl.current=null}function b1(n){var A=n;do{var i=A.alternate;if(n=A.return,A.flags&32768){if(i=AO(i,A),i!==null){i.flags&=32767,ei=i;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ri=6,ei=null;return}}else if(i=$J(i,A,pn),i!==null){ei=i;return}if(A=A.sibling,A!==null){ei=A;return}ei=A=n}while(A!==null);ri===0&&(ri=5)}function rs(n,A,i){var t=pt,o=Hn.transition;try{Hn.transition=null,pt=1,gO(n,A,i,t)}finally{Hn.transition=o,pt=t}return null}function gO(n,A,i,t){do cg();while(Ro!==null);if(it&6)throw Error(hA(327));i=n.finishedWork;var o=n.finishedLanes;if(i===null)return null;if(n.finishedWork=null,n.finishedLanes=0,i===n.current)throw Error(hA(177));n.callbackNode=null,n.callbackPriority=0;var s=i.lanes|i.childLanes;if(P2(n,s),n===pi&&(ei=pi=null,wi=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||bI||(bI=!0,F1(NC,function(){return cg(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var g=pt;pt=1;var a=it;it|=4,dl.current=null,tO(n,i),m1(i,n),MJ(Ep),LC=!!lp,Ep=lp=null,n.current=i,iO(i),F2(),it=a,pt=g,Hn.transition=s}else n.current=i;if(bI&&(bI=!1,Ro=n,zC=o),s=n.pendingLanes,s===0&&(Go=null),T2(i.stateNode),on(n,Zt()),A!==null)for(t=n.onRecoverableError,i=0;i<A.length;i++)o=A[i],t(o.value,{componentStack:o.stack,digest:o.digest});if(WC)throw WC=!1,n=Gp,Gp=null,n;return zC&1&&n.tag!==0&&cg(),s=n.pendingLanes,s&1?n===xp?Ma++:(Ma=0,xp=n):Ma=0,jo(),null}function cg(){if(Ro!==null){var n=IK(zC),A=Hn.transition,i=pt;try{if(Hn.transition=null,pt=16>n?16:n,Ro===null)var t=!1;else{if(n=Ro,Ro=null,zC=0,it&6)throw Error(hA(331));var o=it;for(it|=4,qA=n.current;qA!==null;){var s=qA,g=s.child;if(qA.flags&16){var a=s.deletions;if(a!==null){for(var I=0;I<a.length;I++){var _=a[I];for(qA=_;qA!==null;){var p=qA;switch(p.tag){case 0:case 11:case 15:Sa(8,p,s)}var B=p.child;if(B!==null)B.return=p,qA=B;else for(;qA!==null;){p=qA;var l=p.sibling,Q=p.return;if(u1(p),p===_){qA=null;break}if(l!==null){l.return=Q,qA=l;break}qA=Q}}}var h=s.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var u=y.sibling;y.sibling=null,y=u}while(y!==null)}}qA=s}}if(s.subtreeFlags&2064&&g!==null)g.return=s,qA=g;else A:for(;qA!==null;){if(s=qA,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,qA=E;break A}qA=s.return}}var f=n.current;for(qA=f;qA!==null;){g=qA;var m=g.child;if(g.subtreeFlags&2064&&m!==null)m.return=g,qA=m;else A:for(g=f;qA!==null;){if(a=qA,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(L){Vt(a,a.return,L)}if(a===g){qA=null;break A}var D=a.sibling;if(D!==null){D.return=a.return,qA=D;break A}qA=a.return}}if(it=o,jo(),Mr&&typeof Mr.onPostCommitFiberRoot=="function")try{Mr.onPostCommitFiberRoot(oc,n)}catch{}t=!0}return t}finally{pt=i,Hn.transition=A}}return!1}function Nx(n,A,i){A=yg(i,A),A=I1(n,A,1),n=To(n,A,1),A=Ji(),n!==null&&(AI(n,1,A),on(n,A))}function Vt(n,A,i){if(n.tag===3)Nx(n,n,i);else for(;A!==null;){if(A.tag===3){Nx(A,n,i);break}else if(A.tag===1){var t=A.stateNode;if(typeof A.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Go===null||!Go.has(t))){n=yg(i,n),n=C1(A,n,1),A=To(A,n,1),n=Ji(),A!==null&&(AI(A,1,n),on(A,n));break}}A=A.return}}function aO(n,A,i){var t=n.pingCache;t!==null&&t.delete(A),A=Ji(),n.pingedLanes|=n.suspendedLanes&i,pi===n&&(wi&i)===i&&(ri===4||ri===3&&(wi&130023424)===wi&&500>Zt()-ul?ps(n,0):hl|=i),on(n,A)}function v1(n,A){A===0&&(n.mode&1?(A=hI,hI<<=1,!(hI&130023424)&&(hI=4194304)):A=1);var i=Ji();n=no(n,A),n!==null&&(AI(n,A,i),on(n,i))}function IO(n){var A=n.memoizedState,i=0;A!==null&&(i=A.retryLane),v1(n,i)}function CO(n,A){var i=0;switch(n.tag){case 13:var t=n.stateNode,o=n.memoizedState;o!==null&&(i=o.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(hA(314))}t!==null&&t.delete(A),v1(n,i)}var N1;N1=function(n,A,i){if(n!==null)if(n.memoizedProps!==A.pendingProps||nn.current)tn=!0;else{if(!(n.lanes&i)&&!(A.flags&128))return tn=!1,XJ(n,A,i);tn=!!(n.flags&131072)}else tn=!1,Ht&&A.flags&1048576&&TK(A,KC,A.index);switch(A.lanes=0,A.tag){case 2:var t=A.type;QC(n,A),n=A.pendingProps;var o=dg(A,Gi.current);Cg(A,i),o=pl(null,A,t,n,o,i);var s=Bl();return A.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(A.tag=1,A.memoizedState=null,A.updateQueue=null,rn(t)?(s=!0,kC(A)):s=!1,A.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,al(A),o.updater=_c,A.stateNode=o,o._reactInternals=A,Sp(A,t,n,i),A=Rp(null,A,t,!0,s,i)):(A.tag=0,Ht&&s&&tl(A),Ki(null,A,o,i),A=A.child),A;case 16:t=A.elementType;A:{switch(QC(n,A),n=A.pendingProps,o=t._init,t=o(t._payload),A.type=t,o=A.tag=_O(t),n=er(t,n),o){case 0:A=Mp(null,A,t,n,i);break A;case 1:A=fx(null,A,t,n,i);break A;case 11:A=hx(null,A,t,n,i);break A;case 14:A=ux(null,A,t,er(t.type,n),i);break A}throw Error(hA(306,t,""))}return A;case 0:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:er(t,o),Mp(n,A,t,o,i);case 1:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:er(t,o),fx(n,A,t,o,i);case 3:A:{if(B1(A),n===null)throw Error(hA(387));t=A.pendingProps,s=A.memoizedState,o=s.element,PK(n,A),OC(A,t,null,i);var g=A.memoizedState;if(t=g.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},A.updateQueue.baseState=s,A.memoizedState=s,A.flags&256){o=yg(Error(hA(423)),A),A=yx(n,A,t,i,o);break A}else if(t!==o){o=yg(Error(hA(424)),A),A=yx(n,A,t,i,o);break A}else for(Bn=Uo(A.stateNode.containerInfo.firstChild),ln=A,Ht=!0,ir=null,i=HK(A,null,t,i),A.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(hg(),t===o){A=ro(n,A,i);break A}Ki(n,A,t,i)}A=A.child}return A;case 5:return JK(A),n===null&&yp(A),t=A.type,o=A.pendingProps,s=n!==null?n.memoizedProps:null,g=o.children,Qp(t,o)?g=null:s!==null&&Qp(t,s)&&(A.flags|=32),p1(n,A),Ki(n,A,g,i),A.child;case 6:return n===null&&yp(A),null;case 13:return l1(n,A,i);case 4:return Il(A,A.stateNode.containerInfo),t=A.pendingProps,n===null?A.child=ug(A,null,t,i):Ki(n,A,t,i),A.child;case 11:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:er(t,o),hx(n,A,t,o,i);case 7:return Ki(n,A,A.pendingProps,i),A.child;case 8:return Ki(n,A,A.pendingProps.children,i),A.child;case 12:return Ki(n,A,A.pendingProps.children,i),A.child;case 10:A:{if(t=A.type._context,o=A.pendingProps,s=A.memoizedProps,g=o.value,ut(PC,t._currentValue),t._currentValue=g,s!==null)if(Ir(s.value,g)){if(s.children===o.children&&!nn.current){A=ro(n,A,i);break A}}else for(s=A.child,s!==null&&(s.return=A);s!==null;){var a=s.dependencies;if(a!==null){g=s.child;for(var I=a.firstContext;I!==null;){if(I.context===t){if(s.tag===1){I=$r(-1,i&-i),I.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var p=_.pending;p===null?I.next=I:(I.next=p.next,p.next=I),_.pending=I}}s.lanes|=i,I=s.alternate,I!==null&&(I.lanes|=i),mp(s.return,i,A),a.lanes|=i;break}I=I.next}}else if(s.tag===10)g=s.type===A.type?null:s.child;else if(s.tag===18){if(g=s.return,g===null)throw Error(hA(341));g.lanes|=i,a=g.alternate,a!==null&&(a.lanes|=i),mp(g,i,A),g=s.sibling}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===A){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}Ki(n,A,o.children,i),A=A.child}return A;case 9:return o=A.type,t=A.pendingProps.children,Cg(A,i),o=Pn(o),t=t(o),A.flags|=1,Ki(n,A,t,i),A.child;case 14:return t=A.type,o=er(t,A.pendingProps),o=er(t.type,o),ux(n,A,t,o,i);case 15:return c1(n,A,A.type,A.pendingProps,i);case 17:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:er(t,o),QC(n,A),A.tag=1,rn(t)?(n=!0,kC(A)):n=!1,Cg(A,i),a1(A,t,o),Sp(A,t,o,i),Rp(null,A,t,!0,n,i);case 19:return E1(n,A,i);case 22:return _1(n,A,i)}throw Error(hA(156,A.tag))};function F1(n,A){return oK(n,A)}function cO(n,A,i,t){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=A,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,A,i,t){return new cO(n,A,i,t)}function Dl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _O(n){if(typeof n=="function")return Dl(n)?1:0;if(n!=null){if(n=n.$$typeof,n===OB)return 11;if(n===YB)return 14}return 2}function ko(n,A){var i=n.alternate;return i===null?(i=Tn(n.tag,A,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=A,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&14680064,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,A=n.dependencies,i.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i}function uC(n,A,i,t,o,s){var g=2;if(t=n,typeof n=="function")Dl(n)&&(g=1);else if(typeof n=="string")g=5;else A:switch(n){case Ws:return Bs(i.children,o,s,A);case JB:g=8,o|=8;break;case z_:return n=Tn(12,i,A,o|2),n.elementType=z_,n.lanes=s,n;case Z_:return n=Tn(13,i,A,o),n.elementType=Z_,n.lanes=s,n;case X_:return n=Tn(19,i,A,o),n.elementType=X_,n.lanes=s,n;case JH:return lc(i,o,s,A);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case KH:g=10;break A;case PH:g=9;break A;case OB:g=11;break A;case YB:g=14;break A;case fo:g=16,t=null;break A}throw Error(hA(130,n==null?n:typeof n,""))}return A=Tn(g,i,A,o),A.elementType=n,A.type=t,A.lanes=s,A}function Bs(n,A,i,t){return n=Tn(7,n,t,A),n.lanes=i,n}function lc(n,A,i,t){return n=Tn(22,n,t,A),n.elementType=JH,n.lanes=i,n.stateNode={isHidden:!1},n}function i_(n,A,i){return n=Tn(6,n,null,A),n.lanes=i,n}function n_(n,A,i){return A=Tn(4,n.children!==null?n.children:[],n.key,A),A.lanes=i,A.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},A}function pO(n,A,i,t,o){this.tag=A,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sl(n,A,i,t,o,s,g,a,I){return n=new pO(n,A,i,a,I),A===1?(A=1,s===!0&&(A|=8)):A=0,s=Tn(3,null,null,A),n.current=s,s.stateNode=n,s.memoizedState={element:t,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},al(s),n}function BO(n,A,i){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:t==null?null:""+t,children:n,containerInfo:A,implementation:i}}function L1(n){if(!n)return Jo;n=n._reactInternals;A:{if(Ms(n)!==n||n.tag!==1)throw Error(hA(170));var A=n;do{switch(A.tag){case 3:A=A.stateNode.context;break A;case 1:if(rn(A.type)){A=A.stateNode.__reactInternalMemoizedMergedChildContext;break A}}A=A.return}while(A!==null);throw Error(hA(171))}if(n.tag===1){var i=n.type;if(rn(i))return LK(n,i,A)}return A}function U1(n,A,i,t,o,s,g,a,I){return n=Sl(i,t,!0,n,o,s,g,a,I),n.context=L1(null),i=n.current,t=Ji(),o=xo(i),s=$r(t,o),s.callback=A??null,To(i,s,o),n.current.lanes=o,AI(n,o,t),on(n,t),n}function Ec(n,A,i,t){var o=A.current,s=Ji(),g=xo(o);return i=L1(i),A.context===null?A.context=i:A.pendingContext=i,A=$r(s,g),A.payload={element:n},t=t===void 0?null:t,t!==null&&(A.callback=t),n=To(o,A,g),n!==null&&(gr(n,o,g,s),BC(n,o,g)),g}function XC(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fx(n,A){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<A?i:A}}function wl(n,A){Fx(n,A),(n=n.alternate)&&Fx(n,A)}function lO(){return null}var T1=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ml(n){this._internalRoot=n}Qc.prototype.render=Ml.prototype.render=function(n){var A=this._internalRoot;if(A===null)throw Error(hA(409));Ec(n,A,null,null)};Qc.prototype.unmount=Ml.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var A=n.containerInfo;us(function(){Ec(null,n,null,null)}),A[io]=null}};function Qc(n){this._internalRoot=n}Qc.prototype.unstable_scheduleHydration=function(n){if(n){var A=_K();n={blockedOn:null,target:n,priority:A};for(var i=0;i<mo.length&&A!==0&&A<mo[i].priority;i++);mo.splice(i,0,n),i===0&&BK(n)}};function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lx(){}function EO(n,A,i,t,o){if(o){if(typeof t=="function"){var s=t;t=function(){var _=XC(g);s.call(_)}}var g=U1(A,t,n,0,null,!1,!1,"",Lx);return n._reactRootContainer=g,n[io]=g.current,Ha(n.nodeType===8?n.parentNode:n),us(),g}for(;o=n.lastChild;)n.removeChild(o);if(typeof t=="function"){var a=t;t=function(){var _=XC(I);a.call(_)}}var I=Sl(n,0,!1,null,null,!1,!1,"",Lx);return n._reactRootContainer=I,n[io]=I.current,Ha(n.nodeType===8?n.parentNode:n),us(function(){Ec(A,I,i,t)}),I}function hc(n,A,i,t,o){var s=i._reactRootContainer;if(s){var g=s;if(typeof o=="function"){var a=o;o=function(){var I=XC(g);a.call(I)}}Ec(A,g,n,o)}else g=EO(i,A,n,o,t);return XC(g)}CK=function(n){switch(n.tag){case 3:var A=n.stateNode;if(A.current.memoizedState.isDehydrated){var i=Ba(A.pendingLanes);i!==0&&(VB(A,i|1),on(A,Zt()),!(it&6)&&(mg=Zt()+500,jo()))}break;case 13:us(function(){var t=no(n,1);if(t!==null){var o=Ji();gr(t,n,1,o)}}),wl(n,1)}};WB=function(n){if(n.tag===13){var A=no(n,134217728);if(A!==null){var i=Ji();gr(A,n,134217728,i)}wl(n,134217728)}};cK=function(n){if(n.tag===13){var A=xo(n),i=no(n,A);if(i!==null){var t=Ji();gr(i,n,A,t)}wl(n,A)}};_K=function(){return pt};pK=function(n,A){var i=pt;try{return pt=n,A()}finally{pt=i}};gp=function(n,A,i){switch(A){case"input":if(ep(n,i),A=i.name,i.type==="radio"&&A!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+A)+'][type="radio"]'),A=0;A<i.length;A++){var t=i[A];if(t!==n&&t.form===n.form){var o=Ic(t);if(!o)throw Error(hA(90));YH(t),ep(t,o)}}}break;case"textarea":jH(n,i);break;case"select":A=i.value,A!=null&&sg(n,!!i.multiple,A,!1)}};AK=fl;eK=us;var QO={usingClientEntryPoint:!1,Events:[tI,$s,Ic,XH,$H,fl]},ia={findFiberByHostInstance:Is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dO={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ao.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=nK(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||lO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vI=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vI.isDisabled&&vI.supportsFiber)try{oc=vI.inject(dO),Mr=vI}catch{}}Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QO;Qn.createPortal=function(n,A){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(A))throw Error(hA(200));return BO(n,A,null,i)};Qn.createRoot=function(n,A){if(!Rl(n))throw Error(hA(299));var i=!1,t="",o=T1;return A!=null&&(A.unstable_strictMode===!0&&(i=!0),A.identifierPrefix!==void 0&&(t=A.identifierPrefix),A.onRecoverableError!==void 0&&(o=A.onRecoverableError)),A=Sl(n,1,!1,null,null,i,!1,t,o),n[io]=A.current,Ha(n.nodeType===8?n.parentNode:n),new Ml(A)};Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var A=n._reactInternals;if(A===void 0)throw typeof n.render=="function"?Error(hA(188)):(n=Object.keys(n).join(","),Error(hA(268,n)));return n=nK(A),n=n===null?null:n.stateNode,n};Qn.flushSync=function(n){return us(n)};Qn.hydrate=function(n,A,i){if(!dc(A))throw Error(hA(200));return hc(null,n,A,!0,i)};Qn.hydrateRoot=function(n,A,i){if(!Rl(n))throw Error(hA(405));var t=i!=null&&i.hydratedSources||null,o=!1,s="",g=T1;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),A=U1(A,null,n,1,i??null,o,!1,s,g),n[io]=A.current,Ha(n),t)for(n=0;n<t.length;n++)i=t[n],o=i._getVersion,o=o(i._source),A.mutableSourceEagerHydrationData==null?A.mutableSourceEagerHydrationData=[i,o]:A.mutableSourceEagerHydrationData.push(i,o);return new Qc(A)};Qn.render=function(n,A,i){if(!dc(A))throw Error(hA(200));return hc(null,n,A,!1,i)};Qn.unmountComponentAtNode=function(n){if(!dc(n))throw Error(hA(40));return n._reactRootContainer?(us(function(){hc(null,null,n,!1,function(){n._reactRootContainer=null,n[io]=null})}),!0):!1};Qn.unstable_batchedUpdates=fl;Qn.unstable_renderSubtreeIntoContainer=function(n,A,i,t){if(!dc(i))throw Error(hA(200));if(n==null||n._reactInternals===void 0)throw Error(hA(38));return hc(n,A,i,!1,t)};Qn.version="18.3.1-next-f1338f8080-20240426";function G1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1)}catch(n){console.error(n)}}G1(),GH.exports=Qn;var hO=GH.exports,uO,Ux=hO;uO=Ux.createRoot,Ux.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="170",fO=0,Tx=1,yO=2,x1=1,mO=2,Jr=3,oo=0,sn=1,mr=2,Ho=0,_g=1,Gx=2,xx=3,kx=4,DO=5,gs=100,SO=101,wO=102,MO=103,RO=104,bO=200,vO=201,NO=202,FO=203,Kp=204,Pp=205,LO=206,UO=207,TO=208,GO=209,xO=210,kO=211,HO=212,KO=213,PO=214,Jp=0,Op=1,Yp=2,Dg=3,qp=4,jp=5,Vp=6,Wp=7,fc=0,JO=1,OO=2,Ko=0,YO=1,qO=2,jO=3,VO=4,WO=5,zO=6,ZO=7,Hx="attached",XO="detached",k1=300,Sg=301,wg=302,$C=303,zp=304,yc=306,Oo=1e3,Sr=1001,Ac=1002,gn=1003,H1=1004,Ea=1005,Gn=1006,fC=1007,Wr=1008,so=1009,K1=1010,P1=1011,Wa=1012,bl=1013,fs=1014,or=1015,nI=1016,vl=1017,Nl=1018,Mg=1020,J1=35902,O1=1021,Y1=1022,xn=1023,q1=1024,j1=1025,pg=1026,Rg=1027,Fl=1028,Ll=1029,V1=1030,Ul=1031,Tl=1033,yC=33776,mC=33777,DC=33778,SC=33779,Zp=35840,Xp=35841,$p=35842,AB=35843,eB=36196,tB=37492,iB=37496,nB=37808,rB=37809,oB=37810,sB=37811,gB=37812,aB=37813,IB=37814,CB=37815,cB=37816,_B=37817,pB=37818,BB=37819,lB=37820,EB=37821,wC=36492,QB=36494,dB=36495,W1=36283,hB=36284,uB=36285,fB=36286,za=2300,Za=2301,r_=2302,Kx=2400,Px=2401,Jx=2402,$O=2500,AY=0,z1=1,yB=2,eY=3200,tY=3201,mc=0,iY=1,So="",vn="srgb",Gg="srgb-linear",Dc="linear",Qt="srgb",Ns=7680,Ox=519,nY=512,rY=513,oY=514,Z1=515,sY=516,gY=517,aY=518,IY=519,mB=35044,Yx="300 es",zr=2e3,ec=2001;class xg{addEventListener(A,i){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(i)===-1&&t[A].push(i)}hasEventListener(A,i){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(i)!==-1}removeEventListener(A,i){if(this._listeners===void 0)return;const o=this._listeners[A];if(o!==void 0){const s=o.indexOf(i);s!==-1&&o.splice(s,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const o=t.slice(0);for(let s=0,g=o.length;s<g;s++)o[s].call(this,A);A.target=null}}}const Li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qx=1234567;const Ra=Math.PI/180,bg=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,i=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(Li[n&255]+Li[n>>8&255]+Li[n>>16&255]+Li[n>>24&255]+"-"+Li[A&255]+Li[A>>8&255]+"-"+Li[A>>16&15|64]+Li[A>>24&255]+"-"+Li[i&63|128]+Li[i>>8&255]+"-"+Li[i>>16&255]+Li[i>>24&255]+Li[t&255]+Li[t>>8&255]+Li[t>>16&255]+Li[t>>24&255]).toLowerCase()}function Ai(n,A,i){return Math.max(A,Math.min(i,n))}function Gl(n,A){return(n%A+A)%A}function CY(n,A,i,t,o){return t+(n-A)*(o-t)/(i-A)}function cY(n,A,i){return n!==A?(i-n)/(A-n):0}function ba(n,A,i){return(1-i)*n+i*A}function _Y(n,A,i,t){return ba(n,A,1-Math.exp(-i*t))}function pY(n,A=1){return A-Math.abs(Gl(n,A*2)-A)}function BY(n,A,i){return n<=A?0:n>=i?1:(n=(n-A)/(i-A),n*n*(3-2*n))}function lY(n,A,i){return n<=A?0:n>=i?1:(n=(n-A)/(i-A),n*n*n*(n*(n*6-15)+10))}function EY(n,A){return n+Math.floor(Math.random()*(A-n+1))}function QY(n,A){return n+Math.random()*(A-n)}function dY(n){return n*(.5-Math.random())}function hY(n){n!==void 0&&(qx=n);let A=qx+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function uY(n){return n*Ra}function fY(n){return n*bg}function yY(n){return(n&n-1)===0&&n!==0}function mY(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function DY(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function SY(n,A,i,t,o){const s=Math.cos,g=Math.sin,a=s(i/2),I=g(i/2),_=s((A+t)/2),p=g((A+t)/2),B=s((A-t)/2),l=g((A-t)/2),Q=s((t-A)/2),h=g((t-A)/2);switch(o){case"XYX":n.set(a*p,I*B,I*l,a*_);break;case"YZY":n.set(I*l,a*p,I*B,a*_);break;case"ZXZ":n.set(I*B,I*l,a*p,a*_);break;case"XZX":n.set(a*p,I*h,I*Q,a*_);break;case"YXY":n.set(I*Q,a*p,I*h,a*_);break;case"ZYZ":n.set(I*h,I*Q,a*p,a*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function nr(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ln={DEG2RAD:Ra,RAD2DEG:bg,generateUUID:ar,clamp:Ai,euclideanModulo:Gl,mapLinear:CY,inverseLerp:cY,lerp:ba,damp:_Y,pingpong:pY,smoothstep:BY,smootherstep:lY,randInt:EY,randFloat:QY,randFloatSpread:dY,seededRandom:hY,degToRad:uY,radToDeg:fY,isPowerOfTwo:yY,ceilPowerOfTwo:mY,floorPowerOfTwo:DY,setQuaternionFromProperEuler:SY,normalize:_t,denormalize:nr};class Ke{constructor(A=0,i=0){Ke.prototype.isVector2=!0,this.x=A,this.y=i}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,i){return this.x=A,this.y=i,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const i=this.x,t=this.y,o=A.elements;return this.x=o[0]*i+o[3]*t+o[6],this.y=o[1]*i+o[4]*t+o[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const i=Math.sqrt(this.lengthSq()*A.lengthSq());if(i===0)return Math.PI/2;const t=this.dot(A)/i;return Math.acos(Ai(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const i=this.x-A.x,t=this.y-A.y;return i*i+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this}rotateAround(A,i){const t=Math.cos(i),o=Math.sin(i),s=this.x-A.x,g=this.y-A.y;return this.x=s*t-g*o+A.x,this.y=s*o+g*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(A,i,t,o,s,g,a,I,_){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,i,t,o,s,g,a,I,_)}set(A,i,t,o,s,g,a,I,_){const p=this.elements;return p[0]=A,p[1]=o,p[2]=a,p[3]=i,p[4]=s,p[5]=I,p[6]=t,p[7]=g,p[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const i=this.elements,t=A.elements;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],this}extractBasis(A,i,t){return A.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const i=A.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,i){const t=A.elements,o=i.elements,s=this.elements,g=t[0],a=t[3],I=t[6],_=t[1],p=t[4],B=t[7],l=t[2],Q=t[5],h=t[8],y=o[0],u=o[3],E=o[6],f=o[1],m=o[4],D=o[7],L=o[2],v=o[5],N=o[8];return s[0]=g*y+a*f+I*L,s[3]=g*u+a*m+I*v,s[6]=g*E+a*D+I*N,s[1]=_*y+p*f+B*L,s[4]=_*u+p*m+B*v,s[7]=_*E+p*D+B*N,s[2]=l*y+Q*f+h*L,s[5]=l*u+Q*m+h*v,s[8]=l*E+Q*D+h*N,this}multiplyScalar(A){const i=this.elements;return i[0]*=A,i[3]*=A,i[6]*=A,i[1]*=A,i[4]*=A,i[7]*=A,i[2]*=A,i[5]*=A,i[8]*=A,this}determinant(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8];return i*g*p-i*a*_-t*s*p+t*a*I+o*s*_-o*g*I}invert(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8],B=p*g-a*_,l=a*I-p*s,Q=_*s-g*I,h=i*B+t*l+o*Q;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/h;return A[0]=B*y,A[1]=(o*_-p*t)*y,A[2]=(a*t-o*g)*y,A[3]=l*y,A[4]=(p*i-o*I)*y,A[5]=(o*s-a*i)*y,A[6]=Q*y,A[7]=(t*I-_*i)*y,A[8]=(g*i-t*s)*y,this}transpose(){let A;const i=this.elements;return A=i[1],i[1]=i[3],i[3]=A,A=i[2],i[2]=i[6],i[6]=A,A=i[5],i[5]=i[7],i[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const i=this.elements;return A[0]=i[0],A[1]=i[3],A[2]=i[6],A[3]=i[1],A[4]=i[4],A[5]=i[7],A[6]=i[2],A[7]=i[5],A[8]=i[8],this}setUvTransform(A,i,t,o,s,g,a){const I=Math.cos(s),_=Math.sin(s);return this.set(t*I,t*_,-t*(I*g+_*a)+g+A,-o*_,o*I,-o*(-_*g+I*a)+a+i,0,0,1),this}scale(A,i){return this.premultiply(o_.makeScale(A,i)),this}rotate(A){return this.premultiply(o_.makeRotation(-A)),this}translate(A,i){return this.premultiply(o_.makeTranslation(A,i)),this}makeTranslation(A,i){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,i,0,0,1),this}makeRotation(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,-t,0,t,i,0,0,0,1),this}makeScale(A,i){return this.set(A,0,0,0,i,0,0,0,1),this}equals(A){const i=this.elements,t=A.elements;for(let o=0;o<9;o++)if(i[o]!==t[o])return!1;return!0}fromArray(A,i=0){for(let t=0;t<9;t++)this.elements[t]=A[t+i];return this}toArray(A=[],i=0){const t=this.elements;return A[i]=t[0],A[i+1]=t[1],A[i+2]=t[2],A[i+3]=t[3],A[i+4]=t[4],A[i+5]=t[5],A[i+6]=t[6],A[i+7]=t[7],A[i+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const o_=new Me;function X1(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wY(){const n=Xa("canvas");return n.style.display="block",n}const jx={};function Qa(n){n in jx||(jx[n]=!0,console.warn(n))}function MY(n,A,i){return new Promise(function(t,o){function s(){switch(n.clientWaitSync(A,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:t()}}setTimeout(s,i)})}function RY(n){const A=n.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function bY(n){const A=n.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const tt={enabled:!0,workingColorSpace:Gg,spaces:{},convert:function(n,A,i){return this.enabled===!1||A===i||!A||!i||(this.spaces[A].transfer===Qt&&(n.r=Ao(n.r),n.g=Ao(n.g),n.b=Ao(n.b)),this.spaces[A].primaries!==this.spaces[i].primaries&&(n.applyMatrix3(this.spaces[A].toXYZ),n.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Qt&&(n.r=Bg(n.r),n.g=Bg(n.g),n.b=Bg(n.b))),n},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===So?Dc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,A=this.workingColorSpace){return n.fromArray(this.spaces[A].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,A,i){return n.copy(this.spaces[A].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ao(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bg(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vx=[.64,.33,.3,.6,.15,.06],Wx=[.2126,.7152,.0722],zx=[.3127,.329],Zx=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xx=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Gg]:{primaries:Vx,whitePoint:zx,transfer:Dc,toXYZ:Zx,fromXYZ:Xx,luminanceCoefficients:Wx,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:Vx,whitePoint:zx,transfer:Qt,toXYZ:Zx,fromXYZ:Xx,luminanceCoefficients:Wx,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let Fs;class vY{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let i;if(A instanceof HTMLCanvasElement)i=A;else{Fs===void 0&&(Fs=Xa("canvas")),Fs.width=A.width,Fs.height=A.height;const t=Fs.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),i=Fs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const i=Xa("canvas");i.width=A.width,i.height=A.height;const t=i.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const o=t.getImageData(0,0,A.width,A.height),s=o.data;for(let g=0;g<s.length;g++)s[g]=Ao(s[g]/255)*255;return t.putImageData(o,0,0),i}else if(A.data){const i=A.data.slice(0);for(let t=0;t<i.length;t++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[t]=Math.floor(Ao(i[t]/255)*255):i[t]=Ao(i[t]);return{data:i,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let NY=0;class $1{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NY++}),this.uuid=ar(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const i=A===void 0||typeof A=="string";if(!i&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let g=0,a=o.length;g<a;g++)o[g].isDataTexture?s.push(s_(o[g].image)):s.push(s_(o[g]))}else s=s_(o);t.url=s}return i||(A.images[this.uuid]=t),t}}function s_(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vY.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FY=0;class ti extends xg{constructor(A=ti.DEFAULT_IMAGE,i=ti.DEFAULT_MAPPING,t=Sr,o=Sr,s=Gn,g=Wr,a=xn,I=so,_=ti.DEFAULT_ANISOTROPY,p=So){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FY++}),this.uuid=ar(),this.name="",this.source=new $1(A),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=t,this.wrapT=o,this.magFilter=s,this.minFilter=g,this.anisotropy=_,this.format=a,this.internalFormat=null,this.type=I,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const i=A===void 0||typeof A=="string";if(!i&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),i||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==k1)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Oo:A.x=A.x-Math.floor(A.x);break;case Sr:A.x=A.x<0?0:1;break;case Ac:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Oo:A.y=A.y-Math.floor(A.y);break;case Sr:A.y=A.y<0?0:1;break;case Ac:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=k1;ti.DEFAULT_ANISOTROPY=1;class ve{constructor(A=0,i=0,t=0,o=1){ve.prototype.isVector4=!0,this.x=A,this.y=i,this.z=t,this.w=o}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,i,t,o){return this.x=A,this.y=i,this.z=t,this.w=o,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this.z=A.z+i.z,this.w=A.w+i.w,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this.z+=A.z*i,this.w+=A.w*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this.z=A.z-i.z,this.w=A.w-i.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const i=this.x,t=this.y,o=this.z,s=this.w,g=A.elements;return this.x=g[0]*i+g[4]*t+g[8]*o+g[12]*s,this.y=g[1]*i+g[5]*t+g[9]*o+g[13]*s,this.z=g[2]*i+g[6]*t+g[10]*o+g[14]*s,this.w=g[3]*i+g[7]*t+g[11]*o+g[15]*s,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const i=Math.sqrt(1-A.w*A.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/i,this.y=A.y/i,this.z=A.z/i),this}setAxisAngleFromRotationMatrix(A){let i,t,o,s;const I=A.elements,_=I[0],p=I[4],B=I[8],l=I[1],Q=I[5],h=I[9],y=I[2],u=I[6],E=I[10];if(Math.abs(p-l)<.01&&Math.abs(B-y)<.01&&Math.abs(h-u)<.01){if(Math.abs(p+l)<.1&&Math.abs(B+y)<.1&&Math.abs(h+u)<.1&&Math.abs(_+Q+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const m=(_+1)/2,D=(Q+1)/2,L=(E+1)/2,v=(p+l)/4,N=(B+y)/4,U=(h+u)/4;return m>D&&m>L?m<.01?(t=0,o=.707106781,s=.707106781):(t=Math.sqrt(m),o=v/t,s=N/t):D>L?D<.01?(t=.707106781,o=0,s=.707106781):(o=Math.sqrt(D),t=v/o,s=U/o):L<.01?(t=.707106781,o=.707106781,s=0):(s=Math.sqrt(L),t=N/s,o=U/s),this.set(t,o,s,i),this}let f=Math.sqrt((u-h)*(u-h)+(B-y)*(B-y)+(l-p)*(l-p));return Math.abs(f)<.001&&(f=1),this.x=(u-h)/f,this.y=(B-y)/f,this.z=(l-p)/f,this.w=Math.acos((_+Q+E-1)/2),this}setFromMatrixPosition(A){const i=A.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this.z=Math.max(A.z,Math.min(i.z,this.z)),this.w=Math.max(A.w,Math.min(i.w,this.w)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this.z=Math.max(A,Math.min(i,this.z)),this.w=Math.max(A,Math.min(i,this.w)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this.z+=(A.z-this.z)*i,this.w+=(A.w-this.w)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this.z=A.z+(i.z-A.z)*t,this.w=A.w+(i.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this.z=A[i+2],this.w=A[i+3],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A[i+2]=this.z,A[i+3]=this.w,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this.z=A.getZ(i),this.w=A.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LY extends xg{constructor(A=1,i=1,t={}){super(),this.isRenderTarget=!0,this.width=A,this.height=i,this.depth=1,this.scissor=new ve(0,0,A,i),this.scissorTest=!1,this.viewport=new ve(0,0,A,i);const o={width:A,height:i,depth:1};t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},t);const s=new ti(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace);s.flipY=!1,s.generateMipmaps=t.generateMipmaps,s.internalFormat=t.internalFormat,this.textures=[];const g=t.count;for(let a=0;a<g;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,i,t=1){if(this.width!==A||this.height!==i||this.depth!==t){this.width=A,this.height=i,this.depth=t;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=A,this.textures[o].image.height=i,this.textures[o].image.depth=t;this.dispose()}this.viewport.set(0,0,A,i),this.scissor.set(0,0,A,i)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let t=0,o=A.textures.length;t<o;t++)this.textures[t]=A.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;const i=Object.assign({},A.texture.image);return this.texture.source=new $1(i),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends LY{constructor(A=1,i=1,t={}){super(A,i,t),this.isWebGLRenderTarget=!0}}class AP extends ti{constructor(A=null,i=1,t=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:i,height:t,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class UY extends ti{constructor(A=null,i=1,t=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:i,height:t,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(A=0,i=0,t=0,o=1){this.isQuaternion=!0,this._x=A,this._y=i,this._z=t,this._w=o}static slerpFlat(A,i,t,o,s,g,a){let I=t[o+0],_=t[o+1],p=t[o+2],B=t[o+3];const l=s[g+0],Q=s[g+1],h=s[g+2],y=s[g+3];if(a===0){A[i+0]=I,A[i+1]=_,A[i+2]=p,A[i+3]=B;return}if(a===1){A[i+0]=l,A[i+1]=Q,A[i+2]=h,A[i+3]=y;return}if(B!==y||I!==l||_!==Q||p!==h){let u=1-a;const E=I*l+_*Q+p*h+B*y,f=E>=0?1:-1,m=1-E*E;if(m>Number.EPSILON){const L=Math.sqrt(m),v=Math.atan2(L,E*f);u=Math.sin(u*v)/L,a=Math.sin(a*v)/L}const D=a*f;if(I=I*u+l*D,_=_*u+Q*D,p=p*u+h*D,B=B*u+y*D,u===1-a){const L=1/Math.sqrt(I*I+_*_+p*p+B*B);I*=L,_*=L,p*=L,B*=L}}A[i]=I,A[i+1]=_,A[i+2]=p,A[i+3]=B}static multiplyQuaternionsFlat(A,i,t,o,s,g){const a=t[o],I=t[o+1],_=t[o+2],p=t[o+3],B=s[g],l=s[g+1],Q=s[g+2],h=s[g+3];return A[i]=a*h+p*B+I*Q-_*l,A[i+1]=I*h+p*l+_*B-a*Q,A[i+2]=_*h+p*Q+a*l-I*B,A[i+3]=p*h-a*B-I*l-_*Q,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,i,t,o){return this._x=A,this._y=i,this._z=t,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,i=!0){const t=A._x,o=A._y,s=A._z,g=A._order,a=Math.cos,I=Math.sin,_=a(t/2),p=a(o/2),B=a(s/2),l=I(t/2),Q=I(o/2),h=I(s/2);switch(g){case"XYZ":this._x=l*p*B+_*Q*h,this._y=_*Q*B-l*p*h,this._z=_*p*h+l*Q*B,this._w=_*p*B-l*Q*h;break;case"YXZ":this._x=l*p*B+_*Q*h,this._y=_*Q*B-l*p*h,this._z=_*p*h-l*Q*B,this._w=_*p*B+l*Q*h;break;case"ZXY":this._x=l*p*B-_*Q*h,this._y=_*Q*B+l*p*h,this._z=_*p*h+l*Q*B,this._w=_*p*B-l*Q*h;break;case"ZYX":this._x=l*p*B-_*Q*h,this._y=_*Q*B+l*p*h,this._z=_*p*h-l*Q*B,this._w=_*p*B+l*Q*h;break;case"YZX":this._x=l*p*B+_*Q*h,this._y=_*Q*B+l*p*h,this._z=_*p*h-l*Q*B,this._w=_*p*B-l*Q*h;break;case"XZY":this._x=l*p*B-_*Q*h,this._y=_*Q*B-l*p*h,this._z=_*p*h+l*Q*B,this._w=_*p*B+l*Q*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+g)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,i){const t=i/2,o=Math.sin(t);return this._x=A.x*o,this._y=A.y*o,this._z=A.z*o,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const i=A.elements,t=i[0],o=i[4],s=i[8],g=i[1],a=i[5],I=i[9],_=i[2],p=i[6],B=i[10],l=t+a+B;if(l>0){const Q=.5/Math.sqrt(l+1);this._w=.25/Q,this._x=(p-I)*Q,this._y=(s-_)*Q,this._z=(g-o)*Q}else if(t>a&&t>B){const Q=2*Math.sqrt(1+t-a-B);this._w=(p-I)/Q,this._x=.25*Q,this._y=(o+g)/Q,this._z=(s+_)/Q}else if(a>B){const Q=2*Math.sqrt(1+a-t-B);this._w=(s-_)/Q,this._x=(o+g)/Q,this._y=.25*Q,this._z=(I+p)/Q}else{const Q=2*Math.sqrt(1+B-t-a);this._w=(g-o)/Q,this._x=(s+_)/Q,this._y=(I+p)/Q,this._z=.25*Q}return this._onChangeCallback(),this}setFromUnitVectors(A,i){let t=A.dot(i)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*i.z-A.z*i.y,this._y=A.z*i.x-A.x*i.z,this._z=A.x*i.y-A.y*i.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Ai(this.dot(A),-1,1)))}rotateTowards(A,i){const t=this.angleTo(A);if(t===0)return this;const o=Math.min(1,i/t);return this.slerp(A,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,i){const t=A._x,o=A._y,s=A._z,g=A._w,a=i._x,I=i._y,_=i._z,p=i._w;return this._x=t*p+g*a+o*_-s*I,this._y=o*p+g*I+s*a-t*_,this._z=s*p+g*_+t*I-o*a,this._w=g*p-t*a-o*I-s*_,this._onChangeCallback(),this}slerp(A,i){if(i===0)return this;if(i===1)return this.copy(A);const t=this._x,o=this._y,s=this._z,g=this._w;let a=g*A._w+t*A._x+o*A._y+s*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=g,this._x=t,this._y=o,this._z=s,this;const I=1-a*a;if(I<=Number.EPSILON){const Q=1-i;return this._w=Q*g+i*this._w,this._x=Q*t+i*this._x,this._y=Q*o+i*this._y,this._z=Q*s+i*this._z,this.normalize(),this}const _=Math.sqrt(I),p=Math.atan2(_,a),B=Math.sin((1-i)*p)/_,l=Math.sin(i*p)/_;return this._w=g*B+this._w*l,this._x=t*B+this._x*l,this._y=o*B+this._y*l,this._z=s*B+this._z*l,this._onChangeCallback(),this}slerpQuaternions(A,i,t){return this.copy(A).slerp(i,t)}random(){const A=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),t=Math.random(),o=Math.sqrt(1-t),s=Math.sqrt(t);return this.set(o*Math.sin(A),o*Math.cos(A),s*Math.sin(i),s*Math.cos(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,i=0){return this._x=A[i],this._y=A[i+1],this._z=A[i+2],this._w=A[i+3],this._onChangeCallback(),this}toArray(A=[],i=0){return A[i]=this._x,A[i+1]=this._y,A[i+2]=this._z,A[i+3]=this._w,A}fromBufferAttribute(A,i){return this._x=A.getX(i),this._y=A.getY(i),this._z=A.getZ(i),this._w=A.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(A=0,i=0,t=0){k.prototype.isVector3=!0,this.x=A,this.y=i,this.z=t}set(A,i,t){return t===void 0&&(t=this.z),this.x=A,this.y=i,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this.z=A.z+i.z,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this.z+=A.z*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this.z=A.z-i.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,i){return this.x=A.x*i.x,this.y=A.y*i.y,this.z=A.z*i.z,this}applyEuler(A){return this.applyQuaternion($x.setFromEuler(A))}applyAxisAngle(A,i){return this.applyQuaternion($x.setFromAxisAngle(A,i))}applyMatrix3(A){const i=this.x,t=this.y,o=this.z,s=A.elements;return this.x=s[0]*i+s[3]*t+s[6]*o,this.y=s[1]*i+s[4]*t+s[7]*o,this.z=s[2]*i+s[5]*t+s[8]*o,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const i=this.x,t=this.y,o=this.z,s=A.elements,g=1/(s[3]*i+s[7]*t+s[11]*o+s[15]);return this.x=(s[0]*i+s[4]*t+s[8]*o+s[12])*g,this.y=(s[1]*i+s[5]*t+s[9]*o+s[13])*g,this.z=(s[2]*i+s[6]*t+s[10]*o+s[14])*g,this}applyQuaternion(A){const i=this.x,t=this.y,o=this.z,s=A.x,g=A.y,a=A.z,I=A.w,_=2*(g*o-a*t),p=2*(a*i-s*o),B=2*(s*t-g*i);return this.x=i+I*_+g*B-a*p,this.y=t+I*p+a*_-s*B,this.z=o+I*B+s*p-g*_,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const i=this.x,t=this.y,o=this.z,s=A.elements;return this.x=s[0]*i+s[4]*t+s[8]*o,this.y=s[1]*i+s[5]*t+s[9]*o,this.z=s[2]*i+s[6]*t+s[10]*o,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this.z=Math.max(A.z,Math.min(i.z,this.z)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this.z=Math.max(A,Math.min(i,this.z)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this.z+=(A.z-this.z)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this.z=A.z+(i.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,i){const t=A.x,o=A.y,s=A.z,g=i.x,a=i.y,I=i.z;return this.x=o*I-s*a,this.y=s*g-t*I,this.z=t*a-o*g,this}projectOnVector(A){const i=A.lengthSq();if(i===0)return this.set(0,0,0);const t=A.dot(this)/i;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return g_.copy(this).projectOnVector(A),this.sub(g_)}reflect(A){return this.sub(g_.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const i=Math.sqrt(this.lengthSq()*A.lengthSq());if(i===0)return Math.PI/2;const t=this.dot(A)/i;return Math.acos(Ai(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const i=this.x-A.x,t=this.y-A.y,o=this.z-A.z;return i*i+t*t+o*o}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,i,t){const o=Math.sin(i)*A;return this.x=o*Math.sin(t),this.y=Math.cos(i)*A,this.z=o*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,i,t){return this.x=A*Math.sin(i),this.y=t,this.z=A*Math.cos(i),this}setFromMatrixPosition(A){const i=A.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(A){const i=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),o=this.setFromMatrixColumn(A,2).length();return this.x=i,this.y=t,this.z=o,this}setFromMatrixColumn(A,i){return this.fromArray(A.elements,i*4)}setFromMatrix3Column(A,i){return this.fromArray(A.elements,i*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this.z=A[i+2],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A[i+2]=this.z,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this.z=A.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,i=Math.random()*2-1,t=Math.sqrt(1-i*i);return this.x=t*Math.cos(A),this.y=i,this.z=t*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const g_=new k,$x=new kn;class On{constructor(A=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=i}set(A,i){return this.min.copy(A),this.max.copy(i),this}setFromArray(A){this.makeEmpty();for(let i=0,t=A.length;i<t;i+=3)this.expandByPoint(Zn.fromArray(A,i));return this}setFromBufferAttribute(A){this.makeEmpty();for(let i=0,t=A.count;i<t;i++)this.expandByPoint(Zn.fromBufferAttribute(A,i));return this}setFromPoints(A){this.makeEmpty();for(let i=0,t=A.length;i<t;i++)this.expandByPoint(A[i]);return this}setFromCenterAndSize(A,i){const t=Zn.copy(i).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,i=!1){return this.makeEmpty(),this.expandByObject(A,i)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,i=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0){const s=t.getAttribute("position");if(i===!0&&s!==void 0&&A.isInstancedMesh!==!0)for(let g=0,a=s.count;g<a;g++)A.isMesh===!0?A.getVertexPosition(g,Zn):Zn.fromBufferAttribute(s,g),Zn.applyMatrix4(A.matrixWorld),this.expandByPoint(Zn);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),NI.copy(A.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),NI.copy(t.boundingBox)),NI.applyMatrix4(A.matrixWorld),this.union(NI)}const o=A.children;for(let s=0,g=o.length;s<g;s++)this.expandByObject(o[s],i);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,i){return i.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Zn),Zn.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let i,t;return A.normal.x>0?(i=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(i=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(i+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(i+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(i+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(i+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),i<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(na),FI.subVectors(this.max,na),Ls.subVectors(A.a,na),Us.subVectors(A.b,na),Ts.subVectors(A.c,na),_o.subVectors(Us,Ls),po.subVectors(Ts,Us),zo.subVectors(Ls,Ts);let i=[0,-_o.z,_o.y,0,-po.z,po.y,0,-zo.z,zo.y,_o.z,0,-_o.x,po.z,0,-po.x,zo.z,0,-zo.x,-_o.y,_o.x,0,-po.y,po.x,0,-zo.y,zo.x,0];return!a_(i,Ls,Us,Ts,FI)||(i=[1,0,0,0,1,0,0,0,1],!a_(i,Ls,Us,Ts,FI))?!1:(LI.crossVectors(_o,po),i=[LI.x,LI.y,LI.z],a_(i,Ls,Us,Ts,FI))}clampPoint(A,i){return i.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Zn).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Zn).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Gr),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Gr=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,NI=new On,Ls=new k,Us=new k,Ts=new k,_o=new k,po=new k,zo=new k,na=new k,FI=new k,LI=new k,Zo=new k;function a_(n,A,i,t,o){for(let s=0,g=n.length-3;s<=g;s+=3){Zo.fromArray(n,s);const a=o.x*Math.abs(Zo.x)+o.y*Math.abs(Zo.y)+o.z*Math.abs(Zo.z),I=A.dot(Zo),_=i.dot(Zo),p=t.dot(Zo);if(Math.max(-Math.max(I,_,p),Math.min(I,_,p))>a)return!1}return!0}const TY=new On,ra=new k,I_=new k;class Yn{constructor(A=new k,i=-1){this.isSphere=!0,this.center=A,this.radius=i}set(A,i){return this.center.copy(A),this.radius=i,this}setFromPoints(A,i){const t=this.center;i!==void 0?t.copy(i):TY.setFromPoints(A).getCenter(t);let o=0;for(let s=0,g=A.length;s<g;s++)o=Math.max(o,t.distanceToSquared(A[s]));return this.radius=Math.sqrt(o),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const i=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=i*i}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,i){const t=this.center.distanceToSquared(A);return i.copy(A),t>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;ra.subVectors(A,this.center);const i=ra.lengthSq();if(i>this.radius*this.radius){const t=Math.sqrt(i),o=(t-this.radius)*.5;this.center.addScaledVector(ra,o/t),this.radius+=o}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(I_.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(ra.copy(A.center).add(I_)),this.expandByPoint(ra.copy(A.center).sub(I_))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xr=new k,C_=new k,UI=new k,Bo=new k,c_=new k,TI=new k,__=new k;class rI{constructor(A=new k,i=new k(0,0,-1)){this.origin=A,this.direction=i}set(A,i){return this.origin.copy(A),this.direction.copy(i),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,i){return i.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,xr)),this}closestPointToPoint(A,i){i.subVectors(A,this.origin);const t=i.dot(this.direction);return t<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const i=xr.subVectors(A,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(A):(xr.copy(this.origin).addScaledVector(this.direction,i),xr.distanceToSquared(A))}distanceSqToSegment(A,i,t,o){C_.copy(A).add(i).multiplyScalar(.5),UI.copy(i).sub(A).normalize(),Bo.copy(this.origin).sub(C_);const s=A.distanceTo(i)*.5,g=-this.direction.dot(UI),a=Bo.dot(this.direction),I=-Bo.dot(UI),_=Bo.lengthSq(),p=Math.abs(1-g*g);let B,l,Q,h;if(p>0)if(B=g*I-a,l=g*a-I,h=s*p,B>=0)if(l>=-h)if(l<=h){const y=1/p;B*=y,l*=y,Q=B*(B+g*l+2*a)+l*(g*B+l+2*I)+_}else l=s,B=Math.max(0,-(g*l+a)),Q=-B*B+l*(l+2*I)+_;else l=-s,B=Math.max(0,-(g*l+a)),Q=-B*B+l*(l+2*I)+_;else l<=-h?(B=Math.max(0,-(-g*s+a)),l=B>0?-s:Math.min(Math.max(-s,-I),s),Q=-B*B+l*(l+2*I)+_):l<=h?(B=0,l=Math.min(Math.max(-s,-I),s),Q=l*(l+2*I)+_):(B=Math.max(0,-(g*s+a)),l=B>0?s:Math.min(Math.max(-s,-I),s),Q=-B*B+l*(l+2*I)+_);else l=g>0?-s:s,B=Math.max(0,-(g*l+a)),Q=-B*B+l*(l+2*I)+_;return t&&t.copy(this.origin).addScaledVector(this.direction,B),o&&o.copy(C_).addScaledVector(UI,l),Q}intersectSphere(A,i){xr.subVectors(A.center,this.origin);const t=xr.dot(this.direction),o=xr.dot(xr)-t*t,s=A.radius*A.radius;if(o>s)return null;const g=Math.sqrt(s-o),a=t-g,I=t+g;return I<0?null:a<0?this.at(I,i):this.at(a,i)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const i=A.normal.dot(this.direction);if(i===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/i;return t>=0?t:null}intersectPlane(A,i){const t=this.distanceToPlane(A);return t===null?null:this.at(t,i)}intersectsPlane(A){const i=A.distanceToPoint(this.origin);return i===0||A.normal.dot(this.direction)*i<0}intersectBox(A,i){let t,o,s,g,a,I;const _=1/this.direction.x,p=1/this.direction.y,B=1/this.direction.z,l=this.origin;return _>=0?(t=(A.min.x-l.x)*_,o=(A.max.x-l.x)*_):(t=(A.max.x-l.x)*_,o=(A.min.x-l.x)*_),p>=0?(s=(A.min.y-l.y)*p,g=(A.max.y-l.y)*p):(s=(A.max.y-l.y)*p,g=(A.min.y-l.y)*p),t>g||s>o||((s>t||isNaN(t))&&(t=s),(g<o||isNaN(o))&&(o=g),B>=0?(a=(A.min.z-l.z)*B,I=(A.max.z-l.z)*B):(a=(A.max.z-l.z)*B,I=(A.min.z-l.z)*B),t>I||a>o)||((a>t||t!==t)&&(t=a),(I<o||o!==o)&&(o=I),o<0)?null:this.at(t>=0?t:o,i)}intersectsBox(A){return this.intersectBox(A,xr)!==null}intersectTriangle(A,i,t,o,s){c_.subVectors(i,A),TI.subVectors(t,A),__.crossVectors(c_,TI);let g=this.direction.dot(__),a;if(g>0){if(o)return null;a=1}else if(g<0)a=-1,g=-g;else return null;Bo.subVectors(this.origin,A);const I=a*this.direction.dot(TI.crossVectors(Bo,TI));if(I<0)return null;const _=a*this.direction.dot(c_.cross(Bo));if(_<0||I+_>g)return null;const p=-a*Bo.dot(__);return p<0?null:this.at(p/g,s)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jA{constructor(A,i,t,o,s,g,a,I,_,p,B,l,Q,h,y,u){jA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,i,t,o,s,g,a,I,_,p,B,l,Q,h,y,u)}set(A,i,t,o,s,g,a,I,_,p,B,l,Q,h,y,u){const E=this.elements;return E[0]=A,E[4]=i,E[8]=t,E[12]=o,E[1]=s,E[5]=g,E[9]=a,E[13]=I,E[2]=_,E[6]=p,E[10]=B,E[14]=l,E[3]=Q,E[7]=h,E[11]=y,E[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jA().fromArray(this.elements)}copy(A){const i=this.elements,t=A.elements;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],this}copyPosition(A){const i=this.elements,t=A.elements;return i[12]=t[12],i[13]=t[13],i[14]=t[14],this}setFromMatrix3(A){const i=A.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(A,i,t){return A.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,i,t){return this.set(A.x,i.x,t.x,0,A.y,i.y,t.y,0,A.z,i.z,t.z,0,0,0,0,1),this}extractRotation(A){const i=this.elements,t=A.elements,o=1/Gs.setFromMatrixColumn(A,0).length(),s=1/Gs.setFromMatrixColumn(A,1).length(),g=1/Gs.setFromMatrixColumn(A,2).length();return i[0]=t[0]*o,i[1]=t[1]*o,i[2]=t[2]*o,i[3]=0,i[4]=t[4]*s,i[5]=t[5]*s,i[6]=t[6]*s,i[7]=0,i[8]=t[8]*g,i[9]=t[9]*g,i[10]=t[10]*g,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(A){const i=this.elements,t=A.x,o=A.y,s=A.z,g=Math.cos(t),a=Math.sin(t),I=Math.cos(o),_=Math.sin(o),p=Math.cos(s),B=Math.sin(s);if(A.order==="XYZ"){const l=g*p,Q=g*B,h=a*p,y=a*B;i[0]=I*p,i[4]=-I*B,i[8]=_,i[1]=Q+h*_,i[5]=l-y*_,i[9]=-a*I,i[2]=y-l*_,i[6]=h+Q*_,i[10]=g*I}else if(A.order==="YXZ"){const l=I*p,Q=I*B,h=_*p,y=_*B;i[0]=l+y*a,i[4]=h*a-Q,i[8]=g*_,i[1]=g*B,i[5]=g*p,i[9]=-a,i[2]=Q*a-h,i[6]=y+l*a,i[10]=g*I}else if(A.order==="ZXY"){const l=I*p,Q=I*B,h=_*p,y=_*B;i[0]=l-y*a,i[4]=-g*B,i[8]=h+Q*a,i[1]=Q+h*a,i[5]=g*p,i[9]=y-l*a,i[2]=-g*_,i[6]=a,i[10]=g*I}else if(A.order==="ZYX"){const l=g*p,Q=g*B,h=a*p,y=a*B;i[0]=I*p,i[4]=h*_-Q,i[8]=l*_+y,i[1]=I*B,i[5]=y*_+l,i[9]=Q*_-h,i[2]=-_,i[6]=a*I,i[10]=g*I}else if(A.order==="YZX"){const l=g*I,Q=g*_,h=a*I,y=a*_;i[0]=I*p,i[4]=y-l*B,i[8]=h*B+Q,i[1]=B,i[5]=g*p,i[9]=-a*p,i[2]=-_*p,i[6]=Q*B+h,i[10]=l-y*B}else if(A.order==="XZY"){const l=g*I,Q=g*_,h=a*I,y=a*_;i[0]=I*p,i[4]=-B,i[8]=_*p,i[1]=l*B+y,i[5]=g*p,i[9]=Q*B-h,i[2]=h*B-Q,i[6]=a*p,i[10]=y*B+l}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(A){return this.compose(GY,A,xY)}lookAt(A,i,t){const o=this.elements;return cn.subVectors(A,i),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),lo.crossVectors(t,cn),lo.lengthSq()===0&&(Math.abs(t.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),lo.crossVectors(t,cn)),lo.normalize(),GI.crossVectors(cn,lo),o[0]=lo.x,o[4]=GI.x,o[8]=cn.x,o[1]=lo.y,o[5]=GI.y,o[9]=cn.y,o[2]=lo.z,o[6]=GI.z,o[10]=cn.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,i){const t=A.elements,o=i.elements,s=this.elements,g=t[0],a=t[4],I=t[8],_=t[12],p=t[1],B=t[5],l=t[9],Q=t[13],h=t[2],y=t[6],u=t[10],E=t[14],f=t[3],m=t[7],D=t[11],L=t[15],v=o[0],N=o[4],U=o[8],b=o[12],S=o[1],G=o[5],nA=o[9],X=o[13],gA=o[2],EA=o[6],tA=o[10],fA=o[14],H=o[3],oA=o[7],pA=o[11],bA=o[15];return s[0]=g*v+a*S+I*gA+_*H,s[4]=g*N+a*G+I*EA+_*oA,s[8]=g*U+a*nA+I*tA+_*pA,s[12]=g*b+a*X+I*fA+_*bA,s[1]=p*v+B*S+l*gA+Q*H,s[5]=p*N+B*G+l*EA+Q*oA,s[9]=p*U+B*nA+l*tA+Q*pA,s[13]=p*b+B*X+l*fA+Q*bA,s[2]=h*v+y*S+u*gA+E*H,s[6]=h*N+y*G+u*EA+E*oA,s[10]=h*U+y*nA+u*tA+E*pA,s[14]=h*b+y*X+u*fA+E*bA,s[3]=f*v+m*S+D*gA+L*H,s[7]=f*N+m*G+D*EA+L*oA,s[11]=f*U+m*nA+D*tA+L*pA,s[15]=f*b+m*X+D*fA+L*bA,this}multiplyScalar(A){const i=this.elements;return i[0]*=A,i[4]*=A,i[8]*=A,i[12]*=A,i[1]*=A,i[5]*=A,i[9]*=A,i[13]*=A,i[2]*=A,i[6]*=A,i[10]*=A,i[14]*=A,i[3]*=A,i[7]*=A,i[11]*=A,i[15]*=A,this}determinant(){const A=this.elements,i=A[0],t=A[4],o=A[8],s=A[12],g=A[1],a=A[5],I=A[9],_=A[13],p=A[2],B=A[6],l=A[10],Q=A[14],h=A[3],y=A[7],u=A[11],E=A[15];return h*(+s*I*B-o*_*B-s*a*l+t*_*l+o*a*Q-t*I*Q)+y*(+i*I*Q-i*_*l+s*g*l-o*g*Q+o*_*p-s*I*p)+u*(+i*_*B-i*a*Q-s*g*B+t*g*Q+s*a*p-t*_*p)+E*(-o*a*p-i*I*B+i*a*l+o*g*B-t*g*l+t*I*p)}transpose(){const A=this.elements;let i;return i=A[1],A[1]=A[4],A[4]=i,i=A[2],A[2]=A[8],A[8]=i,i=A[6],A[6]=A[9],A[9]=i,i=A[3],A[3]=A[12],A[12]=i,i=A[7],A[7]=A[13],A[13]=i,i=A[11],A[11]=A[14],A[14]=i,this}setPosition(A,i,t){const o=this.elements;return A.isVector3?(o[12]=A.x,o[13]=A.y,o[14]=A.z):(o[12]=A,o[13]=i,o[14]=t),this}invert(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8],B=A[9],l=A[10],Q=A[11],h=A[12],y=A[13],u=A[14],E=A[15],f=B*u*_-y*l*_+y*I*Q-a*u*Q-B*I*E+a*l*E,m=h*l*_-p*u*_-h*I*Q+g*u*Q+p*I*E-g*l*E,D=p*y*_-h*B*_+h*a*Q-g*y*Q-p*a*E+g*B*E,L=h*B*I-p*y*I-h*a*l+g*y*l+p*a*u-g*B*u,v=i*f+t*m+o*D+s*L;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/v;return A[0]=f*N,A[1]=(y*l*s-B*u*s-y*o*Q+t*u*Q+B*o*E-t*l*E)*N,A[2]=(a*u*s-y*I*s+y*o*_-t*u*_-a*o*E+t*I*E)*N,A[3]=(B*I*s-a*l*s-B*o*_+t*l*_+a*o*Q-t*I*Q)*N,A[4]=m*N,A[5]=(p*u*s-h*l*s+h*o*Q-i*u*Q-p*o*E+i*l*E)*N,A[6]=(h*I*s-g*u*s-h*o*_+i*u*_+g*o*E-i*I*E)*N,A[7]=(g*l*s-p*I*s+p*o*_-i*l*_-g*o*Q+i*I*Q)*N,A[8]=D*N,A[9]=(h*B*s-p*y*s-h*t*Q+i*y*Q+p*t*E-i*B*E)*N,A[10]=(g*y*s-h*a*s+h*t*_-i*y*_-g*t*E+i*a*E)*N,A[11]=(p*a*s-g*B*s-p*t*_+i*B*_+g*t*Q-i*a*Q)*N,A[12]=L*N,A[13]=(p*y*o-h*B*o+h*t*l-i*y*l-p*t*u+i*B*u)*N,A[14]=(h*a*o-g*y*o-h*t*I+i*y*I+g*t*u-i*a*u)*N,A[15]=(g*B*o-p*a*o+p*t*I-i*B*I-g*t*l+i*a*l)*N,this}scale(A){const i=this.elements,t=A.x,o=A.y,s=A.z;return i[0]*=t,i[4]*=o,i[8]*=s,i[1]*=t,i[5]*=o,i[9]*=s,i[2]*=t,i[6]*=o,i[10]*=s,i[3]*=t,i[7]*=o,i[11]*=s,this}getMaxScaleOnAxis(){const A=this.elements,i=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],o=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(i,t,o))}makeTranslation(A,i,t){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,i,0,0,1,t,0,0,0,1),this}makeRotationX(A){const i=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,i,-t,0,0,t,i,0,0,0,0,1),this}makeRotationY(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,0,t,0,0,1,0,0,-t,0,i,0,0,0,0,1),this}makeRotationZ(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,-t,0,0,t,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,i){const t=Math.cos(i),o=Math.sin(i),s=1-t,g=A.x,a=A.y,I=A.z,_=s*g,p=s*a;return this.set(_*g+t,_*a-o*I,_*I+o*a,0,_*a+o*I,p*a+t,p*I-o*g,0,_*I-o*a,p*I+o*g,s*I*I+t,0,0,0,0,1),this}makeScale(A,i,t){return this.set(A,0,0,0,0,i,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,i,t,o,s,g){return this.set(1,t,s,0,A,1,g,0,i,o,1,0,0,0,0,1),this}compose(A,i,t){const o=this.elements,s=i._x,g=i._y,a=i._z,I=i._w,_=s+s,p=g+g,B=a+a,l=s*_,Q=s*p,h=s*B,y=g*p,u=g*B,E=a*B,f=I*_,m=I*p,D=I*B,L=t.x,v=t.y,N=t.z;return o[0]=(1-(y+E))*L,o[1]=(Q+D)*L,o[2]=(h-m)*L,o[3]=0,o[4]=(Q-D)*v,o[5]=(1-(l+E))*v,o[6]=(u+f)*v,o[7]=0,o[8]=(h+m)*N,o[9]=(u-f)*N,o[10]=(1-(l+y))*N,o[11]=0,o[12]=A.x,o[13]=A.y,o[14]=A.z,o[15]=1,this}decompose(A,i,t){const o=this.elements;let s=Gs.set(o[0],o[1],o[2]).length();const g=Gs.set(o[4],o[5],o[6]).length(),a=Gs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),A.x=o[12],A.y=o[13],A.z=o[14],Xn.copy(this);const _=1/s,p=1/g,B=1/a;return Xn.elements[0]*=_,Xn.elements[1]*=_,Xn.elements[2]*=_,Xn.elements[4]*=p,Xn.elements[5]*=p,Xn.elements[6]*=p,Xn.elements[8]*=B,Xn.elements[9]*=B,Xn.elements[10]*=B,i.setFromRotationMatrix(Xn),t.x=s,t.y=g,t.z=a,this}makePerspective(A,i,t,o,s,g,a=zr){const I=this.elements,_=2*s/(i-A),p=2*s/(t-o),B=(i+A)/(i-A),l=(t+o)/(t-o);let Q,h;if(a===zr)Q=-(g+s)/(g-s),h=-2*g*s/(g-s);else if(a===ec)Q=-g/(g-s),h=-g*s/(g-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return I[0]=_,I[4]=0,I[8]=B,I[12]=0,I[1]=0,I[5]=p,I[9]=l,I[13]=0,I[2]=0,I[6]=0,I[10]=Q,I[14]=h,I[3]=0,I[7]=0,I[11]=-1,I[15]=0,this}makeOrthographic(A,i,t,o,s,g,a=zr){const I=this.elements,_=1/(i-A),p=1/(t-o),B=1/(g-s),l=(i+A)*_,Q=(t+o)*p;let h,y;if(a===zr)h=(g+s)*B,y=-2*B;else if(a===ec)h=s*B,y=-1*B;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return I[0]=2*_,I[4]=0,I[8]=0,I[12]=-l,I[1]=0,I[5]=2*p,I[9]=0,I[13]=-Q,I[2]=0,I[6]=0,I[10]=y,I[14]=-h,I[3]=0,I[7]=0,I[11]=0,I[15]=1,this}equals(A){const i=this.elements,t=A.elements;for(let o=0;o<16;o++)if(i[o]!==t[o])return!1;return!0}fromArray(A,i=0){for(let t=0;t<16;t++)this.elements[t]=A[t+i];return this}toArray(A=[],i=0){const t=this.elements;return A[i]=t[0],A[i+1]=t[1],A[i+2]=t[2],A[i+3]=t[3],A[i+4]=t[4],A[i+5]=t[5],A[i+6]=t[6],A[i+7]=t[7],A[i+8]=t[8],A[i+9]=t[9],A[i+10]=t[10],A[i+11]=t[11],A[i+12]=t[12],A[i+13]=t[13],A[i+14]=t[14],A[i+15]=t[15],A}}const Gs=new k,Xn=new jA,GY=new k(0,0,0),xY=new k(1,1,1),lo=new k,GI=new k,cn=new k,Ak=new jA,ek=new kn;class Si{constructor(A=0,i=0,t=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=i,this._z=t,this._order=o}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,i,t,o=this._order){return this._x=A,this._y=i,this._z=t,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,i=this._order,t=!0){const o=A.elements,s=o[0],g=o[4],a=o[8],I=o[1],_=o[5],p=o[9],B=o[2],l=o[6],Q=o[10];switch(i){case"XYZ":this._y=Math.asin(Ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,Q),this._z=Math.atan2(-g,s)):(this._x=Math.atan2(l,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Ai(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,Q),this._z=Math.atan2(I,_)):(this._y=Math.atan2(-B,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ai(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-B,Q),this._z=Math.atan2(-g,_)):(this._y=0,this._z=Math.atan2(I,s));break;case"ZYX":this._y=Math.asin(-Ai(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(l,Q),this._z=Math.atan2(I,s)):(this._x=0,this._z=Math.atan2(-g,_));break;case"YZX":this._z=Math.asin(Ai(I,-1,1)),Math.abs(I)<.9999999?(this._x=Math.atan2(-p,_),this._y=Math.atan2(-B,s)):(this._x=0,this._y=Math.atan2(a,Q));break;case"XZY":this._z=Math.asin(-Ai(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(l,_),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,Q),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,i,t){return Ak.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ak,i,t)}setFromVector3(A,i=this._order){return this.set(A.x,A.y,A.z,i)}reorder(A){return ek.setFromEuler(this),this.setFromQuaternion(ek,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],i=0){return A[i]=this._x,A[i+1]=this._y,A[i+2]=this._z,A[i+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let kY=0;const tk=new k,xs=new kn,kr=new jA,xI=new k,oa=new k,HY=new k,KY=new kn,ik=new k(1,0,0),nk=new k(0,1,0),rk=new k(0,0,1),ok={type:"added"},PY={type:"removed"},ks={type:"childadded",child:null},p_={type:"childremoved",child:null};class ft extends xg{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kY++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const A=new k,i=new Si,t=new kn,o=new k(1,1,1);function s(){t.setFromEuler(i,!1)}function g(){i.setFromQuaternion(t,void 0,!1)}i._onChange(s),t._onChange(g),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jA},normalMatrix:{value:new Me}}),this.matrix=new jA,this.matrixWorld=new jA,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,i){this.quaternion.setFromAxisAngle(A,i)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,i){return xs.setFromAxisAngle(A,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(A,i){return xs.setFromAxisAngle(A,i),this.quaternion.premultiply(xs),this}rotateX(A){return this.rotateOnAxis(ik,A)}rotateY(A){return this.rotateOnAxis(nk,A)}rotateZ(A){return this.rotateOnAxis(rk,A)}translateOnAxis(A,i){return tk.copy(A).applyQuaternion(this.quaternion),this.position.add(tk.multiplyScalar(i)),this}translateX(A){return this.translateOnAxis(ik,A)}translateY(A){return this.translateOnAxis(nk,A)}translateZ(A){return this.translateOnAxis(rk,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(A,i,t){A.isVector3?xI.copy(A):xI.set(A,i,t);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(oa,xI,this.up):kr.lookAt(xI,oa,this.up),this.quaternion.setFromRotationMatrix(kr),o&&(kr.extractRotation(o.matrixWorld),xs.setFromRotationMatrix(kr),this.quaternion.premultiply(xs.invert()))}add(A){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(ok),ks.child=A,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const i=this.children.indexOf(A);return i!==-1&&(A.parent=null,this.children.splice(i,1),A.dispatchEvent(PY),p_.child=A,this.dispatchEvent(p_),p_.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),kr.multiply(A.parent.matrixWorld)),A.applyMatrix4(kr),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(ok),ks.child=A,this.dispatchEvent(ks),ks.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,i){if(this[A]===i)return this;for(let t=0,o=this.children.length;t<o;t++){const g=this.children[t].getObjectByProperty(A,i);if(g!==void 0)return g}}getObjectsByProperty(A,i,t=[]){this[A]===i&&t.push(this);const o=this.children;for(let s=0,g=o.length;s<g;s++)o[s].getObjectsByProperty(A,i,t);return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,A,HY),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,KY,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return A.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(A){A(this);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].traverseVisible(A)}traverseAncestors(A){const i=this.parent;i!==null&&(A(i),i.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].updateMatrixWorld(A)}updateWorldMatrix(A,i){const t=this.parent;if(A===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let s=0,g=o.length;s<g;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(A){const i=A===void 0||typeof A=="string",t={};i&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,I){return a[I.uuid]===void 0&&(a[I.uuid]=I.toJSON(A)),I.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const I=a.shapes;if(Array.isArray(I))for(let _=0,p=I.length;_<p;_++){const B=I[_];s(A.shapes,B)}else s(A.shapes,I)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(A.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let I=0,_=this.material.length;I<_;I++)a.push(s(A.materials,this.material[I]));o.material=a}else o.material=s(A.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const I=this.animations[a];o.animations.push(s(A.animations,I))}}if(i){const a=g(A.geometries),I=g(A.materials),_=g(A.textures),p=g(A.images),B=g(A.shapes),l=g(A.skeletons),Q=g(A.animations),h=g(A.nodes);a.length>0&&(t.geometries=a),I.length>0&&(t.materials=I),_.length>0&&(t.textures=_),p.length>0&&(t.images=p),B.length>0&&(t.shapes=B),l.length>0&&(t.skeletons=l),Q.length>0&&(t.animations=Q),h.length>0&&(t.nodes=h)}return t.object=o,t;function g(a){const I=[];for(const _ in a){const p=a[_];delete p.metadata,I.push(p)}return I}}clone(A){return new this.constructor().copy(this,A)}copy(A,i=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),i===!0)for(let t=0;t<A.children.length;t++){const o=A.children[t];this.add(o.clone())}return this}}ft.DEFAULT_UP=new k(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new k,Hr=new k,B_=new k,Kr=new k,Hs=new k,Ks=new k,sk=new k,l_=new k,E_=new k,Q_=new k,d_=new ve,h_=new ve,u_=new ve;class rr{constructor(A=new k,i=new k,t=new k){this.a=A,this.b=i,this.c=t}static getNormal(A,i,t,o){o.subVectors(t,i),$n.subVectors(A,i),o.cross($n);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(A,i,t,o,s){$n.subVectors(o,i),Hr.subVectors(t,i),B_.subVectors(A,i);const g=$n.dot($n),a=$n.dot(Hr),I=$n.dot(B_),_=Hr.dot(Hr),p=Hr.dot(B_),B=g*_-a*a;if(B===0)return s.set(0,0,0),null;const l=1/B,Q=(_*I-a*p)*l,h=(g*p-a*I)*l;return s.set(1-Q-h,h,Q)}static containsPoint(A,i,t,o){return this.getBarycoord(A,i,t,o,Kr)===null?!1:Kr.x>=0&&Kr.y>=0&&Kr.x+Kr.y<=1}static getInterpolation(A,i,t,o,s,g,a,I){return this.getBarycoord(A,i,t,o,Kr)===null?(I.x=0,I.y=0,"z"in I&&(I.z=0),"w"in I&&(I.w=0),null):(I.setScalar(0),I.addScaledVector(s,Kr.x),I.addScaledVector(g,Kr.y),I.addScaledVector(a,Kr.z),I)}static getInterpolatedAttribute(A,i,t,o,s,g){return d_.setScalar(0),h_.setScalar(0),u_.setScalar(0),d_.fromBufferAttribute(A,i),h_.fromBufferAttribute(A,t),u_.fromBufferAttribute(A,o),g.setScalar(0),g.addScaledVector(d_,s.x),g.addScaledVector(h_,s.y),g.addScaledVector(u_,s.z),g}static isFrontFacing(A,i,t,o){return $n.subVectors(t,i),Hr.subVectors(A,i),$n.cross(Hr).dot(o)<0}set(A,i,t){return this.a.copy(A),this.b.copy(i),this.c.copy(t),this}setFromPointsAndIndices(A,i,t,o){return this.a.copy(A[i]),this.b.copy(A[t]),this.c.copy(A[o]),this}setFromAttributeAndIndices(A,i,t,o){return this.a.fromBufferAttribute(A,i),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,o),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return $n.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),$n.cross(Hr).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return rr.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,i){return rr.getBarycoord(A,this.a,this.b,this.c,i)}getInterpolation(A,i,t,o,s){return rr.getInterpolation(A,this.a,this.b,this.c,i,t,o,s)}containsPoint(A){return rr.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return rr.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,i){const t=this.a,o=this.b,s=this.c;let g,a;Hs.subVectors(o,t),Ks.subVectors(s,t),l_.subVectors(A,t);const I=Hs.dot(l_),_=Ks.dot(l_);if(I<=0&&_<=0)return i.copy(t);E_.subVectors(A,o);const p=Hs.dot(E_),B=Ks.dot(E_);if(p>=0&&B<=p)return i.copy(o);const l=I*B-p*_;if(l<=0&&I>=0&&p<=0)return g=I/(I-p),i.copy(t).addScaledVector(Hs,g);Q_.subVectors(A,s);const Q=Hs.dot(Q_),h=Ks.dot(Q_);if(h>=0&&Q<=h)return i.copy(s);const y=Q*_-I*h;if(y<=0&&_>=0&&h<=0)return a=_/(_-h),i.copy(t).addScaledVector(Ks,a);const u=p*h-Q*B;if(u<=0&&B-p>=0&&Q-h>=0)return sk.subVectors(s,o),a=(B-p)/(B-p+(Q-h)),i.copy(o).addScaledVector(sk,a);const E=1/(u+y+l);return g=y*E,a=l*E,i.copy(t).addScaledVector(Hs,g).addScaledVector(Ks,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const eP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Eo={h:0,s:0,l:0},kI={h:0,s:0,l:0};function f_(n,A,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(A-n)*6*i:i<1/2?A:i<2/3?n+(A-n)*6*(2/3-i):n}class te{constructor(A,i,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,i,t)}set(A,i,t){if(i===void 0&&t===void 0){const o=A;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(A,i,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,i=vn){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,tt.toWorkingColorSpace(this,i),this}setRGB(A,i,t,o=tt.workingColorSpace){return this.r=A,this.g=i,this.b=t,tt.toWorkingColorSpace(this,o),this}setHSL(A,i,t,o=tt.workingColorSpace){if(A=Gl(A,1),i=Ai(i,0,1),t=Ai(t,0,1),i===0)this.r=this.g=this.b=t;else{const s=t<=.5?t*(1+i):t+i-t*i,g=2*t-s;this.r=f_(g,s,A+1/3),this.g=f_(g,s,A),this.b=f_(g,s,A-1/3)}return tt.toWorkingColorSpace(this,o),this}setStyle(A,i=vn){function t(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(A)){let s;const g=o[1],a=o[2];switch(g){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(A)){const s=o[1],g=s.length;if(g===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(g===6)return this.setHex(parseInt(s,16),i);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,i);return this}setColorName(A,i=vn){const t=eP[A.toLowerCase()];return t!==void 0?this.setHex(t,i):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Ao(A.r),this.g=Ao(A.g),this.b=Ao(A.b),this}copyLinearToSRGB(A){return this.r=Bg(A.r),this.g=Bg(A.g),this.b=Bg(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=vn){return tt.fromWorkingColorSpace(Ui.copy(this),A),Math.round(Ai(Ui.r*255,0,255))*65536+Math.round(Ai(Ui.g*255,0,255))*256+Math.round(Ai(Ui.b*255,0,255))}getHexString(A=vn){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,i=tt.workingColorSpace){tt.fromWorkingColorSpace(Ui.copy(this),i);const t=Ui.r,o=Ui.g,s=Ui.b,g=Math.max(t,o,s),a=Math.min(t,o,s);let I,_;const p=(a+g)/2;if(a===g)I=0,_=0;else{const B=g-a;switch(_=p<=.5?B/(g+a):B/(2-g-a),g){case t:I=(o-s)/B+(o<s?6:0);break;case o:I=(s-t)/B+2;break;case s:I=(t-o)/B+4;break}I/=6}return A.h=I,A.s=_,A.l=p,A}getRGB(A,i=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ui.copy(this),i),A.r=Ui.r,A.g=Ui.g,A.b=Ui.b,A}getStyle(A=vn){tt.fromWorkingColorSpace(Ui.copy(this),A);const i=Ui.r,t=Ui.g,o=Ui.b;return A!==vn?`color(${A} ${i.toFixed(3)} ${t.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(t*255)},${Math.round(o*255)})`}offsetHSL(A,i,t){return this.getHSL(Eo),this.setHSL(Eo.h+A,Eo.s+i,Eo.l+t)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,i){return this.r=A.r+i.r,this.g=A.g+i.g,this.b=A.b+i.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,i){return this.r+=(A.r-this.r)*i,this.g+=(A.g-this.g)*i,this.b+=(A.b-this.b)*i,this}lerpColors(A,i,t){return this.r=A.r+(i.r-A.r)*t,this.g=A.g+(i.g-A.g)*t,this.b=A.b+(i.b-A.b)*t,this}lerpHSL(A,i){this.getHSL(Eo),A.getHSL(kI);const t=ba(Eo.h,kI.h,i),o=ba(Eo.s,kI.s,i),s=ba(Eo.l,kI.l,i);return this.setHSL(t,o,s),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const i=this.r,t=this.g,o=this.b,s=A.elements;return this.r=s[0]*i+s[3]*t+s[6]*o,this.g=s[1]*i+s[4]*t+s[7]*o,this.b=s[2]*i+s[5]*t+s[8]*o,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,i=0){return this.r=A[i],this.g=A[i+1],this.b=A[i+2],this}toArray(A=[],i=0){return A[i]=this.r,A[i+1]=this.g,A[i+2]=this.b,A}fromBufferAttribute(A,i){return this.r=A.getX(i),this.g=A.getY(i),this.b=A.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ui=new te;te.NAMES=eP;let JY=0;class Kn extends xg{static get type(){return"Material"}get type(){return this.constructor.type}set type(A){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JY++}),this.uuid=ar(),this.name="",this.blending=_g,this.side=oo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kp,this.blendDst=Pp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Dg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const i in A){const t=A[i];if(t===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(t):o&&o.isVector3&&t&&t.isVector3?o.copy(t):this[i]=t}}toJSON(A){const i=A===void 0||typeof A=="string";i&&(A={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==_g&&(t.blending=this.blending),this.side!==oo&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==Kp&&(t.blendSrc=this.blendSrc),this.blendDst!==Pp&&(t.blendDst=this.blendDst),this.blendEquation!==gs&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Dg&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ox&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function o(s){const g=[];for(const a in s){const I=s[a];delete I.metadata,g.push(I)}return g}if(i){const s=o(A.textures),g=o(A.images);s.length>0&&(t.textures=s),g.length>0&&(t.images=g)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const i=A.clippingPlanes;let t=null;if(i!==null){const o=i.length;t=new Array(o);for(let s=0;s!==o;++s)t[s]=i[s].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zr extends Kn{static get type(){return"MeshBasicMaterial"}constructor(A){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const $t=new k,HI=new Ke;class oi{constructor(A,i,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=i,this.count=A!==void 0?A.length/i:0,this.normalized=t,this.usage=mB,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,i){this.updateRanges.push({start:A,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,i,t){A*=this.itemSize,t*=i.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[A+o]=i.array[t+o];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let i=0,t=this.count;i<t;i++)HI.fromBufferAttribute(this,i),HI.applyMatrix3(A),this.setXY(i,HI.x,HI.y);else if(this.itemSize===3)for(let i=0,t=this.count;i<t;i++)$t.fromBufferAttribute(this,i),$t.applyMatrix3(A),this.setXYZ(i,$t.x,$t.y,$t.z);return this}applyMatrix4(A){for(let i=0,t=this.count;i<t;i++)$t.fromBufferAttribute(this,i),$t.applyMatrix4(A),this.setXYZ(i,$t.x,$t.y,$t.z);return this}applyNormalMatrix(A){for(let i=0,t=this.count;i<t;i++)$t.fromBufferAttribute(this,i),$t.applyNormalMatrix(A),this.setXYZ(i,$t.x,$t.y,$t.z);return this}transformDirection(A){for(let i=0,t=this.count;i<t;i++)$t.fromBufferAttribute(this,i),$t.transformDirection(A),this.setXYZ(i,$t.x,$t.y,$t.z);return this}set(A,i=0){return this.array.set(A,i),this}getComponent(A,i){let t=this.array[A*this.itemSize+i];return this.normalized&&(t=nr(t,this.array)),t}setComponent(A,i,t){return this.normalized&&(t=_t(t,this.array)),this.array[A*this.itemSize+i]=t,this}getX(A){let i=this.array[A*this.itemSize];return this.normalized&&(i=nr(i,this.array)),i}setX(A,i){return this.normalized&&(i=_t(i,this.array)),this.array[A*this.itemSize]=i,this}getY(A){let i=this.array[A*this.itemSize+1];return this.normalized&&(i=nr(i,this.array)),i}setY(A,i){return this.normalized&&(i=_t(i,this.array)),this.array[A*this.itemSize+1]=i,this}getZ(A){let i=this.array[A*this.itemSize+2];return this.normalized&&(i=nr(i,this.array)),i}setZ(A,i){return this.normalized&&(i=_t(i,this.array)),this.array[A*this.itemSize+2]=i,this}getW(A){let i=this.array[A*this.itemSize+3];return this.normalized&&(i=nr(i,this.array)),i}setW(A,i){return this.normalized&&(i=_t(i,this.array)),this.array[A*this.itemSize+3]=i,this}setXY(A,i,t){return A*=this.itemSize,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array)),this.array[A+0]=i,this.array[A+1]=t,this}setXYZ(A,i,t,o){return A*=this.itemSize,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array),o=_t(o,this.array)),this.array[A+0]=i,this.array[A+1]=t,this.array[A+2]=o,this}setXYZW(A,i,t,o,s){return A*=this.itemSize,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array),o=_t(o,this.array),s=_t(s,this.array)),this.array[A+0]=i,this.array[A+1]=t,this.array[A+2]=o,this.array[A+3]=s,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==mB&&(A.usage=this.usage),A}}class kl extends oi{constructor(A,i,t){super(new Uint16Array(A),i,t)}}class tP extends oi{constructor(A,i,t){super(new Uint32Array(A),i,t)}}class Xt extends oi{constructor(A,i,t){super(new Float32Array(A),i,t)}}let OY=0;const Rn=new jA,y_=new ft,Ps=new k,_n=new On,sa=new On,Ci=new k;class si extends xg{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OY++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(X1(A)?tP:kl)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,i){return this.attributes[A]=i,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,i,t=0){this.groups.push({start:A,count:i,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,i){this.drawRange.start=A,this.drawRange.count=i}applyMatrix4(A){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(A),i.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const s=new Me().getNormalMatrix(A);t.applyNormalMatrix(s),t.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(A),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Rn.makeRotationFromQuaternion(A),this.applyMatrix4(Rn),this}rotateX(A){return Rn.makeRotationX(A),this.applyMatrix4(Rn),this}rotateY(A){return Rn.makeRotationY(A),this.applyMatrix4(Rn),this}rotateZ(A){return Rn.makeRotationZ(A),this.applyMatrix4(Rn),this}translate(A,i,t){return Rn.makeTranslation(A,i,t),this.applyMatrix4(Rn),this}scale(A,i,t){return Rn.makeScale(A,i,t),this.applyMatrix4(Rn),this}lookAt(A){return y_.lookAt(A),y_.updateMatrix(),this.applyMatrix4(y_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(A){const i=this.getAttribute("position");if(i===void 0){const t=[];for(let o=0,s=A.length;o<s;o++){const g=A[o];t.push(g.x,g.y,g.z||0)}this.setAttribute("position",new Xt(t,3))}else{for(let t=0,o=i.count;t<o;t++){const s=A[t];i.setXYZ(t,s.x,s.y,s.z||0)}A.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const A=this.attributes.position,i=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),i)for(let t=0,o=i.length;t<o;t++){const s=i[t];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ci.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ci),Ci.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ci)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const A=this.attributes.position,i=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(A){const t=this.boundingSphere.center;if(_n.setFromBufferAttribute(A),i)for(let s=0,g=i.length;s<g;s++){const a=i[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ci.addVectors(_n.min,sa.min),_n.expandByPoint(Ci),Ci.addVectors(_n.max,sa.max),_n.expandByPoint(Ci)):(_n.expandByPoint(sa.min),_n.expandByPoint(sa.max))}_n.getCenter(t);let o=0;for(let s=0,g=A.count;s<g;s++)Ci.fromBufferAttribute(A,s),o=Math.max(o,t.distanceToSquared(Ci));if(i)for(let s=0,g=i.length;s<g;s++){const a=i[s],I=this.morphTargetsRelative;for(let _=0,p=a.count;_<p;_++)Ci.fromBufferAttribute(a,_),I&&(Ps.fromBufferAttribute(A,_),Ci.add(Ps)),o=Math.max(o,t.distanceToSquared(Ci))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,i=this.attributes;if(A===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=i.position,o=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*t.count),4));const g=this.getAttribute("tangent"),a=[],I=[];for(let U=0;U<t.count;U++)a[U]=new k,I[U]=new k;const _=new k,p=new k,B=new k,l=new Ke,Q=new Ke,h=new Ke,y=new k,u=new k;function E(U,b,S){_.fromBufferAttribute(t,U),p.fromBufferAttribute(t,b),B.fromBufferAttribute(t,S),l.fromBufferAttribute(s,U),Q.fromBufferAttribute(s,b),h.fromBufferAttribute(s,S),p.sub(_),B.sub(_),Q.sub(l),h.sub(l);const G=1/(Q.x*h.y-h.x*Q.y);isFinite(G)&&(y.copy(p).multiplyScalar(h.y).addScaledVector(B,-Q.y).multiplyScalar(G),u.copy(B).multiplyScalar(Q.x).addScaledVector(p,-h.x).multiplyScalar(G),a[U].add(y),a[b].add(y),a[S].add(y),I[U].add(u),I[b].add(u),I[S].add(u))}let f=this.groups;f.length===0&&(f=[{start:0,count:A.count}]);for(let U=0,b=f.length;U<b;++U){const S=f[U],G=S.start,nA=S.count;for(let X=G,gA=G+nA;X<gA;X+=3)E(A.getX(X+0),A.getX(X+1),A.getX(X+2))}const m=new k,D=new k,L=new k,v=new k;function N(U){L.fromBufferAttribute(o,U),v.copy(L);const b=a[U];m.copy(b),m.sub(L.multiplyScalar(L.dot(b))).normalize(),D.crossVectors(v,b);const G=D.dot(I[U])<0?-1:1;g.setXYZW(U,m.x,m.y,m.z,G)}for(let U=0,b=f.length;U<b;++U){const S=f[U],G=S.start,nA=S.count;for(let X=G,gA=G+nA;X<gA;X+=3)N(A.getX(X+0)),N(A.getX(X+1)),N(A.getX(X+2))}}computeVertexNormals(){const A=this.index,i=this.getAttribute("position");if(i!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new oi(new Float32Array(i.count*3),3),this.setAttribute("normal",t);else for(let l=0,Q=t.count;l<Q;l++)t.setXYZ(l,0,0,0);const o=new k,s=new k,g=new k,a=new k,I=new k,_=new k,p=new k,B=new k;if(A)for(let l=0,Q=A.count;l<Q;l+=3){const h=A.getX(l+0),y=A.getX(l+1),u=A.getX(l+2);o.fromBufferAttribute(i,h),s.fromBufferAttribute(i,y),g.fromBufferAttribute(i,u),p.subVectors(g,s),B.subVectors(o,s),p.cross(B),a.fromBufferAttribute(t,h),I.fromBufferAttribute(t,y),_.fromBufferAttribute(t,u),a.add(p),I.add(p),_.add(p),t.setXYZ(h,a.x,a.y,a.z),t.setXYZ(y,I.x,I.y,I.z),t.setXYZ(u,_.x,_.y,_.z)}else for(let l=0,Q=i.count;l<Q;l+=3)o.fromBufferAttribute(i,l+0),s.fromBufferAttribute(i,l+1),g.fromBufferAttribute(i,l+2),p.subVectors(g,s),B.subVectors(o,s),p.cross(B),t.setXYZ(l+0,p.x,p.y,p.z),t.setXYZ(l+1,p.x,p.y,p.z),t.setXYZ(l+2,p.x,p.y,p.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let i=0,t=A.count;i<t;i++)Ci.fromBufferAttribute(A,i),Ci.normalize(),A.setXYZ(i,Ci.x,Ci.y,Ci.z)}toNonIndexed(){function A(a,I){const _=a.array,p=a.itemSize,B=a.normalized,l=new _.constructor(I.length*p);let Q=0,h=0;for(let y=0,u=I.length;y<u;y++){a.isInterleavedBufferAttribute?Q=I[y]*a.data.stride+a.offset:Q=I[y]*p;for(let E=0;E<p;E++)l[h++]=_[Q++]}return new oi(l,p,B)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,t=this.index.array,o=this.attributes;for(const a in o){const I=o[a],_=A(I,t);i.setAttribute(a,_)}const s=this.morphAttributes;for(const a in s){const I=[],_=s[a];for(let p=0,B=_.length;p<B;p++){const l=_[p],Q=A(l,t);I.push(Q)}i.morphAttributes[a]=I}i.morphTargetsRelative=this.morphTargetsRelative;const g=this.groups;for(let a=0,I=g.length;a<I;a++){const _=g[a];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const I=this.parameters;for(const _ in I)I[_]!==void 0&&(A[_]=I[_]);return A}A.data={attributes:{}};const i=this.index;i!==null&&(A.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const t=this.attributes;for(const I in t){const _=t[I];A.data.attributes[I]=_.toJSON(A.data)}const o={};let s=!1;for(const I in this.morphAttributes){const _=this.morphAttributes[I],p=[];for(let B=0,l=_.length;B<l;B++){const Q=_[B];p.push(Q.toJSON(A.data))}p.length>0&&(o[I]=p,s=!0)}s&&(A.data.morphAttributes=o,A.data.morphTargetsRelative=this.morphTargetsRelative);const g=this.groups;g.length>0&&(A.data.groups=JSON.parse(JSON.stringify(g)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(i));const o=A.attributes;for(const _ in o){const p=o[_];this.setAttribute(_,p.clone(i))}const s=A.morphAttributes;for(const _ in s){const p=[],B=s[_];for(let l=0,Q=B.length;l<Q;l++)p.push(B[l].clone(i));this.morphAttributes[_]=p}this.morphTargetsRelative=A.morphTargetsRelative;const g=A.groups;for(let _=0,p=g.length;_<p;_++){const B=g[_];this.addGroup(B.start,B.count,B.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const I=A.boundingSphere;return I!==null&&(this.boundingSphere=I.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gk=new jA,Xo=new rI,KI=new Yn,ak=new k,PI=new k,JI=new k,OI=new k,m_=new k,YI=new k,Ik=new k,qI=new k;class _i extends ft{constructor(A=new si,i=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=i,this.updateMorphTargets()}copy(A,i){return super.copy(A,i),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,t=Object.keys(i);if(t.length>0){const o=i[t[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,g=o.length;s<g;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(A,i){const t=this.geometry,o=t.attributes.position,s=t.morphAttributes.position,g=t.morphTargetsRelative;i.fromBufferAttribute(o,A);const a=this.morphTargetInfluences;if(s&&a){YI.set(0,0,0);for(let I=0,_=s.length;I<_;I++){const p=a[I],B=s[I];p!==0&&(m_.fromBufferAttribute(B,A),g?YI.addScaledVector(m_,p):YI.addScaledVector(m_.sub(i),p))}i.add(YI)}return i}raycast(A,i){const t=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),KI.copy(t.boundingSphere),KI.applyMatrix4(s),Xo.copy(A.ray).recast(A.near),!(KI.containsPoint(Xo.origin)===!1&&(Xo.intersectSphere(KI,ak)===null||Xo.origin.distanceToSquared(ak)>(A.far-A.near)**2))&&(gk.copy(s).invert(),Xo.copy(A.ray).applyMatrix4(gk),!(t.boundingBox!==null&&Xo.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,i,Xo)))}_computeIntersections(A,i,t){let o;const s=this.geometry,g=this.material,a=s.index,I=s.attributes.position,_=s.attributes.uv,p=s.attributes.uv1,B=s.attributes.normal,l=s.groups,Q=s.drawRange;if(a!==null)if(Array.isArray(g))for(let h=0,y=l.length;h<y;h++){const u=l[h],E=g[u.materialIndex],f=Math.max(u.start,Q.start),m=Math.min(a.count,Math.min(u.start+u.count,Q.start+Q.count));for(let D=f,L=m;D<L;D+=3){const v=a.getX(D),N=a.getX(D+1),U=a.getX(D+2);o=jI(this,E,A,t,_,p,B,v,N,U),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=u.materialIndex,i.push(o))}}else{const h=Math.max(0,Q.start),y=Math.min(a.count,Q.start+Q.count);for(let u=h,E=y;u<E;u+=3){const f=a.getX(u),m=a.getX(u+1),D=a.getX(u+2);o=jI(this,g,A,t,_,p,B,f,m,D),o&&(o.faceIndex=Math.floor(u/3),i.push(o))}}else if(I!==void 0)if(Array.isArray(g))for(let h=0,y=l.length;h<y;h++){const u=l[h],E=g[u.materialIndex],f=Math.max(u.start,Q.start),m=Math.min(I.count,Math.min(u.start+u.count,Q.start+Q.count));for(let D=f,L=m;D<L;D+=3){const v=D,N=D+1,U=D+2;o=jI(this,E,A,t,_,p,B,v,N,U),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=u.materialIndex,i.push(o))}}else{const h=Math.max(0,Q.start),y=Math.min(I.count,Q.start+Q.count);for(let u=h,E=y;u<E;u+=3){const f=u,m=u+1,D=u+2;o=jI(this,g,A,t,_,p,B,f,m,D),o&&(o.faceIndex=Math.floor(u/3),i.push(o))}}}}function YY(n,A,i,t,o,s,g,a){let I;if(A.side===sn?I=t.intersectTriangle(g,s,o,!0,a):I=t.intersectTriangle(o,s,g,A.side===oo,a),I===null)return null;qI.copy(a),qI.applyMatrix4(n.matrixWorld);const _=i.ray.origin.distanceTo(qI);return _<i.near||_>i.far?null:{distance:_,point:qI.clone(),object:n}}function jI(n,A,i,t,o,s,g,a,I,_){n.getVertexPosition(a,PI),n.getVertexPosition(I,JI),n.getVertexPosition(_,OI);const p=YY(n,A,i,t,PI,JI,OI,Ik);if(p){const B=new k;rr.getBarycoord(Ik,PI,JI,OI,B),o&&(p.uv=rr.getInterpolatedAttribute(o,a,I,_,B,new Ke)),s&&(p.uv1=rr.getInterpolatedAttribute(s,a,I,_,B,new Ke)),g&&(p.normal=rr.getInterpolatedAttribute(g,a,I,_,B,new k),p.normal.dot(t.direction)>0&&p.normal.multiplyScalar(-1));const l={a,b:I,c:_,normal:new k,materialIndex:0};rr.getNormal(PI,JI,OI,l.normal),p.face=l,p.barycoord=B}return p}class oI extends si{constructor(A=1,i=1,t=1,o=1,s=1,g=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:i,depth:t,widthSegments:o,heightSegments:s,depthSegments:g};const a=this;o=Math.floor(o),s=Math.floor(s),g=Math.floor(g);const I=[],_=[],p=[],B=[];let l=0,Q=0;h("z","y","x",-1,-1,t,i,A,g,s,0),h("z","y","x",1,-1,t,i,-A,g,s,1),h("x","z","y",1,1,A,t,i,o,g,2),h("x","z","y",1,-1,A,t,-i,o,g,3),h("x","y","z",1,-1,A,i,t,o,s,4),h("x","y","z",-1,-1,A,i,-t,o,s,5),this.setIndex(I),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(B,2));function h(y,u,E,f,m,D,L,v,N,U,b){const S=D/N,G=L/U,nA=D/2,X=L/2,gA=v/2,EA=N+1,tA=U+1;let fA=0,H=0;const oA=new k;for(let pA=0;pA<tA;pA++){const bA=pA*G-X;for(let OA=0;OA<EA;OA++){const Ne=OA*S-nA;oA[y]=Ne*f,oA[u]=bA*m,oA[E]=gA,_.push(oA.x,oA.y,oA.z),oA[y]=0,oA[u]=0,oA[E]=v>0?1:-1,p.push(oA.x,oA.y,oA.z),B.push(OA/N),B.push(1-pA/U),fA+=1}}for(let pA=0;pA<U;pA++)for(let bA=0;bA<N;bA++){const OA=l+bA+EA*pA,Ne=l+bA+EA*(pA+1),rA=l+(bA+1)+EA*(pA+1),uA=l+(bA+1)+EA*pA;I.push(OA,Ne,uA),I.push(Ne,rA,uA),H+=6}a.addGroup(Q,H,b),Q+=H,l+=fA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new oI(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function vg(n){const A={};for(const i in n){A[i]={};for(const t in n[i]){const o=n[i][t];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[i][t]=null):A[i][t]=o.clone():Array.isArray(o)?A[i][t]=o.slice():A[i][t]=o}}return A}function Hi(n){const A={};for(let i=0;i<n.length;i++){const t=vg(n[i]);for(const o in t)A[o]=t[o]}return A}function qY(n){const A=[];for(let i=0;i<n.length;i++)A.push(n[i].clone());return A}function iP(n){const A=n.getRenderTarget();return A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tt.workingColorSpace}const Hl={clone:vg,merge:Hi};var jY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class go extends Kn{static get type(){return"ShaderMaterial"}constructor(A){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jY,this.fragmentShader=VY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=vg(A.uniforms),this.uniformsGroups=qY(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const i=super.toJSON(A);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const g=this.uniforms[o].value;g&&g.isTexture?i.uniforms[o]={type:"t",value:g.toJSON(A).uuid}:g&&g.isColor?i.uniforms[o]={type:"c",value:g.getHex()}:g&&g.isVector2?i.uniforms[o]={type:"v2",value:g.toArray()}:g&&g.isVector3?i.uniforms[o]={type:"v3",value:g.toArray()}:g&&g.isVector4?i.uniforms[o]={type:"v4",value:g.toArray()}:g&&g.isMatrix3?i.uniforms[o]={type:"m3",value:g.toArray()}:g&&g.isMatrix4?i.uniforms[o]={type:"m4",value:g.toArray()}:i.uniforms[o]={value:g}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const t={};for(const o in this.extensions)this.extensions[o]===!0&&(t[o]=!0);return Object.keys(t).length>0&&(i.extensions=t),i}}class nP extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jA,this.projectionMatrix=new jA,this.projectionMatrixInverse=new jA,this.coordinateSystem=zr}copy(A,i){return super.copy(A,i),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,i){super.updateWorldMatrix(A,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qo=new k,Ck=new Ke,ck=new Ke;class Pi extends nP{constructor(A=50,i=1,t=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,i){return super.copy(A,i),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const i=.5*this.getFilmHeight()/A;this.fov=bg*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return bg*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,i,t){Qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qo.x,Qo.y).multiplyScalar(-A/Qo.z),Qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qo.x,Qo.y).multiplyScalar(-A/Qo.z)}getViewSize(A,i){return this.getViewBounds(A,Ck,ck),i.subVectors(ck,Ck)}setViewOffset(A,i,t,o,s,g){this.aspect=A/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=o,this.view.width=s,this.view.height=g,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let i=A*Math.tan(Ra*.5*this.fov)/this.zoom,t=2*i,o=this.aspect*t,s=-.5*o;const g=this.view;if(this.view!==null&&this.view.enabled){const I=g.fullWidth,_=g.fullHeight;s+=g.offsetX*o/I,i-=g.offsetY*t/_,o*=g.width/I,t*=g.height/_}const a=this.filmOffset;a!==0&&(s+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,i,i-t,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const i=super.toJSON(A);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Js=-90,Os=1;class WY extends ft{constructor(A,i,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Js,Os,A,i);o.layers=this.layers,this.add(o);const s=new Pi(Js,Os,A,i);s.layers=this.layers,this.add(s);const g=new Pi(Js,Os,A,i);g.layers=this.layers,this.add(g);const a=new Pi(Js,Os,A,i);a.layers=this.layers,this.add(a);const I=new Pi(Js,Os,A,i);I.layers=this.layers,this.add(I);const _=new Pi(Js,Os,A,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const A=this.coordinateSystem,i=this.children.concat(),[t,o,s,g,a,I]=i;for(const _ of i)this.remove(_);if(A===zr)t.up.set(0,1,0),t.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),g.up.set(0,0,1),g.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),I.up.set(0,1,0),I.lookAt(0,0,-1);else if(A===ec)t.up.set(0,-1,0),t.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),g.up.set(0,0,-1),g.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),I.up.set(0,-1,0),I.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(A,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:o}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[s,g,a,I,_,p]=this.children,B=A.getRenderTarget(),l=A.getActiveCubeFace(),Q=A.getActiveMipmapLevel(),h=A.xr.enabled;A.xr.enabled=!1;const y=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0,o),A.render(i,s),A.setRenderTarget(t,1,o),A.render(i,g),A.setRenderTarget(t,2,o),A.render(i,a),A.setRenderTarget(t,3,o),A.render(i,I),A.setRenderTarget(t,4,o),A.render(i,_),t.texture.generateMipmaps=y,A.setRenderTarget(t,5,o),A.render(i,p),A.setRenderTarget(B,l,Q),A.xr.enabled=h,t.texture.needsPMREMUpdate=!0}}class rP extends ti{constructor(A,i,t,o,s,g,a,I,_,p){A=A!==void 0?A:[],i=i!==void 0?i:Sg,super(A,i,t,o,s,g,a,I,_,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class zY extends ys{constructor(A=1,i={}){super(A,A,i),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},o=[t,t,t,t,t,t];this.texture=new rP(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gn}fromEquirectangularTexture(A,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oI(5,5,5),s=new go({name:"CubemapFromEquirect",uniforms:vg(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:sn,blending:Ho});s.uniforms.tEquirect.value=i;const g=new _i(o,s),a=i.minFilter;return i.minFilter===Wr&&(i.minFilter=Gn),new WY(1,10,this).update(A,g),i.minFilter=a,g.geometry.dispose(),g.material.dispose(),this}clear(A,i,t,o){const s=A.getRenderTarget();for(let g=0;g<6;g++)A.setRenderTarget(this,g),A.clear(i,t,o);A.setRenderTarget(s)}}const D_=new k,ZY=new k,XY=new Me;class os{constructor(A=new k(1,0,0),i=0){this.isPlane=!0,this.normal=A,this.constant=i}set(A,i){return this.normal.copy(A),this.constant=i,this}setComponents(A,i,t,o){return this.normal.set(A,i,t),this.constant=o,this}setFromNormalAndCoplanarPoint(A,i){return this.normal.copy(A),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(A,i,t){const o=D_.subVectors(t,i).cross(ZY.subVectors(A,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,i){return i.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,i){const t=A.delta(D_),o=this.normal.dot(t);if(o===0)return this.distanceToPoint(A.start)===0?i.copy(A.start):null;const s=-(A.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:i.copy(A.start).addScaledVector(t,s)}intersectsLine(A){const i=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return i<0&&t>0||t<0&&i>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,i){const t=i||XY.getNormalMatrix(A),o=this.coplanarPoint(D_).applyMatrix4(A),s=this.normal.applyMatrix3(t).normalize();return this.constant=-o.dot(s),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $o=new Yn,VI=new k;class Kl{constructor(A=new os,i=new os,t=new os,o=new os,s=new os,g=new os){this.planes=[A,i,t,o,s,g]}set(A,i,t,o,s,g){const a=this.planes;return a[0].copy(A),a[1].copy(i),a[2].copy(t),a[3].copy(o),a[4].copy(s),a[5].copy(g),this}copy(A){const i=this.planes;for(let t=0;t<6;t++)i[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,i=zr){const t=this.planes,o=A.elements,s=o[0],g=o[1],a=o[2],I=o[3],_=o[4],p=o[5],B=o[6],l=o[7],Q=o[8],h=o[9],y=o[10],u=o[11],E=o[12],f=o[13],m=o[14],D=o[15];if(t[0].setComponents(I-s,l-_,u-Q,D-E).normalize(),t[1].setComponents(I+s,l+_,u+Q,D+E).normalize(),t[2].setComponents(I+g,l+p,u+h,D+f).normalize(),t[3].setComponents(I-g,l-p,u-h,D-f).normalize(),t[4].setComponents(I-a,l-B,u-y,D-m).normalize(),i===zr)t[5].setComponents(I+a,l+B,u+y,D+m).normalize();else if(i===ec)t[5].setComponents(a,B,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),$o.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const i=A.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere($o)}intersectsSprite(A){return $o.center.set(0,0,0),$o.radius=.7071067811865476,$o.applyMatrix4(A.matrixWorld),this.intersectsSphere($o)}intersectsSphere(A){const i=this.planes,t=A.center,o=-A.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<o)return!1;return!0}intersectsBox(A){const i=this.planes;for(let t=0;t<6;t++){const o=i[t];if(VI.x=o.normal.x>0?A.max.x:A.min.x,VI.y=o.normal.y>0?A.max.y:A.min.y,VI.z=o.normal.z>0?A.max.z:A.min.z,o.distanceToPoint(VI)<0)return!1}return!0}containsPoint(A){const i=this.planes;for(let t=0;t<6;t++)if(i[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oP(){let n=null,A=!1,i=null,t=null;function o(s,g){i(s,g),t=n.requestAnimationFrame(o)}return{start:function(){A!==!0&&i!==null&&(t=n.requestAnimationFrame(o),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(s){i=s},setContext:function(s){n=s}}}function $Y(n){const A=new WeakMap;function i(a,I){const _=a.array,p=a.usage,B=_.byteLength,l=n.createBuffer();n.bindBuffer(I,l),n.bufferData(I,_,p),a.onUploadCallback();let Q;if(_ instanceof Float32Array)Q=n.FLOAT;else if(_ instanceof Uint16Array)a.isFloat16BufferAttribute?Q=n.HALF_FLOAT:Q=n.UNSIGNED_SHORT;else if(_ instanceof Int16Array)Q=n.SHORT;else if(_ instanceof Uint32Array)Q=n.UNSIGNED_INT;else if(_ instanceof Int32Array)Q=n.INT;else if(_ instanceof Int8Array)Q=n.BYTE;else if(_ instanceof Uint8Array)Q=n.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)Q=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:l,type:Q,bytesPerElement:_.BYTES_PER_ELEMENT,version:a.version,size:B}}function t(a,I,_){const p=I.array,B=I.updateRanges;if(n.bindBuffer(_,a),B.length===0)n.bufferSubData(_,0,p);else{B.sort((Q,h)=>Q.start-h.start);let l=0;for(let Q=1;Q<B.length;Q++){const h=B[l],y=B[Q];y.start<=h.start+h.count+1?h.count=Math.max(h.count,y.start+y.count-h.start):(++l,B[l]=y)}B.length=l+1;for(let Q=0,h=B.length;Q<h;Q++){const y=B[Q];n.bufferSubData(_,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}I.clearUpdateRanges()}I.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),A.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const I=A.get(a);I&&(n.deleteBuffer(I.buffer),A.delete(a))}function g(a,I){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=A.get(a);(!p||p.version<a.version)&&A.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const _=A.get(a);if(_===void 0)A.set(a,i(a,I));else if(_.version<a.version){if(_.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");t(_.buffer,a,I),_.version=a.version}}return{get:o,remove:s,update:g}}class Sc extends si{constructor(A=1,i=1,t=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:i,widthSegments:t,heightSegments:o};const s=A/2,g=i/2,a=Math.floor(t),I=Math.floor(o),_=a+1,p=I+1,B=A/a,l=i/I,Q=[],h=[],y=[],u=[];for(let E=0;E<p;E++){const f=E*l-g;for(let m=0;m<_;m++){const D=m*B-s;h.push(D,-f,0),y.push(0,0,1),u.push(m/a),u.push(1-E/I)}}for(let E=0;E<I;E++)for(let f=0;f<a;f++){const m=f+_*E,D=f+_*(E+1),L=f+1+_*(E+1),v=f+1+_*E;Q.push(m,D,v),Q.push(D,L,v)}this.setIndex(Q),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(u,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Sc(A.width,A.height,A.widthSegments,A.heightSegments)}}var Aq=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eq=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tq=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iq=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nq=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rq=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oq=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sq=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gq=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aq=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iq=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cq=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cq=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_q=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pq=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bq=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qq=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dq=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fq=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yq=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mq=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dq=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bq="gl_FragColor = linearToOutputTexel( gl_FragColor );",vq=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lq=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kq=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oq=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yq=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qq=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vq=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zq=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zq=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xq=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$q=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aj=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ej=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tj=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ij=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nj=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rj=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oj=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sj=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gj=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aj=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ij=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cj=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cj=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_j=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pj=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bj=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lj=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ej=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qj=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dj=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hj=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uj=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fj=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yj=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mj=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dj=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sj=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wj=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mj=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rj=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bj=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vj=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nj=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:Aq,alphahash_pars_fragment:eq,alphamap_fragment:tq,alphamap_pars_fragment:iq,alphatest_fragment:nq,alphatest_pars_fragment:rq,aomap_fragment:oq,aomap_pars_fragment:sq,batching_pars_vertex:gq,batching_vertex:aq,begin_vertex:Iq,beginnormal_vertex:Cq,bsdfs:cq,iridescence_fragment:_q,bumpmap_pars_fragment:pq,clipping_planes_fragment:Bq,clipping_planes_pars_fragment:lq,clipping_planes_pars_vertex:Eq,clipping_planes_vertex:Qq,color_fragment:dq,color_pars_fragment:hq,color_pars_vertex:uq,color_vertex:fq,common:yq,cube_uv_reflection_fragment:mq,defaultnormal_vertex:Dq,displacementmap_pars_vertex:Sq,displacementmap_vertex:wq,emissivemap_fragment:Mq,emissivemap_pars_fragment:Rq,colorspace_fragment:bq,colorspace_pars_fragment:vq,envmap_fragment:Nq,envmap_common_pars_fragment:Fq,envmap_pars_fragment:Lq,envmap_pars_vertex:Uq,envmap_physical_pars_fragment:qq,envmap_vertex:Tq,fog_vertex:Gq,fog_pars_vertex:xq,fog_fragment:kq,fog_pars_fragment:Hq,gradientmap_pars_fragment:Kq,lightmap_pars_fragment:Pq,lights_lambert_fragment:Jq,lights_lambert_pars_fragment:Oq,lights_pars_begin:Yq,lights_toon_fragment:jq,lights_toon_pars_fragment:Vq,lights_phong_fragment:Wq,lights_phong_pars_fragment:zq,lights_physical_fragment:Zq,lights_physical_pars_fragment:Xq,lights_fragment_begin:$q,lights_fragment_maps:A3,lights_fragment_end:e3,logdepthbuf_fragment:t3,logdepthbuf_pars_fragment:i3,logdepthbuf_pars_vertex:n3,logdepthbuf_vertex:r3,map_fragment:o3,map_pars_fragment:s3,map_particle_fragment:g3,map_particle_pars_fragment:a3,metalnessmap_fragment:I3,metalnessmap_pars_fragment:C3,morphinstance_vertex:c3,morphcolor_vertex:_3,morphnormal_vertex:p3,morphtarget_pars_vertex:B3,morphtarget_vertex:l3,normal_fragment_begin:E3,normal_fragment_maps:Q3,normal_pars_fragment:d3,normal_pars_vertex:h3,normal_vertex:u3,normalmap_pars_fragment:f3,clearcoat_normal_fragment_begin:y3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:D3,iridescence_pars_fragment:S3,opaque_fragment:w3,packing:M3,premultiplied_alpha_fragment:R3,project_vertex:b3,dithering_fragment:v3,dithering_pars_fragment:N3,roughnessmap_fragment:F3,roughnessmap_pars_fragment:L3,shadowmap_pars_fragment:U3,shadowmap_pars_vertex:T3,shadowmap_vertex:G3,shadowmask_pars_fragment:x3,skinbase_vertex:k3,skinning_pars_vertex:H3,skinning_vertex:K3,skinnormal_vertex:P3,specularmap_fragment:J3,specularmap_pars_fragment:O3,tonemapping_fragment:Y3,tonemapping_pars_fragment:q3,transmission_fragment:j3,transmission_pars_fragment:V3,uv_pars_fragment:W3,uv_pars_vertex:z3,uv_vertex:Z3,worldpos_vertex:X3,background_vert:$3,background_frag:Aj,backgroundCube_vert:ej,backgroundCube_frag:tj,cube_vert:ij,cube_frag:nj,depth_vert:rj,depth_frag:oj,distanceRGBA_vert:sj,distanceRGBA_frag:gj,equirect_vert:aj,equirect_frag:Ij,linedashed_vert:Cj,linedashed_frag:cj,meshbasic_vert:_j,meshbasic_frag:pj,meshlambert_vert:Bj,meshlambert_frag:lj,meshmatcap_vert:Ej,meshmatcap_frag:Qj,meshnormal_vert:dj,meshnormal_frag:hj,meshphong_vert:uj,meshphong_frag:fj,meshphysical_vert:yj,meshphysical_frag:mj,meshtoon_vert:Dj,meshtoon_frag:Sj,points_vert:wj,points_frag:Mj,shadow_vert:Rj,shadow_frag:bj,sprite_vert:vj,sprite_frag:Nj},NA={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},en={basic:{uniforms:Hi([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Hi([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,NA.lights,{emissive:{value:new te(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Hi([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,NA.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Hi([NA.common,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.roughnessmap,NA.metalnessmap,NA.fog,NA.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Hi([NA.common,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.gradientmap,NA.fog,NA.lights,{emissive:{value:new te(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Hi([NA.common,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Hi([NA.points,NA.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Hi([NA.common,NA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Hi([NA.common,NA.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Hi([NA.common,NA.bumpmap,NA.normalmap,NA.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Hi([NA.sprite,NA.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Hi([NA.common,NA.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Hi([NA.lights,NA.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};en.physical={uniforms:Hi([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const WI={r:0,b:0,g:0},As=new Si,Fj=new jA;function Lj(n,A,i,t,o,s,g){const a=new te(0);let I=s===!0?0:1,_,p,B=null,l=0,Q=null;function h(f){let m=f.isScene===!0?f.background:null;return m&&m.isTexture&&(m=(f.backgroundBlurriness>0?i:A).get(m)),m}function y(f){let m=!1;const D=h(f);D===null?E(a,I):D&&D.isColor&&(E(D,1),m=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,g):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,g),(n.autoClear||m)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function u(f,m){const D=h(m);D&&(D.isCubeTexture||D.mapping===yc)?(p===void 0&&(p=new _i(new oI(1,1,1),new go({name:"BackgroundCubeMaterial",uniforms:vg(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,v,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),As.copy(m.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Fj.makeRotationFromEuler(As)),p.material.toneMapped=tt.getTransfer(D.colorSpace)!==Qt,(B!==D||l!==D.version||Q!==n.toneMapping)&&(p.material.needsUpdate=!0,B=D,l=D.version,Q=n.toneMapping),p.layers.enableAll(),f.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(_===void 0&&(_=new _i(new Sc(2,2),new go({name:"BackgroundMaterial",uniforms:vg(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:oo,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(_)),_.material.uniforms.t2D.value=D,_.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,_.material.toneMapped=tt.getTransfer(D.colorSpace)!==Qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),_.material.uniforms.uvTransform.value.copy(D.matrix),(B!==D||l!==D.version||Q!==n.toneMapping)&&(_.material.needsUpdate=!0,B=D,l=D.version,Q=n.toneMapping),_.layers.enableAll(),f.unshift(_,_.geometry,_.material,0,0,null))}function E(f,m){f.getRGB(WI,iP(n)),t.buffers.color.setClear(WI.r,WI.g,WI.b,m,g)}return{getClearColor:function(){return a},setClearColor:function(f,m=1){a.set(f),I=m,E(a,I)},getClearAlpha:function(){return I},setClearAlpha:function(f){I=f,E(a,I)},render:y,addToRenderList:u}}function Uj(n,A){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),t={},o=l(null);let s=o,g=!1;function a(S,G,nA,X,gA){let EA=!1;const tA=B(X,nA,G);s!==tA&&(s=tA,_(s.object)),EA=Q(S,X,nA,gA),EA&&h(S,X,nA,gA),gA!==null&&A.update(gA,n.ELEMENT_ARRAY_BUFFER),(EA||g)&&(g=!1,D(S,G,nA,X),gA!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,A.get(gA).buffer))}function I(){return n.createVertexArray()}function _(S){return n.bindVertexArray(S)}function p(S){return n.deleteVertexArray(S)}function B(S,G,nA){const X=nA.wireframe===!0;let gA=t[S.id];gA===void 0&&(gA={},t[S.id]=gA);let EA=gA[G.id];EA===void 0&&(EA={},gA[G.id]=EA);let tA=EA[X];return tA===void 0&&(tA=l(I()),EA[X]=tA),tA}function l(S){const G=[],nA=[],X=[];for(let gA=0;gA<i;gA++)G[gA]=0,nA[gA]=0,X[gA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nA,attributeDivisors:X,object:S,attributes:{},index:null}}function Q(S,G,nA,X){const gA=s.attributes,EA=G.attributes;let tA=0;const fA=nA.getAttributes();for(const H in fA)if(fA[H].location>=0){const pA=gA[H];let bA=EA[H];if(bA===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(bA=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(bA=S.instanceColor)),pA===void 0||pA.attribute!==bA||bA&&pA.data!==bA.data)return!0;tA++}return s.attributesNum!==tA||s.index!==X}function h(S,G,nA,X){const gA={},EA=G.attributes;let tA=0;const fA=nA.getAttributes();for(const H in fA)if(fA[H].location>=0){let pA=EA[H];pA===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(pA=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(pA=S.instanceColor));const bA={};bA.attribute=pA,pA&&pA.data&&(bA.data=pA.data),gA[H]=bA,tA++}s.attributes=gA,s.attributesNum=tA,s.index=X}function y(){const S=s.newAttributes;for(let G=0,nA=S.length;G<nA;G++)S[G]=0}function u(S){E(S,0)}function E(S,G){const nA=s.newAttributes,X=s.enabledAttributes,gA=s.attributeDivisors;nA[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),gA[S]!==G&&(n.vertexAttribDivisor(S,G),gA[S]=G)}function f(){const S=s.newAttributes,G=s.enabledAttributes;for(let nA=0,X=G.length;nA<X;nA++)G[nA]!==S[nA]&&(n.disableVertexAttribArray(nA),G[nA]=0)}function m(S,G,nA,X,gA,EA,tA){tA===!0?n.vertexAttribIPointer(S,G,nA,gA,EA):n.vertexAttribPointer(S,G,nA,X,gA,EA)}function D(S,G,nA,X){y();const gA=X.attributes,EA=nA.getAttributes(),tA=G.defaultAttributeValues;for(const fA in EA){const H=EA[fA];if(H.location>=0){let oA=gA[fA];if(oA===void 0&&(fA==="instanceMatrix"&&S.instanceMatrix&&(oA=S.instanceMatrix),fA==="instanceColor"&&S.instanceColor&&(oA=S.instanceColor)),oA!==void 0){const pA=oA.normalized,bA=oA.itemSize,OA=A.get(oA);if(OA===void 0)continue;const Ne=OA.buffer,rA=OA.type,uA=OA.bytesPerElement,TA=rA===n.INT||rA===n.UNSIGNED_INT||oA.gpuType===bl;if(oA.isInterleavedBufferAttribute){const MA=oA.data,re=MA.stride,Qe=oA.offset;if(MA.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)E(H.location+Fe,MA.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=MA.meshPerAttribute*MA.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)u(H.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Fe=0;Fe<H.locationSize;Fe++)m(H.location+Fe,bA/H.locationSize,rA,pA,re*uA,(Qe+bA/H.locationSize*Fe)*uA,TA)}else{if(oA.isInstancedBufferAttribute){for(let MA=0;MA<H.locationSize;MA++)E(H.location+MA,oA.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oA.meshPerAttribute*oA.count)}else for(let MA=0;MA<H.locationSize;MA++)u(H.location+MA);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let MA=0;MA<H.locationSize;MA++)m(H.location+MA,bA/H.locationSize,rA,pA,bA*uA,bA/H.locationSize*MA*uA,TA)}}else if(tA!==void 0){const pA=tA[fA];if(pA!==void 0)switch(pA.length){case 2:n.vertexAttrib2fv(H.location,pA);break;case 3:n.vertexAttrib3fv(H.location,pA);break;case 4:n.vertexAttrib4fv(H.location,pA);break;default:n.vertexAttrib1fv(H.location,pA)}}}}f()}function L(){U();for(const S in t){const G=t[S];for(const nA in G){const X=G[nA];for(const gA in X)p(X[gA].object),delete X[gA];delete G[nA]}delete t[S]}}function v(S){if(t[S.id]===void 0)return;const G=t[S.id];for(const nA in G){const X=G[nA];for(const gA in X)p(X[gA].object),delete X[gA];delete G[nA]}delete t[S.id]}function N(S){for(const G in t){const nA=t[G];if(nA[S.id]===void 0)continue;const X=nA[S.id];for(const gA in X)p(X[gA].object),delete X[gA];delete nA[S.id]}}function U(){b(),g=!0,s!==o&&(s=o,_(s.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:v,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:u,disableUnusedAttributes:f}}function Tj(n,A,i){let t;function o(_){t=_}function s(_,p){n.drawArrays(t,_,p),i.update(p,t,1)}function g(_,p,B){B!==0&&(n.drawArraysInstanced(t,_,p,B),i.update(p,t,B))}function a(_,p,B){if(B===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t,_,0,p,0,B);let Q=0;for(let h=0;h<B;h++)Q+=p[h];i.update(Q,t,1)}function I(_,p,B,l){if(B===0)return;const Q=A.get("WEBGL_multi_draw");if(Q===null)for(let h=0;h<_.length;h++)g(_[h],p[h],l[h]);else{Q.multiDrawArraysInstancedWEBGL(t,_,0,p,0,l,0,B);let h=0;for(let y=0;y<B;y++)h+=p[y]*l[y];i.update(h,t,1)}}this.setMode=o,this.render=s,this.renderInstances=g,this.renderMultiDraw=a,this.renderMultiDrawInstances=I}function Gj(n,A,i,t){let o;function s(){if(o!==void 0)return o;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");o=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function g(N){return!(N!==xn&&t.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const U=N===nI&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(N!==so&&t.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==or&&!U)}function I(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const p=I(_);p!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",p,"instead."),_=p);const B=i.logarithmicDepthBuffer===!0,l=i.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),Q=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=h>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:I,textureFormatReadable:g,textureTypeReadable:a,precision:_,logarithmicDepthBuffer:B,reverseDepthBuffer:l,maxTextures:Q,maxVertexTextures:h,maxTextureSize:y,maxCubemapSize:u,maxAttributes:E,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:L,maxSamples:v}}function xj(n){const A=this;let i=null,t=0,o=!1,s=!1;const g=new os,a=new Me,I={value:null,needsUpdate:!1};this.uniform=I,this.numPlanes=0,this.numIntersection=0,this.init=function(B,l){const Q=B.length!==0||l||t!==0||o;return o=l,t=B.length,Q},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(B,l){i=p(B,l,0)},this.setState=function(B,l,Q){const h=B.clippingPlanes,y=B.clipIntersection,u=B.clipShadows,E=n.get(B);if(!o||h===null||h.length===0||s&&!u)s?p(null):_();else{const f=s?0:t,m=f*4;let D=E.clippingState||null;I.value=D,D=p(h,l,m,Q);for(let L=0;L!==m;++L)D[L]=i[L];E.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=f}};function _(){I.value!==i&&(I.value=i,I.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function p(B,l,Q,h){const y=B!==null?B.length:0;let u=null;if(y!==0){if(u=I.value,h!==!0||u===null){const E=Q+y*4,f=l.matrixWorldInverse;a.getNormalMatrix(f),(u===null||u.length<E)&&(u=new Float32Array(E));for(let m=0,D=Q;m!==y;++m,D+=4)g.copy(B[m]).applyMatrix4(f,a),g.normal.toArray(u,D),u[D+3]=g.constant}I.value=u,I.needsUpdate=!0}return A.numPlanes=y,A.numIntersection=0,u}}function kj(n){let A=new WeakMap;function i(g,a){return a===$C?g.mapping=Sg:a===zp&&(g.mapping=wg),g}function t(g){if(g&&g.isTexture){const a=g.mapping;if(a===$C||a===zp)if(A.has(g)){const I=A.get(g).texture;return i(I,g.mapping)}else{const I=g.image;if(I&&I.height>0){const _=new zY(I.height);return _.fromEquirectangularTexture(n,g),A.set(g,_),g.addEventListener("dispose",o),i(_.texture,g.mapping)}else return null}}return g}function o(g){const a=g.target;a.removeEventListener("dispose",o);const I=A.get(a);I!==void 0&&(A.delete(a),I.dispose())}function s(){A=new WeakMap}return{get:t,dispose:s}}class wc extends nP{constructor(A=-1,i=1,t=1,o=-1,s=.1,g=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=i,this.top=t,this.bottom=o,this.near=s,this.far=g,this.updateProjectionMatrix()}copy(A,i){return super.copy(A,i),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,i,t,o,s,g){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=o,this.view.width=s,this.view.height=g,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=t-A,g=t+A,a=o+i,I=o-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=_*this.view.offsetX,g=s+_*this.view.width,a-=p*this.view.offsetY,I=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,g,a,I,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const i=super.toJSON(A);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const og=4,_k=[.125,.215,.35,.446,.526,.582],as=20,S_=new wc,pk=new te;let w_=null,M_=0,R_=0,b_=!1;const ss=(1+Math.sqrt(5))/2,Ys=1/ss,Bk=[new k(-ss,Ys,0),new k(ss,Ys,0),new k(-Ys,0,ss),new k(Ys,0,ss),new k(0,ss,-Ys),new k(0,ss,Ys),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class lk{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,i=0,t=.1,o=100){w_=this._renderer.getRenderTarget(),M_=this._renderer.getActiveCubeFace(),R_=this._renderer.getActiveMipmapLevel(),b_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(A,t,o,s),i>0&&this._blur(s,0,0,i),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(A,i=null){return this._fromTexture(A,i)}fromCubemap(A,i=null){return this._fromTexture(A,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dk(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qk(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(w_,M_,R_),this._renderer.xr.enabled=b_,A.scissorTest=!1,zI(A,0,0,A.width,A.height)}_fromTexture(A,i){A.mapping===Sg||A.mapping===wg?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),w_=this._renderer.getRenderTarget(),M_=this._renderer.getActiveCubeFace(),R_=this._renderer.getActiveMipmapLevel(),b_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const t=i||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,t={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:nI,format:xn,colorSpace:Gg,depthBuffer:!1},o=Ek(A,i,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ek(A,i,t);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hj(s)),this._blurMaterial=Kj(s,A,i)}return o}_compileMaterial(A){const i=new _i(this._lodPlanes[0],A);this._renderer.compile(i,S_)}_sceneToCubeUV(A,i,t,o){const a=new Pi(90,1,i,t),I=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],p=this._renderer,B=p.autoClear,l=p.toneMapping;p.getClearColor(pk),p.toneMapping=Ko,p.autoClear=!1;const Q=new Zr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),h=new _i(new oI,Q);let y=!1;const u=A.background;u?u.isColor&&(Q.color.copy(u),A.background=null,y=!0):(Q.color.copy(pk),y=!0);for(let E=0;E<6;E++){const f=E%3;f===0?(a.up.set(0,I[E],0),a.lookAt(_[E],0,0)):f===1?(a.up.set(0,0,I[E]),a.lookAt(0,_[E],0)):(a.up.set(0,I[E],0),a.lookAt(0,0,_[E]));const m=this._cubeSize;zI(o,f*m,E>2?m:0,m,m),p.setRenderTarget(o),y&&p.render(h,a),p.render(A,a)}h.geometry.dispose(),h.material.dispose(),p.toneMapping=l,p.autoClear=B,A.background=u}_textureToCubeUV(A,i){const t=this._renderer,o=A.mapping===Sg||A.mapping===wg;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dk()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qk());const s=o?this._cubemapMaterial:this._equirectMaterial,g=new _i(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=A;const I=this._cubeSize;zI(i,0,0,3*I,2*I),t.setRenderTarget(i),t.render(g,S_)}_applyPMREM(A){const i=this._renderer,t=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const g=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bk[(o-s-1)%Bk.length];this._blur(A,s-1,s,g,a)}i.autoClear=t}_blur(A,i,t,o,s){const g=this._pingPongRenderTarget;this._halfBlur(A,g,i,t,o,"latitudinal",s),this._halfBlur(g,A,t,t,o,"longitudinal",s)}_halfBlur(A,i,t,o,s,g,a){const I=this._renderer,_=this._blurMaterial;g!=="latitudinal"&&g!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,B=new _i(this._lodPlanes[o],_),l=_.uniforms,Q=this._sizeLods[t]-1,h=isFinite(s)?Math.PI/(2*Q):2*Math.PI/(2*as-1),y=s/h,u=isFinite(s)?1+Math.floor(p*y):as;u>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${as}`);const E=[];let f=0;for(let N=0;N<as;++N){const U=N/y,b=Math.exp(-U*U/2);E.push(b),N===0?f+=b:N<u&&(f+=2*b)}for(let N=0;N<E.length;N++)E[N]=E[N]/f;l.envMap.value=A.texture,l.samples.value=u,l.weights.value=E,l.latitudinal.value=g==="latitudinal",a&&(l.poleAxis.value=a);const{_lodMax:m}=this;l.dTheta.value=h,l.mipInt.value=m-t;const D=this._sizeLods[o],L=3*D*(o>m-og?o-m+og:0),v=4*(this._cubeSize-D);zI(i,L,v,3*D,2*D),I.setRenderTarget(i),I.render(B,S_)}}function Hj(n){const A=[],i=[],t=[];let o=n;const s=n-og+1+_k.length;for(let g=0;g<s;g++){const a=Math.pow(2,o);i.push(a);let I=1/a;g>n-og?I=_k[g-n+og-1]:g===0&&(I=0),t.push(I);const _=1/(a-2),p=-_,B=1+_,l=[p,p,B,p,B,B,p,p,B,B,p,B],Q=6,h=6,y=3,u=2,E=1,f=new Float32Array(y*h*Q),m=new Float32Array(u*h*Q),D=new Float32Array(E*h*Q);for(let v=0;v<Q;v++){const N=v%3*2/3-1,U=v>2?0:-1,b=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];f.set(b,y*h*v),m.set(l,u*h*v);const S=[v,v,v,v,v,v];D.set(S,E*h*v)}const L=new si;L.setAttribute("position",new oi(f,y)),L.setAttribute("uv",new oi(m,u)),L.setAttribute("faceIndex",new oi(D,E)),A.push(L),o>og&&o--}return{lodPlanes:A,sizeLods:i,sigmas:t}}function Ek(n,A,i){const t=new ys(n,A,i);return t.texture.mapping=yc,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function zI(n,A,i,t,o){n.viewport.set(A,i,t,o),n.scissor.set(A,i,t,o)}function Kj(n,A,i){const t=new Float32Array(as),o=new k(0,1,0);return new go({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ho,depthTest:!1,depthWrite:!1})}function Qk(){return new go({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ho,depthTest:!1,depthWrite:!1})}function dk(){return new go({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ho,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pj(n){let A=new WeakMap,i=null;function t(a){if(a&&a.isTexture){const I=a.mapping,_=I===$C||I===zp,p=I===Sg||I===wg;if(_||p){let B=A.get(a);const l=B!==void 0?B.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==l)return i===null&&(i=new lk(n)),B=_?i.fromEquirectangular(a,B):i.fromCubemap(a,B),B.texture.pmremVersion=a.pmremVersion,A.set(a,B),B.texture;if(B!==void 0)return B.texture;{const Q=a.image;return _&&Q&&Q.height>0||p&&Q&&o(Q)?(i===null&&(i=new lk(n)),B=_?i.fromEquirectangular(a):i.fromCubemap(a),B.texture.pmremVersion=a.pmremVersion,A.set(a,B),a.addEventListener("dispose",s),B.texture):null}}}return a}function o(a){let I=0;const _=6;for(let p=0;p<_;p++)a[p]!==void 0&&I++;return I===_}function s(a){const I=a.target;I.removeEventListener("dispose",s);const _=A.get(I);_!==void 0&&(A.delete(I),_.dispose())}function g(){A=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:t,dispose:g}}function Jj(n){const A={};function i(t){if(A[t]!==void 0)return A[t];let o;switch(t){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(t)}return A[t]=o,o}return{has:function(t){return i(t)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(t){const o=i(t);return o===null&&Qa("THREE.WebGLRenderer: "+t+" extension not supported."),o}}}function Oj(n,A,i,t){const o={},s=new WeakMap;function g(B){const l=B.target;l.index!==null&&A.remove(l.index);for(const h in l.attributes)A.remove(l.attributes[h]);for(const h in l.morphAttributes){const y=l.morphAttributes[h];for(let u=0,E=y.length;u<E;u++)A.remove(y[u])}l.removeEventListener("dispose",g),delete o[l.id];const Q=s.get(l);Q&&(A.remove(Q),s.delete(l)),t.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,i.memory.geometries--}function a(B,l){return o[l.id]===!0||(l.addEventListener("dispose",g),o[l.id]=!0,i.memory.geometries++),l}function I(B){const l=B.attributes;for(const h in l)A.update(l[h],n.ARRAY_BUFFER);const Q=B.morphAttributes;for(const h in Q){const y=Q[h];for(let u=0,E=y.length;u<E;u++)A.update(y[u],n.ARRAY_BUFFER)}}function _(B){const l=[],Q=B.index,h=B.attributes.position;let y=0;if(Q!==null){const f=Q.array;y=Q.version;for(let m=0,D=f.length;m<D;m+=3){const L=f[m+0],v=f[m+1],N=f[m+2];l.push(L,v,v,N,N,L)}}else if(h!==void 0){const f=h.array;y=h.version;for(let m=0,D=f.length/3-1;m<D;m+=3){const L=m+0,v=m+1,N=m+2;l.push(L,v,v,N,N,L)}}else return;const u=new(X1(l)?tP:kl)(l,1);u.version=y;const E=s.get(B);E&&A.remove(E),s.set(B,u)}function p(B){const l=s.get(B);if(l){const Q=B.index;Q!==null&&l.version<Q.version&&_(B)}else _(B);return s.get(B)}return{get:a,update:I,getWireframeAttribute:p}}function Yj(n,A,i){let t;function o(l){t=l}let s,g;function a(l){s=l.type,g=l.bytesPerElement}function I(l,Q){n.drawElements(t,Q,s,l*g),i.update(Q,t,1)}function _(l,Q,h){h!==0&&(n.drawElementsInstanced(t,Q,s,l*g,h),i.update(Q,t,h))}function p(l,Q,h){if(h===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t,Q,0,s,l,0,h);let u=0;for(let E=0;E<h;E++)u+=Q[E];i.update(u,t,1)}function B(l,Q,h,y){if(h===0)return;const u=A.get("WEBGL_multi_draw");if(u===null)for(let E=0;E<l.length;E++)_(l[E]/g,Q[E],y[E]);else{u.multiDrawElementsInstancedWEBGL(t,Q,0,s,l,0,y,0,h);let E=0;for(let f=0;f<h;f++)E+=Q[f]*y[f];i.update(E,t,1)}}this.setMode=o,this.setIndex=a,this.render=I,this.renderInstances=_,this.renderMultiDraw=p,this.renderMultiDrawInstances=B}function qj(n){const A={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function t(s,g,a){switch(i.calls++,g){case n.TRIANGLES:i.triangles+=a*(s/3);break;case n.LINES:i.lines+=a*(s/2);break;case n.LINE_STRIP:i.lines+=a*(s-1);break;case n.LINE_LOOP:i.lines+=a*s;break;case n.POINTS:i.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",g);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:A,render:i,programs:null,autoReset:!0,reset:o,update:t}}function jj(n,A,i){const t=new WeakMap,o=new ve;function s(g,a,I){const _=g.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,B=p!==void 0?p.length:0;let l=t.get(a);if(l===void 0||l.count!==B){let b=function(){N.dispose(),t.delete(a),a.removeEventListener("dispose",b)};l!==void 0&&l.texture.dispose();const Q=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let m=0;Q===!0&&(m=1),h===!0&&(m=2),y===!0&&(m=3);let D=a.attributes.position.count*m,L=1;D>A.maxTextureSize&&(L=Math.ceil(D/A.maxTextureSize),D=A.maxTextureSize);const v=new Float32Array(D*L*4*B),N=new AP(v,D,L,B);N.type=or,N.needsUpdate=!0;const U=m*4;for(let S=0;S<B;S++){const G=u[S],nA=E[S],X=f[S],gA=D*L*4*S;for(let EA=0;EA<G.count;EA++){const tA=EA*U;Q===!0&&(o.fromBufferAttribute(G,EA),v[gA+tA+0]=o.x,v[gA+tA+1]=o.y,v[gA+tA+2]=o.z,v[gA+tA+3]=0),h===!0&&(o.fromBufferAttribute(nA,EA),v[gA+tA+4]=o.x,v[gA+tA+5]=o.y,v[gA+tA+6]=o.z,v[gA+tA+7]=0),y===!0&&(o.fromBufferAttribute(X,EA),v[gA+tA+8]=o.x,v[gA+tA+9]=o.y,v[gA+tA+10]=o.z,v[gA+tA+11]=X.itemSize===4?o.w:1)}}l={count:B,texture:N,size:new Ke(D,L)},t.set(a,l),a.addEventListener("dispose",b)}if(g.isInstancedMesh===!0&&g.morphTexture!==null)I.getUniforms().setValue(n,"morphTexture",g.morphTexture,i);else{let Q=0;for(let y=0;y<_.length;y++)Q+=_[y];const h=a.morphTargetsRelative?1:1-Q;I.getUniforms().setValue(n,"morphTargetBaseInfluence",h),I.getUniforms().setValue(n,"morphTargetInfluences",_)}I.getUniforms().setValue(n,"morphTargetsTexture",l.texture,i),I.getUniforms().setValue(n,"morphTargetsTextureSize",l.size)}return{update:s}}function Vj(n,A,i,t){let o=new WeakMap;function s(I){const _=t.render.frame,p=I.geometry,B=A.get(I,p);if(o.get(B)!==_&&(A.update(B),o.set(B,_)),I.isInstancedMesh&&(I.hasEventListener("dispose",a)===!1&&I.addEventListener("dispose",a),o.get(I)!==_&&(i.update(I.instanceMatrix,n.ARRAY_BUFFER),I.instanceColor!==null&&i.update(I.instanceColor,n.ARRAY_BUFFER),o.set(I,_))),I.isSkinnedMesh){const l=I.skeleton;o.get(l)!==_&&(l.update(),o.set(l,_))}return B}function g(){o=new WeakMap}function a(I){const _=I.target;_.removeEventListener("dispose",a),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:s,dispose:g}}class sP extends ti{constructor(A,i,t,o,s,g,a,I,_,p=pg){if(p!==pg&&p!==Rg)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&p===pg&&(t=fs),t===void 0&&p===Rg&&(t=Mg),super(null,o,s,g,a,I,p,t,_),this.isDepthTexture=!0,this.image={width:A,height:i},this.magFilter=a!==void 0?a:gn,this.minFilter=I!==void 0?I:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const i=super.toJSON(A);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const gP=new ti,hk=new sP(1,1),aP=new AP,IP=new UY,CP=new rP,uk=[],fk=[],yk=new Float32Array(16),mk=new Float32Array(9),Dk=new Float32Array(4);function kg(n,A,i){const t=n[0];if(t<=0||t>0)return n;const o=A*i;let s=uk[o];if(s===void 0&&(s=new Float32Array(o),uk[o]=s),A!==0){t.toArray(s,0);for(let g=1,a=0;g!==A;++g)a+=i,n[g].toArray(s,a)}return s}function gi(n,A){if(n.length!==A.length)return!1;for(let i=0,t=n.length;i<t;i++)if(n[i]!==A[i])return!1;return!0}function ai(n,A){for(let i=0,t=A.length;i<t;i++)n[i]=A[i]}function Mc(n,A){let i=fk[A];i===void 0&&(i=new Int32Array(A),fk[A]=i);for(let t=0;t!==A;++t)i[t]=n.allocateTextureUnit();return i}function Wj(n,A){const i=this.cache;i[0]!==A&&(n.uniform1f(this.addr,A),i[0]=A)}function zj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(gi(i,A))return;n.uniform2fv(this.addr,A),ai(i,A)}}function Zj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else if(A.r!==void 0)(i[0]!==A.r||i[1]!==A.g||i[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),i[0]=A.r,i[1]=A.g,i[2]=A.b);else{if(gi(i,A))return;n.uniform3fv(this.addr,A),ai(i,A)}}function Xj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(gi(i,A))return;n.uniform4fv(this.addr,A),ai(i,A)}}function $j(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(gi(i,A))return;n.uniformMatrix2fv(this.addr,!1,A),ai(i,A)}else{if(gi(i,t))return;Dk.set(t),n.uniformMatrix2fv(this.addr,!1,Dk),ai(i,t)}}function AV(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(gi(i,A))return;n.uniformMatrix3fv(this.addr,!1,A),ai(i,A)}else{if(gi(i,t))return;mk.set(t),n.uniformMatrix3fv(this.addr,!1,mk),ai(i,t)}}function eV(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(gi(i,A))return;n.uniformMatrix4fv(this.addr,!1,A),ai(i,A)}else{if(gi(i,t))return;yk.set(t),n.uniformMatrix4fv(this.addr,!1,yk),ai(i,t)}}function tV(n,A){const i=this.cache;i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A)}function iV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(gi(i,A))return;n.uniform2iv(this.addr,A),ai(i,A)}}function nV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else{if(gi(i,A))return;n.uniform3iv(this.addr,A),ai(i,A)}}function rV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(gi(i,A))return;n.uniform4iv(this.addr,A),ai(i,A)}}function oV(n,A){const i=this.cache;i[0]!==A&&(n.uniform1ui(this.addr,A),i[0]=A)}function sV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(gi(i,A))return;n.uniform2uiv(this.addr,A),ai(i,A)}}function gV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else{if(gi(i,A))return;n.uniform3uiv(this.addr,A),ai(i,A)}}function aV(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(gi(i,A))return;n.uniform4uiv(this.addr,A),ai(i,A)}}function IV(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(hk.compareFunction=Z1,s=hk):s=gP,i.setTexture2D(A||s,o)}function CV(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTexture3D(A||IP,o)}function cV(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTextureCube(A||CP,o)}function _V(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTexture2DArray(A||aP,o)}function pV(n){switch(n){case 5126:return Wj;case 35664:return zj;case 35665:return Zj;case 35666:return Xj;case 35674:return $j;case 35675:return AV;case 35676:return eV;case 5124:case 35670:return tV;case 35667:case 35671:return iV;case 35668:case 35672:return nV;case 35669:case 35673:return rV;case 5125:return oV;case 36294:return sV;case 36295:return gV;case 36296:return aV;case 35678:case 36198:case 36298:case 36306:case 35682:return IV;case 35679:case 36299:case 36307:return CV;case 35680:case 36300:case 36308:case 36293:return cV;case 36289:case 36303:case 36311:case 36292:return _V}}function BV(n,A){n.uniform1fv(this.addr,A)}function lV(n,A){const i=kg(A,this.size,2);n.uniform2fv(this.addr,i)}function EV(n,A){const i=kg(A,this.size,3);n.uniform3fv(this.addr,i)}function QV(n,A){const i=kg(A,this.size,4);n.uniform4fv(this.addr,i)}function dV(n,A){const i=kg(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,i)}function hV(n,A){const i=kg(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,i)}function uV(n,A){const i=kg(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,i)}function fV(n,A){n.uniform1iv(this.addr,A)}function yV(n,A){n.uniform2iv(this.addr,A)}function mV(n,A){n.uniform3iv(this.addr,A)}function DV(n,A){n.uniform4iv(this.addr,A)}function SV(n,A){n.uniform1uiv(this.addr,A)}function wV(n,A){n.uniform2uiv(this.addr,A)}function MV(n,A){n.uniform3uiv(this.addr,A)}function RV(n,A){n.uniform4uiv(this.addr,A)}function bV(n,A,i){const t=this.cache,o=A.length,s=Mc(i,o);gi(t,s)||(n.uniform1iv(this.addr,s),ai(t,s));for(let g=0;g!==o;++g)i.setTexture2D(A[g]||gP,s[g])}function vV(n,A,i){const t=this.cache,o=A.length,s=Mc(i,o);gi(t,s)||(n.uniform1iv(this.addr,s),ai(t,s));for(let g=0;g!==o;++g)i.setTexture3D(A[g]||IP,s[g])}function NV(n,A,i){const t=this.cache,o=A.length,s=Mc(i,o);gi(t,s)||(n.uniform1iv(this.addr,s),ai(t,s));for(let g=0;g!==o;++g)i.setTextureCube(A[g]||CP,s[g])}function FV(n,A,i){const t=this.cache,o=A.length,s=Mc(i,o);gi(t,s)||(n.uniform1iv(this.addr,s),ai(t,s));for(let g=0;g!==o;++g)i.setTexture2DArray(A[g]||aP,s[g])}function LV(n){switch(n){case 5126:return BV;case 35664:return lV;case 35665:return EV;case 35666:return QV;case 35674:return dV;case 35675:return hV;case 35676:return uV;case 5124:case 35670:return fV;case 35667:case 35671:return yV;case 35668:case 35672:return mV;case 35669:case 35673:return DV;case 5125:return SV;case 36294:return wV;case 36295:return MV;case 36296:return RV;case 35678:case 36198:case 36298:case 36306:case 35682:return bV;case 35679:case 36299:case 36307:return vV;case 35680:case 36300:case 36308:case 36293:return NV;case 36289:case 36303:case 36311:case 36292:return FV}}class UV{constructor(A,i,t){this.id=A,this.addr=t,this.cache=[],this.type=i.type,this.setValue=pV(i.type)}}class TV{constructor(A,i,t){this.id=A,this.addr=t,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LV(i.type)}}class GV{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,i,t){const o=this.seq;for(let s=0,g=o.length;s!==g;++s){const a=o[s];a.setValue(A,i[a.id],t)}}}const v_=/(\w+)(\])?(\[|\.)?/g;function Sk(n,A){n.seq.push(A),n.map[A.id]=A}function xV(n,A,i){const t=n.name,o=t.length;for(v_.lastIndex=0;;){const s=v_.exec(t),g=v_.lastIndex;let a=s[1];const I=s[2]==="]",_=s[3];if(I&&(a=a|0),_===void 0||_==="["&&g+2===o){Sk(i,_===void 0?new UV(a,n,A):new TV(a,n,A));break}else{let B=i.map[a];B===void 0&&(B=new GV(a),Sk(i,B)),i=B}}}class MC{constructor(A,i){this.seq=[],this.map={};const t=A.getProgramParameter(i,A.ACTIVE_UNIFORMS);for(let o=0;o<t;++o){const s=A.getActiveUniform(i,o),g=A.getUniformLocation(i,s.name);xV(s,g,this)}}setValue(A,i,t,o){const s=this.map[i];s!==void 0&&s.setValue(A,t,o)}setOptional(A,i,t){const o=i[t];o!==void 0&&this.setValue(A,t,o)}static upload(A,i,t,o){for(let s=0,g=i.length;s!==g;++s){const a=i[s],I=t[a.id];I.needsUpdate!==!1&&a.setValue(A,I.value,o)}}static seqWithValue(A,i){const t=[];for(let o=0,s=A.length;o!==s;++o){const g=A[o];g.id in i&&t.push(g)}return t}}function wk(n,A,i){const t=n.createShader(A);return n.shaderSource(t,i),n.compileShader(t),t}const kV=37297;let HV=0;function KV(n,A){const i=n.split(`
`),t=[],o=Math.max(A-6,0),s=Math.min(A+6,i.length);for(let g=o;g<s;g++){const a=g+1;t.push(`${a===A?">":" "} ${a}: ${i[g]}`)}return t.join(`
`)}const Mk=new Me;function PV(n){tt._getMatrix(Mk,tt.workingColorSpace,n);const A=`mat3( ${Mk.elements.map(i=>i.toFixed(4))} )`;switch(tt.getTransfer(n)){case Dc:return[A,"LinearTransferOETF"];case Qt:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[A,"LinearTransferOETF"]}}function Rk(n,A,i){const t=n.getShaderParameter(A,n.COMPILE_STATUS),o=n.getShaderInfoLog(A).trim();if(t&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const g=parseInt(s[1]);return i.toUpperCase()+`

`+o+`

`+KV(n.getShaderSource(A),g)}else return o}function JV(n,A){const i=PV(A);return[`vec4 ${n}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function OV(n,A){let i;switch(A){case YO:i="Linear";break;case qO:i="Reinhard";break;case jO:i="Cineon";break;case VO:i="ACESFilmic";break;case zO:i="AgX";break;case ZO:i="Neutral";break;case WO:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),i="Linear"}return"vec3 "+n+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ZI=new k;function YV(){tt.getLuminanceCoefficients(ZI);const n=ZI.x.toFixed(4),A=ZI.y.toFixed(4),i=ZI.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${A}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qV(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function jV(n){const A=[];for(const i in n){const t=n[i];t!==!1&&A.push("#define "+i+" "+t)}return A.join(`
`)}function VV(n,A){const i={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let o=0;o<t;o++){const s=n.getActiveAttrib(A,o),g=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),i[g]={type:s.type,location:n.getAttribLocation(A,g),locationSize:a}}return i}function da(n){return n!==""}function bk(n,A){const i=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function vk(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const WV=/^[ \t]*#include +<([\w\d./]+)>/gm;function DB(n){return n.replace(WV,ZV)}const zV=new Map;function ZV(n,A){let i=be[A];if(i===void 0){const t=zV.get(A);if(t!==void 0)i=be[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,t);else throw new Error("Can not resolve #include <"+A+">")}return DB(i)}const XV=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nk(n){return n.replace(XV,$V)}function $V(n,A,i,t){let o="";for(let s=parseInt(A);s<parseInt(i);s++)o+=t.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Fk(n){let A=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function AW(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===x1?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===mO?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jr&&(A="SHADOWMAP_TYPE_VSM"),A}function eW(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sg:case wg:A="ENVMAP_TYPE_CUBE";break;case yc:A="ENVMAP_TYPE_CUBE_UV";break}return A}function tW(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wg:A="ENVMAP_MODE_REFRACTION";break}return A}function iW(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fc:A="ENVMAP_BLENDING_MULTIPLY";break;case JO:A="ENVMAP_BLENDING_MIX";break;case OO:A="ENVMAP_BLENDING_ADD";break}return A}function nW(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const i=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:t,maxMip:i}}function rW(n,A,i,t){const o=n.getContext(),s=i.defines;let g=i.vertexShader,a=i.fragmentShader;const I=AW(i),_=eW(i),p=tW(i),B=iW(i),l=nW(i),Q=qV(i),h=jV(s),y=o.createProgram();let u,E,f=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h].filter(da).join(`
`),u.length>0&&(u+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h].filter(da).join(`
`),E.length>0&&(E+=`
`)):(u=[Fk(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),E=[Fk(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+p:"",i.envMap?"#define "+B:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ko?"#define TONE_MAPPING":"",i.toneMapping!==Ko?be.tonemapping_pars_fragment:"",i.toneMapping!==Ko?OV("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,JV("linearToOutputTexel",i.outputColorSpace),YV(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(da).join(`
`)),g=DB(g),g=bk(g,i),g=vk(g,i),a=DB(a),a=bk(a,i),a=vk(a,i),g=Nk(g),a=Nk(a),i.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,u=[Q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["#define varying in",i.glslVersion===Yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const m=f+u+g,D=f+E+a,L=wk(o,o.VERTEX_SHADER,m),v=wk(o,o.FRAGMENT_SHADER,D);o.attachShader(y,L),o.attachShader(y,v),i.index0AttributeName!==void 0?o.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function N(G){if(n.debug.checkShaderErrors){const nA=o.getProgramInfoLog(y).trim(),X=o.getShaderInfoLog(L).trim(),gA=o.getShaderInfoLog(v).trim();let EA=!0,tA=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(EA=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,L,v);else{const fA=Rk(o,L,"vertex"),H=Rk(o,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+nA+`
`+fA+`
`+H)}else nA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nA):(X===""||gA==="")&&(tA=!1);tA&&(G.diagnostics={runnable:EA,programLog:nA,vertexShader:{log:X,prefix:u},fragmentShader:{log:gA,prefix:E}})}o.deleteShader(L),o.deleteShader(v),U=new MC(o,y),b=VV(o,y)}let U;this.getUniforms=function(){return U===void 0&&N(this),U};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(y,kV)),S},this.destroy=function(){t.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HV++,this.cacheKey=A,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=v,this}let oW=0;class sW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const i=A.vertexShader,t=A.fragmentShader,o=this._getShaderStage(i),s=this._getShaderStage(t),g=this._getShaderCacheForMaterial(A);return g.has(o)===!1&&(g.add(o),o.usedTimes++),g.has(s)===!1&&(g.add(s),s.usedTimes++),this}remove(A){const i=this.materialCache.get(A);for(const t of i)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const i=this.materialCache;let t=i.get(A);return t===void 0&&(t=new Set,i.set(A,t)),t}_getShaderStage(A){const i=this.shaderCache;let t=i.get(A);return t===void 0&&(t=new gW(A),i.set(A,t)),t}}class gW{constructor(A){this.id=oW++,this.code=A,this.usedTimes=0}}function aW(n,A,i,t,o,s,g){const a=new xl,I=new sW,_=new Set,p=[],B=o.logarithmicDepthBuffer,l=o.vertexTextures;let Q=o.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return _.add(b),b===0?"uv":`uv${b}`}function u(b,S,G,nA,X){const gA=nA.fog,EA=X.geometry,tA=b.isMeshStandardMaterial?nA.environment:null,fA=(b.isMeshStandardMaterial?i:A).get(b.envMap||tA),H=fA&&fA.mapping===yc?fA.image.height:null,oA=h[b.type];b.precision!==null&&(Q=o.getMaxPrecision(b.precision),Q!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",Q,"instead."));const pA=EA.morphAttributes.position||EA.morphAttributes.normal||EA.morphAttributes.color,bA=pA!==void 0?pA.length:0;let OA=0;EA.morphAttributes.position!==void 0&&(OA=1),EA.morphAttributes.normal!==void 0&&(OA=2),EA.morphAttributes.color!==void 0&&(OA=3);let Ne,rA,uA,TA;if(oA){const nt=en[oA];Ne=nt.vertexShader,rA=nt.fragmentShader}else Ne=b.vertexShader,rA=b.fragmentShader,I.update(b),uA=I.getVertexShaderID(b),TA=I.getFragmentShaderID(b);const MA=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Qe=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,yt=!!b.map,je=!!b.matcap,Kt=!!fA,q=!!b.aoMap,qi=!!b.lightMap,qe=!!b.bumpMap,Ue=!!b.normalMap,Ie=!!b.displacementMap,dt=!!b.emissiveMap,oe=!!b.metalnessMap,F=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,BA=b.dispersion>0,QA=b.iridescence>0,_A=b.sheen>0,$A=b.transmission>0,GA=w&&!!b.anisotropyMap,YA=z&&!!b.clearcoatMap,Ve=z&&!!b.clearcoatNormalMap,yA=z&&!!b.clearcoatRoughnessMap,VA=QA&&!!b.iridescenceMap,Ce=QA&&!!b.iridescenceThicknessMap,ce=_A&&!!b.sheenColorMap,JA=_A&&!!b.sheenRoughnessMap,Se=!!b.specularMap,we=!!b.specularColorMap,Bt=!!b.specularIntensityMap,P=$A&&!!b.transmissionMap,UA=$A&&!!b.thicknessMap,iA=!!b.gradientMap,lA=!!b.alphaMap,HA=b.alphaTest>0,KA=!!b.alphaHash,ue=!!b.extensions;let C=Ko;b.toneMapped&&(MA===null||MA.isXRRenderTarget===!0)&&(C=n.toneMapping);const ii={shaderID:oA,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:rA,defines:b.defines,customVertexShaderID:uA,customFragmentShaderID:TA,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Q,batching:Fe,batchingColor:Fe&&X._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&X.instanceColor!==null,instancingMorph:Qe&&X.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:MA===null?n.outputColorSpace:MA.isXRRenderTarget===!0?MA.texture.colorSpace:Gg,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:je,envMap:Kt,envMapMode:Kt&&fA.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:qi,bumpMap:qe,normalMap:Ue,displacementMap:l&&Ie,emissiveMap:dt,normalMapObjectSpace:Ue&&b.normalMapType===iY,normalMapTangentSpace:Ue&&b.normalMapType===mc,metalnessMap:oe,roughnessMap:F,anisotropy:w,anisotropyMap:GA,clearcoat:z,clearcoatMap:YA,clearcoatNormalMap:Ve,clearcoatRoughnessMap:yA,dispersion:BA,iridescence:QA,iridescenceMap:VA,iridescenceThicknessMap:Ce,sheen:_A,sheenColorMap:ce,sheenRoughnessMap:JA,specularMap:Se,specularColorMap:we,specularIntensityMap:Bt,transmission:$A,transmissionMap:P,thicknessMap:UA,gradientMap:iA,opaque:b.transparent===!1&&b.blending===_g&&b.alphaToCoverage===!1,alphaMap:lA,alphaTest:HA,alphaHash:KA,combine:b.combine,mapUv:yt&&y(b.map.channel),aoMapUv:q&&y(b.aoMap.channel),lightMapUv:qi&&y(b.lightMap.channel),bumpMapUv:qe&&y(b.bumpMap.channel),normalMapUv:Ue&&y(b.normalMap.channel),displacementMapUv:Ie&&y(b.displacementMap.channel),emissiveMapUv:dt&&y(b.emissiveMap.channel),metalnessMapUv:oe&&y(b.metalnessMap.channel),roughnessMapUv:F&&y(b.roughnessMap.channel),anisotropyMapUv:GA&&y(b.anisotropyMap.channel),clearcoatMapUv:YA&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yA&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:VA&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:JA&&y(b.sheenRoughnessMap.channel),specularMapUv:Se&&y(b.specularMap.channel),specularColorMapUv:we&&y(b.specularColorMap.channel),specularIntensityMapUv:Bt&&y(b.specularIntensityMap.channel),transmissionMapUv:P&&y(b.transmissionMap.channel),thicknessMapUv:UA&&y(b.thicknessMap.channel),alphaMapUv:lA&&y(b.alphaMap.channel),vertexTangents:!!EA.attributes.tangent&&(Ue||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!EA.attributes.color&&EA.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!EA.attributes.uv&&(yt||lA),fog:!!gA,useFog:b.fog===!0,fogExp2:!!gA&&gA.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:B,reverseDepthBuffer:re,skinning:X.isSkinnedMesh===!0,morphTargets:EA.morphAttributes.position!==void 0,morphNormals:EA.morphAttributes.normal!==void 0,morphColors:EA.morphAttributes.color!==void 0,morphTargetsCount:bA,morphTextureStride:OA,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:g.numPlanes,numClipIntersection:g.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:C,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===Qt,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===Qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mr,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ue&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&b.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ii.vertexUv1s=_.has(1),ii.vertexUv2s=_.has(2),ii.vertexUv3s=_.has(3),_.clear(),ii}function E(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)S.push(G),S.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(f(S,b),m(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function f(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function m(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function D(b){const S=h[b.type];let G;if(S){const nA=en[S];G=Hl.clone(nA.uniforms)}else G=b.uniforms;return G}function L(b,S){let G;for(let nA=0,X=p.length;nA<X;nA++){const gA=p[nA];if(gA.cacheKey===S){G=gA,++G.usedTimes;break}}return G===void 0&&(G=new rW(n,S,b,s),p.push(G)),G}function v(b){if(--b.usedTimes===0){const S=p.indexOf(b);p[S]=p[p.length-1],p.pop(),b.destroy()}}function N(b){I.remove(b)}function U(){I.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:D,acquireProgram:L,releaseProgram:v,releaseShaderCache:N,programs:p,dispose:U}}function IW(){let n=new WeakMap;function A(g){return n.has(g)}function i(g){let a=n.get(g);return a===void 0&&(a={},n.set(g,a)),a}function t(g){n.delete(g)}function o(g,a,I){n.get(g)[a]=I}function s(){n=new WeakMap}return{has:A,get:i,remove:t,update:o,dispose:s}}function CW(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function Lk(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function Uk(){const n=[];let A=0;const i=[],t=[],o=[];function s(){A=0,i.length=0,t.length=0,o.length=0}function g(B,l,Q,h,y,u){let E=n[A];return E===void 0?(E={id:B.id,object:B,geometry:l,material:Q,groupOrder:h,renderOrder:B.renderOrder,z:y,group:u},n[A]=E):(E.id=B.id,E.object=B,E.geometry=l,E.material=Q,E.groupOrder=h,E.renderOrder=B.renderOrder,E.z=y,E.group=u),A++,E}function a(B,l,Q,h,y,u){const E=g(B,l,Q,h,y,u);Q.transmission>0?t.push(E):Q.transparent===!0?o.push(E):i.push(E)}function I(B,l,Q,h,y,u){const E=g(B,l,Q,h,y,u);Q.transmission>0?t.unshift(E):Q.transparent===!0?o.unshift(E):i.unshift(E)}function _(B,l){i.length>1&&i.sort(B||CW),t.length>1&&t.sort(l||Lk),o.length>1&&o.sort(l||Lk)}function p(){for(let B=A,l=n.length;B<l;B++){const Q=n[B];if(Q.id===null)break;Q.id=null,Q.object=null,Q.geometry=null,Q.material=null,Q.group=null}}return{opaque:i,transmissive:t,transparent:o,init:s,push:a,unshift:I,finish:p,sort:_}}function cW(){let n=new WeakMap;function A(t,o){const s=n.get(t);let g;return s===void 0?(g=new Uk,n.set(t,[g])):o>=s.length?(g=new Uk,s.push(g)):g=s[o],g}function i(){n=new WeakMap}return{get:A,dispose:i}}function _W(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let i;switch(A.type){case"DirectionalLight":i={direction:new k,color:new te};break;case"SpotLight":i={position:new k,direction:new k,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new te,groundColor:new te};break;case"RectAreaLight":i={color:new te,position:new k,halfWidth:new k,halfHeight:new k};break}return n[A.id]=i,i}}}function pW(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let i;switch(A.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=i,i}}}let BW=0;function lW(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function EW(n){const A=new _W,i=pW(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)t.probe.push(new k);const o=new k,s=new jA,g=new jA;function a(_){let p=0,B=0,l=0;for(let b=0;b<9;b++)t.probe[b].set(0,0,0);let Q=0,h=0,y=0,u=0,E=0,f=0,m=0,D=0,L=0,v=0,N=0;_.sort(lW);for(let b=0,S=_.length;b<S;b++){const G=_[b],nA=G.color,X=G.intensity,gA=G.distance,EA=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)p+=nA.r*X,B+=nA.g*X,l+=nA.b*X;else if(G.isLightProbe){for(let tA=0;tA<9;tA++)t.probe[tA].addScaledVector(G.sh.coefficients[tA],X);N++}else if(G.isDirectionalLight){const tA=A.get(G);if(tA.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const fA=G.shadow,H=i.get(G);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,t.directionalShadow[Q]=H,t.directionalShadowMap[Q]=EA,t.directionalShadowMatrix[Q]=G.shadow.matrix,f++}t.directional[Q]=tA,Q++}else if(G.isSpotLight){const tA=A.get(G);tA.position.setFromMatrixPosition(G.matrixWorld),tA.color.copy(nA).multiplyScalar(X),tA.distance=gA,tA.coneCos=Math.cos(G.angle),tA.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),tA.decay=G.decay,t.spot[y]=tA;const fA=G.shadow;if(G.map&&(t.spotLightMap[L]=G.map,L++,fA.updateMatrices(G),G.castShadow&&v++),t.spotLightMatrix[y]=fA.matrix,G.castShadow){const H=i.get(G);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,t.spotShadow[y]=H,t.spotShadowMap[y]=EA,D++}y++}else if(G.isRectAreaLight){const tA=A.get(G);tA.color.copy(nA).multiplyScalar(X),tA.halfWidth.set(G.width*.5,0,0),tA.halfHeight.set(0,G.height*.5,0),t.rectArea[u]=tA,u++}else if(G.isPointLight){const tA=A.get(G);if(tA.color.copy(G.color).multiplyScalar(G.intensity),tA.distance=G.distance,tA.decay=G.decay,G.castShadow){const fA=G.shadow,H=i.get(G);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,H.shadowCameraNear=fA.camera.near,H.shadowCameraFar=fA.camera.far,t.pointShadow[h]=H,t.pointShadowMap[h]=EA,t.pointShadowMatrix[h]=G.shadow.matrix,m++}t.point[h]=tA,h++}else if(G.isHemisphereLight){const tA=A.get(G);tA.skyColor.copy(G.color).multiplyScalar(X),tA.groundColor.copy(G.groundColor).multiplyScalar(X),t.hemi[E]=tA,E++}}u>0&&(n.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=NA.LTC_FLOAT_1,t.rectAreaLTC2=NA.LTC_FLOAT_2):(t.rectAreaLTC1=NA.LTC_HALF_1,t.rectAreaLTC2=NA.LTC_HALF_2)),t.ambient[0]=p,t.ambient[1]=B,t.ambient[2]=l;const U=t.hash;(U.directionalLength!==Q||U.pointLength!==h||U.spotLength!==y||U.rectAreaLength!==u||U.hemiLength!==E||U.numDirectionalShadows!==f||U.numPointShadows!==m||U.numSpotShadows!==D||U.numSpotMaps!==L||U.numLightProbes!==N)&&(t.directional.length=Q,t.spot.length=y,t.rectArea.length=u,t.point.length=h,t.hemi.length=E,t.directionalShadow.length=f,t.directionalShadowMap.length=f,t.pointShadow.length=m,t.pointShadowMap.length=m,t.spotShadow.length=D,t.spotShadowMap.length=D,t.directionalShadowMatrix.length=f,t.pointShadowMatrix.length=m,t.spotLightMatrix.length=D+L-v,t.spotLightMap.length=L,t.numSpotLightShadowsWithMaps=v,t.numLightProbes=N,U.directionalLength=Q,U.pointLength=h,U.spotLength=y,U.rectAreaLength=u,U.hemiLength=E,U.numDirectionalShadows=f,U.numPointShadows=m,U.numSpotShadows=D,U.numSpotMaps=L,U.numLightProbes=N,t.version=BW++)}function I(_,p){let B=0,l=0,Q=0,h=0,y=0;const u=p.matrixWorldInverse;for(let E=0,f=_.length;E<f;E++){const m=_[E];if(m.isDirectionalLight){const D=t.directional[B];D.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(u),B++}else if(m.isSpotLight){const D=t.spot[Q];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(u),Q++}else if(m.isRectAreaLight){const D=t.rectArea[h];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),g.identity(),s.copy(m.matrixWorld),s.premultiply(u),g.extractRotation(s),D.halfWidth.set(m.width*.5,0,0),D.halfHeight.set(0,m.height*.5,0),D.halfWidth.applyMatrix4(g),D.halfHeight.applyMatrix4(g),h++}else if(m.isPointLight){const D=t.point[l];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),l++}else if(m.isHemisphereLight){const D=t.hemi[y];D.direction.setFromMatrixPosition(m.matrixWorld),D.direction.transformDirection(u),y++}}}return{setup:a,setupView:I,state:t}}function Tk(n){const A=new EW(n),i=[],t=[];function o(p){_.camera=p,i.length=0,t.length=0}function s(p){i.push(p)}function g(p){t.push(p)}function a(){A.setup(i)}function I(p){A.setupView(i,p)}const _={lightsArray:i,shadowsArray:t,camera:null,lights:A,transmissionRenderTarget:{}};return{init:o,state:_,setupLights:a,setupLightsView:I,pushLight:s,pushShadow:g}}function QW(n){let A=new WeakMap;function i(o,s=0){const g=A.get(o);let a;return g===void 0?(a=new Tk(n),A.set(o,[a])):s>=g.length?(a=new Tk(n),g.push(a)):a=g[s],a}function t(){A=new WeakMap}return{get:i,dispose:t}}class dW extends Kn{static get type(){return"MeshDepthMaterial"}constructor(A){super(),this.isMeshDepthMaterial=!0,this.depthPacking=eY,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class hW extends Kn{static get type(){return"MeshDistanceMaterial"}constructor(A){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const uW=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fW=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yW(n,A,i){let t=new Kl;const o=new Ke,s=new Ke,g=new ve,a=new dW({depthPacking:tY}),I=new hW,_={},p=i.maxTextureSize,B={[oo]:sn,[sn]:oo,[mr]:mr},l=new go({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:uW,fragmentShader:fW}),Q=l.clone();Q.defines.HORIZONTAL_PASS=1;const h=new si;h.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _i(h,l),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x1;let E=this.type;this.render=function(v,N,U){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||v.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),nA=n.state;nA.setBlending(Ho),nA.buffers.color.setClear(1,1,1,1),nA.buffers.depth.setTest(!0),nA.setScissorTest(!1);const X=E!==Jr&&this.type===Jr,gA=E===Jr&&this.type!==Jr;for(let EA=0,tA=v.length;EA<tA;EA++){const fA=v[EA],H=fA.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",fA,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const oA=H.getFrameExtents();if(o.multiply(oA),s.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(s.x=Math.floor(p/oA.x),o.x=s.x*oA.x,H.mapSize.x=s.x),o.y>p&&(s.y=Math.floor(p/oA.y),o.y=s.y*oA.y,H.mapSize.y=s.y)),H.map===null||X===!0||gA===!0){const bA=this.type!==Jr?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new ys(o.x,o.y,bA),H.map.texture.name=fA.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const pA=H.getViewportCount();for(let bA=0;bA<pA;bA++){const OA=H.getViewport(bA);g.set(s.x*OA.x,s.y*OA.y,s.x*OA.z,s.y*OA.w),nA.viewport(g),H.updateMatrices(fA,bA),t=H.getFrustum(),D(N,U,H.camera,fA,this.type)}H.isPointLightShadow!==!0&&this.type===Jr&&f(H,U),H.needsUpdate=!1}E=this.type,u.needsUpdate=!1,n.setRenderTarget(b,S,G)};function f(v,N){const U=A.update(y);l.defines.VSM_SAMPLES!==v.blurSamples&&(l.defines.VSM_SAMPLES=v.blurSamples,Q.defines.VSM_SAMPLES=v.blurSamples,l.needsUpdate=!0,Q.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ys(o.x,o.y)),l.uniforms.shadow_pass.value=v.map.texture,l.uniforms.resolution.value=v.mapSize,l.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(N,null,U,l,y,null),Q.uniforms.shadow_pass.value=v.mapPass.texture,Q.uniforms.resolution.value=v.mapSize,Q.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(N,null,U,Q,y,null)}function m(v,N,U,b){let S=null;const G=U.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(G!==void 0)S=G;else if(S=U.isPointLight===!0?I:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const nA=S.uuid,X=N.uuid;let gA=_[nA];gA===void 0&&(gA={},_[nA]=gA);let EA=gA[X];EA===void 0&&(EA=S.clone(),gA[X]=EA,N.addEventListener("dispose",L)),S=EA}if(S.visible=N.visible,S.wireframe=N.wireframe,b===Jr?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:B[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const nA=n.properties.get(S);nA.light=U}return S}function D(v,N,U,b,S){if(v.visible===!1)return;if(v.layers.test(N.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===Jr)&&(!v.frustumCulled||t.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);const X=A.update(v),gA=v.material;if(Array.isArray(gA)){const EA=X.groups;for(let tA=0,fA=EA.length;tA<fA;tA++){const H=EA[tA],oA=gA[H.materialIndex];if(oA&&oA.visible){const pA=m(v,oA,b,S);v.onBeforeShadow(n,v,N,U,X,pA,H),n.renderBufferDirect(U,null,X,pA,v,H),v.onAfterShadow(n,v,N,U,X,pA,H)}}}else if(gA.visible){const EA=m(v,gA,b,S);v.onBeforeShadow(n,v,N,U,X,EA,null),n.renderBufferDirect(U,null,X,EA,v,null),v.onAfterShadow(n,v,N,U,X,EA,null)}}const nA=v.children;for(let X=0,gA=nA.length;X<gA;X++)D(nA[X],N,U,b,S)}function L(v){v.target.removeEventListener("dispose",L);for(const U in _){const b=_[U],S=v.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const mW={[Jp]:Op,[Yp]:Vp,[qp]:Wp,[Dg]:jp,[Op]:Jp,[Vp]:Yp,[Wp]:qp,[jp]:Dg};function DW(n,A){function i(){let P=!1;const UA=new ve;let iA=null;const lA=new ve(0,0,0,0);return{setMask:function(HA){iA!==HA&&!P&&(n.colorMask(HA,HA,HA,HA),iA=HA)},setLocked:function(HA){P=HA},setClear:function(HA,KA,ue,C,ii){ii===!0&&(HA*=C,KA*=C,ue*=C),UA.set(HA,KA,ue,C),lA.equals(UA)===!1&&(n.clearColor(HA,KA,ue,C),lA.copy(UA))},reset:function(){P=!1,iA=null,lA.set(-1,0,0,0)}}}function t(){let P=!1,UA=!1,iA=null,lA=null,HA=null;return{setReversed:function(KA){if(UA!==KA){const ue=A.get("EXT_clip_control");UA?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const C=HA;HA=null,this.setClear(C)}UA=KA},getReversed:function(){return UA},setTest:function(KA){KA?MA(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(KA){iA!==KA&&!P&&(n.depthMask(KA),iA=KA)},setFunc:function(KA){if(UA&&(KA=mW[KA]),lA!==KA){switch(KA){case Jp:n.depthFunc(n.NEVER);break;case Op:n.depthFunc(n.ALWAYS);break;case Yp:n.depthFunc(n.LESS);break;case Dg:n.depthFunc(n.LEQUAL);break;case qp:n.depthFunc(n.EQUAL);break;case jp:n.depthFunc(n.GEQUAL);break;case Vp:n.depthFunc(n.GREATER);break;case Wp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lA=KA}},setLocked:function(KA){P=KA},setClear:function(KA){HA!==KA&&(UA&&(KA=1-KA),n.clearDepth(KA),HA=KA)},reset:function(){P=!1,iA=null,lA=null,HA=null,UA=!1}}}function o(){let P=!1,UA=null,iA=null,lA=null,HA=null,KA=null,ue=null,C=null,ii=null;return{setTest:function(nt){P||(nt?MA(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(nt){UA!==nt&&!P&&(n.stencilMask(nt),UA=nt)},setFunc:function(nt,ji,hn){(iA!==nt||lA!==ji||HA!==hn)&&(n.stencilFunc(nt,ji,hn),iA=nt,lA=ji,HA=hn)},setOp:function(nt,ji,hn){(KA!==nt||ue!==ji||C!==hn)&&(n.stencilOp(nt,ji,hn),KA=nt,ue=ji,C=hn)},setLocked:function(nt){P=nt},setClear:function(nt){ii!==nt&&(n.clearStencil(nt),ii=nt)},reset:function(){P=!1,UA=null,iA=null,lA=null,HA=null,KA=null,ue=null,C=null,ii=null}}}const s=new i,g=new t,a=new o,I=new WeakMap,_=new WeakMap;let p={},B={},l=new WeakMap,Q=[],h=null,y=!1,u=null,E=null,f=null,m=null,D=null,L=null,v=null,N=new te(0,0,0),U=0,b=!1,S=null,G=null,nA=null,X=null,gA=null;const EA=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tA=!1,fA=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(fA=parseFloat(/^WebGL (\d)/.exec(H)[1]),tA=fA>=1):H.indexOf("OpenGL ES")!==-1&&(fA=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),tA=fA>=2);let oA=null,pA={};const bA=n.getParameter(n.SCISSOR_BOX),OA=n.getParameter(n.VIEWPORT),Ne=new ve().fromArray(bA),rA=new ve().fromArray(OA);function uA(P,UA,iA,lA){const HA=new Uint8Array(4),KA=n.createTexture();n.bindTexture(P,KA),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<iA;ue++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(UA,0,n.RGBA,1,1,lA,0,n.RGBA,n.UNSIGNED_BYTE,HA):n.texImage2D(UA+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,HA);return KA}const TA={};TA[n.TEXTURE_2D]=uA(n.TEXTURE_2D,n.TEXTURE_2D,1),TA[n.TEXTURE_CUBE_MAP]=uA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),TA[n.TEXTURE_2D_ARRAY]=uA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),TA[n.TEXTURE_3D]=uA(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),g.setClear(1),a.setClear(0),MA(n.DEPTH_TEST),g.setFunc(Dg),qe(!1),Ue(Tx),MA(n.CULL_FACE),q(Ho);function MA(P){p[P]!==!0&&(n.enable(P),p[P]=!0)}function re(P){p[P]!==!1&&(n.disable(P),p[P]=!1)}function Qe(P,UA){return B[P]!==UA?(n.bindFramebuffer(P,UA),B[P]=UA,P===n.DRAW_FRAMEBUFFER&&(B[n.FRAMEBUFFER]=UA),P===n.FRAMEBUFFER&&(B[n.DRAW_FRAMEBUFFER]=UA),!0):!1}function Fe(P,UA){let iA=Q,lA=!1;if(P){iA=l.get(UA),iA===void 0&&(iA=[],l.set(UA,iA));const HA=P.textures;if(iA.length!==HA.length||iA[0]!==n.COLOR_ATTACHMENT0){for(let KA=0,ue=HA.length;KA<ue;KA++)iA[KA]=n.COLOR_ATTACHMENT0+KA;iA.length=HA.length,lA=!0}}else iA[0]!==n.BACK&&(iA[0]=n.BACK,lA=!0);lA&&n.drawBuffers(iA)}function yt(P){return h!==P?(n.useProgram(P),h=P,!0):!1}const je={[gs]:n.FUNC_ADD,[SO]:n.FUNC_SUBTRACT,[wO]:n.FUNC_REVERSE_SUBTRACT};je[MO]=n.MIN,je[RO]=n.MAX;const Kt={[bO]:n.ZERO,[vO]:n.ONE,[NO]:n.SRC_COLOR,[Kp]:n.SRC_ALPHA,[xO]:n.SRC_ALPHA_SATURATE,[TO]:n.DST_COLOR,[LO]:n.DST_ALPHA,[FO]:n.ONE_MINUS_SRC_COLOR,[Pp]:n.ONE_MINUS_SRC_ALPHA,[GO]:n.ONE_MINUS_DST_COLOR,[UO]:n.ONE_MINUS_DST_ALPHA,[kO]:n.CONSTANT_COLOR,[HO]:n.ONE_MINUS_CONSTANT_COLOR,[KO]:n.CONSTANT_ALPHA,[PO]:n.ONE_MINUS_CONSTANT_ALPHA};function q(P,UA,iA,lA,HA,KA,ue,C,ii,nt){if(P===Ho){y===!0&&(re(n.BLEND),y=!1);return}if(y===!1&&(MA(n.BLEND),y=!0),P!==DO){if(P!==u||nt!==b){if((E!==gs||D!==gs)&&(n.blendEquation(n.FUNC_ADD),E=gs,D=gs),nt)switch(P){case _g:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gx:n.blendFunc(n.ONE,n.ONE);break;case xx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case _g:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gx:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,m=null,L=null,v=null,N.set(0,0,0),U=0,u=P,b=nt}return}HA=HA||UA,KA=KA||iA,ue=ue||lA,(UA!==E||HA!==D)&&(n.blendEquationSeparate(je[UA],je[HA]),E=UA,D=HA),(iA!==f||lA!==m||KA!==L||ue!==v)&&(n.blendFuncSeparate(Kt[iA],Kt[lA],Kt[KA],Kt[ue]),f=iA,m=lA,L=KA,v=ue),(C.equals(N)===!1||ii!==U)&&(n.blendColor(C.r,C.g,C.b,ii),N.copy(C),U=ii),u=P,b=!1}function qi(P,UA){P.side===mr?re(n.CULL_FACE):MA(n.CULL_FACE);let iA=P.side===sn;UA&&(iA=!iA),qe(iA),P.blending===_g&&P.transparent===!1?q(Ho):q(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),g.setFunc(P.depthFunc),g.setTest(P.depthTest),g.setMask(P.depthWrite),s.setMask(P.colorWrite);const lA=P.stencilWrite;a.setTest(lA),lA&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),dt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?MA(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function Ue(P){P!==fO?(MA(n.CULL_FACE),P!==G&&(P===Tx?n.cullFace(n.BACK):P===yO?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),G=P}function Ie(P){P!==nA&&(tA&&n.lineWidth(P),nA=P)}function dt(P,UA,iA){P?(MA(n.POLYGON_OFFSET_FILL),(X!==UA||gA!==iA)&&(n.polygonOffset(UA,iA),X=UA,gA=iA)):re(n.POLYGON_OFFSET_FILL)}function oe(P){P?MA(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function F(P){P===void 0&&(P=n.TEXTURE0+EA-1),oA!==P&&(n.activeTexture(P),oA=P)}function w(P,UA,iA){iA===void 0&&(oA===null?iA=n.TEXTURE0+EA-1:iA=oA);let lA=pA[iA];lA===void 0&&(lA={type:void 0,texture:void 0},pA[iA]=lA),(lA.type!==P||lA.texture!==UA)&&(oA!==iA&&(n.activeTexture(iA),oA=iA),n.bindTexture(P,UA||TA[P]),lA.type=P,lA.texture=UA)}function z(){const P=pA[oA];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function BA(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function QA(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _A(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $A(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function GA(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function YA(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yA(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function VA(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(P){Ne.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function JA(P){rA.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),rA.copy(P))}function Se(P,UA){let iA=_.get(UA);iA===void 0&&(iA=new WeakMap,_.set(UA,iA));let lA=iA.get(P);lA===void 0&&(lA=n.getUniformBlockIndex(UA,P.name),iA.set(P,lA))}function we(P,UA){const lA=_.get(UA).get(P);I.get(UA)!==lA&&(n.uniformBlockBinding(UA,lA,P.__bindingPointIndex),I.set(UA,lA))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),g.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},oA=null,pA={},B={},l=new WeakMap,Q=[],h=null,y=!1,u=null,E=null,f=null,m=null,D=null,L=null,v=null,N=new te(0,0,0),U=0,b=!1,S=null,G=null,nA=null,X=null,gA=null,Ne.set(0,0,n.canvas.width,n.canvas.height),rA.set(0,0,n.canvas.width,n.canvas.height),s.reset(),g.reset(),a.reset()}return{buffers:{color:s,depth:g,stencil:a},enable:MA,disable:re,bindFramebuffer:Qe,drawBuffers:Fe,useProgram:yt,setBlending:q,setMaterial:qi,setFlipSided:qe,setCullFace:Ue,setLineWidth:Ie,setPolygonOffset:dt,setScissorTest:oe,activeTexture:F,bindTexture:w,unbindTexture:z,compressedTexImage2D:BA,compressedTexImage3D:QA,texImage2D:VA,texImage3D:Ce,updateUBOMapping:Se,uniformBlockBinding:we,texStorage2D:Ve,texStorage3D:yA,texSubImage2D:_A,texSubImage3D:$A,compressedTexSubImage2D:GA,compressedTexSubImage3D:YA,scissor:ce,viewport:JA,reset:Bt}}function Gk(n,A,i,t){const o=SW(t);switch(i){case O1:return n*A;case q1:return n*A;case j1:return n*A*2;case Fl:return n*A/o.components*o.byteLength;case Ll:return n*A/o.components*o.byteLength;case V1:return n*A*2/o.components*o.byteLength;case Ul:return n*A*2/o.components*o.byteLength;case Y1:return n*A*3/o.components*o.byteLength;case xn:return n*A*4/o.components*o.byteLength;case Tl:return n*A*4/o.components*o.byteLength;case yC:case mC:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case DC:case SC:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case Xp:case AB:return Math.max(n,16)*Math.max(A,8)/4;case Zp:case $p:return Math.max(n,8)*Math.max(A,8)/2;case eB:case tB:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case iB:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case nB:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case rB:return Math.floor((n+4)/5)*Math.floor((A+3)/4)*16;case oB:return Math.floor((n+4)/5)*Math.floor((A+4)/5)*16;case sB:return Math.floor((n+5)/6)*Math.floor((A+4)/5)*16;case gB:return Math.floor((n+5)/6)*Math.floor((A+5)/6)*16;case aB:return Math.floor((n+7)/8)*Math.floor((A+4)/5)*16;case IB:return Math.floor((n+7)/8)*Math.floor((A+5)/6)*16;case CB:return Math.floor((n+7)/8)*Math.floor((A+7)/8)*16;case cB:return Math.floor((n+9)/10)*Math.floor((A+4)/5)*16;case _B:return Math.floor((n+9)/10)*Math.floor((A+5)/6)*16;case pB:return Math.floor((n+9)/10)*Math.floor((A+7)/8)*16;case BB:return Math.floor((n+9)/10)*Math.floor((A+9)/10)*16;case lB:return Math.floor((n+11)/12)*Math.floor((A+9)/10)*16;case EB:return Math.floor((n+11)/12)*Math.floor((A+11)/12)*16;case wC:case QB:case dB:return Math.ceil(n/4)*Math.ceil(A/4)*16;case W1:case hB:return Math.ceil(n/4)*Math.ceil(A/4)*8;case uB:case fB:return Math.ceil(n/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SW(n){switch(n){case so:case K1:return{byteLength:1,components:1};case Wa:case P1:case nI:return{byteLength:2,components:1};case vl:case Nl:return{byteLength:2,components:4};case fs:case bl:case or:return{byteLength:4,components:1};case J1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wW(n,A,i,t,o,s,g){const a=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,I=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ke,p=new WeakMap;let B;const l=new WeakMap;let Q=!1;try{Q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(F,w){return Q?new OffscreenCanvas(F,w):Xa("canvas")}function y(F,w,z){let BA=1;const QA=oe(F);if((QA.width>z||QA.height>z)&&(BA=z/Math.max(QA.width,QA.height)),BA<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const _A=Math.floor(BA*QA.width),$A=Math.floor(BA*QA.height);B===void 0&&(B=h(_A,$A));const GA=w?h(_A,$A):B;return GA.width=_A,GA.height=$A,GA.getContext("2d").drawImage(F,0,0,_A,$A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+QA.width+"x"+QA.height+") to ("+_A+"x"+$A+")."),GA}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+QA.width+"x"+QA.height+")."),F;return F}function u(F){return F.generateMipmaps}function E(F){n.generateMipmap(F)}function f(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function m(F,w,z,BA,QA=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _A=w;if(w===n.RED&&(z===n.FLOAT&&(_A=n.R32F),z===n.HALF_FLOAT&&(_A=n.R16F),z===n.UNSIGNED_BYTE&&(_A=n.R8)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(_A=n.R8UI),z===n.UNSIGNED_SHORT&&(_A=n.R16UI),z===n.UNSIGNED_INT&&(_A=n.R32UI),z===n.BYTE&&(_A=n.R8I),z===n.SHORT&&(_A=n.R16I),z===n.INT&&(_A=n.R32I)),w===n.RG&&(z===n.FLOAT&&(_A=n.RG32F),z===n.HALF_FLOAT&&(_A=n.RG16F),z===n.UNSIGNED_BYTE&&(_A=n.RG8)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(_A=n.RG8UI),z===n.UNSIGNED_SHORT&&(_A=n.RG16UI),z===n.UNSIGNED_INT&&(_A=n.RG32UI),z===n.BYTE&&(_A=n.RG8I),z===n.SHORT&&(_A=n.RG16I),z===n.INT&&(_A=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(_A=n.RGB8UI),z===n.UNSIGNED_SHORT&&(_A=n.RGB16UI),z===n.UNSIGNED_INT&&(_A=n.RGB32UI),z===n.BYTE&&(_A=n.RGB8I),z===n.SHORT&&(_A=n.RGB16I),z===n.INT&&(_A=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(_A=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(_A=n.RGBA16UI),z===n.UNSIGNED_INT&&(_A=n.RGBA32UI),z===n.BYTE&&(_A=n.RGBA8I),z===n.SHORT&&(_A=n.RGBA16I),z===n.INT&&(_A=n.RGBA32I)),w===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(_A=n.RGB9_E5),w===n.RGBA){const $A=QA?Dc:tt.getTransfer(BA);z===n.FLOAT&&(_A=n.RGBA32F),z===n.HALF_FLOAT&&(_A=n.RGBA16F),z===n.UNSIGNED_BYTE&&(_A=$A===Qt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(_A=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(_A=n.RGB5_A1)}return(_A===n.R16F||_A===n.R32F||_A===n.RG16F||_A===n.RG32F||_A===n.RGBA16F||_A===n.RGBA32F)&&A.get("EXT_color_buffer_float"),_A}function D(F,w){let z;return F?w===null||w===fs||w===Mg?z=n.DEPTH24_STENCIL8:w===or?z=n.DEPTH32F_STENCIL8:w===Wa&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fs||w===Mg?z=n.DEPTH_COMPONENT24:w===or?z=n.DEPTH_COMPONENT32F:w===Wa&&(z=n.DEPTH_COMPONENT16),z}function L(F,w){return u(F)===!0||F.isFramebufferTexture&&F.minFilter!==gn&&F.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function v(F){const w=F.target;w.removeEventListener("dispose",v),U(w),w.isVideoTexture&&p.delete(w)}function N(F){const w=F.target;w.removeEventListener("dispose",N),S(w)}function U(F){const w=t.get(F);if(w.__webglInit===void 0)return;const z=F.source,BA=l.get(z);if(BA){const QA=BA[w.__cacheKey];QA.usedTimes--,QA.usedTimes===0&&b(F),Object.keys(BA).length===0&&l.delete(z)}t.remove(F)}function b(F){const w=t.get(F);n.deleteTexture(w.__webglTexture);const z=F.source,BA=l.get(z);delete BA[w.__cacheKey],g.memory.textures--}function S(F){const w=t.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),t.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let BA=0;BA<6;BA++){if(Array.isArray(w.__webglFramebuffer[BA]))for(let QA=0;QA<w.__webglFramebuffer[BA].length;QA++)n.deleteFramebuffer(w.__webglFramebuffer[BA][QA]);else n.deleteFramebuffer(w.__webglFramebuffer[BA]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[BA])}else{if(Array.isArray(w.__webglFramebuffer))for(let BA=0;BA<w.__webglFramebuffer.length;BA++)n.deleteFramebuffer(w.__webglFramebuffer[BA]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let BA=0;BA<w.__webglColorRenderbuffer.length;BA++)w.__webglColorRenderbuffer[BA]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[BA]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=F.textures;for(let BA=0,QA=z.length;BA<QA;BA++){const _A=t.get(z[BA]);_A.__webglTexture&&(n.deleteTexture(_A.__webglTexture),g.memory.textures--),t.remove(z[BA])}t.remove(F)}let G=0;function nA(){G=0}function X(){const F=G;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),G+=1,F}function gA(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function EA(F,w){const z=t.get(F);if(F.isVideoTexture&&Ie(F),F.isRenderTargetTexture===!1&&F.version>0&&z.__version!==F.version){const BA=F.image;if(BA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(BA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rA(z,F,w);return}}i.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function tA(F,w){const z=t.get(F);if(F.version>0&&z.__version!==F.version){rA(z,F,w);return}i.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function fA(F,w){const z=t.get(F);if(F.version>0&&z.__version!==F.version){rA(z,F,w);return}i.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function H(F,w){const z=t.get(F);if(F.version>0&&z.__version!==F.version){uA(z,F,w);return}i.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}const oA={[Oo]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},pA={[gn]:n.NEAREST,[H1]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[fC]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},bA={[nY]:n.NEVER,[IY]:n.ALWAYS,[rY]:n.LESS,[Z1]:n.LEQUAL,[oY]:n.EQUAL,[aY]:n.GEQUAL,[sY]:n.GREATER,[gY]:n.NOTEQUAL};function OA(F,w){if(w.type===or&&A.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===fC||w.magFilter===Ea||w.magFilter===Wr||w.minFilter===Gn||w.minFilter===fC||w.minFilter===Ea||w.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,oA[w.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,oA[w.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,oA[w.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,pA[w.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,pA[w.minFilter]),w.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,bA[w.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==Ea&&w.minFilter!==Wr||w.type===or&&A.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||t.get(w).__currentAnisotropy){const z=A.get("EXT_texture_filter_anisotropic");n.texParameterf(F,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),t.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(F,w){let z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",v));const BA=w.source;let QA=l.get(BA);QA===void 0&&(QA={},l.set(BA,QA));const _A=gA(w);if(_A!==F.__cacheKey){QA[_A]===void 0&&(QA[_A]={texture:n.createTexture(),usedTimes:0},g.memory.textures++,z=!0),QA[_A].usedTimes++;const $A=QA[F.__cacheKey];$A!==void 0&&(QA[F.__cacheKey].usedTimes--,$A.usedTimes===0&&b(w)),F.__cacheKey=_A,F.__webglTexture=QA[_A].texture}return z}function rA(F,w,z){let BA=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(BA=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(BA=n.TEXTURE_3D);const QA=Ne(F,w),_A=w.source;i.bindTexture(BA,F.__webglTexture,n.TEXTURE0+z);const $A=t.get(_A);if(_A.version!==$A.__version||QA===!0){i.activeTexture(n.TEXTURE0+z);const GA=tt.getPrimaries(tt.workingColorSpace),YA=w.colorSpace===So?null:tt.getPrimaries(w.colorSpace),Ve=w.colorSpace===So||GA===YA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let yA=y(w.image,!1,o.maxTextureSize);yA=dt(w,yA);const VA=s.convert(w.format,w.colorSpace),Ce=s.convert(w.type);let ce=m(w.internalFormat,VA,Ce,w.colorSpace,w.isVideoTexture);OA(BA,w);let JA;const Se=w.mipmaps,we=w.isVideoTexture!==!0,Bt=$A.__version===void 0||QA===!0,P=_A.dataReady,UA=L(w,yA);if(w.isDepthTexture)ce=D(w.format===Rg,w.type),Bt&&(we?i.texStorage2D(n.TEXTURE_2D,1,ce,yA.width,yA.height):i.texImage2D(n.TEXTURE_2D,0,ce,yA.width,yA.height,0,VA,Ce,null));else if(w.isDataTexture)if(Se.length>0){we&&Bt&&i.texStorage2D(n.TEXTURE_2D,UA,ce,Se[0].width,Se[0].height);for(let iA=0,lA=Se.length;iA<lA;iA++)JA=Se[iA],we?P&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,JA.width,JA.height,VA,Ce,JA.data):i.texImage2D(n.TEXTURE_2D,iA,ce,JA.width,JA.height,0,VA,Ce,JA.data);w.generateMipmaps=!1}else we?(Bt&&i.texStorage2D(n.TEXTURE_2D,UA,ce,yA.width,yA.height),P&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,yA.width,yA.height,VA,Ce,yA.data)):i.texImage2D(n.TEXTURE_2D,0,ce,yA.width,yA.height,0,VA,Ce,yA.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){we&&Bt&&i.texStorage3D(n.TEXTURE_2D_ARRAY,UA,ce,Se[0].width,Se[0].height,yA.depth);for(let iA=0,lA=Se.length;iA<lA;iA++)if(JA=Se[iA],w.format!==xn)if(VA!==null)if(we){if(P)if(w.layerUpdates.size>0){const HA=Gk(JA.width,JA.height,w.format,w.type);for(const KA of w.layerUpdates){const ue=JA.data.subarray(KA*HA/JA.data.BYTES_PER_ELEMENT,(KA+1)*HA/JA.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,KA,JA.width,JA.height,1,VA,ue)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,0,JA.width,JA.height,yA.depth,VA,JA.data)}else i.compressedTexImage3D(n.TEXTURE_2D_ARRAY,iA,ce,JA.width,JA.height,yA.depth,0,JA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?P&&i.texSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,0,JA.width,JA.height,yA.depth,VA,Ce,JA.data):i.texImage3D(n.TEXTURE_2D_ARRAY,iA,ce,JA.width,JA.height,yA.depth,0,VA,Ce,JA.data)}else{we&&Bt&&i.texStorage2D(n.TEXTURE_2D,UA,ce,Se[0].width,Se[0].height);for(let iA=0,lA=Se.length;iA<lA;iA++)JA=Se[iA],w.format!==xn?VA!==null?we?P&&i.compressedTexSubImage2D(n.TEXTURE_2D,iA,0,0,JA.width,JA.height,VA,JA.data):i.compressedTexImage2D(n.TEXTURE_2D,iA,ce,JA.width,JA.height,0,JA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,JA.width,JA.height,VA,Ce,JA.data):i.texImage2D(n.TEXTURE_2D,iA,ce,JA.width,JA.height,0,VA,Ce,JA.data)}else if(w.isDataArrayTexture)if(we){if(Bt&&i.texStorage3D(n.TEXTURE_2D_ARRAY,UA,ce,yA.width,yA.height,yA.depth),P)if(w.layerUpdates.size>0){const iA=Gk(yA.width,yA.height,w.format,w.type);for(const lA of w.layerUpdates){const HA=yA.data.subarray(lA*iA/yA.data.BYTES_PER_ELEMENT,(lA+1)*iA/yA.data.BYTES_PER_ELEMENT);i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lA,yA.width,yA.height,1,VA,Ce,HA)}w.clearLayerUpdates()}else i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yA.width,yA.height,yA.depth,VA,Ce,yA.data)}else i.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,yA.width,yA.height,yA.depth,0,VA,Ce,yA.data);else if(w.isData3DTexture)we?(Bt&&i.texStorage3D(n.TEXTURE_3D,UA,ce,yA.width,yA.height,yA.depth),P&&i.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yA.width,yA.height,yA.depth,VA,Ce,yA.data)):i.texImage3D(n.TEXTURE_3D,0,ce,yA.width,yA.height,yA.depth,0,VA,Ce,yA.data);else if(w.isFramebufferTexture){if(Bt)if(we)i.texStorage2D(n.TEXTURE_2D,UA,ce,yA.width,yA.height);else{let iA=yA.width,lA=yA.height;for(let HA=0;HA<UA;HA++)i.texImage2D(n.TEXTURE_2D,HA,ce,iA,lA,0,VA,Ce,null),iA>>=1,lA>>=1}}else if(Se.length>0){if(we&&Bt){const iA=oe(Se[0]);i.texStorage2D(n.TEXTURE_2D,UA,ce,iA.width,iA.height)}for(let iA=0,lA=Se.length;iA<lA;iA++)JA=Se[iA],we?P&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,VA,Ce,JA):i.texImage2D(n.TEXTURE_2D,iA,ce,VA,Ce,JA);w.generateMipmaps=!1}else if(we){if(Bt){const iA=oe(yA);i.texStorage2D(n.TEXTURE_2D,UA,ce,iA.width,iA.height)}P&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,VA,Ce,yA)}else i.texImage2D(n.TEXTURE_2D,0,ce,VA,Ce,yA);u(w)&&E(BA),$A.__version=_A.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function uA(F,w,z){if(w.image.length!==6)return;const BA=Ne(F,w),QA=w.source;i.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+z);const _A=t.get(QA);if(QA.version!==_A.__version||BA===!0){i.activeTexture(n.TEXTURE0+z);const $A=tt.getPrimaries(tt.workingColorSpace),GA=w.colorSpace===So?null:tt.getPrimaries(w.colorSpace),YA=w.colorSpace===So||$A===GA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,YA);const Ve=w.isCompressedTexture||w.image[0].isCompressedTexture,yA=w.image[0]&&w.image[0].isDataTexture,VA=[];for(let lA=0;lA<6;lA++)!Ve&&!yA?VA[lA]=y(w.image[lA],!0,o.maxCubemapSize):VA[lA]=yA?w.image[lA].image:w.image[lA],VA[lA]=dt(w,VA[lA]);const Ce=VA[0],ce=s.convert(w.format,w.colorSpace),JA=s.convert(w.type),Se=m(w.internalFormat,ce,JA,w.colorSpace),we=w.isVideoTexture!==!0,Bt=_A.__version===void 0||BA===!0,P=QA.dataReady;let UA=L(w,Ce);OA(n.TEXTURE_CUBE_MAP,w);let iA;if(Ve){we&&Bt&&i.texStorage2D(n.TEXTURE_CUBE_MAP,UA,Se,Ce.width,Ce.height);for(let lA=0;lA<6;lA++){iA=VA[lA].mipmaps;for(let HA=0;HA<iA.length;HA++){const KA=iA[HA];w.format!==xn?ce!==null?we?P&&i.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA,0,0,KA.width,KA.height,ce,KA.data):i.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA,Se,KA.width,KA.height,0,KA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?P&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA,0,0,KA.width,KA.height,ce,JA,KA.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA,Se,KA.width,KA.height,0,ce,JA,KA.data)}}}else{if(iA=w.mipmaps,we&&Bt){iA.length>0&&UA++;const lA=oe(VA[0]);i.texStorage2D(n.TEXTURE_CUBE_MAP,UA,Se,lA.width,lA.height)}for(let lA=0;lA<6;lA++)if(yA){we?P&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0,0,0,VA[lA].width,VA[lA].height,ce,JA,VA[lA].data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0,Se,VA[lA].width,VA[lA].height,0,ce,JA,VA[lA].data);for(let HA=0;HA<iA.length;HA++){const ue=iA[HA].image[lA].image;we?P&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA+1,0,0,ue.width,ue.height,ce,JA,ue.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA+1,Se,ue.width,ue.height,0,ce,JA,ue.data)}}else{we?P&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0,0,0,ce,JA,VA[lA]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0,Se,ce,JA,VA[lA]);for(let HA=0;HA<iA.length;HA++){const KA=iA[HA];we?P&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA+1,0,0,ce,JA,KA.image[lA]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lA,HA+1,Se,ce,JA,KA.image[lA])}}}u(w)&&E(n.TEXTURE_CUBE_MAP),_A.__version=QA.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function TA(F,w,z,BA,QA,_A){const $A=s.convert(z.format,z.colorSpace),GA=s.convert(z.type),YA=m(z.internalFormat,$A,GA,z.colorSpace),Ve=t.get(w),yA=t.get(z);if(yA.__renderTarget=w,!Ve.__hasExternalTextures){const VA=Math.max(1,w.width>>_A),Ce=Math.max(1,w.height>>_A);QA===n.TEXTURE_3D||QA===n.TEXTURE_2D_ARRAY?i.texImage3D(QA,_A,YA,VA,Ce,w.depth,0,$A,GA,null):i.texImage2D(QA,_A,YA,VA,Ce,0,$A,GA,null)}i.bindFramebuffer(n.FRAMEBUFFER,F),Ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,BA,QA,yA.__webglTexture,0,qe(w)):(QA===n.TEXTURE_2D||QA>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&QA<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,BA,QA,yA.__webglTexture,_A),i.bindFramebuffer(n.FRAMEBUFFER,null)}function MA(F,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,F),w.depthBuffer){const BA=w.depthTexture,QA=BA&&BA.isDepthTexture?BA.type:null,_A=D(w.stencilBuffer,QA),$A=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,GA=qe(w);Ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,GA,_A,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,GA,_A,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,_A,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$A,n.RENDERBUFFER,F)}else{const BA=w.textures;for(let QA=0;QA<BA.length;QA++){const _A=BA[QA],$A=s.convert(_A.format,_A.colorSpace),GA=s.convert(_A.type),YA=m(_A.internalFormat,$A,GA,_A.colorSpace),Ve=qe(w);z&&Ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,YA,w.width,w.height):Ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,YA,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,YA,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(n.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const BA=t.get(w.depthTexture);BA.__renderTarget=w,(!BA.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),EA(w.depthTexture,0);const QA=BA.__webglTexture,_A=qe(w);if(w.depthTexture.format===pg)Ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,QA,0,_A):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,QA,0);else if(w.depthTexture.format===Rg)Ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,QA,0,_A):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,QA,0);else throw new Error("Unknown depthTexture format")}function Qe(F){const w=t.get(F),z=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const BA=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),BA){const QA=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,BA.removeEventListener("dispose",QA)};BA.addEventListener("dispose",QA),w.__depthDisposeCallback=QA}w.__boundDepthTexture=BA}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");re(w.__webglFramebuffer,F)}else if(z){w.__webglDepthbuffer=[];for(let BA=0;BA<6;BA++)if(i.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[BA]),w.__webglDepthbuffer[BA]===void 0)w.__webglDepthbuffer[BA]=n.createRenderbuffer(),MA(w.__webglDepthbuffer[BA],F,!1);else{const QA=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_A=w.__webglDepthbuffer[BA];n.bindRenderbuffer(n.RENDERBUFFER,_A),n.framebufferRenderbuffer(n.FRAMEBUFFER,QA,n.RENDERBUFFER,_A)}}else if(i.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),MA(w.__webglDepthbuffer,F,!1);else{const BA=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,QA=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,QA),n.framebufferRenderbuffer(n.FRAMEBUFFER,BA,n.RENDERBUFFER,QA)}i.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(F,w,z){const BA=t.get(F);w!==void 0&&TA(BA.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Qe(F)}function yt(F){const w=F.texture,z=t.get(F),BA=t.get(w);F.addEventListener("dispose",N);const QA=F.textures,_A=F.isWebGLCubeRenderTarget===!0,$A=QA.length>1;if($A||(BA.__webglTexture===void 0&&(BA.__webglTexture=n.createTexture()),BA.__version=w.version,g.memory.textures++),_A){z.__webglFramebuffer=[];for(let GA=0;GA<6;GA++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[GA]=[];for(let YA=0;YA<w.mipmaps.length;YA++)z.__webglFramebuffer[GA][YA]=n.createFramebuffer()}else z.__webglFramebuffer[GA]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let GA=0;GA<w.mipmaps.length;GA++)z.__webglFramebuffer[GA]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if($A)for(let GA=0,YA=QA.length;GA<YA;GA++){const Ve=t.get(QA[GA]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),g.memory.textures++)}if(F.samples>0&&Ue(F)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let GA=0;GA<QA.length;GA++){const YA=QA[GA];z.__webglColorRenderbuffer[GA]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[GA]);const Ve=s.convert(YA.format,YA.colorSpace),yA=s.convert(YA.type),VA=m(YA.internalFormat,Ve,yA,YA.colorSpace,F.isXRRenderTarget===!0),Ce=qe(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,VA,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+GA,n.RENDERBUFFER,z.__webglColorRenderbuffer[GA])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),MA(z.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_A){i.bindTexture(n.TEXTURE_CUBE_MAP,BA.__webglTexture),OA(n.TEXTURE_CUBE_MAP,w);for(let GA=0;GA<6;GA++)if(w.mipmaps&&w.mipmaps.length>0)for(let YA=0;YA<w.mipmaps.length;YA++)TA(z.__webglFramebuffer[GA][YA],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+GA,YA);else TA(z.__webglFramebuffer[GA],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+GA,0);u(w)&&E(n.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($A){for(let GA=0,YA=QA.length;GA<YA;GA++){const Ve=QA[GA],yA=t.get(Ve);i.bindTexture(n.TEXTURE_2D,yA.__webglTexture),OA(n.TEXTURE_2D,Ve),TA(z.__webglFramebuffer,F,Ve,n.COLOR_ATTACHMENT0+GA,n.TEXTURE_2D,0),u(Ve)&&E(n.TEXTURE_2D)}i.unbindTexture()}else{let GA=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(GA=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),i.bindTexture(GA,BA.__webglTexture),OA(GA,w),w.mipmaps&&w.mipmaps.length>0)for(let YA=0;YA<w.mipmaps.length;YA++)TA(z.__webglFramebuffer[YA],F,w,n.COLOR_ATTACHMENT0,GA,YA);else TA(z.__webglFramebuffer,F,w,n.COLOR_ATTACHMENT0,GA,0);u(w)&&E(GA),i.unbindTexture()}F.depthBuffer&&Qe(F)}function je(F){const w=F.textures;for(let z=0,BA=w.length;z<BA;z++){const QA=w[z];if(u(QA)){const _A=f(F),$A=t.get(QA).__webglTexture;i.bindTexture(_A,$A),E(_A),i.unbindTexture()}}}const Kt=[],q=[];function qi(F){if(F.samples>0){if(Ue(F)===!1){const w=F.textures,z=F.width,BA=F.height;let QA=n.COLOR_BUFFER_BIT;const _A=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$A=t.get(F),GA=w.length>1;if(GA)for(let YA=0;YA<w.length;YA++)i.bindFramebuffer(n.FRAMEBUFFER,$A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+YA,n.RENDERBUFFER,null),i.bindFramebuffer(n.FRAMEBUFFER,$A.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+YA,n.TEXTURE_2D,null,0);i.bindFramebuffer(n.READ_FRAMEBUFFER,$A.__webglMultisampledFramebuffer),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,$A.__webglFramebuffer);for(let YA=0;YA<w.length;YA++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(QA|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(QA|=n.STENCIL_BUFFER_BIT)),GA){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$A.__webglColorRenderbuffer[YA]);const Ve=t.get(w[YA]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,z,BA,0,0,z,BA,QA,n.NEAREST),I===!0&&(Kt.length=0,q.length=0,Kt.push(n.COLOR_ATTACHMENT0+YA),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Kt.push(_A),q.push(_A),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(n.READ_FRAMEBUFFER,null),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),GA)for(let YA=0;YA<w.length;YA++){i.bindFramebuffer(n.FRAMEBUFFER,$A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+YA,n.RENDERBUFFER,$A.__webglColorRenderbuffer[YA]);const Ve=t.get(w[YA]).__webglTexture;i.bindFramebuffer(n.FRAMEBUFFER,$A.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+YA,n.TEXTURE_2D,Ve,0)}i.bindFramebuffer(n.DRAW_FRAMEBUFFER,$A.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&I){const w=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function qe(F){return Math.min(o.maxSamples,F.samples)}function Ue(F){const w=t.get(F);return F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(F){const w=g.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function dt(F,w){const z=F.colorSpace,BA=F.format,QA=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||z!==Gg&&z!==So&&(tt.getTransfer(z)===Qt?(BA!==xn||QA!==so)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function oe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(_.width=F.naturalWidth||F.width,_.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(_.width=F.displayWidth,_.height=F.displayHeight):(_.width=F.width,_.height=F.height),_}this.allocateTextureUnit=X,this.resetTextureUnits=nA,this.setTexture2D=EA,this.setTexture2DArray=tA,this.setTexture3D=fA,this.setTextureCube=H,this.rebindTextures=Fe,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=qi,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=TA,this.useMultisampledRTT=Ue}function MW(n,A){function i(t,o=So){let s;const g=tt.getTransfer(o);if(t===so)return n.UNSIGNED_BYTE;if(t===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(t===J1)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===K1)return n.BYTE;if(t===P1)return n.SHORT;if(t===Wa)return n.UNSIGNED_SHORT;if(t===bl)return n.INT;if(t===fs)return n.UNSIGNED_INT;if(t===or)return n.FLOAT;if(t===nI)return n.HALF_FLOAT;if(t===O1)return n.ALPHA;if(t===Y1)return n.RGB;if(t===xn)return n.RGBA;if(t===q1)return n.LUMINANCE;if(t===j1)return n.LUMINANCE_ALPHA;if(t===pg)return n.DEPTH_COMPONENT;if(t===Rg)return n.DEPTH_STENCIL;if(t===Fl)return n.RED;if(t===Ll)return n.RED_INTEGER;if(t===V1)return n.RG;if(t===Ul)return n.RG_INTEGER;if(t===Tl)return n.RGBA_INTEGER;if(t===yC||t===mC||t===DC||t===SC)if(g===Qt)if(s=A.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(t===yC)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===mC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===DC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===SC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=A.get("WEBGL_compressed_texture_s3tc"),s!==null){if(t===yC)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===mC)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===DC)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===SC)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(t===Zp||t===Xp||t===$p||t===AB)if(s=A.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(t===Zp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Xp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===$p)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===AB)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(t===eB||t===tB||t===iB)if(s=A.get("WEBGL_compressed_texture_etc"),s!==null){if(t===eB||t===tB)return g===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===iB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(t===nB||t===rB||t===oB||t===sB||t===gB||t===aB||t===IB||t===CB||t===cB||t===_B||t===pB||t===BB||t===lB||t===EB)if(s=A.get("WEBGL_compressed_texture_astc"),s!==null){if(t===nB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===rB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===oB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===sB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===gB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===aB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===IB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===CB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===cB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===_B)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===pB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===BB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===lB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===EB)return g===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(t===wC||t===QB||t===dB)if(s=A.get("EXT_texture_compression_bptc"),s!==null){if(t===wC)return g===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===QB)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===dB)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(t===W1||t===hB||t===uB||t===fB)if(s=A.get("EXT_texture_compression_rgtc"),s!==null){if(t===wC)return s.COMPRESSED_RED_RGTC1_EXT;if(t===hB)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===uB)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===fB)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return t===Mg?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}return{convert:i}}class RW extends Pi{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class wr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bW={type:"move"};class N_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const i=this._hand;if(i)for(const t of A.hand.values())this._getHandJoint(i,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,i,t){let o=null,s=null,g=null;const a=this._targetRay,I=this._grip,_=this._hand;if(A&&i.session.visibilityState!=="visible-blurred"){if(_&&A.hand){g=!0;for(const y of A.hand.values()){const u=i.getJointPose(y,t),E=this._getHandJoint(_,y);u!==null&&(E.matrix.fromArray(u.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=u.radius),E.visible=u!==null}const p=_.joints["index-finger-tip"],B=_.joints["thumb-tip"],l=p.position.distanceTo(B.position),Q=.02,h=.005;_.inputState.pinching&&l>Q+h?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!_.inputState.pinching&&l<=Q-h&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else I!==null&&A.gripSpace&&(s=i.getPose(A.gripSpace,t),s!==null&&(I.matrix.fromArray(s.transform.matrix),I.matrix.decompose(I.position,I.rotation,I.scale),I.matrixWorldNeedsUpdate=!0,s.linearVelocity?(I.hasLinearVelocity=!0,I.linearVelocity.copy(s.linearVelocity)):I.hasLinearVelocity=!1,s.angularVelocity?(I.hasAngularVelocity=!0,I.angularVelocity.copy(s.angularVelocity)):I.hasAngularVelocity=!1));a!==null&&(o=i.getPose(A.targetRaySpace,t),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bW)))}return a!==null&&(a.visible=o!==null),I!==null&&(I.visible=s!==null),_!==null&&(_.visible=g!==null),this}_getHandJoint(A,i){if(A.joints[i.jointName]===void 0){const t=new wr;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[i.jointName]=t,A.add(t)}return A.joints[i.jointName]}}const vW=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NW=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,i,t){if(this.texture===null){const o=new ti,s=A.properties.get(o);s.__webglTexture=i.texture,(i.depthNear!=t.depthNear||i.depthFar!=t.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(A){if(this.texture!==null&&this.mesh===null){const i=A.cameras[0].viewport,t=new go({vertexShader:vW,fragmentShader:NW,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Sc(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LW extends xg{constructor(A,i){super();const t=this;let o=null,s=1,g=null,a="local-floor",I=1,_=null,p=null,B=null,l=null,Q=null,h=null;const y=new FW,u=i.getContextAttributes();let E=null,f=null;const m=[],D=[],L=new Ke;let v=null;const N=new Pi;N.viewport=new ve;const U=new Pi;U.viewport=new ve;const b=[N,U],S=new RW;let G=null,nA=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rA){let uA=m[rA];return uA===void 0&&(uA=new N_,m[rA]=uA),uA.getTargetRaySpace()},this.getControllerGrip=function(rA){let uA=m[rA];return uA===void 0&&(uA=new N_,m[rA]=uA),uA.getGripSpace()},this.getHand=function(rA){let uA=m[rA];return uA===void 0&&(uA=new N_,m[rA]=uA),uA.getHandSpace()};function X(rA){const uA=D.indexOf(rA.inputSource);if(uA===-1)return;const TA=m[uA];TA!==void 0&&(TA.update(rA.inputSource,rA.frame,_||g),TA.dispatchEvent({type:rA.type,data:rA.inputSource}))}function gA(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",gA),o.removeEventListener("inputsourceschange",EA);for(let rA=0;rA<m.length;rA++){const uA=D[rA];uA!==null&&(D[rA]=null,m[rA].disconnect(uA))}G=null,nA=null,y.reset(),A.setRenderTarget(E),Q=null,l=null,B=null,o=null,f=null,Ne.stop(),t.isPresenting=!1,A.setPixelRatio(v),A.setSize(L.width,L.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rA){s=rA,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rA){a=rA,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||g},this.setReferenceSpace=function(rA){_=rA},this.getBaseLayer=function(){return l!==null?l:Q},this.getBinding=function(){return B},this.getFrame=function(){return h},this.getSession=function(){return o},this.setSession=async function(rA){if(o=rA,o!==null){if(E=A.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",gA),o.addEventListener("inputsourceschange",EA),u.xrCompatible!==!0&&await i.makeXRCompatible(),v=A.getPixelRatio(),A.getSize(L),o.renderState.layers===void 0){const uA={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};Q=new XRWebGLLayer(o,i,uA),o.updateRenderState({baseLayer:Q}),A.setPixelRatio(1),A.setSize(Q.framebufferWidth,Q.framebufferHeight,!1),f=new ys(Q.framebufferWidth,Q.framebufferHeight,{format:xn,type:so,colorSpace:A.outputColorSpace,stencilBuffer:u.stencil})}else{let uA=null,TA=null,MA=null;u.depth&&(MA=u.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,uA=u.stencil?Rg:pg,TA=u.stencil?Mg:fs);const re={colorFormat:i.RGBA8,depthFormat:MA,scaleFactor:s};B=new XRWebGLBinding(o,i),l=B.createProjectionLayer(re),o.updateRenderState({layers:[l]}),A.setPixelRatio(1),A.setSize(l.textureWidth,l.textureHeight,!1),f=new ys(l.textureWidth,l.textureHeight,{format:xn,type:so,depthTexture:new sP(l.textureWidth,l.textureHeight,TA,void 0,void 0,void 0,void 0,void 0,void 0,uA),stencilBuffer:u.stencil,colorSpace:A.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(I),_=null,g=await o.requestReferenceSpace(a),Ne.setContext(o),Ne.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function EA(rA){for(let uA=0;uA<rA.removed.length;uA++){const TA=rA.removed[uA],MA=D.indexOf(TA);MA>=0&&(D[MA]=null,m[MA].disconnect(TA))}for(let uA=0;uA<rA.added.length;uA++){const TA=rA.added[uA];let MA=D.indexOf(TA);if(MA===-1){for(let Qe=0;Qe<m.length;Qe++)if(Qe>=D.length){D.push(TA),MA=Qe;break}else if(D[Qe]===null){D[Qe]=TA,MA=Qe;break}if(MA===-1)break}const re=m[MA];re&&re.connect(TA)}}const tA=new k,fA=new k;function H(rA,uA,TA){tA.setFromMatrixPosition(uA.matrixWorld),fA.setFromMatrixPosition(TA.matrixWorld);const MA=tA.distanceTo(fA),re=uA.projectionMatrix.elements,Qe=TA.projectionMatrix.elements,Fe=re[14]/(re[10]-1),yt=re[14]/(re[10]+1),je=(re[9]+1)/re[5],Kt=(re[9]-1)/re[5],q=(re[8]-1)/re[0],qi=(Qe[8]+1)/Qe[0],qe=Fe*q,Ue=Fe*qi,Ie=MA/(-q+qi),dt=Ie*-q;if(uA.matrixWorld.decompose(rA.position,rA.quaternion,rA.scale),rA.translateX(dt),rA.translateZ(Ie),rA.matrixWorld.compose(rA.position,rA.quaternion,rA.scale),rA.matrixWorldInverse.copy(rA.matrixWorld).invert(),re[10]===-1)rA.projectionMatrix.copy(uA.projectionMatrix),rA.projectionMatrixInverse.copy(uA.projectionMatrixInverse);else{const oe=Fe+Ie,F=yt+Ie,w=qe-dt,z=Ue+(MA-dt),BA=je*yt/F*oe,QA=Kt*yt/F*oe;rA.projectionMatrix.makePerspective(w,z,BA,QA,oe,F),rA.projectionMatrixInverse.copy(rA.projectionMatrix).invert()}}function oA(rA,uA){uA===null?rA.matrixWorld.copy(rA.matrix):rA.matrixWorld.multiplyMatrices(uA.matrixWorld,rA.matrix),rA.matrixWorldInverse.copy(rA.matrixWorld).invert()}this.updateCamera=function(rA){if(o===null)return;let uA=rA.near,TA=rA.far;y.texture!==null&&(y.depthNear>0&&(uA=y.depthNear),y.depthFar>0&&(TA=y.depthFar)),S.near=U.near=N.near=uA,S.far=U.far=N.far=TA,(G!==S.near||nA!==S.far)&&(o.updateRenderState({depthNear:S.near,depthFar:S.far}),G=S.near,nA=S.far),N.layers.mask=rA.layers.mask|2,U.layers.mask=rA.layers.mask|4,S.layers.mask=N.layers.mask|U.layers.mask;const MA=rA.parent,re=S.cameras;oA(S,MA);for(let Qe=0;Qe<re.length;Qe++)oA(re[Qe],MA);re.length===2?H(S,N,U):S.projectionMatrix.copy(N.projectionMatrix),pA(rA,S,MA)};function pA(rA,uA,TA){TA===null?rA.matrix.copy(uA.matrixWorld):(rA.matrix.copy(TA.matrixWorld),rA.matrix.invert(),rA.matrix.multiply(uA.matrixWorld)),rA.matrix.decompose(rA.position,rA.quaternion,rA.scale),rA.updateMatrixWorld(!0),rA.projectionMatrix.copy(uA.projectionMatrix),rA.projectionMatrixInverse.copy(uA.projectionMatrixInverse),rA.isPerspectiveCamera&&(rA.fov=bg*2*Math.atan(1/rA.projectionMatrix.elements[5]),rA.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(l===null&&Q===null))return I},this.setFoveation=function(rA){I=rA,l!==null&&(l.fixedFoveation=rA),Q!==null&&Q.fixedFoveation!==void 0&&(Q.fixedFoveation=rA)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let bA=null;function OA(rA,uA){if(p=uA.getViewerPose(_||g),h=uA,p!==null){const TA=p.views;Q!==null&&(A.setRenderTargetFramebuffer(f,Q.framebuffer),A.setRenderTarget(f));let MA=!1;TA.length!==S.cameras.length&&(S.cameras.length=0,MA=!0);for(let Qe=0;Qe<TA.length;Qe++){const Fe=TA[Qe];let yt=null;if(Q!==null)yt=Q.getViewport(Fe);else{const Kt=B.getViewSubImage(l,Fe);yt=Kt.viewport,Qe===0&&(A.setRenderTargetTextures(f,Kt.colorTexture,l.ignoreDepthValues?void 0:Kt.depthStencilTexture),A.setRenderTarget(f))}let je=b[Qe];je===void 0&&(je=new Pi,je.layers.enable(Qe),je.viewport=new ve,b[Qe]=je),je.matrix.fromArray(Fe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Fe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(yt.x,yt.y,yt.width,yt.height),Qe===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),MA===!0&&S.cameras.push(je)}const re=o.enabledFeatures;if(re&&re.includes("depth-sensing")){const Qe=B.getDepthInformation(TA[0]);Qe&&Qe.isValid&&Qe.texture&&y.init(A,Qe,o.renderState)}}for(let TA=0;TA<m.length;TA++){const MA=D[TA],re=m[TA];MA!==null&&re!==void 0&&re.update(MA,uA,_||g)}bA&&bA(rA,uA),uA.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:uA}),h=null}const Ne=new oP;Ne.setAnimationLoop(OA),this.setAnimationLoop=function(rA){bA=rA},this.dispose=function(){}}}const es=new Si,UW=new jA;function TW(n,A){function i(u,E){u.matrixAutoUpdate===!0&&u.updateMatrix(),E.value.copy(u.matrix)}function t(u,E){E.color.getRGB(u.fogColor.value,iP(n)),E.isFog?(u.fogNear.value=E.near,u.fogFar.value=E.far):E.isFogExp2&&(u.fogDensity.value=E.density)}function o(u,E,f,m,D){E.isMeshBasicMaterial||E.isMeshLambertMaterial?s(u,E):E.isMeshToonMaterial?(s(u,E),B(u,E)):E.isMeshPhongMaterial?(s(u,E),p(u,E)):E.isMeshStandardMaterial?(s(u,E),l(u,E),E.isMeshPhysicalMaterial&&Q(u,E,D)):E.isMeshMatcapMaterial?(s(u,E),h(u,E)):E.isMeshDepthMaterial?s(u,E):E.isMeshDistanceMaterial?(s(u,E),y(u,E)):E.isMeshNormalMaterial?s(u,E):E.isLineBasicMaterial?(g(u,E),E.isLineDashedMaterial&&a(u,E)):E.isPointsMaterial?I(u,E,f,m):E.isSpriteMaterial?_(u,E):E.isShadowMaterial?(u.color.value.copy(E.color),u.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function s(u,E){u.opacity.value=E.opacity,E.color&&u.diffuse.value.copy(E.color),E.emissive&&u.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(u.map.value=E.map,i(E.map,u.mapTransform)),E.alphaMap&&(u.alphaMap.value=E.alphaMap,i(E.alphaMap,u.alphaMapTransform)),E.bumpMap&&(u.bumpMap.value=E.bumpMap,i(E.bumpMap,u.bumpMapTransform),u.bumpScale.value=E.bumpScale,E.side===sn&&(u.bumpScale.value*=-1)),E.normalMap&&(u.normalMap.value=E.normalMap,i(E.normalMap,u.normalMapTransform),u.normalScale.value.copy(E.normalScale),E.side===sn&&u.normalScale.value.negate()),E.displacementMap&&(u.displacementMap.value=E.displacementMap,i(E.displacementMap,u.displacementMapTransform),u.displacementScale.value=E.displacementScale,u.displacementBias.value=E.displacementBias),E.emissiveMap&&(u.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,u.emissiveMapTransform)),E.specularMap&&(u.specularMap.value=E.specularMap,i(E.specularMap,u.specularMapTransform)),E.alphaTest>0&&(u.alphaTest.value=E.alphaTest);const f=A.get(E),m=f.envMap,D=f.envMapRotation;m&&(u.envMap.value=m,es.copy(D),es.x*=-1,es.y*=-1,es.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.envMapRotation.value.setFromMatrix4(UW.makeRotationFromEuler(es)),u.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=E.reflectivity,u.ior.value=E.ior,u.refractionRatio.value=E.refractionRatio),E.lightMap&&(u.lightMap.value=E.lightMap,u.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,u.lightMapTransform)),E.aoMap&&(u.aoMap.value=E.aoMap,u.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,u.aoMapTransform))}function g(u,E){u.diffuse.value.copy(E.color),u.opacity.value=E.opacity,E.map&&(u.map.value=E.map,i(E.map,u.mapTransform))}function a(u,E){u.dashSize.value=E.dashSize,u.totalSize.value=E.dashSize+E.gapSize,u.scale.value=E.scale}function I(u,E,f,m){u.diffuse.value.copy(E.color),u.opacity.value=E.opacity,u.size.value=E.size*f,u.scale.value=m*.5,E.map&&(u.map.value=E.map,i(E.map,u.uvTransform)),E.alphaMap&&(u.alphaMap.value=E.alphaMap,i(E.alphaMap,u.alphaMapTransform)),E.alphaTest>0&&(u.alphaTest.value=E.alphaTest)}function _(u,E){u.diffuse.value.copy(E.color),u.opacity.value=E.opacity,u.rotation.value=E.rotation,E.map&&(u.map.value=E.map,i(E.map,u.mapTransform)),E.alphaMap&&(u.alphaMap.value=E.alphaMap,i(E.alphaMap,u.alphaMapTransform)),E.alphaTest>0&&(u.alphaTest.value=E.alphaTest)}function p(u,E){u.specular.value.copy(E.specular),u.shininess.value=Math.max(E.shininess,1e-4)}function B(u,E){E.gradientMap&&(u.gradientMap.value=E.gradientMap)}function l(u,E){u.metalness.value=E.metalness,E.metalnessMap&&(u.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,u.metalnessMapTransform)),u.roughness.value=E.roughness,E.roughnessMap&&(u.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,u.roughnessMapTransform)),E.envMap&&(u.envMapIntensity.value=E.envMapIntensity)}function Q(u,E,f){u.ior.value=E.ior,E.sheen>0&&(u.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),u.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(u.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,u.sheenColorMapTransform)),E.sheenRoughnessMap&&(u.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,u.sheenRoughnessMapTransform))),E.clearcoat>0&&(u.clearcoat.value=E.clearcoat,u.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(u.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,u.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(u.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===sn&&u.clearcoatNormalScale.value.negate())),E.dispersion>0&&(u.dispersion.value=E.dispersion),E.iridescence>0&&(u.iridescence.value=E.iridescence,u.iridescenceIOR.value=E.iridescenceIOR,u.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(u.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,u.iridescenceMapTransform)),E.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),E.transmission>0&&(u.transmission.value=E.transmission,u.transmissionSamplerMap.value=f.texture,u.transmissionSamplerSize.value.set(f.width,f.height),E.transmissionMap&&(u.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,u.transmissionMapTransform)),u.thickness.value=E.thickness,E.thicknessMap&&(u.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=E.attenuationDistance,u.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(u.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(u.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=E.specularIntensity,u.specularColor.value.copy(E.specularColor),E.specularColorMap&&(u.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,u.specularColorMapTransform)),E.specularIntensityMap&&(u.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,u.specularIntensityMapTransform))}function h(u,E){E.matcap&&(u.matcap.value=E.matcap)}function y(u,E){const f=A.get(E).light;u.referencePosition.value.setFromMatrixPosition(f.matrixWorld),u.nearDistance.value=f.shadow.camera.near,u.farDistance.value=f.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:o}}function GW(n,A,i,t){let o={},s={},g=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function I(f,m){const D=m.program;t.uniformBlockBinding(f,D)}function _(f,m){let D=o[f.id];D===void 0&&(h(f),D=p(f),o[f.id]=D,f.addEventListener("dispose",u));const L=m.program;t.updateUBOMapping(f,L);const v=A.render.frame;s[f.id]!==v&&(l(f),s[f.id]=v)}function p(f){const m=B();f.__bindingPointIndex=m;const D=n.createBuffer(),L=f.__size,v=f.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,D),D}function B(){for(let f=0;f<a;f++)if(g.indexOf(f)===-1)return g.push(f),f;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(f){const m=o[f.id],D=f.uniforms,L=f.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let v=0,N=D.length;v<N;v++){const U=Array.isArray(D[v])?D[v]:[D[v]];for(let b=0,S=U.length;b<S;b++){const G=U[b];if(Q(G,v,b,L)===!0){const nA=G.__offset,X=Array.isArray(G.value)?G.value:[G.value];let gA=0;for(let EA=0;EA<X.length;EA++){const tA=X[EA],fA=y(tA);typeof tA=="number"||typeof tA=="boolean"?(G.__data[0]=tA,n.bufferSubData(n.UNIFORM_BUFFER,nA+gA,G.__data)):tA.isMatrix3?(G.__data[0]=tA.elements[0],G.__data[1]=tA.elements[1],G.__data[2]=tA.elements[2],G.__data[3]=0,G.__data[4]=tA.elements[3],G.__data[5]=tA.elements[4],G.__data[6]=tA.elements[5],G.__data[7]=0,G.__data[8]=tA.elements[6],G.__data[9]=tA.elements[7],G.__data[10]=tA.elements[8],G.__data[11]=0):(tA.toArray(G.__data,gA),gA+=fA.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,nA,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function Q(f,m,D,L){const v=f.value,N=m+"_"+D;if(L[N]===void 0)return typeof v=="number"||typeof v=="boolean"?L[N]=v:L[N]=v.clone(),!0;{const U=L[N];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return L[N]=v,!0}else if(U.equals(v)===!1)return U.copy(v),!0}return!1}function h(f){const m=f.uniforms;let D=0;const L=16;for(let N=0,U=m.length;N<U;N++){const b=Array.isArray(m[N])?m[N]:[m[N]];for(let S=0,G=b.length;S<G;S++){const nA=b[S],X=Array.isArray(nA.value)?nA.value:[nA.value];for(let gA=0,EA=X.length;gA<EA;gA++){const tA=X[gA],fA=y(tA),H=D%L,oA=H%fA.boundary,pA=H+oA;D+=oA,pA!==0&&L-pA<fA.storage&&(D+=L-pA),nA.__data=new Float32Array(fA.storage/Float32Array.BYTES_PER_ELEMENT),nA.__offset=D,D+=fA.storage}}}const v=D%L;return v>0&&(D+=L-v),f.__size=D,f.__cache={},this}function y(f){const m={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(m.boundary=4,m.storage=4):f.isVector2?(m.boundary=8,m.storage=8):f.isVector3||f.isColor?(m.boundary=16,m.storage=12):f.isVector4?(m.boundary=16,m.storage=16):f.isMatrix3?(m.boundary=48,m.storage=48):f.isMatrix4?(m.boundary=64,m.storage=64):f.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",f),m}function u(f){const m=f.target;m.removeEventListener("dispose",u);const D=g.indexOf(m.__bindingPointIndex);g.splice(D,1),n.deleteBuffer(o[m.id]),delete o[m.id],delete s[m.id]}function E(){for(const f in o)n.deleteBuffer(o[f]);g=[],o={},s={}}return{bind:I,update:_,dispose:E}}class az{constructor(A={}){const{canvas:i=wY(),context:t=null,depth:o=!0,stencil:s=!1,alpha:g=!1,antialias:a=!1,premultipliedAlpha:I=!0,preserveDrawingBuffer:_=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:B=!1,reverseDepthBuffer:l=!1}=A;this.isWebGLRenderer=!0;let Q;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");Q=t.getContextAttributes().alpha}else Q=g;const h=new Uint32Array(4),y=new Int32Array(4);let u=null,E=null;const f=[],m=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Ko,this.toneMappingExposure=1;const D=this;let L=!1,v=0,N=0,U=null,b=-1,S=null;const G=new ve,nA=new ve;let X=null;const gA=new te(0);let EA=0,tA=i.width,fA=i.height,H=1,oA=null,pA=null;const bA=new ve(0,0,tA,fA),OA=new ve(0,0,tA,fA);let Ne=!1;const rA=new Kl;let uA=!1,TA=!1;const MA=new jA,re=new jA,Qe=new k,Fe=new ve,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Kt(){return U===null?H:1}let q=t;function qi(R,O){return i.getContext(R,O)}try{const R={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:I,preserveDrawingBuffer:_,powerPreference:p,failIfMajorPerformanceCaveat:B};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${uc}`),i.addEventListener("webglcontextlost",lA,!1),i.addEventListener("webglcontextrestored",HA,!1),i.addEventListener("webglcontextcreationerror",KA,!1),q===null){const O="webgl2";if(q=qi(O,R),q===null)throw qi(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let qe,Ue,Ie,dt,oe,F,w,z,BA,QA,_A,$A,GA,YA,Ve,yA,VA,Ce,ce,JA,Se,we,Bt,P;function UA(){qe=new Jj(q),qe.init(),we=new MW(q,qe),Ue=new Gj(q,qe,A,we),Ie=new DW(q,qe),Ue.reverseDepthBuffer&&l&&Ie.buffers.depth.setReversed(!0),dt=new qj(q),oe=new IW,F=new wW(q,qe,Ie,oe,Ue,we,dt),w=new kj(D),z=new Pj(D),BA=new $Y(q),Bt=new Uj(q,BA),QA=new Oj(q,BA,dt,Bt),_A=new Vj(q,QA,BA,dt),ce=new jj(q,Ue,F),yA=new xj(oe),$A=new aW(D,w,z,qe,Ue,Bt,yA),GA=new TW(D,oe),YA=new cW,Ve=new QW(qe),Ce=new Lj(D,w,z,Ie,_A,Q,I),VA=new yW(D,_A,Ue),P=new GW(q,dt,Ue,Ie),JA=new Tj(q,qe,dt),Se=new Yj(q,qe,dt),dt.programs=$A.programs,D.capabilities=Ue,D.extensions=qe,D.properties=oe,D.renderLists=YA,D.shadowMap=VA,D.state=Ie,D.info=dt}UA();const iA=new LW(D,q);this.xr=iA,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=qe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(tA,fA,!1))},this.getSize=function(R){return R.set(tA,fA)},this.setSize=function(R,O,$=!0){if(iA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tA=R,fA=O,i.width=Math.floor(R*H),i.height=Math.floor(O*H),$===!0&&(i.style.width=R+"px",i.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(tA*H,fA*H).floor()},this.setDrawingBufferSize=function(R,O,$){tA=R,fA=O,H=$,i.width=Math.floor(R*$),i.height=Math.floor(O*$),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(bA)},this.setViewport=function(R,O,$,AA){R.isVector4?bA.set(R.x,R.y,R.z,R.w):bA.set(R,O,$,AA),Ie.viewport(G.copy(bA).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(OA)},this.setScissor=function(R,O,$,AA){R.isVector4?OA.set(R.x,R.y,R.z,R.w):OA.set(R,O,$,AA),Ie.scissor(nA.copy(OA).multiplyScalar(H).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){Ie.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){oA=R},this.setTransparentSort=function(R){pA=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(R=!0,O=!0,$=!0){let AA=0;if(R){let Y=!1;if(U!==null){const DA=U.texture.format;Y=DA===Tl||DA===Ul||DA===Ll}if(Y){const DA=U.texture.type,xA=DA===so||DA===fs||DA===Wa||DA===Mg||DA===vl||DA===Nl,WA=Ce.getClearColor(),zA=Ce.getClearAlpha(),_e=WA.r,de=WA.g,ZA=WA.b;xA?(h[0]=_e,h[1]=de,h[2]=ZA,h[3]=zA,q.clearBufferuiv(q.COLOR,0,h)):(y[0]=_e,y[1]=de,y[2]=ZA,y[3]=zA,q.clearBufferiv(q.COLOR,0,y))}else AA|=q.COLOR_BUFFER_BIT}O&&(AA|=q.DEPTH_BUFFER_BIT),$&&(AA|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(AA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",lA,!1),i.removeEventListener("webglcontextrestored",HA,!1),i.removeEventListener("webglcontextcreationerror",KA,!1),YA.dispose(),Ve.dispose(),oe.dispose(),w.dispose(),z.dispose(),_A.dispose(),Bt.dispose(),P.dispose(),$A.dispose(),iA.dispose(),iA.removeEventListener("sessionstart",Pg),iA.removeEventListener("sessionend",Jg),Cr.stop()};function lA(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function HA(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=dt.autoReset,O=VA.enabled,$=VA.autoUpdate,AA=VA.needsUpdate,Y=VA.type;UA(),dt.autoReset=R,VA.enabled=O,VA.autoUpdate=$,VA.needsUpdate=AA,VA.type=Y}function KA(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const O=R.target;O.removeEventListener("dispose",ue),C(O)}function C(R){ii(R),oe.remove(R)}function ii(R){const O=oe.get(R).programs;O!==void 0&&(O.forEach(function($){$A.releaseProgram($)}),R.isShaderMaterial&&$A.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,$,AA,Y,DA){O===null&&(O=yt);const xA=Y.isMesh&&Y.matrixWorld.determinant()<0,WA=aI(R,O,$,AA,Y);Ie.setMaterial(AA,xA);let zA=$.index,_e=1;if(AA.wireframe===!0){if(zA=QA.getWireframeAttribute($),zA===void 0)return;_e=2}const de=$.drawRange,ZA=$.attributes.position;let We=de.start*_e,Ct=(de.start+de.count)*_e;DA!==null&&(We=Math.max(We,DA.start*_e),Ct=Math.min(Ct,(DA.start+DA.count)*_e)),zA!==null?(We=Math.max(We,0),Ct=Math.min(Ct,zA.count)):ZA!=null&&(We=Math.max(We,0),Ct=Math.min(Ct,ZA.count));const lt=Ct-We;if(lt<0||lt===1/0)return;Bt.setup(Y,AA,WA,$,zA);let Bi,$e=JA;if(zA!==null&&(Bi=BA.get(zA),$e=Se,$e.setIndex(Bi)),Y.isMesh)AA.wireframe===!0?(Ie.setLineWidth(AA.wireframeLinewidth*Kt()),$e.setMode(q.LINES)):$e.setMode(q.TRIANGLES);else if(Y.isLine){let Ae=AA.linewidth;Ae===void 0&&(Ae=1),Ie.setLineWidth(Ae*Kt()),Y.isLineSegments?$e.setMode(q.LINES):Y.isLineLoop?$e.setMode(q.LINE_LOOP):$e.setMode(q.LINE_STRIP)}else Y.isPoints?$e.setMode(q.POINTS):Y.isSprite&&$e.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)$e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))$e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ae=Y._multiDrawStarts,un=Y._multiDrawCounts,At=Y._multiDrawCount,Vi=zA?BA.get(zA).bytesPerElement:1,Nr=oe.get(AA).currentProgram.getUniforms();for(let Ri=0;Ri<At;Ri++)Nr.setValue(q,"_gl_DrawID",Ri),$e.render(Ae[Ri]/Vi,un[Ri])}else if(Y.isInstancedMesh)$e.renderInstances(We,lt,Y.count);else if($.isInstancedBufferGeometry){const Ae=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,un=Math.min($.instanceCount,Ae);$e.renderInstances(We,lt,un)}else $e.render(We,lt)};function nt(R,O,$){R.transparent===!0&&R.side===mr&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,Wo(R,O,$),R.side=oo,R.needsUpdate=!0,Wo(R,O,$),R.side=mr):Wo(R,O,$)}this.compile=function(R,O,$=null){$===null&&($=R),E=Ve.get($),E.init(O),m.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),R!==$&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights();const AA=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const DA=Y.material;if(DA)if(Array.isArray(DA))for(let xA=0;xA<DA.length;xA++){const WA=DA[xA];nt(WA,$,Y),AA.add(WA)}else nt(DA,$,Y),AA.add(DA)}),m.pop(),E=null,AA},this.compileAsync=function(R,O,$=null){const AA=this.compile(R,O,$);return new Promise(Y=>{function DA(){if(AA.forEach(function(xA){oe.get(xA).currentProgram.isReady()&&AA.delete(xA)}),AA.size===0){Y(R);return}setTimeout(DA,10)}qe.get("KHR_parallel_shader_compile")!==null?DA():setTimeout(DA,10)})};let ji=null;function hn(R){ji&&ji(R)}function Pg(){Cr.stop()}function Jg(){Cr.start()}const Cr=new oP;Cr.setAnimationLoop(hn),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(R){ji=R,iA.setAnimationLoop(R),R===null?Cr.stop():Cr.start()},iA.addEventListener("sessionstart",Pg),iA.addEventListener("sessionend",Jg),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),iA.enabled===!0&&iA.isPresenting===!0&&(iA.cameraAutoUpdate===!0&&iA.updateCamera(O),O=iA.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,O,U),E=Ve.get(R,m.length),E.init(O),m.push(E),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),rA.setFromProjectionMatrix(re),TA=this.localClippingEnabled,uA=yA.init(this.clippingPlanes,TA),u=YA.get(R,f.length),u.init(),f.push(u),iA.enabled===!0&&iA.isPresenting===!0){const DA=D.xr.getDepthSensingMesh();DA!==null&&bs(DA,O,-1/0,D.sortObjects)}bs(R,O,0,D.sortObjects),u.finish(),D.sortObjects===!0&&u.sort(oA,pA),je=iA.enabled===!1||iA.isPresenting===!1||iA.hasDepthSensing()===!1,je&&Ce.addToRenderList(u,R),this.info.render.frame++,uA===!0&&yA.beginShadows();const $=E.state.shadowsArray;VA.render($,R,O),uA===!0&&yA.endShadows(),this.info.autoReset===!0&&this.info.reset();const AA=u.opaque,Y=u.transmissive;if(E.setupLights(),O.isArrayCamera){const DA=O.cameras;if(Y.length>0)for(let xA=0,WA=DA.length;xA<WA;xA++){const zA=DA[xA];Yg(AA,Y,R,zA)}je&&Ce.render(R);for(let xA=0,WA=DA.length;xA<WA;xA++){const zA=DA[xA];Og(u,R,zA,zA.viewport)}}else Y.length>0&&Yg(AA,Y,R,O),je&&Ce.render(R),Og(u,R,O);U!==null&&(F.updateMultisampleRenderTarget(U),F.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(D,R,O),Bt.resetDefaultState(),b=-1,S=null,m.pop(),m.length>0?(E=m[m.length-1],uA===!0&&yA.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function bs(R,O,$,AA){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rA.intersectsSprite(R)){AA&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const xA=_A.update(R),WA=R.material;WA.visible&&u.push(R,xA,WA,$,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rA.intersectsObject(R))){const xA=_A.update(R),WA=R.material;if(AA&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(xA.boundingSphere===null&&xA.computeBoundingSphere(),Fe.copy(xA.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(WA)){const zA=xA.groups;for(let _e=0,de=zA.length;_e<de;_e++){const ZA=zA[_e],We=WA[ZA.materialIndex];We&&We.visible&&u.push(R,xA,We,$,Fe.z,ZA)}}else WA.visible&&u.push(R,xA,WA,$,Fe.z,null)}}const DA=R.children;for(let xA=0,WA=DA.length;xA<WA;xA++)bs(DA[xA],O,$,AA)}function Og(R,O,$,AA){const Y=R.opaque,DA=R.transmissive,xA=R.transparent;E.setupLightsView($),uA===!0&&yA.setGlobalState(D.clippingPlanes,$),AA&&Ie.viewport(G.copy(AA)),Y.length>0&&Vo(Y,O,$),DA.length>0&&Vo(DA,O,$),xA.length>0&&Vo(xA,O,$),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Yg(R,O,$,AA){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[AA.id]===void 0&&(E.state.transmissionRenderTarget[AA.id]=new ys(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?nI:so,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const DA=E.state.transmissionRenderTarget[AA.id],xA=AA.viewport||G;DA.setSize(xA.z,xA.w);const WA=D.getRenderTarget();D.setRenderTarget(DA),D.getClearColor(gA),EA=D.getClearAlpha(),EA<1&&D.setClearColor(16777215,.5),D.clear(),je&&Ce.render($);const zA=D.toneMapping;D.toneMapping=Ko;const _e=AA.viewport;if(AA.viewport!==void 0&&(AA.viewport=void 0),E.setupLightsView(AA),uA===!0&&yA.setGlobalState(D.clippingPlanes,AA),Vo(R,$,AA),F.updateMultisampleRenderTarget(DA),F.updateRenderTargetMipmap(DA),qe.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let ZA=0,We=O.length;ZA<We;ZA++){const Ct=O[ZA],lt=Ct.object,Bi=Ct.geometry,$e=Ct.material,Ae=Ct.group;if($e.side===mr&&lt.layers.test(AA.layers)){const un=$e.side;$e.side=sn,$e.needsUpdate=!0,qg(lt,$,AA,Bi,$e,Ae),$e.side=un,$e.needsUpdate=!0,de=!0}}de===!0&&(F.updateMultisampleRenderTarget(DA),F.updateRenderTargetMipmap(DA))}D.setRenderTarget(WA),D.setClearColor(gA,EA),_e!==void 0&&(AA.viewport=_e),D.toneMapping=zA}function Vo(R,O,$){const AA=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,DA=R.length;Y<DA;Y++){const xA=R[Y],WA=xA.object,zA=xA.geometry,_e=AA===null?xA.material:AA,de=xA.group;WA.layers.test($.layers)&&qg(WA,O,$,zA,_e,de)}}function qg(R,O,$,AA,Y,DA){R.onBeforeRender(D,O,$,AA,Y,DA),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(D,O,$,AA,R,DA),Y.transparent===!0&&Y.side===mr&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,D.renderBufferDirect($,O,AA,Y,R,DA),Y.side=oo,Y.needsUpdate=!0,D.renderBufferDirect($,O,AA,Y,R,DA),Y.side=mr):D.renderBufferDirect($,O,AA,Y,R,DA),R.onAfterRender(D,O,$,AA,Y,DA)}function Wo(R,O,$){O.isScene!==!0&&(O=yt);const AA=oe.get(R),Y=E.state.lights,DA=E.state.shadowsArray,xA=Y.state.version,WA=$A.getParameters(R,Y.state,DA,O,$),zA=$A.getProgramCacheKey(WA);let _e=AA.programs;AA.environment=R.isMeshStandardMaterial?O.environment:null,AA.fog=O.fog,AA.envMap=(R.isMeshStandardMaterial?z:w).get(R.envMap||AA.environment),AA.envMapRotation=AA.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,_e===void 0&&(R.addEventListener("dispose",ue),_e=new Map,AA.programs=_e);let de=_e.get(zA);if(de!==void 0){if(AA.currentProgram===de&&AA.lightsStateVersion===xA)return Vg(R,WA),de}else WA.uniforms=$A.getUniforms(R),R.onBeforeCompile(WA,D),de=$A.acquireProgram(WA,zA),_e.set(zA,de),AA.uniforms=WA.uniforms;const ZA=AA.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ZA.clippingPlanes=yA.uniform),Vg(R,WA),AA.needsLights=CI(R),AA.lightsStateVersion=xA,AA.needsLights&&(ZA.ambientLightColor.value=Y.state.ambient,ZA.lightProbe.value=Y.state.probe,ZA.directionalLights.value=Y.state.directional,ZA.directionalLightShadows.value=Y.state.directionalShadow,ZA.spotLights.value=Y.state.spot,ZA.spotLightShadows.value=Y.state.spotShadow,ZA.rectAreaLights.value=Y.state.rectArea,ZA.ltc_1.value=Y.state.rectAreaLTC1,ZA.ltc_2.value=Y.state.rectAreaLTC2,ZA.pointLights.value=Y.state.point,ZA.pointLightShadows.value=Y.state.pointShadow,ZA.hemisphereLights.value=Y.state.hemi,ZA.directionalShadowMap.value=Y.state.directionalShadowMap,ZA.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ZA.spotShadowMap.value=Y.state.spotShadowMap,ZA.spotLightMatrix.value=Y.state.spotLightMatrix,ZA.spotLightMap.value=Y.state.spotLightMap,ZA.pointShadowMap.value=Y.state.pointShadowMap,ZA.pointShadowMatrix.value=Y.state.pointShadowMatrix),AA.currentProgram=de,AA.uniformsList=null,de}function jg(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=MC.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Vg(R,O){const $=oe.get(R);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function aI(R,O,$,AA,Y){O.isScene!==!0&&(O=yt),F.resetTextureUnits();const DA=O.fog,xA=AA.isMeshStandardMaterial?O.environment:null,WA=U===null?D.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gg,zA=(AA.isMeshStandardMaterial?z:w).get(AA.envMap||xA),_e=AA.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!AA.normalMap||AA.anisotropy>0),ZA=!!$.morphAttributes.position,We=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color;let lt=Ko;AA.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(lt=D.toneMapping);const Bi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$e=Bi!==void 0?Bi.length:0,Ae=oe.get(AA),un=E.state.lights;if(uA===!0&&(TA===!0||R!==S)){const xi=R===S&&AA.id===b;yA.setState(AA,R,xi)}let At=!1;AA.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==un.state.version||Ae.outputColorSpace!==WA||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==zA||AA.fog===!0&&Ae.fog!==DA||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==yA.numPlanes||Ae.numIntersection!==yA.numIntersection)||Ae.vertexAlphas!==_e||Ae.vertexTangents!==de||Ae.morphTargets!==ZA||Ae.morphNormals!==We||Ae.morphColors!==Ct||Ae.toneMapping!==lt||Ae.morphTargetsCount!==$e)&&(At=!0):(At=!0,Ae.__version=AA.version);let Vi=Ae.currentProgram;At===!0&&(Vi=Wo(AA,O,Y));let Nr=!1,Ri=!1,Io=!1;const Et=Vi.getUniforms(),an=Ae.uniforms;if(Ie.useProgram(Vi.program)&&(Nr=!0,Ri=!0,Io=!0),AA.id!==b&&(b=AA.id,Ri=!0),Nr||S!==R){Ie.buffers.depth.getReversed()?(MA.copy(R.projectionMatrix),RY(MA),bY(MA),Et.setValue(q,"projectionMatrix",MA)):Et.setValue(q,"projectionMatrix",R.projectionMatrix),Et.setValue(q,"viewMatrix",R.matrixWorldInverse);const qn=Et.map.cameraPosition;qn!==void 0&&qn.setValue(q,Qe.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Et.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(AA.isMeshPhongMaterial||AA.isMeshToonMaterial||AA.isMeshLambertMaterial||AA.isMeshBasicMaterial||AA.isMeshStandardMaterial||AA.isShaderMaterial)&&Et.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ri=!0,Io=!0)}if(Y.isSkinnedMesh){Et.setOptional(q,Y,"bindMatrix"),Et.setOptional(q,Y,"bindMatrixInverse");const xi=Y.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),Et.setValue(q,"boneTexture",xi.boneTexture,F))}Y.isBatchedMesh&&(Et.setOptional(q,Y,"batchingTexture"),Et.setValue(q,"batchingTexture",Y._matricesTexture,F),Et.setOptional(q,Y,"batchingIdTexture"),Et.setValue(q,"batchingIdTexture",Y._indirectTexture,F),Et.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Et.setValue(q,"batchingColorTexture",Y._colorsTexture,F));const Co=$.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&ce.update(Y,$,Vi),(Ri||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,Et.setValue(q,"receiveShadow",Y.receiveShadow)),AA.isMeshGouraudMaterial&&AA.envMap!==null&&(an.envMap.value=zA,an.flipEnvMap.value=zA.isCubeTexture&&zA.isRenderTargetTexture===!1?-1:1),AA.isMeshStandardMaterial&&AA.envMap===null&&O.environment!==null&&(an.envMapIntensity.value=O.environmentIntensity),Ri&&(Et.setValue(q,"toneMappingExposure",D.toneMappingExposure),Ae.needsLights&&II(an,Io),DA&&AA.fog===!0&&GA.refreshFogUniforms(an,DA),GA.refreshMaterialUniforms(an,AA,H,fA,E.state.transmissionRenderTarget[R.id]),MC.upload(q,jg(Ae),an,F)),AA.isShaderMaterial&&AA.uniformsNeedUpdate===!0&&(MC.upload(q,jg(Ae),an,F),AA.uniformsNeedUpdate=!1),AA.isSpriteMaterial&&Et.setValue(q,"center",Y.center),Et.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(q,"normalMatrix",Y.normalMatrix),Et.setValue(q,"modelMatrix",Y.matrixWorld),AA.isShaderMaterial||AA.isRawShaderMaterial){const xi=AA.uniformsGroups;for(let qn=0,jn=xi.length;qn<jn;qn++){const Wg=xi[qn];P.update(Wg,Vi),P.bind(Wg,Vi)}}return Vi}function II(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function CI(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,O,$){oe.get(R.texture).__webglTexture=O,oe.get(R.depthTexture).__webglTexture=$;const AA=oe.get(R);AA.__hasExternalTextures=!0,AA.__autoAllocateDepthBuffer=$===void 0,AA.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),AA.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const $=oe.get(R);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,$=0){U=R,v=O,N=$;let AA=!0,Y=null,DA=!1,xA=!1;if(R){const zA=oe.get(R);if(zA.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(q.FRAMEBUFFER,null),AA=!1;else if(zA.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(zA.__hasExternalTextures)F.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ZA=R.depthTexture;if(zA.__boundDepthTexture!==ZA){if(ZA!==null&&oe.has(ZA)&&(R.width!==ZA.image.width||R.height!==ZA.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const _e=R.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(xA=!0);const de=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(de[O])?Y=de[O][$]:Y=de[O],DA=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?Y=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(de)?Y=de[$]:Y=de,G.copy(R.viewport),nA.copy(R.scissor),X=R.scissorTest}else G.copy(bA).multiplyScalar(H).floor(),nA.copy(OA).multiplyScalar(H).floor(),X=Ne;if(Ie.bindFramebuffer(q.FRAMEBUFFER,Y)&&AA&&Ie.drawBuffers(R,Y),Ie.viewport(G),Ie.scissor(nA),Ie.setScissorTest(X),DA){const zA=oe.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+O,zA.__webglTexture,$)}else if(xA){const zA=oe.get(R.texture),_e=O||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,zA.__webglTexture,$||0,_e)}b=-1},this.readRenderTargetPixels=function(R,O,$,AA,Y,DA,xA){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let WA=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xA!==void 0&&(WA=WA[xA]),WA){Ie.bindFramebuffer(q.FRAMEBUFFER,WA);try{const zA=R.texture,_e=zA.format,de=zA.type;if(!Ue.textureFormatReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-AA&&$>=0&&$<=R.height-Y&&q.readPixels(O,$,AA,Y,we.convert(_e),we.convert(de),DA)}finally{const zA=U!==null?oe.get(U).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,zA)}}},this.readRenderTargetPixelsAsync=async function(R,O,$,AA,Y,DA,xA){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let WA=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xA!==void 0&&(WA=WA[xA]),WA){const zA=R.texture,_e=zA.format,de=zA.type;if(!Ue.textureFormatReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-AA&&$>=0&&$<=R.height-Y){Ie.bindFramebuffer(q.FRAMEBUFFER,WA);const ZA=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ZA),q.bufferData(q.PIXEL_PACK_BUFFER,DA.byteLength,q.STREAM_READ),q.readPixels(O,$,AA,Y,we.convert(_e),we.convert(de),0);const We=U!==null?oe.get(U).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,We);const Ct=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await MY(q,Ct,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ZA),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,DA),q.deleteBuffer(ZA),q.deleteSync(Ct),DA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,$=0){R.isTexture!==!0&&(Qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const AA=Math.pow(2,-$),Y=Math.floor(R.image.width*AA),DA=Math.floor(R.image.height*AA),xA=O!==null?O.x:0,WA=O!==null?O.y:0;F.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,xA,WA,Y,DA),Ie.unbindTexture()},this.copyTextureToTexture=function(R,O,$=null,AA=null,Y=0){R.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture function signature has changed."),AA=arguments[0]||null,R=arguments[1],O=arguments[2],Y=arguments[3]||0,$=null);let DA,xA,WA,zA,_e,de,ZA,We,Ct;const lt=R.isCompressedTexture?R.mipmaps[Y]:R.image;$!==null?(DA=$.max.x-$.min.x,xA=$.max.y-$.min.y,WA=$.isBox3?$.max.z-$.min.z:1,zA=$.min.x,_e=$.min.y,de=$.isBox3?$.min.z:0):(DA=lt.width,xA=lt.height,WA=lt.depth||1,zA=0,_e=0,de=0),AA!==null?(ZA=AA.x,We=AA.y,Ct=AA.z):(ZA=0,We=0,Ct=0);const Bi=we.convert(O.format),$e=we.convert(O.type);let Ae;O.isData3DTexture?(F.setTexture3D(O,0),Ae=q.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),Ae=q.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),Ae=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,O.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,O.unpackAlignment);const un=q.getParameter(q.UNPACK_ROW_LENGTH),At=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Vi=q.getParameter(q.UNPACK_SKIP_PIXELS),Nr=q.getParameter(q.UNPACK_SKIP_ROWS),Ri=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,lt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,lt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,zA),q.pixelStorei(q.UNPACK_SKIP_ROWS,_e),q.pixelStorei(q.UNPACK_SKIP_IMAGES,de);const Io=R.isDataArrayTexture||R.isData3DTexture,Et=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const an=oe.get(R),Co=oe.get(O),xi=oe.get(an.__renderTarget),qn=oe.get(Co.__renderTarget);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,xi.__webglFramebuffer),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let jn=0;jn<WA;jn++)Io&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,Y,de+jn),R.isDepthTexture?(Et&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,oe.get(O).__webglTexture,Y,Ct+jn),q.blitFramebuffer(zA,_e,DA,xA,ZA,We,DA,xA,q.DEPTH_BUFFER_BIT,q.NEAREST)):Et?q.copyTexSubImage3D(Ae,Y,ZA,We,Ct+jn,zA,_e,DA,xA):q.copyTexSubImage2D(Ae,Y,ZA,We,Ct+jn,zA,_e,DA,xA);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Et?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Ae,Y,ZA,We,Ct,DA,xA,WA,Bi,$e,lt.data):O.isCompressedArrayTexture?q.compressedTexSubImage3D(Ae,Y,ZA,We,Ct,DA,xA,WA,Bi,lt.data):q.texSubImage3D(Ae,Y,ZA,We,Ct,DA,xA,WA,Bi,$e,lt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,ZA,We,DA,xA,Bi,$e,lt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,ZA,We,lt.width,lt.height,Bi,lt.data):q.texSubImage2D(q.TEXTURE_2D,Y,ZA,We,DA,xA,Bi,$e,lt);q.pixelStorei(q.UNPACK_ROW_LENGTH,un),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,At),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Vi),q.pixelStorei(q.UNPACK_SKIP_ROWS,Nr),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ri),Y===0&&O.generateMipmaps&&q.generateMipmap(Ae),Ie.unbindTexture()},this.copyTextureToTexture3D=function(R,O,$=null,AA=null,Y=0){return R.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,AA=arguments[1]||null,R=arguments[2],O=arguments[3],Y=arguments[4]||0),Qa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,$,AA,Y)},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){v=0,N=0,U=null,Ie.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const i=this.getContext();i.drawingBufferColorspace=tt._getDrawingBufferColorSpace(A),i.unpackColorSpace=tt._getUnpackColorSpace()}}class Iz extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,i){return super.copy(A,i),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const i=super.toJSON(A);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cP{constructor(A,i){this.isInterleavedBuffer=!0,this.array=A,this.stride=i,this.count=A!==void 0?A.length/i:0,this.usage=mB,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,i){this.updateRanges.push({start:A,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,i,t){A*=this.stride,t*=i.stride;for(let o=0,s=this.stride;o<s;o++)this.array[A+o]=i.array[t+o];return this}set(A,i=0){return this.array.set(A,i),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(i,this.stride);return t.setUsage(this.usage),t}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ki=new k;class Xr{constructor(A,i,t,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=i,this.offset=t,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let i=0,t=this.data.count;i<t;i++)ki.fromBufferAttribute(this,i),ki.applyMatrix4(A),this.setXYZ(i,ki.x,ki.y,ki.z);return this}applyNormalMatrix(A){for(let i=0,t=this.count;i<t;i++)ki.fromBufferAttribute(this,i),ki.applyNormalMatrix(A),this.setXYZ(i,ki.x,ki.y,ki.z);return this}transformDirection(A){for(let i=0,t=this.count;i<t;i++)ki.fromBufferAttribute(this,i),ki.transformDirection(A),this.setXYZ(i,ki.x,ki.y,ki.z);return this}getComponent(A,i){let t=this.array[A*this.data.stride+this.offset+i];return this.normalized&&(t=nr(t,this.array)),t}setComponent(A,i,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[A*this.data.stride+this.offset+i]=t,this}setX(A,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[A*this.data.stride+this.offset]=i,this}setY(A,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[A*this.data.stride+this.offset+1]=i,this}setZ(A,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[A*this.data.stride+this.offset+2]=i,this}setW(A,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[A*this.data.stride+this.offset+3]=i,this}getX(A){let i=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(i=nr(i,this.array)),i}getY(A){let i=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(i=nr(i,this.array)),i}getZ(A){let i=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(i=nr(i,this.array)),i}getW(A){let i=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(i=nr(i,this.array)),i}setXY(A,i,t){return A=A*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array)),this.data.array[A+0]=i,this.data.array[A+1]=t,this}setXYZ(A,i,t,o){return A=A*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array),o=_t(o,this.array)),this.data.array[A+0]=i,this.data.array[A+1]=t,this.data.array[A+2]=o,this}setXYZW(A,i,t,o,s){return A=A*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),t=_t(t,this.array),o=_t(o,this.array),s=_t(s,this.array)),this.data.array[A+0]=i,this.data.array[A+1]=t,this.data.array[A+2]=o,this.data.array[A+3]=s,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let t=0;t<this.count;t++){const o=t*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[o+s])}return new oi(new this.array.constructor(i),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new Xr(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let t=0;t<this.count;t++){const o=t*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xk=new k,kk=new ve,Hk=new ve,xW=new k,Kk=new jA,XI=new k,F_=new Yn,Pk=new jA,L_=new rI;class _P extends _i{constructor(A,i){super(A,i),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hx,this.bindMatrix=new jA,this.bindMatrixInverse=new jA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const i=A.getAttribute("position");for(let t=0;t<i.count;t++)this.getVertexPosition(t,XI),this.boundingBox.expandByPoint(XI)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const i=A.getAttribute("position");for(let t=0;t<i.count;t++)this.getVertexPosition(t,XI),this.boundingSphere.expandByPoint(XI)}copy(A,i){return super.copy(A,i),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,i){const t=this.material,o=this.matrixWorld;t!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),F_.copy(this.boundingSphere),F_.applyMatrix4(o),A.ray.intersectsSphere(F_)!==!1&&(Pk.copy(o).invert(),L_.copy(A.ray).applyMatrix4(Pk),!(this.boundingBox!==null&&L_.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,i,L_)))}getVertexPosition(A,i){return super.getVertexPosition(A,i),this.applyBoneTransform(A,i),i}bind(A,i){this.skeleton=A,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.copy(i).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new ve,i=this.geometry.attributes.skinWeight;for(let t=0,o=i.count;t<o;t++){A.fromBufferAttribute(i,t);const s=1/A.manhattanLength();s!==1/0?A.multiplyScalar(s):A.set(1,0,0,0),i.setXYZW(t,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode===Hx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===XO?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,i){const t=this.skeleton,o=this.geometry;kk.fromBufferAttribute(o.attributes.skinIndex,A),Hk.fromBufferAttribute(o.attributes.skinWeight,A),xk.copy(i).applyMatrix4(this.bindMatrix),i.set(0,0,0);for(let s=0;s<4;s++){const g=Hk.getComponent(s);if(g!==0){const a=kk.getComponent(s);Kk.multiplyMatrices(t.bones[a].matrixWorld,t.boneInverses[a]),i.addScaledVector(xW.copy(xk).applyMatrix4(Kk),g)}}return i.applyMatrix4(this.bindMatrixInverse)}}class tc extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pP extends ti{constructor(A=null,i=1,t=1,o,s,g,a,I,_=gn,p=gn,B,l){super(null,g,a,I,_,p,o,s,B,l),this.isDataTexture=!0,this.image={data:A,width:i,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jk=new jA,kW=new jA;class Rc{constructor(A=[],i=[]){this.uuid=ar(),this.bones=A.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const A=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),i.length===0)this.calculateInverses();else if(A.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,o=this.bones.length;t<o;t++)this.boneInverses.push(new jA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,i=this.bones.length;A<i;A++){const t=new jA;this.bones[A]&&t.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let A=0,i=this.bones.length;A<i;A++){const t=this.bones[A];t&&t.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,i=this.bones.length;A<i;A++){const t=this.bones[A];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){const A=this.bones,i=this.boneInverses,t=this.boneMatrices,o=this.boneTexture;for(let s=0,g=A.length;s<g;s++){const a=A[s]?A[s].matrixWorld:kW;Jk.multiplyMatrices(a,i[s]),Jk.toArray(t,s*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Rc(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);const i=new Float32Array(A*A*4);i.set(this.boneMatrices);const t=new pP(i,A,A,xn,or);return t.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=t,this}getBoneByName(A){for(let i=0,t=this.bones.length;i<t;i++){const o=this.bones[i];if(o.name===A)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,i){this.uuid=A.uuid;for(let t=0,o=A.bones.length;t<o;t++){const s=A.bones[t];let g=i[s];g===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),g=new tc),this.bones.push(g),this.boneInverses.push(new jA().fromArray(A.boneInverses[t]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const i=this.bones,t=this.boneInverses;for(let o=0,s=i.length;o<s;o++){const g=i[o];A.bones.push(g.uuid);const a=t[o];A.boneInverses.push(a.toArray())}return A}}class SB extends oi{constructor(A,i,t,o=1){super(A,i,t),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const qs=new jA,Ok=new jA,$I=[],Yk=new On,HW=new jA,ga=new _i,aa=new Yn;class BP extends _i{constructor(A,i,t){super(A,i),this.isInstancedMesh=!0,this.instanceMatrix=new SB(new Float32Array(t*16),16),this.instanceColor=null,this.morphTexture=null,this.count=t,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<t;o++)this.setMatrixAt(o,HW)}computeBoundingBox(){const A=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new On),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<i;t++)this.getMatrixAt(t,qs),Yk.copy(A.boundingBox).applyMatrix4(qs),this.boundingBox.union(Yk)}computeBoundingSphere(){const A=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<i;t++)this.getMatrixAt(t,qs),aa.copy(A.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(aa)}copy(A,i){return super.copy(A,i),this.instanceMatrix.copy(A.instanceMatrix),A.morphTexture!==null&&(this.morphTexture=A.morphTexture.clone()),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,i){i.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,i){i.fromArray(this.instanceMatrix.array,A*16)}getMorphAt(A,i){const t=i.morphTargetInfluences,o=this.morphTexture.source.data.data,s=t.length+1,g=A*s+1;for(let a=0;a<t.length;a++)t[a]=o[g+a]}raycast(A,i){const t=this.matrixWorld,o=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(t),A.ray.intersectsSphere(aa)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,qs),Ok.multiplyMatrices(t,qs),ga.matrixWorld=Ok,ga.raycast(A,$I);for(let g=0,a=$I.length;g<a;g++){const I=$I[g];I.instanceId=s,I.object=this,i.push(I)}$I.length=0}}setColorAt(A,i){this.instanceColor===null&&(this.instanceColor=new SB(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,i){i.toArray(this.instanceMatrix.array,A*16)}setMorphAt(A,i){const t=i.morphTargetInfluences,o=t.length+1;this.morphTexture===null&&(this.morphTexture=new pP(new Float32Array(o*this.count),o,this.count,Fl,or));const s=this.morphTexture.source.data.data;let g=0;for(let _=0;_<t.length;_++)g+=t[_];const a=this.geometry.morphTargetsRelative?1:1-g,I=o*A;s[I]=a,s.set(t,I+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jl extends Kn{static get type(){return"LineBasicMaterial"}constructor(A){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const ic=new k,nc=new k,qk=new jA,Ia=new rI,AC=new Yn,U_=new k,jk=new k;class bc extends ft{constructor(A=new si,i=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=i,this.updateMorphTargets()}copy(A,i){return super.copy(A,i),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const i=A.attributes.position,t=[0];for(let o=1,s=i.count;o<s;o++)ic.fromBufferAttribute(i,o-1),nc.fromBufferAttribute(i,o),t[o]=t[o-1],t[o]+=ic.distanceTo(nc);A.setAttribute("lineDistance",new Xt(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,i){const t=this.geometry,o=this.matrixWorld,s=A.params.Line.threshold,g=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),AC.copy(t.boundingSphere),AC.applyMatrix4(o),AC.radius+=s,A.ray.intersectsSphere(AC)===!1)return;qk.copy(o).invert(),Ia.copy(A.ray).applyMatrix4(qk);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),I=a*a,_=this.isLineSegments?2:1,p=t.index,l=t.attributes.position;if(p!==null){const Q=Math.max(0,g.start),h=Math.min(p.count,g.start+g.count);for(let y=Q,u=h-1;y<u;y+=_){const E=p.getX(y),f=p.getX(y+1),m=eC(this,A,Ia,I,E,f);m&&i.push(m)}if(this.isLineLoop){const y=p.getX(h-1),u=p.getX(Q),E=eC(this,A,Ia,I,y,u);E&&i.push(E)}}else{const Q=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let y=Q,u=h-1;y<u;y+=_){const E=eC(this,A,Ia,I,y,y+1);E&&i.push(E)}if(this.isLineLoop){const y=eC(this,A,Ia,I,h-1,Q);y&&i.push(y)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,t=Object.keys(i);if(t.length>0){const o=i[t[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,g=o.length;s<g;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eC(n,A,i,t,o,s){const g=n.geometry.attributes.position;if(ic.fromBufferAttribute(g,o),nc.fromBufferAttribute(g,s),i.distanceSqToSegment(ic,nc,U_,jk)>t)return;U_.applyMatrix4(n.matrixWorld);const I=A.ray.origin.distanceTo(U_);if(!(I<A.near||I>A.far))return{distance:I,point:jk.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Vk=new k,Wk=new k;class KW extends bc{constructor(A,i){super(A,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const i=A.attributes.position,t=[];for(let o=0,s=i.count;o<s;o+=2)Vk.fromBufferAttribute(i,o),Wk.fromBufferAttribute(i,o+1),t[o]=o===0?0:t[o-1],t[o+1]=t[o]+Vk.distanceTo(Wk);A.setAttribute("lineDistance",new Xt(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PW extends bc{constructor(A,i){super(A,i),this.isLineLoop=!0,this.type="LineLoop"}}class lP extends Kn{static get type(){return"PointsMaterial"}constructor(A){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const zk=new jA,wB=new rI,tC=new Yn,iC=new k;class JW extends ft{constructor(A=new si,i=new lP){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=i,this.updateMorphTargets()}copy(A,i){return super.copy(A,i),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,i){const t=this.geometry,o=this.matrixWorld,s=A.params.Points.threshold,g=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),tC.copy(t.boundingSphere),tC.applyMatrix4(o),tC.radius+=s,A.ray.intersectsSphere(tC)===!1)return;zk.copy(o).invert(),wB.copy(A.ray).applyMatrix4(zk);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),I=a*a,_=t.index,B=t.attributes.position;if(_!==null){const l=Math.max(0,g.start),Q=Math.min(_.count,g.start+g.count);for(let h=l,y=Q;h<y;h++){const u=_.getX(h);iC.fromBufferAttribute(B,u),Zk(iC,u,I,o,A,i,this)}}else{const l=Math.max(0,g.start),Q=Math.min(B.count,g.start+g.count);for(let h=l,y=Q;h<y;h++)iC.fromBufferAttribute(B,h),Zk(iC,h,I,o,A,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,t=Object.keys(i);if(t.length>0){const o=i[t[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,g=o.length;s<g;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zk(n,A,i,t,o,s,g){const a=wB.distanceSqToPoint(n);if(a<i){const I=new k;wB.closestPointToPoint(n,I),I.applyMatrix4(t);const _=o.ray.origin.distanceTo(I);if(_<o.near||_>o.far)return;s.push({distance:_,distanceToRay:Math.sqrt(a),point:I,index:A,face:null,faceIndex:null,barycoord:null,object:g})}}class OW{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,i){const t=this.getUtoTmapping(A);return this.getPoint(t,i)}getPoints(A=5){const i=[];for(let t=0;t<=A;t++)i.push(this.getPoint(t/A));return i}getSpacedPoints(A=5){const i=[];for(let t=0;t<=A;t++)i.push(this.getPointAt(t/A));return i}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let t,o=this.getPoint(0),s=0;i.push(0);for(let g=1;g<=A;g++)t=this.getPoint(g/A),s+=t.distanceTo(o),i.push(s),o=t;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,i){const t=this.getLengths();let o=0;const s=t.length;let g;i?g=i:g=A*t[s-1];let a=0,I=s-1,_;for(;a<=I;)if(o=Math.floor(a+(I-a)/2),_=t[o]-g,_<0)a=o+1;else if(_>0)I=o-1;else{I=o;break}if(o=I,t[o]===g)return o/(s-1);const p=t[o],l=t[o+1]-p,Q=(g-p)/l;return(o+Q)/(s-1)}getTangent(A,i){let o=A-1e-4,s=A+1e-4;o<0&&(o=0),s>1&&(s=1);const g=this.getPoint(o),a=this.getPoint(s),I=i||(g.isVector2?new Ke:new k);return I.copy(a).sub(g).normalize(),I}getTangentAt(A,i){const t=this.getUtoTmapping(A);return this.getTangent(t,i)}computeFrenetFrames(A,i){const t=new k,o=[],s=[],g=[],a=new k,I=new jA;for(let Q=0;Q<=A;Q++){const h=Q/A;o[Q]=this.getTangentAt(h,new k)}s[0]=new k,g[0]=new k;let _=Number.MAX_VALUE;const p=Math.abs(o[0].x),B=Math.abs(o[0].y),l=Math.abs(o[0].z);p<=_&&(_=p,t.set(1,0,0)),B<=_&&(_=B,t.set(0,1,0)),l<=_&&t.set(0,0,1),a.crossVectors(o[0],t).normalize(),s[0].crossVectors(o[0],a),g[0].crossVectors(o[0],s[0]);for(let Q=1;Q<=A;Q++){if(s[Q]=s[Q-1].clone(),g[Q]=g[Q-1].clone(),a.crossVectors(o[Q-1],o[Q]),a.length()>Number.EPSILON){a.normalize();const h=Math.acos(Ai(o[Q-1].dot(o[Q]),-1,1));s[Q].applyMatrix4(I.makeRotationAxis(a,h))}g[Q].crossVectors(o[Q],s[Q])}if(i===!0){let Q=Math.acos(Ai(s[0].dot(s[A]),-1,1));Q/=A,o[0].dot(a.crossVectors(s[0],s[A]))>0&&(Q=-Q);for(let h=1;h<=A;h++)s[h].applyMatrix4(I.makeRotationAxis(o[h],Q*h)),g[h].crossVectors(o[h],s[h])}return{tangents:o,normals:s,binormals:g}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class Ol extends si{constructor(A=1,i=32,t=16,o=0,s=Math.PI*2,g=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:i,heightSegments:t,phiStart:o,phiLength:s,thetaStart:g,thetaLength:a},i=Math.max(3,Math.floor(i)),t=Math.max(2,Math.floor(t));const I=Math.min(g+a,Math.PI);let _=0;const p=[],B=new k,l=new k,Q=[],h=[],y=[],u=[];for(let E=0;E<=t;E++){const f=[],m=E/t;let D=0;E===0&&g===0?D=.5/i:E===t&&I===Math.PI&&(D=-.5/i);for(let L=0;L<=i;L++){const v=L/i;B.x=-A*Math.cos(o+v*s)*Math.sin(g+m*a),B.y=A*Math.cos(g+m*a),B.z=A*Math.sin(o+v*s)*Math.sin(g+m*a),h.push(B.x,B.y,B.z),l.copy(B).normalize(),y.push(l.x,l.y,l.z),u.push(v+D,1-m),f.push(_++)}p.push(f)}for(let E=0;E<t;E++)for(let f=0;f<i;f++){const m=p[E][f+1],D=p[E][f],L=p[E+1][f],v=p[E+1][f+1];(E!==0||g>0)&&Q.push(m,D,v),(E!==t-1||I<Math.PI)&&Q.push(D,L,v)}this.setIndex(Q),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(u,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ol(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class YW extends si{constructor(A=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:A},A!==null){const i=[],t=new Set,o=new k,s=new k;if(A.index!==null){const g=A.attributes.position,a=A.index;let I=A.groups;I.length===0&&(I=[{start:0,count:a.count,materialIndex:0}]);for(let _=0,p=I.length;_<p;++_){const B=I[_],l=B.start,Q=B.count;for(let h=l,y=l+Q;h<y;h+=3)for(let u=0;u<3;u++){const E=a.getX(h+u),f=a.getX(h+(u+1)%3);o.fromBufferAttribute(g,E),s.fromBufferAttribute(g,f),Xk(o,s,t)===!0&&(i.push(o.x,o.y,o.z),i.push(s.x,s.y,s.z))}}}else{const g=A.attributes.position;for(let a=0,I=g.count/3;a<I;a++)for(let _=0;_<3;_++){const p=3*a+_,B=3*a+(_+1)%3;o.fromBufferAttribute(g,p),s.fromBufferAttribute(g,B),Xk(o,s,t)===!0&&(i.push(o.x,o.y,o.z),i.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xt(i,3))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}}function Xk(n,A,i){const t=`${n.x},${n.y},${n.z}-${A.x},${A.y},${A.z}`,o=`${A.x},${A.y},${A.z}-${n.x},${n.y},${n.z}`;return i.has(t)===!0||i.has(o)===!0?!1:(i.add(t),i.add(o),!0)}class Yl extends Kn{static get type(){return"MeshStandardMaterial"}constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class br extends Yl{static get type(){return"MeshPhysicalMaterial"}constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ai(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){this._dispersion>0!=A>0&&this.version++,this._dispersion=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}class T_ extends Kn{static get type(){return"MeshPhongMaterial"}constructor(A){super(),this.isMeshPhongMaterial=!0,this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class qW extends Kn{static get type(){return"MeshLambertMaterial"}constructor(A){super(),this.isMeshLambertMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}function nC(n,A,i){return!n||!i&&n.constructor===A?n:typeof A.BYTES_PER_ELEMENT=="number"?new A(n):Array.prototype.slice.call(n)}function jW(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function VW(n){function A(o,s){return n[o]-n[s]}const i=n.length,t=new Array(i);for(let o=0;o!==i;++o)t[o]=o;return t.sort(A),t}function $k(n,A,i){const t=n.length,o=new n.constructor(t);for(let s=0,g=0;g!==t;++s){const a=i[s]*A;for(let I=0;I!==A;++I)o[g++]=n[a+I]}return o}function EP(n,A,i,t){let o=1,s=n[0];for(;s!==void 0&&s[t]===void 0;)s=n[o++];if(s===void 0)return;let g=s[t];if(g!==void 0)if(Array.isArray(g))do g=s[t],g!==void 0&&(A.push(s.time),i.push.apply(i,g)),s=n[o++];while(s!==void 0);else if(g.toArray!==void 0)do g=s[t],g!==void 0&&(A.push(s.time),g.toArray(i,i.length)),s=n[o++];while(s!==void 0);else do g=s[t],g!==void 0&&(A.push(s.time),i.push(g)),s=n[o++];while(s!==void 0)}class sI{constructor(A,i,t,o){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new i.constructor(t),this.sampleValues=i,this.valueSize=t,this.settings=null,this.DefaultSettings_={}}evaluate(A){const i=this.parameterPositions;let t=this._cachedIndex,o=i[t],s=i[t-1];A:{e:{let g;t:{i:if(!(A<o)){for(let a=t+2;;){if(o===void 0){if(A<s)break i;return t=i.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===a)break;if(s=o,o=i[++t],A<o)break e}g=i.length;break t}if(!(A>=s)){const a=i[1];A<a&&(t=2,s=a);for(let I=t-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===I)break;if(o=s,s=i[--t-1],A>=s)break e}g=t,t=0;break t}break A}for(;t<g;){const a=t+g>>>1;A<i[a]?g=a:t=a+1}if(o=i[t],s=i[t-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return t=i.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,s,o)}return this.interpolate_(t,s,A,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const i=this.resultBuffer,t=this.sampleValues,o=this.valueSize,s=A*o;for(let g=0;g!==o;++g)i[g]=t[s+g];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WW extends sI{constructor(A,i,t,o){super(A,i,t,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kx,endingEnd:Kx}}intervalChanged_(A,i,t){const o=this.parameterPositions;let s=A-2,g=A+1,a=o[s],I=o[g];if(a===void 0)switch(this.getSettings_().endingStart){case Px:s=A,a=2*i-t;break;case Jx:s=o.length-2,a=i+o[s]-o[s+1];break;default:s=A,a=t}if(I===void 0)switch(this.getSettings_().endingEnd){case Px:g=A,I=2*t-i;break;case Jx:g=1,I=t+o[1]-o[0];break;default:g=A-1,I=i}const _=(t-i)*.5,p=this.valueSize;this._weightPrev=_/(i-a),this._weightNext=_/(I-t),this._offsetPrev=s*p,this._offsetNext=g*p}interpolate_(A,i,t,o){const s=this.resultBuffer,g=this.sampleValues,a=this.valueSize,I=A*a,_=I-a,p=this._offsetPrev,B=this._offsetNext,l=this._weightPrev,Q=this._weightNext,h=(t-i)/(o-i),y=h*h,u=y*h,E=-l*u+2*l*y-l*h,f=(1+l)*u+(-1.5-2*l)*y+(-.5+l)*h+1,m=(-1-Q)*u+(1.5+Q)*y+.5*h,D=Q*u-Q*y;for(let L=0;L!==a;++L)s[L]=E*g[p+L]+f*g[_+L]+m*g[I+L]+D*g[B+L];return s}}class zW extends sI{constructor(A,i,t,o){super(A,i,t,o)}interpolate_(A,i,t,o){const s=this.resultBuffer,g=this.sampleValues,a=this.valueSize,I=A*a,_=I-a,p=(t-i)/(o-i),B=1-p;for(let l=0;l!==a;++l)s[l]=g[_+l]*B+g[I+l]*p;return s}}class ZW extends sI{constructor(A,i,t,o){super(A,i,t,o)}interpolate_(A){return this.copySampleValue_(A-1)}}class vr{constructor(A,i,t,o){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=nC(i,this.TimeBufferType),this.values=nC(t,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(A){const i=A.constructor;let t;if(i.toJSON!==this.toJSON)t=i.toJSON(A);else{t={name:A.name,times:nC(A.times,Array),values:nC(A.values,Array)};const o=A.getInterpolation();o!==A.DefaultInterpolation&&(t.interpolation=o)}return t.type=A.ValueTypeName,t}InterpolantFactoryMethodDiscrete(A){return new ZW(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new zW(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new WW(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let i;switch(A){case za:i=this.InterpolantFactoryMethodDiscrete;break;case Za:i=this.InterpolantFactoryMethodLinear;break;case r_:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return r_}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const i=this.times;for(let t=0,o=i.length;t!==o;++t)i[t]+=A}return this}scale(A){if(A!==1){const i=this.times;for(let t=0,o=i.length;t!==o;++t)i[t]*=A}return this}trim(A,i){const t=this.times,o=t.length;let s=0,g=o-1;for(;s!==o&&t[s]<A;)++s;for(;g!==-1&&t[g]>i;)--g;if(++g,s!==0||g!==o){s>=g&&(g=Math.max(g,1),s=g-1);const a=this.getValueSize();this.times=t.slice(s,g),this.values=this.values.slice(s*a,g*a)}return this}validate(){let A=!0;const i=this.getValueSize();i-Math.floor(i)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const t=this.times,o=this.values,s=t.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let g=null;for(let a=0;a!==s;a++){const I=t[a];if(typeof I=="number"&&isNaN(I)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,I),A=!1;break}if(g!==null&&g>I){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,I,g),A=!1;break}g=I}if(o!==void 0&&jW(o))for(let a=0,I=o.length;a!==I;++a){const _=o[a];if(isNaN(_)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,_),A=!1;break}}return A}optimize(){const A=this.times.slice(),i=this.values.slice(),t=this.getValueSize(),o=this.getInterpolation()===r_,s=A.length-1;let g=1;for(let a=1;a<s;++a){let I=!1;const _=A[a],p=A[a+1];if(_!==p&&(a!==1||_!==A[0]))if(o)I=!0;else{const B=a*t,l=B-t,Q=B+t;for(let h=0;h!==t;++h){const y=i[B+h];if(y!==i[l+h]||y!==i[Q+h]){I=!0;break}}}if(I){if(a!==g){A[g]=A[a];const B=a*t,l=g*t;for(let Q=0;Q!==t;++Q)i[l+Q]=i[B+Q]}++g}}if(s>0){A[g]=A[s];for(let a=s*t,I=g*t,_=0;_!==t;++_)i[I+_]=i[a+_];++g}return g!==A.length?(this.times=A.slice(0,g),this.values=i.slice(0,g*t)):(this.times=A,this.values=i),this}clone(){const A=this.times.slice(),i=this.values.slice(),t=this.constructor,o=new t(this.name,A,i);return o.createInterpolant=this.createInterpolant,o}}vr.prototype.TimeBufferType=Float32Array;vr.prototype.ValueBufferType=Float32Array;vr.prototype.DefaultInterpolation=Za;class Hg extends vr{constructor(A,i,t){super(A,i,t)}}Hg.prototype.ValueTypeName="bool";Hg.prototype.ValueBufferType=Array;Hg.prototype.DefaultInterpolation=za;Hg.prototype.InterpolantFactoryMethodLinear=void 0;Hg.prototype.InterpolantFactoryMethodSmooth=void 0;class QP extends vr{}QP.prototype.ValueTypeName="color";class ms extends vr{}ms.prototype.ValueTypeName="number";class XW extends sI{constructor(A,i,t,o){super(A,i,t,o)}interpolate_(A,i,t,o){const s=this.resultBuffer,g=this.sampleValues,a=this.valueSize,I=(t-i)/(o-i);let _=A*a;for(let p=_+a;_!==p;_+=4)kn.slerpFlat(s,0,g,_-a,g,_,I);return s}}class Ds extends vr{InterpolantFactoryMethodLinear(A){return new XW(this.times,this.values,this.getValueSize(),A)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Kg extends vr{constructor(A,i,t){super(A,i,t)}}Kg.prototype.ValueTypeName="string";Kg.prototype.ValueBufferType=Array;Kg.prototype.DefaultInterpolation=za;Kg.prototype.InterpolantFactoryMethodLinear=void 0;Kg.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends vr{}Ss.prototype.ValueTypeName="vector";class dP{constructor(A="",i=-1,t=[],o=$O){this.name=A,this.tracks=t,this.duration=i,this.blendMode=o,this.uuid=ar(),this.duration<0&&this.resetDuration()}static parse(A){const i=[],t=A.tracks,o=1/(A.fps||1);for(let g=0,a=t.length;g!==a;++g)i.push(A8(t[g]).scale(o));const s=new this(A.name,A.duration,i,A.blendMode);return s.uuid=A.uuid,s}static toJSON(A){const i=[],t=A.tracks,o={name:A.name,duration:A.duration,tracks:i,uuid:A.uuid,blendMode:A.blendMode};for(let s=0,g=t.length;s!==g;++s)i.push(vr.toJSON(t[s]));return o}static CreateFromMorphTargetSequence(A,i,t,o){const s=i.length,g=[];for(let a=0;a<s;a++){let I=[],_=[];I.push((a+s-1)%s,a,(a+1)%s),_.push(0,1,0);const p=VW(I);I=$k(I,1,p),_=$k(_,1,p),!o&&I[0]===0&&(I.push(s),_.push(_[0])),g.push(new ms(".morphTargetInfluences["+i[a].name+"]",I,_).scale(1/t))}return new this(A,-1,g)}static findByName(A,i){let t=A;if(!Array.isArray(A)){const o=A;t=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<t.length;o++)if(t[o].name===i)return t[o];return null}static CreateClipsFromMorphTargetSequences(A,i,t){const o={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,I=A.length;a<I;a++){const _=A[a],p=_.name.match(s);if(p&&p.length>1){const B=p[1];let l=o[B];l||(o[B]=l=[]),l.push(_)}}const g=[];for(const a in o)g.push(this.CreateFromMorphTargetSequence(a,o[a],i,t));return g}static parseAnimation(A,i){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const t=function(B,l,Q,h,y){if(Q.length!==0){const u=[],E=[];EP(Q,u,E,h),u.length!==0&&y.push(new B(l,u,E))}},o=[],s=A.name||"default",g=A.fps||30,a=A.blendMode;let I=A.length||-1;const _=A.hierarchy||[];for(let B=0;B<_.length;B++){const l=_[B].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const Q={};let h;for(h=0;h<l.length;h++)if(l[h].morphTargets)for(let y=0;y<l[h].morphTargets.length;y++)Q[l[h].morphTargets[y]]=-1;for(const y in Q){const u=[],E=[];for(let f=0;f!==l[h].morphTargets.length;++f){const m=l[h];u.push(m.time),E.push(m.morphTarget===y?1:0)}o.push(new ms(".morphTargetInfluence["+y+"]",u,E))}I=Q.length*g}else{const Q=".bones["+i[B].name+"]";t(Ss,Q+".position",l,"pos",o),t(Ds,Q+".quaternion",l,"rot",o),t(Ss,Q+".scale",l,"scl",o)}}return o.length===0?null:new this(s,I,o,a)}resetDuration(){const A=this.tracks;let i=0;for(let t=0,o=A.length;t!==o;++t){const s=this.tracks[t];i=Math.max(i,s.times[s.times.length-1])}return this.duration=i,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let i=0;i<this.tracks.length;i++)A=A&&this.tracks[i].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let i=0;i<this.tracks.length;i++)A.push(this.tracks[i].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $W(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return QP;case"quaternion":return Ds;case"bool":case"boolean":return Hg;case"string":return Kg}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function A8(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=$W(n.type);if(n.times===void 0){const i=[],t=[];EP(n.keys,i,t,"value"),n.times=i,n.values=t}return A.parse!==void 0?A.parse(n):new A(n.name,n.times,n.values,n.interpolation)}const bo={enabled:!1,files:{},add:function(n,A){this.enabled!==!1&&(this.files[n]=A)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class e8{constructor(A,i,t){const o=this;let s=!1,g=0,a=0,I;const _=[];this.onStart=void 0,this.onLoad=A,this.onProgress=i,this.onError=t,this.itemStart=function(p){a++,s===!1&&o.onStart!==void 0&&o.onStart(p,g,a),s=!0},this.itemEnd=function(p){g++,o.onProgress!==void 0&&o.onProgress(p,g,a),g===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return I?I(p):p},this.setURLModifier=function(p){return I=p,this},this.addHandler=function(p,B){return _.push(p,B),this},this.removeHandler=function(p){const B=_.indexOf(p);return B!==-1&&_.splice(B,2),this},this.getHandler=function(p){for(let B=0,l=_.length;B<l;B+=2){const Q=_[B],h=_[B+1];if(Q.global&&(Q.lastIndex=0),Q.test(p))return h}return null}}}const t8=new e8;class Rs{constructor(A){this.manager=A!==void 0?A:t8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,i){const t=this;return new Promise(function(o,s){t.load(A,o,i,s)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pr={};class i8 extends Error{constructor(A,i){super(A),this.response=i}}class ql extends Rs{constructor(A){super(A)}load(A,i,t,o){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const s=bo.get(A);if(s!==void 0)return this.manager.itemStart(A),setTimeout(()=>{i&&i(s),this.manager.itemEnd(A)},0),s;if(Pr[A]!==void 0){Pr[A].push({onLoad:i,onProgress:t,onError:o});return}Pr[A]=[],Pr[A].push({onLoad:i,onProgress:t,onError:o});const g=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,I=this.responseType;fetch(g).then(_=>{if(_.status===200||_.status===0){if(_.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||_.body===void 0||_.body.getReader===void 0)return _;const p=Pr[A],B=_.body.getReader(),l=_.headers.get("X-File-Size")||_.headers.get("Content-Length"),Q=l?parseInt(l):0,h=Q!==0;let y=0;const u=new ReadableStream({start(E){f();function f(){B.read().then(({done:m,value:D})=>{if(m)E.close();else{y+=D.byteLength;const L=new ProgressEvent("progress",{lengthComputable:h,loaded:y,total:Q});for(let v=0,N=p.length;v<N;v++){const U=p[v];U.onProgress&&U.onProgress(L)}E.enqueue(D),f()}},m=>{E.error(m)})}}});return new Response(u)}else throw new i8(`fetch for "${_.url}" responded with ${_.status}: ${_.statusText}`,_)}).then(_=>{switch(I){case"arraybuffer":return _.arrayBuffer();case"blob":return _.blob();case"document":return _.text().then(p=>new DOMParser().parseFromString(p,a));case"json":return _.json();default:if(a===void 0)return _.text();{const B=/charset="?([^;"\s]*)"?/i.exec(a),l=B&&B[1]?B[1].toLowerCase():void 0,Q=new TextDecoder(l);return _.arrayBuffer().then(h=>Q.decode(h))}}}).then(_=>{bo.add(A,_);const p=Pr[A];delete Pr[A];for(let B=0,l=p.length;B<l;B++){const Q=p[B];Q.onLoad&&Q.onLoad(_)}}).catch(_=>{const p=Pr[A];if(p===void 0)throw this.manager.itemError(A),_;delete Pr[A];for(let B=0,l=p.length;B<l;B++){const Q=p[B];Q.onError&&Q.onError(_)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class n8 extends Rs{constructor(A){super(A)}load(A,i,t,o){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const s=this,g=bo.get(A);if(g!==void 0)return s.manager.itemStart(A),setTimeout(function(){i&&i(g),s.manager.itemEnd(A)},0),g;const a=Xa("img");function I(){p(),bo.add(A,this),i&&i(this),s.manager.itemEnd(A)}function _(B){p(),o&&o(B),s.manager.itemError(A),s.manager.itemEnd(A)}function p(){a.removeEventListener("load",I,!1),a.removeEventListener("error",_,!1)}return a.addEventListener("load",I,!1),a.addEventListener("error",_,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(A),a.src=A,a}}class hP extends Rs{constructor(A){super(A)}load(A,i,t,o){const s=new ti,g=new n8(this.manager);return g.setCrossOrigin(this.crossOrigin),g.setPath(this.path),g.load(A,function(a){s.image=a,s.needsUpdate=!0,i!==void 0&&i(s)},t,o),s}}class vc extends ft{constructor(A,i=1){super(),this.isLight=!0,this.type="Light",this.color=new te(A),this.intensity=i}dispose(){}copy(A,i){return super.copy(A,i),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const i=super.toJSON(A);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const G_=new jA,AH=new k,eH=new k;class jl{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new jA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const i=this.camera,t=this.matrix;AH.setFromMatrixPosition(A.matrixWorld),i.position.copy(AH),eH.setFromMatrixPosition(A.target.matrixWorld),i.lookAt(eH),i.updateMatrixWorld(),G_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G_),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(G_)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class r8 extends jl{constructor(){super(new Pi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const i=this.camera,t=bg*2*A.angle*this.focus,o=this.mapSize.width/this.mapSize.height,s=A.distance||i.far;(t!==i.fov||o!==i.aspect||s!==i.far)&&(i.fov=t,i.aspect=o,i.far=s,i.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class uP extends vc{constructor(A,i,t=0,o=Math.PI/3,s=0,g=2){super(A,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=t,this.angle=o,this.penumbra=s,this.decay=g,this.map=null,this.shadow=new r8}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,i){return super.copy(A,i),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const tH=new jA,Ca=new k,x_=new k;class o8 extends jl{constructor(){super(new Pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(A,i=0){const t=this.camera,o=this.matrix,s=A.distance||t.far;s!==t.far&&(t.far=s,t.updateProjectionMatrix()),Ca.setFromMatrixPosition(A.matrixWorld),t.position.copy(Ca),x_.copy(t.position),x_.add(this._cubeDirections[i]),t.up.copy(this._cubeUps[i]),t.lookAt(x_),t.updateMatrixWorld(),o.makeTranslation(-Ca.x,-Ca.y,-Ca.z),tH.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tH)}}class MB extends vc{constructor(A,i,t=0,o=2){super(A,i),this.isPointLight=!0,this.type="PointLight",this.distance=t,this.decay=o,this.shadow=new o8}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,i){return super.copy(A,i),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class s8 extends jl{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fP extends vc{constructor(A,i){super(A,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new s8}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class g8 extends vc{constructor(A,i){super(A,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lg{static decodeText(A){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(A);let i="";for(let t=0,o=A.length;t<o;t++)i+=String.fromCharCode(A[t]);try{return decodeURIComponent(escape(i))}catch{return i}}static extractUrlBase(A){const i=A.lastIndexOf("/");return i===-1?"./":A.slice(0,i+1)}static resolveURL(A,i){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(i)&&/^\//.test(A)&&(i=i.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:i+A)}}class a8 extends si{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(A){return super.copy(A),this.instanceCount=A.instanceCount,this}toJSON(){const A=super.toJSON();return A.instanceCount=this.instanceCount,A.isInstancedBufferGeometry=!0,A}}class I8 extends Rs{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,i,t,o){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const s=this,g=bo.get(A);if(g!==void 0){if(s.manager.itemStart(A),g.then){g.then(_=>{i&&i(_),s.manager.itemEnd(A)}).catch(_=>{o&&o(_)});return}return setTimeout(function(){i&&i(g),s.manager.itemEnd(A)},0),g}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const I=fetch(A,a).then(function(_){return _.blob()}).then(function(_){return createImageBitmap(_,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(_){return bo.add(A,_),i&&i(_),s.manager.itemEnd(A),_}).catch(function(_){o&&o(_),bo.remove(A),s.manager.itemError(A),s.manager.itemEnd(A)});bo.add(A,I),s.manager.itemStart(A)}}class Cz{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iH(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=iH();A=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=A}return A}}function iH(){return performance.now()}const Vl="\\[\\]\\.:\\/",C8=new RegExp("["+Vl+"]","g"),Wl="[^"+Vl+"]",c8="[^"+Vl.replace("\\.","")+"]",_8=/((?:WC+[\/:])*)/.source.replace("WC",Wl),p8=/(WCOD+)?/.source.replace("WCOD",c8),B8=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),l8=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),E8=new RegExp("^"+_8+p8+B8+l8+"$"),Q8=["material","materials","bones","map"];class d8{constructor(A,i,t){const o=t||et.parseTrackName(i);this._targetGroup=A,this._bindings=A.subscribe_(i,o)}getValue(A,i){this.bind();const t=this._targetGroup.nCachedObjects_,o=this._bindings[t];o!==void 0&&o.getValue(A,i)}setValue(A,i){const t=this._bindings;for(let o=this._targetGroup.nCachedObjects_,s=t.length;o!==s;++o)t[o].setValue(A,i)}bind(){const A=this._bindings;for(let i=this._targetGroup.nCachedObjects_,t=A.length;i!==t;++i)A[i].bind()}unbind(){const A=this._bindings;for(let i=this._targetGroup.nCachedObjects_,t=A.length;i!==t;++i)A[i].unbind()}}class et{constructor(A,i,t){this.path=i,this.parsedPath=t||et.parseTrackName(i),this.node=et.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,i,t){return A&&A.isAnimationObjectGroup?new et.Composite(A,i,t):new et(A,i,t)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(C8,"")}static parseTrackName(A){const i=E8.exec(A);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const t={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=t.nodeName&&t.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const s=t.nodeName.substring(o+1);Q8.indexOf(s)!==-1&&(t.nodeName=t.nodeName.substring(0,o),t.objectName=s)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return t}static findNode(A,i){if(i===void 0||i===""||i==="."||i===-1||i===A.name||i===A.uuid)return A;if(A.skeleton){const t=A.skeleton.getBoneByName(i);if(t!==void 0)return t}if(A.children){const t=function(s){for(let g=0;g<s.length;g++){const a=s[g];if(a.name===i||a.uuid===i)return a;const I=t(a.children);if(I)return I}return null},o=t(A.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,i){A[i]=this.targetObject[this.propertyName]}_getValue_array(A,i){const t=this.resolvedProperty;for(let o=0,s=t.length;o!==s;++o)A[i++]=t[o]}_getValue_arrayElement(A,i){A[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,i){this.resolvedProperty.toArray(A,i)}_setValue_direct(A,i){this.targetObject[this.propertyName]=A[i]}_setValue_direct_setNeedsUpdate(A,i){this.targetObject[this.propertyName]=A[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,i){this.targetObject[this.propertyName]=A[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,i){const t=this.resolvedProperty;for(let o=0,s=t.length;o!==s;++o)t[o]=A[i++]}_setValue_array_setNeedsUpdate(A,i){const t=this.resolvedProperty;for(let o=0,s=t.length;o!==s;++o)t[o]=A[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,i){const t=this.resolvedProperty;for(let o=0,s=t.length;o!==s;++o)t[o]=A[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,i){this.resolvedProperty[this.propertyIndex]=A[i]}_setValue_arrayElement_setNeedsUpdate(A,i){this.resolvedProperty[this.propertyIndex]=A[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,i){this.resolvedProperty[this.propertyIndex]=A[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,i){this.resolvedProperty.fromArray(A,i)}_setValue_fromArray_setNeedsUpdate(A,i){this.resolvedProperty.fromArray(A,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,i){this.resolvedProperty.fromArray(A,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,i){this.bind(),this.getValue(A,i)}_setValue_unbound(A,i){this.bind(),this.setValue(A,i)}bind(){let A=this.node;const i=this.parsedPath,t=i.objectName,o=i.propertyName;let s=i.propertyIndex;if(A||(A=et.findNode(this.rootNode,i.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(t){let _=i.objectIndex;switch(t){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let p=0;p<A.length;p++)if(A[p].name===_){_=p;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[t]}if(_!==void 0){if(A[_]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[_]}}const g=A[o];if(g===void 0){const _=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+_+"."+o+" but it wasn't found.",A);return}let a=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let I=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[s]!==void 0&&(s=A.morphTargetDictionary[s])}I=this.BindingType.ArrayElement,this.resolvedProperty=g,this.propertyIndex=s}else g.fromArray!==void 0&&g.toArray!==void 0?(I=this.BindingType.HasFromToArray,this.resolvedProperty=g):Array.isArray(g)?(I=this.BindingType.EntireArray,this.resolvedProperty=g):this.propertyName=o;this.getValue=this.GetterByBindingType[I],this.setValue=this.SetterByBindingTypeAndVersioning[I][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=d8;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class RB extends cP{constructor(A,i,t=1){super(A,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}clone(A){const i=super.clone(A);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(A){const i=super.toJSON(A);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const nH=new jA;class cz{constructor(A,i,t=0,o=1/0){this.ray=new rI(A,i),this.near=t,this.far=o,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,i){this.ray.set(A,i)}setFromCamera(A,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(A){return nH.identity().extractRotation(A.matrixWorld),this.ray.origin.setFromMatrixPosition(A.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nH),this}intersectObject(A,i=!0,t=[]){return bB(A,this,t,i),t.sort(rH),t}intersectObjects(A,i=!0,t=[]){for(let o=0,s=A.length;o<s;o++)bB(A[o],this,t,i);return t.sort(rH),t}}function rH(n,A){return n.distance-A.distance}function bB(n,A,i,t){let o=!0;if(n.layers.test(A.layers)&&n.raycast(A,i)===!1&&(o=!1),o===!0&&t===!0){const s=n.children;for(let g=0,a=s.length;g<a;g++)bB(s[g],A,i,!0)}}class _z{constructor(A=1,i=0,t=0){return this.radius=A,this.phi=i,this.theta=t,this}set(A,i,t){return this.radius=A,this.phi=i,this.theta=t,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,i,t){return this.radius=Math.sqrt(A*A+i*i+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(Ai(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const oH=new k,rC=new k;class h8{constructor(A=new k,i=new k){this.start=A,this.end=i}set(A,i){return this.start.copy(A),this.end.copy(i),this}copy(A){return this.start.copy(A.start),this.end.copy(A.end),this}getCenter(A){return A.addVectors(this.start,this.end).multiplyScalar(.5)}delta(A){return A.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(A,i){return this.delta(i).multiplyScalar(A).add(this.start)}closestPointToPointParameter(A,i){oH.subVectors(A,this.start),rC.subVectors(this.end,this.start);const t=rC.dot(rC);let s=rC.dot(oH)/t;return i&&(s=Ai(s,0,1)),s}closestPointToPoint(A,i,t){const o=this.closestPointToPointParameter(A,i);return this.delta(t).multiplyScalar(o).add(this.start)}applyMatrix4(A){return this.start.applyMatrix4(A),this.end.applyMatrix4(A),this}equals(A){return A.start.equals(this.start)&&A.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);const yP=parseInt(uc.replace(/\D+/g,"")),u8=yP>=125?"uv1":"uv2";function sH(n,A){if(A===AY)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(A===yB||A===z1){let i=n.getIndex();if(i===null){const g=[],a=n.getAttribute("position");if(a!==void 0){for(let I=0;I<a.count;I++)g.push(I);n.setIndex(g),i=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const t=i.count-2,o=[];if(i)if(A===yB)for(let g=1;g<=t;g++)o.push(i.getX(0)),o.push(i.getX(g)),o.push(i.getX(g+1));else for(let g=0;g<t;g++)g%2===0?(o.push(i.getX(g)),o.push(i.getX(g+1)),o.push(i.getX(g+2))):(o.push(i.getX(g+2)),o.push(i.getX(g+1)),o.push(i.getX(g)));o.length/3!==t&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(o),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),n}var Un=Uint8Array,vo=Uint16Array,vB=Uint32Array,mP=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),DP=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),f8=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SP=function(n,A){for(var i=new vo(31),t=0;t<31;++t)i[t]=A+=1<<n[t-1];for(var o=new vB(i[30]),t=1;t<30;++t)for(var s=i[t];s<i[t+1];++s)o[s]=s-i[t]<<5|t;return[i,o]},wP=SP(mP,2),MP=wP[0],y8=wP[1];MP[28]=258,y8[258]=28;var m8=SP(DP,0),D8=m8[0],NB=new vo(32768);for(var Rt=0;Rt<32768;++Rt){var ho=(Rt&43690)>>>1|(Rt&21845)<<1;ho=(ho&52428)>>>2|(ho&13107)<<2,ho=(ho&61680)>>>4|(ho&3855)<<4,NB[Rt]=((ho&65280)>>>8|(ho&255)<<8)>>>1}var va=function(n,A,i){for(var t=n.length,o=0,s=new vo(A);o<t;++o)++s[n[o]-1];var g=new vo(A);for(o=0;o<A;++o)g[o]=g[o-1]+s[o-1]<<1;var a;if(i){a=new vo(1<<A);var I=15-A;for(o=0;o<t;++o)if(n[o])for(var _=o<<4|n[o],p=A-n[o],B=g[n[o]-1]++<<p,l=B|(1<<p)-1;B<=l;++B)a[NB[B]>>>I]=_}else for(a=new vo(t),o=0;o<t;++o)n[o]&&(a[o]=NB[g[n[o]-1]++]>>>15-n[o]);return a},gI=new Un(288);for(var Rt=0;Rt<144;++Rt)gI[Rt]=8;for(var Rt=144;Rt<256;++Rt)gI[Rt]=9;for(var Rt=256;Rt<280;++Rt)gI[Rt]=7;for(var Rt=280;Rt<288;++Rt)gI[Rt]=8;var RP=new Un(32);for(var Rt=0;Rt<32;++Rt)RP[Rt]=5;var S8=va(gI,9,1),w8=va(RP,5,1),k_=function(n){for(var A=n[0],i=1;i<n.length;++i)n[i]>A&&(A=n[i]);return A},Ar=function(n,A,i){var t=A/8|0;return(n[t]|n[t+1]<<8)>>(A&7)&i},H_=function(n,A){var i=A/8|0;return(n[i]|n[i+1]<<8|n[i+2]<<16)>>(A&7)},M8=function(n){return(n/8|0)+(n&7&&1)},R8=function(n,A,i){(i==null||i>n.length)&&(i=n.length);var t=new(n instanceof vo?vo:n instanceof vB?vB:Un)(i-A);return t.set(n.subarray(A,i)),t},b8=function(n,A,i){var t=n.length;if(!t||i&&!i.l&&t<5)return A||new Un(0);var o=!A||i,s=!i||i.i;i||(i={}),A||(A=new Un(t*3));var g=function(TA){var MA=A.length;if(TA>MA){var re=new Un(Math.max(MA*2,TA));re.set(A),A=re}},a=i.f||0,I=i.p||0,_=i.b||0,p=i.l,B=i.d,l=i.m,Q=i.n,h=t*8;do{if(!p){i.f=a=Ar(n,I,1);var y=Ar(n,I+1,3);if(I+=3,y)if(y==1)p=S8,B=w8,l=9,Q=5;else if(y==2){var m=Ar(n,I,31)+257,D=Ar(n,I+10,15)+4,L=m+Ar(n,I+5,31)+1;I+=14;for(var v=new Un(L),N=new Un(19),U=0;U<D;++U)N[f8[U]]=Ar(n,I+U*3,7);I+=D*3;for(var b=k_(N),S=(1<<b)-1,G=va(N,b,1),U=0;U<L;){var nA=G[Ar(n,I,S)];I+=nA&15;var u=nA>>>4;if(u<16)v[U++]=u;else{var X=0,gA=0;for(u==16?(gA=3+Ar(n,I,3),I+=2,X=v[U-1]):u==17?(gA=3+Ar(n,I,7),I+=3):u==18&&(gA=11+Ar(n,I,127),I+=7);gA--;)v[U++]=X}}var EA=v.subarray(0,m),tA=v.subarray(m);l=k_(EA),Q=k_(tA),p=va(EA,l,1),B=va(tA,Q,1)}else throw"invalid block type";else{var u=M8(I)+4,E=n[u-4]|n[u-3]<<8,f=u+E;if(f>t){if(s)throw"unexpected EOF";break}o&&g(_+E),A.set(n.subarray(u,f),_),i.b=_+=E,i.p=I=f*8;continue}if(I>h){if(s)throw"unexpected EOF";break}}o&&g(_+131072);for(var fA=(1<<l)-1,H=(1<<Q)-1,oA=I;;oA=I){var X=p[H_(n,I)&fA],pA=X>>>4;if(I+=X&15,I>h){if(s)throw"unexpected EOF";break}if(!X)throw"invalid length/literal";if(pA<256)A[_++]=pA;else if(pA==256){oA=I,p=null;break}else{var bA=pA-254;if(pA>264){var U=pA-257,OA=mP[U];bA=Ar(n,I,(1<<OA)-1)+MP[U],I+=OA}var Ne=B[H_(n,I)&H],rA=Ne>>>4;if(!Ne)throw"invalid distance";I+=Ne&15;var tA=D8[rA];if(rA>3){var OA=DP[rA];tA+=H_(n,I)&(1<<OA)-1,I+=OA}if(I>h){if(s)throw"unexpected EOF";break}o&&g(_+131072);for(var uA=_+bA;_<uA;_+=4)A[_]=A[_-tA],A[_+1]=A[_+1-tA],A[_+2]=A[_+2-tA],A[_+3]=A[_+3-tA];_=uA}}i.l=p,i.p=oA,i.b=_,p&&(a=1,i.m=l,i.d=B,i.n=Q)}while(!a);return _==A.length?A:R8(A,0,_)},v8=new Un(0),N8=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function F8(n,A){return b8((N8(n),n.subarray(2,-4)),A)}var L8=typeof TextDecoder<"u"&&new TextDecoder,U8=0;try{L8.decode(v8,{stream:!0}),U8=1}catch{}function Ng(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let A="";for(let i=0,t=n.length;i<t;i++)A+=String.fromCharCode(n[i]);try{return decodeURIComponent(escape(A))}catch{return A}}const _s="srgb",eo="srgb-linear",gH=3001,T8=3e3;class pz extends Rs{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new K8(i)}),this.register(function(i){return new P8(i)}),this.register(function(i){return new Z8(i)}),this.register(function(i){return new X8(i)}),this.register(function(i){return new $8(i)}),this.register(function(i){return new O8(i)}),this.register(function(i){return new Y8(i)}),this.register(function(i){return new q8(i)}),this.register(function(i){return new j8(i)}),this.register(function(i){return new H8(i)}),this.register(function(i){return new V8(i)}),this.register(function(i){return new J8(i)}),this.register(function(i){return new z8(i)}),this.register(function(i){return new W8(i)}),this.register(function(i){return new x8(i)}),this.register(function(i){return new A4(i)}),this.register(function(i){return new e4(i)})}load(A,i,t,o){const s=this;let g;if(this.resourcePath!=="")g=this.resourcePath;else if(this.path!==""){const _=lg.extractUrlBase(A);g=lg.resolveURL(_,this.path)}else g=lg.extractUrlBase(A);this.manager.itemStart(A);const a=function(_){o?o(_):console.error(_),s.manager.itemError(A),s.manager.itemEnd(A)},I=new ql(this.manager);I.setPath(this.path),I.setResponseType("arraybuffer"),I.setRequestHeader(this.requestHeader),I.setWithCredentials(this.withCredentials),I.load(A,function(_){try{s.parse(_,g,function(p){i(p),s.manager.itemEnd(A)},a)}catch(p){a(p)}},t,a)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,i,t,o){let s;const g={},a={};if(typeof A=="string")s=JSON.parse(A);else if(A instanceof ArrayBuffer)if(Ng(new Uint8Array(A.slice(0,4)))===bP){try{g[Oe.KHR_BINARY_GLTF]=new t4(A)}catch(p){o&&o(p);return}s=JSON.parse(g[Oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(Ng(new Uint8Array(A)));else s=A;if(s.asset===void 0||s.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const I=new B4(s,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});I.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const p=this.pluginCallbacks[_](I);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[p.name]=p,g[p.name]=!0}if(s.extensionsUsed)for(let _=0;_<s.extensionsUsed.length;++_){const p=s.extensionsUsed[_],B=s.extensionsRequired||[];switch(p){case Oe.KHR_MATERIALS_UNLIT:g[p]=new k8;break;case Oe.KHR_DRACO_MESH_COMPRESSION:g[p]=new i4(s,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:g[p]=new n4;break;case Oe.KHR_MESH_QUANTIZATION:g[p]=new r4;break;default:B.indexOf(p)>=0&&a[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}I.setExtensions(g),I.setPlugins(a),I.parse(t,o)}parseAsync(A,i){const t=this;return new Promise(function(o,s){t.parse(A,i,o,s)})}}function G8(){let n={};return{get:function(A){return n[A]},add:function(A,i){n[A]=i},remove:function(A){delete n[A]},removeAll:function(){n={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class x8{constructor(A){this.parser=A,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,i=this.parser.json.nodes||[];for(let t=0,o=i.length;t<o;t++){const s=i[t];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(A){const i=this.parser,t="light:"+A;let o=i.cache.get(t);if(o)return o;const s=i.json,I=((s.extensions&&s.extensions[this.name]||{}).lights||[])[A];let _;const p=new te(16777215);I.color!==void 0&&p.setRGB(I.color[0],I.color[1],I.color[2],eo);const B=I.range!==void 0?I.range:0;switch(I.type){case"directional":_=new fP(p),_.target.position.set(0,0,-1),_.add(_.target);break;case"point":_=new MB(p),_.distance=B;break;case"spot":_=new uP(p),_.distance=B,I.spot=I.spot||{},I.spot.innerConeAngle=I.spot.innerConeAngle!==void 0?I.spot.innerConeAngle:0,I.spot.outerConeAngle=I.spot.outerConeAngle!==void 0?I.spot.outerConeAngle:Math.PI/4,_.angle=I.spot.outerConeAngle,_.penumbra=1-I.spot.innerConeAngle/I.spot.outerConeAngle,_.target.position.set(0,0,-1),_.add(_.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+I.type)}return _.position.set(0,0,0),_.decay=2,Yr(_,I),I.intensity!==void 0&&(_.intensity=I.intensity),_.name=i.createUniqueName(I.name||"light_"+A),o=Promise.resolve(_),i.cache.add(t,o),o}getDependency(A,i){if(A==="light")return this._loadLight(i)}createNodeAttachment(A){const i=this,t=this.parser,s=t.json.nodes[A],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(I){return t._getNodeRef(i.cache,a,I)})}}class k8{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Zr}extendParams(A,i,t){const o=[];A.color=new te(1,1,1),A.opacity=1;const s=i.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const g=s.baseColorFactor;A.color.setRGB(g[0],g[1],g[2],eo),A.opacity=g[3]}s.baseColorTexture!==void 0&&o.push(t.assignTexture(A,"map",s.baseColorTexture,_s))}return Promise.all(o)}}class H8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,i){const o=this.parser.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name].emissiveStrength;return s!==void 0&&(i.emissiveIntensity=s),Promise.resolve()}}class K8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];if(g.clearcoatFactor!==void 0&&(i.clearcoat=g.clearcoatFactor),g.clearcoatTexture!==void 0&&s.push(t.assignTexture(i,"clearcoatMap",g.clearcoatTexture)),g.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=g.clearcoatRoughnessFactor),g.clearcoatRoughnessTexture!==void 0&&s.push(t.assignTexture(i,"clearcoatRoughnessMap",g.clearcoatRoughnessTexture)),g.clearcoatNormalTexture!==void 0&&(s.push(t.assignTexture(i,"clearcoatNormalMap",g.clearcoatNormalTexture)),g.clearcoatNormalTexture.scale!==void 0)){const a=g.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new Ke(a,a)}return Promise.all(s)}}class P8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const o=this.parser.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return i.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class J8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];return g.iridescenceFactor!==void 0&&(i.iridescence=g.iridescenceFactor),g.iridescenceTexture!==void 0&&s.push(t.assignTexture(i,"iridescenceMap",g.iridescenceTexture)),g.iridescenceIor!==void 0&&(i.iridescenceIOR=g.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),g.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=g.iridescenceThicknessMinimum),g.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=g.iridescenceThicknessMaximum),g.iridescenceThicknessTexture!==void 0&&s.push(t.assignTexture(i,"iridescenceThicknessMap",g.iridescenceThicknessTexture)),Promise.all(s)}}class O8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[];i.sheenColor=new te(0,0,0),i.sheenRoughness=0,i.sheen=1;const g=o.extensions[this.name];if(g.sheenColorFactor!==void 0){const a=g.sheenColorFactor;i.sheenColor.setRGB(a[0],a[1],a[2],eo)}return g.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=g.sheenRoughnessFactor),g.sheenColorTexture!==void 0&&s.push(t.assignTexture(i,"sheenColorMap",g.sheenColorTexture,_s)),g.sheenRoughnessTexture!==void 0&&s.push(t.assignTexture(i,"sheenRoughnessMap",g.sheenRoughnessTexture)),Promise.all(s)}}class Y8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];return g.transmissionFactor!==void 0&&(i.transmission=g.transmissionFactor),g.transmissionTexture!==void 0&&s.push(t.assignTexture(i,"transmissionMap",g.transmissionTexture)),Promise.all(s)}}class q8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];i.thickness=g.thicknessFactor!==void 0?g.thicknessFactor:0,g.thicknessTexture!==void 0&&s.push(t.assignTexture(i,"thicknessMap",g.thicknessTexture)),i.attenuationDistance=g.attenuationDistance||1/0;const a=g.attenuationColor||[1,1,1];return i.attenuationColor=new te().setRGB(a[0],a[1],a[2],eo),Promise.all(s)}}class j8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const o=this.parser.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return i.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class V8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];i.specularIntensity=g.specularFactor!==void 0?g.specularFactor:1,g.specularTexture!==void 0&&s.push(t.assignTexture(i,"specularIntensityMap",g.specularTexture));const a=g.specularColorFactor||[1,1,1];return i.specularColor=new te().setRGB(a[0],a[1],a[2],eo),g.specularColorTexture!==void 0&&s.push(t.assignTexture(i,"specularColorMap",g.specularColorTexture,_s)),Promise.all(s)}}class W8{constructor(A){this.parser=A,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];return i.bumpScale=g.bumpFactor!==void 0?g.bumpFactor:1,g.bumpTexture!==void 0&&s.push(t.assignTexture(i,"bumpMap",g.bumpTexture)),Promise.all(s)}}class z8{constructor(A){this.parser=A,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const t=this.parser.json.materials[A];return!t.extensions||!t.extensions[this.name]?null:br}extendMaterialParams(A,i){const t=this.parser,o=t.json.materials[A];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],g=o.extensions[this.name];return g.anisotropyStrength!==void 0&&(i.anisotropy=g.anisotropyStrength),g.anisotropyRotation!==void 0&&(i.anisotropyRotation=g.anisotropyRotation),g.anisotropyTexture!==void 0&&s.push(t.assignTexture(i,"anisotropyMap",g.anisotropyTexture)),Promise.all(s)}}class Z8{constructor(A){this.parser=A,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(A){const i=this.parser,t=i.json,o=t.textures[A];if(!o.extensions||!o.extensions[this.name])return null;const s=o.extensions[this.name],g=i.options.ktx2Loader;if(!g){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(A,s.source,g)}}class X8{constructor(A){this.parser=A,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const i=this.name,t=this.parser,o=t.json,s=o.textures[A];if(!s.extensions||!s.extensions[i])return null;const g=s.extensions[i],a=o.images[g.source];let I=t.textureLoader;if(a.uri){const _=t.options.manager.getHandler(a.uri);_!==null&&(I=_)}return this.detectSupport().then(function(_){if(_)return t.loadTextureImage(A,g.source,I);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return t.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const i=new Image;i.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",i.onload=i.onerror=function(){A(i.height===1)}})),this.isSupported}}class $8{constructor(A){this.parser=A,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const i=this.name,t=this.parser,o=t.json,s=o.textures[A];if(!s.extensions||!s.extensions[i])return null;const g=s.extensions[i],a=o.images[g.source];let I=t.textureLoader;if(a.uri){const _=t.options.manager.getHandler(a.uri);_!==null&&(I=_)}return this.detectSupport().then(function(_){if(_)return t.loadTextureImage(A,g.source,I);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return t.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const i=new Image;i.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",i.onload=i.onerror=function(){A(i.height===1)}})),this.isSupported}}class A4{constructor(A){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const i=this.parser.json,t=i.bufferViews[A];if(t.extensions&&t.extensions[this.name]){const o=t.extensions[this.name],s=this.parser.getDependency("buffer",o.buffer),g=this.parser.options.meshoptDecoder;if(!g||!g.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const I=o.byteOffset||0,_=o.byteLength||0,p=o.count,B=o.byteStride,l=new Uint8Array(a,I,_);return g.decodeGltfBufferAsync?g.decodeGltfBufferAsync(p,B,l,o.mode,o.filter).then(function(Q){return Q.buffer}):g.ready.then(function(){const Q=new ArrayBuffer(p*B);return g.decodeGltfBuffer(new Uint8Array(Q),p,B,l,o.mode,o.filter),Q})})}else return null}}class e4{constructor(A){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const i=this.parser.json,t=i.nodes[A];if(!t.extensions||!t.extensions[this.name]||t.mesh===void 0)return null;const o=i.meshes[t.mesh];for(const _ of o.primitives)if(_.mode!==bn.TRIANGLES&&_.mode!==bn.TRIANGLE_STRIP&&_.mode!==bn.TRIANGLE_FAN&&_.mode!==void 0)return null;const g=t.extensions[this.name].attributes,a=[],I={};for(const _ in g)a.push(this.parser.getDependency("accessor",g[_]).then(p=>(I[_]=p,I[_])));return a.length<1?null:(a.push(this.parser.createNodeMesh(A)),Promise.all(a).then(_=>{const p=_.pop(),B=p.isGroup?p.children:[p],l=_[0].count,Q=[];for(const h of B){const y=new jA,u=new k,E=new kn,f=new k(1,1,1),m=new BP(h.geometry,h.material,l);for(let D=0;D<l;D++)I.TRANSLATION&&u.fromBufferAttribute(I.TRANSLATION,D),I.ROTATION&&E.fromBufferAttribute(I.ROTATION,D),I.SCALE&&f.fromBufferAttribute(I.SCALE,D),m.setMatrixAt(D,y.compose(u,E,f));for(const D in I)if(D==="_COLOR_0"){const L=I[D];m.instanceColor=new SB(L.array,L.itemSize,L.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&h.geometry.setAttribute(D,I[D]);ft.prototype.copy.call(m,h),this.parser.assignFinalMaterial(m),Q.push(m)}return p.isGroup?(p.clear(),p.add(...Q),p):Q[0]}))}}const bP="glTF",ca=12,aH={JSON:1313821514,BIN:5130562};class t4{constructor(A){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const i=new DataView(A,0,ca);if(this.header={magic:Ng(new Uint8Array(A.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==bP)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const t=this.header.length-ca,o=new DataView(A,ca);let s=0;for(;s<t;){const g=o.getUint32(s,!0);s+=4;const a=o.getUint32(s,!0);if(s+=4,a===aH.JSON){const I=new Uint8Array(A,ca+s,g);this.content=Ng(I)}else if(a===aH.BIN){const I=ca+s;this.body=A.slice(I,I+g)}s+=g}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class i4{constructor(A,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(A,i){const t=this.json,o=this.dracoLoader,s=A.extensions[this.name].bufferView,g=A.extensions[this.name].attributes,a={},I={},_={};for(const p in g){const B=FB[p]||p.toLowerCase();a[B]=g[p]}for(const p in A.attributes){const B=FB[p]||p.toLowerCase();if(g[p]!==void 0){const l=t.accessors[A.attributes[p]],Q=Eg[l.componentType];_[B]=Q.name,I[B]=l.normalized===!0}}return i.getDependency("bufferView",s).then(function(p){return new Promise(function(B,l){o.decodeDracoFile(p,function(Q){for(const h in Q.attributes){const y=Q.attributes[h],u=I[h];u!==void 0&&(y.normalized=u)}B(Q)},a,_,eo,l)})})}}class n4{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(A,i){return(i.texCoord===void 0||i.texCoord===A.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0||(A=A.clone(),i.texCoord!==void 0&&(A.channel=i.texCoord),i.offset!==void 0&&A.offset.fromArray(i.offset),i.rotation!==void 0&&(A.rotation=i.rotation),i.scale!==void 0&&A.repeat.fromArray(i.scale),A.needsUpdate=!0),A}}class r4{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class vP extends sI{constructor(A,i,t,o){super(A,i,t,o)}copySampleValue_(A){const i=this.resultBuffer,t=this.sampleValues,o=this.valueSize,s=A*o*3+o;for(let g=0;g!==o;g++)i[g]=t[s+g];return i}interpolate_(A,i,t,o){const s=this.resultBuffer,g=this.sampleValues,a=this.valueSize,I=a*2,_=a*3,p=o-i,B=(t-i)/p,l=B*B,Q=l*B,h=A*_,y=h-_,u=-2*Q+3*l,E=Q-l,f=1-u,m=E-l+B;for(let D=0;D!==a;D++){const L=g[y+D+a],v=g[y+D+I]*p,N=g[h+D+a],U=g[h+D]*p;s[D]=f*L+m*v+u*N+E*U}return s}}const o4=new kn;class s4 extends vP{interpolate_(A,i,t,o){const s=super.interpolate_(A,i,t,o);return o4.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eg={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},IH={9728:gn,9729:Gn,9984:H1,9985:fC,9986:Ea,9987:Wr},CH={33071:Sr,33648:Ac,10497:Oo},K_={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},FB={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...yP>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},uo={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g4={CUBICSPLINE:void 0,LINEAR:Za,STEP:za},P_={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a4(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oo})),n.DefaultMaterial}function ts(n,A,i){for(const t in i.extensions)n[t]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[t]=i.extensions[t])}function Yr(n,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(n.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function I4(n,A,i){let t=!1,o=!1,s=!1;for(let _=0,p=A.length;_<p;_++){const B=A[_];if(B.POSITION!==void 0&&(t=!0),B.NORMAL!==void 0&&(o=!0),B.COLOR_0!==void 0&&(s=!0),t&&o&&s)break}if(!t&&!o&&!s)return Promise.resolve(n);const g=[],a=[],I=[];for(let _=0,p=A.length;_<p;_++){const B=A[_];if(t){const l=B.POSITION!==void 0?i.getDependency("accessor",B.POSITION):n.attributes.position;g.push(l)}if(o){const l=B.NORMAL!==void 0?i.getDependency("accessor",B.NORMAL):n.attributes.normal;a.push(l)}if(s){const l=B.COLOR_0!==void 0?i.getDependency("accessor",B.COLOR_0):n.attributes.color;I.push(l)}}return Promise.all([Promise.all(g),Promise.all(a),Promise.all(I)]).then(function(_){const p=_[0],B=_[1],l=_[2];return t&&(n.morphAttributes.position=p),o&&(n.morphAttributes.normal=B),s&&(n.morphAttributes.color=l),n.morphTargetsRelative=!0,n})}function C4(n,A){if(n.updateMorphTargets(),A.weights!==void 0)for(let i=0,t=A.weights.length;i<t;i++)n.morphTargetInfluences[i]=A.weights[i];if(A.extras&&Array.isArray(A.extras.targetNames)){const i=A.extras.targetNames;if(n.morphTargetInfluences.length===i.length){n.morphTargetDictionary={};for(let t=0,o=i.length;t<o;t++)n.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c4(n){let A;const i=n.extensions&&n.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(i?A="draco:"+i.bufferView+":"+i.indices+":"+J_(i.attributes):A=n.indices+":"+J_(n.attributes)+":"+n.mode,n.targets!==void 0)for(let t=0,o=n.targets.length;t<o;t++)A+=":"+J_(n.targets[t]);return A}function J_(n){let A="";const i=Object.keys(n).sort();for(let t=0,o=i.length;t<o;t++)A+=i[t]+":"+n[i[t]]+";";return A}function LB(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _4(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const p4=new jA;class B4{constructor(A={},i={}){this.json=A,this.extensions={},this.plugins={},this.options=i,this.cache=new G8,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let t=!1,o=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,o=navigator.userAgent.indexOf("Firefox")>-1,s=o?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||t||o&&s<98?this.textureLoader=new hP(this.options.manager):this.textureLoader=new I8(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ql(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,i){const t=this,o=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(g){return g._markDefs&&g._markDefs()}),Promise.all(this._invokeAll(function(g){return g.beforeRoot&&g.beforeRoot()})).then(function(){return Promise.all([t.getDependencies("scene"),t.getDependencies("animation"),t.getDependencies("camera")])}).then(function(g){const a={scene:g[0][o.scene||0],scenes:g[0],animations:g[1],cameras:g[2],asset:o.asset,parser:t,userData:{}};return ts(s,a,o),Yr(a,o),Promise.all(t._invokeAll(function(I){return I.afterRoot&&I.afterRoot(a)})).then(function(){for(const I of a.scenes)I.updateMatrixWorld();A(a)})}).catch(i)}_markDefs(){const A=this.json.nodes||[],i=this.json.skins||[],t=this.json.meshes||[];for(let o=0,s=i.length;o<s;o++){const g=i[o].joints;for(let a=0,I=g.length;a<I;a++)A[g[a]].isBone=!0}for(let o=0,s=A.length;o<s;o++){const g=A[o];g.mesh!==void 0&&(this._addNodeRef(this.meshCache,g.mesh),g.skin!==void 0&&(t[g.mesh].isSkinnedMesh=!0)),g.camera!==void 0&&this._addNodeRef(this.cameraCache,g.camera)}}_addNodeRef(A,i){i!==void 0&&(A.refs[i]===void 0&&(A.refs[i]=A.uses[i]=0),A.refs[i]++)}_getNodeRef(A,i,t){if(A.refs[i]<=1)return t;const o=t.clone(),s=(g,a)=>{const I=this.associations.get(g);I!=null&&this.associations.set(a,I);for(const[_,p]of g.children.entries())s(p,a.children[_])};return s(t,o),o.name+="_instance_"+A.uses[i]++,o}_invokeOne(A){const i=Object.values(this.plugins);i.push(this);for(let t=0;t<i.length;t++){const o=A(i[t]);if(o)return o}return null}_invokeAll(A){const i=Object.values(this.plugins);i.unshift(this);const t=[];for(let o=0;o<i.length;o++){const s=A(i[o]);s&&t.push(s)}return t}getDependency(A,i){const t=A+":"+i;let o=this.cache.get(t);if(!o){switch(A){case"scene":o=this.loadScene(i);break;case"node":o=this._invokeOne(function(s){return s.loadNode&&s.loadNode(i)});break;case"mesh":o=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(i)});break;case"accessor":o=this.loadAccessor(i);break;case"bufferView":o=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(i)});break;case"buffer":o=this.loadBuffer(i);break;case"material":o=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(i)});break;case"texture":o=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(i)});break;case"skin":o=this.loadSkin(i);break;case"animation":o=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(i)});break;case"camera":o=this.loadCamera(i);break;default:if(o=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(A,i)}),!o)throw new Error("Unknown type: "+A);break}this.cache.add(t,o)}return o}getDependencies(A){let i=this.cache.get(A);if(!i){const t=this,o=this.json[A+(A==="mesh"?"es":"s")]||[];i=Promise.all(o.map(function(s,g){return t.getDependency(A,g)})),this.cache.add(A,i)}return i}loadBuffer(A){const i=this.json.buffers[A],t=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&A===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(s,g){t.load(lg.resolveURL(i.uri,o.path),s,void 0,function(){g(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(A){const i=this.json.bufferViews[A];return this.getDependency("buffer",i.buffer).then(function(t){const o=i.byteLength||0,s=i.byteOffset||0;return t.slice(s,s+o)})}loadAccessor(A){const i=this,t=this.json,o=this.json.accessors[A];if(o.bufferView===void 0&&o.sparse===void 0){const g=K_[o.type],a=Eg[o.componentType],I=o.normalized===!0,_=new a(o.count*g);return Promise.resolve(new oi(_,g,I))}const s=[];return o.bufferView!==void 0?s.push(this.getDependency("bufferView",o.bufferView)):s.push(null),o.sparse!==void 0&&(s.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(s).then(function(g){const a=g[0],I=K_[o.type],_=Eg[o.componentType],p=_.BYTES_PER_ELEMENT,B=p*I,l=o.byteOffset||0,Q=o.bufferView!==void 0?t.bufferViews[o.bufferView].byteStride:void 0,h=o.normalized===!0;let y,u;if(Q&&Q!==B){const E=Math.floor(l/Q),f="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+E+":"+o.count;let m=i.cache.get(f);m||(y=new _(a,E*Q,o.count*Q/p),m=new cP(y,Q/p),i.cache.add(f,m)),u=new Xr(m,I,l%Q/p,h)}else a===null?y=new _(o.count*I):y=new _(a,l,o.count*I),u=new oi(y,I,h);if(o.sparse!==void 0){const E=K_.SCALAR,f=Eg[o.sparse.indices.componentType],m=o.sparse.indices.byteOffset||0,D=o.sparse.values.byteOffset||0,L=new f(g[1],m,o.sparse.count*E),v=new _(g[2],D,o.sparse.count*I);a!==null&&(u=new oi(u.array.slice(),u.itemSize,u.normalized));for(let N=0,U=L.length;N<U;N++){const b=L[N];if(u.setX(b,v[N*I]),I>=2&&u.setY(b,v[N*I+1]),I>=3&&u.setZ(b,v[N*I+2]),I>=4&&u.setW(b,v[N*I+3]),I>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return u})}loadTexture(A){const i=this.json,t=this.options,s=i.textures[A].source,g=i.images[s];let a=this.textureLoader;if(g.uri){const I=t.manager.getHandler(g.uri);I!==null&&(a=I)}return this.loadTextureImage(A,s,a)}loadTextureImage(A,i,t){const o=this,s=this.json,g=s.textures[A],a=s.images[i],I=(a.uri||a.bufferView)+":"+g.sampler;if(this.textureCache[I])return this.textureCache[I];const _=this.loadImageSource(i,t).then(function(p){p.flipY=!1,p.name=g.name||a.name||"",p.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(p.name=a.uri);const l=(s.samplers||{})[g.sampler]||{};return p.magFilter=IH[l.magFilter]||Gn,p.minFilter=IH[l.minFilter]||Wr,p.wrapS=CH[l.wrapS]||Oo,p.wrapT=CH[l.wrapT]||Oo,o.associations.set(p,{textures:A}),p}).catch(function(){return null});return this.textureCache[I]=_,_}loadImageSource(A,i){const t=this,o=this.json,s=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(B=>B.clone());const g=o.images[A],a=self.URL||self.webkitURL;let I=g.uri||"",_=!1;if(g.bufferView!==void 0)I=t.getDependency("bufferView",g.bufferView).then(function(B){_=!0;const l=new Blob([B],{type:g.mimeType});return I=a.createObjectURL(l),I});else if(g.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const p=Promise.resolve(I).then(function(B){return new Promise(function(l,Q){let h=l;i.isImageBitmapLoader===!0&&(h=function(y){const u=new ti(y);u.needsUpdate=!0,l(u)}),i.load(lg.resolveURL(B,s.path),h,void 0,Q)})}).then(function(B){return _===!0&&a.revokeObjectURL(I),Yr(B,g),B.userData.mimeType=g.mimeType||_4(g.uri),B}).catch(function(B){throw console.error("THREE.GLTFLoader: Couldn't load texture",I),B});return this.sourceCache[A]=p,p}assignTexture(A,i,t,o){const s=this;return this.getDependency("texture",t.index).then(function(g){if(!g)return null;if(t.texCoord!==void 0&&t.texCoord>0&&(g=g.clone(),g.channel=t.texCoord),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const a=t.extensions!==void 0?t.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const I=s.associations.get(g);g=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(g,a),s.associations.set(g,I)}}return o!==void 0&&(typeof o=="number"&&(o=o===gH?_s:eo),"colorSpace"in g?g.colorSpace=o:g.encoding=o===_s?gH:T8),A[i]=g,g})}assignFinalMaterial(A){const i=A.geometry;let t=A.material;const o=i.attributes.tangent===void 0,s=i.attributes.color!==void 0,g=i.attributes.normal===void 0;if(A.isPoints){const a="PointsMaterial:"+t.uuid;let I=this.cache.get(a);I||(I=new lP,Kn.prototype.copy.call(I,t),I.color.copy(t.color),I.map=t.map,I.sizeAttenuation=!1,this.cache.add(a,I)),t=I}else if(A.isLine){const a="LineBasicMaterial:"+t.uuid;let I=this.cache.get(a);I||(I=new Jl,Kn.prototype.copy.call(I,t),I.color.copy(t.color),I.map=t.map,this.cache.add(a,I)),t=I}if(o||s||g){let a="ClonedMaterial:"+t.uuid+":";o&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),g&&(a+="flat-shading:");let I=this.cache.get(a);I||(I=t.clone(),s&&(I.vertexColors=!0),g&&(I.flatShading=!0),o&&(I.normalScale&&(I.normalScale.y*=-1),I.clearcoatNormalScale&&(I.clearcoatNormalScale.y*=-1)),this.cache.add(a,I),this.associations.set(I,this.associations.get(t))),t=I}A.material=t}getMaterialType(){return Yl}loadMaterial(A){const i=this,t=this.json,o=this.extensions,s=t.materials[A];let g;const a={},I=s.extensions||{},_=[];if(I[Oe.KHR_MATERIALS_UNLIT]){const B=o[Oe.KHR_MATERIALS_UNLIT];g=B.getMaterialType(),_.push(B.extendParams(a,s,i))}else{const B=s.pbrMetallicRoughness||{};if(a.color=new te(1,1,1),a.opacity=1,Array.isArray(B.baseColorFactor)){const l=B.baseColorFactor;a.color.setRGB(l[0],l[1],l[2],eo),a.opacity=l[3]}B.baseColorTexture!==void 0&&_.push(i.assignTexture(a,"map",B.baseColorTexture,_s)),a.metalness=B.metallicFactor!==void 0?B.metallicFactor:1,a.roughness=B.roughnessFactor!==void 0?B.roughnessFactor:1,B.metallicRoughnessTexture!==void 0&&(_.push(i.assignTexture(a,"metalnessMap",B.metallicRoughnessTexture)),_.push(i.assignTexture(a,"roughnessMap",B.metallicRoughnessTexture))),g=this._invokeOne(function(l){return l.getMaterialType&&l.getMaterialType(A)}),_.push(Promise.all(this._invokeAll(function(l){return l.extendMaterialParams&&l.extendMaterialParams(A,a)})))}s.doubleSided===!0&&(a.side=mr);const p=s.alphaMode||P_.OPAQUE;if(p===P_.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,p===P_.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&g!==Zr&&(_.push(i.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const B=s.normalTexture.scale;a.normalScale.set(B,B)}if(s.occlusionTexture!==void 0&&g!==Zr&&(_.push(i.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&g!==Zr){const B=s.emissiveFactor;a.emissive=new te().setRGB(B[0],B[1],B[2],eo)}return s.emissiveTexture!==void 0&&g!==Zr&&_.push(i.assignTexture(a,"emissiveMap",s.emissiveTexture,_s)),Promise.all(_).then(function(){const B=new g(a);return s.name&&(B.name=s.name),Yr(B,s),i.associations.set(B,{materials:A}),s.extensions&&ts(o,B,s),B})}createUniqueName(A){const i=et.sanitizeNodeName(A||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(A){const i=this,t=this.extensions,o=this.primitiveCache;function s(a){return t[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,i).then(function(I){return cH(I,a,i)})}const g=[];for(let a=0,I=A.length;a<I;a++){const _=A[a],p=c4(_),B=o[p];if(B)g.push(B.promise);else{let l;_.extensions&&_.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?l=s(_):l=cH(new si,_,i),o[p]={primitive:_,promise:l},g.push(l)}}return Promise.all(g)}loadMesh(A){const i=this,t=this.json,o=this.extensions,s=t.meshes[A],g=s.primitives,a=[];for(let I=0,_=g.length;I<_;I++){const p=g[I].material===void 0?a4(this.cache):this.getDependency("material",g[I].material);a.push(p)}return a.push(i.loadGeometries(g)),Promise.all(a).then(function(I){const _=I.slice(0,I.length-1),p=I[I.length-1],B=[];for(let Q=0,h=p.length;Q<h;Q++){const y=p[Q],u=g[Q];let E;const f=_[Q];if(u.mode===bn.TRIANGLES||u.mode===bn.TRIANGLE_STRIP||u.mode===bn.TRIANGLE_FAN||u.mode===void 0)E=s.isSkinnedMesh===!0?new _P(y,f):new _i(y,f),E.isSkinnedMesh===!0&&E.normalizeSkinWeights(),u.mode===bn.TRIANGLE_STRIP?E.geometry=sH(E.geometry,z1):u.mode===bn.TRIANGLE_FAN&&(E.geometry=sH(E.geometry,yB));else if(u.mode===bn.LINES)E=new KW(y,f);else if(u.mode===bn.LINE_STRIP)E=new bc(y,f);else if(u.mode===bn.LINE_LOOP)E=new PW(y,f);else if(u.mode===bn.POINTS)E=new JW(y,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(E.geometry.morphAttributes).length>0&&C4(E,s),E.name=i.createUniqueName(s.name||"mesh_"+A),Yr(E,s),u.extensions&&ts(o,E,u),i.assignFinalMaterial(E),B.push(E)}for(let Q=0,h=B.length;Q<h;Q++)i.associations.set(B[Q],{meshes:A,primitives:Q});if(B.length===1)return s.extensions&&ts(o,B[0],s),B[0];const l=new wr;s.extensions&&ts(o,l,s),i.associations.set(l,{meshes:A});for(let Q=0,h=B.length;Q<h;Q++)l.add(B[Q]);return l})}loadCamera(A){let i;const t=this.json.cameras[A],o=t[t.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return t.type==="perspective"?i=new Pi(Ln.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):t.type==="orthographic"&&(i=new wc(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),t.name&&(i.name=this.createUniqueName(t.name)),Yr(i,t),Promise.resolve(i)}loadSkin(A){const i=this.json.skins[A],t=[];for(let o=0,s=i.joints.length;o<s;o++)t.push(this._loadNodeShallow(i.joints[o]));return i.inverseBindMatrices!==void 0?t.push(this.getDependency("accessor",i.inverseBindMatrices)):t.push(null),Promise.all(t).then(function(o){const s=o.pop(),g=o,a=[],I=[];for(let _=0,p=g.length;_<p;_++){const B=g[_];if(B){a.push(B);const l=new jA;s!==null&&l.fromArray(s.array,_*16),I.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[_])}return new Rc(a,I)})}loadAnimation(A){const i=this.json,t=this,o=i.animations[A],s=o.name?o.name:"animation_"+A,g=[],a=[],I=[],_=[],p=[];for(let B=0,l=o.channels.length;B<l;B++){const Q=o.channels[B],h=o.samplers[Q.sampler],y=Q.target,u=y.node,E=o.parameters!==void 0?o.parameters[h.input]:h.input,f=o.parameters!==void 0?o.parameters[h.output]:h.output;y.node!==void 0&&(g.push(this.getDependency("node",u)),a.push(this.getDependency("accessor",E)),I.push(this.getDependency("accessor",f)),_.push(h),p.push(y))}return Promise.all([Promise.all(g),Promise.all(a),Promise.all(I),Promise.all(_),Promise.all(p)]).then(function(B){const l=B[0],Q=B[1],h=B[2],y=B[3],u=B[4],E=[];for(let f=0,m=l.length;f<m;f++){const D=l[f],L=Q[f],v=h[f],N=y[f],U=u[f];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const b=t._createAnimationTracks(D,L,v,N,U);if(b)for(let S=0;S<b.length;S++)E.push(b[S])}return new dP(s,void 0,E)})}createNodeMesh(A){const i=this.json,t=this,o=i.nodes[A];return o.mesh===void 0?null:t.getDependency("mesh",o.mesh).then(function(s){const g=t._getNodeRef(t.meshCache,o.mesh,s);return o.weights!==void 0&&g.traverse(function(a){if(a.isMesh)for(let I=0,_=o.weights.length;I<_;I++)a.morphTargetInfluences[I]=o.weights[I]}),g})}loadNode(A){const i=this.json,t=this,o=i.nodes[A],s=t._loadNodeShallow(A),g=[],a=o.children||[];for(let _=0,p=a.length;_<p;_++)g.push(t.getDependency("node",a[_]));const I=o.skin===void 0?Promise.resolve(null):t.getDependency("skin",o.skin);return Promise.all([s,Promise.all(g),I]).then(function(_){const p=_[0],B=_[1],l=_[2];l!==null&&p.traverse(function(Q){Q.isSkinnedMesh&&Q.bind(l,p4)});for(let Q=0,h=B.length;Q<h;Q++)p.add(B[Q]);return p})}_loadNodeShallow(A){const i=this.json,t=this.extensions,o=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const s=i.nodes[A],g=s.name?o.createUniqueName(s.name):"",a=[],I=o._invokeOne(function(_){return _.createNodeMesh&&_.createNodeMesh(A)});return I&&a.push(I),s.camera!==void 0&&a.push(o.getDependency("camera",s.camera).then(function(_){return o._getNodeRef(o.cameraCache,s.camera,_)})),o._invokeAll(function(_){return _.createNodeAttachment&&_.createNodeAttachment(A)}).forEach(function(_){a.push(_)}),this.nodeCache[A]=Promise.all(a).then(function(_){let p;if(s.isBone===!0?p=new tc:_.length>1?p=new wr:_.length===1?p=_[0]:p=new ft,p!==_[0])for(let B=0,l=_.length;B<l;B++)p.add(_[B]);if(s.name&&(p.userData.name=s.name,p.name=g),Yr(p,s),s.extensions&&ts(t,p,s),s.matrix!==void 0){const B=new jA;B.fromArray(s.matrix),p.applyMatrix4(B)}else s.translation!==void 0&&p.position.fromArray(s.translation),s.rotation!==void 0&&p.quaternion.fromArray(s.rotation),s.scale!==void 0&&p.scale.fromArray(s.scale);return o.associations.has(p)||o.associations.set(p,{}),o.associations.get(p).nodes=A,p}),this.nodeCache[A]}loadScene(A){const i=this.extensions,t=this.json.scenes[A],o=this,s=new wr;t.name&&(s.name=o.createUniqueName(t.name)),Yr(s,t),t.extensions&&ts(i,s,t);const g=t.nodes||[],a=[];for(let I=0,_=g.length;I<_;I++)a.push(o.getDependency("node",g[I]));return Promise.all(a).then(function(I){for(let p=0,B=I.length;p<B;p++)s.add(I[p]);const _=p=>{const B=new Map;for(const[l,Q]of o.associations)(l instanceof Kn||l instanceof ti)&&B.set(l,Q);return p.traverse(l=>{const Q=o.associations.get(l);Q!=null&&B.set(l,Q)}),B};return o.associations=_(s),s})}_createAnimationTracks(A,i,t,o,s){const g=[],a=A.name?A.name:A.uuid,I=[];uo[s.path]===uo.weights?A.traverse(function(l){l.morphTargetInfluences&&I.push(l.name?l.name:l.uuid)}):I.push(a);let _;switch(uo[s.path]){case uo.weights:_=ms;break;case uo.rotation:_=Ds;break;case uo.position:case uo.scale:_=Ss;break;default:switch(t.itemSize){case 1:_=ms;break;case 2:case 3:default:_=Ss;break}break}const p=o.interpolation!==void 0?g4[o.interpolation]:Za,B=this._getArrayFromAccessor(t);for(let l=0,Q=I.length;l<Q;l++){const h=new _(I[l]+"."+uo[s.path],i.array,B,p);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(h),g.push(h)}return g}_getArrayFromAccessor(A){let i=A.array;if(A.normalized){const t=LB(i.constructor),o=new Float32Array(i.length);for(let s=0,g=i.length;s<g;s++)o[s]=i[s]*t;i=o}return i}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(t){const o=this instanceof Ds?s4:vP;return new o(this.times,this.values,this.getValueSize()/3,t)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function l4(n,A,i){const t=A.attributes,o=new On;if(t.POSITION!==void 0){const a=i.json.accessors[t.POSITION],I=a.min,_=a.max;if(I!==void 0&&_!==void 0){if(o.set(new k(I[0],I[1],I[2]),new k(_[0],_[1],_[2])),a.normalized){const p=LB(Eg[a.componentType]);o.min.multiplyScalar(p),o.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=A.targets;if(s!==void 0){const a=new k,I=new k;for(let _=0,p=s.length;_<p;_++){const B=s[_];if(B.POSITION!==void 0){const l=i.json.accessors[B.POSITION],Q=l.min,h=l.max;if(Q!==void 0&&h!==void 0){if(I.setX(Math.max(Math.abs(Q[0]),Math.abs(h[0]))),I.setY(Math.max(Math.abs(Q[1]),Math.abs(h[1]))),I.setZ(Math.max(Math.abs(Q[2]),Math.abs(h[2]))),l.normalized){const y=LB(Eg[l.componentType]);I.multiplyScalar(y)}a.max(I)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(a)}n.boundingBox=o;const g=new Yn;o.getCenter(g.center),g.radius=o.min.distanceTo(o.max)/2,n.boundingSphere=g}function cH(n,A,i){const t=A.attributes,o=[];function s(g,a){return i.getDependency("accessor",g).then(function(I){n.setAttribute(a,I)})}for(const g in t){const a=FB[g]||g.toLowerCase();a in n.attributes||o.push(s(t[g],a))}if(A.indices!==void 0&&!n.index){const g=i.getDependency("accessor",A.indices).then(function(a){n.setIndex(a)});o.push(g)}return Yr(n,A),l4(n,A,i),Promise.all(o).then(function(){return A.targets!==void 0?I4(n,A.targets,i):n})}function NP(n,A,i){const t=i.length-n-1;if(A>=i[t])return t-1;if(A<=i[n])return n;let o=n,s=t,g=Math.floor((o+s)/2);for(;A<i[g]||A>=i[g+1];)A<i[g]?s=g:o=g,g=Math.floor((o+s)/2);return g}function E4(n,A,i,t){const o=[],s=[],g=[];o[0]=1;for(let a=1;a<=i;++a){s[a]=A-t[n+1-a],g[a]=t[n+a]-A;let I=0;for(let _=0;_<a;++_){const p=g[_+1],B=s[a-_],l=o[_]/(p+B);o[_]=I+p*l,I=B*l}o[a]=I}return o}function Q4(n,A,i,t){const o=NP(n,t,A),s=E4(o,t,n,A),g=new ve(0,0,0,0);for(let a=0;a<=n;++a){const I=i[o-n+a],_=s[a],p=I.w*_;g.x+=I.x*p,g.y+=I.y*p,g.z+=I.z*p,g.w+=I.w*_}return g}function d4(n,A,i,t,o){const s=[];for(let B=0;B<=i;++B)s[B]=0;const g=[];for(let B=0;B<=t;++B)g[B]=s.slice(0);const a=[];for(let B=0;B<=i;++B)a[B]=s.slice(0);a[0][0]=1;const I=s.slice(0),_=s.slice(0);for(let B=1;B<=i;++B){I[B]=A-o[n+1-B],_[B]=o[n+B]-A;let l=0;for(let Q=0;Q<B;++Q){const h=_[Q+1],y=I[B-Q];a[B][Q]=h+y;const u=a[Q][B-1]/a[B][Q];a[Q][B]=l+h*u,l=y*u}a[B][B]=l}for(let B=0;B<=i;++B)g[0][B]=a[B][i];for(let B=0;B<=i;++B){let l=0,Q=1;const h=[];for(let y=0;y<=i;++y)h[y]=s.slice(0);h[0][0]=1;for(let y=1;y<=t;++y){let u=0;const E=B-y,f=i-y;B>=y&&(h[Q][0]=h[l][0]/a[f+1][E],u=h[Q][0]*a[E][f]);const m=E>=-1?1:-E,D=B-1<=f?y-1:i-B;for(let v=m;v<=D;++v)h[Q][v]=(h[l][v]-h[l][v-1])/a[f+1][E+v],u+=h[Q][v]*a[E+v][f];B<=f&&(h[Q][y]=-h[l][y-1]/a[f+1][B],u+=h[Q][y]*a[B][f]),g[y][B]=u;const L=l;l=Q,Q=L}}let p=i;for(let B=1;B<=t;++B){for(let l=0;l<=i;++l)g[B][l]*=p;p*=i-B}return g}function h4(n,A,i,t,o){const s=o<n?o:n,g=[],a=NP(n,t,A),I=d4(a,t,n,s,A),_=[];for(let p=0;p<i.length;++p){const B=i[p].clone(),l=B.w;B.x*=l,B.y*=l,B.z*=l,_[p]=B}for(let p=0;p<=s;++p){const B=_[a-n].clone().multiplyScalar(I[p][0]);for(let l=1;l<=n;++l)B.add(_[a-n+l].clone().multiplyScalar(I[p][l]));g[p]=B}for(let p=s+1;p<=o+1;++p)g[p]=new ve(0,0,0);return g}function u4(n,A){let i=1;for(let o=2;o<=n;++o)i*=o;let t=1;for(let o=2;o<=A;++o)t*=o;for(let o=2;o<=n-A;++o)t*=o;return i/t}function f4(n){const A=n.length,i=[],t=[];for(let s=0;s<A;++s){const g=n[s];i[s]=new k(g.x,g.y,g.z),t[s]=g.w}const o=[];for(let s=0;s<A;++s){const g=i[s].clone();for(let a=1;a<=s;++a)g.sub(o[s-a].clone().multiplyScalar(u4(s,a)*t[a]));o[s]=g.divideScalar(t[0])}return o}function y4(n,A,i,t,o){const s=h4(n,A,i,t,o);return f4(s)}class _H extends OW{constructor(A,i,t,o,s){super(),this.degree=A,this.knots=i,this.controlPoints=[],this.startKnot=o||0,this.endKnot=s||this.knots.length-1;for(let g=0;g<t.length;++g){const a=t[g];this.controlPoints[g]=new ve(a.x,a.y,a.z,a.w)}}getPoint(A,i){const t=i||new k,o=this.knots[this.startKnot]+A*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Q4(this.degree,this.knots,this.controlPoints,o);return s.w!=1&&s.divideScalar(s.w),t.set(s.x,s.y,s.z)}getTangent(A,i){const t=i||new k,o=this.knots[0]+A*(this.knots[this.knots.length-1]-this.knots[0]),s=y4(this.degree,this.knots,this.controlPoints,o,1);return t.copy(s[1]).normalize(),t}}let Je,zt,Xi;class Bz extends Rs{constructor(A){super(A)}load(A,i,t,o){const s=this,g=s.path===""?lg.extractUrlBase(A):s.path,a=new ql(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(A,function(I){try{i(s.parse(I,g))}catch(_){o?o(_):console.error(_),s.manager.itemError(A)}},t,o)}parse(A,i){if(R4(A))Je=new M4().parse(A);else{const o=TP(A);if(!b4(o))throw new Error("THREE.FBXLoader: Unknown format.");if(BH(o)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+BH(o));Je=new w4().parse(o)}const t=new hP(this.manager).setPath(this.resourcePath||i).setCrossOrigin(this.crossOrigin);return new m4(t,this.manager).parse(Je)}}class m4{constructor(A,i){this.textureLoader=A,this.manager=i}parse(){zt=this.parseConnections();const A=this.parseImages(),i=this.parseTextures(A),t=this.parseMaterials(i),o=this.parseDeformers(),s=new D4().parse(o);return this.parseScene(o,s,t),Xi}parseConnections(){const A=new Map;return"Connections"in Je&&Je.Connections.connections.forEach(function(t){const o=t[0],s=t[1],g=t[2];A.has(o)||A.set(o,{parents:[],children:[]});const a={ID:s,relationship:g};A.get(o).parents.push(a),A.has(s)||A.set(s,{parents:[],children:[]});const I={ID:o,relationship:g};A.get(s).children.push(I)}),A}parseImages(){const A={},i={};if("Video"in Je.Objects){const t=Je.Objects.Video;for(const o in t){const s=t[o],g=parseInt(o);if(A[g]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,I=typeof s.Content=="string"&&s.Content!=="";if(a||I){const _=this.parseImage(t[o]);i[s.RelativeFilename||s.Filename]=_}}}}for(const t in A){const o=A[t];i[o]!==void 0?A[t]=i[o]:A[t]=A[t].split("\\").pop()}return A}parseImage(A){const i=A.Content,t=A.RelativeFilename||A.Filename,o=t.slice(t.lastIndexOf(".")+1).toLowerCase();let s;switch(o){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",t),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+o+'" is not supported.');return}if(typeof i=="string")return"data:"+s+";base64,"+i;{const g=new Uint8Array(i);return window.URL.createObjectURL(new Blob([g],{type:s}))}}parseTextures(A){const i=new Map;if("Texture"in Je.Objects){const t=Je.Objects.Texture;for(const o in t){const s=this.parseTexture(t[o],A);i.set(parseInt(o),s)}}return i}parseTexture(A,i){const t=this.loadTexture(A,i);t.ID=A.id,t.name=A.attrName;const o=A.WrapModeU,s=A.WrapModeV,g=o!==void 0?o.value:0,a=s!==void 0?s.value:0;if(t.wrapS=g===0?Oo:Sr,t.wrapT=a===0?Oo:Sr,"Scaling"in A){const I=A.Scaling.value;t.repeat.x=I[0],t.repeat.y=I[1]}return t}loadTexture(A,i){let t;const o=this.textureLoader.path,s=zt.get(A.id).children;s!==void 0&&s.length>0&&i[s[0].ID]!==void 0&&(t=i[s[0].ID],(t.indexOf("blob:")===0||t.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let g;const a=A.FileName.slice(-3).toLowerCase();if(a==="tga"){const I=this.manager.getHandler(".tga");I===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",A.RelativeFilename),g=new ti):(I.setPath(this.textureLoader.path),g=I.load(t))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",A.RelativeFilename),g=new ti):g=this.textureLoader.load(t);return this.textureLoader.setPath(o),g}parseMaterials(A){const i=new Map;if("Material"in Je.Objects){const t=Je.Objects.Material;for(const o in t){const s=this.parseMaterial(t[o],A);s!==null&&i.set(parseInt(o),s)}}return i}parseMaterial(A,i){const t=A.id,o=A.attrName;let s=A.ShadingModel;if(typeof s=="object"&&(s=s.value),!zt.has(t))return null;const g=this.parseParameters(A,i,t);let a;switch(s.toLowerCase()){case"phong":a=new T_;break;case"lambert":a=new qW;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new T_;break}return a.setValues(g),a.name=o,a}parseParameters(A,i,t){const o={};A.BumpFactor&&(o.bumpScale=A.BumpFactor.value),A.Diffuse?o.color=new te().fromArray(A.Diffuse.value):A.DiffuseColor&&(A.DiffuseColor.type==="Color"||A.DiffuseColor.type==="ColorRGB")&&(o.color=new te().fromArray(A.DiffuseColor.value)),A.DisplacementFactor&&(o.displacementScale=A.DisplacementFactor.value),A.Emissive?o.emissive=new te().fromArray(A.Emissive.value):A.EmissiveColor&&(A.EmissiveColor.type==="Color"||A.EmissiveColor.type==="ColorRGB")&&(o.emissive=new te().fromArray(A.EmissiveColor.value)),A.EmissiveFactor&&(o.emissiveIntensity=parseFloat(A.EmissiveFactor.value)),A.Opacity&&(o.opacity=parseFloat(A.Opacity.value)),o.opacity<1&&(o.transparent=!0),A.ReflectionFactor&&(o.reflectivity=A.ReflectionFactor.value),A.Shininess&&(o.shininess=A.Shininess.value),A.Specular?o.specular=new te().fromArray(A.Specular.value):A.SpecularColor&&A.SpecularColor.type==="Color"&&(o.specular=new te().fromArray(A.SpecularColor.value));const s=this;return zt.get(t).children.forEach(function(g){const a=g.relationship;switch(a){case"Bump":o.bumpMap=s.getTexture(i,g.ID);break;case"Maya|TEX_ao_map":o.aoMap=s.getTexture(i,g.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":o.map=s.getTexture(i,g.ID),o.map!==void 0&&("colorSpace"in o.map?o.map.colorSpace="srgb":o.map.encoding=3001);break;case"DisplacementColor":o.displacementMap=s.getTexture(i,g.ID);break;case"EmissiveColor":o.emissiveMap=s.getTexture(i,g.ID),o.emissiveMap!==void 0&&("colorSpace"in o.emissiveMap?o.emissiveMap.colorSpace="srgb":o.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":o.normalMap=s.getTexture(i,g.ID);break;case"ReflectionColor":o.envMap=s.getTexture(i,g.ID),o.envMap!==void 0&&(o.envMap.mapping=$C,"colorSpace"in o.envMap?o.envMap.colorSpace="srgb":o.envMap.encoding=3001);break;case"SpecularColor":o.specularMap=s.getTexture(i,g.ID),o.specularMap!==void 0&&("colorSpace"in o.specularMap?o.specularMap.colorSpace="srgb":o.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":o.alphaMap=s.getTexture(i,g.ID),o.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),o}getTexture(A,i){return"LayeredTexture"in Je.Objects&&i in Je.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),i=zt.get(i).children[0].ID),A.get(i)}parseDeformers(){const A={},i={};if("Deformer"in Je.Objects){const t=Je.Objects.Deformer;for(const o in t){const s=t[o],g=zt.get(parseInt(o));if(s.attrType==="Skin"){const a=this.parseSkeleton(g,t);a.ID=o,g.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=g.parents[0].ID,A[o]=a}else if(s.attrType==="BlendShape"){const a={id:o};a.rawTargets=this.parseMorphTargets(g,t),a.id=o,g.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),i[o]=a}}}return{skeletons:A,morphTargets:i}}parseSkeleton(A,i){const t=[];return A.children.forEach(function(o){const s=i[o.ID];if(s.attrType!=="Cluster")return;const g={ID:o.ID,indices:[],weights:[],transformLink:new jA().fromArray(s.TransformLink.a)};"Indexes"in s&&(g.indices=s.Indexes.a,g.weights=s.Weights.a),t.push(g)}),{rawBones:t,bones:[]}}parseMorphTargets(A,i){const t=[];for(let o=0;o<A.children.length;o++){const s=A.children[o],g=i[s.ID],a={name:g.attrName,initialWeight:g.DeformPercent,id:g.id,fullWeights:g.FullWeights.a};if(g.attrType!=="BlendShapeChannel")return;a.geoID=zt.get(parseInt(s.ID)).children.filter(function(I){return I.relationship===void 0})[0].ID,t.push(a)}return t}parseScene(A,i,t){Xi=new wr;const o=this.parseModels(A.skeletons,i,t),s=Je.Objects.Model,g=this;o.forEach(function(I){const _=s[I.ID];g.setLookAtProperties(I,_),zt.get(I.ID).parents.forEach(function(B){const l=o.get(B.ID);l!==void 0&&l.add(I)}),I.parent===null&&Xi.add(I)}),this.bindSkeleton(A.skeletons,i,o),this.createAmbientLight(),Xi.traverse(function(I){if(I.userData.transformData){I.parent&&(I.userData.transformData.parentMatrix=I.parent.matrix,I.userData.transformData.parentMatrixWorld=I.parent.matrixWorld);const _=LP(I.userData.transformData);I.applyMatrix4(_),I.updateWorldMatrix()}});const a=new S4().parse();Xi.children.length===1&&Xi.children[0].isGroup&&(Xi.children[0].animations=a,Xi=Xi.children[0]),Xi.animations=a}parseModels(A,i,t){const o=new Map,s=Je.Objects.Model;for(const g in s){const a=parseInt(g),I=s[g],_=zt.get(a);let p=this.buildSkeleton(_,A,a,I.attrName);if(!p){switch(I.attrType){case"Camera":p=this.createCamera(_);break;case"Light":p=this.createLight(_);break;case"Mesh":p=this.createMesh(_,i,t);break;case"NurbsCurve":p=this.createCurve(_,i);break;case"LimbNode":case"Root":p=new tc;break;case"Null":default:p=new wr;break}p.name=I.attrName?et.sanitizeNodeName(I.attrName):"",p.ID=a}this.getTransformData(p,I),o.set(a,p)}return o}buildSkeleton(A,i,t,o){let s=null;return A.parents.forEach(function(g){for(const a in i){const I=i[a];I.rawBones.forEach(function(_,p){if(_.ID===g.ID){const B=s;s=new tc,s.matrixWorld.copy(_.transformLink),s.name=o?et.sanitizeNodeName(o):"",s.ID=t,I.bones[p]=s,B!==null&&s.add(B)}})}}),s}createCamera(A){let i,t;if(A.children.forEach(function(o){const s=Je.Objects.NodeAttribute[o.ID];s!==void 0&&(t=s)}),t===void 0)i=new ft;else{let o=0;t.CameraProjectionType!==void 0&&t.CameraProjectionType.value===1&&(o=1);let s=1;t.NearPlane!==void 0&&(s=t.NearPlane.value/1e3);let g=1e3;t.FarPlane!==void 0&&(g=t.FarPlane.value/1e3);let a=window.innerWidth,I=window.innerHeight;t.AspectWidth!==void 0&&t.AspectHeight!==void 0&&(a=t.AspectWidth.value,I=t.AspectHeight.value);const _=a/I;let p=45;t.FieldOfView!==void 0&&(p=t.FieldOfView.value);const B=t.FocalLength?t.FocalLength.value:null;switch(o){case 0:i=new Pi(p,_,s,g),B!==null&&i.setFocalLength(B);break;case 1:i=new wc(-a/2,a/2,I/2,-I/2,s,g);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+o+"."),i=new ft;break}}return i}createLight(A){let i,t;if(A.children.forEach(function(o){const s=Je.Objects.NodeAttribute[o.ID];s!==void 0&&(t=s)}),t===void 0)i=new ft;else{let o;t.LightType===void 0?o=0:o=t.LightType.value;let s=16777215;t.Color!==void 0&&(s=new te().fromArray(t.Color.value));let g=t.Intensity===void 0?1:t.Intensity.value/100;t.CastLightOnObject!==void 0&&t.CastLightOnObject.value===0&&(g=0);let a=0;t.FarAttenuationEnd!==void 0&&(t.EnableFarAttenuation!==void 0&&t.EnableFarAttenuation.value===0?a=0:a=t.FarAttenuationEnd.value);const I=1;switch(o){case 0:i=new MB(s,g,a,I);break;case 1:i=new fP(s,g);break;case 2:let _=Math.PI/3;t.InnerAngle!==void 0&&(_=Ln.degToRad(t.InnerAngle.value));let p=0;t.OuterAngle!==void 0&&(p=Ln.degToRad(t.OuterAngle.value),p=Math.max(p,1)),i=new uP(s,g,a,_,p,I);break;default:console.warn("THREE.FBXLoader: Unknown light type "+t.LightType.value+", defaulting to a PointLight."),i=new MB(s,g);break}t.CastShadows!==void 0&&t.CastShadows.value===1&&(i.castShadow=!0)}return i}createMesh(A,i,t){let o,s=null,g=null;const a=[];return A.children.forEach(function(I){i.has(I.ID)&&(s=i.get(I.ID)),t.has(I.ID)&&a.push(t.get(I.ID))}),a.length>1?g=a:a.length>0?g=a[0]:(g=new T_({color:13421772}),a.push(g)),"color"in s.attributes&&a.forEach(function(I){I.vertexColors=!0}),s.FBX_Deformer?(o=new _P(s,g),o.normalizeSkinWeights()):o=new _i(s,g),o}createCurve(A,i){const t=A.children.reduce(function(s,g){return i.has(g.ID)&&(s=i.get(g.ID)),s},null),o=new Jl({color:3342591,linewidth:1});return new bc(t,o)}getTransformData(A,i){const t={};"InheritType"in i&&(t.inheritType=parseInt(i.InheritType.value)),"RotationOrder"in i?t.eulerOrder=UP(i.RotationOrder.value):t.eulerOrder="ZYX","Lcl_Translation"in i&&(t.translation=i.Lcl_Translation.value),"PreRotation"in i&&(t.preRotation=i.PreRotation.value),"Lcl_Rotation"in i&&(t.rotation=i.Lcl_Rotation.value),"PostRotation"in i&&(t.postRotation=i.PostRotation.value),"Lcl_Scaling"in i&&(t.scale=i.Lcl_Scaling.value),"ScalingOffset"in i&&(t.scalingOffset=i.ScalingOffset.value),"ScalingPivot"in i&&(t.scalingPivot=i.ScalingPivot.value),"RotationOffset"in i&&(t.rotationOffset=i.RotationOffset.value),"RotationPivot"in i&&(t.rotationPivot=i.RotationPivot.value),A.userData.transformData=t}setLookAtProperties(A,i){"LookAtProperty"in i&&zt.get(A.ID).children.forEach(function(o){if(o.relationship==="LookAtProperty"){const s=Je.Objects.Model[o.ID];if("Lcl_Translation"in s){const g=s.Lcl_Translation.value;A.target!==void 0?(A.target.position.fromArray(g),Xi.add(A.target)):A.lookAt(new k().fromArray(g))}}})}bindSkeleton(A,i,t){const o=this.parsePoseNodes();for(const s in A){const g=A[s];zt.get(parseInt(g.ID)).parents.forEach(function(I){if(i.has(I.ID)){const _=I.ID;zt.get(_).parents.forEach(function(B){t.has(B.ID)&&t.get(B.ID).bind(new Rc(g.bones),o[B.ID])})}})}}parsePoseNodes(){const A={};if("Pose"in Je.Objects){const i=Je.Objects.Pose;for(const t in i)if(i[t].attrType==="BindPose"&&i[t].NbPoseNodes>0){const o=i[t].PoseNode;Array.isArray(o)?o.forEach(function(s){A[s.Node]=new jA().fromArray(s.Matrix.a)}):A[o.Node]=new jA().fromArray(o.Matrix.a)}}return A}createAmbientLight(){if("GlobalSettings"in Je&&"AmbientColor"in Je.GlobalSettings){const A=Je.GlobalSettings.AmbientColor.value,i=A[0],t=A[1],o=A[2];if(i!==0||t!==0||o!==0){const s=new te(i,t,o);Xi.add(new g8(s,1))}}}}class D4{parse(A){const i=new Map;if("Geometry"in Je.Objects){const t=Je.Objects.Geometry;for(const o in t){const s=zt.get(parseInt(o)),g=this.parseGeometry(s,t[o],A);i.set(parseInt(o),g)}}return i}parseGeometry(A,i,t){switch(i.attrType){case"Mesh":return this.parseMeshGeometry(A,i,t);case"NurbsCurve":return this.parseNurbsGeometry(i)}}parseMeshGeometry(A,i,t){const o=t.skeletons,s=[],g=A.parents.map(function(B){return Je.Objects.Model[B.ID]});if(g.length===0)return;const a=A.children.reduce(function(B,l){return o[l.ID]!==void 0&&(B=o[l.ID]),B},null);A.children.forEach(function(B){t.morphTargets[B.ID]!==void 0&&s.push(t.morphTargets[B.ID])});const I=g[0],_={};"RotationOrder"in I&&(_.eulerOrder=UP(I.RotationOrder.value)),"InheritType"in I&&(_.inheritType=parseInt(I.InheritType.value)),"GeometricTranslation"in I&&(_.translation=I.GeometricTranslation.value),"GeometricRotation"in I&&(_.rotation=I.GeometricRotation.value),"GeometricScaling"in I&&(_.scale=I.GeometricScaling.value);const p=LP(_);return this.genGeometry(i,a,s,p)}genGeometry(A,i,t,o){const s=new si;A.attrName&&(s.name=A.attrName);const g=this.parseGeoNode(A,i),a=this.genBuffers(g),I=new Xt(a.vertex,3);if(I.applyMatrix4(o),s.setAttribute("position",I),a.colors.length>0&&s.setAttribute("color",new Xt(a.colors,3)),i&&(s.setAttribute("skinIndex",new kl(a.weightsIndices,4)),s.setAttribute("skinWeight",new Xt(a.vertexWeights,4)),s.FBX_Deformer=i),a.normal.length>0){const _=new Me().getNormalMatrix(o),p=new Xt(a.normal,3);p.applyNormalMatrix(_),s.setAttribute("normal",p)}if(a.uvs.forEach(function(_,p){u8==="uv2"&&p++;const B=p===0?"uv":`uv${p}`;s.setAttribute(B,new Xt(a.uvs[p],2))}),g.material&&g.material.mappingType!=="AllSame"){let _=a.materialIndex[0],p=0;if(a.materialIndex.forEach(function(B,l){B!==_&&(s.addGroup(p,l-p,_),_=B,p=l)}),s.groups.length>0){const B=s.groups[s.groups.length-1],l=B.start+B.count;l!==a.materialIndex.length&&s.addGroup(l,a.materialIndex.length-l,_)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,A,t,o),s}parseGeoNode(A,i){const t={};if(t.vertexPositions=A.Vertices!==void 0?A.Vertices.a:[],t.vertexIndices=A.PolygonVertexIndex!==void 0?A.PolygonVertexIndex.a:[],A.LayerElementColor&&(t.color=this.parseVertexColors(A.LayerElementColor[0])),A.LayerElementMaterial&&(t.material=this.parseMaterialIndices(A.LayerElementMaterial[0])),A.LayerElementNormal&&(t.normal=this.parseNormals(A.LayerElementNormal[0])),A.LayerElementUV){t.uv=[];let o=0;for(;A.LayerElementUV[o];)A.LayerElementUV[o].UV&&t.uv.push(this.parseUVs(A.LayerElementUV[o])),o++}return t.weightTable={},i!==null&&(t.skeleton=i,i.rawBones.forEach(function(o,s){o.indices.forEach(function(g,a){t.weightTable[g]===void 0&&(t.weightTable[g]=[]),t.weightTable[g].push({id:s,weight:o.weights[a]})})})),t}genBuffers(A){const i={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let t=0,o=0,s=!1,g=[],a=[],I=[],_=[],p=[],B=[];const l=this;return A.vertexIndices.forEach(function(Q,h){let y,u=!1;Q<0&&(Q=Q^-1,u=!0);let E=[],f=[];if(g.push(Q*3,Q*3+1,Q*3+2),A.color){const m=oC(h,t,Q,A.color);I.push(m[0],m[1],m[2])}if(A.skeleton){if(A.weightTable[Q]!==void 0&&A.weightTable[Q].forEach(function(m){f.push(m.weight),E.push(m.id)}),f.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const m=[0,0,0,0],D=[0,0,0,0];f.forEach(function(L,v){let N=L,U=E[v];D.forEach(function(b,S,G){if(N>b){G[S]=N,N=b;const nA=m[S];m[S]=U,U=nA}})}),E=m,f=D}for(;f.length<4;)f.push(0),E.push(0);for(let m=0;m<4;++m)p.push(f[m]),B.push(E[m])}if(A.normal){const m=oC(h,t,Q,A.normal);a.push(m[0],m[1],m[2])}A.material&&A.material.mappingType!=="AllSame"&&(y=oC(h,t,Q,A.material)[0]),A.uv&&A.uv.forEach(function(m,D){const L=oC(h,t,Q,m);_[D]===void 0&&(_[D]=[]),_[D].push(L[0]),_[D].push(L[1])}),o++,u&&(l.genFace(i,A,g,y,a,I,_,p,B,o),t++,o=0,g=[],a=[],I=[],_=[],p=[],B=[])}),i}genFace(A,i,t,o,s,g,a,I,_,p){for(let B=2;B<p;B++)A.vertex.push(i.vertexPositions[t[0]]),A.vertex.push(i.vertexPositions[t[1]]),A.vertex.push(i.vertexPositions[t[2]]),A.vertex.push(i.vertexPositions[t[(B-1)*3]]),A.vertex.push(i.vertexPositions[t[(B-1)*3+1]]),A.vertex.push(i.vertexPositions[t[(B-1)*3+2]]),A.vertex.push(i.vertexPositions[t[B*3]]),A.vertex.push(i.vertexPositions[t[B*3+1]]),A.vertex.push(i.vertexPositions[t[B*3+2]]),i.skeleton&&(A.vertexWeights.push(I[0]),A.vertexWeights.push(I[1]),A.vertexWeights.push(I[2]),A.vertexWeights.push(I[3]),A.vertexWeights.push(I[(B-1)*4]),A.vertexWeights.push(I[(B-1)*4+1]),A.vertexWeights.push(I[(B-1)*4+2]),A.vertexWeights.push(I[(B-1)*4+3]),A.vertexWeights.push(I[B*4]),A.vertexWeights.push(I[B*4+1]),A.vertexWeights.push(I[B*4+2]),A.vertexWeights.push(I[B*4+3]),A.weightsIndices.push(_[0]),A.weightsIndices.push(_[1]),A.weightsIndices.push(_[2]),A.weightsIndices.push(_[3]),A.weightsIndices.push(_[(B-1)*4]),A.weightsIndices.push(_[(B-1)*4+1]),A.weightsIndices.push(_[(B-1)*4+2]),A.weightsIndices.push(_[(B-1)*4+3]),A.weightsIndices.push(_[B*4]),A.weightsIndices.push(_[B*4+1]),A.weightsIndices.push(_[B*4+2]),A.weightsIndices.push(_[B*4+3])),i.color&&(A.colors.push(g[0]),A.colors.push(g[1]),A.colors.push(g[2]),A.colors.push(g[(B-1)*3]),A.colors.push(g[(B-1)*3+1]),A.colors.push(g[(B-1)*3+2]),A.colors.push(g[B*3]),A.colors.push(g[B*3+1]),A.colors.push(g[B*3+2])),i.material&&i.material.mappingType!=="AllSame"&&(A.materialIndex.push(o),A.materialIndex.push(o),A.materialIndex.push(o)),i.normal&&(A.normal.push(s[0]),A.normal.push(s[1]),A.normal.push(s[2]),A.normal.push(s[(B-1)*3]),A.normal.push(s[(B-1)*3+1]),A.normal.push(s[(B-1)*3+2]),A.normal.push(s[B*3]),A.normal.push(s[B*3+1]),A.normal.push(s[B*3+2])),i.uv&&i.uv.forEach(function(l,Q){A.uvs[Q]===void 0&&(A.uvs[Q]=[]),A.uvs[Q].push(a[Q][0]),A.uvs[Q].push(a[Q][1]),A.uvs[Q].push(a[Q][(B-1)*2]),A.uvs[Q].push(a[Q][(B-1)*2+1]),A.uvs[Q].push(a[Q][B*2]),A.uvs[Q].push(a[Q][B*2+1])})}addMorphTargets(A,i,t,o){if(t.length===0)return;A.morphTargetsRelative=!0,A.morphAttributes.position=[];const s=this;t.forEach(function(g){g.rawTargets.forEach(function(a){const I=Je.Objects.Geometry[a.geoID];I!==void 0&&s.genMorphGeometry(A,i,I,o,a.name)})})}genMorphGeometry(A,i,t,o,s){const g=i.PolygonVertexIndex!==void 0?i.PolygonVertexIndex.a:[],a=t.Vertices!==void 0?t.Vertices.a:[],I=t.Indexes!==void 0?t.Indexes.a:[],_=A.attributes.position.count*3,p=new Float32Array(_);for(let h=0;h<I.length;h++){const y=I[h]*3;p[y]=a[h*3],p[y+1]=a[h*3+1],p[y+2]=a[h*3+2]}const B={vertexIndices:g,vertexPositions:p},l=this.genBuffers(B),Q=new Xt(l.vertex,3);Q.name=s||t.attrName,Q.applyMatrix4(o),A.morphAttributes.position.push(Q)}parseNormals(A){const i=A.MappingInformationType,t=A.ReferenceInformationType,o=A.Normals.a;let s=[];return t==="IndexToDirect"&&("NormalIndex"in A?s=A.NormalIndex.a:"NormalsIndex"in A&&(s=A.NormalsIndex.a)),{dataSize:3,buffer:o,indices:s,mappingType:i,referenceType:t}}parseUVs(A){const i=A.MappingInformationType,t=A.ReferenceInformationType,o=A.UV.a;let s=[];return t==="IndexToDirect"&&(s=A.UVIndex.a),{dataSize:2,buffer:o,indices:s,mappingType:i,referenceType:t}}parseVertexColors(A){const i=A.MappingInformationType,t=A.ReferenceInformationType,o=A.Colors.a;let s=[];return t==="IndexToDirect"&&(s=A.ColorIndex.a),{dataSize:4,buffer:o,indices:s,mappingType:i,referenceType:t}}parseMaterialIndices(A){const i=A.MappingInformationType,t=A.ReferenceInformationType;if(i==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:t};const o=A.Materials.a,s=[];for(let g=0;g<o.length;++g)s.push(g);return{dataSize:1,buffer:o,indices:s,mappingType:i,referenceType:t}}parseNurbsGeometry(A){if(_H===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new si;const i=parseInt(A.Order);if(isNaN(i))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",A.Order,A.id),new si;const t=i-1,o=A.KnotVector.a,s=[],g=A.Points.a;for(let B=0,l=g.length;B<l;B+=4)s.push(new ve().fromArray(g,B));let a,I;if(A.Form==="Closed")s.push(s[0]);else if(A.Form==="Periodic"){a=t,I=o.length-1-a;for(let B=0;B<t;++B)s.push(s[B])}const p=new _H(t,o,s,a,I).getPoints(s.length*12);return new si().setFromPoints(p)}}class S4{parse(){const A=[],i=this.parseClips();if(i!==void 0)for(const t in i){const o=i[t],s=this.addClip(o);A.push(s)}return A}parseClips(){if(Je.Objects.AnimationCurve===void 0)return;const A=this.parseAnimationCurveNodes();this.parseAnimationCurves(A);const i=this.parseAnimationLayers(A);return this.parseAnimStacks(i)}parseAnimationCurveNodes(){const A=Je.Objects.AnimationCurveNode,i=new Map;for(const t in A){const o=A[t];if(o.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:o.id,attr:o.attrName,curves:{}};i.set(s.id,s)}}return i}parseAnimationCurves(A){const i=Je.Objects.AnimationCurve;for(const t in i){const o={id:i[t].id,times:i[t].KeyTime.a.map(v4),values:i[t].KeyValueFloat.a},s=zt.get(o.id);if(s!==void 0){const g=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?A.get(g).curves.x=o:a.match(/Y/)?A.get(g).curves.y=o:a.match(/Z/)?A.get(g).curves.z=o:a.match(/d|DeformPercent/)&&A.has(g)&&(A.get(g).curves.morph=o)}}}parseAnimationLayers(A){const i=Je.Objects.AnimationLayer,t=new Map;for(const o in i){const s=[],g=zt.get(parseInt(o));g!==void 0&&(g.children.forEach(function(I,_){if(A.has(I.ID)){const p=A.get(I.ID);if(p.curves.x!==void 0||p.curves.y!==void 0||p.curves.z!==void 0){if(s[_]===void 0){const B=zt.get(I.ID).parents.filter(function(l){return l.relationship!==void 0})[0].ID;if(B!==void 0){const l=Je.Objects.Model[B.toString()];if(l===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",I);return}const Q={modelName:l.attrName?et.sanitizeNodeName(l.attrName):"",ID:l.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Xi.traverse(function(h){h.ID===l.id&&(Q.transform=h.matrix,h.userData.transformData&&(Q.eulerOrder=h.userData.transformData.eulerOrder))}),Q.transform||(Q.transform=new jA),"PreRotation"in l&&(Q.preRotation=l.PreRotation.value),"PostRotation"in l&&(Q.postRotation=l.PostRotation.value),s[_]=Q}}s[_]&&(s[_][p.attr]=p)}else if(p.curves.morph!==void 0){if(s[_]===void 0){const B=zt.get(I.ID).parents.filter(function(E){return E.relationship!==void 0})[0].ID,l=zt.get(B).parents[0].ID,Q=zt.get(l).parents[0].ID,h=zt.get(Q).parents[0].ID,y=Je.Objects.Model[h],u={modelName:y.attrName?et.sanitizeNodeName(y.attrName):"",morphName:Je.Objects.Deformer[B].attrName};s[_]=u}s[_][p.attr]=p}}}),t.set(parseInt(o),s))}return t}parseAnimStacks(A){const i=Je.Objects.AnimationStack,t={};for(const o in i){const s=zt.get(parseInt(o)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const g=A.get(s[0].ID);t[o]={name:i[o].attrName,layer:g}}return t}addClip(A){let i=[];const t=this;return A.layer.forEach(function(o){i=i.concat(t.generateTracks(o))}),new dP(A.name,-1,i)}generateTracks(A){const i=[];let t=new k,o=new kn,s=new k;if(A.transform&&A.transform.decompose(t,o,s),t=t.toArray(),o=new Si().setFromQuaternion(o,A.eulerOrder).toArray(),s=s.toArray(),A.T!==void 0&&Object.keys(A.T.curves).length>0){const g=this.generateVectorTrack(A.modelName,A.T.curves,t,"position");g!==void 0&&i.push(g)}if(A.R!==void 0&&Object.keys(A.R.curves).length>0){const g=this.generateRotationTrack(A.modelName,A.R.curves,o,A.preRotation,A.postRotation,A.eulerOrder);g!==void 0&&i.push(g)}if(A.S!==void 0&&Object.keys(A.S.curves).length>0){const g=this.generateVectorTrack(A.modelName,A.S.curves,s,"scale");g!==void 0&&i.push(g)}if(A.DeformPercent!==void 0){const g=this.generateMorphTrack(A);g!==void 0&&i.push(g)}return i}generateVectorTrack(A,i,t,o){const s=this.getTimesForAllAxes(i),g=this.getKeyframeTrackValues(s,i,t);return new Ss(A+"."+o,s,g)}generateRotationTrack(A,i,t,o,s,g){i.x!==void 0&&(this.interpolateRotations(i.x),i.x.values=i.x.values.map(Ln.degToRad)),i.y!==void 0&&(this.interpolateRotations(i.y),i.y.values=i.y.values.map(Ln.degToRad)),i.z!==void 0&&(this.interpolateRotations(i.z),i.z.values=i.z.values.map(Ln.degToRad));const a=this.getTimesForAllAxes(i),I=this.getKeyframeTrackValues(a,i,t);o!==void 0&&(o=o.map(Ln.degToRad),o.push(g),o=new Si().fromArray(o),o=new kn().setFromEuler(o)),s!==void 0&&(s=s.map(Ln.degToRad),s.push(g),s=new Si().fromArray(s),s=new kn().setFromEuler(s).invert());const _=new kn,p=new Si,B=[];for(let l=0;l<I.length;l+=3)p.set(I[l],I[l+1],I[l+2],g),_.setFromEuler(p),o!==void 0&&_.premultiply(o),s!==void 0&&_.multiply(s),_.toArray(B,l/3*4);return new Ds(A+".quaternion",a,B)}generateMorphTrack(A){const i=A.DeformPercent.curves.morph,t=i.values.map(function(s){return s/100}),o=Xi.getObjectByName(A.modelName).morphTargetDictionary[A.morphName];return new ms(A.modelName+".morphTargetInfluences["+o+"]",i.times,t)}getTimesForAllAxes(A){let i=[];if(A.x!==void 0&&(i=i.concat(A.x.times)),A.y!==void 0&&(i=i.concat(A.y.times)),A.z!==void 0&&(i=i.concat(A.z.times)),i=i.sort(function(t,o){return t-o}),i.length>1){let t=1,o=i[0];for(let s=1;s<i.length;s++){const g=i[s];g!==o&&(i[t]=g,o=g,t++)}i=i.slice(0,t)}return i}getKeyframeTrackValues(A,i,t){const o=t,s=[];let g=-1,a=-1,I=-1;return A.forEach(function(_){if(i.x&&(g=i.x.times.indexOf(_)),i.y&&(a=i.y.times.indexOf(_)),i.z&&(I=i.z.times.indexOf(_)),g!==-1){const p=i.x.values[g];s.push(p),o[0]=p}else s.push(o[0]);if(a!==-1){const p=i.y.values[a];s.push(p),o[1]=p}else s.push(o[1]);if(I!==-1){const p=i.z.values[I];s.push(p),o[2]=p}else s.push(o[2])}),s}interpolateRotations(A){for(let i=1;i<A.values.length;i++){const t=A.values[i-1],o=A.values[i]-t,s=Math.abs(o);if(s>=180){const g=s/180,a=o/g;let I=t+a;const _=A.times[i-1],B=(A.times[i]-_)/g;let l=_+B;const Q=[],h=[];for(;l<A.times[i];)Q.push(l),l+=B,h.push(I),I+=a;A.times=lH(A.times,i,Q),A.values=lH(A.values,i,h)}}}}class w4{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(A){this.nodeStack.push(A),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(A,i){this.currentProp=A,this.currentPropName=i}parse(A){this.currentIndent=0,this.allNodes=new FP,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const i=this,t=A.split(/[\r\n]+/);return t.forEach(function(o,s){const g=o.match(/^[\s\t]*;/),a=o.match(/^[\s\t]*$/);if(g||a)return;const I=o.match("^\\t{"+i.currentIndent+"}(\\w+):(.*){",""),_=o.match("^\\t{"+i.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),p=o.match("^\\t{"+(i.currentIndent-1)+"}}");I?i.parseNodeBegin(o,I):_?i.parseNodeProperty(o,_,t[++s]):p?i.popStack():o.match(/^[^\s\t}]/)&&i.parseNodePropertyContinued(o)}),this.allNodes}parseNodeBegin(A,i){const t=i[1].trim().replace(/^"/,"").replace(/"$/,""),o=i[2].split(",").map(function(I){return I.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:t},g=this.parseNodeAttr(o),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(t,s):t in a?(t==="PoseNode"?a.PoseNode.push(s):a[t].id!==void 0&&(a[t]={},a[t][a[t].id]=a[t]),g.id!==""&&(a[t][g.id]=s)):typeof g.id=="number"?(a[t]={},a[t][g.id]=s):t!=="Properties70"&&(t==="PoseNode"?a[t]=[s]:a[t]=s),typeof g.id=="number"&&(s.id=g.id),g.name!==""&&(s.attrName=g.name),g.type!==""&&(s.attrType=g.type),this.pushStack(s)}parseNodeAttr(A){let i=A[0];A[0]!==""&&(i=parseInt(A[0]),isNaN(i)&&(i=A[0]));let t="",o="";return A.length>1&&(t=A[1].replace(/^(\w+)::/,""),o=A[2]),{id:i,name:t,type:o}}parseNodeProperty(A,i,t){let o=i[1].replace(/^"/,"").replace(/"$/,"").trim(),s=i[2].replace(/^"/,"").replace(/"$/,"").trim();o==="Content"&&s===","&&(s=t.replace(/"/g,"").replace(/,$/,"").trim());const g=this.getCurrentNode();if(g.name==="Properties70"){this.parseNodeSpecialProperty(A,o,s);return}if(o==="C"){const I=s.split(",").slice(1),_=parseInt(I[0]),p=parseInt(I[1]);let B=s.split(",").slice(3);B=B.map(function(l){return l.trim().replace(/^"/,"")}),o="connections",s=[_,p],F4(s,B),g[o]===void 0&&(g[o]=[])}o==="Node"&&(g.id=s),o in g&&Array.isArray(g[o])?g[o].push(s):o!=="a"?g[o]=s:g.a=s,this.setCurrentProp(g,o),o==="a"&&s.slice(-1)!==","&&(g.a=Y_(s))}parseNodePropertyContinued(A){const i=this.getCurrentNode();i.a+=A,A.slice(-1)!==","&&(i.a=Y_(i.a))}parseNodeSpecialProperty(A,i,t){const o=t.split('",').map(function(p){return p.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=o[0],g=o[1],a=o[2],I=o[3];let _=o[4];switch(g){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":_=parseFloat(_);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":_=Y_(_);break}this.getPrevNode()[s]={type:g,type2:a,flag:I,value:_},this.setCurrentProp(this.getPrevNode(),s)}}class M4{parse(A){const i=new pH(A);i.skip(23);const t=i.getUint32();if(t<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+t);const o=new FP;for(;!this.endOfContent(i);){const s=this.parseNode(i,t);s!==null&&o.add(s.name,s)}return o}endOfContent(A){return A.size()%16===0?(A.getOffset()+160+16&-16)>=A.size():A.getOffset()+160+16>=A.size()}parseNode(A,i){const t={},o=i>=7500?A.getUint64():A.getUint32(),s=i>=7500?A.getUint64():A.getUint32();i>=7500?A.getUint64():A.getUint32();const g=A.getUint8(),a=A.getString(g);if(o===0)return null;const I=[];for(let l=0;l<s;l++)I.push(this.parseProperty(A));const _=I.length>0?I[0]:"",p=I.length>1?I[1]:"",B=I.length>2?I[2]:"";for(t.singleProperty=s===1&&A.getOffset()===o;o>A.getOffset();){const l=this.parseNode(A,i);l!==null&&this.parseSubNode(a,t,l)}return t.propertyList=I,typeof _=="number"&&(t.id=_),p!==""&&(t.attrName=p),B!==""&&(t.attrType=B),a!==""&&(t.name=a),t}parseSubNode(A,i,t){if(t.singleProperty===!0){const o=t.propertyList[0];Array.isArray(o)?(i[t.name]=t,t.a=o):i[t.name]=o}else if(A==="Connections"&&t.name==="C"){const o=[];t.propertyList.forEach(function(s,g){g!==0&&o.push(s)}),i.connections===void 0&&(i.connections=[]),i.connections.push(o)}else if(t.name==="Properties70")Object.keys(t).forEach(function(s){i[s]=t[s]});else if(A==="Properties70"&&t.name==="P"){let o=t.propertyList[0],s=t.propertyList[1];const g=t.propertyList[2],a=t.propertyList[3];let I;o.indexOf("Lcl ")===0&&(o=o.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?I=[t.propertyList[4],t.propertyList[5],t.propertyList[6]]:I=t.propertyList[4],i[o]={type:s,type2:g,flag:a,value:I}}else i[t.name]===void 0?typeof t.id=="number"?(i[t.name]={},i[t.name][t.id]=t):i[t.name]=t:t.name==="PoseNode"?(Array.isArray(i[t.name])||(i[t.name]=[i[t.name]]),i[t.name].push(t)):i[t.name][t.id]===void 0&&(i[t.name][t.id]=t)}parseProperty(A){const i=A.getString(1);let t;switch(i){case"C":return A.getBoolean();case"D":return A.getFloat64();case"F":return A.getFloat32();case"I":return A.getInt32();case"L":return A.getInt64();case"R":return t=A.getUint32(),A.getArrayBuffer(t);case"S":return t=A.getUint32(),A.getString(t);case"Y":return A.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const o=A.getUint32(),s=A.getUint32(),g=A.getUint32();if(s===0)switch(i){case"b":case"c":return A.getBooleanArray(o);case"d":return A.getFloat64Array(o);case"f":return A.getFloat32Array(o);case"i":return A.getInt32Array(o);case"l":return A.getInt64Array(o)}const a=F8(new Uint8Array(A.getArrayBuffer(g))),I=new pH(a.buffer);switch(i){case"b":case"c":return I.getBooleanArray(o);case"d":return I.getFloat64Array(o);case"f":return I.getFloat32Array(o);case"i":return I.getInt32Array(o);case"l":return I.getInt64Array(o)}default:throw new Error("THREE.FBXLoader: Unknown property type "+i)}}}class pH{constructor(A,i){this.dv=new DataView(A),this.offset=0,this.littleEndian=i!==void 0?i:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(A){this.offset+=A}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(A){const i=[];for(let t=0;t<A;t++)i.push(this.getBoolean());return i}getUint8(){const A=this.dv.getUint8(this.offset);return this.offset+=1,A}getInt16(){const A=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,A}getInt32(){const A=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,A}getInt32Array(A){const i=[];for(let t=0;t<A;t++)i.push(this.getInt32());return i}getUint32(){const A=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,A}getInt64(){let A,i;return this.littleEndian?(A=this.getUint32(),i=this.getUint32()):(i=this.getUint32(),A=this.getUint32()),i&2147483648?(i=~i&4294967295,A=~A&4294967295,A===4294967295&&(i=i+1&4294967295),A=A+1&4294967295,-(i*4294967296+A)):i*4294967296+A}getInt64Array(A){const i=[];for(let t=0;t<A;t++)i.push(this.getInt64());return i}getUint64(){let A,i;return this.littleEndian?(A=this.getUint32(),i=this.getUint32()):(i=this.getUint32(),A=this.getUint32()),i*4294967296+A}getFloat32(){const A=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,A}getFloat32Array(A){const i=[];for(let t=0;t<A;t++)i.push(this.getFloat32());return i}getFloat64(){const A=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,A}getFloat64Array(A){const i=[];for(let t=0;t<A;t++)i.push(this.getFloat64());return i}getArrayBuffer(A){const i=this.dv.buffer.slice(this.offset,this.offset+A);return this.offset+=A,i}getString(A){let i=[];for(let o=0;o<A;o++)i[o]=this.getUint8();const t=i.indexOf(0);return t>=0&&(i=i.slice(0,t)),Ng(new Uint8Array(i))}}class FP{add(A,i){this[A]=i}}function R4(n){const A="Kaydara FBX Binary  \0";return n.byteLength>=A.length&&A===TP(n,0,A.length)}function b4(n){const A=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let i=0;function t(o){const s=n[o-1];return n=n.slice(i+o),i++,s}for(let o=0;o<A.length;++o)if(t(1)===A[o])return!1;return!0}function BH(n){const A=/FBXVersion: (\d+)/,i=n.match(A);if(i)return parseInt(i[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function v4(n){return n/46186158e3}const N4=[];function oC(n,A,i,t){let o;switch(t.mappingType){case"ByPolygonVertex":o=n;break;case"ByPolygon":o=A;break;case"ByVertice":o=i;break;case"AllSame":o=t.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+t.mappingType)}t.referenceType==="IndexToDirect"&&(o=t.indices[o]);const s=o*t.dataSize,g=s+t.dataSize;return L4(N4,t.buffer,s,g)}const O_=new Si,js=new k;function LP(n){const A=new jA,i=new jA,t=new jA,o=new jA,s=new jA,g=new jA,a=new jA,I=new jA,_=new jA,p=new jA,B=new jA,l=new jA,Q=n.inheritType?n.inheritType:0;if(n.translation&&A.setPosition(js.fromArray(n.translation)),n.preRotation){const S=n.preRotation.map(Ln.degToRad);S.push(n.eulerOrder),i.makeRotationFromEuler(O_.fromArray(S))}if(n.rotation){const S=n.rotation.map(Ln.degToRad);S.push(n.eulerOrder),t.makeRotationFromEuler(O_.fromArray(S))}if(n.postRotation){const S=n.postRotation.map(Ln.degToRad);S.push(n.eulerOrder),o.makeRotationFromEuler(O_.fromArray(S)),o.invert()}n.scale&&s.scale(js.fromArray(n.scale)),n.scalingOffset&&a.setPosition(js.fromArray(n.scalingOffset)),n.scalingPivot&&g.setPosition(js.fromArray(n.scalingPivot)),n.rotationOffset&&I.setPosition(js.fromArray(n.rotationOffset)),n.rotationPivot&&_.setPosition(js.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(B.copy(n.parentMatrix),p.copy(n.parentMatrixWorld));const h=i.clone().multiply(t).multiply(o),y=new jA;y.extractRotation(p);const u=new jA;u.copyPosition(p);const E=u.clone().invert().multiply(p),f=y.clone().invert().multiply(E),m=s,D=new jA;if(Q===0)D.copy(y).multiply(h).multiply(f).multiply(m);else if(Q===1)D.copy(y).multiply(f).multiply(h).multiply(m);else{const G=new jA().scale(new k().setFromMatrixScale(B)).clone().invert(),nA=f.clone().multiply(G);D.copy(y).multiply(h).multiply(nA).multiply(m)}const L=_.clone().invert(),v=g.clone().invert();let N=A.clone().multiply(I).multiply(_).multiply(i).multiply(t).multiply(o).multiply(L).multiply(a).multiply(g).multiply(s).multiply(v);const U=new jA().copyPosition(N),b=p.clone().multiply(U);return l.copyPosition(b),N=l.clone().multiply(D),N.premultiply(p.invert()),N}function UP(n){n=n||0;const A=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),A[0]):A[n]}function Y_(n){return n.split(",").map(function(i){return parseFloat(i)})}function TP(n,A,i){return A===void 0&&(A=0),i===void 0&&(i=n.byteLength),Ng(new Uint8Array(n,A,i))}function F4(n,A){for(let i=0,t=n.length,o=A.length;i<o;i++,t++)n[t]=A[i]}function L4(n,A,i,t){for(let o=i,s=0;o<t;o++,s++)n[s]=A[o];return n}function lH(n,A,i){return n.slice(0,A).concat(i).concat(n.slice(A))}const U4="modulepreload",T4=function(n,A){return new URL(n,A).href},EH={},G4=function(A,i,t){let o=Promise.resolve();if(i&&i.length>0){const g=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),I=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(i.map(_=>{if(_=T4(_,t),_ in EH)return;EH[_]=!0;const p=_.endsWith(".css"),B=p?'[rel="stylesheet"]':"";if(!!t)for(let h=g.length-1;h>=0;h--){const y=g[h];if(y.href===_&&(!p||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${B}`))return;const Q=document.createElement("link");if(Q.rel=p?"stylesheet":U4,p||(Q.as="script"),Q.crossOrigin="",Q.href=_,I&&Q.setAttribute("nonce",I),document.head.appendChild(Q),p)return new Promise((h,y)=>{Q.addEventListener("load",h),Q.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${_}`)))})}))}function s(g){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=g,window.dispatchEvent(a),!a.defaultPrevented)throw g}return o.then(g=>{for(const a of g||[])a.status==="rejected"&&s(a.reason);return A().catch(s)})},x4=["Recast","Detour","DetourNavMeshBuilder","DetourTileCacheBuilder","NavMeshImporter","NavMeshExporter","CrowdUtils","ChunkyTriMeshUtils","RecastDebugDraw","DetourDebugDraw"],k4=["rcConfig","rcContext","dtNavMeshParams","dtNavMeshCreateParams","RecastLinearAllocator","RecastFastLZCompressor","rcChunkyTriMesh","dtTileCacheParams","dtTileCacheLayerHeader","Vec3","BoolRef","IntRef","UnsignedIntRef","UnsignedCharRef","UnsignedShortRef","FloatRef","IntArray","UnsignedIntArray","UnsignedCharArray","UnsignedShortArray","FloatArray"],x={isNull:n=>x.Module.getPointer(n)===0,destroy:n=>{x.Module.destroy(n)}},lz=async n=>{if(x.Module===void 0){{const A=(await G4(async()=>{const{default:i}=await Promise.resolve().then(()=>oz);return{default:i}},void 0,import.meta.url)).default;x.Module=await A()}for(const A of x4)x[A]=new x.Module[A];for(const A of k4)x[A]=x.Module[A];x.Recast.BORDER_REG,x.Recast.MULTIPLE_REGS,x.Recast.BORDER_VERTEX,x.Recast.AREA_BORDER,x.Recast.CONTOUR_REG_MASK,x.Recast.MESH_NULL_IDX,x.Recast.NULL_AREA,x.Recast.WALKABLE_AREA,x.Recast.NOT_CONNECTED,x.Module.RC_CONTOUR_TESS_WALL_EDGES,x.Module.RC_CONTOUR_TESS_AREA_EDGES,x.Module.RC_LOG_PROGRESS,x.Module.RC_LOG_WARNING,x.Module.RC_LOG_ERROR,x.Module.RC_TIMER_TOTAL,x.Module.RC_TIMER_TEMP,x.Module.RC_TIMER_RASTERIZE_TRIANGLES,x.Module.RC_TIMER_BUILD_COMPACTHEIGHTFIELD,x.Module.RC_TIMER_BUILD_CONTOURS,x.Module.RC_TIMER_BUILD_CONTOURS_TRACE,x.Module.RC_TIMER_BUILD_CONTOURS_SIMPLIFY,x.Module.RC_TIMER_FILTER_BORDER,x.Module.RC_TIMER_FILTER_WALKABLE,x.Module.RC_TIMER_MEDIAN_AREA,x.Module.RC_TIMER_FILTER_LOW_OBSTACLES,x.Module.RC_TIMER_BUILD_POLYMESH,x.Module.RC_TIMER_MERGE_POLYMESH,x.Module.RC_TIMER_ERODE_AREA,x.Module.RC_TIMER_MARK_BOX_AREA,x.Module.RC_TIMER_MARK_CYLINDER_AREA,x.Module.RC_TIMER_MARK_CONVEXPOLY_AREA,x.Module.RC_TIMER_BUILD_DISTANCEFIELD,x.Module.RC_TIMER_BUILD_DISTANCEFIELD_DIST,x.Module.RC_TIMER_BUILD_DISTANCEFIELD_BLUR,x.Module.RC_TIMER_BUILD_REGIONS,x.Module.RC_TIMER_BUILD_REGIONS_WATERSHED,x.Module.RC_TIMER_BUILD_REGIONS_EXPAND,x.Module.RC_TIMER_BUILD_REGIONS_FLOOD,x.Module.RC_TIMER_BUILD_REGIONS_FILTER,x.Module.RC_TIMER_BUILD_LAYERS,x.Module.RC_TIMER_BUILD_POLYMESHDETAIL,x.Module.RC_TIMER_MERGE_POLYMESHDETAIL,x.Module.RC_MAX_TIMERS,x.Detour.FAILURE,x.Detour.SUCCESS,x.Detour.IN_PROGRESS,x.Detour.STATUS_DETAIL_MASK,x.Detour.WRONG_MAGIC,x.Detour.WRONG_VERSION,x.Detour.OUT_OF_MEMORY,x.Detour.INVALID_PARAM,x.Detour.BUFFER_TOO_SMALL,x.Detour.OUT_OF_NODES,x.Detour.PARTIAL_RESULT,x.Detour.ALREADY_OCCUPIED,x.Detour.VERTS_PER_POLYGON,x.Detour.NAVMESH_MAGIC,x.Detour.NAVMESH_VERSION,x.Detour.NAVMESH_STATE_MAGIC,x.Detour.NAVMESH_STATE_VERSION,x.Detour.TILECACHE_MAGIC,x.Detour.TILECACHE_VERSION,x.Detour.TILECACHE_NULL_AREA,x.Detour.TILECACHE_WALKABLE_AREA,x.Detour.TILECACHE_NULL_IDX,x.Detour.NULL_LINK,x.Detour.NULL_LINK,x.Detour.EXT_LINK,x.Detour.OFFMESH_CON_BIDIR,x.Module.DT_STRAIGHTPATH_START,x.Module.DT_STRAIGHTPATH_END,x.Module.DT_STRAIGHTPATH_OFFMESH_CONNECTION,x.Module.DT_STRAIGHTPATH_AREA_CROSSINGS,x.Module.DT_STRAIGHTPATH_ALL_CROSSINGS,x.Module.DT_FINDPATH_ANY_ANGLE,x.Module.DT_RAYCAST_USE_COSTS,x.Module.DT_CROWDAGENT_STATE_INVALID,x.Module.DT_CROWDAGENT_STATE_WALKING,x.Module.DT_CROWDAGENT_STATE_OFFMESH,x.Module.DT_CROWDAGENT_TARGET_NONE,x.Module.DT_CROWDAGENT_TARGET_FAILED,x.Module.DT_CROWDAGENT_TARGET_VALID,x.Module.DT_CROWDAGENT_TARGET_REQUESTING,x.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_QUEUE,x.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_PATH,x.Module.DT_CROWDAGENT_TARGET_VELOCITY,x.Module.DT_COMPRESSEDTILE_FREE_DATA,x.Module.DT_TILE_FREE_DATA}};class zl{get size(){return this.raw.size}constructor(A){this.raw=A}get(A){return this.raw.get(A)}set(A,i){this.raw.set(A,i)}resize(A){this.raw.resize(A)}copy(A){this.raw.resize(A.length),this.getHeapView().set(A)}destroy(){x.destroy(this.raw)}getHeapView(){const A=this.getHeap();return new this.typedArrayClass(A.buffer,this.raw.getDataPointer(),this.size)}toTypedArray(){const A=this.getHeapView(),i=new this.typedArrayClass(this.size);return i.set(A),i}}class is extends zl{constructor(i){super(i??new x.Module.UnsignedIntArray);Mn(this,"typedArrayClass",Uint32Array)}getHeap(){return x.Module.HEAPU32}static fromRaw(i){return new this(i)}}class H4 extends zl{constructor(i){super(i??new x.Module.UnsignedCharArray);Mn(this,"typedArrayClass",Uint8Array)}getHeap(){return x.Module.HEAPU8}static fromRaw(i){return new this(i)}}class QH extends zl{constructor(i){super(i??new x.Module.FloatArray);Mn(this,"typedArrayClass",Float32Array)}getHeap(){return x.Module.HEAPF32}static fromRaw(i){return new this(i)}}const Pe={toRaw:({x:n,y:A,z:i},t)=>t?(t.x=n,t.y=A,t.z=i,t):new x.Module.Vec3(n,A,i),fromRaw:n=>{const{x:A,y:i,z:t}=n;return{x:A,y:i,z:t}},fromArray:([n,A,i])=>({x:n,y:A,z:i}),toArray:({x:n,y:A,z:i})=>[n,A,i],lerp:(n,A,i,t={x:0,y:0,z:0})=>{t.x=n.x+(A.x-n.x)*i,t.y=n.y+(A.y-n.y)*i,t.z=n.z+(A.z-n.z)*i},copy:(n,A={x:0,y:0,z:0})=>{A.x=n.x,A.y=n.y,A.z=n.z}},Fg=(n,A)=>{const i=[];for(let t=0;t<A;t++)i.push(n(t));return i},$i=n=>x.Detour.statusSucceed(n);class K4{constructor(A){this.raw=A}vertBase(){return this.raw.vertBase}triBase(){return this.raw.triBase}vertCount(){return this.raw.vertCount}triCount(){return this.raw.triCount}}class P4{constructor(A){this.raw=A}ref(){return this.raw.ref}next(){return this.raw.next}edge(){return this.raw.edge}side(){return this.raw.side}bmin(){return this.raw.bmin}bmax(){return this.raw.bmax}}class J4{constructor(A){this.raw=A}bmin(){return Pe.fromArray(Fg(A=>this.raw.get_bmin(A),3))}bmax(){return Pe.fromArray(Fg(A=>this.raw.get_bmax(A),3))}i(){return this.raw.i}}class GP{constructor(A){this.raw=A}pos(A){return this.raw.get_pos(A)}rad(){return this.raw.rad}poly(){return this.raw.poly}flags(){return this.raw.flags}side(){return this.raw.side}userId(){return this.raw.userId}}class O4{constructor(A){this.raw=A}magic(){return this.raw.magic}version(){return this.raw.version}x(){return this.raw.x}y(){return this.raw.y}layer(){return this.raw.layer}userId(){return this.raw.userId}polyCount(){return this.raw.polyCount}vertCount(){return this.raw.vertCount}maxLinkCount(){return this.raw.maxLinkCount}detailMeshCount(){return this.raw.detailMeshCount}detailVertCount(){return this.raw.detailVertCount}detailTriCount(){return this.raw.detailTriCount}bvNodeCount(){return this.raw.bvNodeCount}offMeshConCount(){return this.raw.offMeshConCount}offMeshBase(){return this.raw.offMeshBase}walkableHeight(){return this.raw.walkableHeight}walkableRadius(){return this.raw.walkableRadius}walkableClimb(){return this.raw.walkableClimb}bmin(A){return this.raw.get_bmin(A)}bmax(A){return this.raw.get_bmax(A)}bvQuantFactor(){return this.raw.bvQuantFactor}}class UB{constructor(A){this.raw=A}firstLink(){return this.raw.firstLink}verts(A){return this.raw.get_verts(A)}neis(A){return this.raw.get_neis(A)}flags(){return this.raw.flags}vertCount(){return this.raw.vertCount}areaAndType(){return this.raw.get_areaAndtype()}getType(){return this.raw.getType()}}class wo{constructor(A){this.raw=A}salt(){return this.raw.salt}linksFreeList(){return this.raw.linksFreeList}header(){return x.isNull(this.raw.header)?null:new O4(this.raw.header)}polys(A){return new UB(this.raw.get_polys(A))}verts(A){return this.raw.get_verts(A)}links(A){return new P4(this.raw.get_links(A))}detailMeshes(A){return new K4(this.raw.get_detailMeshes(A))}detailVerts(A){return this.raw.get_detailVerts(A)}detailTris(A){return this.raw.get_detailTris(A)}bvTree(A){return new J4(this.raw.get_bvTree(A))}offMeshCons(A){return new GP(this.raw.get_offMeshCons(A))}data(A){return this.raw.get_data(A)}dataSize(){return this.raw.dataSize}flags(){return this.raw.flags}next(){return new wo(this.raw.next)}}class xP{get includeFlags(){return this.raw.getIncludeFlags()}set includeFlags(A){this.raw.setIncludeFlags(A)}get excludeFlags(){return this.raw.getExcludeFlags()}set excludeFlags(A){this.raw.setExcludeFlags(A)}constructor(A){this.raw=A??new x.Module.dtQueryFilter}getAreaCost(A){return this.raw.getAreaCost(A)}setAreaCost(A,i){return this.raw.setAreaCost(A,i)}}class Y4{constructor(A,i){Mn(this,"defaultQueryHalfExtents",{x:1,y:1,z:1});A instanceof x.Module.NavMeshQuery?this.raw=A:(this.raw=new x.Module.NavMeshQuery,this.raw.init(A.raw,(i==null?void 0:i.maxNodes)??2048)),i!=null&&i.defaultQueryFilter?this.defaultFilter=i.defaultQueryFilter:(this.defaultFilter=new xP,this.defaultFilter.includeFlags=65535,this.defaultFilter.excludeFlags=0)}findNearestPoly(A,i){var p;const t=new x.UnsignedIntRef,o=new x.Vec3,s=new x.BoolRef,g=this.raw.findNearestPoly(Pe.toArray(A),Pe.toArray((i==null?void 0:i.halfExtents)??this.defaultQueryHalfExtents),((p=i==null?void 0:i.filter)==null?void 0:p.raw)??this.defaultFilter.raw,t,o,s),a=Pe.fromRaw(o);x.destroy(o);const I=t.value;x.destroy(t);const _=s.value;return x.destroy(s),{success:$i(g),status:g,nearestRef:I,nearestPoint:a,isOverPoly:_}}findPolysAroundCircle(A,i,t,o){const s=(o==null?void 0:o.filter)??this.defaultFilter,g=(o==null?void 0:o.maxPolys)??256,a=new is,I=new is,_=new QH;a.resize(g),I.resize(g),_.resize(g);const p=new x.IntRef,B=this.raw.findPolysAroundCircle(A,Pe.toArray(i),t,s.raw,a.raw,I.raw,_.raw,p,g),l=[...a.getHeapView()];a.destroy();const Q=[...I.getHeapView()];I.destroy();const h=[..._.getHeapView()];_.destroy();const y=p.value;return x.destroy(p),{success:$i(B),status:B,resultRefs:l,resultParents:Q,resultCost:h,resultCount:y}}queryPolygons(A,i,t){const o=(t==null?void 0:t.filter)??this.defaultFilter,s=(t==null?void 0:t.maxPolys)??256,g=new is;g.resize(s);const a=new x.IntRef,I=this.raw.queryPolygons(Pe.toArray(A),Pe.toArray(i),o.raw,g.raw,a,s),_=a.value;x.destroy(a);const p=[...g.getHeapView()];return g.destroy(),{success:$i(I),status:I,polyRefs:p,polyCount:_}}closestPointOnPoly(A,i){const t=new x.Vec3,o=new x.BoolRef,s=this.raw.closestPointOnPoly(A,Pe.toArray(i),t,o),g=Pe.fromRaw(t);x.destroy(t);const a=o.value;return x.destroy(o),{success:$i(s),status:s,closestPoint:g,isPointOverPoly:a}}findClosestPoint(A,i){const t=(i==null?void 0:i.filter)??this.defaultFilter,o=(i==null?void 0:i.halfExtents)??this.defaultQueryHalfExtents,s=new x.UnsignedIntRef,g=new x.Vec3,a=new x.BoolRef,I=this.raw.findClosestPoint(Pe.toArray(A),Pe.toArray(o),t.raw,s,g,a),_=s.value;x.destroy(s);const p=Pe.fromRaw(g);x.destroy(g);const B=a.value;return x.destroy(a),{success:$i(I),status:I,polyRef:_,point:p,isPointOverPoly:B}}findRandomPointAroundCircle(A,i,t){const o=(t==null?void 0:t.filter)??this.defaultFilter,s=(t==null?void 0:t.halfExtents)??this.defaultQueryHalfExtents;let g;if(t!=null&&t.startRef)g=t.startRef;else{const l=this.findNearestPoly(A,{filter:o,halfExtents:s});if(!l.success)return{success:!1,status:l.status,randomPolyRef:0,randomPoint:{x:0,y:0,z:0}};g=l.nearestRef}const a=new x.UnsignedIntRef,I=new x.Vec3,_=this.raw.findRandomPointAroundCircle(g,Pe.toArray(A),i,o.raw,a,I),p=a.value;x.destroy(a);const B=Pe.fromRaw(I);return x.destroy(I),{success:$i(_),status:_,randomPolyRef:p,randomPoint:B}}moveAlongSurface(A,i,t,o){var l;const s=(o==null?void 0:o.maxVisitedSize)??256,g=new x.Vec3,a=new is,I=((l=o==null?void 0:o.filter)==null?void 0:l.raw)??this.defaultFilter.raw,_=this.raw.moveAlongSurface(A,Pe.toArray(i),Pe.toArray(t),I,g,a.raw,s),p=Pe.fromRaw(g);x.destroy(g);const B=[...a.getHeapView()];return a.destroy(),{success:$i(_),status:_,resultPosition:p,visited:B}}findRandomPoint(A){var a;const i=new x.UnsignedIntRef,t=new x.Vec3,o=this.raw.findRandomPoint(((a=A==null?void 0:A.filter)==null?void 0:a.raw)??this.defaultFilter.raw,i,t),s=i.value;x.destroy(i);const g=Pe.fromRaw(t);return x.destroy(t),{success:$i(o),status:o,randomPolyRef:s,randomPoint:g}}getPolyHeight(A,i){const t=new x.FloatRef,o=this.raw.getPolyHeight(A,Pe.toArray(i),t),s=t.value;return x.destroy(t),{success:$i(o),status:o,height:s}}computePath(A,i,t){const o=(t==null?void 0:t.filter)??this.defaultFilter,s=(t==null?void 0:t.halfExtents)??this.defaultQueryHalfExtents,g=this.findNearestPoly(A,{filter:o,halfExtents:s});if(!g.success)return{success:!1,error:{name:"findNearestPoly for start position failed",status:g.status},path:[]};const a=this.findNearestPoly(i,{filter:o,halfExtents:s});if(!a.success)return{success:!1,error:{name:"findNearestPoly for end position failed",status:a.status},path:[]};const I=g.nearestRef,_=a.nearestRef,p=(t==null?void 0:t.maxPathPolys)??256,B=this.findPath(I,_,A,i,{filter:o,maxPathPolys:p});if(!B.success)return{success:!1,error:{name:"findPath unsuccessful",status:B.status},path:[]};if(B.polys.size<=0)return{success:!1,error:{name:"no polygon path found"},path:[]};const l=B.polys.get(B.polys.size-1);let Q={x:i.x,y:i.y,z:i.z};if(l!==_){const m=this.closestPointOnPoly(l,i);if(!m.success)return{success:!1,error:{name:"no closest point on last polygon found",status:m.status},path:[]};Q=m.closestPoint}const h=t==null?void 0:t.maxStraightPathPoints,y=this.findStraightPath(A,Q,B.polys,{maxStraightPathPoints:h});if(!y.success)return{success:!1,error:{name:"findStraightPath unsuccessful",status:y.status},path:[]};const{straightPath:u,straightPathCount:E}=y,f=[];for(let m=0;m<E;m++)f.push({x:u.get(m*3),y:u.get(m*3+1),z:u.get(m*3+2)});return B.polys.destroy(),y.straightPath.destroy(),y.straightPathFlags.destroy(),y.straightPathRefs.destroy(),{success:!0,path:f}}findPath(A,i,t,o,s){const g=(s==null?void 0:s.filter)??this.defaultFilter,a=(s==null?void 0:s.maxPathPolys)??256,I=new is;I.resize(a);const _=this.raw.findPath(A,i,Pe.toArray(t),Pe.toArray(o),g.raw,I.raw,a);return{success:$i(_),status:_,polys:I}}findStraightPath(A,i,t,o){const s=(o==null?void 0:o.maxStraightPathPoints)??256,g=(o==null?void 0:o.straightPathOptions)??0;let a;Array.isArray(t)?(a=new is,a.copy(t)):a=t;const I=new QH;I.resize(s*3);const _=new H4;_.resize(s);const p=new is;p.resize(s);const B=new x.IntRef,l=this.raw.findStraightPath(Pe.toArray(A),Pe.toArray(i),a.raw,I.raw,_.raw,p.raw,B,s,g),Q=B.value;return x.destroy(B),Array.isArray(t)&&a.destroy(),{success:$i(l),status:l,straightPath:I,straightPathFlags:_,straightPathRefs:p,straightPathCount:Q}}raycast(A,i,t,o){var B;const s=new x.Module.dtRaycastHit,g=(o==null?void 0:o.raycastOptions)??0,a=(o==null?void 0:o.prevRef)??0,I=((B=o==null?void 0:o.filter)==null?void 0:B.raw)??this.defaultFilter.raw,_=this.raw.raycast(A,Pe.toArray(i),Pe.toArray(t),I,g,s,a),p={success:$i(_),status:_,t:s.t,hitNormal:Pe.fromArray(Fg(l=>s.get_hitNormal(l),3)),hitEdgeIndex:s.hitEdgeIndex,path:Fg(l=>s.get_path(l),s.pathCount),maxPath:s.maxPath,pathCost:s.pathCost};return x.destroy(s),p}destroy(){this.raw.destroy()}}const kP={radius:.5,height:1,maxAcceleration:20,maxSpeed:6,collisionQueryRange:2.5,pathOptimizationRange:0,separationWeight:0,updateFlags:7,obstacleAvoidanceType:0,queryFilterType:0,userData:0};class q4{constructor(A,i){Mn(this,"interpolatedPosition",{x:0,y:0,z:0});this.crowd=A,this.agentIndex=i,this.raw=A.raw.getEditableAgent(i),this.interpolatedPosition=this.position()}get radius(){return this.raw.params.radius}set radius(A){this.raw.params.radius=A}get height(){return this.raw.params.height}set height(A){this.raw.params.height=A}get maxAcceleration(){return this.raw.params.maxAcceleration}set maxAcceleration(A){this.raw.params.maxAcceleration=A}get maxSpeed(){return this.raw.params.maxSpeed}set maxSpeed(A){this.raw.params.maxSpeed=A}get collisionQueryRange(){return this.raw.params.collisionQueryRange}set collisionQueryRange(A){this.raw.params.collisionQueryRange=A}get pathOptimizationRange(){return this.raw.params.pathOptimizationRange}set pathOptimizationRange(A){this.raw.params.pathOptimizationRange=A}get separationWeight(){return this.raw.params.separationWeight}set separationWeight(A){this.raw.params.separationWeight=A}get updateFlags(){return this.raw.params.updateFlags}set updateFlags(A){this.raw.params.updateFlags=A}get obstacleAvoidanceType(){return this.raw.params.obstacleAvoidanceType}set obstacleAvoidanceType(A){this.raw.params.obstacleAvoidanceType=A}get queryFilterType(){return this.raw.params.queryFilterType}set queryFilterType(A){this.raw.params.queryFilterType=A}get userData(){return this.raw.params.userData}set userData(A){this.raw.params.userData=A}requestMoveTarget(A){const{nearestPoint:i,nearestRef:t}=this.crowd.navMeshQuery.findNearestPoly(A,{halfExtents:this.crowd.navMeshQuery.defaultQueryHalfExtents,filter:this.crowd.navMeshQuery.defaultFilter});return this.crowd.raw.requestMoveTarget(this.agentIndex,t,Pe.toArray(i))}requestMoveVelocity(A){return this.crowd.raw.requestMoveVelocity(this.agentIndex,Pe.toArray(A))}resetMoveTarget(){this.crowd.raw.resetMoveTarget(this.agentIndex)}teleport(A){x.CrowdUtils.agentTeleport(this.crowd.raw,this.agentIndex,Pe.toArray(A),Pe.toArray(this.crowd.navMeshQuery.defaultQueryHalfExtents),this.crowd.navMeshQuery.defaultFilter.raw),Pe.copy(A,this.interpolatedPosition)}position(){return{x:this.raw.get_npos(0),y:this.raw.get_npos(1),z:this.raw.get_npos(2)}}velocity(){return{x:this.raw.get_vel(0),y:this.raw.get_vel(1),z:this.raw.get_vel(2)}}desiredVelocity(){return{x:this.raw.get_dvel(0),y:this.raw.get_dvel(1),z:this.raw.get_dvel(2)}}desiredVelocityObstacleAdjusted(){return{x:this.raw.get_nvel(0),y:this.raw.get_nvel(1),z:this.raw.get_nvel(2)}}state(){return this.raw.state}target(){return{x:this.raw.get_targetPos(0),y:this.raw.get_targetPos(1),z:this.raw.get_targetPos(2)}}nextTargetInPath(){return{x:this.raw.get_cornerVerts(0),y:this.raw.get_cornerVerts(1),z:this.raw.get_cornerVerts(2)}}corners(){const A=[];for(let i=0;i<this.raw.ncorners;i++)A.push({x:this.raw.get_cornerVerts(i*3),y:this.raw.get_cornerVerts(i*3+1),z:this.raw.get_cornerVerts(i*3+2)});return A}parameters(){const{params:A}=this.raw;return{radius:A.radius,height:A.height,maxAcceleration:A.maxAcceleration,maxSpeed:A.maxSpeed,collisionQueryRange:A.collisionQueryRange,pathOptimizationRange:A.pathOptimizationRange,separationWeight:A.separationWeight,updateFlags:A.updateFlags,obstacleAvoidanceType:A.obstacleAvoidanceType,queryFilterType:A.queryFilterType,userData:A.userData}}updateParameters(A){const i={...this.parameters(),...A};this.setParameters(i)}setParameters(A){const i={...kP,...A},t=new x.Module.dtCrowdAgentParams;t.radius=i.radius,t.height=i.height,t.maxAcceleration=i.maxAcceleration,t.maxSpeed=i.maxSpeed,t.collisionQueryRange=i.collisionQueryRange,t.pathOptimizationRange=i.pathOptimizationRange,t.separationWeight=i.separationWeight,t.updateFlags=i.updateFlags,t.obstacleAvoidanceType=i.obstacleAvoidanceType,t.queryFilterType=i.queryFilterType,t.userData=i.userData,this.crowd.raw.updateAgentParameters(this.agentIndex,t)}overOffMeshConnection(){return x.CrowdUtils.overOffMeshConnection(this.crowd.raw,this.agentIndex)}}class Ez{constructor(A,{maxAgents:i,maxAgentRadius:t}){Mn(this,"agents",{});Mn(this,"accumulator",0);this.navMesh=A,this.raw=x.Detour.allocCrowd(),this.raw.init(i,t,A.raw.getNavMesh()),this.navMeshQuery=new Y4(new x.Module.NavMeshQuery(this.raw.getNavMeshQuery()))}update(A,i,t=10){if(i===void 0)this.raw.update(A,void 0);else{this.accumulator+=i;let o=0;for(;this.accumulator>=A&&o<t;)this.raw.update(A,void 0),this.accumulator-=A,o++;const s=this.accumulator%A/A,g=this.getAgents();for(const a of g)Pe.lerp(a.interpolatedPosition,a.position(),s,a.interpolatedPosition)}}addAgent(A,i){const t={...kP,...i},o=new x.Module.dtCrowdAgentParams;o.radius=t.radius,o.height=t.height,o.maxAcceleration=t.maxAcceleration,o.maxSpeed=t.maxSpeed,o.collisionQueryRange=t.collisionQueryRange,o.pathOptimizationRange=t.pathOptimizationRange,o.separationWeight=t.separationWeight,o.updateFlags=t.updateFlags,o.obstacleAvoidanceType=t.obstacleAvoidanceType,o.queryFilterType=t.queryFilterType,o.userData=t.userData;const s=this.raw.addAgent(Pe.toArray(A),o),g=new q4(this,s);return this.agents[s]=g,g}getAgent(A){const i=this.agents[A];return i||null}removeAgent(A){const i=typeof A=="number"?A:A.agentIndex;this.raw.removeAgent(i),delete this.agents[i]}getAgentCount(){return this.raw.getAgentCount()}getActiveAgentCount(){return x.CrowdUtils.getActiveAgentCount(this.raw)}getAgents(){return Object.values(this.agents)}getFilter(A){return new xP(this.raw.getEditableFilter(A))}destroy(){x.Detour.freeCrowd(this.raw)}}class j4{constructor(){Mn(this,"currentPrimitiveType",0);Mn(this,"currentVertices",[]);Mn(this,"primitives",[]);this.debugDrawImpl=new x.Module.DebugDrawImpl,this.debugDrawImpl.handleBegin=(i,t)=>{this.currentPrimitiveType=i,this.currentVertices=[]},this.debugDrawImpl.handleDepthMask=i=>{},this.debugDrawImpl.handleTexture=i=>{},this.debugDrawImpl.handleVertexWithColor=(i,t,o,s)=>{this.vertex(i,t,o,s)},this.debugDrawImpl.handleVertexWithColorAndUV=(i,t,o,s,g,a)=>{this.vertex(i,t,o,s)};const A={[x.Module.DU_DRAW_LINES]:"lines",[x.Module.DU_DRAW_TRIS]:"tris",[x.Module.DU_DRAW_QUADS]:"quads",[x.Module.DU_DRAW_POINTS]:"points"};this.debugDrawImpl.handleEnd=()=>{const i=A[this.currentPrimitiveType];this.primitives.push({type:i,vertices:this.currentVertices})}}flush(){const A=this.primitives;return this.primitives=[],A}drawHeightfieldSolid(A){return x.RecastDebugDraw.debugDrawHeightfieldSolid(this.debugDrawImpl,A.raw),this.flush()}drawHeightfieldWalkable(A){return x.RecastDebugDraw.debugDrawHeightfieldWalkable(this.debugDrawImpl,A.raw),this.flush()}drawCompactHeightfieldSolid(A){return x.RecastDebugDraw.debugDrawCompactHeightfieldSolid(this.debugDrawImpl,A.raw),this.flush()}drawCompactHeightfieldRegions(A){return x.RecastDebugDraw.debugDrawCompactHeightfieldRegions(this.debugDrawImpl,A.raw),this.flush()}drawCompactHeightfieldDistance(A){return x.RecastDebugDraw.debugDrawCompactHeightfieldDistance(this.debugDrawImpl,A.raw),this.flush()}drawHeightfieldLayer(A,i){return x.RecastDebugDraw.debugDrawHeightfieldLayer(this.debugDrawImpl,A.raw,i),this.flush()}drawHeightfieldLayers(A){return x.RecastDebugDraw.debugDrawHeightfieldLayers(this.debugDrawImpl,A.raw),this.flush()}drawRegionConnections(A,i=1){return x.RecastDebugDraw.debugDrawRegionConnections(this.debugDrawImpl,A.raw,i),this.flush()}drawRawContours(A,i=1){return x.RecastDebugDraw.debugDrawRawContours(this.debugDrawImpl,A.raw,i),this.flush()}drawContours(A,i=1){return x.RecastDebugDraw.debugDrawContours(this.debugDrawImpl,A.raw,i),this.flush()}drawPolyMesh(A){return x.RecastDebugDraw.debugDrawPolyMesh(this.debugDrawImpl,A.raw),this.flush()}drawPolyMeshDetail(A){return x.RecastDebugDraw.debugDrawPolyMeshDetail(this.debugDrawImpl,A.raw),this.flush()}drawNavMesh(A,i=0){return x.DetourDebugDraw.debugDrawNavMesh(this.debugDrawImpl,A.raw.getNavMesh(),i),this.flush()}drawNavMeshWithClosedList(A,i,t=0){return x.DetourDebugDraw.debugDrawNavMeshWithClosedList(this.debugDrawImpl,A.raw.m_navMesh,i.raw.m_navQuery,t),this.flush()}drawNavMeshNodes(A){return x.DetourDebugDraw.debugDrawNavMeshNodes(this.debugDrawImpl,A.raw.m_navQuery),this.flush()}drawNavMeshBVTree(A){return x.DetourDebugDraw.debugDrawNavMeshBVTree(this.debugDrawImpl,A.raw.m_navMesh),this.flush()}drawNavMeshPortals(A){return x.DetourDebugDraw.debugDrawNavMeshPortals(this.debugDrawImpl,A.raw.m_navMesh),this.flush()}drawNavMeshPolysWithFlags(A,i,t){return x.DetourDebugDraw.debugDrawNavMeshPolysWithFlags(this.debugDrawImpl,A.raw.m_navMesh,i,t),this.flush()}drawNavMeshPoly(A,i,t){return x.DetourDebugDraw.debugDrawNavMeshPoly(this.debugDrawImpl,A.raw.m_navMesh,i,t),this.flush()}dispose(){x.Module.destroy(this.debugDrawImpl)}vertex(A,i,t,o){const s=(o>>16&255)/255,g=(o>>8&255)/255,a=(o&255)/255,I=(o>>24&255)/255;this.currentVertices.push([A,i,t,s,g,a,I])}}class V4{constructor(A){this.raw=A}tiles(A){return new wo(this.raw.get_tiles(A))}tileCount(){return this.raw.tileCount}}class W4{constructor(A){this.raw=A}data(){return Fg(A=>this.raw.get_data(A),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class z4{constructor(A){this.raw=A}tileX(){return this.raw.tileX}tileY(){return this.raw.tileY}}class Z4{constructor(A){this.raw=A}data(){return Fg(A=>this.raw.get_data(A),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class X4{constructor(A){this.raw=A??new x.Module.NavMesh}initSolo(A){return this.raw.initSolo(A.raw)}initTiled(A){return this.raw.initTiled(A.raw)}addTile(A,i,t){const o=new x.UnsignedIntRef,s=this.raw.addTile(A.raw,i,t,o),g=o.value;return x.destroy(o),{status:s,tileRef:g}}decodePolyId(A){const i=new x.UnsignedIntRef,t=new x.UnsignedIntRef,o=new x.UnsignedIntRef;this.raw.decodePolyId(A,i,t,o);const s=i.value;x.destroy(i);const g=t.value;x.destroy(t);const a=o.value;return x.destroy(o),{tileSalt:s,tileIndex:g,tilePolygonIndex:a}}encodePolyId(A,i,t){return this.raw.encodePolyId(A,i,t)}removeTile(A){return new W4(this.raw.removeTile(A))}calcTileLoc(A){return new z4(this.raw.calcTileLoc(Pe.toArray(A)))}getTileAt(A,i,t){const o=this.raw.getTileAt(A,i,t);return x.isNull(o)?null:new wo(o)}getTilesAt(A,i,t){return new V4(this.raw.getTilesAt(A,i,t))}getTileRefAt(A,i,t){return this.raw.getTileRefAt(A,i,t)}getTileRef(A){return this.raw.getTileRef(A.raw)}getTileByRef(A){const i=this.raw.getTileByRef(A);return x.isNull(i)?null:new wo(i)}getMaxTiles(){return this.raw.getMaxTiles()}getTile(A){return new wo(this.raw.getTile(A))}getTileAndPolyByRef(A){const i=this.raw.getTileAndPolyByRef(A),t=new wo(i.tile),o=new UB(i.poly);return{success:$i(i.status),status:i.status,tile:t,poly:o}}getTileAndPolyByRefUnsafe(A){const i=this.raw.getTileAndPolyByRef(A),t=new wo(i.tile),o=new UB(i.poly);return{tile:t,poly:o}}isValidPolyRef(A){return this.raw.isValidPolyRef(A)}getPolyRefBase(A){return this.raw.getPolyRefBase(A.raw)}getOffMeshConnectionPolyEndPoints(A,i){const t=new x.Vec3,o=new x.Vec3,s=this.raw.getOffMeshConnectionPolyEndPoints(A,i,t,o),g=Pe.fromRaw(t);x.destroy(t);const a=Pe.fromRaw(o);return x.destroy(o),{success:$i(s),status:s,start:g,end:a}}getOffMeshConnectionByRef(A){return new GP(this.raw.getOffMeshConnectionByRef(A))}setPolyFlags(A,i){return this.raw.setPolyFlags(A,i)}getPolyFlags(A){const i=new x.UnsignedShortRef,t=this.raw.getPolyFlags(A,i),o=i.value;return x.destroy(i),{status:t,flags:o}}setPolyArea(A,i){return this.raw.setPolyArea(A,i)}getPolyArea(A){const i=new x.UnsignedCharRef,t=this.raw.getPolyArea(A,i),o=i.value;return x.destroy(i),{status:t,area:o}}getTileStateSize(A){return this.raw.getTileStateSize(A.raw)}storeTileState(A,i){return new Z4(this.raw.storeTileState(A.raw,i))}restoreTileState(A,i,t){return this.raw.restoreTileState(A.raw,i,t)}getDebugNavMesh(){const A=[],i=[];let t=0;const o=this.getMaxTiles();for(let s=0;s<o;s++){const g=this.getTile(s),a=g.header();if(!a)continue;const I=a.polyCount();for(let _=0;_<I;++_){const p=g.polys(_);if(p.getType()===1)continue;const B=p.vertCount(),l=g.detailMeshes(_),Q=l.triBase(),h=l.triCount();for(let y=0;y<h;++y){const u=(Q+y)*4;for(let E=0;E<3;++E){if(g.detailTris(u+E)<B){const f=p.verts(g.detailTris(u+E))*3;A.push(g.verts(f),g.verts(f+1),g.verts(f+2))}else{const f=(l.vertBase()+g.detailTris(u+E)-p.vertCount())*3;A.push(g.detailVerts(f),g.detailVerts(f+1),g.detailVerts(f+2))}i.push(t++)}}}}return[A,i]}destroy(){this.raw.destroy(),x.Module.destroy(this.raw)}}const $4=n=>{const A=n.length*n.BYTES_PER_ELEMENT,i=x.Module._malloc(A),t=new Uint8Array(x.Module.HEAPU8.buffer,i,A);t.set(n);const o=new x.Module.NavMeshExport;return o.dataPointer=t.byteOffset,o.size=n.length,{navMeshExport:o,dataHeap:t}},Qz=n=>{const{navMeshExport:A,dataHeap:i}=$4(n),t=x.NavMeshImporter.importNavMesh(A,void 0);return x.Module._free(i.byteOffset),{navMesh:new X4(t.navMesh)}};NA.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};en.line={uniforms:Hl.merge([NA.common,NA.fog,NA.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}