var sY=Object.defineProperty;var aY=(n,e,i)=>e in n?sY(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var tr=(n,e,i)=>aY(n,typeof e!="symbol"?e+"":e,i);var v2={exports:{}},A_={},b2={exports:{}},qA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=Symbol.for("react.element"),gY=Symbol.for("react.portal"),IY=Symbol.for("react.fragment"),cY=Symbol.for("react.strict_mode"),CY=Symbol.for("react.profiler"),lY=Symbol.for("react.provider"),_Y=Symbol.for("react.context"),pY=Symbol.for("react.forward_ref"),BY=Symbol.for("react.suspense"),EY=Symbol.for("react.memo"),dY=Symbol.for("react.lazy"),iH=Symbol.iterator;function hY(n){return n===null||typeof n!="object"?null:(n=iH&&n[iH]||n["@@iterator"],typeof n=="function"?n:null)}var M2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R2=Object.assign,N2={};function Ug(n,e,i){this.props=n,this.context=e,this.refs=N2,this.updater=i||M2}Ug.prototype.isReactComponent={};Ug.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ug.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function x2(){}x2.prototype=Ug.prototype;function Id(n,e,i){this.props=n,this.context=e,this.refs=N2,this.updater=i||M2}var cd=Id.prototype=new x2;cd.constructor=Id;R2(cd,Ug.prototype);cd.isPureReactComponent=!0;var nH=Array.isArray,L2=Object.prototype.hasOwnProperty,Cd={current:null},F2={key:!0,ref:!0,__self:!0,__source:!0};function T2(n,e,i){var A,o={},s=null,a=null;if(e!=null)for(A in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)L2.call(e,A)&&!F2.hasOwnProperty(A)&&(o[A]=e[A]);var g=arguments.length-2;if(g===1)o.children=i;else if(1<g){for(var I=Array(g),c=0;c<g;c++)I[c]=arguments[c+2];o.children=I}if(n&&n.defaultProps)for(A in g=n.defaultProps,g)o[A]===void 0&&(o[A]=g[A]);return{$$typeof:dc,type:n,key:s,ref:a,props:o,_owner:Cd.current}}function uY(n,e){return{$$typeof:dc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ld(n){return typeof n=="object"&&n!==null&&n.$$typeof===dc}function QY(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(i){return e[i]})}var rH=/\/+/g;function R_(n,e){return typeof n=="object"&&n!==null&&n.key!=null?QY(""+n.key):e.toString(36)}function XC(n,e,i,A,o){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case dc:case gY:a=!0}}if(a)return a=n,o=o(a),n=A===""?"."+R_(a,0):A,nH(o)?(i="",n!=null&&(i=n.replace(rH,"$&/")+"/"),XC(o,e,i,"",function(c){return c})):o!=null&&(ld(o)&&(o=uY(o,i+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(rH,"$&/")+"/")+n)),e.push(o)),1;if(a=0,A=A===""?".":A+":",nH(n))for(var g=0;g<n.length;g++){s=n[g];var I=A+R_(s,g);a+=XC(s,e,i,I,o)}else if(I=hY(n),typeof I=="function")for(n=I.call(n),g=0;!(s=n.next()).done;)s=s.value,I=A+R_(s,g++),a+=XC(s,e,i,I,o);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fc(n,e,i){if(n==null)return n;var A=[],o=0;return XC(n,A,"","",function(s){return e.call(i,s,o++)}),A}function fY(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(i){(n._status===0||n._status===-1)&&(n._status=1,n._result=i)},function(i){(n._status===0||n._status===-1)&&(n._status=2,n._result=i)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Cn={current:null},ZC={transition:null},yY={ReactCurrentDispatcher:Cn,ReactCurrentBatchConfig:ZC,ReactCurrentOwner:Cd};function U2(){throw Error("act(...) is not supported in production builds of React.")}qA.Children={map:Fc,forEach:function(n,e,i){Fc(n,function(){e.apply(this,arguments)},i)},count:function(n){var e=0;return Fc(n,function(){e++}),e},toArray:function(n){return Fc(n,function(e){return e})||[]},only:function(n){if(!ld(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};qA.Component=Ug;qA.Fragment=IY;qA.Profiler=CY;qA.PureComponent=Id;qA.StrictMode=cY;qA.Suspense=BY;qA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yY;qA.act=U2;qA.cloneElement=function(n,e,i){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var A=R2({},n.props),o=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Cd.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var g=n.type.defaultProps;for(I in e)L2.call(e,I)&&!F2.hasOwnProperty(I)&&(A[I]=e[I]===void 0&&g!==void 0?g[I]:e[I])}var I=arguments.length-2;if(I===1)A.children=i;else if(1<I){g=Array(I);for(var c=0;c<I;c++)g[c]=arguments[c+2];A.children=g}return{$$typeof:dc,type:n.type,key:o,ref:s,props:A,_owner:a}};qA.createContext=function(n){return n={$$typeof:_Y,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:lY,_context:n},n.Consumer=n};qA.createElement=T2;qA.createFactory=function(n){var e=T2.bind(null,n);return e.type=n,e};qA.createRef=function(){return{current:null}};qA.forwardRef=function(n){return{$$typeof:pY,render:n}};qA.isValidElement=ld;qA.lazy=function(n){return{$$typeof:dY,_payload:{_status:-1,_result:n},_init:fY}};qA.memo=function(n,e){return{$$typeof:EY,type:n,compare:e===void 0?null:e}};qA.startTransition=function(n){var e=ZC.transition;ZC.transition={};try{n()}finally{ZC.transition=e}};qA.unstable_act=U2;qA.useCallback=function(n,e){return Cn.current.useCallback(n,e)};qA.useContext=function(n){return Cn.current.useContext(n)};qA.useDebugValue=function(){};qA.useDeferredValue=function(n){return Cn.current.useDeferredValue(n)};qA.useEffect=function(n,e){return Cn.current.useEffect(n,e)};qA.useId=function(){return Cn.current.useId()};qA.useImperativeHandle=function(n,e,i){return Cn.current.useImperativeHandle(n,e,i)};qA.useInsertionEffect=function(n,e){return Cn.current.useInsertionEffect(n,e)};qA.useLayoutEffect=function(n,e){return Cn.current.useLayoutEffect(n,e)};qA.useMemo=function(n,e){return Cn.current.useMemo(n,e)};qA.useReducer=function(n,e,i){return Cn.current.useReducer(n,e,i)};qA.useRef=function(n){return Cn.current.useRef(n)};qA.useState=function(n){return Cn.current.useState(n)};qA.useSyncExternalStore=function(n,e,i){return Cn.current.useSyncExternalStore(n,e,i)};qA.useTransition=function(){return Cn.current.useTransition()};qA.version="18.3.1";b2.exports=qA;var G2=b2.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mY=G2,DY=Symbol.for("react.element"),SY=Symbol.for("react.fragment"),wY=Object.prototype.hasOwnProperty,vY=mY.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bY={key:!0,ref:!0,__self:!0,__source:!0};function k2(n,e,i){var A,o={},s=null,a=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(A in e)wY.call(e,A)&&!bY.hasOwnProperty(A)&&(o[A]=e[A]);if(n&&n.defaultProps)for(A in e=n.defaultProps,e)o[A]===void 0&&(o[A]=e[A]);return{$$typeof:DY,type:n,key:s,ref:a,props:o,_owner:vY.current}}A_.Fragment=SY;A_.jsx=k2;A_.jsxs=k2;v2.exports=A_;var o7=v2.exports,H2={exports:{}},qn={},P2={exports:{}},K2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(H,oe){var _e=H.length;H.push(oe);e:for(;0<_e;){var ve=_e-1>>>1,qe=H[ve];if(0<o(qe,oe))H[ve]=oe,H[_e]=qe,_e=ve;else break e}}function i(H){return H.length===0?null:H[0]}function A(H){if(H.length===0)return null;var oe=H[0],_e=H.pop();if(_e!==oe){H[0]=_e;e:for(var ve=0,qe=H.length,vA=qe>>>1;ve<vA;){var ae=2*(ve+1)-1,fe=H[ae],Ge=ae+1,be=H[Ge];if(0>o(fe,_e))Ge<qe&&0>o(be,fe)?(H[ve]=be,H[Ge]=_e,ve=Ge):(H[ve]=fe,H[ae]=_e,ve=ae);else if(Ge<qe&&0>o(be,_e))H[ve]=be,H[Ge]=_e,ve=Ge;else break e}}return oe}function o(H,oe){var _e=H.sortIndex-oe.sortIndex;return _e!==0?_e:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,g=a.now();n.unstable_now=function(){return a.now()-g}}var I=[],c=[],_=1,p=null,B=3,d=!1,Q=!1,y=!1,h=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(H){for(var oe=i(c);oe!==null;){if(oe.callback===null)A(c);else if(oe.startTime<=H)A(c),oe.sortIndex=oe.expirationTime,e(I,oe);else break;oe=i(c)}}function m(H){if(y=!1,f(H),!Q)if(i(I)!==null)Q=!0,W(M);else{var oe=i(c);oe!==null&&de(m,oe.startTime-H)}}function M(H,oe){Q=!1,y&&(y=!1,E(x),x=-1),d=!0;var _e=B;try{for(f(oe),p=i(I);p!==null&&(!(p.expirationTime>oe)||H&&!F());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,B=p.priorityLevel;var qe=ve(p.expirationTime<=oe);oe=n.unstable_now(),typeof qe=="function"?p.callback=qe:p===i(I)&&A(I),f(oe)}else A(I);p=i(I)}if(p!==null)var vA=!0;else{var ae=i(c);ae!==null&&de(m,ae.startTime-oe),vA=!1}return vA}finally{p=null,B=_e,d=!1}}var v=!1,b=null,x=-1,w=5,S=-1;function F(){return!(n.unstable_now()-S<w)}function k(){if(b!==null){var H=n.unstable_now();S=H;var oe=!0;try{oe=b(!0,H)}finally{oe?P():(v=!1,b=null)}}else v=!1}var P;if(typeof u=="function")P=function(){u(k)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ie=z.port2;z.port1.onmessage=k,P=function(){ie.postMessage(null)}}else P=function(){h(k,0)};function W(H){b=H,v||(v=!0,P())}function de(H,oe){x=h(function(){H(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){Q||d||(Q=!0,W(M))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return B},n.unstable_getFirstCallbackNode=function(){return i(I)},n.unstable_next=function(H){switch(B){case 1:case 2:case 3:var oe=3;break;default:oe=B}var _e=B;B=oe;try{return H()}finally{B=_e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var _e=B;B=H;try{return oe()}finally{B=_e}},n.unstable_scheduleCallback=function(H,oe,_e){var ve=n.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?ve+_e:ve):_e=ve,H){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=_e+qe,H={id:_++,callback:oe,priorityLevel:H,startTime:_e,expirationTime:qe,sortIndex:-1},_e>ve?(H.sortIndex=_e,e(c,H),i(I)===null&&H===i(c)&&(y?(E(x),x=-1):y=!0,de(m,_e-ve))):(H.sortIndex=qe,e(I,H),Q||d||(Q=!0,W(M))),H},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(H){var oe=B;return function(){var _e=B;B=oe;try{return H.apply(this,arguments)}finally{B=_e}}}})(K2);P2.exports=K2;var MY=P2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RY=G2,On=MY;function Qe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J2=new Set,zI={};function da(n,e){ug(n,e),ug(n+"Capture",e)}function ug(n,e){for(zI[n]=e,n=0;n<e.length;n++)J2.add(e[n])}var To=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),CB=Object.prototype.hasOwnProperty,NY=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oH={},sH={};function xY(n){return CB.call(sH,n)?!0:CB.call(oH,n)?!1:NY.test(n)?sH[n]=!0:(oH[n]=!0,!1)}function LY(n,e,i,A){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return A?!1:i!==null?!i.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function FY(n,e,i,A){if(e===null||typeof e>"u"||LY(n,e,i,A))return!0;if(A)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,i,A,o,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=A,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ji={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ji[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ji[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ji[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ji[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ji[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ji[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ji[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ji[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ji[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function pd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(_d,pd);Ji[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(_d,pd);Ji[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(_d,pd);Ji[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ji[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Ji.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ji[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function Bd(n,e,i,A){var o=Ji.hasOwnProperty(e)?Ji[e]:null;(o!==null?o.type!==0:A||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FY(e,i,o,A)&&(i=null),A||o===null?xY(e)&&(i===null?n.removeAttribute(e):n.setAttribute(e,""+i)):o.mustUseProperty?n[o.propertyName]=i===null?o.type===3?!1:"":i:(e=o.attributeName,A=o.attributeNamespace,i===null?n.removeAttribute(e):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,A?n.setAttributeNS(A,e,i):n.setAttribute(e,i))))}var Jo=RY.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tc=Symbol.for("react.element"),za=Symbol.for("react.portal"),Wa=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),lB=Symbol.for("react.profiler"),O2=Symbol.for("react.provider"),Y2=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),_B=Symbol.for("react.suspense"),pB=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),q2=Symbol.for("react.offscreen"),aH=Symbol.iterator;function eI(n){return n===null||typeof n!="object"?null:(n=aH&&n[aH]||n["@@iterator"],typeof n=="function"?n:null)}var ei=Object.assign,N_;function DI(n){if(N_===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);N_=e&&e[1]||""}return`
`+N_+n}var x_=!1;function L_(n,e){if(!n||x_)return"";x_=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var A=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){A=c}n.call(e.prototype)}else{try{throw Error()}catch(c){A=c}n()}}catch(c){if(c&&A&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),s=A.stack.split(`
`),a=o.length-1,g=s.length-1;1<=a&&0<=g&&o[a]!==s[g];)g--;for(;1<=a&&0<=g;a--,g--)if(o[a]!==s[g]){if(a!==1||g!==1)do if(a--,g--,0>g||o[a]!==s[g]){var I=`
`+o[a].replace(" at new "," at ");return n.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",n.displayName)),I}while(1<=a&&0<=g);break}}}finally{x_=!1,Error.prepareStackTrace=i}return(n=n?n.displayName||n.name:"")?DI(n):""}function TY(n){switch(n.tag){case 5:return DI(n.type);case 16:return DI("Lazy");case 13:return DI("Suspense");case 19:return DI("SuspenseList");case 0:case 2:case 15:return n=L_(n.type,!1),n;case 11:return n=L_(n.type.render,!1),n;case 1:return n=L_(n.type,!0),n;default:return""}}function BB(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Wa:return"Fragment";case za:return"Portal";case lB:return"Profiler";case Ed:return"StrictMode";case _B:return"Suspense";case pB:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Y2:return(n.displayName||"Context")+".Consumer";case O2:return(n._context.displayName||"Context")+".Provider";case dd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case hd:return e=n.displayName||null,e!==null?e:BB(n.type)||"Memo";case rs:e=n._payload,n=n._init;try{return BB(n(e))}catch{}}return null}function UY(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return BB(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ds(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function j2(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GY(n){var e=j2(n)?"checked":"value",i=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),A=""+n[e];if(!n.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,s=i.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){A=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:i.enumerable}),{getValue:function(){return A},setValue:function(a){A=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Uc(n){n._valueTracker||(n._valueTracker=GY(n))}function V2(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var i=e.getValue(),A="";return n&&(A=j2(n)?n.checked?"true":"false":n.value),n=A,n!==i?(e.setValue(n),!0):!1}function dl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function EB(n,e){var i=e.checked;return ei({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??n._wrapperState.initialChecked})}function gH(n,e){var i=e.defaultValue==null?"":e.defaultValue,A=e.checked!=null?e.checked:e.defaultChecked;i=Ds(e.value!=null?e.value:i),n._wrapperState={initialChecked:A,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z2(n,e){e=e.checked,e!=null&&Bd(n,"checked",e,!1)}function dB(n,e){z2(n,e);var i=Ds(e.value),A=e.type;if(i!=null)A==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+i):n.value!==""+i&&(n.value=""+i);else if(A==="submit"||A==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?hB(n,e.type,i):e.hasOwnProperty("defaultValue")&&hB(n,e.type,Ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function IH(n,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var A=e.type;if(!(A!=="submit"&&A!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,i||e===n.value||(n.value=e),n.defaultValue=e}i=n.name,i!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,i!==""&&(n.name=i)}function hB(n,e,i){(e!=="number"||dl(n.ownerDocument)!==n)&&(i==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+i&&(n.defaultValue=""+i))}var SI=Array.isArray;function gg(n,e,i,A){if(n=n.options,e){e={};for(var o=0;o<i.length;o++)e["$"+i[o]]=!0;for(i=0;i<n.length;i++)o=e.hasOwnProperty("$"+n[i].value),n[i].selected!==o&&(n[i].selected=o),o&&A&&(n[i].defaultSelected=!0)}else{for(i=""+Ds(i),e=null,o=0;o<n.length;o++){if(n[o].value===i){n[o].selected=!0,A&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function uB(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Qe(91));return ei({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cH(n,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(Qe(92));if(SI(i)){if(1<i.length)throw Error(Qe(93));i=i[0]}e=i}e==null&&(e=""),i=e}n._wrapperState={initialValue:Ds(i)}}function W2(n,e){var i=Ds(e.value),A=Ds(e.defaultValue);i!=null&&(i=""+i,i!==n.value&&(n.value=i),e.defaultValue==null&&n.defaultValue!==i&&(n.defaultValue=i)),A!=null&&(n.defaultValue=""+A)}function CH(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function X2(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function QB(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?X2(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Gc,Z2=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,A,o){MSApp.execUnsafeLocalFunction(function(){return n(e,i,A,o)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Gc=Gc||document.createElement("div"),Gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function WI(n,e){if(e){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=e;return}}n.textContent=e}var xI={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kY=["Webkit","ms","Moz","O"];Object.keys(xI).forEach(function(n){kY.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xI[e]=xI[n]})});function $2(n,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||xI.hasOwnProperty(n)&&xI[n]?(""+e).trim():e+"px"}function eK(n,e){n=n.style;for(var i in e)if(e.hasOwnProperty(i)){var A=i.indexOf("--")===0,o=$2(i,e[i],A);i==="float"&&(i="cssFloat"),A?n.setProperty(i,o):n[i]=o}}var HY=ei({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fB(n,e){if(e){if(HY[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Qe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Qe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Qe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Qe(62))}}function yB(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mB=null;function ud(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var DB=null,Ig=null,cg=null;function lH(n){if(n=Qc(n)){if(typeof DB!="function")throw Error(Qe(280));var e=n.stateNode;e&&(e=o_(e),DB(n.stateNode,n.type,e))}}function AK(n){Ig?cg?cg.push(n):cg=[n]:Ig=n}function tK(){if(Ig){var n=Ig,e=cg;if(cg=Ig=null,lH(n),e)for(n=0;n<e.length;n++)lH(e[n])}}function iK(n,e){return n(e)}function nK(){}var F_=!1;function rK(n,e,i){if(F_)return n(e,i);F_=!0;try{return iK(n,e,i)}finally{F_=!1,(Ig!==null||cg!==null)&&(nK(),tK())}}function XI(n,e){var i=n.stateNode;if(i===null)return null;var A=o_(i);if(A===null)return null;i=A[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(A=!A.disabled)||(n=n.type,A=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!A;break e;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(Qe(231,e,typeof i));return i}var SB=!1;if(To)try{var AI={};Object.defineProperty(AI,"passive",{get:function(){SB=!0}}),window.addEventListener("test",AI,AI),window.removeEventListener("test",AI,AI)}catch{SB=!1}function PY(n,e,i,A,o,s,a,g,I){var c=Array.prototype.slice.call(arguments,3);try{e.apply(i,c)}catch(_){this.onError(_)}}var LI=!1,hl=null,ul=!1,wB=null,KY={onError:function(n){LI=!0,hl=n}};function JY(n,e,i,A,o,s,a,g,I){LI=!1,hl=null,PY.apply(KY,arguments)}function OY(n,e,i,A,o,s,a,g,I){if(JY.apply(this,arguments),LI){if(LI){var c=hl;LI=!1,hl=null}else throw Error(Qe(198));ul||(ul=!0,wB=c)}}function ha(n){var e=n,i=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(i=e.return),n=e.return;while(n)}return e.tag===3?i:null}function oK(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function _H(n){if(ha(n)!==n)throw Error(Qe(188))}function YY(n){var e=n.alternate;if(!e){if(e=ha(n),e===null)throw Error(Qe(188));return e!==n?null:n}for(var i=n,A=e;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(A=o.return,A!==null){i=A;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return _H(o),n;if(s===A)return _H(o),e;s=s.sibling}throw Error(Qe(188))}if(i.return!==A.return)i=o,A=s;else{for(var a=!1,g=o.child;g;){if(g===i){a=!0,i=o,A=s;break}if(g===A){a=!0,A=o,i=s;break}g=g.sibling}if(!a){for(g=s.child;g;){if(g===i){a=!0,i=s,A=o;break}if(g===A){a=!0,A=s,i=o;break}g=g.sibling}if(!a)throw Error(Qe(189))}}if(i.alternate!==A)throw Error(Qe(190))}if(i.tag!==3)throw Error(Qe(188));return i.stateNode.current===i?n:e}function sK(n){return n=YY(n),n!==null?aK(n):null}function aK(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=aK(n);if(e!==null)return e;n=n.sibling}return null}var gK=On.unstable_scheduleCallback,pH=On.unstable_cancelCallback,qY=On.unstable_shouldYield,jY=On.unstable_requestPaint,ci=On.unstable_now,VY=On.unstable_getCurrentPriorityLevel,Qd=On.unstable_ImmediatePriority,IK=On.unstable_UserBlockingPriority,Ql=On.unstable_NormalPriority,zY=On.unstable_LowPriority,cK=On.unstable_IdlePriority,t_=null,to=null;function WY(n){if(to&&typeof to.onCommitFiberRoot=="function")try{to.onCommitFiberRoot(t_,n,void 0,(n.current.flags&128)===128)}catch{}}var Nr=Math.clz32?Math.clz32:$Y,XY=Math.log,ZY=Math.LN2;function $Y(n){return n>>>=0,n===0?32:31-(XY(n)/ZY|0)|0}var kc=64,Hc=4194304;function wI(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function fl(n,e){var i=n.pendingLanes;if(i===0)return 0;var A=0,o=n.suspendedLanes,s=n.pingedLanes,a=i&268435455;if(a!==0){var g=a&~o;g!==0?A=wI(g):(s&=a,s!==0&&(A=wI(s)))}else a=i&~o,a!==0?A=wI(a):s!==0&&(A=wI(s));if(A===0)return 0;if(e!==0&&e!==A&&!(e&o)&&(o=A&-A,s=e&-e,o>=s||o===16&&(s&4194240)!==0))return e;if(A&4&&(A|=i&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=A;0<e;)i=31-Nr(e),o=1<<i,A|=n[i],e&=~o;return A}function e3(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A3(n,e){for(var i=n.suspendedLanes,A=n.pingedLanes,o=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Nr(s),g=1<<a,I=o[a];I===-1?(!(g&i)||g&A)&&(o[a]=e3(g,e)):I<=e&&(n.expiredLanes|=g),s&=~g}}function vB(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function CK(){var n=kc;return kc<<=1,!(kc&4194240)&&(kc=64),n}function T_(n){for(var e=[],i=0;31>i;i++)e.push(n);return e}function hc(n,e,i){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Nr(e),n[e]=i}function t3(n,e){var i=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var A=n.eventTimes;for(n=n.expirationTimes;0<i;){var o=31-Nr(i),s=1<<o;e[o]=0,A[o]=-1,n[o]=-1,i&=~s}}function fd(n,e){var i=n.entangledLanes|=e;for(n=n.entanglements;i;){var A=31-Nr(i),o=1<<A;o&e|n[A]&e&&(n[A]|=e),i&=~o}}var Et=0;function lK(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _K,yd,pK,BK,EK,bB=!1,Pc=[],Bs=null,Es=null,ds=null,ZI=new Map,$I=new Map,as=[],i3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function BH(n,e){switch(n){case"focusin":case"focusout":Bs=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":ZI.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$I.delete(e.pointerId)}}function tI(n,e,i,A,o,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:i,eventSystemFlags:A,nativeEvent:s,targetContainers:[o]},e!==null&&(e=Qc(e),e!==null&&yd(e)),n):(n.eventSystemFlags|=A,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function n3(n,e,i,A,o){switch(e){case"focusin":return Bs=tI(Bs,n,e,i,A,o),!0;case"dragenter":return Es=tI(Es,n,e,i,A,o),!0;case"mouseover":return ds=tI(ds,n,e,i,A,o),!0;case"pointerover":var s=o.pointerId;return ZI.set(s,tI(ZI.get(s)||null,n,e,i,A,o)),!0;case"gotpointercapture":return s=o.pointerId,$I.set(s,tI($I.get(s)||null,n,e,i,A,o)),!0}return!1}function dK(n){var e=ea(n.target);if(e!==null){var i=ha(e);if(i!==null){if(e=i.tag,e===13){if(e=oK(i),e!==null){n.blockedOn=e,EK(n.priority,function(){pK(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $C(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var i=MB(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(i===null){i=n.nativeEvent;var A=new i.constructor(i.type,i);mB=A,i.target.dispatchEvent(A),mB=null}else return e=Qc(i),e!==null&&yd(e),n.blockedOn=i,!1;e.shift()}return!0}function EH(n,e,i){$C(n)&&i.delete(e)}function r3(){bB=!1,Bs!==null&&$C(Bs)&&(Bs=null),Es!==null&&$C(Es)&&(Es=null),ds!==null&&$C(ds)&&(ds=null),ZI.forEach(EH),$I.forEach(EH)}function iI(n,e){n.blockedOn===e&&(n.blockedOn=null,bB||(bB=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,r3)))}function ec(n){function e(o){return iI(o,n)}if(0<Pc.length){iI(Pc[0],n);for(var i=1;i<Pc.length;i++){var A=Pc[i];A.blockedOn===n&&(A.blockedOn=null)}}for(Bs!==null&&iI(Bs,n),Es!==null&&iI(Es,n),ds!==null&&iI(ds,n),ZI.forEach(e),$I.forEach(e),i=0;i<as.length;i++)A=as[i],A.blockedOn===n&&(A.blockedOn=null);for(;0<as.length&&(i=as[0],i.blockedOn===null);)dK(i),i.blockedOn===null&&as.shift()}var Cg=Jo.ReactCurrentBatchConfig,yl=!0;function o3(n,e,i,A){var o=Et,s=Cg.transition;Cg.transition=null;try{Et=1,md(n,e,i,A)}finally{Et=o,Cg.transition=s}}function s3(n,e,i,A){var o=Et,s=Cg.transition;Cg.transition=null;try{Et=4,md(n,e,i,A)}finally{Et=o,Cg.transition=s}}function md(n,e,i,A){if(yl){var o=MB(n,e,i,A);if(o===null)q_(n,e,A,ml,i),BH(n,A);else if(n3(o,n,e,i,A))A.stopPropagation();else if(BH(n,A),e&4&&-1<i3.indexOf(n)){for(;o!==null;){var s=Qc(o);if(s!==null&&_K(s),s=MB(n,e,i,A),s===null&&q_(n,e,A,ml,i),s===o)break;o=s}o!==null&&A.stopPropagation()}else q_(n,e,A,null,i)}}var ml=null;function MB(n,e,i,A){if(ml=null,n=ud(A),n=ea(n),n!==null)if(e=ha(n),e===null)n=null;else if(i=e.tag,i===13){if(n=oK(e),n!==null)return n;n=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ml=n,null}function hK(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VY()){case Qd:return 1;case IK:return 4;case Ql:case zY:return 16;case cK:return 536870912;default:return 16}default:return 16}}var cs=null,Dd=null,el=null;function uK(){if(el)return el;var n,e=Dd,i=e.length,A,o="value"in cs?cs.value:cs.textContent,s=o.length;for(n=0;n<i&&e[n]===o[n];n++);var a=i-n;for(A=1;A<=a&&e[i-A]===o[s-A];A++);return el=o.slice(n,1<A?1-A:void 0)}function Al(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Kc(){return!0}function dH(){return!1}function jn(n){function e(i,A,o,s,a){this._reactName=i,this._targetInst=o,this.type=A,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var g in n)n.hasOwnProperty(g)&&(i=n[g],this[g]=i?i(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kc:dH,this.isPropagationStopped=dH,this}return ei(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Kc)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Kc)},persist:function(){},isPersistent:Kc}),e}var Gg={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=jn(Gg),uc=ei({},Gg,{view:0,detail:0}),a3=jn(uc),U_,G_,nI,i_=ei({},uc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nI&&(nI&&n.type==="mousemove"?(U_=n.screenX-nI.screenX,G_=n.screenY-nI.screenY):G_=U_=0,nI=n),U_)},movementY:function(n){return"movementY"in n?n.movementY:G_}}),hH=jn(i_),g3=ei({},i_,{dataTransfer:0}),I3=jn(g3),c3=ei({},uc,{relatedTarget:0}),k_=jn(c3),C3=ei({},Gg,{animationName:0,elapsedTime:0,pseudoElement:0}),l3=jn(C3),_3=ei({},Gg,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p3=jn(_3),B3=ei({},Gg,{data:0}),uH=jn(B3),E3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u3(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=h3[n])?!!e[n]:!1}function wd(){return u3}var Q3=ei({},uc,{key:function(n){if(n.key){var e=E3[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?d3[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(n){return n.type==="keypress"?Al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f3=jn(Q3),y3=ei({},i_,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),QH=jn(y3),m3=ei({},uc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),D3=jn(m3),S3=ei({},Gg,{propertyName:0,elapsedTime:0,pseudoElement:0}),w3=jn(S3),v3=ei({},i_,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),b3=jn(v3),M3=[9,13,27,32],vd=To&&"CompositionEvent"in window,FI=null;To&&"documentMode"in document&&(FI=document.documentMode);var R3=To&&"TextEvent"in window&&!FI,QK=To&&(!vd||FI&&8<FI&&11>=FI),fH=" ",yH=!1;function fK(n,e){switch(n){case"keyup":return M3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yK(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xa=!1;function N3(n,e){switch(n){case"compositionend":return yK(e);case"keypress":return e.which!==32?null:(yH=!0,fH);case"textInput":return n=e.data,n===fH&&yH?null:n;default:return null}}function x3(n,e){if(Xa)return n==="compositionend"||!vd&&fK(n,e)?(n=uK(),el=Dd=cs=null,Xa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return QK&&e.locale!=="ko"?null:e.data;default:return null}}var L3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mH(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!L3[n.type]:e==="textarea"}function mK(n,e,i,A){AK(A),e=Dl(e,"onChange"),0<e.length&&(i=new Sd("onChange","change",null,i,A),n.push({event:i,listeners:e}))}var TI=null,Ac=null;function F3(n){FK(n,0)}function n_(n){var e=eg(n);if(V2(e))return n}function T3(n,e){if(n==="change")return e}var DK=!1;if(To){var H_;if(To){var P_="oninput"in document;if(!P_){var DH=document.createElement("div");DH.setAttribute("oninput","return;"),P_=typeof DH.oninput=="function"}H_=P_}else H_=!1;DK=H_&&(!document.documentMode||9<document.documentMode)}function SH(){TI&&(TI.detachEvent("onpropertychange",SK),Ac=TI=null)}function SK(n){if(n.propertyName==="value"&&n_(Ac)){var e=[];mK(e,Ac,n,ud(n)),rK(F3,e)}}function U3(n,e,i){n==="focusin"?(SH(),TI=e,Ac=i,TI.attachEvent("onpropertychange",SK)):n==="focusout"&&SH()}function G3(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return n_(Ac)}function k3(n,e){if(n==="click")return n_(e)}function H3(n,e){if(n==="input"||n==="change")return n_(e)}function P3(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fr=typeof Object.is=="function"?Object.is:P3;function tc(n,e){if(Fr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var i=Object.keys(n),A=Object.keys(e);if(i.length!==A.length)return!1;for(A=0;A<i.length;A++){var o=i[A];if(!CB.call(e,o)||!Fr(n[o],e[o]))return!1}return!0}function wH(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vH(n,e){var i=wH(n);n=0;for(var A;i;){if(i.nodeType===3){if(A=n+i.textContent.length,n<=e&&A>=e)return{node:i,offset:e-n};n=A}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=wH(i)}}function wK(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wK(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function vK(){for(var n=window,e=dl();e instanceof n.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)n=e.contentWindow;else break;e=dl(n.document)}return e}function bd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function K3(n){var e=vK(),i=n.focusedElem,A=n.selectionRange;if(e!==i&&i&&i.ownerDocument&&wK(i.ownerDocument.documentElement,i)){if(A!==null&&bd(i)){if(e=A.start,n=A.end,n===void 0&&(n=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(n,i.value.length);else if(n=(e=i.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=i.textContent.length,s=Math.min(A.start,o);A=A.end===void 0?s:Math.min(A.end,o),!n.extend&&s>A&&(o=A,A=s,s=o),o=vH(i,s);var a=vH(i,A);o&&a&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),s>A?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=i;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)n=e[i],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var J3=To&&"documentMode"in document&&11>=document.documentMode,Za=null,RB=null,UI=null,NB=!1;function bH(n,e,i){var A=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;NB||Za==null||Za!==dl(A)||(A=Za,"selectionStart"in A&&bd(A)?A={start:A.selectionStart,end:A.selectionEnd}:(A=(A.ownerDocument&&A.ownerDocument.defaultView||window).getSelection(),A={anchorNode:A.anchorNode,anchorOffset:A.anchorOffset,focusNode:A.focusNode,focusOffset:A.focusOffset}),UI&&tc(UI,A)||(UI=A,A=Dl(RB,"onSelect"),0<A.length&&(e=new Sd("onSelect","select",null,e,i),n.push({event:e,listeners:A}),e.target=Za)))}function Jc(n,e){var i={};return i[n.toLowerCase()]=e.toLowerCase(),i["Webkit"+n]="webkit"+e,i["Moz"+n]="moz"+e,i}var $a={animationend:Jc("Animation","AnimationEnd"),animationiteration:Jc("Animation","AnimationIteration"),animationstart:Jc("Animation","AnimationStart"),transitionend:Jc("Transition","TransitionEnd")},K_={},bK={};To&&(bK=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function r_(n){if(K_[n])return K_[n];if(!$a[n])return n;var e=$a[n],i;for(i in e)if(e.hasOwnProperty(i)&&i in bK)return K_[n]=e[i];return n}var MK=r_("animationend"),RK=r_("animationiteration"),NK=r_("animationstart"),xK=r_("transitionend"),LK=new Map,MH="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(n,e){LK.set(n,e),da(e,[n])}for(var J_=0;J_<MH.length;J_++){var O_=MH[J_],O3=O_.toLowerCase(),Y3=O_[0].toUpperCase()+O_.slice(1);vs(O3,"on"+Y3)}vs(MK,"onAnimationEnd");vs(RK,"onAnimationIteration");vs(NK,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(xK,"onTransitionEnd");ug("onMouseEnter",["mouseout","mouseover"]);ug("onMouseLeave",["mouseout","mouseover"]);ug("onPointerEnter",["pointerout","pointerover"]);ug("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vI="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q3=new Set("cancel close invalid load scroll toggle".split(" ").concat(vI));function RH(n,e,i){var A=n.type||"unknown-event";n.currentTarget=i,OY(A,e,void 0,n),n.currentTarget=null}function FK(n,e){e=(e&4)!==0;for(var i=0;i<n.length;i++){var A=n[i],o=A.event;A=A.listeners;e:{var s=void 0;if(e)for(var a=A.length-1;0<=a;a--){var g=A[a],I=g.instance,c=g.currentTarget;if(g=g.listener,I!==s&&o.isPropagationStopped())break e;RH(o,g,c),s=I}else for(a=0;a<A.length;a++){if(g=A[a],I=g.instance,c=g.currentTarget,g=g.listener,I!==s&&o.isPropagationStopped())break e;RH(o,g,c),s=I}}}if(ul)throw n=wB,ul=!1,wB=null,n}function Nt(n,e){var i=e[UB];i===void 0&&(i=e[UB]=new Set);var A=n+"__bubble";i.has(A)||(TK(e,n,2,!1),i.add(A))}function Y_(n,e,i){var A=0;e&&(A|=4),TK(i,n,A,e)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function ic(n){if(!n[Oc]){n[Oc]=!0,J2.forEach(function(i){i!=="selectionchange"&&(q3.has(i)||Y_(i,!1,n),Y_(i,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Oc]||(e[Oc]=!0,Y_("selectionchange",!1,e))}}function TK(n,e,i,A){switch(hK(e)){case 1:var o=o3;break;case 4:o=s3;break;default:o=md}i=o.bind(null,e,i,n),o=void 0,!SB||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),A?o!==void 0?n.addEventListener(e,i,{capture:!0,passive:o}):n.addEventListener(e,i,!0):o!==void 0?n.addEventListener(e,i,{passive:o}):n.addEventListener(e,i,!1)}function q_(n,e,i,A,o){var s=A;if(!(e&1)&&!(e&2)&&A!==null)e:for(;;){if(A===null)return;var a=A.tag;if(a===3||a===4){var g=A.stateNode.containerInfo;if(g===o||g.nodeType===8&&g.parentNode===o)break;if(a===4)for(a=A.return;a!==null;){var I=a.tag;if((I===3||I===4)&&(I=a.stateNode.containerInfo,I===o||I.nodeType===8&&I.parentNode===o))return;a=a.return}for(;g!==null;){if(a=ea(g),a===null)return;if(I=a.tag,I===5||I===6){A=s=a;continue e}g=g.parentNode}}A=A.return}rK(function(){var c=s,_=ud(i),p=[];e:{var B=LK.get(n);if(B!==void 0){var d=Sd,Q=n;switch(n){case"keypress":if(Al(i)===0)break e;case"keydown":case"keyup":d=f3;break;case"focusin":Q="focus",d=k_;break;case"focusout":Q="blur",d=k_;break;case"beforeblur":case"afterblur":d=k_;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=hH;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=I3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=D3;break;case MK:case RK:case NK:d=l3;break;case xK:d=w3;break;case"scroll":d=a3;break;case"wheel":d=b3;break;case"copy":case"cut":case"paste":d=p3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=QH}var y=(e&4)!==0,h=!y&&n==="scroll",E=y?B!==null?B+"Capture":null:B;y=[];for(var u=c,f;u!==null;){f=u;var m=f.stateNode;if(f.tag===5&&m!==null&&(f=m,E!==null&&(m=XI(u,E),m!=null&&y.push(nc(u,m,f)))),h)break;u=u.return}0<y.length&&(B=new d(B,Q,null,i,_),p.push({event:B,listeners:y}))}}if(!(e&7)){e:{if(B=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",B&&i!==mB&&(Q=i.relatedTarget||i.fromElement)&&(ea(Q)||Q[Uo]))break e;if((d||B)&&(B=_.window===_?_:(B=_.ownerDocument)?B.defaultView||B.parentWindow:window,d?(Q=i.relatedTarget||i.toElement,d=c,Q=Q?ea(Q):null,Q!==null&&(h=ha(Q),Q!==h||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(d=null,Q=c),d!==Q)){if(y=hH,m="onMouseLeave",E="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(y=QH,m="onPointerLeave",E="onPointerEnter",u="pointer"),h=d==null?B:eg(d),f=Q==null?B:eg(Q),B=new y(m,u+"leave",d,i,_),B.target=h,B.relatedTarget=f,m=null,ea(_)===c&&(y=new y(E,u+"enter",Q,i,_),y.target=f,y.relatedTarget=h,m=y),h=m,d&&Q)A:{for(y=d,E=Q,u=0,f=y;f;f=fa(f))u++;for(f=0,m=E;m;m=fa(m))f++;for(;0<u-f;)y=fa(y),u--;for(;0<f-u;)E=fa(E),f--;for(;u--;){if(y===E||E!==null&&y===E.alternate)break A;y=fa(y),E=fa(E)}y=null}else y=null;d!==null&&NH(p,B,d,y,!1),Q!==null&&h!==null&&NH(p,h,Q,y,!0)}}e:{if(B=c?eg(c):window,d=B.nodeName&&B.nodeName.toLowerCase(),d==="select"||d==="input"&&B.type==="file")var M=T3;else if(mH(B))if(DK)M=H3;else{M=G3;var v=U3}else(d=B.nodeName)&&d.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(M=k3);if(M&&(M=M(n,c))){mK(p,M,i,_);break e}v&&v(n,B,c),n==="focusout"&&(v=B._wrapperState)&&v.controlled&&B.type==="number"&&hB(B,"number",B.value)}switch(v=c?eg(c):window,n){case"focusin":(mH(v)||v.contentEditable==="true")&&(Za=v,RB=c,UI=null);break;case"focusout":UI=RB=Za=null;break;case"mousedown":NB=!0;break;case"contextmenu":case"mouseup":case"dragend":NB=!1,bH(p,i,_);break;case"selectionchange":if(J3)break;case"keydown":case"keyup":bH(p,i,_)}var b;if(vd)e:{switch(n){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xa?fK(n,i)&&(x="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(x="onCompositionStart");x&&(QK&&i.locale!=="ko"&&(Xa||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xa&&(b=uK()):(cs=_,Dd="value"in cs?cs.value:cs.textContent,Xa=!0)),v=Dl(c,x),0<v.length&&(x=new uH(x,n,null,i,_),p.push({event:x,listeners:v}),b?x.data=b:(b=yK(i),b!==null&&(x.data=b)))),(b=R3?N3(n,i):x3(n,i))&&(c=Dl(c,"onBeforeInput"),0<c.length&&(_=new uH("onBeforeInput","beforeinput",null,i,_),p.push({event:_,listeners:c}),_.data=b))}FK(p,e)})}function nc(n,e,i){return{instance:n,listener:e,currentTarget:i}}function Dl(n,e){for(var i=e+"Capture",A=[];n!==null;){var o=n,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=XI(n,i),s!=null&&A.unshift(nc(n,s,o)),s=XI(n,e),s!=null&&A.push(nc(n,s,o))),n=n.return}return A}function fa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function NH(n,e,i,A,o){for(var s=e._reactName,a=[];i!==null&&i!==A;){var g=i,I=g.alternate,c=g.stateNode;if(I!==null&&I===A)break;g.tag===5&&c!==null&&(g=c,o?(I=XI(i,s),I!=null&&a.unshift(nc(i,I,g))):o||(I=XI(i,s),I!=null&&a.push(nc(i,I,g)))),i=i.return}a.length!==0&&n.push({event:e,listeners:a})}var j3=/\r\n?/g,V3=/\u0000|\uFFFD/g;function xH(n){return(typeof n=="string"?n:""+n).replace(j3,`
`).replace(V3,"")}function Yc(n,e,i){if(e=xH(e),xH(n)!==e&&i)throw Error(Qe(425))}function Sl(){}var xB=null,LB=null;function FB(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var TB=typeof setTimeout=="function"?setTimeout:void 0,z3=typeof clearTimeout=="function"?clearTimeout:void 0,LH=typeof Promise=="function"?Promise:void 0,W3=typeof queueMicrotask=="function"?queueMicrotask:typeof LH<"u"?function(n){return LH.resolve(null).then(n).catch(X3)}:TB;function X3(n){setTimeout(function(){throw n})}function j_(n,e){var i=e,A=0;do{var o=i.nextSibling;if(n.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(A===0){n.removeChild(o),ec(e);return}A--}else i!=="$"&&i!=="$?"&&i!=="$!"||A++;i=o}while(i);ec(e)}function hs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function FH(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return n;e--}else i==="/$"&&e++}n=n.previousSibling}return null}var kg=Math.random().toString(36).slice(2),Xr="__reactFiber$"+kg,rc="__reactProps$"+kg,Uo="__reactContainer$"+kg,UB="__reactEvents$"+kg,Z3="__reactListeners$"+kg,$3="__reactHandles$"+kg;function ea(n){var e=n[Xr];if(e)return e;for(var i=n.parentNode;i;){if(e=i[Uo]||i[Xr]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(n=FH(n);n!==null;){if(i=n[Xr])return i;n=FH(n)}return e}n=i,i=n.parentNode}return null}function Qc(n){return n=n[Xr]||n[Uo],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function eg(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Qe(33))}function o_(n){return n[rc]||null}var GB=[],Ag=-1;function bs(n){return{current:n}}function Ft(n){0>Ag||(n.current=GB[Ag],GB[Ag]=null,Ag--)}function Dt(n,e){Ag++,GB[Ag]=n.current,n.current=e}var Ss={},tn=bs(Ss),bn=bs(!1),aa=Ss;function Qg(n,e){var i=n.type.contextTypes;if(!i)return Ss;var A=n.stateNode;if(A&&A.__reactInternalMemoizedUnmaskedChildContext===e)return A.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in i)o[s]=e[s];return A&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=o),o}function Mn(n){return n=n.childContextTypes,n!=null}function wl(){Ft(bn),Ft(tn)}function TH(n,e,i){if(tn.current!==Ss)throw Error(Qe(168));Dt(tn,e),Dt(bn,i)}function UK(n,e,i){var A=n.stateNode;if(e=e.childContextTypes,typeof A.getChildContext!="function")return i;A=A.getChildContext();for(var o in A)if(!(o in e))throw Error(Qe(108,UY(n)||"Unknown",o));return ei({},i,A)}function vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ss,aa=tn.current,Dt(tn,n),Dt(bn,bn.current),!0}function UH(n,e,i){var A=n.stateNode;if(!A)throw Error(Qe(169));i?(n=UK(n,e,aa),A.__reactInternalMemoizedMergedChildContext=n,Ft(bn),Ft(tn),Dt(tn,n)):Ft(bn),Dt(bn,i)}var mo=null,s_=!1,V_=!1;function GK(n){mo===null?mo=[n]:mo.push(n)}function eq(n){s_=!0,GK(n)}function Ms(){if(!V_&&mo!==null){V_=!0;var n=0,e=Et;try{var i=mo;for(Et=1;n<i.length;n++){var A=i[n];do A=A(!0);while(A!==null)}mo=null,s_=!1}catch(o){throw mo!==null&&(mo=mo.slice(n+1)),gK(Qd,Ms),o}finally{Et=e,V_=!1}}return null}var tg=[],ig=0,bl=null,Ml=0,rr=[],or=0,ga=null,So=1,wo="";function Vs(n,e){tg[ig++]=Ml,tg[ig++]=bl,bl=n,Ml=e}function kK(n,e,i){rr[or++]=So,rr[or++]=wo,rr[or++]=ga,ga=n;var A=So;n=wo;var o=32-Nr(A)-1;A&=~(1<<o),i+=1;var s=32-Nr(e)+o;if(30<s){var a=o-o%5;s=(A&(1<<a)-1).toString(32),A>>=a,o-=a,So=1<<32-Nr(e)+o|i<<o|A,wo=s+n}else So=1<<s|i<<o|A,wo=n}function Md(n){n.return!==null&&(Vs(n,1),kK(n,1,0))}function Rd(n){for(;n===bl;)bl=tg[--ig],tg[ig]=null,Ml=tg[--ig],tg[ig]=null;for(;n===ga;)ga=rr[--or],rr[or]=null,wo=rr[--or],rr[or]=null,So=rr[--or],rr[or]=null}var Kn=null,kn=null,Wt=!1,Mr=null;function HK(n,e){var i=gr(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=n,e=n.deletions,e===null?(n.deletions=[i],n.flags|=16):e.push(i)}function GH(n,e){switch(n.tag){case 5:var i=n.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Kn=n,kn=hs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Kn=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=ga!==null?{id:So,overflow:wo}:null,n.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=gr(18,null,null,0),i.stateNode=e,i.return=n,n.child=i,Kn=n,kn=null,!0):!1;default:return!1}}function kB(n){return(n.mode&1)!==0&&(n.flags&128)===0}function HB(n){if(Wt){var e=kn;if(e){var i=e;if(!GH(n,e)){if(kB(n))throw Error(Qe(418));e=hs(i.nextSibling);var A=Kn;e&&GH(n,e)?HK(A,i):(n.flags=n.flags&-4097|2,Wt=!1,Kn=n)}}else{if(kB(n))throw Error(Qe(418));n.flags=n.flags&-4097|2,Wt=!1,Kn=n}}}function kH(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function qc(n){if(n!==Kn)return!1;if(!Wt)return kH(n),Wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!FB(n.type,n.memoizedProps)),e&&(e=kn)){if(kB(n))throw PK(),Error(Qe(418));for(;e;)HK(n,e),e=hs(e.nextSibling)}if(kH(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Qe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"){if(e===0){kn=hs(n.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=Kn?hs(n.stateNode.nextSibling):null;return!0}function PK(){for(var n=kn;n;)n=hs(n.nextSibling)}function fg(){kn=Kn=null,Wt=!1}function Nd(n){Mr===null?Mr=[n]:Mr.push(n)}var Aq=Jo.ReactCurrentBatchConfig;function rI(n,e,i){if(n=i.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(Qe(309));var A=i.stateNode}if(!A)throw Error(Qe(147,n));var o=A,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var g=o.refs;a===null?delete g[s]:g[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(Qe(284));if(!i._owner)throw Error(Qe(290,n))}return n}function jc(n,e){throw n=Object.prototype.toString.call(e),Error(Qe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function HH(n){var e=n._init;return e(n._payload)}function KK(n){function e(E,u){if(n){var f=E.deletions;f===null?(E.deletions=[u],E.flags|=16):f.push(u)}}function i(E,u){if(!n)return null;for(;u!==null;)e(E,u),u=u.sibling;return null}function A(E,u){for(E=new Map;u!==null;)u.key!==null?E.set(u.key,u):E.set(u.index,u),u=u.sibling;return E}function o(E,u){return E=ys(E,u),E.index=0,E.sibling=null,E}function s(E,u,f){return E.index=f,n?(f=E.alternate,f!==null?(f=f.index,f<u?(E.flags|=2,u):f):(E.flags|=2,u)):(E.flags|=1048576,u)}function a(E){return n&&E.alternate===null&&(E.flags|=2),E}function g(E,u,f,m){return u===null||u.tag!==6?(u=Ap(f,E.mode,m),u.return=E,u):(u=o(u,f),u.return=E,u)}function I(E,u,f,m){var M=f.type;return M===Wa?_(E,u,f.props.children,m,f.key):u!==null&&(u.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rs&&HH(M)===u.type)?(m=o(u,f.props),m.ref=rI(E,u,f),m.return=E,m):(m=al(f.type,f.key,f.props,null,E.mode,m),m.ref=rI(E,u,f),m.return=E,m)}function c(E,u,f,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=tp(f,E.mode,m),u.return=E,u):(u=o(u,f.children||[]),u.return=E,u)}function _(E,u,f,m,M){return u===null||u.tag!==7?(u=ra(f,E.mode,m,M),u.return=E,u):(u=o(u,f),u.return=E,u)}function p(E,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ap(""+u,E.mode,f),u.return=E,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Tc:return f=al(u.type,u.key,u.props,null,E.mode,f),f.ref=rI(E,null,u),f.return=E,f;case za:return u=tp(u,E.mode,f),u.return=E,u;case rs:var m=u._init;return p(E,m(u._payload),f)}if(SI(u)||eI(u))return u=ra(u,E.mode,f,null),u.return=E,u;jc(E,u)}return null}function B(E,u,f,m){var M=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return M!==null?null:g(E,u,""+f,m);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tc:return f.key===M?I(E,u,f,m):null;case za:return f.key===M?c(E,u,f,m):null;case rs:return M=f._init,B(E,u,M(f._payload),m)}if(SI(f)||eI(f))return M!==null?null:_(E,u,f,m,null);jc(E,f)}return null}function d(E,u,f,m,M){if(typeof m=="string"&&m!==""||typeof m=="number")return E=E.get(f)||null,g(u,E,""+m,M);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tc:return E=E.get(m.key===null?f:m.key)||null,I(u,E,m,M);case za:return E=E.get(m.key===null?f:m.key)||null,c(u,E,m,M);case rs:var v=m._init;return d(E,u,f,v(m._payload),M)}if(SI(m)||eI(m))return E=E.get(f)||null,_(u,E,m,M,null);jc(u,m)}return null}function Q(E,u,f,m){for(var M=null,v=null,b=u,x=u=0,w=null;b!==null&&x<f.length;x++){b.index>x?(w=b,b=null):w=b.sibling;var S=B(E,b,f[x],m);if(S===null){b===null&&(b=w);break}n&&b&&S.alternate===null&&e(E,b),u=s(S,u,x),v===null?M=S:v.sibling=S,v=S,b=w}if(x===f.length)return i(E,b),Wt&&Vs(E,x),M;if(b===null){for(;x<f.length;x++)b=p(E,f[x],m),b!==null&&(u=s(b,u,x),v===null?M=b:v.sibling=b,v=b);return Wt&&Vs(E,x),M}for(b=A(E,b);x<f.length;x++)w=d(b,E,x,f[x],m),w!==null&&(n&&w.alternate!==null&&b.delete(w.key===null?x:w.key),u=s(w,u,x),v===null?M=w:v.sibling=w,v=w);return n&&b.forEach(function(F){return e(E,F)}),Wt&&Vs(E,x),M}function y(E,u,f,m){var M=eI(f);if(typeof M!="function")throw Error(Qe(150));if(f=M.call(f),f==null)throw Error(Qe(151));for(var v=M=null,b=u,x=u=0,w=null,S=f.next();b!==null&&!S.done;x++,S=f.next()){b.index>x?(w=b,b=null):w=b.sibling;var F=B(E,b,S.value,m);if(F===null){b===null&&(b=w);break}n&&b&&F.alternate===null&&e(E,b),u=s(F,u,x),v===null?M=F:v.sibling=F,v=F,b=w}if(S.done)return i(E,b),Wt&&Vs(E,x),M;if(b===null){for(;!S.done;x++,S=f.next())S=p(E,S.value,m),S!==null&&(u=s(S,u,x),v===null?M=S:v.sibling=S,v=S);return Wt&&Vs(E,x),M}for(b=A(E,b);!S.done;x++,S=f.next())S=d(b,E,x,S.value,m),S!==null&&(n&&S.alternate!==null&&b.delete(S.key===null?x:S.key),u=s(S,u,x),v===null?M=S:v.sibling=S,v=S);return n&&b.forEach(function(k){return e(E,k)}),Wt&&Vs(E,x),M}function h(E,u,f,m){if(typeof f=="object"&&f!==null&&f.type===Wa&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Tc:e:{for(var M=f.key,v=u;v!==null;){if(v.key===M){if(M=f.type,M===Wa){if(v.tag===7){i(E,v.sibling),u=o(v,f.props.children),u.return=E,E=u;break e}}else if(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rs&&HH(M)===v.type){i(E,v.sibling),u=o(v,f.props),u.ref=rI(E,v,f),u.return=E,E=u;break e}i(E,v);break}else e(E,v);v=v.sibling}f.type===Wa?(u=ra(f.props.children,E.mode,m,f.key),u.return=E,E=u):(m=al(f.type,f.key,f.props,null,E.mode,m),m.ref=rI(E,u,f),m.return=E,E=m)}return a(E);case za:e:{for(v=f.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){i(E,u.sibling),u=o(u,f.children||[]),u.return=E,E=u;break e}else{i(E,u);break}else e(E,u);u=u.sibling}u=tp(f,E.mode,m),u.return=E,E=u}return a(E);case rs:return v=f._init,h(E,u,v(f._payload),m)}if(SI(f))return Q(E,u,f,m);if(eI(f))return y(E,u,f,m);jc(E,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(i(E,u.sibling),u=o(u,f),u.return=E,E=u):(i(E,u),u=Ap(f,E.mode,m),u.return=E,E=u),a(E)):i(E,u)}return h}var yg=KK(!0),JK=KK(!1),Rl=bs(null),Nl=null,ng=null,xd=null;function Ld(){xd=ng=Nl=null}function Fd(n){var e=Rl.current;Ft(Rl),n._currentValue=e}function PB(n,e,i){for(;n!==null;){var A=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,A!==null&&(A.childLanes|=e)):A!==null&&(A.childLanes&e)!==e&&(A.childLanes|=e),n===i)break;n=n.return}}function lg(n,e){Nl=n,xd=ng=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(wn=!0),n.firstContext=null)}function Br(n){var e=n._currentValue;if(xd!==n)if(n={context:n,memoizedValue:e,next:null},ng===null){if(Nl===null)throw Error(Qe(308));ng=n,Nl.dependencies={lanes:0,firstContext:n}}else ng=ng.next=n;return e}var Aa=null;function Td(n){Aa===null?Aa=[n]:Aa.push(n)}function OK(n,e,i,A){var o=e.interleaved;return o===null?(i.next=i,Td(e)):(i.next=o.next,o.next=i),e.interleaved=i,Go(n,A)}function Go(n,e){n.lanes|=e;var i=n.alternate;for(i!==null&&(i.lanes|=e),i=n,n=n.return;n!==null;)n.childLanes|=e,i=n.alternate,i!==null&&(i.childLanes|=e),i=n,n=n.return;return i.tag===3?i.stateNode:null}var os=!1;function Ud(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YK(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xo(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function us(n,e,i){var A=n.updateQueue;if(A===null)return null;if(A=A.shared,nt&2){var o=A.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),A.pending=e,Go(n,i)}return o=A.interleaved,o===null?(e.next=e,Td(A)):(e.next=o.next,o.next=e),A.interleaved=e,Go(n,i)}function tl(n,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var A=e.lanes;A&=n.pendingLanes,i|=A,e.lanes=i,fd(n,i)}}function PH(n,e){var i=n.updateQueue,A=n.alternate;if(A!==null&&(A=A.updateQueue,i===A)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var a={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?o=s=a:s=s.next=a,i=i.next}while(i!==null);s===null?o=s=e:s=s.next=e}else o=s=e;i={baseState:A.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:A.shared,effects:A.effects},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=e:n.next=e,i.lastBaseUpdate=e}function xl(n,e,i,A){var o=n.updateQueue;os=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var I=g,c=I.next;I.next=null,a===null?s=c:a.next=c,a=I;var _=n.alternate;_!==null&&(_=_.updateQueue,g=_.lastBaseUpdate,g!==a&&(g===null?_.firstBaseUpdate=c:g.next=c,_.lastBaseUpdate=I))}if(s!==null){var p=o.baseState;a=0,_=c=I=null,g=s;do{var B=g.lane,d=g.eventTime;if((A&B)===B){_!==null&&(_=_.next={eventTime:d,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var Q=n,y=g;switch(B=e,d=i,y.tag){case 1:if(Q=y.payload,typeof Q=="function"){p=Q.call(d,p,B);break e}p=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=y.payload,B=typeof Q=="function"?Q.call(d,p,B):Q,B==null)break e;p=ei({},p,B);break e;case 2:os=!0}}g.callback!==null&&g.lane!==0&&(n.flags|=64,B=o.effects,B===null?o.effects=[g]:B.push(g))}else d={eventTime:d,lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},_===null?(c=_=d,I=p):_=_.next=d,a|=B;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;B=g,g=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);if(_===null&&(I=p),o.baseState=I,o.firstBaseUpdate=c,o.lastBaseUpdate=_,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else s===null&&(o.shared.lanes=0);ca|=a,n.lanes=a,n.memoizedState=p}}function KH(n,e,i){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var A=n[e],o=A.callback;if(o!==null){if(A.callback=null,A=i,typeof o!="function")throw Error(Qe(191,o));o.call(A)}}}var fc={},io=bs(fc),oc=bs(fc),sc=bs(fc);function ta(n){if(n===fc)throw Error(Qe(174));return n}function Gd(n,e){switch(Dt(sc,e),Dt(oc,n),Dt(io,fc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:QB(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=QB(e,n)}Ft(io),Dt(io,e)}function mg(){Ft(io),Ft(oc),Ft(sc)}function qK(n){ta(sc.current);var e=ta(io.current),i=QB(e,n.type);e!==i&&(Dt(oc,n),Dt(io,i))}function kd(n){oc.current===n&&(Ft(io),Ft(oc))}var Zt=bs(0);function Ll(n){for(var e=n;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var z_=[];function Hd(){for(var n=0;n<z_.length;n++)z_[n]._workInProgressVersionPrimary=null;z_.length=0}var il=Jo.ReactCurrentDispatcher,W_=Jo.ReactCurrentBatchConfig,Ia=0,$t=null,di=null,mi=null,Fl=!1,GI=!1,ac=0,tq=0;function Vi(){throw Error(Qe(321))}function Pd(n,e){if(e===null)return!1;for(var i=0;i<e.length&&i<n.length;i++)if(!Fr(n[i],e[i]))return!1;return!0}function Kd(n,e,i,A,o,s){if(Ia=s,$t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=n===null||n.memoizedState===null?oq:sq,n=i(A,o),GI){s=0;do{if(GI=!1,ac=0,25<=s)throw Error(Qe(301));s+=1,mi=di=null,e.updateQueue=null,il.current=aq,n=i(A,o)}while(GI)}if(il.current=Tl,e=di!==null&&di.next!==null,Ia=0,mi=di=$t=null,Fl=!1,e)throw Error(Qe(300));return n}function Jd(){var n=ac!==0;return ac=0,n}function zr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mi===null?$t.memoizedState=mi=n:mi=mi.next=n,mi}function Er(){if(di===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=di.next;var e=mi===null?$t.memoizedState:mi.next;if(e!==null)mi=e,di=n;else{if(n===null)throw Error(Qe(310));di=n,n={memoizedState:di.memoizedState,baseState:di.baseState,baseQueue:di.baseQueue,queue:di.queue,next:null},mi===null?$t.memoizedState=mi=n:mi=mi.next=n}return mi}function gc(n,e){return typeof e=="function"?e(n):e}function X_(n){var e=Er(),i=e.queue;if(i===null)throw Error(Qe(311));i.lastRenderedReducer=n;var A=di,o=A.baseQueue,s=i.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}A.baseQueue=o=s,i.pending=null}if(o!==null){s=o.next,A=A.baseState;var g=a=null,I=null,c=s;do{var _=c.lane;if((Ia&_)===_)I!==null&&(I=I.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),A=c.hasEagerState?c.eagerState:n(A,c.action);else{var p={lane:_,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};I===null?(g=I=p,a=A):I=I.next=p,$t.lanes|=_,ca|=_}c=c.next}while(c!==null&&c!==s);I===null?a=A:I.next=g,Fr(A,e.memoizedState)||(wn=!0),e.memoizedState=A,e.baseState=a,e.baseQueue=I,i.lastRenderedState=A}if(n=i.interleaved,n!==null){o=n;do s=o.lane,$t.lanes|=s,ca|=s,o=o.next;while(o!==n)}else o===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Z_(n){var e=Er(),i=e.queue;if(i===null)throw Error(Qe(311));i.lastRenderedReducer=n;var A=i.dispatch,o=i.pending,s=e.memoizedState;if(o!==null){i.pending=null;var a=o=o.next;do s=n(s,a.action),a=a.next;while(a!==o);Fr(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),i.lastRenderedState=s}return[s,A]}function jK(){}function VK(n,e){var i=$t,A=Er(),o=e(),s=!Fr(A.memoizedState,o);if(s&&(A.memoizedState=o,wn=!0),A=A.queue,Od(XK.bind(null,i,A,n),[n]),A.getSnapshot!==e||s||mi!==null&&mi.memoizedState.tag&1){if(i.flags|=2048,Ic(9,WK.bind(null,i,A,o,e),void 0,null),Si===null)throw Error(Qe(349));Ia&30||zK(i,e,o)}return o}function zK(n,e,i){n.flags|=16384,n={getSnapshot:e,value:i},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.stores=[n]):(i=e.stores,i===null?e.stores=[n]:i.push(n))}function WK(n,e,i,A){e.value=i,e.getSnapshot=A,ZK(e)&&$K(n)}function XK(n,e,i){return i(function(){ZK(e)&&$K(n)})}function ZK(n){var e=n.getSnapshot;n=n.value;try{var i=e();return!Fr(n,i)}catch{return!0}}function $K(n){var e=Go(n,1);e!==null&&xr(e,n,1,-1)}function JH(n){var e=zr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gc,lastRenderedState:n},e.queue=n,n=n.dispatch=rq.bind(null,$t,n),[e.memoizedState,n]}function Ic(n,e,i,A){return n={tag:n,create:e,destroy:i,deps:A,next:null},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.lastEffect=n.next=n):(i=e.lastEffect,i===null?e.lastEffect=n.next=n:(A=i.next,i.next=n,n.next=A,e.lastEffect=n)),n}function eJ(){return Er().memoizedState}function nl(n,e,i,A){var o=zr();$t.flags|=n,o.memoizedState=Ic(1|e,i,void 0,A===void 0?null:A)}function a_(n,e,i,A){var o=Er();A=A===void 0?null:A;var s=void 0;if(di!==null){var a=di.memoizedState;if(s=a.destroy,A!==null&&Pd(A,a.deps)){o.memoizedState=Ic(e,i,s,A);return}}$t.flags|=n,o.memoizedState=Ic(1|e,i,s,A)}function OH(n,e){return nl(8390656,8,n,e)}function Od(n,e){return a_(2048,8,n,e)}function AJ(n,e){return a_(4,2,n,e)}function tJ(n,e){return a_(4,4,n,e)}function iJ(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function nJ(n,e,i){return i=i!=null?i.concat([n]):null,a_(4,4,iJ.bind(null,e,n),i)}function Yd(){}function rJ(n,e){var i=Er();e=e===void 0?null:e;var A=i.memoizedState;return A!==null&&e!==null&&Pd(e,A[1])?A[0]:(i.memoizedState=[n,e],n)}function oJ(n,e){var i=Er();e=e===void 0?null:e;var A=i.memoizedState;return A!==null&&e!==null&&Pd(e,A[1])?A[0]:(n=n(),i.memoizedState=[n,e],n)}function sJ(n,e,i){return Ia&21?(Fr(i,e)||(i=CK(),$t.lanes|=i,ca|=i,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,wn=!0),n.memoizedState=i)}function iq(n,e){var i=Et;Et=i!==0&&4>i?i:4,n(!0);var A=W_.transition;W_.transition={};try{n(!1),e()}finally{Et=i,W_.transition=A}}function aJ(){return Er().memoizedState}function nq(n,e,i){var A=fs(n);if(i={lane:A,action:i,hasEagerState:!1,eagerState:null,next:null},gJ(n))IJ(e,i);else if(i=OK(n,e,i,A),i!==null){var o=cn();xr(i,n,A,o),cJ(i,e,A)}}function rq(n,e,i){var A=fs(n),o={lane:A,action:i,hasEagerState:!1,eagerState:null,next:null};if(gJ(n))IJ(e,o);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,g=s(a,i);if(o.hasEagerState=!0,o.eagerState=g,Fr(g,a)){var I=e.interleaved;I===null?(o.next=o,Td(e)):(o.next=I.next,I.next=o),e.interleaved=o;return}}catch{}finally{}i=OK(n,e,o,A),i!==null&&(o=cn(),xr(i,n,A,o),cJ(i,e,A))}}function gJ(n){var e=n.alternate;return n===$t||e!==null&&e===$t}function IJ(n,e){GI=Fl=!0;var i=n.pending;i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e}function cJ(n,e,i){if(i&4194240){var A=e.lanes;A&=n.pendingLanes,i|=A,e.lanes=i,fd(n,i)}}var Tl={readContext:Br,useCallback:Vi,useContext:Vi,useEffect:Vi,useImperativeHandle:Vi,useInsertionEffect:Vi,useLayoutEffect:Vi,useMemo:Vi,useReducer:Vi,useRef:Vi,useState:Vi,useDebugValue:Vi,useDeferredValue:Vi,useTransition:Vi,useMutableSource:Vi,useSyncExternalStore:Vi,useId:Vi,unstable_isNewReconciler:!1},oq={readContext:Br,useCallback:function(n,e){return zr().memoizedState=[n,e===void 0?null:e],n},useContext:Br,useEffect:OH,useImperativeHandle:function(n,e,i){return i=i!=null?i.concat([n]):null,nl(4194308,4,iJ.bind(null,e,n),i)},useLayoutEffect:function(n,e){return nl(4194308,4,n,e)},useInsertionEffect:function(n,e){return nl(4,2,n,e)},useMemo:function(n,e){var i=zr();return e=e===void 0?null:e,n=n(),i.memoizedState=[n,e],n},useReducer:function(n,e,i){var A=zr();return e=i!==void 0?i(e):e,A.memoizedState=A.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},A.queue=n,n=n.dispatch=nq.bind(null,$t,n),[A.memoizedState,n]},useRef:function(n){var e=zr();return n={current:n},e.memoizedState=n},useState:JH,useDebugValue:Yd,useDeferredValue:function(n){return zr().memoizedState=n},useTransition:function(){var n=JH(!1),e=n[0];return n=iq.bind(null,n[1]),zr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,i){var A=$t,o=zr();if(Wt){if(i===void 0)throw Error(Qe(407));i=i()}else{if(i=e(),Si===null)throw Error(Qe(349));Ia&30||zK(A,e,i)}o.memoizedState=i;var s={value:i,getSnapshot:e};return o.queue=s,OH(XK.bind(null,A,s,n),[n]),A.flags|=2048,Ic(9,WK.bind(null,A,s,i,e),void 0,null),i},useId:function(){var n=zr(),e=Si.identifierPrefix;if(Wt){var i=wo,A=So;i=(A&~(1<<32-Nr(A)-1)).toString(32)+i,e=":"+e+"R"+i,i=ac++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=tq++,e=":"+e+"r"+i.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},sq={readContext:Br,useCallback:rJ,useContext:Br,useEffect:Od,useImperativeHandle:nJ,useInsertionEffect:AJ,useLayoutEffect:tJ,useMemo:oJ,useReducer:X_,useRef:eJ,useState:function(){return X_(gc)},useDebugValue:Yd,useDeferredValue:function(n){var e=Er();return sJ(e,di.memoizedState,n)},useTransition:function(){var n=X_(gc)[0],e=Er().memoizedState;return[n,e]},useMutableSource:jK,useSyncExternalStore:VK,useId:aJ,unstable_isNewReconciler:!1},aq={readContext:Br,useCallback:rJ,useContext:Br,useEffect:Od,useImperativeHandle:nJ,useInsertionEffect:AJ,useLayoutEffect:tJ,useMemo:oJ,useReducer:Z_,useRef:eJ,useState:function(){return Z_(gc)},useDebugValue:Yd,useDeferredValue:function(n){var e=Er();return di===null?e.memoizedState=n:sJ(e,di.memoizedState,n)},useTransition:function(){var n=Z_(gc)[0],e=Er().memoizedState;return[n,e]},useMutableSource:jK,useSyncExternalStore:VK,useId:aJ,unstable_isNewReconciler:!1};function vr(n,e){if(n&&n.defaultProps){e=ei({},e),n=n.defaultProps;for(var i in n)e[i]===void 0&&(e[i]=n[i]);return e}return e}function KB(n,e,i,A){e=n.memoizedState,i=i(A,e),i=i==null?e:ei({},e,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var g_={isMounted:function(n){return(n=n._reactInternals)?ha(n)===n:!1},enqueueSetState:function(n,e,i){n=n._reactInternals;var A=cn(),o=fs(n),s=xo(A,o);s.payload=e,i!=null&&(s.callback=i),e=us(n,s,o),e!==null&&(xr(e,n,o,A),tl(e,n,o))},enqueueReplaceState:function(n,e,i){n=n._reactInternals;var A=cn(),o=fs(n),s=xo(A,o);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=us(n,s,o),e!==null&&(xr(e,n,o,A),tl(e,n,o))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var i=cn(),A=fs(n),o=xo(i,A);o.tag=2,e!=null&&(o.callback=e),e=us(n,o,A),e!==null&&(xr(e,n,A,i),tl(e,n,A))}};function YH(n,e,i,A,o,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(A,s,a):e.prototype&&e.prototype.isPureReactComponent?!tc(i,A)||!tc(o,s):!0}function CJ(n,e,i){var A=!1,o=Ss,s=e.contextType;return typeof s=="object"&&s!==null?s=Br(s):(o=Mn(e)?aa:tn.current,A=e.contextTypes,s=(A=A!=null)?Qg(n,o):Ss),e=new e(i,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=g_,n.stateNode=e,e._reactInternals=n,A&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=s),e}function qH(n,e,i,A){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,A),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,A),e.state!==n&&g_.enqueueReplaceState(e,e.state,null)}function JB(n,e,i,A){var o=n.stateNode;o.props=i,o.state=n.memoizedState,o.refs={},Ud(n);var s=e.contextType;typeof s=="object"&&s!==null?o.context=Br(s):(s=Mn(e)?aa:tn.current,o.context=Qg(n,s)),o.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(KB(n,e,s,i),o.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&g_.enqueueReplaceState(o,o.state,null),xl(n,i,o,A),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function Dg(n,e){try{var i="",A=e;do i+=TY(A),A=A.return;while(A);var o=i}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:o,digest:null}}function $_(n,e,i){return{value:n,source:null,stack:i??null,digest:e??null}}function OB(n,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var gq=typeof WeakMap=="function"?WeakMap:Map;function lJ(n,e,i){i=xo(-1,i),i.tag=3,i.payload={element:null};var A=e.value;return i.callback=function(){Gl||(Gl=!0,eE=A),OB(n,e)},i}function _J(n,e,i){i=xo(-1,i),i.tag=3;var A=n.type.getDerivedStateFromError;if(typeof A=="function"){var o=e.value;i.payload=function(){return A(o)},i.callback=function(){OB(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){OB(n,e),typeof A!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),i}function jH(n,e,i){var A=n.pingCache;if(A===null){A=n.pingCache=new gq;var o=new Set;A.set(e,o)}else o=A.get(e),o===void 0&&(o=new Set,A.set(e,o));o.has(i)||(o.add(i),n=yq.bind(null,n,e,i),e.then(n,n))}function VH(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function zH(n,e,i,A,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===e?n.flags|=65536:(n.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=xo(-1,1),e.tag=2,us(i,e,1))),i.lanes|=1),n)}var Iq=Jo.ReactCurrentOwner,wn=!1;function gn(n,e,i,A){e.child=n===null?JK(e,null,i,A):yg(e,n.child,i,A)}function WH(n,e,i,A,o){i=i.render;var s=e.ref;return lg(e,o),A=Kd(n,e,i,A,s,o),i=Jd(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,ko(n,e,o)):(Wt&&i&&Md(e),e.flags|=1,gn(n,e,A,o),e.child)}function XH(n,e,i,A,o){if(n===null){var s=i.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=s,pJ(n,e,s,A,o)):(n=al(i.type,null,A,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&o)){var a=s.memoizedProps;if(i=i.compare,i=i!==null?i:tc,i(a,A)&&n.ref===e.ref)return ko(n,e,o)}return e.flags|=1,n=ys(s,A),n.ref=e.ref,n.return=e,e.child=n}function pJ(n,e,i,A,o){if(n!==null){var s=n.memoizedProps;if(tc(s,A)&&n.ref===e.ref)if(wn=!1,e.pendingProps=A=s,(n.lanes&o)!==0)n.flags&131072&&(wn=!0);else return e.lanes=n.lanes,ko(n,e,o)}return YB(n,e,i,A,o)}function BJ(n,e,i){var A=e.pendingProps,o=A.children,s=n!==null?n.memoizedState:null;if(A.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(og,Gn),Gn|=i;else{if(!(i&1073741824))return n=s!==null?s.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Dt(og,Gn),Gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},A=s!==null?s.baseLanes:i,Dt(og,Gn),Gn|=A}else s!==null?(A=s.baseLanes|i,e.memoizedState=null):A=i,Dt(og,Gn),Gn|=A;return gn(n,e,o,i),e.child}function EJ(n,e){var i=e.ref;(n===null&&i!==null||n!==null&&n.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function YB(n,e,i,A,o){var s=Mn(i)?aa:tn.current;return s=Qg(e,s),lg(e,o),i=Kd(n,e,i,A,s,o),A=Jd(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,ko(n,e,o)):(Wt&&A&&Md(e),e.flags|=1,gn(n,e,i,o),e.child)}function ZH(n,e,i,A,o){if(Mn(i)){var s=!0;vl(e)}else s=!1;if(lg(e,o),e.stateNode===null)rl(n,e),CJ(e,i,A),JB(e,i,A,o),A=!0;else if(n===null){var a=e.stateNode,g=e.memoizedProps;a.props=g;var I=a.context,c=i.contextType;typeof c=="object"&&c!==null?c=Br(c):(c=Mn(i)?aa:tn.current,c=Qg(e,c));var _=i.getDerivedStateFromProps,p=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(g!==A||I!==c)&&qH(e,a,A,c),os=!1;var B=e.memoizedState;a.state=B,xl(e,A,a,o),I=e.memoizedState,g!==A||B!==I||bn.current||os?(typeof _=="function"&&(KB(e,i,_,A),I=e.memoizedState),(g=os||YH(e,i,g,A,B,I,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=A,e.memoizedState=I),a.props=A,a.state=I,a.context=c,A=g):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),A=!1)}else{a=e.stateNode,YK(n,e),g=e.memoizedProps,c=e.type===e.elementType?g:vr(e.type,g),a.props=c,p=e.pendingProps,B=a.context,I=i.contextType,typeof I=="object"&&I!==null?I=Br(I):(I=Mn(i)?aa:tn.current,I=Qg(e,I));var d=i.getDerivedStateFromProps;(_=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(g!==p||B!==I)&&qH(e,a,A,I),os=!1,B=e.memoizedState,a.state=B,xl(e,A,a,o);var Q=e.memoizedState;g!==p||B!==Q||bn.current||os?(typeof d=="function"&&(KB(e,i,d,A),Q=e.memoizedState),(c=os||YH(e,i,c,A,B,Q,I)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(A,Q,I),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(A,Q,I)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(e.flags|=1024),e.memoizedProps=A,e.memoizedState=Q),a.props=A,a.state=Q,a.context=I,A=c):(typeof a.componentDidUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(e.flags|=1024),A=!1)}return qB(n,e,i,A,s,o)}function qB(n,e,i,A,o,s){EJ(n,e);var a=(e.flags&128)!==0;if(!A&&!a)return o&&UH(e,i,!1),ko(n,e,s);A=e.stateNode,Iq.current=e;var g=a&&typeof i.getDerivedStateFromError!="function"?null:A.render();return e.flags|=1,n!==null&&a?(e.child=yg(e,n.child,null,s),e.child=yg(e,null,g,s)):gn(n,e,g,s),e.memoizedState=A.state,o&&UH(e,i,!0),e.child}function dJ(n){var e=n.stateNode;e.pendingContext?TH(n,e.pendingContext,e.pendingContext!==e.context):e.context&&TH(n,e.context,!1),Gd(n,e.containerInfo)}function $H(n,e,i,A,o){return fg(),Nd(o),e.flags|=256,gn(n,e,i,A),e.child}var jB={dehydrated:null,treeContext:null,retryLane:0};function VB(n){return{baseLanes:n,cachePool:null,transitions:null}}function hJ(n,e,i){var A=e.pendingProps,o=Zt.current,s=!1,a=(e.flags&128)!==0,g;if((g=a)||(g=n!==null&&n.memoizedState===null?!1:(o&2)!==0),g?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),Dt(Zt,o&1),n===null)return HB(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=A.children,n=A.fallback,s?(A=e.mode,s=e.child,a={mode:"hidden",children:a},!(A&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=C_(a,A,0,null),n=ra(n,A,i,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=VB(i),e.memoizedState=jB,n):qd(e,a));if(o=n.memoizedState,o!==null&&(g=o.dehydrated,g!==null))return cq(n,e,a,A,g,o,i);if(s){s=A.fallback,a=e.mode,o=n.child,g=o.sibling;var I={mode:"hidden",children:A.children};return!(a&1)&&e.child!==o?(A=e.child,A.childLanes=0,A.pendingProps=I,e.deletions=null):(A=ys(o,I),A.subtreeFlags=o.subtreeFlags&14680064),g!==null?s=ys(g,s):(s=ra(s,a,i,null),s.flags|=2),s.return=e,A.return=e,A.sibling=s,e.child=A,A=s,s=e.child,a=n.child.memoizedState,a=a===null?VB(i):{baseLanes:a.baseLanes|i,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~i,e.memoizedState=jB,A}return s=n.child,n=s.sibling,A=ys(s,{mode:"visible",children:A.children}),!(e.mode&1)&&(A.lanes=i),A.return=e,A.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=A,e.memoizedState=null,A}function qd(n,e){return e=C_({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Vc(n,e,i,A){return A!==null&&Nd(A),yg(e,n.child,null,i),n=qd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function cq(n,e,i,A,o,s,a){if(i)return e.flags&256?(e.flags&=-257,A=$_(Error(Qe(422))),Vc(n,e,a,A)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=A.fallback,o=e.mode,A=C_({mode:"visible",children:A.children},o,0,null),s=ra(s,o,a,null),s.flags|=2,A.return=e,s.return=e,A.sibling=s,e.child=A,e.mode&1&&yg(e,n.child,null,a),e.child.memoizedState=VB(a),e.memoizedState=jB,s);if(!(e.mode&1))return Vc(n,e,a,null);if(o.data==="$!"){if(A=o.nextSibling&&o.nextSibling.dataset,A)var g=A.dgst;return A=g,s=Error(Qe(419)),A=$_(s,A,void 0),Vc(n,e,a,A)}if(g=(a&n.childLanes)!==0,wn||g){if(A=Si,A!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(A.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Go(n,o),xr(A,n,o,-1))}return Zd(),A=$_(Error(Qe(421))),Vc(n,e,a,A)}return o.data==="$?"?(e.flags|=128,e.child=n.child,e=mq.bind(null,n),o._reactRetry=e,null):(n=s.treeContext,kn=hs(o.nextSibling),Kn=e,Wt=!0,Mr=null,n!==null&&(rr[or++]=So,rr[or++]=wo,rr[or++]=ga,So=n.id,wo=n.overflow,ga=e),e=qd(e,A.children),e.flags|=4096,e)}function e1(n,e,i){n.lanes|=e;var A=n.alternate;A!==null&&(A.lanes|=e),PB(n.return,e,i)}function ep(n,e,i,A,o){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:A,tail:i,tailMode:o}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=A,s.tail=i,s.tailMode=o)}function uJ(n,e,i){var A=e.pendingProps,o=A.revealOrder,s=A.tail;if(gn(n,e,A.children,i),A=Zt.current,A&2)A=A&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&e1(n,i,e);else if(n.tag===19)e1(n,i,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}A&=1}if(Dt(Zt,A),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(i=e.child,o=null;i!==null;)n=i.alternate,n!==null&&Ll(n)===null&&(o=i),i=i.sibling;i=o,i===null?(o=e.child,e.child=null):(o=i.sibling,i.sibling=null),ep(e,!1,o,i,s);break;case"backwards":for(i=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&Ll(n)===null){e.child=o;break}n=o.sibling,o.sibling=i,i=o,o=n}ep(e,!0,i,null,s);break;case"together":ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ko(n,e,i){if(n!==null&&(e.dependencies=n.dependencies),ca|=e.lanes,!(i&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Qe(153));if(e.child!==null){for(n=e.child,i=ys(n,n.pendingProps),e.child=i,i.return=e;n.sibling!==null;)n=n.sibling,i=i.sibling=ys(n,n.pendingProps),i.return=e;i.sibling=null}return e.child}function Cq(n,e,i){switch(e.tag){case 3:dJ(e),fg();break;case 5:qK(e);break;case 1:Mn(e.type)&&vl(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var A=e.type._context,o=e.memoizedProps.value;Dt(Rl,A._currentValue),A._currentValue=o;break;case 13:if(A=e.memoizedState,A!==null)return A.dehydrated!==null?(Dt(Zt,Zt.current&1),e.flags|=128,null):i&e.child.childLanes?hJ(n,e,i):(Dt(Zt,Zt.current&1),n=ko(n,e,i),n!==null?n.sibling:null);Dt(Zt,Zt.current&1);break;case 19:if(A=(i&e.childLanes)!==0,n.flags&128){if(A)return uJ(n,e,i);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Dt(Zt,Zt.current),A)break;return null;case 22:case 23:return e.lanes=0,BJ(n,e,i)}return ko(n,e,i)}var QJ,zB,fJ,yJ;QJ=function(n,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};zB=function(){};fJ=function(n,e,i,A){var o=n.memoizedProps;if(o!==A){n=e.stateNode,ta(io.current);var s=null;switch(i){case"input":o=EB(n,o),A=EB(n,A),s=[];break;case"select":o=ei({},o,{value:void 0}),A=ei({},A,{value:void 0}),s=[];break;case"textarea":o=uB(n,o),A=uB(n,A),s=[];break;default:typeof o.onClick!="function"&&typeof A.onClick=="function"&&(n.onclick=Sl)}fB(i,A);var a;i=null;for(c in o)if(!A.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var g=o[c];for(a in g)g.hasOwnProperty(a)&&(i||(i={}),i[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zI.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in A){var I=A[c];if(g=o!=null?o[c]:void 0,A.hasOwnProperty(c)&&I!==g&&(I!=null||g!=null))if(c==="style")if(g){for(a in g)!g.hasOwnProperty(a)||I&&I.hasOwnProperty(a)||(i||(i={}),i[a]="");for(a in I)I.hasOwnProperty(a)&&g[a]!==I[a]&&(i||(i={}),i[a]=I[a])}else i||(s||(s=[]),s.push(c,i)),i=I;else c==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,g=g?g.__html:void 0,I!=null&&g!==I&&(s=s||[]).push(c,I)):c==="children"?typeof I!="string"&&typeof I!="number"||(s=s||[]).push(c,""+I):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zI.hasOwnProperty(c)?(I!=null&&c==="onScroll"&&Nt("scroll",n),s||g===I||(s=[])):(s=s||[]).push(c,I))}i&&(s=s||[]).push("style",i);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yJ=function(n,e,i,A){i!==A&&(e.flags|=4)};function oI(n,e){if(!Wt)switch(n.tailMode){case"hidden":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var A=null;i!==null;)i.alternate!==null&&(A=i),i=i.sibling;A===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:A.sibling=null}}function zi(n){var e=n.alternate!==null&&n.alternate.child===n.child,i=0,A=0;if(e)for(var o=n.child;o!==null;)i|=o.lanes|o.childLanes,A|=o.subtreeFlags&14680064,A|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)i|=o.lanes|o.childLanes,A|=o.subtreeFlags,A|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=A,n.childLanes=i,e}function lq(n,e,i){var A=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zi(e),null;case 1:return Mn(e.type)&&wl(),zi(e),null;case 3:return A=e.stateNode,mg(),Ft(bn),Ft(tn),Hd(),A.pendingContext&&(A.context=A.pendingContext,A.pendingContext=null),(n===null||n.child===null)&&(qc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mr!==null&&(iE(Mr),Mr=null))),zB(n,e),zi(e),null;case 5:kd(e);var o=ta(sc.current);if(i=e.type,n!==null&&e.stateNode!=null)fJ(n,e,i,A,o),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!A){if(e.stateNode===null)throw Error(Qe(166));return zi(e),null}if(n=ta(io.current),qc(e)){A=e.stateNode,i=e.type;var s=e.memoizedProps;switch(A[Xr]=e,A[rc]=s,n=(e.mode&1)!==0,i){case"dialog":Nt("cancel",A),Nt("close",A);break;case"iframe":case"object":case"embed":Nt("load",A);break;case"video":case"audio":for(o=0;o<vI.length;o++)Nt(vI[o],A);break;case"source":Nt("error",A);break;case"img":case"image":case"link":Nt("error",A),Nt("load",A);break;case"details":Nt("toggle",A);break;case"input":gH(A,s),Nt("invalid",A);break;case"select":A._wrapperState={wasMultiple:!!s.multiple},Nt("invalid",A);break;case"textarea":cH(A,s),Nt("invalid",A)}fB(i,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var g=s[a];a==="children"?typeof g=="string"?A.textContent!==g&&(s.suppressHydrationWarning!==!0&&Yc(A.textContent,g,n),o=["children",g]):typeof g=="number"&&A.textContent!==""+g&&(s.suppressHydrationWarning!==!0&&Yc(A.textContent,g,n),o=["children",""+g]):zI.hasOwnProperty(a)&&g!=null&&a==="onScroll"&&Nt("scroll",A)}switch(i){case"input":Uc(A),IH(A,s,!0);break;case"textarea":Uc(A),CH(A);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(A.onclick=Sl)}A=o,e.updateQueue=A,A!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=X2(i)),n==="http://www.w3.org/1999/xhtml"?i==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof A.is=="string"?n=a.createElement(i,{is:A.is}):(n=a.createElement(i),i==="select"&&(a=n,A.multiple?a.multiple=!0:A.size&&(a.size=A.size))):n=a.createElementNS(n,i),n[Xr]=e,n[rc]=A,QJ(n,e,!1,!1),e.stateNode=n;e:{switch(a=yB(i,A),i){case"dialog":Nt("cancel",n),Nt("close",n),o=A;break;case"iframe":case"object":case"embed":Nt("load",n),o=A;break;case"video":case"audio":for(o=0;o<vI.length;o++)Nt(vI[o],n);o=A;break;case"source":Nt("error",n),o=A;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),o=A;break;case"details":Nt("toggle",n),o=A;break;case"input":gH(n,A),o=EB(n,A),Nt("invalid",n);break;case"option":o=A;break;case"select":n._wrapperState={wasMultiple:!!A.multiple},o=ei({},A,{value:void 0}),Nt("invalid",n);break;case"textarea":cH(n,A),o=uB(n,A),Nt("invalid",n);break;default:o=A}fB(i,o),g=o;for(s in g)if(g.hasOwnProperty(s)){var I=g[s];s==="style"?eK(n,I):s==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Z2(n,I)):s==="children"?typeof I=="string"?(i!=="textarea"||I!=="")&&WI(n,I):typeof I=="number"&&WI(n,""+I):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zI.hasOwnProperty(s)?I!=null&&s==="onScroll"&&Nt("scroll",n):I!=null&&Bd(n,s,I,a))}switch(i){case"input":Uc(n),IH(n,A,!1);break;case"textarea":Uc(n),CH(n);break;case"option":A.value!=null&&n.setAttribute("value",""+Ds(A.value));break;case"select":n.multiple=!!A.multiple,s=A.value,s!=null?gg(n,!!A.multiple,s,!1):A.defaultValue!=null&&gg(n,!!A.multiple,A.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=Sl)}switch(i){case"button":case"input":case"select":case"textarea":A=!!A.autoFocus;break e;case"img":A=!0;break e;default:A=!1}}A&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zi(e),null;case 6:if(n&&e.stateNode!=null)yJ(n,e,n.memoizedProps,A);else{if(typeof A!="string"&&e.stateNode===null)throw Error(Qe(166));if(i=ta(sc.current),ta(io.current),qc(e)){if(A=e.stateNode,i=e.memoizedProps,A[Xr]=e,(s=A.nodeValue!==i)&&(n=Kn,n!==null))switch(n.tag){case 3:Yc(A.nodeValue,i,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yc(A.nodeValue,i,(n.mode&1)!==0)}s&&(e.flags|=4)}else A=(i.nodeType===9?i:i.ownerDocument).createTextNode(A),A[Xr]=e,e.stateNode=A}return zi(e),null;case 13:if(Ft(Zt),A=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&kn!==null&&e.mode&1&&!(e.flags&128))PK(),fg(),e.flags|=98560,s=!1;else if(s=qc(e),A!==null&&A.dehydrated!==null){if(n===null){if(!s)throw Error(Qe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Qe(317));s[Xr]=e}else fg(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zi(e),s=!1}else Mr!==null&&(iE(Mr),Mr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(A=A!==null,A!==(n!==null&&n.memoizedState!==null)&&A&&(e.child.flags|=8192,e.mode&1&&(n===null||Zt.current&1?hi===0&&(hi=3):Zd())),e.updateQueue!==null&&(e.flags|=4),zi(e),null);case 4:return mg(),zB(n,e),n===null&&ic(e.stateNode.containerInfo),zi(e),null;case 10:return Fd(e.type._context),zi(e),null;case 17:return Mn(e.type)&&wl(),zi(e),null;case 19:if(Ft(Zt),s=e.memoizedState,s===null)return zi(e),null;if(A=(e.flags&128)!==0,a=s.rendering,a===null)if(A)oI(s,!1);else{if(hi!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Ll(n),a!==null){for(e.flags|=128,oI(s,!1),A=a.updateQueue,A!==null&&(e.updateQueue=A,e.flags|=4),e.subtreeFlags=0,A=i,i=e.child;i!==null;)s=i,n=A,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),i=i.sibling;return Dt(Zt,Zt.current&1|2),e.child}n=n.sibling}s.tail!==null&&ci()>Sg&&(e.flags|=128,A=!0,oI(s,!1),e.lanes=4194304)}else{if(!A)if(n=Ll(a),n!==null){if(e.flags|=128,A=!0,i=n.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),oI(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Wt)return zi(e),null}else 2*ci()-s.renderingStartTime>Sg&&i!==1073741824&&(e.flags|=128,A=!0,oI(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(i=s.last,i!==null?i.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ci(),e.sibling=null,i=Zt.current,Dt(Zt,A?i&1|2:i&1),e):(zi(e),null);case 22:case 23:return Xd(),A=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==A&&(e.flags|=8192),A&&e.mode&1?Gn&1073741824&&(zi(e),e.subtreeFlags&6&&(e.flags|=8192)):zi(e),null;case 24:return null;case 25:return null}throw Error(Qe(156,e.tag))}function _q(n,e){switch(Rd(e),e.tag){case 1:return Mn(e.type)&&wl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return mg(),Ft(bn),Ft(tn),Hd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return kd(e),null;case 13:if(Ft(Zt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Qe(340));fg()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ft(Zt),null;case 4:return mg(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var zc=!1,$i=!1,pq=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function rg(n,e){var i=n.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(A){ri(n,e,A)}else i.current=null}function WB(n,e,i){try{i()}catch(A){ri(n,e,A)}}var A1=!1;function Bq(n,e){if(xB=yl,n=vK(),bd(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else e:{i=(i=n.ownerDocument)&&i.defaultView||window;var A=i.getSelection&&i.getSelection();if(A&&A.rangeCount!==0){i=A.anchorNode;var o=A.anchorOffset,s=A.focusNode;A=A.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var a=0,g=-1,I=-1,c=0,_=0,p=n,B=null;A:for(;;){for(var d;p!==i||o!==0&&p.nodeType!==3||(g=a+o),p!==s||A!==0&&p.nodeType!==3||(I=a+A),p.nodeType===3&&(a+=p.nodeValue.length),(d=p.firstChild)!==null;)B=p,p=d;for(;;){if(p===n)break A;if(B===i&&++c===o&&(g=a),B===s&&++_===A&&(I=a),(d=p.nextSibling)!==null)break;p=B,B=p.parentNode}p=d}i=g===-1||I===-1?null:{start:g,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(LB={focusedElem:n,selectionRange:i},yl=!1,Ve=e;Ve!==null;)if(e=Ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ve=n;else for(;Ve!==null;){e=Ve;try{var Q=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var y=Q.memoizedProps,h=Q.memoizedState,E=e.stateNode,u=E.getSnapshotBeforeUpdate(e.elementType===e.type?y:vr(e.type,y),h);E.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Qe(163))}}catch(m){ri(e,e.return,m)}if(n=e.sibling,n!==null){n.return=e.return,Ve=n;break}Ve=e.return}return Q=A1,A1=!1,Q}function kI(n,e,i){var A=e.updateQueue;if(A=A!==null?A.lastEffect:null,A!==null){var o=A=A.next;do{if((o.tag&n)===n){var s=o.destroy;o.destroy=void 0,s!==void 0&&WB(e,i,s)}o=o.next}while(o!==A)}}function I_(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&n)===n){var A=i.create;i.destroy=A()}i=i.next}while(i!==e)}}function XB(n){var e=n.ref;if(e!==null){var i=n.stateNode;switch(n.tag){case 5:n=i;break;default:n=i}typeof e=="function"?e(n):e.current=n}}function mJ(n){var e=n.alternate;e!==null&&(n.alternate=null,mJ(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Xr],delete e[rc],delete e[UB],delete e[Z3],delete e[$3])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function DJ(n){return n.tag===5||n.tag===3||n.tag===4}function t1(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||DJ(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ZB(n,e,i){var A=n.tag;if(A===5||A===6)n=n.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(n,e):i.insertBefore(n,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(n,i)):(e=i,e.appendChild(n)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Sl));else if(A!==4&&(n=n.child,n!==null))for(ZB(n,e,i),n=n.sibling;n!==null;)ZB(n,e,i),n=n.sibling}function $B(n,e,i){var A=n.tag;if(A===5||A===6)n=n.stateNode,e?i.insertBefore(n,e):i.appendChild(n);else if(A!==4&&(n=n.child,n!==null))for($B(n,e,i),n=n.sibling;n!==null;)$B(n,e,i),n=n.sibling}var Gi=null,br=!1;function jo(n,e,i){for(i=i.child;i!==null;)SJ(n,e,i),i=i.sibling}function SJ(n,e,i){if(to&&typeof to.onCommitFiberUnmount=="function")try{to.onCommitFiberUnmount(t_,i)}catch{}switch(i.tag){case 5:$i||rg(i,e);case 6:var A=Gi,o=br;Gi=null,jo(n,e,i),Gi=A,br=o,Gi!==null&&(br?(n=Gi,i=i.stateNode,n.nodeType===8?n.parentNode.removeChild(i):n.removeChild(i)):Gi.removeChild(i.stateNode));break;case 18:Gi!==null&&(br?(n=Gi,i=i.stateNode,n.nodeType===8?j_(n.parentNode,i):n.nodeType===1&&j_(n,i),ec(n)):j_(Gi,i.stateNode));break;case 4:A=Gi,o=br,Gi=i.stateNode.containerInfo,br=!0,jo(n,e,i),Gi=A,br=o;break;case 0:case 11:case 14:case 15:if(!$i&&(A=i.updateQueue,A!==null&&(A=A.lastEffect,A!==null))){o=A=A.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&WB(i,e,a),o=o.next}while(o!==A)}jo(n,e,i);break;case 1:if(!$i&&(rg(i,e),A=i.stateNode,typeof A.componentWillUnmount=="function"))try{A.props=i.memoizedProps,A.state=i.memoizedState,A.componentWillUnmount()}catch(g){ri(i,e,g)}jo(n,e,i);break;case 21:jo(n,e,i);break;case 22:i.mode&1?($i=(A=$i)||i.memoizedState!==null,jo(n,e,i),$i=A):jo(n,e,i);break;default:jo(n,e,i)}}function i1(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var i=n.stateNode;i===null&&(i=n.stateNode=new pq),e.forEach(function(A){var o=Dq.bind(null,n,A);i.has(A)||(i.add(A),A.then(o,o))})}}function fr(n,e){var i=e.deletions;if(i!==null)for(var A=0;A<i.length;A++){var o=i[A];try{var s=n,a=e,g=a;e:for(;g!==null;){switch(g.tag){case 5:Gi=g.stateNode,br=!1;break e;case 3:Gi=g.stateNode.containerInfo,br=!0;break e;case 4:Gi=g.stateNode.containerInfo,br=!0;break e}g=g.return}if(Gi===null)throw Error(Qe(160));SJ(s,a,o),Gi=null,br=!1;var I=o.alternate;I!==null&&(I.return=null),o.return=null}catch(c){ri(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wJ(e,n),e=e.sibling}function wJ(n,e){var i=n.alternate,A=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fr(e,n),qr(n),A&4){try{kI(3,n,n.return),I_(3,n)}catch(y){ri(n,n.return,y)}try{kI(5,n,n.return)}catch(y){ri(n,n.return,y)}}break;case 1:fr(e,n),qr(n),A&512&&i!==null&&rg(i,i.return);break;case 5:if(fr(e,n),qr(n),A&512&&i!==null&&rg(i,i.return),n.flags&32){var o=n.stateNode;try{WI(o,"")}catch(y){ri(n,n.return,y)}}if(A&4&&(o=n.stateNode,o!=null)){var s=n.memoizedProps,a=i!==null?i.memoizedProps:s,g=n.type,I=n.updateQueue;if(n.updateQueue=null,I!==null)try{g==="input"&&s.type==="radio"&&s.name!=null&&z2(o,s),yB(g,a);var c=yB(g,s);for(a=0;a<I.length;a+=2){var _=I[a],p=I[a+1];_==="style"?eK(o,p):_==="dangerouslySetInnerHTML"?Z2(o,p):_==="children"?WI(o,p):Bd(o,_,p,c)}switch(g){case"input":dB(o,s);break;case"textarea":W2(o,s);break;case"select":var B=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?gg(o,!!s.multiple,d,!1):B!==!!s.multiple&&(s.defaultValue!=null?gg(o,!!s.multiple,s.defaultValue,!0):gg(o,!!s.multiple,s.multiple?[]:"",!1))}o[rc]=s}catch(y){ri(n,n.return,y)}}break;case 6:if(fr(e,n),qr(n),A&4){if(n.stateNode===null)throw Error(Qe(162));o=n.stateNode,s=n.memoizedProps;try{o.nodeValue=s}catch(y){ri(n,n.return,y)}}break;case 3:if(fr(e,n),qr(n),A&4&&i!==null&&i.memoizedState.isDehydrated)try{ec(e.containerInfo)}catch(y){ri(n,n.return,y)}break;case 4:fr(e,n),qr(n);break;case 13:fr(e,n),qr(n),o=n.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(zd=ci())),A&4&&i1(n);break;case 22:if(_=i!==null&&i.memoizedState!==null,n.mode&1?($i=(c=$i)||_,fr(e,n),$i=c):fr(e,n),qr(n),A&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!_&&n.mode&1)for(Ve=n,_=n.child;_!==null;){for(p=Ve=_;Ve!==null;){switch(B=Ve,d=B.child,B.tag){case 0:case 11:case 14:case 15:kI(4,B,B.return);break;case 1:rg(B,B.return);var Q=B.stateNode;if(typeof Q.componentWillUnmount=="function"){A=B,i=B.return;try{e=A,Q.props=e.memoizedProps,Q.state=e.memoizedState,Q.componentWillUnmount()}catch(y){ri(A,i,y)}}break;case 5:rg(B,B.return);break;case 22:if(B.memoizedState!==null){r1(p);continue}}d!==null?(d.return=B,Ve=d):r1(p)}_=_.sibling}e:for(_=null,p=n;;){if(p.tag===5){if(_===null){_=p;try{o=p.stateNode,c?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(g=p.stateNode,I=p.memoizedProps.style,a=I!=null&&I.hasOwnProperty("display")?I.display:null,g.style.display=$2("display",a))}catch(y){ri(n,n.return,y)}}}else if(p.tag===6){if(_===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ri(n,n.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;_===p&&(_=null),p=p.return}_===p&&(_=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fr(e,n),qr(n),A&4&&i1(n);break;case 21:break;default:fr(e,n),qr(n)}}function qr(n){var e=n.flags;if(e&2){try{e:{for(var i=n.return;i!==null;){if(DJ(i)){var A=i;break e}i=i.return}throw Error(Qe(160))}switch(A.tag){case 5:var o=A.stateNode;A.flags&32&&(WI(o,""),A.flags&=-33);var s=t1(n);$B(n,s,o);break;case 3:case 4:var a=A.stateNode.containerInfo,g=t1(n);ZB(n,g,a);break;default:throw Error(Qe(161))}}catch(I){ri(n,n.return,I)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Eq(n,e,i){Ve=n,vJ(n)}function vJ(n,e,i){for(var A=(n.mode&1)!==0;Ve!==null;){var o=Ve,s=o.child;if(o.tag===22&&A){var a=o.memoizedState!==null||zc;if(!a){var g=o.alternate,I=g!==null&&g.memoizedState!==null||$i;g=zc;var c=$i;if(zc=a,($i=I)&&!c)for(Ve=o;Ve!==null;)a=Ve,I=a.child,a.tag===22&&a.memoizedState!==null?o1(o):I!==null?(I.return=a,Ve=I):o1(o);for(;s!==null;)Ve=s,vJ(s),s=s.sibling;Ve=o,zc=g,$i=c}n1(n)}else o.subtreeFlags&8772&&s!==null?(s.return=o,Ve=s):n1(n)}}function n1(n){for(;Ve!==null;){var e=Ve;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$i||I_(5,e);break;case 1:var A=e.stateNode;if(e.flags&4&&!$i)if(i===null)A.componentDidMount();else{var o=e.elementType===e.type?i.memoizedProps:vr(e.type,i.memoizedProps);A.componentDidUpdate(o,i.memoizedState,A.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&KH(e,s,A);break;case 3:var a=e.updateQueue;if(a!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}KH(e,a,i)}break;case 5:var g=e.stateNode;if(i===null&&e.flags&4){i=g;var I=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&i.focus();break;case"img":I.src&&(i.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var _=c.memoizedState;if(_!==null){var p=_.dehydrated;p!==null&&ec(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Qe(163))}$i||e.flags&512&&XB(e)}catch(B){ri(e,e.return,B)}}if(e===n){Ve=null;break}if(i=e.sibling,i!==null){i.return=e.return,Ve=i;break}Ve=e.return}}function r1(n){for(;Ve!==null;){var e=Ve;if(e===n){Ve=null;break}var i=e.sibling;if(i!==null){i.return=e.return,Ve=i;break}Ve=e.return}}function o1(n){for(;Ve!==null;){var e=Ve;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{I_(4,e)}catch(I){ri(e,i,I)}break;case 1:var A=e.stateNode;if(typeof A.componentDidMount=="function"){var o=e.return;try{A.componentDidMount()}catch(I){ri(e,o,I)}}var s=e.return;try{XB(e)}catch(I){ri(e,s,I)}break;case 5:var a=e.return;try{XB(e)}catch(I){ri(e,a,I)}}}catch(I){ri(e,e.return,I)}if(e===n){Ve=null;break}var g=e.sibling;if(g!==null){g.return=e.return,Ve=g;break}Ve=e.return}}var dq=Math.ceil,Ul=Jo.ReactCurrentDispatcher,jd=Jo.ReactCurrentOwner,pr=Jo.ReactCurrentBatchConfig,nt=0,Si=null,_i=null,Ki=0,Gn=0,og=bs(0),hi=0,cc=null,ca=0,c_=0,Vd=0,HI=null,mn=null,zd=0,Sg=1/0,fo=null,Gl=!1,eE=null,Qs=null,Wc=!1,Cs=null,kl=0,PI=0,AE=null,ol=-1,sl=0;function cn(){return nt&6?ci():ol!==-1?ol:ol=ci()}function fs(n){return n.mode&1?nt&2&&Ki!==0?Ki&-Ki:Aq.transition!==null?(sl===0&&(sl=CK()),sl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:hK(n.type)),n):1}function xr(n,e,i,A){if(50<PI)throw PI=0,AE=null,Error(Qe(185));hc(n,i,A),(!(nt&2)||n!==Si)&&(n===Si&&(!(nt&2)&&(c_|=i),hi===4&&gs(n,Ki)),Rn(n,A),i===1&&nt===0&&!(e.mode&1)&&(Sg=ci()+500,s_&&Ms()))}function Rn(n,e){var i=n.callbackNode;A3(n,e);var A=fl(n,n===Si?Ki:0);if(A===0)i!==null&&pH(i),n.callbackNode=null,n.callbackPriority=0;else if(e=A&-A,n.callbackPriority!==e){if(i!=null&&pH(i),e===1)n.tag===0?eq(s1.bind(null,n)):GK(s1.bind(null,n)),W3(function(){!(nt&6)&&Ms()}),i=null;else{switch(lK(A)){case 1:i=Qd;break;case 4:i=IK;break;case 16:i=Ql;break;case 536870912:i=cK;break;default:i=Ql}i=TJ(i,bJ.bind(null,n))}n.callbackPriority=e,n.callbackNode=i}}function bJ(n,e){if(ol=-1,sl=0,nt&6)throw Error(Qe(327));var i=n.callbackNode;if(_g()&&n.callbackNode!==i)return null;var A=fl(n,n===Si?Ki:0);if(A===0)return null;if(A&30||A&n.expiredLanes||e)e=Hl(n,A);else{e=A;var o=nt;nt|=2;var s=RJ();(Si!==n||Ki!==e)&&(fo=null,Sg=ci()+500,na(n,e));do try{Qq();break}catch(g){MJ(n,g)}while(!0);Ld(),Ul.current=s,nt=o,_i!==null?e=0:(Si=null,Ki=0,e=hi)}if(e!==0){if(e===2&&(o=vB(n),o!==0&&(A=o,e=tE(n,o))),e===1)throw i=cc,na(n,0),gs(n,A),Rn(n,ci()),i;if(e===6)gs(n,A);else{if(o=n.current.alternate,!(A&30)&&!hq(o)&&(e=Hl(n,A),e===2&&(s=vB(n),s!==0&&(A=s,e=tE(n,s))),e===1))throw i=cc,na(n,0),gs(n,A),Rn(n,ci()),i;switch(n.finishedWork=o,n.finishedLanes=A,e){case 0:case 1:throw Error(Qe(345));case 2:zs(n,mn,fo);break;case 3:if(gs(n,A),(A&130023424)===A&&(e=zd+500-ci(),10<e)){if(fl(n,0)!==0)break;if(o=n.suspendedLanes,(o&A)!==A){cn(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=TB(zs.bind(null,n,mn,fo),e);break}zs(n,mn,fo);break;case 4:if(gs(n,A),(A&4194240)===A)break;for(e=n.eventTimes,o=-1;0<A;){var a=31-Nr(A);s=1<<a,a=e[a],a>o&&(o=a),A&=~s}if(A=o,A=ci()-A,A=(120>A?120:480>A?480:1080>A?1080:1920>A?1920:3e3>A?3e3:4320>A?4320:1960*dq(A/1960))-A,10<A){n.timeoutHandle=TB(zs.bind(null,n,mn,fo),A);break}zs(n,mn,fo);break;case 5:zs(n,mn,fo);break;default:throw Error(Qe(329))}}}return Rn(n,ci()),n.callbackNode===i?bJ.bind(null,n):null}function tE(n,e){var i=HI;return n.current.memoizedState.isDehydrated&&(na(n,e).flags|=256),n=Hl(n,e),n!==2&&(e=mn,mn=i,e!==null&&iE(e)),n}function iE(n){mn===null?mn=n:mn.push.apply(mn,n)}function hq(n){for(var e=n;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var A=0;A<i.length;A++){var o=i[A],s=o.getSnapshot;o=o.value;try{if(!Fr(s(),o))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gs(n,e){for(e&=~Vd,e&=~c_,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var i=31-Nr(e),A=1<<i;n[i]=-1,e&=~A}}function s1(n){if(nt&6)throw Error(Qe(327));_g();var e=fl(n,0);if(!(e&1))return Rn(n,ci()),null;var i=Hl(n,e);if(n.tag!==0&&i===2){var A=vB(n);A!==0&&(e=A,i=tE(n,A))}if(i===1)throw i=cc,na(n,0),gs(n,e),Rn(n,ci()),i;if(i===6)throw Error(Qe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,zs(n,mn,fo),Rn(n,ci()),null}function Wd(n,e){var i=nt;nt|=1;try{return n(e)}finally{nt=i,nt===0&&(Sg=ci()+500,s_&&Ms())}}function Ca(n){Cs!==null&&Cs.tag===0&&!(nt&6)&&_g();var e=nt;nt|=1;var i=pr.transition,A=Et;try{if(pr.transition=null,Et=1,n)return n()}finally{Et=A,pr.transition=i,nt=e,!(nt&6)&&Ms()}}function Xd(){Gn=og.current,Ft(og)}function na(n,e){n.finishedWork=null,n.finishedLanes=0;var i=n.timeoutHandle;if(i!==-1&&(n.timeoutHandle=-1,z3(i)),_i!==null)for(i=_i.return;i!==null;){var A=i;switch(Rd(A),A.tag){case 1:A=A.type.childContextTypes,A!=null&&wl();break;case 3:mg(),Ft(bn),Ft(tn),Hd();break;case 5:kd(A);break;case 4:mg();break;case 13:Ft(Zt);break;case 19:Ft(Zt);break;case 10:Fd(A.type._context);break;case 22:case 23:Xd()}i=i.return}if(Si=n,_i=n=ys(n.current,null),Ki=Gn=e,hi=0,cc=null,Vd=c_=ca=0,mn=HI=null,Aa!==null){for(e=0;e<Aa.length;e++)if(i=Aa[e],A=i.interleaved,A!==null){i.interleaved=null;var o=A.next,s=i.pending;if(s!==null){var a=s.next;s.next=o,A.next=a}i.pending=A}Aa=null}return n}function MJ(n,e){do{var i=_i;try{if(Ld(),il.current=Tl,Fl){for(var A=$t.memoizedState;A!==null;){var o=A.queue;o!==null&&(o.pending=null),A=A.next}Fl=!1}if(Ia=0,mi=di=$t=null,GI=!1,ac=0,jd.current=null,i===null||i.return===null){hi=1,cc=e,_i=null;break}e:{var s=n,a=i.return,g=i,I=e;if(e=Ki,g.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var c=I,_=g,p=_.tag;if(!(_.mode&1)&&(p===0||p===11||p===15)){var B=_.alternate;B?(_.updateQueue=B.updateQueue,_.memoizedState=B.memoizedState,_.lanes=B.lanes):(_.updateQueue=null,_.memoizedState=null)}var d=VH(a);if(d!==null){d.flags&=-257,zH(d,a,g,s,e),d.mode&1&&jH(s,c,e),e=d,I=c;var Q=e.updateQueue;if(Q===null){var y=new Set;y.add(I),e.updateQueue=y}else Q.add(I);break e}else{if(!(e&1)){jH(s,c,e),Zd();break e}I=Error(Qe(426))}}else if(Wt&&g.mode&1){var h=VH(a);if(h!==null){!(h.flags&65536)&&(h.flags|=256),zH(h,a,g,s,e),Nd(Dg(I,g));break e}}s=I=Dg(I,g),hi!==4&&(hi=2),HI===null?HI=[s]:HI.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=lJ(s,I,e);PH(s,E);break e;case 1:g=I;var u=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qs===null||!Qs.has(f)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=_J(s,g,e);PH(s,m);break e}}s=s.return}while(s!==null)}xJ(i)}catch(M){e=M,_i===i&&i!==null&&(_i=i=i.return);continue}break}while(!0)}function RJ(){var n=Ul.current;return Ul.current=Tl,n===null?Tl:n}function Zd(){(hi===0||hi===3||hi===2)&&(hi=4),Si===null||!(ca&268435455)&&!(c_&268435455)||gs(Si,Ki)}function Hl(n,e){var i=nt;nt|=2;var A=RJ();(Si!==n||Ki!==e)&&(fo=null,na(n,e));do try{uq();break}catch(o){MJ(n,o)}while(!0);if(Ld(),nt=i,Ul.current=A,_i!==null)throw Error(Qe(261));return Si=null,Ki=0,hi}function uq(){for(;_i!==null;)NJ(_i)}function Qq(){for(;_i!==null&&!qY();)NJ(_i)}function NJ(n){var e=FJ(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,e===null?xJ(n):_i=e,jd.current=null}function xJ(n){var e=n;do{var i=e.alternate;if(n=e.return,e.flags&32768){if(i=_q(i,e),i!==null){i.flags&=32767,_i=i;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hi=6,_i=null;return}}else if(i=lq(i,e,Gn),i!==null){_i=i;return}if(e=e.sibling,e!==null){_i=e;return}_i=e=n}while(e!==null);hi===0&&(hi=5)}function zs(n,e,i){var A=Et,o=pr.transition;try{pr.transition=null,Et=1,fq(n,e,i,A)}finally{pr.transition=o,Et=A}return null}function fq(n,e,i,A){do _g();while(Cs!==null);if(nt&6)throw Error(Qe(327));i=n.finishedWork;var o=n.finishedLanes;if(i===null)return null;if(n.finishedWork=null,n.finishedLanes=0,i===n.current)throw Error(Qe(177));n.callbackNode=null,n.callbackPriority=0;var s=i.lanes|i.childLanes;if(t3(n,s),n===Si&&(_i=Si=null,Ki=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Wc||(Wc=!0,TJ(Ql,function(){return _g(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=pr.transition,pr.transition=null;var a=Et;Et=1;var g=nt;nt|=4,jd.current=null,Bq(n,i),wJ(i,n),K3(LB),yl=!!xB,LB=xB=null,n.current=i,Eq(i),jY(),nt=g,Et=a,pr.transition=s}else n.current=i;if(Wc&&(Wc=!1,Cs=n,kl=o),s=n.pendingLanes,s===0&&(Qs=null),WY(i.stateNode),Rn(n,ci()),e!==null)for(A=n.onRecoverableError,i=0;i<e.length;i++)o=e[i],A(o.value,{componentStack:o.stack,digest:o.digest});if(Gl)throw Gl=!1,n=eE,eE=null,n;return kl&1&&n.tag!==0&&_g(),s=n.pendingLanes,s&1?n===AE?PI++:(PI=0,AE=n):PI=0,Ms(),null}function _g(){if(Cs!==null){var n=lK(kl),e=pr.transition,i=Et;try{if(pr.transition=null,Et=16>n?16:n,Cs===null)var A=!1;else{if(n=Cs,Cs=null,kl=0,nt&6)throw Error(Qe(331));var o=nt;for(nt|=4,Ve=n.current;Ve!==null;){var s=Ve,a=s.child;if(Ve.flags&16){var g=s.deletions;if(g!==null){for(var I=0;I<g.length;I++){var c=g[I];for(Ve=c;Ve!==null;){var _=Ve;switch(_.tag){case 0:case 11:case 15:kI(8,_,s)}var p=_.child;if(p!==null)p.return=_,Ve=p;else for(;Ve!==null;){_=Ve;var B=_.sibling,d=_.return;if(mJ(_),_===c){Ve=null;break}if(B!==null){B.return=d,Ve=B;break}Ve=d}}}var Q=s.alternate;if(Q!==null){var y=Q.child;if(y!==null){Q.child=null;do{var h=y.sibling;y.sibling=null,y=h}while(y!==null)}}Ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ve=a;else e:for(;Ve!==null;){if(s=Ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:kI(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Ve=E;break e}Ve=s.return}}var u=n.current;for(Ve=u;Ve!==null;){a=Ve;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,Ve=f;else e:for(a=u;Ve!==null;){if(g=Ve,g.flags&2048)try{switch(g.tag){case 0:case 11:case 15:I_(9,g)}}catch(M){ri(g,g.return,M)}if(g===a){Ve=null;break e}var m=g.sibling;if(m!==null){m.return=g.return,Ve=m;break e}Ve=g.return}}if(nt=o,Ms(),to&&typeof to.onPostCommitFiberRoot=="function")try{to.onPostCommitFiberRoot(t_,n)}catch{}A=!0}return A}finally{Et=i,pr.transition=e}}return!1}function a1(n,e,i){e=Dg(i,e),e=lJ(n,e,1),n=us(n,e,1),e=cn(),n!==null&&(hc(n,1,e),Rn(n,e))}function ri(n,e,i){if(n.tag===3)a1(n,n,i);else for(;e!==null;){if(e.tag===3){a1(e,n,i);break}else if(e.tag===1){var A=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof A.componentDidCatch=="function"&&(Qs===null||!Qs.has(A))){n=Dg(i,n),n=_J(e,n,1),e=us(e,n,1),n=cn(),e!==null&&(hc(e,1,n),Rn(e,n));break}}e=e.return}}function yq(n,e,i){var A=n.pingCache;A!==null&&A.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&i,Si===n&&(Ki&i)===i&&(hi===4||hi===3&&(Ki&130023424)===Ki&&500>ci()-zd?na(n,0):Vd|=i),Rn(n,e)}function LJ(n,e){e===0&&(n.mode&1?(e=Hc,Hc<<=1,!(Hc&130023424)&&(Hc=4194304)):e=1);var i=cn();n=Go(n,e),n!==null&&(hc(n,e,i),Rn(n,i))}function mq(n){var e=n.memoizedState,i=0;e!==null&&(i=e.retryLane),LJ(n,i)}function Dq(n,e){var i=0;switch(n.tag){case 13:var A=n.stateNode,o=n.memoizedState;o!==null&&(i=o.retryLane);break;case 19:A=n.stateNode;break;default:throw Error(Qe(314))}A!==null&&A.delete(e),LJ(n,i)}var FJ;FJ=function(n,e,i){if(n!==null)if(n.memoizedProps!==e.pendingProps||bn.current)wn=!0;else{if(!(n.lanes&i)&&!(e.flags&128))return wn=!1,Cq(n,e,i);wn=!!(n.flags&131072)}else wn=!1,Wt&&e.flags&1048576&&kK(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var A=e.type;rl(n,e),n=e.pendingProps;var o=Qg(e,tn.current);lg(e,i),o=Kd(null,e,A,n,o,i);var s=Jd();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(A)?(s=!0,vl(e)):s=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ud(e),o.updater=g_,e.stateNode=o,o._reactInternals=e,JB(e,A,n,i),e=qB(null,e,A,!0,s,i)):(e.tag=0,Wt&&s&&Md(e),gn(null,e,o,i),e=e.child),e;case 16:A=e.elementType;e:{switch(rl(n,e),n=e.pendingProps,o=A._init,A=o(A._payload),e.type=A,o=e.tag=wq(A),n=vr(A,n),o){case 0:e=YB(null,e,A,n,i);break e;case 1:e=ZH(null,e,A,n,i);break e;case 11:e=WH(null,e,A,n,i);break e;case 14:e=XH(null,e,A,vr(A.type,n),i);break e}throw Error(Qe(306,A,""))}return e;case 0:return A=e.type,o=e.pendingProps,o=e.elementType===A?o:vr(A,o),YB(n,e,A,o,i);case 1:return A=e.type,o=e.pendingProps,o=e.elementType===A?o:vr(A,o),ZH(n,e,A,o,i);case 3:e:{if(dJ(e),n===null)throw Error(Qe(387));A=e.pendingProps,s=e.memoizedState,o=s.element,YK(n,e),xl(e,A,null,i);var a=e.memoizedState;if(A=a.element,s.isDehydrated)if(s={element:A,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){o=Dg(Error(Qe(423)),e),e=$H(n,e,A,i,o);break e}else if(A!==o){o=Dg(Error(Qe(424)),e),e=$H(n,e,A,i,o);break e}else for(kn=hs(e.stateNode.containerInfo.firstChild),Kn=e,Wt=!0,Mr=null,i=JK(e,null,A,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(fg(),A===o){e=ko(n,e,i);break e}gn(n,e,A,i)}e=e.child}return e;case 5:return qK(e),n===null&&HB(e),A=e.type,o=e.pendingProps,s=n!==null?n.memoizedProps:null,a=o.children,FB(A,o)?a=null:s!==null&&FB(A,s)&&(e.flags|=32),EJ(n,e),gn(n,e,a,i),e.child;case 6:return n===null&&HB(e),null;case 13:return hJ(n,e,i);case 4:return Gd(e,e.stateNode.containerInfo),A=e.pendingProps,n===null?e.child=yg(e,null,A,i):gn(n,e,A,i),e.child;case 11:return A=e.type,o=e.pendingProps,o=e.elementType===A?o:vr(A,o),WH(n,e,A,o,i);case 7:return gn(n,e,e.pendingProps,i),e.child;case 8:return gn(n,e,e.pendingProps.children,i),e.child;case 12:return gn(n,e,e.pendingProps.children,i),e.child;case 10:e:{if(A=e.type._context,o=e.pendingProps,s=e.memoizedProps,a=o.value,Dt(Rl,A._currentValue),A._currentValue=a,s!==null)if(Fr(s.value,a)){if(s.children===o.children&&!bn.current){e=ko(n,e,i);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var g=s.dependencies;if(g!==null){a=s.child;for(var I=g.firstContext;I!==null;){if(I.context===A){if(s.tag===1){I=xo(-1,i&-i),I.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var _=c.pending;_===null?I.next=I:(I.next=_.next,_.next=I),c.pending=I}}s.lanes|=i,I=s.alternate,I!==null&&(I.lanes|=i),PB(s.return,i,e),g.lanes|=i;break}I=I.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Qe(341));a.lanes|=i,g=a.alternate,g!==null&&(g.lanes|=i),PB(a,i,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gn(n,e,o.children,i),e=e.child}return e;case 9:return o=e.type,A=e.pendingProps.children,lg(e,i),o=Br(o),A=A(o),e.flags|=1,gn(n,e,A,i),e.child;case 14:return A=e.type,o=vr(A,e.pendingProps),o=vr(A.type,o),XH(n,e,A,o,i);case 15:return pJ(n,e,e.type,e.pendingProps,i);case 17:return A=e.type,o=e.pendingProps,o=e.elementType===A?o:vr(A,o),rl(n,e),e.tag=1,Mn(A)?(n=!0,vl(e)):n=!1,lg(e,i),CJ(e,A,o),JB(e,A,o,i),qB(null,e,A,!0,n,i);case 19:return uJ(n,e,i);case 22:return BJ(n,e,i)}throw Error(Qe(156,e.tag))};function TJ(n,e){return gK(n,e)}function Sq(n,e,i,A){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=A,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(n,e,i,A){return new Sq(n,e,i,A)}function $d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wq(n){if(typeof n=="function")return $d(n)?1:0;if(n!=null){if(n=n.$$typeof,n===dd)return 11;if(n===hd)return 14}return 2}function ys(n,e){var i=n.alternate;return i===null?(i=gr(n.tag,e,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=e,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&14680064,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i}function al(n,e,i,A,o,s){var a=2;if(A=n,typeof n=="function")$d(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Wa:return ra(i.children,o,s,e);case Ed:a=8,o|=8;break;case lB:return n=gr(12,i,e,o|2),n.elementType=lB,n.lanes=s,n;case _B:return n=gr(13,i,e,o),n.elementType=_B,n.lanes=s,n;case pB:return n=gr(19,i,e,o),n.elementType=pB,n.lanes=s,n;case q2:return C_(i,o,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O2:a=10;break e;case Y2:a=9;break e;case dd:a=11;break e;case hd:a=14;break e;case rs:a=16,A=null;break e}throw Error(Qe(130,n==null?n:typeof n,""))}return e=gr(a,i,e,o),e.elementType=n,e.type=A,e.lanes=s,e}function ra(n,e,i,A){return n=gr(7,n,A,e),n.lanes=i,n}function C_(n,e,i,A){return n=gr(22,n,A,e),n.elementType=q2,n.lanes=i,n.stateNode={isHidden:!1},n}function Ap(n,e,i){return n=gr(6,n,null,e),n.lanes=i,n}function tp(n,e,i){return e=gr(4,n.children!==null?n.children:[],n.key,e),e.lanes=i,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function vq(n,e,i,A,o){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=T_(0),this.expirationTimes=T_(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=T_(0),this.identifierPrefix=A,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eh(n,e,i,A,o,s,a,g,I){return n=new vq(n,e,i,g,I),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gr(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:A,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),n}function bq(n,e,i){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:za,key:A==null?null:""+A,children:n,containerInfo:e,implementation:i}}function UJ(n){if(!n)return Ss;n=n._reactInternals;e:{if(ha(n)!==n||n.tag!==1)throw Error(Qe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Qe(171))}if(n.tag===1){var i=n.type;if(Mn(i))return UK(n,i,e)}return e}function GJ(n,e,i,A,o,s,a,g,I){return n=eh(i,A,!0,n,o,s,a,g,I),n.context=UJ(null),i=n.current,A=cn(),o=fs(i),s=xo(A,o),s.callback=e??null,us(i,s,o),n.current.lanes=o,hc(n,o,A),Rn(n,A),n}function l_(n,e,i,A){var o=e.current,s=cn(),a=fs(o);return i=UJ(i),e.context===null?e.context=i:e.pendingContext=i,e=xo(s,a),e.payload={element:n},A=A===void 0?null:A,A!==null&&(e.callback=A),n=us(o,e,a),n!==null&&(xr(n,o,a,s),tl(n,o,a)),a}function Pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function g1(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<e?i:e}}function Ah(n,e){g1(n,e),(n=n.alternate)&&g1(n,e)}function Mq(){return null}var kJ=typeof reportError=="function"?reportError:function(n){console.error(n)};function th(n){this._internalRoot=n}__.prototype.render=th.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Qe(409));l_(n,e,null,null)};__.prototype.unmount=th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ca(function(){l_(null,n,null,null)}),e[Uo]=null}};function __(n){this._internalRoot=n}__.prototype.unstable_scheduleHydration=function(n){if(n){var e=BK();n={blockedOn:null,target:n,priority:e};for(var i=0;i<as.length&&e!==0&&e<as[i].priority;i++);as.splice(i,0,n),i===0&&dK(n)}};function ih(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function p_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function I1(){}function Rq(n,e,i,A,o){if(o){if(typeof A=="function"){var s=A;A=function(){var c=Pl(a);s.call(c)}}var a=GJ(e,A,n,0,null,!1,!1,"",I1);return n._reactRootContainer=a,n[Uo]=a.current,ic(n.nodeType===8?n.parentNode:n),Ca(),a}for(;o=n.lastChild;)n.removeChild(o);if(typeof A=="function"){var g=A;A=function(){var c=Pl(I);g.call(c)}}var I=eh(n,0,!1,null,null,!1,!1,"",I1);return n._reactRootContainer=I,n[Uo]=I.current,ic(n.nodeType===8?n.parentNode:n),Ca(function(){l_(e,I,i,A)}),I}function B_(n,e,i,A,o){var s=i._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var g=o;o=function(){var I=Pl(a);g.call(I)}}l_(e,a,n,o)}else a=Rq(i,e,n,o,A);return Pl(a)}_K=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var i=wI(e.pendingLanes);i!==0&&(fd(e,i|1),Rn(e,ci()),!(nt&6)&&(Sg=ci()+500,Ms()))}break;case 13:Ca(function(){var A=Go(n,1);if(A!==null){var o=cn();xr(A,n,1,o)}}),Ah(n,1)}};yd=function(n){if(n.tag===13){var e=Go(n,134217728);if(e!==null){var i=cn();xr(e,n,134217728,i)}Ah(n,134217728)}};pK=function(n){if(n.tag===13){var e=fs(n),i=Go(n,e);if(i!==null){var A=cn();xr(i,n,e,A)}Ah(n,e)}};BK=function(){return Et};EK=function(n,e){var i=Et;try{return Et=n,e()}finally{Et=i}};DB=function(n,e,i){switch(e){case"input":if(dB(n,i),e=i.name,i.type==="radio"&&e!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var A=i[e];if(A!==n&&A.form===n.form){var o=o_(A);if(!o)throw Error(Qe(90));V2(A),dB(A,o)}}}break;case"textarea":W2(n,i);break;case"select":e=i.value,e!=null&&gg(n,!!i.multiple,e,!1)}};iK=Wd;nK=Ca;var Nq={usingClientEntryPoint:!1,Events:[Qc,eg,o_,AK,tK,Wd]},sI={findFiberByHostInstance:ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xq={bundleType:sI.bundleType,version:sI.version,rendererPackageName:sI.rendererPackageName,rendererConfig:sI.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jo.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sK(n),n===null?null:n.stateNode},findFiberByHostInstance:sI.findFiberByHostInstance||Mq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{t_=Xc.inject(xq),to=Xc}catch{}}qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nq;qn.createPortal=function(n,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ih(e))throw Error(Qe(200));return bq(n,e,null,i)};qn.createRoot=function(n,e){if(!ih(n))throw Error(Qe(299));var i=!1,A="",o=kJ;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(A=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=eh(n,1,!1,null,null,i,!1,A,o),n[Uo]=e.current,ic(n.nodeType===8?n.parentNode:n),new th(e)};qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Qe(188)):(n=Object.keys(n).join(","),Error(Qe(268,n)));return n=sK(e),n=n===null?null:n.stateNode,n};qn.flushSync=function(n){return Ca(n)};qn.hydrate=function(n,e,i){if(!p_(e))throw Error(Qe(200));return B_(null,n,e,!0,i)};qn.hydrateRoot=function(n,e,i){if(!ih(n))throw Error(Qe(405));var A=i!=null&&i.hydratedSources||null,o=!1,s="",a=kJ;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(a=i.onRecoverableError)),e=GJ(e,null,n,1,i??null,o,!1,s,a),n[Uo]=e.current,ic(n),A)for(n=0;n<A.length;n++)i=A[n],o=i._getVersion,o=o(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,o]:e.mutableSourceEagerHydrationData.push(i,o);return new __(e)};qn.render=function(n,e,i){if(!p_(e))throw Error(Qe(200));return B_(null,n,e,!1,i)};qn.unmountComponentAtNode=function(n){if(!p_(n))throw Error(Qe(40));return n._reactRootContainer?(Ca(function(){B_(null,null,n,!1,function(){n._reactRootContainer=null,n[Uo]=null})}),!0):!1};qn.unstable_batchedUpdates=Wd;qn.unstable_renderSubtreeIntoContainer=function(n,e,i,A){if(!p_(i))throw Error(Qe(200));if(n==null||n._reactInternals===void 0)throw Error(Qe(38));return B_(n,e,i,!1,A)};qn.version="18.3.1-next-f1338f8080-20240426";function HJ(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HJ)}catch(n){console.error(n)}}HJ(),H2.exports=qn;var Lq=H2.exports,Fq,c1=Lq;Fq=c1.createRoot,c1.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="170",Tq=0,C1=1,Uq=2,PJ=1,Gq=2,uo=3,Yn=0,pi=1,In=2,Jn=0,pg=1,l1=2,_1=3,p1=4,kq=5,Zs=100,Hq=101,Pq=102,Kq=103,Jq=104,Oq=200,Yq=201,qq=202,jq=203,nE=204,rE=205,Vq=206,zq=207,Wq=208,Xq=209,Zq=210,$q=211,ej=212,Aj=213,tj=214,oE=0,sE=1,aE=2,wg=3,gE=4,IE=5,cE=6,CE=7,E_=0,ij=1,nj=2,ms=0,rj=1,oj=2,sj=3,aj=4,gj=5,Ij=6,cj=7,B1="attached",Cj="detached",KJ=300,vg=301,bg=302,Kl=303,lE=304,d_=306,Ho=1e3,eo=1001,Jl=1002,An=1003,JJ=1004,bI=1005,en=1006,gl=1007,vo=1008,nn=1009,OJ=1010,YJ=1011,Cc=1012,nh=1013,Po=1014,Hn=1015,yc=1016,rh=1017,oh=1018,la=1020,qJ=35902,jJ=1021,VJ=1022,vn=1023,zJ=1024,WJ=1025,Bg=1026,_a=1027,sh=1028,h_=1029,XJ=1030,ah=1031,gh=1033,Il=33776,cl=33777,Cl=33778,ll=33779,_E=35840,pE=35841,BE=35842,EE=35843,dE=36196,hE=37492,uE=37496,QE=37808,fE=37809,yE=37810,mE=37811,DE=37812,SE=37813,wE=37814,vE=37815,bE=37816,ME=37817,RE=37818,NE=37819,xE=37820,LE=37821,_l=36492,FE=36494,TE=36495,ZJ=36283,UE=36284,GE=36285,kE=36286,lc=2300,_c=2301,ip=2302,E1=2400,d1=2401,h1=2402,lj=2500,_j=0,$J=1,HE=2,mc=3200,Ol=3201,u_=0,pj=1,Zr="",zt="srgb",Ns="srgb-linear",Q_="linear",Qt="srgb",ya=7680,u1=519,Bj=512,Ej=513,dj=514,eO=515,hj=516,uj=517,Qj=518,fj=519,PE=35044,Q1="300 es",bo=2e3,Yl=2001;class Oo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(i)===-1&&A[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const A=this._listeners;return A[e]!==void 0&&A[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const s=o.indexOf(i);s!==-1&&o.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const A=this._listeners[e.type];if(A!==void 0){e.target=this;const o=A.slice(0);for(let s=0,a=o.length;s<a;s++)o[s].call(this,e);e.target=null}}}const Wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let f1=1234567;const KI=Math.PI/180,Mg=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Wi[n&255]+Wi[n>>8&255]+Wi[n>>16&255]+Wi[n>>24&255]+"-"+Wi[e&255]+Wi[e>>8&255]+"-"+Wi[e>>16&15|64]+Wi[e>>24&255]+"-"+Wi[i&63|128]+Wi[i>>8&255]+"-"+Wi[i>>16&255]+Wi[i>>24&255]+Wi[A&255]+Wi[A>>8&255]+Wi[A>>16&255]+Wi[A>>24&255]).toLowerCase()}function li(n,e,i){return Math.max(e,Math.min(i,n))}function Ih(n,e){return(n%e+e)%e}function yj(n,e,i,A,o){return A+(n-e)*(o-A)/(i-e)}function mj(n,e,i){return n!==e?(i-n)/(e-n):0}function JI(n,e,i){return(1-i)*n+i*e}function Dj(n,e,i,A){return JI(n,e,1-Math.exp(-i*A))}function Sj(n,e=1){return e-Math.abs(Ih(n,e*2)-e)}function wj(n,e,i){return n<=e?0:n>=i?1:(n=(n-e)/(i-e),n*n*(3-2*n))}function vj(n,e,i){return n<=e?0:n>=i?1:(n=(n-e)/(i-e),n*n*n*(n*(n*6-15)+10))}function bj(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mj(n,e){return n+Math.random()*(e-n)}function Rj(n){return n*(.5-Math.random())}function Nj(n){n!==void 0&&(f1=n);let e=f1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xj(n){return n*KI}function Lj(n){return n*Mg}function Fj(n){return(n&n-1)===0&&n!==0}function Tj(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Uj(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gj(n,e,i,A,o){const s=Math.cos,a=Math.sin,g=s(i/2),I=a(i/2),c=s((e+A)/2),_=a((e+A)/2),p=s((e-A)/2),B=a((e-A)/2),d=s((A-e)/2),Q=a((A-e)/2);switch(o){case"XYX":n.set(g*_,I*p,I*B,g*c);break;case"YZY":n.set(I*B,g*_,I*p,g*c);break;case"ZXZ":n.set(I*p,I*B,g*_,g*c);break;case"XZX":n.set(g*_,I*Q,I*d,g*c);break;case"YXY":n.set(I*d,g*_,I*Q,g*c);break;case"ZYZ":n.set(I*Q,I*d,g*_,g*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const sr={DEG2RAD:KI,RAD2DEG:Mg,generateUUID:Lr,clamp:li,euclideanModulo:Ih,mapLinear:yj,inverseLerp:mj,lerp:JI,damp:Dj,pingpong:Sj,smoothstep:wj,smootherstep:vj,randInt:bj,randFloat:Mj,randFloatSpread:Rj,seededRandom:Nj,degToRad:xj,radToDeg:Lj,isPowerOfTwo:Fj,ceilPowerOfTwo:Tj,floorPowerOfTwo:Uj,setQuaternionFromProperEuler:Gj,normalize:Bt,denormalize:Rr};class iA{constructor(e=0,i=0){iA.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,A=this.y,o=e.elements;return this.x=o[0]*i+o[3]*A+o[6],this.y=o[1]*i+o[4]*A+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(i,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const A=this.dot(e)/i;return Math.acos(li(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,A=this.y-e.y;return i*i+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,A){return this.x=e.x+(i.x-e.x)*A,this.y=e.y+(i.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const A=Math.cos(i),o=Math.sin(i),s=this.x-e.x,a=this.y-e.y;return this.x=s*A-a*o+e.x,this.y=s*o+a*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class RA{constructor(e,i,A,o,s,a,g,I,c){RA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,A,o,s,a,g,I,c)}set(e,i,A,o,s,a,g,I,c){const _=this.elements;return _[0]=e,_[1]=o,_[2]=g,_[3]=i,_[4]=s,_[5]=I,_[6]=A,_[7]=a,_[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,A=e.elements;return i[0]=A[0],i[1]=A[1],i[2]=A[2],i[3]=A[3],i[4]=A[4],i[5]=A[5],i[6]=A[6],i[7]=A[7],i[8]=A[8],this}extractBasis(e,i,A){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const A=e.elements,o=i.elements,s=this.elements,a=A[0],g=A[3],I=A[6],c=A[1],_=A[4],p=A[7],B=A[2],d=A[5],Q=A[8],y=o[0],h=o[3],E=o[6],u=o[1],f=o[4],m=o[7],M=o[2],v=o[5],b=o[8];return s[0]=a*y+g*u+I*M,s[3]=a*h+g*f+I*v,s[6]=a*E+g*m+I*b,s[1]=c*y+_*u+p*M,s[4]=c*h+_*f+p*v,s[7]=c*E+_*m+p*b,s[2]=B*y+d*u+Q*M,s[5]=B*h+d*f+Q*v,s[8]=B*E+d*m+Q*b,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],A=e[1],o=e[2],s=e[3],a=e[4],g=e[5],I=e[6],c=e[7],_=e[8];return i*a*_-i*g*c-A*s*_+A*g*I+o*s*c-o*a*I}invert(){const e=this.elements,i=e[0],A=e[1],o=e[2],s=e[3],a=e[4],g=e[5],I=e[6],c=e[7],_=e[8],p=_*a-g*c,B=g*I-_*s,d=c*s-a*I,Q=i*p+A*B+o*d;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/Q;return e[0]=p*y,e[1]=(o*c-_*A)*y,e[2]=(g*A-o*a)*y,e[3]=B*y,e[4]=(_*i-o*I)*y,e[5]=(o*s-g*i)*y,e[6]=d*y,e[7]=(A*I-c*i)*y,e[8]=(a*i-A*s)*y,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,A,o,s,a,g){const I=Math.cos(s),c=Math.sin(s);return this.set(A*I,A*c,-A*(I*a+c*g)+a+e,-o*c,o*I,-o*(-c*a+I*g)+g+i,0,0,1),this}scale(e,i){return this.premultiply(np.makeScale(e,i)),this}rotate(e){return this.premultiply(np.makeRotation(-e)),this}translate(e,i){return this.premultiply(np.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),A=Math.sin(e);return this.set(i,-A,0,A,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,A=e.elements;for(let o=0;o<9;o++)if(i[o]!==A[o])return!1;return!0}fromArray(e,i=0){for(let A=0;A<9;A++)this.elements[A]=e[A+i];return this}toArray(e=[],i=0){const A=this.elements;return e[i]=A[0],e[i+1]=A[1],e[i+2]=A[2],e[i+3]=A[3],e[i+4]=A[4],e[i+5]=A[5],e[i+6]=A[6],e[i+7]=A[7],e[i+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const np=new RA;function AO(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kj(){const n=pc("canvas");return n.style.display="block",n}const y1={};function MI(n){n in y1||(y1[n]=!0,console.warn(n))}function Hj(n,e,i){return new Promise(function(A,o){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:A()}}setTimeout(s,i)})}function Pj(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kj(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(n,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Qt&&(n.r=Lo(n.r),n.g=Lo(n.g),n.b=Lo(n.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Qt&&(n.r=Eg(n.r),n.g=Eg(n.g),n.b=Eg(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zr?Q_:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,i){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Lo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eg(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const m1=[.64,.33,.3,.6,.15,.06],D1=[.2126,.7152,.0722],S1=[.3127,.329],w1=new RA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v1=new RA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Ns]:{primaries:m1,whitePoint:S1,transfer:Q_,toXYZ:w1,fromXYZ:v1,luminanceCoefficients:D1,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:m1,whitePoint:S1,transfer:Qt,toXYZ:w1,fromXYZ:v1,luminanceCoefficients:D1,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let ma;class Jj{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=pc("canvas")),ma.width=e.width,ma.height=e.height;const A=ma.getContext("2d");e instanceof ImageData?A.putImageData(e,0,0):A.drawImage(e,0,0,e.width,e.height),i=ma}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=pc("canvas");i.width=e.width,i.height=e.height;const A=i.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const o=A.getImageData(0,0,e.width,e.height),s=o.data;for(let a=0;a<s.length;a++)s[a]=Lo(s[a]/255)*255;return A.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let A=0;A<i.length;A++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[A]=Math.floor(Lo(i[A]/255)*255):i[A]=Lo(i[A]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oj=0;class tO{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oj++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let a=0,g=o.length;a<g;a++)o[a].isDataTexture?s.push(rp(o[a].image)):s.push(rp(o[a]))}else s=rp(o);A.url=s}return i||(e.images[this.uuid]=A),A}}function rp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jj.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yj=0;class si extends Oo{constructor(e=si.DEFAULT_IMAGE,i=si.DEFAULT_MAPPING,A=eo,o=eo,s=en,a=vo,g=vn,I=nn,c=si.DEFAULT_ANISOTROPY,_=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yj++}),this.uuid=Lr(),this.name="",this.source=new tO(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=A,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=g,this.internalFormat=null,this.type=I,this.offset=new iA(0,0),this.repeat=new iA(1,1),this.center=new iA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new RA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),i||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KJ)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case eo:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case eo:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=KJ;si.DEFAULT_ANISOTROPY=1;class fA{constructor(e=0,i=0,A=0,o=1){fA.prototype.isVector4=!0,this.x=e,this.y=i,this.z=A,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,A,o){return this.x=e,this.y=i,this.z=A,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,A=this.y,o=this.z,s=this.w,a=e.elements;return this.x=a[0]*i+a[4]*A+a[8]*o+a[12]*s,this.y=a[1]*i+a[5]*A+a[9]*o+a[13]*s,this.z=a[2]*i+a[6]*A+a[10]*o+a[14]*s,this.w=a[3]*i+a[7]*A+a[11]*o+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,A,o,s;const I=e.elements,c=I[0],_=I[4],p=I[8],B=I[1],d=I[5],Q=I[9],y=I[2],h=I[6],E=I[10];if(Math.abs(_-B)<.01&&Math.abs(p-y)<.01&&Math.abs(Q-h)<.01){if(Math.abs(_+B)<.1&&Math.abs(p+y)<.1&&Math.abs(Q+h)<.1&&Math.abs(c+d+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const f=(c+1)/2,m=(d+1)/2,M=(E+1)/2,v=(_+B)/4,b=(p+y)/4,x=(Q+h)/4;return f>m&&f>M?f<.01?(A=0,o=.707106781,s=.707106781):(A=Math.sqrt(f),o=v/A,s=b/A):m>M?m<.01?(A=.707106781,o=0,s=.707106781):(o=Math.sqrt(m),A=v/o,s=x/o):M<.01?(A=.707106781,o=.707106781,s=0):(s=Math.sqrt(M),A=b/s,o=x/s),this.set(A,o,s,i),this}let u=Math.sqrt((h-Q)*(h-Q)+(p-y)*(p-y)+(B-_)*(B-_));return Math.abs(u)<.001&&(u=1),this.x=(h-Q)/u,this.y=(p-y)/u,this.z=(B-_)/u,this.w=Math.acos((c+d+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(i,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,A){return this.x=e.x+(i.x-e.x)*A,this.y=e.y+(i.y-e.y)*A,this.z=e.z+(i.z-e.z)*A,this.w=e.w+(i.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qj extends Oo{constructor(e=1,i=1,A={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new fA(0,0,e,i),this.scissorTest=!1,this.viewport=new fA(0,0,e,i);const o={width:e,height:i,depth:1};A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},A);const s=new si(o,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace);s.flipY=!1,s.generateMipmaps=A.generateMipmaps,s.internalFormat=A.internalFormat,this.textures=[];const a=A.count;for(let g=0;g<a;g++)this.textures[g]=s.clone(),this.textures[g].isRenderTargetTexture=!0;this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this.depthTexture=A.depthTexture,this.samples=A.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,A=1){if(this.width!==e||this.height!==i||this.depth!==A){this.width=e,this.height=i,this.depth=A;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=A;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let A=0,o=e.textures.length;A<o;A++)this.textures[A]=e.textures[A].clone(),this.textures[A].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new tO(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends qj{constructor(e=1,i=1,A={}){super(e,i,A),this.isWebGLRenderTarget=!0}}class iO extends si{constructor(e=null,i=1,A=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:A,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jj extends si{constructor(e=null,i=1,A=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:A,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,i=0,A=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=A,this._w=o}static slerpFlat(e,i,A,o,s,a,g){let I=A[o+0],c=A[o+1],_=A[o+2],p=A[o+3];const B=s[a+0],d=s[a+1],Q=s[a+2],y=s[a+3];if(g===0){e[i+0]=I,e[i+1]=c,e[i+2]=_,e[i+3]=p;return}if(g===1){e[i+0]=B,e[i+1]=d,e[i+2]=Q,e[i+3]=y;return}if(p!==y||I!==B||c!==d||_!==Q){let h=1-g;const E=I*B+c*d+_*Q+p*y,u=E>=0?1:-1,f=1-E*E;if(f>Number.EPSILON){const M=Math.sqrt(f),v=Math.atan2(M,E*u);h=Math.sin(h*v)/M,g=Math.sin(g*v)/M}const m=g*u;if(I=I*h+B*m,c=c*h+d*m,_=_*h+Q*m,p=p*h+y*m,h===1-g){const M=1/Math.sqrt(I*I+c*c+_*_+p*p);I*=M,c*=M,_*=M,p*=M}}e[i]=I,e[i+1]=c,e[i+2]=_,e[i+3]=p}static multiplyQuaternionsFlat(e,i,A,o,s,a){const g=A[o],I=A[o+1],c=A[o+2],_=A[o+3],p=s[a],B=s[a+1],d=s[a+2],Q=s[a+3];return e[i]=g*Q+_*p+I*d-c*B,e[i+1]=I*Q+_*B+c*p-g*d,e[i+2]=c*Q+_*d+g*B-I*p,e[i+3]=_*Q-g*p-I*B-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,A,o){return this._x=e,this._y=i,this._z=A,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const A=e._x,o=e._y,s=e._z,a=e._order,g=Math.cos,I=Math.sin,c=g(A/2),_=g(o/2),p=g(s/2),B=I(A/2),d=I(o/2),Q=I(s/2);switch(a){case"XYZ":this._x=B*_*p+c*d*Q,this._y=c*d*p-B*_*Q,this._z=c*_*Q+B*d*p,this._w=c*_*p-B*d*Q;break;case"YXZ":this._x=B*_*p+c*d*Q,this._y=c*d*p-B*_*Q,this._z=c*_*Q-B*d*p,this._w=c*_*p+B*d*Q;break;case"ZXY":this._x=B*_*p-c*d*Q,this._y=c*d*p+B*_*Q,this._z=c*_*Q+B*d*p,this._w=c*_*p-B*d*Q;break;case"ZYX":this._x=B*_*p-c*d*Q,this._y=c*d*p+B*_*Q,this._z=c*_*Q-B*d*p,this._w=c*_*p+B*d*Q;break;case"YZX":this._x=B*_*p+c*d*Q,this._y=c*d*p+B*_*Q,this._z=c*_*Q-B*d*p,this._w=c*_*p-B*d*Q;break;case"XZY":this._x=B*_*p-c*d*Q,this._y=c*d*p-B*_*Q,this._z=c*_*Q+B*d*p,this._w=c*_*p+B*d*Q;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const A=i/2,o=Math.sin(A);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,A=i[0],o=i[4],s=i[8],a=i[1],g=i[5],I=i[9],c=i[2],_=i[6],p=i[10],B=A+g+p;if(B>0){const d=.5/Math.sqrt(B+1);this._w=.25/d,this._x=(_-I)*d,this._y=(s-c)*d,this._z=(a-o)*d}else if(A>g&&A>p){const d=2*Math.sqrt(1+A-g-p);this._w=(_-I)/d,this._x=.25*d,this._y=(o+a)/d,this._z=(s+c)/d}else if(g>p){const d=2*Math.sqrt(1+g-A-p);this._w=(s-c)/d,this._x=(o+a)/d,this._y=.25*d,this._z=(I+_)/d}else{const d=2*Math.sqrt(1+p-A-g);this._w=(a-o)/d,this._x=(s+c)/d,this._y=(I+_)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let A=e.dot(i)+1;return A<Number.EPSILON?(A=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=A):(this._x=0,this._y=-e.z,this._z=e.y,this._w=A)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=A),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(li(this.dot(e),-1,1)))}rotateTowards(e,i){const A=this.angleTo(e);if(A===0)return this;const o=Math.min(1,i/A);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const A=e._x,o=e._y,s=e._z,a=e._w,g=i._x,I=i._y,c=i._z,_=i._w;return this._x=A*_+a*g+o*c-s*I,this._y=o*_+a*I+s*g-A*c,this._z=s*_+a*c+A*I-o*g,this._w=a*_-A*g-o*I-s*c,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const A=this._x,o=this._y,s=this._z,a=this._w;let g=a*e._w+A*e._x+o*e._y+s*e._z;if(g<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,g=-g):this.copy(e),g>=1)return this._w=a,this._x=A,this._y=o,this._z=s,this;const I=1-g*g;if(I<=Number.EPSILON){const d=1-i;return this._w=d*a+i*this._w,this._x=d*A+i*this._x,this._y=d*o+i*this._y,this._z=d*s+i*this._z,this.normalize(),this}const c=Math.sqrt(I),_=Math.atan2(c,g),p=Math.sin((1-i)*_)/c,B=Math.sin(i*_)/c;return this._w=a*p+this._w*B,this._x=A*p+this._x*B,this._y=o*p+this._y*B,this._z=s*p+this._z*B,this._onChangeCallback(),this}slerpQuaternions(e,i,A){return this.copy(e).slerp(i,A)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),A=Math.random(),o=Math.sqrt(1-A),s=Math.sqrt(A);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(i),s*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,i=0,A=0){T.prototype.isVector3=!0,this.x=e,this.y=i,this.z=A}set(e,i,A){return A===void 0&&(A=this.z),this.x=e,this.y=i,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(b1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(b1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,A=this.y,o=this.z,s=e.elements;return this.x=s[0]*i+s[3]*A+s[6]*o,this.y=s[1]*i+s[4]*A+s[7]*o,this.z=s[2]*i+s[5]*A+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,A=this.y,o=this.z,s=e.elements,a=1/(s[3]*i+s[7]*A+s[11]*o+s[15]);return this.x=(s[0]*i+s[4]*A+s[8]*o+s[12])*a,this.y=(s[1]*i+s[5]*A+s[9]*o+s[13])*a,this.z=(s[2]*i+s[6]*A+s[10]*o+s[14])*a,this}applyQuaternion(e){const i=this.x,A=this.y,o=this.z,s=e.x,a=e.y,g=e.z,I=e.w,c=2*(a*o-g*A),_=2*(g*i-s*o),p=2*(s*A-a*i);return this.x=i+I*c+a*p-g*_,this.y=A+I*_+g*c-s*p,this.z=o+I*p+s*_-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,A=this.y,o=this.z,s=e.elements;return this.x=s[0]*i+s[4]*A+s[8]*o,this.y=s[1]*i+s[5]*A+s[9]*o,this.z=s[2]*i+s[6]*A+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(i,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,A){return this.x=e.x+(i.x-e.x)*A,this.y=e.y+(i.y-e.y)*A,this.z=e.z+(i.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const A=e.x,o=e.y,s=e.z,a=i.x,g=i.y,I=i.z;return this.x=o*I-s*g,this.y=s*a-A*I,this.z=A*g-o*a,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const A=e.dot(this)/i;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return op.copy(this).projectOnVector(e),this.sub(op)}reflect(e){return this.sub(op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const A=this.dot(e)/i;return Math.acos(li(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,A=this.y-e.y,o=this.z-e.z;return i*i+A*A+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,A){const o=Math.sin(i)*e;return this.x=o*Math.sin(A),this.y=Math.cos(i)*e,this.z=o*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,A){return this.x=e*Math.sin(i),this.y=A,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=A,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,A=Math.sqrt(1-i*i);return this.x=A*Math.cos(e),this.y=i,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const op=new T,b1=new Ir;class St{constructor(e=new T(1/0,1/0,1/0),i=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,A=e.length;i<A;i+=3)this.expandByPoint(yr.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,A=e.count;i<A;i++)this.expandByPoint(yr.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,A=e.length;i<A;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const A=yr.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const s=A.getAttribute("position");if(i===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,g=s.count;a<g;a++)e.isMesh===!0?e.getVertexPosition(a,yr):yr.fromBufferAttribute(s,a),yr.applyMatrix4(e.matrixWorld),this.expandByPoint(yr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),Zc.copy(A.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}const o=e.children;for(let s=0,a=o.length;s<a;s++)this.expandByObject(o[s],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yr),yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,A;return e.normal.x>0?(i=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),i<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aI),$c.subVectors(this.max,aI),Da.subVectors(e.a,aI),Sa.subVectors(e.b,aI),wa.subVectors(e.c,aI),Vo.subVectors(Sa,Da),zo.subVectors(wa,Sa),Fs.subVectors(Da,wa);let i=[0,-Vo.z,Vo.y,0,-zo.z,zo.y,0,-Fs.z,Fs.y,Vo.z,0,-Vo.x,zo.z,0,-zo.x,Fs.z,0,-Fs.x,-Vo.y,Vo.x,0,-zo.y,zo.x,0,-Fs.y,Fs.x,0];return!sp(i,Da,Sa,wa,$c)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,Da,Sa,wa,$c))?!1:(eC.crossVectors(Vo,zo),i=[eC.x,eC.y,eC.z],sp(i,Da,Sa,wa,$c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lo),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lo=[new T,new T,new T,new T,new T,new T,new T,new T],yr=new T,Zc=new St,Da=new T,Sa=new T,wa=new T,Vo=new T,zo=new T,Fs=new T,aI=new T,$c=new T,eC=new T,Ts=new T;function sp(n,e,i,A,o){for(let s=0,a=n.length-3;s<=a;s+=3){Ts.fromArray(n,s);const g=o.x*Math.abs(Ts.x)+o.y*Math.abs(Ts.y)+o.z*Math.abs(Ts.z),I=e.dot(Ts),c=i.dot(Ts),_=A.dot(Ts);if(Math.max(-Math.max(I,c,_),Math.min(I,c,_))>g)return!1}return!0}const Vj=new St,gI=new T,ap=new T;class wi{constructor(e=new T,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const A=this.center;i!==void 0?A.copy(i):Vj.setFromPoints(e).getCenter(A);let o=0;for(let s=0,a=e.length;s<a;s++)o=Math.max(o,A.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const A=this.center.distanceToSquared(e);return i.copy(e),A>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gI.subVectors(e,this.center);const i=gI.lengthSq();if(i>this.radius*this.radius){const A=Math.sqrt(i),o=(A-this.radius)*.5;this.center.addScaledVector(gI,o/A),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ap.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gI.copy(e.center).add(ap)),this.expandByPoint(gI.copy(e.center).sub(ap))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _o=new T,gp=new T,AC=new T,Wo=new T,Ip=new T,tC=new T,cp=new T;class Hg{constructor(e=new T,i=new T(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_o)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const A=i.dot(this.direction);return A<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_o.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_o.copy(this.origin).addScaledVector(this.direction,i),_o.distanceToSquared(e))}distanceSqToSegment(e,i,A,o){gp.copy(e).add(i).multiplyScalar(.5),AC.copy(i).sub(e).normalize(),Wo.copy(this.origin).sub(gp);const s=e.distanceTo(i)*.5,a=-this.direction.dot(AC),g=Wo.dot(this.direction),I=-Wo.dot(AC),c=Wo.lengthSq(),_=Math.abs(1-a*a);let p,B,d,Q;if(_>0)if(p=a*I-g,B=a*g-I,Q=s*_,p>=0)if(B>=-Q)if(B<=Q){const y=1/_;p*=y,B*=y,d=p*(p+a*B+2*g)+B*(a*p+B+2*I)+c}else B=s,p=Math.max(0,-(a*B+g)),d=-p*p+B*(B+2*I)+c;else B=-s,p=Math.max(0,-(a*B+g)),d=-p*p+B*(B+2*I)+c;else B<=-Q?(p=Math.max(0,-(-a*s+g)),B=p>0?-s:Math.min(Math.max(-s,-I),s),d=-p*p+B*(B+2*I)+c):B<=Q?(p=0,B=Math.min(Math.max(-s,-I),s),d=B*(B+2*I)+c):(p=Math.max(0,-(a*s+g)),B=p>0?s:Math.min(Math.max(-s,-I),s),d=-p*p+B*(B+2*I)+c);else B=a>0?-s:s,p=Math.max(0,-(a*B+g)),d=-p*p+B*(B+2*I)+c;return A&&A.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(gp).addScaledVector(AC,B),d}intersectSphere(e,i){_o.subVectors(e.center,this.origin);const A=_o.dot(this.direction),o=_o.dot(_o)-A*A,s=e.radius*e.radius;if(o>s)return null;const a=Math.sqrt(s-o),g=A-a,I=A+a;return I<0?null:g<0?this.at(I,i):this.at(g,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(e.normal)+e.constant)/i;return A>=0?A:null}intersectPlane(e,i){const A=this.distanceToPlane(e);return A===null?null:this.at(A,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let A,o,s,a,g,I;const c=1/this.direction.x,_=1/this.direction.y,p=1/this.direction.z,B=this.origin;return c>=0?(A=(e.min.x-B.x)*c,o=(e.max.x-B.x)*c):(A=(e.max.x-B.x)*c,o=(e.min.x-B.x)*c),_>=0?(s=(e.min.y-B.y)*_,a=(e.max.y-B.y)*_):(s=(e.max.y-B.y)*_,a=(e.min.y-B.y)*_),A>a||s>o||((s>A||isNaN(A))&&(A=s),(a<o||isNaN(o))&&(o=a),p>=0?(g=(e.min.z-B.z)*p,I=(e.max.z-B.z)*p):(g=(e.max.z-B.z)*p,I=(e.min.z-B.z)*p),A>I||g>o)||((g>A||A!==A)&&(A=g),(I<o||o!==o)&&(o=I),o<0)?null:this.at(A>=0?A:o,i)}intersectsBox(e){return this.intersectBox(e,_o)!==null}intersectTriangle(e,i,A,o,s){Ip.subVectors(i,e),tC.subVectors(A,e),cp.crossVectors(Ip,tC);let a=this.direction.dot(cp),g;if(a>0){if(o)return null;g=1}else if(a<0)g=-1,a=-a;else return null;Wo.subVectors(this.origin,e);const I=g*this.direction.dot(tC.crossVectors(Wo,tC));if(I<0)return null;const c=g*this.direction.dot(Ip.cross(Wo));if(c<0||I+c>a)return null;const _=-g*Wo.dot(cp);return _<0?null:this.at(_/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(e,i,A,o,s,a,g,I,c,_,p,B,d,Q,y,h){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,A,o,s,a,g,I,c,_,p,B,d,Q,y,h)}set(e,i,A,o,s,a,g,I,c,_,p,B,d,Q,y,h){const E=this.elements;return E[0]=e,E[4]=i,E[8]=A,E[12]=o,E[1]=s,E[5]=a,E[9]=g,E[13]=I,E[2]=c,E[6]=_,E[10]=p,E[14]=B,E[3]=d,E[7]=Q,E[11]=y,E[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const i=this.elements,A=e.elements;return i[0]=A[0],i[1]=A[1],i[2]=A[2],i[3]=A[3],i[4]=A[4],i[5]=A[5],i[6]=A[6],i[7]=A[7],i[8]=A[8],i[9]=A[9],i[10]=A[10],i[11]=A[11],i[12]=A[12],i[13]=A[13],i[14]=A[14],i[15]=A[15],this}copyPosition(e){const i=this.elements,A=e.elements;return i[12]=A[12],i[13]=A[13],i[14]=A[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,A){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,i,A){return this.set(e.x,i.x,A.x,0,e.y,i.y,A.y,0,e.z,i.z,A.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,A=e.elements,o=1/va.setFromMatrixColumn(e,0).length(),s=1/va.setFromMatrixColumn(e,1).length(),a=1/va.setFromMatrixColumn(e,2).length();return i[0]=A[0]*o,i[1]=A[1]*o,i[2]=A[2]*o,i[3]=0,i[4]=A[4]*s,i[5]=A[5]*s,i[6]=A[6]*s,i[7]=0,i[8]=A[8]*a,i[9]=A[9]*a,i[10]=A[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,A=e.x,o=e.y,s=e.z,a=Math.cos(A),g=Math.sin(A),I=Math.cos(o),c=Math.sin(o),_=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const B=a*_,d=a*p,Q=g*_,y=g*p;i[0]=I*_,i[4]=-I*p,i[8]=c,i[1]=d+Q*c,i[5]=B-y*c,i[9]=-g*I,i[2]=y-B*c,i[6]=Q+d*c,i[10]=a*I}else if(e.order==="YXZ"){const B=I*_,d=I*p,Q=c*_,y=c*p;i[0]=B+y*g,i[4]=Q*g-d,i[8]=a*c,i[1]=a*p,i[5]=a*_,i[9]=-g,i[2]=d*g-Q,i[6]=y+B*g,i[10]=a*I}else if(e.order==="ZXY"){const B=I*_,d=I*p,Q=c*_,y=c*p;i[0]=B-y*g,i[4]=-a*p,i[8]=Q+d*g,i[1]=d+Q*g,i[5]=a*_,i[9]=y-B*g,i[2]=-a*c,i[6]=g,i[10]=a*I}else if(e.order==="ZYX"){const B=a*_,d=a*p,Q=g*_,y=g*p;i[0]=I*_,i[4]=Q*c-d,i[8]=B*c+y,i[1]=I*p,i[5]=y*c+B,i[9]=d*c-Q,i[2]=-c,i[6]=g*I,i[10]=a*I}else if(e.order==="YZX"){const B=a*I,d=a*c,Q=g*I,y=g*c;i[0]=I*_,i[4]=y-B*p,i[8]=Q*p+d,i[1]=p,i[5]=a*_,i[9]=-g*_,i[2]=-c*_,i[6]=d*p+Q,i[10]=B-y*p}else if(e.order==="XZY"){const B=a*I,d=a*c,Q=g*I,y=g*c;i[0]=I*_,i[4]=-p,i[8]=c*_,i[1]=B*p+y,i[5]=a*_,i[9]=d*p-Q,i[2]=Q*p-d,i[6]=g*_,i[10]=y*p+B}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zj,e,Wj)}lookAt(e,i,A){const o=this.elements;return Tn.subVectors(e,i),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Xo.crossVectors(A,Tn),Xo.lengthSq()===0&&(Math.abs(A.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Xo.crossVectors(A,Tn)),Xo.normalize(),iC.crossVectors(Tn,Xo),o[0]=Xo.x,o[4]=iC.x,o[8]=Tn.x,o[1]=Xo.y,o[5]=iC.y,o[9]=Tn.y,o[2]=Xo.z,o[6]=iC.z,o[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const A=e.elements,o=i.elements,s=this.elements,a=A[0],g=A[4],I=A[8],c=A[12],_=A[1],p=A[5],B=A[9],d=A[13],Q=A[2],y=A[6],h=A[10],E=A[14],u=A[3],f=A[7],m=A[11],M=A[15],v=o[0],b=o[4],x=o[8],w=o[12],S=o[1],F=o[5],k=o[9],P=o[13],z=o[2],ie=o[6],W=o[10],de=o[14],H=o[3],oe=o[7],_e=o[11],ve=o[15];return s[0]=a*v+g*S+I*z+c*H,s[4]=a*b+g*F+I*ie+c*oe,s[8]=a*x+g*k+I*W+c*_e,s[12]=a*w+g*P+I*de+c*ve,s[1]=_*v+p*S+B*z+d*H,s[5]=_*b+p*F+B*ie+d*oe,s[9]=_*x+p*k+B*W+d*_e,s[13]=_*w+p*P+B*de+d*ve,s[2]=Q*v+y*S+h*z+E*H,s[6]=Q*b+y*F+h*ie+E*oe,s[10]=Q*x+y*k+h*W+E*_e,s[14]=Q*w+y*P+h*de+E*ve,s[3]=u*v+f*S+m*z+M*H,s[7]=u*b+f*F+m*ie+M*oe,s[11]=u*x+f*k+m*W+M*_e,s[15]=u*w+f*P+m*de+M*ve,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],A=e[4],o=e[8],s=e[12],a=e[1],g=e[5],I=e[9],c=e[13],_=e[2],p=e[6],B=e[10],d=e[14],Q=e[3],y=e[7],h=e[11],E=e[15];return Q*(+s*I*p-o*c*p-s*g*B+A*c*B+o*g*d-A*I*d)+y*(+i*I*d-i*c*B+s*a*B-o*a*d+o*c*_-s*I*_)+h*(+i*c*p-i*g*d-s*a*p+A*a*d+s*g*_-A*c*_)+E*(-o*g*_-i*I*p+i*g*B+o*a*p-A*a*B+A*I*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,A){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=A),this}invert(){const e=this.elements,i=e[0],A=e[1],o=e[2],s=e[3],a=e[4],g=e[5],I=e[6],c=e[7],_=e[8],p=e[9],B=e[10],d=e[11],Q=e[12],y=e[13],h=e[14],E=e[15],u=p*h*c-y*B*c+y*I*d-g*h*d-p*I*E+g*B*E,f=Q*B*c-_*h*c-Q*I*d+a*h*d+_*I*E-a*B*E,m=_*y*c-Q*p*c+Q*g*d-a*y*d-_*g*E+a*p*E,M=Q*p*I-_*y*I-Q*g*B+a*y*B+_*g*h-a*p*h,v=i*u+A*f+o*m+s*M;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=u*b,e[1]=(y*B*s-p*h*s-y*o*d+A*h*d+p*o*E-A*B*E)*b,e[2]=(g*h*s-y*I*s+y*o*c-A*h*c-g*o*E+A*I*E)*b,e[3]=(p*I*s-g*B*s-p*o*c+A*B*c+g*o*d-A*I*d)*b,e[4]=f*b,e[5]=(_*h*s-Q*B*s+Q*o*d-i*h*d-_*o*E+i*B*E)*b,e[6]=(Q*I*s-a*h*s-Q*o*c+i*h*c+a*o*E-i*I*E)*b,e[7]=(a*B*s-_*I*s+_*o*c-i*B*c-a*o*d+i*I*d)*b,e[8]=m*b,e[9]=(Q*p*s-_*y*s-Q*A*d+i*y*d+_*A*E-i*p*E)*b,e[10]=(a*y*s-Q*g*s+Q*A*c-i*y*c-a*A*E+i*g*E)*b,e[11]=(_*g*s-a*p*s-_*A*c+i*p*c+a*A*d-i*g*d)*b,e[12]=M*b,e[13]=(_*y*o-Q*p*o+Q*A*B-i*y*B-_*A*h+i*p*h)*b,e[14]=(Q*g*o-a*y*o-Q*A*I+i*y*I+a*A*h-i*g*h)*b,e[15]=(a*p*o-_*g*o+_*A*I-i*p*I-a*A*B+i*g*B)*b,this}scale(e){const i=this.elements,A=e.x,o=e.y,s=e.z;return i[0]*=A,i[4]*=o,i[8]*=s,i[1]*=A,i[5]*=o,i[9]*=s,i[2]*=A,i[6]*=o,i[10]*=s,i[3]*=A,i[7]*=o,i[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,A,o))}makeTranslation(e,i,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,A,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,i,-A,0,0,A,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),A=Math.sin(e);return this.set(i,0,A,0,0,1,0,0,-A,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),A=Math.sin(e);return this.set(i,-A,0,0,A,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const A=Math.cos(i),o=Math.sin(i),s=1-A,a=e.x,g=e.y,I=e.z,c=s*a,_=s*g;return this.set(c*a+A,c*g-o*I,c*I+o*g,0,c*g+o*I,_*g+A,_*I-o*a,0,c*I-o*g,_*I+o*a,s*I*I+A,0,0,0,0,1),this}makeScale(e,i,A){return this.set(e,0,0,0,0,i,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,i,A,o,s,a){return this.set(1,A,s,0,e,1,a,0,i,o,1,0,0,0,0,1),this}compose(e,i,A){const o=this.elements,s=i._x,a=i._y,g=i._z,I=i._w,c=s+s,_=a+a,p=g+g,B=s*c,d=s*_,Q=s*p,y=a*_,h=a*p,E=g*p,u=I*c,f=I*_,m=I*p,M=A.x,v=A.y,b=A.z;return o[0]=(1-(y+E))*M,o[1]=(d+m)*M,o[2]=(Q-f)*M,o[3]=0,o[4]=(d-m)*v,o[5]=(1-(B+E))*v,o[6]=(h+u)*v,o[7]=0,o[8]=(Q+f)*b,o[9]=(h-u)*b,o[10]=(1-(B+y))*b,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,A){const o=this.elements;let s=va.set(o[0],o[1],o[2]).length();const a=va.set(o[4],o[5],o[6]).length(),g=va.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),e.x=o[12],e.y=o[13],e.z=o[14],mr.copy(this);const c=1/s,_=1/a,p=1/g;return mr.elements[0]*=c,mr.elements[1]*=c,mr.elements[2]*=c,mr.elements[4]*=_,mr.elements[5]*=_,mr.elements[6]*=_,mr.elements[8]*=p,mr.elements[9]*=p,mr.elements[10]*=p,i.setFromRotationMatrix(mr),A.x=s,A.y=a,A.z=g,this}makePerspective(e,i,A,o,s,a,g=bo){const I=this.elements,c=2*s/(i-e),_=2*s/(A-o),p=(i+e)/(i-e),B=(A+o)/(A-o);let d,Q;if(g===bo)d=-(a+s)/(a-s),Q=-2*a*s/(a-s);else if(g===Yl)d=-a/(a-s),Q=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+g);return I[0]=c,I[4]=0,I[8]=p,I[12]=0,I[1]=0,I[5]=_,I[9]=B,I[13]=0,I[2]=0,I[6]=0,I[10]=d,I[14]=Q,I[3]=0,I[7]=0,I[11]=-1,I[15]=0,this}makeOrthographic(e,i,A,o,s,a,g=bo){const I=this.elements,c=1/(i-e),_=1/(A-o),p=1/(a-s),B=(i+e)*c,d=(A+o)*_;let Q,y;if(g===bo)Q=(a+s)*p,y=-2*p;else if(g===Yl)Q=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+g);return I[0]=2*c,I[4]=0,I[8]=0,I[12]=-B,I[1]=0,I[5]=2*_,I[9]=0,I[13]=-d,I[2]=0,I[6]=0,I[10]=y,I[14]=-Q,I[3]=0,I[7]=0,I[11]=0,I[15]=1,this}equals(e){const i=this.elements,A=e.elements;for(let o=0;o<16;o++)if(i[o]!==A[o])return!1;return!0}fromArray(e,i=0){for(let A=0;A<16;A++)this.elements[A]=e[A+i];return this}toArray(e=[],i=0){const A=this.elements;return e[i]=A[0],e[i+1]=A[1],e[i+2]=A[2],e[i+3]=A[3],e[i+4]=A[4],e[i+5]=A[5],e[i+6]=A[6],e[i+7]=A[7],e[i+8]=A[8],e[i+9]=A[9],e[i+10]=A[10],e[i+11]=A[11],e[i+12]=A[12],e[i+13]=A[13],e[i+14]=A[14],e[i+15]=A[15],e}}const va=new T,mr=new xe,zj=new T(0,0,0),Wj=new T(1,1,1),Xo=new T,iC=new T,Tn=new T,M1=new xe,R1=new Ir;class Pi{constructor(e=0,i=0,A=0,o=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=A,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,A,o=this._order){return this._x=e,this._y=i,this._z=A,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,A=!0){const o=e.elements,s=o[0],a=o[4],g=o[8],I=o[1],c=o[5],_=o[9],p=o[2],B=o[6],d=o[10];switch(i){case"XYZ":this._y=Math.asin(li(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(B,c),this._z=0);break;case"YXZ":this._x=Math.asin(-li(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(g,d),this._z=Math.atan2(I,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(li(B,-1,1)),Math.abs(B)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(I,s));break;case"ZYX":this._y=Math.asin(-li(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(B,d),this._z=Math.atan2(I,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(li(I,-1,1)),Math.abs(I)<.9999999?(this._x=Math.atan2(-_,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(g,d));break;case"XZY":this._z=Math.asin(-li(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(B,c),this._y=Math.atan2(g,s)):(this._x=Math.atan2(-_,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,A){return M1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M1,i,A)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return R1.setFromEuler(this),this.setFromQuaternion(R1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xj=0;const N1=new T,ba=new Ir,po=new xe,nC=new T,II=new T,Zj=new T,$j=new Ir,x1=new T(1,0,0),L1=new T(0,1,0),F1=new T(0,0,1),T1={type:"added"},eV={type:"removed"},Ma={type:"childadded",child:null},Cp={type:"childremoved",child:null};class ft extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xj++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new T,i=new Pi,A=new Ir,o=new T(1,1,1);function s(){A.setFromEuler(i,!1)}function a(){i.setFromQuaternion(A,void 0,!1)}i._onChange(s),A._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xe},normalMatrix:{value:new RA}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ba.setFromAxisAngle(e,i),this.quaternion.multiply(ba),this}rotateOnWorldAxis(e,i){return ba.setFromAxisAngle(e,i),this.quaternion.premultiply(ba),this}rotateX(e){return this.rotateOnAxis(x1,e)}rotateY(e){return this.rotateOnAxis(L1,e)}rotateZ(e){return this.rotateOnAxis(F1,e)}translateOnAxis(e,i){return N1.copy(e).applyQuaternion(this.quaternion),this.position.add(N1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(x1,e)}translateY(e){return this.translateOnAxis(L1,e)}translateZ(e){return this.translateOnAxis(F1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(po.copy(this.matrixWorld).invert())}lookAt(e,i,A){e.isVector3?nC.copy(e):nC.set(e,i,A);const o=this.parent;this.updateWorldMatrix(!0,!1),II.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?po.lookAt(II,nC,this.up):po.lookAt(nC,II,this.up),this.quaternion.setFromRotationMatrix(po),o&&(po.extractRotation(o.matrixWorld),ba.setFromRotationMatrix(po),this.quaternion.premultiply(ba.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T1),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eV),Cp.child=e,this.dispatchEvent(Cp),Cp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),po.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),po.multiply(e.parent.matrixWorld)),e.applyMatrix4(po),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T1),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let A=0,o=this.children.length;A<o;A++){const a=this.children[A].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,A=[]){this[e]===i&&A.push(this);const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(e,i,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(II,e,Zj),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(II,$j,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let A=0,o=i.length;A<o;A++)i[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let A=0,o=i.length;A<o;A++)i[A].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let A=0,o=i.length;A<o;A++)i[A].updateMatrixWorld(e)}updateWorldMatrix(e,i){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",A={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(g=>({boxInitialized:g.boxInitialized,boxMin:g.box.min.toArray(),boxMax:g.box.max.toArray(),sphereInitialized:g.sphereInitialized,sphereRadius:g.sphere.radius,sphereCenter:g.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(g,I){return g[I.uuid]===void 0&&(g[I.uuid]=I.toJSON(e)),I.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const I=g.shapes;if(Array.isArray(I))for(let c=0,_=I.length;c<_;c++){const p=I[c];s(e.shapes,p)}else s(e.shapes,I)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let I=0,c=this.material.length;I<c;I++)g.push(s(e.materials,this.material[I]));o.material=g}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let g=0;g<this.children.length;g++)o.children.push(this.children[g].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let g=0;g<this.animations.length;g++){const I=this.animations[g];o.animations.push(s(e.animations,I))}}if(i){const g=a(e.geometries),I=a(e.materials),c=a(e.textures),_=a(e.images),p=a(e.shapes),B=a(e.skeletons),d=a(e.animations),Q=a(e.nodes);g.length>0&&(A.geometries=g),I.length>0&&(A.materials=I),c.length>0&&(A.textures=c),_.length>0&&(A.images=_),p.length>0&&(A.shapes=p),B.length>0&&(A.skeletons=B),d.length>0&&(A.animations=d),Q.length>0&&(A.nodes=Q)}return A.object=o,A;function a(g){const I=[];for(const c in g){const _=g[c];delete _.metadata,I.push(_)}return I}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let A=0;A<e.children.length;A++){const o=e.children[A];this.add(o.clone())}return this}}ft.DEFAULT_UP=new T(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dr=new T,Bo=new T,lp=new T,Eo=new T,Ra=new T,Na=new T,U1=new T,_p=new T,pp=new T,Bp=new T,Ep=new fA,dp=new fA,hp=new fA;class Hi{constructor(e=new T,i=new T,A=new T){this.a=e,this.b=i,this.c=A}static getNormal(e,i,A,o){o.subVectors(A,i),Dr.subVectors(e,i),o.cross(Dr);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,i,A,o,s){Dr.subVectors(o,i),Bo.subVectors(A,i),lp.subVectors(e,i);const a=Dr.dot(Dr),g=Dr.dot(Bo),I=Dr.dot(lp),c=Bo.dot(Bo),_=Bo.dot(lp),p=a*c-g*g;if(p===0)return s.set(0,0,0),null;const B=1/p,d=(c*I-g*_)*B,Q=(a*_-g*I)*B;return s.set(1-d-Q,Q,d)}static containsPoint(e,i,A,o){return this.getBarycoord(e,i,A,o,Eo)===null?!1:Eo.x>=0&&Eo.y>=0&&Eo.x+Eo.y<=1}static getInterpolation(e,i,A,o,s,a,g,I){return this.getBarycoord(e,i,A,o,Eo)===null?(I.x=0,I.y=0,"z"in I&&(I.z=0),"w"in I&&(I.w=0),null):(I.setScalar(0),I.addScaledVector(s,Eo.x),I.addScaledVector(a,Eo.y),I.addScaledVector(g,Eo.z),I)}static getInterpolatedAttribute(e,i,A,o,s,a){return Ep.setScalar(0),dp.setScalar(0),hp.setScalar(0),Ep.fromBufferAttribute(e,i),dp.fromBufferAttribute(e,A),hp.fromBufferAttribute(e,o),a.setScalar(0),a.addScaledVector(Ep,s.x),a.addScaledVector(dp,s.y),a.addScaledVector(hp,s.z),a}static isFrontFacing(e,i,A,o){return Dr.subVectors(A,i),Bo.subVectors(e,i),Dr.cross(Bo).dot(o)<0}set(e,i,A){return this.a.copy(e),this.b.copy(i),this.c.copy(A),this}setFromPointsAndIndices(e,i,A,o){return this.a.copy(e[i]),this.b.copy(e[A]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,A,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dr.subVectors(this.c,this.b),Bo.subVectors(this.a,this.b),Dr.cross(Bo).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,A,o,s){return Hi.getInterpolation(e,this.a,this.b,this.c,i,A,o,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const A=this.a,o=this.b,s=this.c;let a,g;Ra.subVectors(o,A),Na.subVectors(s,A),_p.subVectors(e,A);const I=Ra.dot(_p),c=Na.dot(_p);if(I<=0&&c<=0)return i.copy(A);pp.subVectors(e,o);const _=Ra.dot(pp),p=Na.dot(pp);if(_>=0&&p<=_)return i.copy(o);const B=I*p-_*c;if(B<=0&&I>=0&&_<=0)return a=I/(I-_),i.copy(A).addScaledVector(Ra,a);Bp.subVectors(e,s);const d=Ra.dot(Bp),Q=Na.dot(Bp);if(Q>=0&&d<=Q)return i.copy(s);const y=d*c-I*Q;if(y<=0&&c>=0&&Q<=0)return g=c/(c-Q),i.copy(A).addScaledVector(Na,g);const h=_*Q-d*p;if(h<=0&&p-_>=0&&d-Q>=0)return U1.subVectors(s,o),g=(p-_)/(p-_+(d-Q)),i.copy(o).addScaledVector(U1,g);const E=1/(h+y+B);return a=y*E,g=B*E,i.copy(A).addScaledVector(Ra,a).addScaledVector(Na,g)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nO={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zo={h:0,s:0,l:0},rC={h:0,s:0,l:0};function up(n,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(e-n)*6*i:i<1/2?e:i<2/3?n+(e-n)*6*(2/3-i):n}class Ue{constructor(e,i,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,A)}set(e,i,A){if(i===void 0&&A===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,i),this}setRGB(e,i,A,o=et.workingColorSpace){return this.r=e,this.g=i,this.b=A,et.toWorkingColorSpace(this,o),this}setHSL(e,i,A,o=et.workingColorSpace){if(e=Ih(e,1),i=li(i,0,1),A=li(A,0,1),i===0)this.r=this.g=this.b=A;else{const s=A<=.5?A*(1+i):A+i-A*i,a=2*A-s;this.r=up(a,s,e+1/3),this.g=up(a,s,e),this.b=up(a,s,e-1/3)}return et.toWorkingColorSpace(this,o),this}setStyle(e,i=zt){function A(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=o[1],g=o[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return A(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return A(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return A(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(s,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=zt){const A=nO[e.toLowerCase()];return A!==void 0?this.setHex(A,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=Eg(e.r),this.g=Eg(e.g),this.b=Eg(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return et.fromWorkingColorSpace(Xi.copy(this),e),Math.round(li(Xi.r*255,0,255))*65536+Math.round(li(Xi.g*255,0,255))*256+Math.round(li(Xi.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=et.workingColorSpace){et.fromWorkingColorSpace(Xi.copy(this),i);const A=Xi.r,o=Xi.g,s=Xi.b,a=Math.max(A,o,s),g=Math.min(A,o,s);let I,c;const _=(g+a)/2;if(g===a)I=0,c=0;else{const p=a-g;switch(c=_<=.5?p/(a+g):p/(2-a-g),a){case A:I=(o-s)/p+(o<s?6:0);break;case o:I=(s-A)/p+2;break;case s:I=(A-o)/p+4;break}I/=6}return e.h=I,e.s=c,e.l=_,e}getRGB(e,i=et.workingColorSpace){return et.fromWorkingColorSpace(Xi.copy(this),i),e.r=Xi.r,e.g=Xi.g,e.b=Xi.b,e}getStyle(e=zt){et.fromWorkingColorSpace(Xi.copy(this),e);const i=Xi.r,A=Xi.g,o=Xi.b;return e!==zt?`color(${e} ${i.toFixed(3)} ${A.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(A*255)},${Math.round(o*255)})`}offsetHSL(e,i,A){return this.getHSL(Zo),this.setHSL(Zo.h+e,Zo.s+i,Zo.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,A){return this.r=e.r+(i.r-e.r)*A,this.g=e.g+(i.g-e.g)*A,this.b=e.b+(i.b-e.b)*A,this}lerpHSL(e,i){this.getHSL(Zo),e.getHSL(rC);const A=JI(Zo.h,rC.h,i),o=JI(Zo.s,rC.s,i),s=JI(Zo.l,rC.l,i);return this.setHSL(A,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,A=this.g,o=this.b,s=e.elements;return this.r=s[0]*i+s[3]*A+s[6]*o,this.g=s[1]*i+s[4]*A+s[7]*o,this.b=s[2]*i+s[5]*A+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xi=new Ue;Ue.NAMES=nO;let AV=0;class Nn extends Oo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AV++}),this.uuid=Lr(),this.name="",this.blending=pg,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nE,this.blendDst=rE,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=wg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const A=e[i];if(A===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(A):o&&o.isVector3&&A&&A.isVector3?o.copy(A):this[i]=A}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const A={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(e).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(e).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(e).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(e).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(e).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==pg&&(A.blending=this.blending),this.side!==Yn&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==nE&&(A.blendSrc=this.blendSrc),this.blendDst!==rE&&(A.blendDst=this.blendDst),this.blendEquation!==Zs&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==wg&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u1&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ya&&(A.stencilFail=this.stencilFail),this.stencilZFail!==ya&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==ya&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function o(s){const a=[];for(const g in s){const I=s[g];delete I.metadata,a.push(I)}return a}if(i){const s=o(e.textures),a=o(e.images);s.length>0&&(A.textures=s),a.length>0&&(A.images=a)}return A}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let A=null;if(i!==null){const o=i.length;A=new Array(o);for(let s=0;s!==o;++s)A[s]=i[s].clone()}return this.clippingPlanes=A,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mo extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ci=new T,oC=new iA;class Tt{constructor(e,i,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=A,this.usage=PE,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,A){e*=this.itemSize,A*=i.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=i.array[A+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,A=this.count;i<A;i++)oC.fromBufferAttribute(this,i),oC.applyMatrix3(e),this.setXY(i,oC.x,oC.y);else if(this.itemSize===3)for(let i=0,A=this.count;i<A;i++)Ci.fromBufferAttribute(this,i),Ci.applyMatrix3(e),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}applyMatrix4(e){for(let i=0,A=this.count;i<A;i++)Ci.fromBufferAttribute(this,i),Ci.applyMatrix4(e),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}applyNormalMatrix(e){for(let i=0,A=this.count;i<A;i++)Ci.fromBufferAttribute(this,i),Ci.applyNormalMatrix(e),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}transformDirection(e){for(let i=0,A=this.count;i<A;i++)Ci.fromBufferAttribute(this,i),Ci.transformDirection(e),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let A=this.array[e*this.itemSize+i];return this.normalized&&(A=Rr(A,this.array)),A}setComponent(e,i,A){return this.normalized&&(A=Bt(A,this.array)),this.array[e*this.itemSize+i]=A,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Rr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Rr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Rr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Rr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,A){return e*=this.itemSize,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array)),this.array[e+0]=i,this.array[e+1]=A,this}setXYZ(e,i,A,o){return e*=this.itemSize,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array),o=Bt(o,this.array)),this.array[e+0]=i,this.array[e+1]=A,this.array[e+2]=o,this}setXYZW(e,i,A,o,s){return e*=this.itemSize,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array),o=Bt(o,this.array),s=Bt(s,this.array)),this.array[e+0]=i,this.array[e+1]=A,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==PE&&(e.usage=this.usage),e}}class Ch extends Tt{constructor(e,i,A){super(new Uint16Array(e),i,A)}}class rO extends Tt{constructor(e,i,A){super(new Uint32Array(e),i,A)}}class xt extends Tt{constructor(e,i,A){super(new Float32Array(e),i,A)}}let tV=0;const ir=new xe,Qp=new ft,xa=new T,Un=new St,cI=new St,yi=new T;class Ut extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tV++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AO(e)?rO:Ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,A=0){this.groups.push({start:e,count:i,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const s=new RA().getNormalMatrix(e);A.applyNormalMatrix(s),A.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ir.makeRotationFromQuaternion(e),this.applyMatrix4(ir),this}rotateX(e){return ir.makeRotationX(e),this.applyMatrix4(ir),this}rotateY(e){return ir.makeRotationY(e),this.applyMatrix4(ir),this}rotateZ(e){return ir.makeRotationZ(e),this.applyMatrix4(ir),this}translate(e,i,A){return ir.makeTranslation(e,i,A),this.applyMatrix4(ir),this}scale(e,i,A){return ir.makeScale(e,i,A),this.applyMatrix4(ir),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const A=[];for(let o=0,s=e.length;o<s;o++){const a=e[o];A.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(A,3))}else{for(let A=0,o=i.count;A<o;A++){const s=e[A];i.setXYZ(A,s.x,s.y,s.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let A=0,o=i.length;A<o;A++){const s=i[A];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(yi.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(yi),yi.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(yi)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const A=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),i)for(let s=0,a=i.length;s<a;s++){const g=i[s];cI.setFromBufferAttribute(g),this.morphTargetsRelative?(yi.addVectors(Un.min,cI.min),Un.expandByPoint(yi),yi.addVectors(Un.max,cI.max),Un.expandByPoint(yi)):(Un.expandByPoint(cI.min),Un.expandByPoint(cI.max))}Un.getCenter(A);let o=0;for(let s=0,a=e.count;s<a;s++)yi.fromBufferAttribute(e,s),o=Math.max(o,A.distanceToSquared(yi));if(i)for(let s=0,a=i.length;s<a;s++){const g=i[s],I=this.morphTargetsRelative;for(let c=0,_=g.count;c<_;c++)yi.fromBufferAttribute(g,c),I&&(xa.fromBufferAttribute(e,c),yi.add(xa)),o=Math.max(o,A.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=i.position,o=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*A.count),4));const a=this.getAttribute("tangent"),g=[],I=[];for(let x=0;x<A.count;x++)g[x]=new T,I[x]=new T;const c=new T,_=new T,p=new T,B=new iA,d=new iA,Q=new iA,y=new T,h=new T;function E(x,w,S){c.fromBufferAttribute(A,x),_.fromBufferAttribute(A,w),p.fromBufferAttribute(A,S),B.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),Q.fromBufferAttribute(s,S),_.sub(c),p.sub(c),d.sub(B),Q.sub(B);const F=1/(d.x*Q.y-Q.x*d.y);isFinite(F)&&(y.copy(_).multiplyScalar(Q.y).addScaledVector(p,-d.y).multiplyScalar(F),h.copy(p).multiplyScalar(d.x).addScaledVector(_,-Q.x).multiplyScalar(F),g[x].add(y),g[w].add(y),g[S].add(y),I[x].add(h),I[w].add(h),I[S].add(h))}let u=this.groups;u.length===0&&(u=[{start:0,count:e.count}]);for(let x=0,w=u.length;x<w;++x){const S=u[x],F=S.start,k=S.count;for(let P=F,z=F+k;P<z;P+=3)E(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const f=new T,m=new T,M=new T,v=new T;function b(x){M.fromBufferAttribute(o,x),v.copy(M);const w=g[x];f.copy(w),f.sub(M.multiplyScalar(M.dot(w))).normalize(),m.crossVectors(v,w);const F=m.dot(I[x])<0?-1:1;a.setXYZW(x,f.x,f.y,f.z,F)}for(let x=0,w=u.length;x<w;++x){const S=u[x],F=S.start,k=S.count;for(let P=F,z=F+k;P<z;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new Tt(new Float32Array(i.count*3),3),this.setAttribute("normal",A);else for(let B=0,d=A.count;B<d;B++)A.setXYZ(B,0,0,0);const o=new T,s=new T,a=new T,g=new T,I=new T,c=new T,_=new T,p=new T;if(e)for(let B=0,d=e.count;B<d;B+=3){const Q=e.getX(B+0),y=e.getX(B+1),h=e.getX(B+2);o.fromBufferAttribute(i,Q),s.fromBufferAttribute(i,y),a.fromBufferAttribute(i,h),_.subVectors(a,s),p.subVectors(o,s),_.cross(p),g.fromBufferAttribute(A,Q),I.fromBufferAttribute(A,y),c.fromBufferAttribute(A,h),g.add(_),I.add(_),c.add(_),A.setXYZ(Q,g.x,g.y,g.z),A.setXYZ(y,I.x,I.y,I.z),A.setXYZ(h,c.x,c.y,c.z)}else for(let B=0,d=i.count;B<d;B+=3)o.fromBufferAttribute(i,B+0),s.fromBufferAttribute(i,B+1),a.fromBufferAttribute(i,B+2),_.subVectors(a,s),p.subVectors(o,s),_.cross(p),A.setXYZ(B+0,_.x,_.y,_.z),A.setXYZ(B+1,_.x,_.y,_.z),A.setXYZ(B+2,_.x,_.y,_.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,A=e.count;i<A;i++)yi.fromBufferAttribute(e,i),yi.normalize(),e.setXYZ(i,yi.x,yi.y,yi.z)}toNonIndexed(){function e(g,I){const c=g.array,_=g.itemSize,p=g.normalized,B=new c.constructor(I.length*_);let d=0,Q=0;for(let y=0,h=I.length;y<h;y++){g.isInterleavedBufferAttribute?d=I[y]*g.data.stride+g.offset:d=I[y]*_;for(let E=0;E<_;E++)B[Q++]=c[d++]}return new Tt(B,_,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ut,A=this.index.array,o=this.attributes;for(const g in o){const I=o[g],c=e(I,A);i.setAttribute(g,c)}const s=this.morphAttributes;for(const g in s){const I=[],c=s[g];for(let _=0,p=c.length;_<p;_++){const B=c[_],d=e(B,A);I.push(d)}i.morphAttributes[g]=I}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let g=0,I=a.length;g<I;g++){const c=a[g];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const I=this.parameters;for(const c in I)I[c]!==void 0&&(e[c]=I[c]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const A=this.attributes;for(const I in A){const c=A[I];e.data.attributes[I]=c.toJSON(e.data)}const o={};let s=!1;for(const I in this.morphAttributes){const c=this.morphAttributes[I],_=[];for(let p=0,B=c.length;p<B;p++){const d=c[p];_.push(d.toJSON(e.data))}_.length>0&&(o[I]=_,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const g=this.boundingSphere;return g!==null&&(e.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone(i));const o=e.attributes;for(const c in o){const _=o[c];this.setAttribute(c,_.clone(i))}const s=e.morphAttributes;for(const c in s){const _=[],p=s[c];for(let B=0,d=p.length;B<d;B++)_.push(p[B].clone(i));this.morphAttributes[c]=_}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,_=a.length;c<_;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const g=e.boundingBox;g!==null&&(this.boundingBox=g.clone());const I=e.boundingSphere;return I!==null&&(this.boundingSphere=I.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G1=new xe,Us=new Hg,sC=new wi,k1=new T,aC=new T,gC=new T,IC=new T,fp=new T,cC=new T,H1=new T,CC=new T;class Gt extends ft{constructor(e=new Ut,i=new Mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,A=Object.keys(i);if(A.length>0){const o=i[A[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const g=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=s}}}}getVertexPosition(e,i){const A=this.geometry,o=A.attributes.position,s=A.morphAttributes.position,a=A.morphTargetsRelative;i.fromBufferAttribute(o,e);const g=this.morphTargetInfluences;if(s&&g){cC.set(0,0,0);for(let I=0,c=s.length;I<c;I++){const _=g[I],p=s[I];_!==0&&(fp.fromBufferAttribute(p,e),a?cC.addScaledVector(fp,_):cC.addScaledVector(fp.sub(i),_))}i.add(cC)}return i}raycast(e,i){const A=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),sC.copy(A.boundingSphere),sC.applyMatrix4(s),Us.copy(e.ray).recast(e.near),!(sC.containsPoint(Us.origin)===!1&&(Us.intersectSphere(sC,k1)===null||Us.origin.distanceToSquared(k1)>(e.far-e.near)**2))&&(G1.copy(s).invert(),Us.copy(e.ray).applyMatrix4(G1),!(A.boundingBox!==null&&Us.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,i,Us)))}_computeIntersections(e,i,A){let o;const s=this.geometry,a=this.material,g=s.index,I=s.attributes.position,c=s.attributes.uv,_=s.attributes.uv1,p=s.attributes.normal,B=s.groups,d=s.drawRange;if(g!==null)if(Array.isArray(a))for(let Q=0,y=B.length;Q<y;Q++){const h=B[Q],E=a[h.materialIndex],u=Math.max(h.start,d.start),f=Math.min(g.count,Math.min(h.start+h.count,d.start+d.count));for(let m=u,M=f;m<M;m+=3){const v=g.getX(m),b=g.getX(m+1),x=g.getX(m+2);o=lC(this,E,e,A,c,_,p,v,b,x),o&&(o.faceIndex=Math.floor(m/3),o.face.materialIndex=h.materialIndex,i.push(o))}}else{const Q=Math.max(0,d.start),y=Math.min(g.count,d.start+d.count);for(let h=Q,E=y;h<E;h+=3){const u=g.getX(h),f=g.getX(h+1),m=g.getX(h+2);o=lC(this,a,e,A,c,_,p,u,f,m),o&&(o.faceIndex=Math.floor(h/3),i.push(o))}}else if(I!==void 0)if(Array.isArray(a))for(let Q=0,y=B.length;Q<y;Q++){const h=B[Q],E=a[h.materialIndex],u=Math.max(h.start,d.start),f=Math.min(I.count,Math.min(h.start+h.count,d.start+d.count));for(let m=u,M=f;m<M;m+=3){const v=m,b=m+1,x=m+2;o=lC(this,E,e,A,c,_,p,v,b,x),o&&(o.faceIndex=Math.floor(m/3),o.face.materialIndex=h.materialIndex,i.push(o))}}else{const Q=Math.max(0,d.start),y=Math.min(I.count,d.start+d.count);for(let h=Q,E=y;h<E;h+=3){const u=h,f=h+1,m=h+2;o=lC(this,a,e,A,c,_,p,u,f,m),o&&(o.faceIndex=Math.floor(h/3),i.push(o))}}}}function iV(n,e,i,A,o,s,a,g){let I;if(e.side===pi?I=A.intersectTriangle(a,s,o,!0,g):I=A.intersectTriangle(o,s,a,e.side===Yn,g),I===null)return null;CC.copy(g),CC.applyMatrix4(n.matrixWorld);const c=i.ray.origin.distanceTo(CC);return c<i.near||c>i.far?null:{distance:c,point:CC.clone(),object:n}}function lC(n,e,i,A,o,s,a,g,I,c){n.getVertexPosition(g,aC),n.getVertexPosition(I,gC),n.getVertexPosition(c,IC);const _=iV(n,e,i,A,aC,gC,IC,H1);if(_){const p=new T;Hi.getBarycoord(H1,aC,gC,IC,p),o&&(_.uv=Hi.getInterpolatedAttribute(o,g,I,c,p,new iA)),s&&(_.uv1=Hi.getInterpolatedAttribute(s,g,I,c,p,new iA)),a&&(_.normal=Hi.getInterpolatedAttribute(a,g,I,c,p,new T),_.normal.dot(A.direction)>0&&_.normal.multiplyScalar(-1));const B={a:g,b:I,c,normal:new T,materialIndex:0};Hi.getNormal(aC,gC,IC,B.normal),_.face=B,_.barycoord=p}return _}class Pg extends Ut{constructor(e=1,i=1,A=1,o=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:A,widthSegments:o,heightSegments:s,depthSegments:a};const g=this;o=Math.floor(o),s=Math.floor(s),a=Math.floor(a);const I=[],c=[],_=[],p=[];let B=0,d=0;Q("z","y","x",-1,-1,A,i,e,a,s,0),Q("z","y","x",1,-1,A,i,-e,a,s,1),Q("x","z","y",1,1,e,A,i,o,a,2),Q("x","z","y",1,-1,e,A,-i,o,a,3),Q("x","y","z",1,-1,e,i,A,o,s,4),Q("x","y","z",-1,-1,e,i,-A,o,s,5),this.setIndex(I),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(p,2));function Q(y,h,E,u,f,m,M,v,b,x,w){const S=m/b,F=M/x,k=m/2,P=M/2,z=v/2,ie=b+1,W=x+1;let de=0,H=0;const oe=new T;for(let _e=0;_e<W;_e++){const ve=_e*F-P;for(let qe=0;qe<ie;qe++){const vA=qe*S-k;oe[y]=vA*u,oe[h]=ve*f,oe[E]=z,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[h]=0,oe[E]=v>0?1:-1,_.push(oe.x,oe.y,oe.z),p.push(qe/b),p.push(1-_e/x),de+=1}}for(let _e=0;_e<x;_e++)for(let ve=0;ve<b;ve++){const qe=B+ve+ie*_e,vA=B+ve+ie*(_e+1),ae=B+(ve+1)+ie*(_e+1),fe=B+(ve+1)+ie*_e;I.push(qe,vA,fe),I.push(vA,ae,fe),H+=6}g.addGroup(d,H,w),d+=H,B+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pg(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rg(n){const e={};for(const i in n){e[i]={};for(const A in n[i]){const o=n[i][A];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][A]=null):e[i][A]=o.clone():Array.isArray(o)?e[i][A]=o.slice():e[i][A]=o}}return e}function an(n){const e={};for(let i=0;i<n.length;i++){const A=Rg(n[i]);for(const o in A)e[o]=A[o]}return e}function nV(n){const e=[];for(let i=0;i<n.length;i++)e.push(n[i].clone());return e}function oO(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Ng={clone:Rg,merge:an};var rV=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rV,this.fragmentShader=oV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rg(e.uniforms),this.uniformsGroups=nV(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?i.uniforms[o]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?i.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[o]={type:"m4",value:a.toArray()}:i.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const A={};for(const o in this.extensions)this.extensions[o]===!0&&(A[o]=!0);return Object.keys(A).length>0&&(i.extensions=A),i}}class f_ extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=bo}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $o=new T,P1=new iA,K1=new iA;class Di extends f_{constructor(e=50,i=1,A=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Mg*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(KI*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mg*2*Math.atan(Math.tan(KI*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,A){$o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($o.x,$o.y).multiplyScalar(-e/$o.z),$o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set($o.x,$o.y).multiplyScalar(-e/$o.z)}getViewSize(e,i){return this.getViewBounds(e,P1,K1),i.subVectors(K1,P1)}setViewOffset(e,i,A,o,s,a){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=A,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(KI*.5*this.fov)/this.zoom,A=2*i,o=this.aspect*A,s=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const I=a.fullWidth,c=a.fullHeight;s+=a.offsetX*o/I,i-=a.offsetY*A/c,o*=a.width/I,A*=a.height/c}const g=this.filmOffset;g!==0&&(s+=e*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,i,i-A,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const La=-90,Fa=1;class sV extends ft{constructor(e,i,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Di(La,Fa,e,i);o.layers=this.layers,this.add(o);const s=new Di(La,Fa,e,i);s.layers=this.layers,this.add(s);const a=new Di(La,Fa,e,i);a.layers=this.layers,this.add(a);const g=new Di(La,Fa,e,i);g.layers=this.layers,this.add(g);const I=new Di(La,Fa,e,i);I.layers=this.layers,this.add(I);const c=new Di(La,Fa,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[A,o,s,a,g,I]=i;for(const c of i)this.remove(c);if(e===bo)A.up.set(0,1,0),A.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),g.up.set(0,1,0),g.lookAt(0,0,1),I.up.set(0,1,0),I.lookAt(0,0,-1);else if(e===Yl)A.up.set(0,-1,0),A.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),g.up.set(0,-1,0),g.lookAt(0,0,1),I.up.set(0,-1,0),I.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,g,I,c,_]=this.children,p=e.getRenderTarget(),B=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),Q=e.xr.enabled;e.xr.enabled=!1;const y=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,o),e.render(i,s),e.setRenderTarget(A,1,o),e.render(i,a),e.setRenderTarget(A,2,o),e.render(i,g),e.setRenderTarget(A,3,o),e.render(i,I),e.setRenderTarget(A,4,o),e.render(i,c),A.texture.generateMipmaps=y,e.setRenderTarget(A,5,o),e.render(i,_),e.setRenderTarget(p,B,d),e.xr.enabled=Q,A.texture.needsPMREMUpdate=!0}}class sO extends si{constructor(e,i,A,o,s,a,g,I,c,_){e=e!==void 0?e:[],i=i!==void 0?i:vg,super(e,i,A,o,s,a,g,I,c,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aV extends rn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},o=[A,A,A,A,A,A];this.texture=new sO(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:en}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Pg(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Rg(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:pi,blending:Jn});s.uniforms.tEquirect.value=i;const a=new Gt(o,s),g=i.minFilter;return i.minFilter===vo&&(i.minFilter=en),new sV(1,10,this).update(e,a),i.minFilter=g,a.geometry.dispose(),a.material.dispose(),this}clear(e,i,A,o){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(i,A,o);e.setRenderTarget(s)}}const yp=new T,gV=new T,IV=new RA;class Wr{constructor(e=new T(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,A,o){return this.normal.set(e,i,A),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,A){const o=yp.subVectors(A,i).cross(gV.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const A=e.delta(yp),o=this.normal.dot(A);if(o===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:i.copy(e.start).addScaledVector(A,s)}intersectsLine(e){const i=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return i<0&&A>0||A<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const A=i||IV.getNormalMatrix(e),o=this.coplanarPoint(yp).applyMatrix4(e),s=this.normal.applyMatrix3(A).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new wi,_C=new T;class y_{constructor(e=new Wr,i=new Wr,A=new Wr,o=new Wr,s=new Wr,a=new Wr){this.planes=[e,i,A,o,s,a]}set(e,i,A,o,s,a){const g=this.planes;return g[0].copy(e),g[1].copy(i),g[2].copy(A),g[3].copy(o),g[4].copy(s),g[5].copy(a),this}copy(e){const i=this.planes;for(let A=0;A<6;A++)i[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,i=bo){const A=this.planes,o=e.elements,s=o[0],a=o[1],g=o[2],I=o[3],c=o[4],_=o[5],p=o[6],B=o[7],d=o[8],Q=o[9],y=o[10],h=o[11],E=o[12],u=o[13],f=o[14],m=o[15];if(A[0].setComponents(I-s,B-c,h-d,m-E).normalize(),A[1].setComponents(I+s,B+c,h+d,m+E).normalize(),A[2].setComponents(I+a,B+_,h+Q,m+u).normalize(),A[3].setComponents(I-a,B-_,h-Q,m-u).normalize(),A[4].setComponents(I-g,B-p,h-y,m-f).normalize(),i===bo)A[5].setComponents(I+g,B+p,h+y,m+f).normalize();else if(i===Yl)A[5].setComponents(g,p,y,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const i=this.planes,A=e.center,o=-e.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(A)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let A=0;A<6;A++){const o=i[A];if(_C.x=o.normal.x>0?e.max.x:e.min.x,_C.y=o.normal.y>0?e.max.y:e.min.y,_C.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_C)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let A=0;A<6;A++)if(i[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function aO(){let n=null,e=!1,i=null,A=null;function o(s,a){i(s,a),A=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&(A=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){n=s}}}function cV(n){const e=new WeakMap;function i(g,I){const c=g.array,_=g.usage,p=c.byteLength,B=n.createBuffer();n.bindBuffer(I,B),n.bufferData(I,c,_),g.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)g.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:B,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:g.version,size:p}}function A(g,I,c){const _=I.array,p=I.updateRanges;if(n.bindBuffer(c,g),p.length===0)n.bufferSubData(c,0,_);else{p.sort((d,Q)=>d.start-Q.start);let B=0;for(let d=1;d<p.length;d++){const Q=p[B],y=p[d];y.start<=Q.start+Q.count+1?Q.count=Math.max(Q.count,y.start+y.count-Q.start):(++B,p[B]=y)}p.length=B+1;for(let d=0,Q=p.length;d<Q;d++){const y=p[d];n.bufferSubData(c,y.start*_.BYTES_PER_ELEMENT,_,y.start,y.count)}I.clearUpdateRanges()}I.onUploadCallback()}function o(g){return g.isInterleavedBufferAttribute&&(g=g.data),e.get(g)}function s(g){g.isInterleavedBufferAttribute&&(g=g.data);const I=e.get(g);I&&(n.deleteBuffer(I.buffer),e.delete(g))}function a(g,I){if(g.isInterleavedBufferAttribute&&(g=g.data),g.isGLBufferAttribute){const _=e.get(g);(!_||_.version<g.version)&&e.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}const c=e.get(g);if(c===void 0)e.set(g,i(g,I));else if(c.version<g.version){if(c.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(c.buffer,g,I),c.version=g.version}}return{get:o,remove:s,update:a}}class m_ extends Ut{constructor(e=1,i=1,A=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:A,heightSegments:o};const s=e/2,a=i/2,g=Math.floor(A),I=Math.floor(o),c=g+1,_=I+1,p=e/g,B=i/I,d=[],Q=[],y=[],h=[];for(let E=0;E<_;E++){const u=E*B-a;for(let f=0;f<c;f++){const m=f*p-s;Q.push(m,-u,0),y.push(0,0,1),h.push(f/g),h.push(1-E/I)}}for(let E=0;E<I;E++)for(let u=0;u<g;u++){const f=u+c*E,m=u+c*(E+1),M=u+1+c*(E+1),v=u+1+c*E;d.push(f,m,v),d.push(m,M,v)}this.setIndex(d),this.setAttribute("position",new xt(Q,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new m_(e.width,e.height,e.widthSegments,e.heightSegments)}}var CV=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lV=`#ifdef USE_ALPHAHASH
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
#endif`,_V=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pV=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BV=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EV=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dV=`#ifdef USE_AOMAP
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
#endif`,hV=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uV=`#ifdef USE_BATCHING
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
#endif`,QV=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fV=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yV=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mV=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DV=`#ifdef USE_IRIDESCENCE
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
#endif`,SV=`#ifdef USE_BUMPMAP
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
#endif`,wV=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vV=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bV=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MV=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RV=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NV=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xV=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LV=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FV=`#define PI 3.141592653589793
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
} // validated`,TV=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UV=`vec3 transformedNormal = objectNormal;
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
#endif`,GV=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kV=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HV=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PV=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KV="gl_FragColor = linearToOutputTexel( gl_FragColor );",JV=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OV=`#ifdef USE_ENVMAP
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
#endif`,YV=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qV=`#ifdef USE_ENVMAP
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
#endif`,jV=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VV=`#ifdef USE_ENVMAP
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
#endif`,zV=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WV=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XV=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZV=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$V=`#ifdef USE_GRADIENTMAP
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
}`,e4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i4=`uniform bool receiveShadow;
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
#endif`,n4=`#ifdef USE_ENVMAP
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
#endif`,r4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g4=`PhysicalMaterial material;
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
#endif`,I4=`struct PhysicalMaterial {
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
}`,c4=`
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
#endif`,C4=`#if defined( RE_IndirectDiffuse )
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
#endif`,l4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q4=`#if defined( USE_POINTS_UV )
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
#endif`,f4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w4=`#ifdef USE_MORPHTARGETS
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
#endif`,v4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L4=`#ifdef USE_NORMALMAP
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
#endif`,F4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W4=`float getShadowMask() {
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
}`,X4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z4=`#ifdef USE_SKINNING
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
#endif`,$4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ez=`#ifdef USE_SKINNING
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
#endif`,Az=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tz=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iz=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nz=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rz=`#ifdef USE_TRANSMISSION
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
#endif`,oz=`#ifdef USE_TRANSMISSION
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
#endif`,sz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,az=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cz=`uniform sampler2D t2D;
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
}`,lz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_z=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bz=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ez=`#include <common>
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
}`,dz=`#if DEPTH_PACKING == 3200
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
}`,hz=`#define DISTANCE
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
}`,uz=`#define DISTANCE
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
}`,Qz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fz=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yz=`uniform float scale;
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
}`,mz=`uniform vec3 diffuse;
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
}`,Dz=`#include <common>
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
}`,Sz=`uniform vec3 diffuse;
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
}`,wz=`#define LAMBERT
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
}`,vz=`#define LAMBERT
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
}`,bz=`#define MATCAP
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
}`,Mz=`#define MATCAP
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
}`,Rz=`#define NORMAL
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
}`,Nz=`#define NORMAL
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
}`,xz=`#define PHONG
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
}`,Lz=`#define PHONG
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
}`,Fz=`#define STANDARD
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
}`,Tz=`#define STANDARD
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
}`,Uz=`#define TOON
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
}`,Gz=`#define TOON
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
}`,kz=`uniform float size;
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
}`,Hz=`uniform vec3 diffuse;
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
}`,Pz=`#include <common>
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
}`,Kz=`uniform vec3 color;
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
}`,Jz=`uniform float rotation;
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
}`,Oz=`uniform vec3 diffuse;
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
}`,xA={alphahash_fragment:CV,alphahash_pars_fragment:lV,alphamap_fragment:_V,alphamap_pars_fragment:pV,alphatest_fragment:BV,alphatest_pars_fragment:EV,aomap_fragment:dV,aomap_pars_fragment:hV,batching_pars_vertex:uV,batching_vertex:QV,begin_vertex:fV,beginnormal_vertex:yV,bsdfs:mV,iridescence_fragment:DV,bumpmap_pars_fragment:SV,clipping_planes_fragment:wV,clipping_planes_pars_fragment:vV,clipping_planes_pars_vertex:bV,clipping_planes_vertex:MV,color_fragment:RV,color_pars_fragment:NV,color_pars_vertex:xV,color_vertex:LV,common:FV,cube_uv_reflection_fragment:TV,defaultnormal_vertex:UV,displacementmap_pars_vertex:GV,displacementmap_vertex:kV,emissivemap_fragment:HV,emissivemap_pars_fragment:PV,colorspace_fragment:KV,colorspace_pars_fragment:JV,envmap_fragment:OV,envmap_common_pars_fragment:YV,envmap_pars_fragment:qV,envmap_pars_vertex:jV,envmap_physical_pars_fragment:n4,envmap_vertex:VV,fog_vertex:zV,fog_pars_vertex:WV,fog_fragment:XV,fog_pars_fragment:ZV,gradientmap_pars_fragment:$V,lightmap_pars_fragment:e4,lights_lambert_fragment:A4,lights_lambert_pars_fragment:t4,lights_pars_begin:i4,lights_toon_fragment:r4,lights_toon_pars_fragment:o4,lights_phong_fragment:s4,lights_phong_pars_fragment:a4,lights_physical_fragment:g4,lights_physical_pars_fragment:I4,lights_fragment_begin:c4,lights_fragment_maps:C4,lights_fragment_end:l4,logdepthbuf_fragment:_4,logdepthbuf_pars_fragment:p4,logdepthbuf_pars_vertex:B4,logdepthbuf_vertex:E4,map_fragment:d4,map_pars_fragment:h4,map_particle_fragment:u4,map_particle_pars_fragment:Q4,metalnessmap_fragment:f4,metalnessmap_pars_fragment:y4,morphinstance_vertex:m4,morphcolor_vertex:D4,morphnormal_vertex:S4,morphtarget_pars_vertex:w4,morphtarget_vertex:v4,normal_fragment_begin:b4,normal_fragment_maps:M4,normal_pars_fragment:R4,normal_pars_vertex:N4,normal_vertex:x4,normalmap_pars_fragment:L4,clearcoat_normal_fragment_begin:F4,clearcoat_normal_fragment_maps:T4,clearcoat_pars_fragment:U4,iridescence_pars_fragment:G4,opaque_fragment:k4,packing:H4,premultiplied_alpha_fragment:P4,project_vertex:K4,dithering_fragment:J4,dithering_pars_fragment:O4,roughnessmap_fragment:Y4,roughnessmap_pars_fragment:q4,shadowmap_pars_fragment:j4,shadowmap_pars_vertex:V4,shadowmap_vertex:z4,shadowmask_pars_fragment:W4,skinbase_vertex:X4,skinning_pars_vertex:Z4,skinning_vertex:$4,skinnormal_vertex:ez,specularmap_fragment:Az,specularmap_pars_fragment:tz,tonemapping_fragment:iz,tonemapping_pars_fragment:nz,transmission_fragment:rz,transmission_pars_fragment:oz,uv_pars_fragment:sz,uv_pars_vertex:az,uv_vertex:gz,worldpos_vertex:Iz,background_vert:cz,background_frag:Cz,backgroundCube_vert:lz,backgroundCube_frag:_z,cube_vert:pz,cube_frag:Bz,depth_vert:Ez,depth_frag:dz,distanceRGBA_vert:hz,distanceRGBA_frag:uz,equirect_vert:Qz,equirect_frag:fz,linedashed_vert:yz,linedashed_frag:mz,meshbasic_vert:Dz,meshbasic_frag:Sz,meshlambert_vert:wz,meshlambert_frag:vz,meshmatcap_vert:bz,meshmatcap_frag:Mz,meshnormal_vert:Rz,meshnormal_frag:Nz,meshphong_vert:xz,meshphong_frag:Lz,meshphysical_vert:Fz,meshphysical_frag:Tz,meshtoon_vert:Uz,meshtoon_frag:Gz,points_vert:kz,points_frag:Hz,shadow_vert:Pz,shadow_frag:Kz,sprite_vert:Jz,sprite_frag:Oz},Re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new RA},alphaMap:{value:null},alphaMapTransform:{value:new RA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new RA}},envmap:{envMap:{value:null},envMapRotation:{value:new RA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new RA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new RA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new RA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new RA},normalScale:{value:new iA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new RA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new RA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new RA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new RA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new RA},alphaTest:{value:0},uvTransform:{value:new RA}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new iA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new RA},alphaMap:{value:null},alphaMapTransform:{value:new RA},alphaTest:{value:0}}},Dn={basic:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:xA.meshbasic_vert,fragmentShader:xA.meshbasic_frag},lambert:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:xA.meshlambert_vert,fragmentShader:xA.meshlambert_frag},phong:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:xA.meshphong_vert,fragmentShader:xA.meshphong_frag},standard:{uniforms:an([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag},toon:{uniforms:an([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:xA.meshtoon_vert,fragmentShader:xA.meshtoon_frag},matcap:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:xA.meshmatcap_vert,fragmentShader:xA.meshmatcap_frag},points:{uniforms:an([Re.points,Re.fog]),vertexShader:xA.points_vert,fragmentShader:xA.points_frag},dashed:{uniforms:an([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xA.linedashed_vert,fragmentShader:xA.linedashed_frag},depth:{uniforms:an([Re.common,Re.displacementmap]),vertexShader:xA.depth_vert,fragmentShader:xA.depth_frag},normal:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:xA.meshnormal_vert,fragmentShader:xA.meshnormal_frag},sprite:{uniforms:an([Re.sprite,Re.fog]),vertexShader:xA.sprite_vert,fragmentShader:xA.sprite_frag},background:{uniforms:{uvTransform:{value:new RA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xA.background_vert,fragmentShader:xA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new RA}},vertexShader:xA.backgroundCube_vert,fragmentShader:xA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xA.cube_vert,fragmentShader:xA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xA.equirect_vert,fragmentShader:xA.equirect_frag},distanceRGBA:{uniforms:an([Re.common,Re.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xA.distanceRGBA_vert,fragmentShader:xA.distanceRGBA_frag},shadow:{uniforms:an([Re.lights,Re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:xA.shadow_vert,fragmentShader:xA.shadow_frag}};Dn.physical={uniforms:an([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new RA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new RA},clearcoatNormalScale:{value:new iA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new RA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new RA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new RA},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new RA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new RA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new RA},transmissionSamplerSize:{value:new iA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new RA},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new RA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new RA},anisotropyVector:{value:new iA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new RA}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag};const pC={r:0,b:0,g:0},ks=new Pi,Yz=new xe;function qz(n,e,i,A,o,s,a){const g=new Ue(0);let I=s===!0?0:1,c,_,p=null,B=0,d=null;function Q(u){let f=u.isScene===!0?u.background:null;return f&&f.isTexture&&(f=(u.backgroundBlurriness>0?i:e).get(f)),f}function y(u){let f=!1;const m=Q(u);m===null?E(g,I):m&&m.isColor&&(E(m,1),f=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?A.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,a),(n.autoClear||f)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(u,f){const m=Q(f);m&&(m.isCubeTexture||m.mapping===d_)?(_===void 0&&(_=new Gt(new Pg(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Rg(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(M,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),ks.copy(f.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),_.material.uniforms.envMap.value=m,_.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Yz.makeRotationFromEuler(ks)),_.material.toneMapped=et.getTransfer(m.colorSpace)!==Qt,(p!==m||B!==m.version||d!==n.toneMapping)&&(_.material.needsUpdate=!0,p=m,B=m.version,d=n.toneMapping),_.layers.enableAll(),u.unshift(_,_.geometry,_.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Gt(new m_(2,2),new Oi({name:"BackgroundMaterial",uniforms:Rg(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(m.colorSpace)!==Qt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(p!==m||B!==m.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,p=m,B=m.version,d=n.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function E(u,f){u.getRGB(pC,oO(n)),A.buffers.color.setClear(pC.r,pC.g,pC.b,f,a)}return{getClearColor:function(){return g},setClearColor:function(u,f=1){g.set(u),I=f,E(g,I)},getClearAlpha:function(){return I},setClearAlpha:function(u){I=u,E(g,I)},render:y,addToRenderList:h}}function jz(n,e){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},o=B(null);let s=o,a=!1;function g(S,F,k,P,z){let ie=!1;const W=p(P,k,F);s!==W&&(s=W,c(s.object)),ie=d(S,P,k,z),ie&&Q(S,P,k,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,m(S,F,k,P),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function I(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function _(S){return n.deleteVertexArray(S)}function p(S,F,k){const P=k.wireframe===!0;let z=A[S.id];z===void 0&&(z={},A[S.id]=z);let ie=z[F.id];ie===void 0&&(ie={},z[F.id]=ie);let W=ie[P];return W===void 0&&(W=B(I()),ie[P]=W),W}function B(S){const F=[],k=[],P=[];for(let z=0;z<i;z++)F[z]=0,k[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:P,object:S,attributes:{},index:null}}function d(S,F,k,P){const z=s.attributes,ie=F.attributes;let W=0;const de=k.getAttributes();for(const H in de)if(de[H].location>=0){const _e=z[H];let ve=ie[H];if(ve===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),_e===void 0||_e.attribute!==ve||ve&&_e.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==P}function Q(S,F,k,P){const z={},ie=F.attributes;let W=0;const de=k.getAttributes();for(const H in de)if(de[H].location>=0){let _e=ie[H];_e===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const ve={};ve.attribute=_e,_e&&_e.data&&(ve.data=_e.data),z[H]=ve,W++}s.attributes=z,s.attributesNum=W,s.index=P}function y(){const S=s.newAttributes;for(let F=0,k=S.length;F<k;F++)S[F]=0}function h(S){E(S,0)}function E(S,F){const k=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;k[S]=1,P[S]===0&&(n.enableVertexAttribArray(S),P[S]=1),z[S]!==F&&(n.vertexAttribDivisor(S,F),z[S]=F)}function u(){const S=s.newAttributes,F=s.enabledAttributes;for(let k=0,P=F.length;k<P;k++)F[k]!==S[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function f(S,F,k,P,z,ie,W){W===!0?n.vertexAttribIPointer(S,F,k,z,ie):n.vertexAttribPointer(S,F,k,P,z,ie)}function m(S,F,k,P){y();const z=P.attributes,ie=k.getAttributes(),W=F.defaultAttributeValues;for(const de in ie){const H=ie[de];if(H.location>=0){let oe=z[de];if(oe===void 0&&(de==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),de==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const _e=oe.normalized,ve=oe.itemSize,qe=e.get(oe);if(qe===void 0)continue;const vA=qe.buffer,ae=qe.type,fe=qe.bytesPerElement,Ge=ae===n.INT||ae===n.UNSIGNED_INT||oe.gpuType===nh;if(oe.isInterleavedBufferAttribute){const be=oe.data,oA=be.stride,hA=oe.offset;if(be.isInstancedInterleavedBuffer){for(let LA=0;LA<H.locationSize;LA++)E(H.location+LA,be.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let LA=0;LA<H.locationSize;LA++)h(H.location+LA);n.bindBuffer(n.ARRAY_BUFFER,vA);for(let LA=0;LA<H.locationSize;LA++)f(H.location+LA,ve/H.locationSize,ae,_e,oA*fe,(hA+ve/H.locationSize*LA)*fe,Ge)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)E(H.location+be,oe.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<H.locationSize;be++)h(H.location+be);n.bindBuffer(n.ARRAY_BUFFER,vA);for(let be=0;be<H.locationSize;be++)f(H.location+be,ve/H.locationSize,ae,_e,ve*fe,ve/H.locationSize*be*fe,Ge)}}else if(W!==void 0){const _e=W[de];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(H.location,_e);break;case 3:n.vertexAttrib3fv(H.location,_e);break;case 4:n.vertexAttrib4fv(H.location,_e);break;default:n.vertexAttrib1fv(H.location,_e)}}}}u()}function M(){x();for(const S in A){const F=A[S];for(const k in F){const P=F[k];for(const z in P)_(P[z].object),delete P[z];delete F[k]}delete A[S]}}function v(S){if(A[S.id]===void 0)return;const F=A[S.id];for(const k in F){const P=F[k];for(const z in P)_(P[z].object),delete P[z];delete F[k]}delete A[S.id]}function b(S){for(const F in A){const k=A[F];if(k[S.id]===void 0)continue;const P=k[S.id];for(const z in P)_(P[z].object),delete P[z];delete k[S.id]}}function x(){w(),a=!0,s!==o&&(s=o,c(s.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:g,reset:x,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:h,disableUnusedAttributes:u}}function Vz(n,e,i){let A;function o(c){A=c}function s(c,_){n.drawArrays(A,c,_),i.update(_,A,1)}function a(c,_,p){p!==0&&(n.drawArraysInstanced(A,c,_,p),i.update(_,A,p))}function g(c,_,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,c,0,_,0,p);let d=0;for(let Q=0;Q<p;Q++)d+=_[Q];i.update(d,A,1)}function I(c,_,p,B){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let Q=0;Q<c.length;Q++)a(c[Q],_[Q],B[Q]);else{d.multiDrawArraysInstancedWEBGL(A,c,0,_,0,B,0,p);let Q=0;for(let y=0;y<p;y++)Q+=_[y]*B[y];i.update(Q,A,1)}}this.setMode=o,this.render=s,this.renderInstances=a,this.renderMultiDraw=g,this.renderMultiDrawInstances=I}function zz(n,e,i,A){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(b){return!(b!==vn&&A.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function g(b){const x=b===yc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==nn&&A.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Hn&&!x)}function I(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const _=I(c);_!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",_,"instead."),c=_);const p=i.logarithmicDepthBuffer===!0,B=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),Q=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),u=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=Q>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:I,textureFormatReadable:a,textureTypeReadable:g,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:B,maxTextures:d,maxVertexTextures:Q,maxTextureSize:y,maxCubemapSize:h,maxAttributes:E,maxVertexUniforms:u,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:M,maxSamples:v}}function Wz(n){const e=this;let i=null,A=0,o=!1,s=!1;const a=new Wr,g=new RA,I={value:null,needsUpdate:!1};this.uniform=I,this.numPlanes=0,this.numIntersection=0,this.init=function(p,B){const d=p.length!==0||B||A!==0||o;return o=B,A=p.length,d},this.beginShadows=function(){s=!0,_(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,B){i=_(p,B,0)},this.setState=function(p,B,d){const Q=p.clippingPlanes,y=p.clipIntersection,h=p.clipShadows,E=n.get(p);if(!o||Q===null||Q.length===0||s&&!h)s?_(null):c();else{const u=s?0:A,f=u*4;let m=E.clippingState||null;I.value=m,m=_(Q,B,f,d);for(let M=0;M!==f;++M)m[M]=i[M];E.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=u}};function c(){I.value!==i&&(I.value=i,I.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function _(p,B,d,Q){const y=p!==null?p.length:0;let h=null;if(y!==0){if(h=I.value,Q!==!0||h===null){const E=d+y*4,u=B.matrixWorldInverse;g.getNormalMatrix(u),(h===null||h.length<E)&&(h=new Float32Array(E));for(let f=0,m=d;f!==y;++f,m+=4)a.copy(p[f]).applyMatrix4(u,g),a.normal.toArray(h,m),h[m+3]=a.constant}I.value=h,I.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,h}}function Xz(n){let e=new WeakMap;function i(a,g){return g===Kl?a.mapping=vg:g===lE&&(a.mapping=bg),a}function A(a){if(a&&a.isTexture){const g=a.mapping;if(g===Kl||g===lE)if(e.has(a)){const I=e.get(a).texture;return i(I,a.mapping)}else{const I=a.image;if(I&&I.height>0){const c=new aV(I.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",o),i(c.texture,a.mapping)}else return null}}return a}function o(a){const g=a.target;g.removeEventListener("dispose",o);const I=e.get(g);I!==void 0&&(e.delete(g),I.dispose())}function s(){e=new WeakMap}return{get:A,dispose:s}}class D_ extends f_{constructor(e=-1,i=1,A=1,o=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=A,this.bottom=o,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,A,o,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=A,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=A-e,a=A+e,g=o+i,I=o-i;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,g-=_*this.view.offsetY,I=g-_*this.view.height}this.projectionMatrix.makeOrthographic(s,a,g,I,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const sg=4,J1=[.125,.215,.35,.446,.526,.582],$s=20,mp=new D_,O1=new Ue;let Dp=null,Sp=0,wp=0,vp=!1;const Ws=(1+Math.sqrt(5))/2,Ta=1/Ws,Y1=[new T(-Ws,Ta,0),new T(Ws,Ta,0),new T(-Ta,0,Ws),new T(Ta,0,Ws),new T(0,Ws,-Ta),new T(0,Ws,Ta),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class q1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,A=.1,o=100){Dp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),wp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,A,o,s),i>0&&this._blur(s,0,0,i),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dp,Sp,wp),this._renderer.xr.enabled=vp,e.scissorTest=!1,BC(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vg||e.mapping===bg?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),wp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=i||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,A={magFilter:en,minFilter:en,generateMipmaps:!1,type:yc,format:vn,colorSpace:Ns,depthBuffer:!1},o=j1(e,i,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j1(e,i,A);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zz(s)),this._blurMaterial=$z(s,e,i)}return o}_compileMaterial(e){const i=new Gt(this._lodPlanes[0],e);this._renderer.compile(i,mp)}_sceneToCubeUV(e,i,A,o){const g=new Di(90,1,i,A),I=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],_=this._renderer,p=_.autoClear,B=_.toneMapping;_.getClearColor(O1),_.toneMapping=ms,_.autoClear=!1;const d=new Mo({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1}),Q=new Gt(new Pg,d);let y=!1;const h=e.background;h?h.isColor&&(d.color.copy(h),e.background=null,y=!0):(d.color.copy(O1),y=!0);for(let E=0;E<6;E++){const u=E%3;u===0?(g.up.set(0,I[E],0),g.lookAt(c[E],0,0)):u===1?(g.up.set(0,0,I[E]),g.lookAt(0,c[E],0)):(g.up.set(0,I[E],0),g.lookAt(0,0,c[E]));const f=this._cubeSize;BC(o,u*f,E>2?f:0,f,f),_.setRenderTarget(o),y&&_.render(Q,g),_.render(e,g)}Q.geometry.dispose(),Q.material.dispose(),_.toneMapping=B,_.autoClear=p,e.background=h}_textureToCubeUV(e,i){const A=this._renderer,o=e.mapping===vg||e.mapping===bg;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=z1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V1());const s=o?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],s),g=s.uniforms;g.envMap.value=e;const I=this._cubeSize;BC(i,0,0,3*I,2*I),A.setRenderTarget(i),A.render(a,mp)}_applyPMREM(e){const i=this._renderer,A=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),g=Y1[(o-s-1)%Y1.length];this._blur(e,s-1,s,a,g)}i.autoClear=A}_blur(e,i,A,o,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,i,A,o,"latitudinal",s),this._halfBlur(a,e,A,A,o,"longitudinal",s)}_halfBlur(e,i,A,o,s,a,g){const I=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,p=new Gt(this._lodPlanes[o],c),B=c.uniforms,d=this._sizeLods[A]-1,Q=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$s-1),y=s/Q,h=isFinite(s)?1+Math.floor(_*y):$s;h>$s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${$s}`);const E=[];let u=0;for(let b=0;b<$s;++b){const x=b/y,w=Math.exp(-x*x/2);E.push(w),b===0?u+=w:b<h&&(u+=2*w)}for(let b=0;b<E.length;b++)E[b]=E[b]/u;B.envMap.value=e.texture,B.samples.value=h,B.weights.value=E,B.latitudinal.value=a==="latitudinal",g&&(B.poleAxis.value=g);const{_lodMax:f}=this;B.dTheta.value=Q,B.mipInt.value=f-A;const m=this._sizeLods[o],M=3*m*(o>f-sg?o-f+sg:0),v=4*(this._cubeSize-m);BC(i,M,v,3*m,2*m),I.setRenderTarget(i),I.render(p,mp)}}function Zz(n){const e=[],i=[],A=[];let o=n;const s=n-sg+1+J1.length;for(let a=0;a<s;a++){const g=Math.pow(2,o);i.push(g);let I=1/g;a>n-sg?I=J1[a-n+sg-1]:a===0&&(I=0),A.push(I);const c=1/(g-2),_=-c,p=1+c,B=[_,_,p,_,p,p,_,_,p,p,_,p],d=6,Q=6,y=3,h=2,E=1,u=new Float32Array(y*Q*d),f=new Float32Array(h*Q*d),m=new Float32Array(E*Q*d);for(let v=0;v<d;v++){const b=v%3*2/3-1,x=v>2?0:-1,w=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];u.set(w,y*Q*v),f.set(B,h*Q*v);const S=[v,v,v,v,v,v];m.set(S,E*Q*v)}const M=new Ut;M.setAttribute("position",new Tt(u,y)),M.setAttribute("uv",new Tt(f,h)),M.setAttribute("faceIndex",new Tt(m,E)),e.push(M),o>sg&&o--}return{lodPlanes:e,sizeLods:i,sigmas:A}}function j1(n,e,i){const A=new rn(n,e,i);return A.texture.mapping=d_,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function BC(n,e,i,A,o){n.viewport.set(e,i,A,o),n.scissor.set(e,i,A,o)}function $z(n,e,i){const A=new Float32Array($s),o=new T(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function V1(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function z1(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function eW(n){let e=new WeakMap,i=null;function A(g){if(g&&g.isTexture){const I=g.mapping,c=I===Kl||I===lE,_=I===vg||I===bg;if(c||_){let p=e.get(g);const B=p!==void 0?p.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==B)return i===null&&(i=new q1(n)),p=c?i.fromEquirectangular(g,p):i.fromCubemap(g,p),p.texture.pmremVersion=g.pmremVersion,e.set(g,p),p.texture;if(p!==void 0)return p.texture;{const d=g.image;return c&&d&&d.height>0||_&&d&&o(d)?(i===null&&(i=new q1(n)),p=c?i.fromEquirectangular(g):i.fromCubemap(g),p.texture.pmremVersion=g.pmremVersion,e.set(g,p),g.addEventListener("dispose",s),p.texture):null}}}return g}function o(g){let I=0;const c=6;for(let _=0;_<c;_++)g[_]!==void 0&&I++;return I===c}function s(g){const I=g.target;I.removeEventListener("dispose",s);const c=e.get(I);c!==void 0&&(e.delete(I),c.dispose())}function a(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:A,dispose:a}}function AW(n){const e={};function i(A){if(e[A]!==void 0)return e[A];let o;switch(A){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(A)}return e[A]=o,o}return{has:function(A){return i(A)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(A){const o=i(A);return o===null&&MI("THREE.WebGLRenderer: "+A+" extension not supported."),o}}}function tW(n,e,i,A){const o={},s=new WeakMap;function a(p){const B=p.target;B.index!==null&&e.remove(B.index);for(const Q in B.attributes)e.remove(B.attributes[Q]);for(const Q in B.morphAttributes){const y=B.morphAttributes[Q];for(let h=0,E=y.length;h<E;h++)e.remove(y[h])}B.removeEventListener("dispose",a),delete o[B.id];const d=s.get(B);d&&(e.remove(d),s.delete(B)),A.releaseStatesOfGeometry(B),B.isInstancedBufferGeometry===!0&&delete B._maxInstanceCount,i.memory.geometries--}function g(p,B){return o[B.id]===!0||(B.addEventListener("dispose",a),o[B.id]=!0,i.memory.geometries++),B}function I(p){const B=p.attributes;for(const Q in B)e.update(B[Q],n.ARRAY_BUFFER);const d=p.morphAttributes;for(const Q in d){const y=d[Q];for(let h=0,E=y.length;h<E;h++)e.update(y[h],n.ARRAY_BUFFER)}}function c(p){const B=[],d=p.index,Q=p.attributes.position;let y=0;if(d!==null){const u=d.array;y=d.version;for(let f=0,m=u.length;f<m;f+=3){const M=u[f+0],v=u[f+1],b=u[f+2];B.push(M,v,v,b,b,M)}}else if(Q!==void 0){const u=Q.array;y=Q.version;for(let f=0,m=u.length/3-1;f<m;f+=3){const M=f+0,v=f+1,b=f+2;B.push(M,v,v,b,b,M)}}else return;const h=new(AO(B)?rO:Ch)(B,1);h.version=y;const E=s.get(p);E&&e.remove(E),s.set(p,h)}function _(p){const B=s.get(p);if(B){const d=p.index;d!==null&&B.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:g,update:I,getWireframeAttribute:_}}function iW(n,e,i){let A;function o(B){A=B}let s,a;function g(B){s=B.type,a=B.bytesPerElement}function I(B,d){n.drawElements(A,d,s,B*a),i.update(d,A,1)}function c(B,d,Q){Q!==0&&(n.drawElementsInstanced(A,d,s,B*a,Q),i.update(d,A,Q))}function _(B,d,Q){if(Q===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,d,0,s,B,0,Q);let h=0;for(let E=0;E<Q;E++)h+=d[E];i.update(h,A,1)}function p(B,d,Q,y){if(Q===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let E=0;E<B.length;E++)c(B[E]/a,d[E],y[E]);else{h.multiDrawElementsInstancedWEBGL(A,d,0,s,B,0,y,0,Q);let E=0;for(let u=0;u<Q;u++)E+=d[u]*y[u];i.update(E,A,1)}}this.setMode=o,this.setIndex=g,this.render=I,this.renderInstances=c,this.renderMultiDraw=_,this.renderMultiDrawInstances=p}function nW(n){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function A(s,a,g){switch(i.calls++,a){case n.TRIANGLES:i.triangles+=g*(s/3);break;case n.LINES:i.lines+=g*(s/2);break;case n.LINE_STRIP:i.lines+=g*(s-1);break;case n.LINE_LOOP:i.lines+=g*s;break;case n.POINTS:i.points+=g*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:A}}function rW(n,e,i){const A=new WeakMap,o=new fA;function s(a,g,I){const c=a.morphTargetInfluences,_=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,p=_!==void 0?_.length:0;let B=A.get(g);if(B===void 0||B.count!==p){let w=function(){b.dispose(),A.delete(g),g.removeEventListener("dispose",w)};B!==void 0&&B.texture.dispose();const d=g.morphAttributes.position!==void 0,Q=g.morphAttributes.normal!==void 0,y=g.morphAttributes.color!==void 0,h=g.morphAttributes.position||[],E=g.morphAttributes.normal||[],u=g.morphAttributes.color||[];let f=0;d===!0&&(f=1),Q===!0&&(f=2),y===!0&&(f=3);let m=g.attributes.position.count*f,M=1;m>e.maxTextureSize&&(M=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);const v=new Float32Array(m*M*4*p),b=new iO(v,m,M,p);b.type=Hn,b.needsUpdate=!0;const x=f*4;for(let S=0;S<p;S++){const F=h[S],k=E[S],P=u[S],z=m*M*4*S;for(let ie=0;ie<F.count;ie++){const W=ie*x;d===!0&&(o.fromBufferAttribute(F,ie),v[z+W+0]=o.x,v[z+W+1]=o.y,v[z+W+2]=o.z,v[z+W+3]=0),Q===!0&&(o.fromBufferAttribute(k,ie),v[z+W+4]=o.x,v[z+W+5]=o.y,v[z+W+6]=o.z,v[z+W+7]=0),y===!0&&(o.fromBufferAttribute(P,ie),v[z+W+8]=o.x,v[z+W+9]=o.y,v[z+W+10]=o.z,v[z+W+11]=P.itemSize===4?o.w:1)}}B={count:p,texture:b,size:new iA(m,M)},A.set(g,B),g.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)I.getUniforms().setValue(n,"morphTexture",a.morphTexture,i);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const Q=g.morphTargetsRelative?1:1-d;I.getUniforms().setValue(n,"morphTargetBaseInfluence",Q),I.getUniforms().setValue(n,"morphTargetInfluences",c)}I.getUniforms().setValue(n,"morphTargetsTexture",B.texture,i),I.getUniforms().setValue(n,"morphTargetsTextureSize",B.size)}return{update:s}}function oW(n,e,i,A){let o=new WeakMap;function s(I){const c=A.render.frame,_=I.geometry,p=e.get(I,_);if(o.get(p)!==c&&(e.update(p),o.set(p,c)),I.isInstancedMesh&&(I.hasEventListener("dispose",g)===!1&&I.addEventListener("dispose",g),o.get(I)!==c&&(i.update(I.instanceMatrix,n.ARRAY_BUFFER),I.instanceColor!==null&&i.update(I.instanceColor,n.ARRAY_BUFFER),o.set(I,c))),I.isSkinnedMesh){const B=I.skeleton;o.get(B)!==c&&(B.update(),o.set(B,c))}return p}function a(){o=new WeakMap}function g(I){const c=I.target;c.removeEventListener("dispose",g),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:a}}class _h extends si{constructor(e,i,A,o,s,a,g,I,c,_=Bg){if(_!==Bg&&_!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");A===void 0&&_===Bg&&(A=Po),A===void 0&&_===_a&&(A=la),super(null,o,s,a,g,I,_,A,c),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=g!==void 0?g:An,this.minFilter=I!==void 0?I:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const gO=new si,W1=new _h(1,1),IO=new iO,cO=new jj,CO=new sO,X1=[],Z1=[],$1=new Float32Array(16),eP=new Float32Array(9),AP=new Float32Array(4);function Kg(n,e,i){const A=n[0];if(A<=0||A>0)return n;const o=e*i;let s=X1[o];if(s===void 0&&(s=new Float32Array(o),X1[o]=s),e!==0){A.toArray(s,0);for(let a=1,g=0;a!==e;++a)g+=i,n[a].toArray(s,g)}return s}function ui(n,e){if(n.length!==e.length)return!1;for(let i=0,A=n.length;i<A;i++)if(n[i]!==e[i])return!1;return!0}function Qi(n,e){for(let i=0,A=e.length;i<A;i++)n[i]=e[i]}function S_(n,e){let i=Z1[e];i===void 0&&(i=new Int32Array(e),Z1[e]=i);for(let A=0;A!==e;++A)i[A]=n.allocateTextureUnit();return i}function sW(n,e){const i=this.cache;i[0]!==e&&(n.uniform1f(this.addr,e),i[0]=e)}function aW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ui(i,e))return;n.uniform2fv(this.addr,e),Qi(i,e)}}function gW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ui(i,e))return;n.uniform3fv(this.addr,e),Qi(i,e)}}function IW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ui(i,e))return;n.uniform4fv(this.addr,e),Qi(i,e)}}function cW(n,e){const i=this.cache,A=e.elements;if(A===void 0){if(ui(i,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qi(i,e)}else{if(ui(i,A))return;AP.set(A),n.uniformMatrix2fv(this.addr,!1,AP),Qi(i,A)}}function CW(n,e){const i=this.cache,A=e.elements;if(A===void 0){if(ui(i,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qi(i,e)}else{if(ui(i,A))return;eP.set(A),n.uniformMatrix3fv(this.addr,!1,eP),Qi(i,A)}}function lW(n,e){const i=this.cache,A=e.elements;if(A===void 0){if(ui(i,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qi(i,e)}else{if(ui(i,A))return;$1.set(A),n.uniformMatrix4fv(this.addr,!1,$1),Qi(i,A)}}function _W(n,e){const i=this.cache;i[0]!==e&&(n.uniform1i(this.addr,e),i[0]=e)}function pW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ui(i,e))return;n.uniform2iv(this.addr,e),Qi(i,e)}}function BW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ui(i,e))return;n.uniform3iv(this.addr,e),Qi(i,e)}}function EW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ui(i,e))return;n.uniform4iv(this.addr,e),Qi(i,e)}}function dW(n,e){const i=this.cache;i[0]!==e&&(n.uniform1ui(this.addr,e),i[0]=e)}function hW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ui(i,e))return;n.uniform2uiv(this.addr,e),Qi(i,e)}}function uW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ui(i,e))return;n.uniform3uiv(this.addr,e),Qi(i,e)}}function QW(n,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ui(i,e))return;n.uniform4uiv(this.addr,e),Qi(i,e)}}function fW(n,e,i){const A=this.cache,o=i.allocateTextureUnit();A[0]!==o&&(n.uniform1i(this.addr,o),A[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(W1.compareFunction=eO,s=W1):s=gO,i.setTexture2D(e||s,o)}function yW(n,e,i){const A=this.cache,o=i.allocateTextureUnit();A[0]!==o&&(n.uniform1i(this.addr,o),A[0]=o),i.setTexture3D(e||cO,o)}function mW(n,e,i){const A=this.cache,o=i.allocateTextureUnit();A[0]!==o&&(n.uniform1i(this.addr,o),A[0]=o),i.setTextureCube(e||CO,o)}function DW(n,e,i){const A=this.cache,o=i.allocateTextureUnit();A[0]!==o&&(n.uniform1i(this.addr,o),A[0]=o),i.setTexture2DArray(e||IO,o)}function SW(n){switch(n){case 5126:return sW;case 35664:return aW;case 35665:return gW;case 35666:return IW;case 35674:return cW;case 35675:return CW;case 35676:return lW;case 5124:case 35670:return _W;case 35667:case 35671:return pW;case 35668:case 35672:return BW;case 35669:case 35673:return EW;case 5125:return dW;case 36294:return hW;case 36295:return uW;case 36296:return QW;case 35678:case 36198:case 36298:case 36306:case 35682:return fW;case 35679:case 36299:case 36307:return yW;case 35680:case 36300:case 36308:case 36293:return mW;case 36289:case 36303:case 36311:case 36292:return DW}}function wW(n,e){n.uniform1fv(this.addr,e)}function vW(n,e){const i=Kg(e,this.size,2);n.uniform2fv(this.addr,i)}function bW(n,e){const i=Kg(e,this.size,3);n.uniform3fv(this.addr,i)}function MW(n,e){const i=Kg(e,this.size,4);n.uniform4fv(this.addr,i)}function RW(n,e){const i=Kg(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,i)}function NW(n,e){const i=Kg(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,i)}function xW(n,e){const i=Kg(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,i)}function LW(n,e){n.uniform1iv(this.addr,e)}function FW(n,e){n.uniform2iv(this.addr,e)}function TW(n,e){n.uniform3iv(this.addr,e)}function UW(n,e){n.uniform4iv(this.addr,e)}function GW(n,e){n.uniform1uiv(this.addr,e)}function kW(n,e){n.uniform2uiv(this.addr,e)}function HW(n,e){n.uniform3uiv(this.addr,e)}function PW(n,e){n.uniform4uiv(this.addr,e)}function KW(n,e,i){const A=this.cache,o=e.length,s=S_(i,o);ui(A,s)||(n.uniform1iv(this.addr,s),Qi(A,s));for(let a=0;a!==o;++a)i.setTexture2D(e[a]||gO,s[a])}function JW(n,e,i){const A=this.cache,o=e.length,s=S_(i,o);ui(A,s)||(n.uniform1iv(this.addr,s),Qi(A,s));for(let a=0;a!==o;++a)i.setTexture3D(e[a]||cO,s[a])}function OW(n,e,i){const A=this.cache,o=e.length,s=S_(i,o);ui(A,s)||(n.uniform1iv(this.addr,s),Qi(A,s));for(let a=0;a!==o;++a)i.setTextureCube(e[a]||CO,s[a])}function YW(n,e,i){const A=this.cache,o=e.length,s=S_(i,o);ui(A,s)||(n.uniform1iv(this.addr,s),Qi(A,s));for(let a=0;a!==o;++a)i.setTexture2DArray(e[a]||IO,s[a])}function qW(n){switch(n){case 5126:return wW;case 35664:return vW;case 35665:return bW;case 35666:return MW;case 35674:return RW;case 35675:return NW;case 35676:return xW;case 5124:case 35670:return LW;case 35667:case 35671:return FW;case 35668:case 35672:return TW;case 35669:case 35673:return UW;case 5125:return GW;case 36294:return kW;case 36295:return HW;case 36296:return PW;case 35678:case 36198:case 36298:case 36306:case 35682:return KW;case 35679:case 36299:case 36307:return JW;case 35680:case 36300:case 36308:case 36293:return OW;case 36289:case 36303:case 36311:case 36292:return YW}}class jW{constructor(e,i,A){this.id=e,this.addr=A,this.cache=[],this.type=i.type,this.setValue=SW(i.type)}}class VW{constructor(e,i,A){this.id=e,this.addr=A,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qW(i.type)}}class zW{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,A){const o=this.seq;for(let s=0,a=o.length;s!==a;++s){const g=o[s];g.setValue(e,i[g.id],A)}}}const bp=/(\w+)(\])?(\[|\.)?/g;function tP(n,e){n.seq.push(e),n.map[e.id]=e}function WW(n,e,i){const A=n.name,o=A.length;for(bp.lastIndex=0;;){const s=bp.exec(A),a=bp.lastIndex;let g=s[1];const I=s[2]==="]",c=s[3];if(I&&(g=g|0),c===void 0||c==="["&&a+2===o){tP(i,c===void 0?new jW(g,n,e):new VW(g,n,e));break}else{let p=i.map[g];p===void 0&&(p=new zW(g),tP(i,p)),i=p}}}class pl{constructor(e,i){this.seq=[],this.map={};const A=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let o=0;o<A;++o){const s=e.getActiveUniform(i,o),a=e.getUniformLocation(i,s.name);WW(s,a,this)}}setValue(e,i,A,o){const s=this.map[i];s!==void 0&&s.setValue(e,A,o)}setOptional(e,i,A){const o=i[A];o!==void 0&&this.setValue(e,A,o)}static upload(e,i,A,o){for(let s=0,a=i.length;s!==a;++s){const g=i[s],I=A[g.id];I.needsUpdate!==!1&&g.setValue(e,I.value,o)}}static seqWithValue(e,i){const A=[];for(let o=0,s=e.length;o!==s;++o){const a=e[o];a.id in i&&A.push(a)}return A}}function iP(n,e,i){const A=n.createShader(e);return n.shaderSource(A,i),n.compileShader(A),A}const XW=37297;let ZW=0;function $W(n,e){const i=n.split(`
`),A=[],o=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let a=o;a<s;a++){const g=a+1;A.push(`${g===e?">":" "} ${g}: ${i[a]}`)}return A.join(`
`)}const nP=new RA;function e8(n){et._getMatrix(nP,et.workingColorSpace,n);const e=`mat3( ${nP.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(n)){case Q_:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rP(n,e,i){const A=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(A&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+o+`

`+$W(n.getShaderSource(e),a)}else return o}function A8(n,e){const i=e8(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function t8(n,e){let i;switch(e){case rj:i="Linear";break;case oj:i="Reinhard";break;case sj:i="Cineon";break;case aj:i="ACESFilmic";break;case Ij:i="AgX";break;case cj:i="Neutral";break;case gj:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+n+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const EC=new T;function i8(){et.getLuminanceCoefficients(EC);const n=EC.x.toFixed(4),e=EC.y.toFixed(4),i=EC.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n8(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(RI).join(`
`)}function r8(n){const e=[];for(const i in n){const A=n[i];A!==!1&&e.push("#define "+i+" "+A)}return e.join(`
`)}function o8(n,e){const i={},A=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<A;o++){const s=n.getActiveAttrib(e,o),a=s.name;let g=1;s.type===n.FLOAT_MAT2&&(g=2),s.type===n.FLOAT_MAT3&&(g=3),s.type===n.FLOAT_MAT4&&(g=4),i[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:g}}return i}function RI(n){return n!==""}function oP(n,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sP(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s8=/^[ \t]*#include +<([\w\d./]+)>/gm;function KE(n){return n.replace(s8,g8)}const a8=new Map;function g8(n,e){let i=xA[e];if(i===void 0){const A=a8.get(e);if(A!==void 0)i=xA[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return KE(i)}const I8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aP(n){return n.replace(I8,c8)}function c8(n,e,i,A){let o="";for(let s=parseInt(e);s<parseInt(i);s++)o+=A.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function gP(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C8(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===PJ?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gq?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===uo&&(e="SHADOWMAP_TYPE_VSM"),e}function l8(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vg:case bg:e="ENVMAP_TYPE_CUBE";break;case d_:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _8(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bg:e="ENVMAP_MODE_REFRACTION";break}return e}function p8(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case E_:e="ENVMAP_BLENDING_MULTIPLY";break;case ij:e="ENVMAP_BLENDING_MIX";break;case nj:e="ENVMAP_BLENDING_ADD";break}return e}function B8(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:A,maxMip:i}}function E8(n,e,i,A){const o=n.getContext(),s=i.defines;let a=i.vertexShader,g=i.fragmentShader;const I=C8(i),c=l8(i),_=_8(i),p=p8(i),B=B8(i),d=n8(i),Q=r8(s),y=o.createProgram();let h,E,u=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(h=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,Q].filter(RI).join(`
`),h.length>0&&(h+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,Q].filter(RI).join(`
`),E.length>0&&(E+=`
`)):(h=[gP(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,Q,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(RI).join(`
`),E=[gP(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,Q,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+_:"",i.envMap?"#define "+p:"",B?"#define CUBEUV_TEXEL_WIDTH "+B.texelWidth:"",B?"#define CUBEUV_TEXEL_HEIGHT "+B.texelHeight:"",B?"#define CUBEUV_MAX_MIP "+B.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+I:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ms?"#define TONE_MAPPING":"",i.toneMapping!==ms?xA.tonemapping_pars_fragment:"",i.toneMapping!==ms?t8("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xA.colorspace_pars_fragment,A8("linearToOutputTexel",i.outputColorSpace),i8(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(RI).join(`
`)),a=KE(a),a=oP(a,i),a=sP(a,i),g=KE(g),g=oP(g,i),g=sP(g,i),a=aP(a),g=aP(g),i.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,h=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,E=["#define varying in",i.glslVersion===Q1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const f=u+h+a,m=u+E+g,M=iP(o,o.VERTEX_SHADER,f),v=iP(o,o.FRAGMENT_SHADER,m);o.attachShader(y,M),o.attachShader(y,v),i.index0AttributeName!==void 0?o.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function b(F){if(n.debug.checkShaderErrors){const k=o.getProgramInfoLog(y).trim(),P=o.getShaderInfoLog(M).trim(),z=o.getShaderInfoLog(v).trim();let ie=!0,W=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,M,v);else{const de=rP(o,M,"vertex"),H=rP(o,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+de+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||z==="")&&(W=!1);W&&(F.diagnostics={runnable:ie,programLog:k,vertexShader:{log:P,prefix:h},fragmentShader:{log:z,prefix:E}})}o.deleteShader(M),o.deleteShader(v),x=new pl(o,y),w=o8(o,y)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(y,XW)),S},this.destroy=function(){A.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZW++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=v,this}let d8=0;class h8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,A=e.fragmentShader,o=this._getShaderStage(i),s=this._getShaderStage(A),a=this._getShaderCacheForMaterial(e);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const A of i)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let A=i.get(e);return A===void 0&&(A=new Set,i.set(e,A)),A}_getShaderStage(e){const i=this.shaderCache;let A=i.get(e);return A===void 0&&(A=new u8(e),i.set(e,A)),A}}class u8{constructor(e){this.id=d8++,this.code=e,this.usedTimes=0}}function Q8(n,e,i,A,o,s,a){const g=new ch,I=new h8,c=new Set,_=[],p=o.logarithmicDepthBuffer,B=o.vertexTextures;let d=o.precision;const Q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function h(w,S,F,k,P){const z=k.fog,ie=P.geometry,W=w.isMeshStandardMaterial?k.environment:null,de=(w.isMeshStandardMaterial?i:e).get(w.envMap||W),H=de&&de.mapping===d_?de.image.height:null,oe=Q[w.type];w.precision!==null&&(d=o.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const _e=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ve=_e!==void 0?_e.length:0;let qe=0;ie.morphAttributes.position!==void 0&&(qe=1),ie.morphAttributes.normal!==void 0&&(qe=2),ie.morphAttributes.color!==void 0&&(qe=3);let vA,ae,fe,Ge;if(oe){const rt=Dn[oe];vA=rt.vertexShader,ae=rt.fragmentShader}else vA=w.vertexShader,ae=w.fragmentShader,I.update(w),fe=I.getVertexShaderID(w),Ge=I.getFragmentShaderID(w);const be=n.getRenderTarget(),oA=n.state.buffers.depth.getReversed(),hA=P.isInstancedMesh===!0,LA=P.isBatchedMesh===!0,wt=!!w.map,VA=!!w.matcap,Xt=!!de,V=!!w.aoMap,pn=!!w.lightMap,jA=!!w.bumpMap,TA=!!w.normalMap,cA=!!w.displacementMap,yt=!!w.emissiveMap,sA=!!w.metalnessMap,U=!!w.roughnessMap,R=w.anisotropy>0,ee=w.clearcoat>0,Be=w.dispersion>0,he=w.iridescence>0,pe=w.sheen>0,eA=w.transmission>0,ke=R&&!!w.anisotropyMap,je=ee&&!!w.clearcoatMap,zA=ee&&!!w.clearcoatNormalMap,ye=ee&&!!w.clearcoatRoughnessMap,ze=he&&!!w.iridescenceMap,CA=he&&!!w.iridescenceThicknessMap,lA=pe&&!!w.sheenColorMap,Ye=pe&&!!w.sheenRoughnessMap,bA=!!w.specularMap,MA=!!w.specularColorMap,dt=!!w.specularIntensityMap,O=eA&&!!w.transmissionMap,Te=eA&&!!w.thicknessMap,se=!!w.gradientMap,Ee=!!w.alphaMap,Ke=w.alphaTest>0,Je=!!w.alphaHash,yA=!!w.extensions;let C=ms;w.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(C=n.toneMapping);const Ei={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:vA,fragmentShader:ae,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:LA,batchingColor:LA&&P._colorsTexture!==null,instancing:hA,instancingColor:hA&&P.instanceColor!==null,instancingMorph:hA&&P.morphTexture!==null,supportsVertexTextures:B,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:VA,envMap:Xt,envMapMode:Xt&&de.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:pn,bumpMap:jA,normalMap:TA,displacementMap:B&&cA,emissiveMap:yt,normalMapObjectSpace:TA&&w.normalMapType===pj,normalMapTangentSpace:TA&&w.normalMapType===u_,metalnessMap:sA,roughnessMap:U,anisotropy:R,anisotropyMap:ke,clearcoat:ee,clearcoatMap:je,clearcoatNormalMap:zA,clearcoatRoughnessMap:ye,dispersion:Be,iridescence:he,iridescenceMap:ze,iridescenceThicknessMap:CA,sheen:pe,sheenColorMap:lA,sheenRoughnessMap:Ye,specularMap:bA,specularColorMap:MA,specularIntensityMap:dt,transmission:eA,transmissionMap:O,thicknessMap:Te,gradientMap:se,opaque:w.transparent===!1&&w.blending===pg&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ke,alphaHash:Je,combine:w.combine,mapUv:wt&&y(w.map.channel),aoMapUv:V&&y(w.aoMap.channel),lightMapUv:pn&&y(w.lightMap.channel),bumpMapUv:jA&&y(w.bumpMap.channel),normalMapUv:TA&&y(w.normalMap.channel),displacementMapUv:cA&&y(w.displacementMap.channel),emissiveMapUv:yt&&y(w.emissiveMap.channel),metalnessMapUv:sA&&y(w.metalnessMap.channel),roughnessMapUv:U&&y(w.roughnessMap.channel),anisotropyMapUv:ke&&y(w.anisotropyMap.channel),clearcoatMapUv:je&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:zA&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:CA&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:lA&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&y(w.sheenRoughnessMap.channel),specularMapUv:bA&&y(w.specularMap.channel),specularColorMapUv:MA&&y(w.specularColorMap.channel),specularIntensityMapUv:dt&&y(w.specularIntensityMap.channel),transmissionMapUv:O&&y(w.transmissionMap.channel),thicknessMapUv:Te&&y(w.thicknessMap.channel),alphaMapUv:Ee&&y(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(TA||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!ie.attributes.uv&&(wt||Ee),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:oA,skinning:P.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:C,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===Qt,decodeVideoTextureEmissive:yt&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===pi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:yA&&w.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yA&&w.extensions.multiDraw===!0||LA)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ei.vertexUv1s=c.has(1),Ei.vertexUv2s=c.has(2),Ei.vertexUv3s=c.has(3),c.clear(),Ei}function E(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)S.push(F),S.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(u(S,w),f(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function u(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function f(w,S){g.disableAll(),S.supportsVertexTextures&&g.enable(0),S.instancing&&g.enable(1),S.instancingColor&&g.enable(2),S.instancingMorph&&g.enable(3),S.matcap&&g.enable(4),S.envMap&&g.enable(5),S.normalMapObjectSpace&&g.enable(6),S.normalMapTangentSpace&&g.enable(7),S.clearcoat&&g.enable(8),S.iridescence&&g.enable(9),S.alphaTest&&g.enable(10),S.vertexColors&&g.enable(11),S.vertexAlphas&&g.enable(12),S.vertexUv1s&&g.enable(13),S.vertexUv2s&&g.enable(14),S.vertexUv3s&&g.enable(15),S.vertexTangents&&g.enable(16),S.anisotropy&&g.enable(17),S.alphaHash&&g.enable(18),S.batching&&g.enable(19),S.dispersion&&g.enable(20),S.batchingColor&&g.enable(21),w.push(g.mask),g.disableAll(),S.fog&&g.enable(0),S.useFog&&g.enable(1),S.flatShading&&g.enable(2),S.logarithmicDepthBuffer&&g.enable(3),S.reverseDepthBuffer&&g.enable(4),S.skinning&&g.enable(5),S.morphTargets&&g.enable(6),S.morphNormals&&g.enable(7),S.morphColors&&g.enable(8),S.premultipliedAlpha&&g.enable(9),S.shadowMapEnabled&&g.enable(10),S.doubleSided&&g.enable(11),S.flipSided&&g.enable(12),S.useDepthPacking&&g.enable(13),S.dithering&&g.enable(14),S.transmission&&g.enable(15),S.sheen&&g.enable(16),S.opaque&&g.enable(17),S.pointsUvs&&g.enable(18),S.decodeVideoTexture&&g.enable(19),S.decodeVideoTextureEmissive&&g.enable(20),S.alphaToCoverage&&g.enable(21),w.push(g.mask)}function m(w){const S=Q[w.type];let F;if(S){const k=Dn[S];F=Ng.clone(k.uniforms)}else F=w.uniforms;return F}function M(w,S){let F;for(let k=0,P=_.length;k<P;k++){const z=_[k];if(z.cacheKey===S){F=z,++F.usedTimes;break}}return F===void 0&&(F=new E8(n,S,w,s),_.push(F)),F}function v(w){if(--w.usedTimes===0){const S=_.indexOf(w);_[S]=_[_.length-1],_.pop(),w.destroy()}}function b(w){I.remove(w)}function x(){I.dispose()}return{getParameters:h,getProgramCacheKey:E,getUniforms:m,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:_,dispose:x}}function f8(){let n=new WeakMap;function e(a){return n.has(a)}function i(a){let g=n.get(a);return g===void 0&&(g={},n.set(a,g)),g}function A(a){n.delete(a)}function o(a,g,I){n.get(a)[g]=I}function s(){n=new WeakMap}return{has:e,get:i,remove:A,update:o,dispose:s}}function y8(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function IP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cP(){const n=[];let e=0;const i=[],A=[],o=[];function s(){e=0,i.length=0,A.length=0,o.length=0}function a(p,B,d,Q,y,h){let E=n[e];return E===void 0?(E={id:p.id,object:p,geometry:B,material:d,groupOrder:Q,renderOrder:p.renderOrder,z:y,group:h},n[e]=E):(E.id=p.id,E.object=p,E.geometry=B,E.material=d,E.groupOrder=Q,E.renderOrder=p.renderOrder,E.z=y,E.group=h),e++,E}function g(p,B,d,Q,y,h){const E=a(p,B,d,Q,y,h);d.transmission>0?A.push(E):d.transparent===!0?o.push(E):i.push(E)}function I(p,B,d,Q,y,h){const E=a(p,B,d,Q,y,h);d.transmission>0?A.unshift(E):d.transparent===!0?o.unshift(E):i.unshift(E)}function c(p,B){i.length>1&&i.sort(p||y8),A.length>1&&A.sort(B||IP),o.length>1&&o.sort(B||IP)}function _(){for(let p=e,B=n.length;p<B;p++){const d=n[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:i,transmissive:A,transparent:o,init:s,push:g,unshift:I,finish:_,sort:c}}function m8(){let n=new WeakMap;function e(A,o){const s=n.get(A);let a;return s===void 0?(a=new cP,n.set(A,[a])):o>=s.length?(a=new cP,s.push(a)):a=s[o],a}function i(){n=new WeakMap}return{get:e,dispose:i}}function D8(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new T,color:new Ue};break;case"SpotLight":i={position:new T,direction:new T,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new T,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new T,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=i,i}}}function S8(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new iA};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new iA};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new iA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=i,i}}}let w8=0;function v8(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function b8(n){const e=new D8,i=S8(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)A.probe.push(new T);const o=new T,s=new xe,a=new xe;function g(c){let _=0,p=0,B=0;for(let w=0;w<9;w++)A.probe[w].set(0,0,0);let d=0,Q=0,y=0,h=0,E=0,u=0,f=0,m=0,M=0,v=0,b=0;c.sort(v8);for(let w=0,S=c.length;w<S;w++){const F=c[w],k=F.color,P=F.intensity,z=F.distance,ie=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=k.r*P,p+=k.g*P,B+=k.b*P;else if(F.isLightProbe){for(let W=0;W<9;W++)A.probe[W].addScaledVector(F.sh.coefficients[W],P);b++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const de=F.shadow,H=i.get(F);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,A.directionalShadow[d]=H,A.directionalShadowMap[d]=ie,A.directionalShadowMatrix[d]=F.shadow.matrix,u++}A.directional[d]=W,d++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(k).multiplyScalar(P),W.distance=z,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,A.spot[y]=W;const de=F.shadow;if(F.map&&(A.spotLightMap[M]=F.map,M++,de.updateMatrices(F),F.castShadow&&v++),A.spotLightMatrix[y]=de.matrix,F.castShadow){const H=i.get(F);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,A.spotShadow[y]=H,A.spotShadowMap[y]=ie,m++}y++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(k).multiplyScalar(P),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),A.rectArea[h]=W,h++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const de=F.shadow,H=i.get(F);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,H.shadowCameraNear=de.camera.near,H.shadowCameraFar=de.camera.far,A.pointShadow[Q]=H,A.pointShadowMap[Q]=ie,A.pointShadowMatrix[Q]=F.shadow.matrix,f++}A.point[Q]=W,Q++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(P),W.groundColor.copy(F.groundColor).multiplyScalar(P),A.hemi[E]=W,E++}}h>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=Re.LTC_FLOAT_1,A.rectAreaLTC2=Re.LTC_FLOAT_2):(A.rectAreaLTC1=Re.LTC_HALF_1,A.rectAreaLTC2=Re.LTC_HALF_2)),A.ambient[0]=_,A.ambient[1]=p,A.ambient[2]=B;const x=A.hash;(x.directionalLength!==d||x.pointLength!==Q||x.spotLength!==y||x.rectAreaLength!==h||x.hemiLength!==E||x.numDirectionalShadows!==u||x.numPointShadows!==f||x.numSpotShadows!==m||x.numSpotMaps!==M||x.numLightProbes!==b)&&(A.directional.length=d,A.spot.length=y,A.rectArea.length=h,A.point.length=Q,A.hemi.length=E,A.directionalShadow.length=u,A.directionalShadowMap.length=u,A.pointShadow.length=f,A.pointShadowMap.length=f,A.spotShadow.length=m,A.spotShadowMap.length=m,A.directionalShadowMatrix.length=u,A.pointShadowMatrix.length=f,A.spotLightMatrix.length=m+M-v,A.spotLightMap.length=M,A.numSpotLightShadowsWithMaps=v,A.numLightProbes=b,x.directionalLength=d,x.pointLength=Q,x.spotLength=y,x.rectAreaLength=h,x.hemiLength=E,x.numDirectionalShadows=u,x.numPointShadows=f,x.numSpotShadows=m,x.numSpotMaps=M,x.numLightProbes=b,A.version=w8++)}function I(c,_){let p=0,B=0,d=0,Q=0,y=0;const h=_.matrixWorldInverse;for(let E=0,u=c.length;E<u;E++){const f=c[E];if(f.isDirectionalLight){const m=A.directional[p];m.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(o),m.direction.transformDirection(h),p++}else if(f.isSpotLight){const m=A.spot[d];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(h),m.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(o),m.direction.transformDirection(h),d++}else if(f.isRectAreaLight){const m=A.rectArea[Q];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(h),a.identity(),s.copy(f.matrixWorld),s.premultiply(h),a.extractRotation(s),m.halfWidth.set(f.width*.5,0,0),m.halfHeight.set(0,f.height*.5,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),Q++}else if(f.isPointLight){const m=A.point[B];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(h),B++}else if(f.isHemisphereLight){const m=A.hemi[y];m.direction.setFromMatrixPosition(f.matrixWorld),m.direction.transformDirection(h),y++}}}return{setup:g,setupView:I,state:A}}function CP(n){const e=new b8(n),i=[],A=[];function o(_){c.camera=_,i.length=0,A.length=0}function s(_){i.push(_)}function a(_){A.push(_)}function g(){e.setup(i)}function I(_){e.setupView(i,_)}const c={lightsArray:i,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:g,setupLightsView:I,pushLight:s,pushShadow:a}}function M8(n){let e=new WeakMap;function i(o,s=0){const a=e.get(o);let g;return a===void 0?(g=new CP(n),e.set(o,[g])):s>=a.length?(g=new CP(n),a.push(g)):g=a[s],g}function A(){e=new WeakMap}return{get:i,dispose:A}}class lO extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R8 extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x8=`uniform sampler2D shadow_pass;
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
}`;function L8(n,e,i){let A=new y_;const o=new iA,s=new iA,a=new fA,g=new lO({depthPacking:Ol}),I=new R8,c={},_=i.maxTextureSize,p={[Yn]:pi,[pi]:Yn,[In]:In},B=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new iA},radius:{value:4}},vertexShader:N8,fragmentShader:x8}),d=B.clone();d.defines.HORIZONTAL_PASS=1;const Q=new Ut;Q.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Gt(Q,B),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PJ;let E=this.type;this.render=function(v,b,x){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||v.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=E!==uo&&this.type===uo,z=E===uo&&this.type!==uo;for(let ie=0,W=v.length;ie<W;ie++){const de=v[ie],H=de.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const oe=H.getFrameExtents();if(o.multiply(oe),s.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(s.x=Math.floor(_/oe.x),o.x=s.x*oe.x,H.mapSize.x=s.x),o.y>_&&(s.y=Math.floor(_/oe.y),o.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||P===!0||z===!0){const ve=this.type!==uo?{minFilter:An,magFilter:An}:{};H.map!==null&&H.map.dispose(),H.map=new rn(o.x,o.y,ve),H.map.texture.name=de.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const _e=H.getViewportCount();for(let ve=0;ve<_e;ve++){const qe=H.getViewport(ve);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),k.viewport(a),H.updateMatrices(de,ve),A=H.getFrustum(),m(b,x,H.camera,de,this.type)}H.isPointLightShadow!==!0&&this.type===uo&&u(H,x),H.needsUpdate=!1}E=this.type,h.needsUpdate=!1,n.setRenderTarget(w,S,F)};function u(v,b){const x=e.update(y);B.defines.VSM_SAMPLES!==v.blurSamples&&(B.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,B.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new rn(o.x,o.y)),B.uniforms.shadow_pass.value=v.map.texture,B.uniforms.resolution.value=v.mapSize,B.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(b,null,x,B,y,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(b,null,x,d,y,null)}function f(v,b,x,w){let S=null;const F=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(F!==void 0)S=F;else if(S=x.isPointLight===!0?I:g,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=S.uuid,P=b.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let ie=z[P];ie===void 0&&(ie=S.clone(),z[P]=ie,b.addEventListener("dispose",M)),S=ie}if(S.visible=b.visible,S.wireframe=b.wireframe,w===uo?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,x.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=x}return S}function m(v,b,x,w,S){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===uo)&&(!v.frustumCulled||A.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);const P=e.update(v),z=v.material;if(Array.isArray(z)){const ie=P.groups;for(let W=0,de=ie.length;W<de;W++){const H=ie[W],oe=z[H.materialIndex];if(oe&&oe.visible){const _e=f(v,oe,w,S);v.onBeforeShadow(n,v,b,x,P,_e,H),n.renderBufferDirect(x,null,P,_e,v,H),v.onAfterShadow(n,v,b,x,P,_e,H)}}}else if(z.visible){const ie=f(v,z,w,S);v.onBeforeShadow(n,v,b,x,P,ie,null),n.renderBufferDirect(x,null,P,ie,v,null),v.onAfterShadow(n,v,b,x,P,ie,null)}}const k=v.children;for(let P=0,z=k.length;P<z;P++)m(k[P],b,x,w,S)}function M(v){v.target.removeEventListener("dispose",M);for(const x in c){const w=c[x],S=v.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const F8={[oE]:sE,[aE]:cE,[gE]:CE,[wg]:IE,[sE]:oE,[cE]:aE,[CE]:gE,[IE]:wg};function T8(n,e){function i(){let O=!1;const Te=new fA;let se=null;const Ee=new fA(0,0,0,0);return{setMask:function(Ke){se!==Ke&&!O&&(n.colorMask(Ke,Ke,Ke,Ke),se=Ke)},setLocked:function(Ke){O=Ke},setClear:function(Ke,Je,yA,C,Ei){Ei===!0&&(Ke*=C,Je*=C,yA*=C),Te.set(Ke,Je,yA,C),Ee.equals(Te)===!1&&(n.clearColor(Ke,Je,yA,C),Ee.copy(Te))},reset:function(){O=!1,se=null,Ee.set(-1,0,0,0)}}}function A(){let O=!1,Te=!1,se=null,Ee=null,Ke=null;return{setReversed:function(Je){if(Te!==Je){const yA=e.get("EXT_clip_control");Te?yA.clipControlEXT(yA.LOWER_LEFT_EXT,yA.ZERO_TO_ONE_EXT):yA.clipControlEXT(yA.LOWER_LEFT_EXT,yA.NEGATIVE_ONE_TO_ONE_EXT);const C=Ke;Ke=null,this.setClear(C)}Te=Je},getReversed:function(){return Te},setTest:function(Je){Je?be(n.DEPTH_TEST):oA(n.DEPTH_TEST)},setMask:function(Je){se!==Je&&!O&&(n.depthMask(Je),se=Je)},setFunc:function(Je){if(Te&&(Je=F8[Je]),Ee!==Je){switch(Je){case oE:n.depthFunc(n.NEVER);break;case sE:n.depthFunc(n.ALWAYS);break;case aE:n.depthFunc(n.LESS);break;case wg:n.depthFunc(n.LEQUAL);break;case gE:n.depthFunc(n.EQUAL);break;case IE:n.depthFunc(n.GEQUAL);break;case cE:n.depthFunc(n.GREATER);break;case CE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Je}},setLocked:function(Je){O=Je},setClear:function(Je){Ke!==Je&&(Te&&(Je=1-Je),n.clearDepth(Je),Ke=Je)},reset:function(){O=!1,se=null,Ee=null,Ke=null,Te=!1}}}function o(){let O=!1,Te=null,se=null,Ee=null,Ke=null,Je=null,yA=null,C=null,Ei=null;return{setTest:function(rt){O||(rt?be(n.STENCIL_TEST):oA(n.STENCIL_TEST))},setMask:function(rt){Te!==rt&&!O&&(n.stencilMask(rt),Te=rt)},setFunc:function(rt,Bn,Vn){(se!==rt||Ee!==Bn||Ke!==Vn)&&(n.stencilFunc(rt,Bn,Vn),se=rt,Ee=Bn,Ke=Vn)},setOp:function(rt,Bn,Vn){(Je!==rt||yA!==Bn||C!==Vn)&&(n.stencilOp(rt,Bn,Vn),Je=rt,yA=Bn,C=Vn)},setLocked:function(rt){O=rt},setClear:function(rt){Ei!==rt&&(n.clearStencil(rt),Ei=rt)},reset:function(){O=!1,Te=null,se=null,Ee=null,Ke=null,Je=null,yA=null,C=null,Ei=null}}}const s=new i,a=new A,g=new o,I=new WeakMap,c=new WeakMap;let _={},p={},B=new WeakMap,d=[],Q=null,y=!1,h=null,E=null,u=null,f=null,m=null,M=null,v=null,b=new Ue(0,0,0),x=0,w=!1,S=null,F=null,k=null,P=null,z=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,de=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=de>=1):H.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=de>=2);let oe=null,_e={};const ve=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),vA=new fA().fromArray(ve),ae=new fA().fromArray(qe);function fe(O,Te,se,Ee){const Ke=new Uint8Array(4),Je=n.createTexture();n.bindTexture(O,Je),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yA=0;yA<se;yA++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ke):n.texImage2D(Te+yA,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ke);return Je}const Ge={};Ge[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),g.setClear(0),be(n.DEPTH_TEST),a.setFunc(wg),jA(!1),TA(C1),be(n.CULL_FACE),V(Jn);function be(O){_[O]!==!0&&(n.enable(O),_[O]=!0)}function oA(O){_[O]!==!1&&(n.disable(O),_[O]=!1)}function hA(O,Te){return p[O]!==Te?(n.bindFramebuffer(O,Te),p[O]=Te,O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function LA(O,Te){let se=d,Ee=!1;if(O){se=B.get(Te),se===void 0&&(se=[],B.set(Te,se));const Ke=O.textures;if(se.length!==Ke.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,yA=Ke.length;Je<yA;Je++)se[Je]=n.COLOR_ATTACHMENT0+Je;se.length=Ke.length,Ee=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(se)}function wt(O){return Q!==O?(n.useProgram(O),Q=O,!0):!1}const VA={[Zs]:n.FUNC_ADD,[Hq]:n.FUNC_SUBTRACT,[Pq]:n.FUNC_REVERSE_SUBTRACT};VA[Kq]=n.MIN,VA[Jq]=n.MAX;const Xt={[Oq]:n.ZERO,[Yq]:n.ONE,[qq]:n.SRC_COLOR,[nE]:n.SRC_ALPHA,[Zq]:n.SRC_ALPHA_SATURATE,[Wq]:n.DST_COLOR,[Vq]:n.DST_ALPHA,[jq]:n.ONE_MINUS_SRC_COLOR,[rE]:n.ONE_MINUS_SRC_ALPHA,[Xq]:n.ONE_MINUS_DST_COLOR,[zq]:n.ONE_MINUS_DST_ALPHA,[$q]:n.CONSTANT_COLOR,[ej]:n.ONE_MINUS_CONSTANT_COLOR,[Aj]:n.CONSTANT_ALPHA,[tj]:n.ONE_MINUS_CONSTANT_ALPHA};function V(O,Te,se,Ee,Ke,Je,yA,C,Ei,rt){if(O===Jn){y===!0&&(oA(n.BLEND),y=!1);return}if(y===!1&&(be(n.BLEND),y=!0),O!==kq){if(O!==h||rt!==w){if((E!==Zs||m!==Zs)&&(n.blendEquation(n.FUNC_ADD),E=Zs,m=Zs),rt)switch(O){case pg:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case l1:n.blendFunc(n.ONE,n.ONE);break;case _1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case p1:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case pg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case l1:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case p1:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}u=null,f=null,M=null,v=null,b.set(0,0,0),x=0,h=O,w=rt}return}Ke=Ke||Te,Je=Je||se,yA=yA||Ee,(Te!==E||Ke!==m)&&(n.blendEquationSeparate(VA[Te],VA[Ke]),E=Te,m=Ke),(se!==u||Ee!==f||Je!==M||yA!==v)&&(n.blendFuncSeparate(Xt[se],Xt[Ee],Xt[Je],Xt[yA]),u=se,f=Ee,M=Je,v=yA),(C.equals(b)===!1||Ei!==x)&&(n.blendColor(C.r,C.g,C.b,Ei),b.copy(C),x=Ei),h=O,w=!1}function pn(O,Te){O.side===In?oA(n.CULL_FACE):be(n.CULL_FACE);let se=O.side===pi;Te&&(se=!se),jA(se),O.blending===pg&&O.transparent===!1?V(Jn):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ee=O.stencilWrite;g.setTest(Ee),Ee&&(g.setMask(O.stencilWriteMask),g.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),g.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):oA(n.SAMPLE_ALPHA_TO_COVERAGE)}function jA(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function TA(O){O!==Tq?(be(n.CULL_FACE),O!==F&&(O===C1?n.cullFace(n.BACK):O===Uq?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oA(n.CULL_FACE),F=O}function cA(O){O!==k&&(W&&n.lineWidth(O),k=O)}function yt(O,Te,se){O?(be(n.POLYGON_OFFSET_FILL),(P!==Te||z!==se)&&(n.polygonOffset(Te,se),P=Te,z=se)):oA(n.POLYGON_OFFSET_FILL)}function sA(O){O?be(n.SCISSOR_TEST):oA(n.SCISSOR_TEST)}function U(O){O===void 0&&(O=n.TEXTURE0+ie-1),oe!==O&&(n.activeTexture(O),oe=O)}function R(O,Te,se){se===void 0&&(oe===null?se=n.TEXTURE0+ie-1:se=oe);let Ee=_e[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},_e[se]=Ee),(Ee.type!==O||Ee.texture!==Te)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(O,Te||Ge[O]),Ee.type=O,Ee.texture=Te)}function ee(){const O=_e[oe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Be(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function eA(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zA(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function CA(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lA(O){vA.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),vA.copy(O))}function Ye(O){ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function bA(O,Te){let se=c.get(Te);se===void 0&&(se=new WeakMap,c.set(Te,se));let Ee=se.get(O);Ee===void 0&&(Ee=n.getUniformBlockIndex(Te,O.name),se.set(O,Ee))}function MA(O,Te){const Ee=c.get(Te).get(O);I.get(Te)!==Ee&&(n.uniformBlockBinding(Te,Ee,O.__bindingPointIndex),I.set(Te,Ee))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),_={},oe=null,_e={},p={},B=new WeakMap,d=[],Q=null,y=!1,h=null,E=null,u=null,f=null,m=null,M=null,v=null,b=new Ue(0,0,0),x=0,w=!1,S=null,F=null,k=null,P=null,z=null,vA.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),g.reset()}return{buffers:{color:s,depth:a,stencil:g},enable:be,disable:oA,bindFramebuffer:hA,drawBuffers:LA,useProgram:wt,setBlending:V,setMaterial:pn,setFlipSided:jA,setCullFace:TA,setLineWidth:cA,setPolygonOffset:yt,setScissorTest:sA,activeTexture:U,bindTexture:R,unbindTexture:ee,compressedTexImage2D:Be,compressedTexImage3D:he,texImage2D:ze,texImage3D:CA,updateUBOMapping:bA,uniformBlockBinding:MA,texStorage2D:zA,texStorage3D:ye,texSubImage2D:pe,texSubImage3D:eA,compressedTexSubImage2D:ke,compressedTexSubImage3D:je,scissor:lA,viewport:Ye,reset:dt}}function lP(n,e,i,A){const o=U8(A);switch(i){case jJ:return n*e;case zJ:return n*e;case WJ:return n*e*2;case sh:return n*e/o.components*o.byteLength;case h_:return n*e/o.components*o.byteLength;case XJ:return n*e*2/o.components*o.byteLength;case ah:return n*e*2/o.components*o.byteLength;case VJ:return n*e*3/o.components*o.byteLength;case vn:return n*e*4/o.components*o.byteLength;case gh:return n*e*4/o.components*o.byteLength;case Il:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pE:case EE:return Math.max(n,16)*Math.max(e,8)/4;case _E:case BE:return Math.max(n,8)*Math.max(e,8)/2;case dE:case hE:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uE:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case QE:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fE:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yE:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mE:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case DE:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case SE:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wE:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vE:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bE:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ME:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case RE:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case NE:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xE:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case LE:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case FE:case TE:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ZJ:case UE:return Math.ceil(n/4)*Math.ceil(e/4)*8;case GE:case kE:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function U8(n){switch(n){case nn:case OJ:return{byteLength:1,components:1};case Cc:case YJ:case yc:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case Po:case nh:case Hn:return{byteLength:4,components:1};case qJ:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function G8(n,e,i,A,o,s,a){const g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,I=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new iA,_=new WeakMap;let p;const B=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function Q(U,R){return d?new OffscreenCanvas(U,R):pc("canvas")}function y(U,R,ee){let Be=1;const he=sA(U);if((he.width>ee||he.height>ee)&&(Be=ee/Math.max(he.width,he.height)),Be<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(Be*he.width),eA=Math.floor(Be*he.height);p===void 0&&(p=Q(pe,eA));const ke=R?Q(pe,eA):p;return ke.width=pe,ke.height=eA,ke.getContext("2d").drawImage(U,0,0,pe,eA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+pe+"x"+eA+")."),ke}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function h(U){return U.generateMipmaps}function E(U){n.generateMipmap(U)}function u(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function f(U,R,ee,Be,he=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=R;if(R===n.RED&&(ee===n.FLOAT&&(pe=n.R32F),ee===n.HALF_FLOAT&&(pe=n.R16F),ee===n.UNSIGNED_BYTE&&(pe=n.R8)),R===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.R8UI),ee===n.UNSIGNED_SHORT&&(pe=n.R16UI),ee===n.UNSIGNED_INT&&(pe=n.R32UI),ee===n.BYTE&&(pe=n.R8I),ee===n.SHORT&&(pe=n.R16I),ee===n.INT&&(pe=n.R32I)),R===n.RG&&(ee===n.FLOAT&&(pe=n.RG32F),ee===n.HALF_FLOAT&&(pe=n.RG16F),ee===n.UNSIGNED_BYTE&&(pe=n.RG8)),R===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RG8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RG16UI),ee===n.UNSIGNED_INT&&(pe=n.RG32UI),ee===n.BYTE&&(pe=n.RG8I),ee===n.SHORT&&(pe=n.RG16I),ee===n.INT&&(pe=n.RG32I)),R===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),ee===n.UNSIGNED_INT&&(pe=n.RGB32UI),ee===n.BYTE&&(pe=n.RGB8I),ee===n.SHORT&&(pe=n.RGB16I),ee===n.INT&&(pe=n.RGB32I)),R===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),ee===n.UNSIGNED_INT&&(pe=n.RGBA32UI),ee===n.BYTE&&(pe=n.RGBA8I),ee===n.SHORT&&(pe=n.RGBA16I),ee===n.INT&&(pe=n.RGBA32I)),R===n.RGB&&ee===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),R===n.RGBA){const eA=he?Q_:et.getTransfer(Be);ee===n.FLOAT&&(pe=n.RGBA32F),ee===n.HALF_FLOAT&&(pe=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(pe=eA===Qt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function m(U,R){let ee;return U?R===null||R===Po||R===la?ee=n.DEPTH24_STENCIL8:R===Hn?ee=n.DEPTH32F_STENCIL8:R===Cc&&(ee=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Po||R===la?ee=n.DEPTH_COMPONENT24:R===Hn?ee=n.DEPTH_COMPONENT32F:R===Cc&&(ee=n.DEPTH_COMPONENT16),ee}function M(U,R){return h(U)===!0||U.isFramebufferTexture&&U.minFilter!==An&&U.minFilter!==en?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function v(U){const R=U.target;R.removeEventListener("dispose",v),x(R),R.isVideoTexture&&_.delete(R)}function b(U){const R=U.target;R.removeEventListener("dispose",b),S(R)}function x(U){const R=A.get(U);if(R.__webglInit===void 0)return;const ee=U.source,Be=B.get(ee);if(Be){const he=Be[R.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(U),Object.keys(Be).length===0&&B.delete(ee)}A.remove(U)}function w(U){const R=A.get(U);n.deleteTexture(R.__webglTexture);const ee=U.source,Be=B.get(ee);delete Be[R.__cacheKey],a.memory.textures--}function S(U){const R=A.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),A.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Be=0;Be<6;Be++){if(Array.isArray(R.__webglFramebuffer[Be]))for(let he=0;he<R.__webglFramebuffer[Be].length;he++)n.deleteFramebuffer(R.__webglFramebuffer[Be][he]);else n.deleteFramebuffer(R.__webglFramebuffer[Be]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Be])}else{if(Array.isArray(R.__webglFramebuffer))for(let Be=0;Be<R.__webglFramebuffer.length;Be++)n.deleteFramebuffer(R.__webglFramebuffer[Be]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Be=0;Be<R.__webglColorRenderbuffer.length;Be++)R.__webglColorRenderbuffer[Be]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Be]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=U.textures;for(let Be=0,he=ee.length;Be<he;Be++){const pe=A.get(ee[Be]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),A.remove(ee[Be])}A.remove(U)}let F=0;function k(){F=0}function P(){const U=F;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),F+=1,U}function z(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function ie(U,R){const ee=A.get(U);if(U.isVideoTexture&&cA(U),U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){const Be=U.image;if(Be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ee,U,R);return}}i.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+R)}function W(U,R){const ee=A.get(U);if(U.version>0&&ee.__version!==U.version){ae(ee,U,R);return}i.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+R)}function de(U,R){const ee=A.get(U);if(U.version>0&&ee.__version!==U.version){ae(ee,U,R);return}i.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+R)}function H(U,R){const ee=A.get(U);if(U.version>0&&ee.__version!==U.version){fe(ee,U,R);return}i.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+R)}const oe={[Ho]:n.REPEAT,[eo]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},_e={[An]:n.NEAREST,[JJ]:n.NEAREST_MIPMAP_NEAREST,[bI]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[vo]:n.LINEAR_MIPMAP_LINEAR},ve={[Bj]:n.NEVER,[fj]:n.ALWAYS,[Ej]:n.LESS,[eO]:n.LEQUAL,[dj]:n.EQUAL,[Qj]:n.GEQUAL,[hj]:n.GREATER,[uj]:n.NOTEQUAL};function qe(U,R){if(R.type===Hn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===en||R.magFilter===gl||R.magFilter===bI||R.magFilter===vo||R.minFilter===en||R.minFilter===gl||R.minFilter===bI||R.minFilter===vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,oe[R.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,oe[R.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,oe[R.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,_e[R.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,_e[R.minFilter]),R.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,ve[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===An||R.minFilter!==bI&&R.minFilter!==vo||R.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||A.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),A.get(R).__currentAnisotropy=R.anisotropy}}}function vA(U,R){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",v));const Be=R.source;let he=B.get(Be);he===void 0&&(he={},B.set(Be,he));const pe=z(R);if(pe!==U.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),he[pe].usedTimes++;const eA=he[U.__cacheKey];eA!==void 0&&(he[U.__cacheKey].usedTimes--,eA.usedTimes===0&&w(R)),U.__cacheKey=pe,U.__webglTexture=he[pe].texture}return ee}function ae(U,R,ee){let Be=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Be=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Be=n.TEXTURE_3D);const he=vA(U,R),pe=R.source;i.bindTexture(Be,U.__webglTexture,n.TEXTURE0+ee);const eA=A.get(pe);if(pe.version!==eA.__version||he===!0){i.activeTexture(n.TEXTURE0+ee);const ke=et.getPrimaries(et.workingColorSpace),je=R.colorSpace===Zr?null:et.getPrimaries(R.colorSpace),zA=R.colorSpace===Zr||ke===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zA);let ye=y(R.image,!1,o.maxTextureSize);ye=yt(R,ye);const ze=s.convert(R.format,R.colorSpace),CA=s.convert(R.type);let lA=f(R.internalFormat,ze,CA,R.colorSpace,R.isVideoTexture);qe(Be,R);let Ye;const bA=R.mipmaps,MA=R.isVideoTexture!==!0,dt=eA.__version===void 0||he===!0,O=pe.dataReady,Te=M(R,ye);if(R.isDepthTexture)lA=m(R.format===_a,R.type),dt&&(MA?i.texStorage2D(n.TEXTURE_2D,1,lA,ye.width,ye.height):i.texImage2D(n.TEXTURE_2D,0,lA,ye.width,ye.height,0,ze,CA,null));else if(R.isDataTexture)if(bA.length>0){MA&&dt&&i.texStorage2D(n.TEXTURE_2D,Te,lA,bA[0].width,bA[0].height);for(let se=0,Ee=bA.length;se<Ee;se++)Ye=bA[se],MA?O&&i.texSubImage2D(n.TEXTURE_2D,se,0,0,Ye.width,Ye.height,ze,CA,Ye.data):i.texImage2D(n.TEXTURE_2D,se,lA,Ye.width,Ye.height,0,ze,CA,Ye.data);R.generateMipmaps=!1}else MA?(dt&&i.texStorage2D(n.TEXTURE_2D,Te,lA,ye.width,ye.height),O&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,ze,CA,ye.data)):i.texImage2D(n.TEXTURE_2D,0,lA,ye.width,ye.height,0,ze,CA,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){MA&&dt&&i.texStorage3D(n.TEXTURE_2D_ARRAY,Te,lA,bA[0].width,bA[0].height,ye.depth);for(let se=0,Ee=bA.length;se<Ee;se++)if(Ye=bA[se],R.format!==vn)if(ze!==null)if(MA){if(O)if(R.layerUpdates.size>0){const Ke=lP(Ye.width,Ye.height,R.format,R.type);for(const Je of R.layerUpdates){const yA=Ye.data.subarray(Je*Ke/Ye.data.BYTES_PER_ELEMENT,(Je+1)*Ke/Ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Je,Ye.width,Ye.height,1,ze,yA)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ye.width,Ye.height,ye.depth,ze,Ye.data)}else i.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,lA,Ye.width,Ye.height,ye.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else MA?O&&i.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ye.width,Ye.height,ye.depth,ze,CA,Ye.data):i.texImage3D(n.TEXTURE_2D_ARRAY,se,lA,Ye.width,Ye.height,ye.depth,0,ze,CA,Ye.data)}else{MA&&dt&&i.texStorage2D(n.TEXTURE_2D,Te,lA,bA[0].width,bA[0].height);for(let se=0,Ee=bA.length;se<Ee;se++)Ye=bA[se],R.format!==vn?ze!==null?MA?O&&i.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ye.width,Ye.height,ze,Ye.data):i.compressedTexImage2D(n.TEXTURE_2D,se,lA,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):MA?O&&i.texSubImage2D(n.TEXTURE_2D,se,0,0,Ye.width,Ye.height,ze,CA,Ye.data):i.texImage2D(n.TEXTURE_2D,se,lA,Ye.width,Ye.height,0,ze,CA,Ye.data)}else if(R.isDataArrayTexture)if(MA){if(dt&&i.texStorage3D(n.TEXTURE_2D_ARRAY,Te,lA,ye.width,ye.height,ye.depth),O)if(R.layerUpdates.size>0){const se=lP(ye.width,ye.height,R.format,R.type);for(const Ee of R.layerUpdates){const Ke=ye.data.subarray(Ee*se/ye.data.BYTES_PER_ELEMENT,(Ee+1)*se/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,ye.width,ye.height,1,ze,CA,Ke)}R.clearLayerUpdates()}else i.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ze,CA,ye.data)}else i.texImage3D(n.TEXTURE_2D_ARRAY,0,lA,ye.width,ye.height,ye.depth,0,ze,CA,ye.data);else if(R.isData3DTexture)MA?(dt&&i.texStorage3D(n.TEXTURE_3D,Te,lA,ye.width,ye.height,ye.depth),O&&i.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ze,CA,ye.data)):i.texImage3D(n.TEXTURE_3D,0,lA,ye.width,ye.height,ye.depth,0,ze,CA,ye.data);else if(R.isFramebufferTexture){if(dt)if(MA)i.texStorage2D(n.TEXTURE_2D,Te,lA,ye.width,ye.height);else{let se=ye.width,Ee=ye.height;for(let Ke=0;Ke<Te;Ke++)i.texImage2D(n.TEXTURE_2D,Ke,lA,se,Ee,0,ze,CA,null),se>>=1,Ee>>=1}}else if(bA.length>0){if(MA&&dt){const se=sA(bA[0]);i.texStorage2D(n.TEXTURE_2D,Te,lA,se.width,se.height)}for(let se=0,Ee=bA.length;se<Ee;se++)Ye=bA[se],MA?O&&i.texSubImage2D(n.TEXTURE_2D,se,0,0,ze,CA,Ye):i.texImage2D(n.TEXTURE_2D,se,lA,ze,CA,Ye);R.generateMipmaps=!1}else if(MA){if(dt){const se=sA(ye);i.texStorage2D(n.TEXTURE_2D,Te,lA,se.width,se.height)}O&&i.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,CA,ye)}else i.texImage2D(n.TEXTURE_2D,0,lA,ze,CA,ye);h(R)&&E(Be),eA.__version=pe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function fe(U,R,ee){if(R.image.length!==6)return;const Be=vA(U,R),he=R.source;i.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+ee);const pe=A.get(he);if(he.version!==pe.__version||Be===!0){i.activeTexture(n.TEXTURE0+ee);const eA=et.getPrimaries(et.workingColorSpace),ke=R.colorSpace===Zr?null:et.getPrimaries(R.colorSpace),je=R.colorSpace===Zr||eA===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const zA=R.isCompressedTexture||R.image[0].isCompressedTexture,ye=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let Ee=0;Ee<6;Ee++)!zA&&!ye?ze[Ee]=y(R.image[Ee],!0,o.maxCubemapSize):ze[Ee]=ye?R.image[Ee].image:R.image[Ee],ze[Ee]=yt(R,ze[Ee]);const CA=ze[0],lA=s.convert(R.format,R.colorSpace),Ye=s.convert(R.type),bA=f(R.internalFormat,lA,Ye,R.colorSpace),MA=R.isVideoTexture!==!0,dt=pe.__version===void 0||Be===!0,O=he.dataReady;let Te=M(R,CA);qe(n.TEXTURE_CUBE_MAP,R);let se;if(zA){MA&&dt&&i.texStorage2D(n.TEXTURE_CUBE_MAP,Te,bA,CA.width,CA.height);for(let Ee=0;Ee<6;Ee++){se=ze[Ee].mipmaps;for(let Ke=0;Ke<se.length;Ke++){const Je=se[Ke];R.format!==vn?lA!==null?MA?O&&i.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,Je.width,Je.height,lA,Je.data):i.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,bA,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):MA?O&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,Je.width,Je.height,lA,Ye,Je.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,bA,Je.width,Je.height,0,lA,Ye,Je.data)}}}else{if(se=R.mipmaps,MA&&dt){se.length>0&&Te++;const Ee=sA(ze[0]);i.texStorage2D(n.TEXTURE_CUBE_MAP,Te,bA,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ye){MA?O&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ze[Ee].width,ze[Ee].height,lA,Ye,ze[Ee].data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,bA,ze[Ee].width,ze[Ee].height,0,lA,Ye,ze[Ee].data);for(let Ke=0;Ke<se.length;Ke++){const yA=se[Ke].image[Ee].image;MA?O&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,yA.width,yA.height,lA,Ye,yA.data):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,bA,yA.width,yA.height,0,lA,Ye,yA.data)}}else{MA?O&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,lA,Ye,ze[Ee]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,bA,lA,Ye,ze[Ee]);for(let Ke=0;Ke<se.length;Ke++){const Je=se[Ke];MA?O&&i.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,lA,Ye,Je.image[Ee]):i.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,bA,lA,Ye,Je.image[Ee])}}}h(R)&&E(n.TEXTURE_CUBE_MAP),pe.__version=he.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Ge(U,R,ee,Be,he,pe){const eA=s.convert(ee.format,ee.colorSpace),ke=s.convert(ee.type),je=f(ee.internalFormat,eA,ke,ee.colorSpace),zA=A.get(R),ye=A.get(ee);if(ye.__renderTarget=R,!zA.__hasExternalTextures){const ze=Math.max(1,R.width>>pe),CA=Math.max(1,R.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?i.texImage3D(he,pe,je,ze,CA,R.depth,0,eA,ke,null):i.texImage2D(he,pe,je,ze,CA,0,eA,ke,null)}i.bindFramebuffer(n.FRAMEBUFFER,U),TA(R)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,he,ye.__webglTexture,0,jA(R)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Be,he,ye.__webglTexture,pe),i.bindFramebuffer(n.FRAMEBUFFER,null)}function be(U,R,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,U),R.depthBuffer){const Be=R.depthTexture,he=Be&&Be.isDepthTexture?Be.type:null,pe=m(R.stencilBuffer,he),eA=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=jA(R);TA(R)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,pe,R.width,R.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,pe,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,eA,n.RENDERBUFFER,U)}else{const Be=R.textures;for(let he=0;he<Be.length;he++){const pe=Be[he],eA=s.convert(pe.format,pe.colorSpace),ke=s.convert(pe.type),je=f(pe.internalFormat,eA,ke,pe.colorSpace),zA=jA(R);ee&&TA(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zA,je,R.width,R.height):TA(R)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zA,je,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,je,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oA(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(n.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Be=A.get(R.depthTexture);Be.__renderTarget=R,(!Be.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ie(R.depthTexture,0);const he=Be.__webglTexture,pe=jA(R);if(R.depthTexture.format===Bg)TA(R)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(R.depthTexture.format===_a)TA(R)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function hA(U){const R=A.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const Be=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Be){const he=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Be.removeEventListener("dispose",he)};Be.addEventListener("dispose",he),R.__depthDisposeCallback=he}R.__boundDepthTexture=Be}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");oA(R.__webglFramebuffer,U)}else if(ee){R.__webglDepthbuffer=[];for(let Be=0;Be<6;Be++)if(i.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[Be]),R.__webglDepthbuffer[Be]===void 0)R.__webglDepthbuffer[Be]=n.createRenderbuffer(),be(R.__webglDepthbuffer[Be],U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[Be];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,pe)}}else if(i.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),be(R.__webglDepthbuffer,U,!1);else{const Be=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,he)}i.bindFramebuffer(n.FRAMEBUFFER,null)}function LA(U,R,ee){const Be=A.get(U);R!==void 0&&Ge(Be.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&hA(U)}function wt(U){const R=U.texture,ee=A.get(U),Be=A.get(R);U.addEventListener("dispose",b);const he=U.textures,pe=U.isWebGLCubeRenderTarget===!0,eA=he.length>1;if(eA||(Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture()),Be.__version=R.version,a.memory.textures++),pe){ee.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[ke]=[];for(let je=0;je<R.mipmaps.length;je++)ee.__webglFramebuffer[ke][je]=n.createFramebuffer()}else ee.__webglFramebuffer[ke]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ke=0;ke<R.mipmaps.length;ke++)ee.__webglFramebuffer[ke]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(eA)for(let ke=0,je=he.length;ke<je;ke++){const zA=A.get(he[ke]);zA.__webglTexture===void 0&&(zA.__webglTexture=n.createTexture(),a.memory.textures++)}if(U.samples>0&&TA(U)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ke=0;ke<he.length;ke++){const je=he[ke];ee.__webglColorRenderbuffer[ke]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[ke]);const zA=s.convert(je.format,je.colorSpace),ye=s.convert(je.type),ze=f(je.internalFormat,zA,ye,je.colorSpace,U.isXRRenderTarget===!0),CA=jA(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,CA,ze,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ee.__webglColorRenderbuffer[ke])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),be(ee.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){i.bindTexture(n.TEXTURE_CUBE_MAP,Be.__webglTexture),qe(n.TEXTURE_CUBE_MAP,R);for(let ke=0;ke<6;ke++)if(R.mipmaps&&R.mipmaps.length>0)for(let je=0;je<R.mipmaps.length;je++)Ge(ee.__webglFramebuffer[ke][je],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,je);else Ge(ee.__webglFramebuffer[ke],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);h(R)&&E(n.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(eA){for(let ke=0,je=he.length;ke<je;ke++){const zA=he[ke],ye=A.get(zA);i.bindTexture(n.TEXTURE_2D,ye.__webglTexture),qe(n.TEXTURE_2D,zA),Ge(ee.__webglFramebuffer,U,zA,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,0),h(zA)&&E(n.TEXTURE_2D)}i.unbindTexture()}else{let ke=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ke=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),i.bindTexture(ke,Be.__webglTexture),qe(ke,R),R.mipmaps&&R.mipmaps.length>0)for(let je=0;je<R.mipmaps.length;je++)Ge(ee.__webglFramebuffer[je],U,R,n.COLOR_ATTACHMENT0,ke,je);else Ge(ee.__webglFramebuffer,U,R,n.COLOR_ATTACHMENT0,ke,0);h(R)&&E(ke),i.unbindTexture()}U.depthBuffer&&hA(U)}function VA(U){const R=U.textures;for(let ee=0,Be=R.length;ee<Be;ee++){const he=R[ee];if(h(he)){const pe=u(U),eA=A.get(he).__webglTexture;i.bindTexture(pe,eA),E(pe),i.unbindTexture()}}}const Xt=[],V=[];function pn(U){if(U.samples>0){if(TA(U)===!1){const R=U.textures,ee=U.width,Be=U.height;let he=n.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,eA=A.get(U),ke=R.length>1;if(ke)for(let je=0;je<R.length;je++)i.bindFramebuffer(n.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),i.bindFramebuffer(n.FRAMEBUFFER,eA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);i.bindFramebuffer(n.READ_FRAMEBUFFER,eA.__webglMultisampledFramebuffer),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,eA.__webglFramebuffer);for(let je=0;je<R.length;je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ke){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,eA.__webglColorRenderbuffer[je]);const zA=A.get(R[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zA,0)}n.blitFramebuffer(0,0,ee,Be,0,0,ee,Be,he,n.NEAREST),I===!0&&(Xt.length=0,V.length=0,Xt.push(n.COLOR_ATTACHMENT0+je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Xt.push(pe),V.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xt))}if(i.bindFramebuffer(n.READ_FRAMEBUFFER,null),i.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ke)for(let je=0;je<R.length;je++){i.bindFramebuffer(n.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,eA.__webglColorRenderbuffer[je]);const zA=A.get(R[je]).__webglTexture;i.bindFramebuffer(n.FRAMEBUFFER,eA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,zA,0)}i.bindFramebuffer(n.DRAW_FRAMEBUFFER,eA.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&I){const R=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function jA(U){return Math.min(o.maxSamples,U.samples)}function TA(U){const R=A.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function cA(U){const R=a.render.frame;_.get(U)!==R&&(_.set(U,R),U.update())}function yt(U,R){const ee=U.colorSpace,Be=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==Ns&&ee!==Zr&&(et.getTransfer(ee)===Qt?(Be!==vn||he!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function sA(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=W,this.setTexture3D=de,this.setTextureCube=H,this.rebindTextures=LA,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=VA,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=hA,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=TA}function k8(n,e){function i(A,o=Zr){let s;const a=et.getTransfer(o);if(A===nn)return n.UNSIGNED_BYTE;if(A===rh)return n.UNSIGNED_SHORT_4_4_4_4;if(A===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(A===qJ)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===OJ)return n.BYTE;if(A===YJ)return n.SHORT;if(A===Cc)return n.UNSIGNED_SHORT;if(A===nh)return n.INT;if(A===Po)return n.UNSIGNED_INT;if(A===Hn)return n.FLOAT;if(A===yc)return n.HALF_FLOAT;if(A===jJ)return n.ALPHA;if(A===VJ)return n.RGB;if(A===vn)return n.RGBA;if(A===zJ)return n.LUMINANCE;if(A===WJ)return n.LUMINANCE_ALPHA;if(A===Bg)return n.DEPTH_COMPONENT;if(A===_a)return n.DEPTH_STENCIL;if(A===sh)return n.RED;if(A===h_)return n.RED_INTEGER;if(A===XJ)return n.RG;if(A===ah)return n.RG_INTEGER;if(A===gh)return n.RGBA_INTEGER;if(A===Il||A===cl||A===Cl||A===ll)if(a===Qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(A===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(A===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===_E||A===pE||A===BE||A===EE)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(A===_E)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===pE)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===BE)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===EE)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===dE||A===hE||A===uE)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(A===dE||A===hE)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(A===uE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===QE||A===fE||A===yE||A===mE||A===DE||A===SE||A===wE||A===vE||A===bE||A===ME||A===RE||A===NE||A===xE||A===LE)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(A===QE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===fE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===yE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===mE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===DE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===SE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===wE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===vE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===bE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===ME)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===RE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===NE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===xE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===LE)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===_l||A===FE||A===TE)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(A===_l)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===FE)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===TE)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===ZJ||A===UE||A===GE||A===kE)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(A===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(A===UE)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===GE)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===kE)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===la?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:i}}class H8 extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P8={type:"move"};class Mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const A of e.hand.values())this._getHandJoint(i,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,A){let o=null,s=null,a=null;const g=this._targetRay,I=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const h=i.getJointPose(y,A),E=this._getHandJoint(c,y);h!==null&&(E.matrix.fromArray(h.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=h.radius),E.visible=h!==null}const _=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],B=_.position.distanceTo(p.position),d=.02,Q=.005;c.inputState.pinching&&B>d+Q?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&B<=d-Q&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else I!==null&&e.gripSpace&&(s=i.getPose(e.gripSpace,A),s!==null&&(I.matrix.fromArray(s.transform.matrix),I.matrix.decompose(I.position,I.rotation,I.scale),I.matrixWorldNeedsUpdate=!0,s.linearVelocity?(I.hasLinearVelocity=!0,I.linearVelocity.copy(s.linearVelocity)):I.hasLinearVelocity=!1,s.angularVelocity?(I.hasAngularVelocity=!0,I.angularVelocity.copy(s.angularVelocity)):I.hasAngularVelocity=!1));g!==null&&(o=i.getPose(e.targetRaySpace,A),o===null&&s!==null&&(o=s),o!==null&&(g.matrix.fromArray(o.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,o.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(o.linearVelocity)):g.hasLinearVelocity=!1,o.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(o.angularVelocity)):g.hasAngularVelocity=!1,this.dispatchEvent(P8)))}return g!==null&&(g.visible=o!==null),I!==null&&(I.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const A=new Ao;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[i.jointName]=A,e.add(A)}return e.joints[i.jointName]}}const K8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J8=`
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

}`;class O8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,A){if(this.texture===null){const o=new si,s=e.properties.get(o);s.__webglTexture=i.texture,(i.depthNear!=A.depthNear||i.depthFar!=A.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,A=new Oi({vertexShader:K8,fragmentShader:J8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gt(new m_(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y8 extends Oo{constructor(e,i){super();const A=this;let o=null,s=1,a=null,g="local-floor",I=1,c=null,_=null,p=null,B=null,d=null,Q=null;const y=new O8,h=i.getContextAttributes();let E=null,u=null;const f=[],m=[],M=new iA;let v=null;const b=new Di;b.viewport=new fA;const x=new Di;x.viewport=new fA;const w=[b,x],S=new H8;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=f[ae];return fe===void 0&&(fe=new Mp,f[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=f[ae];return fe===void 0&&(fe=new Mp,f[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=f[ae];return fe===void 0&&(fe=new Mp,f[ae]=fe),fe.getHandSpace()};function P(ae){const fe=m.indexOf(ae.inputSource);if(fe===-1)return;const Ge=f[fe];Ge!==void 0&&(Ge.update(ae.inputSource,ae.frame,c||a),Ge.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){o.removeEventListener("select",P),o.removeEventListener("selectstart",P),o.removeEventListener("selectend",P),o.removeEventListener("squeeze",P),o.removeEventListener("squeezestart",P),o.removeEventListener("squeezeend",P),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",ie);for(let ae=0;ae<f.length;ae++){const fe=m[ae];fe!==null&&(m[ae]=null,f[ae].disconnect(fe))}F=null,k=null,y.reset(),e.setRenderTarget(E),d=null,B=null,p=null,o=null,u=null,vA.stop(),A.isPresenting=!1,e.setPixelRatio(v),e.setSize(M.width,M.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){g=ae,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return B!==null?B:d},this.getBinding=function(){return p},this.getFrame=function(){return Q},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(E=e.getRenderTarget(),o.addEventListener("select",P),o.addEventListener("selectstart",P),o.addEventListener("selectend",P),o.addEventListener("squeeze",P),o.addEventListener("squeezestart",P),o.addEventListener("squeezeend",P),o.addEventListener("end",z),o.addEventListener("inputsourceschange",ie),h.xrCompatible!==!0&&await i.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(M),o.renderState.layers===void 0){const fe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(o,i,fe),o.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),u=new rn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let fe=null,Ge=null,be=null;h.depth&&(be=h.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,fe=h.stencil?_a:Bg,Ge=h.stencil?la:Po);const oA={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:s};p=new XRWebGLBinding(o,i),B=p.createProjectionLayer(oA),o.updateRenderState({layers:[B]}),e.setPixelRatio(1),e.setSize(B.textureWidth,B.textureHeight,!1),u=new rn(B.textureWidth,B.textureHeight,{format:vn,type:nn,depthTexture:new _h(B.textureWidth,B.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:B.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(I),c=null,a=await o.requestReferenceSpace(g),vA.setContext(o),vA.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(ae){for(let fe=0;fe<ae.removed.length;fe++){const Ge=ae.removed[fe],be=m.indexOf(Ge);be>=0&&(m[be]=null,f[be].disconnect(Ge))}for(let fe=0;fe<ae.added.length;fe++){const Ge=ae.added[fe];let be=m.indexOf(Ge);if(be===-1){for(let hA=0;hA<f.length;hA++)if(hA>=m.length){m.push(Ge),be=hA;break}else if(m[hA]===null){m[hA]=Ge,be=hA;break}if(be===-1)break}const oA=f[be];oA&&oA.connect(Ge)}}const W=new T,de=new T;function H(ae,fe,Ge){W.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(Ge.matrixWorld);const be=W.distanceTo(de),oA=fe.projectionMatrix.elements,hA=Ge.projectionMatrix.elements,LA=oA[14]/(oA[10]-1),wt=oA[14]/(oA[10]+1),VA=(oA[9]+1)/oA[5],Xt=(oA[9]-1)/oA[5],V=(oA[8]-1)/oA[0],pn=(hA[8]+1)/hA[0],jA=LA*V,TA=LA*pn,cA=be/(-V+pn),yt=cA*-V;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(yt),ae.translateZ(cA),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),oA[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const sA=LA+cA,U=wt+cA,R=jA-yt,ee=TA+(be-yt),Be=VA*wt/U*sA,he=Xt*wt/U*sA;ae.projectionMatrix.makePerspective(R,ee,Be,he,sA,U),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function oe(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let fe=ae.near,Ge=ae.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ge=y.depthFar)),S.near=x.near=b.near=fe,S.far=x.far=b.far=Ge,(F!==S.near||k!==S.far)&&(o.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,k=S.far),b.layers.mask=ae.layers.mask|2,x.layers.mask=ae.layers.mask|4,S.layers.mask=b.layers.mask|x.layers.mask;const be=ae.parent,oA=S.cameras;oe(S,be);for(let hA=0;hA<oA.length;hA++)oe(oA[hA],be);oA.length===2?H(S,b,x):S.projectionMatrix.copy(b.projectionMatrix),_e(ae,S,be)};function _e(ae,fe,Ge){Ge===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Ge.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Mg*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(B===null&&d===null))return I},this.setFoveation=function(ae){I=ae,B!==null&&(B.fixedFoveation=ae),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ve=null;function qe(ae,fe){if(_=fe.getViewerPose(c||a),Q=fe,_!==null){const Ge=_.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let be=!1;Ge.length!==S.cameras.length&&(S.cameras.length=0,be=!0);for(let hA=0;hA<Ge.length;hA++){const LA=Ge[hA];let wt=null;if(d!==null)wt=d.getViewport(LA);else{const Xt=p.getViewSubImage(B,LA);wt=Xt.viewport,hA===0&&(e.setRenderTargetTextures(u,Xt.colorTexture,B.ignoreDepthValues?void 0:Xt.depthStencilTexture),e.setRenderTarget(u))}let VA=w[hA];VA===void 0&&(VA=new Di,VA.layers.enable(hA),VA.viewport=new fA,w[hA]=VA),VA.matrix.fromArray(LA.transform.matrix),VA.matrix.decompose(VA.position,VA.quaternion,VA.scale),VA.projectionMatrix.fromArray(LA.projectionMatrix),VA.projectionMatrixInverse.copy(VA.projectionMatrix).invert(),VA.viewport.set(wt.x,wt.y,wt.width,wt.height),hA===0&&(S.matrix.copy(VA.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),be===!0&&S.cameras.push(VA)}const oA=o.enabledFeatures;if(oA&&oA.includes("depth-sensing")){const hA=p.getDepthInformation(Ge[0]);hA&&hA.isValid&&hA.texture&&y.init(e,hA,o.renderState)}}for(let Ge=0;Ge<f.length;Ge++){const be=m[Ge],oA=f[Ge];be!==null&&oA!==void 0&&oA.update(be,fe,c||a)}ve&&ve(ae,fe),fe.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:fe}),Q=null}const vA=new aO;vA.setAnimationLoop(qe),this.setAnimationLoop=function(ae){ve=ae},this.dispose=function(){}}}const Hs=new Pi,q8=new xe;function j8(n,e){function i(h,E){h.matrixAutoUpdate===!0&&h.updateMatrix(),E.value.copy(h.matrix)}function A(h,E){E.color.getRGB(h.fogColor.value,oO(n)),E.isFog?(h.fogNear.value=E.near,h.fogFar.value=E.far):E.isFogExp2&&(h.fogDensity.value=E.density)}function o(h,E,u,f,m){E.isMeshBasicMaterial||E.isMeshLambertMaterial?s(h,E):E.isMeshToonMaterial?(s(h,E),p(h,E)):E.isMeshPhongMaterial?(s(h,E),_(h,E)):E.isMeshStandardMaterial?(s(h,E),B(h,E),E.isMeshPhysicalMaterial&&d(h,E,m)):E.isMeshMatcapMaterial?(s(h,E),Q(h,E)):E.isMeshDepthMaterial?s(h,E):E.isMeshDistanceMaterial?(s(h,E),y(h,E)):E.isMeshNormalMaterial?s(h,E):E.isLineBasicMaterial?(a(h,E),E.isLineDashedMaterial&&g(h,E)):E.isPointsMaterial?I(h,E,u,f):E.isSpriteMaterial?c(h,E):E.isShadowMaterial?(h.color.value.copy(E.color),h.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function s(h,E){h.opacity.value=E.opacity,E.color&&h.diffuse.value.copy(E.color),E.emissive&&h.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(h.map.value=E.map,i(E.map,h.mapTransform)),E.alphaMap&&(h.alphaMap.value=E.alphaMap,i(E.alphaMap,h.alphaMapTransform)),E.bumpMap&&(h.bumpMap.value=E.bumpMap,i(E.bumpMap,h.bumpMapTransform),h.bumpScale.value=E.bumpScale,E.side===pi&&(h.bumpScale.value*=-1)),E.normalMap&&(h.normalMap.value=E.normalMap,i(E.normalMap,h.normalMapTransform),h.normalScale.value.copy(E.normalScale),E.side===pi&&h.normalScale.value.negate()),E.displacementMap&&(h.displacementMap.value=E.displacementMap,i(E.displacementMap,h.displacementMapTransform),h.displacementScale.value=E.displacementScale,h.displacementBias.value=E.displacementBias),E.emissiveMap&&(h.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,h.emissiveMapTransform)),E.specularMap&&(h.specularMap.value=E.specularMap,i(E.specularMap,h.specularMapTransform)),E.alphaTest>0&&(h.alphaTest.value=E.alphaTest);const u=e.get(E),f=u.envMap,m=u.envMapRotation;f&&(h.envMap.value=f,Hs.copy(m),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),h.envMapRotation.value.setFromMatrix4(q8.makeRotationFromEuler(Hs)),h.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=E.reflectivity,h.ior.value=E.ior,h.refractionRatio.value=E.refractionRatio),E.lightMap&&(h.lightMap.value=E.lightMap,h.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,h.lightMapTransform)),E.aoMap&&(h.aoMap.value=E.aoMap,h.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,h.aoMapTransform))}function a(h,E){h.diffuse.value.copy(E.color),h.opacity.value=E.opacity,E.map&&(h.map.value=E.map,i(E.map,h.mapTransform))}function g(h,E){h.dashSize.value=E.dashSize,h.totalSize.value=E.dashSize+E.gapSize,h.scale.value=E.scale}function I(h,E,u,f){h.diffuse.value.copy(E.color),h.opacity.value=E.opacity,h.size.value=E.size*u,h.scale.value=f*.5,E.map&&(h.map.value=E.map,i(E.map,h.uvTransform)),E.alphaMap&&(h.alphaMap.value=E.alphaMap,i(E.alphaMap,h.alphaMapTransform)),E.alphaTest>0&&(h.alphaTest.value=E.alphaTest)}function c(h,E){h.diffuse.value.copy(E.color),h.opacity.value=E.opacity,h.rotation.value=E.rotation,E.map&&(h.map.value=E.map,i(E.map,h.mapTransform)),E.alphaMap&&(h.alphaMap.value=E.alphaMap,i(E.alphaMap,h.alphaMapTransform)),E.alphaTest>0&&(h.alphaTest.value=E.alphaTest)}function _(h,E){h.specular.value.copy(E.specular),h.shininess.value=Math.max(E.shininess,1e-4)}function p(h,E){E.gradientMap&&(h.gradientMap.value=E.gradientMap)}function B(h,E){h.metalness.value=E.metalness,E.metalnessMap&&(h.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,h.metalnessMapTransform)),h.roughness.value=E.roughness,E.roughnessMap&&(h.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,h.roughnessMapTransform)),E.envMap&&(h.envMapIntensity.value=E.envMapIntensity)}function d(h,E,u){h.ior.value=E.ior,E.sheen>0&&(h.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),h.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(h.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,h.sheenColorMapTransform)),E.sheenRoughnessMap&&(h.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,h.sheenRoughnessMapTransform))),E.clearcoat>0&&(h.clearcoat.value=E.clearcoat,h.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(h.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,h.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(h.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===pi&&h.clearcoatNormalScale.value.negate())),E.dispersion>0&&(h.dispersion.value=E.dispersion),E.iridescence>0&&(h.iridescence.value=E.iridescence,h.iridescenceIOR.value=E.iridescenceIOR,h.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(h.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,h.iridescenceMapTransform)),E.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),E.transmission>0&&(h.transmission.value=E.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),E.transmissionMap&&(h.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,h.transmissionMapTransform)),h.thickness.value=E.thickness,E.thicknessMap&&(h.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=E.attenuationDistance,h.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(h.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(h.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=E.specularIntensity,h.specularColor.value.copy(E.specularColor),E.specularColorMap&&(h.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,h.specularColorMapTransform)),E.specularIntensityMap&&(h.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,h.specularIntensityMapTransform))}function Q(h,E){E.matcap&&(h.matcap.value=E.matcap)}function y(h,E){const u=e.get(E).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:o}}function V8(n,e,i,A){let o={},s={},a=[];const g=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function I(u,f){const m=f.program;A.uniformBlockBinding(u,m)}function c(u,f){let m=o[u.id];m===void 0&&(Q(u),m=_(u),o[u.id]=m,u.addEventListener("dispose",h));const M=f.program;A.updateUBOMapping(u,M);const v=e.render.frame;s[u.id]!==v&&(B(u),s[u.id]=v)}function _(u){const f=p();u.__bindingPointIndex=f;const m=n.createBuffer(),M=u.__size,v=u.usage;return n.bindBuffer(n.UNIFORM_BUFFER,m),n.bufferData(n.UNIFORM_BUFFER,M,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,f,m),m}function p(){for(let u=0;u<g;u++)if(a.indexOf(u)===-1)return a.push(u),u;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function B(u){const f=o[u.id],m=u.uniforms,M=u.__cache;n.bindBuffer(n.UNIFORM_BUFFER,f);for(let v=0,b=m.length;v<b;v++){const x=Array.isArray(m[v])?m[v]:[m[v]];for(let w=0,S=x.length;w<S;w++){const F=x[w];if(d(F,v,w,M)===!0){const k=F.__offset,P=Array.isArray(F.value)?F.value:[F.value];let z=0;for(let ie=0;ie<P.length;ie++){const W=P[ie],de=y(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+z,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,z),z+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(u,f,m,M){const v=u.value,b=f+"_"+m;if(M[b]===void 0)return typeof v=="number"||typeof v=="boolean"?M[b]=v:M[b]=v.clone(),!0;{const x=M[b];if(typeof v=="number"||typeof v=="boolean"){if(x!==v)return M[b]=v,!0}else if(x.equals(v)===!1)return x.copy(v),!0}return!1}function Q(u){const f=u.uniforms;let m=0;const M=16;for(let b=0,x=f.length;b<x;b++){const w=Array.isArray(f[b])?f[b]:[f[b]];for(let S=0,F=w.length;S<F;S++){const k=w[S],P=Array.isArray(k.value)?k.value:[k.value];for(let z=0,ie=P.length;z<ie;z++){const W=P[z],de=y(W),H=m%M,oe=H%de.boundary,_e=H+oe;m+=oe,_e!==0&&M-_e<de.storage&&(m+=M-_e),k.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=m,m+=de.storage}}}const v=m%M;return v>0&&(m+=M-v),u.__size=m,u.__cache={},this}function y(u){const f={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(f.boundary=4,f.storage=4):u.isVector2?(f.boundary=8,f.storage=8):u.isVector3||u.isColor?(f.boundary=16,f.storage=12):u.isVector4?(f.boundary=16,f.storage=16):u.isMatrix3?(f.boundary=48,f.storage=48):u.isMatrix4?(f.boundary=64,f.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),f}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=a.indexOf(f.__bindingPointIndex);a.splice(m,1),n.deleteBuffer(o[f.id]),delete o[f.id],delete s[f.id]}function E(){for(const u in o)n.deleteBuffer(o[u]);a=[],o={},s={}}return{bind:I,update:c,dispose:E}}class s7{constructor(e={}){const{canvas:i=kj(),context:A=null,depth:o=!0,stencil:s=!1,alpha:a=!1,antialias:g=!1,premultipliedAlpha:I=!0,preserveDrawingBuffer:c=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:B=!1}=e;this.isWebGLRenderer=!0;let d;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=A.getContextAttributes().alpha}else d=a;const Q=new Uint32Array(4),y=new Int32Array(4);let h=null,E=null;const u=[],f=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=ms,this.toneMappingExposure=1;const m=this;let M=!1,v=0,b=0,x=null,w=-1,S=null;const F=new fA,k=new fA;let P=null;const z=new Ue(0);let ie=0,W=i.width,de=i.height,H=1,oe=null,_e=null;const ve=new fA(0,0,W,de),qe=new fA(0,0,W,de);let vA=!1;const ae=new y_;let fe=!1,Ge=!1;const be=new xe,oA=new xe,hA=new T,LA=new fA,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let VA=!1;function Xt(){return x===null?H:1}let V=A;function pn(L,q){return i.getContext(L,q)}try{const L={alpha:!0,depth:o,stencil:s,antialias:g,premultipliedAlpha:I,preserveDrawingBuffer:c,powerPreference:_,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rs}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",Ke,!1),i.addEventListener("webglcontextcreationerror",Je,!1),V===null){const q="webgl2";if(V=pn(q,L),V===null)throw pn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let jA,TA,cA,yt,sA,U,R,ee,Be,he,pe,eA,ke,je,zA,ye,ze,CA,lA,Ye,bA,MA,dt,O;function Te(){jA=new AW(V),jA.init(),MA=new k8(V,jA),TA=new zz(V,jA,e,MA),cA=new T8(V,jA),TA.reverseDepthBuffer&&B&&cA.buffers.depth.setReversed(!0),yt=new nW(V),sA=new f8,U=new G8(V,jA,cA,sA,TA,MA,yt),R=new Xz(m),ee=new eW(m),Be=new cV(V),dt=new jz(V,Be),he=new tW(V,Be,yt,dt),pe=new oW(V,he,Be,yt),lA=new rW(V,TA,U),ye=new Wz(sA),eA=new Q8(m,R,ee,jA,TA,dt,ye),ke=new j8(m,sA),je=new m8,zA=new M8(jA),CA=new qz(m,R,ee,cA,pe,d,I),ze=new L8(m,pe,TA),O=new V8(V,yt,TA,cA),Ye=new Vz(V,jA,yt),bA=new iW(V,jA,yt),yt.programs=eA.programs,m.capabilities=TA,m.extensions=jA,m.properties=sA,m.renderLists=je,m.shadowMap=ze,m.state=cA,m.info=yt}Te();const se=new Y8(m,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=jA.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=jA.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(W,de,!1))},this.getSize=function(L){return L.set(W,de)},this.setSize=function(L,q,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=L,de=q,i.width=Math.floor(L*H),i.height=Math.floor(q*H),te===!0&&(i.style.width=L+"px",i.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(W*H,de*H).floor()},this.setDrawingBufferSize=function(L,q,te){W=L,de=q,H=te,i.width=Math.floor(L*te),i.height=Math.floor(q*te),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(F)},this.getViewport=function(L){return L.copy(ve)},this.setViewport=function(L,q,te,ne){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,q,te,ne),cA.viewport(F.copy(ve).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(qe)},this.setScissor=function(L,q,te,ne){L.isVector4?qe.set(L.x,L.y,L.z,L.w):qe.set(L,q,te,ne),cA.scissor(k.copy(qe).multiplyScalar(H).round())},this.getScissorTest=function(){return vA},this.setScissorTest=function(L){cA.setScissorTest(vA=L)},this.setOpaqueSort=function(L){oe=L},this.setTransparentSort=function(L){_e=L},this.getClearColor=function(L){return L.copy(CA.getClearColor())},this.setClearColor=function(){CA.setClearColor.apply(CA,arguments)},this.getClearAlpha=function(){return CA.getClearAlpha()},this.setClearAlpha=function(){CA.setClearAlpha.apply(CA,arguments)},this.clear=function(L=!0,q=!0,te=!0){let ne=0;if(L){let j=!1;if(x!==null){const De=x.texture.format;j=De===gh||De===ah||De===h_}if(j){const De=x.texture.type,He=De===nn||De===Po||De===Cc||De===la||De===rh||De===oh,We=CA.getClearColor(),Xe=CA.getClearAlpha(),_A=We.r,uA=We.g,Ze=We.b;He?(Q[0]=_A,Q[1]=uA,Q[2]=Ze,Q[3]=Xe,V.clearBufferuiv(V.COLOR,0,Q)):(y[0]=_A,y[1]=uA,y[2]=Ze,y[3]=Xe,V.clearBufferiv(V.COLOR,0,y))}else ne|=V.COLOR_BUFFER_BIT}q&&(ne|=V.DEPTH_BUFFER_BIT),te&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",Ke,!1),i.removeEventListener("webglcontextcreationerror",Je,!1),je.dispose(),zA.dispose(),sA.dispose(),R.dispose(),ee.dispose(),pe.dispose(),dt.dispose(),O.dispose(),eA.dispose(),se.dispose(),se.removeEventListener("sessionstart",qg),se.removeEventListener("sessionend",jg),Gr.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=yt.autoReset,q=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,j=ze.type;Te(),yt.autoReset=L,ze.enabled=q,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=j}function Je(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function yA(L){const q=L.target;q.removeEventListener("dispose",yA),C(q)}function C(L){Ei(L),sA.remove(L)}function Ei(L){const q=sA.get(L).programs;q!==void 0&&(q.forEach(function(te){eA.releaseProgram(te)}),L.isShaderMaterial&&eA.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,te,ne,j,De){q===null&&(q=wt);const He=j.isMesh&&j.matrixWorld.determinant()<0,We=bc(L,q,te,ne,j);cA.setMaterial(ne,He);let Xe=te.index,_A=1;if(ne.wireframe===!0){if(Xe=he.getWireframeAttribute(te),Xe===void 0)return;_A=2}const uA=te.drawRange,Ze=te.attributes.position;let WA=uA.start*_A,_t=(uA.start+uA.count)*_A;De!==null&&(WA=Math.max(WA,De.start*_A),_t=Math.min(_t,(De.start+De.count)*_A)),Xe!==null?(WA=Math.max(WA,0),_t=Math.min(_t,Xe.count)):Ze!=null&&(WA=Math.max(WA,0),_t=Math.min(_t,Ze.count));const ht=_t-WA;if(ht<0||ht===1/0)return;dt.setup(j,ne,We,te,Xe);let vi,At=Ye;if(Xe!==null&&(vi=Be.get(Xe),At=bA,At.setIndex(vi)),j.isMesh)ne.wireframe===!0?(cA.setLineWidth(ne.wireframeLinewidth*Xt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(j.isLine){let AA=ne.linewidth;AA===void 0&&(AA=1),cA.setLineWidth(AA*Xt()),j.isLineSegments?At.setMode(V.LINES):j.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else j.isPoints?At.setMode(V.POINTS):j.isSprite&&At.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)At.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(jA.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const AA=j._multiDrawStarts,zn=j._multiDrawCounts,tt=j._multiDrawCount,En=Xe?Be.get(Xe).bytesPerElement:1,ao=sA.get(ne).currentProgram.getUniforms();for(let Yi=0;Yi<tt;Yi++)ao.setValue(V,"_gl_DrawID",Yi),At.render(AA[Yi]/En,zn[Yi])}else if(j.isInstancedMesh)At.renderInstances(WA,ht,j.count);else if(te.isInstancedBufferGeometry){const AA=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,zn=Math.min(te.instanceCount,AA);At.renderInstances(WA,ht,zn)}else At.render(WA,ht)};function rt(L,q,te){L.transparent===!0&&L.side===In&&L.forceSinglePass===!1?(L.side=pi,L.needsUpdate=!0,Ls(L,q,te),L.side=Yn,L.needsUpdate=!0,Ls(L,q,te),L.side=In):Ls(L,q,te)}this.compile=function(L,q,te=null){te===null&&(te=L),E=zA.get(te),E.init(q),f.push(E),te.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),L!==te&&L.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights();const ne=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const De=j.material;if(De)if(Array.isArray(De))for(let He=0;He<De.length;He++){const We=De[He];rt(We,te,j),ne.add(We)}else rt(De,te,j),ne.add(De)}),f.pop(),E=null,ne},this.compileAsync=function(L,q,te=null){const ne=this.compile(L,q,te);return new Promise(j=>{function De(){if(ne.forEach(function(He){sA.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){j(L);return}setTimeout(De,10)}jA.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Bn=null;function Vn(L){Bn&&Bn(L)}function qg(){Gr.stop()}function jg(){Gr.start()}const Gr=new aO;Gr.setAnimationLoop(Vn),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(L){Bn=L,se.setAnimationLoop(L),L===null?Gr.stop():Gr.start()},se.addEventListener("sessionstart",qg),se.addEventListener("sessionend",jg),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,q,x),E=zA.get(L,f.length),E.init(q),f.push(E),oA.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ae.setFromProjectionMatrix(oA),Ge=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Ge),h=je.get(L,u.length),h.init(),u.push(h),se.enabled===!0&&se.isPresenting===!0){const De=m.xr.getDepthSensingMesh();De!==null&&Qa(De,q,-1/0,m.sortObjects)}Qa(L,q,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(oe,_e),VA=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,VA&&CA.addToRenderList(h,L),this.info.render.frame++,fe===!0&&ye.beginShadows();const te=E.state.shadowsArray;ze.render(te,L,q),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=h.opaque,j=h.transmissive;if(E.setupLights(),q.isArrayCamera){const De=q.cameras;if(j.length>0)for(let He=0,We=De.length;He<We;He++){const Xe=De[He];zg(ne,j,L,Xe)}VA&&CA.render(L);for(let He=0,We=De.length;He<We;He++){const Xe=De[He];Vg(h,L,Xe,Xe.viewport)}}else j.length>0&&zg(ne,j,L,q),VA&&CA.render(L),Vg(h,L,q);x!==null&&(U.updateMultisampleRenderTarget(x),U.updateRenderTargetMipmap(x)),L.isScene===!0&&L.onAfterRender(m,L,q),dt.resetDefaultState(),w=-1,S=null,f.pop(),f.length>0?(E=f[f.length-1],fe===!0&&ye.setGlobalState(m.clippingPlanes,E.state.camera)):E=null,u.pop(),u.length>0?h=u[u.length-1]:h=null};function Qa(L,q,te,ne){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)E.pushLight(L),L.castShadow&&E.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ae.intersectsSprite(L)){ne&&LA.setFromMatrixPosition(L.matrixWorld).applyMatrix4(oA);const He=pe.update(L),We=L.material;We.visible&&h.push(L,He,We,te,LA.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ae.intersectsObject(L))){const He=pe.update(L),We=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),LA.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),LA.copy(He.boundingSphere.center)),LA.applyMatrix4(L.matrixWorld).applyMatrix4(oA)),Array.isArray(We)){const Xe=He.groups;for(let _A=0,uA=Xe.length;_A<uA;_A++){const Ze=Xe[_A],WA=We[Ze.materialIndex];WA&&WA.visible&&h.push(L,He,WA,te,LA.z,Ze)}}else We.visible&&h.push(L,He,We,te,LA.z,null)}}const De=L.children;for(let He=0,We=De.length;He<We;He++)Qa(De[He],q,te,ne)}function Vg(L,q,te,ne){const j=L.opaque,De=L.transmissive,He=L.transparent;E.setupLightsView(te),fe===!0&&ye.setGlobalState(m.clippingPlanes,te),ne&&cA.viewport(F.copy(ne)),j.length>0&&xs(j,q,te),De.length>0&&xs(De,q,te),He.length>0&&xs(He,q,te),cA.buffers.depth.setTest(!0),cA.buffers.depth.setMask(!0),cA.buffers.color.setMask(!0),cA.setPolygonOffset(!1)}function zg(L,q,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[ne.id]===void 0&&(E.state.transmissionRenderTarget[ne.id]=new rn(1,1,{generateMipmaps:!0,type:jA.has("EXT_color_buffer_half_float")||jA.has("EXT_color_buffer_float")?yc:nn,minFilter:vo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const De=E.state.transmissionRenderTarget[ne.id],He=ne.viewport||F;De.setSize(He.z,He.w);const We=m.getRenderTarget();m.setRenderTarget(De),m.getClearColor(z),ie=m.getClearAlpha(),ie<1&&m.setClearColor(16777215,.5),m.clear(),VA&&CA.render(te);const Xe=m.toneMapping;m.toneMapping=ms;const _A=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),fe===!0&&ye.setGlobalState(m.clippingPlanes,ne),xs(L,te,ne),U.updateMultisampleRenderTarget(De),U.updateRenderTargetMipmap(De),jA.has("WEBGL_multisampled_render_to_texture")===!1){let uA=!1;for(let Ze=0,WA=q.length;Ze<WA;Ze++){const _t=q[Ze],ht=_t.object,vi=_t.geometry,At=_t.material,AA=_t.group;if(At.side===In&&ht.layers.test(ne.layers)){const zn=At.side;At.side=pi,At.needsUpdate=!0,Wg(ht,te,ne,vi,At,AA),At.side=zn,At.needsUpdate=!0,uA=!0}}uA===!0&&(U.updateMultisampleRenderTarget(De),U.updateRenderTargetMipmap(De))}m.setRenderTarget(We),m.setClearColor(z,ie),_A!==void 0&&(ne.viewport=_A),m.toneMapping=Xe}function xs(L,q,te){const ne=q.isScene===!0?q.overrideMaterial:null;for(let j=0,De=L.length;j<De;j++){const He=L[j],We=He.object,Xe=He.geometry,_A=ne===null?He.material:ne,uA=He.group;We.layers.test(te.layers)&&Wg(We,q,te,Xe,_A,uA)}}function Wg(L,q,te,ne,j,De){L.onBeforeRender(m,q,te,ne,j,De),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(m,q,te,ne,L,De),j.transparent===!0&&j.side===In&&j.forceSinglePass===!1?(j.side=pi,j.needsUpdate=!0,m.renderBufferDirect(te,q,ne,j,L,De),j.side=Yn,j.needsUpdate=!0,m.renderBufferDirect(te,q,ne,j,L,De),j.side=In):m.renderBufferDirect(te,q,ne,j,L,De),L.onAfterRender(m,q,te,ne,j,De)}function Ls(L,q,te){q.isScene!==!0&&(q=wt);const ne=sA.get(L),j=E.state.lights,De=E.state.shadowsArray,He=j.state.version,We=eA.getParameters(L,j.state,De,q,te),Xe=eA.getProgramCacheKey(We);let _A=ne.programs;ne.environment=L.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(L.isMeshStandardMaterial?ee:R).get(L.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,_A===void 0&&(L.addEventListener("dispose",yA),_A=new Map,ne.programs=_A);let uA=_A.get(Xe);if(uA!==void 0){if(ne.currentProgram===uA&&ne.lightsStateVersion===He)return Zg(L,We),uA}else We.uniforms=eA.getUniforms(L),L.onBeforeCompile(We,m),uA=eA.acquireProgram(We,Xe),_A.set(Xe,uA),ne.uniforms=We.uniforms;const Ze=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),Zg(L,We),ne.needsLights=Rc(L),ne.lightsStateVersion=He,ne.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=uA,ne.uniformsList=null,uA}function Xg(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=pl.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Zg(L,q){const te=sA.get(L);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function bc(L,q,te,ne,j){q.isScene!==!0&&(q=wt),U.resetTextureUnits();const De=q.fog,He=ne.isMeshStandardMaterial?q.environment:null,We=x===null?m.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Ns,Xe=(ne.isMeshStandardMaterial?ee:R).get(ne.envMap||He),_A=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,uA=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!te.morphAttributes.position,WA=!!te.morphAttributes.normal,_t=!!te.morphAttributes.color;let ht=ms;ne.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ht=m.toneMapping);const vi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,At=vi!==void 0?vi.length:0,AA=sA.get(ne),zn=E.state.lights;if(fe===!0&&(Ge===!0||L!==S)){const on=L===S&&ne.id===w;ye.setState(ne,L,on)}let tt=!1;ne.version===AA.__version?(AA.needsLights&&AA.lightsStateVersion!==zn.state.version||AA.outputColorSpace!==We||j.isBatchedMesh&&AA.batching===!1||!j.isBatchedMesh&&AA.batching===!0||j.isBatchedMesh&&AA.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&AA.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&AA.instancing===!1||!j.isInstancedMesh&&AA.instancing===!0||j.isSkinnedMesh&&AA.skinning===!1||!j.isSkinnedMesh&&AA.skinning===!0||j.isInstancedMesh&&AA.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&AA.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&AA.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&AA.instancingMorph===!1&&j.morphTexture!==null||AA.envMap!==Xe||ne.fog===!0&&AA.fog!==De||AA.numClippingPlanes!==void 0&&(AA.numClippingPlanes!==ye.numPlanes||AA.numIntersection!==ye.numIntersection)||AA.vertexAlphas!==_A||AA.vertexTangents!==uA||AA.morphTargets!==Ze||AA.morphNormals!==WA||AA.morphColors!==_t||AA.toneMapping!==ht||AA.morphTargetsCount!==At)&&(tt=!0):(tt=!0,AA.__version=ne.version);let En=AA.currentProgram;tt===!0&&(En=Ls(ne,q,j));let ao=!1,Yi=!1,Yo=!1;const ut=En.getUniforms(),xn=AA.uniforms;if(cA.useProgram(En.program)&&(ao=!0,Yi=!0,Yo=!0),ne.id!==w&&(w=ne.id,Yi=!0),ao||S!==L){cA.buffers.depth.getReversed()?(be.copy(L.projectionMatrix),Pj(be),Kj(be),ut.setValue(V,"projectionMatrix",be)):ut.setValue(V,"projectionMatrix",L.projectionMatrix),ut.setValue(V,"viewMatrix",L.matrixWorldInverse);const dr=ut.map.cameraPosition;dr!==void 0&&dr.setValue(V,hA.setFromMatrixPosition(L.matrixWorld)),TA.logarithmicDepthBuffer&&ut.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ut.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Yi=!0,Yo=!0)}if(j.isSkinnedMesh){ut.setOptional(V,j,"bindMatrix"),ut.setOptional(V,j,"bindMatrixInverse");const on=j.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ut.setValue(V,"boneTexture",on.boneTexture,U))}j.isBatchedMesh&&(ut.setOptional(V,j,"batchingTexture"),ut.setValue(V,"batchingTexture",j._matricesTexture,U),ut.setOptional(V,j,"batchingIdTexture"),ut.setValue(V,"batchingIdTexture",j._indirectTexture,U),ut.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&ut.setValue(V,"batchingColorTexture",j._colorsTexture,U));const qo=te.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0)&&lA.update(j,te,En),(Yi||AA.receiveShadow!==j.receiveShadow)&&(AA.receiveShadow=j.receiveShadow,ut.setValue(V,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(xn.envMap.value=Xe,xn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(xn.envMapIntensity.value=q.environmentIntensity),Yi&&(ut.setValue(V,"toneMappingExposure",m.toneMappingExposure),AA.needsLights&&Mc(xn,Yo),De&&ne.fog===!0&&ke.refreshFogUniforms(xn,De),ke.refreshMaterialUniforms(xn,ne,H,de,E.state.transmissionRenderTarget[L.id]),pl.upload(V,Xg(AA),xn,U)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(pl.upload(V,Xg(AA),xn,U),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ut.setValue(V,"center",j.center),ut.setValue(V,"modelViewMatrix",j.modelViewMatrix),ut.setValue(V,"normalMatrix",j.normalMatrix),ut.setValue(V,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const on=ne.uniformsGroups;for(let dr=0,hr=on.length;dr<hr;dr++){const $g=on[dr];O.update($g,En),O.bind($g,En)}}return En}function Mc(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Rc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,q,te){sA.get(L.texture).__webglTexture=q,sA.get(L.depthTexture).__webglTexture=te;const ne=sA.get(L);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||jA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const te=sA.get(L);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,te=0){x=L,v=q,b=te;let ne=!0,j=null,De=!1,He=!1;if(L){const Xe=sA.get(L);if(Xe.__useDefaultFramebuffer!==void 0)cA.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(Xe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Xe.__hasExternalTextures)U.rebindTextures(L,sA.get(L.texture).__webglTexture,sA.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ze=L.depthTexture;if(Xe.__boundDepthTexture!==Ze){if(Ze!==null&&sA.has(Ze)&&(L.width!==Ze.image.width||L.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const _A=L.texture;(_A.isData3DTexture||_A.isDataArrayTexture||_A.isCompressedArrayTexture)&&(He=!0);const uA=sA.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(uA[q])?j=uA[q][te]:j=uA[q],De=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?j=sA.get(L).__webglMultisampledFramebuffer:Array.isArray(uA)?j=uA[te]:j=uA,F.copy(L.viewport),k.copy(L.scissor),P=L.scissorTest}else F.copy(ve).multiplyScalar(H).floor(),k.copy(qe).multiplyScalar(H).floor(),P=vA;if(cA.bindFramebuffer(V.FRAMEBUFFER,j)&&ne&&cA.drawBuffers(L,j),cA.viewport(F),cA.scissor(k),cA.setScissorTest(P),De){const Xe=sA.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,te)}else if(He){const Xe=sA.get(L.texture),_A=q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.__webglTexture,te||0,_A)}w=-1},this.readRenderTargetPixels=function(L,q,te,ne,j,De,He){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=sA.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){cA.bindFramebuffer(V.FRAMEBUFFER,We);try{const Xe=L.texture,_A=Xe.format,uA=Xe.type;if(!TA.textureFormatReadable(_A)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!TA.textureTypeReadable(uA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ne&&te>=0&&te<=L.height-j&&V.readPixels(q,te,ne,j,MA.convert(_A),MA.convert(uA),De)}finally{const Xe=x!==null?sA.get(x).__webglFramebuffer:null;cA.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,q,te,ne,j,De,He){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=sA.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){const Xe=L.texture,_A=Xe.format,uA=Xe.type;if(!TA.textureFormatReadable(_A))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!TA.textureTypeReadable(uA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-ne&&te>=0&&te<=L.height-j){cA.bindFramebuffer(V.FRAMEBUFFER,We);const Ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),V.readPixels(q,te,ne,j,MA.convert(_A),MA.convert(uA),0);const WA=x!==null?sA.get(x).__webglFramebuffer:null;cA.bindFramebuffer(V.FRAMEBUFFER,WA);const _t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Hj(V,_t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer(Ze),V.deleteSync(_t),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,q=null,te=0){L.isTexture!==!0&&(MI("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);const ne=Math.pow(2,-te),j=Math.floor(L.image.width*ne),De=Math.floor(L.image.height*ne),He=q!==null?q.x:0,We=q!==null?q.y:0;U.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,He,We,j,De),cA.unbindTexture()},this.copyTextureToTexture=function(L,q,te=null,ne=null,j=0){L.isTexture!==!0&&(MI("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,L=arguments[1],q=arguments[2],j=arguments[3]||0,te=null);let De,He,We,Xe,_A,uA,Ze,WA,_t;const ht=L.isCompressedTexture?L.mipmaps[j]:L.image;te!==null?(De=te.max.x-te.min.x,He=te.max.y-te.min.y,We=te.isBox3?te.max.z-te.min.z:1,Xe=te.min.x,_A=te.min.y,uA=te.isBox3?te.min.z:0):(De=ht.width,He=ht.height,We=ht.depth||1,Xe=0,_A=0,uA=0),ne!==null?(Ze=ne.x,WA=ne.y,_t=ne.z):(Ze=0,WA=0,_t=0);const vi=MA.convert(q.format),At=MA.convert(q.type);let AA;q.isData3DTexture?(U.setTexture3D(q,0),AA=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),AA=V.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),AA=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const zn=V.getParameter(V.UNPACK_ROW_LENGTH),tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),En=V.getParameter(V.UNPACK_SKIP_PIXELS),ao=V.getParameter(V.UNPACK_SKIP_ROWS),Yi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),V.pixelStorei(V.UNPACK_SKIP_ROWS,_A),V.pixelStorei(V.UNPACK_SKIP_IMAGES,uA);const Yo=L.isDataArrayTexture||L.isData3DTexture,ut=q.isDataArrayTexture||q.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const xn=sA.get(L),qo=sA.get(q),on=sA.get(xn.__renderTarget),dr=sA.get(qo.__renderTarget);cA.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),cA.bindFramebuffer(V.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let hr=0;hr<We;hr++)Yo&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sA.get(L).__webglTexture,j,uA+hr),L.isDepthTexture?(ut&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sA.get(q).__webglTexture,j,_t+hr),V.blitFramebuffer(Xe,_A,De,He,Ze,WA,De,He,V.DEPTH_BUFFER_BIT,V.NEAREST)):ut?V.copyTexSubImage3D(AA,j,Ze,WA,_t+hr,Xe,_A,De,He):V.copyTexSubImage2D(AA,j,Ze,WA,_t+hr,Xe,_A,De,He);cA.bindFramebuffer(V.READ_FRAMEBUFFER,null),cA.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ut?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(AA,j,Ze,WA,_t,De,He,We,vi,At,ht.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(AA,j,Ze,WA,_t,De,He,We,vi,ht.data):V.texSubImage3D(AA,j,Ze,WA,_t,De,He,We,vi,At,ht):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,Ze,WA,De,He,vi,At,ht.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,Ze,WA,ht.width,ht.height,vi,ht.data):V.texSubImage2D(V.TEXTURE_2D,j,Ze,WA,De,He,vi,At,ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,zn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,En),V.pixelStorei(V.UNPACK_SKIP_ROWS,ao),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Yi),j===0&&q.generateMipmaps&&V.generateMipmap(AA),cA.unbindTexture()},this.copyTextureToTexture3D=function(L,q,te=null,ne=null,j=0){return L.isTexture!==!0&&(MI("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,L=arguments[2],q=arguments[3],j=arguments[4]||0),MI('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,q,te,ne,j)},this.initRenderTarget=function(L){sA.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),cA.unbindTexture()},this.resetState=function(){v=0,b=0,x=null,cA.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),i.unpackColorSpace=et._getUnpackColorSpace()}}class _P extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class _O{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=PE,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,A){e*=this.stride,A*=i.stride;for(let o=0,s=this.stride;o<s;o++)this.array[e+o]=i.array[A+o];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),A=new this.constructor(i,this.stride);return A.setUsage(this.usage),A}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new T;class Ro{constructor(e,i,A,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=A,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,A=this.data.count;i<A;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,A=this.count;i<A;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,A=this.count;i<A;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}getComponent(e,i){let A=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(A=Rr(A,this.array)),A}setComponent(e,i,A){return this.normalized&&(A=Bt(A,this.array)),this.data.array[e*this.data.stride+this.offset+i]=A,this}setX(e,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Rr(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Rr(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Rr(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Rr(i,this.array)),i}setXY(e,i,A){return e=e*this.data.stride+this.offset,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=A,this}setXYZ(e,i,A,o){return e=e*this.data.stride+this.offset,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array),o=Bt(o,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=A,this.data.array[e+2]=o,this}setXYZW(e,i,A,o,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Bt(i,this.array),A=Bt(A,this.array),o=Bt(o,this.array),s=Bt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=A,this.data.array[e+2]=o,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let A=0;A<this.count;A++){const o=A*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[o+s])}return new Tt(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let A=0;A<this.count;A++){const o=A*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pP=new T,BP=new fA,EP=new fA,z8=new T,dP=new xe,dC=new T,Rp=new wi,hP=new xe,Np=new Hg;class pO extends Gt{constructor(e,i){super(e,i),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=B1,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new St),this.boundingBox.makeEmpty();const i=e.getAttribute("position");for(let A=0;A<i.count;A++)this.getVertexPosition(A,dC),this.boundingBox.expandByPoint(dC)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const i=e.getAttribute("position");for(let A=0;A<i.count;A++)this.getVertexPosition(A,dC),this.boundingSphere.expandByPoint(dC)}copy(e,i){return super.copy(e,i),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,i){const A=this.material,o=this.matrixWorld;A!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rp.copy(this.boundingSphere),Rp.applyMatrix4(o),e.ray.intersectsSphere(Rp)!==!1&&(hP.copy(o).invert(),Np.copy(e.ray).applyMatrix4(hP),!(this.boundingBox!==null&&Np.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,i,Np)))}getVertexPosition(e,i){return super.getVertexPosition(e,i),this.applyBoneTransform(e,i),i}bind(e,i){this.skeleton=e,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.copy(i).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new fA,i=this.geometry.attributes.skinWeight;for(let A=0,o=i.count;A<o;A++){e.fromBufferAttribute(i,A);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),i.setXYZW(A,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===B1?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cj?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,i){const A=this.skeleton,o=this.geometry;BP.fromBufferAttribute(o.attributes.skinIndex,e),EP.fromBufferAttribute(o.attributes.skinWeight,e),pP.copy(i).applyMatrix4(this.bindMatrix),i.set(0,0,0);for(let s=0;s<4;s++){const a=EP.getComponent(s);if(a!==0){const g=BP.getComponent(s);dP.multiplyMatrices(A.bones[g].matrixWorld,A.boneInverses[g]),i.addScaledVector(z8.copy(pP).applyMatrix4(dP),a)}}return i.applyMatrix4(this.bindMatrixInverse)}}class ql extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class OI extends si{constructor(e=null,i=1,A=1,o,s,a,g,I,c=An,_=An,p,B){super(null,a,g,I,c,_,o,s,p,B),this.isDataTexture=!0,this.image={data:e,width:i,height:A},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uP=new xe,W8=new xe;class w_{constructor(e=[],i=[]){this.uuid=Lr(),this.bones=e.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),i.length===0)this.calculateInverses();else if(e.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let A=0,o=this.bones.length;A<o;A++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,i=this.bones.length;e<i;e++){const A=new xe;this.bones[e]&&A.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(A)}}pose(){for(let e=0,i=this.bones.length;e<i;e++){const A=this.bones[e];A&&A.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,i=this.bones.length;e<i;e++){const A=this.bones[e];A&&(A.parent&&A.parent.isBone?(A.matrix.copy(A.parent.matrixWorld).invert(),A.matrix.multiply(A.matrixWorld)):A.matrix.copy(A.matrixWorld),A.matrix.decompose(A.position,A.quaternion,A.scale))}}update(){const e=this.bones,i=this.boneInverses,A=this.boneMatrices,o=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const g=e[s]?e[s].matrixWorld:W8;uP.multiplyMatrices(g,i[s]),uP.toArray(A,s*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new w_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const i=new Float32Array(e*e*4);i.set(this.boneMatrices);const A=new OI(i,e,e,vn,Hn);return A.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=A,this}getBoneByName(e){for(let i=0,A=this.bones.length;i<A;i++){const o=this.bones[i];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,i){this.uuid=e.uuid;for(let A=0,o=e.bones.length;A<o;A++){const s=e.bones[A];let a=i[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ql),this.bones.push(a),this.boneInverses.push(new xe().fromArray(e.boneInverses[A]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const i=this.bones,A=this.boneInverses;for(let o=0,s=i.length;o<s;o++){const a=i[o];e.bones.push(a.uuid);const g=A[o];e.boneInverses.push(g.toArray())}return e}}class JE extends Tt{constructor(e,i,A,o=1){super(e,i,A),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ua=new xe,QP=new xe,hC=[],fP=new St,X8=new xe,CI=new Gt,lI=new wi;class BO extends Gt{constructor(e,i,A){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new JE(new Float32Array(A*16),16),this.instanceColor=null,this.morphTexture=null,this.count=A,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<A;o++)this.setMatrixAt(o,X8)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new St),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let A=0;A<i;A++)this.getMatrixAt(A,Ua),fP.copy(e.boundingBox).applyMatrix4(Ua),this.boundingBox.union(fP)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let A=0;A<i;A++)this.getMatrixAt(A,Ua),lI.copy(e.boundingSphere).applyMatrix4(Ua),this.boundingSphere.union(lI)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const A=i.morphTargetInfluences,o=this.morphTexture.source.data.data,s=A.length+1,a=e*s+1;for(let g=0;g<A.length;g++)A[g]=o[a+g]}raycast(e,i){const A=this.matrixWorld,o=this.count;if(CI.geometry=this.geometry,CI.material=this.material,CI.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lI.copy(this.boundingSphere),lI.applyMatrix4(A),e.ray.intersectsSphere(lI)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Ua),QP.multiplyMatrices(A,Ua),CI.matrixWorld=QP,CI.raycast(e,hC);for(let a=0,g=hC.length;a<g;a++){const I=hC[a];I.instanceId=s,I.object=this,i.push(I)}hC.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new JE(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const A=i.morphTargetInfluences,o=A.length+1;this.morphTexture===null&&(this.morphTexture=new OI(new Float32Array(o*this.count),o,this.count,sh,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<A.length;c++)a+=A[c];const g=this.geometry.morphTargetsRelative?1:1-a,I=o*e;s[I]=g,s.set(A,I+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function xp(n,e){return n-e}function Z8(n,e){return n.z-e.z}function $8(n,e){return e.z-n.z}class eX{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,i,A,o){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const g=s[this.index];a.push(g),this.index++,g.start=e,g.count=i,g.z=A,g.index=o}reset(){this.list.length=0,this.index=0}}const Qn=new xe,AX=new Ue(1,1,1),Lp=new y_,uC=new St,Ps=new wi,_I=new T,yP=new T,tX=new T,Fp=new eX,Zi=new Gt,QC=[];function iX(n,e,i=0){const A=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const o=n.count;for(let s=0;s<o;s++)for(let a=0;a<A;a++)e.setComponent(s+i,a,n.getComponent(s,a))}else e.array.set(n.array,i*A);e.needsUpdate=!0}function Ks(n,e){if(n.constructor!==e.constructor){const i=Math.min(n.length,e.length);for(let A=0;A<i;A++)e[A]=n[A]}else{const i=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,i))}}class nX extends Gt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,i,A=i*2,o){super(new Ut,o),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=i,this._maxIndexCount=A,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const i=new Float32Array(e*e*4),A=new OI(i,e,e,vn,Hn);this._matricesTexture=A}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const i=new Uint32Array(e*e),A=new OI(i,e,e,h_,Po);this._indirectTexture=A}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const i=new Float32Array(e*e*4).fill(1),A=new OI(i,e,e,vn,Hn);A.colorSpace=et.workingColorSpace,this._colorsTexture=A}_initializeGeometry(e){const i=this.geometry,A=this._maxVertexCount,o=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:g,itemSize:I,normalized:c}=a,_=new g.constructor(A*I),p=new Tt(_,I,c);i.setAttribute(s,p)}if(e.getIndex()!==null){const s=A>65535?new Uint32Array(o):new Uint16Array(o);i.setIndex(new Tt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const i=this.geometry;if(!!e.getIndex()!=!!i.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const A in i.attributes){if(!e.hasAttribute(A))throw new Error(`BatchedMesh: Added geometry missing "${A}". All geometries must have consistent attributes.`);const o=e.getAttribute(A),s=i.getAttribute(A);if(o.itemSize!==s.itemSize||o.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);const e=this.boundingBox,i=this._instanceInfo;e.makeEmpty();for(let A=0,o=i.length;A<o;A++){if(i[A].active===!1)continue;const s=i[A].geometryIndex;this.getMatrixAt(A,Qn),this.getBoundingBoxAt(s,uC).applyMatrix4(Qn),e.union(uC)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.boundingSphere,i=this._instanceInfo;e.makeEmpty();for(let A=0,o=i.length;A<o;A++){if(i[A].active===!1)continue;const s=i[A].geometryIndex;this.getMatrixAt(A,Qn),this.getBoundingSphereAt(s,Ps).applyMatrix4(Qn),e.union(Ps)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const A={visible:!0,active:!0,geometryIndex:e};let o=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(xp),o=this._availableInstanceIds.shift(),this._instanceInfo[o]=A):(o=this._instanceInfo.length,this._instanceInfo.push(A));const s=this._matricesTexture;Qn.identity().toArray(s.image.data,o*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(AX.toArray(a.image.data,o*4),a.needsUpdate=!0),this._visibilityChanged=!0,o}addGeometry(e,i=-1,A=-1){this._initializeGeometry(e),this._validateGeometry(e);const o={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;o.vertexStart=this._nextVertexStart,o.reservedVertexCount=i===-1?e.getAttribute("position").count:i;const a=e.getIndex();if(a!==null&&(o.indexStart=this._nextIndexStart,o.reservedIndexCount=A===-1?a.count:A),o.indexStart!==-1&&o.indexStart+o.reservedIndexCount>this._maxIndexCount||o.vertexStart+o.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let I;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(xp),I=this._availableGeometryIds.shift(),s[I]=o):(I=this._geometryCount,this._geometryCount++,s.push(o)),this.setGeometryAt(I,e),this._nextIndexStart=o.indexStart+o.reservedIndexCount,this._nextVertexStart=o.vertexStart+o.reservedVertexCount,I}setGeometryAt(e,i){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(i);const A=this.geometry,o=A.getIndex()!==null,s=A.getIndex(),a=i.getIndex(),g=this._geometryInfo[e];if(o&&a.count>g.reservedIndexCount||i.attributes.position.count>g.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const I=g.vertexStart,c=g.reservedVertexCount;g.vertexCount=i.getAttribute("position").count;for(const _ in A.attributes){const p=i.getAttribute(_),B=A.getAttribute(_);iX(p,B,I);const d=p.itemSize;for(let Q=p.count,y=c;Q<y;Q++){const h=I+Q;for(let E=0;E<d;E++)B.setComponent(h,E,0)}B.needsUpdate=!0,B.addUpdateRange(I*d,c*d)}if(o){const _=g.indexStart,p=g.reservedIndexCount;g.indexCount=i.getIndex().count;for(let B=0;B<a.count;B++)s.setX(_+B,I+a.getX(B));for(let B=a.count,d=p;B<d;B++)s.setX(_+B,I);s.needsUpdate=!0,s.addUpdateRange(_,g.reservedIndexCount)}return g.start=o?g.indexStart:g.vertexStart,g.count=o?g.indexCount:g.vertexCount,g.boundingBox=null,i.boundingBox!==null&&(g.boundingBox=i.boundingBox.clone()),g.boundingSphere=null,i.boundingSphere!==null&&(g.boundingSphere=i.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const i=this._geometryInfo;if(e>=i.length||i[e].active===!1)return this;const A=this._instanceInfo;for(let o=0,s=A.length;o<s;o++)A[o].geometryIndex===e&&this.deleteInstance(o);return i[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const i=this._instanceInfo;return e>=i.length||i[e].active===!1?this:(i[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,i=0;const A=this._geometryInfo,o=A.map((a,g)=>g).sort((a,g)=>A[a].vertexStart-A[g].vertexStart),s=this.geometry;for(let a=0,g=A.length;a<g;a++){const I=o[a],c=A[I];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==i){const{indexStart:_,vertexStart:p,reservedIndexCount:B}=c,d=s.index,Q=d.array,y=e-p;for(let h=_;h<_+B;h++)Q[h]=Q[h]+y;d.array.copyWithin(i,_,_+B),d.addUpdateRange(i,B),c.indexStart=i}i+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:_,reservedVertexCount:p}=c,B=s.attributes;for(const d in B){const Q=B[d],{array:y,itemSize:h}=Q;y.copyWithin(e*h,_*h,(_+p)*h),Q.addUpdateRange(e*h,p*h)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,i){if(e>=this._geometryCount)return null;const A=this.geometry,o=this._geometryInfo[e];if(o.boundingBox===null){const s=new St,a=A.index,g=A.attributes.position;for(let I=o.start,c=o.start+o.count;I<c;I++){let _=I;a&&(_=a.getX(_)),s.expandByPoint(_I.fromBufferAttribute(g,_))}o.boundingBox=s}return i.copy(o.boundingBox),i}getBoundingSphereAt(e,i){if(e>=this._geometryCount)return null;const A=this.geometry,o=this._geometryInfo[e];if(o.boundingSphere===null){const s=new wi;this.getBoundingBoxAt(e,uC),uC.getCenter(s.center);const a=A.index,g=A.attributes.position;let I=0;for(let c=o.start,_=o.start+o.count;c<_;c++){let p=c;a&&(p=a.getX(p)),_I.fromBufferAttribute(g,p),I=Math.max(I,s.center.distanceToSquared(_I))}s.radius=Math.sqrt(I),o.boundingSphere=s}return i.copy(o.boundingSphere),i}setMatrixAt(e,i){const A=this._instanceInfo,o=this._matricesTexture,s=this._matricesTexture.image.data;return e>=A.length||A[e].active===!1?this:(i.toArray(s,e*16),o.needsUpdate=!0,this)}getMatrixAt(e,i){const A=this._instanceInfo,o=this._matricesTexture.image.data;return e>=A.length||A[e].active===!1?null:i.fromArray(o,e*16)}setColorAt(e,i){this._colorsTexture===null&&this._initColorsTexture();const A=this._colorsTexture,o=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?this:(i.toArray(o,e*4),A.needsUpdate=!0,this)}getColorAt(e,i){const A=this._colorsTexture.image.data,o=this._instanceInfo;return e>=o.length||o[e].active===!1?null:i.fromArray(A,e*4)}setVisibleAt(e,i){const A=this._instanceInfo;return e>=A.length||A[e].active===!1||A[e].visible===i?this:(A[e].visible=i,this._visibilityChanged=!0,this)}getVisibleAt(e){const i=this._instanceInfo;return e>=i.length||i[e].active===!1?!1:i[e].visible}setGeometryIdAt(e,i){const A=this._instanceInfo,o=this._geometryInfo;return e>=A.length||A[e].active===!1||i>=o.length||o[i].active===!1?null:(A[e].geometryIndex=i,this)}getGeometryIdAt(e){const i=this._instanceInfo;return e>=i.length||i[e].active===!1?-1:i[e].geometryIndex}getGeometryRangeAt(e,i={}){if(e<0||e>=this._geometryCount)return null;const A=this._geometryInfo[e];return i.vertexStart=A.vertexStart,i.vertexCount=A.vertexCount,i.reservedVertexCount=A.reservedVertexCount,i.indexStart=A.indexStart,i.indexCount=A.indexCount,i.reservedIndexCount=A.reservedIndexCount,i.start=A.start,i.count=A.count,i}setInstanceCount(e){const i=this._availableInstanceIds,A=this._instanceInfo;for(i.sort(xp);i[i.length-1]===A.length;)A.pop(),i.pop();if(e<A.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const o=new Int32Array(e),s=new Int32Array(e);Ks(this._multiDrawCounts,o),Ks(this._multiDrawStarts,s),this._multiDrawCounts=o,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,g=this._matricesTexture,I=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ks(a.image.data,this._indirectTexture.image.data),g.dispose(),this._initMatricesTexture(),Ks(g.image.data,this._matricesTexture.image.data),I&&(I.dispose(),this._initColorsTexture(),Ks(I.image.data,this._colorsTexture.image.data))}setGeometrySize(e,i){const A=[...this._geometryInfo].filter(g=>g.active);if(Math.max(...A.map(g=>g.vertexStart+g.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${i}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...A.map(I=>I.indexStart+I.reservedIndexCount))>i)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${i}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=i,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ut,this._initializeGeometry(s));const a=this.geometry;s.index&&Ks(s.index.array,a.index.array);for(const g in s.attributes)Ks(s.attributes[g].array,a.attributes[g].array)}raycast(e,i){const A=this._instanceInfo,o=this._geometryInfo,s=this.matrixWorld,a=this.geometry;Zi.material=this.material,Zi.geometry.index=a.index,Zi.geometry.attributes=a.attributes,Zi.geometry.boundingBox===null&&(Zi.geometry.boundingBox=new St),Zi.geometry.boundingSphere===null&&(Zi.geometry.boundingSphere=new wi);for(let g=0,I=A.length;g<I;g++){if(!A[g].visible||!A[g].active)continue;const c=A[g].geometryIndex,_=o[c];Zi.geometry.setDrawRange(_.start,_.count),this.getMatrixAt(g,Zi.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Zi.geometry.boundingBox),this.getBoundingSphereAt(c,Zi.geometry.boundingSphere),Zi.raycast(e,QC);for(let p=0,B=QC.length;p<B;p++){const d=QC[p];d.object=this,d.batchId=g,i.push(d)}QC.length=0}Zi.material=null,Zi.geometry.index=null,Zi.geometry.attributes={},Zi.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox!==null?i.boundingBox.clone():null,boundingSphere:i.boundingSphere!==null?i.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(i=>({...i})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,i,A,o,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=o.getIndex(),g=a===null?1:a.array.BYTES_PER_ELEMENT,I=this._instanceInfo,c=this._multiDrawStarts,_=this._multiDrawCounts,p=this._geometryInfo,B=this.perObjectFrustumCulled,d=this._indirectTexture,Q=d.image.data;B&&(Qn.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse).multiply(this.matrixWorld),Lp.setFromProjectionMatrix(Qn,e.coordinateSystem));let y=0;if(this.sortObjects){Qn.copy(this.matrixWorld).invert(),_I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qn),yP.set(0,0,-1).transformDirection(A.matrixWorld).transformDirection(Qn);for(let u=0,f=I.length;u<f;u++)if(I[u].visible&&I[u].active){const m=I[u].geometryIndex;this.getMatrixAt(u,Qn),this.getBoundingSphereAt(m,Ps).applyMatrix4(Qn);let M=!1;if(B&&(M=!Lp.intersectsSphere(Ps)),!M){const v=p[m],b=tX.subVectors(Ps.center,_I).dot(yP);Fp.push(v.start,v.count,b,u)}}const h=Fp.list,E=this.customSort;E===null?h.sort(s.transparent?$8:Z8):E.call(this,h,A);for(let u=0,f=h.length;u<f;u++){const m=h[u];c[y]=m.start*g,_[y]=m.count,Q[y]=m.index,y++}Fp.reset()}else for(let h=0,E=I.length;h<E;h++)if(I[h].visible&&I[h].active){const u=I[h].geometryIndex;let f=!1;if(B&&(this.getMatrixAt(h,Qn),this.getBoundingSphereAt(u,Ps).applyMatrix4(Qn),f=!Lp.intersectsSphere(Ps)),!f){const m=p[u];c[y]=m.start*g,_[y]=m.count,Q[y]=h,y++}}d.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,i,A,o,s,a){this.onBeforeRender(e,null,o,s,a)}}class Dc extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new T,Vl=new T,mP=new xe,pI=new Hg,fC=new wi,Tp=new T,DP=new T;class xg extends ft{constructor(e=new Ut,i=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,A=[0];for(let o=1,s=i.count;o<s;o++)jl.fromBufferAttribute(i,o-1),Vl.fromBufferAttribute(i,o),A[o]=A[o-1],A[o]+=jl.distanceTo(Vl);e.setAttribute("lineDistance",new xt(A,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const A=this.geometry,o=this.matrixWorld,s=e.params.Line.threshold,a=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),fC.copy(A.boundingSphere),fC.applyMatrix4(o),fC.radius+=s,e.ray.intersectsSphere(fC)===!1)return;mP.copy(o).invert(),pI.copy(e.ray).applyMatrix4(mP);const g=s/((this.scale.x+this.scale.y+this.scale.z)/3),I=g*g,c=this.isLineSegments?2:1,_=A.index,B=A.attributes.position;if(_!==null){const d=Math.max(0,a.start),Q=Math.min(_.count,a.start+a.count);for(let y=d,h=Q-1;y<h;y+=c){const E=_.getX(y),u=_.getX(y+1),f=yC(this,e,pI,I,E,u);f&&i.push(f)}if(this.isLineLoop){const y=_.getX(Q-1),h=_.getX(d),E=yC(this,e,pI,I,y,h);E&&i.push(E)}}else{const d=Math.max(0,a.start),Q=Math.min(B.count,a.start+a.count);for(let y=d,h=Q-1;y<h;y+=c){const E=yC(this,e,pI,I,y,y+1);E&&i.push(E)}if(this.isLineLoop){const y=yC(this,e,pI,I,Q-1,d);y&&i.push(y)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,A=Object.keys(i);if(A.length>0){const o=i[A[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const g=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=s}}}}}function yC(n,e,i,A,o,s){const a=n.geometry.attributes.position;if(jl.fromBufferAttribute(a,o),Vl.fromBufferAttribute(a,s),i.distanceSqToSegment(jl,Vl,Tp,DP)>A)return;Tp.applyMatrix4(n.matrixWorld);const I=e.ray.origin.distanceTo(Tp);if(!(I<e.near||I>e.far))return{distance:I,point:DP.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const SP=new T,wP=new T;class EO extends xg{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,A=[];for(let o=0,s=i.count;o<s;o+=2)SP.fromBufferAttribute(i,o),wP.fromBufferAttribute(i,o+1),A[o]=o===0?0:A[o-1],A[o+1]=A[o]+SP.distanceTo(wP);e.setAttribute("lineDistance",new xt(A,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rX extends xg{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class dO extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vP=new xe,OE=new Hg,mC=new wi,DC=new T;class oX extends ft{constructor(e=new Ut,i=new dO){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const A=this.geometry,o=this.matrixWorld,s=e.params.Points.threshold,a=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),mC.copy(A.boundingSphere),mC.applyMatrix4(o),mC.radius+=s,e.ray.intersectsSphere(mC)===!1)return;vP.copy(o).invert(),OE.copy(e.ray).applyMatrix4(vP);const g=s/((this.scale.x+this.scale.y+this.scale.z)/3),I=g*g,c=A.index,p=A.attributes.position;if(c!==null){const B=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let Q=B,y=d;Q<y;Q++){const h=c.getX(Q);DC.fromBufferAttribute(p,h),bP(DC,h,I,o,e,i,this)}}else{const B=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let Q=B,y=d;Q<y;Q++)DC.fromBufferAttribute(p,Q),bP(DC,Q,I,o,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,A=Object.keys(i);if(A.length>0){const o=i[A[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const g=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=s}}}}}function bP(n,e,i,A,o,s,a){const g=OE.distanceSqToPoint(n);if(g<i){const I=new T;OE.closestPointToPoint(n,I),I.applyMatrix4(A);const c=o.ray.origin.distanceTo(I);if(c<o.near||c>o.far)return;s.push({distance:c,distanceToRay:Math.sqrt(g),point:I,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sX{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const A=this.getUtoTmapping(e);return this.getPoint(A,i)}getPoints(e=5){const i=[];for(let A=0;A<=e;A++)i.push(this.getPoint(A/e));return i}getSpacedPoints(e=5){const i=[];for(let A=0;A<=e;A++)i.push(this.getPointAt(A/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let A,o=this.getPoint(0),s=0;i.push(0);for(let a=1;a<=e;a++)A=this.getPoint(a/e),s+=A.distanceTo(o),i.push(s),o=A;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const A=this.getLengths();let o=0;const s=A.length;let a;i?a=i:a=e*A[s-1];let g=0,I=s-1,c;for(;g<=I;)if(o=Math.floor(g+(I-g)/2),c=A[o]-a,c<0)g=o+1;else if(c>0)I=o-1;else{I=o;break}if(o=I,A[o]===a)return o/(s-1);const _=A[o],B=A[o+1]-_,d=(a-_)/B;return(o+d)/(s-1)}getTangent(e,i){let o=e-1e-4,s=e+1e-4;o<0&&(o=0),s>1&&(s=1);const a=this.getPoint(o),g=this.getPoint(s),I=i||(a.isVector2?new iA:new T);return I.copy(g).sub(a).normalize(),I}getTangentAt(e,i){const A=this.getUtoTmapping(e);return this.getTangent(A,i)}computeFrenetFrames(e,i){const A=new T,o=[],s=[],a=[],g=new T,I=new xe;for(let d=0;d<=e;d++){const Q=d/e;o[d]=this.getTangentAt(Q,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const _=Math.abs(o[0].x),p=Math.abs(o[0].y),B=Math.abs(o[0].z);_<=c&&(c=_,A.set(1,0,0)),p<=c&&(c=p,A.set(0,1,0)),B<=c&&A.set(0,0,1),g.crossVectors(o[0],A).normalize(),s[0].crossVectors(o[0],g),a[0].crossVectors(o[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),g.crossVectors(o[d-1],o[d]),g.length()>Number.EPSILON){g.normalize();const Q=Math.acos(li(o[d-1].dot(o[d]),-1,1));s[d].applyMatrix4(I.makeRotationAxis(g,Q))}a[d].crossVectors(o[d],s[d])}if(i===!0){let d=Math.acos(li(s[0].dot(s[e]),-1,1));d/=e,o[0].dot(g.crossVectors(s[0],s[e]))>0&&(d=-d);for(let Q=1;Q<=e;Q++)s[Q].applyMatrix4(I.makeRotationAxis(o[Q],d*Q)),a[Q].crossVectors(o[Q],s[Q])}return{tangents:o,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends Ut{constructor(e=1,i=32,A=16,o=0,s=Math.PI*2,a=0,g=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:A,phiStart:o,phiLength:s,thetaStart:a,thetaLength:g},i=Math.max(3,Math.floor(i)),A=Math.max(2,Math.floor(A));const I=Math.min(a+g,Math.PI);let c=0;const _=[],p=new T,B=new T,d=[],Q=[],y=[],h=[];for(let E=0;E<=A;E++){const u=[],f=E/A;let m=0;E===0&&a===0?m=.5/i:E===A&&I===Math.PI&&(m=-.5/i);for(let M=0;M<=i;M++){const v=M/i;p.x=-e*Math.cos(o+v*s)*Math.sin(a+f*g),p.y=e*Math.cos(a+f*g),p.z=e*Math.sin(o+v*s)*Math.sin(a+f*g),Q.push(p.x,p.y,p.z),B.copy(p).normalize(),y.push(B.x,B.y,B.z),h.push(v+m,1-f),u.push(c++)}_.push(u)}for(let E=0;E<A;E++)for(let u=0;u<i;u++){const f=_[E][u+1],m=_[E][u],M=_[E+1][u],v=_[E+1][u+1];(E!==0||a>0)&&d.push(f,m,v),(E!==A-1||I<Math.PI)&&d.push(m,M,v)}this.setIndex(d),this.setAttribute("position",new xt(Q,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class aX extends Ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],A=new Set,o=new T,s=new T;if(e.index!==null){const a=e.attributes.position,g=e.index;let I=e.groups;I.length===0&&(I=[{start:0,count:g.count,materialIndex:0}]);for(let c=0,_=I.length;c<_;++c){const p=I[c],B=p.start,d=p.count;for(let Q=B,y=B+d;Q<y;Q+=3)for(let h=0;h<3;h++){const E=g.getX(Q+h),u=g.getX(Q+(h+1)%3);o.fromBufferAttribute(a,E),s.fromBufferAttribute(a,u),MP(o,s,A)===!0&&(i.push(o.x,o.y,o.z),i.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let g=0,I=a.count/3;g<I;g++)for(let c=0;c<3;c++){const _=3*g+c,p=3*g+(c+1)%3;o.fromBufferAttribute(a,_),s.fromBufferAttribute(a,p),MP(o,s,A)===!0&&(i.push(o.x,o.y,o.z),i.push(s.x,s.y,s.z))}}this.setAttribute("position",new xt(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function MP(n,e,i){const A=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return i.has(A)===!0||i.has(o)===!0?!1:(i.add(A),i.add(o),!0)}class Bh extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new iA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oo extends Bh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new iA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return li(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Up extends Nn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new iA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gX extends Nn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new iA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function SC(n,e,i){return!n||!i&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function IX(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cX(n){function e(o,s){return n[o]-n[s]}const i=n.length,A=new Array(i);for(let o=0;o!==i;++o)A[o]=o;return A.sort(e),A}function RP(n,e,i){const A=n.length,o=new n.constructor(A);for(let s=0,a=0;a!==A;++s){const g=i[s]*e;for(let I=0;I!==e;++I)o[a++]=n[g+I]}return o}function hO(n,e,i,A){let o=1,s=n[0];for(;s!==void 0&&s[A]===void 0;)s=n[o++];if(s===void 0)return;let a=s[A];if(a!==void 0)if(Array.isArray(a))do a=s[A],a!==void 0&&(e.push(s.time),i.push.apply(i,a)),s=n[o++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[A],a!==void 0&&(e.push(s.time),a.toArray(i,i.length)),s=n[o++];while(s!==void 0);else do a=s[A],a!==void 0&&(e.push(s.time),i.push(a)),s=n[o++];while(s!==void 0)}class Sc{constructor(e,i,A,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new i.constructor(A),this.sampleValues=i,this.valueSize=A,this.settings=null,this.DefaultSettings_={}}evaluate(e){const i=this.parameterPositions;let A=this._cachedIndex,o=i[A],s=i[A-1];e:{A:{let a;t:{i:if(!(e<o)){for(let g=A+2;;){if(o===void 0){if(e<s)break i;return A=i.length,this._cachedIndex=A,this.copySampleValue_(A-1)}if(A===g)break;if(s=o,o=i[++A],e<o)break A}a=i.length;break t}if(!(e>=s)){const g=i[1];e<g&&(A=2,s=g);for(let I=A-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(A===I)break;if(o=s,s=i[--A-1],e>=s)break A}a=A,A=0;break t}break e}for(;A<a;){const g=A+a>>>1;e<i[g]?a=g:A=g+1}if(o=i[A],s=i[A-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return A=i.length,this._cachedIndex=A,this.copySampleValue_(A-1)}this._cachedIndex=A,this.intervalChanged_(A,s,o)}return this.interpolate_(A,s,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const i=this.resultBuffer,A=this.sampleValues,o=this.valueSize,s=e*o;for(let a=0;a!==o;++a)i[a]=A[s+a];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class CX extends Sc{constructor(e,i,A,o){super(e,i,A,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:E1,endingEnd:E1}}intervalChanged_(e,i,A){const o=this.parameterPositions;let s=e-2,a=e+1,g=o[s],I=o[a];if(g===void 0)switch(this.getSettings_().endingStart){case d1:s=e,g=2*i-A;break;case h1:s=o.length-2,g=i+o[s]-o[s+1];break;default:s=e,g=A}if(I===void 0)switch(this.getSettings_().endingEnd){case d1:a=e,I=2*A-i;break;case h1:a=1,I=A+o[1]-o[0];break;default:a=e-1,I=i}const c=(A-i)*.5,_=this.valueSize;this._weightPrev=c/(i-g),this._weightNext=c/(I-A),this._offsetPrev=s*_,this._offsetNext=a*_}interpolate_(e,i,A,o){const s=this.resultBuffer,a=this.sampleValues,g=this.valueSize,I=e*g,c=I-g,_=this._offsetPrev,p=this._offsetNext,B=this._weightPrev,d=this._weightNext,Q=(A-i)/(o-i),y=Q*Q,h=y*Q,E=-B*h+2*B*y-B*Q,u=(1+B)*h+(-1.5-2*B)*y+(-.5+B)*Q+1,f=(-1-d)*h+(1.5+d)*y+.5*Q,m=d*h-d*y;for(let M=0;M!==g;++M)s[M]=E*a[_+M]+u*a[c+M]+f*a[I+M]+m*a[p+M];return s}}class lX extends Sc{constructor(e,i,A,o){super(e,i,A,o)}interpolate_(e,i,A,o){const s=this.resultBuffer,a=this.sampleValues,g=this.valueSize,I=e*g,c=I-g,_=(A-i)/(o-i),p=1-_;for(let B=0;B!==g;++B)s[B]=a[c+B]*p+a[I+B]*_;return s}}class _X extends Sc{constructor(e,i,A,o){super(e,i,A,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class so{constructor(e,i,A,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=SC(i,this.TimeBufferType),this.values=SC(A,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const i=e.constructor;let A;if(i.toJSON!==this.toJSON)A=i.toJSON(e);else{A={name:e.name,times:SC(e.times,Array),values:SC(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(A.interpolation=o)}return A.type=e.ValueTypeName,A}InterpolantFactoryMethodDiscrete(e){return new _X(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lX(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new CX(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let i;switch(e){case lc:i=this.InterpolantFactoryMethodDiscrete;break;case _c:i=this.InterpolantFactoryMethodLinear;break;case ip:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){const A="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(A);return console.warn("THREE.KeyframeTrack:",A),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lc;case this.InterpolantFactoryMethodLinear:return _c;case this.InterpolantFactoryMethodSmooth:return ip}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const i=this.times;for(let A=0,o=i.length;A!==o;++A)i[A]+=e}return this}scale(e){if(e!==1){const i=this.times;for(let A=0,o=i.length;A!==o;++A)i[A]*=e}return this}trim(e,i){const A=this.times,o=A.length;let s=0,a=o-1;for(;s!==o&&A[s]<e;)++s;for(;a!==-1&&A[a]>i;)--a;if(++a,s!==0||a!==o){s>=a&&(a=Math.max(a,1),s=a-1);const g=this.getValueSize();this.times=A.slice(s,a),this.values=this.values.slice(s*g,a*g)}return this}validate(){let e=!0;const i=this.getValueSize();i-Math.floor(i)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const A=this.times,o=this.values,s=A.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let g=0;g!==s;g++){const I=A[g];if(typeof I=="number"&&isNaN(I)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,g,I),e=!1;break}if(a!==null&&a>I){console.error("THREE.KeyframeTrack: Out of order keys.",this,g,I,a),e=!1;break}a=I}if(o!==void 0&&IX(o))for(let g=0,I=o.length;g!==I;++g){const c=o[g];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,g,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),i=this.values.slice(),A=this.getValueSize(),o=this.getInterpolation()===ip,s=e.length-1;let a=1;for(let g=1;g<s;++g){let I=!1;const c=e[g],_=e[g+1];if(c!==_&&(g!==1||c!==e[0]))if(o)I=!0;else{const p=g*A,B=p-A,d=p+A;for(let Q=0;Q!==A;++Q){const y=i[p+Q];if(y!==i[B+Q]||y!==i[d+Q]){I=!0;break}}}if(I){if(g!==a){e[a]=e[g];const p=g*A,B=a*A;for(let d=0;d!==A;++d)i[B+d]=i[p+d]}++a}}if(s>0){e[a]=e[s];for(let g=s*A,I=a*A,c=0;c!==A;++c)i[I+c]=i[g+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=i.slice(0,a*A)):(this.times=e,this.values=i),this}clone(){const e=this.times.slice(),i=this.values.slice(),A=this.constructor,o=new A(this.name,e,i);return o.createInterpolant=this.createInterpolant,o}}so.prototype.TimeBufferType=Float32Array;so.prototype.ValueBufferType=Float32Array;so.prototype.DefaultInterpolation=_c;class Jg extends so{constructor(e,i,A){super(e,i,A)}}Jg.prototype.ValueTypeName="bool";Jg.prototype.ValueBufferType=Array;Jg.prototype.DefaultInterpolation=lc;Jg.prototype.InterpolantFactoryMethodLinear=void 0;Jg.prototype.InterpolantFactoryMethodSmooth=void 0;class uO extends so{}uO.prototype.ValueTypeName="color";class pa extends so{}pa.prototype.ValueTypeName="number";class pX extends Sc{constructor(e,i,A,o){super(e,i,A,o)}interpolate_(e,i,A,o){const s=this.resultBuffer,a=this.sampleValues,g=this.valueSize,I=(A-i)/(o-i);let c=e*g;for(let _=c+g;c!==_;c+=4)Ir.slerpFlat(s,0,a,c-g,a,c,I);return s}}class Ba extends so{InterpolantFactoryMethodLinear(e){return new pX(this.times,this.values,this.getValueSize(),e)}}Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;class Og extends so{constructor(e,i,A){super(e,i,A)}}Og.prototype.ValueTypeName="string";Og.prototype.ValueBufferType=Array;Og.prototype.DefaultInterpolation=lc;Og.prototype.InterpolantFactoryMethodLinear=void 0;Og.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends so{}Ea.prototype.ValueTypeName="vector";class QO{constructor(e="",i=-1,A=[],o=lj){this.name=e,this.tracks=A,this.duration=i,this.blendMode=o,this.uuid=Lr(),this.duration<0&&this.resetDuration()}static parse(e){const i=[],A=e.tracks,o=1/(e.fps||1);for(let a=0,g=A.length;a!==g;++a)i.push(EX(A[a]).scale(o));const s=new this(e.name,e.duration,i,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const i=[],A=e.tracks,o={name:e.name,duration:e.duration,tracks:i,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=A.length;s!==a;++s)i.push(so.toJSON(A[s]));return o}static CreateFromMorphTargetSequence(e,i,A,o){const s=i.length,a=[];for(let g=0;g<s;g++){let I=[],c=[];I.push((g+s-1)%s,g,(g+1)%s),c.push(0,1,0);const _=cX(I);I=RP(I,1,_),c=RP(c,1,_),!o&&I[0]===0&&(I.push(s),c.push(c[0])),a.push(new pa(".morphTargetInfluences["+i[g].name+"]",I,c).scale(1/A))}return new this(e,-1,a)}static findByName(e,i){let A=e;if(!Array.isArray(e)){const o=e;A=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<A.length;o++)if(A[o].name===i)return A[o];return null}static CreateClipsFromMorphTargetSequences(e,i,A){const o={},s=/^([\w-]*?)([\d]+)$/;for(let g=0,I=e.length;g<I;g++){const c=e[g],_=c.name.match(s);if(_&&_.length>1){const p=_[1];let B=o[p];B||(o[p]=B=[]),B.push(c)}}const a=[];for(const g in o)a.push(this.CreateFromMorphTargetSequence(g,o[g],i,A));return a}static parseAnimation(e,i){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const A=function(p,B,d,Q,y){if(d.length!==0){const h=[],E=[];hO(d,h,E,Q),h.length!==0&&y.push(new p(B,h,E))}},o=[],s=e.name||"default",a=e.fps||30,g=e.blendMode;let I=e.length||-1;const c=e.hierarchy||[];for(let p=0;p<c.length;p++){const B=c[p].keys;if(!(!B||B.length===0))if(B[0].morphTargets){const d={};let Q;for(Q=0;Q<B.length;Q++)if(B[Q].morphTargets)for(let y=0;y<B[Q].morphTargets.length;y++)d[B[Q].morphTargets[y]]=-1;for(const y in d){const h=[],E=[];for(let u=0;u!==B[Q].morphTargets.length;++u){const f=B[Q];h.push(f.time),E.push(f.morphTarget===y?1:0)}o.push(new pa(".morphTargetInfluence["+y+"]",h,E))}I=d.length*a}else{const d=".bones["+i[p].name+"]";A(Ea,d+".position",B,"pos",o),A(Ba,d+".quaternion",B,"rot",o),A(Ea,d+".scale",B,"scl",o)}}return o.length===0?null:new this(s,I,o,g)}resetDuration(){const e=this.tracks;let i=0;for(let A=0,o=e.length;A!==o;++A){const s=this.tracks[A];i=Math.max(i,s.times[s.times.length-1])}return this.duration=i,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let i=0;i<this.tracks.length;i++)e=e&&this.tracks[i].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function BX(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pa;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return uO;case"quaternion":return Ba;case"bool":case"boolean":return Jg;case"string":return Og}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function EX(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=BX(n.type);if(n.times===void 0){const i=[],A=[];hO(n.keys,i,A,"value"),n.times=i,n.values=A}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ls={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dX{constructor(e,i,A){const o=this;let s=!1,a=0,g=0,I;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=A,this.itemStart=function(_){g++,s===!1&&o.onStart!==void 0&&o.onStart(_,a,g),s=!0},this.itemEnd=function(_){a++,o.onProgress!==void 0&&o.onProgress(_,a,g),a===g&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return I?I(_):_},this.setURLModifier=function(_){return I=_,this},this.addHandler=function(_,p){return c.push(_,p),this},this.removeHandler=function(_){const p=c.indexOf(_);return p!==-1&&c.splice(p,2),this},this.getHandler=function(_){for(let p=0,B=c.length;p<B;p+=2){const d=c[p],Q=c[p+1];if(d.global&&(d.lastIndex=0),d.test(_))return Q}return null}}}const hX=new dX;class ua{constructor(e){this.manager=e!==void 0?e:hX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const A=this;return new Promise(function(o,s){A.load(e,o,i,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const ho={};class uX extends Error{constructor(e,i){super(e),this.response=i}}class Eh extends ua{constructor(e){super(e)}load(e,i,A,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ls.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(s),this.manager.itemEnd(e)},0),s;if(ho[e]!==void 0){ho[e].push({onLoad:i,onProgress:A,onError:o});return}ho[e]=[],ho[e].push({onLoad:i,onProgress:A,onError:o});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),g=this.mimeType,I=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const _=ho[e],p=c.body.getReader(),B=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=B?parseInt(B):0,Q=d!==0;let y=0;const h=new ReadableStream({start(E){u();function u(){p.read().then(({done:f,value:m})=>{if(f)E.close();else{y+=m.byteLength;const M=new ProgressEvent("progress",{lengthComputable:Q,loaded:y,total:d});for(let v=0,b=_.length;v<b;v++){const x=_[v];x.onProgress&&x.onProgress(M)}E.enqueue(m),u()}},f=>{E.error(f)})}}});return new Response(h)}else throw new uX(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(I){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(_=>new DOMParser().parseFromString(_,g));case"json":return c.json();default:if(g===void 0)return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(g),B=p&&p[1]?p[1].toLowerCase():void 0,d=new TextDecoder(B);return c.arrayBuffer().then(Q=>d.decode(Q))}}}).then(c=>{ls.add(e,c);const _=ho[e];delete ho[e];for(let p=0,B=_.length;p<B;p++){const d=_[p];d.onLoad&&d.onLoad(c)}}).catch(c=>{const _=ho[e];if(_===void 0)throw this.manager.itemError(e),c;delete ho[e];for(let p=0,B=_.length;p<B;p++){const d=_[p];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class QX extends ua{constructor(e){super(e)}load(e,i,A,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ls.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){i&&i(a),s.manager.itemEnd(e)},0),a;const g=pc("img");function I(){_(),ls.add(e,this),i&&i(this),s.manager.itemEnd(e)}function c(p){_(),o&&o(p),s.manager.itemError(e),s.manager.itemEnd(e)}function _(){g.removeEventListener("load",I,!1),g.removeEventListener("error",c,!1)}return g.addEventListener("load",I,!1),g.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(g.crossOrigin=this.crossOrigin),s.manager.itemStart(e),g.src=e,g}}class fO extends ua{constructor(e){super(e)}load(e,i,A,o){const s=new si,a=new QX(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(g){s.image=g,s.needsUpdate=!0,i!==void 0&&i(s)},A,o),s}}class wc extends ft{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class a7 extends wc{constructor(e,i,A){super(e,A),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Gp=new xe,NP=new T,xP=new T;class dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new iA(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new y_,this._frameExtents=new iA(1,1),this._viewportCount=1,this._viewports=[new fA(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,A=this.matrix;NP.setFromMatrixPosition(e.matrixWorld),i.position.copy(NP),xP.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xP),i.updateMatrixWorld(),Gp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gp),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(Gp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fX extends dh{constructor(){super(new Di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const i=this.camera,A=Mg*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,s=e.distance||i.far;(A!==i.fov||o!==i.aspect||s!==i.far)&&(i.fov=A,i.aspect=o,i.far=s,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yO extends wc{constructor(e,i,A=0,o=Math.PI/3,s=0,a=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=A,this.angle=o,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new fX}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const LP=new xe,BI=new T,kp=new T;class yX extends dh{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new iA(4,2),this._viewportCount=6,this._viewports=[new fA(2,1,1,1),new fA(0,1,1,1),new fA(3,1,1,1),new fA(1,1,1,1),new fA(3,0,1,1),new fA(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,i=0){const A=this.camera,o=this.matrix,s=e.distance||A.far;s!==A.far&&(A.far=s,A.updateProjectionMatrix()),BI.setFromMatrixPosition(e.matrixWorld),A.position.copy(BI),kp.copy(A.position),kp.add(this._cubeDirections[i]),A.up.copy(this._cubeUps[i]),A.lookAt(kp),A.updateMatrixWorld(),o.makeTranslation(-BI.x,-BI.y,-BI.z),LP.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),this._frustum.setFromProjectionMatrix(LP)}}class YE extends wc{constructor(e,i,A=0,o=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=A,this.decay=o,this.shadow=new yX}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mX extends dh{constructor(){super(new D_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mO extends wc{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new mX}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DX extends wc{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class dg{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let i="";for(let A=0,o=e.length;A<o;A++)i+=String.fromCharCode(e[A]);try{return decodeURIComponent(escape(i))}catch{return i}}static extractUrlBase(e){const i=e.lastIndexOf("/");return i===-1?"./":e.slice(0,i+1)}static resolveURL(e,i){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(i)&&/^\//.test(e)&&(i=i.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:i+e)}}class SX extends Ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wX extends ua{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,i,A,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ls.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{i&&i(c),s.manager.itemEnd(e)}).catch(c=>{o&&o(c)});return}return setTimeout(function(){i&&i(a),s.manager.itemEnd(e)},0),a}const g={};g.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",g.headers=this.requestHeader;const I=fetch(e,g).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(e,c),i&&i(c),s.manager.itemEnd(e),c}).catch(function(c){o&&o(c),ls.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ls.add(e,I),s.manager.itemStart(e)}}class g7{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=FP(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=FP();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function FP(){return performance.now()}const hh="\\[\\]\\.:\\/",vX=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",bX="[^"+hh.replace("\\.","")+"]",MX=/((?:WC+[\/:])*)/.source.replace("WC",uh),RX=/(WCOD+)?/.source.replace("WCOD",bX),NX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),xX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),LX=new RegExp("^"+MX+RX+NX+xX+"$"),FX=["material","materials","bones","map"];class TX{constructor(e,i,A){const o=A||it.parseTrackName(i);this._targetGroup=e,this._bindings=e.subscribe_(i,o)}getValue(e,i){this.bind();const A=this._targetGroup.nCachedObjects_,o=this._bindings[A];o!==void 0&&o.getValue(e,i)}setValue(e,i){const A=this._bindings;for(let o=this._targetGroup.nCachedObjects_,s=A.length;o!==s;++o)A[o].setValue(e,i)}bind(){const e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,A=e.length;i!==A;++i)e[i].bind()}unbind(){const e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,A=e.length;i!==A;++i)e[i].unbind()}}class it{constructor(e,i,A){this.path=i,this.parsedPath=A||it.parseTrackName(i),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,A){return e&&e.isAnimationObjectGroup?new it.Composite(e,i,A):new it(e,i,A)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vX,"")}static parseTrackName(e){const i=LX.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const A={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=A.nodeName&&A.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const s=A.nodeName.substring(o+1);FX.indexOf(s)!==-1&&(A.nodeName=A.nodeName.substring(0,o),A.objectName=s)}if(A.propertyName===null||A.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return A}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){const A=e.skeleton.getBoneByName(i);if(A!==void 0)return A}if(e.children){const A=function(s){for(let a=0;a<s.length;a++){const g=s[a];if(g.name===i||g.uuid===i)return g;const I=A(g.children);if(I)return I}return null},o=A(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){const A=this.resolvedProperty;for(let o=0,s=A.length;o!==s;++o)e[i++]=A[o]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){const A=this.resolvedProperty;for(let o=0,s=A.length;o!==s;++o)A[o]=e[i++]}_setValue_array_setNeedsUpdate(e,i){const A=this.resolvedProperty;for(let o=0,s=A.length;o!==s;++o)A[o]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){const A=this.resolvedProperty;for(let o=0,s=A.length;o!==s;++o)A[o]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node;const i=this.parsedPath,A=i.objectName,o=i.propertyName;let s=i.propertyIndex;if(e||(e=it.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(A){let c=i.objectIndex;switch(A){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===c){c=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[A]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[A]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[o];if(a===void 0){const c=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+o+" but it wasn't found.",e);return}let g=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?g=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(g=this.Versioning.MatrixWorldNeedsUpdate);let I=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}I=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(I=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(I=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[I],this.setValue=this.SetterByBindingTypeAndVersioning[I][g]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=TX;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lt{constructor(e){this.value=e}clone(){return new lt(this.value.clone===void 0?this.value:this.value.clone())}}class qE extends _O{constructor(e,i,A=1){super(e,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=A}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const i=super.clone(e);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(e){const i=super.toJSON(e);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const TP=new xe;class I7{constructor(e,i,A=0,o=1/0){this.ray=new Hg(e,i),this.near=A,this.far=o,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return TP.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(TP),this}intersectObject(e,i=!0,A=[]){return jE(e,this,A,i),A.sort(UP),A}intersectObjects(e,i=!0,A=[]){for(let o=0,s=e.length;o<s;o++)jE(e[o],this,A,i);return A.sort(UP),A}}function UP(n,e){return n.distance-e.distance}function jE(n,e,i,A){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,i)===!1&&(o=!1),o===!0&&A===!0){const s=n.children;for(let a=0,g=s.length;a<g;a++)jE(s[a],e,i,!0)}}class c7{constructor(e=1,i=0,A=0){return this.radius=e,this.phi=i,this.theta=A,this}set(e,i,A){return this.radius=e,this.phi=i,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,A){return this.radius=Math.sqrt(e*e+i*i+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(li(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const GP=new T,wC=new T;class no{constructor(e=new T,i=new T){this.start=e,this.end=i}set(e,i){return this.start.copy(e),this.end.copy(i),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,i){return this.delta(i).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,i){GP.subVectors(e,this.start),wC.subVectors(this.end,this.start);const A=wC.dot(wC);let s=wC.dot(GP)/A;return i&&(s=li(s,0,1)),s}closestPointToPoint(e,i,A){const o=this.closestPointToPointParameter(e,i);return this.delta(A).multiplyScalar(o).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const kP=new T,vC=new T,HP=new T;class C7 extends ft{constructor(e,i,A){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=A,this.type="DirectionalLightHelper",i===void 0&&(i=1);let o=new Ut;o.setAttribute("position",new xt([-i,i,0,i,i,0,i,-i,0,-i,-i,0,-i,i,0],3));const s=new Dc({fog:!1,toneMapped:!1});this.lightPlane=new xg(o,s),this.add(this.lightPlane),o=new Ut,o.setAttribute("position",new xt([0,0,0,0,0,1],3)),this.targetLine=new xg(o,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),kP.setFromMatrixPosition(this.light.matrixWorld),vC.setFromMatrixPosition(this.light.target.matrixWorld),HP.subVectors(vC,kP),this.lightPlane.lookAt(vC),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(vC),this.targetLine.scale.z=HP.length()}}const bC=new T,ni=new f_;class l7 extends EO{constructor(e){const i=new Ut,A=new Dc({color:16777215,vertexColors:!0,toneMapped:!1}),o=[],s=[],a={};g("n1","n2"),g("n2","n4"),g("n4","n3"),g("n3","n1"),g("f1","f2"),g("f2","f4"),g("f4","f3"),g("f3","f1"),g("n1","f1"),g("n2","f2"),g("n3","f3"),g("n4","f4"),g("p","n1"),g("p","n2"),g("p","n3"),g("p","n4"),g("u1","u2"),g("u2","u3"),g("u3","u1"),g("c","t"),g("p","c"),g("cn1","cn2"),g("cn3","cn4"),g("cf1","cf2"),g("cf3","cf4");function g(Q,y){I(Q),I(y)}function I(Q){o.push(0,0,0),s.push(0,0,0),a[Q]===void 0&&(a[Q]=[]),a[Q].push(o.length/3-1)}i.setAttribute("position",new xt(o,3)),i.setAttribute("color",new xt(s,3)),super(i,A),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ue(16755200),_=new Ue(16711680),p=new Ue(43775),B=new Ue(16777215),d=new Ue(3355443);this.setColors(c,_,p,B,d)}setColors(e,i,A,o,s){const g=this.geometry.getAttribute("color");g.setXYZ(0,e.r,e.g,e.b),g.setXYZ(1,e.r,e.g,e.b),g.setXYZ(2,e.r,e.g,e.b),g.setXYZ(3,e.r,e.g,e.b),g.setXYZ(4,e.r,e.g,e.b),g.setXYZ(5,e.r,e.g,e.b),g.setXYZ(6,e.r,e.g,e.b),g.setXYZ(7,e.r,e.g,e.b),g.setXYZ(8,e.r,e.g,e.b),g.setXYZ(9,e.r,e.g,e.b),g.setXYZ(10,e.r,e.g,e.b),g.setXYZ(11,e.r,e.g,e.b),g.setXYZ(12,e.r,e.g,e.b),g.setXYZ(13,e.r,e.g,e.b),g.setXYZ(14,e.r,e.g,e.b),g.setXYZ(15,e.r,e.g,e.b),g.setXYZ(16,e.r,e.g,e.b),g.setXYZ(17,e.r,e.g,e.b),g.setXYZ(18,e.r,e.g,e.b),g.setXYZ(19,e.r,e.g,e.b),g.setXYZ(20,e.r,e.g,e.b),g.setXYZ(21,e.r,e.g,e.b),g.setXYZ(22,e.r,e.g,e.b),g.setXYZ(23,e.r,e.g,e.b),g.setXYZ(24,i.r,i.g,i.b),g.setXYZ(25,i.r,i.g,i.b),g.setXYZ(26,i.r,i.g,i.b),g.setXYZ(27,i.r,i.g,i.b),g.setXYZ(28,i.r,i.g,i.b),g.setXYZ(29,i.r,i.g,i.b),g.setXYZ(30,i.r,i.g,i.b),g.setXYZ(31,i.r,i.g,i.b),g.setXYZ(32,A.r,A.g,A.b),g.setXYZ(33,A.r,A.g,A.b),g.setXYZ(34,A.r,A.g,A.b),g.setXYZ(35,A.r,A.g,A.b),g.setXYZ(36,A.r,A.g,A.b),g.setXYZ(37,A.r,A.g,A.b),g.setXYZ(38,o.r,o.g,o.b),g.setXYZ(39,o.r,o.g,o.b),g.setXYZ(40,s.r,s.g,s.b),g.setXYZ(41,s.r,s.g,s.b),g.setXYZ(42,s.r,s.g,s.b),g.setXYZ(43,s.r,s.g,s.b),g.setXYZ(44,s.r,s.g,s.b),g.setXYZ(45,s.r,s.g,s.b),g.setXYZ(46,s.r,s.g,s.b),g.setXYZ(47,s.r,s.g,s.b),g.setXYZ(48,s.r,s.g,s.b),g.setXYZ(49,s.r,s.g,s.b),g.needsUpdate=!0}update(){const e=this.geometry,i=this.pointMap,A=1,o=1;ni.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),gi("c",i,e,ni,0,0,-1),gi("t",i,e,ni,0,0,1),gi("n1",i,e,ni,-A,-o,-1),gi("n2",i,e,ni,A,-o,-1),gi("n3",i,e,ni,-A,o,-1),gi("n4",i,e,ni,A,o,-1),gi("f1",i,e,ni,-A,-o,1),gi("f2",i,e,ni,A,-o,1),gi("f3",i,e,ni,-A,o,1),gi("f4",i,e,ni,A,o,1),gi("u1",i,e,ni,A*.7,o*1.1,-1),gi("u2",i,e,ni,-A*.7,o*1.1,-1),gi("u3",i,e,ni,0,o*2,-1),gi("cf1",i,e,ni,-A,0,1),gi("cf2",i,e,ni,A,0,1),gi("cf3",i,e,ni,0,-o,1),gi("cf4",i,e,ni,0,o,1),gi("cn1",i,e,ni,-A,0,-1),gi("cn2",i,e,ni,A,0,-1),gi("cn3",i,e,ni,0,-o,-1),gi("cn4",i,e,ni,0,o,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function gi(n,e,i,A,o,s,a){bC.set(o,s,a).unproject(A);const g=e[n];if(g!==void 0){const I=i.getAttribute("position");for(let c=0,_=g.length;c<_;c++)I.setXYZ(g[c],bC.x,bC.y,bC.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);const DO=0,UX=1,GX=2,PP=2,Hp=1.25,KP=1,YI=6*4+4+4,v_=65535,kX=Math.pow(2,-24),Pp=Symbol("SKIP_GENERATION");function HX(n){return n.index?n.index.count:n.attributes.position.count}function Yg(n){return HX(n)/3}function PX(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function KX(n,e){if(!n.index){const i=n.attributes.position.count,A=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,o=PX(i,A);n.setIndex(new Tt(o,1));for(let s=0;s<i;s++)o[s]=s}}function SO(n,e){const i=Yg(n),A=e||n.drawRange,o=A.start/3,s=(A.start+A.count)/3,a=Math.max(0,o),g=Math.min(i,s)-a;return[{offset:Math.floor(a),count:Math.floor(g)}]}function wO(n,e){if(!n.groups||!n.groups.length)return SO(n,e);const i=[],A=new Set,o=e||n.drawRange,s=o.start/3,a=(o.start+o.count)/3;for(const I of n.groups){const c=I.start/3,_=(I.start+I.count)/3;A.add(Math.max(s,c)),A.add(Math.min(a,_))}const g=Array.from(A.values()).sort((I,c)=>I-c);for(let I=0;I<g.length-1;I++){const c=g[I],_=g[I+1];i.push({offset:Math.floor(c),count:Math.floor(_-c)})}return i}function JX(n,e){const i=Yg(n),A=wO(n,e).sort((a,g)=>a.offset-g.offset),o=A[A.length-1];o.count=Math.min(i-o.offset,o.count);let s=0;return A.forEach(({count:a})=>s+=a),i!==s}function Kp(n,e,i,A,o){let s=1/0,a=1/0,g=1/0,I=-1/0,c=-1/0,_=-1/0,p=1/0,B=1/0,d=1/0,Q=-1/0,y=-1/0,h=-1/0;for(let E=e*6,u=(e+i)*6;E<u;E+=6){const f=n[E+0],m=n[E+1],M=f-m,v=f+m;M<s&&(s=M),v>I&&(I=v),f<p&&(p=f),f>Q&&(Q=f);const b=n[E+2],x=n[E+3],w=b-x,S=b+x;w<a&&(a=w),S>c&&(c=S),b<B&&(B=b),b>y&&(y=b);const F=n[E+4],k=n[E+5],P=F-k,z=F+k;P<g&&(g=P),z>_&&(_=z),F<d&&(d=F),F>h&&(h=F)}A[0]=s,A[1]=a,A[2]=g,A[3]=I,A[4]=c,A[5]=_,o[0]=p,o[1]=B,o[2]=d,o[3]=Q,o[4]=y,o[5]=h}function OX(n,e=null,i=null,A=null){const o=n.attributes.position,s=n.index?n.index.array:null,a=Yg(n),g=o.normalized;let I;e===null?(I=new Float32Array(a*6),i=0,A=a):(I=e,i=i||0,A=A||a);const c=o.array,_=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const B=["getX","getY","getZ"];for(let d=i;d<i+A;d++){const Q=d*3,y=d*6;let h=Q+0,E=Q+1,u=Q+2;s&&(h=s[h],E=s[E],u=s[u]),g||(h=h*p+_,E=E*p+_,u=u*p+_);for(let f=0;f<3;f++){let m,M,v;g?(m=o[B[f]](h),M=o[B[f]](E),v=o[B[f]](u)):(m=c[h+f],M=c[E+f],v=c[u+f]);let b=m;M<b&&(b=M),v<b&&(b=v);let x=m;M>x&&(x=M),v>x&&(x=v);const w=(x-b)/2,S=f*2;I[y+S+0]=b+w,I[y+S+1]=w+(Math.abs(b)+w)*kX}}return I}function oi(n,e,i){return i.min.x=e[n],i.min.y=e[n+1],i.min.z=e[n+2],i.max.x=e[n+3],i.max.y=e[n+4],i.max.z=e[n+5],i}function JP(n){let e=-1,i=-1/0;for(let A=0;A<3;A++){const o=n[A+3]-n[A];o>i&&(i=o,e=A)}return e}function OP(n,e){e.set(n)}function YP(n,e,i){let A,o;for(let s=0;s<3;s++){const a=s+3;A=n[s],o=e[s],i[s]=A<o?A:o,A=n[a],o=e[a],i[a]=A>o?A:o}}function MC(n,e,i){for(let A=0;A<3;A++){const o=e[n+2*A],s=e[n+2*A+1],a=o-s,g=o+s;a<i[A]&&(i[A]=a),g>i[A+3]&&(i[A+3]=g)}}function EI(n){const e=n[3]-n[0],i=n[4]-n[1],A=n[5]-n[2];return 2*(e*i+i*A+A*e)}const Qo=32,YX=(n,e)=>n.candidate-e.candidate,es=new Array(Qo).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),RC=new Float32Array(6);function qX(n,e,i,A,o,s){let a=-1,g=0;if(s===DO)a=JP(e),a!==-1&&(g=(e[a]+e[a+3])/2);else if(s===UX)a=JP(n),a!==-1&&(g=jX(i,A,o,a));else if(s===GX){const I=EI(n);let c=Hp*o;const _=A*6,p=(A+o)*6;for(let B=0;B<3;B++){const d=e[B],h=(e[B+3]-d)/Qo;if(o<Qo/4){const E=[...es];E.length=o;let u=0;for(let m=_;m<p;m+=6,u++){const M=E[u];M.candidate=i[m+2*B],M.count=0;const{bounds:v,leftCacheBounds:b,rightCacheBounds:x}=M;for(let w=0;w<3;w++)x[w]=1/0,x[w+3]=-1/0,b[w]=1/0,b[w+3]=-1/0,v[w]=1/0,v[w+3]=-1/0;MC(m,i,v)}E.sort(YX);let f=o;for(let m=0;m<f;m++){const M=E[m];for(;m+1<f&&E[m+1].candidate===M.candidate;)E.splice(m+1,1),f--}for(let m=_;m<p;m+=6){const M=i[m+2*B];for(let v=0;v<f;v++){const b=E[v];M>=b.candidate?MC(m,i,b.rightCacheBounds):(MC(m,i,b.leftCacheBounds),b.count++)}}for(let m=0;m<f;m++){const M=E[m],v=M.count,b=o-M.count,x=M.leftCacheBounds,w=M.rightCacheBounds;let S=0;v!==0&&(S=EI(x)/I);let F=0;b!==0&&(F=EI(w)/I);const k=KP+Hp*(S*v+F*b);k<c&&(a=B,c=k,g=M.candidate)}}else{for(let f=0;f<Qo;f++){const m=es[f];m.count=0,m.candidate=d+h+f*h;const M=m.bounds;for(let v=0;v<3;v++)M[v]=1/0,M[v+3]=-1/0}for(let f=_;f<p;f+=6){let v=~~((i[f+2*B]-d)/h);v>=Qo&&(v=Qo-1);const b=es[v];b.count++,MC(f,i,b.bounds)}const E=es[Qo-1];OP(E.bounds,E.rightCacheBounds);for(let f=Qo-2;f>=0;f--){const m=es[f],M=es[f+1];YP(m.bounds,M.rightCacheBounds,m.rightCacheBounds)}let u=0;for(let f=0;f<Qo-1;f++){const m=es[f],M=m.count,v=m.bounds,x=es[f+1].rightCacheBounds;M!==0&&(u===0?OP(v,RC):YP(v,RC,RC)),u+=M;let w=0,S=0;u!==0&&(w=EI(RC)/I);const F=o-u;F!==0&&(S=EI(x)/I);const k=KP+Hp*(w*u+S*F);k<c&&(a=B,c=k,g=m.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:g}}function jX(n,e,i,A){let o=0;for(let s=e,a=e+i;s<a;s++)o+=n[s*6+A*2];return o/i}class Jp{constructor(){this.boundingData=new Float32Array(6)}}function VX(n,e,i,A,o,s){let a=A,g=A+o-1;const I=s.pos,c=s.axis*2;for(;;){for(;a<=g&&i[a*6+c]<I;)a++;for(;a<=g&&i[g*6+c]>=I;)g--;if(a<g){for(let _=0;_<3;_++){let p=e[a*3+_];e[a*3+_]=e[g*3+_],e[g*3+_]=p}for(let _=0;_<6;_++){let p=i[a*6+_];i[a*6+_]=i[g*6+_],i[g*6+_]=p}a++,g--}else return a}}function zX(n,e,i,A,o,s){let a=A,g=A+o-1;const I=s.pos,c=s.axis*2;for(;;){for(;a<=g&&i[a*6+c]<I;)a++;for(;a<=g&&i[g*6+c]>=I;)g--;if(a<g){let _=n[a];n[a]=n[g],n[g]=_;for(let p=0;p<6;p++){let B=i[a*6+p];i[a*6+p]=i[g*6+p],i[g*6+p]=B}a++,g--}else return a}}function Sn(n,e){return e[n+15]===65535}function Pn(n,e){return e[n+6]}function cr(n,e){return e[n+14]}function Cr(n){return n+8}function lr(n,e){return e[n+6]}function vO(n,e){return e[n+7]}let bO,NI,Bl,MO;const WX=Math.pow(2,32);function VE(n){return"count"in n?1:1+VE(n.left)+VE(n.right)}function XX(n,e,i){return bO=new Float32Array(i),NI=new Uint32Array(i),Bl=new Uint16Array(i),MO=new Uint8Array(i),zE(n,e)}function zE(n,e){const i=n/4,A=n/2,o="count"in e,s=e.boundingData;for(let a=0;a<6;a++)bO[i+a]=s[a];if(o)if(e.buffer){const a=e.buffer;MO.set(new Uint8Array(a),n);for(let g=n,I=n+a.byteLength;g<I;g+=YI){const c=g/2;Sn(c,Bl)||(NI[g/4+6]+=i)}return n+a.byteLength}else{const a=e.offset,g=e.count;return NI[i+6]=a,Bl[A+14]=g,Bl[A+15]=v_,n+YI}else{const a=e.left,g=e.right,I=e.splitAxis;let c;if(c=zE(n+YI,a),c/4>WX)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return NI[i+6]=c/4,c=zE(c,g),NI[i+7]=I,c}}function ZX(n,e){const i=(n.index?n.index.count:n.attributes.position.count)/3,A=i>2**16,o=A?4:2,s=e?new SharedArrayBuffer(i*o):new ArrayBuffer(i*o),a=A?new Uint32Array(s):new Uint16Array(s);for(let g=0,I=a.length;g<I;g++)a[g]=g;return a}function $X(n,e,i,A,o){const{maxDepth:s,verbose:a,maxLeafTris:g,strategy:I,onProgress:c,indirect:_}=o,p=n._indirectBuffer,B=n.geometry,d=B.index?B.index.array:null,Q=_?zX:VX,y=Yg(B),h=new Float32Array(6);let E=!1;const u=new Jp;return Kp(e,i,A,u.boundingData,h),m(u,i,A,h),u;function f(M){c&&c(M/y)}function m(M,v,b,x=null,w=0){if(!E&&w>=s&&(E=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(B))),b<=g||w>=s)return f(v+b),M.offset=v,M.count=b,M;const S=qX(M.boundingData,x,e,v,b,I);if(S.axis===-1)return f(v+b),M.offset=v,M.count=b,M;const F=Q(p,d,e,v,b,S);if(F===v||F===v+b)f(v+b),M.offset=v,M.count=b;else{M.splitAxis=S.axis;const k=new Jp,P=v,z=F-v;M.left=k,Kp(e,P,z,k.boundingData,h),m(k,P,z,h,w+1);const ie=new Jp,W=F,de=b-z;M.right=ie,Kp(e,W,de,ie.boundingData,h),m(ie,W,de,h,w+1)}return M}}function eZ(n,e){const i=n.geometry;e.indirect&&(n._indirectBuffer=ZX(i,e.useSharedArrayBuffer),JX(i,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||KX(i,e);const A=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,o=OX(i),s=e.indirect?SO(i,e.range):wO(i,e.range);n._roots=s.map(a=>{const g=$X(n,o,a.offset,a.count,e),I=VE(g),c=new A(YI*I);return XX(0,g,c),c})}class Ko{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,i){let A=1/0,o=-1/0;for(let s=0,a=e.length;s<a;s++){const I=e[s][i];A=I<A?I:A,o=I>o?I:o}this.min=A,this.max=o}setFromPoints(e,i){let A=1/0,o=-1/0;for(let s=0,a=i.length;s<a;s++){const g=i[s],I=e.dot(g);A=I<A?I:A,o=I>o?I:o}this.min=A,this.max=o}isSeparated(e){return this.min>e.max||e.min>this.max}}Ko.prototype.setFromBox=function(){const n=new T;return function(i,A){const o=A.min,s=A.max;let a=1/0,g=-1/0;for(let I=0;I<=1;I++)for(let c=0;c<=1;c++)for(let _=0;_<=1;_++){n.x=o.x*I+s.x*(1-I),n.y=o.y*c+s.y*(1-c),n.z=o.z*_+s.z*(1-_);const p=i.dot(n);a=Math.min(p,a),g=Math.max(p,g)}this.min=a,this.max=g}}();const AZ=function(){const n=new T,e=new T,i=new T;return function(o,s,a){const g=o.start,I=n,c=s.start,_=e;i.subVectors(g,c),n.subVectors(o.end,o.start),e.subVectors(s.end,s.start);const p=i.dot(_),B=_.dot(I),d=_.dot(_),Q=i.dot(I),h=I.dot(I)*d-B*B;let E,u;h!==0?E=(p*B-Q*d)/h:E=0,u=(p+E*B)/d,a.x=E,a.y=u}}(),Qh=function(){const n=new iA,e=new T,i=new T;return function(o,s,a,g){AZ(o,s,n);let I=n.x,c=n.y;if(I>=0&&I<=1&&c>=0&&c<=1){o.at(I,a),s.at(c,g);return}else if(I>=0&&I<=1){c<0?s.at(0,g):s.at(1,g),o.closestPointToPoint(g,!0,a);return}else if(c>=0&&c<=1){I<0?o.at(0,a):o.at(1,a),s.closestPointToPoint(a,!0,g);return}else{let _;I<0?_=o.start:_=o.end;let p;c<0?p=s.start:p=s.end;const B=e,d=i;if(o.closestPointToPoint(p,!0,e),s.closestPointToPoint(_,!0,i),B.distanceToSquared(p)<=d.distanceToSquared(_)){a.copy(B),g.copy(p);return}else{a.copy(_),g.copy(d);return}}}}(),tZ=function(){const n=new T,e=new T,i=new Wr,A=new no;return function(s,a){const{radius:g,center:I}=s,{a:c,b:_,c:p}=a;if(A.start=c,A.end=_,A.closestPointToPoint(I,!0,n).distanceTo(I)<=g||(A.start=c,A.end=p,A.closestPointToPoint(I,!0,n).distanceTo(I)<=g)||(A.start=_,A.end=p,A.closestPointToPoint(I,!0,n).distanceTo(I)<=g))return!0;const y=a.getPlane(i);if(Math.abs(y.distanceToPoint(I))<=g){const E=y.projectPoint(I,e);if(a.containsPoint(E))return!0}return!1}}(),iZ=1e-15;function Op(n){return Math.abs(n)<iZ}class Tr extends Hi{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new T),this.satBounds=new Array(4).fill().map(()=>new Ko),this.points=[this.a,this.b,this.c],this.sphere=new wi,this.plane=new Wr,this.needsUpdate=!0}intersectsSphere(e){return tZ(e,this)}update(){const e=this.a,i=this.b,A=this.c,o=this.points,s=this.satAxes,a=this.satBounds,g=s[0],I=a[0];this.getNormal(g),I.setFromPoints(g,o);const c=s[1],_=a[1];c.subVectors(e,i),_.setFromPoints(c,o);const p=s[2],B=a[2];p.subVectors(i,A),B.setFromPoints(p,o);const d=s[3],Q=a[3];d.subVectors(A,e),Q.setFromPoints(d,o),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(g,e),this.needsUpdate=!1}}Tr.prototype.closestPointToSegment=function(){const n=new T,e=new T,i=new no;return function(o,s=null,a=null){const{start:g,end:I}=o,c=this.points;let _,p=1/0;for(let B=0;B<3;B++){const d=(B+1)%3;i.start.copy(c[B]),i.end.copy(c[d]),Qh(i,o,n,e),_=n.distanceToSquared(e),_<p&&(p=_,s&&s.copy(n),a&&a.copy(e))}return this.closestPointToPoint(g,n),_=g.distanceToSquared(n),_<p&&(p=_,s&&s.copy(n),a&&a.copy(g)),this.closestPointToPoint(I,n),_=I.distanceToSquared(n),_<p&&(p=_,s&&s.copy(n),a&&a.copy(I)),Math.sqrt(p)}}();Tr.prototype.intersectsTriangle=function(){const n=new Tr,e=new Array(3),i=new Array(3),A=new Ko,o=new Ko,s=new T,a=new T,g=new T,I=new T,c=new T,_=new no,p=new no,B=new no,d=new T;function Q(y,h,E){const u=y.points;let f=0,m=-1;for(let M=0;M<3;M++){const{start:v,end:b}=_;v.copy(u[M]),b.copy(u[(M+1)%3]),_.delta(a);const x=Op(h.distanceToPoint(v));if(Op(h.normal.dot(a))&&x){E.copy(_),f=2;break}const w=h.intersectLine(_,d);if(!w&&x&&d.copy(v),(w||x)&&!Op(d.distanceTo(b))){if(f<=1)(f===1?E.start:E.end).copy(d),x&&(m=f);else if(f>=2){(m===1?E.start:E.end).copy(d),f=2;break}if(f++,f===2&&m===-1)break}}return f}return function(h,E=null,u=!1){this.needsUpdate&&this.update(),h.isExtendedTriangle?h.needsUpdate&&h.update():(n.copy(h),n.update(),h=n);const f=this.plane,m=h.plane;if(Math.abs(f.normal.dot(m.normal))>1-1e-10){const M=this.satBounds,v=this.satAxes;i[0]=h.a,i[1]=h.b,i[2]=h.c;for(let w=0;w<4;w++){const S=M[w],F=v[w];if(A.setFromPoints(F,i),S.isSeparated(A))return!1}const b=h.satBounds,x=h.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let w=0;w<4;w++){const S=b[w],F=x[w];if(A.setFromPoints(F,e),S.isSeparated(A))return!1}for(let w=0;w<4;w++){const S=v[w];for(let F=0;F<4;F++){const k=x[F];if(s.crossVectors(S,k),A.setFromPoints(s,e),o.setFromPoints(s,i),A.isSeparated(o))return!1}}return E&&(u||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),E.start.set(0,0,0),E.end.set(0,0,0)),!0}else{const M=Q(this,m,p);if(M===1&&h.containsPoint(p.end))return E&&(E.start.copy(p.end),E.end.copy(p.end)),!0;if(M!==2)return!1;const v=Q(h,f,B);if(v===1&&this.containsPoint(B.end))return E&&(E.start.copy(B.end),E.end.copy(B.end)),!0;if(v!==2)return!1;if(p.delta(g),B.delta(I),g.dot(I)<0){let P=B.start;B.start=B.end,B.end=P}const b=p.start.dot(g),x=p.end.dot(g),w=B.start.dot(g),S=B.end.dot(g),F=x<w,k=b<S;return b!==S&&w!==x&&F===k?!1:(E&&(c.subVectors(p.start,B.start),c.dot(g)>0?E.start.copy(p.start):E.start.copy(B.start),c.subVectors(p.end,B.end),c.dot(g)<0?E.end.copy(p.end):E.end.copy(B.end)),!0)}}}();Tr.prototype.distanceToPoint=function(){const n=new T;return function(i){return this.closestPointToPoint(i,n),i.distanceTo(n)}}();Tr.prototype.distanceToTriangle=function(){const n=new T,e=new T,i=["a","b","c"],A=new no,o=new no;return function(a,g=null,I=null){const c=g||I?A:null;if(this.intersectsTriangle(a,c))return(g||I)&&(g&&c.getCenter(g),I&&c.getCenter(I)),0;let _=1/0;for(let p=0;p<3;p++){let B;const d=i[p],Q=a[d];this.closestPointToPoint(Q,n),B=Q.distanceToSquared(n),B<_&&(_=B,g&&g.copy(n),I&&I.copy(Q));const y=this[d];a.closestPointToPoint(y,n),B=y.distanceToSquared(n),B<_&&(_=B,g&&g.copy(y),I&&I.copy(n))}for(let p=0;p<3;p++){const B=i[p],d=i[(p+1)%3];A.set(this[B],this[d]);for(let Q=0;Q<3;Q++){const y=i[Q],h=i[(Q+1)%3];o.set(a[y],a[h]),Qh(A,o,n,e);const E=n.distanceToSquared(e);E<_&&(_=E,g&&g.copy(n),I&&I.copy(e))}}return Math.sqrt(_)}}();class _n{constructor(e,i,A){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new xe,this.invMatrix=new xe,this.points=new Array(8).fill().map(()=>new T),this.satAxes=new Array(3).fill().map(()=>new T),this.satBounds=new Array(3).fill().map(()=>new Ko),this.alignedSatBounds=new Array(3).fill().map(()=>new Ko),this.needsUpdate=!1,e&&this.min.copy(e),i&&this.max.copy(i),A&&this.matrix.copy(A)}set(e,i,A){this.min.copy(e),this.max.copy(i),this.matrix.copy(A),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}_n.prototype.update=function(){return function(){const e=this.matrix,i=this.min,A=this.max,o=this.points;for(let c=0;c<=1;c++)for(let _=0;_<=1;_++)for(let p=0;p<=1;p++){const B=1*c|2*_|4*p,d=o[B];d.x=c?A.x:i.x,d.y=_?A.y:i.y,d.z=p?A.z:i.z,d.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,g=o[0];for(let c=0;c<3;c++){const _=a[c],p=s[c],B=1<<c,d=o[B];_.subVectors(g,d),p.setFromPoints(_,o)}const I=this.alignedSatBounds;I[0].setFromPointsField(o,"x"),I[1].setFromPointsField(o,"y"),I[2].setFromPointsField(o,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();_n.prototype.intersectsBox=function(){const n=new Ko;return function(i){this.needsUpdate&&this.update();const A=i.min,o=i.max,s=this.satBounds,a=this.satAxes,g=this.alignedSatBounds;if(n.min=A.x,n.max=o.x,g[0].isSeparated(n)||(n.min=A.y,n.max=o.y,g[1].isSeparated(n))||(n.min=A.z,n.max=o.z,g[2].isSeparated(n)))return!1;for(let I=0;I<3;I++){const c=a[I],_=s[I];if(n.setFromBox(c,i),_.isSeparated(n))return!1}return!0}}();_n.prototype.intersectsTriangle=function(){const n=new Tr,e=new Array(3),i=new Ko,A=new Ko,o=new T;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(n.copy(a),n.update(),a=n);const g=this.satBounds,I=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let B=0;B<3;B++){const d=g[B],Q=I[B];if(i.setFromPoints(Q,e),d.isSeparated(i))return!1}const c=a.satBounds,_=a.satAxes,p=this.points;for(let B=0;B<3;B++){const d=c[B],Q=_[B];if(i.setFromPoints(Q,p),d.isSeparated(i))return!1}for(let B=0;B<3;B++){const d=I[B];for(let Q=0;Q<4;Q++){const y=_[Q];if(o.crossVectors(d,y),i.setFromPoints(o,e),A.setFromPoints(o,p),i.isSeparated(A))return!1}}return!0}}();_n.prototype.closestPointToPoint=function(){return function(e,i){return this.needsUpdate&&this.update(),i.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),i}}();_n.prototype.distanceToPoint=function(){const n=new T;return function(i){return this.closestPointToPoint(i,n),i.distanceTo(n)}}();_n.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new no),i=new Array(12).fill().map(()=>new no),A=new T,o=new T;return function(a,g=0,I=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(I||c)&&(a.getCenter(o),this.closestPointToPoint(o,A),a.closestPointToPoint(A,o),I&&I.copy(A),c&&c.copy(o)),0;const _=g*g,p=a.min,B=a.max,d=this.points;let Q=1/0;for(let h=0;h<8;h++){const E=d[h];o.copy(E).clamp(p,B);const u=E.distanceToSquared(o);if(u<Q&&(Q=u,I&&I.copy(E),c&&c.copy(o),u<_))return Math.sqrt(u)}let y=0;for(let h=0;h<3;h++)for(let E=0;E<=1;E++)for(let u=0;u<=1;u++){const f=(h+1)%3,m=(h+2)%3,M=E<<f|u<<m,v=1<<h|E<<f|u<<m,b=d[M],x=d[v];e[y].set(b,x);const S=n[h],F=n[f],k=n[m],P=i[y],z=P.start,ie=P.end;z[S]=p[S],z[F]=E?p[F]:B[F],z[k]=u?p[k]:B[F],ie[S]=B[S],ie[F]=E?p[F]:B[F],ie[k]=u?p[k]:B[F],y++}for(let h=0;h<=1;h++)for(let E=0;E<=1;E++)for(let u=0;u<=1;u++){o.x=h?B.x:p.x,o.y=E?B.y:p.y,o.z=u?B.z:p.z,this.closestPointToPoint(o,A);const f=o.distanceToSquared(A);if(f<Q&&(Q=f,I&&I.copy(A),c&&c.copy(o),f<_))return Math.sqrt(f)}for(let h=0;h<12;h++){const E=e[h];for(let u=0;u<12;u++){const f=i[u];Qh(E,f,A,o);const m=A.distanceToSquared(o);if(m<Q&&(Q=m,I&&I.copy(A),c&&c.copy(o),m<_))return Math.sqrt(m)}}return Math.sqrt(Q)}}();class fh{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class nZ extends fh{constructor(){super(()=>new Tr)}}const _r=new nZ;class rZ{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let i=null;this.setBuffer=A=>{i&&e.push(i),i=A,this.float32Array=new Float32Array(A),this.uint16Array=new Uint16Array(A),this.uint32Array=new Uint32Array(A)},this.clearBuffer=()=>{i=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const kt=new rZ;let _s,ag;const Ga=[],NC=new fh(()=>new St);function oZ(n,e,i,A,o,s){_s=NC.getPrimitive(),ag=NC.getPrimitive(),Ga.push(_s,ag),kt.setBuffer(n._roots[e]);const a=WE(0,n.geometry,i,A,o,s);kt.clearBuffer(),NC.releasePrimitive(_s),NC.releasePrimitive(ag),Ga.pop(),Ga.pop();const g=Ga.length;return g>0&&(ag=Ga[g-1],_s=Ga[g-2]),a}function WE(n,e,i,A,o=null,s=0,a=0){const{float32Array:g,uint16Array:I,uint32Array:c}=kt;let _=n*2;if(Sn(_,I)){const B=Pn(n,c),d=cr(_,I);return oi(n,g,_s),A(B,d,!1,a,s+n,_s)}else{let S=function(k){const{uint16Array:P,uint32Array:z}=kt;let ie=k*2;for(;!Sn(ie,P);)k=Cr(k),ie=k*2;return Pn(k,z)},F=function(k){const{uint16Array:P,uint32Array:z}=kt;let ie=k*2;for(;!Sn(ie,P);)k=lr(k,z),ie=k*2;return Pn(k,z)+cr(ie,P)};const B=Cr(n),d=lr(n,c);let Q=B,y=d,h,E,u,f;if(o&&(u=_s,f=ag,oi(Q,g,u),oi(y,g,f),h=o(u),E=o(f),E<h)){Q=d,y=B;const k=h;h=E,E=k,u=f}u||(u=_s,oi(Q,g,u));const m=Sn(Q*2,I),M=i(u,m,h,a+1,s+Q);let v;if(M===PP){const k=S(Q),z=F(Q)-k;v=A(k,z,!0,a+1,s+Q,u)}else v=M&&WE(Q,e,i,A,o,s,a+1);if(v)return!0;f=ag,oi(y,g,f);const b=Sn(y*2,I),x=i(f,b,E,a+1,s+y);let w;if(x===PP){const k=S(y),z=F(y)-k;w=A(k,z,!0,a+1,s+y,f)}else w=x&&WE(y,e,i,A,o,s,a+1);return!!w}}const dI=new T,Yp=new T;function sZ(n,e,i={},A=0,o=1/0){const s=A*A,a=o*o;let g=1/0,I=null;if(n.shapecast({boundsTraverseOrder:_=>(dI.copy(e).clamp(_.min,_.max),dI.distanceToSquared(e)),intersectsBounds:(_,p,B)=>B<g&&B<a,intersectsTriangle:(_,p)=>{_.closestPointToPoint(e,dI);const B=e.distanceToSquared(dI);return B<g&&(Yp.copy(dI),g=B,I=p),B<s}}),g===1/0)return null;const c=Math.sqrt(g);return i.point?i.point.copy(Yp):i.point=Yp.clone(),i.distance=c,i.faceIndex=I,i}const aZ=parseInt(Rs)>=169,Js=new T,Os=new T,Ys=new T,xC=new iA,LC=new iA,FC=new iA,qP=new T,jP=new T,VP=new T,hI=new T;function gZ(n,e,i,A,o,s,a,g){let I;if(s===pi?I=n.intersectTriangle(A,i,e,!0,o):I=n.intersectTriangle(e,i,A,s!==In,o),I===null)return null;const c=n.origin.distanceTo(o);return c<a||c>g?null:{distance:c,point:o.clone()}}function IZ(n,e,i,A,o,s,a,g,I,c,_){Js.fromBufferAttribute(e,s),Os.fromBufferAttribute(e,a),Ys.fromBufferAttribute(e,g);const p=gZ(n,Js,Os,Ys,hI,I,c,_);if(p){const B=new T;Hi.getBarycoord(hI,Js,Os,Ys,B),A&&(xC.fromBufferAttribute(A,s),LC.fromBufferAttribute(A,a),FC.fromBufferAttribute(A,g),p.uv=Hi.getInterpolation(hI,Js,Os,Ys,xC,LC,FC,new iA)),o&&(xC.fromBufferAttribute(o,s),LC.fromBufferAttribute(o,a),FC.fromBufferAttribute(o,g),p.uv1=Hi.getInterpolation(hI,Js,Os,Ys,xC,LC,FC,new iA)),i&&(qP.fromBufferAttribute(i,s),jP.fromBufferAttribute(i,a),VP.fromBufferAttribute(i,g),p.normal=Hi.getInterpolation(hI,Js,Os,Ys,qP,jP,VP,new T),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const d={a:s,b:a,c:g,normal:new T,materialIndex:0};Hi.getNormal(Js,Os,Ys,d.normal),p.face=d,p.faceIndex=s,aZ&&(p.barycoord=B)}return p}function b_(n,e,i,A,o,s,a){const g=A*3;let I=g+0,c=g+1,_=g+2;const p=n.index;n.index&&(I=p.getX(I),c=p.getX(c),_=p.getX(_));const{position:B,normal:d,uv:Q,uv1:y}=n.attributes,h=IZ(i,B,d,Q,y,I,c,_,e,s,a);return h?(h.faceIndex=A,o&&o.push(h),h):null}function Bi(n,e,i,A){const o=n.a,s=n.b,a=n.c;let g=e,I=e+1,c=e+2;i&&(g=i.getX(g),I=i.getX(I),c=i.getX(c)),o.x=A.getX(g),o.y=A.getY(g),o.z=A.getZ(g),s.x=A.getX(I),s.y=A.getY(I),s.z=A.getZ(I),a.x=A.getX(c),a.y=A.getY(c),a.z=A.getZ(c)}function cZ(n,e,i,A,o,s,a,g){const{geometry:I,_indirectBuffer:c}=n;for(let _=A,p=A+o;_<p;_++)b_(I,e,i,_,s,a,g)}function CZ(n,e,i,A,o,s,a){const{geometry:g,_indirectBuffer:I}=n;let c=1/0,_=null;for(let p=A,B=A+o;p<B;p++){let d;d=b_(g,e,i,p,null,s,a),d&&d.distance<c&&(_=d,c=d.distance)}return _}function lZ(n,e,i,A,o,s,a){const{geometry:g}=i,{index:I}=g,c=g.attributes.position;for(let _=n,p=e+n;_<p;_++){let B;if(B=_,Bi(a,B*3,I,c),a.needsUpdate=!0,A(a,B,o,s))return!0}return!1}function _Z(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const i=n.geometry,A=i.index?i.index.array:null,o=i.attributes.position;let s,a,g,I,c=0;const _=n._roots;for(let B=0,d=_.length;B<d;B++)s=_[B],a=new Uint32Array(s),g=new Uint16Array(s),I=new Float32Array(s),p(0,c),c+=s.byteLength;function p(B,d,Q=!1){const y=B*2;if(g[y+15]===v_){const E=a[B+6],u=g[y+14];let f=1/0,m=1/0,M=1/0,v=-1/0,b=-1/0,x=-1/0;for(let w=3*E,S=3*(E+u);w<S;w++){let F=A[w];const k=o.getX(F),P=o.getY(F),z=o.getZ(F);k<f&&(f=k),k>v&&(v=k),P<m&&(m=P),P>b&&(b=P),z<M&&(M=z),z>x&&(x=z)}return I[B+0]!==f||I[B+1]!==m||I[B+2]!==M||I[B+3]!==v||I[B+4]!==b||I[B+5]!==x?(I[B+0]=f,I[B+1]=m,I[B+2]=M,I[B+3]=v,I[B+4]=b,I[B+5]=x,!0):!1}else{const E=B+8,u=a[B+6],f=E+d,m=u+d;let M=Q,v=!1,b=!1;e?M||(v=e.has(f),b=e.has(m),M=!v&&!b):(v=!0,b=!0);const x=M||v,w=M||b;let S=!1;x&&(S=p(E,d,M));let F=!1;w&&(F=p(u,d,M));const k=S||F;if(k)for(let P=0;P<3;P++){const z=E+P,ie=u+P,W=I[z],de=I[z+3],H=I[ie],oe=I[ie+3];I[B+P]=W<H?W:H,I[B+P+3]=de>oe?de:oe}return k}}}function ws(n,e,i,A,o){let s,a,g,I,c,_;const p=1/i.direction.x,B=1/i.direction.y,d=1/i.direction.z,Q=i.origin.x,y=i.origin.y,h=i.origin.z;let E=e[n],u=e[n+3],f=e[n+1],m=e[n+3+1],M=e[n+2],v=e[n+3+2];return p>=0?(s=(E-Q)*p,a=(u-Q)*p):(s=(u-Q)*p,a=(E-Q)*p),B>=0?(g=(f-y)*B,I=(m-y)*B):(g=(m-y)*B,I=(f-y)*B),s>I||g>a||((g>s||isNaN(s))&&(s=g),(I<a||isNaN(a))&&(a=I),d>=0?(c=(M-h)*d,_=(v-h)*d):(c=(v-h)*d,_=(M-h)*d),s>_||c>a)?!1:((c>s||s!==s)&&(s=c),(_<a||a!==a)&&(a=_),s<=o&&a>=A)}function pZ(n,e,i,A,o,s,a,g){const{geometry:I,_indirectBuffer:c}=n;for(let _=A,p=A+o;_<p;_++){let B=c?c[_]:_;b_(I,e,i,B,s,a,g)}}function BZ(n,e,i,A,o,s,a){const{geometry:g,_indirectBuffer:I}=n;let c=1/0,_=null;for(let p=A,B=A+o;p<B;p++){let d;d=b_(g,e,i,I?I[p]:p,null,s,a),d&&d.distance<c&&(_=d,c=d.distance)}return _}function EZ(n,e,i,A,o,s,a){const{geometry:g}=i,{index:I}=g,c=g.attributes.position;for(let _=n,p=e+n;_<p;_++){let B;if(B=i.resolveTriangleIndex(_),Bi(a,B*3,I,c),a.needsUpdate=!0,A(a,B,o,s))return!0}return!1}function dZ(n,e,i,A,o,s,a){kt.setBuffer(n._roots[e]),XE(0,n,i,A,o,s,a),kt.clearBuffer()}function XE(n,e,i,A,o,s,a){const{float32Array:g,uint16Array:I,uint32Array:c}=kt,_=n*2;if(Sn(_,I)){const B=Pn(n,c),d=cr(_,I);cZ(e,i,A,B,d,o,s,a)}else{const B=Cr(n);ws(B,g,A,s,a)&&XE(B,e,i,A,o,s,a);const d=lr(n,c);ws(d,g,A,s,a)&&XE(d,e,i,A,o,s,a)}}const hZ=["x","y","z"];function uZ(n,e,i,A,o,s){kt.setBuffer(n._roots[e]);const a=ZE(0,n,i,A,o,s);return kt.clearBuffer(),a}function ZE(n,e,i,A,o,s){const{float32Array:a,uint16Array:g,uint32Array:I}=kt;let c=n*2;if(Sn(c,g)){const p=Pn(n,I),B=cr(c,g);return CZ(e,i,A,p,B,o,s)}else{const p=vO(n,I),B=hZ[p],Q=A.direction[B]>=0;let y,h;Q?(y=Cr(n),h=lr(n,I)):(y=lr(n,I),h=Cr(n));const u=ws(y,a,A,o,s)?ZE(y,e,i,A,o,s):null;if(u){const M=u.point[B];if(Q?M<=a[h+p]:M>=a[h+p+3])return u}const m=ws(h,a,A,o,s)?ZE(h,e,i,A,o,s):null;return u&&m?u.distance<=m.distance?u:m:u||m||null}}const TC=new St,ka=new Tr,Ha=new Tr,uI=new xe,zP=new _n,UC=new _n;function QZ(n,e,i,A){kt.setBuffer(n._roots[e]);const o=$E(0,n,i,A);return kt.clearBuffer(),o}function $E(n,e,i,A,o=null){const{float32Array:s,uint16Array:a,uint32Array:g}=kt;let I=n*2;if(o===null&&(i.boundingBox||i.computeBoundingBox(),zP.set(i.boundingBox.min,i.boundingBox.max,A),o=zP),Sn(I,a)){const _=e.geometry,p=_.index,B=_.attributes.position,d=i.index,Q=i.attributes.position,y=Pn(n,g),h=cr(I,a);if(uI.copy(A).invert(),i.boundsTree)return oi(n,s,UC),UC.matrix.copy(uI),UC.needsUpdate=!0,i.boundsTree.shapecast({intersectsBounds:u=>UC.intersectsBox(u),intersectsTriangle:u=>{u.a.applyMatrix4(A),u.b.applyMatrix4(A),u.c.applyMatrix4(A),u.needsUpdate=!0;for(let f=y*3,m=(h+y)*3;f<m;f+=3)if(Bi(Ha,f,p,B),Ha.needsUpdate=!0,u.intersectsTriangle(Ha))return!0;return!1}});for(let E=y*3,u=(h+y)*3;E<u;E+=3){Bi(ka,E,p,B),ka.a.applyMatrix4(uI),ka.b.applyMatrix4(uI),ka.c.applyMatrix4(uI),ka.needsUpdate=!0;for(let f=0,m=d.count;f<m;f+=3)if(Bi(Ha,f,d,Q),Ha.needsUpdate=!0,ka.intersectsTriangle(Ha))return!0}}else{const _=n+8,p=g[n+6];return oi(_,s,TC),!!(o.intersectsBox(TC)&&$E(_,e,i,A,o)||(oi(p,s,TC),o.intersectsBox(TC)&&$E(p,e,i,A,o)))}}const GC=new xe,qp=new _n,QI=new _n,fZ=new T,yZ=new T,mZ=new T,DZ=new T;function SZ(n,e,i,A={},o={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),qp.set(e.boundingBox.min,e.boundingBox.max,i),qp.needsUpdate=!0;const g=n.geometry,I=g.attributes.position,c=g.index,_=e.attributes.position,p=e.index,B=_r.getPrimitive(),d=_r.getPrimitive();let Q=fZ,y=yZ,h=null,E=null;o&&(h=mZ,E=DZ);let u=1/0,f=null,m=null;return GC.copy(i).invert(),QI.matrix.copy(GC),n.shapecast({boundsTraverseOrder:M=>qp.distanceToBox(M),intersectsBounds:(M,v,b)=>b<u&&b<a?(v&&(QI.min.copy(M.min),QI.max.copy(M.max),QI.needsUpdate=!0),!0):!1,intersectsRange:(M,v)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:x=>QI.distanceToBox(x),intersectsBounds:(x,w,S)=>S<u&&S<a,intersectsRange:(x,w)=>{for(let S=x,F=x+w;S<F;S++){Bi(d,3*S,p,_),d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let k=M,P=M+v;k<P;k++){Bi(B,3*k,c,I),B.needsUpdate=!0;const z=B.distanceToTriangle(d,Q,h);if(z<u&&(y.copy(Q),E&&E.copy(h),u=z,f=k,m=S),z<s)return!0}}}});{const b=Yg(e);for(let x=0,w=b;x<w;x++){Bi(d,3*x,p,_),d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let S=M,F=M+v;S<F;S++){Bi(B,3*S,c,I),B.needsUpdate=!0;const k=B.distanceToTriangle(d,Q,h);if(k<u&&(y.copy(Q),E&&E.copy(h),u=k,f=S,m=x),k<s)return!0}}}}}),_r.releasePrimitive(B),_r.releasePrimitive(d),u===1/0?null:(A.point?A.point.copy(y):A.point=y.clone(),A.distance=u,A.faceIndex=f,o&&(o.point?o.point.copy(E):o.point=E.clone(),o.point.applyMatrix4(GC),y.applyMatrix4(GC),o.distance=y.sub(o.point).length(),o.faceIndex=m),A)}function wZ(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const i=n.geometry,A=i.index?i.index.array:null,o=i.attributes.position;let s,a,g,I,c=0;const _=n._roots;for(let B=0,d=_.length;B<d;B++)s=_[B],a=new Uint32Array(s),g=new Uint16Array(s),I=new Float32Array(s),p(0,c),c+=s.byteLength;function p(B,d,Q=!1){const y=B*2;if(g[y+15]===v_){const E=a[B+6],u=g[y+14];let f=1/0,m=1/0,M=1/0,v=-1/0,b=-1/0,x=-1/0;for(let w=E,S=E+u;w<S;w++){const F=3*n.resolveTriangleIndex(w);for(let k=0;k<3;k++){let P=F+k;P=A?A[P]:P;const z=o.getX(P),ie=o.getY(P),W=o.getZ(P);z<f&&(f=z),z>v&&(v=z),ie<m&&(m=ie),ie>b&&(b=ie),W<M&&(M=W),W>x&&(x=W)}}return I[B+0]!==f||I[B+1]!==m||I[B+2]!==M||I[B+3]!==v||I[B+4]!==b||I[B+5]!==x?(I[B+0]=f,I[B+1]=m,I[B+2]=M,I[B+3]=v,I[B+4]=b,I[B+5]=x,!0):!1}else{const E=B+8,u=a[B+6],f=E+d,m=u+d;let M=Q,v=!1,b=!1;e?M||(v=e.has(f),b=e.has(m),M=!v&&!b):(v=!0,b=!0);const x=M||v,w=M||b;let S=!1;x&&(S=p(E,d,M));let F=!1;w&&(F=p(u,d,M));const k=S||F;if(k)for(let P=0;P<3;P++){const z=E+P,ie=u+P,W=I[z],de=I[z+3],H=I[ie],oe=I[ie+3];I[B+P]=W<H?W:H,I[B+P+3]=de>oe?de:oe}return k}}}function vZ(n,e,i,A,o,s,a){kt.setBuffer(n._roots[e]),ed(0,n,i,A,o,s,a),kt.clearBuffer()}function ed(n,e,i,A,o,s,a){const{float32Array:g,uint16Array:I,uint32Array:c}=kt,_=n*2;if(Sn(_,I)){const B=Pn(n,c),d=cr(_,I);pZ(e,i,A,B,d,o,s,a)}else{const B=Cr(n);ws(B,g,A,s,a)&&ed(B,e,i,A,o,s,a);const d=lr(n,c);ws(d,g,A,s,a)&&ed(d,e,i,A,o,s,a)}}const bZ=["x","y","z"];function MZ(n,e,i,A,o,s){kt.setBuffer(n._roots[e]);const a=Ad(0,n,i,A,o,s);return kt.clearBuffer(),a}function Ad(n,e,i,A,o,s){const{float32Array:a,uint16Array:g,uint32Array:I}=kt;let c=n*2;if(Sn(c,g)){const p=Pn(n,I),B=cr(c,g);return BZ(e,i,A,p,B,o,s)}else{const p=vO(n,I),B=bZ[p],Q=A.direction[B]>=0;let y,h;Q?(y=Cr(n),h=lr(n,I)):(y=lr(n,I),h=Cr(n));const u=ws(y,a,A,o,s)?Ad(y,e,i,A,o,s):null;if(u){const M=u.point[B];if(Q?M<=a[h+p]:M>=a[h+p+3])return u}const m=ws(h,a,A,o,s)?Ad(h,e,i,A,o,s):null;return u&&m?u.distance<=m.distance?u:m:u||m||null}}const kC=new St,Pa=new Tr,Ka=new Tr,fI=new xe,WP=new _n,HC=new _n;function RZ(n,e,i,A){kt.setBuffer(n._roots[e]);const o=td(0,n,i,A);return kt.clearBuffer(),o}function td(n,e,i,A,o=null){const{float32Array:s,uint16Array:a,uint32Array:g}=kt;let I=n*2;if(o===null&&(i.boundingBox||i.computeBoundingBox(),WP.set(i.boundingBox.min,i.boundingBox.max,A),o=WP),Sn(I,a)){const _=e.geometry,p=_.index,B=_.attributes.position,d=i.index,Q=i.attributes.position,y=Pn(n,g),h=cr(I,a);if(fI.copy(A).invert(),i.boundsTree)return oi(n,s,HC),HC.matrix.copy(fI),HC.needsUpdate=!0,i.boundsTree.shapecast({intersectsBounds:u=>HC.intersectsBox(u),intersectsTriangle:u=>{u.a.applyMatrix4(A),u.b.applyMatrix4(A),u.c.applyMatrix4(A),u.needsUpdate=!0;for(let f=y,m=h+y;f<m;f++)if(Bi(Ka,3*e.resolveTriangleIndex(f),p,B),Ka.needsUpdate=!0,u.intersectsTriangle(Ka))return!0;return!1}});for(let E=y,u=h+y;E<u;E++){const f=e.resolveTriangleIndex(E);Bi(Pa,3*f,p,B),Pa.a.applyMatrix4(fI),Pa.b.applyMatrix4(fI),Pa.c.applyMatrix4(fI),Pa.needsUpdate=!0;for(let m=0,M=d.count;m<M;m+=3)if(Bi(Ka,m,d,Q),Ka.needsUpdate=!0,Pa.intersectsTriangle(Ka))return!0}}else{const _=n+8,p=g[n+6];return oi(_,s,kC),!!(o.intersectsBox(kC)&&td(_,e,i,A,o)||(oi(p,s,kC),o.intersectsBox(kC)&&td(p,e,i,A,o)))}}const PC=new xe,jp=new _n,yI=new _n,NZ=new T,xZ=new T,LZ=new T,FZ=new T;function TZ(n,e,i,A={},o={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),jp.set(e.boundingBox.min,e.boundingBox.max,i),jp.needsUpdate=!0;const g=n.geometry,I=g.attributes.position,c=g.index,_=e.attributes.position,p=e.index,B=_r.getPrimitive(),d=_r.getPrimitive();let Q=NZ,y=xZ,h=null,E=null;o&&(h=LZ,E=FZ);let u=1/0,f=null,m=null;return PC.copy(i).invert(),yI.matrix.copy(PC),n.shapecast({boundsTraverseOrder:M=>jp.distanceToBox(M),intersectsBounds:(M,v,b)=>b<u&&b<a?(v&&(yI.min.copy(M.min),yI.max.copy(M.max),yI.needsUpdate=!0),!0):!1,intersectsRange:(M,v)=>{if(e.boundsTree){const b=e.boundsTree;return b.shapecast({boundsTraverseOrder:x=>yI.distanceToBox(x),intersectsBounds:(x,w,S)=>S<u&&S<a,intersectsRange:(x,w)=>{for(let S=x,F=x+w;S<F;S++){const k=b.resolveTriangleIndex(S);Bi(d,3*k,p,_),d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let P=M,z=M+v;P<z;P++){const ie=n.resolveTriangleIndex(P);Bi(B,3*ie,c,I),B.needsUpdate=!0;const W=B.distanceToTriangle(d,Q,h);if(W<u&&(y.copy(Q),E&&E.copy(h),u=W,f=P,m=S),W<s)return!0}}}})}else{const b=Yg(e);for(let x=0,w=b;x<w;x++){Bi(d,3*x,p,_),d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let S=M,F=M+v;S<F;S++){const k=n.resolveTriangleIndex(S);Bi(B,3*k,c,I),B.needsUpdate=!0;const P=B.distanceToTriangle(d,Q,h);if(P<u&&(y.copy(Q),E&&E.copy(h),u=P,f=S,m=x),P<s)return!0}}}}}),_r.releasePrimitive(B),_r.releasePrimitive(d),u===1/0?null:(A.point?A.point.copy(y):A.point=y.clone(),A.distance=u,A.faceIndex=f,o&&(o.point?o.point.copy(E):o.point=E.clone(),o.point.applyMatrix4(PC),y.applyMatrix4(PC),o.distance=y.sub(o.point).length(),o.faceIndex=m),A)}function UZ(){return typeof SharedArrayBuffer<"u"}const qI=new kt.constructor,zl=new kt.constructor,ss=new fh(()=>new St),Ja=new St,Oa=new St,Vp=new St,zp=new St;let Wp=!1;function GZ(n,e,i,A){if(Wp)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Wp=!0;const o=n._roots,s=e._roots;let a,g=0,I=0;const c=new xe().copy(i).invert();for(let _=0,p=o.length;_<p;_++){qI.setBuffer(o[_]),I=0;const B=ss.getPrimitive();oi(0,qI.float32Array,B),B.applyMatrix4(c);for(let d=0,Q=s.length;d<Q&&(zl.setBuffer(s[d]),a=wr(0,0,i,c,A,g,I,0,0,B),zl.clearBuffer(),I+=s[d].length,!a);d++);if(ss.releasePrimitive(B),qI.clearBuffer(),g+=o[_].length,a)break}return Wp=!1,a}function wr(n,e,i,A,o,s=0,a=0,g=0,I=0,c=null,_=!1){let p,B;_?(p=zl,B=qI):(p=qI,B=zl);const d=p.float32Array,Q=p.uint32Array,y=p.uint16Array,h=B.float32Array,E=B.uint32Array,u=B.uint16Array,f=n*2,m=e*2,M=Sn(f,y),v=Sn(m,u);let b=!1;if(v&&M)_?b=o(Pn(e,E),cr(e*2,u),Pn(n,Q),cr(n*2,y),I,a+e,g,s+n):b=o(Pn(n,Q),cr(n*2,y),Pn(e,E),cr(e*2,u),g,s+n,I,a+e);else if(v){const x=ss.getPrimitive();oi(e,h,x),x.applyMatrix4(i);const w=Cr(n),S=lr(n,Q);oi(w,d,Ja),oi(S,d,Oa);const F=x.intersectsBox(Ja),k=x.intersectsBox(Oa);b=F&&wr(e,w,A,i,o,a,s,I,g+1,x,!_)||k&&wr(e,S,A,i,o,a,s,I,g+1,x,!_),ss.releasePrimitive(x)}else{const x=Cr(e),w=lr(e,E);oi(x,h,Vp),oi(w,h,zp);const S=c.intersectsBox(Vp),F=c.intersectsBox(zp);if(S&&F)b=wr(n,x,i,A,o,s,a,g,I+1,c,_)||wr(n,w,i,A,o,s,a,g,I+1,c,_);else if(S)if(M)b=wr(n,x,i,A,o,s,a,g,I+1,c,_);else{const k=ss.getPrimitive();k.copy(Vp).applyMatrix4(i);const P=Cr(n),z=lr(n,Q);oi(P,d,Ja),oi(z,d,Oa);const ie=k.intersectsBox(Ja),W=k.intersectsBox(Oa);b=ie&&wr(x,P,A,i,o,a,s,I,g+1,k,!_)||W&&wr(x,z,A,i,o,a,s,I,g+1,k,!_),ss.releasePrimitive(k)}else if(F)if(M)b=wr(n,w,i,A,o,s,a,g,I+1,c,_);else{const k=ss.getPrimitive();k.copy(zp).applyMatrix4(i);const P=Cr(n),z=lr(n,Q);oi(P,d,Ja),oi(z,d,Oa);const ie=k.intersectsBox(Ja),W=k.intersectsBox(Oa);b=ie&&wr(w,P,A,i,o,a,s,I,g+1,k,!_)||W&&wr(w,z,A,i,o,a,s,I,g+1,k,!_),ss.releasePrimitive(k)}}return b}const KC=new _n,XP=new St,kZ={strategy:DO,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Bc{static serialize(e,i={}){i={cloneBuffers:!0,...i};const A=e.geometry,o=e._roots,s=e._indirectBuffer,a=A.getIndex();let g;return i.cloneBuffers?g={roots:o.map(I=>I.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:g={roots:o,index:a?a.array:null,indirectBuffer:s},g}static deserialize(e,i,A={}){A={setIndex:!0,indirect:!!e.indirectBuffer,...A};const{index:o,roots:s,indirectBuffer:a}=e,g=new Bc(i,{...A,[Pp]:!0});if(g._roots=s,g._indirectBuffer=a||null,A.setIndex){const I=i.getIndex();if(I===null){const c=new Tt(e.index,1,!1);i.setIndex(c)}else I.array!==o&&(I.array.set(o),I.needsUpdate=!0)}return g}get indirect(){return!!this._indirectBuffer}constructor(e,i={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(i=Object.assign({...kZ,[Pp]:!1},i),i.useSharedArrayBuffer&&!UZ())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,i[Pp]||(eZ(this,i),!e.boundingBox&&i.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new St))),this.resolveTriangleIndex=i.indirect?A=>this._indirectBuffer[A]:A=>A}refit(e=null){return(this.indirect?wZ:_Z)(this,e)}traverse(e,i=0){const A=this._roots[i],o=new Uint32Array(A),s=new Uint16Array(A);a(0);function a(g,I=0){const c=g*2,_=s[c+15]===v_;if(_){const p=o[g+6],B=s[c+14];e(I,_,new Float32Array(A,g*4,6),p,B)}else{const p=g+YI/4,B=o[g+6],d=o[g+7];e(I,_,new Float32Array(A,g*4,6),d)||(a(p,I+1),a(B,I+1))}}}raycast(e,i=Yn,A=0,o=1/0){const s=this._roots,a=this.geometry,g=[],I=i.isMaterial,c=Array.isArray(i),_=a.groups,p=I?i.side:i,B=this.indirect?vZ:dZ;for(let d=0,Q=s.length;d<Q;d++){const y=c?i[_[d].materialIndex].side:p,h=g.length;if(B(this,d,y,e,g,A,o),c){const E=_[d].materialIndex;for(let u=h,f=g.length;u<f;u++)g[u].face.materialIndex=E}}return g}raycastFirst(e,i=Yn,A=0,o=1/0){const s=this._roots,a=this.geometry,g=i.isMaterial,I=Array.isArray(i);let c=null;const _=a.groups,p=g?i.side:i,B=this.indirect?MZ:uZ;for(let d=0,Q=s.length;d<Q;d++){const y=I?i[_[d].materialIndex].side:p,h=B(this,d,y,e,A,o);h!=null&&(c==null||h.distance<c.distance)&&(c=h,I&&(h.face.materialIndex=_[d].materialIndex))}return c}intersectsGeometry(e,i){let A=!1;const o=this._roots,s=this.indirect?RZ:QZ;for(let a=0,g=o.length;a<g&&(A=s(this,a,e,i),!A);a++);return A}shapecast(e){const i=_r.getPrimitive(),A=this.indirect?EZ:lZ;let{boundsTraverseOrder:o,intersectsBounds:s,intersectsRange:a,intersectsTriangle:g}=e;if(a&&g){const p=a;a=(B,d,Q,y,h)=>p(B,d,Q,y,h)?!0:A(B,d,this,g,Q,y,i)}else a||(g?a=(p,B,d,Q)=>A(p,B,this,g,d,Q,i):a=(p,B,d)=>d);let I=!1,c=0;const _=this._roots;for(let p=0,B=_.length;p<B;p++){const d=_[p];if(I=oZ(this,p,s,a,o,c),I)break;c+=d.byteLength}return _r.releasePrimitive(i),I}bvhcast(e,i,A){let{intersectsRanges:o,intersectsTriangles:s}=A;const a=_r.getPrimitive(),g=this.geometry.index,I=this.geometry.attributes.position,c=this.indirect?Q=>{const y=this.resolveTriangleIndex(Q);Bi(a,y*3,g,I)}:Q=>{Bi(a,Q*3,g,I)},_=_r.getPrimitive(),p=e.geometry.index,B=e.geometry.attributes.position,d=e.indirect?Q=>{const y=e.resolveTriangleIndex(Q);Bi(_,y*3,p,B)}:Q=>{Bi(_,Q*3,p,B)};if(s){const Q=(y,h,E,u,f,m,M,v)=>{for(let b=E,x=E+u;b<x;b++){d(b),_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let w=y,S=y+h;w<S;w++)if(c(w),a.needsUpdate=!0,s(a,_,w,b,f,m,M,v))return!0}return!1};if(o){const y=o;o=function(h,E,u,f,m,M,v,b){return y(h,E,u,f,m,M,v,b)?!0:Q(h,E,u,f,m,M,v,b)}}else o=Q}return GZ(this,e,i,o)}intersectsBox(e,i){return KC.set(e.min,e.max,i),KC.needsUpdate=!0,this.shapecast({intersectsBounds:A=>KC.intersectsBox(A),intersectsTriangle:A=>KC.intersectsTriangle(A)})}intersectsSphere(e){return this.shapecast({intersectsBounds:i=>e.intersectsBox(i),intersectsTriangle:i=>i.intersectsSphere(e)})}closestPointToGeometry(e,i,A={},o={},s=0,a=1/0){return(this.indirect?TZ:SZ)(this,e,i,A,o,s,a)}closestPointToPoint(e,i={},A=0,o=1/0){return sZ(this,e,i,A,o)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(A=>{oi(0,new Float32Array(A),XP),e.union(XP)}),e}}function ZP(n,e,i){return n===null?null:(n.point.applyMatrix4(e.matrixWorld),n.distance=n.point.distanceTo(i.ray.origin),n.object=e,n)}const HZ=parseInt(Rs)>=166,JC=new Hg,$P=new T,e2=new xe,PZ=Gt.prototype.raycast,KZ=nX.prototype.raycast,A2=new T,Fi=new Gt,OC=[];function _7(n,e){this.isBatchedMesh?JZ.call(this,n,e):OZ.call(this,n,e)}function JZ(n,e){if(this.boundsTrees){const i=this.boundsTrees,A=this._drawInfo||this._instanceInfo,o=this._drawRanges||this._geometryInfo,s=this.matrixWorld;Fi.material=this.material,Fi.geometry=this.geometry;const a=Fi.geometry.boundsTree,g=Fi.geometry.drawRange;Fi.geometry.boundingSphere===null&&(Fi.geometry.boundingSphere=new wi);for(let I=0,c=A.length;I<c;I++){if(!this.getVisibleAt(I))continue;const _=A[I].geometryIndex;if(Fi.geometry.boundsTree=i[_],this.getMatrixAt(I,Fi.matrixWorld).premultiply(s),!Fi.geometry.boundsTree){this.getBoundingBoxAt(_,Fi.geometry.boundingBox),this.getBoundingSphereAt(_,Fi.geometry.boundingSphere);const p=o[_];Fi.geometry.setDrawRange(p.start,p.count)}Fi.raycast(n,OC);for(let p=0,B=OC.length;p<B;p++){const d=OC[p];d.object=this,d.batchId=I,e.push(d)}OC.length=0}Fi.geometry.boundsTree=a,Fi.geometry.drawRange=g,Fi.material=null,Fi.geometry=null}else KZ.call(this,n,e)}function OZ(n,e){if(this.geometry.boundsTree){if(this.material===void 0)return;e2.copy(this.matrixWorld).invert(),JC.copy(n.ray).applyMatrix4(e2),A2.setFromMatrixScale(this.matrixWorld),$P.copy(JC.direction).multiply(A2);const i=$P.length(),A=n.near/i,o=n.far/i,s=this.geometry.boundsTree;if(n.firstHitOnly===!0){const a=ZP(s.raycastFirst(JC,this.material,A,o),this,n);a&&e.push(a)}else{const a=s.raycast(JC,this.material,A,o);for(let g=0,I=a.length;g<I;g++){const c=ZP(a[g],this,n);c&&e.push(c)}}}else PZ.call(this,n,e)}function p7(n={}){return this.boundsTree=new Bc(this,n),this.boundsTree}function B7(){this.boundsTree=null}function E7(n=-1,e={}){if(!HZ)throw new Error("BatchedMesh: Three r166+ is required to compute bounds trees.");e.indirect&&console.warn('"Indirect" is set to false because it is not supported for BatchedMesh.'),e={...e,indirect:!1,range:null};const i=this._drawRanges||this._geometryInfo,A=this._geometryCount;this.boundsTrees||(this.boundsTrees=new Array(A).fill(null));const o=this.boundsTrees;for(;o.length<A;)o.push(null);if(n<0){for(let s=0;s<A;s++)e.range=i[s],o[s]=new Bc(this.geometry,e);return o}else return n<i.length&&(e.range=i[n],o[n]=new Bc(this.geometry,e)),o[n]||null}function d7(n=-1){n<0?this.boundsTrees.fill(null):n<this.boundsTree.length&&(this.boundsTrees[n]=null)}const yh=parseInt(Rs.replace(/\D+/g,"")),YZ=yh>=125?"uv1":"uv2";function t2(n,e){if(e===_j)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===HE||e===$J){let i=n.getIndex();if(i===null){const a=[],g=n.getAttribute("position");if(g!==void 0){for(let I=0;I<g.count;I++)a.push(I);n.setIndex(a),i=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const A=i.count-2,o=[];if(i)if(e===HE)for(let a=1;a<=A;a++)o.push(i.getX(0)),o.push(i.getX(a)),o.push(i.getX(a+1));else for(let a=0;a<A;a++)a%2===0?(o.push(i.getX(a)),o.push(i.getX(a+1)),o.push(i.getX(a+2))):(o.push(i.getX(a+2)),o.push(i.getX(a+1)),o.push(i.getX(a)));o.length/3!==A&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(o),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ar=Uint8Array,ps=Uint16Array,id=Uint32Array,RO=new ar([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),NO=new ar([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qZ=new ar([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xO=function(n,e){for(var i=new ps(31),A=0;A<31;++A)i[A]=e+=1<<n[A-1];for(var o=new id(i[30]),A=1;A<30;++A)for(var s=i[A];s<i[A+1];++s)o[s]=s-i[A]<<5|A;return[i,o]},LO=xO(RO,2),FO=LO[0],jZ=LO[1];FO[28]=258,jZ[258]=28;var VZ=xO(NO,0),zZ=VZ[0],nd=new ps(32768);for(var Lt=0;Lt<32768;++Lt){var As=(Lt&43690)>>>1|(Lt&21845)<<1;As=(As&52428)>>>2|(As&13107)<<2,As=(As&61680)>>>4|(As&3855)<<4,nd[Lt]=((As&65280)>>>8|(As&255)<<8)>>>1}var jI=function(n,e,i){for(var A=n.length,o=0,s=new ps(e);o<A;++o)++s[n[o]-1];var a=new ps(e);for(o=0;o<e;++o)a[o]=a[o-1]+s[o-1]<<1;var g;if(i){g=new ps(1<<e);var I=15-e;for(o=0;o<A;++o)if(n[o])for(var c=o<<4|n[o],_=e-n[o],p=a[n[o]-1]++<<_,B=p|(1<<_)-1;p<=B;++p)g[nd[p]>>>I]=c}else for(g=new ps(A),o=0;o<A;++o)n[o]&&(g[o]=nd[a[n[o]-1]++]>>>15-n[o]);return g},vc=new ar(288);for(var Lt=0;Lt<144;++Lt)vc[Lt]=8;for(var Lt=144;Lt<256;++Lt)vc[Lt]=9;for(var Lt=256;Lt<280;++Lt)vc[Lt]=7;for(var Lt=280;Lt<288;++Lt)vc[Lt]=8;var TO=new ar(32);for(var Lt=0;Lt<32;++Lt)TO[Lt]=5;var WZ=jI(vc,9,1),XZ=jI(TO,5,1),Xp=function(n){for(var e=n[0],i=1;i<n.length;++i)n[i]>e&&(e=n[i]);return e},Sr=function(n,e,i){var A=e/8|0;return(n[A]|n[A+1]<<8)>>(e&7)&i},Zp=function(n,e){var i=e/8|0;return(n[i]|n[i+1]<<8|n[i+2]<<16)>>(e&7)},ZZ=function(n){return(n/8|0)+(n&7&&1)},$Z=function(n,e,i){(i==null||i>n.length)&&(i=n.length);var A=new(n instanceof ps?ps:n instanceof id?id:ar)(i-e);return A.set(n.subarray(e,i)),A},e9=function(n,e,i){var A=n.length;if(!A||i&&!i.l&&A<5)return e||new ar(0);var o=!e||i,s=!i||i.i;i||(i={}),e||(e=new ar(A*3));var a=function(Ge){var be=e.length;if(Ge>be){var oA=new ar(Math.max(be*2,Ge));oA.set(e),e=oA}},g=i.f||0,I=i.p||0,c=i.b||0,_=i.l,p=i.d,B=i.m,d=i.n,Q=A*8;do{if(!_){i.f=g=Sr(n,I,1);var y=Sr(n,I+1,3);if(I+=3,y)if(y==1)_=WZ,p=XZ,B=9,d=5;else if(y==2){var f=Sr(n,I,31)+257,m=Sr(n,I+10,15)+4,M=f+Sr(n,I+5,31)+1;I+=14;for(var v=new ar(M),b=new ar(19),x=0;x<m;++x)b[qZ[x]]=Sr(n,I+x*3,7);I+=m*3;for(var w=Xp(b),S=(1<<w)-1,F=jI(b,w,1),x=0;x<M;){var k=F[Sr(n,I,S)];I+=k&15;var h=k>>>4;if(h<16)v[x++]=h;else{var P=0,z=0;for(h==16?(z=3+Sr(n,I,3),I+=2,P=v[x-1]):h==17?(z=3+Sr(n,I,7),I+=3):h==18&&(z=11+Sr(n,I,127),I+=7);z--;)v[x++]=P}}var ie=v.subarray(0,f),W=v.subarray(f);B=Xp(ie),d=Xp(W),_=jI(ie,B,1),p=jI(W,d,1)}else throw"invalid block type";else{var h=ZZ(I)+4,E=n[h-4]|n[h-3]<<8,u=h+E;if(u>A){if(s)throw"unexpected EOF";break}o&&a(c+E),e.set(n.subarray(h,u),c),i.b=c+=E,i.p=I=u*8;continue}if(I>Q){if(s)throw"unexpected EOF";break}}o&&a(c+131072);for(var de=(1<<B)-1,H=(1<<d)-1,oe=I;;oe=I){var P=_[Zp(n,I)&de],_e=P>>>4;if(I+=P&15,I>Q){if(s)throw"unexpected EOF";break}if(!P)throw"invalid length/literal";if(_e<256)e[c++]=_e;else if(_e==256){oe=I,_=null;break}else{var ve=_e-254;if(_e>264){var x=_e-257,qe=RO[x];ve=Sr(n,I,(1<<qe)-1)+FO[x],I+=qe}var vA=p[Zp(n,I)&H],ae=vA>>>4;if(!vA)throw"invalid distance";I+=vA&15;var W=zZ[ae];if(ae>3){var qe=NO[ae];W+=Zp(n,I)&(1<<qe)-1,I+=qe}if(I>Q){if(s)throw"unexpected EOF";break}o&&a(c+131072);for(var fe=c+ve;c<fe;c+=4)e[c]=e[c-W],e[c+1]=e[c+1-W],e[c+2]=e[c+2-W],e[c+3]=e[c+3-W];c=fe}}i.l=_,i.p=oe,i.b=c,_&&(g=1,i.m=B,i.d=p,i.n=d)}while(!g);return c==e.length?e:$Z(e,0,c)},A9=new ar(0),t9=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function i9(n,e){return e9((t9(n),n.subarray(2,-4)),e)}var n9=typeof TextDecoder<"u"&&new TextDecoder,r9=0;try{n9.decode(A9,{stream:!0}),r9=1}catch{}class h7 extends Gt{constructor(e,i={}){super(e),this.isWater=!0;const A=this,o=i.textureWidth!==void 0?i.textureWidth:512,s=i.textureHeight!==void 0?i.textureHeight:512,a=i.clipBias!==void 0?i.clipBias:0,g=i.alpha!==void 0?i.alpha:1,I=i.time!==void 0?i.time:0,c=i.waterNormals!==void 0?i.waterNormals:null,_=i.sunDirection!==void 0?i.sunDirection:new T(.70707,.70707,0),p=new Ue(i.sunColor!==void 0?i.sunColor:16777215),B=new Ue(i.waterColor!==void 0?i.waterColor:8355711),d=i.eye!==void 0?i.eye:new T(0,0,0),Q=i.distortionScale!==void 0?i.distortionScale:20,y=i.side!==void 0?i.side:Yn,h=i.fog!==void 0?i.fog:!1,E=new Wr,u=new T,f=new T,m=new T,M=new xe,v=new T(0,0,-1),b=new fA,x=new T,w=new T,S=new fA,F=new xe,k=new Di,P=new rn(o,s),z={uniforms:Ng.merge([Re.fog,Re.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new xe},sunColor:{value:new Ue(8355711)},sunDirection:{value:new T(.70707,.70707,0)},eye:{value:new T},waterColor:{value:new Ue(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <${parseInt(Rs.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>	
				}`},ie=new Oi({fragmentShader:z.fragmentShader,vertexShader:z.vertexShader,uniforms:Ng.clone(z.uniforms),lights:!0,side:y,fog:h});ie.uniforms.mirrorSampler.value=P.texture,ie.uniforms.textureMatrix.value=F,ie.uniforms.alpha.value=g,ie.uniforms.time.value=I,ie.uniforms.normalSampler.value=c,ie.uniforms.sunColor.value=p,ie.uniforms.waterColor.value=B,ie.uniforms.sunDirection.value=_,ie.uniforms.distortionScale.value=Q,ie.uniforms.eye.value=d,A.material=ie,A.onBeforeRender=function(W,de,H){if(f.setFromMatrixPosition(A.matrixWorld),m.setFromMatrixPosition(H.matrixWorld),M.extractRotation(A.matrixWorld),u.set(0,0,1),u.applyMatrix4(M),x.subVectors(f,m),x.dot(u)>0)return;x.reflect(u).negate(),x.add(f),M.extractRotation(H.matrixWorld),v.set(0,0,-1),v.applyMatrix4(M),v.add(m),w.subVectors(f,v),w.reflect(u).negate(),w.add(f),k.position.copy(x),k.up.set(0,1,0),k.up.applyMatrix4(M),k.up.reflect(u),k.lookAt(w),k.far=H.far,k.updateMatrixWorld(),k.projectionMatrix.copy(H.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(k.projectionMatrix),F.multiply(k.matrixWorldInverse),E.setFromNormalAndCoplanarPoint(u,f),E.applyMatrix4(k.matrixWorldInverse),b.set(E.normal.x,E.normal.y,E.normal.z,E.constant);const oe=k.projectionMatrix;S.x=(Math.sign(b.x)+oe.elements[8])/oe.elements[0],S.y=(Math.sign(b.y)+oe.elements[9])/oe.elements[5],S.z=-1,S.w=(1+oe.elements[10])/oe.elements[14],b.multiplyScalar(2/b.dot(S)),oe.elements[2]=b.x,oe.elements[6]=b.y,oe.elements[10]=b.z+1-a,oe.elements[14]=b.w,d.setFromMatrixPosition(H.matrixWorld);const _e=W.getRenderTarget(),ve=W.xr.enabled,qe=W.shadowMap.autoUpdate;A.visible=!1,W.xr.enabled=!1,W.shadowMap.autoUpdate=!1,W.setRenderTarget(P),W.state.buffers.depth.setMask(!0),W.autoClear===!1&&W.clear(),W.render(de,k),A.visible=!0,W.xr.enabled=ve,W.shadowMap.autoUpdate=qe,W.setRenderTarget(_e);const vA=H.viewport;vA!==void 0&&W.state.viewport(vA)}}}var o9=Object.defineProperty,s9=(n,e,i)=>e in n?o9(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,UO=(n,e,i)=>(s9(n,typeof e!="symbol"?e+"":e,i),i);const El={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new T},up:{value:new T(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${yh>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},GO=new Oi({name:"SkyShader",fragmentShader:El.fragmentShader,vertexShader:El.vertexShader,uniforms:Ng.clone(El.uniforms),side:pi,depthWrite:!1});class kO extends Gt{constructor(){super(new Pg(1,1,1),GO)}}UO(kO,"SkyShader",El);UO(kO,"material",GO);function Lg(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let i=0,A=n.length;i<A;i++)e+=String.fromCharCode(n[i]);try{return decodeURIComponent(escape(e))}catch{return e}}const ia="srgb",Fo="srgb-linear",i2=3001,a9=3e3;class u7 extends ua{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new l9(i)}),this.register(function(i){return new _9(i)}),this.register(function(i){return new y9(i)}),this.register(function(i){return new m9(i)}),this.register(function(i){return new D9(i)}),this.register(function(i){return new B9(i)}),this.register(function(i){return new E9(i)}),this.register(function(i){return new d9(i)}),this.register(function(i){return new h9(i)}),this.register(function(i){return new C9(i)}),this.register(function(i){return new u9(i)}),this.register(function(i){return new p9(i)}),this.register(function(i){return new f9(i)}),this.register(function(i){return new Q9(i)}),this.register(function(i){return new I9(i)}),this.register(function(i){return new S9(i)}),this.register(function(i){return new w9(i)})}load(e,i,A,o){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=dg.extractUrlBase(e);a=dg.resolveURL(c,this.path)}else a=dg.extractUrlBase(e);this.manager.itemStart(e);const g=function(c){o?o(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},I=new Eh(this.manager);I.setPath(this.path),I.setResponseType("arraybuffer"),I.setRequestHeader(this.requestHeader),I.setWithCredentials(this.withCredentials),I.load(e,function(c){try{s.parse(c,a,function(_){i(_),s.manager.itemEnd(e)},g)}catch(_){g(_)}},A,g)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,i,A,o){let s;const a={},g={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Lg(new Uint8Array(e.slice(0,4)))===HO){try{a[YA.KHR_BINARY_GLTF]=new v9(e)}catch(_){o&&o(_);return}s=JSON.parse(a[YA.KHR_BINARY_GLTF].content)}else s=JSON.parse(Lg(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const I=new P9(s,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});I.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const _=this.pluginCallbacks[c](I);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),g[_.name]=_,a[_.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const _=s.extensionsUsed[c],p=s.extensionsRequired||[];switch(_){case YA.KHR_MATERIALS_UNLIT:a[_]=new c9;break;case YA.KHR_DRACO_MESH_COMPRESSION:a[_]=new b9(s,this.dracoLoader);break;case YA.KHR_TEXTURE_TRANSFORM:a[_]=new M9;break;case YA.KHR_MESH_QUANTIZATION:a[_]=new R9;break;default:p.indexOf(_)>=0&&g[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}I.setExtensions(a),I.setPlugins(g),I.parse(A,o)}parseAsync(e,i){const A=this;return new Promise(function(o,s){A.parse(e,i,o,s)})}}function g9(){let n={};return{get:function(e){return n[e]},add:function(e,i){n[e]=i},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const YA={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I9{constructor(e){this.parser=e,this.name=YA.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,i=this.parser.json.nodes||[];for(let A=0,o=i.length;A<o;A++){const s=i[A];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const i=this.parser,A="light:"+e;let o=i.cache.get(A);if(o)return o;const s=i.json,I=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const _=new Ue(16777215);I.color!==void 0&&_.setRGB(I.color[0],I.color[1],I.color[2],Fo);const p=I.range!==void 0?I.range:0;switch(I.type){case"directional":c=new mO(_),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new YE(_),c.distance=p;break;case"spot":c=new yO(_),c.distance=p,I.spot=I.spot||{},I.spot.innerConeAngle=I.spot.innerConeAngle!==void 0?I.spot.innerConeAngle:0,I.spot.outerConeAngle=I.spot.outerConeAngle!==void 0?I.spot.outerConeAngle:Math.PI/4,c.angle=I.spot.outerConeAngle,c.penumbra=1-I.spot.innerConeAngle/I.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+I.type)}return c.position.set(0,0,0),c.decay=2,yo(c,I),I.intensity!==void 0&&(c.intensity=I.intensity),c.name=i.createUniqueName(I.name||"light_"+e),o=Promise.resolve(c),i.cache.add(A,o),o}getDependency(e,i){if(e==="light")return this._loadLight(i)}createNodeAttachment(e){const i=this,A=this.parser,s=A.json.nodes[e],g=(s.extensions&&s.extensions[this.name]||{}).light;return g===void 0?null:this._loadLight(g).then(function(I){return A._getNodeRef(i.cache,g,I)})}}class c9{constructor(){this.name=YA.KHR_MATERIALS_UNLIT}getMaterialType(){return Mo}extendParams(e,i,A){const o=[];e.color=new Ue(1,1,1),e.opacity=1;const s=i.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fo),e.opacity=a[3]}s.baseColorTexture!==void 0&&o.push(A.assignTexture(e,"map",s.baseColorTexture,ia))}return Promise.all(o)}}class C9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name].emissiveStrength;return s!==void 0&&(i.emissiveIntensity=s),Promise.resolve()}}class l9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(i.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(A.assignTexture(i,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(A.assignTexture(i,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(A.assignTexture(i,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const g=a.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new iA(g,g)}return Promise.all(s)}}class _9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_DISPERSION}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return i.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class p9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];return a.iridescenceFactor!==void 0&&(i.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(A.assignTexture(i,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(i.iridescenceIOR=a.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(A.assignTexture(i,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class B9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_SHEEN}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[];i.sheenColor=new Ue(0,0,0),i.sheenRoughness=0,i.sheen=1;const a=o.extensions[this.name];if(a.sheenColorFactor!==void 0){const g=a.sheenColorFactor;i.sheenColor.setRGB(g[0],g[1],g[2],Fo)}return a.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(A.assignTexture(i,"sheenColorMap",a.sheenColorTexture,ia)),a.sheenRoughnessTexture!==void 0&&s.push(A.assignTexture(i,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class E9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(i.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(A.assignTexture(i,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class d9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_VOLUME}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];i.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(A.assignTexture(i,"thicknessMap",a.thicknessTexture)),i.attenuationDistance=a.attenuationDistance||1/0;const g=a.attenuationColor||[1,1,1];return i.attenuationColor=new Ue().setRGB(g[0],g[1],g[2],Fo),Promise.all(s)}}class h9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_IOR}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return i.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class u9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_SPECULAR}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];i.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(A.assignTexture(i,"specularIntensityMap",a.specularTexture));const g=a.specularColorFactor||[1,1,1];return i.specularColor=new Ue().setRGB(g[0],g[1],g[2],Fo),a.specularColorTexture!==void 0&&s.push(A.assignTexture(i,"specularColorMap",a.specularColorTexture,ia)),Promise.all(s)}}class Q9{constructor(e){this.parser=e,this.name=YA.EXT_MATERIALS_BUMP}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];return i.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(A.assignTexture(i,"bumpMap",a.bumpTexture)),Promise.all(s)}}class f9{constructor(e){this.parser=e,this.name=YA.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const A=this.parser.json.materials[e];return!A.extensions||!A.extensions[this.name]?null:oo}extendMaterialParams(e,i){const A=this.parser,o=A.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],a=o.extensions[this.name];return a.anisotropyStrength!==void 0&&(i.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(i.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(A.assignTexture(i,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class y9{constructor(e){this.parser=e,this.name=YA.KHR_TEXTURE_BASISU}loadTexture(e){const i=this.parser,A=i.json,o=A.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const s=o.extensions[this.name],a=i.options.ktx2Loader;if(!a){if(A.extensionsRequired&&A.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(e,s.source,a)}}class m9{constructor(e){this.parser=e,this.name=YA.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const i=this.name,A=this.parser,o=A.json,s=o.textures[e];if(!s.extensions||!s.extensions[i])return null;const a=s.extensions[i],g=o.images[a.source];let I=A.textureLoader;if(g.uri){const c=A.options.manager.getHandler(g.uri);c!==null&&(I=c)}return this.detectSupport().then(function(c){if(c)return A.loadTextureImage(e,a.source,I);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return A.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const i=new Image;i.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",i.onload=i.onerror=function(){e(i.height===1)}})),this.isSupported}}class D9{constructor(e){this.parser=e,this.name=YA.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const i=this.name,A=this.parser,o=A.json,s=o.textures[e];if(!s.extensions||!s.extensions[i])return null;const a=s.extensions[i],g=o.images[a.source];let I=A.textureLoader;if(g.uri){const c=A.options.manager.getHandler(g.uri);c!==null&&(I=c)}return this.detectSupport().then(function(c){if(c)return A.loadTextureImage(e,a.source,I);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return A.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const i=new Image;i.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",i.onload=i.onerror=function(){e(i.height===1)}})),this.isSupported}}class S9{constructor(e){this.name=YA.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const i=this.parser.json,A=i.bufferViews[e];if(A.extensions&&A.extensions[this.name]){const o=A.extensions[this.name],s=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(g){const I=o.byteOffset||0,c=o.byteLength||0,_=o.count,p=o.byteStride,B=new Uint8Array(g,I,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(_,p,B,o.mode,o.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(_*p);return a.decodeGltfBuffer(new Uint8Array(d),_,p,B,o.mode,o.filter),d})})}else return null}}class w9{constructor(e){this.name=YA.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const i=this.parser.json,A=i.nodes[e];if(!A.extensions||!A.extensions[this.name]||A.mesh===void 0)return null;const o=i.meshes[A.mesh];for(const c of o.primitives)if(c.mode!==nr.TRIANGLES&&c.mode!==nr.TRIANGLE_STRIP&&c.mode!==nr.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=A.extensions[this.name].attributes,g=[],I={};for(const c in a)g.push(this.parser.getDependency("accessor",a[c]).then(_=>(I[c]=_,I[c])));return g.length<1?null:(g.push(this.parser.createNodeMesh(e)),Promise.all(g).then(c=>{const _=c.pop(),p=_.isGroup?_.children:[_],B=c[0].count,d=[];for(const Q of p){const y=new xe,h=new T,E=new Ir,u=new T(1,1,1),f=new BO(Q.geometry,Q.material,B);for(let m=0;m<B;m++)I.TRANSLATION&&h.fromBufferAttribute(I.TRANSLATION,m),I.ROTATION&&E.fromBufferAttribute(I.ROTATION,m),I.SCALE&&u.fromBufferAttribute(I.SCALE,m),f.setMatrixAt(m,y.compose(h,E,u));for(const m in I)if(m==="_COLOR_0"){const M=I[m];f.instanceColor=new JE(M.array,M.itemSize,M.normalized)}else m!=="TRANSLATION"&&m!=="ROTATION"&&m!=="SCALE"&&Q.geometry.setAttribute(m,I[m]);ft.prototype.copy.call(f,Q),this.parser.assignFinalMaterial(f),d.push(f)}return _.isGroup?(_.clear(),_.add(...d),_):d[0]}))}}const HO="glTF",mI=12,n2={JSON:1313821514,BIN:5130562};class v9{constructor(e){this.name=YA.KHR_BINARY_GLTF,this.content=null,this.body=null;const i=new DataView(e,0,mI);if(this.header={magic:Lg(new Uint8Array(e.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==HO)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const A=this.header.length-mI,o=new DataView(e,mI);let s=0;for(;s<A;){const a=o.getUint32(s,!0);s+=4;const g=o.getUint32(s,!0);if(s+=4,g===n2.JSON){const I=new Uint8Array(e,mI+s,a);this.content=Lg(I)}else if(g===n2.BIN){const I=mI+s;this.body=e.slice(I,I+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b9{constructor(e,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=YA.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(e,i){const A=this.json,o=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,g={},I={},c={};for(const _ in a){const p=rd[_]||_.toLowerCase();g[p]=a[_]}for(const _ in e.attributes){const p=rd[_]||_.toLowerCase();if(a[_]!==void 0){const B=A.accessors[e.attributes[_]],d=hg[B.componentType];c[p]=d.name,I[p]=B.normalized===!0}}return i.getDependency("bufferView",s).then(function(_){return new Promise(function(p,B){o.decodeDracoFile(_,function(d){for(const Q in d.attributes){const y=d.attributes[Q],h=I[Q];h!==void 0&&(y.normalized=h)}p(d)},g,c,Fo,B)})})}}class M9{constructor(){this.name=YA.KHR_TEXTURE_TRANSFORM}extendTexture(e,i){return(i.texCoord===void 0||i.texCoord===e.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0||(e=e.clone(),i.texCoord!==void 0&&(e.channel=i.texCoord),i.offset!==void 0&&e.offset.fromArray(i.offset),i.rotation!==void 0&&(e.rotation=i.rotation),i.scale!==void 0&&e.repeat.fromArray(i.scale),e.needsUpdate=!0),e}}class R9{constructor(){this.name=YA.KHR_MESH_QUANTIZATION}}class PO extends Sc{constructor(e,i,A,o){super(e,i,A,o)}copySampleValue_(e){const i=this.resultBuffer,A=this.sampleValues,o=this.valueSize,s=e*o*3+o;for(let a=0;a!==o;a++)i[a]=A[s+a];return i}interpolate_(e,i,A,o){const s=this.resultBuffer,a=this.sampleValues,g=this.valueSize,I=g*2,c=g*3,_=o-i,p=(A-i)/_,B=p*p,d=B*p,Q=e*c,y=Q-c,h=-2*d+3*B,E=d-B,u=1-h,f=E-B+p;for(let m=0;m!==g;m++){const M=a[y+m+g],v=a[y+m+I]*_,b=a[Q+m+g],x=a[Q+m]*_;s[m]=u*M+f*v+h*b+E*x}return s}}const N9=new Ir;class x9 extends PO{interpolate_(e,i,A,o){const s=super.interpolate_(e,i,A,o);return N9.fromArray(s).normalize().toArray(s),s}}const nr={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hg={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},r2={9728:An,9729:en,9984:JJ,9985:gl,9986:bI,9987:vo},o2={33071:eo,33648:Jl,10497:Ho},$p={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...yh>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L9={CUBICSPLINE:void 0,LINEAR:_c,STEP:lc},eB={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F9(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Bh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),n.DefaultMaterial}function qs(n,e,i){for(const A in i.extensions)n[A]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[A]=i.extensions[A])}function yo(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T9(n,e,i){let A=!1,o=!1,s=!1;for(let c=0,_=e.length;c<_;c++){const p=e[c];if(p.POSITION!==void 0&&(A=!0),p.NORMAL!==void 0&&(o=!0),p.COLOR_0!==void 0&&(s=!0),A&&o&&s)break}if(!A&&!o&&!s)return Promise.resolve(n);const a=[],g=[],I=[];for(let c=0,_=e.length;c<_;c++){const p=e[c];if(A){const B=p.POSITION!==void 0?i.getDependency("accessor",p.POSITION):n.attributes.position;a.push(B)}if(o){const B=p.NORMAL!==void 0?i.getDependency("accessor",p.NORMAL):n.attributes.normal;g.push(B)}if(s){const B=p.COLOR_0!==void 0?i.getDependency("accessor",p.COLOR_0):n.attributes.color;I.push(B)}}return Promise.all([Promise.all(a),Promise.all(g),Promise.all(I)]).then(function(c){const _=c[0],p=c[1],B=c[2];return A&&(n.morphAttributes.position=_),o&&(n.morphAttributes.normal=p),s&&(n.morphAttributes.color=B),n.morphTargetsRelative=!0,n})}function U9(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let i=0,A=e.weights.length;i<A;i++)n.morphTargetInfluences[i]=e.weights[i];if(e.extras&&Array.isArray(e.extras.targetNames)){const i=e.extras.targetNames;if(n.morphTargetInfluences.length===i.length){n.morphTargetDictionary={};for(let A=0,o=i.length;A<o;A++)n.morphTargetDictionary[i[A]]=A}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function G9(n){let e;const i=n.extensions&&n.extensions[YA.KHR_DRACO_MESH_COMPRESSION];if(i?e="draco:"+i.bufferView+":"+i.indices+":"+AB(i.attributes):e=n.indices+":"+AB(n.attributes)+":"+n.mode,n.targets!==void 0)for(let A=0,o=n.targets.length;A<o;A++)e+=":"+AB(n.targets[A]);return e}function AB(n){let e="";const i=Object.keys(n).sort();for(let A=0,o=i.length;A<o;A++)e+=i[A]+":"+n[i[A]]+";";return e}function od(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k9(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const H9=new xe;class P9{constructor(e={},i={}){this.json=e,this.extensions={},this.plugins={},this.options=i,this.cache=new g9,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let A=!1,o=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(A=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,o=navigator.userAgent.indexOf("Firefox")>-1,s=o?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||A||o&&s<98?this.textureLoader=new fO(this.options.manager):this.textureLoader=new wX(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,i){const A=this,o=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([A.getDependencies("scene"),A.getDependencies("animation"),A.getDependencies("camera")])}).then(function(a){const g={scene:a[0][o.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:o.asset,parser:A,userData:{}};return qs(s,g,o),yo(g,o),Promise.all(A._invokeAll(function(I){return I.afterRoot&&I.afterRoot(g)})).then(function(){for(const I of g.scenes)I.updateMatrixWorld();e(g)})}).catch(i)}_markDefs(){const e=this.json.nodes||[],i=this.json.skins||[],A=this.json.meshes||[];for(let o=0,s=i.length;o<s;o++){const a=i[o].joints;for(let g=0,I=a.length;g<I;g++)e[a[g]].isBone=!0}for(let o=0,s=e.length;o<s;o++){const a=e[o];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(A[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,i){i!==void 0&&(e.refs[i]===void 0&&(e.refs[i]=e.uses[i]=0),e.refs[i]++)}_getNodeRef(e,i,A){if(e.refs[i]<=1)return A;const o=A.clone(),s=(a,g)=>{const I=this.associations.get(a);I!=null&&this.associations.set(g,I);for(const[c,_]of a.children.entries())s(_,g.children[c])};return s(A,o),o.name+="_instance_"+e.uses[i]++,o}_invokeOne(e){const i=Object.values(this.plugins);i.push(this);for(let A=0;A<i.length;A++){const o=e(i[A]);if(o)return o}return null}_invokeAll(e){const i=Object.values(this.plugins);i.unshift(this);const A=[];for(let o=0;o<i.length;o++){const s=e(i[o]);s&&A.push(s)}return A}getDependency(e,i){const A=e+":"+i;let o=this.cache.get(A);if(!o){switch(e){case"scene":o=this.loadScene(i);break;case"node":o=this._invokeOne(function(s){return s.loadNode&&s.loadNode(i)});break;case"mesh":o=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(i)});break;case"accessor":o=this.loadAccessor(i);break;case"bufferView":o=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(i)});break;case"buffer":o=this.loadBuffer(i);break;case"material":o=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(i)});break;case"texture":o=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(i)});break;case"skin":o=this.loadSkin(i);break;case"animation":o=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(i)});break;case"camera":o=this.loadCamera(i);break;default:if(o=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,i)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(A,o)}return o}getDependencies(e){let i=this.cache.get(e);if(!i){const A=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];i=Promise.all(o.map(function(s,a){return A.getDependency(e,a)})),this.cache.add(e,i)}return i}loadBuffer(e){const i=this.json.buffers[e],A=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&e===0)return Promise.resolve(this.extensions[YA.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(s,a){A.load(dg.resolveURL(i.uri,o.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(e){const i=this.json.bufferViews[e];return this.getDependency("buffer",i.buffer).then(function(A){const o=i.byteLength||0,s=i.byteOffset||0;return A.slice(s,s+o)})}loadAccessor(e){const i=this,A=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const a=$p[o.type],g=hg[o.componentType],I=o.normalized===!0,c=new g(o.count*a);return Promise.resolve(new Tt(c,a,I))}const s=[];return o.bufferView!==void 0?s.push(this.getDependency("bufferView",o.bufferView)):s.push(null),o.sparse!==void 0&&(s.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(s).then(function(a){const g=a[0],I=$p[o.type],c=hg[o.componentType],_=c.BYTES_PER_ELEMENT,p=_*I,B=o.byteOffset||0,d=o.bufferView!==void 0?A.bufferViews[o.bufferView].byteStride:void 0,Q=o.normalized===!0;let y,h;if(d&&d!==p){const E=Math.floor(B/d),u="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+E+":"+o.count;let f=i.cache.get(u);f||(y=new c(g,E*d,o.count*d/_),f=new _O(y,d/_),i.cache.add(u,f)),h=new Ro(f,I,B%d/_,Q)}else g===null?y=new c(o.count*I):y=new c(g,B,o.count*I),h=new Tt(y,I,Q);if(o.sparse!==void 0){const E=$p.SCALAR,u=hg[o.sparse.indices.componentType],f=o.sparse.indices.byteOffset||0,m=o.sparse.values.byteOffset||0,M=new u(a[1],f,o.sparse.count*E),v=new c(a[2],m,o.sparse.count*I);g!==null&&(h=new Tt(h.array.slice(),h.itemSize,h.normalized));for(let b=0,x=M.length;b<x;b++){const w=M[b];if(h.setX(w,v[b*I]),I>=2&&h.setY(w,v[b*I+1]),I>=3&&h.setZ(w,v[b*I+2]),I>=4&&h.setW(w,v[b*I+3]),I>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(e){const i=this.json,A=this.options,s=i.textures[e].source,a=i.images[s];let g=this.textureLoader;if(a.uri){const I=A.manager.getHandler(a.uri);I!==null&&(g=I)}return this.loadTextureImage(e,s,g)}loadTextureImage(e,i,A){const o=this,s=this.json,a=s.textures[e],g=s.images[i],I=(g.uri||g.bufferView)+":"+a.sampler;if(this.textureCache[I])return this.textureCache[I];const c=this.loadImageSource(i,A).then(function(_){_.flipY=!1,_.name=a.name||g.name||"",_.name===""&&typeof g.uri=="string"&&g.uri.startsWith("data:image/")===!1&&(_.name=g.uri);const B=(s.samplers||{})[a.sampler]||{};return _.magFilter=r2[B.magFilter]||en,_.minFilter=r2[B.minFilter]||vo,_.wrapS=o2[B.wrapS]||Ho,_.wrapT=o2[B.wrapT]||Ho,o.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[I]=c,c}loadImageSource(e,i){const A=this,o=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const a=o.images[e],g=self.URL||self.webkitURL;let I=a.uri||"",c=!1;if(a.bufferView!==void 0)I=A.getDependency("bufferView",a.bufferView).then(function(p){c=!0;const B=new Blob([p],{type:a.mimeType});return I=g.createObjectURL(B),I});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(I).then(function(p){return new Promise(function(B,d){let Q=B;i.isImageBitmapLoader===!0&&(Q=function(y){const h=new si(y);h.needsUpdate=!0,B(h)}),i.load(dg.resolveURL(p,s.path),Q,void 0,d)})}).then(function(p){return c===!0&&g.revokeObjectURL(I),yo(p,a),p.userData.mimeType=a.mimeType||k9(a.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",I),p});return this.sourceCache[e]=_,_}assignTexture(e,i,A,o){const s=this;return this.getDependency("texture",A.index).then(function(a){if(!a)return null;if(A.texCoord!==void 0&&A.texCoord>0&&(a=a.clone(),a.channel=A.texCoord),s.extensions[YA.KHR_TEXTURE_TRANSFORM]){const g=A.extensions!==void 0?A.extensions[YA.KHR_TEXTURE_TRANSFORM]:void 0;if(g){const I=s.associations.get(a);a=s.extensions[YA.KHR_TEXTURE_TRANSFORM].extendTexture(a,g),s.associations.set(a,I)}}return o!==void 0&&(typeof o=="number"&&(o=o===i2?ia:Fo),"colorSpace"in a?a.colorSpace=o:a.encoding=o===ia?i2:a9),e[i]=a,a})}assignFinalMaterial(e){const i=e.geometry;let A=e.material;const o=i.attributes.tangent===void 0,s=i.attributes.color!==void 0,a=i.attributes.normal===void 0;if(e.isPoints){const g="PointsMaterial:"+A.uuid;let I=this.cache.get(g);I||(I=new dO,Nn.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,I.sizeAttenuation=!1,this.cache.add(g,I)),A=I}else if(e.isLine){const g="LineBasicMaterial:"+A.uuid;let I=this.cache.get(g);I||(I=new Dc,Nn.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,this.cache.add(g,I)),A=I}if(o||s||a){let g="ClonedMaterial:"+A.uuid+":";o&&(g+="derivative-tangents:"),s&&(g+="vertex-colors:"),a&&(g+="flat-shading:");let I=this.cache.get(g);I||(I=A.clone(),s&&(I.vertexColors=!0),a&&(I.flatShading=!0),o&&(I.normalScale&&(I.normalScale.y*=-1),I.clearcoatNormalScale&&(I.clearcoatNormalScale.y*=-1)),this.cache.add(g,I),this.associations.set(I,this.associations.get(A))),A=I}e.material=A}getMaterialType(){return Bh}loadMaterial(e){const i=this,A=this.json,o=this.extensions,s=A.materials[e];let a;const g={},I=s.extensions||{},c=[];if(I[YA.KHR_MATERIALS_UNLIT]){const p=o[YA.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),c.push(p.extendParams(g,s,i))}else{const p=s.pbrMetallicRoughness||{};if(g.color=new Ue(1,1,1),g.opacity=1,Array.isArray(p.baseColorFactor)){const B=p.baseColorFactor;g.color.setRGB(B[0],B[1],B[2],Fo),g.opacity=B[3]}p.baseColorTexture!==void 0&&c.push(i.assignTexture(g,"map",p.baseColorTexture,ia)),g.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,g.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(c.push(i.assignTexture(g,"metalnessMap",p.metallicRoughnessTexture)),c.push(i.assignTexture(g,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(B){return B.getMaterialType&&B.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(B){return B.extendMaterialParams&&B.extendMaterialParams(e,g)})))}s.doubleSided===!0&&(g.side=In);const _=s.alphaMode||eB.OPAQUE;if(_===eB.BLEND?(g.transparent=!0,g.depthWrite=!1):(g.transparent=!1,_===eB.MASK&&(g.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Mo&&(c.push(i.assignTexture(g,"normalMap",s.normalTexture)),g.normalScale=new iA(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;g.normalScale.set(p,p)}if(s.occlusionTexture!==void 0&&a!==Mo&&(c.push(i.assignTexture(g,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(g.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Mo){const p=s.emissiveFactor;g.emissive=new Ue().setRGB(p[0],p[1],p[2],Fo)}return s.emissiveTexture!==void 0&&a!==Mo&&c.push(i.assignTexture(g,"emissiveMap",s.emissiveTexture,ia)),Promise.all(c).then(function(){const p=new a(g);return s.name&&(p.name=s.name),yo(p,s),i.associations.set(p,{materials:e}),s.extensions&&qs(o,p,s),p})}createUniqueName(e){const i=it.sanitizeNodeName(e||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(e){const i=this,A=this.extensions,o=this.primitiveCache;function s(g){return A[YA.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(g,i).then(function(I){return s2(I,g,i)})}const a=[];for(let g=0,I=e.length;g<I;g++){const c=e[g],_=G9(c),p=o[_];if(p)a.push(p.promise);else{let B;c.extensions&&c.extensions[YA.KHR_DRACO_MESH_COMPRESSION]?B=s(c):B=s2(new Ut,c,i),o[_]={primitive:c,promise:B},a.push(B)}}return Promise.all(a)}loadMesh(e){const i=this,A=this.json,o=this.extensions,s=A.meshes[e],a=s.primitives,g=[];for(let I=0,c=a.length;I<c;I++){const _=a[I].material===void 0?F9(this.cache):this.getDependency("material",a[I].material);g.push(_)}return g.push(i.loadGeometries(a)),Promise.all(g).then(function(I){const c=I.slice(0,I.length-1),_=I[I.length-1],p=[];for(let d=0,Q=_.length;d<Q;d++){const y=_[d],h=a[d];let E;const u=c[d];if(h.mode===nr.TRIANGLES||h.mode===nr.TRIANGLE_STRIP||h.mode===nr.TRIANGLE_FAN||h.mode===void 0)E=s.isSkinnedMesh===!0?new pO(y,u):new Gt(y,u),E.isSkinnedMesh===!0&&E.normalizeSkinWeights(),h.mode===nr.TRIANGLE_STRIP?E.geometry=t2(E.geometry,$J):h.mode===nr.TRIANGLE_FAN&&(E.geometry=t2(E.geometry,HE));else if(h.mode===nr.LINES)E=new EO(y,u);else if(h.mode===nr.LINE_STRIP)E=new xg(y,u);else if(h.mode===nr.LINE_LOOP)E=new rX(y,u);else if(h.mode===nr.POINTS)E=new oX(y,u);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(E.geometry.morphAttributes).length>0&&U9(E,s),E.name=i.createUniqueName(s.name||"mesh_"+e),yo(E,s),h.extensions&&qs(o,E,h),i.assignFinalMaterial(E),p.push(E)}for(let d=0,Q=p.length;d<Q;d++)i.associations.set(p[d],{meshes:e,primitives:d});if(p.length===1)return s.extensions&&qs(o,p[0],s),p[0];const B=new Ao;s.extensions&&qs(o,B,s),i.associations.set(B,{meshes:e});for(let d=0,Q=p.length;d<Q;d++)B.add(p[d]);return B})}loadCamera(e){let i;const A=this.json.cameras[e],o=A[A.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return A.type==="perspective"?i=new Di(sr.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):A.type==="orthographic"&&(i=new D_(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),A.name&&(i.name=this.createUniqueName(A.name)),yo(i,A),Promise.resolve(i)}loadSkin(e){const i=this.json.skins[e],A=[];for(let o=0,s=i.joints.length;o<s;o++)A.push(this._loadNodeShallow(i.joints[o]));return i.inverseBindMatrices!==void 0?A.push(this.getDependency("accessor",i.inverseBindMatrices)):A.push(null),Promise.all(A).then(function(o){const s=o.pop(),a=o,g=[],I=[];for(let c=0,_=a.length;c<_;c++){const p=a[c];if(p){g.push(p);const B=new xe;s!==null&&B.fromArray(s.array,c*16),I.push(B)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[c])}return new w_(g,I)})}loadAnimation(e){const i=this.json,A=this,o=i.animations[e],s=o.name?o.name:"animation_"+e,a=[],g=[],I=[],c=[],_=[];for(let p=0,B=o.channels.length;p<B;p++){const d=o.channels[p],Q=o.samplers[d.sampler],y=d.target,h=y.node,E=o.parameters!==void 0?o.parameters[Q.input]:Q.input,u=o.parameters!==void 0?o.parameters[Q.output]:Q.output;y.node!==void 0&&(a.push(this.getDependency("node",h)),g.push(this.getDependency("accessor",E)),I.push(this.getDependency("accessor",u)),c.push(Q),_.push(y))}return Promise.all([Promise.all(a),Promise.all(g),Promise.all(I),Promise.all(c),Promise.all(_)]).then(function(p){const B=p[0],d=p[1],Q=p[2],y=p[3],h=p[4],E=[];for(let u=0,f=B.length;u<f;u++){const m=B[u],M=d[u],v=Q[u],b=y[u],x=h[u];if(m===void 0)continue;m.updateMatrix&&m.updateMatrix();const w=A._createAnimationTracks(m,M,v,b,x);if(w)for(let S=0;S<w.length;S++)E.push(w[S])}return new QO(s,void 0,E)})}createNodeMesh(e){const i=this.json,A=this,o=i.nodes[e];return o.mesh===void 0?null:A.getDependency("mesh",o.mesh).then(function(s){const a=A._getNodeRef(A.meshCache,o.mesh,s);return o.weights!==void 0&&a.traverse(function(g){if(g.isMesh)for(let I=0,c=o.weights.length;I<c;I++)g.morphTargetInfluences[I]=o.weights[I]}),a})}loadNode(e){const i=this.json,A=this,o=i.nodes[e],s=A._loadNodeShallow(e),a=[],g=o.children||[];for(let c=0,_=g.length;c<_;c++)a.push(A.getDependency("node",g[c]));const I=o.skin===void 0?Promise.resolve(null):A.getDependency("skin",o.skin);return Promise.all([s,Promise.all(a),I]).then(function(c){const _=c[0],p=c[1],B=c[2];B!==null&&_.traverse(function(d){d.isSkinnedMesh&&d.bind(B,H9)});for(let d=0,Q=p.length;d<Q;d++)_.add(p[d]);return _})}_loadNodeShallow(e){const i=this.json,A=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=i.nodes[e],a=s.name?o.createUniqueName(s.name):"",g=[],I=o._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return I&&g.push(I),s.camera!==void 0&&g.push(o.getDependency("camera",s.camera).then(function(c){return o._getNodeRef(o.cameraCache,s.camera,c)})),o._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){g.push(c)}),this.nodeCache[e]=Promise.all(g).then(function(c){let _;if(s.isBone===!0?_=new ql:c.length>1?_=new Ao:c.length===1?_=c[0]:_=new ft,_!==c[0])for(let p=0,B=c.length;p<B;p++)_.add(c[p]);if(s.name&&(_.userData.name=s.name,_.name=a),yo(_,s),s.extensions&&qs(A,_,s),s.matrix!==void 0){const p=new xe;p.fromArray(s.matrix),_.applyMatrix4(p)}else s.translation!==void 0&&_.position.fromArray(s.translation),s.rotation!==void 0&&_.quaternion.fromArray(s.rotation),s.scale!==void 0&&_.scale.fromArray(s.scale);return o.associations.has(_)||o.associations.set(_,{}),o.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const i=this.extensions,A=this.json.scenes[e],o=this,s=new Ao;A.name&&(s.name=o.createUniqueName(A.name)),yo(s,A),A.extensions&&qs(i,s,A);const a=A.nodes||[],g=[];for(let I=0,c=a.length;I<c;I++)g.push(o.getDependency("node",a[I]));return Promise.all(g).then(function(I){for(let _=0,p=I.length;_<p;_++)s.add(I[_]);const c=_=>{const p=new Map;for(const[B,d]of o.associations)(B instanceof Nn||B instanceof si)&&p.set(B,d);return _.traverse(B=>{const d=o.associations.get(B);d!=null&&p.set(B,d)}),p};return o.associations=c(s),s})}_createAnimationTracks(e,i,A,o,s){const a=[],g=e.name?e.name:e.uuid,I=[];ts[s.path]===ts.weights?e.traverse(function(B){B.morphTargetInfluences&&I.push(B.name?B.name:B.uuid)}):I.push(g);let c;switch(ts[s.path]){case ts.weights:c=pa;break;case ts.rotation:c=Ba;break;case ts.position:case ts.scale:c=Ea;break;default:switch(A.itemSize){case 1:c=pa;break;case 2:case 3:default:c=Ea;break}break}const _=o.interpolation!==void 0?L9[o.interpolation]:_c,p=this._getArrayFromAccessor(A);for(let B=0,d=I.length;B<d;B++){const Q=new c(I[B]+"."+ts[s.path],i.array,p,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(Q),a.push(Q)}return a}_getArrayFromAccessor(e){let i=e.array;if(e.normalized){const A=od(i.constructor),o=new Float32Array(i.length);for(let s=0,a=i.length;s<a;s++)o[s]=i[s]*A;i=o}return i}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(A){const o=this instanceof Ba?x9:PO;return new o(this.times,this.values,this.getValueSize()/3,A)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function K9(n,e,i){const A=e.attributes,o=new St;if(A.POSITION!==void 0){const g=i.json.accessors[A.POSITION],I=g.min,c=g.max;if(I!==void 0&&c!==void 0){if(o.set(new T(I[0],I[1],I[2]),new T(c[0],c[1],c[2])),g.normalized){const _=od(hg[g.componentType]);o.min.multiplyScalar(_),o.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const g=new T,I=new T;for(let c=0,_=s.length;c<_;c++){const p=s[c];if(p.POSITION!==void 0){const B=i.json.accessors[p.POSITION],d=B.min,Q=B.max;if(d!==void 0&&Q!==void 0){if(I.setX(Math.max(Math.abs(d[0]),Math.abs(Q[0]))),I.setY(Math.max(Math.abs(d[1]),Math.abs(Q[1]))),I.setZ(Math.max(Math.abs(d[2]),Math.abs(Q[2]))),B.normalized){const y=od(hg[B.componentType]);I.multiplyScalar(y)}g.max(I)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(g)}n.boundingBox=o;const a=new wi;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,n.boundingSphere=a}function s2(n,e,i){const A=e.attributes,o=[];function s(a,g){return i.getDependency("accessor",a).then(function(I){n.setAttribute(g,I)})}for(const a in A){const g=rd[a]||a.toLowerCase();g in n.attributes||o.push(s(A[a],g))}if(e.indices!==void 0&&!n.index){const a=i.getDependency("accessor",e.indices).then(function(g){n.setIndex(g)});o.push(a)}return yo(n,e),K9(n,e,i),Promise.all(o).then(function(){return e.targets!==void 0?T9(n,e.targets,i):n})}function KO(n,e,i){const A=i.length-n-1;if(e>=i[A])return A-1;if(e<=i[n])return n;let o=n,s=A,a=Math.floor((o+s)/2);for(;e<i[a]||e>=i[a+1];)e<i[a]?s=a:o=a,a=Math.floor((o+s)/2);return a}function J9(n,e,i,A){const o=[],s=[],a=[];o[0]=1;for(let g=1;g<=i;++g){s[g]=e-A[n+1-g],a[g]=A[n+g]-e;let I=0;for(let c=0;c<g;++c){const _=a[c+1],p=s[g-c],B=o[c]/(_+p);o[c]=I+_*B,I=p*B}o[g]=I}return o}function O9(n,e,i,A){const o=KO(n,A,e),s=J9(o,A,n,e),a=new fA(0,0,0,0);for(let g=0;g<=n;++g){const I=i[o-n+g],c=s[g],_=I.w*c;a.x+=I.x*_,a.y+=I.y*_,a.z+=I.z*_,a.w+=I.w*c}return a}function Y9(n,e,i,A,o){const s=[];for(let p=0;p<=i;++p)s[p]=0;const a=[];for(let p=0;p<=A;++p)a[p]=s.slice(0);const g=[];for(let p=0;p<=i;++p)g[p]=s.slice(0);g[0][0]=1;const I=s.slice(0),c=s.slice(0);for(let p=1;p<=i;++p){I[p]=e-o[n+1-p],c[p]=o[n+p]-e;let B=0;for(let d=0;d<p;++d){const Q=c[d+1],y=I[p-d];g[p][d]=Q+y;const h=g[d][p-1]/g[p][d];g[d][p]=B+Q*h,B=y*h}g[p][p]=B}for(let p=0;p<=i;++p)a[0][p]=g[p][i];for(let p=0;p<=i;++p){let B=0,d=1;const Q=[];for(let y=0;y<=i;++y)Q[y]=s.slice(0);Q[0][0]=1;for(let y=1;y<=A;++y){let h=0;const E=p-y,u=i-y;p>=y&&(Q[d][0]=Q[B][0]/g[u+1][E],h=Q[d][0]*g[E][u]);const f=E>=-1?1:-E,m=p-1<=u?y-1:i-p;for(let v=f;v<=m;++v)Q[d][v]=(Q[B][v]-Q[B][v-1])/g[u+1][E+v],h+=Q[d][v]*g[E+v][u];p<=u&&(Q[d][y]=-Q[B][y-1]/g[u+1][p],h+=Q[d][y]*g[p][u]),a[y][p]=h;const M=B;B=d,d=M}}let _=i;for(let p=1;p<=A;++p){for(let B=0;B<=i;++B)a[p][B]*=_;_*=i-p}return a}function q9(n,e,i,A,o){const s=o<n?o:n,a=[],g=KO(n,A,e),I=Y9(g,A,n,s,e),c=[];for(let _=0;_<i.length;++_){const p=i[_].clone(),B=p.w;p.x*=B,p.y*=B,p.z*=B,c[_]=p}for(let _=0;_<=s;++_){const p=c[g-n].clone().multiplyScalar(I[_][0]);for(let B=1;B<=n;++B)p.add(c[g-n+B].clone().multiplyScalar(I[_][B]));a[_]=p}for(let _=s+1;_<=o+1;++_)a[_]=new fA(0,0,0);return a}function j9(n,e){let i=1;for(let o=2;o<=n;++o)i*=o;let A=1;for(let o=2;o<=e;++o)A*=o;for(let o=2;o<=n-e;++o)A*=o;return i/A}function V9(n){const e=n.length,i=[],A=[];for(let s=0;s<e;++s){const a=n[s];i[s]=new T(a.x,a.y,a.z),A[s]=a.w}const o=[];for(let s=0;s<e;++s){const a=i[s].clone();for(let g=1;g<=s;++g)a.sub(o[s-g].clone().multiplyScalar(j9(s,g)*A[g]));o[s]=a.divideScalar(A[0])}return o}function z9(n,e,i,A,o){const s=q9(n,e,i,A,o);return V9(s)}class a2 extends sX{constructor(e,i,A,o,s){super(),this.degree=e,this.knots=i,this.controlPoints=[],this.startKnot=o||0,this.endKnot=s||this.knots.length-1;for(let a=0;a<A.length;++a){const g=A[a];this.controlPoints[a]=new fA(g.x,g.y,g.z,g.w)}}getPoint(e,i){const A=i||new T,o=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=O9(this.degree,this.knots,this.controlPoints,o);return s.w!=1&&s.divideScalar(s.w),A.set(s.x,s.y,s.z)}getTangent(e,i){const A=i||new T,o=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=z9(this.degree,this.knots,this.controlPoints,o,1);return A.copy(s[1]).normalize(),A}}let OA,Ii,fn;class Q7 extends ua{constructor(e){super(e)}load(e,i,A,o){const s=this,a=s.path===""?dg.extractUrlBase(e):s.path,g=new Eh(this.manager);g.setPath(s.path),g.setResponseType("arraybuffer"),g.setRequestHeader(s.requestHeader),g.setWithCredentials(s.withCredentials),g.load(e,function(I){try{i(s.parse(I,a))}catch(c){o?o(c):console.error(c),s.manager.itemError(e)}},A,o)}parse(e,i){if(A5(e))OA=new e5().parse(e);else{const o=qO(e);if(!t5(o))throw new Error("THREE.FBXLoader: Unknown format.");if(I2(o)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+I2(o));OA=new $9().parse(o)}const A=new fO(this.manager).setPath(this.resourcePath||i).setCrossOrigin(this.crossOrigin);return new W9(A,this.manager).parse(OA)}}class W9{constructor(e,i){this.textureLoader=e,this.manager=i}parse(){Ii=this.parseConnections();const e=this.parseImages(),i=this.parseTextures(e),A=this.parseMaterials(i),o=this.parseDeformers(),s=new X9().parse(o);return this.parseScene(o,s,A),fn}parseConnections(){const e=new Map;return"Connections"in OA&&OA.Connections.connections.forEach(function(A){const o=A[0],s=A[1],a=A[2];e.has(o)||e.set(o,{parents:[],children:[]});const g={ID:s,relationship:a};e.get(o).parents.push(g),e.has(s)||e.set(s,{parents:[],children:[]});const I={ID:o,relationship:a};e.get(s).children.push(I)}),e}parseImages(){const e={},i={};if("Video"in OA.Objects){const A=OA.Objects.Video;for(const o in A){const s=A[o],a=parseInt(o);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const g=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,I=typeof s.Content=="string"&&s.Content!=="";if(g||I){const c=this.parseImage(A[o]);i[s.RelativeFilename||s.Filename]=c}}}}for(const A in e){const o=e[A];i[o]!==void 0?e[A]=i[o]:e[A]=e[A].split("\\").pop()}return e}parseImage(e){const i=e.Content,A=e.RelativeFilename||e.Filename,o=A.slice(A.lastIndexOf(".")+1).toLowerCase();let s;switch(o){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",A),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+o+'" is not supported.');return}if(typeof i=="string")return"data:"+s+";base64,"+i;{const a=new Uint8Array(i);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const i=new Map;if("Texture"in OA.Objects){const A=OA.Objects.Texture;for(const o in A){const s=this.parseTexture(A[o],e);i.set(parseInt(o),s)}}return i}parseTexture(e,i){const A=this.loadTexture(e,i);A.ID=e.id,A.name=e.attrName;const o=e.WrapModeU,s=e.WrapModeV,a=o!==void 0?o.value:0,g=s!==void 0?s.value:0;if(A.wrapS=a===0?Ho:eo,A.wrapT=g===0?Ho:eo,"Scaling"in e){const I=e.Scaling.value;A.repeat.x=I[0],A.repeat.y=I[1]}return A}loadTexture(e,i){let A;const o=this.textureLoader.path,s=Ii.get(e.id).children;s!==void 0&&s.length>0&&i[s[0].ID]!==void 0&&(A=i[s[0].ID],(A.indexOf("blob:")===0||A.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const g=e.FileName.slice(-3).toLowerCase();if(g==="tga"){const I=this.manager.getHandler(".tga");I===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new si):(I.setPath(this.textureLoader.path),a=I.load(A))}else g==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new si):a=this.textureLoader.load(A);return this.textureLoader.setPath(o),a}parseMaterials(e){const i=new Map;if("Material"in OA.Objects){const A=OA.Objects.Material;for(const o in A){const s=this.parseMaterial(A[o],e);s!==null&&i.set(parseInt(o),s)}}return i}parseMaterial(e,i){const A=e.id,o=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ii.has(A))return null;const a=this.parseParameters(e,i,A);let g;switch(s.toLowerCase()){case"phong":g=new Up;break;case"lambert":g=new gX;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),g=new Up;break}return g.setValues(a),g.name=o,g}parseParameters(e,i,A){const o={};e.BumpFactor&&(o.bumpScale=e.BumpFactor.value),e.Diffuse?o.color=new Ue().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(o.color=new Ue().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(o.displacementScale=e.DisplacementFactor.value),e.Emissive?o.emissive=new Ue().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(o.emissive=new Ue().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(o.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(o.opacity=parseFloat(e.Opacity.value)),o.opacity<1&&(o.transparent=!0),e.ReflectionFactor&&(o.reflectivity=e.ReflectionFactor.value),e.Shininess&&(o.shininess=e.Shininess.value),e.Specular?o.specular=new Ue().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(o.specular=new Ue().fromArray(e.SpecularColor.value));const s=this;return Ii.get(A).children.forEach(function(a){const g=a.relationship;switch(g){case"Bump":o.bumpMap=s.getTexture(i,a.ID);break;case"Maya|TEX_ao_map":o.aoMap=s.getTexture(i,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":o.map=s.getTexture(i,a.ID),o.map!==void 0&&("colorSpace"in o.map?o.map.colorSpace="srgb":o.map.encoding=3001);break;case"DisplacementColor":o.displacementMap=s.getTexture(i,a.ID);break;case"EmissiveColor":o.emissiveMap=s.getTexture(i,a.ID),o.emissiveMap!==void 0&&("colorSpace"in o.emissiveMap?o.emissiveMap.colorSpace="srgb":o.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":o.normalMap=s.getTexture(i,a.ID);break;case"ReflectionColor":o.envMap=s.getTexture(i,a.ID),o.envMap!==void 0&&(o.envMap.mapping=Kl,"colorSpace"in o.envMap?o.envMap.colorSpace="srgb":o.envMap.encoding=3001);break;case"SpecularColor":o.specularMap=s.getTexture(i,a.ID),o.specularMap!==void 0&&("colorSpace"in o.specularMap?o.specularMap.colorSpace="srgb":o.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":o.alphaMap=s.getTexture(i,a.ID),o.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",g);break}}),o}getTexture(e,i){return"LayeredTexture"in OA.Objects&&i in OA.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),i=Ii.get(i).children[0].ID),e.get(i)}parseDeformers(){const e={},i={};if("Deformer"in OA.Objects){const A=OA.Objects.Deformer;for(const o in A){const s=A[o],a=Ii.get(parseInt(o));if(s.attrType==="Skin"){const g=this.parseSkeleton(a,A);g.ID=o,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),g.geometryID=a.parents[0].ID,e[o]=g}else if(s.attrType==="BlendShape"){const g={id:o};g.rawTargets=this.parseMorphTargets(a,A),g.id=o,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),i[o]=g}}}return{skeletons:e,morphTargets:i}}parseSkeleton(e,i){const A=[];return e.children.forEach(function(o){const s=i[o.ID];if(s.attrType!=="Cluster")return;const a={ID:o.ID,indices:[],weights:[],transformLink:new xe().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),A.push(a)}),{rawBones:A,bones:[]}}parseMorphTargets(e,i){const A=[];for(let o=0;o<e.children.length;o++){const s=e.children[o],a=i[s.ID],g={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;g.geoID=Ii.get(parseInt(s.ID)).children.filter(function(I){return I.relationship===void 0})[0].ID,A.push(g)}return A}parseScene(e,i,A){fn=new Ao;const o=this.parseModels(e.skeletons,i,A),s=OA.Objects.Model,a=this;o.forEach(function(I){const c=s[I.ID];a.setLookAtProperties(I,c),Ii.get(I.ID).parents.forEach(function(p){const B=o.get(p.ID);B!==void 0&&B.add(I)}),I.parent===null&&fn.add(I)}),this.bindSkeleton(e.skeletons,i,o),this.createAmbientLight(),fn.traverse(function(I){if(I.userData.transformData){I.parent&&(I.userData.transformData.parentMatrix=I.parent.matrix,I.userData.transformData.parentMatrixWorld=I.parent.matrixWorld);const c=OO(I.userData.transformData);I.applyMatrix4(c),I.updateWorldMatrix()}});const g=new Z9().parse();fn.children.length===1&&fn.children[0].isGroup&&(fn.children[0].animations=g,fn=fn.children[0]),fn.animations=g}parseModels(e,i,A){const o=new Map,s=OA.Objects.Model;for(const a in s){const g=parseInt(a),I=s[a],c=Ii.get(g);let _=this.buildSkeleton(c,e,g,I.attrName);if(!_){switch(I.attrType){case"Camera":_=this.createCamera(c);break;case"Light":_=this.createLight(c);break;case"Mesh":_=this.createMesh(c,i,A);break;case"NurbsCurve":_=this.createCurve(c,i);break;case"LimbNode":case"Root":_=new ql;break;case"Null":default:_=new Ao;break}_.name=I.attrName?it.sanitizeNodeName(I.attrName):"",_.ID=g}this.getTransformData(_,I),o.set(g,_)}return o}buildSkeleton(e,i,A,o){let s=null;return e.parents.forEach(function(a){for(const g in i){const I=i[g];I.rawBones.forEach(function(c,_){if(c.ID===a.ID){const p=s;s=new ql,s.matrixWorld.copy(c.transformLink),s.name=o?it.sanitizeNodeName(o):"",s.ID=A,I.bones[_]=s,p!==null&&s.add(p)}})}}),s}createCamera(e){let i,A;if(e.children.forEach(function(o){const s=OA.Objects.NodeAttribute[o.ID];s!==void 0&&(A=s)}),A===void 0)i=new ft;else{let o=0;A.CameraProjectionType!==void 0&&A.CameraProjectionType.value===1&&(o=1);let s=1;A.NearPlane!==void 0&&(s=A.NearPlane.value/1e3);let a=1e3;A.FarPlane!==void 0&&(a=A.FarPlane.value/1e3);let g=window.innerWidth,I=window.innerHeight;A.AspectWidth!==void 0&&A.AspectHeight!==void 0&&(g=A.AspectWidth.value,I=A.AspectHeight.value);const c=g/I;let _=45;A.FieldOfView!==void 0&&(_=A.FieldOfView.value);const p=A.FocalLength?A.FocalLength.value:null;switch(o){case 0:i=new Di(_,c,s,a),p!==null&&i.setFocalLength(p);break;case 1:i=new D_(-g/2,g/2,I/2,-I/2,s,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+o+"."),i=new ft;break}}return i}createLight(e){let i,A;if(e.children.forEach(function(o){const s=OA.Objects.NodeAttribute[o.ID];s!==void 0&&(A=s)}),A===void 0)i=new ft;else{let o;A.LightType===void 0?o=0:o=A.LightType.value;let s=16777215;A.Color!==void 0&&(s=new Ue().fromArray(A.Color.value));let a=A.Intensity===void 0?1:A.Intensity.value/100;A.CastLightOnObject!==void 0&&A.CastLightOnObject.value===0&&(a=0);let g=0;A.FarAttenuationEnd!==void 0&&(A.EnableFarAttenuation!==void 0&&A.EnableFarAttenuation.value===0?g=0:g=A.FarAttenuationEnd.value);const I=1;switch(o){case 0:i=new YE(s,a,g,I);break;case 1:i=new mO(s,a);break;case 2:let c=Math.PI/3;A.InnerAngle!==void 0&&(c=sr.degToRad(A.InnerAngle.value));let _=0;A.OuterAngle!==void 0&&(_=sr.degToRad(A.OuterAngle.value),_=Math.max(_,1)),i=new yO(s,a,g,c,_,I);break;default:console.warn("THREE.FBXLoader: Unknown light type "+A.LightType.value+", defaulting to a PointLight."),i=new YE(s,a);break}A.CastShadows!==void 0&&A.CastShadows.value===1&&(i.castShadow=!0)}return i}createMesh(e,i,A){let o,s=null,a=null;const g=[];return e.children.forEach(function(I){i.has(I.ID)&&(s=i.get(I.ID)),A.has(I.ID)&&g.push(A.get(I.ID))}),g.length>1?a=g:g.length>0?a=g[0]:(a=new Up({color:13421772}),g.push(a)),"color"in s.attributes&&g.forEach(function(I){I.vertexColors=!0}),s.FBX_Deformer?(o=new pO(s,a),o.normalizeSkinWeights()):o=new Gt(s,a),o}createCurve(e,i){const A=e.children.reduce(function(s,a){return i.has(a.ID)&&(s=i.get(a.ID)),s},null),o=new Dc({color:3342591,linewidth:1});return new xg(A,o)}getTransformData(e,i){const A={};"InheritType"in i&&(A.inheritType=parseInt(i.InheritType.value)),"RotationOrder"in i?A.eulerOrder=YO(i.RotationOrder.value):A.eulerOrder="ZYX","Lcl_Translation"in i&&(A.translation=i.Lcl_Translation.value),"PreRotation"in i&&(A.preRotation=i.PreRotation.value),"Lcl_Rotation"in i&&(A.rotation=i.Lcl_Rotation.value),"PostRotation"in i&&(A.postRotation=i.PostRotation.value),"Lcl_Scaling"in i&&(A.scale=i.Lcl_Scaling.value),"ScalingOffset"in i&&(A.scalingOffset=i.ScalingOffset.value),"ScalingPivot"in i&&(A.scalingPivot=i.ScalingPivot.value),"RotationOffset"in i&&(A.rotationOffset=i.RotationOffset.value),"RotationPivot"in i&&(A.rotationPivot=i.RotationPivot.value),e.userData.transformData=A}setLookAtProperties(e,i){"LookAtProperty"in i&&Ii.get(e.ID).children.forEach(function(o){if(o.relationship==="LookAtProperty"){const s=OA.Objects.Model[o.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),fn.add(e.target)):e.lookAt(new T().fromArray(a))}}})}bindSkeleton(e,i,A){const o=this.parsePoseNodes();for(const s in e){const a=e[s];Ii.get(parseInt(a.ID)).parents.forEach(function(I){if(i.has(I.ID)){const c=I.ID;Ii.get(c).parents.forEach(function(p){A.has(p.ID)&&A.get(p.ID).bind(new w_(a.bones),o[p.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in OA.Objects){const i=OA.Objects.Pose;for(const A in i)if(i[A].attrType==="BindPose"&&i[A].NbPoseNodes>0){const o=i[A].PoseNode;Array.isArray(o)?o.forEach(function(s){e[s.Node]=new xe().fromArray(s.Matrix.a)}):e[o.Node]=new xe().fromArray(o.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in OA&&"AmbientColor"in OA.GlobalSettings){const e=OA.GlobalSettings.AmbientColor.value,i=e[0],A=e[1],o=e[2];if(i!==0||A!==0||o!==0){const s=new Ue(i,A,o);fn.add(new DX(s,1))}}}}class X9{parse(e){const i=new Map;if("Geometry"in OA.Objects){const A=OA.Objects.Geometry;for(const o in A){const s=Ii.get(parseInt(o)),a=this.parseGeometry(s,A[o],e);i.set(parseInt(o),a)}}return i}parseGeometry(e,i,A){switch(i.attrType){case"Mesh":return this.parseMeshGeometry(e,i,A);case"NurbsCurve":return this.parseNurbsGeometry(i)}}parseMeshGeometry(e,i,A){const o=A.skeletons,s=[],a=e.parents.map(function(p){return OA.Objects.Model[p.ID]});if(a.length===0)return;const g=e.children.reduce(function(p,B){return o[B.ID]!==void 0&&(p=o[B.ID]),p},null);e.children.forEach(function(p){A.morphTargets[p.ID]!==void 0&&s.push(A.morphTargets[p.ID])});const I=a[0],c={};"RotationOrder"in I&&(c.eulerOrder=YO(I.RotationOrder.value)),"InheritType"in I&&(c.inheritType=parseInt(I.InheritType.value)),"GeometricTranslation"in I&&(c.translation=I.GeometricTranslation.value),"GeometricRotation"in I&&(c.rotation=I.GeometricRotation.value),"GeometricScaling"in I&&(c.scale=I.GeometricScaling.value);const _=OO(c);return this.genGeometry(i,g,s,_)}genGeometry(e,i,A,o){const s=new Ut;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,i),g=this.genBuffers(a),I=new xt(g.vertex,3);if(I.applyMatrix4(o),s.setAttribute("position",I),g.colors.length>0&&s.setAttribute("color",new xt(g.colors,3)),i&&(s.setAttribute("skinIndex",new Ch(g.weightsIndices,4)),s.setAttribute("skinWeight",new xt(g.vertexWeights,4)),s.FBX_Deformer=i),g.normal.length>0){const c=new RA().getNormalMatrix(o),_=new xt(g.normal,3);_.applyNormalMatrix(c),s.setAttribute("normal",_)}if(g.uvs.forEach(function(c,_){YZ==="uv2"&&_++;const p=_===0?"uv":`uv${_}`;s.setAttribute(p,new xt(g.uvs[_],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=g.materialIndex[0],_=0;if(g.materialIndex.forEach(function(p,B){p!==c&&(s.addGroup(_,B-_,c),c=p,_=B)}),s.groups.length>0){const p=s.groups[s.groups.length-1],B=p.start+p.count;B!==g.materialIndex.length&&s.addGroup(B,g.materialIndex.length-B,c)}s.groups.length===0&&s.addGroup(0,g.materialIndex.length,g.materialIndex[0])}return this.addMorphTargets(s,e,A,o),s}parseGeoNode(e,i){const A={};if(A.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],A.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(A.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(A.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(A.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){A.uv=[];let o=0;for(;e.LayerElementUV[o];)e.LayerElementUV[o].UV&&A.uv.push(this.parseUVs(e.LayerElementUV[o])),o++}return A.weightTable={},i!==null&&(A.skeleton=i,i.rawBones.forEach(function(o,s){o.indices.forEach(function(a,g){A.weightTable[a]===void 0&&(A.weightTable[a]=[]),A.weightTable[a].push({id:s,weight:o.weights[g]})})})),A}genBuffers(e){const i={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let A=0,o=0,s=!1,a=[],g=[],I=[],c=[],_=[],p=[];const B=this;return e.vertexIndices.forEach(function(d,Q){let y,h=!1;d<0&&(d=d^-1,h=!0);let E=[],u=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const f=YC(Q,A,d,e.color);I.push(f[0],f[1],f[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(f){u.push(f.weight),E.push(f.id)}),u.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const f=[0,0,0,0],m=[0,0,0,0];u.forEach(function(M,v){let b=M,x=E[v];m.forEach(function(w,S,F){if(b>w){F[S]=b,b=w;const k=f[S];f[S]=x,x=k}})}),E=f,u=m}for(;u.length<4;)u.push(0),E.push(0);for(let f=0;f<4;++f)_.push(u[f]),p.push(E[f])}if(e.normal){const f=YC(Q,A,d,e.normal);g.push(f[0],f[1],f[2])}e.material&&e.material.mappingType!=="AllSame"&&(y=YC(Q,A,d,e.material)[0]),e.uv&&e.uv.forEach(function(f,m){const M=YC(Q,A,d,f);c[m]===void 0&&(c[m]=[]),c[m].push(M[0]),c[m].push(M[1])}),o++,h&&(B.genFace(i,e,a,y,g,I,c,_,p,o),A++,o=0,a=[],g=[],I=[],c=[],_=[],p=[])}),i}genFace(e,i,A,o,s,a,g,I,c,_){for(let p=2;p<_;p++)e.vertex.push(i.vertexPositions[A[0]]),e.vertex.push(i.vertexPositions[A[1]]),e.vertex.push(i.vertexPositions[A[2]]),e.vertex.push(i.vertexPositions[A[(p-1)*3]]),e.vertex.push(i.vertexPositions[A[(p-1)*3+1]]),e.vertex.push(i.vertexPositions[A[(p-1)*3+2]]),e.vertex.push(i.vertexPositions[A[p*3]]),e.vertex.push(i.vertexPositions[A[p*3+1]]),e.vertex.push(i.vertexPositions[A[p*3+2]]),i.skeleton&&(e.vertexWeights.push(I[0]),e.vertexWeights.push(I[1]),e.vertexWeights.push(I[2]),e.vertexWeights.push(I[3]),e.vertexWeights.push(I[(p-1)*4]),e.vertexWeights.push(I[(p-1)*4+1]),e.vertexWeights.push(I[(p-1)*4+2]),e.vertexWeights.push(I[(p-1)*4+3]),e.vertexWeights.push(I[p*4]),e.vertexWeights.push(I[p*4+1]),e.vertexWeights.push(I[p*4+2]),e.vertexWeights.push(I[p*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(p-1)*4]),e.weightsIndices.push(c[(p-1)*4+1]),e.weightsIndices.push(c[(p-1)*4+2]),e.weightsIndices.push(c[(p-1)*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),i.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(p-1)*3]),e.colors.push(a[(p-1)*3+1]),e.colors.push(a[(p-1)*3+2]),e.colors.push(a[p*3]),e.colors.push(a[p*3+1]),e.colors.push(a[p*3+2])),i.material&&i.material.mappingType!=="AllSame"&&(e.materialIndex.push(o),e.materialIndex.push(o),e.materialIndex.push(o)),i.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(p-1)*3]),e.normal.push(s[(p-1)*3+1]),e.normal.push(s[(p-1)*3+2]),e.normal.push(s[p*3]),e.normal.push(s[p*3+1]),e.normal.push(s[p*3+2])),i.uv&&i.uv.forEach(function(B,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(g[d][0]),e.uvs[d].push(g[d][1]),e.uvs[d].push(g[d][(p-1)*2]),e.uvs[d].push(g[d][(p-1)*2+1]),e.uvs[d].push(g[d][p*2]),e.uvs[d].push(g[d][p*2+1])})}addMorphTargets(e,i,A,o){if(A.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;A.forEach(function(a){a.rawTargets.forEach(function(g){const I=OA.Objects.Geometry[g.geoID];I!==void 0&&s.genMorphGeometry(e,i,I,o,g.name)})})}genMorphGeometry(e,i,A,o,s){const a=i.PolygonVertexIndex!==void 0?i.PolygonVertexIndex.a:[],g=A.Vertices!==void 0?A.Vertices.a:[],I=A.Indexes!==void 0?A.Indexes.a:[],c=e.attributes.position.count*3,_=new Float32Array(c);for(let Q=0;Q<I.length;Q++){const y=I[Q]*3;_[y]=g[Q*3],_[y+1]=g[Q*3+1],_[y+2]=g[Q*3+2]}const p={vertexIndices:a,vertexPositions:_},B=this.genBuffers(p),d=new xt(B.vertex,3);d.name=s||A.attrName,d.applyMatrix4(o),e.morphAttributes.position.push(d)}parseNormals(e){const i=e.MappingInformationType,A=e.ReferenceInformationType,o=e.Normals.a;let s=[];return A==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:o,indices:s,mappingType:i,referenceType:A}}parseUVs(e){const i=e.MappingInformationType,A=e.ReferenceInformationType,o=e.UV.a;let s=[];return A==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:o,indices:s,mappingType:i,referenceType:A}}parseVertexColors(e){const i=e.MappingInformationType,A=e.ReferenceInformationType,o=e.Colors.a;let s=[];return A==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:o,indices:s,mappingType:i,referenceType:A}}parseMaterialIndices(e){const i=e.MappingInformationType,A=e.ReferenceInformationType;if(i==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:A};const o=e.Materials.a,s=[];for(let a=0;a<o.length;++a)s.push(a);return{dataSize:1,buffer:o,indices:s,mappingType:i,referenceType:A}}parseNurbsGeometry(e){if(a2===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Ut;const i=parseInt(e.Order);if(isNaN(i))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ut;const A=i-1,o=e.KnotVector.a,s=[],a=e.Points.a;for(let p=0,B=a.length;p<B;p+=4)s.push(new fA().fromArray(a,p));let g,I;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){g=A,I=o.length-1-g;for(let p=0;p<A;++p)s.push(s[p])}const _=new a2(A,o,s,g,I).getPoints(s.length*12);return new Ut().setFromPoints(_)}}class Z9{parse(){const e=[],i=this.parseClips();if(i!==void 0)for(const A in i){const o=i[A],s=this.addClip(o);e.push(s)}return e}parseClips(){if(OA.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const i=this.parseAnimationLayers(e);return this.parseAnimStacks(i)}parseAnimationCurveNodes(){const e=OA.Objects.AnimationCurveNode,i=new Map;for(const A in e){const o=e[A];if(o.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:o.id,attr:o.attrName,curves:{}};i.set(s.id,s)}}return i}parseAnimationCurves(e){const i=OA.Objects.AnimationCurve;for(const A in i){const o={id:i[A].id,times:i[A].KeyTime.a.map(i5),values:i[A].KeyValueFloat.a},s=Ii.get(o.id);if(s!==void 0){const a=s.parents[0].ID,g=s.parents[0].relationship;g.match(/X/)?e.get(a).curves.x=o:g.match(/Y/)?e.get(a).curves.y=o:g.match(/Z/)?e.get(a).curves.z=o:g.match(/d|DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=o)}}}parseAnimationLayers(e){const i=OA.Objects.AnimationLayer,A=new Map;for(const o in i){const s=[],a=Ii.get(parseInt(o));a!==void 0&&(a.children.forEach(function(I,c){if(e.has(I.ID)){const _=e.get(I.ID);if(_.curves.x!==void 0||_.curves.y!==void 0||_.curves.z!==void 0){if(s[c]===void 0){const p=Ii.get(I.ID).parents.filter(function(B){return B.relationship!==void 0})[0].ID;if(p!==void 0){const B=OA.Objects.Model[p.toString()];if(B===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",I);return}const d={modelName:B.attrName?it.sanitizeNodeName(B.attrName):"",ID:B.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};fn.traverse(function(Q){Q.ID===B.id&&(d.transform=Q.matrix,Q.userData.transformData&&(d.eulerOrder=Q.userData.transformData.eulerOrder))}),d.transform||(d.transform=new xe),"PreRotation"in B&&(d.preRotation=B.PreRotation.value),"PostRotation"in B&&(d.postRotation=B.PostRotation.value),s[c]=d}}s[c]&&(s[c][_.attr]=_)}else if(_.curves.morph!==void 0){if(s[c]===void 0){const p=Ii.get(I.ID).parents.filter(function(E){return E.relationship!==void 0})[0].ID,B=Ii.get(p).parents[0].ID,d=Ii.get(B).parents[0].ID,Q=Ii.get(d).parents[0].ID,y=OA.Objects.Model[Q],h={modelName:y.attrName?it.sanitizeNodeName(y.attrName):"",morphName:OA.Objects.Deformer[p].attrName};s[c]=h}s[c][_.attr]=_}}}),A.set(parseInt(o),s))}return A}parseAnimStacks(e){const i=OA.Objects.AnimationStack,A={};for(const o in i){const s=Ii.get(parseInt(o)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);A[o]={name:i[o].attrName,layer:a}}return A}addClip(e){let i=[];const A=this;return e.layer.forEach(function(o){i=i.concat(A.generateTracks(o))}),new QO(e.name,-1,i)}generateTracks(e){const i=[];let A=new T,o=new Ir,s=new T;if(e.transform&&e.transform.decompose(A,o,s),A=A.toArray(),o=new Pi().setFromQuaternion(o,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,A,"position");a!==void 0&&i.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,o,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&i.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&i.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&i.push(a)}return i}generateVectorTrack(e,i,A,o){const s=this.getTimesForAllAxes(i),a=this.getKeyframeTrackValues(s,i,A);return new Ea(e+"."+o,s,a)}generateRotationTrack(e,i,A,o,s,a){i.x!==void 0&&(this.interpolateRotations(i.x),i.x.values=i.x.values.map(sr.degToRad)),i.y!==void 0&&(this.interpolateRotations(i.y),i.y.values=i.y.values.map(sr.degToRad)),i.z!==void 0&&(this.interpolateRotations(i.z),i.z.values=i.z.values.map(sr.degToRad));const g=this.getTimesForAllAxes(i),I=this.getKeyframeTrackValues(g,i,A);o!==void 0&&(o=o.map(sr.degToRad),o.push(a),o=new Pi().fromArray(o),o=new Ir().setFromEuler(o)),s!==void 0&&(s=s.map(sr.degToRad),s.push(a),s=new Pi().fromArray(s),s=new Ir().setFromEuler(s).invert());const c=new Ir,_=new Pi,p=[];for(let B=0;B<I.length;B+=3)_.set(I[B],I[B+1],I[B+2],a),c.setFromEuler(_),o!==void 0&&c.premultiply(o),s!==void 0&&c.multiply(s),c.toArray(p,B/3*4);return new Ba(e+".quaternion",g,p)}generateMorphTrack(e){const i=e.DeformPercent.curves.morph,A=i.values.map(function(s){return s/100}),o=fn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new pa(e.modelName+".morphTargetInfluences["+o+"]",i.times,A)}getTimesForAllAxes(e){let i=[];if(e.x!==void 0&&(i=i.concat(e.x.times)),e.y!==void 0&&(i=i.concat(e.y.times)),e.z!==void 0&&(i=i.concat(e.z.times)),i=i.sort(function(A,o){return A-o}),i.length>1){let A=1,o=i[0];for(let s=1;s<i.length;s++){const a=i[s];a!==o&&(i[A]=a,o=a,A++)}i=i.slice(0,A)}return i}getKeyframeTrackValues(e,i,A){const o=A,s=[];let a=-1,g=-1,I=-1;return e.forEach(function(c){if(i.x&&(a=i.x.times.indexOf(c)),i.y&&(g=i.y.times.indexOf(c)),i.z&&(I=i.z.times.indexOf(c)),a!==-1){const _=i.x.values[a];s.push(_),o[0]=_}else s.push(o[0]);if(g!==-1){const _=i.y.values[g];s.push(_),o[1]=_}else s.push(o[1]);if(I!==-1){const _=i.z.values[I];s.push(_),o[2]=_}else s.push(o[2])}),s}interpolateRotations(e){for(let i=1;i<e.values.length;i++){const A=e.values[i-1],o=e.values[i]-A,s=Math.abs(o);if(s>=180){const a=s/180,g=o/a;let I=A+g;const c=e.times[i-1],p=(e.times[i]-c)/a;let B=c+p;const d=[],Q=[];for(;B<e.times[i];)d.push(B),B+=p,Q.push(I),I+=g;e.times=c2(e.times,i,d),e.values=c2(e.values,i,Q)}}}}class $9{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,i){this.currentProp=e,this.currentPropName=i}parse(e){this.currentIndent=0,this.allNodes=new JO,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const i=this,A=e.split(/[\r\n]+/);return A.forEach(function(o,s){const a=o.match(/^[\s\t]*;/),g=o.match(/^[\s\t]*$/);if(a||g)return;const I=o.match("^\\t{"+i.currentIndent+"}(\\w+):(.*){",""),c=o.match("^\\t{"+i.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),_=o.match("^\\t{"+(i.currentIndent-1)+"}}");I?i.parseNodeBegin(o,I):c?i.parseNodeProperty(o,c,A[++s]):_?i.popStack():o.match(/^[^\s\t}]/)&&i.parseNodePropertyContinued(o)}),this.allNodes}parseNodeBegin(e,i){const A=i[1].trim().replace(/^"/,"").replace(/"$/,""),o=i[2].split(",").map(function(I){return I.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:A},a=this.parseNodeAttr(o),g=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(A,s):A in g?(A==="PoseNode"?g.PoseNode.push(s):g[A].id!==void 0&&(g[A]={},g[A][g[A].id]=g[A]),a.id!==""&&(g[A][a.id]=s)):typeof a.id=="number"?(g[A]={},g[A][a.id]=s):A!=="Properties70"&&(A==="PoseNode"?g[A]=[s]:g[A]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let i=e[0];e[0]!==""&&(i=parseInt(e[0]),isNaN(i)&&(i=e[0]));let A="",o="";return e.length>1&&(A=e[1].replace(/^(\w+)::/,""),o=e[2]),{id:i,name:A,type:o}}parseNodeProperty(e,i,A){let o=i[1].replace(/^"/,"").replace(/"$/,"").trim(),s=i[2].replace(/^"/,"").replace(/"$/,"").trim();o==="Content"&&s===","&&(s=A.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,o,s);return}if(o==="C"){const I=s.split(",").slice(1),c=parseInt(I[0]),_=parseInt(I[1]);let p=s.split(",").slice(3);p=p.map(function(B){return B.trim().replace(/^"/,"")}),o="connections",s=[c,_],r5(s,p),a[o]===void 0&&(a[o]=[])}o==="Node"&&(a.id=s),o in a&&Array.isArray(a[o])?a[o].push(s):o!=="a"?a[o]=s:a.a=s,this.setCurrentProp(a,o),o==="a"&&s.slice(-1)!==","&&(a.a=iB(s))}parseNodePropertyContinued(e){const i=this.getCurrentNode();i.a+=e,e.slice(-1)!==","&&(i.a=iB(i.a))}parseNodeSpecialProperty(e,i,A){const o=A.split('",').map(function(_){return _.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=o[0],a=o[1],g=o[2],I=o[3];let c=o[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=iB(c);break}this.getPrevNode()[s]={type:a,type2:g,flag:I,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class e5{parse(e){const i=new g2(e);i.skip(23);const A=i.getUint32();if(A<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+A);const o=new JO;for(;!this.endOfContent(i);){const s=this.parseNode(i,A);s!==null&&o.add(s.name,s)}return o}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,i){const A={},o=i>=7500?e.getUint64():e.getUint32(),s=i>=7500?e.getUint64():e.getUint32();i>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),g=e.getString(a);if(o===0)return null;const I=[];for(let B=0;B<s;B++)I.push(this.parseProperty(e));const c=I.length>0?I[0]:"",_=I.length>1?I[1]:"",p=I.length>2?I[2]:"";for(A.singleProperty=s===1&&e.getOffset()===o;o>e.getOffset();){const B=this.parseNode(e,i);B!==null&&this.parseSubNode(g,A,B)}return A.propertyList=I,typeof c=="number"&&(A.id=c),_!==""&&(A.attrName=_),p!==""&&(A.attrType=p),g!==""&&(A.name=g),A}parseSubNode(e,i,A){if(A.singleProperty===!0){const o=A.propertyList[0];Array.isArray(o)?(i[A.name]=A,A.a=o):i[A.name]=o}else if(e==="Connections"&&A.name==="C"){const o=[];A.propertyList.forEach(function(s,a){a!==0&&o.push(s)}),i.connections===void 0&&(i.connections=[]),i.connections.push(o)}else if(A.name==="Properties70")Object.keys(A).forEach(function(s){i[s]=A[s]});else if(e==="Properties70"&&A.name==="P"){let o=A.propertyList[0],s=A.propertyList[1];const a=A.propertyList[2],g=A.propertyList[3];let I;o.indexOf("Lcl ")===0&&(o=o.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?I=[A.propertyList[4],A.propertyList[5],A.propertyList[6]]:I=A.propertyList[4],i[o]={type:s,type2:a,flag:g,value:I}}else i[A.name]===void 0?typeof A.id=="number"?(i[A.name]={},i[A.name][A.id]=A):i[A.name]=A:A.name==="PoseNode"?(Array.isArray(i[A.name])||(i[A.name]=[i[A.name]]),i[A.name].push(A)):i[A.name][A.id]===void 0&&(i[A.name][A.id]=A)}parseProperty(e){const i=e.getString(1);let A;switch(i){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return A=e.getUint32(),e.getArrayBuffer(A);case"S":return A=e.getUint32(),e.getString(A);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const o=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(i){case"b":case"c":return e.getBooleanArray(o);case"d":return e.getFloat64Array(o);case"f":return e.getFloat32Array(o);case"i":return e.getInt32Array(o);case"l":return e.getInt64Array(o)}const g=i9(new Uint8Array(e.getArrayBuffer(a))),I=new g2(g.buffer);switch(i){case"b":case"c":return I.getBooleanArray(o);case"d":return I.getFloat64Array(o);case"f":return I.getFloat32Array(o);case"i":return I.getInt32Array(o);case"l":return I.getInt64Array(o)}default:throw new Error("THREE.FBXLoader: Unknown property type "+i)}}}class g2{constructor(e,i){this.dv=new DataView(e),this.offset=0,this.littleEndian=i!==void 0?i:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const i=[];for(let A=0;A<e;A++)i.push(this.getBoolean());return i}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const i=[];for(let A=0;A<e;A++)i.push(this.getInt32());return i}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,i;return this.littleEndian?(e=this.getUint32(),i=this.getUint32()):(i=this.getUint32(),e=this.getUint32()),i&2147483648?(i=~i&4294967295,e=~e&4294967295,e===4294967295&&(i=i+1&4294967295),e=e+1&4294967295,-(i*4294967296+e)):i*4294967296+e}getInt64Array(e){const i=[];for(let A=0;A<e;A++)i.push(this.getInt64());return i}getUint64(){let e,i;return this.littleEndian?(e=this.getUint32(),i=this.getUint32()):(i=this.getUint32(),e=this.getUint32()),i*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const i=[];for(let A=0;A<e;A++)i.push(this.getFloat32());return i}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const i=[];for(let A=0;A<e;A++)i.push(this.getFloat64());return i}getArrayBuffer(e){const i=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,i}getString(e){let i=[];for(let o=0;o<e;o++)i[o]=this.getUint8();const A=i.indexOf(0);return A>=0&&(i=i.slice(0,A)),Lg(new Uint8Array(i))}}class JO{add(e,i){this[e]=i}}function A5(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===qO(n,0,e.length)}function t5(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let i=0;function A(o){const s=n[o-1];return n=n.slice(i+o),i++,s}for(let o=0;o<e.length;++o)if(A(1)===e[o])return!1;return!0}function I2(n){const e=/FBXVersion: (\d+)/,i=n.match(e);if(i)return parseInt(i[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function i5(n){return n/46186158e3}const n5=[];function YC(n,e,i,A){let o;switch(A.mappingType){case"ByPolygonVertex":o=n;break;case"ByPolygon":o=e;break;case"ByVertice":o=i;break;case"AllSame":o=A.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+A.mappingType)}A.referenceType==="IndexToDirect"&&(o=A.indices[o]);const s=o*A.dataSize,a=s+A.dataSize;return o5(n5,A.buffer,s,a)}const tB=new Pi,Ya=new T;function OO(n){const e=new xe,i=new xe,A=new xe,o=new xe,s=new xe,a=new xe,g=new xe,I=new xe,c=new xe,_=new xe,p=new xe,B=new xe,d=n.inheritType?n.inheritType:0;if(n.translation&&e.setPosition(Ya.fromArray(n.translation)),n.preRotation){const S=n.preRotation.map(sr.degToRad);S.push(n.eulerOrder),i.makeRotationFromEuler(tB.fromArray(S))}if(n.rotation){const S=n.rotation.map(sr.degToRad);S.push(n.eulerOrder),A.makeRotationFromEuler(tB.fromArray(S))}if(n.postRotation){const S=n.postRotation.map(sr.degToRad);S.push(n.eulerOrder),o.makeRotationFromEuler(tB.fromArray(S)),o.invert()}n.scale&&s.scale(Ya.fromArray(n.scale)),n.scalingOffset&&g.setPosition(Ya.fromArray(n.scalingOffset)),n.scalingPivot&&a.setPosition(Ya.fromArray(n.scalingPivot)),n.rotationOffset&&I.setPosition(Ya.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Ya.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(p.copy(n.parentMatrix),_.copy(n.parentMatrixWorld));const Q=i.clone().multiply(A).multiply(o),y=new xe;y.extractRotation(_);const h=new xe;h.copyPosition(_);const E=h.clone().invert().multiply(_),u=y.clone().invert().multiply(E),f=s,m=new xe;if(d===0)m.copy(y).multiply(Q).multiply(u).multiply(f);else if(d===1)m.copy(y).multiply(u).multiply(Q).multiply(f);else{const F=new xe().scale(new T().setFromMatrixScale(p)).clone().invert(),k=u.clone().multiply(F);m.copy(y).multiply(Q).multiply(k).multiply(f)}const M=c.clone().invert(),v=a.clone().invert();let b=e.clone().multiply(I).multiply(c).multiply(i).multiply(A).multiply(o).multiply(M).multiply(g).multiply(a).multiply(s).multiply(v);const x=new xe().copyPosition(b),w=_.clone().multiply(x);return B.copyPosition(w),b=B.clone().multiply(m),b.premultiply(_.invert()),b}function YO(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function iB(n){return n.split(",").map(function(i){return parseFloat(i)})}function qO(n,e,i){return e===void 0&&(e=0),i===void 0&&(i=n.byteLength),Lg(new Uint8Array(n,e,i))}function r5(n,e){for(let i=0,A=n.length,o=e.length;i<o;i++,A++)n[A]=e[i]}function o5(n,e,i,A){for(let o=i,s=0;o<A;o++,s++)n[s]=e[o];return n}function c2(n,e,i){return n.slice(0,e).concat(i).concat(n.slice(e))}const s5="modulepreload",a5=function(n,e){return new URL(n,e).href},C2={},g5=function(e,i,A){let o=Promise.resolve();if(i&&i.length>0){const a=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),I=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));o=Promise.allSettled(i.map(c=>{if(c=a5(c,A),c in C2)return;C2[c]=!0;const _=c.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(!!A)for(let Q=a.length-1;Q>=0;Q--){const y=a[Q];if(y.href===c&&(!_||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=_?"stylesheet":s5,_||(d.as="script"),d.crossOrigin="",d.href=c,I&&d.setAttribute("nonce",I),document.head.appendChild(d),_)return new Promise((Q,y)=>{d.addEventListener("load",Q),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=a,window.dispatchEvent(g),!g.defaultPrevented)throw a}return o.then(a=>{for(const g of a||[])g.status==="rejected"&&s(g.reason);return e().catch(s)})},I5=["Recast","Detour","DetourNavMeshBuilder","DetourTileCacheBuilder","NavMeshImporter","NavMeshExporter","CrowdUtils","ChunkyTriMeshUtils","RecastDebugDraw","DetourDebugDraw"],c5=["rcConfig","rcContext","dtNavMeshParams","dtNavMeshCreateParams","RecastLinearAllocator","RecastFastLZCompressor","rcChunkyTriMesh","dtTileCacheParams","dtTileCacheLayerHeader","Vec3","BoolRef","IntRef","UnsignedIntRef","UnsignedCharRef","UnsignedShortRef","FloatRef","IntArray","UnsignedIntArray","UnsignedCharArray","UnsignedShortArray","FloatArray"],K={isNull:n=>K.Module.getPointer(n)===0,destroy:n=>{K.Module.destroy(n)}},f7=async n=>{if(K.Module===void 0){{const e=(await g5(async()=>{const{default:i}=await Promise.resolve().then(()=>n7);return{default:i}},void 0,import.meta.url)).default;K.Module=await e()}for(const e of I5)K[e]=new K.Module[e];for(const e of c5)K[e]=K.Module[e];K.Recast.BORDER_REG,K.Recast.MULTIPLE_REGS,K.Recast.BORDER_VERTEX,K.Recast.AREA_BORDER,K.Recast.CONTOUR_REG_MASK,K.Recast.MESH_NULL_IDX,K.Recast.NULL_AREA,K.Recast.WALKABLE_AREA,K.Recast.NOT_CONNECTED,K.Module.RC_CONTOUR_TESS_WALL_EDGES,K.Module.RC_CONTOUR_TESS_AREA_EDGES,K.Module.RC_LOG_PROGRESS,K.Module.RC_LOG_WARNING,K.Module.RC_LOG_ERROR,K.Module.RC_TIMER_TOTAL,K.Module.RC_TIMER_TEMP,K.Module.RC_TIMER_RASTERIZE_TRIANGLES,K.Module.RC_TIMER_BUILD_COMPACTHEIGHTFIELD,K.Module.RC_TIMER_BUILD_CONTOURS,K.Module.RC_TIMER_BUILD_CONTOURS_TRACE,K.Module.RC_TIMER_BUILD_CONTOURS_SIMPLIFY,K.Module.RC_TIMER_FILTER_BORDER,K.Module.RC_TIMER_FILTER_WALKABLE,K.Module.RC_TIMER_MEDIAN_AREA,K.Module.RC_TIMER_FILTER_LOW_OBSTACLES,K.Module.RC_TIMER_BUILD_POLYMESH,K.Module.RC_TIMER_MERGE_POLYMESH,K.Module.RC_TIMER_ERODE_AREA,K.Module.RC_TIMER_MARK_BOX_AREA,K.Module.RC_TIMER_MARK_CYLINDER_AREA,K.Module.RC_TIMER_MARK_CONVEXPOLY_AREA,K.Module.RC_TIMER_BUILD_DISTANCEFIELD,K.Module.RC_TIMER_BUILD_DISTANCEFIELD_DIST,K.Module.RC_TIMER_BUILD_DISTANCEFIELD_BLUR,K.Module.RC_TIMER_BUILD_REGIONS,K.Module.RC_TIMER_BUILD_REGIONS_WATERSHED,K.Module.RC_TIMER_BUILD_REGIONS_EXPAND,K.Module.RC_TIMER_BUILD_REGIONS_FLOOD,K.Module.RC_TIMER_BUILD_REGIONS_FILTER,K.Module.RC_TIMER_BUILD_LAYERS,K.Module.RC_TIMER_BUILD_POLYMESHDETAIL,K.Module.RC_TIMER_MERGE_POLYMESHDETAIL,K.Module.RC_MAX_TIMERS,K.Detour.FAILURE,K.Detour.SUCCESS,K.Detour.IN_PROGRESS,K.Detour.STATUS_DETAIL_MASK,K.Detour.WRONG_MAGIC,K.Detour.WRONG_VERSION,K.Detour.OUT_OF_MEMORY,K.Detour.INVALID_PARAM,K.Detour.BUFFER_TOO_SMALL,K.Detour.OUT_OF_NODES,K.Detour.PARTIAL_RESULT,K.Detour.ALREADY_OCCUPIED,K.Detour.VERTS_PER_POLYGON,K.Detour.NAVMESH_MAGIC,K.Detour.NAVMESH_VERSION,K.Detour.NAVMESH_STATE_MAGIC,K.Detour.NAVMESH_STATE_VERSION,K.Detour.TILECACHE_MAGIC,K.Detour.TILECACHE_VERSION,K.Detour.TILECACHE_NULL_AREA,K.Detour.TILECACHE_WALKABLE_AREA,K.Detour.TILECACHE_NULL_IDX,K.Detour.NULL_LINK,K.Detour.NULL_LINK,K.Detour.EXT_LINK,K.Detour.OFFMESH_CON_BIDIR,K.Module.DT_STRAIGHTPATH_START,K.Module.DT_STRAIGHTPATH_END,K.Module.DT_STRAIGHTPATH_OFFMESH_CONNECTION,K.Module.DT_STRAIGHTPATH_AREA_CROSSINGS,K.Module.DT_STRAIGHTPATH_ALL_CROSSINGS,K.Module.DT_FINDPATH_ANY_ANGLE,K.Module.DT_RAYCAST_USE_COSTS,K.Module.DT_CROWDAGENT_STATE_INVALID,K.Module.DT_CROWDAGENT_STATE_WALKING,K.Module.DT_CROWDAGENT_STATE_OFFMESH,K.Module.DT_CROWDAGENT_TARGET_NONE,K.Module.DT_CROWDAGENT_TARGET_FAILED,K.Module.DT_CROWDAGENT_TARGET_VALID,K.Module.DT_CROWDAGENT_TARGET_REQUESTING,K.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_QUEUE,K.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_PATH,K.Module.DT_CROWDAGENT_TARGET_VELOCITY,K.Module.DT_COMPRESSEDTILE_FREE_DATA,K.Module.DT_TILE_FREE_DATA}};class mh{get size(){return this.raw.size}constructor(e){this.raw=e}get(e){return this.raw.get(e)}set(e,i){this.raw.set(e,i)}resize(e){this.raw.resize(e)}copy(e){this.raw.resize(e.length),this.getHeapView().set(e)}destroy(){K.destroy(this.raw)}getHeapView(){const e=this.getHeap();return new this.typedArrayClass(e.buffer,this.raw.getDataPointer(),this.size)}toTypedArray(){const e=this.getHeapView(),i=new this.typedArrayClass(this.size);return i.set(e),i}}class js extends mh{constructor(i){super(i??new K.Module.UnsignedIntArray);tr(this,"typedArrayClass",Uint32Array)}getHeap(){return K.Module.HEAPU32}static fromRaw(i){return new this(i)}}class C5 extends mh{constructor(i){super(i??new K.Module.UnsignedCharArray);tr(this,"typedArrayClass",Uint8Array)}getHeap(){return K.Module.HEAPU8}static fromRaw(i){return new this(i)}}class l2 extends mh{constructor(i){super(i??new K.Module.FloatArray);tr(this,"typedArrayClass",Float32Array)}getHeap(){return K.Module.HEAPF32}static fromRaw(i){return new this(i)}}const JA={toRaw:({x:n,y:e,z:i},A)=>A?(A.x=n,A.y=e,A.z=i,A):new K.Module.Vec3(n,e,i),fromRaw:n=>{const{x:e,y:i,z:A}=n;return{x:e,y:i,z:A}},fromArray:([n,e,i])=>({x:n,y:e,z:i}),toArray:({x:n,y:e,z:i})=>[n,e,i],lerp:(n,e,i,A={x:0,y:0,z:0})=>{A.x=n.x+(e.x-n.x)*i,A.y=n.y+(e.y-n.y)*i,A.z=n.z+(e.z-n.z)*i},copy:(n,e={x:0,y:0,z:0})=>{e.x=n.x,e.y=n.y,e.z=n.z}},Fg=(n,e)=>{const i=[];for(let A=0;A<e;A++)i.push(n(A));return i},yn=n=>K.Detour.statusSucceed(n);class l5{constructor(e){this.raw=e}vertBase(){return this.raw.vertBase}triBase(){return this.raw.triBase}vertCount(){return this.raw.vertCount}triCount(){return this.raw.triCount}}class _5{constructor(e){this.raw=e}ref(){return this.raw.ref}next(){return this.raw.next}edge(){return this.raw.edge}side(){return this.raw.side}bmin(){return this.raw.bmin}bmax(){return this.raw.bmax}}class p5{constructor(e){this.raw=e}bmin(){return JA.fromArray(Fg(e=>this.raw.get_bmin(e),3))}bmax(){return JA.fromArray(Fg(e=>this.raw.get_bmax(e),3))}i(){return this.raw.i}}class jO{constructor(e){this.raw=e}pos(e){return this.raw.get_pos(e)}rad(){return this.raw.rad}poly(){return this.raw.poly}flags(){return this.raw.flags}side(){return this.raw.side}userId(){return this.raw.userId}}class B5{constructor(e){this.raw=e}magic(){return this.raw.magic}version(){return this.raw.version}x(){return this.raw.x}y(){return this.raw.y}layer(){return this.raw.layer}userId(){return this.raw.userId}polyCount(){return this.raw.polyCount}vertCount(){return this.raw.vertCount}maxLinkCount(){return this.raw.maxLinkCount}detailMeshCount(){return this.raw.detailMeshCount}detailVertCount(){return this.raw.detailVertCount}detailTriCount(){return this.raw.detailTriCount}bvNodeCount(){return this.raw.bvNodeCount}offMeshConCount(){return this.raw.offMeshConCount}offMeshBase(){return this.raw.offMeshBase}walkableHeight(){return this.raw.walkableHeight}walkableRadius(){return this.raw.walkableRadius}walkableClimb(){return this.raw.walkableClimb}bmin(e){return this.raw.get_bmin(e)}bmax(e){return this.raw.get_bmax(e)}bvQuantFactor(){return this.raw.bvQuantFactor}}class sd{constructor(e){this.raw=e}firstLink(){return this.raw.firstLink}verts(e){return this.raw.get_verts(e)}neis(e){return this.raw.get_neis(e)}flags(){return this.raw.flags}vertCount(){return this.raw.vertCount}areaAndType(){return this.raw.get_areaAndtype()}getType(){return this.raw.getType()}}class Is{constructor(e){this.raw=e}salt(){return this.raw.salt}linksFreeList(){return this.raw.linksFreeList}header(){return K.isNull(this.raw.header)?null:new B5(this.raw.header)}polys(e){return new sd(this.raw.get_polys(e))}verts(e){return this.raw.get_verts(e)}links(e){return new _5(this.raw.get_links(e))}detailMeshes(e){return new l5(this.raw.get_detailMeshes(e))}detailVerts(e){return this.raw.get_detailVerts(e)}detailTris(e){return this.raw.get_detailTris(e)}bvTree(e){return new p5(this.raw.get_bvTree(e))}offMeshCons(e){return new jO(this.raw.get_offMeshCons(e))}data(e){return this.raw.get_data(e)}dataSize(){return this.raw.dataSize}flags(){return this.raw.flags}next(){return new Is(this.raw.next)}}class VO{get includeFlags(){return this.raw.getIncludeFlags()}set includeFlags(e){this.raw.setIncludeFlags(e)}get excludeFlags(){return this.raw.getExcludeFlags()}set excludeFlags(e){this.raw.setExcludeFlags(e)}constructor(e){this.raw=e??new K.Module.dtQueryFilter}getAreaCost(e){return this.raw.getAreaCost(e)}setAreaCost(e,i){return this.raw.setAreaCost(e,i)}}class E5{constructor(e,i){tr(this,"defaultQueryHalfExtents",{x:1,y:1,z:1});e instanceof K.Module.NavMeshQuery?this.raw=e:(this.raw=new K.Module.NavMeshQuery,this.raw.init(e.raw,(i==null?void 0:i.maxNodes)??2048)),i!=null&&i.defaultQueryFilter?this.defaultFilter=i.defaultQueryFilter:(this.defaultFilter=new VO,this.defaultFilter.includeFlags=65535,this.defaultFilter.excludeFlags=0)}findNearestPoly(e,i){var _;const A=new K.UnsignedIntRef,o=new K.Vec3,s=new K.BoolRef,a=this.raw.findNearestPoly(JA.toArray(e),JA.toArray((i==null?void 0:i.halfExtents)??this.defaultQueryHalfExtents),((_=i==null?void 0:i.filter)==null?void 0:_.raw)??this.defaultFilter.raw,A,o,s),g=JA.fromRaw(o);K.destroy(o);const I=A.value;K.destroy(A);const c=s.value;return K.destroy(s),{success:yn(a),status:a,nearestRef:I,nearestPoint:g,isOverPoly:c}}findPolysAroundCircle(e,i,A,o){const s=(o==null?void 0:o.filter)??this.defaultFilter,a=(o==null?void 0:o.maxPolys)??256,g=new js,I=new js,c=new l2;g.resize(a),I.resize(a),c.resize(a);const _=new K.IntRef,p=this.raw.findPolysAroundCircle(e,JA.toArray(i),A,s.raw,g.raw,I.raw,c.raw,_,a),B=[...g.getHeapView()];g.destroy();const d=[...I.getHeapView()];I.destroy();const Q=[...c.getHeapView()];c.destroy();const y=_.value;return K.destroy(_),{success:yn(p),status:p,resultRefs:B,resultParents:d,resultCost:Q,resultCount:y}}queryPolygons(e,i,A){const o=(A==null?void 0:A.filter)??this.defaultFilter,s=(A==null?void 0:A.maxPolys)??256,a=new js;a.resize(s);const g=new K.IntRef,I=this.raw.queryPolygons(JA.toArray(e),JA.toArray(i),o.raw,a.raw,g,s),c=g.value;K.destroy(g);const _=[...a.getHeapView()];return a.destroy(),{success:yn(I),status:I,polyRefs:_,polyCount:c}}closestPointOnPoly(e,i){const A=new K.Vec3,o=new K.BoolRef,s=this.raw.closestPointOnPoly(e,JA.toArray(i),A,o),a=JA.fromRaw(A);K.destroy(A);const g=o.value;return K.destroy(o),{success:yn(s),status:s,closestPoint:a,isPointOverPoly:g}}findClosestPoint(e,i){const A=(i==null?void 0:i.filter)??this.defaultFilter,o=(i==null?void 0:i.halfExtents)??this.defaultQueryHalfExtents,s=new K.UnsignedIntRef,a=new K.Vec3,g=new K.BoolRef,I=this.raw.findClosestPoint(JA.toArray(e),JA.toArray(o),A.raw,s,a,g),c=s.value;K.destroy(s);const _=JA.fromRaw(a);K.destroy(a);const p=g.value;return K.destroy(g),{success:yn(I),status:I,polyRef:c,point:_,isPointOverPoly:p}}findRandomPointAroundCircle(e,i,A){const o=(A==null?void 0:A.filter)??this.defaultFilter,s=(A==null?void 0:A.halfExtents)??this.defaultQueryHalfExtents;let a;if(A!=null&&A.startRef)a=A.startRef;else{const B=this.findNearestPoly(e,{filter:o,halfExtents:s});if(!B.success)return{success:!1,status:B.status,randomPolyRef:0,randomPoint:{x:0,y:0,z:0}};a=B.nearestRef}const g=new K.UnsignedIntRef,I=new K.Vec3,c=this.raw.findRandomPointAroundCircle(a,JA.toArray(e),i,o.raw,g,I),_=g.value;K.destroy(g);const p=JA.fromRaw(I);return K.destroy(I),{success:yn(c),status:c,randomPolyRef:_,randomPoint:p}}moveAlongSurface(e,i,A,o){var B;const s=(o==null?void 0:o.maxVisitedSize)??256,a=new K.Vec3,g=new js,I=((B=o==null?void 0:o.filter)==null?void 0:B.raw)??this.defaultFilter.raw,c=this.raw.moveAlongSurface(e,JA.toArray(i),JA.toArray(A),I,a,g.raw,s),_=JA.fromRaw(a);K.destroy(a);const p=[...g.getHeapView()];return g.destroy(),{success:yn(c),status:c,resultPosition:_,visited:p}}findRandomPoint(e){var g;const i=new K.UnsignedIntRef,A=new K.Vec3,o=this.raw.findRandomPoint(((g=e==null?void 0:e.filter)==null?void 0:g.raw)??this.defaultFilter.raw,i,A),s=i.value;K.destroy(i);const a=JA.fromRaw(A);return K.destroy(A),{success:yn(o),status:o,randomPolyRef:s,randomPoint:a}}getPolyHeight(e,i){const A=new K.FloatRef,o=this.raw.getPolyHeight(e,JA.toArray(i),A),s=A.value;return K.destroy(A),{success:yn(o),status:o,height:s}}computePath(e,i,A){const o=(A==null?void 0:A.filter)??this.defaultFilter,s=(A==null?void 0:A.halfExtents)??this.defaultQueryHalfExtents,a=this.findNearestPoly(e,{filter:o,halfExtents:s});if(!a.success)return{success:!1,error:{name:"findNearestPoly for start position failed",status:a.status},path:[]};const g=this.findNearestPoly(i,{filter:o,halfExtents:s});if(!g.success)return{success:!1,error:{name:"findNearestPoly for end position failed",status:g.status},path:[]};const I=a.nearestRef,c=g.nearestRef,_=(A==null?void 0:A.maxPathPolys)??256,p=this.findPath(I,c,e,i,{filter:o,maxPathPolys:_});if(!p.success)return{success:!1,error:{name:"findPath unsuccessful",status:p.status},path:[]};if(p.polys.size<=0)return{success:!1,error:{name:"no polygon path found"},path:[]};const B=p.polys.get(p.polys.size-1);let d={x:i.x,y:i.y,z:i.z};if(B!==c){const f=this.closestPointOnPoly(B,i);if(!f.success)return{success:!1,error:{name:"no closest point on last polygon found",status:f.status},path:[]};d=f.closestPoint}const Q=A==null?void 0:A.maxStraightPathPoints,y=this.findStraightPath(e,d,p.polys,{maxStraightPathPoints:Q});if(!y.success)return{success:!1,error:{name:"findStraightPath unsuccessful",status:y.status},path:[]};const{straightPath:h,straightPathCount:E}=y,u=[];for(let f=0;f<E;f++)u.push({x:h.get(f*3),y:h.get(f*3+1),z:h.get(f*3+2)});return p.polys.destroy(),y.straightPath.destroy(),y.straightPathFlags.destroy(),y.straightPathRefs.destroy(),{success:!0,path:u}}findPath(e,i,A,o,s){const a=(s==null?void 0:s.filter)??this.defaultFilter,g=(s==null?void 0:s.maxPathPolys)??256,I=new js;I.resize(g);const c=this.raw.findPath(e,i,JA.toArray(A),JA.toArray(o),a.raw,I.raw,g);return{success:yn(c),status:c,polys:I}}findStraightPath(e,i,A,o){const s=(o==null?void 0:o.maxStraightPathPoints)??256,a=(o==null?void 0:o.straightPathOptions)??0;let g;Array.isArray(A)?(g=new js,g.copy(A)):g=A;const I=new l2;I.resize(s*3);const c=new C5;c.resize(s);const _=new js;_.resize(s);const p=new K.IntRef,B=this.raw.findStraightPath(JA.toArray(e),JA.toArray(i),g.raw,I.raw,c.raw,_.raw,p,s,a),d=p.value;return K.destroy(p),Array.isArray(A)&&g.destroy(),{success:yn(B),status:B,straightPath:I,straightPathFlags:c,straightPathRefs:_,straightPathCount:d}}raycast(e,i,A,o){var p;const s=new K.Module.dtRaycastHit,a=(o==null?void 0:o.raycastOptions)??0,g=(o==null?void 0:o.prevRef)??0,I=((p=o==null?void 0:o.filter)==null?void 0:p.raw)??this.defaultFilter.raw,c=this.raw.raycast(e,JA.toArray(i),JA.toArray(A),I,a,s,g),_={success:yn(c),status:c,t:s.t,hitNormal:JA.fromArray(Fg(B=>s.get_hitNormal(B),3)),hitEdgeIndex:s.hitEdgeIndex,path:Fg(B=>s.get_path(B),s.pathCount),maxPath:s.maxPath,pathCost:s.pathCost};return K.destroy(s),_}destroy(){this.raw.destroy()}}const zO={radius:.5,height:1,maxAcceleration:20,maxSpeed:6,collisionQueryRange:2.5,pathOptimizationRange:0,separationWeight:0,updateFlags:7,obstacleAvoidanceType:0,queryFilterType:0,userData:0};class d5{constructor(e,i){tr(this,"interpolatedPosition",{x:0,y:0,z:0});this.crowd=e,this.agentIndex=i,this.raw=e.raw.getEditableAgent(i),this.interpolatedPosition=this.position()}get radius(){return this.raw.params.radius}set radius(e){this.raw.params.radius=e}get height(){return this.raw.params.height}set height(e){this.raw.params.height=e}get maxAcceleration(){return this.raw.params.maxAcceleration}set maxAcceleration(e){this.raw.params.maxAcceleration=e}get maxSpeed(){return this.raw.params.maxSpeed}set maxSpeed(e){this.raw.params.maxSpeed=e}get collisionQueryRange(){return this.raw.params.collisionQueryRange}set collisionQueryRange(e){this.raw.params.collisionQueryRange=e}get pathOptimizationRange(){return this.raw.params.pathOptimizationRange}set pathOptimizationRange(e){this.raw.params.pathOptimizationRange=e}get separationWeight(){return this.raw.params.separationWeight}set separationWeight(e){this.raw.params.separationWeight=e}get updateFlags(){return this.raw.params.updateFlags}set updateFlags(e){this.raw.params.updateFlags=e}get obstacleAvoidanceType(){return this.raw.params.obstacleAvoidanceType}set obstacleAvoidanceType(e){this.raw.params.obstacleAvoidanceType=e}get queryFilterType(){return this.raw.params.queryFilterType}set queryFilterType(e){this.raw.params.queryFilterType=e}get userData(){return this.raw.params.userData}set userData(e){this.raw.params.userData=e}requestMoveTarget(e){const{nearestPoint:i,nearestRef:A}=this.crowd.navMeshQuery.findNearestPoly(e,{halfExtents:this.crowd.navMeshQuery.defaultQueryHalfExtents,filter:this.crowd.navMeshQuery.defaultFilter});return this.crowd.raw.requestMoveTarget(this.agentIndex,A,JA.toArray(i))}requestMoveVelocity(e){return this.crowd.raw.requestMoveVelocity(this.agentIndex,JA.toArray(e))}resetMoveTarget(){this.crowd.raw.resetMoveTarget(this.agentIndex)}teleport(e){K.CrowdUtils.agentTeleport(this.crowd.raw,this.agentIndex,JA.toArray(e),JA.toArray(this.crowd.navMeshQuery.defaultQueryHalfExtents),this.crowd.navMeshQuery.defaultFilter.raw),JA.copy(e,this.interpolatedPosition)}position(){return{x:this.raw.get_npos(0),y:this.raw.get_npos(1),z:this.raw.get_npos(2)}}velocity(){return{x:this.raw.get_vel(0),y:this.raw.get_vel(1),z:this.raw.get_vel(2)}}desiredVelocity(){return{x:this.raw.get_dvel(0),y:this.raw.get_dvel(1),z:this.raw.get_dvel(2)}}desiredVelocityObstacleAdjusted(){return{x:this.raw.get_nvel(0),y:this.raw.get_nvel(1),z:this.raw.get_nvel(2)}}state(){return this.raw.state}target(){return{x:this.raw.get_targetPos(0),y:this.raw.get_targetPos(1),z:this.raw.get_targetPos(2)}}nextTargetInPath(){return{x:this.raw.get_cornerVerts(0),y:this.raw.get_cornerVerts(1),z:this.raw.get_cornerVerts(2)}}corners(){const e=[];for(let i=0;i<this.raw.ncorners;i++)e.push({x:this.raw.get_cornerVerts(i*3),y:this.raw.get_cornerVerts(i*3+1),z:this.raw.get_cornerVerts(i*3+2)});return e}parameters(){const{params:e}=this.raw;return{radius:e.radius,height:e.height,maxAcceleration:e.maxAcceleration,maxSpeed:e.maxSpeed,collisionQueryRange:e.collisionQueryRange,pathOptimizationRange:e.pathOptimizationRange,separationWeight:e.separationWeight,updateFlags:e.updateFlags,obstacleAvoidanceType:e.obstacleAvoidanceType,queryFilterType:e.queryFilterType,userData:e.userData}}updateParameters(e){const i={...this.parameters(),...e};this.setParameters(i)}setParameters(e){const i={...zO,...e},A=new K.Module.dtCrowdAgentParams;A.radius=i.radius,A.height=i.height,A.maxAcceleration=i.maxAcceleration,A.maxSpeed=i.maxSpeed,A.collisionQueryRange=i.collisionQueryRange,A.pathOptimizationRange=i.pathOptimizationRange,A.separationWeight=i.separationWeight,A.updateFlags=i.updateFlags,A.obstacleAvoidanceType=i.obstacleAvoidanceType,A.queryFilterType=i.queryFilterType,A.userData=i.userData,this.crowd.raw.updateAgentParameters(this.agentIndex,A)}overOffMeshConnection(){return K.CrowdUtils.overOffMeshConnection(this.crowd.raw,this.agentIndex)}}class y7{constructor(e,{maxAgents:i,maxAgentRadius:A}){tr(this,"agents",{});tr(this,"accumulator",0);this.navMesh=e,this.raw=K.Detour.allocCrowd(),this.raw.init(i,A,e.raw.getNavMesh()),this.navMeshQuery=new E5(new K.Module.NavMeshQuery(this.raw.getNavMeshQuery()))}update(e,i,A=10){if(i===void 0)this.raw.update(e,void 0);else{this.accumulator+=i;let o=0;for(;this.accumulator>=e&&o<A;)this.raw.update(e,void 0),this.accumulator-=e,o++;const s=this.accumulator%e/e,a=this.getAgents();for(const g of a)JA.lerp(g.interpolatedPosition,g.position(),s,g.interpolatedPosition)}}addAgent(e,i){const A={...zO,...i},o=new K.Module.dtCrowdAgentParams;o.radius=A.radius,o.height=A.height,o.maxAcceleration=A.maxAcceleration,o.maxSpeed=A.maxSpeed,o.collisionQueryRange=A.collisionQueryRange,o.pathOptimizationRange=A.pathOptimizationRange,o.separationWeight=A.separationWeight,o.updateFlags=A.updateFlags,o.obstacleAvoidanceType=A.obstacleAvoidanceType,o.queryFilterType=A.queryFilterType,o.userData=A.userData;const s=this.raw.addAgent(JA.toArray(e),o),a=new d5(this,s);return this.agents[s]=a,a}getAgent(e){const i=this.agents[e];return i||null}removeAgent(e){const i=typeof e=="number"?e:e.agentIndex;this.raw.removeAgent(i),delete this.agents[i]}getAgentCount(){return this.raw.getAgentCount()}getActiveAgentCount(){return K.CrowdUtils.getActiveAgentCount(this.raw)}getAgents(){return Object.values(this.agents)}getFilter(e){return new VO(this.raw.getEditableFilter(e))}destroy(){K.Detour.freeCrowd(this.raw)}}class h5{constructor(){tr(this,"currentPrimitiveType",0);tr(this,"currentVertices",[]);tr(this,"primitives",[]);this.debugDrawImpl=new K.Module.DebugDrawImpl,this.debugDrawImpl.handleBegin=(i,A)=>{this.currentPrimitiveType=i,this.currentVertices=[]},this.debugDrawImpl.handleDepthMask=i=>{},this.debugDrawImpl.handleTexture=i=>{},this.debugDrawImpl.handleVertexWithColor=(i,A,o,s)=>{this.vertex(i,A,o,s)},this.debugDrawImpl.handleVertexWithColorAndUV=(i,A,o,s,a,g)=>{this.vertex(i,A,o,s)};const e={[K.Module.DU_DRAW_LINES]:"lines",[K.Module.DU_DRAW_TRIS]:"tris",[K.Module.DU_DRAW_QUADS]:"quads",[K.Module.DU_DRAW_POINTS]:"points"};this.debugDrawImpl.handleEnd=()=>{const i=e[this.currentPrimitiveType];this.primitives.push({type:i,vertices:this.currentVertices})}}flush(){const e=this.primitives;return this.primitives=[],e}drawHeightfieldSolid(e){return K.RecastDebugDraw.debugDrawHeightfieldSolid(this.debugDrawImpl,e.raw),this.flush()}drawHeightfieldWalkable(e){return K.RecastDebugDraw.debugDrawHeightfieldWalkable(this.debugDrawImpl,e.raw),this.flush()}drawCompactHeightfieldSolid(e){return K.RecastDebugDraw.debugDrawCompactHeightfieldSolid(this.debugDrawImpl,e.raw),this.flush()}drawCompactHeightfieldRegions(e){return K.RecastDebugDraw.debugDrawCompactHeightfieldRegions(this.debugDrawImpl,e.raw),this.flush()}drawCompactHeightfieldDistance(e){return K.RecastDebugDraw.debugDrawCompactHeightfieldDistance(this.debugDrawImpl,e.raw),this.flush()}drawHeightfieldLayer(e,i){return K.RecastDebugDraw.debugDrawHeightfieldLayer(this.debugDrawImpl,e.raw,i),this.flush()}drawHeightfieldLayers(e){return K.RecastDebugDraw.debugDrawHeightfieldLayers(this.debugDrawImpl,e.raw),this.flush()}drawRegionConnections(e,i=1){return K.RecastDebugDraw.debugDrawRegionConnections(this.debugDrawImpl,e.raw,i),this.flush()}drawRawContours(e,i=1){return K.RecastDebugDraw.debugDrawRawContours(this.debugDrawImpl,e.raw,i),this.flush()}drawContours(e,i=1){return K.RecastDebugDraw.debugDrawContours(this.debugDrawImpl,e.raw,i),this.flush()}drawPolyMesh(e){return K.RecastDebugDraw.debugDrawPolyMesh(this.debugDrawImpl,e.raw),this.flush()}drawPolyMeshDetail(e){return K.RecastDebugDraw.debugDrawPolyMeshDetail(this.debugDrawImpl,e.raw),this.flush()}drawNavMesh(e,i=0){return K.DetourDebugDraw.debugDrawNavMesh(this.debugDrawImpl,e.raw.getNavMesh(),i),this.flush()}drawNavMeshWithClosedList(e,i,A=0){return K.DetourDebugDraw.debugDrawNavMeshWithClosedList(this.debugDrawImpl,e.raw.m_navMesh,i.raw.m_navQuery,A),this.flush()}drawNavMeshNodes(e){return K.DetourDebugDraw.debugDrawNavMeshNodes(this.debugDrawImpl,e.raw.m_navQuery),this.flush()}drawNavMeshBVTree(e){return K.DetourDebugDraw.debugDrawNavMeshBVTree(this.debugDrawImpl,e.raw.m_navMesh),this.flush()}drawNavMeshPortals(e){return K.DetourDebugDraw.debugDrawNavMeshPortals(this.debugDrawImpl,e.raw.m_navMesh),this.flush()}drawNavMeshPolysWithFlags(e,i,A){return K.DetourDebugDraw.debugDrawNavMeshPolysWithFlags(this.debugDrawImpl,e.raw.m_navMesh,i,A),this.flush()}drawNavMeshPoly(e,i,A){return K.DetourDebugDraw.debugDrawNavMeshPoly(this.debugDrawImpl,e.raw.m_navMesh,i,A),this.flush()}dispose(){K.Module.destroy(this.debugDrawImpl)}vertex(e,i,A,o){const s=(o>>16&255)/255,a=(o>>8&255)/255,g=(o&255)/255,I=(o>>24&255)/255;this.currentVertices.push([e,i,A,s,a,g,I])}}class u5{constructor(e){this.raw=e}tiles(e){return new Is(this.raw.get_tiles(e))}tileCount(){return this.raw.tileCount}}class Q5{constructor(e){this.raw=e}data(){return Fg(e=>this.raw.get_data(e),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class f5{constructor(e){this.raw=e}tileX(){return this.raw.tileX}tileY(){return this.raw.tileY}}class y5{constructor(e){this.raw=e}data(){return Fg(e=>this.raw.get_data(e),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class m5{constructor(e){this.raw=e??new K.Module.NavMesh}initSolo(e){return this.raw.initSolo(e.raw)}initTiled(e){return this.raw.initTiled(e.raw)}addTile(e,i,A){const o=new K.UnsignedIntRef,s=this.raw.addTile(e.raw,i,A,o),a=o.value;return K.destroy(o),{status:s,tileRef:a}}decodePolyId(e){const i=new K.UnsignedIntRef,A=new K.UnsignedIntRef,o=new K.UnsignedIntRef;this.raw.decodePolyId(e,i,A,o);const s=i.value;K.destroy(i);const a=A.value;K.destroy(A);const g=o.value;return K.destroy(o),{tileSalt:s,tileIndex:a,tilePolygonIndex:g}}encodePolyId(e,i,A){return this.raw.encodePolyId(e,i,A)}removeTile(e){return new Q5(this.raw.removeTile(e))}calcTileLoc(e){return new f5(this.raw.calcTileLoc(JA.toArray(e)))}getTileAt(e,i,A){const o=this.raw.getTileAt(e,i,A);return K.isNull(o)?null:new Is(o)}getTilesAt(e,i,A){return new u5(this.raw.getTilesAt(e,i,A))}getTileRefAt(e,i,A){return this.raw.getTileRefAt(e,i,A)}getTileRef(e){return this.raw.getTileRef(e.raw)}getTileByRef(e){const i=this.raw.getTileByRef(e);return K.isNull(i)?null:new Is(i)}getMaxTiles(){return this.raw.getMaxTiles()}getTile(e){return new Is(this.raw.getTile(e))}getTileAndPolyByRef(e){const i=this.raw.getTileAndPolyByRef(e),A=new Is(i.tile),o=new sd(i.poly);return{success:yn(i.status),status:i.status,tile:A,poly:o}}getTileAndPolyByRefUnsafe(e){const i=this.raw.getTileAndPolyByRef(e),A=new Is(i.tile),o=new sd(i.poly);return{tile:A,poly:o}}isValidPolyRef(e){return this.raw.isValidPolyRef(e)}getPolyRefBase(e){return this.raw.getPolyRefBase(e.raw)}getOffMeshConnectionPolyEndPoints(e,i){const A=new K.Vec3,o=new K.Vec3,s=this.raw.getOffMeshConnectionPolyEndPoints(e,i,A,o),a=JA.fromRaw(A);K.destroy(A);const g=JA.fromRaw(o);return K.destroy(o),{success:yn(s),status:s,start:a,end:g}}getOffMeshConnectionByRef(e){return new jO(this.raw.getOffMeshConnectionByRef(e))}setPolyFlags(e,i){return this.raw.setPolyFlags(e,i)}getPolyFlags(e){const i=new K.UnsignedShortRef,A=this.raw.getPolyFlags(e,i),o=i.value;return K.destroy(i),{status:A,flags:o}}setPolyArea(e,i){return this.raw.setPolyArea(e,i)}getPolyArea(e){const i=new K.UnsignedCharRef,A=this.raw.getPolyArea(e,i),o=i.value;return K.destroy(i),{status:A,area:o}}getTileStateSize(e){return this.raw.getTileStateSize(e.raw)}storeTileState(e,i){return new y5(this.raw.storeTileState(e.raw,i))}restoreTileState(e,i,A){return this.raw.restoreTileState(e.raw,i,A)}getDebugNavMesh(){const e=[],i=[];let A=0;const o=this.getMaxTiles();for(let s=0;s<o;s++){const a=this.getTile(s),g=a.header();if(!g)continue;const I=g.polyCount();for(let c=0;c<I;++c){const _=a.polys(c);if(_.getType()===1)continue;const p=_.vertCount(),B=a.detailMeshes(c),d=B.triBase(),Q=B.triCount();for(let y=0;y<Q;++y){const h=(d+y)*4;for(let E=0;E<3;++E){if(a.detailTris(h+E)<p){const u=_.verts(a.detailTris(h+E))*3;e.push(a.verts(u),a.verts(u+1),a.verts(u+2))}else{const u=(B.vertBase()+a.detailTris(h+E)-_.vertCount())*3;e.push(a.detailVerts(u),a.detailVerts(u+1),a.detailVerts(u+2))}i.push(A++)}}}}return[e,i]}destroy(){this.raw.destroy(),K.Module.destroy(this.raw)}}const D5=n=>{const e=n.length*n.BYTES_PER_ELEMENT,i=K.Module._malloc(e),A=new Uint8Array(K.Module.HEAPU8.buffer,i,e);A.set(n);const o=new K.Module.NavMeshExport;return o.dataPointer=A.byteOffset,o.size=n.length,{navMeshExport:o,dataHeap:A}},m7=n=>{const{navMeshExport:e,dataHeap:i}=D5(n),A=K.NavMeshImporter.importNavMesh(e,void 0);return K.Module._free(i.byteOffset),{navMesh:new m5(A.navMesh)}};Re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new iA(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Dn.line={uniforms:Ng.merge([Re.common,Re.fog,Re.line]),vertexShader:`
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
		`};class WO extends Oi{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Ng.clone(Dn.line.uniforms),vertexShader:Dn.line.vertexShader,fragmentShader:Dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const _2=new St,qC=new T;class XO extends SX{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],A=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(A),this.setAttribute("position",new xt(e,3)),this.setAttribute("uv",new xt(i,2))}applyMatrix4(e){const i=this.attributes.instanceStart,A=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),A.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const A=new qE(i,6,1);return this.setAttribute("instanceStart",new Ro(A,3,0)),this.setAttribute("instanceEnd",new Ro(A,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const A=new qE(i,6,1);return this.setAttribute("instanceColorStart",new Ro(A,3,0)),this.setAttribute("instanceColorEnd",new Ro(A,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new aX(e.geometry)),this}fromLineSegments(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),_2.setFromBufferAttribute(i),this.boundingBox.union(_2))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){const A=this.boundingSphere.center;this.boundingBox.getCenter(A);let o=0;for(let s=0,a=e.count;s<a;s++)qC.fromBufferAttribute(e,s),o=Math.max(o,A.distanceToSquared(qC)),qC.fromBufferAttribute(i,s),o=Math.max(o,A.distanceToSquared(qC));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const nB=new fA,p2=new T,B2=new T,Ti=new fA,Ui=new fA,jr=new fA,rB=new T,oB=new xe,ki=new no,E2=new T,jC=new St,VC=new wi,Vr=new fA;let $r,oa;function d2(n,e,i){return Vr.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Vr.multiplyScalar(1/Vr.w),Vr.x=oa/i.width,Vr.y=oa/i.height,Vr.applyMatrix4(n.projectionMatrixInverse),Vr.multiplyScalar(1/Vr.w),Math.abs(Math.max(Vr.x,Vr.y))}function S5(n,e){const i=n.matrixWorld,A=n.geometry,o=A.attributes.instanceStart,s=A.attributes.instanceEnd,a=Math.min(A.instanceCount,o.count);for(let g=0,I=a;g<I;g++){ki.start.fromBufferAttribute(o,g),ki.end.fromBufferAttribute(s,g),ki.applyMatrix4(i);const c=new T,_=new T;$r.distanceSqToSegment(ki.start,ki.end,_,c),_.distanceTo(c)<oa*.5&&e.push({point:_,pointOnLine:c,distance:$r.origin.distanceTo(_),object:n,face:null,faceIndex:g,uv:null,uv1:null})}}function w5(n,e,i){const A=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,g=n.geometry,I=g.attributes.instanceStart,c=g.attributes.instanceEnd,_=Math.min(g.instanceCount,I.count),p=-e.near;$r.at(1,jr),jr.w=1,jr.applyMatrix4(e.matrixWorldInverse),jr.applyMatrix4(A),jr.multiplyScalar(1/jr.w),jr.x*=s.x/2,jr.y*=s.y/2,jr.z=0,rB.copy(jr),oB.multiplyMatrices(e.matrixWorldInverse,a);for(let B=0,d=_;B<d;B++){if(Ti.fromBufferAttribute(I,B),Ui.fromBufferAttribute(c,B),Ti.w=1,Ui.w=1,Ti.applyMatrix4(oB),Ui.applyMatrix4(oB),Ti.z>p&&Ui.z>p)continue;if(Ti.z>p){const f=Ti.z-Ui.z,m=(Ti.z-p)/f;Ti.lerp(Ui,m)}else if(Ui.z>p){const f=Ui.z-Ti.z,m=(Ui.z-p)/f;Ui.lerp(Ti,m)}Ti.applyMatrix4(A),Ui.applyMatrix4(A),Ti.multiplyScalar(1/Ti.w),Ui.multiplyScalar(1/Ui.w),Ti.x*=s.x/2,Ti.y*=s.y/2,Ui.x*=s.x/2,Ui.y*=s.y/2,ki.start.copy(Ti),ki.start.z=0,ki.end.copy(Ui),ki.end.z=0;const y=ki.closestPointToPointParameter(rB,!0);ki.at(y,E2);const h=sr.lerp(Ti.z,Ui.z,y),E=h>=-1&&h<=1,u=rB.distanceTo(E2)<oa*.5;if(E&&u){ki.start.fromBufferAttribute(I,B),ki.end.fromBufferAttribute(c,B),ki.start.applyMatrix4(a),ki.end.applyMatrix4(a);const f=new T,m=new T;$r.distanceSqToSegment(ki.start,ki.end,m,f),i.push({point:m,pointOnLine:f,distance:$r.origin.distanceTo(m),object:n,face:null,faceIndex:B,uv:null,uv1:null})}}}class h2 extends Gt{constructor(e=new XO,i=new WO({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,i=e.attributes.instanceStart,A=e.attributes.instanceEnd,o=new Float32Array(2*i.count);for(let a=0,g=0,I=i.count;a<I;a++,g+=2)p2.fromBufferAttribute(i,a),B2.fromBufferAttribute(A,a),o[g]=g===0?0:o[g-1],o[g+1]=o[g]+p2.distanceTo(B2);const s=new qE(o,2,1);return e.setAttribute("instanceDistanceStart",new Ro(s,1,0)),e.setAttribute("instanceDistanceEnd",new Ro(s,1,1)),this}raycast(e,i){const A=this.material.worldUnits,o=e.camera;o===null&&!A&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;$r=e.ray;const a=this.matrixWorld,g=this.geometry,I=this.material;oa=I.linewidth+s,g.boundingSphere===null&&g.computeBoundingSphere(),VC.copy(g.boundingSphere).applyMatrix4(a);let c;if(A)c=oa*.5;else{const p=Math.max(o.near,VC.distanceToPoint($r.origin));c=d2(o,p,I.resolution)}if(VC.radius+=c,$r.intersectsSphere(VC)===!1)return;g.boundingBox===null&&g.computeBoundingBox(),jC.copy(g.boundingBox).applyMatrix4(a);let _;if(A)_=oa*.5;else{const p=Math.max(o.near,jC.distanceToPoint($r.origin));_=d2(o,p,I.resolution)}jC.expandByScalar(_),$r.intersectsBox(jC)!==!1&&(A?S5(this,i):w5(this,o,i))}onBeforeRender(e){const i=this.material.uniforms;i&&i.resolution&&(e.getViewport(nB),this.material.uniforms.resolution.value.set(nB.z,nB.w))}}const v5=n=>{const e=[],i=[],A={};let o=0;for(const{positions:s,indices:a}of n)for(let g=0;g<a.length;g++){const I=a[g]*3,c=s[I],_=s[I+1],p=s[I+2],B=`${c}_${_}_${p}`;let d=A[B];d||(A[B]=d=o,e.push(c,_,p),o++),i.push(d)}return[Float32Array.from(e),Uint32Array.from(i)]},b5=new Ue;class D7 extends Ao{constructor({triMaterial:i,pointMaterial:A,lineMaterial:o}={}){super();tr(this,"pointGeometry",new ph(.02,32,32));this.debugDrawerUtils=new h5,this.triMaterial=i??new Mo({vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1}),this.pointMaterial=A??new Mo,this.lineMaterial=o??new WO({color:16777215,linewidth:2,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-10})}drawPrimitives(i){for(const A of i)switch(A.type){case"points":this.drawPoints(A);break;case"lines":this.drawLines(A);break;case"tris":this.drawTris(A);break;case"quads":this.drawQuads(A);break}}drawHeightfieldSolid(i){const A=this.debugDrawerUtils.drawHeightfieldSolid(i);this.drawPrimitives(A)}drawHeightfieldWalkable(i){const A=this.debugDrawerUtils.drawHeightfieldWalkable(i);this.drawPrimitives(A)}drawCompactHeightfieldSolid(i){const A=this.debugDrawerUtils.drawCompactHeightfieldSolid(i);this.drawPrimitives(A)}drawCompactHeightfieldRegions(i){const A=this.debugDrawerUtils.drawCompactHeightfieldRegions(i);this.drawPrimitives(A)}drawCompactHeightfieldDistance(i){const A=this.debugDrawerUtils.drawCompactHeightfieldDistance(i);this.drawPrimitives(A)}drawHeightfieldLayer(i,A){const o=this.debugDrawerUtils.drawHeightfieldLayer(i,A);this.drawPrimitives(o)}drawHeightfieldLayers(i){const A=this.debugDrawerUtils.drawHeightfieldLayers(i);this.drawPrimitives(A)}drawRegionConnections(i,A=1){const o=this.debugDrawerUtils.drawRegionConnections(i,A);this.drawPrimitives(o)}drawRawContours(i,A=1){const o=this.debugDrawerUtils.drawRawContours(i,A);this.drawPrimitives(o)}drawContours(i,A=1){const o=this.debugDrawerUtils.drawContours(i,A);this.drawPrimitives(o)}drawPolyMesh(i){const A=this.debugDrawerUtils.drawPolyMesh(i);this.drawPrimitives(A)}drawPolyMeshDetail(i){const A=this.debugDrawerUtils.drawPolyMeshDetail(i);this.drawPrimitives(A)}drawNavMesh(i,A=0){const o=this.debugDrawerUtils.drawNavMesh(i,A);this.drawPrimitives(o)}drawNavMeshWithClosedList(i,A,o=0){const s=this.debugDrawerUtils.drawNavMeshWithClosedList(i,A,o);this.drawPrimitives(s)}drawNavMeshNodes(i){const A=this.debugDrawerUtils.drawNavMeshNodes(i);this.drawPrimitives(A)}drawNavMeshBVTree(i){const A=this.debugDrawerUtils.drawNavMeshBVTree(i);this.drawPrimitives(A)}drawNavMeshPortals(i){const A=this.debugDrawerUtils.drawNavMeshPortals(i);this.drawPrimitives(A)}drawNavMeshPolysWithFlags(i,A,o){const s=this.debugDrawerUtils.drawNavMeshPolysWithFlags(i,A,o);this.drawPrimitives(s)}drawNavMeshPoly(i,A,o){const s=this.debugDrawerUtils.drawNavMeshPoly(i,A,o);this.drawPrimitives(s)}reset(){for(const i of this.children)(i instanceof Gt||i instanceof h2)&&i.geometry.dispose();this.clear()}dispose(){this.debugDrawerUtils.dispose(),this.reset(),this.pointGeometry.dispose(),this.triMaterial.dispose(),this.pointMaterial.dispose(),this.lineMaterial.dispose()}drawPoints(i){const A=this.pointGeometry,o=new BO(A,this.pointMaterial,i.vertices.length/3);for(let s=0;s<i.vertices.length/7;s++){const[a,g,I,c,_,p]=i.vertices[s];o.setMatrixAt(s,new xe().setPosition(a,g,I)),o.setColorAt(s,b5.setRGB(c,_,p))}o.instanceMatrix.needsUpdate=!0,this.add(o)}drawLines(i){const A=new XO,o=[],s=[];for(let g=0;g<i.vertices.length;g+=2){const[I,c,_,p,B,d]=i.vertices[g],[Q,y,h,E,u,f]=i.vertices[g+1];o.push(I,c,_),o.push(Q,y,h),s.push(p,B,d),s.push(E,u,f)}A.setPositions(o),A.setColors(s);const a=new h2(A,this.lineMaterial);this.add(a)}drawTris(i){const A=new Ut,o=new Float32Array(i.vertices.length*3),s=new Float32Array(i.vertices.length*3);for(let I=0;I<i.vertices.length;I++){const[c,_,p,B,d,Q]=i.vertices[I];o[I*3+0]=c,o[I*3+1]=_,o[I*3+2]=p,s[I*3+0]=B,s[I*3+1]=d,s[I*3+2]=Q}A.setAttribute("position",new Tt(o,3)),A.setAttribute("color",new Tt(s,3));const a=this.triMaterial,g=new Gt(A,a);this.add(g)}drawQuads(i){const A=[],o=[];for(let I=0;I<i.vertices.length;I+=4){const c=[i.vertices[I],i.vertices[I+1],i.vertices[I+2],i.vertices[I],i.vertices[I+2],i.vertices[I+3]];for(const[_,p,B,d,Q,y]of c)A.push(_,p,B),o.push(d,Q,y)}const s=new Ut;s.setAttribute("position",new Tt(new Float32Array(A),3)),s.setAttribute("color",new Tt(new Float32Array(o),3));const a=this.triMaterial,g=new Gt(s,a);this.add(g)}}const M5=new T,S7=n=>{var i;const e=[];for(const A of n){const o=A.geometry.attributes.position;if(!o||o.itemSize!==3)continue;A.updateMatrixWorld();const s=new Float32Array(o.array);for(let g=0;g<s.length;g+=3){const I=M5.set(s[g],s[g+1],s[g+2]);A.localToWorld(I),s[g]=I.x,s[g+1]=I.y,s[g+2]=I.z}let a=(i=A.geometry.getIndex())==null?void 0:i.array;if(a===void 0){const g=[];for(let I=0;I<o.count;I++)g.push(I);a=g}e.push({positions:s,indices:a})}return v5(e)};/**
 * postprocessing v6.36.4 build Tue Nov 05 2024
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2024 Raoul van Rüschen
 * @license Zlib
 */var sB=1/1e3,R5=1e3,N5=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*sB}get fixedDelta(){return this._fixedDelta*sB}set fixedDelta(n){this._fixedDelta=n*R5}get elapsed(){return this._elapsed*sB}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},x5=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Ut;return i.setAttribute("position",new Tt(n,3)),i.setAttribute("uv",new Tt(e,2)),i})(),Ur=class ad{static get fullscreenGeometry(){return x5}constructor(e="Pass",i=new _P,A=new f_){this.name=e,this.renderer=null,this.scene=i,this.camera=A,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Gt(ad.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new _P),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=mc){}render(e,i,A,o,s){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,A){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof rn||i instanceof Nn||i instanceof si||i instanceof ad)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},L5=class extends Ur{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,i,A,o){const s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},F5=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,T5="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ZO=class extends Oi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new lt(null),opacity:new lt(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:F5,vertexShader:T5})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},U5=class extends Ur{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new ZO,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new rn(1,1,{minFilter:en,magFilter:en,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,i,A,o){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==nn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===zt&&(this.renderTarget.texture.colorSpace=zt))}},u2=new Ue,Dh=class extends Ur{constructor(n=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,i){this.color=n,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,i,A,o){const s=this.overrideClearColor,a=this.overrideClearAlpha,g=n.getClearAlpha(),I=s!==null,c=a>=0;I?(n.getClearColor(u2),n.setClearColor(s,c?a:g)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),I?n.setClearColor(u2,g):c&&n.setClearAlpha(g)}},G5=class extends Ur{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Dh(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,i,A,o){const s=n.getContext(),a=n.state.buffers,g=this.scene,I=this.camera,c=this.clearPass,_=this.inverted?0:1,p=1-_;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,_,4294967295),a.stencil.setClear(p),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,i))),this.renderToScreen?(n.setRenderTarget(null),n.render(g,I)):(n.setRenderTarget(e),n.render(g,I),n.setRenderTarget(i),n.render(g,I)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},w7=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:A=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,o,A),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new U5,this.depthTexture=null,this.passes=[],this.timer=new N5,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){const e=this.inputBuffer,i=this.multisampling;i>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new iA),i=n.getContext().getContextAttributes().alpha,A=this.inputBuffer.texture.type;A===nn&&n.outputColorSpace===zt&&(this.inputBuffer.texture.colorSpace=zt,this.outputBuffer.texture.colorSpace=zt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(n,i,A)}}replaceRenderer(n,e=!0){const i=this.renderer,A=i.domElement.parentNode;return this.setRenderer(n),e&&A!==null&&(A.removeChild(i.domElement),A.appendChild(n.domElement)),i}createDepthTexture(){const n=this.depthTexture=new _h;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=_a,n.type=la):n.type=Po,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,i,A){const o=this.renderer,s=o===null?new iA:o.getDrawingBufferSize(new iA),a={minFilter:en,magFilter:en,stencilBuffer:e,depthBuffer:n,type:i},g=new rn(s.width,s.height,a);return A>0&&(g.ignoreDepthForMultisampleCopy=!1,g.samples=A),i===nn&&o!==null&&o.outputColorSpace===zt&&(g.texture.colorSpace=zt),g.texture.name="EffectComposer.Buffer",g.texture.generateMipmaps=!1,g}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const i=this.passes,A=this.renderer,o=A.getDrawingBufferSize(new iA),s=A.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.setRenderer(A),n.setSize(o.width,o.height),n.initialize(A,s,a),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,n):i.push(n),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const g=this.createDepthTexture();for(n of i)n.setDepthTexture(g)}else n.setDepthTexture(this.depthTexture)}removePass(n){const e=this.passes,i=e.indexOf(n);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const s=(g,I)=>g||I.needsDepthTexture;e.reduce(s,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,i=this.copyPass;let A=this.inputBuffer,o=this.outputBuffer,s=!1,a,g,I;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,A,o,n,s),c.needsSwap&&(s&&(i.renderToScreen=c.renderToScreen,a=e.getContext(),g=e.state.buffers.stencil,g.setFunc(a.NOTEQUAL,1,4294967295),i.render(e,A,o,n,s),g.setFunc(a.EQUAL,1,4294967295)),I=A,A=o,o=I),c instanceof G5?s=!0:c instanceof L5&&(s=!1))}setSize(n,e,i){const A=this.renderer,o=A.getSize(new iA);(n===void 0||e===void 0)&&(n=o.width,e=o.height),(o.width!==n||o.height!==e)&&A.setSize(n,e,i);const s=A.getDrawingBufferSize(new iA);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ur.fullscreenGeometry.dispose()}},sa={NONE:0,DEPTH:1,CONVOLUTION:2},at={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},k5=class{constructor(){this.shaderParts=new Map([[at.FRAGMENT_HEAD,null],[at.FRAGMENT_MAIN_UV,null],[at.FRAGMENT_MAIN_IMAGE,null],[at.VERTEX_HEAD,null],[at.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=sa.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ns}},aB=!1,Q2=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case In:i=this.materialsFlatShadedDoubleSide;break;case pi:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case In:i=this.materialsDoubleSide;break;case pi:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Oi))return n.clone();const e=n.uniforms,i=new Map;for(const o in e){const s=e[o].value;s.isRenderTargetTexture&&(e[o].value=null,i.set(o,s))}const A=n.clone();for(const o of i)e[o[0]].value=o[1],A.uniforms[o[0]].value=o[1];return A}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const i of e)i.uniforms=Object.assign({},n.uniforms),i.side=Yn;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const A=this.cloneMaterial(i);return A.uniforms=Object.assign({},n.uniforms),A.side=pi,A}),this.materialsDoubleSide=e.map(i=>{const A=this.cloneMaterial(i);return A.uniforms=Object.assign({},n.uniforms),A.side=In,A}),this.materialsFlatShaded=e.map(i=>{const A=this.cloneMaterial(i);return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A}),this.materialsFlatShadedBackSide=e.map(i=>{const A=this.cloneMaterial(i);return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A.side=pi,A}),this.materialsFlatShadedDoubleSide=e.map(i=>{const A=this.cloneMaterial(i);return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A.side=In,A})}}render(n,e,i){const A=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,aB){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,i);for(const s of o)s[0].material=s[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,i),e.overrideMaterial=o}n.shadowMap.enabled=A}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return aB}static set workaroundEnabled(n){aB=n}},is=-1,No=class extends Oo{constructor(n,e=is,i=is,A=1){super(),this.resizable=n,this.baseSize=new iA(1,1),this.preferredSize=new iA(e,i),this.target=this.preferredSize,this.s=A,this.effectiveSize=new iA,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,i=this.effectiveSize,A=this.scale;e.width!==is?i.width=e.width:e.height!==is?i.width=Math.round(e.height*(n.width/Math.max(n.height,1))):i.width=Math.round(n.width*A),e.height!==is?i.height=e.height:e.width!==is?i.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):i.height=Math.round(n.height*A)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(is),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return is}},H5=class{constructor(n=0){this.nextId=n}getNextId(){return this.nextId++}reset(n=0){return this.nextId=n,this}},gB=new H5(2),P5=class extends Set{constructor(n,e=gB.getNextId()){super(),this.exclusive=!1,this._layer=e,(this._layer<1||this._layer>31)&&(console.warn("Layer out of range, resetting to 2"),gB.reset(2),this._layer=gB.getNextId()),n!==void 0&&this.set(n)}get layer(){return this._layer}set layer(n){const e=this._layer;for(const i of this)i.layers.disable(e),i.layers.enable(n);this._layer=n}getLayer(){return this.layer}setLayer(n){this.layer=n}isExclusive(){return this.exclusive}setExclusive(n){this.exclusive=n}clear(){const n=this.layer;for(const e of this)e.layers.disable(n);return super.clear()}set(n){this.clear();for(const e of n)this.add(e);return this}indexOf(n){return this.has(n)?0:-1}add(n){return this.exclusive?n.layers.set(this.layer):n.layers.enable(this.layer),super.add(n)}delete(n){return this.has(n)&&n.layers.disable(this.layer),super.delete(n)}toggle(n){let e;return this.has(n)?(this.delete(n),e=!1):(this.add(n),e=!0),e}setVisible(n){for(const e of this)n?e.layers.enable(0):e.layers.disable(0);return this}},KA={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},K5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",J5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",O5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",Y5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",q5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",j5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",V5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",z5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",W5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",X5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Z5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",$5="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",e6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",A6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",t6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",i6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",n6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",r6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",o6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",s6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",a6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",g6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",I6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",c6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",C6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",l6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",_6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",p6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",B6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",E6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",d6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",h6="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",u6=new Map([[KA.ADD,K5],[KA.ALPHA,J5],[KA.AVERAGE,O5],[KA.COLOR,Y5],[KA.COLOR_BURN,q5],[KA.COLOR_DODGE,j5],[KA.DARKEN,V5],[KA.DIFFERENCE,z5],[KA.DIVIDE,W5],[KA.DST,null],[KA.EXCLUSION,X5],[KA.HARD_LIGHT,Z5],[KA.HARD_MIX,$5],[KA.HUE,e6],[KA.INVERT,A6],[KA.INVERT_RGB,t6],[KA.LIGHTEN,i6],[KA.LINEAR_BURN,n6],[KA.LINEAR_DODGE,r6],[KA.LINEAR_LIGHT,o6],[KA.LUMINOSITY,s6],[KA.MULTIPLY,a6],[KA.NEGATION,g6],[KA.NORMAL,I6],[KA.OVERLAY,c6],[KA.PIN_LIGHT,C6],[KA.REFLECT,l6],[KA.SATURATION,_6],[KA.SCREEN,p6],[KA.SOFT_LIGHT,B6],[KA.SRC,E6],[KA.SUBTRACT,d6],[KA.VIVID_LIGHT,h6]]),Q6=class extends Oo{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new lt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return u6.get(this.blendFunction)}},Sh={VERY_SMALL:0,MEDIUM:2},f6=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,y6="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",m6=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],D6=class extends Oi{constructor(n=new fA){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new lt(null),texelSize:new lt(new fA),scale:new lt(1),kernel:new lt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:f6,vertexShader:y6}),this.setTexelSize(n.x,n.y),this.kernelSize=Sh.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return m6[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const i=1/n,A=1/e;this.uniforms.texelSize.value.set(i,A,i*.5,A*.5)}},S6=class extends Ur{constructor({kernelSize:n=Sh.MEDIUM,resolutionScale:e=.5,width:i=No.AUTO_SIZE,height:A=No.AUTO_SIZE,resolutionX:o=i,resolutionY:s=A}={}){super("KawaseBlurPass"),this.renderTargetA=new rn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new No(this,o,s,e);a.addEventListener("change",g=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new D6,this._blurMaterial.kernelSize=n,this.copyMaterial=new ZO}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,i,A,o){const s=this.scene,a=this.camera,g=this.renderTargetA,I=this.renderTargetB,c=this.blurMaterial,_=c.kernelSequence;let p=e;this.fullscreenMaterial=c;for(let B=0,d=_.length;B<d;++B){const Q=B&1?I:g;c.kernel=_[B],c.inputBuffer=p.texture,n.setRenderTarget(Q),n.render(s,a),p=Q}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=p.texture,n.setRenderTarget(this.renderToScreen?null:i),n.render(s,a)}setSize(n,e){const i=this.resolution;i.setBaseSize(n,e);const A=i.width,o=i.height;this.renderTargetA.setSize(A,o),this.renderTargetB.setSize(A,o),this.blurMaterial.setSize(n,e)}initialize(n,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==nn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===zt&&(this.renderTargetA.texture.colorSpace=zt,this.renderTargetB.texture.colorSpace=zt))}static get AUTO_SIZE(){return No.AUTO_SIZE}},$O=class extends Oo{constructor(n,e,{attributes:i=sa.NONE,blendFunction:A=KA.NORMAL,defines:o=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:g=null}={}){super(),this.name=n,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=g,this.defines=o,this.uniforms=s,this.extensions=a,this.blendMode=new Q6(A),this.blendMode.addEventListener("change",I=>this.setChanged()),this._inputColorSpace=Ns,this._outputColorSpace=Zr}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=mc){}update(n,e,i){}setSize(n,e){}initialize(n,e,i){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof rn||e instanceof Nn||e instanceof si||e instanceof Ur)&&this[n].dispose()}}},w6=class extends Ur{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,i,A,o){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:i),n.render(this.scene,this.camera)}initialize(n,e,i){i!==void 0&&i!==nn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},v6=`#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))
#define ONE_OVER_TWELVE 0.08333333333333333
varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;vec4 fxaa(const in vec4 inputColor,const in vec2 uv){float lumaCenter=luminance(inputColor.rgb);float lumaDown=luminance(texture2D(inputBuffer,vUvDown).rgb);float lumaUp=luminance(texture2D(inputBuffer,vUvUp).rgb);float lumaLeft=luminance(texture2D(inputBuffer,vUvLeft).rgb);float lumaRight=luminance(texture2D(inputBuffer,vUvRight).rgb);float lumaMin=min(lumaCenter,min(min(lumaDown,lumaUp),min(lumaLeft,lumaRight)));float lumaMax=max(lumaCenter,max(max(lumaDown,lumaUp),max(lumaLeft,lumaRight)));float lumaRange=lumaMax-lumaMin;if(lumaRange<max(EDGE_THRESHOLD_MIN,lumaMax*EDGE_THRESHOLD_MAX)){return inputColor;}float lumaDownLeft=luminance(texture2D(inputBuffer,vUvDownLeft).rgb);float lumaUpRight=luminance(texture2D(inputBuffer,vUvUpRight).rgb);float lumaUpLeft=luminance(texture2D(inputBuffer,vUvUpLeft).rgb);float lumaDownRight=luminance(texture2D(inputBuffer,vUvDownRight).rgb);float lumaDownUp=lumaDown+lumaUp;float lumaLeftRight=lumaLeft+lumaRight;float lumaLeftCorners=lumaDownLeft+lumaUpLeft;float lumaDownCorners=lumaDownLeft+lumaDownRight;float lumaRightCorners=lumaDownRight+lumaUpRight;float lumaUpCorners=lumaUpRight+lumaUpLeft;float edgeHorizontal=(abs(-2.0*lumaLeft+lumaLeftCorners)+abs(-2.0*lumaCenter+lumaDownUp)*2.0+abs(-2.0*lumaRight+lumaRightCorners));float edgeVertical=(abs(-2.0*lumaUp+lumaUpCorners)+abs(-2.0*lumaCenter+lumaLeftRight)*2.0+abs(-2.0*lumaDown+lumaDownCorners));bool isHorizontal=(edgeHorizontal>=edgeVertical);float stepLength=isHorizontal?texelSize.y:texelSize.x;float luma1=isHorizontal?lumaDown:lumaLeft;float luma2=isHorizontal?lumaUp:lumaRight;float gradient1=abs(luma1-lumaCenter);float gradient2=abs(luma2-lumaCenter);bool is1Steepest=gradient1>=gradient2;float gradientScaled=0.25*max(gradient1,gradient2);float lumaLocalAverage=0.0;if(is1Steepest){stepLength=-stepLength;lumaLocalAverage=0.5*(luma1+lumaCenter);}else{lumaLocalAverage=0.5*(luma2+lumaCenter);}vec2 currentUv=uv;if(isHorizontal){currentUv.y+=stepLength*0.5;}else{currentUv.x+=stepLength*0.5;}vec2 offset=isHorizontal?vec2(texelSize.x,0.0):vec2(0.0,texelSize.y);vec2 uv1=currentUv-offset*QUALITY(0);vec2 uv2=currentUv+offset*QUALITY(0);float lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);float lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd1-=lumaLocalAverage;lumaEnd2-=lumaLocalAverage;bool reached1=abs(lumaEnd1)>=gradientScaled;bool reached2=abs(lumaEnd2)>=gradientScaled;bool reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(1);}if(!reached2){uv2+=offset*QUALITY(1);}if(!reachedBoth){for(int i=2;i<SAMPLES;++i){if(!reached1){lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);lumaEnd1=lumaEnd1-lumaLocalAverage;}if(!reached2){lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd2=lumaEnd2-lumaLocalAverage;}reached1=abs(lumaEnd1)>=gradientScaled;reached2=abs(lumaEnd2)>=gradientScaled;reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(i);}if(!reached2){uv2+=offset*QUALITY(i);}if(reachedBoth){break;}}}float distance1=isHorizontal?(uv.x-uv1.x):(uv.y-uv1.y);float distance2=isHorizontal?(uv2.x-uv.x):(uv2.y-uv.y);bool isDirection1=distance1<distance2;float distanceFinal=min(distance1,distance2);float edgeThickness=(distance1+distance2);bool isLumaCenterSmaller=lumaCenter<lumaLocalAverage;bool correctVariation1=(lumaEnd1<0.0)!=isLumaCenterSmaller;bool correctVariation2=(lumaEnd2<0.0)!=isLumaCenterSmaller;bool correctVariation=isDirection1?correctVariation1:correctVariation2;float pixelOffset=-distanceFinal/edgeThickness+0.5;float finalOffset=correctVariation?pixelOffset:0.0;float lumaAverage=ONE_OVER_TWELVE*(2.0*(lumaDownUp+lumaLeftRight)+lumaLeftCorners+lumaRightCorners);float subPixelOffset1=clamp(abs(lumaAverage-lumaCenter)/lumaRange,0.0,1.0);float subPixelOffset2=(-2.0*subPixelOffset1+3.0)*subPixelOffset1*subPixelOffset1;float subPixelOffsetFinal=subPixelOffset2*subPixelOffset2*SUBPIXEL_QUALITY;finalOffset=max(finalOffset,subPixelOffsetFinal);vec2 finalUv=uv;if(isHorizontal){finalUv.y+=finalOffset*stepLength;}else{finalUv.x+=finalOffset*stepLength;}return texture2D(inputBuffer,finalUv);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=fxaa(inputColor,uv);}`,b6="varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;void mainSupport(const in vec2 uv){vUvDown=uv+vec2(0.0,-1.0)*texelSize;vUvUp=uv+vec2(0.0,1.0)*texelSize;vUvRight=uv+vec2(1.0,0.0)*texelSize;vUvLeft=uv+vec2(-1.0,0.0)*texelSize;vUvDownLeft=uv+vec2(-1.0,-1.0)*texelSize;vUvUpRight=uv+vec2(1.0,1.0)*texelSize;vUvUpLeft=uv+vec2(-1.0,1.0)*texelSize;vUvDownRight=uv+vec2(1.0,-1.0)*texelSize;}",v7=class extends $O{constructor({blendFunction:n=KA.SRC}={}){super("FXAAEffect",v6,{vertexShader:b6,blendFunction:n,defines:new Map([["EDGE_THRESHOLD_MIN","0.0312"],["EDGE_THRESHOLD_MAX","0.125"],["SUBPIXEL_QUALITY","0.75"],["SAMPLES","12"]])})}get minEdgeThreshold(){return Number(this.defines.get("EDGE_THRESHOLD_MIN"))}set minEdgeThreshold(n){this.defines.set("EDGE_THRESHOLD_MIN",n.toFixed(12)),this.setChanged()}get maxEdgeThreshold(){return Number(this.defines.get("EDGE_THRESHOLD_MAX"))}set maxEdgeThreshold(n){this.defines.set("EDGE_THRESHOLD_MAX",n.toFixed(12)),this.setChanged()}get subpixelQuality(){return Number(this.defines.get("SUBPIXEL_QUALITY"))}set subpixelQuality(n){this.defines.set("SUBPIXEL_QUALITY",n.toFixed(12)),this.setChanged()}get samples(){return Number(this.defines.get("SAMPLES"))}set samples(n){this.defines.set("SAMPLES",n.toFixed(0)),this.setChanged()}},eY=class extends Ur{constructor(n,e,i=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new Dh,this.overrideMaterialManager=i===null?null:new Q2(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Q2(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,i,A,o){const s=this.scene,a=this.camera,g=this.selection,I=a.layers.mask,c=s.background,_=n.shadowMap.autoUpdate,p=this.renderToScreen?null:e;g!==null&&a.layers.set(g.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(p),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=I,s.background=c,n.shadowMap.autoUpdate=_}},M6=`#include <packing>
#include <clipping_planes_pars_fragment>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float cameraNear;uniform float cameraFar;centroid varying float vViewZ;centroid varying vec4 vProjTexCoord;void main(){
#include <clipping_planes_fragment>
vec2 projTexCoord=(vProjTexCoord.xy/vProjTexCoord.w)*0.5+0.5;projTexCoord=clamp(projTexCoord,0.002,0.998);
#if DEPTH_PACKING == 3201
float fragCoordZ=unpackRGBAToDepth(texture2D(depthBuffer,projTexCoord));
#else
float fragCoordZ=texture2D(depthBuffer,projTexCoord).r;
#endif
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#else
float viewZ=orthographicDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#endif
float depthTest=(-vViewZ>-viewZ)?1.0:0.0;gl_FragColor.rg=vec2(0.0,depthTest);}`,R6=`#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
vViewZ=mvPosition.z;vProjTexCoord=gl_Position;
#include <clipping_planes_vertex>
}`,N6=class extends Oi{constructor(n=null,e){super({name:"DepthComparisonMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new lt(null),cameraNear:new lt(.3),cameraFar:new lt(1e3)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:M6,vertexShader:R6}),this.depthBuffer=n,this.depthPacking=Ol,this.copyCameraSettings(e)}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Ol){this.depthBuffer=n,this.depthPacking=e}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Di?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},x6="uniform lowp sampler2D inputBuffer;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 c0=texture2D(inputBuffer,vUv0).rg;vec2 c1=texture2D(inputBuffer,vUv1).rg;vec2 c2=texture2D(inputBuffer,vUv2).rg;vec2 c3=texture2D(inputBuffer,vUv3).rg;float d0=(c0.x-c1.x)*0.5;float d1=(c2.x-c3.x)*0.5;float d=length(vec2(d0,d1));float a0=min(c0.y,c1.y);float a1=min(c2.y,c3.y);float visibilityFactor=min(a0,a1);gl_FragColor.rg=(1.0-visibilityFactor>0.001)?vec2(d,0.0):vec2(0.0,d);}",L6="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=vec2(uv.x+texelSize.x,uv.y);vUv1=vec2(uv.x-texelSize.x,uv.y);vUv2=vec2(uv.x,uv.y+texelSize.y);vUv3=vec2(uv.x,uv.y-texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}",F6=class extends Oi{constructor(n=new iA){super({name:"OutlineMaterial",uniforms:{inputBuffer:new lt(null),texelSize:new lt(new iA)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:x6,vertexShader:L6}),this.uniforms.texelSize.value.set(n.x,n.y),this.uniforms.maskTexture=this.uniforms.inputBuffer}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},T6=class extends Ur{constructor(n,e,{renderTarget:i,resolutionScale:A=1,width:o=No.AUTO_SIZE,height:s=No.AUTO_SIZE,resolutionX:a=o,resolutionY:g=s}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new eY(n,e,new lO({depthPacking:Ol}));const I=this.renderPass;I.skipShadowMapUpdate=!0,I.ignoreBackground=!0;const c=I.clearPass;c.overrideClearColor=new Ue(16777215),c.overrideClearAlpha=1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new rn(1,1,{minFilter:An,magFilter:An}),this.renderTarget.texture.name="DepthPass.Target");const _=this.resolution=new No(this,a,g,A);_.addEventListener("change",p=>this.setSize(_.baseWidth,_.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,i,A,o){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,s)}setSize(n,e){const i=this.resolution;i.setBaseSize(n,e),this.renderTarget.setSize(i.width,i.height)}},U6=`uniform lowp sampler2D edgeTexture;uniform lowp sampler2D maskTexture;uniform vec3 visibleEdgeColor;uniform vec3 hiddenEdgeColor;uniform float pulse;uniform float edgeStrength;
#ifdef USE_PATTERN
uniform lowp sampler2D patternTexture;varying vec2 vUvPattern;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 edge=texture2D(edgeTexture,uv).rg;vec2 mask=texture2D(maskTexture,uv).rg;
#ifndef X_RAY
edge.y=0.0;
#endif
edge*=(edgeStrength*mask.x*pulse);vec3 color=edge.x*visibleEdgeColor+edge.y*hiddenEdgeColor;float visibilityFactor=0.0;
#ifdef USE_PATTERN
vec4 patternColor=texture2D(patternTexture,vUvPattern);
#ifdef X_RAY
float hiddenFactor=0.5;
#else
float hiddenFactor=0.0;
#endif
visibilityFactor=(1.0-mask.y>0.0)?1.0:hiddenFactor;visibilityFactor*=(1.0-mask.x)*patternColor.a;color+=visibilityFactor*patternColor.rgb;
#endif
float alpha=max(max(edge.x,edge.y),visibilityFactor);
#ifdef ALPHA
outputColor=vec4(color,alpha);
#else
outputColor=vec4(color,max(alpha,inputColor.a));
#endif
}`,G6="uniform float patternScale;varying vec2 vUvPattern;void mainSupport(const in vec2 uv){vUvPattern=uv*vec2(aspect,1.0)*patternScale;}",b7=class extends $O{constructor(n,e,{blendFunction:i=KA.SCREEN,patternTexture:A=null,patternScale:o=1,edgeStrength:s=1,pulseSpeed:a=0,visibleEdgeColor:g=16777215,hiddenEdgeColor:I=2230538,kernelSize:c=Sh.VERY_SMALL,blur:_=!1,xRay:p=!0,multisampling:B=0,resolutionScale:d=.5,width:Q=No.AUTO_SIZE,height:y=No.AUTO_SIZE,resolutionX:h=Q,resolutionY:E=y}={}){super("OutlineEffect",U6,{uniforms:new Map([["maskTexture",new lt(null)],["edgeTexture",new lt(null)],["edgeStrength",new lt(s)],["visibleEdgeColor",new lt(new Ue(g))],["hiddenEdgeColor",new lt(new Ue(I))],["pulse",new lt(1)],["patternScale",new lt(o)],["patternTexture",new lt(null)]])}),this.blendMode.addEventListener("change",M=>{this.blendMode.blendFunction===KA.ALPHA?this.defines.set("ALPHA","1"):this.defines.delete("ALPHA"),this.setChanged()}),this.blendMode.blendFunction=i,this.patternTexture=A,this.xRay=p,this.scene=n,this.camera=e,this.renderTargetMask=new rn(1,1),this.renderTargetMask.samples=B,this.renderTargetMask.texture.name="Outline.Mask",this.uniforms.get("maskTexture").value=this.renderTargetMask.texture,this.renderTargetOutline=new rn(1,1,{depthBuffer:!1}),this.renderTargetOutline.texture.name="Outline.Edges",this.uniforms.get("edgeTexture").value=this.renderTargetOutline.texture,this.clearPass=new Dh,this.clearPass.overrideClearColor=new Ue(0),this.clearPass.overrideClearAlpha=1,this.depthPass=new T6(n,e),this.maskPass=new eY(n,e,new N6(this.depthPass.texture,e));const u=this.maskPass.clearPass;u.overrideClearColor=new Ue(16777215),u.overrideClearAlpha=1,this.blurPass=new S6({resolutionScale:d,resolutionX:h,resolutionY:E,kernelSize:c}),this.blurPass.enabled=_;const f=this.blurPass.resolution;f.addEventListener("change",M=>this.setSize(f.baseWidth,f.baseHeight)),this.outlinePass=new w6(new F6);const m=this.outlinePass.fullscreenMaterial;m.inputBuffer=this.renderTargetMask.texture,this.time=0,this.forceUpdate=!0,this.selection=new P5,this.pulseSpeed=a}set mainScene(n){this.scene=n,this.depthPass.mainScene=n,this.maskPass.mainScene=n}set mainCamera(n){this.camera=n,this.depthPass.mainCamera=n,this.maskPass.mainCamera=n,this.maskPass.overrideMaterial.copyCameraSettings(n)}get resolution(){return this.blurPass.resolution}getResolution(){return this.blurPass.getResolution()}get multisampling(){return this.renderTargetMask.samples}set multisampling(n){this.renderTargetMask.samples=n,this.renderTargetMask.dispose()}get patternScale(){return this.uniforms.get("patternScale").value}set patternScale(n){this.uniforms.get("patternScale").value=n}get edgeStrength(){return this.uniforms.get("edgeStrength").value}set edgeStrength(n){this.uniforms.get("edgeStrength").value=n}get visibleEdgeColor(){return this.uniforms.get("visibleEdgeColor").value}set visibleEdgeColor(n){this.uniforms.get("visibleEdgeColor").value=n}get hiddenEdgeColor(){return this.uniforms.get("hiddenEdgeColor").value}set hiddenEdgeColor(n){this.uniforms.get("hiddenEdgeColor").value=n}getBlurPass(){return this.blurPass}getSelection(){return this.selection}getPulseSpeed(){return this.pulseSpeed}setPulseSpeed(n){this.pulseSpeed=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get selectionLayer(){return this.selection.layer}set selectionLayer(n){this.selection.layer=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get blur(){return this.blurPass.enabled}set blur(n){this.blurPass.enabled=n}get xRay(){return this.defines.has("X_RAY")}set xRay(n){this.xRay!==n&&(n?this.defines.set("X_RAY","1"):this.defines.delete("X_RAY"),this.setChanged())}isXRayEnabled(){return this.xRay}setXRayEnabled(n){this.xRay=n}get patternTexture(){return this.uniforms.get("patternTexture").value}set patternTexture(n){n!==null?(n.wrapS=n.wrapT=Ho,this.defines.set("USE_PATTERN","1"),this.setVertexShader(G6)):(this.defines.delete("USE_PATTERN"),this.setVertexShader(null)),this.uniforms.get("patternTexture").value=n,this.setChanged()}setPatternTexture(n){this.patternTexture=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}setSelection(n){return this.selection.set(n),this}clearSelection(){return this.selection.clear(),this}selectObject(n){return this.selection.add(n),this}deselectObject(n){return this.selection.delete(n),this}update(n,e,i){const A=this.scene,o=this.camera,s=this.selection,g=this.uniforms.get("pulse"),I=A.background,c=o.layers.mask;(this.forceUpdate||s.size>0)&&(A.background=null,g.value=1,this.pulseSpeed>0&&(g.value=Math.cos(this.time*this.pulseSpeed*10)*.375+.625),this.time+=i,s.setVisible(!1),this.depthPass.render(n),s.setVisible(!0),o.layers.set(s.layer),this.maskPass.render(n,this.renderTargetMask),o.layers.mask=c,A.background=I,this.outlinePass.render(n,null,this.renderTargetOutline),this.blurPass.enabled&&this.blurPass.render(n,this.renderTargetOutline,this.renderTargetOutline)),this.forceUpdate=s.size>0}setSize(n,e){this.blurPass.setSize(n,e),this.renderTargetMask.setSize(n,e);const i=this.resolution;i.setBaseSize(n,e);const A=i.width,o=i.height;this.depthPass.setSize(A,o),this.renderTargetOutline.setSize(A,o),this.outlinePass.fullscreenMaterial.setSize(A,o)}initialize(n,e,i){this.blurPass.initialize(n,e,nn),i!==void 0&&(this.depthPass.initialize(n,e,i),this.maskPass.initialize(n,e,i),this.outlinePass.initialize(n,e,i))}},k6=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,H6="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",P6=class extends Oi{constructor(n,e,i,A,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Rs.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new lt(null),depthBuffer:new lt(null),resolution:new lt(new iA),texelSize:new lt(new iA),cameraNear:new lt(.3),cameraFar:new lt(1e3),aspect:new lt(1),time:new lt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),n&&this.setShaderParts(n),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(A)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=mc){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=k6.replace(at.FRAGMENT_HEAD,n.get(at.FRAGMENT_HEAD)||"").replace(at.FRAGMENT_MAIN_UV,n.get(at.FRAGMENT_MAIN_UV)||"").replace(at.FRAGMENT_MAIN_IMAGE,n.get(at.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=H6.replace(at.VERTEX_HEAD,n.get(at.VERTEX_HEAD)||"").replace(at.VERTEX_MAIN_SUPPORT,n.get(at.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Di?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const i=this.uniforms;i.resolution.value.set(n,e),i.texelSize.value.set(1/n,1/e),i.aspect.value=n/e}static get Section(){return at}};function f2(n,e,i){for(const A of e){const o="$1"+n+A.charAt(0).toUpperCase()+A.slice(1),s=new RegExp("([^\\.])(\\b"+A+"\\b)","g");for(const a of i.entries())a[1]!==null&&i.set(a[0],a[1].replace(s,o))}}function K6(n,e,i){let A=e.getFragmentShader(),o=e.getVertexShader();const s=A!==void 0&&/mainImage/.test(A),a=A!==void 0&&/mainUv/.test(A);if(i.attributes|=e.getAttributes(),A===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&i.attributes&sa.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const g=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,I=i.shaderParts;let c=I.get(at.FRAGMENT_HEAD)||"",_=I.get(at.FRAGMENT_MAIN_UV)||"",p=I.get(at.FRAGMENT_MAIN_IMAGE)||"",B=I.get(at.VERTEX_HEAD)||"",d=I.get(at.VERTEX_MAIN_SUPPORT)||"";const Q=new Set,y=new Set;if(a&&(_+=`	${n}MainUv(UV);
`,i.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const u=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);d+=`	${n}MainSupport(`,d+=u?`vUv);
`:`);
`;for(const f of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const m of f[1].split(/\s*,\s*/))i.varyings.add(m),Q.add(m),y.add(m);for(const f of o.matchAll(g))y.add(f[1])}for(const u of A.matchAll(g))y.add(u[1]);for(const u of e.defines.keys())y.add(u.replace(/\([\w\s,]*\)/g,""));for(const u of e.uniforms.keys())y.add(u);y.delete("while"),y.delete("for"),y.delete("if"),e.uniforms.forEach((u,f)=>i.uniforms.set(n+f.charAt(0).toUpperCase()+f.slice(1),u)),e.defines.forEach((u,f)=>i.defines.set(n+f.charAt(0).toUpperCase()+f.slice(1),u));const h=new Map([["fragment",A],["vertex",o]]);f2(n,y,i.defines),f2(n,y,h),A=h.get("fragment"),o=h.get("vertex");const E=e.blendMode;if(i.blendModes.set(E.blendFunction,E),s){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(p+=e.inputColorSpace===zt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Zr?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const u=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;p+=`${n}MainImage(color0, UV, `,i.attributes&sa.DEPTH&&u.test(A)&&(p+="depth, ",i.readDepth=!0),p+=`color1);
	`;const f=n+"BlendOpacity";i.uniforms.set(f,E.opacity),p+=`color0 = blend${E.blendFunction}(color0, color1, ${f});

	`,c+=`uniform float ${f};

`}if(c+=A+`
`,o!==null&&(B+=o+`
`),I.set(at.FRAGMENT_HEAD,c),I.set(at.FRAGMENT_MAIN_UV,_),I.set(at.FRAGMENT_MAIN_IMAGE,p),I.set(at.VERTEX_HEAD,B),I.set(at.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const u of e.extensions)i.extensions.add(u)}}var M7=class extends Ur{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new P6(null,null,null,n),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new k5;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===KA.DST)n.attributes|=a.getAttributes()&sa.DEPTH;else{if(n.attributes&a.getAttributes()&sa.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);K6("e"+e++,a,n)}let i=n.shaderParts.get(at.FRAGMENT_HEAD),A=n.shaderParts.get(at.FRAGMENT_MAIN_IMAGE),o=n.shaderParts.get(at.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of n.blendModes.values())i+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;n.attributes&sa.DEPTH?(n.readDepth&&(A=`float depth = readDepth(UV);

	`+A),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===zt&&(A+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(at.FRAGMENT_HEAD,i),n.shaderParts.set(at.FRAGMENT_MAIN_IMAGE,A),n.shaderParts.set(at.FRAGMENT_MAIN_UV,o);for(const[a,g]of n.shaderParts)g!==null&&n.shaderParts.set(a,g.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=mc){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(n,e)}render(n,e,i,A,o){for(const s of this.effects)s.update(n,e,A);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=A*this.timeScale,n.setRenderTarget(this.renderToScreen?null:i),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const i of this.effects)i.setSize(n,e)}initialize(n,e,i){this.renderer=n;for(const A of this.effects)A.initialize(n,e,i);this.updateMaterial(),i!==void 0&&i!==nn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};const ns=new WeakMap,Xs=new WeakMap,Do=new WeakMap;var J6={};const Wl=Symbol("anyProducer"),y2=Promise.resolve(),Xl=Symbol("listenerAdded"),Zl=Symbol("listenerRemoved");let $l=!1,IB=!1;const e_=n=>typeof n=="string"||typeof n=="symbol"||typeof n=="number";function qa(n){if(!e_(n))throw new TypeError("`eventName` must be a string, symbol, or number")}function zC(n){if(typeof n!="function")throw new TypeError("listener must be a function")}function ja(n,e){const i=Xs.get(n);if(i.has(e))return i.get(e)}function VI(n,e){const i=e_(e)?e:Wl,A=Do.get(n);if(A.has(i))return A.get(i)}function O6(n,e,i){const A=Do.get(n);if(A.has(e))for(const o of A.get(e))o.enqueue(i);if(A.has(Wl)){const o=Promise.all([e,i]);for(const s of A.get(Wl))s.enqueue(o)}}function m2(n,e){e=Array.isArray(e)?e:[e];let i=!1,A=()=>{},o=[];const s={enqueue(a){o.push(a),A()},finish(){i=!0,A()}};for(const a of e){let g=VI(n,a);g||(g=new Set,Do.get(n).set(a,g)),g.add(s)}return{async next(){return o?o.length===0?i?(o=void 0,this.next()):(await new Promise(a=>{A=a}),this.next()):{done:!1,value:await o.shift()}:{done:!0}},async return(a){o=void 0;for(const g of e){const I=VI(n,g);I&&(I.delete(s),I.size===0&&Do.get(n).delete(g))}return A(),arguments.length>0?{done:!0,value:await a}:{done:!0}},[Symbol.asyncIterator](){return this}}}function D2(n){if(n===void 0)return S2;if(!Array.isArray(n))throw new TypeError("`methodNames` must be an array of strings");for(const e of n)if(!S2.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return n}const Va=n=>n===Xl||n===Zl;function WC(n,e,i){if(Va(e))try{$l=!0,n.emit(e,i)}finally{$l=!1}}class Tg{static mixin(e,i){return i=D2(i),A=>{if(typeof A!="function")throw new TypeError("`target` must be function");for(const a of i)if(A.prototype[a]!==void 0)throw new Error(`The property \`${a}\` already exists on \`target\``);function o(){return Object.defineProperty(this,e,{enumerable:!1,value:new Tg}),this[e]}Object.defineProperty(A.prototype,e,{enumerable:!1,get:o});const s=a=>function(...g){return this[e][a](...g)};for(const a of i)Object.defineProperty(A.prototype,a,{enumerable:!1,value:s(a)});return A}}static get isDebugEnabled(){if(typeof J6!="object")return IB;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||IB}static set isDebugEnabled(e){IB=e}constructor(e={}){ns.set(this,new Set),Xs.set(this,new Map),Do.set(this,new Map),Do.get(this).set(Wl,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(i,A,o,s)=>{try{s=JSON.stringify(s)}catch{s=`Object with the following keys failed to stringify: ${Object.keys(s).join(",")}`}(typeof o=="symbol"||typeof o=="number")&&(o=o.toString());const a=new Date,g=`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}.${a.getMilliseconds()}`;console.log(`[${g}][emittery:${i}][${A}] Event Name: ${o}
	data: ${s}`)})}logIfDebugEnabled(e,i,A){(Tg.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,i,A)}on(e,i){zC(i),e=Array.isArray(e)?e:[e];for(const A of e){qa(A);let o=ja(this,A);o||(o=new Set,Xs.get(this).set(A,o)),o.add(i),this.logIfDebugEnabled("subscribe",A,void 0),Va(A)||WC(this,Xl,{eventName:A,listener:i})}return this.off.bind(this,e,i)}off(e,i){zC(i),e=Array.isArray(e)?e:[e];for(const A of e){qa(A);const o=ja(this,A);o&&(o.delete(i),o.size===0&&Xs.get(this).delete(A)),this.logIfDebugEnabled("unsubscribe",A,void 0),Va(A)||WC(this,Zl,{eventName:A,listener:i})}}once(e){let i;const A=new Promise(o=>{i=this.on(e,s=>{i(),o(s)})});return A.off=i,A}events(e){e=Array.isArray(e)?e:[e];for(const i of e)qa(i);return m2(this,e)}async emit(e,i){if(qa(e),Va(e)&&!$l)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,i),O6(this,e,i);const A=ja(this,e)??new Set,o=ns.get(this),s=[...A],a=Va(e)?[]:[...o];await y2,await Promise.all([...s.map(async g=>{if(A.has(g))return g(i)}),...a.map(async g=>{if(o.has(g))return g(e,i)})])}async emitSerial(e,i){if(qa(e),Va(e)&&!$l)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,i);const A=ja(this,e)??new Set,o=ns.get(this),s=[...A],a=[...o];await y2;for(const g of s)A.has(g)&&await g(i);for(const g of a)o.has(g)&&await g(e,i)}onAny(e){return zC(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),ns.get(this).add(e),WC(this,Xl,{listener:e}),this.offAny.bind(this,e)}anyEvent(){return m2(this)}offAny(e){zC(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),WC(this,Zl,{listener:e}),ns.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const i of e)if(this.logIfDebugEnabled("clear",i,void 0),e_(i)){const A=ja(this,i);A&&A.clear();const o=VI(this,i);if(o){for(const s of o)s.finish();o.clear()}}else{ns.get(this).clear();for(const[A,o]of Xs.get(this).entries())o.clear(),Xs.get(this).delete(A);for(const[A,o]of Do.get(this).entries()){for(const s of o)s.finish();o.clear(),Do.get(this).delete(A)}}}listenerCount(e){var A,o,s;e=Array.isArray(e)?e:[e];let i=0;for(const a of e){if(e_(a)){i+=ns.get(this).size+(((A=ja(this,a))==null?void 0:A.size)??0)+(((o=VI(this,a))==null?void 0:o.size)??0)+(((s=VI(this))==null?void 0:s.size)??0);continue}a!==void 0&&qa(a),i+=ns.get(this).size;for(const g of Xs.get(this).values())i+=g.size;for(const g of Do.get(this).values())i+=g.size}return i}bindMethods(e,i){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");i=D2(i);for(const A of i){if(e[A]!==void 0)throw new Error(`The property \`${A}\` already exists on \`target\``);Object.defineProperty(e,A,{enumerable:!1,value:this[A].bind(this)})}}}const S2=Object.getOwnPropertyNames(Tg.prototype).filter(n=>n!=="constructor");Object.defineProperty(Tg,"listenerAdded",{value:Xl,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Tg,"listenerRemoved",{value:Zl,writable:!1,enumerable:!0,configurable:!1});/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class ro{constructor(e,i,A,o,s="div"){this.parent=e,this.object=i,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),ro.nextNameID=ro.nextNameID||0,this.$name.id=`lil-gui-name-${++ro.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Y6 extends ro{constructor(e,i,A){super(e,i,A,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function gd(n){let e,i;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const q6={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:gd,toHexString:gd},Ec={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},j6={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,i=1){const A=Ec.fromHexString(n);e[0]=(A>>16&255)/255*i,e[1]=(A>>8&255)/255*i,e[2]=(A&255)/255*i},toHexString([n,e,i],A=1){A=255/A;const o=n*A<<16^e*A<<8^i*A<<0;return Ec.toHexString(o)}},V6={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,i=1){const A=Ec.fromHexString(n);e.r=(A>>16&255)/255*i,e.g=(A>>8&255)/255*i,e.b=(A&255)/255*i},toHexString({r:n,g:e,b:i},A=1){A=255/A;const o=n*A<<16^e*A<<8^i*A<<0;return Ec.toHexString(o)}},z6=[q6,Ec,j6,V6];function W6(n){return z6.find(e=>e.match(n))}class X6 extends ro{constructor(e,i,A,o){super(e,i,A,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=W6(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=gd(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class cB extends ro{constructor(e,i,A){super(e,i,A,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Z6 extends ro{constructor(e,i,A,o,s,a){super(e,i,A,"number"),this._initInput(),this.min(o),this.max(s);const g=a!==void 0;this.step(g?a:this._getImplicitStep(),g),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))},A=u=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+u),this.$input.value=this.getValue())},o=u=>{u.key==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),A(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),A(this._step*this._arrowKeyMultiplier(u)*-1))},s=u=>{this._inputFocused&&(u.preventDefault(),A(this._step*this._normalizeMouseWheel(u)))};let a=!1,g,I,c,_,p;const B=5,d=u=>{g=u.clientX,I=c=u.clientY,a=!0,_=this.getValue(),p=0,window.addEventListener("mousemove",Q),window.addEventListener("mouseup",y)},Q=u=>{if(a){const f=u.clientX-g,m=u.clientY-I;Math.abs(m)>B?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>B&&y()}if(!a){const f=u.clientY-c;p-=f*this._step*this._arrowKeyMultiplier(u),_+p>this._max?p=this._max-_:_+p<this._min&&(p=this._min-_),this._snapClampSetValue(_+p)}c=u.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",y)},h=()=>{this._inputFocused=!0},E=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",h),this.$input.addEventListener("blur",E)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(E,u,f,m,M)=>(E-u)/(f-u)*(M-m)+m,i=E=>{const u=this.$slider.getBoundingClientRect();let f=e(E,u.left,u.right,this._min,this._max);this._snapClampSetValue(f)},A=E=>{this._setDraggingStyle(!0),i(E.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",s)},o=E=>{i(E.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",s)};let a=!1,g,I;const c=E=>{E.preventDefault(),this._setDraggingStyle(!0),i(E.touches[0].clientX),a=!1},_=E=>{E.touches.length>1||(this._hasScrollBar?(g=E.touches[0].clientX,I=E.touches[0].clientY,a=!0):c(E),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",B))},p=E=>{if(a){const u=E.touches[0].clientX-g,f=E.touches[0].clientY-I;Math.abs(u)>Math.abs(f)?c(E):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",B))}else E.preventDefault(),i(E.touches[0].clientX)},B=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",B)},d=this._callOnFinishChange.bind(this),Q=400;let y;const h=E=>{if(Math.abs(E.deltaX)<Math.abs(E.deltaY)&&this._hasScrollBar)return;E.preventDefault();const f=this._normalizeMouseWheel(E)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(d,Q)};this.$slider.addEventListener("mousedown",A),this.$slider.addEventListener("touchstart",_,{passive:!1}),this.$slider.addEventListener("wheel",h,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),i+-A}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),e-=i,e=Math.round(e/this._step)*this._step,e+=i,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $6 extends ro{constructor(e,i,A,o){super(e,i,A,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(i=>{const A=document.createElement("option");A.textContent=i,this.$select.appendChild(A)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?e:this._names[i],this}}class e7 extends ro{constructor(e,i,A){super(e,i,A,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var A7=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function t7(n){const e=document.createElement("style");e.innerHTML=n;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let w2=!1;class AY{constructor({parent:e,autoPlace:i=e===void 0,container:A,width:o,title:s="Controls",closeFolders:a=!1,injectStyles:g=!0,touchStyles:I=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),I&&this.domElement.classList.add("allow-touch-styles"),!w2&&g&&(t7(A7),w2=!0),A?A.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=a}add(e,i,A,o,s){if(Object(A)===A)return new $6(this,e,i,A);const a=e[i];switch(typeof a){case"number":return new Z6(this,e,i,A,o,s);case"boolean":return new Y6(this,e,i);case"string":return new e7(this,e,i);case"function":return new cB(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`