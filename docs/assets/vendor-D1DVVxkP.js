var D1=Object.defineProperty;var S1=(n,A,i)=>A in n?D1(n,A,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[A]=i;var io=(n,A,i)=>S1(n,typeof A!="symbol"?A+"":A,i);var sH={exports:{}},XC={},gH={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),w1=Symbol.for("react.portal"),R1=Symbol.for("react.fragment"),M1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),v1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),F1=Symbol.for("react.forward_ref"),L1=Symbol.for("react.suspense"),T1=Symbol.for("react.memo"),U1=Symbol.for("react.lazy"),pG=Symbol.iterator;function G1(n){return n===null||typeof n!="object"?null:(n=pG&&n[pG]||n["@@iterator"],typeof n=="function"?n:null)}var aH={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IH=Object.assign,CH={};function vg(n,A,i){this.props=n,this.context=A,this.refs=CH,this.updater=i||aH}vg.prototype.isReactComponent={};vg.prototype.setState=function(n,A){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,A,"setState")};vg.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function cH(){}cH.prototype=vg.prototype;function mB(n,A,i){this.props=n,this.context=A,this.refs=CH,this.updater=i||aH}var DB=mB.prototype=new cH;DB.constructor=mB;IH(DB,vg.prototype);DB.isPureReactComponent=!0;var BG=Array.isArray,_H=Object.prototype.hasOwnProperty,SB={current:null},pH={key:!0,ref:!0,__self:!0,__source:!0};function BH(n,A,i){var t,o={},s=null,g=null;if(A!=null)for(t in A.ref!==void 0&&(g=A.ref),A.key!==void 0&&(s=""+A.key),A)_H.call(A,t)&&!pH.hasOwnProperty(t)&&(o[t]=A[t]);var a=arguments.length-2;if(a===1)o.children=i;else if(1<a){for(var I=Array(a),_=0;_<a;_++)I[_]=arguments[_+2];o.children=I}if(n&&n.defaultProps)for(t in a=n.defaultProps,a)o[t]===void 0&&(o[t]=a[t]);return{$$typeof:za,type:n,key:s,ref:g,props:o,_owner:SB.current}}function x1(n,A){return{$$typeof:za,type:n.type,key:A,ref:n.ref,props:n.props,_owner:n._owner}}function wB(n){return typeof n=="object"&&n!==null&&n.$$typeof===za}function k1(n){var A={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(i){return A[i]})}var EG=/\/+/g;function Dc(n,A){return typeof n=="object"&&n!==null&&n.key!=null?k1(""+n.key):A.toString(36)}function iC(n,A,i,t,o){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var g=!1;if(n===null)g=!0;else switch(s){case"string":case"number":g=!0;break;case"object":switch(n.$$typeof){case za:case w1:g=!0}}if(g)return g=n,o=o(g),n=t===""?"."+Dc(g,0):t,BG(o)?(i="",n!=null&&(i=n.replace(EG,"$&/")+"/"),iC(o,A,i,"",function(_){return _})):o!=null&&(wB(o)&&(o=x1(o,i+(!o.key||g&&g.key===o.key?"":(""+o.key).replace(EG,"$&/")+"/")+n)),A.push(o)),1;if(g=0,t=t===""?".":t+":",BG(n))for(var a=0;a<n.length;a++){s=n[a];var I=t+Dc(s,a);g+=iC(s,A,i,I,o)}else if(I=G1(n),typeof I=="function")for(n=I.call(n),a=0;!(s=n.next()).done;)s=s.value,I=t+Dc(s,a++),g+=iC(s,A,i,I,o);else if(s==="object")throw A=String(n),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return g}function CI(n,A,i){if(n==null)return n;var t=[],o=0;return iC(n,t,"","",function(s){return A.call(i,s,o++)}),t}function H1(n){if(n._status===-1){var A=n._result;A=A(),A.then(function(i){(n._status===0||n._status===-1)&&(n._status=1,n._result=i)},function(i){(n._status===0||n._status===-1)&&(n._status=2,n._result=i)}),n._status===-1&&(n._status=0,n._result=A)}if(n._status===1)return n._result.default;throw n._result}var Ji={current:null},nC={transition:null},K1={ReactCurrentDispatcher:Ji,ReactCurrentBatchConfig:nC,ReactCurrentOwner:SB};function EH(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:CI,forEach:function(n,A,i){CI(n,function(){A.apply(this,arguments)},i)},count:function(n){var A=0;return CI(n,function(){A++}),A},toArray:function(n){return CI(n,function(A){return A})||[]},only:function(n){if(!wB(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ze.Component=vg;ze.Fragment=R1;ze.Profiler=b1;ze.PureComponent=mB;ze.StrictMode=M1;ze.Suspense=L1;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;ze.act=EH;ze.cloneElement=function(n,A,i){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=IH({},n.props),o=n.key,s=n.ref,g=n._owner;if(A!=null){if(A.ref!==void 0&&(s=A.ref,g=SB.current),A.key!==void 0&&(o=""+A.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(I in A)_H.call(A,I)&&!pH.hasOwnProperty(I)&&(t[I]=A[I]===void 0&&a!==void 0?a[I]:A[I])}var I=arguments.length-2;if(I===1)t.children=i;else if(1<I){a=Array(I);for(var _=0;_<I;_++)a[_]=arguments[_+2];t.children=a}return{$$typeof:za,type:n.type,key:o,ref:s,props:t,_owner:g}};ze.createContext=function(n){return n={$$typeof:N1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:v1,_context:n},n.Consumer=n};ze.createElement=BH;ze.createFactory=function(n){var A=BH.bind(null,n);return A.type=n,A};ze.createRef=function(){return{current:null}};ze.forwardRef=function(n){return{$$typeof:F1,render:n}};ze.isValidElement=wB;ze.lazy=function(n){return{$$typeof:U1,_payload:{_status:-1,_result:n},_init:H1}};ze.memo=function(n,A){return{$$typeof:T1,type:n,compare:A===void 0?null:A}};ze.startTransition=function(n){var A=nC.transition;nC.transition={};try{n()}finally{nC.transition=A}};ze.unstable_act=EH;ze.useCallback=function(n,A){return Ji.current.useCallback(n,A)};ze.useContext=function(n){return Ji.current.useContext(n)};ze.useDebugValue=function(){};ze.useDeferredValue=function(n){return Ji.current.useDeferredValue(n)};ze.useEffect=function(n,A){return Ji.current.useEffect(n,A)};ze.useId=function(){return Ji.current.useId()};ze.useImperativeHandle=function(n,A,i){return Ji.current.useImperativeHandle(n,A,i)};ze.useInsertionEffect=function(n,A){return Ji.current.useInsertionEffect(n,A)};ze.useLayoutEffect=function(n,A){return Ji.current.useLayoutEffect(n,A)};ze.useMemo=function(n,A){return Ji.current.useMemo(n,A)};ze.useReducer=function(n,A,i){return Ji.current.useReducer(n,A,i)};ze.useRef=function(n){return Ji.current.useRef(n)};ze.useState=function(n){return Ji.current.useState(n)};ze.useSyncExternalStore=function(n,A,i){return Ji.current.useSyncExternalStore(n,A,i)};ze.useTransition=function(){return Ji.current.useTransition()};ze.version="18.3.1";gH.exports=ze;var lH=gH.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1=lH,J1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),Y1=Object.prototype.hasOwnProperty,q1=P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j1={key:!0,ref:!0,__self:!0,__source:!0};function QH(n,A,i){var t,o={},s=null,g=null;i!==void 0&&(s=""+i),A.key!==void 0&&(s=""+A.key),A.ref!==void 0&&(g=A.ref);for(t in A)Y1.call(A,t)&&!j1.hasOwnProperty(t)&&(o[t]=A[t]);if(n&&n.defaultProps)for(t in A=n.defaultProps,A)o[t]===void 0&&(o[t]=A[t]);return{$$typeof:J1,type:n,key:s,ref:g,props:o,_owner:q1.current}}XC.Fragment=O1;XC.jsx=QH;XC.jsxs=QH;sH.exports=XC;var k4=sH.exports,dH={exports:{}},ln={},hH={exports:{}},uH={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function A(H,sA){var cA=H.length;H.push(sA);A:for(;0<cA;){var vA=cA-1>>>1,jA=H[vA];if(0<o(jA,sA))H[vA]=sA,H[cA]=jA,cA=vA;else break A}}function i(H){return H.length===0?null:H[0]}function t(H){if(H.length===0)return null;var sA=H[0],cA=H.pop();if(cA!==sA){H[0]=cA;A:for(var vA=0,jA=H.length,we=jA>>>1;vA<we;){var rA=2*(vA+1)-1,yA=H[rA],GA=rA+1,NA=H[GA];if(0>o(yA,cA))GA<jA&&0>o(NA,yA)?(H[vA]=NA,H[GA]=cA,vA=GA):(H[vA]=yA,H[rA]=cA,vA=rA);else if(GA<jA&&0>o(NA,cA))H[vA]=NA,H[GA]=cA,vA=GA;else break A}}return sA}function o(H,sA){var cA=H.sortIndex-sA.sortIndex;return cA!==0?cA:H.id-sA.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var g=Date,a=g.now();n.unstable_now=function(){return g.now()-a}}var I=[],_=[],p=1,B=null,E=3,Q=!1,h=!1,y=!1,u=typeof setTimeout=="function"?setTimeout:null,l=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(H){for(var sA=i(_);sA!==null;){if(sA.callback===null)t(_);else if(sA.startTime<=H)t(_),sA.sortIndex=sA.expirationTime,A(I,sA);else break;sA=i(_)}}function D(H){if(y=!1,m(H),!h)if(i(I)!==null)h=!0,nA(T);else{var sA=i(_);sA!==null&&fA(D,sA.startTime-H)}}function T(H,sA){h=!1,y&&(y=!1,l(L),L=-1),Q=!0;var cA=E;try{for(m(sA),B=i(I);B!==null&&(!(B.expirationTime>sA)||H&&!k());){var vA=B.callback;if(typeof vA=="function"){B.callback=null,E=B.priorityLevel;var jA=vA(B.expirationTime<=sA);sA=n.unstable_now(),typeof jA=="function"?B.callback=jA:B===i(I)&&t(I),m(sA)}else t(I);B=i(I)}if(B!==null)var we=!0;else{var rA=i(_);rA!==null&&fA(D,rA.startTime-sA),we=!1}return we}finally{B=null,E=cA,Q=!1}}var v=!1,N=null,L=-1,b=5,S=-1;function k(){return!(n.unstable_now()-S<b)}function oA(){if(N!==null){var H=n.unstable_now();S=H;var sA=!0;try{sA=N(!0,H)}finally{sA?X():(v=!1,N=null)}}else v=!1}var X;if(typeof f=="function")X=function(){f(oA)};else if(typeof MessageChannel<"u"){var gA=new MessageChannel,dA=gA.port2;gA.port1.onmessage=oA,X=function(){dA.postMessage(null)}}else X=function(){u(oA,0)};function nA(H){N=H,v||(v=!0,X())}function fA(H,sA){L=u(function(){H(n.unstable_now())},sA)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){h||Q||(h=!0,nA(T))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return i(I)},n.unstable_next=function(H){switch(E){case 1:case 2:case 3:var sA=3;break;default:sA=E}var cA=E;E=sA;try{return H()}finally{E=cA}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,sA){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var cA=E;E=H;try{return sA()}finally{E=cA}},n.unstable_scheduleCallback=function(H,sA,cA){var vA=n.unstable_now();switch(typeof cA=="object"&&cA!==null?(cA=cA.delay,cA=typeof cA=="number"&&0<cA?vA+cA:vA):cA=vA,H){case 1:var jA=-1;break;case 2:jA=250;break;case 5:jA=1073741823;break;case 4:jA=1e4;break;default:jA=5e3}return jA=cA+jA,H={id:p++,callback:sA,priorityLevel:H,startTime:cA,expirationTime:jA,sortIndex:-1},cA>vA?(H.sortIndex=cA,A(_,H),i(I)===null&&H===i(_)&&(y?(l(L),L=-1):y=!0,fA(D,cA-vA))):(H.sortIndex=jA,A(I,H),h||Q||(h=!0,nA(T))),H},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(H){var sA=E;return function(){var cA=E;E=sA;try{return H.apply(this,arguments)}finally{E=cA}}}})(uH);hH.exports=uH;var V1=hH.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=lH,En=V1;function DA(n){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+n,i=1;i<arguments.length;i++)A+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+n+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fH=new Set,Ma={};function us(n,A){Bg(n,A),Bg(n+"Capture",A)}function Bg(n,A){for(Ma[n]=A,n=0;n<A.length;n++)fH.add(A[n])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x_=Object.prototype.hasOwnProperty,z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lG={},QG={};function Z1(n){return x_.call(QG,n)?!0:x_.call(lG,n)?!1:z1.test(n)?QG[n]=!0:(lG[n]=!0,!1)}function X1(n,A,i,t){if(i!==null&&i.type===0)return!1;switch(typeof A){case"function":case"symbol":return!0;case"boolean":return t?!1:i!==null?!i.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $1(n,A,i,t){if(A===null||typeof A>"u"||X1(n,A,i,t))return!0;if(t)return!1;if(i!==null)switch(i.type){case 3:return!A;case 4:return A===!1;case 5:return isNaN(A);case 6:return isNaN(A)||1>A}return!1}function Oi(n,A,i,t,o,s,g){this.acceptsBooleans=A===2||A===3||A===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=n,this.type=A,this.sanitizeURL=s,this.removeEmptyString=g}var Di={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Di[n]=new Oi(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var A=n[0];Di[A]=new Oi(A,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Di[n]=new Oi(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Di[n]=new Oi(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Di[n]=new Oi(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Di[n]=new Oi(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Di[n]=new Oi(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Di[n]=new Oi(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Di[n]=new Oi(n,5,!1,n.toLowerCase(),null,!1,!1)});var RB=/[\-:]([a-z])/g;function MB(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var A=n.replace(RB,MB);Di[A]=new Oi(A,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var A=n.replace(RB,MB);Di[A]=new Oi(A,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var A=n.replace(RB,MB);Di[A]=new Oi(A,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Di[n]=new Oi(n,1,!1,n.toLowerCase(),null,!1,!1)});Di.xlinkHref=new Oi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Di[n]=new Oi(n,1,!1,n.toLowerCase(),null,!0,!0)});function bB(n,A,i,t){var o=Di.hasOwnProperty(A)?Di[A]:null;(o!==null?o.type!==0:t||!(2<A.length)||A[0]!=="o"&&A[0]!=="O"||A[1]!=="n"&&A[1]!=="N")&&($1(A,i,o,t)&&(i=null),t||o===null?Z1(A)&&(i===null?n.removeAttribute(A):n.setAttribute(A,""+i)):o.mustUseProperty?n[o.propertyName]=i===null?o.type===3?!1:"":i:(A=o.attributeName,t=o.attributeNamespace,i===null?n.removeAttribute(A):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,t?n.setAttributeNS(t,A,i):n.setAttribute(A,i))))}var $r=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cI=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),vB=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),yH=Symbol.for("react.provider"),mH=Symbol.for("react.context"),NB=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),K_=Symbol.for("react.suspense_list"),FB=Symbol.for("react.memo"),_o=Symbol.for("react.lazy"),DH=Symbol.for("react.offscreen"),dG=Symbol.iterator;function jg(n){return n===null||typeof n!="object"?null:(n=dG&&n[dG]||n["@@iterator"],typeof n=="function"?n:null)}var qt=Object.assign,Sc;function Ia(n){if(Sc===void 0)try{throw Error()}catch(i){var A=i.stack.trim().match(/\n( *(at )?)/);Sc=A&&A[1]||""}return`
`+Sc+n}var wc=!1;function Rc(n,A){if(!n||wc)return"";wc=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(A)if(A=function(){throw Error()},Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(_){var t=_}Reflect.construct(n,[],A)}else{try{A.call()}catch(_){t=_}n.call(A.prototype)}else{try{throw Error()}catch(_){t=_}n()}}catch(_){if(_&&t&&typeof _.stack=="string"){for(var o=_.stack.split(`
`),s=t.stack.split(`
`),g=o.length-1,a=s.length-1;1<=g&&0<=a&&o[g]!==s[a];)a--;for(;1<=g&&0<=a;g--,a--)if(o[g]!==s[a]){if(g!==1||a!==1)do if(g--,a--,0>a||o[g]!==s[a]){var I=`
`+o[g].replace(" at new "," at ");return n.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",n.displayName)),I}while(1<=g&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=i}return(n=n?n.displayName||n.name:"")?Ia(n):""}function A2(n){switch(n.tag){case 5:return Ia(n.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return n=Rc(n.type,!1),n;case 11:return n=Rc(n.type.render,!1),n;case 1:return n=Rc(n.type,!0),n;default:return""}}function P_(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qs:return"Fragment";case Ys:return"Portal";case k_:return"Profiler";case vB:return"StrictMode";case H_:return"Suspense";case K_:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case mH:return(n.displayName||"Context")+".Consumer";case yH:return(n._context.displayName||"Context")+".Provider";case NB:var A=n.render;return n=n.displayName,n||(n=A.displayName||A.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case FB:return A=n.displayName||null,A!==null?A:P_(n.type)||"Memo";case _o:A=n._payload,n=n._init;try{return P_(n(A))}catch{}}return null}function e2(n){var A=n.type;switch(n.tag){case 24:return"Cache";case 9:return(A.displayName||"Context")+".Consumer";case 10:return(A._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=A.render,n=n.displayName||n.name||"",A.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return A;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return P_(A);case 8:return A===vB?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A}return null}function To(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function SH(n){var A=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(A==="checkbox"||A==="radio")}function t2(n){var A=SH(n)?"checked":"value",i=Object.getOwnPropertyDescriptor(n.constructor.prototype,A),t=""+n[A];if(!n.hasOwnProperty(A)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,s=i.set;return Object.defineProperty(n,A,{configurable:!0,get:function(){return o.call(this)},set:function(g){t=""+g,s.call(this,g)}}),Object.defineProperty(n,A,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(g){t=""+g},stopTracking:function(){n._valueTracker=null,delete n[A]}}}}function _I(n){n._valueTracker||(n._valueTracker=t2(n))}function wH(n){if(!n)return!1;var A=n._valueTracker;if(!A)return!0;var i=A.getValue(),t="";return n&&(t=SH(n)?n.checked?"true":"false":n.value),n=t,n!==i?(A.setValue(n),!0):!1}function fC(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function J_(n,A){var i=A.checked;return qt({},A,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??n._wrapperState.initialChecked})}function hG(n,A){var i=A.defaultValue==null?"":A.defaultValue,t=A.checked!=null?A.checked:A.defaultChecked;i=To(A.value!=null?A.value:i),n._wrapperState={initialChecked:t,initialValue:i,controlled:A.type==="checkbox"||A.type==="radio"?A.checked!=null:A.value!=null}}function RH(n,A){A=A.checked,A!=null&&bB(n,"checked",A,!1)}function O_(n,A){RH(n,A);var i=To(A.value),t=A.type;if(i!=null)t==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+i):n.value!==""+i&&(n.value=""+i);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}A.hasOwnProperty("value")?Y_(n,A.type,i):A.hasOwnProperty("defaultValue")&&Y_(n,A.type,To(A.defaultValue)),A.checked==null&&A.defaultChecked!=null&&(n.defaultChecked=!!A.defaultChecked)}function uG(n,A,i){if(A.hasOwnProperty("value")||A.hasOwnProperty("defaultValue")){var t=A.type;if(!(t!=="submit"&&t!=="reset"||A.value!==void 0&&A.value!==null))return;A=""+n._wrapperState.initialValue,i||A===n.value||(n.value=A),n.defaultValue=A}i=n.name,i!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,i!==""&&(n.name=i)}function Y_(n,A,i){(A!=="number"||fC(n.ownerDocument)!==n)&&(i==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+i&&(n.defaultValue=""+i))}var Ca=Array.isArray;function ng(n,A,i,t){if(n=n.options,A){A={};for(var o=0;o<i.length;o++)A["$"+i[o]]=!0;for(i=0;i<n.length;i++)o=A.hasOwnProperty("$"+n[i].value),n[i].selected!==o&&(n[i].selected=o),o&&t&&(n[i].defaultSelected=!0)}else{for(i=""+To(i),A=null,o=0;o<n.length;o++){if(n[o].value===i){n[o].selected=!0,t&&(n[o].defaultSelected=!0);return}A!==null||n[o].disabled||(A=n[o])}A!==null&&(A.selected=!0)}}function q_(n,A){if(A.dangerouslySetInnerHTML!=null)throw Error(DA(91));return qt({},A,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fG(n,A){var i=A.value;if(i==null){if(i=A.children,A=A.defaultValue,i!=null){if(A!=null)throw Error(DA(92));if(Ca(i)){if(1<i.length)throw Error(DA(93));i=i[0]}A=i}A==null&&(A=""),i=A}n._wrapperState={initialValue:To(i)}}function MH(n,A){var i=To(A.value),t=To(A.defaultValue);i!=null&&(i=""+i,i!==n.value&&(n.value=i),A.defaultValue==null&&n.defaultValue!==i&&(n.defaultValue=i)),t!=null&&(n.defaultValue=""+t)}function yG(n){var A=n.textContent;A===n._wrapperState.initialValue&&A!==""&&A!==null&&(n.value=A)}function bH(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function j_(n,A){return n==null||n==="http://www.w3.org/1999/xhtml"?bH(A):n==="http://www.w3.org/2000/svg"&&A==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pI,vH=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(A,i,t,o){MSApp.execUnsafeLocalFunction(function(){return n(A,i,t,o)})}:n}(function(n,A){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=A;else{for(pI=pI||document.createElement("div"),pI.innerHTML="<svg>"+A.valueOf().toString()+"</svg>",A=pI.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;A.firstChild;)n.appendChild(A.firstChild)}});function ba(n,A){if(A){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=A;return}}n.textContent=A}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i2=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(n){i2.forEach(function(A){A=A+n.charAt(0).toUpperCase()+n.substring(1),la[A]=la[n]})});function NH(n,A,i){return A==null||typeof A=="boolean"||A===""?"":i||typeof A!="number"||A===0||la.hasOwnProperty(n)&&la[n]?(""+A).trim():A+"px"}function FH(n,A){n=n.style;for(var i in A)if(A.hasOwnProperty(i)){var t=i.indexOf("--")===0,o=NH(i,A[i],t);i==="float"&&(i="cssFloat"),t?n.setProperty(i,o):n[i]=o}}var n2=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function V_(n,A){if(A){if(n2[n]&&(A.children!=null||A.dangerouslySetInnerHTML!=null))throw Error(DA(137,n));if(A.dangerouslySetInnerHTML!=null){if(A.children!=null)throw Error(DA(60));if(typeof A.dangerouslySetInnerHTML!="object"||!("__html"in A.dangerouslySetInnerHTML))throw Error(DA(61))}if(A.style!=null&&typeof A.style!="object")throw Error(DA(62))}}function W_(n,A){if(n.indexOf("-")===-1)return typeof A.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z_=null;function LB(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Z_=null,rg=null,og=null;function mG(n){if(n=$a(n)){if(typeof Z_!="function")throw Error(DA(280));var A=n.stateNode;A&&(A=ic(A),Z_(n.stateNode,n.type,A))}}function LH(n){rg?og?og.push(n):og=[n]:rg=n}function TH(){if(rg){var n=rg,A=og;if(og=rg=null,mG(n),A)for(n=0;n<A.length;n++)mG(A[n])}}function UH(n,A){return n(A)}function GH(){}var Mc=!1;function xH(n,A,i){if(Mc)return n(A,i);Mc=!0;try{return UH(n,A,i)}finally{Mc=!1,(rg!==null||og!==null)&&(GH(),TH())}}function va(n,A){var i=n.stateNode;if(i===null)return null;var t=ic(i);if(t===null)return null;i=t[A];A:switch(A){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break A;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(DA(231,A,typeof i));return i}var X_=!1;if(jr)try{var Vg={};Object.defineProperty(Vg,"passive",{get:function(){X_=!0}}),window.addEventListener("test",Vg,Vg),window.removeEventListener("test",Vg,Vg)}catch{X_=!1}function r2(n,A,i,t,o,s,g,a,I){var _=Array.prototype.slice.call(arguments,3);try{A.apply(i,_)}catch(p){this.onError(p)}}var Qa=!1,yC=null,mC=!1,$_=null,o2={onError:function(n){Qa=!0,yC=n}};function s2(n,A,i,t,o,s,g,a,I){Qa=!1,yC=null,r2.apply(o2,arguments)}function g2(n,A,i,t,o,s,g,a,I){if(s2.apply(this,arguments),Qa){if(Qa){var _=yC;Qa=!1,yC=null}else throw Error(DA(198));mC||(mC=!0,$_=_)}}function fs(n){var A=n,i=n;if(n.alternate)for(;A.return;)A=A.return;else{n=A;do A=n,A.flags&4098&&(i=A.return),n=A.return;while(n)}return A.tag===3?i:null}function kH(n){if(n.tag===13){var A=n.memoizedState;if(A===null&&(n=n.alternate,n!==null&&(A=n.memoizedState)),A!==null)return A.dehydrated}return null}function DG(n){if(fs(n)!==n)throw Error(DA(188))}function a2(n){var A=n.alternate;if(!A){if(A=fs(n),A===null)throw Error(DA(188));return A!==n?null:n}for(var i=n,t=A;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(t=o.return,t!==null){i=t;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return DG(o),n;if(s===t)return DG(o),A;s=s.sibling}throw Error(DA(188))}if(i.return!==t.return)i=o,t=s;else{for(var g=!1,a=o.child;a;){if(a===i){g=!0,i=o,t=s;break}if(a===t){g=!0,t=o,i=s;break}a=a.sibling}if(!g){for(a=s.child;a;){if(a===i){g=!0,i=s,t=o;break}if(a===t){g=!0,t=s,i=o;break}a=a.sibling}if(!g)throw Error(DA(189))}}if(i.alternate!==t)throw Error(DA(190))}if(i.tag!==3)throw Error(DA(188));return i.stateNode.current===i?n:A}function HH(n){return n=a2(n),n!==null?KH(n):null}function KH(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var A=KH(n);if(A!==null)return A;n=n.sibling}return null}var PH=En.unstable_scheduleCallback,SG=En.unstable_cancelCallback,I2=En.unstable_shouldYield,C2=En.unstable_requestPaint,$t=En.unstable_now,c2=En.unstable_getCurrentPriorityLevel,TB=En.unstable_ImmediatePriority,JH=En.unstable_UserBlockingPriority,DC=En.unstable_NormalPriority,_2=En.unstable_LowPriority,OH=En.unstable_IdlePriority,$C=null,dr=null;function p2(n){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot($C,n,void 0,(n.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:l2,B2=Math.log,E2=Math.LN2;function l2(n){return n>>>=0,n===0?32:31-(B2(n)/E2|0)|0}var BI=64,EI=4194304;function ca(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function SC(n,A){var i=n.pendingLanes;if(i===0)return 0;var t=0,o=n.suspendedLanes,s=n.pingedLanes,g=i&268435455;if(g!==0){var a=g&~o;a!==0?t=ca(a):(s&=g,s!==0&&(t=ca(s)))}else g=i&~o,g!==0?t=ca(g):s!==0&&(t=ca(s));if(t===0)return 0;if(A!==0&&A!==t&&!(A&o)&&(o=t&-t,s=A&-A,o>=s||o===16&&(s&4194240)!==0))return A;if(t&4&&(t|=i&16),A=n.entangledLanes,A!==0)for(n=n.entanglements,A&=t;0<A;)i=31-er(A),o=1<<i,t|=n[i],A&=~o;return t}function Q2(n,A){switch(n){case 1:case 2:case 4:return A+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d2(n,A){for(var i=n.suspendedLanes,t=n.pingedLanes,o=n.expirationTimes,s=n.pendingLanes;0<s;){var g=31-er(s),a=1<<g,I=o[g];I===-1?(!(a&i)||a&t)&&(o[g]=Q2(a,A)):I<=A&&(n.expiredLanes|=a),s&=~a}}function Ap(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function YH(){var n=BI;return BI<<=1,!(BI&4194240)&&(BI=64),n}function bc(n){for(var A=[],i=0;31>i;i++)A.push(n);return A}function Za(n,A,i){n.pendingLanes|=A,A!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,A=31-er(A),n[A]=i}function h2(n,A){var i=n.pendingLanes&~A;n.pendingLanes=A,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=A,n.mutableReadLanes&=A,n.entangledLanes&=A,A=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<i;){var o=31-er(i),s=1<<o;A[o]=0,t[o]=-1,n[o]=-1,i&=~s}}function UB(n,A){var i=n.entangledLanes|=A;for(n=n.entanglements;i;){var t=31-er(i),o=1<<t;o&A|n[t]&A&&(n[t]|=A),i&=~o}}var lt=0;function qH(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var jH,GB,VH,WH,zH,ep=!1,lI=[],Do=null,So=null,wo=null,Na=new Map,Fa=new Map,Eo=[],u2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wG(n,A){switch(n){case"focusin":case"focusout":Do=null;break;case"dragenter":case"dragleave":So=null;break;case"mouseover":case"mouseout":wo=null;break;case"pointerover":case"pointerout":Na.delete(A.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(A.pointerId)}}function Wg(n,A,i,t,o,s){return n===null||n.nativeEvent!==s?(n={blockedOn:A,domEventName:i,eventSystemFlags:t,nativeEvent:s,targetContainers:[o]},A!==null&&(A=$a(A),A!==null&&GB(A)),n):(n.eventSystemFlags|=t,A=n.targetContainers,o!==null&&A.indexOf(o)===-1&&A.push(o),n)}function f2(n,A,i,t,o){switch(A){case"focusin":return Do=Wg(Do,n,A,i,t,o),!0;case"dragenter":return So=Wg(So,n,A,i,t,o),!0;case"mouseover":return wo=Wg(wo,n,A,i,t,o),!0;case"pointerover":var s=o.pointerId;return Na.set(s,Wg(Na.get(s)||null,n,A,i,t,o)),!0;case"gotpointercapture":return s=o.pointerId,Fa.set(s,Wg(Fa.get(s)||null,n,A,i,t,o)),!0}return!1}function ZH(n){var A=is(n.target);if(A!==null){var i=fs(A);if(i!==null){if(A=i.tag,A===13){if(A=kH(i),A!==null){n.blockedOn=A,zH(n.priority,function(){VH(i)});return}}else if(A===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rC(n){if(n.blockedOn!==null)return!1;for(var A=n.targetContainers;0<A.length;){var i=tp(n.domEventName,n.eventSystemFlags,A[0],n.nativeEvent);if(i===null){i=n.nativeEvent;var t=new i.constructor(i.type,i);z_=t,i.target.dispatchEvent(t),z_=null}else return A=$a(i),A!==null&&GB(A),n.blockedOn=i,!1;A.shift()}return!0}function RG(n,A,i){rC(n)&&i.delete(A)}function y2(){ep=!1,Do!==null&&rC(Do)&&(Do=null),So!==null&&rC(So)&&(So=null),wo!==null&&rC(wo)&&(wo=null),Na.forEach(RG),Fa.forEach(RG)}function zg(n,A){n.blockedOn===A&&(n.blockedOn=null,ep||(ep=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,y2)))}function La(n){function A(o){return zg(o,n)}if(0<lI.length){zg(lI[0],n);for(var i=1;i<lI.length;i++){var t=lI[i];t.blockedOn===n&&(t.blockedOn=null)}}for(Do!==null&&zg(Do,n),So!==null&&zg(So,n),wo!==null&&zg(wo,n),Na.forEach(A),Fa.forEach(A),i=0;i<Eo.length;i++)t=Eo[i],t.blockedOn===n&&(t.blockedOn=null);for(;0<Eo.length&&(i=Eo[0],i.blockedOn===null);)ZH(i),i.blockedOn===null&&Eo.shift()}var sg=$r.ReactCurrentBatchConfig,wC=!0;function m2(n,A,i,t){var o=lt,s=sg.transition;sg.transition=null;try{lt=1,xB(n,A,i,t)}finally{lt=o,sg.transition=s}}function D2(n,A,i,t){var o=lt,s=sg.transition;sg.transition=null;try{lt=4,xB(n,A,i,t)}finally{lt=o,sg.transition=s}}function xB(n,A,i,t){if(wC){var o=tp(n,A,i,t);if(o===null)Hc(n,A,t,RC,i),wG(n,t);else if(f2(o,n,A,i,t))t.stopPropagation();else if(wG(n,t),A&4&&-1<u2.indexOf(n)){for(;o!==null;){var s=$a(o);if(s!==null&&jH(s),s=tp(n,A,i,t),s===null&&Hc(n,A,t,RC,i),s===o)break;o=s}o!==null&&t.stopPropagation()}else Hc(n,A,t,null,i)}}var RC=null;function tp(n,A,i,t){if(RC=null,n=LB(t),n=is(n),n!==null)if(A=fs(n),A===null)n=null;else if(i=A.tag,i===13){if(n=kH(A),n!==null)return n;n=null}else if(i===3){if(A.stateNode.current.memoizedState.isDehydrated)return A.tag===3?A.stateNode.containerInfo:null;n=null}else A!==n&&(n=null);return RC=n,null}function XH(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c2()){case TB:return 1;case JH:return 4;case DC:case _2:return 16;case OH:return 536870912;default:return 16}default:return 16}}var uo=null,kB=null,oC=null;function $H(){if(oC)return oC;var n,A=kB,i=A.length,t,o="value"in uo?uo.value:uo.textContent,s=o.length;for(n=0;n<i&&A[n]===o[n];n++);var g=i-n;for(t=1;t<=g&&A[i-t]===o[s-t];t++);return oC=o.slice(n,1<t?1-t:void 0)}function sC(n){var A=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&A===13&&(n=13)):n=A,n===10&&(n=13),32<=n||n===13?n:0}function QI(){return!0}function MG(){return!1}function Qn(n){function A(i,t,o,s,g){this._reactName=i,this._targetInst=o,this.type=t,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(i=n[a],this[a]=i?i(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?QI:MG,this.isPropagationStopped=MG,this}return qt(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=QI)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=QI)},persist:function(){},isPersistent:QI}),A}var Ng={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},HB=Qn(Ng),Xa=qt({},Ng,{view:0,detail:0}),S2=Qn(Xa),vc,Nc,Zg,Ac=qt({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:KB,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zg&&(Zg&&n.type==="mousemove"?(vc=n.screenX-Zg.screenX,Nc=n.screenY-Zg.screenY):Nc=vc=0,Zg=n),vc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),bG=Qn(Ac),w2=qt({},Ac,{dataTransfer:0}),R2=Qn(w2),M2=qt({},Xa,{relatedTarget:0}),Fc=Qn(M2),b2=qt({},Ng,{animationName:0,elapsedTime:0,pseudoElement:0}),v2=Qn(b2),N2=qt({},Ng,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F2=Qn(N2),L2=qt({},Ng,{data:0}),vG=Qn(L2),T2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x2(n){var A=this.nativeEvent;return A.getModifierState?A.getModifierState(n):(n=G2[n])?!!A[n]:!1}function KB(){return x2}var k2=qt({},Xa,{key:function(n){if(n.key){var A=T2[n.key]||n.key;if(A!=="Unidentified")return A}return n.type==="keypress"?(n=sC(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?U2[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:KB,charCode:function(n){return n.type==="keypress"?sC(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sC(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H2=Qn(k2),K2=qt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),NG=Qn(K2),P2=qt({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:KB}),J2=Qn(P2),O2=qt({},Ng,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y2=Qn(O2),q2=qt({},Ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j2=Qn(q2),V2=[9,13,27,32],PB=jr&&"CompositionEvent"in window,da=null;jr&&"documentMode"in document&&(da=document.documentMode);var W2=jr&&"TextEvent"in window&&!da,AK=jr&&(!PB||da&&8<da&&11>=da),FG=" ",LG=!1;function eK(n,A){switch(n){case"keyup":return V2.indexOf(A.keyCode)!==-1;case"keydown":return A.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tK(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function z2(n,A){switch(n){case"compositionend":return tK(A);case"keypress":return A.which!==32?null:(LG=!0,FG);case"textInput":return n=A.data,n===FG&&LG?null:n;default:return null}}function Z2(n,A){if(js)return n==="compositionend"||!PB&&eK(n,A)?(n=$H(),oC=kB=uo=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(A.ctrlKey||A.altKey||A.metaKey)||A.ctrlKey&&A.altKey){if(A.char&&1<A.char.length)return A.char;if(A.which)return String.fromCharCode(A.which)}return null;case"compositionend":return AK&&A.locale!=="ko"?null:A.data;default:return null}}var X2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function TG(n){var A=n&&n.nodeName&&n.nodeName.toLowerCase();return A==="input"?!!X2[n.type]:A==="textarea"}function iK(n,A,i,t){LH(t),A=MC(A,"onChange"),0<A.length&&(i=new HB("onChange","change",null,i,t),n.push({event:i,listeners:A}))}var ha=null,Ta=null;function $2(n){pK(n,0)}function ec(n){var A=zs(n);if(wH(A))return n}function AJ(n,A){if(n==="change")return A}var nK=!1;if(jr){var Lc;if(jr){var Tc="oninput"in document;if(!Tc){var UG=document.createElement("div");UG.setAttribute("oninput","return;"),Tc=typeof UG.oninput=="function"}Lc=Tc}else Lc=!1;nK=Lc&&(!document.documentMode||9<document.documentMode)}function GG(){ha&&(ha.detachEvent("onpropertychange",rK),Ta=ha=null)}function rK(n){if(n.propertyName==="value"&&ec(Ta)){var A=[];iK(A,Ta,n,LB(n)),xH($2,A)}}function eJ(n,A,i){n==="focusin"?(GG(),ha=A,Ta=i,ha.attachEvent("onpropertychange",rK)):n==="focusout"&&GG()}function tJ(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ec(Ta)}function iJ(n,A){if(n==="click")return ec(A)}function nJ(n,A){if(n==="input"||n==="change")return ec(A)}function rJ(n,A){return n===A&&(n!==0||1/n===1/A)||n!==n&&A!==A}var nr=typeof Object.is=="function"?Object.is:rJ;function Ua(n,A){if(nr(n,A))return!0;if(typeof n!="object"||n===null||typeof A!="object"||A===null)return!1;var i=Object.keys(n),t=Object.keys(A);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var o=i[t];if(!x_.call(A,o)||!nr(n[o],A[o]))return!1}return!0}function xG(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kG(n,A){var i=xG(n);n=0;for(var t;i;){if(i.nodeType===3){if(t=n+i.textContent.length,n<=A&&t>=A)return{node:i,offset:A-n};n=t}A:{for(;i;){if(i.nextSibling){i=i.nextSibling;break A}i=i.parentNode}i=void 0}i=xG(i)}}function oK(n,A){return n&&A?n===A?!0:n&&n.nodeType===3?!1:A&&A.nodeType===3?oK(n,A.parentNode):"contains"in n?n.contains(A):n.compareDocumentPosition?!!(n.compareDocumentPosition(A)&16):!1:!1}function sK(){for(var n=window,A=fC();A instanceof n.HTMLIFrameElement;){try{var i=typeof A.contentWindow.location.href=="string"}catch{i=!1}if(i)n=A.contentWindow;else break;A=fC(n.document)}return A}function JB(n){var A=n&&n.nodeName&&n.nodeName.toLowerCase();return A&&(A==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||A==="textarea"||n.contentEditable==="true")}function oJ(n){var A=sK(),i=n.focusedElem,t=n.selectionRange;if(A!==i&&i&&i.ownerDocument&&oK(i.ownerDocument.documentElement,i)){if(t!==null&&JB(i)){if(A=t.start,n=t.end,n===void 0&&(n=A),"selectionStart"in i)i.selectionStart=A,i.selectionEnd=Math.min(n,i.value.length);else if(n=(A=i.ownerDocument||document)&&A.defaultView||window,n.getSelection){n=n.getSelection();var o=i.textContent.length,s=Math.min(t.start,o);t=t.end===void 0?s:Math.min(t.end,o),!n.extend&&s>t&&(o=t,t=s,s=o),o=kG(i,s);var g=kG(i,t);o&&g&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(A=A.createRange(),A.setStart(o.node,o.offset),n.removeAllRanges(),s>t?(n.addRange(A),n.extend(g.node,g.offset)):(A.setEnd(g.node,g.offset),n.addRange(A)))}}for(A=[],n=i;n=n.parentNode;)n.nodeType===1&&A.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<A.length;i++)n=A[i],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sJ=jr&&"documentMode"in document&&11>=document.documentMode,Vs=null,ip=null,ua=null,np=!1;function HG(n,A,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;np||Vs==null||Vs!==fC(t)||(t=Vs,"selectionStart"in t&&JB(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ua&&Ua(ua,t)||(ua=t,t=MC(ip,"onSelect"),0<t.length&&(A=new HB("onSelect","select",null,A,i),n.push({event:A,listeners:t}),A.target=Vs)))}function dI(n,A){var i={};return i[n.toLowerCase()]=A.toLowerCase(),i["Webkit"+n]="webkit"+A,i["Moz"+n]="moz"+A,i}var Ws={animationend:dI("Animation","AnimationEnd"),animationiteration:dI("Animation","AnimationIteration"),animationstart:dI("Animation","AnimationStart"),transitionend:dI("Transition","TransitionEnd")},Uc={},gK={};jr&&(gK=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function tc(n){if(Uc[n])return Uc[n];if(!Ws[n])return n;var A=Ws[n],i;for(i in A)if(A.hasOwnProperty(i)&&i in gK)return Uc[n]=A[i];return n}var aK=tc("animationend"),IK=tc("animationiteration"),CK=tc("animationstart"),cK=tc("transitionend"),_K=new Map,KG="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ko(n,A){_K.set(n,A),us(A,[n])}for(var Gc=0;Gc<KG.length;Gc++){var xc=KG[Gc],gJ=xc.toLowerCase(),aJ=xc[0].toUpperCase()+xc.slice(1);ko(gJ,"on"+aJ)}ko(aK,"onAnimationEnd");ko(IK,"onAnimationIteration");ko(CK,"onAnimationStart");ko("dblclick","onDoubleClick");ko("focusin","onFocus");ko("focusout","onBlur");ko(cK,"onTransitionEnd");Bg("onMouseEnter",["mouseout","mouseover"]);Bg("onMouseLeave",["mouseout","mouseover"]);Bg("onPointerEnter",["pointerout","pointerover"]);Bg("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IJ=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function PG(n,A,i){var t=n.type||"unknown-event";n.currentTarget=i,g2(t,A,void 0,n),n.currentTarget=null}function pK(n,A){A=(A&4)!==0;for(var i=0;i<n.length;i++){var t=n[i],o=t.event;t=t.listeners;A:{var s=void 0;if(A)for(var g=t.length-1;0<=g;g--){var a=t[g],I=a.instance,_=a.currentTarget;if(a=a.listener,I!==s&&o.isPropagationStopped())break A;PG(o,a,_),s=I}else for(g=0;g<t.length;g++){if(a=t[g],I=a.instance,_=a.currentTarget,a=a.listener,I!==s&&o.isPropagationStopped())break A;PG(o,a,_),s=I}}}if(mC)throw n=$_,mC=!1,$_=null,n}function vt(n,A){var i=A[ap];i===void 0&&(i=A[ap]=new Set);var t=n+"__bubble";i.has(t)||(BK(A,n,2,!1),i.add(t))}function kc(n,A,i){var t=0;A&&(t|=4),BK(i,n,t,A)}var hI="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[hI]){n[hI]=!0,fH.forEach(function(i){i!=="selectionchange"&&(IJ.has(i)||kc(i,!1,n),kc(i,!0,n))});var A=n.nodeType===9?n:n.ownerDocument;A===null||A[hI]||(A[hI]=!0,kc("selectionchange",!1,A))}}function BK(n,A,i,t){switch(XH(A)){case 1:var o=m2;break;case 4:o=D2;break;default:o=xB}i=o.bind(null,A,i,n),o=void 0,!X_||A!=="touchstart"&&A!=="touchmove"&&A!=="wheel"||(o=!0),t?o!==void 0?n.addEventListener(A,i,{capture:!0,passive:o}):n.addEventListener(A,i,!0):o!==void 0?n.addEventListener(A,i,{passive:o}):n.addEventListener(A,i,!1)}function Hc(n,A,i,t,o){var s=t;if(!(A&1)&&!(A&2)&&t!==null)A:for(;;){if(t===null)return;var g=t.tag;if(g===3||g===4){var a=t.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(g===4)for(g=t.return;g!==null;){var I=g.tag;if((I===3||I===4)&&(I=g.stateNode.containerInfo,I===o||I.nodeType===8&&I.parentNode===o))return;g=g.return}for(;a!==null;){if(g=is(a),g===null)return;if(I=g.tag,I===5||I===6){t=s=g;continue A}a=a.parentNode}}t=t.return}xH(function(){var _=s,p=LB(i),B=[];A:{var E=_K.get(n);if(E!==void 0){var Q=HB,h=n;switch(n){case"keypress":if(sC(i)===0)break A;case"keydown":case"keyup":Q=H2;break;case"focusin":h="focus",Q=Fc;break;case"focusout":h="blur",Q=Fc;break;case"beforeblur":case"afterblur":Q=Fc;break;case"click":if(i.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=bG;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=R2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=J2;break;case aK:case IK:case CK:Q=v2;break;case cK:Q=Y2;break;case"scroll":Q=S2;break;case"wheel":Q=j2;break;case"copy":case"cut":case"paste":Q=F2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=NG}var y=(A&4)!==0,u=!y&&n==="scroll",l=y?E!==null?E+"Capture":null:E;y=[];for(var f=_,m;f!==null;){m=f;var D=m.stateNode;if(m.tag===5&&D!==null&&(m=D,l!==null&&(D=va(f,l),D!=null&&y.push(xa(f,D,m)))),u)break;f=f.return}0<y.length&&(E=new Q(E,h,null,i,p),B.push({event:E,listeners:y}))}}if(!(A&7)){A:{if(E=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",E&&i!==z_&&(h=i.relatedTarget||i.fromElement)&&(is(h)||h[Vr]))break A;if((Q||E)&&(E=p.window===p?p:(E=p.ownerDocument)?E.defaultView||E.parentWindow:window,Q?(h=i.relatedTarget||i.toElement,Q=_,h=h?is(h):null,h!==null&&(u=fs(h),h!==u||h.tag!==5&&h.tag!==6)&&(h=null)):(Q=null,h=_),Q!==h)){if(y=bG,D="onMouseLeave",l="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(y=NG,D="onPointerLeave",l="onPointerEnter",f="pointer"),u=Q==null?E:zs(Q),m=h==null?E:zs(h),E=new y(D,f+"leave",Q,i,p),E.target=u,E.relatedTarget=m,D=null,is(p)===_&&(y=new y(l,f+"enter",h,i,p),y.target=m,y.relatedTarget=u,D=y),u=D,Q&&h)e:{for(y=Q,l=h,f=0,m=y;m;m=Ss(m))f++;for(m=0,D=l;D;D=Ss(D))m++;for(;0<f-m;)y=Ss(y),f--;for(;0<m-f;)l=Ss(l),m--;for(;f--;){if(y===l||l!==null&&y===l.alternate)break e;y=Ss(y),l=Ss(l)}y=null}else y=null;Q!==null&&JG(B,E,Q,y,!1),h!==null&&u!==null&&JG(B,u,h,y,!0)}}A:{if(E=_?zs(_):window,Q=E.nodeName&&E.nodeName.toLowerCase(),Q==="select"||Q==="input"&&E.type==="file")var T=AJ;else if(TG(E))if(nK)T=nJ;else{T=tJ;var v=eJ}else(Q=E.nodeName)&&Q.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(T=iJ);if(T&&(T=T(n,_))){iK(B,T,i,p);break A}v&&v(n,E,_),n==="focusout"&&(v=E._wrapperState)&&v.controlled&&E.type==="number"&&Y_(E,"number",E.value)}switch(v=_?zs(_):window,n){case"focusin":(TG(v)||v.contentEditable==="true")&&(Vs=v,ip=_,ua=null);break;case"focusout":ua=ip=Vs=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,HG(B,i,p);break;case"selectionchange":if(sJ)break;case"keydown":case"keyup":HG(B,i,p)}var N;if(PB)A:{switch(n){case"compositionstart":var L="onCompositionStart";break A;case"compositionend":L="onCompositionEnd";break A;case"compositionupdate":L="onCompositionUpdate";break A}L=void 0}else js?eK(n,i)&&(L="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(L="onCompositionStart");L&&(AK&&i.locale!=="ko"&&(js||L!=="onCompositionStart"?L==="onCompositionEnd"&&js&&(N=$H()):(uo=p,kB="value"in uo?uo.value:uo.textContent,js=!0)),v=MC(_,L),0<v.length&&(L=new vG(L,n,null,i,p),B.push({event:L,listeners:v}),N?L.data=N:(N=tK(i),N!==null&&(L.data=N)))),(N=W2?z2(n,i):Z2(n,i))&&(_=MC(_,"onBeforeInput"),0<_.length&&(p=new vG("onBeforeInput","beforeinput",null,i,p),B.push({event:p,listeners:_}),p.data=N))}pK(B,A)})}function xa(n,A,i){return{instance:n,listener:A,currentTarget:i}}function MC(n,A){for(var i=A+"Capture",t=[];n!==null;){var o=n,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=va(n,i),s!=null&&t.unshift(xa(n,s,o)),s=va(n,A),s!=null&&t.push(xa(n,s,o))),n=n.return}return t}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function JG(n,A,i,t,o){for(var s=A._reactName,g=[];i!==null&&i!==t;){var a=i,I=a.alternate,_=a.stateNode;if(I!==null&&I===t)break;a.tag===5&&_!==null&&(a=_,o?(I=va(i,s),I!=null&&g.unshift(xa(i,I,a))):o||(I=va(i,s),I!=null&&g.push(xa(i,I,a)))),i=i.return}g.length!==0&&n.push({event:A,listeners:g})}var CJ=/\r\n?/g,cJ=/\u0000|\uFFFD/g;function OG(n){return(typeof n=="string"?n:""+n).replace(CJ,`
`).replace(cJ,"")}function uI(n,A,i){if(A=OG(A),OG(n)!==A&&i)throw Error(DA(425))}function bC(){}var rp=null,op=null;function sp(n,A){return n==="textarea"||n==="noscript"||typeof A.children=="string"||typeof A.children=="number"||typeof A.dangerouslySetInnerHTML=="object"&&A.dangerouslySetInnerHTML!==null&&A.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,_J=typeof clearTimeout=="function"?clearTimeout:void 0,YG=typeof Promise=="function"?Promise:void 0,pJ=typeof queueMicrotask=="function"?queueMicrotask:typeof YG<"u"?function(n){return YG.resolve(null).then(n).catch(BJ)}:gp;function BJ(n){setTimeout(function(){throw n})}function Kc(n,A){var i=A,t=0;do{var o=i.nextSibling;if(n.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(t===0){n.removeChild(o),La(A);return}t--}else i!=="$"&&i!=="$?"&&i!=="$!"||t++;i=o}while(i);La(A)}function Ro(n){for(;n!=null;n=n.nextSibling){var A=n.nodeType;if(A===1||A===3)break;if(A===8){if(A=n.data,A==="$"||A==="$!"||A==="$?")break;if(A==="/$")return null}}return n}function qG(n){n=n.previousSibling;for(var A=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"){if(A===0)return n;A--}else i==="/$"&&A++}n=n.previousSibling}return null}var Fg=Math.random().toString(36).slice(2),Er="__reactFiber$"+Fg,ka="__reactProps$"+Fg,Vr="__reactContainer$"+Fg,ap="__reactEvents$"+Fg,EJ="__reactListeners$"+Fg,lJ="__reactHandles$"+Fg;function is(n){var A=n[Er];if(A)return A;for(var i=n.parentNode;i;){if(A=i[Vr]||i[Er]){if(i=A.alternate,A.child!==null||i!==null&&i.child!==null)for(n=qG(n);n!==null;){if(i=n[Er])return i;n=qG(n)}return A}n=i,i=n.parentNode}return null}function $a(n){return n=n[Er]||n[Vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(DA(33))}function ic(n){return n[ka]||null}var Ip=[],Zs=-1;function Ho(n){return{current:n}}function Ft(n){0>Zs||(n.current=Ip[Zs],Ip[Zs]=null,Zs--)}function mt(n,A){Zs++,Ip[Zs]=n.current,n.current=A}var Uo={},Ti=Ho(Uo),tn=Ho(!1),Cs=Uo;function Eg(n,A){var i=n.type.contextTypes;if(!i)return Uo;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===A)return t.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in i)o[s]=A[s];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=A,n.__reactInternalMemoizedMaskedChildContext=o),o}function nn(n){return n=n.childContextTypes,n!=null}function vC(){Ft(tn),Ft(Ti)}function jG(n,A,i){if(Ti.current!==Uo)throw Error(DA(168));mt(Ti,A),mt(tn,i)}function EK(n,A,i){var t=n.stateNode;if(A=A.childContextTypes,typeof t.getChildContext!="function")return i;t=t.getChildContext();for(var o in t)if(!(o in A))throw Error(DA(108,e2(n)||"Unknown",o));return qt({},i,t)}function NC(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Uo,Cs=Ti.current,mt(Ti,n),mt(tn,tn.current),!0}function VG(n,A,i){var t=n.stateNode;if(!t)throw Error(DA(169));i?(n=EK(n,A,Cs),t.__reactInternalMemoizedMergedChildContext=n,Ft(tn),Ft(Ti),mt(Ti,n)):Ft(tn),mt(tn,i)}var xr=null,nc=!1,Pc=!1;function lK(n){xr===null?xr=[n]:xr.push(n)}function QJ(n){nc=!0,lK(n)}function Ko(){if(!Pc&&xr!==null){Pc=!0;var n=0,A=lt;try{var i=xr;for(lt=1;n<i.length;n++){var t=i[n];do t=t(!0);while(t!==null)}xr=null,nc=!1}catch(o){throw xr!==null&&(xr=xr.slice(n+1)),PH(TB,Ko),o}finally{lt=A,Pc=!1}}return null}var Xs=[],$s=0,FC=null,LC=0,Mn=[],bn=0,cs=null,kr=1,Hr="";function Xo(n,A){Xs[$s++]=LC,Xs[$s++]=FC,FC=n,LC=A}function QK(n,A,i){Mn[bn++]=kr,Mn[bn++]=Hr,Mn[bn++]=cs,cs=n;var t=kr;n=Hr;var o=32-er(t)-1;t&=~(1<<o),i+=1;var s=32-er(A)+o;if(30<s){var g=o-o%5;s=(t&(1<<g)-1).toString(32),t>>=g,o-=g,kr=1<<32-er(A)+o|i<<o|t,Hr=s+n}else kr=1<<s|i<<o|t,Hr=n}function OB(n){n.return!==null&&(Xo(n,1),QK(n,1,0))}function YB(n){for(;n===FC;)FC=Xs[--$s],Xs[$s]=null,LC=Xs[--$s],Xs[$s]=null;for(;n===cs;)cs=Mn[--bn],Mn[bn]=null,Hr=Mn[--bn],Mn[bn]=null,kr=Mn[--bn],Mn[bn]=null}var Bn=null,pn=null,Jt=!1,zn=null;function dK(n,A){var i=Nn(5,null,null,0);i.elementType="DELETED",i.stateNode=A,i.return=n,A=n.deletions,A===null?(n.deletions=[i],n.flags|=16):A.push(i)}function WG(n,A){switch(n.tag){case 5:var i=n.type;return A=A.nodeType!==1||i.toLowerCase()!==A.nodeName.toLowerCase()?null:A,A!==null?(n.stateNode=A,Bn=n,pn=Ro(A.firstChild),!0):!1;case 6:return A=n.pendingProps===""||A.nodeType!==3?null:A,A!==null?(n.stateNode=A,Bn=n,pn=null,!0):!1;case 13:return A=A.nodeType!==8?null:A,A!==null?(i=cs!==null?{id:kr,overflow:Hr}:null,n.memoizedState={dehydrated:A,treeContext:i,retryLane:1073741824},i=Nn(18,null,null,0),i.stateNode=A,i.return=n,n.child=i,Bn=n,pn=null,!0):!1;default:return!1}}function Cp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cp(n){if(Jt){var A=pn;if(A){var i=A;if(!WG(n,A)){if(Cp(n))throw Error(DA(418));A=Ro(i.nextSibling);var t=Bn;A&&WG(n,A)?dK(t,i):(n.flags=n.flags&-4097|2,Jt=!1,Bn=n)}}else{if(Cp(n))throw Error(DA(418));n.flags=n.flags&-4097|2,Jt=!1,Bn=n}}}function zG(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function fI(n){if(n!==Bn)return!1;if(!Jt)return zG(n),Jt=!0,!1;var A;if((A=n.tag!==3)&&!(A=n.tag!==5)&&(A=n.type,A=A!=="head"&&A!=="body"&&!sp(n.type,n.memoizedProps)),A&&(A=pn)){if(Cp(n))throw hK(),Error(DA(418));for(;A;)dK(n,A),A=Ro(A.nextSibling)}if(zG(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(DA(317));A:{for(n=n.nextSibling,A=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"){if(A===0){pn=Ro(n.nextSibling);break A}A--}else i!=="$"&&i!=="$!"&&i!=="$?"||A++}n=n.nextSibling}pn=null}}else pn=Bn?Ro(n.stateNode.nextSibling):null;return!0}function hK(){for(var n=pn;n;)n=Ro(n.nextSibling)}function lg(){pn=Bn=null,Jt=!1}function qB(n){zn===null?zn=[n]:zn.push(n)}var dJ=$r.ReactCurrentBatchConfig;function Xg(n,A,i){if(n=i.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(DA(309));var t=i.stateNode}if(!t)throw Error(DA(147,n));var o=t,s=""+n;return A!==null&&A.ref!==null&&typeof A.ref=="function"&&A.ref._stringRef===s?A.ref:(A=function(g){var a=o.refs;g===null?delete a[s]:a[s]=g},A._stringRef=s,A)}if(typeof n!="string")throw Error(DA(284));if(!i._owner)throw Error(DA(290,n))}return n}function yI(n,A){throw n=Object.prototype.toString.call(A),Error(DA(31,n==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":n))}function ZG(n){var A=n._init;return A(n._payload)}function uK(n){function A(l,f){if(n){var m=l.deletions;m===null?(l.deletions=[f],l.flags|=16):m.push(f)}}function i(l,f){if(!n)return null;for(;f!==null;)A(l,f),f=f.sibling;return null}function t(l,f){for(l=new Map;f!==null;)f.key!==null?l.set(f.key,f):l.set(f.index,f),f=f.sibling;return l}function o(l,f){return l=No(l,f),l.index=0,l.sibling=null,l}function s(l,f,m){return l.index=m,n?(m=l.alternate,m!==null?(m=m.index,m<f?(l.flags|=2,f):m):(l.flags|=2,f)):(l.flags|=1048576,f)}function g(l){return n&&l.alternate===null&&(l.flags|=2),l}function a(l,f,m,D){return f===null||f.tag!==6?(f=Wc(m,l.mode,D),f.return=l,f):(f=o(f,m),f.return=l,f)}function I(l,f,m,D){var T=m.type;return T===qs?p(l,f,m.props.children,D,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_o&&ZG(T)===f.type)?(D=o(f,m.props),D.ref=Xg(l,f,m),D.return=l,D):(D=pC(m.type,m.key,m.props,null,l.mode,D),D.ref=Xg(l,f,m),D.return=l,D)}function _(l,f,m,D){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=zc(m,l.mode,D),f.return=l,f):(f=o(f,m.children||[]),f.return=l,f)}function p(l,f,m,D,T){return f===null||f.tag!==7?(f=as(m,l.mode,D,T),f.return=l,f):(f=o(f,m),f.return=l,f)}function B(l,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wc(""+f,l.mode,m),f.return=l,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cI:return m=pC(f.type,f.key,f.props,null,l.mode,m),m.ref=Xg(l,null,f),m.return=l,m;case Ys:return f=zc(f,l.mode,m),f.return=l,f;case _o:var D=f._init;return B(l,D(f._payload),m)}if(Ca(f)||jg(f))return f=as(f,l.mode,m,null),f.return=l,f;yI(l,f)}return null}function E(l,f,m,D){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(l,f,""+m,D);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cI:return m.key===T?I(l,f,m,D):null;case Ys:return m.key===T?_(l,f,m,D):null;case _o:return T=m._init,E(l,f,T(m._payload),D)}if(Ca(m)||jg(m))return T!==null?null:p(l,f,m,D,null);yI(l,m)}return null}function Q(l,f,m,D,T){if(typeof D=="string"&&D!==""||typeof D=="number")return l=l.get(m)||null,a(f,l,""+D,T);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case cI:return l=l.get(D.key===null?m:D.key)||null,I(f,l,D,T);case Ys:return l=l.get(D.key===null?m:D.key)||null,_(f,l,D,T);case _o:var v=D._init;return Q(l,f,m,v(D._payload),T)}if(Ca(D)||jg(D))return l=l.get(m)||null,p(f,l,D,T,null);yI(f,D)}return null}function h(l,f,m,D){for(var T=null,v=null,N=f,L=f=0,b=null;N!==null&&L<m.length;L++){N.index>L?(b=N,N=null):b=N.sibling;var S=E(l,N,m[L],D);if(S===null){N===null&&(N=b);break}n&&N&&S.alternate===null&&A(l,N),f=s(S,f,L),v===null?T=S:v.sibling=S,v=S,N=b}if(L===m.length)return i(l,N),Jt&&Xo(l,L),T;if(N===null){for(;L<m.length;L++)N=B(l,m[L],D),N!==null&&(f=s(N,f,L),v===null?T=N:v.sibling=N,v=N);return Jt&&Xo(l,L),T}for(N=t(l,N);L<m.length;L++)b=Q(N,l,L,m[L],D),b!==null&&(n&&b.alternate!==null&&N.delete(b.key===null?L:b.key),f=s(b,f,L),v===null?T=b:v.sibling=b,v=b);return n&&N.forEach(function(k){return A(l,k)}),Jt&&Xo(l,L),T}function y(l,f,m,D){var T=jg(m);if(typeof T!="function")throw Error(DA(150));if(m=T.call(m),m==null)throw Error(DA(151));for(var v=T=null,N=f,L=f=0,b=null,S=m.next();N!==null&&!S.done;L++,S=m.next()){N.index>L?(b=N,N=null):b=N.sibling;var k=E(l,N,S.value,D);if(k===null){N===null&&(N=b);break}n&&N&&k.alternate===null&&A(l,N),f=s(k,f,L),v===null?T=k:v.sibling=k,v=k,N=b}if(S.done)return i(l,N),Jt&&Xo(l,L),T;if(N===null){for(;!S.done;L++,S=m.next())S=B(l,S.value,D),S!==null&&(f=s(S,f,L),v===null?T=S:v.sibling=S,v=S);return Jt&&Xo(l,L),T}for(N=t(l,N);!S.done;L++,S=m.next())S=Q(N,l,L,S.value,D),S!==null&&(n&&S.alternate!==null&&N.delete(S.key===null?L:S.key),f=s(S,f,L),v===null?T=S:v.sibling=S,v=S);return n&&N.forEach(function(oA){return A(l,oA)}),Jt&&Xo(l,L),T}function u(l,f,m,D){if(typeof m=="object"&&m!==null&&m.type===qs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cI:A:{for(var T=m.key,v=f;v!==null;){if(v.key===T){if(T=m.type,T===qs){if(v.tag===7){i(l,v.sibling),f=o(v,m.props.children),f.return=l,l=f;break A}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_o&&ZG(T)===v.type){i(l,v.sibling),f=o(v,m.props),f.ref=Xg(l,v,m),f.return=l,l=f;break A}i(l,v);break}else A(l,v);v=v.sibling}m.type===qs?(f=as(m.props.children,l.mode,D,m.key),f.return=l,l=f):(D=pC(m.type,m.key,m.props,null,l.mode,D),D.ref=Xg(l,f,m),D.return=l,l=D)}return g(l);case Ys:A:{for(v=m.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){i(l,f.sibling),f=o(f,m.children||[]),f.return=l,l=f;break A}else{i(l,f);break}else A(l,f);f=f.sibling}f=zc(m,l.mode,D),f.return=l,l=f}return g(l);case _o:return v=m._init,u(l,f,v(m._payload),D)}if(Ca(m))return h(l,f,m,D);if(jg(m))return y(l,f,m,D);yI(l,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(i(l,f.sibling),f=o(f,m),f.return=l,l=f):(i(l,f),f=Wc(m,l.mode,D),f.return=l,l=f),g(l)):i(l,f)}return u}var Qg=uK(!0),fK=uK(!1),TC=Ho(null),UC=null,Ag=null,jB=null;function VB(){jB=Ag=UC=null}function WB(n){var A=TC.current;Ft(TC),n._currentValue=A}function _p(n,A,i){for(;n!==null;){var t=n.alternate;if((n.childLanes&A)!==A?(n.childLanes|=A,t!==null&&(t.childLanes|=A)):t!==null&&(t.childLanes&A)!==A&&(t.childLanes|=A),n===i)break;n=n.return}}function gg(n,A){UC=n,jB=Ag=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&A&&(Xi=!0),n.firstContext=null)}function Gn(n){var A=n._currentValue;if(jB!==n)if(n={context:n,memoizedValue:A,next:null},Ag===null){if(UC===null)throw Error(DA(308));Ag=n,UC.dependencies={lanes:0,firstContext:n}}else Ag=Ag.next=n;return A}var ns=null;function zB(n){ns===null?ns=[n]:ns.push(n)}function yK(n,A,i,t){var o=A.interleaved;return o===null?(i.next=i,zB(A)):(i.next=o.next,o.next=i),A.interleaved=i,Wr(n,t)}function Wr(n,A){n.lanes|=A;var i=n.alternate;for(i!==null&&(i.lanes|=A),i=n,n=n.return;n!==null;)n.childLanes|=A,i=n.alternate,i!==null&&(i.childLanes|=A),i=n,n=n.return;return i.tag===3?i.stateNode:null}var po=!1;function ZB(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mK(n,A){n=n.updateQueue,A.updateQueue===n&&(A.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,A){return{eventTime:n,lane:A,tag:0,payload:null,callback:null,next:null}}function Mo(n,A,i){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,ot&2){var o=t.pending;return o===null?A.next=A:(A.next=o.next,o.next=A),t.pending=A,Wr(n,i)}return o=t.interleaved,o===null?(A.next=A,zB(t)):(A.next=o.next,o.next=A),t.interleaved=A,Wr(n,i)}function gC(n,A,i){if(A=A.updateQueue,A!==null&&(A=A.shared,(i&4194240)!==0)){var t=A.lanes;t&=n.pendingLanes,i|=t,A.lanes=i,UB(n,i)}}function XG(n,A){var i=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?o=s=g:s=s.next=g,i=i.next}while(i!==null);s===null?o=s=A:s=s.next=A}else o=s=A;i={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:t.shared,effects:t.effects},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=A:n.next=A,i.lastBaseUpdate=A}function GC(n,A,i,t){var o=n.updateQueue;po=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var I=a,_=I.next;I.next=null,g===null?s=_:g.next=_,g=I;var p=n.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==g&&(a===null?p.firstBaseUpdate=_:a.next=_,p.lastBaseUpdate=I))}if(s!==null){var B=o.baseState;g=0,p=_=I=null,a=s;do{var E=a.lane,Q=a.eventTime;if((t&E)===E){p!==null&&(p=p.next={eventTime:Q,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var h=n,y=a;switch(E=A,Q=i,y.tag){case 1:if(h=y.payload,typeof h=="function"){B=h.call(Q,B,E);break A}B=h;break A;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,E=typeof h=="function"?h.call(Q,B,E):h,E==null)break A;B=qt({},B,E);break A;case 2:po=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,E=o.effects,E===null?o.effects=[a]:E.push(a))}else Q={eventTime:Q,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(_=p=Q,I=B):p=p.next=Q,g|=E;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;E=a,a=E.next,E.next=null,o.lastBaseUpdate=E,o.shared.pending=null}}while(!0);if(p===null&&(I=B),o.baseState=I,o.firstBaseUpdate=_,o.lastBaseUpdate=p,A=o.shared.interleaved,A!==null){o=A;do g|=o.lane,o=o.next;while(o!==A)}else s===null&&(o.shared.lanes=0);ps|=g,n.lanes=g,n.memoizedState=B}}function $G(n,A,i){if(n=A.effects,A.effects=null,n!==null)for(A=0;A<n.length;A++){var t=n[A],o=t.callback;if(o!==null){if(t.callback=null,t=i,typeof o!="function")throw Error(DA(191,o));o.call(t)}}}var AI={},hr=Ho(AI),Ha=Ho(AI),Ka=Ho(AI);function rs(n){if(n===AI)throw Error(DA(174));return n}function XB(n,A){switch(mt(Ka,A),mt(Ha,n),mt(hr,AI),n=A.nodeType,n){case 9:case 11:A=(A=A.documentElement)?A.namespaceURI:j_(null,"");break;default:n=n===8?A.parentNode:A,A=n.namespaceURI||null,n=n.tagName,A=j_(A,n)}Ft(hr),mt(hr,A)}function dg(){Ft(hr),Ft(Ha),Ft(Ka)}function DK(n){rs(Ka.current);var A=rs(hr.current),i=j_(A,n.type);A!==i&&(mt(Ha,n),mt(hr,i))}function $B(n){Ha.current===n&&(Ft(hr),Ft(Ha))}var Ot=Ho(0);function xC(n){for(var A=n;A!==null;){if(A.tag===13){var i=A.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return A}else if(A.tag===19&&A.memoizedProps.revealOrder!==void 0){if(A.flags&128)return A}else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===n)break;for(;A.sibling===null;){if(A.return===null||A.return===n)return null;A=A.return}A.sibling.return=A.return,A=A.sibling}return null}var Jc=[];function AE(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var aC=$r.ReactCurrentDispatcher,Oc=$r.ReactCurrentBatchConfig,_s=0,Yt=null,ni=null,Ci=null,kC=!1,fa=!1,Pa=0,hJ=0;function bi(){throw Error(DA(321))}function eE(n,A){if(A===null)return!1;for(var i=0;i<A.length&&i<n.length;i++)if(!nr(n[i],A[i]))return!1;return!0}function tE(n,A,i,t,o,s){if(_s=s,Yt=A,A.memoizedState=null,A.updateQueue=null,A.lanes=0,aC.current=n===null||n.memoizedState===null?mJ:DJ,n=i(t,o),fa){s=0;do{if(fa=!1,Pa=0,25<=s)throw Error(DA(301));s+=1,Ci=ni=null,A.updateQueue=null,aC.current=SJ,n=i(t,o)}while(fa)}if(aC.current=HC,A=ni!==null&&ni.next!==null,_s=0,Ci=ni=Yt=null,kC=!1,A)throw Error(DA(300));return n}function iE(){var n=Pa!==0;return Pa=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ci===null?Yt.memoizedState=Ci=n:Ci=Ci.next=n,Ci}function xn(){if(ni===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=ni.next;var A=Ci===null?Yt.memoizedState:Ci.next;if(A!==null)Ci=A,ni=n;else{if(n===null)throw Error(DA(310));ni=n,n={memoizedState:ni.memoizedState,baseState:ni.baseState,baseQueue:ni.baseQueue,queue:ni.queue,next:null},Ci===null?Yt.memoizedState=Ci=n:Ci=Ci.next=n}return Ci}function Ja(n,A){return typeof A=="function"?A(n):A}function Yc(n){var A=xn(),i=A.queue;if(i===null)throw Error(DA(311));i.lastRenderedReducer=n;var t=ni,o=t.baseQueue,s=i.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,i.pending=null}if(o!==null){s=o.next,t=t.baseState;var a=g=null,I=null,_=s;do{var p=_.lane;if((_s&p)===p)I!==null&&(I=I.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),t=_.hasEagerState?_.eagerState:n(t,_.action);else{var B={lane:p,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};I===null?(a=I=B,g=t):I=I.next=B,Yt.lanes|=p,ps|=p}_=_.next}while(_!==null&&_!==s);I===null?g=t:I.next=a,nr(t,A.memoizedState)||(Xi=!0),A.memoizedState=t,A.baseState=g,A.baseQueue=I,i.lastRenderedState=t}if(n=i.interleaved,n!==null){o=n;do s=o.lane,Yt.lanes|=s,ps|=s,o=o.next;while(o!==n)}else o===null&&(i.lanes=0);return[A.memoizedState,i.dispatch]}function qc(n){var A=xn(),i=A.queue;if(i===null)throw Error(DA(311));i.lastRenderedReducer=n;var t=i.dispatch,o=i.pending,s=A.memoizedState;if(o!==null){i.pending=null;var g=o=o.next;do s=n(s,g.action),g=g.next;while(g!==o);nr(s,A.memoizedState)||(Xi=!0),A.memoizedState=s,A.baseQueue===null&&(A.baseState=s),i.lastRenderedState=s}return[s,t]}function SK(){}function wK(n,A){var i=Yt,t=xn(),o=A(),s=!nr(t.memoizedState,o);if(s&&(t.memoizedState=o,Xi=!0),t=t.queue,nE(bK.bind(null,i,t,n),[n]),t.getSnapshot!==A||s||Ci!==null&&Ci.memoizedState.tag&1){if(i.flags|=2048,Oa(9,MK.bind(null,i,t,o,A),void 0,null),_i===null)throw Error(DA(349));_s&30||RK(i,A,o)}return o}function RK(n,A,i){n.flags|=16384,n={getSnapshot:A,value:i},A=Yt.updateQueue,A===null?(A={lastEffect:null,stores:null},Yt.updateQueue=A,A.stores=[n]):(i=A.stores,i===null?A.stores=[n]:i.push(n))}function MK(n,A,i,t){A.value=i,A.getSnapshot=t,vK(A)&&NK(n)}function bK(n,A,i){return i(function(){vK(A)&&NK(n)})}function vK(n){var A=n.getSnapshot;n=n.value;try{var i=A();return!nr(n,i)}catch{return!0}}function NK(n){var A=Wr(n,1);A!==null&&tr(A,n,1,-1)}function Ax(n){var A=pr();return typeof n=="function"&&(n=n()),A.memoizedState=A.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},A.queue=n,n=n.dispatch=yJ.bind(null,Yt,n),[A.memoizedState,n]}function Oa(n,A,i,t){return n={tag:n,create:A,destroy:i,deps:t,next:null},A=Yt.updateQueue,A===null?(A={lastEffect:null,stores:null},Yt.updateQueue=A,A.lastEffect=n.next=n):(i=A.lastEffect,i===null?A.lastEffect=n.next=n:(t=i.next,i.next=n,n.next=t,A.lastEffect=n)),n}function FK(){return xn().memoizedState}function IC(n,A,i,t){var o=pr();Yt.flags|=n,o.memoizedState=Oa(1|A,i,void 0,t===void 0?null:t)}function rc(n,A,i,t){var o=xn();t=t===void 0?null:t;var s=void 0;if(ni!==null){var g=ni.memoizedState;if(s=g.destroy,t!==null&&eE(t,g.deps)){o.memoizedState=Oa(A,i,s,t);return}}Yt.flags|=n,o.memoizedState=Oa(1|A,i,s,t)}function ex(n,A){return IC(8390656,8,n,A)}function nE(n,A){return rc(2048,8,n,A)}function LK(n,A){return rc(4,2,n,A)}function TK(n,A){return rc(4,4,n,A)}function UK(n,A){if(typeof A=="function")return n=n(),A(n),function(){A(null)};if(A!=null)return n=n(),A.current=n,function(){A.current=null}}function GK(n,A,i){return i=i!=null?i.concat([n]):null,rc(4,4,UK.bind(null,A,n),i)}function rE(){}function xK(n,A){var i=xn();A=A===void 0?null:A;var t=i.memoizedState;return t!==null&&A!==null&&eE(A,t[1])?t[0]:(i.memoizedState=[n,A],n)}function kK(n,A){var i=xn();A=A===void 0?null:A;var t=i.memoizedState;return t!==null&&A!==null&&eE(A,t[1])?t[0]:(n=n(),i.memoizedState=[n,A],n)}function HK(n,A,i){return _s&21?(nr(i,A)||(i=YH(),Yt.lanes|=i,ps|=i,n.baseState=!0),A):(n.baseState&&(n.baseState=!1,Xi=!0),n.memoizedState=i)}function uJ(n,A){var i=lt;lt=i!==0&&4>i?i:4,n(!0);var t=Oc.transition;Oc.transition={};try{n(!1),A()}finally{lt=i,Oc.transition=t}}function KK(){return xn().memoizedState}function fJ(n,A,i){var t=vo(n);if(i={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null},PK(n))JK(A,i);else if(i=yK(n,A,i,t),i!==null){var o=Ki();tr(i,n,t,o),OK(i,A,t)}}function yJ(n,A,i){var t=vo(n),o={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null};if(PK(n))JK(A,o);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=A.lastRenderedReducer,s!==null))try{var g=A.lastRenderedState,a=s(g,i);if(o.hasEagerState=!0,o.eagerState=a,nr(a,g)){var I=A.interleaved;I===null?(o.next=o,zB(A)):(o.next=I.next,I.next=o),A.interleaved=o;return}}catch{}finally{}i=yK(n,A,o,t),i!==null&&(o=Ki(),tr(i,n,t,o),OK(i,A,t))}}function PK(n){var A=n.alternate;return n===Yt||A!==null&&A===Yt}function JK(n,A){fa=kC=!0;var i=n.pending;i===null?A.next=A:(A.next=i.next,i.next=A),n.pending=A}function OK(n,A,i){if(i&4194240){var t=A.lanes;t&=n.pendingLanes,i|=t,A.lanes=i,UB(n,i)}}var HC={readContext:Gn,useCallback:bi,useContext:bi,useEffect:bi,useImperativeHandle:bi,useInsertionEffect:bi,useLayoutEffect:bi,useMemo:bi,useReducer:bi,useRef:bi,useState:bi,useDebugValue:bi,useDeferredValue:bi,useTransition:bi,useMutableSource:bi,useSyncExternalStore:bi,useId:bi,unstable_isNewReconciler:!1},mJ={readContext:Gn,useCallback:function(n,A){return pr().memoizedState=[n,A===void 0?null:A],n},useContext:Gn,useEffect:ex,useImperativeHandle:function(n,A,i){return i=i!=null?i.concat([n]):null,IC(4194308,4,UK.bind(null,A,n),i)},useLayoutEffect:function(n,A){return IC(4194308,4,n,A)},useInsertionEffect:function(n,A){return IC(4,2,n,A)},useMemo:function(n,A){var i=pr();return A=A===void 0?null:A,n=n(),i.memoizedState=[n,A],n},useReducer:function(n,A,i){var t=pr();return A=i!==void 0?i(A):A,t.memoizedState=t.baseState=A,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:A},t.queue=n,n=n.dispatch=fJ.bind(null,Yt,n),[t.memoizedState,n]},useRef:function(n){var A=pr();return n={current:n},A.memoizedState=n},useState:Ax,useDebugValue:rE,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=Ax(!1),A=n[0];return n=uJ.bind(null,n[1]),pr().memoizedState=n,[A,n]},useMutableSource:function(){},useSyncExternalStore:function(n,A,i){var t=Yt,o=pr();if(Jt){if(i===void 0)throw Error(DA(407));i=i()}else{if(i=A(),_i===null)throw Error(DA(349));_s&30||RK(t,A,i)}o.memoizedState=i;var s={value:i,getSnapshot:A};return o.queue=s,ex(bK.bind(null,t,s,n),[n]),t.flags|=2048,Oa(9,MK.bind(null,t,s,i,A),void 0,null),i},useId:function(){var n=pr(),A=_i.identifierPrefix;if(Jt){var i=Hr,t=kr;i=(t&~(1<<32-er(t)-1)).toString(32)+i,A=":"+A+"R"+i,i=Pa++,0<i&&(A+="H"+i.toString(32)),A+=":"}else i=hJ++,A=":"+A+"r"+i.toString(32)+":";return n.memoizedState=A},unstable_isNewReconciler:!1},DJ={readContext:Gn,useCallback:xK,useContext:Gn,useEffect:nE,useImperativeHandle:GK,useInsertionEffect:LK,useLayoutEffect:TK,useMemo:kK,useReducer:Yc,useRef:FK,useState:function(){return Yc(Ja)},useDebugValue:rE,useDeferredValue:function(n){var A=xn();return HK(A,ni.memoizedState,n)},useTransition:function(){var n=Yc(Ja)[0],A=xn().memoizedState;return[n,A]},useMutableSource:SK,useSyncExternalStore:wK,useId:KK,unstable_isNewReconciler:!1},SJ={readContext:Gn,useCallback:xK,useContext:Gn,useEffect:nE,useImperativeHandle:GK,useInsertionEffect:LK,useLayoutEffect:TK,useMemo:kK,useReducer:qc,useRef:FK,useState:function(){return qc(Ja)},useDebugValue:rE,useDeferredValue:function(n){var A=xn();return ni===null?A.memoizedState=n:HK(A,ni.memoizedState,n)},useTransition:function(){var n=qc(Ja)[0],A=xn().memoizedState;return[n,A]},useMutableSource:SK,useSyncExternalStore:wK,useId:KK,unstable_isNewReconciler:!1};function Vn(n,A){if(n&&n.defaultProps){A=qt({},A),n=n.defaultProps;for(var i in n)A[i]===void 0&&(A[i]=n[i]);return A}return A}function pp(n,A,i,t){A=n.memoizedState,i=i(t,A),i=i==null?A:qt({},A,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var oc={isMounted:function(n){return(n=n._reactInternals)?fs(n)===n:!1},enqueueSetState:function(n,A,i){n=n._reactInternals;var t=Ki(),o=vo(n),s=Or(t,o);s.payload=A,i!=null&&(s.callback=i),A=Mo(n,s,o),A!==null&&(tr(A,n,o,t),gC(A,n,o))},enqueueReplaceState:function(n,A,i){n=n._reactInternals;var t=Ki(),o=vo(n),s=Or(t,o);s.tag=1,s.payload=A,i!=null&&(s.callback=i),A=Mo(n,s,o),A!==null&&(tr(A,n,o,t),gC(A,n,o))},enqueueForceUpdate:function(n,A){n=n._reactInternals;var i=Ki(),t=vo(n),o=Or(i,t);o.tag=2,A!=null&&(o.callback=A),A=Mo(n,o,t),A!==null&&(tr(A,n,t,i),gC(A,n,t))}};function tx(n,A,i,t,o,s,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,s,g):A.prototype&&A.prototype.isPureReactComponent?!Ua(i,t)||!Ua(o,s):!0}function YK(n,A,i){var t=!1,o=Uo,s=A.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(o=nn(A)?Cs:Ti.current,t=A.contextTypes,s=(t=t!=null)?Eg(n,o):Uo),A=new A(i,s),n.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=oc,n.stateNode=A,A._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=s),A}function ix(n,A,i,t){n=A.state,typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps(i,t),typeof A.UNSAFE_componentWillReceiveProps=="function"&&A.UNSAFE_componentWillReceiveProps(i,t),A.state!==n&&oc.enqueueReplaceState(A,A.state,null)}function Bp(n,A,i,t){var o=n.stateNode;o.props=i,o.state=n.memoizedState,o.refs={},ZB(n);var s=A.contextType;typeof s=="object"&&s!==null?o.context=Gn(s):(s=nn(A)?Cs:Ti.current,o.context=Eg(n,s)),o.state=n.memoizedState,s=A.getDerivedStateFromProps,typeof s=="function"&&(pp(n,A,s,i),o.state=n.memoizedState),typeof A.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(A=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),A!==o.state&&oc.enqueueReplaceState(o,o.state,null),GC(n,i,o,t),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function hg(n,A){try{var i="",t=A;do i+=A2(t),t=t.return;while(t);var o=i}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:A,stack:o,digest:null}}function jc(n,A,i){return{value:n,source:null,stack:i??null,digest:A??null}}function Ep(n,A){try{console.error(A.value)}catch(i){setTimeout(function(){throw i})}}var wJ=typeof WeakMap=="function"?WeakMap:Map;function qK(n,A,i){i=Or(-1,i),i.tag=3,i.payload={element:null};var t=A.value;return i.callback=function(){PC||(PC=!0,Sp=t),Ep(n,A)},i}function jK(n,A,i){i=Or(-1,i),i.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var o=A.value;i.payload=function(){return t(o)},i.callback=function(){Ep(n,A)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Ep(n,A),typeof t!="function"&&(bo===null?bo=new Set([this]):bo.add(this));var g=A.stack;this.componentDidCatch(A.value,{componentStack:g!==null?g:""})}),i}function nx(n,A,i){var t=n.pingCache;if(t===null){t=n.pingCache=new wJ;var o=new Set;t.set(A,o)}else o=t.get(A),o===void 0&&(o=new Set,t.set(A,o));o.has(i)||(o.add(i),n=KJ.bind(null,n,A,i),A.then(n,n))}function rx(n){do{var A;if((A=n.tag===13)&&(A=n.memoizedState,A=A!==null?A.dehydrated!==null:!0),A)return n;n=n.return}while(n!==null);return null}function ox(n,A,i,t,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===A?n.flags|=65536:(n.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(A=Or(-1,1),A.tag=2,Mo(i,A,1))),i.lanes|=1),n)}var RJ=$r.ReactCurrentOwner,Xi=!1;function ki(n,A,i,t){A.child=n===null?fK(A,null,i,t):Qg(A,n.child,i,t)}function sx(n,A,i,t,o){i=i.render;var s=A.ref;return gg(A,o),t=tE(n,A,i,t,s,o),i=iE(),n!==null&&!Xi?(A.updateQueue=n.updateQueue,A.flags&=-2053,n.lanes&=~o,zr(n,A,o)):(Jt&&i&&OB(A),A.flags|=1,ki(n,A,t,o),A.child)}function gx(n,A,i,t,o){if(n===null){var s=i.type;return typeof s=="function"&&!_E(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(A.tag=15,A.type=s,VK(n,A,s,t,o)):(n=pC(i.type,null,t,A,A.mode,o),n.ref=A.ref,n.return=A,A.child=n)}if(s=n.child,!(n.lanes&o)){var g=s.memoizedProps;if(i=i.compare,i=i!==null?i:Ua,i(g,t)&&n.ref===A.ref)return zr(n,A,o)}return A.flags|=1,n=No(s,t),n.ref=A.ref,n.return=A,A.child=n}function VK(n,A,i,t,o){if(n!==null){var s=n.memoizedProps;if(Ua(s,t)&&n.ref===A.ref)if(Xi=!1,A.pendingProps=t=s,(n.lanes&o)!==0)n.flags&131072&&(Xi=!0);else return A.lanes=n.lanes,zr(n,A,o)}return lp(n,A,i,t,o)}function WK(n,A,i){var t=A.pendingProps,o=t.children,s=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(A.mode&1))A.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(tg,_n),_n|=i;else{if(!(i&1073741824))return n=s!==null?s.baseLanes|i:i,A.lanes=A.childLanes=1073741824,A.memoizedState={baseLanes:n,cachePool:null,transitions:null},A.updateQueue=null,mt(tg,_n),_n|=n,null;A.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:i,mt(tg,_n),_n|=t}else s!==null?(t=s.baseLanes|i,A.memoizedState=null):t=i,mt(tg,_n),_n|=t;return ki(n,A,o,i),A.child}function zK(n,A){var i=A.ref;(n===null&&i!==null||n!==null&&n.ref!==i)&&(A.flags|=512,A.flags|=2097152)}function lp(n,A,i,t,o){var s=nn(i)?Cs:Ti.current;return s=Eg(A,s),gg(A,o),i=tE(n,A,i,t,s,o),t=iE(),n!==null&&!Xi?(A.updateQueue=n.updateQueue,A.flags&=-2053,n.lanes&=~o,zr(n,A,o)):(Jt&&t&&OB(A),A.flags|=1,ki(n,A,i,o),A.child)}function ax(n,A,i,t,o){if(nn(i)){var s=!0;NC(A)}else s=!1;if(gg(A,o),A.stateNode===null)CC(n,A),YK(A,i,t),Bp(A,i,t,o),t=!0;else if(n===null){var g=A.stateNode,a=A.memoizedProps;g.props=a;var I=g.context,_=i.contextType;typeof _=="object"&&_!==null?_=Gn(_):(_=nn(i)?Cs:Ti.current,_=Eg(A,_));var p=i.getDerivedStateFromProps,B=typeof p=="function"||typeof g.getSnapshotBeforeUpdate=="function";B||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(a!==t||I!==_)&&ix(A,g,t,_),po=!1;var E=A.memoizedState;g.state=E,GC(A,t,g,o),I=A.memoizedState,a!==t||E!==I||tn.current||po?(typeof p=="function"&&(pp(A,i,p,t),I=A.memoizedState),(a=po||tx(A,i,a,t,E,I,_))?(B||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(A.flags|=4194308)):(typeof g.componentDidMount=="function"&&(A.flags|=4194308),A.memoizedProps=t,A.memoizedState=I),g.props=t,g.state=I,g.context=_,t=a):(typeof g.componentDidMount=="function"&&(A.flags|=4194308),t=!1)}else{g=A.stateNode,mK(n,A),a=A.memoizedProps,_=A.type===A.elementType?a:Vn(A.type,a),g.props=_,B=A.pendingProps,E=g.context,I=i.contextType,typeof I=="object"&&I!==null?I=Gn(I):(I=nn(i)?Cs:Ti.current,I=Eg(A,I));var Q=i.getDerivedStateFromProps;(p=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(a!==B||E!==I)&&ix(A,g,t,I),po=!1,E=A.memoizedState,g.state=E,GC(A,t,g,o);var h=A.memoizedState;a!==B||E!==h||tn.current||po?(typeof Q=="function"&&(pp(A,i,Q,t),h=A.memoizedState),(_=po||tx(A,i,_,t,E,h,I)||!1)?(p||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(t,h,I),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(t,h,I)),typeof g.componentDidUpdate=="function"&&(A.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(A.flags|=1024)):(typeof g.componentDidUpdate!="function"||a===n.memoizedProps&&E===n.memoizedState||(A.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&E===n.memoizedState||(A.flags|=1024),A.memoizedProps=t,A.memoizedState=h),g.props=t,g.state=h,g.context=I,t=_):(typeof g.componentDidUpdate!="function"||a===n.memoizedProps&&E===n.memoizedState||(A.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&E===n.memoizedState||(A.flags|=1024),t=!1)}return Qp(n,A,i,t,s,o)}function Qp(n,A,i,t,o,s){zK(n,A);var g=(A.flags&128)!==0;if(!t&&!g)return o&&VG(A,i,!1),zr(n,A,s);t=A.stateNode,RJ.current=A;var a=g&&typeof i.getDerivedStateFromError!="function"?null:t.render();return A.flags|=1,n!==null&&g?(A.child=Qg(A,n.child,null,s),A.child=Qg(A,null,a,s)):ki(n,A,a,s),A.memoizedState=t.state,o&&VG(A,i,!0),A.child}function ZK(n){var A=n.stateNode;A.pendingContext?jG(n,A.pendingContext,A.pendingContext!==A.context):A.context&&jG(n,A.context,!1),XB(n,A.containerInfo)}function Ix(n,A,i,t,o){return lg(),qB(o),A.flags|=256,ki(n,A,i,t),A.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function hp(n){return{baseLanes:n,cachePool:null,transitions:null}}function XK(n,A,i){var t=A.pendingProps,o=Ot.current,s=!1,g=(A.flags&128)!==0,a;if((a=g)||(a=n!==null&&n.memoizedState===null?!1:(o&2)!==0),a?(s=!0,A.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),mt(Ot,o&1),n===null)return cp(A),n=A.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(A.mode&1?n.data==="$!"?A.lanes=8:A.lanes=1073741824:A.lanes=1,null):(g=t.children,n=t.fallback,s?(t=A.mode,s=A.child,g={mode:"hidden",children:g},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=g):s=ac(g,t,0,null),n=as(n,t,i,null),s.return=A,n.return=A,s.sibling=n,A.child=s,A.child.memoizedState=hp(i),A.memoizedState=dp,n):oE(A,g));if(o=n.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return MJ(n,A,g,t,a,o,i);if(s){s=t.fallback,g=A.mode,o=n.child,a=o.sibling;var I={mode:"hidden",children:t.children};return!(g&1)&&A.child!==o?(t=A.child,t.childLanes=0,t.pendingProps=I,A.deletions=null):(t=No(o,I),t.subtreeFlags=o.subtreeFlags&14680064),a!==null?s=No(a,s):(s=as(s,g,i,null),s.flags|=2),s.return=A,t.return=A,t.sibling=s,A.child=t,t=s,s=A.child,g=n.child.memoizedState,g=g===null?hp(i):{baseLanes:g.baseLanes|i,cachePool:null,transitions:g.transitions},s.memoizedState=g,s.childLanes=n.childLanes&~i,A.memoizedState=dp,t}return s=n.child,n=s.sibling,t=No(s,{mode:"visible",children:t.children}),!(A.mode&1)&&(t.lanes=i),t.return=A,t.sibling=null,n!==null&&(i=A.deletions,i===null?(A.deletions=[n],A.flags|=16):i.push(n)),A.child=t,A.memoizedState=null,t}function oE(n,A){return A=ac({mode:"visible",children:A},n.mode,0,null),A.return=n,n.child=A}function mI(n,A,i,t){return t!==null&&qB(t),Qg(A,n.child,null,i),n=oE(A,A.pendingProps.children),n.flags|=2,A.memoizedState=null,n}function MJ(n,A,i,t,o,s,g){if(i)return A.flags&256?(A.flags&=-257,t=jc(Error(DA(422))),mI(n,A,g,t)):A.memoizedState!==null?(A.child=n.child,A.flags|=128,null):(s=t.fallback,o=A.mode,t=ac({mode:"visible",children:t.children},o,0,null),s=as(s,o,g,null),s.flags|=2,t.return=A,s.return=A,t.sibling=s,A.child=t,A.mode&1&&Qg(A,n.child,null,g),A.child.memoizedState=hp(g),A.memoizedState=dp,s);if(!(A.mode&1))return mI(n,A,g,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var a=t.dgst;return t=a,s=Error(DA(419)),t=jc(s,t,void 0),mI(n,A,g,t)}if(a=(g&n.childLanes)!==0,Xi||a){if(t=_i,t!==null){switch(g&-g){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|g)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Wr(n,o),tr(t,n,o,-1))}return cE(),t=jc(Error(DA(421))),mI(n,A,g,t)}return o.data==="$?"?(A.flags|=128,A.child=n.child,A=PJ.bind(null,n),o._reactRetry=A,null):(n=s.treeContext,pn=Ro(o.nextSibling),Bn=A,Jt=!0,zn=null,n!==null&&(Mn[bn++]=kr,Mn[bn++]=Hr,Mn[bn++]=cs,kr=n.id,Hr=n.overflow,cs=A),A=oE(A,t.children),A.flags|=4096,A)}function Cx(n,A,i){n.lanes|=A;var t=n.alternate;t!==null&&(t.lanes|=A),_p(n.return,A,i)}function Vc(n,A,i,t,o){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:A,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:o}:(s.isBackwards=A,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=i,s.tailMode=o)}function $K(n,A,i){var t=A.pendingProps,o=t.revealOrder,s=t.tail;if(ki(n,A,t.children,i),t=Ot.current,t&2)t=t&1|2,A.flags|=128;else{if(n!==null&&n.flags&128)A:for(n=A.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cx(n,i,A);else if(n.tag===19)Cx(n,i,A);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===A)break A;for(;n.sibling===null;){if(n.return===null||n.return===A)break A;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(mt(Ot,t),!(A.mode&1))A.memoizedState=null;else switch(o){case"forwards":for(i=A.child,o=null;i!==null;)n=i.alternate,n!==null&&xC(n)===null&&(o=i),i=i.sibling;i=o,i===null?(o=A.child,A.child=null):(o=i.sibling,i.sibling=null),Vc(A,!1,o,i,s);break;case"backwards":for(i=null,o=A.child,A.child=null;o!==null;){if(n=o.alternate,n!==null&&xC(n)===null){A.child=o;break}n=o.sibling,o.sibling=i,i=o,o=n}Vc(A,!0,i,null,s);break;case"together":Vc(A,!1,null,null,void 0);break;default:A.memoizedState=null}return A.child}function CC(n,A){!(A.mode&1)&&n!==null&&(n.alternate=null,A.alternate=null,A.flags|=2)}function zr(n,A,i){if(n!==null&&(A.dependencies=n.dependencies),ps|=A.lanes,!(i&A.childLanes))return null;if(n!==null&&A.child!==n.child)throw Error(DA(153));if(A.child!==null){for(n=A.child,i=No(n,n.pendingProps),A.child=i,i.return=A;n.sibling!==null;)n=n.sibling,i=i.sibling=No(n,n.pendingProps),i.return=A;i.sibling=null}return A.child}function bJ(n,A,i){switch(A.tag){case 3:ZK(A),lg();break;case 5:DK(A);break;case 1:nn(A.type)&&NC(A);break;case 4:XB(A,A.stateNode.containerInfo);break;case 10:var t=A.type._context,o=A.memoizedProps.value;mt(TC,t._currentValue),t._currentValue=o;break;case 13:if(t=A.memoizedState,t!==null)return t.dehydrated!==null?(mt(Ot,Ot.current&1),A.flags|=128,null):i&A.child.childLanes?XK(n,A,i):(mt(Ot,Ot.current&1),n=zr(n,A,i),n!==null?n.sibling:null);mt(Ot,Ot.current&1);break;case 19:if(t=(i&A.childLanes)!==0,n.flags&128){if(t)return $K(n,A,i);A.flags|=128}if(o=A.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),mt(Ot,Ot.current),t)break;return null;case 22:case 23:return A.lanes=0,WK(n,A,i)}return zr(n,A,i)}var AP,up,eP,tP;AP=function(n,A){for(var i=A.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===A)break;for(;i.sibling===null;){if(i.return===null||i.return===A)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};up=function(){};eP=function(n,A,i,t){var o=n.memoizedProps;if(o!==t){n=A.stateNode,rs(hr.current);var s=null;switch(i){case"input":o=J_(n,o),t=J_(n,t),s=[];break;case"select":o=qt({},o,{value:void 0}),t=qt({},t,{value:void 0}),s=[];break;case"textarea":o=q_(n,o),t=q_(n,t),s=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=bC)}V_(i,t);var g;i=null;for(_ in o)if(!t.hasOwnProperty(_)&&o.hasOwnProperty(_)&&o[_]!=null)if(_==="style"){var a=o[_];for(g in a)a.hasOwnProperty(g)&&(i||(i={}),i[g]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(Ma.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in t){var I=t[_];if(a=o!=null?o[_]:void 0,t.hasOwnProperty(_)&&I!==a&&(I!=null||a!=null))if(_==="style")if(a){for(g in a)!a.hasOwnProperty(g)||I&&I.hasOwnProperty(g)||(i||(i={}),i[g]="");for(g in I)I.hasOwnProperty(g)&&a[g]!==I[g]&&(i||(i={}),i[g]=I[g])}else i||(s||(s=[]),s.push(_,i)),i=I;else _==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,a=a?a.__html:void 0,I!=null&&a!==I&&(s=s||[]).push(_,I)):_==="children"?typeof I!="string"&&typeof I!="number"||(s=s||[]).push(_,""+I):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(_)?(I!=null&&_==="onScroll"&&vt("scroll",n),s||a===I||(s=[])):(s=s||[]).push(_,I))}i&&(s=s||[]).push("style",i);var _=s;(A.updateQueue=_)&&(A.flags|=4)}};tP=function(n,A,i,t){i!==t&&(A.flags|=4)};function $g(n,A){if(!Jt)switch(n.tailMode){case"hidden":A=n.tail;for(var i=null;A!==null;)A.alternate!==null&&(i=A),A=A.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?A||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function vi(n){var A=n.alternate!==null&&n.alternate.child===n.child,i=0,t=0;if(A)for(var o=n.child;o!==null;)i|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)i|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=t,n.childLanes=i,A}function vJ(n,A,i){var t=A.pendingProps;switch(YB(A),A.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vi(A),null;case 1:return nn(A.type)&&vC(),vi(A),null;case 3:return t=A.stateNode,dg(),Ft(tn),Ft(Ti),AE(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(fI(A)?A.flags|=4:n===null||n.memoizedState.isDehydrated&&!(A.flags&256)||(A.flags|=1024,zn!==null&&(Mp(zn),zn=null))),up(n,A),vi(A),null;case 5:$B(A);var o=rs(Ka.current);if(i=A.type,n!==null&&A.stateNode!=null)eP(n,A,i,t,o),n.ref!==A.ref&&(A.flags|=512,A.flags|=2097152);else{if(!t){if(A.stateNode===null)throw Error(DA(166));return vi(A),null}if(n=rs(hr.current),fI(A)){t=A.stateNode,i=A.type;var s=A.memoizedProps;switch(t[Er]=A,t[ka]=s,n=(A.mode&1)!==0,i){case"dialog":vt("cancel",t),vt("close",t);break;case"iframe":case"object":case"embed":vt("load",t);break;case"video":case"audio":for(o=0;o<_a.length;o++)vt(_a[o],t);break;case"source":vt("error",t);break;case"img":case"image":case"link":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"input":hG(t,s),vt("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},vt("invalid",t);break;case"textarea":fG(t,s),vt("invalid",t)}V_(i,s),o=null;for(var g in s)if(s.hasOwnProperty(g)){var a=s[g];g==="children"?typeof a=="string"?t.textContent!==a&&(s.suppressHydrationWarning!==!0&&uI(t.textContent,a,n),o=["children",a]):typeof a=="number"&&t.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uI(t.textContent,a,n),o=["children",""+a]):Ma.hasOwnProperty(g)&&a!=null&&g==="onScroll"&&vt("scroll",t)}switch(i){case"input":_I(t),uG(t,s,!0);break;case"textarea":_I(t),yG(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=bC)}t=o,A.updateQueue=t,t!==null&&(A.flags|=4)}else{g=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bH(i)),n==="http://www.w3.org/1999/xhtml"?i==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=g.createElement(i,{is:t.is}):(n=g.createElement(i),i==="select"&&(g=n,t.multiple?g.multiple=!0:t.size&&(g.size=t.size))):n=g.createElementNS(n,i),n[Er]=A,n[ka]=t,AP(n,A,!1,!1),A.stateNode=n;A:{switch(g=W_(i,t),i){case"dialog":vt("cancel",n),vt("close",n),o=t;break;case"iframe":case"object":case"embed":vt("load",n),o=t;break;case"video":case"audio":for(o=0;o<_a.length;o++)vt(_a[o],n);o=t;break;case"source":vt("error",n),o=t;break;case"img":case"image":case"link":vt("error",n),vt("load",n),o=t;break;case"details":vt("toggle",n),o=t;break;case"input":hG(n,t),o=J_(n,t),vt("invalid",n);break;case"option":o=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},o=qt({},t,{value:void 0}),vt("invalid",n);break;case"textarea":fG(n,t),o=q_(n,t),vt("invalid",n);break;default:o=t}V_(i,o),a=o;for(s in a)if(a.hasOwnProperty(s)){var I=a[s];s==="style"?FH(n,I):s==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&vH(n,I)):s==="children"?typeof I=="string"?(i!=="textarea"||I!=="")&&ba(n,I):typeof I=="number"&&ba(n,""+I):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?I!=null&&s==="onScroll"&&vt("scroll",n):I!=null&&bB(n,s,I,g))}switch(i){case"input":_I(n),uG(n,t,!1);break;case"textarea":_I(n),yG(n);break;case"option":t.value!=null&&n.setAttribute("value",""+To(t.value));break;case"select":n.multiple=!!t.multiple,s=t.value,s!=null?ng(n,!!t.multiple,s,!1):t.defaultValue!=null&&ng(n,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=bC)}switch(i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break A;case"img":t=!0;break A;default:t=!1}}t&&(A.flags|=4)}A.ref!==null&&(A.flags|=512,A.flags|=2097152)}return vi(A),null;case 6:if(n&&A.stateNode!=null)tP(n,A,n.memoizedProps,t);else{if(typeof t!="string"&&A.stateNode===null)throw Error(DA(166));if(i=rs(Ka.current),rs(hr.current),fI(A)){if(t=A.stateNode,i=A.memoizedProps,t[Er]=A,(s=t.nodeValue!==i)&&(n=Bn,n!==null))switch(n.tag){case 3:uI(t.nodeValue,i,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&uI(t.nodeValue,i,(n.mode&1)!==0)}s&&(A.flags|=4)}else t=(i.nodeType===9?i:i.ownerDocument).createTextNode(t),t[Er]=A,A.stateNode=t}return vi(A),null;case 13:if(Ft(Ot),t=A.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&pn!==null&&A.mode&1&&!(A.flags&128))hK(),lg(),A.flags|=98560,s=!1;else if(s=fI(A),t!==null&&t.dehydrated!==null){if(n===null){if(!s)throw Error(DA(318));if(s=A.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(DA(317));s[Er]=A}else lg(),!(A.flags&128)&&(A.memoizedState=null),A.flags|=4;vi(A),s=!1}else zn!==null&&(Mp(zn),zn=null),s=!0;if(!s)return A.flags&65536?A:null}return A.flags&128?(A.lanes=i,A):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(A.child.flags|=8192,A.mode&1&&(n===null||Ot.current&1?oi===0&&(oi=3):cE())),A.updateQueue!==null&&(A.flags|=4),vi(A),null);case 4:return dg(),up(n,A),n===null&&Ga(A.stateNode.containerInfo),vi(A),null;case 10:return WB(A.type._context),vi(A),null;case 17:return nn(A.type)&&vC(),vi(A),null;case 19:if(Ft(Ot),s=A.memoizedState,s===null)return vi(A),null;if(t=(A.flags&128)!==0,g=s.rendering,g===null)if(t)$g(s,!1);else{if(oi!==0||n!==null&&n.flags&128)for(n=A.child;n!==null;){if(g=xC(n),g!==null){for(A.flags|=128,$g(s,!1),t=g.updateQueue,t!==null&&(A.updateQueue=t,A.flags|=4),A.subtreeFlags=0,t=i,i=A.child;i!==null;)s=i,n=t,s.flags&=14680066,g=s.alternate,g===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=g.childLanes,s.lanes=g.lanes,s.child=g.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=g.memoizedProps,s.memoizedState=g.memoizedState,s.updateQueue=g.updateQueue,s.type=g.type,n=g.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),i=i.sibling;return mt(Ot,Ot.current&1|2),A.child}n=n.sibling}s.tail!==null&&$t()>ug&&(A.flags|=128,t=!0,$g(s,!1),A.lanes=4194304)}else{if(!t)if(n=xC(g),n!==null){if(A.flags|=128,t=!0,i=n.updateQueue,i!==null&&(A.updateQueue=i,A.flags|=4),$g(s,!0),s.tail===null&&s.tailMode==="hidden"&&!g.alternate&&!Jt)return vi(A),null}else 2*$t()-s.renderingStartTime>ug&&i!==1073741824&&(A.flags|=128,t=!0,$g(s,!1),A.lanes=4194304);s.isBackwards?(g.sibling=A.child,A.child=g):(i=s.last,i!==null?i.sibling=g:A.child=g,s.last=g)}return s.tail!==null?(A=s.tail,s.rendering=A,s.tail=A.sibling,s.renderingStartTime=$t(),A.sibling=null,i=Ot.current,mt(Ot,t?i&1|2:i&1),A):(vi(A),null);case 22:case 23:return CE(),t=A.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(A.flags|=8192),t&&A.mode&1?_n&1073741824&&(vi(A),A.subtreeFlags&6&&(A.flags|=8192)):vi(A),null;case 24:return null;case 25:return null}throw Error(DA(156,A.tag))}function NJ(n,A){switch(YB(A),A.tag){case 1:return nn(A.type)&&vC(),n=A.flags,n&65536?(A.flags=n&-65537|128,A):null;case 3:return dg(),Ft(tn),Ft(Ti),AE(),n=A.flags,n&65536&&!(n&128)?(A.flags=n&-65537|128,A):null;case 5:return $B(A),null;case 13:if(Ft(Ot),n=A.memoizedState,n!==null&&n.dehydrated!==null){if(A.alternate===null)throw Error(DA(340));lg()}return n=A.flags,n&65536?(A.flags=n&-65537|128,A):null;case 19:return Ft(Ot),null;case 4:return dg(),null;case 10:return WB(A.type._context),null;case 22:case 23:return CE(),null;case 24:return null;default:return null}}var DI=!1,Li=!1,FJ=typeof WeakSet=="function"?WeakSet:Set,zA=null;function eg(n,A){var i=n.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(t){zt(n,A,t)}else i.current=null}function fp(n,A,i){try{i()}catch(t){zt(n,A,t)}}var cx=!1;function LJ(n,A){if(rp=wC,n=sK(),JB(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else A:{i=(i=n.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var o=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break A}var g=0,a=-1,I=-1,_=0,p=0,B=n,E=null;e:for(;;){for(var Q;B!==i||o!==0&&B.nodeType!==3||(a=g+o),B!==s||t!==0&&B.nodeType!==3||(I=g+t),B.nodeType===3&&(g+=B.nodeValue.length),(Q=B.firstChild)!==null;)E=B,B=Q;for(;;){if(B===n)break e;if(E===i&&++_===o&&(a=g),E===s&&++p===t&&(I=g),(Q=B.nextSibling)!==null)break;B=E,E=B.parentNode}B=Q}i=a===-1||I===-1?null:{start:a,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(op={focusedElem:n,selectionRange:i},wC=!1,zA=A;zA!==null;)if(A=zA,n=A.child,(A.subtreeFlags&1028)!==0&&n!==null)n.return=A,zA=n;else for(;zA!==null;){A=zA;try{var h=A.alternate;if(A.flags&1024)switch(A.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,u=h.memoizedState,l=A.stateNode,f=l.getSnapshotBeforeUpdate(A.elementType===A.type?y:Vn(A.type,y),u);l.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=A.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(DA(163))}}catch(D){zt(A,A.return,D)}if(n=A.sibling,n!==null){n.return=A.return,zA=n;break}zA=A.return}return h=cx,cx=!1,h}function ya(n,A,i){var t=A.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&n)===n){var s=o.destroy;o.destroy=void 0,s!==void 0&&fp(A,i,s)}o=o.next}while(o!==t)}}function sc(n,A){if(A=A.updateQueue,A=A!==null?A.lastEffect:null,A!==null){var i=A=A.next;do{if((i.tag&n)===n){var t=i.create;i.destroy=t()}i=i.next}while(i!==A)}}function yp(n){var A=n.ref;if(A!==null){var i=n.stateNode;switch(n.tag){case 5:n=i;break;default:n=i}typeof A=="function"?A(n):A.current=n}}function iP(n){var A=n.alternate;A!==null&&(n.alternate=null,iP(A)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(A=n.stateNode,A!==null&&(delete A[Er],delete A[ka],delete A[ap],delete A[EJ],delete A[lJ])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nP(n){return n.tag===5||n.tag===3||n.tag===4}function _x(n){A:for(;;){for(;n.sibling===null;){if(n.return===null||nP(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue A;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mp(n,A,i){var t=n.tag;if(t===5||t===6)n=n.stateNode,A?i.nodeType===8?i.parentNode.insertBefore(n,A):i.insertBefore(n,A):(i.nodeType===8?(A=i.parentNode,A.insertBefore(n,i)):(A=i,A.appendChild(n)),i=i._reactRootContainer,i!=null||A.onclick!==null||(A.onclick=bC));else if(t!==4&&(n=n.child,n!==null))for(mp(n,A,i),n=n.sibling;n!==null;)mp(n,A,i),n=n.sibling}function Dp(n,A,i){var t=n.tag;if(t===5||t===6)n=n.stateNode,A?i.insertBefore(n,A):i.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Dp(n,A,i),n=n.sibling;n!==null;)Dp(n,A,i),n=n.sibling}var fi=null,Wn=!1;function no(n,A,i){for(i=i.child;i!==null;)rP(n,A,i),i=i.sibling}function rP(n,A,i){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount($C,i)}catch{}switch(i.tag){case 5:Li||eg(i,A);case 6:var t=fi,o=Wn;fi=null,no(n,A,i),fi=t,Wn=o,fi!==null&&(Wn?(n=fi,i=i.stateNode,n.nodeType===8?n.parentNode.removeChild(i):n.removeChild(i)):fi.removeChild(i.stateNode));break;case 18:fi!==null&&(Wn?(n=fi,i=i.stateNode,n.nodeType===8?Kc(n.parentNode,i):n.nodeType===1&&Kc(n,i),La(n)):Kc(fi,i.stateNode));break;case 4:t=fi,o=Wn,fi=i.stateNode.containerInfo,Wn=!0,no(n,A,i),fi=t,Wn=o;break;case 0:case 11:case 14:case 15:if(!Li&&(t=i.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var s=o,g=s.destroy;s=s.tag,g!==void 0&&(s&2||s&4)&&fp(i,A,g),o=o.next}while(o!==t)}no(n,A,i);break;case 1:if(!Li&&(eg(i,A),t=i.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=i.memoizedProps,t.state=i.memoizedState,t.componentWillUnmount()}catch(a){zt(i,A,a)}no(n,A,i);break;case 21:no(n,A,i);break;case 22:i.mode&1?(Li=(t=Li)||i.memoizedState!==null,no(n,A,i),Li=t):no(n,A,i);break;default:no(n,A,i)}}function px(n){var A=n.updateQueue;if(A!==null){n.updateQueue=null;var i=n.stateNode;i===null&&(i=n.stateNode=new FJ),A.forEach(function(t){var o=JJ.bind(null,n,t);i.has(t)||(i.add(t),t.then(o,o))})}}function Jn(n,A){var i=A.deletions;if(i!==null)for(var t=0;t<i.length;t++){var o=i[t];try{var s=n,g=A,a=g;A:for(;a!==null;){switch(a.tag){case 5:fi=a.stateNode,Wn=!1;break A;case 3:fi=a.stateNode.containerInfo,Wn=!0;break A;case 4:fi=a.stateNode.containerInfo,Wn=!0;break A}a=a.return}if(fi===null)throw Error(DA(160));rP(s,g,o),fi=null,Wn=!1;var I=o.alternate;I!==null&&(I.return=null),o.return=null}catch(_){zt(o,A,_)}}if(A.subtreeFlags&12854)for(A=A.child;A!==null;)oP(A,n),A=A.sibling}function oP(n,A){var i=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Jn(A,n),_r(n),t&4){try{ya(3,n,n.return),sc(3,n)}catch(y){zt(n,n.return,y)}try{ya(5,n,n.return)}catch(y){zt(n,n.return,y)}}break;case 1:Jn(A,n),_r(n),t&512&&i!==null&&eg(i,i.return);break;case 5:if(Jn(A,n),_r(n),t&512&&i!==null&&eg(i,i.return),n.flags&32){var o=n.stateNode;try{ba(o,"")}catch(y){zt(n,n.return,y)}}if(t&4&&(o=n.stateNode,o!=null)){var s=n.memoizedProps,g=i!==null?i.memoizedProps:s,a=n.type,I=n.updateQueue;if(n.updateQueue=null,I!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RH(o,s),W_(a,g);var _=W_(a,s);for(g=0;g<I.length;g+=2){var p=I[g],B=I[g+1];p==="style"?FH(o,B):p==="dangerouslySetInnerHTML"?vH(o,B):p==="children"?ba(o,B):bB(o,p,B,_)}switch(a){case"input":O_(o,s);break;case"textarea":MH(o,s);break;case"select":var E=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?ng(o,!!s.multiple,Q,!1):E!==!!s.multiple&&(s.defaultValue!=null?ng(o,!!s.multiple,s.defaultValue,!0):ng(o,!!s.multiple,s.multiple?[]:"",!1))}o[ka]=s}catch(y){zt(n,n.return,y)}}break;case 6:if(Jn(A,n),_r(n),t&4){if(n.stateNode===null)throw Error(DA(162));o=n.stateNode,s=n.memoizedProps;try{o.nodeValue=s}catch(y){zt(n,n.return,y)}}break;case 3:if(Jn(A,n),_r(n),t&4&&i!==null&&i.memoizedState.isDehydrated)try{La(A.containerInfo)}catch(y){zt(n,n.return,y)}break;case 4:Jn(A,n),_r(n);break;case 13:Jn(A,n),_r(n),o=n.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(aE=$t())),t&4&&px(n);break;case 22:if(p=i!==null&&i.memoizedState!==null,n.mode&1?(Li=(_=Li)||p,Jn(A,n),Li=_):Jn(A,n),_r(n),t&8192){if(_=n.memoizedState!==null,(n.stateNode.isHidden=_)&&!p&&n.mode&1)for(zA=n,p=n.child;p!==null;){for(B=zA=p;zA!==null;){switch(E=zA,Q=E.child,E.tag){case 0:case 11:case 14:case 15:ya(4,E,E.return);break;case 1:eg(E,E.return);var h=E.stateNode;if(typeof h.componentWillUnmount=="function"){t=E,i=E.return;try{A=t,h.props=A.memoizedProps,h.state=A.memoizedState,h.componentWillUnmount()}catch(y){zt(t,i,y)}}break;case 5:eg(E,E.return);break;case 22:if(E.memoizedState!==null){Ex(B);continue}}Q!==null?(Q.return=E,zA=Q):Ex(B)}p=p.sibling}A:for(p=null,B=n;;){if(B.tag===5){if(p===null){p=B;try{o=B.stateNode,_?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=B.stateNode,I=B.memoizedProps.style,g=I!=null&&I.hasOwnProperty("display")?I.display:null,a.style.display=NH("display",g))}catch(y){zt(n,n.return,y)}}}else if(B.tag===6){if(p===null)try{B.stateNode.nodeValue=_?"":B.memoizedProps}catch(y){zt(n,n.return,y)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===n)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===n)break A;for(;B.sibling===null;){if(B.return===null||B.return===n)break A;p===B&&(p=null),B=B.return}p===B&&(p=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Jn(A,n),_r(n),t&4&&px(n);break;case 21:break;default:Jn(A,n),_r(n)}}function _r(n){var A=n.flags;if(A&2){try{A:{for(var i=n.return;i!==null;){if(nP(i)){var t=i;break A}i=i.return}throw Error(DA(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(ba(o,""),t.flags&=-33);var s=_x(n);Dp(n,s,o);break;case 3:case 4:var g=t.stateNode.containerInfo,a=_x(n);mp(n,a,g);break;default:throw Error(DA(161))}}catch(I){zt(n,n.return,I)}n.flags&=-3}A&4096&&(n.flags&=-4097)}function TJ(n,A,i){zA=n,sP(n)}function sP(n,A,i){for(var t=(n.mode&1)!==0;zA!==null;){var o=zA,s=o.child;if(o.tag===22&&t){var g=o.memoizedState!==null||DI;if(!g){var a=o.alternate,I=a!==null&&a.memoizedState!==null||Li;a=DI;var _=Li;if(DI=g,(Li=I)&&!_)for(zA=o;zA!==null;)g=zA,I=g.child,g.tag===22&&g.memoizedState!==null?lx(o):I!==null?(I.return=g,zA=I):lx(o);for(;s!==null;)zA=s,sP(s),s=s.sibling;zA=o,DI=a,Li=_}Bx(n)}else o.subtreeFlags&8772&&s!==null?(s.return=o,zA=s):Bx(n)}}function Bx(n){for(;zA!==null;){var A=zA;if(A.flags&8772){var i=A.alternate;try{if(A.flags&8772)switch(A.tag){case 0:case 11:case 15:Li||sc(5,A);break;case 1:var t=A.stateNode;if(A.flags&4&&!Li)if(i===null)t.componentDidMount();else{var o=A.elementType===A.type?i.memoizedProps:Vn(A.type,i.memoizedProps);t.componentDidUpdate(o,i.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=A.updateQueue;s!==null&&$G(A,s,t);break;case 3:var g=A.updateQueue;if(g!==null){if(i=null,A.child!==null)switch(A.child.tag){case 5:i=A.child.stateNode;break;case 1:i=A.child.stateNode}$G(A,g,i)}break;case 5:var a=A.stateNode;if(i===null&&A.flags&4){i=a;var I=A.memoizedProps;switch(A.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&i.focus();break;case"img":I.src&&(i.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(A.memoizedState===null){var _=A.alternate;if(_!==null){var p=_.memoizedState;if(p!==null){var B=p.dehydrated;B!==null&&La(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(DA(163))}Li||A.flags&512&&yp(A)}catch(E){zt(A,A.return,E)}}if(A===n){zA=null;break}if(i=A.sibling,i!==null){i.return=A.return,zA=i;break}zA=A.return}}function Ex(n){for(;zA!==null;){var A=zA;if(A===n){zA=null;break}var i=A.sibling;if(i!==null){i.return=A.return,zA=i;break}zA=A.return}}function lx(n){for(;zA!==null;){var A=zA;try{switch(A.tag){case 0:case 11:case 15:var i=A.return;try{sc(4,A)}catch(I){zt(A,i,I)}break;case 1:var t=A.stateNode;if(typeof t.componentDidMount=="function"){var o=A.return;try{t.componentDidMount()}catch(I){zt(A,o,I)}}var s=A.return;try{yp(A)}catch(I){zt(A,s,I)}break;case 5:var g=A.return;try{yp(A)}catch(I){zt(A,g,I)}}}catch(I){zt(A,A.return,I)}if(A===n){zA=null;break}var a=A.sibling;if(a!==null){a.return=A.return,zA=a;break}zA=A.return}}var UJ=Math.ceil,KC=$r.ReactCurrentDispatcher,sE=$r.ReactCurrentOwner,Tn=$r.ReactCurrentBatchConfig,ot=0,_i=null,ti=null,mi=0,_n=0,tg=Ho(0),oi=0,Ya=null,ps=0,gc=0,gE=0,ma=null,Zi=null,aE=0,ug=1/0,Ur=null,PC=!1,Sp=null,bo=null,SI=!1,fo=null,JC=0,Da=0,wp=null,cC=-1,_C=0;function Ki(){return ot&6?$t():cC!==-1?cC:cC=$t()}function vo(n){return n.mode&1?ot&2&&mi!==0?mi&-mi:dJ.transition!==null?(_C===0&&(_C=YH()),_C):(n=lt,n!==0||(n=window.event,n=n===void 0?16:XH(n.type)),n):1}function tr(n,A,i,t){if(50<Da)throw Da=0,wp=null,Error(DA(185));Za(n,i,t),(!(ot&2)||n!==_i)&&(n===_i&&(!(ot&2)&&(gc|=i),oi===4&&lo(n,mi)),rn(n,t),i===1&&ot===0&&!(A.mode&1)&&(ug=$t()+500,nc&&Ko()))}function rn(n,A){var i=n.callbackNode;d2(n,A);var t=SC(n,n===_i?mi:0);if(t===0)i!==null&&SG(i),n.callbackNode=null,n.callbackPriority=0;else if(A=t&-t,n.callbackPriority!==A){if(i!=null&&SG(i),A===1)n.tag===0?QJ(Qx.bind(null,n)):lK(Qx.bind(null,n)),pJ(function(){!(ot&6)&&Ko()}),i=null;else{switch(qH(t)){case 1:i=TB;break;case 4:i=JH;break;case 16:i=DC;break;case 536870912:i=OH;break;default:i=DC}i=BP(i,gP.bind(null,n))}n.callbackPriority=A,n.callbackNode=i}}function gP(n,A){if(cC=-1,_C=0,ot&6)throw Error(DA(327));var i=n.callbackNode;if(ag()&&n.callbackNode!==i)return null;var t=SC(n,n===_i?mi:0);if(t===0)return null;if(t&30||t&n.expiredLanes||A)A=OC(n,t);else{A=t;var o=ot;ot|=2;var s=IP();(_i!==n||mi!==A)&&(Ur=null,ug=$t()+500,gs(n,A));do try{kJ();break}catch(a){aP(n,a)}while(!0);VB(),KC.current=s,ot=o,ti!==null?A=0:(_i=null,mi=0,A=oi)}if(A!==0){if(A===2&&(o=Ap(n),o!==0&&(t=o,A=Rp(n,o))),A===1)throw i=Ya,gs(n,0),lo(n,t),rn(n,$t()),i;if(A===6)lo(n,t);else{if(o=n.current.alternate,!(t&30)&&!GJ(o)&&(A=OC(n,t),A===2&&(s=Ap(n),s!==0&&(t=s,A=Rp(n,s))),A===1))throw i=Ya,gs(n,0),lo(n,t),rn(n,$t()),i;switch(n.finishedWork=o,n.finishedLanes=t,A){case 0:case 1:throw Error(DA(345));case 2:$o(n,Zi,Ur);break;case 3:if(lo(n,t),(t&130023424)===t&&(A=aE+500-$t(),10<A)){if(SC(n,0)!==0)break;if(o=n.suspendedLanes,(o&t)!==t){Ki(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=gp($o.bind(null,n,Zi,Ur),A);break}$o(n,Zi,Ur);break;case 4:if(lo(n,t),(t&4194240)===t)break;for(A=n.eventTimes,o=-1;0<t;){var g=31-er(t);s=1<<g,g=A[g],g>o&&(o=g),t&=~s}if(t=o,t=$t()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*UJ(t/1960))-t,10<t){n.timeoutHandle=gp($o.bind(null,n,Zi,Ur),t);break}$o(n,Zi,Ur);break;case 5:$o(n,Zi,Ur);break;default:throw Error(DA(329))}}}return rn(n,$t()),n.callbackNode===i?gP.bind(null,n):null}function Rp(n,A){var i=ma;return n.current.memoizedState.isDehydrated&&(gs(n,A).flags|=256),n=OC(n,A),n!==2&&(A=Zi,Zi=i,A!==null&&Mp(A)),n}function Mp(n){Zi===null?Zi=n:Zi.push.apply(Zi,n)}function GJ(n){for(var A=n;;){if(A.flags&16384){var i=A.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var t=0;t<i.length;t++){var o=i[t],s=o.getSnapshot;o=o.value;try{if(!nr(s(),o))return!1}catch{return!1}}}if(i=A.child,A.subtreeFlags&16384&&i!==null)i.return=A,A=i;else{if(A===n)break;for(;A.sibling===null;){if(A.return===null||A.return===n)return!0;A=A.return}A.sibling.return=A.return,A=A.sibling}}return!0}function lo(n,A){for(A&=~gE,A&=~gc,n.suspendedLanes|=A,n.pingedLanes&=~A,n=n.expirationTimes;0<A;){var i=31-er(A),t=1<<i;n[i]=-1,A&=~t}}function Qx(n){if(ot&6)throw Error(DA(327));ag();var A=SC(n,0);if(!(A&1))return rn(n,$t()),null;var i=OC(n,A);if(n.tag!==0&&i===2){var t=Ap(n);t!==0&&(A=t,i=Rp(n,t))}if(i===1)throw i=Ya,gs(n,0),lo(n,A),rn(n,$t()),i;if(i===6)throw Error(DA(345));return n.finishedWork=n.current.alternate,n.finishedLanes=A,$o(n,Zi,Ur),rn(n,$t()),null}function IE(n,A){var i=ot;ot|=1;try{return n(A)}finally{ot=i,ot===0&&(ug=$t()+500,nc&&Ko())}}function Bs(n){fo!==null&&fo.tag===0&&!(ot&6)&&ag();var A=ot;ot|=1;var i=Tn.transition,t=lt;try{if(Tn.transition=null,lt=1,n)return n()}finally{lt=t,Tn.transition=i,ot=A,!(ot&6)&&Ko()}}function CE(){_n=tg.current,Ft(tg)}function gs(n,A){n.finishedWork=null,n.finishedLanes=0;var i=n.timeoutHandle;if(i!==-1&&(n.timeoutHandle=-1,_J(i)),ti!==null)for(i=ti.return;i!==null;){var t=i;switch(YB(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&vC();break;case 3:dg(),Ft(tn),Ft(Ti),AE();break;case 5:$B(t);break;case 4:dg();break;case 13:Ft(Ot);break;case 19:Ft(Ot);break;case 10:WB(t.type._context);break;case 22:case 23:CE()}i=i.return}if(_i=n,ti=n=No(n.current,null),mi=_n=A,oi=0,Ya=null,gE=gc=ps=0,Zi=ma=null,ns!==null){for(A=0;A<ns.length;A++)if(i=ns[A],t=i.interleaved,t!==null){i.interleaved=null;var o=t.next,s=i.pending;if(s!==null){var g=s.next;s.next=o,t.next=g}i.pending=t}ns=null}return n}function aP(n,A){do{var i=ti;try{if(VB(),aC.current=HC,kC){for(var t=Yt.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}kC=!1}if(_s=0,Ci=ni=Yt=null,fa=!1,Pa=0,sE.current=null,i===null||i.return===null){oi=1,Ya=A,ti=null;break}A:{var s=n,g=i.return,a=i,I=A;if(A=mi,a.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var _=I,p=a,B=p.tag;if(!(p.mode&1)&&(B===0||B===11||B===15)){var E=p.alternate;E?(p.updateQueue=E.updateQueue,p.memoizedState=E.memoizedState,p.lanes=E.lanes):(p.updateQueue=null,p.memoizedState=null)}var Q=rx(g);if(Q!==null){Q.flags&=-257,ox(Q,g,a,s,A),Q.mode&1&&nx(s,_,A),A=Q,I=_;var h=A.updateQueue;if(h===null){var y=new Set;y.add(I),A.updateQueue=y}else h.add(I);break A}else{if(!(A&1)){nx(s,_,A),cE();break A}I=Error(DA(426))}}else if(Jt&&a.mode&1){var u=rx(g);if(u!==null){!(u.flags&65536)&&(u.flags|=256),ox(u,g,a,s,A),qB(hg(I,a));break A}}s=I=hg(I,a),oi!==4&&(oi=2),ma===null?ma=[s]:ma.push(s),s=g;do{switch(s.tag){case 3:s.flags|=65536,A&=-A,s.lanes|=A;var l=qK(s,I,A);XG(s,l);break A;case 1:a=I;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bo===null||!bo.has(m)))){s.flags|=65536,A&=-A,s.lanes|=A;var D=jK(s,a,A);XG(s,D);break A}}s=s.return}while(s!==null)}cP(i)}catch(T){A=T,ti===i&&i!==null&&(ti=i=i.return);continue}break}while(!0)}function IP(){var n=KC.current;return KC.current=HC,n===null?HC:n}function cE(){(oi===0||oi===3||oi===2)&&(oi=4),_i===null||!(ps&268435455)&&!(gc&268435455)||lo(_i,mi)}function OC(n,A){var i=ot;ot|=2;var t=IP();(_i!==n||mi!==A)&&(Ur=null,gs(n,A));do try{xJ();break}catch(o){aP(n,o)}while(!0);if(VB(),ot=i,KC.current=t,ti!==null)throw Error(DA(261));return _i=null,mi=0,oi}function xJ(){for(;ti!==null;)CP(ti)}function kJ(){for(;ti!==null&&!I2();)CP(ti)}function CP(n){var A=pP(n.alternate,n,_n);n.memoizedProps=n.pendingProps,A===null?cP(n):ti=A,sE.current=null}function cP(n){var A=n;do{var i=A.alternate;if(n=A.return,A.flags&32768){if(i=NJ(i,A),i!==null){i.flags&=32767,ti=i;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{oi=6,ti=null;return}}else if(i=vJ(i,A,_n),i!==null){ti=i;return}if(A=A.sibling,A!==null){ti=A;return}ti=A=n}while(A!==null);oi===0&&(oi=5)}function $o(n,A,i){var t=lt,o=Tn.transition;try{Tn.transition=null,lt=1,HJ(n,A,i,t)}finally{Tn.transition=o,lt=t}return null}function HJ(n,A,i,t){do ag();while(fo!==null);if(ot&6)throw Error(DA(327));i=n.finishedWork;var o=n.finishedLanes;if(i===null)return null;if(n.finishedWork=null,n.finishedLanes=0,i===n.current)throw Error(DA(177));n.callbackNode=null,n.callbackPriority=0;var s=i.lanes|i.childLanes;if(h2(n,s),n===_i&&(ti=_i=null,mi=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||SI||(SI=!0,BP(DC,function(){return ag(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var g=lt;lt=1;var a=ot;ot|=4,sE.current=null,LJ(n,i),oP(i,n),oJ(op),wC=!!rp,op=rp=null,n.current=i,TJ(i),C2(),ot=a,lt=g,Tn.transition=s}else n.current=i;if(SI&&(SI=!1,fo=n,JC=o),s=n.pendingLanes,s===0&&(bo=null),p2(i.stateNode),rn(n,$t()),A!==null)for(t=n.onRecoverableError,i=0;i<A.length;i++)o=A[i],t(o.value,{componentStack:o.stack,digest:o.digest});if(PC)throw PC=!1,n=Sp,Sp=null,n;return JC&1&&n.tag!==0&&ag(),s=n.pendingLanes,s&1?n===wp?Da++:(Da=0,wp=n):Da=0,Ko(),null}function ag(){if(fo!==null){var n=qH(JC),A=Tn.transition,i=lt;try{if(Tn.transition=null,lt=16>n?16:n,fo===null)var t=!1;else{if(n=fo,fo=null,JC=0,ot&6)throw Error(DA(331));var o=ot;for(ot|=4,zA=n.current;zA!==null;){var s=zA,g=s.child;if(zA.flags&16){var a=s.deletions;if(a!==null){for(var I=0;I<a.length;I++){var _=a[I];for(zA=_;zA!==null;){var p=zA;switch(p.tag){case 0:case 11:case 15:ya(8,p,s)}var B=p.child;if(B!==null)B.return=p,zA=B;else for(;zA!==null;){p=zA;var E=p.sibling,Q=p.return;if(iP(p),p===_){zA=null;break}if(E!==null){E.return=Q,zA=E;break}zA=Q}}}var h=s.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var u=y.sibling;y.sibling=null,y=u}while(y!==null)}}zA=s}}if(s.subtreeFlags&2064&&g!==null)g.return=s,zA=g;else A:for(;zA!==null;){if(s=zA,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var l=s.sibling;if(l!==null){l.return=s.return,zA=l;break A}zA=s.return}}var f=n.current;for(zA=f;zA!==null;){g=zA;var m=g.child;if(g.subtreeFlags&2064&&m!==null)m.return=g,zA=m;else A:for(g=f;zA!==null;){if(a=zA,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sc(9,a)}}catch(T){zt(a,a.return,T)}if(a===g){zA=null;break A}var D=a.sibling;if(D!==null){D.return=a.return,zA=D;break A}zA=a.return}}if(ot=o,Ko(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot($C,n)}catch{}t=!0}return t}finally{lt=i,Tn.transition=A}}return!1}function dx(n,A,i){A=hg(i,A),A=qK(n,A,1),n=Mo(n,A,1),A=Ki(),n!==null&&(Za(n,1,A),rn(n,A))}function zt(n,A,i){if(n.tag===3)dx(n,n,i);else for(;A!==null;){if(A.tag===3){dx(A,n,i);break}else if(A.tag===1){var t=A.stateNode;if(typeof A.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(bo===null||!bo.has(t))){n=hg(i,n),n=jK(A,n,1),A=Mo(A,n,1),n=Ki(),A!==null&&(Za(A,1,n),rn(A,n));break}}A=A.return}}function KJ(n,A,i){var t=n.pingCache;t!==null&&t.delete(A),A=Ki(),n.pingedLanes|=n.suspendedLanes&i,_i===n&&(mi&i)===i&&(oi===4||oi===3&&(mi&130023424)===mi&&500>$t()-aE?gs(n,0):gE|=i),rn(n,A)}function _P(n,A){A===0&&(n.mode&1?(A=EI,EI<<=1,!(EI&130023424)&&(EI=4194304)):A=1);var i=Ki();n=Wr(n,A),n!==null&&(Za(n,A,i),rn(n,i))}function PJ(n){var A=n.memoizedState,i=0;A!==null&&(i=A.retryLane),_P(n,i)}function JJ(n,A){var i=0;switch(n.tag){case 13:var t=n.stateNode,o=n.memoizedState;o!==null&&(i=o.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(DA(314))}t!==null&&t.delete(A),_P(n,i)}var pP;pP=function(n,A,i){if(n!==null)if(n.memoizedProps!==A.pendingProps||tn.current)Xi=!0;else{if(!(n.lanes&i)&&!(A.flags&128))return Xi=!1,bJ(n,A,i);Xi=!!(n.flags&131072)}else Xi=!1,Jt&&A.flags&1048576&&QK(A,LC,A.index);switch(A.lanes=0,A.tag){case 2:var t=A.type;CC(n,A),n=A.pendingProps;var o=Eg(A,Ti.current);gg(A,i),o=tE(null,A,t,n,o,i);var s=iE();return A.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(A.tag=1,A.memoizedState=null,A.updateQueue=null,nn(t)?(s=!0,NC(A)):s=!1,A.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ZB(A),o.updater=oc,A.stateNode=o,o._reactInternals=A,Bp(A,t,n,i),A=Qp(null,A,t,!0,s,i)):(A.tag=0,Jt&&s&&OB(A),ki(null,A,o,i),A=A.child),A;case 16:t=A.elementType;A:{switch(CC(n,A),n=A.pendingProps,o=t._init,t=o(t._payload),A.type=t,o=A.tag=YJ(t),n=Vn(t,n),o){case 0:A=lp(null,A,t,n,i);break A;case 1:A=ax(null,A,t,n,i);break A;case 11:A=sx(null,A,t,n,i);break A;case 14:A=gx(null,A,t,Vn(t.type,n),i);break A}throw Error(DA(306,t,""))}return A;case 0:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:Vn(t,o),lp(n,A,t,o,i);case 1:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:Vn(t,o),ax(n,A,t,o,i);case 3:A:{if(ZK(A),n===null)throw Error(DA(387));t=A.pendingProps,s=A.memoizedState,o=s.element,mK(n,A),GC(A,t,null,i);var g=A.memoizedState;if(t=g.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},A.updateQueue.baseState=s,A.memoizedState=s,A.flags&256){o=hg(Error(DA(423)),A),A=Ix(n,A,t,i,o);break A}else if(t!==o){o=hg(Error(DA(424)),A),A=Ix(n,A,t,i,o);break A}else for(pn=Ro(A.stateNode.containerInfo.firstChild),Bn=A,Jt=!0,zn=null,i=fK(A,null,t,i),A.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(lg(),t===o){A=zr(n,A,i);break A}ki(n,A,t,i)}A=A.child}return A;case 5:return DK(A),n===null&&cp(A),t=A.type,o=A.pendingProps,s=n!==null?n.memoizedProps:null,g=o.children,sp(t,o)?g=null:s!==null&&sp(t,s)&&(A.flags|=32),zK(n,A),ki(n,A,g,i),A.child;case 6:return n===null&&cp(A),null;case 13:return XK(n,A,i);case 4:return XB(A,A.stateNode.containerInfo),t=A.pendingProps,n===null?A.child=Qg(A,null,t,i):ki(n,A,t,i),A.child;case 11:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:Vn(t,o),sx(n,A,t,o,i);case 7:return ki(n,A,A.pendingProps,i),A.child;case 8:return ki(n,A,A.pendingProps.children,i),A.child;case 12:return ki(n,A,A.pendingProps.children,i),A.child;case 10:A:{if(t=A.type._context,o=A.pendingProps,s=A.memoizedProps,g=o.value,mt(TC,t._currentValue),t._currentValue=g,s!==null)if(nr(s.value,g)){if(s.children===o.children&&!tn.current){A=zr(n,A,i);break A}}else for(s=A.child,s!==null&&(s.return=A);s!==null;){var a=s.dependencies;if(a!==null){g=s.child;for(var I=a.firstContext;I!==null;){if(I.context===t){if(s.tag===1){I=Or(-1,i&-i),I.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var p=_.pending;p===null?I.next=I:(I.next=p.next,p.next=I),_.pending=I}}s.lanes|=i,I=s.alternate,I!==null&&(I.lanes|=i),_p(s.return,i,A),a.lanes|=i;break}I=I.next}}else if(s.tag===10)g=s.type===A.type?null:s.child;else if(s.tag===18){if(g=s.return,g===null)throw Error(DA(341));g.lanes|=i,a=g.alternate,a!==null&&(a.lanes|=i),_p(g,i,A),g=s.sibling}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===A){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}ki(n,A,o.children,i),A=A.child}return A;case 9:return o=A.type,t=A.pendingProps.children,gg(A,i),o=Gn(o),t=t(o),A.flags|=1,ki(n,A,t,i),A.child;case 14:return t=A.type,o=Vn(t,A.pendingProps),o=Vn(t.type,o),gx(n,A,t,o,i);case 15:return VK(n,A,A.type,A.pendingProps,i);case 17:return t=A.type,o=A.pendingProps,o=A.elementType===t?o:Vn(t,o),CC(n,A),A.tag=1,nn(t)?(n=!0,NC(A)):n=!1,gg(A,i),YK(A,t,o),Bp(A,t,o,i),Qp(null,A,t,!0,n,i);case 19:return $K(n,A,i);case 22:return WK(n,A,i)}throw Error(DA(156,A.tag))};function BP(n,A){return PH(n,A)}function OJ(n,A,i,t){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=A,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,A,i,t){return new OJ(n,A,i,t)}function _E(n){return n=n.prototype,!(!n||!n.isReactComponent)}function YJ(n){if(typeof n=="function")return _E(n)?1:0;if(n!=null){if(n=n.$$typeof,n===NB)return 11;if(n===FB)return 14}return 2}function No(n,A){var i=n.alternate;return i===null?(i=Nn(n.tag,A,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=A,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&14680064,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,A=n.dependencies,i.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i}function pC(n,A,i,t,o,s){var g=2;if(t=n,typeof n=="function")_E(n)&&(g=1);else if(typeof n=="string")g=5;else A:switch(n){case qs:return as(i.children,o,s,A);case vB:g=8,o|=8;break;case k_:return n=Nn(12,i,A,o|2),n.elementType=k_,n.lanes=s,n;case H_:return n=Nn(13,i,A,o),n.elementType=H_,n.lanes=s,n;case K_:return n=Nn(19,i,A,o),n.elementType=K_,n.lanes=s,n;case DH:return ac(i,o,s,A);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case yH:g=10;break A;case mH:g=9;break A;case NB:g=11;break A;case FB:g=14;break A;case _o:g=16,t=null;break A}throw Error(DA(130,n==null?n:typeof n,""))}return A=Nn(g,i,A,o),A.elementType=n,A.type=t,A.lanes=s,A}function as(n,A,i,t){return n=Nn(7,n,t,A),n.lanes=i,n}function ac(n,A,i,t){return n=Nn(22,n,t,A),n.elementType=DH,n.lanes=i,n.stateNode={isHidden:!1},n}function Wc(n,A,i){return n=Nn(6,n,null,A),n.lanes=i,n}function zc(n,A,i){return A=Nn(4,n.children!==null?n.children:[],n.key,A),A.lanes=i,A.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},A}function qJ(n,A,i,t,o){this.tag=A,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pE(n,A,i,t,o,s,g,a,I){return n=new qJ(n,A,i,a,I),A===1?(A=1,s===!0&&(A|=8)):A=0,s=Nn(3,null,null,A),n.current=s,s.stateNode=n,s.memoizedState={element:t,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ZB(s),n}function jJ(n,A,i){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:t==null?null:""+t,children:n,containerInfo:A,implementation:i}}function EP(n){if(!n)return Uo;n=n._reactInternals;A:{if(fs(n)!==n||n.tag!==1)throw Error(DA(170));var A=n;do{switch(A.tag){case 3:A=A.stateNode.context;break A;case 1:if(nn(A.type)){A=A.stateNode.__reactInternalMemoizedMergedChildContext;break A}}A=A.return}while(A!==null);throw Error(DA(171))}if(n.tag===1){var i=n.type;if(nn(i))return EK(n,i,A)}return A}function lP(n,A,i,t,o,s,g,a,I){return n=pE(i,t,!0,n,o,s,g,a,I),n.context=EP(null),i=n.current,t=Ki(),o=vo(i),s=Or(t,o),s.callback=A??null,Mo(i,s,o),n.current.lanes=o,Za(n,o,t),rn(n,t),n}function Ic(n,A,i,t){var o=A.current,s=Ki(),g=vo(o);return i=EP(i),A.context===null?A.context=i:A.pendingContext=i,A=Or(s,g),A.payload={element:n},t=t===void 0?null:t,t!==null&&(A.callback=t),n=Mo(o,A,g),n!==null&&(tr(n,o,g,s),gC(n,o,g)),g}function YC(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hx(n,A){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<A?i:A}}function BE(n,A){hx(n,A),(n=n.alternate)&&hx(n,A)}function VJ(){return null}var QP=typeof reportError=="function"?reportError:function(n){console.error(n)};function EE(n){this._internalRoot=n}Cc.prototype.render=EE.prototype.render=function(n){var A=this._internalRoot;if(A===null)throw Error(DA(409));Ic(n,A,null,null)};Cc.prototype.unmount=EE.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var A=n.containerInfo;Bs(function(){Ic(null,n,null,null)}),A[Vr]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var A=WH();n={blockedOn:null,target:n,priority:A};for(var i=0;i<Eo.length&&A!==0&&A<Eo[i].priority;i++);Eo.splice(i,0,n),i===0&&ZH(n)}};function lE(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ux(){}function WJ(n,A,i,t,o){if(o){if(typeof t=="function"){var s=t;t=function(){var _=YC(g);s.call(_)}}var g=lP(A,t,n,0,null,!1,!1,"",ux);return n._reactRootContainer=g,n[Vr]=g.current,Ga(n.nodeType===8?n.parentNode:n),Bs(),g}for(;o=n.lastChild;)n.removeChild(o);if(typeof t=="function"){var a=t;t=function(){var _=YC(I);a.call(_)}}var I=pE(n,0,!1,null,null,!1,!1,"",ux);return n._reactRootContainer=I,n[Vr]=I.current,Ga(n.nodeType===8?n.parentNode:n),Bs(function(){Ic(A,I,i,t)}),I}function _c(n,A,i,t,o){var s=i._reactRootContainer;if(s){var g=s;if(typeof o=="function"){var a=o;o=function(){var I=YC(g);a.call(I)}}Ic(A,g,n,o)}else g=WJ(i,A,n,o,t);return YC(g)}jH=function(n){switch(n.tag){case 3:var A=n.stateNode;if(A.current.memoizedState.isDehydrated){var i=ca(A.pendingLanes);i!==0&&(UB(A,i|1),rn(A,$t()),!(ot&6)&&(ug=$t()+500,Ko()))}break;case 13:Bs(function(){var t=Wr(n,1);if(t!==null){var o=Ki();tr(t,n,1,o)}}),BE(n,1)}};GB=function(n){if(n.tag===13){var A=Wr(n,134217728);if(A!==null){var i=Ki();tr(A,n,134217728,i)}BE(n,134217728)}};VH=function(n){if(n.tag===13){var A=vo(n),i=Wr(n,A);if(i!==null){var t=Ki();tr(i,n,A,t)}BE(n,A)}};WH=function(){return lt};zH=function(n,A){var i=lt;try{return lt=n,A()}finally{lt=i}};Z_=function(n,A,i){switch(A){case"input":if(O_(n,i),A=i.name,i.type==="radio"&&A!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+A)+'][type="radio"]'),A=0;A<i.length;A++){var t=i[A];if(t!==n&&t.form===n.form){var o=ic(t);if(!o)throw Error(DA(90));wH(t),O_(t,o)}}}break;case"textarea":MH(n,i);break;case"select":A=i.value,A!=null&&ng(n,!!i.multiple,A,!1)}};UH=IE;GH=Bs;var zJ={usingClientEntryPoint:!1,Events:[$a,zs,ic,LH,TH,IE]},Aa={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZJ={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=HH(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||VJ,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wI=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wI.isDisabled&&wI.supportsFiber)try{$C=wI.inject(ZJ),dr=wI}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zJ;ln.createPortal=function(n,A){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lE(A))throw Error(DA(200));return jJ(n,A,null,i)};ln.createRoot=function(n,A){if(!lE(n))throw Error(DA(299));var i=!1,t="",o=QP;return A!=null&&(A.unstable_strictMode===!0&&(i=!0),A.identifierPrefix!==void 0&&(t=A.identifierPrefix),A.onRecoverableError!==void 0&&(o=A.onRecoverableError)),A=pE(n,1,!1,null,null,i,!1,t,o),n[Vr]=A.current,Ga(n.nodeType===8?n.parentNode:n),new EE(A)};ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var A=n._reactInternals;if(A===void 0)throw typeof n.render=="function"?Error(DA(188)):(n=Object.keys(n).join(","),Error(DA(268,n)));return n=HH(A),n=n===null?null:n.stateNode,n};ln.flushSync=function(n){return Bs(n)};ln.hydrate=function(n,A,i){if(!cc(A))throw Error(DA(200));return _c(null,n,A,!0,i)};ln.hydrateRoot=function(n,A,i){if(!lE(n))throw Error(DA(405));var t=i!=null&&i.hydratedSources||null,o=!1,s="",g=QP;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),A=lP(A,null,n,1,i??null,o,!1,s,g),n[Vr]=A.current,Ga(n),t)for(n=0;n<t.length;n++)i=t[n],o=i._getVersion,o=o(i._source),A.mutableSourceEagerHydrationData==null?A.mutableSourceEagerHydrationData=[i,o]:A.mutableSourceEagerHydrationData.push(i,o);return new Cc(A)};ln.render=function(n,A,i){if(!cc(A))throw Error(DA(200));return _c(null,n,A,!1,i)};ln.unmountComponentAtNode=function(n){if(!cc(n))throw Error(DA(40));return n._reactRootContainer?(Bs(function(){_c(null,null,n,!1,function(){n._reactRootContainer=null,n[Vr]=null})}),!0):!1};ln.unstable_batchedUpdates=IE;ln.unstable_renderSubtreeIntoContainer=function(n,A,i,t){if(!cc(i))throw Error(DA(200));if(n==null||n._reactInternals===void 0)throw Error(DA(38));return _c(n,A,i,!1,t)};ln.version="18.3.1-next-f1338f8080-20240426";function dP(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dP)}catch(n){console.error(n)}}dP(),dH.exports=ln;var XJ=dH.exports,$J,fx=XJ;$J=fx.createRoot,fx.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="170",ws={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AO=0,yx=1,eO=2,hP=1,tO=2,Tr=3,Zr=0,on=1,lr=2,Fo=0,Ig=1,mx=2,Dx=3,Sx=4,iO=5,es=100,nO=101,rO=102,oO=103,sO=104,gO=200,aO=201,IO=202,CO=203,bp=204,vp=205,cO=206,_O=207,pO=208,BO=209,EO=210,lO=211,QO=212,dO=213,hO=214,Np=0,Fp=1,Lp=2,fg=3,Tp=4,Up=5,Gp=6,xp=7,Bc=0,uO=1,fO=2,Lo=0,yO=1,mO=2,DO=3,SO=4,wO=5,RO=6,MO=7,wx="attached",bO="detached",uP=300,yg=301,mg=302,qC=303,kp=304,Ec=306,Go=1e3,Qr=1001,jC=1002,sn=1003,fP=1004,pa=1005,Fn=1006,BC=1007,Kr=1008,Xr=1009,yP=1010,mP=1011,qa=1012,QE=1013,Es=1014,Ar=1015,eI=1016,dE=1017,hE=1018,Dg=1020,DP=35902,SP=1021,wP=1022,Ln=1023,RP=1024,MP=1025,Cg=1026,Sg=1027,uE=1028,fE=1029,bP=1030,yE=1031,mE=1033,EC=33776,lC=33777,QC=33778,dC=33779,Hp=35840,Kp=35841,Pp=35842,Jp=35843,Op=36196,Yp=37492,qp=37496,jp=37808,Vp=37809,Wp=37810,zp=37811,Zp=37812,Xp=37813,$p=37814,AB=37815,eB=37816,tB=37817,iB=37818,nB=37819,rB=37820,oB=37821,hC=36492,sB=36494,gB=36495,vP=36283,aB=36284,IB=36285,CB=36286,ja=2300,Va=2301,Zc=2302,Rx=2400,Mx=2401,bx=2402,vO=2500,NO=0,NP=1,cB=2,FO=3200,LO=3201,lc=0,TO=1,Qo="",Rn="srgb",Lg="srgb-linear",Qc="linear",ht="srgb",Ms=7680,vx=519,UO=512,GO=513,xO=514,FP=515,kO=516,HO=517,KO=518,PO=519,_B=35044,Nx="300 es",Pr=2e3,VC=2001;class ys{addEventListener(A,i){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(i)===-1&&t[A].push(i)}hasEventListener(A,i){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(i)!==-1}removeEventListener(A,i){if(this._listeners===void 0)return;const o=this._listeners[A];if(o!==void 0){const s=o.indexOf(i);s!==-1&&o.splice(s,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const o=t.slice(0);for(let s=0,g=o.length;s<g;s++)o[s].call(this,A);A.target=null}}}const Ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fx=1234567;const Sa=Math.PI/180,wg=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,i=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(Ni[n&255]+Ni[n>>8&255]+Ni[n>>16&255]+Ni[n>>24&255]+"-"+Ni[A&255]+Ni[A>>8&255]+"-"+Ni[A>>16&15|64]+Ni[A>>24&255]+"-"+Ni[i&63|128]+Ni[i>>8&255]+"-"+Ni[i>>16&255]+Ni[i>>24&255]+Ni[t&255]+Ni[t>>8&255]+Ni[t>>16&255]+Ni[t>>24&255]).toLowerCase()}function ri(n,A,i){return Math.max(A,Math.min(i,n))}function DE(n,A){return(n%A+A)%A}function JO(n,A,i,t,o){return t+(n-A)*(o-t)/(i-A)}function OO(n,A,i){return n!==A?(i-n)/(A-n):0}function wa(n,A,i){return(1-i)*n+i*A}function YO(n,A,i,t){return wa(n,A,1-Math.exp(-i*t))}function qO(n,A=1){return A-Math.abs(DE(n,A*2)-A)}function jO(n,A,i){return n<=A?0:n>=i?1:(n=(n-A)/(i-A),n*n*(3-2*n))}function VO(n,A,i){return n<=A?0:n>=i?1:(n=(n-A)/(i-A),n*n*n*(n*(n*6-15)+10))}function WO(n,A){return n+Math.floor(Math.random()*(A-n+1))}function zO(n,A){return n+Math.random()*(A-n)}function ZO(n){return n*(.5-Math.random())}function XO(n){n!==void 0&&(Fx=n);let A=Fx+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function $O(n){return n*Sa}function AY(n){return n*wg}function eY(n){return(n&n-1)===0&&n!==0}function tY(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function iY(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nY(n,A,i,t,o){const s=Math.cos,g=Math.sin,a=s(i/2),I=g(i/2),_=s((A+t)/2),p=g((A+t)/2),B=s((A-t)/2),E=g((A-t)/2),Q=s((t-A)/2),h=g((t-A)/2);switch(o){case"XYX":n.set(a*p,I*B,I*E,a*_);break;case"YZY":n.set(I*E,a*p,I*B,a*_);break;case"ZXZ":n.set(I*B,I*E,a*p,a*_);break;case"XZX":n.set(a*p,I*h,I*Q,a*_);break;case"YXY":n.set(I*Q,a*p,I*h,a*_);break;case"ZYZ":n.set(I*h,I*Q,a*p,a*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Zn(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xn={DEG2RAD:Sa,RAD2DEG:wg,generateUUID:ir,clamp:ri,euclideanModulo:DE,mapLinear:JO,inverseLerp:OO,lerp:wa,damp:YO,pingpong:qO,smoothstep:jO,smootherstep:VO,randInt:WO,randFloat:zO,randFloatSpread:ZO,seededRandom:XO,degToRad:$O,radToDeg:AY,isPowerOfTwo:eY,ceilPowerOfTwo:tY,floorPowerOfTwo:iY,setQuaternionFromProperEuler:nY,normalize:Et,denormalize:Zn};class Qe{constructor(A=0,i=0){Qe.prototype.isVector2=!0,this.x=A,this.y=i}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,i){return this.x=A,this.y=i,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const i=this.x,t=this.y,o=A.elements;return this.x=o[0]*i+o[3]*t+o[6],this.y=o[1]*i+o[4]*t+o[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const i=Math.sqrt(this.lengthSq()*A.lengthSq());if(i===0)return Math.PI/2;const t=this.dot(A)/i;return Math.acos(ri(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const i=this.x-A.x,t=this.y-A.y;return i*i+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this}rotateAround(A,i){const t=Math.cos(i),o=Math.sin(i),s=this.x-A.x,g=this.y-A.y;return this.x=s*t-g*o+A.x,this.y=s*o+g*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(A,i,t,o,s,g,a,I,_){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,i,t,o,s,g,a,I,_)}set(A,i,t,o,s,g,a,I,_){const p=this.elements;return p[0]=A,p[1]=o,p[2]=a,p[3]=i,p[4]=s,p[5]=I,p[6]=t,p[7]=g,p[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const i=this.elements,t=A.elements;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],this}extractBasis(A,i,t){return A.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const i=A.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,i){const t=A.elements,o=i.elements,s=this.elements,g=t[0],a=t[3],I=t[6],_=t[1],p=t[4],B=t[7],E=t[2],Q=t[5],h=t[8],y=o[0],u=o[3],l=o[6],f=o[1],m=o[4],D=o[7],T=o[2],v=o[5],N=o[8];return s[0]=g*y+a*f+I*T,s[3]=g*u+a*m+I*v,s[6]=g*l+a*D+I*N,s[1]=_*y+p*f+B*T,s[4]=_*u+p*m+B*v,s[7]=_*l+p*D+B*N,s[2]=E*y+Q*f+h*T,s[5]=E*u+Q*m+h*v,s[8]=E*l+Q*D+h*N,this}multiplyScalar(A){const i=this.elements;return i[0]*=A,i[3]*=A,i[6]*=A,i[1]*=A,i[4]*=A,i[7]*=A,i[2]*=A,i[5]*=A,i[8]*=A,this}determinant(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8];return i*g*p-i*a*_-t*s*p+t*a*I+o*s*_-o*g*I}invert(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8],B=p*g-a*_,E=a*I-p*s,Q=_*s-g*I,h=i*B+t*E+o*Q;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/h;return A[0]=B*y,A[1]=(o*_-p*t)*y,A[2]=(a*t-o*g)*y,A[3]=E*y,A[4]=(p*i-o*I)*y,A[5]=(o*s-a*i)*y,A[6]=Q*y,A[7]=(t*I-_*i)*y,A[8]=(g*i-t*s)*y,this}transpose(){let A;const i=this.elements;return A=i[1],i[1]=i[3],i[3]=A,A=i[2],i[2]=i[6],i[6]=A,A=i[5],i[5]=i[7],i[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const i=this.elements;return A[0]=i[0],A[1]=i[3],A[2]=i[6],A[3]=i[1],A[4]=i[4],A[5]=i[7],A[6]=i[2],A[7]=i[5],A[8]=i[8],this}setUvTransform(A,i,t,o,s,g,a){const I=Math.cos(s),_=Math.sin(s);return this.set(t*I,t*_,-t*(I*g+_*a)+g+A,-o*_,o*I,-o*(-_*g+I*a)+a+i,0,0,1),this}scale(A,i){return this.premultiply(Xc.makeScale(A,i)),this}rotate(A){return this.premultiply(Xc.makeRotation(-A)),this}translate(A,i){return this.premultiply(Xc.makeTranslation(A,i)),this}makeTranslation(A,i){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,i,0,0,1),this}makeRotation(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,-t,0,t,i,0,0,0,1),this}makeScale(A,i){return this.set(A,0,0,0,i,0,0,0,1),this}equals(A){const i=this.elements,t=A.elements;for(let o=0;o<9;o++)if(i[o]!==t[o])return!1;return!0}fromArray(A,i=0){for(let t=0;t<9;t++)this.elements[t]=A[t+i];return this}toArray(A=[],i=0){const t=this.elements;return A[i]=t[0],A[i+1]=t[1],A[i+2]=t[2],A[i+3]=t[3],A[i+4]=t[4],A[i+5]=t[5],A[i+6]=t[6],A[i+7]=t[7],A[i+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Ne;function LP(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rY(){const n=Wa("canvas");return n.style.display="block",n}const Lx={};function Ba(n){n in Lx||(Lx[n]=!0,console.warn(n))}function oY(n,A,i){return new Promise(function(t,o){function s(){switch(n.clientWaitSync(A,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:t()}}setTimeout(s,i)})}function sY(n){const A=n.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function gY(n){const A=n.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const rt={enabled:!0,workingColorSpace:Lg,spaces:{},convert:function(n,A,i){return this.enabled===!1||A===i||!A||!i||(this.spaces[A].transfer===ht&&(n.r=Yr(n.r),n.g=Yr(n.g),n.b=Yr(n.b)),this.spaces[A].primaries!==this.spaces[i].primaries&&(n.applyMatrix3(this.spaces[A].toXYZ),n.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===ht&&(n.r=cg(n.r),n.g=cg(n.g),n.b=cg(n.b))),n},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qo?Qc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,A=this.workingColorSpace){return n.fromArray(this.spaces[A].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,A,i){return n.copy(this.spaces[A].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cg(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Tx=[.64,.33,.3,.6,.15,.06],Ux=[.2126,.7152,.0722],Gx=[.3127,.329],xx=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Lg]:{primaries:Tx,whitePoint:Gx,transfer:Qc,toXYZ:xx,fromXYZ:kx,luminanceCoefficients:Ux,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:Tx,whitePoint:Gx,transfer:ht,toXYZ:xx,fromXYZ:kx,luminanceCoefficients:Ux,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let bs;class aY{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let i;if(A instanceof HTMLCanvasElement)i=A;else{bs===void 0&&(bs=Wa("canvas")),bs.width=A.width,bs.height=A.height;const t=bs.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),i=bs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const i=Wa("canvas");i.width=A.width,i.height=A.height;const t=i.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const o=t.getImageData(0,0,A.width,A.height),s=o.data;for(let g=0;g<s.length;g++)s[g]=Yr(s[g]/255)*255;return t.putImageData(o,0,0),i}else if(A.data){const i=A.data.slice(0);for(let t=0;t<i.length;t++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[t]=Math.floor(Yr(i[t]/255)*255):i[t]=Yr(i[t]);return{data:i,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let IY=0;class TP{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IY++}),this.uuid=ir(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const i=A===void 0||typeof A=="string";if(!i&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let g=0,a=o.length;g<a;g++)o[g].isDataTexture?s.push($c(o[g].image)):s.push($c(o[g]))}else s=$c(o);t.url=s}return i||(A.images[this.uuid]=t),t}}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aY.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CY=0;class ii extends ys{constructor(A=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,t=Qr,o=Qr,s=Fn,g=Kr,a=Ln,I=Xr,_=ii.DEFAULT_ANISOTROPY,p=Qo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CY++}),this.uuid=ir(),this.name="",this.source=new TP(A),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=t,this.wrapT=o,this.magFilter=s,this.minFilter=g,this.anisotropy=_,this.format=a,this.internalFormat=null,this.type=I,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const i=A===void 0||typeof A=="string";if(!i&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),i||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==uP)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Go:A.x=A.x-Math.floor(A.x);break;case Qr:A.x=A.x<0?0:1;break;case jC:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Go:A.y=A.y-Math.floor(A.y);break;case Qr:A.y=A.y<0?0:1;break;case jC:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=uP;ii.DEFAULT_ANISOTROPY=1;class $e{constructor(A=0,i=0,t=0,o=1){$e.prototype.isVector4=!0,this.x=A,this.y=i,this.z=t,this.w=o}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,i,t,o){return this.x=A,this.y=i,this.z=t,this.w=o,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this.z=A.z+i.z,this.w=A.w+i.w,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this.z+=A.z*i,this.w+=A.w*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this.z=A.z-i.z,this.w=A.w-i.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const i=this.x,t=this.y,o=this.z,s=this.w,g=A.elements;return this.x=g[0]*i+g[4]*t+g[8]*o+g[12]*s,this.y=g[1]*i+g[5]*t+g[9]*o+g[13]*s,this.z=g[2]*i+g[6]*t+g[10]*o+g[14]*s,this.w=g[3]*i+g[7]*t+g[11]*o+g[15]*s,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const i=Math.sqrt(1-A.w*A.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/i,this.y=A.y/i,this.z=A.z/i),this}setAxisAngleFromRotationMatrix(A){let i,t,o,s;const I=A.elements,_=I[0],p=I[4],B=I[8],E=I[1],Q=I[5],h=I[9],y=I[2],u=I[6],l=I[10];if(Math.abs(p-E)<.01&&Math.abs(B-y)<.01&&Math.abs(h-u)<.01){if(Math.abs(p+E)<.1&&Math.abs(B+y)<.1&&Math.abs(h+u)<.1&&Math.abs(_+Q+l-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const m=(_+1)/2,D=(Q+1)/2,T=(l+1)/2,v=(p+E)/4,N=(B+y)/4,L=(h+u)/4;return m>D&&m>T?m<.01?(t=0,o=.707106781,s=.707106781):(t=Math.sqrt(m),o=v/t,s=N/t):D>T?D<.01?(t=.707106781,o=0,s=.707106781):(o=Math.sqrt(D),t=v/o,s=L/o):T<.01?(t=.707106781,o=.707106781,s=0):(s=Math.sqrt(T),t=N/s,o=L/s),this.set(t,o,s,i),this}let f=Math.sqrt((u-h)*(u-h)+(B-y)*(B-y)+(E-p)*(E-p));return Math.abs(f)<.001&&(f=1),this.x=(u-h)/f,this.y=(B-y)/f,this.z=(E-p)/f,this.w=Math.acos((_+Q+l-1)/2),this}setFromMatrixPosition(A){const i=A.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this.z=Math.max(A.z,Math.min(i.z,this.z)),this.w=Math.max(A.w,Math.min(i.w,this.w)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this.z=Math.max(A,Math.min(i,this.z)),this.w=Math.max(A,Math.min(i,this.w)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this.z+=(A.z-this.z)*i,this.w+=(A.w-this.w)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this.z=A.z+(i.z-A.z)*t,this.w=A.w+(i.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this.z=A[i+2],this.w=A[i+3],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A[i+2]=this.z,A[i+3]=this.w,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this.z=A.getZ(i),this.w=A.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cY extends ys{constructor(A=1,i=1,t={}){super(),this.isRenderTarget=!0,this.width=A,this.height=i,this.depth=1,this.scissor=new $e(0,0,A,i),this.scissorTest=!1,this.viewport=new $e(0,0,A,i);const o={width:A,height:i,depth:1};t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},t);const s=new ii(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace);s.flipY=!1,s.generateMipmaps=t.generateMipmaps,s.internalFormat=t.internalFormat,this.textures=[];const g=t.count;for(let a=0;a<g;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,i,t=1){if(this.width!==A||this.height!==i||this.depth!==t){this.width=A,this.height=i,this.depth=t;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=A,this.textures[o].image.height=i,this.textures[o].image.depth=t;this.dispose()}this.viewport.set(0,0,A,i),this.scissor.set(0,0,A,i)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let t=0,o=A.textures.length;t<o;t++)this.textures[t]=A.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;const i=Object.assign({},A.texture.image);return this.texture.source=new TP(i),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends cY{constructor(A=1,i=1,t={}){super(A,i,t),this.isWebGLRenderTarget=!0}}class UP extends ii{constructor(A=null,i=1,t=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:i,height:t,depth:o},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class _Y extends ii{constructor(A=null,i=1,t=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:i,height:t,depth:o},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(A=0,i=0,t=0,o=1){this.isQuaternion=!0,this._x=A,this._y=i,this._z=t,this._w=o}static slerpFlat(A,i,t,o,s,g,a){let I=t[o+0],_=t[o+1],p=t[o+2],B=t[o+3];const E=s[g+0],Q=s[g+1],h=s[g+2],y=s[g+3];if(a===0){A[i+0]=I,A[i+1]=_,A[i+2]=p,A[i+3]=B;return}if(a===1){A[i+0]=E,A[i+1]=Q,A[i+2]=h,A[i+3]=y;return}if(B!==y||I!==E||_!==Q||p!==h){let u=1-a;const l=I*E+_*Q+p*h+B*y,f=l>=0?1:-1,m=1-l*l;if(m>Number.EPSILON){const T=Math.sqrt(m),v=Math.atan2(T,l*f);u=Math.sin(u*v)/T,a=Math.sin(a*v)/T}const D=a*f;if(I=I*u+E*D,_=_*u+Q*D,p=p*u+h*D,B=B*u+y*D,u===1-a){const T=1/Math.sqrt(I*I+_*_+p*p+B*B);I*=T,_*=T,p*=T,B*=T}}A[i]=I,A[i+1]=_,A[i+2]=p,A[i+3]=B}static multiplyQuaternionsFlat(A,i,t,o,s,g){const a=t[o],I=t[o+1],_=t[o+2],p=t[o+3],B=s[g],E=s[g+1],Q=s[g+2],h=s[g+3];return A[i]=a*h+p*B+I*Q-_*E,A[i+1]=I*h+p*E+_*B-a*Q,A[i+2]=_*h+p*Q+a*E-I*B,A[i+3]=p*h-a*B-I*E-_*Q,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,i,t,o){return this._x=A,this._y=i,this._z=t,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,i=!0){const t=A._x,o=A._y,s=A._z,g=A._order,a=Math.cos,I=Math.sin,_=a(t/2),p=a(o/2),B=a(s/2),E=I(t/2),Q=I(o/2),h=I(s/2);switch(g){case"XYZ":this._x=E*p*B+_*Q*h,this._y=_*Q*B-E*p*h,this._z=_*p*h+E*Q*B,this._w=_*p*B-E*Q*h;break;case"YXZ":this._x=E*p*B+_*Q*h,this._y=_*Q*B-E*p*h,this._z=_*p*h-E*Q*B,this._w=_*p*B+E*Q*h;break;case"ZXY":this._x=E*p*B-_*Q*h,this._y=_*Q*B+E*p*h,this._z=_*p*h+E*Q*B,this._w=_*p*B-E*Q*h;break;case"ZYX":this._x=E*p*B-_*Q*h,this._y=_*Q*B+E*p*h,this._z=_*p*h-E*Q*B,this._w=_*p*B+E*Q*h;break;case"YZX":this._x=E*p*B+_*Q*h,this._y=_*Q*B+E*p*h,this._z=_*p*h-E*Q*B,this._w=_*p*B-E*Q*h;break;case"XZY":this._x=E*p*B-_*Q*h,this._y=_*Q*B-E*p*h,this._z=_*p*h+E*Q*B,this._w=_*p*B+E*Q*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+g)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,i){const t=i/2,o=Math.sin(t);return this._x=A.x*o,this._y=A.y*o,this._z=A.z*o,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const i=A.elements,t=i[0],o=i[4],s=i[8],g=i[1],a=i[5],I=i[9],_=i[2],p=i[6],B=i[10],E=t+a+B;if(E>0){const Q=.5/Math.sqrt(E+1);this._w=.25/Q,this._x=(p-I)*Q,this._y=(s-_)*Q,this._z=(g-o)*Q}else if(t>a&&t>B){const Q=2*Math.sqrt(1+t-a-B);this._w=(p-I)/Q,this._x=.25*Q,this._y=(o+g)/Q,this._z=(s+_)/Q}else if(a>B){const Q=2*Math.sqrt(1+a-t-B);this._w=(s-_)/Q,this._x=(o+g)/Q,this._y=.25*Q,this._z=(I+p)/Q}else{const Q=2*Math.sqrt(1+B-t-a);this._w=(g-o)/Q,this._x=(s+_)/Q,this._y=(I+p)/Q,this._z=.25*Q}return this._onChangeCallback(),this}setFromUnitVectors(A,i){let t=A.dot(i)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*i.z-A.z*i.y,this._y=A.z*i.x-A.x*i.z,this._z=A.x*i.y-A.y*i.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(ri(this.dot(A),-1,1)))}rotateTowards(A,i){const t=this.angleTo(A);if(t===0)return this;const o=Math.min(1,i/t);return this.slerp(A,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,i){const t=A._x,o=A._y,s=A._z,g=A._w,a=i._x,I=i._y,_=i._z,p=i._w;return this._x=t*p+g*a+o*_-s*I,this._y=o*p+g*I+s*a-t*_,this._z=s*p+g*_+t*I-o*a,this._w=g*p-t*a-o*I-s*_,this._onChangeCallback(),this}slerp(A,i){if(i===0)return this;if(i===1)return this.copy(A);const t=this._x,o=this._y,s=this._z,g=this._w;let a=g*A._w+t*A._x+o*A._y+s*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=g,this._x=t,this._y=o,this._z=s,this;const I=1-a*a;if(I<=Number.EPSILON){const Q=1-i;return this._w=Q*g+i*this._w,this._x=Q*t+i*this._x,this._y=Q*o+i*this._y,this._z=Q*s+i*this._z,this.normalize(),this}const _=Math.sqrt(I),p=Math.atan2(_,a),B=Math.sin((1-i)*p)/_,E=Math.sin(i*p)/_;return this._w=g*B+this._w*E,this._x=t*B+this._x*E,this._y=o*B+this._y*E,this._z=s*B+this._z*E,this._onChangeCallback(),this}slerpQuaternions(A,i,t){return this.copy(A).slerp(i,t)}random(){const A=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),t=Math.random(),o=Math.sqrt(1-t),s=Math.sqrt(t);return this.set(o*Math.sin(A),o*Math.cos(A),s*Math.sin(i),s*Math.cos(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,i=0){return this._x=A[i],this._y=A[i+1],this._z=A[i+2],this._w=A[i+3],this._onChangeCallback(),this}toArray(A=[],i=0){return A[i]=this._x,A[i+1]=this._y,A[i+2]=this._z,A[i+3]=this._w,A}fromBufferAttribute(A,i){return this._x=A.getX(i),this._y=A.getY(i),this._z=A.getZ(i),this._w=A.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(A=0,i=0,t=0){P.prototype.isVector3=!0,this.x=A,this.y=i,this.z=t}set(A,i,t){return t===void 0&&(t=this.z),this.x=A,this.y=i,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,i){switch(A){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,i){return this.x=A.x+i.x,this.y=A.y+i.y,this.z=A.z+i.z,this}addScaledVector(A,i){return this.x+=A.x*i,this.y+=A.y*i,this.z+=A.z*i,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,i){return this.x=A.x-i.x,this.y=A.y-i.y,this.z=A.z-i.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,i){return this.x=A.x*i.x,this.y=A.y*i.y,this.z=A.z*i.z,this}applyEuler(A){return this.applyQuaternion(Hx.setFromEuler(A))}applyAxisAngle(A,i){return this.applyQuaternion(Hx.setFromAxisAngle(A,i))}applyMatrix3(A){const i=this.x,t=this.y,o=this.z,s=A.elements;return this.x=s[0]*i+s[3]*t+s[6]*o,this.y=s[1]*i+s[4]*t+s[7]*o,this.z=s[2]*i+s[5]*t+s[8]*o,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const i=this.x,t=this.y,o=this.z,s=A.elements,g=1/(s[3]*i+s[7]*t+s[11]*o+s[15]);return this.x=(s[0]*i+s[4]*t+s[8]*o+s[12])*g,this.y=(s[1]*i+s[5]*t+s[9]*o+s[13])*g,this.z=(s[2]*i+s[6]*t+s[10]*o+s[14])*g,this}applyQuaternion(A){const i=this.x,t=this.y,o=this.z,s=A.x,g=A.y,a=A.z,I=A.w,_=2*(g*o-a*t),p=2*(a*i-s*o),B=2*(s*t-g*i);return this.x=i+I*_+g*B-a*p,this.y=t+I*p+a*_-s*B,this.z=o+I*B+s*p-g*_,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const i=this.x,t=this.y,o=this.z,s=A.elements;return this.x=s[0]*i+s[4]*t+s[8]*o,this.y=s[1]*i+s[5]*t+s[9]*o,this.z=s[2]*i+s[6]*t+s[10]*o,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,i){return this.x=Math.max(A.x,Math.min(i.x,this.x)),this.y=Math.max(A.y,Math.min(i.y,this.y)),this.z=Math.max(A.z,Math.min(i.z,this.z)),this}clampScalar(A,i){return this.x=Math.max(A,Math.min(i,this.x)),this.y=Math.max(A,Math.min(i,this.y)),this.z=Math.max(A,Math.min(i,this.z)),this}clampLength(A,i){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(i,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,i){return this.x+=(A.x-this.x)*i,this.y+=(A.y-this.y)*i,this.z+=(A.z-this.z)*i,this}lerpVectors(A,i,t){return this.x=A.x+(i.x-A.x)*t,this.y=A.y+(i.y-A.y)*t,this.z=A.z+(i.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,i){const t=A.x,o=A.y,s=A.z,g=i.x,a=i.y,I=i.z;return this.x=o*I-s*a,this.y=s*g-t*I,this.z=t*a-o*g,this}projectOnVector(A){const i=A.lengthSq();if(i===0)return this.set(0,0,0);const t=A.dot(this)/i;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return A_.copy(this).projectOnVector(A),this.sub(A_)}reflect(A){return this.sub(A_.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const i=Math.sqrt(this.lengthSq()*A.lengthSq());if(i===0)return Math.PI/2;const t=this.dot(A)/i;return Math.acos(ri(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const i=this.x-A.x,t=this.y-A.y,o=this.z-A.z;return i*i+t*t+o*o}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,i,t){const o=Math.sin(i)*A;return this.x=o*Math.sin(t),this.y=Math.cos(i)*A,this.z=o*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,i,t){return this.x=A*Math.sin(i),this.y=t,this.z=A*Math.cos(i),this}setFromMatrixPosition(A){const i=A.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(A){const i=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),o=this.setFromMatrixColumn(A,2).length();return this.x=i,this.y=t,this.z=o,this}setFromMatrixColumn(A,i){return this.fromArray(A.elements,i*4)}setFromMatrix3Column(A,i){return this.fromArray(A.elements,i*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,i=0){return this.x=A[i],this.y=A[i+1],this.z=A[i+2],this}toArray(A=[],i=0){return A[i]=this.x,A[i+1]=this.y,A[i+2]=this.z,A}fromBufferAttribute(A,i){return this.x=A.getX(i),this.y=A.getY(i),this.z=A.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,i=Math.random()*2-1,t=Math.sqrt(1-i*i);return this.x=t*Math.cos(A),this.y=i,this.z=t*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const A_=new P,Hx=new $i;class Ao{constructor(A=new P(1/0,1/0,1/0),i=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=i}set(A,i){return this.min.copy(A),this.max.copy(i),this}setFromArray(A){this.makeEmpty();for(let i=0,t=A.length;i<t;i+=3)this.expandByPoint(On.fromArray(A,i));return this}setFromBufferAttribute(A){this.makeEmpty();for(let i=0,t=A.count;i<t;i++)this.expandByPoint(On.fromBufferAttribute(A,i));return this}setFromPoints(A){this.makeEmpty();for(let i=0,t=A.length;i<t;i++)this.expandByPoint(A[i]);return this}setFromCenterAndSize(A,i){const t=On.copy(i).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,i=!1){return this.makeEmpty(),this.expandByObject(A,i)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,i=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0){const s=t.getAttribute("position");if(i===!0&&s!==void 0&&A.isInstancedMesh!==!0)for(let g=0,a=s.count;g<a;g++)A.isMesh===!0?A.getVertexPosition(g,On):On.fromBufferAttribute(s,g),On.applyMatrix4(A.matrixWorld),this.expandByPoint(On);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),RI.copy(A.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),RI.copy(t.boundingBox)),RI.applyMatrix4(A.matrixWorld),this.union(RI)}const o=A.children;for(let s=0,g=o.length;s<g;s++)this.expandByObject(o[s],i);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,i){return i.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,On),On.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let i,t;return A.normal.x>0?(i=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(i=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(i+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(i+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(i+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(i+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),i<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(ea),MI.subVectors(this.max,ea),vs.subVectors(A.a,ea),Ns.subVectors(A.b,ea),Fs.subVectors(A.c,ea),ro.subVectors(Ns,vs),oo.subVectors(Fs,Ns),Oo.subVectors(vs,Fs);let i=[0,-ro.z,ro.y,0,-oo.z,oo.y,0,-Oo.z,Oo.y,ro.z,0,-ro.x,oo.z,0,-oo.x,Oo.z,0,-Oo.x,-ro.y,ro.x,0,-oo.y,oo.x,0,-Oo.y,Oo.x,0];return!e_(i,vs,Ns,Fs,MI)||(i=[1,0,0,0,1,0,0,0,1],!e_(i,vs,Ns,Fs,MI))?!1:(bI.crossVectors(ro,oo),i=[bI.x,bI.y,bI.z],e_(i,vs,Ns,Fs,MI))}clampPoint(A,i){return i.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,On).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(On).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Mr),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Mr=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,RI=new Ao,vs=new P,Ns=new P,Fs=new P,ro=new P,oo=new P,Oo=new P,ea=new P,MI=new P,bI=new P,Yo=new P;function e_(n,A,i,t,o){for(let s=0,g=n.length-3;s<=g;s+=3){Yo.fromArray(n,s);const a=o.x*Math.abs(Yo.x)+o.y*Math.abs(Yo.y)+o.z*Math.abs(Yo.z),I=A.dot(Yo),_=i.dot(Yo),p=t.dot(Yo);if(Math.max(-Math.max(I,_,p),Math.min(I,_,p))>a)return!1}return!0}const pY=new Ao,ta=new P,t_=new P;class ur{constructor(A=new P,i=-1){this.isSphere=!0,this.center=A,this.radius=i}set(A,i){return this.center.copy(A),this.radius=i,this}setFromPoints(A,i){const t=this.center;i!==void 0?t.copy(i):pY.setFromPoints(A).getCenter(t);let o=0;for(let s=0,g=A.length;s<g;s++)o=Math.max(o,t.distanceToSquared(A[s]));return this.radius=Math.sqrt(o),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const i=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=i*i}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,i){const t=this.center.distanceToSquared(A);return i.copy(A),t>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;ta.subVectors(A,this.center);const i=ta.lengthSq();if(i>this.radius*this.radius){const t=Math.sqrt(i),o=(t-this.radius)*.5;this.center.addScaledVector(ta,o/t),this.radius+=o}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(t_.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(ta.copy(A.center).add(t_)),this.expandByPoint(ta.copy(A.center).sub(t_))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new P,i_=new P,vI=new P,so=new P,n_=new P,NI=new P,r_=new P;class Tg{constructor(A=new P,i=new P(0,0,-1)){this.origin=A,this.direction=i}set(A,i){return this.origin.copy(A),this.direction.copy(i),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,i){return i.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,br)),this}closestPointToPoint(A,i){i.subVectors(A,this.origin);const t=i.dot(this.direction);return t<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const i=br.subVectors(A,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(A):(br.copy(this.origin).addScaledVector(this.direction,i),br.distanceToSquared(A))}distanceSqToSegment(A,i,t,o){i_.copy(A).add(i).multiplyScalar(.5),vI.copy(i).sub(A).normalize(),so.copy(this.origin).sub(i_);const s=A.distanceTo(i)*.5,g=-this.direction.dot(vI),a=so.dot(this.direction),I=-so.dot(vI),_=so.lengthSq(),p=Math.abs(1-g*g);let B,E,Q,h;if(p>0)if(B=g*I-a,E=g*a-I,h=s*p,B>=0)if(E>=-h)if(E<=h){const y=1/p;B*=y,E*=y,Q=B*(B+g*E+2*a)+E*(g*B+E+2*I)+_}else E=s,B=Math.max(0,-(g*E+a)),Q=-B*B+E*(E+2*I)+_;else E=-s,B=Math.max(0,-(g*E+a)),Q=-B*B+E*(E+2*I)+_;else E<=-h?(B=Math.max(0,-(-g*s+a)),E=B>0?-s:Math.min(Math.max(-s,-I),s),Q=-B*B+E*(E+2*I)+_):E<=h?(B=0,E=Math.min(Math.max(-s,-I),s),Q=E*(E+2*I)+_):(B=Math.max(0,-(g*s+a)),E=B>0?s:Math.min(Math.max(-s,-I),s),Q=-B*B+E*(E+2*I)+_);else E=g>0?-s:s,B=Math.max(0,-(g*E+a)),Q=-B*B+E*(E+2*I)+_;return t&&t.copy(this.origin).addScaledVector(this.direction,B),o&&o.copy(i_).addScaledVector(vI,E),Q}intersectSphere(A,i){br.subVectors(A.center,this.origin);const t=br.dot(this.direction),o=br.dot(br)-t*t,s=A.radius*A.radius;if(o>s)return null;const g=Math.sqrt(s-o),a=t-g,I=t+g;return I<0?null:a<0?this.at(I,i):this.at(a,i)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const i=A.normal.dot(this.direction);if(i===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/i;return t>=0?t:null}intersectPlane(A,i){const t=this.distanceToPlane(A);return t===null?null:this.at(t,i)}intersectsPlane(A){const i=A.distanceToPoint(this.origin);return i===0||A.normal.dot(this.direction)*i<0}intersectBox(A,i){let t,o,s,g,a,I;const _=1/this.direction.x,p=1/this.direction.y,B=1/this.direction.z,E=this.origin;return _>=0?(t=(A.min.x-E.x)*_,o=(A.max.x-E.x)*_):(t=(A.max.x-E.x)*_,o=(A.min.x-E.x)*_),p>=0?(s=(A.min.y-E.y)*p,g=(A.max.y-E.y)*p):(s=(A.max.y-E.y)*p,g=(A.min.y-E.y)*p),t>g||s>o||((s>t||isNaN(t))&&(t=s),(g<o||isNaN(o))&&(o=g),B>=0?(a=(A.min.z-E.z)*B,I=(A.max.z-E.z)*B):(a=(A.max.z-E.z)*B,I=(A.min.z-E.z)*B),t>I||a>o)||((a>t||t!==t)&&(t=a),(I<o||o!==o)&&(o=I),o<0)?null:this.at(t>=0?t:o,i)}intersectsBox(A){return this.intersectBox(A,br)!==null}intersectTriangle(A,i,t,o,s){n_.subVectors(i,A),NI.subVectors(t,A),r_.crossVectors(n_,NI);let g=this.direction.dot(r_),a;if(g>0){if(o)return null;a=1}else if(g<0)a=-1,g=-g;else return null;so.subVectors(this.origin,A);const I=a*this.direction.dot(NI.crossVectors(so,NI));if(I<0)return null;const _=a*this.direction.dot(n_.cross(so));if(_<0||I+_>g)return null;const p=-a*so.dot(r_);return p<0?null:this.at(p/g,s)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ZA{constructor(A,i,t,o,s,g,a,I,_,p,B,E,Q,h,y,u){ZA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,i,t,o,s,g,a,I,_,p,B,E,Q,h,y,u)}set(A,i,t,o,s,g,a,I,_,p,B,E,Q,h,y,u){const l=this.elements;return l[0]=A,l[4]=i,l[8]=t,l[12]=o,l[1]=s,l[5]=g,l[9]=a,l[13]=I,l[2]=_,l[6]=p,l[10]=B,l[14]=E,l[3]=Q,l[7]=h,l[11]=y,l[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ZA().fromArray(this.elements)}copy(A){const i=this.elements,t=A.elements;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],this}copyPosition(A){const i=this.elements,t=A.elements;return i[12]=t[12],i[13]=t[13],i[14]=t[14],this}setFromMatrix3(A){const i=A.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(A,i,t){return A.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,i,t){return this.set(A.x,i.x,t.x,0,A.y,i.y,t.y,0,A.z,i.z,t.z,0,0,0,0,1),this}extractRotation(A){const i=this.elements,t=A.elements,o=1/Ls.setFromMatrixColumn(A,0).length(),s=1/Ls.setFromMatrixColumn(A,1).length(),g=1/Ls.setFromMatrixColumn(A,2).length();return i[0]=t[0]*o,i[1]=t[1]*o,i[2]=t[2]*o,i[3]=0,i[4]=t[4]*s,i[5]=t[5]*s,i[6]=t[6]*s,i[7]=0,i[8]=t[8]*g,i[9]=t[9]*g,i[10]=t[10]*g,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(A){const i=this.elements,t=A.x,o=A.y,s=A.z,g=Math.cos(t),a=Math.sin(t),I=Math.cos(o),_=Math.sin(o),p=Math.cos(s),B=Math.sin(s);if(A.order==="XYZ"){const E=g*p,Q=g*B,h=a*p,y=a*B;i[0]=I*p,i[4]=-I*B,i[8]=_,i[1]=Q+h*_,i[5]=E-y*_,i[9]=-a*I,i[2]=y-E*_,i[6]=h+Q*_,i[10]=g*I}else if(A.order==="YXZ"){const E=I*p,Q=I*B,h=_*p,y=_*B;i[0]=E+y*a,i[4]=h*a-Q,i[8]=g*_,i[1]=g*B,i[5]=g*p,i[9]=-a,i[2]=Q*a-h,i[6]=y+E*a,i[10]=g*I}else if(A.order==="ZXY"){const E=I*p,Q=I*B,h=_*p,y=_*B;i[0]=E-y*a,i[4]=-g*B,i[8]=h+Q*a,i[1]=Q+h*a,i[5]=g*p,i[9]=y-E*a,i[2]=-g*_,i[6]=a,i[10]=g*I}else if(A.order==="ZYX"){const E=g*p,Q=g*B,h=a*p,y=a*B;i[0]=I*p,i[4]=h*_-Q,i[8]=E*_+y,i[1]=I*B,i[5]=y*_+E,i[9]=Q*_-h,i[2]=-_,i[6]=a*I,i[10]=g*I}else if(A.order==="YZX"){const E=g*I,Q=g*_,h=a*I,y=a*_;i[0]=I*p,i[4]=y-E*B,i[8]=h*B+Q,i[1]=B,i[5]=g*p,i[9]=-a*p,i[2]=-_*p,i[6]=Q*B+h,i[10]=E-y*B}else if(A.order==="XZY"){const E=g*I,Q=g*_,h=a*I,y=a*_;i[0]=I*p,i[4]=-B,i[8]=_*p,i[1]=E*B+y,i[5]=g*p,i[9]=Q*B-h,i[2]=h*B-Q,i[6]=a*p,i[10]=y*B+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(A){return this.compose(BY,A,EY)}lookAt(A,i,t){const o=this.elements;return Cn.subVectors(A,i),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),go.crossVectors(t,Cn),go.lengthSq()===0&&(Math.abs(t.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),go.crossVectors(t,Cn)),go.normalize(),FI.crossVectors(Cn,go),o[0]=go.x,o[4]=FI.x,o[8]=Cn.x,o[1]=go.y,o[5]=FI.y,o[9]=Cn.y,o[2]=go.z,o[6]=FI.z,o[10]=Cn.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,i){const t=A.elements,o=i.elements,s=this.elements,g=t[0],a=t[4],I=t[8],_=t[12],p=t[1],B=t[5],E=t[9],Q=t[13],h=t[2],y=t[6],u=t[10],l=t[14],f=t[3],m=t[7],D=t[11],T=t[15],v=o[0],N=o[4],L=o[8],b=o[12],S=o[1],k=o[5],oA=o[9],X=o[13],gA=o[2],dA=o[6],nA=o[10],fA=o[14],H=o[3],sA=o[7],cA=o[11],vA=o[15];return s[0]=g*v+a*S+I*gA+_*H,s[4]=g*N+a*k+I*dA+_*sA,s[8]=g*L+a*oA+I*nA+_*cA,s[12]=g*b+a*X+I*fA+_*vA,s[1]=p*v+B*S+E*gA+Q*H,s[5]=p*N+B*k+E*dA+Q*sA,s[9]=p*L+B*oA+E*nA+Q*cA,s[13]=p*b+B*X+E*fA+Q*vA,s[2]=h*v+y*S+u*gA+l*H,s[6]=h*N+y*k+u*dA+l*sA,s[10]=h*L+y*oA+u*nA+l*cA,s[14]=h*b+y*X+u*fA+l*vA,s[3]=f*v+m*S+D*gA+T*H,s[7]=f*N+m*k+D*dA+T*sA,s[11]=f*L+m*oA+D*nA+T*cA,s[15]=f*b+m*X+D*fA+T*vA,this}multiplyScalar(A){const i=this.elements;return i[0]*=A,i[4]*=A,i[8]*=A,i[12]*=A,i[1]*=A,i[5]*=A,i[9]*=A,i[13]*=A,i[2]*=A,i[6]*=A,i[10]*=A,i[14]*=A,i[3]*=A,i[7]*=A,i[11]*=A,i[15]*=A,this}determinant(){const A=this.elements,i=A[0],t=A[4],o=A[8],s=A[12],g=A[1],a=A[5],I=A[9],_=A[13],p=A[2],B=A[6],E=A[10],Q=A[14],h=A[3],y=A[7],u=A[11],l=A[15];return h*(+s*I*B-o*_*B-s*a*E+t*_*E+o*a*Q-t*I*Q)+y*(+i*I*Q-i*_*E+s*g*E-o*g*Q+o*_*p-s*I*p)+u*(+i*_*B-i*a*Q-s*g*B+t*g*Q+s*a*p-t*_*p)+l*(-o*a*p-i*I*B+i*a*E+o*g*B-t*g*E+t*I*p)}transpose(){const A=this.elements;let i;return i=A[1],A[1]=A[4],A[4]=i,i=A[2],A[2]=A[8],A[8]=i,i=A[6],A[6]=A[9],A[9]=i,i=A[3],A[3]=A[12],A[12]=i,i=A[7],A[7]=A[13],A[13]=i,i=A[11],A[11]=A[14],A[14]=i,this}setPosition(A,i,t){const o=this.elements;return A.isVector3?(o[12]=A.x,o[13]=A.y,o[14]=A.z):(o[12]=A,o[13]=i,o[14]=t),this}invert(){const A=this.elements,i=A[0],t=A[1],o=A[2],s=A[3],g=A[4],a=A[5],I=A[6],_=A[7],p=A[8],B=A[9],E=A[10],Q=A[11],h=A[12],y=A[13],u=A[14],l=A[15],f=B*u*_-y*E*_+y*I*Q-a*u*Q-B*I*l+a*E*l,m=h*E*_-p*u*_-h*I*Q+g*u*Q+p*I*l-g*E*l,D=p*y*_-h*B*_+h*a*Q-g*y*Q-p*a*l+g*B*l,T=h*B*I-p*y*I-h*a*E+g*y*E+p*a*u-g*B*u,v=i*f+t*m+o*D+s*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/v;return A[0]=f*N,A[1]=(y*E*s-B*u*s-y*o*Q+t*u*Q+B*o*l-t*E*l)*N,A[2]=(a*u*s-y*I*s+y*o*_-t*u*_-a*o*l+t*I*l)*N,A[3]=(B*I*s-a*E*s-B*o*_+t*E*_+a*o*Q-t*I*Q)*N,A[4]=m*N,A[5]=(p*u*s-h*E*s+h*o*Q-i*u*Q-p*o*l+i*E*l)*N,A[6]=(h*I*s-g*u*s-h*o*_+i*u*_+g*o*l-i*I*l)*N,A[7]=(g*E*s-p*I*s+p*o*_-i*E*_-g*o*Q+i*I*Q)*N,A[8]=D*N,A[9]=(h*B*s-p*y*s-h*t*Q+i*y*Q+p*t*l-i*B*l)*N,A[10]=(g*y*s-h*a*s+h*t*_-i*y*_-g*t*l+i*a*l)*N,A[11]=(p*a*s-g*B*s-p*t*_+i*B*_+g*t*Q-i*a*Q)*N,A[12]=T*N,A[13]=(p*y*o-h*B*o+h*t*E-i*y*E-p*t*u+i*B*u)*N,A[14]=(h*a*o-g*y*o-h*t*I+i*y*I+g*t*u-i*a*u)*N,A[15]=(g*B*o-p*a*o+p*t*I-i*B*I-g*t*E+i*a*E)*N,this}scale(A){const i=this.elements,t=A.x,o=A.y,s=A.z;return i[0]*=t,i[4]*=o,i[8]*=s,i[1]*=t,i[5]*=o,i[9]*=s,i[2]*=t,i[6]*=o,i[10]*=s,i[3]*=t,i[7]*=o,i[11]*=s,this}getMaxScaleOnAxis(){const A=this.elements,i=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],o=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(i,t,o))}makeTranslation(A,i,t){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,i,0,0,1,t,0,0,0,1),this}makeRotationX(A){const i=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,i,-t,0,0,t,i,0,0,0,0,1),this}makeRotationY(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,0,t,0,0,1,0,0,-t,0,i,0,0,0,0,1),this}makeRotationZ(A){const i=Math.cos(A),t=Math.sin(A);return this.set(i,-t,0,0,t,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,i){const t=Math.cos(i),o=Math.sin(i),s=1-t,g=A.x,a=A.y,I=A.z,_=s*g,p=s*a;return this.set(_*g+t,_*a-o*I,_*I+o*a,0,_*a+o*I,p*a+t,p*I-o*g,0,_*I-o*a,p*I+o*g,s*I*I+t,0,0,0,0,1),this}makeScale(A,i,t){return this.set(A,0,0,0,0,i,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,i,t,o,s,g){return this.set(1,t,s,0,A,1,g,0,i,o,1,0,0,0,0,1),this}compose(A,i,t){const o=this.elements,s=i._x,g=i._y,a=i._z,I=i._w,_=s+s,p=g+g,B=a+a,E=s*_,Q=s*p,h=s*B,y=g*p,u=g*B,l=a*B,f=I*_,m=I*p,D=I*B,T=t.x,v=t.y,N=t.z;return o[0]=(1-(y+l))*T,o[1]=(Q+D)*T,o[2]=(h-m)*T,o[3]=0,o[4]=(Q-D)*v,o[5]=(1-(E+l))*v,o[6]=(u+f)*v,o[7]=0,o[8]=(h+m)*N,o[9]=(u-f)*N,o[10]=(1-(E+y))*N,o[11]=0,o[12]=A.x,o[13]=A.y,o[14]=A.z,o[15]=1,this}decompose(A,i,t){const o=this.elements;let s=Ls.set(o[0],o[1],o[2]).length();const g=Ls.set(o[4],o[5],o[6]).length(),a=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),A.x=o[12],A.y=o[13],A.z=o[14],Yn.copy(this);const _=1/s,p=1/g,B=1/a;return Yn.elements[0]*=_,Yn.elements[1]*=_,Yn.elements[2]*=_,Yn.elements[4]*=p,Yn.elements[5]*=p,Yn.elements[6]*=p,Yn.elements[8]*=B,Yn.elements[9]*=B,Yn.elements[10]*=B,i.setFromRotationMatrix(Yn),t.x=s,t.y=g,t.z=a,this}makePerspective(A,i,t,o,s,g,a=Pr){const I=this.elements,_=2*s/(i-A),p=2*s/(t-o),B=(i+A)/(i-A),E=(t+o)/(t-o);let Q,h;if(a===Pr)Q=-(g+s)/(g-s),h=-2*g*s/(g-s);else if(a===VC)Q=-g/(g-s),h=-g*s/(g-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return I[0]=_,I[4]=0,I[8]=B,I[12]=0,I[1]=0,I[5]=p,I[9]=E,I[13]=0,I[2]=0,I[6]=0,I[10]=Q,I[14]=h,I[3]=0,I[7]=0,I[11]=-1,I[15]=0,this}makeOrthographic(A,i,t,o,s,g,a=Pr){const I=this.elements,_=1/(i-A),p=1/(t-o),B=1/(g-s),E=(i+A)*_,Q=(t+o)*p;let h,y;if(a===Pr)h=(g+s)*B,y=-2*B;else if(a===VC)h=s*B,y=-1*B;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return I[0]=2*_,I[4]=0,I[8]=0,I[12]=-E,I[1]=0,I[5]=2*p,I[9]=0,I[13]=-Q,I[2]=0,I[6]=0,I[10]=y,I[14]=-h,I[3]=0,I[7]=0,I[11]=0,I[15]=1,this}equals(A){const i=this.elements,t=A.elements;for(let o=0;o<16;o++)if(i[o]!==t[o])return!1;return!0}fromArray(A,i=0){for(let t=0;t<16;t++)this.elements[t]=A[t+i];return this}toArray(A=[],i=0){const t=this.elements;return A[i]=t[0],A[i+1]=t[1],A[i+2]=t[2],A[i+3]=t[3],A[i+4]=t[4],A[i+5]=t[5],A[i+6]=t[6],A[i+7]=t[7],A[i+8]=t[8],A[i+9]=t[9],A[i+10]=t[10],A[i+11]=t[11],A[i+12]=t[12],A[i+13]=t[13],A[i+14]=t[14],A[i+15]=t[15],A}}const Ls=new P,Yn=new ZA,BY=new P(0,0,0),EY=new P(1,1,1),go=new P,FI=new P,Cn=new P,Kx=new ZA,Px=new $i;class yi{constructor(A=0,i=0,t=0,o=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=i,this._z=t,this._order=o}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,i,t,o=this._order){return this._x=A,this._y=i,this._z=t,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,i=this._order,t=!0){const o=A.elements,s=o[0],g=o[4],a=o[8],I=o[1],_=o[5],p=o[9],B=o[2],E=o[6],Q=o[10];switch(i){case"XYZ":this._y=Math.asin(ri(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,Q),this._z=Math.atan2(-g,s)):(this._x=Math.atan2(E,_),this._z=0);break;case"YXZ":this._x=Math.asin(-ri(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,Q),this._z=Math.atan2(I,_)):(this._y=Math.atan2(-B,s),this._z=0);break;case"ZXY":this._x=Math.asin(ri(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-B,Q),this._z=Math.atan2(-g,_)):(this._y=0,this._z=Math.atan2(I,s));break;case"ZYX":this._y=Math.asin(-ri(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(E,Q),this._z=Math.atan2(I,s)):(this._x=0,this._z=Math.atan2(-g,_));break;case"YZX":this._z=Math.asin(ri(I,-1,1)),Math.abs(I)<.9999999?(this._x=Math.atan2(-p,_),this._y=Math.atan2(-B,s)):(this._x=0,this._y=Math.atan2(a,Q));break;case"XZY":this._z=Math.asin(-ri(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(E,_),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,Q),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,i,t){return Kx.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Kx,i,t)}setFromVector3(A,i=this._order){return this.set(A.x,A.y,A.z,i)}reorder(A){return Px.setFromEuler(this),this.setFromQuaternion(Px,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],i=0){return A[i]=this._x,A[i+1]=this._y,A[i+2]=this._z,A[i+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class SE{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let lY=0;const Jx=new P,Ts=new $i,vr=new ZA,LI=new P,ia=new P,QY=new P,dY=new $i,Ox=new P(1,0,0),Yx=new P(0,1,0),qx=new P(0,0,1),jx={type:"added"},hY={type:"removed"},Us={type:"childadded",child:null},o_={type:"childremoved",child:null};class Dt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lY++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const A=new P,i=new yi,t=new $i,o=new P(1,1,1);function s(){t.setFromEuler(i,!1)}function g(){i.setFromQuaternion(t,void 0,!1)}i._onChange(s),t._onChange(g),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ZA},normalMatrix:{value:new Ne}}),this.matrix=new ZA,this.matrixWorld=new ZA,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,i){this.quaternion.setFromAxisAngle(A,i)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,i){return Ts.setFromAxisAngle(A,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(A,i){return Ts.setFromAxisAngle(A,i),this.quaternion.premultiply(Ts),this}rotateX(A){return this.rotateOnAxis(Ox,A)}rotateY(A){return this.rotateOnAxis(Yx,A)}rotateZ(A){return this.rotateOnAxis(qx,A)}translateOnAxis(A,i){return Jx.copy(A).applyQuaternion(this.quaternion),this.position.add(Jx.multiplyScalar(i)),this}translateX(A){return this.translateOnAxis(Ox,A)}translateY(A){return this.translateOnAxis(Yx,A)}translateZ(A){return this.translateOnAxis(qx,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(A,i,t){A.isVector3?LI.copy(A):LI.set(A,i,t);const o=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(ia,LI,this.up):vr.lookAt(LI,ia,this.up),this.quaternion.setFromRotationMatrix(vr),o&&(vr.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(vr),this.quaternion.premultiply(Ts.invert()))}add(A){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(jx),Us.child=A,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const i=this.children.indexOf(A);return i!==-1&&(A.parent=null,this.children.splice(i,1),A.dispatchEvent(hY),o_.child=A,this.dispatchEvent(o_),o_.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),vr.multiply(A.parent.matrixWorld)),A.applyMatrix4(vr),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(jx),Us.child=A,this.dispatchEvent(Us),Us.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,i){if(this[A]===i)return this;for(let t=0,o=this.children.length;t<o;t++){const g=this.children[t].getObjectByProperty(A,i);if(g!==void 0)return g}}getObjectsByProperty(A,i,t=[]){this[A]===i&&t.push(this);const o=this.children;for(let s=0,g=o.length;s<g;s++)o[s].getObjectsByProperty(A,i,t);return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,A,QY),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,dY,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return A.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(A){A(this);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].traverseVisible(A)}traverseAncestors(A){const i=this.parent;i!==null&&(A(i),i.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const i=this.children;for(let t=0,o=i.length;t<o;t++)i[t].updateMatrixWorld(A)}updateWorldMatrix(A,i){const t=this.parent;if(A===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let s=0,g=o.length;s<g;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(A){const i=A===void 0||typeof A=="string",t={};i&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,I){return a[I.uuid]===void 0&&(a[I.uuid]=I.toJSON(A)),I.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const I=a.shapes;if(Array.isArray(I))for(let _=0,p=I.length;_<p;_++){const B=I[_];s(A.shapes,B)}else s(A.shapes,I)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(A.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let I=0,_=this.material.length;I<_;I++)a.push(s(A.materials,this.material[I]));o.material=a}else o.material=s(A.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const I=this.animations[a];o.animations.push(s(A.animations,I))}}if(i){const a=g(A.geometries),I=g(A.materials),_=g(A.textures),p=g(A.images),B=g(A.shapes),E=g(A.skeletons),Q=g(A.animations),h=g(A.nodes);a.length>0&&(t.geometries=a),I.length>0&&(t.materials=I),_.length>0&&(t.textures=_),p.length>0&&(t.images=p),B.length>0&&(t.shapes=B),E.length>0&&(t.skeletons=E),Q.length>0&&(t.animations=Q),h.length>0&&(t.nodes=h)}return t.object=o,t;function g(a){const I=[];for(const _ in a){const p=a[_];delete p.metadata,I.push(p)}return I}}clone(A){return new this.constructor().copy(this,A)}copy(A,i=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),i===!0)for(let t=0;t<A.children.length;t++){const o=A.children[t];this.add(o.clone())}return this}}Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new P,Nr=new P,s_=new P,Fr=new P,Gs=new P,xs=new P,Vx=new P,g_=new P,a_=new P,I_=new P,C_=new $e,c_=new $e,__=new $e;class $n{constructor(A=new P,i=new P,t=new P){this.a=A,this.b=i,this.c=t}static getNormal(A,i,t,o){o.subVectors(t,i),qn.subVectors(A,i),o.cross(qn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(A,i,t,o,s){qn.subVectors(o,i),Nr.subVectors(t,i),s_.subVectors(A,i);const g=qn.dot(qn),a=qn.dot(Nr),I=qn.dot(s_),_=Nr.dot(Nr),p=Nr.dot(s_),B=g*_-a*a;if(B===0)return s.set(0,0,0),null;const E=1/B,Q=(_*I-a*p)*E,h=(g*p-a*I)*E;return s.set(1-Q-h,h,Q)}static containsPoint(A,i,t,o){return this.getBarycoord(A,i,t,o,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(A,i,t,o,s,g,a,I){return this.getBarycoord(A,i,t,o,Fr)===null?(I.x=0,I.y=0,"z"in I&&(I.z=0),"w"in I&&(I.w=0),null):(I.setScalar(0),I.addScaledVector(s,Fr.x),I.addScaledVector(g,Fr.y),I.addScaledVector(a,Fr.z),I)}static getInterpolatedAttribute(A,i,t,o,s,g){return C_.setScalar(0),c_.setScalar(0),__.setScalar(0),C_.fromBufferAttribute(A,i),c_.fromBufferAttribute(A,t),__.fromBufferAttribute(A,o),g.setScalar(0),g.addScaledVector(C_,s.x),g.addScaledVector(c_,s.y),g.addScaledVector(__,s.z),g}static isFrontFacing(A,i,t,o){return qn.subVectors(t,i),Nr.subVectors(A,i),qn.cross(Nr).dot(o)<0}set(A,i,t){return this.a.copy(A),this.b.copy(i),this.c.copy(t),this}setFromPointsAndIndices(A,i,t,o){return this.a.copy(A[i]),this.b.copy(A[t]),this.c.copy(A[o]),this}setFromAttributeAndIndices(A,i,t,o){return this.a.fromBufferAttribute(A,i),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,o),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return qn.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),qn.cross(Nr).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return $n.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,i){return $n.getBarycoord(A,this.a,this.b,this.c,i)}getInterpolation(A,i,t,o,s){return $n.getInterpolation(A,this.a,this.b,this.c,i,t,o,s)}containsPoint(A){return $n.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return $n.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,i){const t=this.a,o=this.b,s=this.c;let g,a;Gs.subVectors(o,t),xs.subVectors(s,t),g_.subVectors(A,t);const I=Gs.dot(g_),_=xs.dot(g_);if(I<=0&&_<=0)return i.copy(t);a_.subVectors(A,o);const p=Gs.dot(a_),B=xs.dot(a_);if(p>=0&&B<=p)return i.copy(o);const E=I*B-p*_;if(E<=0&&I>=0&&p<=0)return g=I/(I-p),i.copy(t).addScaledVector(Gs,g);I_.subVectors(A,s);const Q=Gs.dot(I_),h=xs.dot(I_);if(h>=0&&Q<=h)return i.copy(s);const y=Q*_-I*h;if(y<=0&&_>=0&&h<=0)return a=_/(_-h),i.copy(t).addScaledVector(xs,a);const u=p*h-Q*B;if(u<=0&&B-p>=0&&Q-h>=0)return Vx.subVectors(s,o),a=(B-p)/(B-p+(Q-h)),i.copy(o).addScaledVector(Vx,a);const l=1/(u+y+E);return g=y*l,a=E*l,i.copy(t).addScaledVector(Gs,g).addScaledVector(xs,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const GP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ao={h:0,s:0,l:0},TI={h:0,s:0,l:0};function p_(n,A,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(A-n)*6*i:i<1/2?A:i<2/3?n+(A-n)*6*(2/3-i):n}class re{constructor(A,i,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,i,t)}set(A,i,t){if(i===void 0&&t===void 0){const o=A;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(A,i,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,i=Rn){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,rt.toWorkingColorSpace(this,i),this}setRGB(A,i,t,o=rt.workingColorSpace){return this.r=A,this.g=i,this.b=t,rt.toWorkingColorSpace(this,o),this}setHSL(A,i,t,o=rt.workingColorSpace){if(A=DE(A,1),i=ri(i,0,1),t=ri(t,0,1),i===0)this.r=this.g=this.b=t;else{const s=t<=.5?t*(1+i):t+i-t*i,g=2*t-s;this.r=p_(g,s,A+1/3),this.g=p_(g,s,A),this.b=p_(g,s,A-1/3)}return rt.toWorkingColorSpace(this,o),this}setStyle(A,i=Rn){function t(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(A)){let s;const g=o[1],a=o[2];switch(g){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(A)){const s=o[1],g=s.length;if(g===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(g===6)return this.setHex(parseInt(s,16),i);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,i);return this}setColorName(A,i=Rn){const t=GP[A.toLowerCase()];return t!==void 0?this.setHex(t,i):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Yr(A.r),this.g=Yr(A.g),this.b=Yr(A.b),this}copyLinearToSRGB(A){return this.r=cg(A.r),this.g=cg(A.g),this.b=cg(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Rn){return rt.fromWorkingColorSpace(Fi.copy(this),A),Math.round(ri(Fi.r*255,0,255))*65536+Math.round(ri(Fi.g*255,0,255))*256+Math.round(ri(Fi.b*255,0,255))}getHexString(A=Rn){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,i=rt.workingColorSpace){rt.fromWorkingColorSpace(Fi.copy(this),i);const t=Fi.r,o=Fi.g,s=Fi.b,g=Math.max(t,o,s),a=Math.min(t,o,s);let I,_;const p=(a+g)/2;if(a===g)I=0,_=0;else{const B=g-a;switch(_=p<=.5?B/(g+a):B/(2-g-a),g){case t:I=(o-s)/B+(o<s?6:0);break;case o:I=(s-t)/B+2;break;case s:I=(t-o)/B+4;break}I/=6}return A.h=I,A.s=_,A.l=p,A}getRGB(A,i=rt.workingColorSpace){return rt.fromWorkingColorSpace(Fi.copy(this),i),A.r=Fi.r,A.g=Fi.g,A.b=Fi.b,A}getStyle(A=Rn){rt.fromWorkingColorSpace(Fi.copy(this),A);const i=Fi.r,t=Fi.g,o=Fi.b;return A!==Rn?`color(${A} ${i.toFixed(3)} ${t.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(t*255)},${Math.round(o*255)})`}offsetHSL(A,i,t){return this.getHSL(ao),this.setHSL(ao.h+A,ao.s+i,ao.l+t)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,i){return this.r=A.r+i.r,this.g=A.g+i.g,this.b=A.b+i.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,i){return this.r+=(A.r-this.r)*i,this.g+=(A.g-this.g)*i,this.b+=(A.b-this.b)*i,this}lerpColors(A,i,t){return this.r=A.r+(i.r-A.r)*t,this.g=A.g+(i.g-A.g)*t,this.b=A.b+(i.b-A.b)*t,this}lerpHSL(A,i){this.getHSL(ao),A.getHSL(TI);const t=wa(ao.h,TI.h,i),o=wa(ao.s,TI.s,i),s=wa(ao.l,TI.l,i);return this.setHSL(t,o,s),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const i=this.r,t=this.g,o=this.b,s=A.elements;return this.r=s[0]*i+s[3]*t+s[6]*o,this.g=s[1]*i+s[4]*t+s[7]*o,this.b=s[2]*i+s[5]*t+s[8]*o,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,i=0){return this.r=A[i],this.g=A[i+1],this.b=A[i+2],this}toArray(A=[],i=0){return A[i]=this.r,A[i+1]=this.g,A[i+2]=this.b,A}fromBufferAttribute(A,i){return this.r=A.getX(i),this.g=A.getY(i),this.b=A.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fi=new re;re.NAMES=GP;let uY=0;class Un extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(A){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uY++}),this.uuid=ir(),this.name="",this.blending=Ig,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=vp,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=fg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const i in A){const t=A[i];if(t===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(t):o&&o.isVector3&&t&&t.isVector3?o.copy(t):this[i]=t}}toJSON(A){const i=A===void 0||typeof A=="string";i&&(A={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Ig&&(t.blending=this.blending),this.side!==Zr&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==bp&&(t.blendSrc=this.blendSrc),this.blendDst!==vp&&(t.blendDst=this.blendDst),this.blendEquation!==es&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==fg&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vx&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function o(s){const g=[];for(const a in s){const I=s[a];delete I.metadata,g.push(I)}return g}if(i){const s=o(A.textures),g=o(A.images);s.length>0&&(t.textures=s),g.length>0&&(t.images=g)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const i=A.clippingPlanes;let t=null;if(i!==null){const o=i.length;t=new Array(o);for(let s=0;s!==o;++s)t[s]=i[s].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class os extends Un{static get type(){return"MeshBasicMaterial"}constructor(A){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const ei=new P,UI=new Qe;class Pi{constructor(A,i,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=i,this.count=A!==void 0?A.length/i:0,this.normalized=t,this.usage=_B,this.updateRanges=[],this.gpuType=Ar,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,i){this.updateRanges.push({start:A,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,i,t){A*=this.itemSize,t*=i.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[A+o]=i.array[t+o];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let i=0,t=this.count;i<t;i++)UI.fromBufferAttribute(this,i),UI.applyMatrix3(A),this.setXY(i,UI.x,UI.y);else if(this.itemSize===3)for(let i=0,t=this.count;i<t;i++)ei.fromBufferAttribute(this,i),ei.applyMatrix3(A),this.setXYZ(i,ei.x,ei.y,ei.z);return this}applyMatrix4(A){for(let i=0,t=this.count;i<t;i++)ei.fromBufferAttribute(this,i),ei.applyMatrix4(A),this.setXYZ(i,ei.x,ei.y,ei.z);return this}applyNormalMatrix(A){for(let i=0,t=this.count;i<t;i++)ei.fromBufferAttribute(this,i),ei.applyNormalMatrix(A),this.setXYZ(i,ei.x,ei.y,ei.z);return this}transformDirection(A){for(let i=0,t=this.count;i<t;i++)ei.fromBufferAttribute(this,i),ei.transformDirection(A),this.setXYZ(i,ei.x,ei.y,ei.z);return this}set(A,i=0){return this.array.set(A,i),this}getComponent(A,i){let t=this.array[A*this.itemSize+i];return this.normalized&&(t=Zn(t,this.array)),t}setComponent(A,i,t){return this.normalized&&(t=Et(t,this.array)),this.array[A*this.itemSize+i]=t,this}getX(A){let i=this.array[A*this.itemSize];return this.normalized&&(i=Zn(i,this.array)),i}setX(A,i){return this.normalized&&(i=Et(i,this.array)),this.array[A*this.itemSize]=i,this}getY(A){let i=this.array[A*this.itemSize+1];return this.normalized&&(i=Zn(i,this.array)),i}setY(A,i){return this.normalized&&(i=Et(i,this.array)),this.array[A*this.itemSize+1]=i,this}getZ(A){let i=this.array[A*this.itemSize+2];return this.normalized&&(i=Zn(i,this.array)),i}setZ(A,i){return this.normalized&&(i=Et(i,this.array)),this.array[A*this.itemSize+2]=i,this}getW(A){let i=this.array[A*this.itemSize+3];return this.normalized&&(i=Zn(i,this.array)),i}setW(A,i){return this.normalized&&(i=Et(i,this.array)),this.array[A*this.itemSize+3]=i,this}setXY(A,i,t){return A*=this.itemSize,this.normalized&&(i=Et(i,this.array),t=Et(t,this.array)),this.array[A+0]=i,this.array[A+1]=t,this}setXYZ(A,i,t,o){return A*=this.itemSize,this.normalized&&(i=Et(i,this.array),t=Et(t,this.array),o=Et(o,this.array)),this.array[A+0]=i,this.array[A+1]=t,this.array[A+2]=o,this}setXYZW(A,i,t,o,s){return A*=this.itemSize,this.normalized&&(i=Et(i,this.array),t=Et(t,this.array),o=Et(o,this.array),s=Et(s,this.array)),this.array[A+0]=i,this.array[A+1]=t,this.array[A+2]=o,this.array[A+3]=s,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==_B&&(A.usage=this.usage),A}}class wE extends Pi{constructor(A,i,t){super(new Uint16Array(A),i,t)}}class xP extends Pi{constructor(A,i,t){super(new Uint32Array(A),i,t)}}class Hi extends Pi{constructor(A,i,t){super(new Float32Array(A),i,t)}}let fY=0;const Sn=new ZA,B_=new Dt,ks=new P,cn=new Ao,na=new Ao,Ii=new P;class An extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fY++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(LP(A)?xP:wE)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,i){return this.attributes[A]=i,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,i,t=0){this.groups.push({start:A,count:i,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,i){this.drawRange.start=A,this.drawRange.count=i}applyMatrix4(A){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(A),i.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const s=new Ne().getNormalMatrix(A);t.applyNormalMatrix(s),t.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(A),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Sn.makeRotationFromQuaternion(A),this.applyMatrix4(Sn),this}rotateX(A){return Sn.makeRotationX(A),this.applyMatrix4(Sn),this}rotateY(A){return Sn.makeRotationY(A),this.applyMatrix4(Sn),this}rotateZ(A){return Sn.makeRotationZ(A),this.applyMatrix4(Sn),this}translate(A,i,t){return Sn.makeTranslation(A,i,t),this.applyMatrix4(Sn),this}scale(A,i,t){return Sn.makeScale(A,i,t),this.applyMatrix4(Sn),this}lookAt(A){return B_.lookAt(A),B_.updateMatrix(),this.applyMatrix4(B_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(A){const i=this.getAttribute("position");if(i===void 0){const t=[];for(let o=0,s=A.length;o<s;o++){const g=A[o];t.push(g.x,g.y,g.z||0)}this.setAttribute("position",new Hi(t,3))}else{for(let t=0,o=i.count;t<o;t++){const s=A[t];i.setXYZ(t,s.x,s.y,s.z||0)}A.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const A=this.attributes.position,i=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),i)for(let t=0,o=i.length;t<o;t++){const s=i[t];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ii.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ii),Ii.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ii)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const A=this.attributes.position,i=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(A){const t=this.boundingSphere.center;if(cn.setFromBufferAttribute(A),i)for(let s=0,g=i.length;s<g;s++){const a=i[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Ii.addVectors(cn.min,na.min),cn.expandByPoint(Ii),Ii.addVectors(cn.max,na.max),cn.expandByPoint(Ii)):(cn.expandByPoint(na.min),cn.expandByPoint(na.max))}cn.getCenter(t);let o=0;for(let s=0,g=A.count;s<g;s++)Ii.fromBufferAttribute(A,s),o=Math.max(o,t.distanceToSquared(Ii));if(i)for(let s=0,g=i.length;s<g;s++){const a=i[s],I=this.morphTargetsRelative;for(let _=0,p=a.count;_<p;_++)Ii.fromBufferAttribute(a,_),I&&(ks.fromBufferAttribute(A,_),Ii.add(ks)),o=Math.max(o,t.distanceToSquared(Ii))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,i=this.attributes;if(A===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=i.position,o=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*t.count),4));const g=this.getAttribute("tangent"),a=[],I=[];for(let L=0;L<t.count;L++)a[L]=new P,I[L]=new P;const _=new P,p=new P,B=new P,E=new Qe,Q=new Qe,h=new Qe,y=new P,u=new P;function l(L,b,S){_.fromBufferAttribute(t,L),p.fromBufferAttribute(t,b),B.fromBufferAttribute(t,S),E.fromBufferAttribute(s,L),Q.fromBufferAttribute(s,b),h.fromBufferAttribute(s,S),p.sub(_),B.sub(_),Q.sub(E),h.sub(E);const k=1/(Q.x*h.y-h.x*Q.y);isFinite(k)&&(y.copy(p).multiplyScalar(h.y).addScaledVector(B,-Q.y).multiplyScalar(k),u.copy(B).multiplyScalar(Q.x).addScaledVector(p,-h.x).multiplyScalar(k),a[L].add(y),a[b].add(y),a[S].add(y),I[L].add(u),I[b].add(u),I[S].add(u))}let f=this.groups;f.length===0&&(f=[{start:0,count:A.count}]);for(let L=0,b=f.length;L<b;++L){const S=f[L],k=S.start,oA=S.count;for(let X=k,gA=k+oA;X<gA;X+=3)l(A.getX(X+0),A.getX(X+1),A.getX(X+2))}const m=new P,D=new P,T=new P,v=new P;function N(L){T.fromBufferAttribute(o,L),v.copy(T);const b=a[L];m.copy(b),m.sub(T.multiplyScalar(T.dot(b))).normalize(),D.crossVectors(v,b);const k=D.dot(I[L])<0?-1:1;g.setXYZW(L,m.x,m.y,m.z,k)}for(let L=0,b=f.length;L<b;++L){const S=f[L],k=S.start,oA=S.count;for(let X=k,gA=k+oA;X<gA;X+=3)N(A.getX(X+0)),N(A.getX(X+1)),N(A.getX(X+2))}}computeVertexNormals(){const A=this.index,i=this.getAttribute("position");if(i!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",t);else for(let E=0,Q=t.count;E<Q;E++)t.setXYZ(E,0,0,0);const o=new P,s=new P,g=new P,a=new P,I=new P,_=new P,p=new P,B=new P;if(A)for(let E=0,Q=A.count;E<Q;E+=3){const h=A.getX(E+0),y=A.getX(E+1),u=A.getX(E+2);o.fromBufferAttribute(i,h),s.fromBufferAttribute(i,y),g.fromBufferAttribute(i,u),p.subVectors(g,s),B.subVectors(o,s),p.cross(B),a.fromBufferAttribute(t,h),I.fromBufferAttribute(t,y),_.fromBufferAttribute(t,u),a.add(p),I.add(p),_.add(p),t.setXYZ(h,a.x,a.y,a.z),t.setXYZ(y,I.x,I.y,I.z),t.setXYZ(u,_.x,_.y,_.z)}else for(let E=0,Q=i.count;E<Q;E+=3)o.fromBufferAttribute(i,E+0),s.fromBufferAttribute(i,E+1),g.fromBufferAttribute(i,E+2),p.subVectors(g,s),B.subVectors(o,s),p.cross(B),t.setXYZ(E+0,p.x,p.y,p.z),t.setXYZ(E+1,p.x,p.y,p.z),t.setXYZ(E+2,p.x,p.y,p.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let i=0,t=A.count;i<t;i++)Ii.fromBufferAttribute(A,i),Ii.normalize(),A.setXYZ(i,Ii.x,Ii.y,Ii.z)}toNonIndexed(){function A(a,I){const _=a.array,p=a.itemSize,B=a.normalized,E=new _.constructor(I.length*p);let Q=0,h=0;for(let y=0,u=I.length;y<u;y++){a.isInterleavedBufferAttribute?Q=I[y]*a.data.stride+a.offset:Q=I[y]*p;for(let l=0;l<p;l++)E[h++]=_[Q++]}return new Pi(E,p,B)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new An,t=this.index.array,o=this.attributes;for(const a in o){const I=o[a],_=A(I,t);i.setAttribute(a,_)}const s=this.morphAttributes;for(const a in s){const I=[],_=s[a];for(let p=0,B=_.length;p<B;p++){const E=_[p],Q=A(E,t);I.push(Q)}i.morphAttributes[a]=I}i.morphTargetsRelative=this.morphTargetsRelative;const g=this.groups;for(let a=0,I=g.length;a<I;a++){const _=g[a];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const I=this.parameters;for(const _ in I)I[_]!==void 0&&(A[_]=I[_]);return A}A.data={attributes:{}};const i=this.index;i!==null&&(A.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const t=this.attributes;for(const I in t){const _=t[I];A.data.attributes[I]=_.toJSON(A.data)}const o={};let s=!1;for(const I in this.morphAttributes){const _=this.morphAttributes[I],p=[];for(let B=0,E=_.length;B<E;B++){const Q=_[B];p.push(Q.toJSON(A.data))}p.length>0&&(o[I]=p,s=!0)}s&&(A.data.morphAttributes=o,A.data.morphTargetsRelative=this.morphTargetsRelative);const g=this.groups;g.length>0&&(A.data.groups=JSON.parse(JSON.stringify(g)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(i));const o=A.attributes;for(const _ in o){const p=o[_];this.setAttribute(_,p.clone(i))}const s=A.morphAttributes;for(const _ in s){const p=[],B=s[_];for(let E=0,Q=B.length;E<Q;E++)p.push(B[E].clone(i));this.morphAttributes[_]=p}this.morphTargetsRelative=A.morphTargetsRelative;const g=A.groups;for(let _=0,p=g.length;_<p;_++){const B=g[_];this.addGroup(B.start,B.count,B.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const I=A.boundingSphere;return I!==null&&(this.boundingSphere=I.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wx=new ZA,qo=new Tg,GI=new ur,zx=new P,xI=new P,kI=new P,HI=new P,E_=new P,KI=new P,Zx=new P,PI=new P;class en extends Dt{constructor(A=new An,i=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=i,this.updateMorphTargets()}copy(A,i){return super.copy(A,i),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,t=Object.keys(i);if(t.length>0){const o=i[t[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,g=o.length;s<g;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(A,i){const t=this.geometry,o=t.attributes.position,s=t.morphAttributes.position,g=t.morphTargetsRelative;i.fromBufferAttribute(o,A);const a=this.morphTargetInfluences;if(s&&a){KI.set(0,0,0);for(let I=0,_=s.length;I<_;I++){const p=a[I],B=s[I];p!==0&&(E_.fromBufferAttribute(B,A),g?KI.addScaledVector(E_,p):KI.addScaledVector(E_.sub(i),p))}i.add(KI)}return i}raycast(A,i){const t=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),GI.copy(t.boundingSphere),GI.applyMatrix4(s),qo.copy(A.ray).recast(A.near),!(GI.containsPoint(qo.origin)===!1&&(qo.intersectSphere(GI,zx)===null||qo.origin.distanceToSquared(zx)>(A.far-A.near)**2))&&(Wx.copy(s).invert(),qo.copy(A.ray).applyMatrix4(Wx),!(t.boundingBox!==null&&qo.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,i,qo)))}_computeIntersections(A,i,t){let o;const s=this.geometry,g=this.material,a=s.index,I=s.attributes.position,_=s.attributes.uv,p=s.attributes.uv1,B=s.attributes.normal,E=s.groups,Q=s.drawRange;if(a!==null)if(Array.isArray(g))for(let h=0,y=E.length;h<y;h++){const u=E[h],l=g[u.materialIndex],f=Math.max(u.start,Q.start),m=Math.min(a.count,Math.min(u.start+u.count,Q.start+Q.count));for(let D=f,T=m;D<T;D+=3){const v=a.getX(D),N=a.getX(D+1),L=a.getX(D+2);o=JI(this,l,A,t,_,p,B,v,N,L),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=u.materialIndex,i.push(o))}}else{const h=Math.max(0,Q.start),y=Math.min(a.count,Q.start+Q.count);for(let u=h,l=y;u<l;u+=3){const f=a.getX(u),m=a.getX(u+1),D=a.getX(u+2);o=JI(this,g,A,t,_,p,B,f,m,D),o&&(o.faceIndex=Math.floor(u/3),i.push(o))}}else if(I!==void 0)if(Array.isArray(g))for(let h=0,y=E.length;h<y;h++){const u=E[h],l=g[u.materialIndex],f=Math.max(u.start,Q.start),m=Math.min(I.count,Math.min(u.start+u.count,Q.start+Q.count));for(let D=f,T=m;D<T;D+=3){const v=D,N=D+1,L=D+2;o=JI(this,l,A,t,_,p,B,v,N,L),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=u.materialIndex,i.push(o))}}else{const h=Math.max(0,Q.start),y=Math.min(I.count,Q.start+Q.count);for(let u=h,l=y;u<l;u+=3){const f=u,m=u+1,D=u+2;o=JI(this,g,A,t,_,p,B,f,m,D),o&&(o.faceIndex=Math.floor(u/3),i.push(o))}}}}function yY(n,A,i,t,o,s,g,a){let I;if(A.side===on?I=t.intersectTriangle(g,s,o,!0,a):I=t.intersectTriangle(o,s,g,A.side===Zr,a),I===null)return null;PI.copy(a),PI.applyMatrix4(n.matrixWorld);const _=i.ray.origin.distanceTo(PI);return _<i.near||_>i.far?null:{distance:_,point:PI.clone(),object:n}}function JI(n,A,i,t,o,s,g,a,I,_){n.getVertexPosition(a,xI),n.getVertexPosition(I,kI),n.getVertexPosition(_,HI);const p=yY(n,A,i,t,xI,kI,HI,Zx);if(p){const B=new P;$n.getBarycoord(Zx,xI,kI,HI,B),o&&(p.uv=$n.getInterpolatedAttribute(o,a,I,_,B,new Qe)),s&&(p.uv1=$n.getInterpolatedAttribute(s,a,I,_,B,new Qe)),g&&(p.normal=$n.getInterpolatedAttribute(g,a,I,_,B,new P),p.normal.dot(t.direction)>0&&p.normal.multiplyScalar(-1));const E={a,b:I,c:_,normal:new P,materialIndex:0};$n.getNormal(xI,kI,HI,E.normal),p.face=E,p.barycoord=B}return p}class tI extends An{constructor(A=1,i=1,t=1,o=1,s=1,g=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:i,depth:t,widthSegments:o,heightSegments:s,depthSegments:g};const a=this;o=Math.floor(o),s=Math.floor(s),g=Math.floor(g);const I=[],_=[],p=[],B=[];let E=0,Q=0;h("z","y","x",-1,-1,t,i,A,g,s,0),h("z","y","x",1,-1,t,i,-A,g,s,1),h("x","z","y",1,1,A,t,i,o,g,2),h("x","z","y",1,-1,A,t,-i,o,g,3),h("x","y","z",1,-1,A,i,t,o,s,4),h("x","y","z",-1,-1,A,i,-t,o,s,5),this.setIndex(I),this.setAttribute("position",new Hi(_,3)),this.setAttribute("normal",new Hi(p,3)),this.setAttribute("uv",new Hi(B,2));function h(y,u,l,f,m,D,T,v,N,L,b){const S=D/N,k=T/L,oA=D/2,X=T/2,gA=v/2,dA=N+1,nA=L+1;let fA=0,H=0;const sA=new P;for(let cA=0;cA<nA;cA++){const vA=cA*k-X;for(let jA=0;jA<dA;jA++){const we=jA*S-oA;sA[y]=we*f,sA[u]=vA*m,sA[l]=gA,_.push(sA.x,sA.y,sA.z),sA[y]=0,sA[u]=0,sA[l]=v>0?1:-1,p.push(sA.x,sA.y,sA.z),B.push(jA/N),B.push(1-cA/L),fA+=1}}for(let cA=0;cA<L;cA++)for(let vA=0;vA<N;vA++){const jA=E+vA+dA*cA,we=E+vA+dA*(cA+1),rA=E+(vA+1)+dA*(cA+1),yA=E+(vA+1)+dA*cA;I.push(jA,we,yA),I.push(we,rA,yA),H+=6}a.addGroup(Q,H,b),Q+=H,E+=fA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new tI(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function Rg(n){const A={};for(const i in n){A[i]={};for(const t in n[i]){const o=n[i][t];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[i][t]=null):A[i][t]=o.clone():Array.isArray(o)?A[i][t]=o.slice():A[i][t]=o}}return A}function xi(n){const A={};for(let i=0;i<n.length;i++){const t=Rg(n[i]);for(const o in t)A[o]=t[o]}return A}function mY(n){const A=[];for(let i=0;i<n.length;i++)A.push(n[i].clone());return A}function kP(n){const A=n.getRenderTarget();return A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rt.workingColorSpace}const DY={clone:Rg,merge:xi};var SY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xo extends Un{static get type(){return"ShaderMaterial"}constructor(A){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SY,this.fragmentShader=wY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Rg(A.uniforms),this.uniformsGroups=mY(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const i=super.toJSON(A);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const g=this.uniforms[o].value;g&&g.isTexture?i.uniforms[o]={type:"t",value:g.toJSON(A).uuid}:g&&g.isColor?i.uniforms[o]={type:"c",value:g.getHex()}:g&&g.isVector2?i.uniforms[o]={type:"v2",value:g.toArray()}:g&&g.isVector3?i.uniforms[o]={type:"v3",value:g.toArray()}:g&&g.isVector4?i.uniforms[o]={type:"v4",value:g.toArray()}:g&&g.isMatrix3?i.uniforms[o]={type:"m3",value:g.toArray()}:g&&g.isMatrix4?i.uniforms[o]={type:"m4",value:g.toArray()}:i.uniforms[o]={value:g}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const t={};for(const o in this.extensions)this.extensions[o]===!0&&(t[o]=!0);return Object.keys(t).length>0&&(i.extensions=t),i}}class HP extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ZA,this.projectionMatrix=new ZA,this.projectionMatrixInverse=new ZA,this.coordinateSystem=Pr}copy(A,i){return super.copy(A,i),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,i){super.updateWorldMatrix(A,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Io=new P,Xx=new Qe,$x=new Qe;class ci extends HP{constructor(A=50,i=1,t=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,i){return super.copy(A,i),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const i=.5*this.getFilmHeight()/A;this.fov=wg*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return wg*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,i,t){Io.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Io.x,Io.y).multiplyScalar(-A/Io.z),Io.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Io.x,Io.y).multiplyScalar(-A/Io.z)}getViewSize(A,i){return this.getViewBounds(A,Xx,$x),i.subVectors($x,Xx)}setViewOffset(A,i,t,o,s,g){this.aspect=A/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=o,this.view.width=s,this.view.height=g,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let i=A*Math.tan(Sa*.5*this.fov)/this.zoom,t=2*i,o=this.aspect*t,s=-.5*o;const g=this.view;if(this.view!==null&&this.view.enabled){const I=g.fullWidth,_=g.fullHeight;s+=g.offsetX*o/I,i-=g.offsetY*t/_,o*=g.width/I,t*=g.height/_}const a=this.filmOffset;a!==0&&(s+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,i,i-t,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const i=super.toJSON(A);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Hs=-90,Ks=1;class RY extends Dt{constructor(A,i,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ci(Hs,Ks,A,i);o.layers=this.layers,this.add(o);const s=new ci(Hs,Ks,A,i);s.layers=this.layers,this.add(s);const g=new ci(Hs,Ks,A,i);g.layers=this.layers,this.add(g);const a=new ci(Hs,Ks,A,i);a.layers=this.layers,this.add(a);const I=new ci(Hs,Ks,A,i);I.layers=this.layers,this.add(I);const _=new ci(Hs,Ks,A,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const A=this.coordinateSystem,i=this.children.concat(),[t,o,s,g,a,I]=i;for(const _ of i)this.remove(_);if(A===Pr)t.up.set(0,1,0),t.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),g.up.set(0,0,1),g.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),I.up.set(0,1,0),I.lookAt(0,0,-1);else if(A===VC)t.up.set(0,-1,0),t.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),g.up.set(0,0,-1),g.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),I.up.set(0,-1,0),I.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(A,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:o}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[s,g,a,I,_,p]=this.children,B=A.getRenderTarget(),E=A.getActiveCubeFace(),Q=A.getActiveMipmapLevel(),h=A.xr.enabled;A.xr.enabled=!1;const y=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0,o),A.render(i,s),A.setRenderTarget(t,1,o),A.render(i,g),A.setRenderTarget(t,2,o),A.render(i,a),A.setRenderTarget(t,3,o),A.render(i,I),A.setRenderTarget(t,4,o),A.render(i,_),t.texture.generateMipmaps=y,A.setRenderTarget(t,5,o),A.render(i,p),A.setRenderTarget(B,E,Q),A.xr.enabled=h,t.texture.needsPMREMUpdate=!0}}class KP extends ii{constructor(A,i,t,o,s,g,a,I,_,p){A=A!==void 0?A:[],i=i!==void 0?i:yg,super(A,i,t,o,s,g,a,I,_,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class MY extends ls{constructor(A=1,i={}){super(A,A,i),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},o=[t,t,t,t,t,t];this.texture=new KP(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Fn}fromEquirectangularTexture(A,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new tI(5,5,5),s=new xo({name:"CubemapFromEquirect",uniforms:Rg(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:on,blending:Fo});s.uniforms.tEquirect.value=i;const g=new en(o,s),a=i.minFilter;return i.minFilter===Kr&&(i.minFilter=Fn),new RY(1,10,this).update(A,g),i.minFilter=a,g.geometry.dispose(),g.material.dispose(),this}clear(A,i,t,o){const s=A.getRenderTarget();for(let g=0;g<6;g++)A.setRenderTarget(this,g),A.clear(i,t,o);A.setRenderTarget(s)}}const l_=new P,bY=new P,vY=new Ne;class Bo{constructor(A=new P(1,0,0),i=0){this.isPlane=!0,this.normal=A,this.constant=i}set(A,i){return this.normal.copy(A),this.constant=i,this}setComponents(A,i,t,o){return this.normal.set(A,i,t),this.constant=o,this}setFromNormalAndCoplanarPoint(A,i){return this.normal.copy(A),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(A,i,t){const o=l_.subVectors(t,i).cross(bY.subVectors(A,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,i){return i.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,i){const t=A.delta(l_),o=this.normal.dot(t);if(o===0)return this.distanceToPoint(A.start)===0?i.copy(A.start):null;const s=-(A.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:i.copy(A.start).addScaledVector(t,s)}intersectsLine(A){const i=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return i<0&&t>0||t<0&&i>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,i){const t=i||vY.getNormalMatrix(A),o=this.coplanarPoint(l_).applyMatrix4(A),s=this.normal.applyMatrix3(t).normalize();return this.constant=-o.dot(s),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jo=new ur,OI=new P;class RE{constructor(A=new Bo,i=new Bo,t=new Bo,o=new Bo,s=new Bo,g=new Bo){this.planes=[A,i,t,o,s,g]}set(A,i,t,o,s,g){const a=this.planes;return a[0].copy(A),a[1].copy(i),a[2].copy(t),a[3].copy(o),a[4].copy(s),a[5].copy(g),this}copy(A){const i=this.planes;for(let t=0;t<6;t++)i[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,i=Pr){const t=this.planes,o=A.elements,s=o[0],g=o[1],a=o[2],I=o[3],_=o[4],p=o[5],B=o[6],E=o[7],Q=o[8],h=o[9],y=o[10],u=o[11],l=o[12],f=o[13],m=o[14],D=o[15];if(t[0].setComponents(I-s,E-_,u-Q,D-l).normalize(),t[1].setComponents(I+s,E+_,u+Q,D+l).normalize(),t[2].setComponents(I+g,E+p,u+h,D+f).normalize(),t[3].setComponents(I-g,E-p,u-h,D-f).normalize(),t[4].setComponents(I-a,E-B,u-y,D-m).normalize(),i===Pr)t[5].setComponents(I+a,E+B,u+y,D+m).normalize();else if(i===VC)t[5].setComponents(a,B,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),jo.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const i=A.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(jo)}intersectsSprite(A){return jo.center.set(0,0,0),jo.radius=.7071067811865476,jo.applyMatrix4(A.matrixWorld),this.intersectsSphere(jo)}intersectsSphere(A){const i=this.planes,t=A.center,o=-A.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<o)return!1;return!0}intersectsBox(A){const i=this.planes;for(let t=0;t<6;t++){const o=i[t];if(OI.x=o.normal.x>0?A.max.x:A.min.x,OI.y=o.normal.y>0?A.max.y:A.min.y,OI.z=o.normal.z>0?A.max.z:A.min.z,o.distanceToPoint(OI)<0)return!1}return!0}containsPoint(A){const i=this.planes;for(let t=0;t<6;t++)if(i[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function PP(){let n=null,A=!1,i=null,t=null;function o(s,g){i(s,g),t=n.requestAnimationFrame(o)}return{start:function(){A!==!0&&i!==null&&(t=n.requestAnimationFrame(o),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(s){i=s},setContext:function(s){n=s}}}function NY(n){const A=new WeakMap;function i(a,I){const _=a.array,p=a.usage,B=_.byteLength,E=n.createBuffer();n.bindBuffer(I,E),n.bufferData(I,_,p),a.onUploadCallback();let Q;if(_ instanceof Float32Array)Q=n.FLOAT;else if(_ instanceof Uint16Array)a.isFloat16BufferAttribute?Q=n.HALF_FLOAT:Q=n.UNSIGNED_SHORT;else if(_ instanceof Int16Array)Q=n.SHORT;else if(_ instanceof Uint32Array)Q=n.UNSIGNED_INT;else if(_ instanceof Int32Array)Q=n.INT;else if(_ instanceof Int8Array)Q=n.BYTE;else if(_ instanceof Uint8Array)Q=n.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)Q=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:Q,bytesPerElement:_.BYTES_PER_ELEMENT,version:a.version,size:B}}function t(a,I,_){const p=I.array,B=I.updateRanges;if(n.bindBuffer(_,a),B.length===0)n.bufferSubData(_,0,p);else{B.sort((Q,h)=>Q.start-h.start);let E=0;for(let Q=1;Q<B.length;Q++){const h=B[E],y=B[Q];y.start<=h.start+h.count+1?h.count=Math.max(h.count,y.start+y.count-h.start):(++E,B[E]=y)}B.length=E+1;for(let Q=0,h=B.length;Q<h;Q++){const y=B[Q];n.bufferSubData(_,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}I.clearUpdateRanges()}I.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),A.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const I=A.get(a);I&&(n.deleteBuffer(I.buffer),A.delete(a))}function g(a,I){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=A.get(a);(!p||p.version<a.version)&&A.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const _=A.get(a);if(_===void 0)A.set(a,i(a,I));else if(_.version<a.version){if(_.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");t(_.buffer,a,I),_.version=a.version}}return{get:o,remove:s,update:g}}class dc extends An{constructor(A=1,i=1,t=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:i,widthSegments:t,heightSegments:o};const s=A/2,g=i/2,a=Math.floor(t),I=Math.floor(o),_=a+1,p=I+1,B=A/a,E=i/I,Q=[],h=[],y=[],u=[];for(let l=0;l<p;l++){const f=l*E-g;for(let m=0;m<_;m++){const D=m*B-s;h.push(D,-f,0),y.push(0,0,1),u.push(m/a),u.push(1-l/I)}}for(let l=0;l<I;l++)for(let f=0;f<a;f++){const m=f+_*l,D=f+_*(l+1),T=f+1+_*(l+1),v=f+1+_*l;Q.push(m,D,v),Q.push(D,T,v)}this.setIndex(Q),this.setAttribute("position",new Hi(h,3)),this.setAttribute("normal",new Hi(y,3)),this.setAttribute("uv",new Hi(u,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new dc(A.width,A.height,A.widthSegments,A.heightSegments)}}var FY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LY=`#ifdef USE_ALPHAHASH
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
#endif`,TY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kY=`#ifdef USE_AOMAP
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
#endif`,HY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KY=`#ifdef USE_BATCHING
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
#endif`,PY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qY=`#ifdef USE_IRIDESCENCE
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
#endif`,jY=`#ifdef USE_BUMPMAP
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
#endif`,VY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XY=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$Y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Aq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eq=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tq=`#define PI 3.141592653589793
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
} // validated`,iq=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nq=`vec3 transformedNormal = objectNormal;
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
#endif`,rq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aq="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iq=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cq=`#ifdef USE_ENVMAP
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
#endif`,cq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_q=`#ifdef USE_ENVMAP
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
#endif`,pq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bq=`#ifdef USE_ENVMAP
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
#endif`,Eq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hq=`#ifdef USE_GRADIENTMAP
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
}`,uq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mq=`uniform bool receiveShadow;
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
#endif`,Dq=`#ifdef USE_ENVMAP
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
#endif`,Sq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bq=`PhysicalMaterial material;
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
#endif`,vq=`struct PhysicalMaterial {
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
}`,Nq=`
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
#endif`,Fq=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lq=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tq=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uq=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gq=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xq=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kq=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pq=`#if defined( USE_POINTS_UV )
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
#endif`,Jq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yq=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qq=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jq=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vq=`#ifdef USE_MORPHTARGETS
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
#endif`,Wq=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zq=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zq=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$q=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e3=`#ifdef USE_NORMALMAP
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
#endif`,t3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l3=`float getShadowMask() {
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
}`,Q3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d3=`#ifdef USE_SKINNING
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
#endif`,h3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u3=`#ifdef USE_SKINNING
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
#endif`,f3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S3=`#ifdef USE_TRANSMISSION
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
#endif`,w3=`#ifdef USE_TRANSMISSION
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
#endif`,R3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F3=`uniform sampler2D t2D;
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
}`,L3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`#include <common>
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
}`,k3=`#if DEPTH_PACKING == 3200
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
}`,H3=`#define DISTANCE
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
}`,K3=`#define DISTANCE
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
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O3=`uniform float scale;
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
}`,Y3=`uniform vec3 diffuse;
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
}`,q3=`#include <common>
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
}`,j3=`uniform vec3 diffuse;
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
}`,V3=`#define LAMBERT
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
}`,W3=`#define LAMBERT
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
}`,z3=`#define MATCAP
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
}`,Z3=`#define MATCAP
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
}`,X3=`#define NORMAL
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
}`,$3=`#define NORMAL
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
}`,Aj=`#define PHONG
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
}`,ej=`#define PHONG
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
}`,tj=`#define STANDARD
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
}`,ij=`#define STANDARD
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
}`,nj=`#define TOON
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
}`,rj=`#define TOON
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
}`,oj=`uniform float size;
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
}`,sj=`uniform vec3 diffuse;
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
}`,gj=`#include <common>
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
}`,aj=`uniform vec3 color;
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
}`,Ij=`uniform float rotation;
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
}`,Cj=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:FY,alphahash_pars_fragment:LY,alphamap_fragment:TY,alphamap_pars_fragment:UY,alphatest_fragment:GY,alphatest_pars_fragment:xY,aomap_fragment:kY,aomap_pars_fragment:HY,batching_pars_vertex:KY,batching_vertex:PY,begin_vertex:JY,beginnormal_vertex:OY,bsdfs:YY,iridescence_fragment:qY,bumpmap_pars_fragment:jY,clipping_planes_fragment:VY,clipping_planes_pars_fragment:WY,clipping_planes_pars_vertex:zY,clipping_planes_vertex:ZY,color_fragment:XY,color_pars_fragment:$Y,color_pars_vertex:Aq,color_vertex:eq,common:tq,cube_uv_reflection_fragment:iq,defaultnormal_vertex:nq,displacementmap_pars_vertex:rq,displacementmap_vertex:oq,emissivemap_fragment:sq,emissivemap_pars_fragment:gq,colorspace_fragment:aq,colorspace_pars_fragment:Iq,envmap_fragment:Cq,envmap_common_pars_fragment:cq,envmap_pars_fragment:_q,envmap_pars_vertex:pq,envmap_physical_pars_fragment:Dq,envmap_vertex:Bq,fog_vertex:Eq,fog_pars_vertex:lq,fog_fragment:Qq,fog_pars_fragment:dq,gradientmap_pars_fragment:hq,lightmap_pars_fragment:uq,lights_lambert_fragment:fq,lights_lambert_pars_fragment:yq,lights_pars_begin:mq,lights_toon_fragment:Sq,lights_toon_pars_fragment:wq,lights_phong_fragment:Rq,lights_phong_pars_fragment:Mq,lights_physical_fragment:bq,lights_physical_pars_fragment:vq,lights_fragment_begin:Nq,lights_fragment_maps:Fq,lights_fragment_end:Lq,logdepthbuf_fragment:Tq,logdepthbuf_pars_fragment:Uq,logdepthbuf_pars_vertex:Gq,logdepthbuf_vertex:xq,map_fragment:kq,map_pars_fragment:Hq,map_particle_fragment:Kq,map_particle_pars_fragment:Pq,metalnessmap_fragment:Jq,metalnessmap_pars_fragment:Oq,morphinstance_vertex:Yq,morphcolor_vertex:qq,morphnormal_vertex:jq,morphtarget_pars_vertex:Vq,morphtarget_vertex:Wq,normal_fragment_begin:zq,normal_fragment_maps:Zq,normal_pars_fragment:Xq,normal_pars_vertex:$q,normal_vertex:A3,normalmap_pars_fragment:e3,clearcoat_normal_fragment_begin:t3,clearcoat_normal_fragment_maps:i3,clearcoat_pars_fragment:n3,iridescence_pars_fragment:r3,opaque_fragment:o3,packing:s3,premultiplied_alpha_fragment:g3,project_vertex:a3,dithering_fragment:I3,dithering_pars_fragment:C3,roughnessmap_fragment:c3,roughnessmap_pars_fragment:_3,shadowmap_pars_fragment:p3,shadowmap_pars_vertex:B3,shadowmap_vertex:E3,shadowmask_pars_fragment:l3,skinbase_vertex:Q3,skinning_pars_vertex:d3,skinning_vertex:h3,skinnormal_vertex:u3,specularmap_fragment:f3,specularmap_pars_fragment:y3,tonemapping_fragment:m3,tonemapping_pars_fragment:D3,transmission_fragment:S3,transmission_pars_fragment:w3,uv_pars_fragment:R3,uv_pars_vertex:M3,uv_vertex:b3,worldpos_vertex:v3,background_vert:N3,background_frag:F3,backgroundCube_vert:L3,backgroundCube_frag:T3,cube_vert:U3,cube_frag:G3,depth_vert:x3,depth_frag:k3,distanceRGBA_vert:H3,distanceRGBA_frag:K3,equirect_vert:P3,equirect_frag:J3,linedashed_vert:O3,linedashed_frag:Y3,meshbasic_vert:q3,meshbasic_frag:j3,meshlambert_vert:V3,meshlambert_frag:W3,meshmatcap_vert:z3,meshmatcap_frag:Z3,meshnormal_vert:X3,meshnormal_frag:$3,meshphong_vert:Aj,meshphong_frag:ej,meshphysical_vert:tj,meshphysical_frag:ij,meshtoon_vert:nj,meshtoon_frag:rj,points_vert:oj,points_frag:sj,shadow_vert:gj,shadow_frag:aj,sprite_vert:Ij,sprite_frag:Cj},KA={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Br={basic:{uniforms:xi([KA.common,KA.specularmap,KA.envmap,KA.aomap,KA.lightmap,KA.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:xi([KA.common,KA.specularmap,KA.envmap,KA.aomap,KA.lightmap,KA.emissivemap,KA.bumpmap,KA.normalmap,KA.displacementmap,KA.fog,KA.lights,{emissive:{value:new re(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:xi([KA.common,KA.specularmap,KA.envmap,KA.aomap,KA.lightmap,KA.emissivemap,KA.bumpmap,KA.normalmap,KA.displacementmap,KA.fog,KA.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:xi([KA.common,KA.envmap,KA.aomap,KA.lightmap,KA.emissivemap,KA.bumpmap,KA.normalmap,KA.displacementmap,KA.roughnessmap,KA.metalnessmap,KA.fog,KA.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:xi([KA.common,KA.aomap,KA.lightmap,KA.emissivemap,KA.bumpmap,KA.normalmap,KA.displacementmap,KA.gradientmap,KA.fog,KA.lights,{emissive:{value:new re(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:xi([KA.common,KA.bumpmap,KA.normalmap,KA.displacementmap,KA.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:xi([KA.points,KA.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:xi([KA.common,KA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:xi([KA.common,KA.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:xi([KA.common,KA.bumpmap,KA.normalmap,KA.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:xi([KA.sprite,KA.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:xi([KA.common,KA.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:xi([KA.lights,KA.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Br.physical={uniforms:xi([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const YI={r:0,b:0,g:0},Vo=new yi,cj=new ZA;function _j(n,A,i,t,o,s,g){const a=new re(0);let I=s===!0?0:1,_,p,B=null,E=0,Q=null;function h(f){let m=f.isScene===!0?f.background:null;return m&&m.isTexture&&(m=(f.backgroundBlurriness>0?i:A).get(m)),m}function y(f){let m=!1;const D=h(f);D===null?l(a,I):D&&D.isColor&&(l(D,1),m=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,g):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,g),(n.autoClear||m)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function u(f,m){const D=h(m);D&&(D.isCubeTexture||D.mapping===Ec)?(p===void 0&&(p=new en(new tI(1,1,1),new xo({name:"BackgroundCubeMaterial",uniforms:Rg(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(T,v,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Vo.copy(m.backgroundRotation),Vo.x*=-1,Vo.y*=-1,Vo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vo.y*=-1,Vo.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(cj.makeRotationFromEuler(Vo)),p.material.toneMapped=rt.getTransfer(D.colorSpace)!==ht,(B!==D||E!==D.version||Q!==n.toneMapping)&&(p.material.needsUpdate=!0,B=D,E=D.version,Q=n.toneMapping),p.layers.enableAll(),f.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(_===void 0&&(_=new en(new dc(2,2),new xo({name:"BackgroundMaterial",uniforms:Rg(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(_)),_.material.uniforms.t2D.value=D,_.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,_.material.toneMapped=rt.getTransfer(D.colorSpace)!==ht,D.matrixAutoUpdate===!0&&D.updateMatrix(),_.material.uniforms.uvTransform.value.copy(D.matrix),(B!==D||E!==D.version||Q!==n.toneMapping)&&(_.material.needsUpdate=!0,B=D,E=D.version,Q=n.toneMapping),_.layers.enableAll(),f.unshift(_,_.geometry,_.material,0,0,null))}function l(f,m){f.getRGB(YI,kP(n)),t.buffers.color.setClear(YI.r,YI.g,YI.b,m,g)}return{getClearColor:function(){return a},setClearColor:function(f,m=1){a.set(f),I=m,l(a,I)},getClearAlpha:function(){return I},setClearAlpha:function(f){I=f,l(a,I)},render:y,addToRenderList:u}}function pj(n,A){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),t={},o=E(null);let s=o,g=!1;function a(S,k,oA,X,gA){let dA=!1;const nA=B(X,oA,k);s!==nA&&(s=nA,_(s.object)),dA=Q(S,X,oA,gA),dA&&h(S,X,oA,gA),gA!==null&&A.update(gA,n.ELEMENT_ARRAY_BUFFER),(dA||g)&&(g=!1,D(S,k,oA,X),gA!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,A.get(gA).buffer))}function I(){return n.createVertexArray()}function _(S){return n.bindVertexArray(S)}function p(S){return n.deleteVertexArray(S)}function B(S,k,oA){const X=oA.wireframe===!0;let gA=t[S.id];gA===void 0&&(gA={},t[S.id]=gA);let dA=gA[k.id];dA===void 0&&(dA={},gA[k.id]=dA);let nA=dA[X];return nA===void 0&&(nA=E(I()),dA[X]=nA),nA}function E(S){const k=[],oA=[],X=[];for(let gA=0;gA<i;gA++)k[gA]=0,oA[gA]=0,X[gA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oA,attributeDivisors:X,object:S,attributes:{},index:null}}function Q(S,k,oA,X){const gA=s.attributes,dA=k.attributes;let nA=0;const fA=oA.getAttributes();for(const H in fA)if(fA[H].location>=0){const cA=gA[H];let vA=dA[H];if(vA===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(vA=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(vA=S.instanceColor)),cA===void 0||cA.attribute!==vA||vA&&cA.data!==vA.data)return!0;nA++}return s.attributesNum!==nA||s.index!==X}function h(S,k,oA,X){const gA={},dA=k.attributes;let nA=0;const fA=oA.getAttributes();for(const H in fA)if(fA[H].location>=0){let cA=dA[H];cA===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(cA=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(cA=S.instanceColor));const vA={};vA.attribute=cA,cA&&cA.data&&(vA.data=cA.data),gA[H]=vA,nA++}s.attributes=gA,s.attributesNum=nA,s.index=X}function y(){const S=s.newAttributes;for(let k=0,oA=S.length;k<oA;k++)S[k]=0}function u(S){l(S,0)}function l(S,k){const oA=s.newAttributes,X=s.enabledAttributes,gA=s.attributeDivisors;oA[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),gA[S]!==k&&(n.vertexAttribDivisor(S,k),gA[S]=k)}function f(){const S=s.newAttributes,k=s.enabledAttributes;for(let oA=0,X=k.length;oA<X;oA++)k[oA]!==S[oA]&&(n.disableVertexAttribArray(oA),k[oA]=0)}function m(S,k,oA,X,gA,dA,nA){nA===!0?n.vertexAttribIPointer(S,k,oA,gA,dA):n.vertexAttribPointer(S,k,oA,X,gA,dA)}function D(S,k,oA,X){y();const gA=X.attributes,dA=oA.getAttributes(),nA=k.defaultAttributeValues;for(const fA in dA){const H=dA[fA];if(H.location>=0){let sA=gA[fA];if(sA===void 0&&(fA==="instanceMatrix"&&S.instanceMatrix&&(sA=S.instanceMatrix),fA==="instanceColor"&&S.instanceColor&&(sA=S.instanceColor)),sA!==void 0){const cA=sA.normalized,vA=sA.itemSize,jA=A.get(sA);if(jA===void 0)continue;const we=jA.buffer,rA=jA.type,yA=jA.bytesPerElement,GA=rA===n.INT||rA===n.UNSIGNED_INT||sA.gpuType===QE;if(sA.isInterleavedBufferAttribute){const NA=sA.data,se=NA.stride,ue=sA.offset;if(NA.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)l(H.location+Fe,NA.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=NA.meshPerAttribute*NA.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)u(H.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Fe=0;Fe<H.locationSize;Fe++)m(H.location+Fe,vA/H.locationSize,rA,cA,se*yA,(ue+vA/H.locationSize*Fe)*yA,GA)}else{if(sA.isInstancedBufferAttribute){for(let NA=0;NA<H.locationSize;NA++)l(H.location+NA,sA.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let NA=0;NA<H.locationSize;NA++)u(H.location+NA);n.bindBuffer(n.ARRAY_BUFFER,we);for(let NA=0;NA<H.locationSize;NA++)m(H.location+NA,vA/H.locationSize,rA,cA,vA*yA,vA/H.locationSize*NA*yA,GA)}}else if(nA!==void 0){const cA=nA[fA];if(cA!==void 0)switch(cA.length){case 2:n.vertexAttrib2fv(H.location,cA);break;case 3:n.vertexAttrib3fv(H.location,cA);break;case 4:n.vertexAttrib4fv(H.location,cA);break;default:n.vertexAttrib1fv(H.location,cA)}}}}f()}function T(){L();for(const S in t){const k=t[S];for(const oA in k){const X=k[oA];for(const gA in X)p(X[gA].object),delete X[gA];delete k[oA]}delete t[S]}}function v(S){if(t[S.id]===void 0)return;const k=t[S.id];for(const oA in k){const X=k[oA];for(const gA in X)p(X[gA].object),delete X[gA];delete k[oA]}delete t[S.id]}function N(S){for(const k in t){const oA=t[k];if(oA[S.id]===void 0)continue;const X=oA[S.id];for(const gA in X)p(X[gA].object),delete X[gA];delete oA[S.id]}}function L(){b(),g=!0,s!==o&&(s=o,_(s.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:u,disableUnusedAttributes:f}}function Bj(n,A,i){let t;function o(_){t=_}function s(_,p){n.drawArrays(t,_,p),i.update(p,t,1)}function g(_,p,B){B!==0&&(n.drawArraysInstanced(t,_,p,B),i.update(p,t,B))}function a(_,p,B){if(B===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t,_,0,p,0,B);let Q=0;for(let h=0;h<B;h++)Q+=p[h];i.update(Q,t,1)}function I(_,p,B,E){if(B===0)return;const Q=A.get("WEBGL_multi_draw");if(Q===null)for(let h=0;h<_.length;h++)g(_[h],p[h],E[h]);else{Q.multiDrawArraysInstancedWEBGL(t,_,0,p,0,E,0,B);let h=0;for(let y=0;y<B;y++)h+=p[y]*E[y];i.update(h,t,1)}}this.setMode=o,this.render=s,this.renderInstances=g,this.renderMultiDraw=a,this.renderMultiDrawInstances=I}function Ej(n,A,i,t){let o;function s(){if(o!==void 0)return o;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");o=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function g(N){return!(N!==Ln&&t.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const L=N===eI&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(N!==Xr&&t.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ar&&!L)}function I(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const p=I(_);p!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",p,"instead."),_=p);const B=i.logarithmicDepthBuffer===!0,E=i.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),Q=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),l=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:I,textureFormatReadable:g,textureTypeReadable:a,precision:_,logarithmicDepthBuffer:B,reverseDepthBuffer:E,maxTextures:Q,maxVertexTextures:h,maxTextureSize:y,maxCubemapSize:u,maxAttributes:l,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:T,maxSamples:v}}function lj(n){const A=this;let i=null,t=0,o=!1,s=!1;const g=new Bo,a=new Ne,I={value:null,needsUpdate:!1};this.uniform=I,this.numPlanes=0,this.numIntersection=0,this.init=function(B,E){const Q=B.length!==0||E||t!==0||o;return o=E,t=B.length,Q},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(B,E){i=p(B,E,0)},this.setState=function(B,E,Q){const h=B.clippingPlanes,y=B.clipIntersection,u=B.clipShadows,l=n.get(B);if(!o||h===null||h.length===0||s&&!u)s?p(null):_();else{const f=s?0:t,m=f*4;let D=l.clippingState||null;I.value=D,D=p(h,E,m,Q);for(let T=0;T!==m;++T)D[T]=i[T];l.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=f}};function _(){I.value!==i&&(I.value=i,I.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function p(B,E,Q,h){const y=B!==null?B.length:0;let u=null;if(y!==0){if(u=I.value,h!==!0||u===null){const l=Q+y*4,f=E.matrixWorldInverse;a.getNormalMatrix(f),(u===null||u.length<l)&&(u=new Float32Array(l));for(let m=0,D=Q;m!==y;++m,D+=4)g.copy(B[m]).applyMatrix4(f,a),g.normal.toArray(u,D),u[D+3]=g.constant}I.value=u,I.needsUpdate=!0}return A.numPlanes=y,A.numIntersection=0,u}}function Qj(n){let A=new WeakMap;function i(g,a){return a===qC?g.mapping=yg:a===kp&&(g.mapping=mg),g}function t(g){if(g&&g.isTexture){const a=g.mapping;if(a===qC||a===kp)if(A.has(g)){const I=A.get(g).texture;return i(I,g.mapping)}else{const I=g.image;if(I&&I.height>0){const _=new MY(I.height);return _.fromEquirectangularTexture(n,g),A.set(g,_),g.addEventListener("dispose",o),i(_.texture,g.mapping)}else return null}}return g}function o(g){const a=g.target;a.removeEventListener("dispose",o);const I=A.get(a);I!==void 0&&(A.delete(a),I.dispose())}function s(){A=new WeakMap}return{get:t,dispose:s}}class Is extends HP{constructor(A=-1,i=1,t=1,o=-1,s=.1,g=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=i,this.top=t,this.bottom=o,this.near=s,this.far=g,this.updateProjectionMatrix()}copy(A,i){return super.copy(A,i),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,i,t,o,s,g){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=o,this.view.width=s,this.view.height=g,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=t-A,g=t+A,a=o+i,I=o-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=_*this.view.offsetX,g=s+_*this.view.width,a-=p*this.view.offsetY,I=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,g,a,I,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const i=super.toJSON(A);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ig=4,Ak=[.125,.215,.35,.446,.526,.582],ts=20,Q_=new Is,ek=new re;let d_=null,h_=0,u_=0,f_=!1;const As=(1+Math.sqrt(5))/2,Ps=1/As,tk=[new P(-As,Ps,0),new P(As,Ps,0),new P(-Ps,0,As),new P(Ps,0,As),new P(0,As,-Ps),new P(0,As,Ps),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ik{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,i=0,t=.1,o=100){d_=this._renderer.getRenderTarget(),h_=this._renderer.getActiveCubeFace(),u_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(A,t,o,s),i>0&&this._blur(s,0,0,i),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(A,i=null){return this._fromTexture(A,i)}fromCubemap(A,i=null){return this._fromTexture(A,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ok(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rk(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(d_,h_,u_),this._renderer.xr.enabled=f_,A.scissorTest=!1,qI(A,0,0,A.width,A.height)}_fromTexture(A,i){A.mapping===yg||A.mapping===mg?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),d_=this._renderer.getRenderTarget(),h_=this._renderer.getActiveCubeFace(),u_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const t=i||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,t={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:eI,format:Ln,colorSpace:Lg,depthBuffer:!1},o=nk(A,i,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nk(A,i,t);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dj(s)),this._blurMaterial=hj(s,A,i)}return o}_compileMaterial(A){const i=new en(this._lodPlanes[0],A);this._renderer.compile(i,Q_)}_sceneToCubeUV(A,i,t,o){const a=new ci(90,1,i,t),I=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],p=this._renderer,B=p.autoClear,E=p.toneMapping;p.getClearColor(ek),p.toneMapping=Lo,p.autoClear=!1;const Q=new os({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),h=new en(new tI,Q);let y=!1;const u=A.background;u?u.isColor&&(Q.color.copy(u),A.background=null,y=!0):(Q.color.copy(ek),y=!0);for(let l=0;l<6;l++){const f=l%3;f===0?(a.up.set(0,I[l],0),a.lookAt(_[l],0,0)):f===1?(a.up.set(0,0,I[l]),a.lookAt(0,_[l],0)):(a.up.set(0,I[l],0),a.lookAt(0,0,_[l]));const m=this._cubeSize;qI(o,f*m,l>2?m:0,m,m),p.setRenderTarget(o),y&&p.render(h,a),p.render(A,a)}h.geometry.dispose(),h.material.dispose(),p.toneMapping=E,p.autoClear=B,A.background=u}_textureToCubeUV(A,i){const t=this._renderer,o=A.mapping===yg||A.mapping===mg;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ok()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rk());const s=o?this._cubemapMaterial:this._equirectMaterial,g=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=A;const I=this._cubeSize;qI(i,0,0,3*I,2*I),t.setRenderTarget(i),t.render(g,Q_)}_applyPMREM(A){const i=this._renderer,t=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const g=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tk[(o-s-1)%tk.length];this._blur(A,s-1,s,g,a)}i.autoClear=t}_blur(A,i,t,o,s){const g=this._pingPongRenderTarget;this._halfBlur(A,g,i,t,o,"latitudinal",s),this._halfBlur(g,A,t,t,o,"longitudinal",s)}_halfBlur(A,i,t,o,s,g,a){const I=this._renderer,_=this._blurMaterial;g!=="latitudinal"&&g!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,B=new en(this._lodPlanes[o],_),E=_.uniforms,Q=this._sizeLods[t]-1,h=isFinite(s)?Math.PI/(2*Q):2*Math.PI/(2*ts-1),y=s/h,u=isFinite(s)?1+Math.floor(p*y):ts;u>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${ts}`);const l=[];let f=0;for(let N=0;N<ts;++N){const L=N/y,b=Math.exp(-L*L/2);l.push(b),N===0?f+=b:N<u&&(f+=2*b)}for(let N=0;N<l.length;N++)l[N]=l[N]/f;E.envMap.value=A.texture,E.samples.value=u,E.weights.value=l,E.latitudinal.value=g==="latitudinal",a&&(E.poleAxis.value=a);const{_lodMax:m}=this;E.dTheta.value=h,E.mipInt.value=m-t;const D=this._sizeLods[o],T=3*D*(o>m-ig?o-m+ig:0),v=4*(this._cubeSize-D);qI(i,T,v,3*D,2*D),I.setRenderTarget(i),I.render(B,Q_)}}function dj(n){const A=[],i=[],t=[];let o=n;const s=n-ig+1+Ak.length;for(let g=0;g<s;g++){const a=Math.pow(2,o);i.push(a);let I=1/a;g>n-ig?I=Ak[g-n+ig-1]:g===0&&(I=0),t.push(I);const _=1/(a-2),p=-_,B=1+_,E=[p,p,B,p,B,B,p,p,B,B,p,B],Q=6,h=6,y=3,u=2,l=1,f=new Float32Array(y*h*Q),m=new Float32Array(u*h*Q),D=new Float32Array(l*h*Q);for(let v=0;v<Q;v++){const N=v%3*2/3-1,L=v>2?0:-1,b=[N,L,0,N+2/3,L,0,N+2/3,L+1,0,N,L,0,N+2/3,L+1,0,N,L+1,0];f.set(b,y*h*v),m.set(E,u*h*v);const S=[v,v,v,v,v,v];D.set(S,l*h*v)}const T=new An;T.setAttribute("position",new Pi(f,y)),T.setAttribute("uv",new Pi(m,u)),T.setAttribute("faceIndex",new Pi(D,l)),A.push(T),o>ig&&o--}return{lodPlanes:A,sizeLods:i,sigmas:t}}function nk(n,A,i){const t=new ls(n,A,i);return t.texture.mapping=Ec,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function qI(n,A,i,t,o){n.viewport.set(A,i,t,o),n.scissor.set(A,i,t,o)}function hj(n,A,i){const t=new Float32Array(ts),o=new P(0,1,0);return new xo({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ME(),fragmentShader:`

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
		`,blending:Fo,depthTest:!1,depthWrite:!1})}function rk(){return new xo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ME(),fragmentShader:`

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
		`,blending:Fo,depthTest:!1,depthWrite:!1})}function ok(){return new xo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ME(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fo,depthTest:!1,depthWrite:!1})}function ME(){return`

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
	`}function uj(n){let A=new WeakMap,i=null;function t(a){if(a&&a.isTexture){const I=a.mapping,_=I===qC||I===kp,p=I===yg||I===mg;if(_||p){let B=A.get(a);const E=B!==void 0?B.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==E)return i===null&&(i=new ik(n)),B=_?i.fromEquirectangular(a,B):i.fromCubemap(a,B),B.texture.pmremVersion=a.pmremVersion,A.set(a,B),B.texture;if(B!==void 0)return B.texture;{const Q=a.image;return _&&Q&&Q.height>0||p&&Q&&o(Q)?(i===null&&(i=new ik(n)),B=_?i.fromEquirectangular(a):i.fromCubemap(a),B.texture.pmremVersion=a.pmremVersion,A.set(a,B),a.addEventListener("dispose",s),B.texture):null}}}return a}function o(a){let I=0;const _=6;for(let p=0;p<_;p++)a[p]!==void 0&&I++;return I===_}function s(a){const I=a.target;I.removeEventListener("dispose",s);const _=A.get(I);_!==void 0&&(A.delete(I),_.dispose())}function g(){A=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:t,dispose:g}}function fj(n){const A={};function i(t){if(A[t]!==void 0)return A[t];let o;switch(t){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(t)}return A[t]=o,o}return{has:function(t){return i(t)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(t){const o=i(t);return o===null&&Ba("THREE.WebGLRenderer: "+t+" extension not supported."),o}}}function yj(n,A,i,t){const o={},s=new WeakMap;function g(B){const E=B.target;E.index!==null&&A.remove(E.index);for(const h in E.attributes)A.remove(E.attributes[h]);for(const h in E.morphAttributes){const y=E.morphAttributes[h];for(let u=0,l=y.length;u<l;u++)A.remove(y[u])}E.removeEventListener("dispose",g),delete o[E.id];const Q=s.get(E);Q&&(A.remove(Q),s.delete(E)),t.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function a(B,E){return o[E.id]===!0||(E.addEventListener("dispose",g),o[E.id]=!0,i.memory.geometries++),E}function I(B){const E=B.attributes;for(const h in E)A.update(E[h],n.ARRAY_BUFFER);const Q=B.morphAttributes;for(const h in Q){const y=Q[h];for(let u=0,l=y.length;u<l;u++)A.update(y[u],n.ARRAY_BUFFER)}}function _(B){const E=[],Q=B.index,h=B.attributes.position;let y=0;if(Q!==null){const f=Q.array;y=Q.version;for(let m=0,D=f.length;m<D;m+=3){const T=f[m+0],v=f[m+1],N=f[m+2];E.push(T,v,v,N,N,T)}}else if(h!==void 0){const f=h.array;y=h.version;for(let m=0,D=f.length/3-1;m<D;m+=3){const T=m+0,v=m+1,N=m+2;E.push(T,v,v,N,N,T)}}else return;const u=new(LP(E)?xP:wE)(E,1);u.version=y;const l=s.get(B);l&&A.remove(l),s.set(B,u)}function p(B){const E=s.get(B);if(E){const Q=B.index;Q!==null&&E.version<Q.version&&_(B)}else _(B);return s.get(B)}return{get:a,update:I,getWireframeAttribute:p}}function mj(n,A,i){let t;function o(E){t=E}let s,g;function a(E){s=E.type,g=E.bytesPerElement}function I(E,Q){n.drawElements(t,Q,s,E*g),i.update(Q,t,1)}function _(E,Q,h){h!==0&&(n.drawElementsInstanced(t,Q,s,E*g,h),i.update(Q,t,h))}function p(E,Q,h){if(h===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t,Q,0,s,E,0,h);let u=0;for(let l=0;l<h;l++)u+=Q[l];i.update(u,t,1)}function B(E,Q,h,y){if(h===0)return;const u=A.get("WEBGL_multi_draw");if(u===null)for(let l=0;l<E.length;l++)_(E[l]/g,Q[l],y[l]);else{u.multiDrawElementsInstancedWEBGL(t,Q,0,s,E,0,y,0,h);let l=0;for(let f=0;f<h;f++)l+=Q[f]*y[f];i.update(l,t,1)}}this.setMode=o,this.setIndex=a,this.render=I,this.renderInstances=_,this.renderMultiDraw=p,this.renderMultiDrawInstances=B}function Dj(n){const A={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function t(s,g,a){switch(i.calls++,g){case n.TRIANGLES:i.triangles+=a*(s/3);break;case n.LINES:i.lines+=a*(s/2);break;case n.LINE_STRIP:i.lines+=a*(s-1);break;case n.LINE_LOOP:i.lines+=a*s;break;case n.POINTS:i.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",g);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:A,render:i,programs:null,autoReset:!0,reset:o,update:t}}function Sj(n,A,i){const t=new WeakMap,o=new $e;function s(g,a,I){const _=g.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,B=p!==void 0?p.length:0;let E=t.get(a);if(E===void 0||E.count!==B){let b=function(){N.dispose(),t.delete(a),a.removeEventListener("dispose",b)};E!==void 0&&E.texture.dispose();const Q=a.morphAttributes.position!==void 0,h=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let m=0;Q===!0&&(m=1),h===!0&&(m=2),y===!0&&(m=3);let D=a.attributes.position.count*m,T=1;D>A.maxTextureSize&&(T=Math.ceil(D/A.maxTextureSize),D=A.maxTextureSize);const v=new Float32Array(D*T*4*B),N=new UP(v,D,T,B);N.type=Ar,N.needsUpdate=!0;const L=m*4;for(let S=0;S<B;S++){const k=u[S],oA=l[S],X=f[S],gA=D*T*4*S;for(let dA=0;dA<k.count;dA++){const nA=dA*L;Q===!0&&(o.fromBufferAttribute(k,dA),v[gA+nA+0]=o.x,v[gA+nA+1]=o.y,v[gA+nA+2]=o.z,v[gA+nA+3]=0),h===!0&&(o.fromBufferAttribute(oA,dA),v[gA+nA+4]=o.x,v[gA+nA+5]=o.y,v[gA+nA+6]=o.z,v[gA+nA+7]=0),y===!0&&(o.fromBufferAttribute(X,dA),v[gA+nA+8]=o.x,v[gA+nA+9]=o.y,v[gA+nA+10]=o.z,v[gA+nA+11]=X.itemSize===4?o.w:1)}}E={count:B,texture:N,size:new Qe(D,T)},t.set(a,E),a.addEventListener("dispose",b)}if(g.isInstancedMesh===!0&&g.morphTexture!==null)I.getUniforms().setValue(n,"morphTexture",g.morphTexture,i);else{let Q=0;for(let y=0;y<_.length;y++)Q+=_[y];const h=a.morphTargetsRelative?1:1-Q;I.getUniforms().setValue(n,"morphTargetBaseInfluence",h),I.getUniforms().setValue(n,"morphTargetInfluences",_)}I.getUniforms().setValue(n,"morphTargetsTexture",E.texture,i),I.getUniforms().setValue(n,"morphTargetsTextureSize",E.size)}return{update:s}}function wj(n,A,i,t){let o=new WeakMap;function s(I){const _=t.render.frame,p=I.geometry,B=A.get(I,p);if(o.get(B)!==_&&(A.update(B),o.set(B,_)),I.isInstancedMesh&&(I.hasEventListener("dispose",a)===!1&&I.addEventListener("dispose",a),o.get(I)!==_&&(i.update(I.instanceMatrix,n.ARRAY_BUFFER),I.instanceColor!==null&&i.update(I.instanceColor,n.ARRAY_BUFFER),o.set(I,_))),I.isSkinnedMesh){const E=I.skeleton;o.get(E)!==_&&(E.update(),o.set(E,_))}return B}function g(){o=new WeakMap}function a(I){const _=I.target;_.removeEventListener("dispose",a),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:s,dispose:g}}class JP extends ii{constructor(A,i,t,o,s,g,a,I,_,p=Cg){if(p!==Cg&&p!==Sg)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&p===Cg&&(t=Es),t===void 0&&p===Sg&&(t=Dg),super(null,o,s,g,a,I,p,t,_),this.isDepthTexture=!0,this.image={width:A,height:i},this.magFilter=a!==void 0?a:sn,this.minFilter=I!==void 0?I:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const i=super.toJSON(A);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const OP=new ii,sk=new JP(1,1),YP=new UP,qP=new _Y,jP=new KP,gk=[],ak=[],Ik=new Float32Array(16),Ck=new Float32Array(9),ck=new Float32Array(4);function Ug(n,A,i){const t=n[0];if(t<=0||t>0)return n;const o=A*i;let s=gk[o];if(s===void 0&&(s=new Float32Array(o),gk[o]=s),A!==0){t.toArray(s,0);for(let g=1,a=0;g!==A;++g)a+=i,n[g].toArray(s,a)}return s}function si(n,A){if(n.length!==A.length)return!1;for(let i=0,t=n.length;i<t;i++)if(n[i]!==A[i])return!1;return!0}function gi(n,A){for(let i=0,t=A.length;i<t;i++)n[i]=A[i]}function hc(n,A){let i=ak[A];i===void 0&&(i=new Int32Array(A),ak[A]=i);for(let t=0;t!==A;++t)i[t]=n.allocateTextureUnit();return i}function Rj(n,A){const i=this.cache;i[0]!==A&&(n.uniform1f(this.addr,A),i[0]=A)}function Mj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(si(i,A))return;n.uniform2fv(this.addr,A),gi(i,A)}}function bj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else if(A.r!==void 0)(i[0]!==A.r||i[1]!==A.g||i[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),i[0]=A.r,i[1]=A.g,i[2]=A.b);else{if(si(i,A))return;n.uniform3fv(this.addr,A),gi(i,A)}}function vj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(si(i,A))return;n.uniform4fv(this.addr,A),gi(i,A)}}function Nj(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(si(i,A))return;n.uniformMatrix2fv(this.addr,!1,A),gi(i,A)}else{if(si(i,t))return;ck.set(t),n.uniformMatrix2fv(this.addr,!1,ck),gi(i,t)}}function Fj(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(si(i,A))return;n.uniformMatrix3fv(this.addr,!1,A),gi(i,A)}else{if(si(i,t))return;Ck.set(t),n.uniformMatrix3fv(this.addr,!1,Ck),gi(i,t)}}function Lj(n,A){const i=this.cache,t=A.elements;if(t===void 0){if(si(i,A))return;n.uniformMatrix4fv(this.addr,!1,A),gi(i,A)}else{if(si(i,t))return;Ik.set(t),n.uniformMatrix4fv(this.addr,!1,Ik),gi(i,t)}}function Tj(n,A){const i=this.cache;i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A)}function Uj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(si(i,A))return;n.uniform2iv(this.addr,A),gi(i,A)}}function Gj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else{if(si(i,A))return;n.uniform3iv(this.addr,A),gi(i,A)}}function xj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(si(i,A))return;n.uniform4iv(this.addr,A),gi(i,A)}}function kj(n,A){const i=this.cache;i[0]!==A&&(n.uniform1ui(this.addr,A),i[0]=A)}function Hj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),i[0]=A.x,i[1]=A.y);else{if(si(i,A))return;n.uniform2uiv(this.addr,A),gi(i,A)}}function Kj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),i[0]=A.x,i[1]=A.y,i[2]=A.z);else{if(si(i,A))return;n.uniform3uiv(this.addr,A),gi(i,A)}}function Pj(n,A){const i=this.cache;if(A.x!==void 0)(i[0]!==A.x||i[1]!==A.y||i[2]!==A.z||i[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),i[0]=A.x,i[1]=A.y,i[2]=A.z,i[3]=A.w);else{if(si(i,A))return;n.uniform4uiv(this.addr,A),gi(i,A)}}function Jj(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(sk.compareFunction=FP,s=sk):s=OP,i.setTexture2D(A||s,o)}function Oj(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTexture3D(A||qP,o)}function Yj(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTextureCube(A||jP,o)}function qj(n,A,i){const t=this.cache,o=i.allocateTextureUnit();t[0]!==o&&(n.uniform1i(this.addr,o),t[0]=o),i.setTexture2DArray(A||YP,o)}function jj(n){switch(n){case 5126:return Rj;case 35664:return Mj;case 35665:return bj;case 35666:return vj;case 35674:return Nj;case 35675:return Fj;case 35676:return Lj;case 5124:case 35670:return Tj;case 35667:case 35671:return Uj;case 35668:case 35672:return Gj;case 35669:case 35673:return xj;case 5125:return kj;case 36294:return Hj;case 36295:return Kj;case 36296:return Pj;case 35678:case 36198:case 36298:case 36306:case 35682:return Jj;case 35679:case 36299:case 36307:return Oj;case 35680:case 36300:case 36308:case 36293:return Yj;case 36289:case 36303:case 36311:case 36292:return qj}}function Vj(n,A){n.uniform1fv(this.addr,A)}function Wj(n,A){const i=Ug(A,this.size,2);n.uniform2fv(this.addr,i)}function zj(n,A){const i=Ug(A,this.size,3);n.uniform3fv(this.addr,i)}function Zj(n,A){const i=Ug(A,this.size,4);n.uniform4fv(this.addr,i)}function Xj(n,A){const i=Ug(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,i)}function $j(n,A){const i=Ug(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,i)}function AV(n,A){const i=Ug(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,i)}function eV(n,A){n.uniform1iv(this.addr,A)}function tV(n,A){n.uniform2iv(this.addr,A)}function iV(n,A){n.uniform3iv(this.addr,A)}function nV(n,A){n.uniform4iv(this.addr,A)}function rV(n,A){n.uniform1uiv(this.addr,A)}function oV(n,A){n.uniform2uiv(this.addr,A)}function sV(n,A){n.uniform3uiv(this.addr,A)}function gV(n,A){n.uniform4uiv(this.addr,A)}function aV(n,A,i){const t=this.cache,o=A.length,s=hc(i,o);si(t,s)||(n.uniform1iv(this.addr,s),gi(t,s));for(let g=0;g!==o;++g)i.setTexture2D(A[g]||OP,s[g])}function IV(n,A,i){const t=this.cache,o=A.length,s=hc(i,o);si(t,s)||(n.uniform1iv(this.addr,s),gi(t,s));for(let g=0;g!==o;++g)i.setTexture3D(A[g]||qP,s[g])}function CV(n,A,i){const t=this.cache,o=A.length,s=hc(i,o);si(t,s)||(n.uniform1iv(this.addr,s),gi(t,s));for(let g=0;g!==o;++g)i.setTextureCube(A[g]||jP,s[g])}function cV(n,A,i){const t=this.cache,o=A.length,s=hc(i,o);si(t,s)||(n.uniform1iv(this.addr,s),gi(t,s));for(let g=0;g!==o;++g)i.setTexture2DArray(A[g]||YP,s[g])}function _V(n){switch(n){case 5126:return Vj;case 35664:return Wj;case 35665:return zj;case 35666:return Zj;case 35674:return Xj;case 35675:return $j;case 35676:return AV;case 5124:case 35670:return eV;case 35667:case 35671:return tV;case 35668:case 35672:return iV;case 35669:case 35673:return nV;case 5125:return rV;case 36294:return oV;case 36295:return sV;case 36296:return gV;case 35678:case 36198:case 36298:case 36306:case 35682:return aV;case 35679:case 36299:case 36307:return IV;case 35680:case 36300:case 36308:case 36293:return CV;case 36289:case 36303:case 36311:case 36292:return cV}}class pV{constructor(A,i,t){this.id=A,this.addr=t,this.cache=[],this.type=i.type,this.setValue=jj(i.type)}}class BV{constructor(A,i,t){this.id=A,this.addr=t,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_V(i.type)}}class EV{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,i,t){const o=this.seq;for(let s=0,g=o.length;s!==g;++s){const a=o[s];a.setValue(A,i[a.id],t)}}}const y_=/(\w+)(\])?(\[|\.)?/g;function _k(n,A){n.seq.push(A),n.map[A.id]=A}function lV(n,A,i){const t=n.name,o=t.length;for(y_.lastIndex=0;;){const s=y_.exec(t),g=y_.lastIndex;let a=s[1];const I=s[2]==="]",_=s[3];if(I&&(a=a|0),_===void 0||_==="["&&g+2===o){_k(i,_===void 0?new pV(a,n,A):new BV(a,n,A));break}else{let B=i.map[a];B===void 0&&(B=new EV(a),_k(i,B)),i=B}}}class uC{constructor(A,i){this.seq=[],this.map={};const t=A.getProgramParameter(i,A.ACTIVE_UNIFORMS);for(let o=0;o<t;++o){const s=A.getActiveUniform(i,o),g=A.getUniformLocation(i,s.name);lV(s,g,this)}}setValue(A,i,t,o){const s=this.map[i];s!==void 0&&s.setValue(A,t,o)}setOptional(A,i,t){const o=i[t];o!==void 0&&this.setValue(A,t,o)}static upload(A,i,t,o){for(let s=0,g=i.length;s!==g;++s){const a=i[s],I=t[a.id];I.needsUpdate!==!1&&a.setValue(A,I.value,o)}}static seqWithValue(A,i){const t=[];for(let o=0,s=A.length;o!==s;++o){const g=A[o];g.id in i&&t.push(g)}return t}}function pk(n,A,i){const t=n.createShader(A);return n.shaderSource(t,i),n.compileShader(t),t}const QV=37297;let dV=0;function hV(n,A){const i=n.split(`
`),t=[],o=Math.max(A-6,0),s=Math.min(A+6,i.length);for(let g=o;g<s;g++){const a=g+1;t.push(`${a===A?">":" "} ${a}: ${i[g]}`)}return t.join(`
`)}const Bk=new Ne;function uV(n){rt._getMatrix(Bk,rt.workingColorSpace,n);const A=`mat3( ${Bk.elements.map(i=>i.toFixed(4))} )`;switch(rt.getTransfer(n)){case Qc:return[A,"LinearTransferOETF"];case ht:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[A,"LinearTransferOETF"]}}function Ek(n,A,i){const t=n.getShaderParameter(A,n.COMPILE_STATUS),o=n.getShaderInfoLog(A).trim();if(t&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const g=parseInt(s[1]);return i.toUpperCase()+`

`+o+`

`+hV(n.getShaderSource(A),g)}else return o}function fV(n,A){const i=uV(A);return[`vec4 ${n}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function yV(n,A){let i;switch(A){case yO:i="Linear";break;case mO:i="Reinhard";break;case DO:i="Cineon";break;case SO:i="ACESFilmic";break;case RO:i="AgX";break;case MO:i="Neutral";break;case wO:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),i="Linear"}return"vec3 "+n+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jI=new P;function mV(){rt.getLuminanceCoefficients(jI);const n=jI.x.toFixed(4),A=jI.y.toFixed(4),i=jI.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${A}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DV(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function SV(n){const A=[];for(const i in n){const t=n[i];t!==!1&&A.push("#define "+i+" "+t)}return A.join(`
`)}function wV(n,A){const i={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let o=0;o<t;o++){const s=n.getActiveAttrib(A,o),g=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),i[g]={type:s.type,location:n.getAttribLocation(A,g),locationSize:a}}return i}function Ea(n){return n!==""}function lk(n,A){const i=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Qk(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const RV=/^[ \t]*#include +<([\w\d./]+)>/gm;function pB(n){return n.replace(RV,bV)}const MV=new Map;function bV(n,A){let i=Ue[A];if(i===void 0){const t=MV.get(A);if(t!==void 0)i=Ue[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,t);else throw new Error("Can not resolve #include <"+A+">")}return pB(i)}const vV=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dk(n){return n.replace(vV,NV)}function NV(n,A,i,t){let o="";for(let s=parseInt(A);s<parseInt(i);s++)o+=t.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function hk(n){let A=`precision ${n.precision} float;
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
#define LOW_PRECISION`),A}function FV(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hP?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===tO?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(A="SHADOWMAP_TYPE_VSM"),A}function LV(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yg:case mg:A="ENVMAP_TYPE_CUBE";break;case Ec:A="ENVMAP_TYPE_CUBE_UV";break}return A}function TV(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mg:A="ENVMAP_MODE_REFRACTION";break}return A}function UV(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bc:A="ENVMAP_BLENDING_MULTIPLY";break;case uO:A="ENVMAP_BLENDING_MIX";break;case fO:A="ENVMAP_BLENDING_ADD";break}return A}function GV(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const i=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:t,maxMip:i}}function xV(n,A,i,t){const o=n.getContext(),s=i.defines;let g=i.vertexShader,a=i.fragmentShader;const I=FV(i),_=LV(i),p=TV(i),B=UV(i),E=GV(i),Q=DV(i),h=SV(s),y=o.createProgram();let u,l,f=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h].filter(Ea).join(`
`),u.length>0&&(u+=`
`),l=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h].filter(Ea).join(`
`),l.length>0&&(l+=`
`)):(u=[hk(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),l=[hk(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,h,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+p:"",i.envMap?"#define "+B:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Lo?"#define TONE_MAPPING":"",i.toneMapping!==Lo?Ue.tonemapping_pars_fragment:"",i.toneMapping!==Lo?yV("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,fV("linearToOutputTexel",i.outputColorSpace),mV(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ea).join(`
`)),g=pB(g),g=lk(g,i),g=Qk(g,i),a=pB(a),a=lk(a,i),a=Qk(a,i),g=dk(g),a=dk(a),i.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,u=[Q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,l=["#define varying in",i.glslVersion===Nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const m=f+u+g,D=f+l+a,T=pk(o,o.VERTEX_SHADER,m),v=pk(o,o.FRAGMENT_SHADER,D);o.attachShader(y,T),o.attachShader(y,v),i.index0AttributeName!==void 0?o.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function N(k){if(n.debug.checkShaderErrors){const oA=o.getProgramInfoLog(y).trim(),X=o.getShaderInfoLog(T).trim(),gA=o.getShaderInfoLog(v).trim();let dA=!0,nA=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(dA=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,T,v);else{const fA=Ek(o,T,"vertex"),H=Ek(o,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oA+`
`+fA+`
`+H)}else oA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oA):(X===""||gA==="")&&(nA=!1);nA&&(k.diagnostics={runnable:dA,programLog:oA,vertexShader:{log:X,prefix:u},fragmentShader:{log:gA,prefix:l}})}o.deleteShader(T),o.deleteShader(v),L=new uC(o,y),b=wV(o,y)}let L;this.getUniforms=function(){return L===void 0&&N(this),L};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(y,QV)),S},this.destroy=function(){t.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dV++,this.cacheKey=A,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=v,this}let kV=0;class HV{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const i=A.vertexShader,t=A.fragmentShader,o=this._getShaderStage(i),s=this._getShaderStage(t),g=this._getShaderCacheForMaterial(A);return g.has(o)===!1&&(g.add(o),o.usedTimes++),g.has(s)===!1&&(g.add(s),s.usedTimes++),this}remove(A){const i=this.materialCache.get(A);for(const t of i)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const i=this.materialCache;let t=i.get(A);return t===void 0&&(t=new Set,i.set(A,t)),t}_getShaderStage(A){const i=this.shaderCache;let t=i.get(A);return t===void 0&&(t=new KV(A),i.set(A,t)),t}}class KV{constructor(A){this.id=kV++,this.code=A,this.usedTimes=0}}function PV(n,A,i,t,o,s,g){const a=new SE,I=new HV,_=new Set,p=[],B=o.logarithmicDepthBuffer,E=o.vertexTextures;let Q=o.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return _.add(b),b===0?"uv":`uv${b}`}function u(b,S,k,oA,X){const gA=oA.fog,dA=X.geometry,nA=b.isMeshStandardMaterial?oA.environment:null,fA=(b.isMeshStandardMaterial?i:A).get(b.envMap||nA),H=fA&&fA.mapping===Ec?fA.image.height:null,sA=h[b.type];b.precision!==null&&(Q=o.getMaxPrecision(b.precision),Q!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",Q,"instead."));const cA=dA.morphAttributes.position||dA.morphAttributes.normal||dA.morphAttributes.color,vA=cA!==void 0?cA.length:0;let jA=0;dA.morphAttributes.position!==void 0&&(jA=1),dA.morphAttributes.normal!==void 0&&(jA=2),dA.morphAttributes.color!==void 0&&(jA=3);let we,rA,yA,GA;if(sA){const He=Br[sA];we=He.vertexShader,rA=He.fragmentShader}else we=b.vertexShader,rA=b.fragmentShader,I.update(b),yA=I.getVertexShaderID(b),GA=I.getFragmentShaderID(b);const NA=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ue=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,ut=!!b.map,xe=!!b.matcap,yt=!!fA,O=!!b.aoMap,Si=!!b.lightMap,ke=!!b.bumpMap,Le=!!b.normalMap,ge=!!b.displacementMap,ct=!!b.emissiveMap,ae=!!b.metalnessMap,F=!!b.roughnessMap,w=b.anisotropy>0,Z=b.clearcoat>0,QA=b.dispersion>0,hA=b.iridescence>0,pA=b.sheen>0,XA=b.transmission>0,TA=w&&!!b.anisotropyMap,VA=Z&&!!b.clearcoatMap,qe=Z&&!!b.clearcoatNormalMap,SA=Z&&!!b.clearcoatRoughnessMap,WA=hA&&!!b.iridescenceMap,ce=hA&&!!b.iridescenceThicknessMap,le=pA&&!!b.sheenColorMap,PA=pA&&!!b.sheenRoughnessMap,x=!!b.specularMap,IA=!!b.specularColorMap,kA=!!b.specularIntensityMap,G=XA&&!!b.transmissionMap,mA=XA&&!!b.thicknessMap,iA=!!b.gradientMap,_A=!!b.alphaMap,JA=b.alphaTest>0,HA=!!b.alphaHash,Ie=!!b.extensions;let C=Lo;b.toneMapped&&(NA===null||NA.isXRRenderTarget===!0)&&(C=n.toneMapping);const St={shaderID:sA,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:rA,defines:b.defines,customVertexShaderID:yA,customFragmentShaderID:GA,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Q,batching:Fe,batchingColor:Fe&&X._colorsTexture!==null,instancing:ue,instancingColor:ue&&X.instanceColor!==null,instancingMorph:ue&&X.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:NA===null?n.outputColorSpace:NA.isXRRenderTarget===!0?NA.texture.colorSpace:Lg,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:xe,envMap:yt,envMapMode:yt&&fA.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Si,bumpMap:ke,normalMap:Le,displacementMap:E&&ge,emissiveMap:ct,normalMapObjectSpace:Le&&b.normalMapType===TO,normalMapTangentSpace:Le&&b.normalMapType===lc,metalnessMap:ae,roughnessMap:F,anisotropy:w,anisotropyMap:TA,clearcoat:Z,clearcoatMap:VA,clearcoatNormalMap:qe,clearcoatRoughnessMap:SA,dispersion:QA,iridescence:hA,iridescenceMap:WA,iridescenceThicknessMap:ce,sheen:pA,sheenColorMap:le,sheenRoughnessMap:PA,specularMap:x,specularColorMap:IA,specularIntensityMap:kA,transmission:XA,transmissionMap:G,thicknessMap:mA,gradientMap:iA,opaque:b.transparent===!1&&b.blending===Ig&&b.alphaToCoverage===!1,alphaMap:_A,alphaTest:JA,alphaHash:HA,combine:b.combine,mapUv:ut&&y(b.map.channel),aoMapUv:O&&y(b.aoMap.channel),lightMapUv:Si&&y(b.lightMap.channel),bumpMapUv:ke&&y(b.bumpMap.channel),normalMapUv:Le&&y(b.normalMap.channel),displacementMapUv:ge&&y(b.displacementMap.channel),emissiveMapUv:ct&&y(b.emissiveMap.channel),metalnessMapUv:ae&&y(b.metalnessMap.channel),roughnessMapUv:F&&y(b.roughnessMap.channel),anisotropyMapUv:TA&&y(b.anisotropyMap.channel),clearcoatMapUv:VA&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:SA&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:WA&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:PA&&y(b.sheenRoughnessMap.channel),specularMapUv:x&&y(b.specularMap.channel),specularColorMapUv:IA&&y(b.specularColorMap.channel),specularIntensityMapUv:kA&&y(b.specularIntensityMap.channel),transmissionMapUv:G&&y(b.transmissionMap.channel),thicknessMapUv:mA&&y(b.thicknessMap.channel),alphaMapUv:_A&&y(b.alphaMap.channel),vertexTangents:!!dA.attributes.tangent&&(Le||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!dA.attributes.color&&dA.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!dA.attributes.uv&&(ut||_A),fog:!!gA,useFog:b.fog===!0,fogExp2:!!gA&&gA.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:B,reverseDepthBuffer:se,skinning:X.isSkinnedMesh===!0,morphTargets:dA.morphAttributes.position!==void 0,morphNormals:dA.morphAttributes.normal!==void 0,morphColors:dA.morphAttributes.color!==void 0,morphTargetsCount:vA,morphTextureStride:jA,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:g.numPlanes,numClipIntersection:g.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:C,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===ht,decodeVideoTextureEmissive:ct&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===lr,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=_.has(1),St.vertexUv2s=_.has(2),St.vertexUv3s=_.has(3),_.clear(),St}function l(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)S.push(k),S.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(f(S,b),m(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function f(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function m(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function D(b){const S=h[b.type];let k;if(S){const oA=Br[S];k=DY.clone(oA.uniforms)}else k=b.uniforms;return k}function T(b,S){let k;for(let oA=0,X=p.length;oA<X;oA++){const gA=p[oA];if(gA.cacheKey===S){k=gA,++k.usedTimes;break}}return k===void 0&&(k=new xV(n,S,b,s),p.push(k)),k}function v(b){if(--b.usedTimes===0){const S=p.indexOf(b);p[S]=p[p.length-1],p.pop(),b.destroy()}}function N(b){I.remove(b)}function L(){I.dispose()}return{getParameters:u,getProgramCacheKey:l,getUniforms:D,acquireProgram:T,releaseProgram:v,releaseShaderCache:N,programs:p,dispose:L}}function JV(){let n=new WeakMap;function A(g){return n.has(g)}function i(g){let a=n.get(g);return a===void 0&&(a={},n.set(g,a)),a}function t(g){n.delete(g)}function o(g,a,I){n.get(g)[a]=I}function s(){n=new WeakMap}return{has:A,get:i,remove:t,update:o,dispose:s}}function OV(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function uk(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function fk(){const n=[];let A=0;const i=[],t=[],o=[];function s(){A=0,i.length=0,t.length=0,o.length=0}function g(B,E,Q,h,y,u){let l=n[A];return l===void 0?(l={id:B.id,object:B,geometry:E,material:Q,groupOrder:h,renderOrder:B.renderOrder,z:y,group:u},n[A]=l):(l.id=B.id,l.object=B,l.geometry=E,l.material=Q,l.groupOrder=h,l.renderOrder=B.renderOrder,l.z=y,l.group=u),A++,l}function a(B,E,Q,h,y,u){const l=g(B,E,Q,h,y,u);Q.transmission>0?t.push(l):Q.transparent===!0?o.push(l):i.push(l)}function I(B,E,Q,h,y,u){const l=g(B,E,Q,h,y,u);Q.transmission>0?t.unshift(l):Q.transparent===!0?o.unshift(l):i.unshift(l)}function _(B,E){i.length>1&&i.sort(B||OV),t.length>1&&t.sort(E||uk),o.length>1&&o.sort(E||uk)}function p(){for(let B=A,E=n.length;B<E;B++){const Q=n[B];if(Q.id===null)break;Q.id=null,Q.object=null,Q.geometry=null,Q.material=null,Q.group=null}}return{opaque:i,transmissive:t,transparent:o,init:s,push:a,unshift:I,finish:p,sort:_}}function YV(){let n=new WeakMap;function A(t,o){const s=n.get(t);let g;return s===void 0?(g=new fk,n.set(t,[g])):o>=s.length?(g=new fk,s.push(g)):g=s[o],g}function i(){n=new WeakMap}return{get:A,dispose:i}}function qV(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let i;switch(A.type){case"DirectionalLight":i={direction:new P,color:new re};break;case"SpotLight":i={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":i={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return n[A.id]=i,i}}}function jV(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let i;switch(A.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=i,i}}}let VV=0;function WV(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function zV(n){const A=new qV,i=jV(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)t.probe.push(new P);const o=new P,s=new ZA,g=new ZA;function a(_){let p=0,B=0,E=0;for(let b=0;b<9;b++)t.probe[b].set(0,0,0);let Q=0,h=0,y=0,u=0,l=0,f=0,m=0,D=0,T=0,v=0,N=0;_.sort(WV);for(let b=0,S=_.length;b<S;b++){const k=_[b],oA=k.color,X=k.intensity,gA=k.distance,dA=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=oA.r*X,B+=oA.g*X,E+=oA.b*X;else if(k.isLightProbe){for(let nA=0;nA<9;nA++)t.probe[nA].addScaledVector(k.sh.coefficients[nA],X);N++}else if(k.isDirectionalLight){const nA=A.get(k);if(nA.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const fA=k.shadow,H=i.get(k);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,t.directionalShadow[Q]=H,t.directionalShadowMap[Q]=dA,t.directionalShadowMatrix[Q]=k.shadow.matrix,f++}t.directional[Q]=nA,Q++}else if(k.isSpotLight){const nA=A.get(k);nA.position.setFromMatrixPosition(k.matrixWorld),nA.color.copy(oA).multiplyScalar(X),nA.distance=gA,nA.coneCos=Math.cos(k.angle),nA.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),nA.decay=k.decay,t.spot[y]=nA;const fA=k.shadow;if(k.map&&(t.spotLightMap[T]=k.map,T++,fA.updateMatrices(k),k.castShadow&&v++),t.spotLightMatrix[y]=fA.matrix,k.castShadow){const H=i.get(k);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,t.spotShadow[y]=H,t.spotShadowMap[y]=dA,D++}y++}else if(k.isRectAreaLight){const nA=A.get(k);nA.color.copy(oA).multiplyScalar(X),nA.halfWidth.set(k.width*.5,0,0),nA.halfHeight.set(0,k.height*.5,0),t.rectArea[u]=nA,u++}else if(k.isPointLight){const nA=A.get(k);if(nA.color.copy(k.color).multiplyScalar(k.intensity),nA.distance=k.distance,nA.decay=k.decay,k.castShadow){const fA=k.shadow,H=i.get(k);H.shadowIntensity=fA.intensity,H.shadowBias=fA.bias,H.shadowNormalBias=fA.normalBias,H.shadowRadius=fA.radius,H.shadowMapSize=fA.mapSize,H.shadowCameraNear=fA.camera.near,H.shadowCameraFar=fA.camera.far,t.pointShadow[h]=H,t.pointShadowMap[h]=dA,t.pointShadowMatrix[h]=k.shadow.matrix,m++}t.point[h]=nA,h++}else if(k.isHemisphereLight){const nA=A.get(k);nA.skyColor.copy(k.color).multiplyScalar(X),nA.groundColor.copy(k.groundColor).multiplyScalar(X),t.hemi[l]=nA,l++}}u>0&&(n.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=KA.LTC_FLOAT_1,t.rectAreaLTC2=KA.LTC_FLOAT_2):(t.rectAreaLTC1=KA.LTC_HALF_1,t.rectAreaLTC2=KA.LTC_HALF_2)),t.ambient[0]=p,t.ambient[1]=B,t.ambient[2]=E;const L=t.hash;(L.directionalLength!==Q||L.pointLength!==h||L.spotLength!==y||L.rectAreaLength!==u||L.hemiLength!==l||L.numDirectionalShadows!==f||L.numPointShadows!==m||L.numSpotShadows!==D||L.numSpotMaps!==T||L.numLightProbes!==N)&&(t.directional.length=Q,t.spot.length=y,t.rectArea.length=u,t.point.length=h,t.hemi.length=l,t.directionalShadow.length=f,t.directionalShadowMap.length=f,t.pointShadow.length=m,t.pointShadowMap.length=m,t.spotShadow.length=D,t.spotShadowMap.length=D,t.directionalShadowMatrix.length=f,t.pointShadowMatrix.length=m,t.spotLightMatrix.length=D+T-v,t.spotLightMap.length=T,t.numSpotLightShadowsWithMaps=v,t.numLightProbes=N,L.directionalLength=Q,L.pointLength=h,L.spotLength=y,L.rectAreaLength=u,L.hemiLength=l,L.numDirectionalShadows=f,L.numPointShadows=m,L.numSpotShadows=D,L.numSpotMaps=T,L.numLightProbes=N,t.version=VV++)}function I(_,p){let B=0,E=0,Q=0,h=0,y=0;const u=p.matrixWorldInverse;for(let l=0,f=_.length;l<f;l++){const m=_[l];if(m.isDirectionalLight){const D=t.directional[B];D.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(u),B++}else if(m.isSpotLight){const D=t.spot[Q];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(u),Q++}else if(m.isRectAreaLight){const D=t.rectArea[h];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),g.identity(),s.copy(m.matrixWorld),s.premultiply(u),g.extractRotation(s),D.halfWidth.set(m.width*.5,0,0),D.halfHeight.set(0,m.height*.5,0),D.halfWidth.applyMatrix4(g),D.halfHeight.applyMatrix4(g),h++}else if(m.isPointLight){const D=t.point[E];D.position.setFromMatrixPosition(m.matrixWorld),D.position.applyMatrix4(u),E++}else if(m.isHemisphereLight){const D=t.hemi[y];D.direction.setFromMatrixPosition(m.matrixWorld),D.direction.transformDirection(u),y++}}}return{setup:a,setupView:I,state:t}}function yk(n){const A=new zV(n),i=[],t=[];function o(p){_.camera=p,i.length=0,t.length=0}function s(p){i.push(p)}function g(p){t.push(p)}function a(){A.setup(i)}function I(p){A.setupView(i,p)}const _={lightsArray:i,shadowsArray:t,camera:null,lights:A,transmissionRenderTarget:{}};return{init:o,state:_,setupLights:a,setupLightsView:I,pushLight:s,pushShadow:g}}function ZV(n){let A=new WeakMap;function i(o,s=0){const g=A.get(o);let a;return g===void 0?(a=new yk(n),A.set(o,[a])):s>=g.length?(a=new yk(n),g.push(a)):a=g[s],a}function t(){A=new WeakMap}return{get:i,dispose:t}}class XV extends Un{static get type(){return"MeshDepthMaterial"}constructor(A){super(),this.isMeshDepthMaterial=!0,this.depthPacking=FO,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class $V extends Un{static get type(){return"MeshDistanceMaterial"}constructor(A){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const AW=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eW=`uniform sampler2D shadow_pass;
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
}`;function tW(n,A,i){let t=new RE;const o=new Qe,s=new Qe,g=new $e,a=new XV({depthPacking:LO}),I=new $V,_={},p=i.maxTextureSize,B={[Zr]:on,[on]:Zr,[lr]:lr},E=new xo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:AW,fragmentShader:eW}),Q=E.clone();Q.defines.HORIZONTAL_PASS=1;const h=new An;h.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new en(h,E),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hP;let l=this.type;this.render=function(v,N,L){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||v.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),oA=n.state;oA.setBlending(Fo),oA.buffers.color.setClear(1,1,1,1),oA.buffers.depth.setTest(!0),oA.setScissorTest(!1);const X=l!==Tr&&this.type===Tr,gA=l===Tr&&this.type!==Tr;for(let dA=0,nA=v.length;dA<nA;dA++){const fA=v[dA],H=fA.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",fA,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const sA=H.getFrameExtents();if(o.multiply(sA),s.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(s.x=Math.floor(p/sA.x),o.x=s.x*sA.x,H.mapSize.x=s.x),o.y>p&&(s.y=Math.floor(p/sA.y),o.y=s.y*sA.y,H.mapSize.y=s.y)),H.map===null||X===!0||gA===!0){const vA=this.type!==Tr?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new ls(o.x,o.y,vA),H.map.texture.name=fA.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const cA=H.getViewportCount();for(let vA=0;vA<cA;vA++){const jA=H.getViewport(vA);g.set(s.x*jA.x,s.y*jA.y,s.x*jA.z,s.y*jA.w),oA.viewport(g),H.updateMatrices(fA,vA),t=H.getFrustum(),D(N,L,H.camera,fA,this.type)}H.isPointLightShadow!==!0&&this.type===Tr&&f(H,L),H.needsUpdate=!1}l=this.type,u.needsUpdate=!1,n.setRenderTarget(b,S,k)};function f(v,N){const L=A.update(y);E.defines.VSM_SAMPLES!==v.blurSamples&&(E.defines.VSM_SAMPLES=v.blurSamples,Q.defines.VSM_SAMPLES=v.blurSamples,E.needsUpdate=!0,Q.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ls(o.x,o.y)),E.uniforms.shadow_pass.value=v.map.texture,E.uniforms.resolution.value=v.mapSize,E.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(N,null,L,E,y,null),Q.uniforms.shadow_pass.value=v.mapPass.texture,Q.uniforms.resolution.value=v.mapSize,Q.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(N,null,L,Q,y,null)}function m(v,N,L,b){let S=null;const k=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(k!==void 0)S=k;else if(S=L.isPointLight===!0?I:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oA=S.uuid,X=N.uuid;let gA=_[oA];gA===void 0&&(gA={},_[oA]=gA);let dA=gA[X];dA===void 0&&(dA=S.clone(),gA[X]=dA,N.addEventListener("dispose",T)),S=dA}if(S.visible=N.visible,S.wireframe=N.wireframe,b===Tr?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:B[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const oA=n.properties.get(S);oA.light=L}return S}function D(v,N,L,b,S){if(v.visible===!1)return;if(v.layers.test(N.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===Tr)&&(!v.frustumCulled||t.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const X=A.update(v),gA=v.material;if(Array.isArray(gA)){const dA=X.groups;for(let nA=0,fA=dA.length;nA<fA;nA++){const H=dA[nA],sA=gA[H.materialIndex];if(sA&&sA.visible){const cA=m(v,sA,b,S);v.onBeforeShadow(n,v,N,L,X,cA,H),n.renderBufferDirect(L,null,X,cA,v,H),v.onAfterShadow(n,v,N,L,X,cA,H)}}}else if(gA.visible){const dA=m(v,gA,b,S);v.onBeforeShadow(n,v,N,L,X,dA,null),n.renderBufferDirect(L,null,X,dA,v,null),v.onAfterShadow(n,v,N,L,X,dA,null)}}const oA=v.children;for(let X=0,gA=oA.length;X<gA;X++)D(oA[X],N,L,b,S)}function T(v){v.target.removeEventListener("dispose",T);for(const L in _){const b=_[L],S=v.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const iW={[Np]:Fp,[Lp]:Gp,[Tp]:xp,[fg]:Up,[Fp]:Np,[Gp]:Lp,[xp]:Tp,[Up]:fg};function nW(n,A){function i(){let G=!1;const mA=new $e;let iA=null;const _A=new $e(0,0,0,0);return{setMask:function(JA){iA!==JA&&!G&&(n.colorMask(JA,JA,JA,JA),iA=JA)},setLocked:function(JA){G=JA},setClear:function(JA,HA,Ie,C,St){St===!0&&(JA*=C,HA*=C,Ie*=C),mA.set(JA,HA,Ie,C),_A.equals(mA)===!1&&(n.clearColor(JA,HA,Ie,C),_A.copy(mA))},reset:function(){G=!1,iA=null,_A.set(-1,0,0,0)}}}function t(){let G=!1,mA=!1,iA=null,_A=null,JA=null;return{setReversed:function(HA){if(mA!==HA){const Ie=A.get("EXT_clip_control");mA?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const C=JA;JA=null,this.setClear(C)}mA=HA},getReversed:function(){return mA},setTest:function(HA){HA?NA(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(HA){iA!==HA&&!G&&(n.depthMask(HA),iA=HA)},setFunc:function(HA){if(mA&&(HA=iW[HA]),_A!==HA){switch(HA){case Np:n.depthFunc(n.NEVER);break;case Fp:n.depthFunc(n.ALWAYS);break;case Lp:n.depthFunc(n.LESS);break;case fg:n.depthFunc(n.LEQUAL);break;case Tp:n.depthFunc(n.EQUAL);break;case Up:n.depthFunc(n.GEQUAL);break;case Gp:n.depthFunc(n.GREATER);break;case xp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_A=HA}},setLocked:function(HA){G=HA},setClear:function(HA){JA!==HA&&(mA&&(HA=1-HA),n.clearDepth(HA),JA=HA)},reset:function(){G=!1,iA=null,_A=null,JA=null,mA=!1}}}function o(){let G=!1,mA=null,iA=null,_A=null,JA=null,HA=null,Ie=null,C=null,St=null;return{setTest:function(He){G||(He?NA(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(He){mA!==He&&!G&&(n.stencilMask(He),mA=He)},setFunc:function(He,Ai,pi){(iA!==He||_A!==Ai||JA!==pi)&&(n.stencilFunc(He,Ai,pi),iA=He,_A=Ai,JA=pi)},setOp:function(He,Ai,pi){(HA!==He||Ie!==Ai||C!==pi)&&(n.stencilOp(He,Ai,pi),HA=He,Ie=Ai,C=pi)},setLocked:function(He){G=He},setClear:function(He){St!==He&&(n.clearStencil(He),St=He)},reset:function(){G=!1,mA=null,iA=null,_A=null,JA=null,HA=null,Ie=null,C=null,St=null}}}const s=new i,g=new t,a=new o,I=new WeakMap,_=new WeakMap;let p={},B={},E=new WeakMap,Q=[],h=null,y=!1,u=null,l=null,f=null,m=null,D=null,T=null,v=null,N=new re(0,0,0),L=0,b=!1,S=null,k=null,oA=null,X=null,gA=null;const dA=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nA=!1,fA=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(fA=parseFloat(/^WebGL (\d)/.exec(H)[1]),nA=fA>=1):H.indexOf("OpenGL ES")!==-1&&(fA=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),nA=fA>=2);let sA=null,cA={};const vA=n.getParameter(n.SCISSOR_BOX),jA=n.getParameter(n.VIEWPORT),we=new $e().fromArray(vA),rA=new $e().fromArray(jA);function yA(G,mA,iA,_A){const JA=new Uint8Array(4),HA=n.createTexture();n.bindTexture(G,HA),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<iA;Ie++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(mA,0,n.RGBA,1,1,_A,0,n.RGBA,n.UNSIGNED_BYTE,JA):n.texImage2D(mA+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,JA);return HA}const GA={};GA[n.TEXTURE_2D]=yA(n.TEXTURE_2D,n.TEXTURE_2D,1),GA[n.TEXTURE_CUBE_MAP]=yA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),GA[n.TEXTURE_2D_ARRAY]=yA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),GA[n.TEXTURE_3D]=yA(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),g.setClear(1),a.setClear(0),NA(n.DEPTH_TEST),g.setFunc(fg),ke(!1),Le(yx),NA(n.CULL_FACE),O(Fo);function NA(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function se(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function ue(G,mA){return B[G]!==mA?(n.bindFramebuffer(G,mA),B[G]=mA,G===n.DRAW_FRAMEBUFFER&&(B[n.FRAMEBUFFER]=mA),G===n.FRAMEBUFFER&&(B[n.DRAW_FRAMEBUFFER]=mA),!0):!1}function Fe(G,mA){let iA=Q,_A=!1;if(G){iA=E.get(mA),iA===void 0&&(iA=[],E.set(mA,iA));const JA=G.textures;if(iA.length!==JA.length||iA[0]!==n.COLOR_ATTACHMENT0){for(let HA=0,Ie=JA.length;HA<Ie;HA++)iA[HA]=n.COLOR_ATTACHMENT0+HA;iA.length=JA.length,_A=!0}}else iA[0]!==n.BACK&&(iA[0]=n.BACK,_A=!0);_A&&n.drawBuffers(iA)}function ut(G){return h!==G?(n.useProgram(G),h=G,!0):!1}const xe={[es]:n.FUNC_ADD,[nO]:n.FUNC_SUBTRACT,[rO]:n.FUNC_REVERSE_SUBTRACT};xe[oO]=n.MIN,xe[sO]=n.MAX;const yt={[gO]:n.ZERO,[aO]:n.ONE,[IO]:n.SRC_COLOR,[bp]:n.SRC_ALPHA,[EO]:n.SRC_ALPHA_SATURATE,[pO]:n.DST_COLOR,[cO]:n.DST_ALPHA,[CO]:n.ONE_MINUS_SRC_COLOR,[vp]:n.ONE_MINUS_SRC_ALPHA,[BO]:n.ONE_MINUS_DST_COLOR,[_O]:n.ONE_MINUS_DST_ALPHA,[lO]:n.CONSTANT_COLOR,[QO]:n.ONE_MINUS_CONSTANT_COLOR,[dO]:n.CONSTANT_ALPHA,[hO]:n.ONE_MINUS_CONSTANT_ALPHA};function O(G,mA,iA,_A,JA,HA,Ie,C,St,He){if(G===Fo){y===!0&&(se(n.BLEND),y=!1);return}if(y===!1&&(NA(n.BLEND),y=!0),G!==iO){if(G!==u||He!==b){if((l!==es||D!==es)&&(n.blendEquation(n.FUNC_ADD),l=es,D=es),He)switch(G){case Ig:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mx:n.blendFunc(n.ONE,n.ONE);break;case Dx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ig:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mx:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}f=null,m=null,T=null,v=null,N.set(0,0,0),L=0,u=G,b=He}return}JA=JA||mA,HA=HA||iA,Ie=Ie||_A,(mA!==l||JA!==D)&&(n.blendEquationSeparate(xe[mA],xe[JA]),l=mA,D=JA),(iA!==f||_A!==m||HA!==T||Ie!==v)&&(n.blendFuncSeparate(yt[iA],yt[_A],yt[HA],yt[Ie]),f=iA,m=_A,T=HA,v=Ie),(C.equals(N)===!1||St!==L)&&(n.blendColor(C.r,C.g,C.b,St),N.copy(C),L=St),u=G,b=!1}function Si(G,mA){G.side===lr?se(n.CULL_FACE):NA(n.CULL_FACE);let iA=G.side===on;mA&&(iA=!iA),ke(iA),G.blending===Ig&&G.transparent===!1?O(Fo):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),g.setFunc(G.depthFunc),g.setTest(G.depthTest),g.setMask(G.depthWrite),s.setMask(G.colorWrite);const _A=G.stencilWrite;a.setTest(_A),_A&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?NA(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function Le(G){G!==AO?(NA(n.CULL_FACE),G!==k&&(G===yx?n.cullFace(n.BACK):G===eO?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),k=G}function ge(G){G!==oA&&(nA&&n.lineWidth(G),oA=G)}function ct(G,mA,iA){G?(NA(n.POLYGON_OFFSET_FILL),(X!==mA||gA!==iA)&&(n.polygonOffset(mA,iA),X=mA,gA=iA)):se(n.POLYGON_OFFSET_FILL)}function ae(G){G?NA(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function F(G){G===void 0&&(G=n.TEXTURE0+dA-1),sA!==G&&(n.activeTexture(G),sA=G)}function w(G,mA,iA){iA===void 0&&(sA===null?iA=n.TEXTURE0+dA-1:iA=sA);let _A=cA[iA];_A===void 0&&(_A={type:void 0,texture:void 0},cA[iA]=_A),(_A.type!==G||_A.texture!==mA)&&(sA!==iA&&(n.activeTexture(iA),sA=iA),n.bindTexture(G,mA||GA[G]),_A.type=G,_A.texture=mA)}function Z(){const G=cA[sA];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function QA(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function hA(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pA(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function XA(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function TA(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function VA(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function SA(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function WA(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(G){we.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function PA(G){rA.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),rA.copy(G))}function x(G,mA){let iA=_.get(mA);iA===void 0&&(iA=new WeakMap,_.set(mA,iA));let _A=iA.get(G);_A===void 0&&(_A=n.getUniformBlockIndex(mA,G.name),iA.set(G,_A))}function IA(G,mA){const _A=_.get(mA).get(G);I.get(mA)!==_A&&(n.uniformBlockBinding(mA,_A,G.__bindingPointIndex),I.set(mA,_A))}function kA(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),g.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},sA=null,cA={},B={},E=new WeakMap,Q=[],h=null,y=!1,u=null,l=null,f=null,m=null,D=null,T=null,v=null,N=new re(0,0,0),L=0,b=!1,S=null,k=null,oA=null,X=null,gA=null,we.set(0,0,n.canvas.width,n.canvas.height),rA.set(0,0,n.canvas.width,n.canvas.height),s.reset(),g.reset(),a.reset()}return{buffers:{color:s,depth:g,stencil:a},enable:NA,disable:se,bindFramebuffer:ue,drawBuffers:Fe,useProgram:ut,setBlending:O,setMaterial:Si,setFlipSided:ke,setCullFace:Le,setLineWidth:ge,setPolygonOffset:ct,setScissorTest:ae,activeTexture:F,bindTexture:w,unbindTexture:Z,compressedTexImage2D:QA,compressedTexImage3D:hA,texImage2D:WA,texImage3D:ce,updateUBOMapping:x,uniformBlockBinding:IA,texStorage2D:qe,texStorage3D:SA,texSubImage2D:pA,texSubImage3D:XA,compressedTexSubImage2D:TA,compressedTexSubImage3D:VA,scissor:le,viewport:PA,reset:kA}}function mk(n,A,i,t){const o=rW(t);switch(i){case SP:return n*A;case RP:return n*A;case MP:return n*A*2;case uE:return n*A/o.components*o.byteLength;case fE:return n*A/o.components*o.byteLength;case bP:return n*A*2/o.components*o.byteLength;case yE:return n*A*2/o.components*o.byteLength;case wP:return n*A*3/o.components*o.byteLength;case Ln:return n*A*4/o.components*o.byteLength;case mE:return n*A*4/o.components*o.byteLength;case EC:case lC:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case QC:case dC:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case Kp:case Jp:return Math.max(n,16)*Math.max(A,8)/4;case Hp:case Pp:return Math.max(n,8)*Math.max(A,8)/2;case Op:case Yp:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case qp:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case jp:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case Vp:return Math.floor((n+4)/5)*Math.floor((A+3)/4)*16;case Wp:return Math.floor((n+4)/5)*Math.floor((A+4)/5)*16;case zp:return Math.floor((n+5)/6)*Math.floor((A+4)/5)*16;case Zp:return Math.floor((n+5)/6)*Math.floor((A+5)/6)*16;case Xp:return Math.floor((n+7)/8)*Math.floor((A+4)/5)*16;case $p:return Math.floor((n+7)/8)*Math.floor((A+5)/6)*16;case AB:return Math.floor((n+7)/8)*Math.floor((A+7)/8)*16;case eB:return Math.floor((n+9)/10)*Math.floor((A+4)/5)*16;case tB:return Math.floor((n+9)/10)*Math.floor((A+5)/6)*16;case iB:return Math.floor((n+9)/10)*Math.floor((A+7)/8)*16;case nB:return Math.floor((n+9)/10)*Math.floor((A+9)/10)*16;case rB:return Math.floor((n+11)/12)*Math.floor((A+9)/10)*16;case oB:return Math.floor((n+11)/12)*Math.floor((A+11)/12)*16;case hC:case sB:case gB:return Math.ceil(n/4)*Math.ceil(A/4)*16;case vP:case aB:return Math.ceil(n/4)*Math.ceil(A/4)*8;case IB:case CB:return Math.ceil(n/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rW(n){switch(n){case Xr:case yP:return{byteLength:1,components:1};case qa:case mP:case eI:return{byteLength:2,components:1};case dE:case hE:return{byteLength:2,components:4};case Es:case QE:case Ar:return{byteLength:4,components:1};case DP:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function oW(n,A,i,t,o,s,g){const a=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,I=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Qe,p=new WeakMap;let B;const E=new WeakMap;let Q=!1;try{Q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(F,w){return Q?new OffscreenCanvas(F,w):Wa("canvas")}function y(F,w,Z){let QA=1;const hA=ae(F);if((hA.width>Z||hA.height>Z)&&(QA=Z/Math.max(hA.width,hA.height)),QA<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const pA=Math.floor(QA*hA.width),XA=Math.floor(QA*hA.height);B===void 0&&(B=h(pA,XA));const TA=w?h(pA,XA):B;return TA.width=pA,TA.height=XA,TA.getContext("2d").drawImage(F,0,0,pA,XA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+hA.width+"x"+hA.height+") to ("+pA+"x"+XA+")."),TA}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+hA.width+"x"+hA.height+")."),F;return F}function u(F){return F.generateMipmaps}function l(F){n.generateMipmap(F)}function f(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function m(F,w,Z,QA,hA=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pA=w;if(w===n.RED&&(Z===n.FLOAT&&(pA=n.R32F),Z===n.HALF_FLOAT&&(pA=n.R16F),Z===n.UNSIGNED_BYTE&&(pA=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pA=n.R8UI),Z===n.UNSIGNED_SHORT&&(pA=n.R16UI),Z===n.UNSIGNED_INT&&(pA=n.R32UI),Z===n.BYTE&&(pA=n.R8I),Z===n.SHORT&&(pA=n.R16I),Z===n.INT&&(pA=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(pA=n.RG32F),Z===n.HALF_FLOAT&&(pA=n.RG16F),Z===n.UNSIGNED_BYTE&&(pA=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pA=n.RG8UI),Z===n.UNSIGNED_SHORT&&(pA=n.RG16UI),Z===n.UNSIGNED_INT&&(pA=n.RG32UI),Z===n.BYTE&&(pA=n.RG8I),Z===n.SHORT&&(pA=n.RG16I),Z===n.INT&&(pA=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pA=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(pA=n.RGB16UI),Z===n.UNSIGNED_INT&&(pA=n.RGB32UI),Z===n.BYTE&&(pA=n.RGB8I),Z===n.SHORT&&(pA=n.RGB16I),Z===n.INT&&(pA=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pA=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(pA=n.RGBA16UI),Z===n.UNSIGNED_INT&&(pA=n.RGBA32UI),Z===n.BYTE&&(pA=n.RGBA8I),Z===n.SHORT&&(pA=n.RGBA16I),Z===n.INT&&(pA=n.RGBA32I)),w===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(pA=n.RGB9_E5),w===n.RGBA){const XA=hA?Qc:rt.getTransfer(QA);Z===n.FLOAT&&(pA=n.RGBA32F),Z===n.HALF_FLOAT&&(pA=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pA=XA===ht?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pA=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pA=n.RGB5_A1)}return(pA===n.R16F||pA===n.R32F||pA===n.RG16F||pA===n.RG32F||pA===n.RGBA16F||pA===n.RGBA32F)&&A.get("EXT_color_buffer_float"),pA}function D(F,w){let Z;return F?w===null||w===Es||w===Dg?Z=n.DEPTH24_STENCIL8:w===Ar?Z=n.DEPTH32F_STENCIL8:w===qa&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Dg?Z=n.DEPTH_COMPONENT24:w===Ar?Z=n.DEPTH_COMPONENT32F:w===qa&&(Z=n.DEPTH_COMPONENT16),Z}function T(F,w){return u(F)===!0||F.isFramebufferTexture&&F.minFilter!==sn&&F.minFilter!==Fn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function v(F){const w=F.target;w.removeEventListener("dispose",v),L(w),w.isVideoTexture&&p.delete(w)}function N(F){const w=F.target;w.removeEventListener("dispose",N),S(w)}function L(F){const w=t.get(F);if(w.__webglInit===void 0)return;const Z=F.source,QA=E.get(Z);if(QA){const hA=QA[w.__cacheKey];hA.usedTimes--,hA.usedTimes===0&&b(F),Object.keys(QA).length===0&&E.delete(Z)}t.remove(F)}function b(F){const w=t.get(F);n.deleteTexture(w.__webglTexture);const Z=F.source,QA=E.get(Z);delete QA[w.__cacheKey],g.memory.textures--}function S(F){const w=t.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),t.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let QA=0;QA<6;QA++){if(Array.isArray(w.__webglFramebuffer[QA]))for(let hA=0;hA<w.__webglFramebuffer[QA].length;hA++)n.deleteFramebuffer(w.__webglFramebuffer[QA][hA]);else n.deleteFramebuffer(w.__webglFramebuffer[QA]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[QA])}else{if(Array.isArray(w.__webglFramebuffer))for(let QA=0;QA<w.__webglFramebuffer.length;QA++)n.deleteFramebuffer(w.__webglFramebuffer[QA]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let QA=0;QA<w.__webglColorRenderbuffer.length;QA++)w.__webglColorRenderbuffer[QA]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[QA]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=F.textures;for(let QA=0,hA=Z.length;QA<hA;QA++){const pA=t.get(Z[QA]);pA.__webglTexture&&(n.deleteTexture(pA.__webglTexture),g.memory.textures--),t.remove(Z[QA])}t.remove(F)}let k=0;function oA(){k=0}function X(){const F=k;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),k+=1,F}function gA(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function dA(F,w){const Z=t.get(F);if(F.isVideoTexture&&ge(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const QA=F.image;if(QA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(QA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rA(Z,F,w);return}}i.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function nA(F,w){const Z=t.get(F);if(F.version>0&&Z.__version!==F.version){rA(Z,F,w);return}i.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function fA(F,w){const Z=t.get(F);if(F.version>0&&Z.__version!==F.version){rA(Z,F,w);return}i.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function H(F,w){const Z=t.get(F);if(F.version>0&&Z.__version!==F.version){yA(Z,F,w);return}i.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const sA={[Go]:n.REPEAT,[Qr]:n.CLAMP_TO_EDGE,[jC]:n.MIRRORED_REPEAT},cA={[sn]:n.NEAREST,[fP]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[BC]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR},vA={[UO]:n.NEVER,[PO]:n.ALWAYS,[GO]:n.LESS,[FP]:n.LEQUAL,[xO]:n.EQUAL,[KO]:n.GEQUAL,[kO]:n.GREATER,[HO]:n.NOTEQUAL};function jA(F,w){if(w.type===Ar&&A.has("OES_texture_float_linear")===!1&&(w.magFilter===Fn||w.magFilter===BC||w.magFilter===pa||w.magFilter===Kr||w.minFilter===Fn||w.minFilter===BC||w.minFilter===pa||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,sA[w.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,sA[w.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,sA[w.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,cA[w.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,cA[w.minFilter]),w.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,vA[w.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==pa&&w.minFilter!==Kr||w.type===Ar&&A.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||t.get(w).__currentAnisotropy){const Z=A.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),t.get(w).__currentAnisotropy=w.anisotropy}}}function we(F,w){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",v));const QA=w.source;let hA=E.get(QA);hA===void 0&&(hA={},E.set(QA,hA));const pA=gA(w);if(pA!==F.__cacheKey){hA[pA]===void 0&&(hA[pA]={texture:n.createTexture(),usedTimes:0},g.memory.textures++,Z=!0),hA[pA].usedTimes++;const XA=hA[F.__cacheKey];XA!==void 0&&(hA[F.__cacheKey].usedTimes--,XA.usedTimes===0&&b(w)),F.__cacheKey=pA,F.__webglTexture=hA[pA].texture}return Z}function rA(F,w,Z){let QA=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(QA=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(QA=n.TEXTURE_3D);const hA=we(F,w),pA=w.source;i.bindTexture(QA,F.__webglTexture,n.TEXTURE0+Z);const XA=t.get(pA);if(pA.version!==XA.__version||hA===!0){i.activeTexture(n.TEXTURE0+Z);const TA=rt.getPrimaries(rt.workingColorSpace),VA=w.colorSpace===Qo?null:rt.getPrimaries(w.colorSpace),qe=w.colorSpace===Qo||TA===VA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let SA=y(w.image,!1,o.maxTextureSize);SA=ct(w,SA);const WA=s.convert(w.format,w.colorSpace),ce=s.convert(w.type);let le=m(w.internalFormat,WA,ce,w.colorSpace,w.isVideoTexture);jA(QA,w);let PA;const x=w.mipmaps,IA=w.isVideoTexture!==!0,kA=XA.__version===void 0||hA===!0,G=pA.dataReady,mA=T(w,SA);if(w.isDepthTexture)le=D(w.format===Sg,w.type),kA&&(IA?i.texStorage2D(n.TEXTURE_2D,1,le,SA.width,SA.height):i.texImage2D(n.TEXTURE_2D,0,le,SA.width,SA.height,0,WA,ce,null));else if(w.isDataTexture)if(x.length>0){IA&&kA&&i.texStorage2D(n.TEXTURE_2D,mA,le,x[0].width,x[0].height);for(let iA=0,_A=x.length;iA<_A;iA++)PA=x[iA],IA?G&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,PA.width,PA.height,WA,ce,PA.data):i.texImage2D(n.TEXTURE_2D,iA,le,PA.width,PA.height,0,WA,ce,PA.data);w.generateMipmaps=!1}else IA?(kA&&i.texStorage2D(n.TEXTURE_2D,mA,le,SA.width,SA.height),G&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,SA.width,SA.height,WA,ce,SA.data)):i.texImage2D(n.TEXTURE_2D,0,le,SA.width,SA.height,0,WA,ce,SA.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){IA&&kA&&i.texStorage3D(n.TEXTURE_2D_ARRAY,mA,le,x[0].width,x[0].height,SA.depth);for(let iA=0,_A=x.length;iA<_A;iA++)if(PA=x[iA],w.format!==Ln)if(WA!==null)if(IA){if(G)if(w.layerUpdates.size>0){const JA=mk(PA.width,PA.height,w.format,w.type);for(const HA of w.layerUpdates){const Ie=PA.data.subarray(HA*JA/PA.data.BYTES_PER_ELEMENT,(HA+1)*JA/PA.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,HA,PA.width,PA.height,1,WA,Ie)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,0,PA.width,PA.height,SA.depth,WA,PA.data)}else i.compressedTexImage3D(n.TEXTURE_2D_ARRAY,iA,le,PA.width,PA.height,SA.depth,0,PA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else IA?G&&i.texSubImage3D(n.TEXTURE_2D_ARRAY,iA,0,0,0,PA.width,PA.height,SA.depth,WA,ce,PA.data):i.texImage3D(n.TEXTURE_2D_ARRAY,iA,le,PA.width,PA.height,SA.depth,0,WA,ce,PA.data)}else{IA&&kA&&i.texStorage2D(n.TEXTURE_2D,mA,le,x[0].width,x[0].height);for(let iA=0,_A=x.length;iA<_A;iA++)PA=x[iA],w.format!==Ln?WA!==null?IA?G&&i.compressedTexSubImage2D(n.TEXTURE_2D,iA,0,0,PA.width,PA.height,WA,PA.data):i.compressedTexImage2D(n.TEXTURE_2D,iA,le,PA.width,PA.height,0,PA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):IA?G&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,PA.width,PA.height,WA,ce,PA.data):i.texImage2D(n.TEXTURE_2D,iA,le,PA.width,PA.height,0,WA,ce,PA.data)}else if(w.isDataArrayTexture)if(IA){if(kA&&i.texStorage3D(n.TEXTURE_2D_ARRAY,mA,le,SA.width,SA.height,SA.depth),G)if(w.layerUpdates.size>0){const iA=mk(SA.width,SA.height,w.format,w.type);for(const _A of w.layerUpdates){const JA=SA.data.subarray(_A*iA/SA.data.BYTES_PER_ELEMENT,(_A+1)*iA/SA.data.BYTES_PER_ELEMENT);i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_A,SA.width,SA.height,1,WA,ce,JA)}w.clearLayerUpdates()}else i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,SA.width,SA.height,SA.depth,WA,ce,SA.data)}else i.texImage3D(n.TEXTURE_2D_ARRAY,0,le,SA.width,SA.height,SA.depth,0,WA,ce,SA.data);else if(w.isData3DTexture)IA?(kA&&i.texStorage3D(n.TEXTURE_3D,mA,le,SA.width,SA.height,SA.depth),G&&i.texSubImage3D(n.TEXTURE_3D,0,0,0,0,SA.width,SA.height,SA.depth,WA,ce,SA.data)):i.texImage3D(n.TEXTURE_3D,0,le,SA.width,SA.height,SA.depth,0,WA,ce,SA.data);else if(w.isFramebufferTexture){if(kA)if(IA)i.texStorage2D(n.TEXTURE_2D,mA,le,SA.width,SA.height);else{let iA=SA.width,_A=SA.height;for(let JA=0;JA<mA;JA++)i.texImage2D(n.TEXTURE_2D,JA,le,iA,_A,0,WA,ce,null),iA>>=1,_A>>=1}}else if(x.length>0){if(IA&&kA){const iA=ae(x[0]);i.texStorage2D(n.TEXTURE_2D,mA,le,iA.width,iA.height)}for(let iA=0,_A=x.length;iA<_A;iA++)PA=x[iA],IA?G&&i.texSubImage2D(n.TEXTURE_2D,iA,0,0,WA,ce,PA):i.texImage2D(n.TEXTURE_2D,iA,le,WA,ce,PA);w.generateMipmaps=!1}else if(IA){if(kA){const iA=ae(SA);i.texStorage2D(n.TEXTURE_2D,mA,le,iA.width,iA.height)}G&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,WA,ce,SA)}else i.texImage2D(n.TEXTURE_2D,0,le,WA,ce,SA);u(w)&&l(QA),XA.__version=pA.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function yA(F,w,Z){if(w.image.length!==6)return;const QA=we(F,w),hA=w.source;i.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Z);const pA=t.get(hA);if(hA.version!==pA.__version||QA===!0){i.activeTexture(n.TEXTURE0+Z);const XA=rt.getPrimaries(rt.workingColorSpace),TA=w.colorSpace===Qo?null:rt.getPrimaries(w.colorSpace),VA=w.colorSpace===Qo||XA===TA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,VA);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,SA=w.image[0]&&w.image[0].isDataTexture,WA=[];for(let _A=0;_A<6;_A++)!qe&&!SA?WA[_A]=y(w.image[_A],!0,o.maxCubemapSize):WA[_A]=SA?w.image[_A].image:w.image[_A],WA[_A]=ct(w,WA[_A]);const ce=WA[0],le=s.convert(w.format,w.colorSpace),PA=s.convert(w.type),x=m(w.internalFormat,le,PA,w.colorSpace),IA=w.isVideoTexture!==!0,kA=pA.__version===void 0||QA===!0,G=hA.dataReady;let mA=T(w,ce);jA(n.TEXTURE_CUBE_MAP,w);let iA;if(qe){IA&&kA&&i.texStorage2D(n.TEXTURE_CUBE_MAP,mA,x,ce.width,ce.height);for(let _A=0;_A<6;_A++){iA=WA[_A].mipmaps;for(let JA=0;JA<iA.length;JA++){const HA=iA[JA];w.format!==Ln?le!==null?IA?G&&i.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA,0,0,HA.width,HA.height,le,HA.data):i.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA,x,HA.width,HA.height,0,HA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):IA?G&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA,0,0,HA.width,HA.height,le,PA,HA.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA,x,HA.width,HA.height,0,le,PA,HA.data)}}}else{if(iA=w.mipmaps,IA&&kA){iA.length>0&&mA++;const _A=ae(WA[0]);i.texStorage2D(n.TEXTURE_CUBE_MAP,mA,x,_A.width,_A.height)}for(let _A=0;_A<6;_A++)if(SA){IA?G&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,0,0,0,WA[_A].width,WA[_A].height,le,PA,WA[_A].data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,0,x,WA[_A].width,WA[_A].height,0,le,PA,WA[_A].data);for(let JA=0;JA<iA.length;JA++){const Ie=iA[JA].image[_A].image;IA?G&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA+1,0,0,Ie.width,Ie.height,le,PA,Ie.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA+1,x,Ie.width,Ie.height,0,le,PA,Ie.data)}}else{IA?G&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,0,0,0,le,PA,WA[_A]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,0,x,le,PA,WA[_A]);for(let JA=0;JA<iA.length;JA++){const HA=iA[JA];IA?G&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA+1,0,0,le,PA,HA.image[_A]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_A,JA+1,x,le,PA,HA.image[_A])}}}u(w)&&l(n.TEXTURE_CUBE_MAP),pA.__version=hA.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function GA(F,w,Z,QA,hA,pA){const XA=s.convert(Z.format,Z.colorSpace),TA=s.convert(Z.type),VA=m(Z.internalFormat,XA,TA,Z.colorSpace),qe=t.get(w),SA=t.get(Z);if(SA.__renderTarget=w,!qe.__hasExternalTextures){const WA=Math.max(1,w.width>>pA),ce=Math.max(1,w.height>>pA);hA===n.TEXTURE_3D||hA===n.TEXTURE_2D_ARRAY?i.texImage3D(hA,pA,VA,WA,ce,w.depth,0,XA,TA,null):i.texImage2D(hA,pA,VA,WA,ce,0,XA,TA,null)}i.bindFramebuffer(n.FRAMEBUFFER,F),Le(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,QA,hA,SA.__webglTexture,0,ke(w)):(hA===n.TEXTURE_2D||hA>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&hA<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,QA,hA,SA.__webglTexture,pA),i.bindFramebuffer(n.FRAMEBUFFER,null)}function NA(F,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,F),w.depthBuffer){const QA=w.depthTexture,hA=QA&&QA.isDepthTexture?QA.type:null,pA=D(w.stencilBuffer,hA),XA=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,TA=ke(w);Le(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,TA,pA,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,TA,pA,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pA,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,XA,n.RENDERBUFFER,F)}else{const QA=w.textures;for(let hA=0;hA<QA.length;hA++){const pA=QA[hA],XA=s.convert(pA.format,pA.colorSpace),TA=s.convert(pA.type),VA=m(pA.internalFormat,XA,TA,pA.colorSpace),qe=ke(w);Z&&Le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,VA,w.width,w.height):Le(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,VA,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,VA,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(n.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const QA=t.get(w.depthTexture);QA.__renderTarget=w,(!QA.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),dA(w.depthTexture,0);const hA=QA.__webglTexture,pA=ke(w);if(w.depthTexture.format===Cg)Le(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,hA,0,pA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,hA,0);else if(w.depthTexture.format===Sg)Le(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,hA,0,pA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,hA,0);else throw new Error("Unknown depthTexture format")}function ue(F){const w=t.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const QA=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),QA){const hA=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,QA.removeEventListener("dispose",hA)};QA.addEventListener("dispose",hA),w.__depthDisposeCallback=hA}w.__boundDepthTexture=QA}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");se(w.__webglFramebuffer,F)}else if(Z){w.__webglDepthbuffer=[];for(let QA=0;QA<6;QA++)if(i.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[QA]),w.__webglDepthbuffer[QA]===void 0)w.__webglDepthbuffer[QA]=n.createRenderbuffer(),NA(w.__webglDepthbuffer[QA],F,!1);else{const hA=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pA=w.__webglDepthbuffer[QA];n.bindRenderbuffer(n.RENDERBUFFER,pA),n.framebufferRenderbuffer(n.FRAMEBUFFER,hA,n.RENDERBUFFER,pA)}}else if(i.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),NA(w.__webglDepthbuffer,F,!1);else{const QA=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,hA=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,hA),n.framebufferRenderbuffer(n.FRAMEBUFFER,QA,n.RENDERBUFFER,hA)}i.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(F,w,Z){const QA=t.get(F);w!==void 0&&GA(QA.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ue(F)}function ut(F){const w=F.texture,Z=t.get(F),QA=t.get(w);F.addEventListener("dispose",N);const hA=F.textures,pA=F.isWebGLCubeRenderTarget===!0,XA=hA.length>1;if(XA||(QA.__webglTexture===void 0&&(QA.__webglTexture=n.createTexture()),QA.__version=w.version,g.memory.textures++),pA){Z.__webglFramebuffer=[];for(let TA=0;TA<6;TA++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[TA]=[];for(let VA=0;VA<w.mipmaps.length;VA++)Z.__webglFramebuffer[TA][VA]=n.createFramebuffer()}else Z.__webglFramebuffer[TA]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let TA=0;TA<w.mipmaps.length;TA++)Z.__webglFramebuffer[TA]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(XA)for(let TA=0,VA=hA.length;TA<VA;TA++){const qe=t.get(hA[TA]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),g.memory.textures++)}if(F.samples>0&&Le(F)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let TA=0;TA<hA.length;TA++){const VA=hA[TA];Z.__webglColorRenderbuffer[TA]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[TA]);const qe=s.convert(VA.format,VA.colorSpace),SA=s.convert(VA.type),WA=m(VA.internalFormat,qe,SA,VA.colorSpace,F.isXRRenderTarget===!0),ce=ke(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,WA,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+TA,n.RENDERBUFFER,Z.__webglColorRenderbuffer[TA])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),NA(Z.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pA){i.bindTexture(n.TEXTURE_CUBE_MAP,QA.__webglTexture),jA(n.TEXTURE_CUBE_MAP,w);for(let TA=0;TA<6;TA++)if(w.mipmaps&&w.mipmaps.length>0)for(let VA=0;VA<w.mipmaps.length;VA++)GA(Z.__webglFramebuffer[TA][VA],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+TA,VA);else GA(Z.__webglFramebuffer[TA],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+TA,0);u(w)&&l(n.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(XA){for(let TA=0,VA=hA.length;TA<VA;TA++){const qe=hA[TA],SA=t.get(qe);i.bindTexture(n.TEXTURE_2D,SA.__webglTexture),jA(n.TEXTURE_2D,qe),GA(Z.__webglFramebuffer,F,qe,n.COLOR_ATTACHMENT0+TA,n.TEXTURE_2D,0),u(qe)&&l(n.TEXTURE_2D)}i.unbindTexture()}else{let TA=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(TA=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),i.bindTexture(TA,QA.__webglTexture),jA(TA,w),w.mipmaps&&w.mipmaps.length>0)for(let VA=0;VA<w.mipmaps.length;VA++)GA(Z.__webglFramebuffer[VA],F,w,n.COLOR_ATTACHMENT0,TA,VA);else GA(Z.__webglFramebuffer,F,w,n.COLOR_ATTACHMENT0,TA,0);u(w)&&l(TA),i.unbindTexture()}F.depthBuffer&&ue(F)}function xe(F){const w=F.textures;for(let Z=0,QA=w.length;Z<QA;Z++){const hA=w[Z];if(u(hA)){const pA=f(F),XA=t.get(hA).__webglTexture;i.bindTexture(pA,XA),l(pA),i.unbindTexture()}}}const yt=[],O=[];function Si(F){if(F.samples>0){if(Le(F)===!1){const w=F.textures,Z=F.width,QA=F.height;let hA=n.COLOR_BUFFER_BIT;const pA=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,XA=t.get(F),TA=w.length>1;if(TA)for(let VA=0;VA<w.length;VA++)i.bindFramebuffer(n.FRAMEBUFFER,XA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+VA,n.RENDERBUFFER,null),i.bindFramebuffer(n.FRAMEBUFFER,XA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+VA,n.TEXTURE_2D,null,0);i.bindFramebuffer(n.READ_FRAMEBUFFER,XA.__webglMultisampledFramebuffer),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,XA.__webglFramebuffer);for(let VA=0;VA<w.length;VA++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(hA|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(hA|=n.STENCIL_BUFFER_BIT)),TA){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,XA.__webglColorRenderbuffer[VA]);const qe=t.get(w[VA]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,Z,QA,0,0,Z,QA,hA,n.NEAREST),I===!0&&(yt.length=0,O.length=0,yt.push(n.COLOR_ATTACHMENT0+VA),F.depthBuffer&&F.resolveDepthBuffer===!1&&(yt.push(pA),O.push(pA),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(n.READ_FRAMEBUFFER,null),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),TA)for(let VA=0;VA<w.length;VA++){i.bindFramebuffer(n.FRAMEBUFFER,XA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+VA,n.RENDERBUFFER,XA.__webglColorRenderbuffer[VA]);const qe=t.get(w[VA]).__webglTexture;i.bindFramebuffer(n.FRAMEBUFFER,XA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+VA,n.TEXTURE_2D,qe,0)}i.bindFramebuffer(n.DRAW_FRAMEBUFFER,XA.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&I){const w=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ke(F){return Math.min(o.maxSamples,F.samples)}function Le(F){const w=t.get(F);return F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(F){const w=g.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function ct(F,w){const Z=F.colorSpace,QA=F.format,hA=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Lg&&Z!==Qo&&(rt.getTransfer(Z)===ht?(QA!==Ln||hA!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function ae(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(_.width=F.naturalWidth||F.width,_.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(_.width=F.displayWidth,_.height=F.displayHeight):(_.width=F.width,_.height=F.height),_}this.allocateTextureUnit=X,this.resetTextureUnits=oA,this.setTexture2D=dA,this.setTexture2DArray=nA,this.setTexture3D=fA,this.setTextureCube=H,this.rebindTextures=Fe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Si,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=GA,this.useMultisampledRTT=Le}function sW(n,A){function i(t,o=Qo){let s;const g=rt.getTransfer(o);if(t===Xr)return n.UNSIGNED_BYTE;if(t===dE)return n.UNSIGNED_SHORT_4_4_4_4;if(t===hE)return n.UNSIGNED_SHORT_5_5_5_1;if(t===DP)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===yP)return n.BYTE;if(t===mP)return n.SHORT;if(t===qa)return n.UNSIGNED_SHORT;if(t===QE)return n.INT;if(t===Es)return n.UNSIGNED_INT;if(t===Ar)return n.FLOAT;if(t===eI)return n.HALF_FLOAT;if(t===SP)return n.ALPHA;if(t===wP)return n.RGB;if(t===Ln)return n.RGBA;if(t===RP)return n.LUMINANCE;if(t===MP)return n.LUMINANCE_ALPHA;if(t===Cg)return n.DEPTH_COMPONENT;if(t===Sg)return n.DEPTH_STENCIL;if(t===uE)return n.RED;if(t===fE)return n.RED_INTEGER;if(t===bP)return n.RG;if(t===yE)return n.RG_INTEGER;if(t===mE)return n.RGBA_INTEGER;if(t===EC||t===lC||t===QC||t===dC)if(g===ht)if(s=A.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(t===EC)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===lC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===QC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===dC)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=A.get("WEBGL_compressed_texture_s3tc"),s!==null){if(t===EC)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===lC)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===QC)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===dC)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(t===Hp||t===Kp||t===Pp||t===Jp)if(s=A.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(t===Hp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Kp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Pp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Jp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(t===Op||t===Yp||t===qp)if(s=A.get("WEBGL_compressed_texture_etc"),s!==null){if(t===Op||t===Yp)return g===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===qp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(t===jp||t===Vp||t===Wp||t===zp||t===Zp||t===Xp||t===$p||t===AB||t===eB||t===tB||t===iB||t===nB||t===rB||t===oB)if(s=A.get("WEBGL_compressed_texture_astc"),s!==null){if(t===jp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Vp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Wp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===zp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Zp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Xp)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===$p)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===AB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===eB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===tB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===iB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===nB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===rB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===oB)return g===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(t===hC||t===sB||t===gB)if(s=A.get("EXT_texture_compression_bptc"),s!==null){if(t===hC)return g===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===sB)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===gB)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(t===vP||t===aB||t===IB||t===CB)if(s=A.get("EXT_texture_compression_rgtc"),s!==null){if(t===hC)return s.COMPRESSED_RED_RGTC1_EXT;if(t===aB)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===IB)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===CB)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return t===Dg?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}return{convert:i}}class gW extends ci{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Jr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aW={type:"move"};class m_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const i=this._hand;if(i)for(const t of A.hand.values())this._getHandJoint(i,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,i,t){let o=null,s=null,g=null;const a=this._targetRay,I=this._grip,_=this._hand;if(A&&i.session.visibilityState!=="visible-blurred"){if(_&&A.hand){g=!0;for(const y of A.hand.values()){const u=i.getJointPose(y,t),l=this._getHandJoint(_,y);u!==null&&(l.matrix.fromArray(u.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=u.radius),l.visible=u!==null}const p=_.joints["index-finger-tip"],B=_.joints["thumb-tip"],E=p.position.distanceTo(B.position),Q=.02,h=.005;_.inputState.pinching&&E>Q+h?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!_.inputState.pinching&&E<=Q-h&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else I!==null&&A.gripSpace&&(s=i.getPose(A.gripSpace,t),s!==null&&(I.matrix.fromArray(s.transform.matrix),I.matrix.decompose(I.position,I.rotation,I.scale),I.matrixWorldNeedsUpdate=!0,s.linearVelocity?(I.hasLinearVelocity=!0,I.linearVelocity.copy(s.linearVelocity)):I.hasLinearVelocity=!1,s.angularVelocity?(I.hasAngularVelocity=!0,I.angularVelocity.copy(s.angularVelocity)):I.hasAngularVelocity=!1));a!==null&&(o=i.getPose(A.targetRaySpace,t),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aW)))}return a!==null&&(a.visible=o!==null),I!==null&&(I.visible=s!==null),_!==null&&(_.visible=g!==null),this}_getHandJoint(A,i){if(A.joints[i.jointName]===void 0){const t=new Jr;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[i.jointName]=t,A.add(t)}return A.joints[i.jointName]}}const IW=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CW=`
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
