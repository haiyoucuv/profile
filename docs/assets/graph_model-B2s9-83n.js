import{g as Fo,m as Co}from"./index-eUvxdSQ4.js";function Ro(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(s,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bo=1e-7,Po=1e-4;class O1{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Lo{refCount(t){return yt("refCount")}incRef(t){return yt("incRef")}timerAvailable(){return!0}time(t){return yt("time")}read(t){return yt("read")}readSync(t){return yt("readSync")}readToGPU(t,n){return yt("readToGPU")}numDataIds(){return yt("numDataIds")}disposeData(t,n){return yt("disposeData")}write(t,n,s){return yt("write")}move(t,n,s,r,a){return yt("move")}createTensorFromGPUData(t,n,s){return yt("createTensorFromGPUData")}memory(){return yt("memory")}floatPrecision(){return yt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Bo:Po}dispose(){return yt("dispose")}}function yt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qr(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,Tn(e,t,n)}function zo(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,Tn(e,n,s),Tn(t,n,s)}function Vo(e,t,n){return Math.max(e,Math.min(t,n))}function Uo(e){return e%2===0?e:e+1}function Tn(e,t,n){const s=e[t];e[t]=e[n],e[n]=s}function jo(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function qo(e,t){const n=Math.random();return t*n+(1-n)*e}function Wo(e,t){let n=0;for(let s=0;s<e.length;s++){const r=Number(e[s])-Number(t[s]);n+=r*r}return n}function g(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function ft(e,t,n=""){g(Rt(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function be(e){g(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Z(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Go(e){return e.length===0}function Wr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function Rt(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function xe(e){return e%1===0}function Mo(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function Ko(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function Ho(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return qr(t),t}function ze(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Xo(e,t=r=>0,n,s){return new Promise((r,a)=>{let o=0;const i=()=>{if(e()){r();return}o++;const u=t(o);if(n!=null&&o>=n){a();return}s!=null?s(i,u):setTimeout(i,u)};i()})}function Jo(e,t){let n=1,s=-1;for(let a=0;a<e.length;++a)if(e[a]>=0)n*=e[a];else if(e[a]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${a}`);s=a}else if(e[a]<0)throw Error(`Shapes can not be < 0. Found ${e[a]} at dim ${a}`);if(s===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const r=e.slice();return r[s]=t/n,r}function Ze(e,t){const n=t.length;return e=e==null?t.map((s,r)=>r):[].concat(e),g(e.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),g(e.every(s=>xe(s)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(s=>s<0?n+s:s)}function Gr(e,t){const n=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||r?null:Ze(t,e).sort();let o=0;for(let i=0;i<e.length;++i){if(a!=null){if(a[o]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(a[o]==null||a[o]>i)&&e[i]===1&&(n.push(e[i]),s.push(i)),a[o]<=i&&o++}e[i]!==1&&(n.push(e[i]),s.push(i))}return{newShape:n,keptDims:s}}function Mr(e,t){return Ds(e,t)}function Ds(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Kr(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Hr(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Yo(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function Sn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Xr(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Cn(e){return typeof e=="string"||e instanceof String}function Jr(e){return typeof e=="boolean"}function Yr(e){return typeof e=="number"}function Qe(e){return Array.isArray(e)?Qe(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Yr(e)?"float32":Cn(e)?"string":Jr(e)?"bool":"float32"}function Jt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Zo(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function tn(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*e[s+1];return n}function Zr(e,t,n,s=!1){const r=new Array;if(t.length===1){const a=t[0]*(s?2:1);for(let o=0;o<a;o++)r[o]=n[e+o]}else{const a=t[0],o=t.slice(1),i=o.reduce((u,c)=>u*c)*(s?2:1);for(let u=0;u<a;u++)r[u]=Zr(e+u*i,o,n,s)}return r}function le(e,t,n=!1){if(e.length===0)return t[0];const s=e.reduce((r,a)=>r*a)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Zr(0,e,t,n)}function Qo(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function Os(e,t){const n=Rn(e,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function Rn(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ti(e,t){const n=e.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return le(e,new Float32Array(n));if(t==="int32")return le(e,new Int32Array(n));if(t==="bool")return le(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function Nt(e){e.forEach(t=>{g(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function ei(e,t,n){if(t===0)return 0;if(t===1)return e[0];let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=n[r]*e[r];return s}function ni(e,t,n){if(t===0)return[];if(t===1)return[e];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(e/n[r]),e-=s[r]*n[r];return s[s.length-1]=e,s}function Yt(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const or="tfjsflags";class si{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=ri,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(z().getBool("IS_TEST")||z().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];z().getBool("IS_TEST")||z().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(Yt(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);or in t&&t[or].split(",").forEach(s=>{const[r,a]=s.split(":");this.urlFlags[r]=oi(r,a)})}}function ri(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(ai(t,s[0],s[1]),s.join("="))),t}function ai(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function oi(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function z(){return Qr}let Qr=null;function ii(e){Qr=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Mn;function ta(){if(Mn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Mn=e}return Mn}function ui(){const e=ta();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function Fs(e,t){const n=ui();if(n.has(e))return n.get(e);{const s=t();return n.set(e,s),n.get(e)}}const ci="Abs",li="Acos",hi="Acosh",ea="Add",pi="AddN",fi="All",mi="Any",di="ArgMax",gi="ArgMin",yi="Asin",bi="Asinh",wi="Atan",Ni="Atanh",Ti="Atan2",Si="AvgPool",F1="AvgPoolGrad",$i="AvgPool3D",C1="AvgPool3DGrad",vi="BatchMatMul",ki="BatchToSpaceND",Ei="Bincount",_i="BitwiseAnd",R1="BroadcastTo",xi="BroadcastArgs",na="Cast",Ii="Ceil",Ai="ClipByValue",Di="Complex",Oi="ComplexAbs",Fi="Concat",Ci="Conv2D",Ri="Conv2DBackpropFilter",Bi="Conv2DBackpropInput",Pi="Conv3D",B1="Conv3DBackpropFilterV2",Li="Conv3DBackpropInputV2",zi="Cos",Vi="Cosh",Ui="Cumprod",ji="Cumsum",qi="CropAndResize",Wi="DenseBincount",Gi="DepthToSpace",Mi="DepthwiseConv2dNative",Ki="DepthwiseConv2dNativeBackpropFilter",Hi="DepthwiseConv2dNativeBackpropInput",Xi="Diag",Ji="Dilation2D",P1="Dilation2DBackpropInput",L1="Dilation2DBackpropFilter",sa="Draw",Yi="RealDiv",Zi="Einsum",Qi="Elu",z1="EluGrad",tu="Erf",eu="Equal",nu="Exp",su="ExpandDims",ru="Expm1",au="FFT",ou="Fill",iu="FlipLeftRight",uu="Floor",cu="FloorDiv",lu="FusedBatchNorm",hu="GatherV2",pu="GatherNd",fu="Greater",mu="GreaterEqual",ra="Identity",du="IFFT",gu="Imag",yu="IsFinite",bu="IsInf",wu="IsNan",Nu="LeakyRelu",Tu="Less",Su="LessEqual",$u="LinSpace",vu="Log",ku="Log1p",Eu="LogicalAnd",_u="LogicalNot",xu="LogicalOr",V1="LogicalXor",U1="LogSoftmax",j1="LowerBound",Iu="LRN",q1="LRNGrad",W1="MatrixBandPart",Au="Max",Du="Maximum",Ou="MaxPool",G1="MaxPoolGrad",Fu="MaxPool3D",M1="MaxPool3DGrad",Cu="MaxPoolWithArgmax",Ru="Mean",Bu="Min",Pu="Minimum",Lu="MirrorPad",zu="Mod",Vu="Multinomial",Uu="Multiply",ju="Neg",qu="NotEqual",Wu="NonMaxSuppressionV3",Gu="NonMaxSuppressionV4",Mu="NonMaxSuppressionV5",Ku="OnesLike",Hu="OneHot",Xu="Pack",Ju="PadV2",K1="Pool",Yu="Pow",Zu="Prelu",Qu="Prod",tc="RaggedGather",ec="RaggedRange",nc="RaggedTensorToTensor",sc="Range",rc="Real",ac="Reciprocal",oc="Relu",ic="Reshape",uc="ResizeNearestNeighbor",H1="ResizeNearestNeighborGrad",cc="ResizeBilinear",X1="ResizeBilinearGrad",lc="Relu6",hc="Reverse",pc="Round",fc="Rsqrt",mc="ScatterNd",dc="TensorScatterUpdate",gc="SearchSorted",yc="Select",bc="Selu",wc="Slice",Nc="Sin",Tc="Sinh",Sc="Sign",$c="Sigmoid",vc="Softplus",kc="Sqrt",Ec="Sum",_c="SpaceToBatchND",xc="SplitV",Ic="Softmax",Ac="SparseFillEmptyRows",Dc="SparseReshape",Oc="SparseSegmentMean",Fc="SparseSegmentSum",Cc="SparseToDense",Rc="SquaredDifference",J1="Square",Bc="StaticRegexReplace",Pc="StridedSlice",Lc="StringNGrams",zc="StringSplit",Vc="StringToHashBucketFast",Uc="Sub",jc="Tan",qc="Tanh",aa="Tile",Wc="TopK",Gc="Transform",Kn="Transpose",Mc="Unique",Kc="Unpack",Hc="UnsortedSegmentSum",Y1="UpperBound",Xc="ZerosLike",Jc="Step",ir="FromPixels",Yc="RotateWithOffset",ur="_FusedMatMul",cr="FusedConv2D",lr="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ae(...e){z().getBool("IS_TEST")||z().getBool("PROD")||console.warn(...e)}function Z1(...e){z().getBool("IS_TEST")||z().getBool("PROD")||console.log(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ie=Fs("kernelRegistry",()=>new Map),je=Fs("gradRegistry",()=>new Map);function $n(e,t){const n=Cs(e,t);return Ie.get(n)}function hr(e){return je.get(e)}function es(e){const t=Ie.entries(),n=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[a,o]=r,[i]=a.split("_");i===e&&n.push(o)}return n}function Zc(e){const{kernelName:t,backendName:n}=e,s=Cs(t,n);Ie.has(s)&&ae(`The kernel '${t}' for backend '${n}' is already registered`),Ie.set(s,e)}function Q1(e){const{kernelName:t}=e;je.has(t)&&z().getBool("DEBUG")&&ae(`Overriding the gradient for '${t}'`),je.set(t,e)}function tN(e,t){const n=Cs(e,t);if(!Ie.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);Ie.delete(n)}function eN(e){if(!je.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);je.delete(e)}function nN(e,t){es(e).forEach(s=>{const r=Object.assign({},s,{backendName:t});Zc(r)})}function Cs(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oa(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var Hn,pr;function Qc(){if(pr)return Hn;pr=1,Hn=t;var e=null;try{e=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(v,y,x){this.low=v|0,this.high=y|0,this.unsigned=!!x}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function n(v){return(v&&v.__isLong__)===!0}t.isLong=n;var s={},r={};function a(v,y){var x,R,P;return y?(v>>>=0,(P=0<=v&&v<256)&&(R=r[v],R)?R:(x=i(v,(v|0)<0?-1:0,!0),P&&(r[v]=x),x)):(v|=0,(P=-128<=v&&v<128)&&(R=s[v],R)?R:(x=i(v,v<0?-1:0,!1),P&&(s[v]=x),x))}t.fromInt=a;function o(v,y){if(isNaN(v))return y?I:$;if(y){if(v<0)return I;if(v>=b)return B}else{if(v<=-S)return C;if(v+1>=S)return O}return v<0?o(-v,y).neg():i(v%d|0,v/d|0,y)}t.fromNumber=o;function i(v,y,x){return new t(v,y,x)}t.fromBits=i;var u=Math.pow;function c(v,y,x){if(v.length===0)throw Error("empty string");if(v==="NaN"||v==="Infinity"||v==="+Infinity"||v==="-Infinity")return $;if(typeof y=="number"?(x=y,y=!1):y=!!y,x=x||10,x<2||36<x)throw RangeError("radix");var R;if((R=v.indexOf("-"))>0)throw Error("interior hyphen");if(R===0)return c(v.substring(1),y,x).neg();for(var P=o(u(x,8)),V=$,q=0;q<v.length;q+=8){var J=Math.min(8,v.length-q),at=parseInt(v.substring(q,q+J),x);if(J<8){var tt=o(u(x,J));V=V.mul(tt).add(o(at))}else V=V.mul(P),V=V.add(o(at))}return V.unsigned=y,V}t.fromString=c;function h(v,y){return typeof v=="number"?o(v,y):typeof v=="string"?c(v,y):i(v.low,v.high,typeof y=="boolean"?y:v.unsigned)}t.fromValue=h;var p=65536,f=1<<24,d=p*p,b=d*d,S=b/2,T=a(f),$=a(0);t.ZERO=$;var I=a(0,!0);t.UZERO=I;var F=a(1);t.ONE=F;var _=a(1,!0);t.UONE=_;var A=a(-1);t.NEG_ONE=A;var O=i(-1,2147483647,!1);t.MAX_VALUE=O;var B=i(-1,-1,!0);t.MAX_UNSIGNED_VALUE=B;var C=i(0,-2147483648,!1);t.MIN_VALUE=C;var k=t.prototype;return k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*d+(this.low>>>0):this.high*d+(this.low>>>0)},k.toString=function(y){if(y=y||10,y<2||36<y)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(C)){var x=o(y),R=this.div(x),P=R.mul(x).sub(this);return R.toString(y)+P.toInt().toString(y)}else return"-"+this.neg().toString(y);for(var V=o(u(y,6),this.unsigned),q=this,J="";;){var at=q.div(V),tt=q.sub(at.mul(V)).toInt()>>>0,nt=tt.toString(y);if(q=at,q.isZero())return nt+J;for(;nt.length<6;)nt="0"+nt;J=""+nt+J}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(C)?64:this.neg().getNumBitsAbs();for(var y=this.high!=0?this.high:this.low,x=31;x>0&&(y&1<<x)==0;x--);return this.high!=0?x+33:x+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function(y){return n(y)||(y=h(y)),this.unsigned!==y.unsigned&&this.high>>>31===1&&y.high>>>31===1?!1:this.high===y.high&&this.low===y.low},k.eq=k.equals,k.notEquals=function(y){return!this.eq(y)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function(y){return this.comp(y)<0},k.lt=k.lessThan,k.lessThanOrEqual=function(y){return this.comp(y)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function(y){return this.comp(y)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function(y){return this.comp(y)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function(y){if(n(y)||(y=h(y)),this.eq(y))return 0;var x=this.isNegative(),R=y.isNegative();return x&&!R?-1:!x&&R?1:this.unsigned?y.high>>>0>this.high>>>0||y.high===this.high&&y.low>>>0>this.low>>>0?-1:1:this.sub(y).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(C)?C:this.not().add(F)},k.neg=k.negate,k.add=function(y){n(y)||(y=h(y));var x=this.high>>>16,R=this.high&65535,P=this.low>>>16,V=this.low&65535,q=y.high>>>16,J=y.high&65535,at=y.low>>>16,tt=y.low&65535,nt=0,kt=0,it=0,Tt=0;return Tt+=V+tt,it+=Tt>>>16,Tt&=65535,it+=P+at,kt+=it>>>16,it&=65535,kt+=R+J,nt+=kt>>>16,kt&=65535,nt+=x+q,nt&=65535,i(it<<16|Tt,nt<<16|kt,this.unsigned)},k.subtract=function(y){return n(y)||(y=h(y)),this.add(y.neg())},k.sub=k.subtract,k.multiply=function(y){if(this.isZero())return $;if(n(y)||(y=h(y)),e){var x=e.mul(this.low,this.high,y.low,y.high);return i(x,e.get_high(),this.unsigned)}if(y.isZero())return $;if(this.eq(C))return y.isOdd()?C:$;if(y.eq(C))return this.isOdd()?C:$;if(this.isNegative())return y.isNegative()?this.neg().mul(y.neg()):this.neg().mul(y).neg();if(y.isNegative())return this.mul(y.neg()).neg();if(this.lt(T)&&y.lt(T))return o(this.toNumber()*y.toNumber(),this.unsigned);var R=this.high>>>16,P=this.high&65535,V=this.low>>>16,q=this.low&65535,J=y.high>>>16,at=y.high&65535,tt=y.low>>>16,nt=y.low&65535,kt=0,it=0,Tt=0,an=0;return an+=q*nt,Tt+=an>>>16,an&=65535,Tt+=V*nt,it+=Tt>>>16,Tt&=65535,Tt+=q*tt,it+=Tt>>>16,Tt&=65535,it+=P*nt,kt+=it>>>16,it&=65535,it+=V*tt,kt+=it>>>16,it&=65535,it+=q*at,kt+=it>>>16,it&=65535,kt+=R*nt+P*tt+V*at+q*J,kt&=65535,i(Tt<<16|an,kt<<16|it,this.unsigned)},k.mul=k.multiply,k.divide=function(y){if(n(y)||(y=h(y)),y.isZero())throw Error("division by zero");if(e){if(!this.unsigned&&this.high===-2147483648&&y.low===-1&&y.high===-1)return this;var x=(this.unsigned?e.div_u:e.div_s)(this.low,this.high,y.low,y.high);return i(x,e.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?I:$;var R,P,V;if(this.unsigned){if(y.unsigned||(y=y.toUnsigned()),y.gt(this))return I;if(y.gt(this.shru(1)))return _;V=I}else{if(this.eq(C)){if(y.eq(F)||y.eq(A))return C;if(y.eq(C))return F;var q=this.shr(1);return R=q.div(y).shl(1),R.eq($)?y.isNegative()?F:A:(P=this.sub(y.mul(R)),V=R.add(P.div(y)),V)}else if(y.eq(C))return this.unsigned?I:$;if(this.isNegative())return y.isNegative()?this.neg().div(y.neg()):this.neg().div(y).neg();if(y.isNegative())return this.div(y.neg()).neg();V=$}for(P=this;P.gte(y);){R=Math.max(1,Math.floor(P.toNumber()/y.toNumber()));for(var J=Math.ceil(Math.log(R)/Math.LN2),at=J<=48?1:u(2,J-48),tt=o(R),nt=tt.mul(y);nt.isNegative()||nt.gt(P);)R-=at,tt=o(R,this.unsigned),nt=tt.mul(y);tt.isZero()&&(tt=F),V=V.add(tt),P=P.sub(nt)}return V},k.div=k.divide,k.modulo=function(y){if(n(y)||(y=h(y)),e){var x=(this.unsigned?e.rem_u:e.rem_s)(this.low,this.high,y.low,y.high);return i(x,e.get_high(),this.unsigned)}return this.sub(this.div(y).mul(y))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return i(~this.low,~this.high,this.unsigned)},k.and=function(y){return n(y)||(y=h(y)),i(this.low&y.low,this.high&y.high,this.unsigned)},k.or=function(y){return n(y)||(y=h(y)),i(this.low|y.low,this.high|y.high,this.unsigned)},k.xor=function(y){return n(y)||(y=h(y)),i(this.low^y.low,this.high^y.high,this.unsigned)},k.shiftLeft=function(y){return n(y)&&(y=y.toInt()),(y&=63)===0?this:y<32?i(this.low<<y,this.high<<y|this.low>>>32-y,this.unsigned):i(0,this.low<<y-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function(y){return n(y)&&(y=y.toInt()),(y&=63)===0?this:y<32?i(this.low>>>y|this.high<<32-y,this.high>>y,this.unsigned):i(this.high>>y-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function(y){if(n(y)&&(y=y.toInt()),y&=63,y===0)return this;var x=this.high;if(y<32){var R=this.low;return i(R>>>y|x<<32-y,x>>>y,this.unsigned)}else return y===32?i(x,0,this.unsigned):i(x>>>y-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?i(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:i(this.low,this.high,!0)},k.toBytes=function(y){return y?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var y=this.high,x=this.low;return[x&255,x>>>8&255,x>>>16&255,x>>>24,y&255,y>>>8&255,y>>>16&255,y>>>24]},k.toBytesBE=function(){var y=this.high,x=this.low;return[y>>>24,y>>>16&255,y>>>8&255,y&255,x>>>24,x>>>16&255,x>>>8&255,x&255]},t.fromBytes=function(y,x,R){return R?t.fromBytesLE(y,x):t.fromBytesBE(y,x)},t.fromBytesLE=function(y,x){return new t(y[0]|y[1]<<8|y[2]<<16|y[3]<<24,y[4]|y[5]<<8|y[6]<<16|y[7]<<24,x)},t.fromBytesBE=function(y,x){return new t(y[4]<<24|y[5]<<16|y[6]<<8|y[7],y[0]<<24|y[1]<<16|y[2]<<8|y[3],x)},Hn}var ia=Qc();const ua=Fo(ia),tl=Ro({__proto__:null,default:ua},[ia]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oe=ua||tl;function en(e){return oe.fromString(e,!0,16)}const ca=en("c3a5c85c97cb3127"),re=en("b492b66fbe98f273"),ht=en("9ae16a3b2f90404f");function ns(e){return e.xor(e.shru(47))}function la(e,t,n){const s=e.slice(t,t+n);return oe.fromBytes(Array.from(s),!0,!0)}function M(e,t){return la(e,t,8)}function fr(e,t){return la(e,t,4)}function ot(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Kt(e,t,n=en("9ddfea08eb382d69")){let s=e.xor(t).mul(n);s=s.xor(s.shru(47));let r=t.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function el(e,t,n,s,r,a){r=r.add(e),a=ot(a.add(r).add(s),21);const o=r;return r=r.add(t),r=r.add(n),a=a.add(ot(r,44)),[r.add(s),a.add(o)]}function on(e,t,n,s){return el(M(e,t),M(e,t+8),M(e,t+16),M(e,t+24),n,s)}function nl(e,t=e.length){if(t>=8){const n=ht.add(t*2),s=M(e,0).add(ht),r=M(e,t-8),a=ot(r,37).mul(n).add(s),o=ot(s,25).add(r).mul(n);return Kt(a,o,n)}if(t>=4){const n=ht.add(t*2),s=fr(e,0);return Kt(s.shl(3).add(t),fr(e,t-4),n)}if(t>0){const n=e[0],s=e[t>>1],r=e[t-1],a=n+(s<<8),o=t+(r<<2);return ns(ht.mul(a).xor(ca.mul(o))).mul(ht)}return ht}function sl(e,t=e.length){const n=ht.add(t*2),s=M(e,0).mul(re),r=M(e,8),a=M(e,t-8).mul(n),o=M(e,t-16).mul(ht);return Kt(ot(s.add(r),43).add(ot(a,30)).add(o),s.add(ot(r.add(ht),18)).add(a),n)}function rl(e,t=e.length){const n=ht.add(t*2),s=M(e,0).mul(ht),r=M(e,8),a=M(e,t-8).mul(n),o=M(e,t-16).mul(ht),i=ot(s.add(r),43).add(ot(a,30)).add(o),u=Kt(i,s.add(ot(r.add(ht),18)).add(a),n),c=M(e,16).mul(n),h=M(e,24),p=i.add(M(e,t-32)).mul(n),f=u.add(M(e,t-24)).mul(n);return Kt(ot(c.add(h),43).add(ot(p,30)).add(f),c.add(ot(h.add(s),18)).add(p),n)}function al(e,t=e.length){const n=oe.fromNumber(81,!0);if(t<=32)return t<=16?nl(e,t):sl(e,t);if(t<=64)return rl(e,t);let s=n,r=n.mul(re).add(113),a=ns(r.mul(ht).add(113)).mul(ht),o=[oe.UZERO,oe.UZERO],i=[oe.UZERO,oe.UZERO];s=s.mul(ht).add(M(e,0));let u=0;const c=(t-1>>6)*64,h=c+(t-1&63)-63;do s=ot(s.add(r).add(o[0]).add(M(e,u+8)),37).mul(re),r=ot(r.add(o[1]).add(M(e,u+48)),42).mul(re),s=s.xor(i[1]),r=r.add(o[0]).add(M(e,u+40)),a=ot(a.add(i[0]),33).mul(re),o=on(e,u,o[1].mul(re),s.add(i[0])),i=on(e,u+32,a.add(i[1]),r.add(M(e,u+16))),[a,s]=[s,a],u+=64;while(u!==c);const p=re.add(a.and(255).shl(1));return u=h,i[0]=i[0].add(t-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),s=ot(s.add(r).add(o[0]).add(M(e,u+8)),37).mul(p),r=ot(r.add(o[1]).add(M(e,u+48)),42).mul(p),s=s.xor(i[1].mul(9)),r=r.add(o[0].mul(9).add(M(e,u+40))),a=ot(a.add(i[0]),33).mul(p),o=on(e,u,o[1].mul(p),s.add(i[0])),i=on(e,u+32,a.add(i[1]),r.add(M(e,u+16))),[a,s]=[s,a],Kt(Kt(o[0],i[0],p).add(ns(r).mul(ca)).add(a),Kt(o[1],i[1],p).add(s),p)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ol(e,t){return t==="string"?Rs(e):Bn([e],t)}function il(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Bn(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Ae(e)),z().getBool("DEBUG")&&Kr(e,t),il(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let s=0;s<n.length;++s)Math.round(e[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function qe(){return z().platform.now()}function ul(e,t){return z().platform.fetch(e,t)}function Rs(e,t="utf-8"){return t=t||"utf-8",z().platform.encode(e,t)}function ss(e,t="utf-8"){return t=t||"utf-8",z().platform.decode(e,t)}function vt(e){return z().platform.isTypedArray!=null?z().platform.isTypedArray(e):oa(e)}function Ae(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Yt(e)||e==null||vt(e)&&n)t.push(e);else if(Array.isArray(e)||vt(e))for(let s=0;s<e.length;++s)Ae(e[s],t,n);else{let s=-1;for(const r of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)Ae(e[r],t,n)}return t}const sN=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Rt,arraysEqualWithNull:Wr,assert:g,assertNonNegativeIntegerDimensions:Nt,assertNonNull:be,assertShapesMatch:ft,bytesFromStringArray:Xr,bytesPerElement:Sn,checkConversionForErrors:Kr,clamp:Vo,computeStrides:tn,convertBackendValuesAndArrayBuffer:Qo,createScalarValue:ol,createShuffledIndices:Ho,decodeString:ss,distSquared:Wo,encodeString:Rs,fetch:ul,fingerPrint64:al,flatten:Ae,getArrayFromDType:Ds,getTypedArrayFromDType:Mr,hasEncodingLoss:Yo,hexToLong:en,indexToLoc:ni,inferDtype:Qe,inferFromImplicitShape:Jo,isBoolean:Jr,isFunction:Jt,isInt:xe,isNumber:Yr,isPromise:Yt,isScalarShape:Go,isString:Cn,isTypedArray:vt,isValidDtype:Hr,locToIndex:ei,makeOnesTypedArray:Os,makeZerosNestedTypedArray:ti,makeZerosTypedArray:Rn,nearestDivisor:Zo,nearestLargerEven:Uo,now:qe,parseAxisParam:Ze,randUniform:qo,repeatedTry:Xo,rightPad:ze,shuffle:qr,shuffleCombo:zo,sizeFromShape:Z,sizeToSquarishShape:Ko,squeezeShape:Gr,sum:jo,swap:Tn,tanh:Mo,toNestedArray:le,toTypedArray:Bn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cl{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new hl)}profileKernel(t,n,s){let r;const a=()=>{r=s()};let o;const i=qe();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const c of r)c.dataSync();o=Promise.resolve({kernelMs:qe()-i})}if(z().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){const h=r[c];h.data().then(p=>{ll(p,h.dtype,t)})}return{kernelName:t,outputs:r,inputs:n,timeMs:o.then(c=>c.kernelMs),extraInfo:o.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:r,inputs:a,extraInfo:o}=t;s.forEach(i=>{Promise.all([i.data(),r,o]).then(u=>{this.logger.logKernelProfile(n,i,u[0],u[1],a,u[2])})})}}function ll(e,t,n){if(t!=="float32")return!1;for(let s=0;s<e.length;s++){const r=e[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class hl{logKernelProfile(t,n,s,r,a,o){const i=typeof r=="number"?ze(`${r}ms`,9):r.error,u=ze(t,25),c=n.rank,h=n.size,p=ze(n.shape.toString(),14);let f="";for(const d in a){const b=a[d];if(b!=null){const S=b.shape||n.shape,T=S.length;f+=`${d}: ${T}D ${T>0?S:""} `}}console.log(`%c${u}	%c${i}	%c${c}D ${p}	%c${h}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pl(e,t,n){const s={},r={};for(let u=0;u<t.length;u++)s[t[u].id]=!0;for(let u=0;u<e.length;u++){const c=e[u],h=c.inputs;for(const p in h){const f=h[p];let d=!1;for(let b=0;b<t.length;b++)if(s[f.id]){c.outputs.forEach(S=>s[S.id]=!0),d=!0,r[c.id]=!0;break}if(d)break}}const a={};a[n.id]=!0;const o={};for(let u=e.length-1;u>=0;u--){const c=e[u],h=c.inputs;for(let p=0;p<c.outputs.length;p++)if(a[c.outputs[p].id]){for(const f in h)a[h[f].id]=!0,o[c.id]=!0;break}}const i=[];for(let u=0;u<e.length;u++){const c=e[u];if(r[c.id]&&o[c.id]){const h={};for(const f in c.inputs){const d=c.inputs[f];s[d.id]&&(h[f]=d)}const p=Object.assign({},c);p.inputs=h,p.outputs=c.outputs,i.push(p)}}return i}function fl(e,t,n,s){for(let r=t.length-1;r>=0;r--){const a=t[r],o=[];if(a.outputs.forEach(u=>{const c=e[u.id];c!=null?o.push(c):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const u in a.inputs){if(!(u in i))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(i)}.`);const c=n(()=>i[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);const h=a.inputs[u];if(!Rt(c.shape,h.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=c;else{const p=e[h.id];e[h.id]=s(p,c),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mr=20,Re=3,Xn=7;function ml(e,t,n,s){const r=tn(t),a=dl(e,t,n,r),o=t.length,i=ln(e,t,n,r,a),u=["Tensor"];return s&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map(c=>"    "+c).join(`
`)),u.join(`
`)}function dl(e,t,n,s){const r=Z(t),a=s[s.length-1],o=new Array(a).fill(0),i=t.length,u=n==="complex64"?Le(e):e;if(i>1)for(let c=0;c<r/a;c++){const h=c*a;for(let p=0;p<a;p++)o[p]=Math.max(o[p],Pe(u[h+p],0,n).length)}return o}function Pe(e,t,n){let s;return Array.isArray(e)?s=`${parseFloat(e[0].toFixed(Xn))} + ${parseFloat(e[1].toFixed(Xn))}j`:Cn(e)?s=`'${e}'`:n==="bool"?s=ha(e):s=parseFloat(e.toFixed(Xn)).toString(),ze(s,t)}function ha(e){return e===0?"false":"true"}function ln(e,t,n,s,r,a=!0){const o=n==="complex64"?2:1,i=t[0],u=t.length;if(u===0){if(n==="complex64"){const S=Le(e);return[Pe(S[0],0,n)]}return n==="bool"?[ha(e[0])]:[e[0].toString()]}if(u===1){if(i>mr){const T=Re*o;let $=Array.from(e.slice(0,T)),I=Array.from(e.slice((i-Re)*o,i*o));return n==="complex64"&&($=Le($),I=Le(I)),["["+$.map((F,_)=>Pe(F,r[_],n)).join(", ")+", ..., "+I.map((F,_)=>Pe(F,r[i-Re+_],n)).join(", ")+"]"]}return["["+(n==="complex64"?Le(e):Array.from(e)).map((T,$)=>Pe(T,r[$],n)).join(", ")+"]"]}const c=t.slice(1),h=s.slice(1),p=s[0]*o,f=[];if(i>mr){for(let S=0;S<Re;S++){const T=S*p,$=T+p;f.push(...ln(e.slice(T,$),c,n,h,r,!1))}f.push("...");for(let S=i-Re;S<i;S++){const T=S*p,$=T+p;f.push(...ln(e.slice(T,$),c,n,h,r,S===i-1))}}else for(let S=0;S<i;S++){const T=S*p,$=T+p;f.push(...ln(e.slice(T,$),c,n,h,r,S===i-1))}const d=u===2?",":"";f[0]="["+(i>0?f[0]+d:"");for(let S=1;S<f.length-1;S++)f[S]=" "+f[S]+d;let b=`,
`;for(let S=2;S<u;S++)b+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(a?"":b),f}function Le(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rs{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=Z(t),s!=null){const r=s.length;g(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Ds(n,this.size),this.strides=tn(t)}set(t,...n){n.length===0&&(n=[0]),g(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const r of t){if(r<0||r>=this.shape[n]){const a=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return xt().makeTensor(this.values,this.shape,this.dtype)}}let xt=null,Te=null;function gl(e){xt=e}function yl(e){Te=e}class st{constructor(t,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Z(t),this.strides=tn(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Te.buffer(this.shape,this.dtype,t)}bufferSync(){return Te.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return le(this.shape,t,this.dtype==="complex64")}arraySync(){return le(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=xt().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>ss(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),xt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=xt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>ss(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await xt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),xt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Te.print(this,t)}clone(){return this.throwIfDisposed(),Te.clone(this)}toString(t=!1){const n=this.dataSync();return ml(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Te.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),xt().makeVariable(this,t,n,s)}}Object.defineProperty(st,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function pa(){return Fs("Tensor",()=>st)}pa();class vn extends st{constructor(t,n,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Rt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);xt().disposeTensor(this),this.dataId=t.dataId,xt().incRef(this,null)}dispose(){xt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(vn,Symbol.hasInstance,{value:e=>e instanceof st&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var dr;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(dr||(dr={}));var as;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(as||(as={}));var os;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(os||(os={}));var is;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(is||(is={}));var us;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(us||(us={}));const bl={float32:is,int32:as,bool:os,complex64:us};function fa(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return bl[e][t]}function rN(e){return fa(e,"int32")}function ma(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function da(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q(e,t){if(e.dtype===t.dtype)return[e,t];const n=fa(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ga(e,t){g(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function wl(e,t){return t.some(n=>n.id===e.id)}function Bs(e){const t=[];return ya(e,t,new Set),t}function ya(e,t,n){if(e==null)return;if(e instanceof st){t.push(e);return}if(!Nl(e))return;const s=e;for(const r in s){const a=s[r];n.has(a)||(n.add(a),ya(a,t,n))}}function Nl(e){return Array.isArray(e)||typeof e=="object"}const aN=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:ga,getTensorsInContainer:Bs,isTensorInList:wl,makeTypesMatch:Q},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jn(e){return e.kernelName!=null}class gr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class De{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new gr}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(ae(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new cl(this.backendInstance),!0}setupRegisteredKernels(){es(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){es(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof Lo)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,a=s.then(o=>r<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,ae(`Initialization of backend ${t} failed`),ae(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return ae(`Initialization of backend ${t} failed`),ae(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:r,asyncInit:a}=this.initializeBackend(s);if(a||r)return{name:s,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),r=s.backend,a=this.readSync(n),o=r.refCount(n);r.disposeData(n,!0),s.backend=t,t.move(n,a,s.shape,s.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,n,s){t();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return De.nextTensorId++}nextVariableId(){return De.nextVariableId++}clone(t){const n=N.runKernel(ra,{x:t}),s={x:t},r=o=>({x:()=>{const i="float32",u={x:o},c={dtype:i};return N.runKernel(na,u,c)}}),a=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,a,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!($n(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const r=this.backend.numDataIds();let a=0;s.forEach(u=>{a+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const r=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let u;const c=Jn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Jn(t)){const{kernelName:b,inputs:S,attrs:T}=t;this.backendName==null&&this.backend;const $=$n(b,this.backendName);g($!=null,()=>`Cannot find registered kernel '${b}' for backend '${this.backendName}'`),i=()=>{const I=this.backend.numDataIds();u=$.kernelFunc({inputs:S,attrs:T,backend:this.backend});const F=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(b,I,F);const _=F.map(A=>A.rank!=null?A:this.makeTensorFromTensorInfo(A));if(r){const A=this.getTensorsForGradient(b,S,_);s=this.saveTensorsForBackwardMode(A)}return _}}else{const{forwardFunc:b}=t,S=T=>{r&&(s=T.map($=>this.keep(this.clone($))))};i=()=>{const T=this.backend.numDataIds();u=this.tidy(()=>b(this.backend,S));const $=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,T,$),$}}const{inputs:h,attrs:p}=t,f=Jn(t)?null:t.backwardsFunc;let d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(d=this.profiler.profileKernel(c,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),n=d.outputs)}),r&&this.addTapeNode(c,h,n,f,s,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(b=>h[b]!=null?h[b].shape:null),outputShapes:n.map(b=>b.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const r=hr(t);if(r!=null){const a=r.inputsToSave||[],o=r.outputsToSave||[];let i;r.saveAllInputs?(g(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(c=>n[c])):i=a.map(c=>n[c]);const u=s.filter((c,h)=>o[h]);return i.concat(u)}return[]}makeTensor(t,n,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let a=t;s==="string"&&Cn(t[0])&&(a=t.map(u=>Rs(u)));const o=r.write(a,n,s),i=new st(n,s,o,this.nextTensorId());if(this.trackTensor(i,r),s==="string"){const u=this.state.tensorInfo.get(o),c=Xr(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return i}makeTensorFromDataId(t,n,s,r){s=s||"float32";const a={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:r,dtype:a}=t,o=new st(r,a,s,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(t,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const a=new vn(t,n,s,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Sn(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof vn||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Sn(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,r,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:a},u=hr(t);u!=null&&(r=u.gradFunc),r!=null&&(i.gradient=c=>(c=c.map((h,p)=>{if(h==null){const f=s[p],d=Rn(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return h}),r(c.length>1?c:c[0],a,o))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=Bs(t),s=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!s.has(o.id)&&o.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===r.id&&this.track(a)})}gradients(t,n,s,r=!1){if(g(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));g(a instanceof st,()=>"The result y returned by f() must be a tensor.");const o=pl(this.state.activeTape,n,a);if(!r&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=s??Tl(a.shape),fl(i,o,c=>this.tidy(c),Sl);const u=n.map(c=>i[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const h of c.saved)h.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(t){return g(Jt(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{g(n.every(i=>i instanceof st),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((i,u)=>{r[u]=i});const a=(i,u)=>(s=t(...n,u),g(s.value instanceof st,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),g(Jt(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),o=(i,u)=>{const c=s.gradFunc(i,u),h=Array.isArray(c)?c:[c];g(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),g(h.every(f=>f instanceof st),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return h.forEach((f,d)=>{p[d]=()=>f}),p};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=qe(),s=await this.backend.time(t);return s.wallMs=qe()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new gr;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}De.nextTensorId=0;De.nextVariableId=0;function Tl(e){const t=Os(Z(e),"float32");return N.makeTensor(t,e,"float32")}function ba(){const e=ta();if(e._tfengine==null){const t=new si(e);e._tfengine=new De(t)}return ii(e._tfengine.ENV),gl(()=>e._tfengine),e._tfengine}const N=ba();function Sl(e,t){const n={a:e,b:t};return N.runKernel(ea,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $l(){return typeof navigator<"u"&&navigator!=null}let cs;function vl(e){cs=e}function kl(e){if(cs!==void 0)return cs;if(e||$l()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function wa(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const oN=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:wa,isMobile:kl,mockIsMobile:vl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gt=z();gt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});gt.registerFlag("IS_BROWSER",()=>wa());gt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");gt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));gt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));gt.registerFlag("PROD",()=>!1);gt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>gt.getBool("DEBUG"));gt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);gt.registerFlag("IS_TEST",()=>!1);gt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>gt.getBool("DEBUG"));gt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);gt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);gt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function te(e,t){let n=e;if(vt(e))return t==="string"?[]:[e.length];if(ma(e)){const r=e.channels||"RGBA";return[e.height,e.width*r.length]}else if(da(e))return[e.buffer.size/(t==null?4:Sn(t))];if(!Array.isArray(e))return[];const s=[];for(;Array.isArray(n)||vt(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(e)&&z().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Na(e,s,[]),s}function Na(e,t,n){if(n=n||[],!Array.isArray(e)&&!vt(e)){g(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}g(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),g(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const s=t.slice(1);for(let r=0;r<e.length;++r)Na(e[r],s,n.concat(r))}function yr(e,t,n,s){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${e} tensor, but got ${t} tensor`)}}function m(e,t,n,s="numeric"){if(e instanceof pa())return yr(s,e.dtype,t,n),e;let r=Qe(e);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),yr(s,r,t,n),e==null||!vt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const u=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${u}'`)}const a=te(e,r);!vt(e)&&!Array.isArray(e)&&(e=[e]);const i=r!=="string"?Bn(e,r):Ae(e,[],!0);return N.makeTensor(i,a,r)}function We(e,t,n,s="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((a,o)=>m(a,`${t}[${o}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ta="__op";function w(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Ta;const r=(...a)=>{N.startScope(n);try{const o=s(...a);return Yt(o)&&console.error("Cannot return a Promise inside of tidy."),N.endScope(o),o}catch(o){throw N.endScope(null),o}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function El(e,t){const n=m(e,"real","complex"),s=m(t,"imag","complex");ft(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return N.runKernel(Di,r)}const Zt=w({complex_:El});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(e,t,n,s){if(s==null)s=Qe(e);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(da(e)||ma(e)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return N.backend.createTensorFromGPUData(e,t||n,s)}if(!vt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Nt(t);const r=Z(t),a=Z(n);g(r===a,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],u=o===n.length-1?i!==Z(t.slice(o)):!0;g(n[o]===t[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!vt(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=s!=="string"?Bn(e,s):Ae(e,[],!0),N.makeTensor(e,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ft(e,t,n){const s=te(e,n);return ee(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const he={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class At{static join(t){return new At(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>vt(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=n+r.byteLength;this.shards.push({buffer:r,start:n,end:a}),n=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=n-t,a=new ArrayBuffer(r),o=new Uint8Array(a);let i=0;for(let u=s;u<this.shards.length;u++){const c=this.shards[u],p=t+i-c.start,f=i,b=Math.min(n,c.end)-c.start,S=new Uint8Array(c.buffer,p,b-p);if(o.set(S,f),i+=S.length,n<c.end)break}return a}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(r){return t<r.start?-1:t>=r.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=_l(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function _l(e,t){let n=0,s=e.length;for(;n<=s;){const r=Math.floor((s-n)/2)+n,a=t(e[r]);if(a===0)return r;a<0?s=r:n=r+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iN(){z().set("PROD",!0)}function uN(){z().set("DEBUG",!0)}function cN(){z().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function lN(e){z().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function hN(){N.disposeVariables()}function pN(){return N}function fN(){return N.memory()}function mN(e){return N.profile(e)}function W(e,t){return N.tidy(e,t)}function dt(e){Bs(e).forEach(n=>n.dispose())}function Ot(e){return N.keep(e)}function dN(e){return N.time(e)}function gN(e){return N.setBackend(e)}function yN(){return N.ready()}function xl(){return N.backendName}function bN(e){N.removeBackend(e)}function wN(e){return N.findBackend(e)}function NN(e){return N.findBackendFactory(e)}function TN(e,t,n=1){return N.registerBackend(e,t,n)}function Il(){return N.backend}function SN(e,t){z().setPlatform(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=4;async function Al(e,t){const n=[],s=[],r=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);for(let o=0;o<r.length;++o){const i=r[o],u=Array.isArray(e)?e[o].tensor:e[i];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);const c={name:i,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const h=new Promise(async p=>{const f=await u.bytes(),d=f.reduce((T,$)=>T+$.length,0)+Qt*f.length,b=new Uint8Array(d);let S=0;for(let T=0;T<f.length;T++){const $=f[T],I=new Uint8Array(new Uint32Array([$.length]).buffer);b.set(I,S),S+=Qt,b.set($,S),S+=$.length}p(b)});s.push(h)}else s.push(u.data());t!=null&&(c.group=t),n.push(c)}const a=await Promise.all(s);return{data:Fl(a),specs:n}}function Sa(e,t){const n=new At(e),s={};let r=0;for(const a of t){const o=Dl(a,(i,u)=>n.slice(r+i,r+u));s[a.name]=$a(a,n.slice(r,r+o)),r+=o}return s}function Dl(e,t){const n=Z(e.shape);let s;if("quantization"in e){const r=e.quantization;s=he[r.dtype]}else if(e.dtype==="string"){let r=0;for(let a=0;a<n;a++)r+=Qt+new Uint32Array(t(r,r+Qt))[0];return r}else s=he[e.dtype];return n*s}async function Ol(e,t){const n=Z(e.shape);let s;if("quantization"in e){const r=e.quantization;s=he[r.dtype]}else if(e.dtype==="string"){let r=0;for(let a=0;a<n;a++)r+=Qt+new Uint32Array(await t(r,r+Qt))[0];return r}else s=he[e.dtype];return n*s}function $a(e,t){const n=e.name,s=e.dtype,r=e.shape,a=Z(r);let o,i=0;if("quantization"in e){const u=e.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${e.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${e.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=he[u.dtype],h=u.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){o=new Float32Array(h.length);for(let p=0;p<h.length;p++){const f=h[p];o[p]=f*u.scale+u.min}}else if(u.dtype==="float16")o=Vl()(h);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(s==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);o=new Int32Array(h.length);for(let p=0;p<h.length;p++){const f=h[p];o[p]=Math.round(f*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=a*c}else if(s==="string"){const u=Z(e.shape);o=[];for(let c=0;c<u;c++){const h=new Uint32Array(t.slice(i,i+Qt))[0];i+=Qt;const p=new Uint8Array(t.slice(i,i+h));o.push(p),i+=h}}else{const u=he[s];if(s==="float32")o=new Float32Array(t);else if(s==="int32")o=new Int32Array(t);else if(s==="bool")o=new Uint8Array(t);else if(s==="complex64"){o=new Float32Array(t);const c=new Float32Array(o.length/2),h=new Float32Array(o.length/2);for(let b=0;b<c.length;b++)c[b]=o[b*2],h[b]=o[b*2+1];const p=Ft(c,r,"float32"),f=Ft(h,r,"float32"),d=Zt(p,f);return p.dispose(),f.dispose(),d}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=a*u}return Ft(o,r,s)}async function br(e,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:r,value:a}=await e.read();if(r&&a==null){const i=n-s.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const o=new Uint8Array(s.length+a.byteLength);o.set(s,0),o.set(new Uint8Array(a),s.length),s=o}return s.buffer}async function va(e,t){const n={},s=e.getReader();let r=new ArrayBuffer(0);for(const a of t){const o=await Ol(a,async(c,h)=>(r=await br(s,r,h),r.slice(c,h)));r=await br(s,r,o);const i=r.slice(0,o);r=r.slice(o);const u=$a(a,i);if(n[a.name]=u,xl()==="webgpu"){const c=Il();"uploadToGPU"in c&&Z(u.shape)>=z().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&c.uploadToGPU(u.dataId)}}return n}function Fl(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(a=>{if(t+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const s=new Uint8Array(t);let r=0;return n.forEach(a=>{s.set(new Uint8Array(a.buffer),r),r+=a.byteLength}),s.buffer}const Ps=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function wr(e){return Ps?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function Cl(e){if(Ps)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let s=0,r=t.length;s<r;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function Rl(e){if(Ps){const s=Buffer.from(e,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function Bl(e){return At.join(e)}function Nr(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);const n=e.split("/");return n[n.length-1]}function ka(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Ls(e,t,n){const s={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(s.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return e.signature!=null&&(s.signature=e.signature),e.userDefinedMetadata!=null&&(s.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(s.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(s.initializerSignature=e.initializerSignature),s}async function zs(e,t){let n,s;return e.weightsManifest!=null&&([n,s]=await t(e.weightsManifest)),Ls(e,n,s)}function nn(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:wr(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:wr(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new At(e.weightData).byteLength}}function kn(e){const t=[];for(const n of e)t.push(...n.weights);return t}function Pl(){const e=n=>{let s=n<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Ll(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function zl(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Vl(){const e=Pl(),t=Ll(),n=zl();return s=>{const r=new ArrayBuffer(4*s.length),a=new Uint32Array(r);for(let o=0;o<s.length;o++){const i=s[o],u=e[n[i>>10]+(i&1023)]+t[i>>10];a[o]=u}return new Float32Array(r)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Y.instance==null&&(Y.instance=new Y),Y.instance}static registerSaveRouter(t){Y.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Y.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Y.getHandlers(t,"save")}static getLoadHandlers(t,n){return Y.getHandlers(t,"load",n)}static getHandlers(t,n,s){const r=[];return(n==="load"?Y.getInstance().loadRouters:Y.getInstance().saveRouters).forEach(o=>{const i=o(t,s);i!==null&&r.push(i)}),r}}const Ul=e=>Y.registerSaveRouter(e),jl=e=>Y.registerLoadRouter(e),ql=e=>Y.getSaveHandlers(e),Wl=(e,t)=>Y.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ls="tensorflowjs",hs=1,ue="models_store",Mt="model_info_store";function Ea(){if(!z().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ps(e){const t=e.result;t.createObjectStore(ue,{keyPath:"modelPath"}),t.createObjectStore(Mt,{keyPath:"modelPath"})}class pe{constructor(t){if(this.indexedDB=Ea(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,r)=>{const a=this.indexedDB.open(ls,hs);a.onupgradeneeded=()=>ps(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(ue,"readonly"),c=i.objectStore(ue).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=h=>(o.close(),r(c.error)),i.oncomplete=()=>o.close()}else{n.weightData=At.join(n.weightData);const i=nn(n),u=o.transaction(Mt,"readwrite");let c=u.objectStore(Mt),h;try{h=c.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(f){return r(f)}let p;h.onsuccess=()=>{p=o.transaction(ue,"readwrite");const f=p.objectStore(ue);let d;try{d=f.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(b){return r(b)}d.onsuccess=()=>s({modelArtifactsInfo:i}),d.onerror=b=>{c=u.objectStore(Mt);const S=c.delete(this.modelPath);S.onsuccess=()=>(o.close(),r(d.error)),S.onerror=T=>(o.close(),r(d.error))}},h.onerror=f=>(o.close(),r(h.error)),u.oncomplete=()=>{p==null?o.close():p.oncomplete=()=>o.close()}}},a.onerror=o=>r(a.error)})}}pe.URL_SCHEME="indexeddb://";const _a=e=>z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(pe.URL_SCHEME)?Gl(e.slice(pe.URL_SCHEME.length)):null;Y.registerSaveRouter(_a);Y.registerLoadRouter(_a);function Gl(e){return new pe(e)}function Ml(e){return e.startsWith(pe.URL_SCHEME)?e.slice(pe.URL_SCHEME.length):e}class Kl{constructor(){this.indexedDB=Ea()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(ls,hs);s.onupgradeneeded=()=>ps(s),s.onsuccess=()=>{const r=s.result,a=r.transaction(Mt,"readonly"),i=a.objectStore(Mt).getAll();i.onsuccess=()=>{const u={};for(const c of i.result)u[c.modelPath]=c.modelArtifactsInfo;t(u)},i.onerror=u=>(r.close(),n(i.error)),a.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})}async removeModel(t){return t=Ml(t),new Promise((n,s)=>{const r=this.indexedDB.open(ls,hs);r.onupgradeneeded=()=>ps(r),r.onsuccess=()=>{const a=r.result,o=a.transaction(Mt,"readwrite"),i=o.objectStore(Mt),u=i.get(t);let c;u.onsuccess=()=>{if(u.result==null)return a.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),p=()=>{c=a.transaction(ue,"readwrite");const d=c.objectStore(ue).delete(t);d.onsuccess=()=>n(u.result.modelArtifactsInfo),d.onerror=b=>s(u.error)};h.onsuccess=p,h.onerror=f=>(p(),a.close(),s(u.error))}},u.onerror=h=>(a.close(),s(u.error)),o.oncomplete=()=>{c==null?a.close():c.oncomplete=()=>a.close()}},r.onerror=a=>s(r.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt="/",Se="tensorflowjs_models",xa="info",Hl="model_topology",Xl="weight_specs",Jl="weight_data",Yl="model_metadata";function Ia(e){return{info:[Se,e,xa].join(Lt),topology:[Se,e,Hl].join(Lt),weightSpecs:[Se,e,Xl].join(Lt),weightData:[Se,e,Jl].join(Lt),modelMetadata:[Se,e,Yl].join(Lt)}}function Aa(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Zl(e){const t=e.split(Lt);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Lt)}function Ql(e){return e.startsWith(fe.URL_SCHEME)?e.slice(fe.URL_SCHEME.length):e}class fe{constructor(t){if(!z().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Ia(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=nn(t),a=At.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Cl(a));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:r}}catch{throw Aa(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Rl(o),n}}fe.URL_SCHEME="localstorage://";const Da=e=>z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(fe.URL_SCHEME)?th(e.slice(fe.URL_SCHEME.length)):null;Y.registerSaveRouter(Da);Y.registerLoadRouter(Da);function th(e){return new fe(e)}class eh{constructor(){g(z().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),g(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Se+Lt,s=Lt+xa;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(n)&&a.endsWith(s)){const o=Zl(a);t[o]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){t=Ql(t);const n=Ia(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return Aa(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ve="://";class lt{constructor(){this.managers={}}static getInstance(){return lt.instance==null&&(lt.instance=new lt),lt.instance}static registerManager(t,n){g(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ve)&&(t=t.slice(0,t.indexOf(ve))),g(t.length>0,()=>"scheme must not be an empty string.");const s=lt.getInstance();g(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=lt.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(lt.getInstance().managers)}}function hn(e){if(e.indexOf(ve)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${lt.getSchemes().join(",")}`);return{scheme:e.split(ve)[0],path:e.split(ve)[1]}}async function Oa(e,t,n=!1){g(e!==t,()=>`Old path and new path are the same: '${e}'`);const s=Y.getLoadHandlers(e);g(s.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),g(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${e}.`);const r=s[0],a=Y.getSaveHandlers(t);g(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),g(a.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const o=a[0],i=hn(e).scheme,u=hn(e).path,c=i===hn(e).scheme,h=await r.load();n&&c&&await lt.getManager(i).removeModel(u);const p=await o.save(h);return n&&!c&&await lt.getManager(i).removeModel(u),p.modelArtifactsInfo}async function nh(){const e=lt.getSchemes(),t={};for(const n of e){const s=await lt.getManager(n).listModels();for(const r in s){const a=n+ve+r;t[a]=s[r]}}return t}async function sh(e){const t=hn(e);return lt.getManager(t.scheme).removeModel(t.path)}async function rh(e,t){return Oa(e,t,!1)}async function ah(e,t){return Oa(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oh{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!z().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return oa(t)}}if(z().get("IS_BROWSER")){z().setPlatform("browser",new oh);try{lt.registerManager(fe.URL_SCHEME,new eh)}catch{}try{lt.registerManager(pe.URL_SCHEME,new Kl)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ih={importFetch:()=>require("node-fetch")};let Yn;class uh{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return z().global.fetch!=null?z().global.fetch(t,n):(Yn==null&&(Yn=ih.importFetch()),Yn(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}z().get("IS_NODE")&&!z().get("IS_BROWSER")&&z().setPlatform("node",new uh);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zt(e,t="float32",n){return t=t||"float32",Nt(e),new rs(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ch(e,t){const n=m(e,"x","cast");if(!Hr(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:t};return N.runKernel(na,s,r)}const et=w({cast_:ch});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(e){const n={x:m(e,"x","clone","string_or_numeric")};return N.runKernel(ra,n)}const Ht=w({clone_:lh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fa(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ba();const hh={buffer:zt,cast:et,clone:Ht,print:Fa};yl(hh);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ph(e,t){let n=m(e,"a","add"),s=m(t,"b","add");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(ea,r)}const L=w({add_:ph});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(e,t){let n=m(e,"a","floorDiv"),s=m(t,"b","floorDiv");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(cu,r)}const Ca=w({floorDiv_:fh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mh(e,t){let n=m(e,"a","div"),s=m(t,"b","div");if([n,s]=Q(n,s),n.dtype==="int32"&&s.dtype==="int32")return Ca(n,s);const r={a:n,b:s},a={};return N.runKernel(Yi,r,a)}const X=w({div_:mh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(e,t){let n=m(e,"a","mul"),s=m(t,"b","mul");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(Uu,r)}const D=w({mul_:dh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gh(e){const t=m(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return N.runKernel(Oi,n)}else{const n={x:t};return N.runKernel(ci,n)}}const St=w({abs_:gh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yh(e){const n={x:m(e,"x","acos")};return N.runKernel(li,n)}const bh=w({acos_:yh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wh(e){const n={x:m(e,"x","acosh")};return N.runKernel(hi,n)}const Nh=w({acosh_:wh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Th(e){g(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),g(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((r,a)=>m(r,`tensors${a}`,"addN")),n=t[0];t.forEach(r=>{if(r.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(r=>{if(!Rt(r.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return N.runKernel(pi,s)}const Sh=w({addN_:Th});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $h(e,t=null,n=!1){const r={x:m(e,"x","all","bool")},a={axis:t,keepDims:n};return N.runKernel(fi,r,a)}const vh=w({all_:$h});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kh(e,t=null,n=!1){const r={x:m(e,"x","any","bool")},a={axis:t,keepDims:n};return N.runKernel(mi,r,a)}const Eh=w({any_:kh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _h(e,t=0){const s={x:m(e,"x","argMax")},r={axis:t};return N.runKernel(di,s,r)}const xh=w({argMax_:_h});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(e,t=0){const s={x:m(e,"x","argMin")},r={axis:t};return N.runKernel(gi,s,r)}const Ah=w({argMin_:Ih});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dh(e){const n={x:m(e,"x","asin")};return N.runKernel(yi,n)}const Oh=w({asin_:Dh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fh(e){const n={x:m(e,"x","asinh")};return N.runKernel(bi,n)}const Ch=w({asinh_:Fh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rh(e){const n={x:m(e,"x","atan")};return N.runKernel(wi,n)}const Bh=w({atan_:Rh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(e,t){let n=m(e,"a","atan2"),s=m(t,"b","atan2");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(Ti,r)}const Lh=w({atan2_:Ph});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zh(e){const n={x:m(e,"x","atanh")};return N.runKernel(Ni,n)}const Vh=w({atanh_:zh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $N(e,t,n,s,r="NHWC",a){const o=e[3],i=[...t,o],u=Kh(r);return Pn(e,i,n,a,s,null,null,u)}function Uh(e,t,n,s,r,a,o="channelsLast"){const[i,u]=Ge(t);let c;if(o==="channelsLast")c=[i,u,e[3],e[3]];else if(o==="channelsFirst")c=[i,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${o}`);return Pn(e,c,n,s,r,a,!1,o)}function vN(e,t,n,s,r,a,o="NDHWC"){const[i,u,c]=fs(t);let h,p;if(o==="NDHWC")p="channelsLast",h=[i,u,c,e[4],e[4]];else if(o==="NCDHW")p="channelsFirst",h=[i,u,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${o}`);return jh(e,h,n,s,r,!1,p,a)}function Pn(e,t,n,s,r,a,o=!1,i="channelsLast"){let[u,c,h,p]=[-1,-1,-1,-1];if(i==="channelsLast")[u,c,h,p]=e;else if(i==="channelsFirst")[u,p,c,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[f,d,,b]=t,[S,T]=Ge(n),[$,I]=Ge(s),F=ke(f,$),_=ke(d,I),{padInfo:A,outHeight:O,outWidth:B}=Gh(r,c,h,S,T,F,_,a,i),C=o?b*p:b;let k;return i==="channelsFirst"?k=[u,C,O,B]:i==="channelsLast"&&(k=[u,O,B,C]),{batchSize:u,dataFormat:i,inHeight:c,inWidth:h,inChannels:p,outHeight:O,outWidth:B,outChannels:C,padInfo:A,strideHeight:S,strideWidth:T,filterHeight:f,filterWidth:d,effectiveFilterHeight:F,effectiveFilterWidth:_,dilationHeight:$,dilationWidth:I,inShape:e,outShape:k,filterShape:t}}function jh(e,t,n,s,r,a=!1,o="channelsLast",i){let[u,c,h,p,f]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[u,c,h,p,f]=e;else if(o==="channelsFirst")[u,f,c,h,p]=e;else throw new Error(`Unknown dataFormat ${o}`);const[d,b,S,,T]=t,[$,I,F]=fs(n),[_,A,O]=fs(s),B=ke(d,_),C=ke(b,A),k=ke(S,O),{padInfo:v,outDepth:y,outHeight:x,outWidth:R}=Mh(r,c,h,p,$,I,F,B,C,k,i),P=a?T*f:T;let V;return o==="channelsFirst"?V=[u,P,y,x,R]:o==="channelsLast"&&(V=[u,y,x,R,P]),{batchSize:u,dataFormat:o,inDepth:c,inHeight:h,inWidth:p,inChannels:f,outDepth:y,outHeight:x,outWidth:R,outChannels:P,padInfo:v,strideDepth:$,strideHeight:I,strideWidth:F,filterDepth:d,filterHeight:b,filterWidth:S,effectiveFilterDepth:B,effectiveFilterHeight:C,effectiveFilterWidth:k,dilationDepth:_,dilationHeight:A,dilationWidth:O,inShape:e,outShape:V,filterShape:t}}function qh(e,t,n,s,r){s==null&&(s=Ra(e,t,n));const a=e[0],o=e[1],i=Me((a-t+2*s)/n+1,r),u=Me((o-t+2*s)/n+1,r);return[i,u]}function Wh(e,t,n,s,r,a){r==null&&(r=Ra(e,t[0],s[0]));const o=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*r>=t[i]&&(o[i]=Me((e[i]-t[i]+2*r)/s[i]+1,a));return o}function Ra(e,t,n,s=1){const r=ke(t,s);return Math.floor((e[0]*(n-1)-n+r)/2)}function Ge(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function fs(e){return typeof e=="number"?[e,e,e]:e}function ke(e,t){return t<=1?e:e+(e-1)*(t-1)}function Gh(e,t,n,s,r,a,o,i,u){let c,h,p;if(typeof e=="number"){c={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const d=qh([t,n],a,s,e,i);h=d[0],p=d[1]}else if(e==="same"){h=Math.ceil(t/s),p=Math.ceil(n/r);const f=Math.max(0,(h-1)*s+a-t),d=Math.max(0,(p-1)*r+o-n),b=Math.floor(f/2),S=f-b,T=Math.floor(d/2),$=d-T;c={top:b,bottom:S,left:T,right:$,type:"SAME"}}else if(e==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-a+1)/s),p=Math.ceil((n-o+1)/r);else if(typeof e=="object"){const f=u==="channelsLast"?e[1][0]:e[2][0],d=u==="channelsLast"?e[1][1]:e[2][1],b=u==="channelsLast"?e[2][0]:e[3][0],S=u==="channelsLast"?e[2][1]:e[3][1];c={top:f,bottom:d,left:b,right:S,type:f===0&&d===0&&b===0&&S===0?"VALID":"EXPLICIT"},h=Me((t-a+f+d)/s+1,i),p=Me((n-o+b+S)/r+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outHeight:h,outWidth:p}}function Mh(e,t,n,s,r,a,o,i,u,c,h){let p,f,d,b;if(e==="valid"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const T=Wh([t,n,s,1],[i,u,c],1,[r,a,o],e,h);f=T[0],d=T[1],b=T[2]}else if(e==="same"){f=Math.ceil(t/r),d=Math.ceil(n/a),b=Math.ceil(s/o);const S=(f-1)*r+i-t,T=(d-1)*a+u-n,$=(b-1)*o+c-s,I=Math.floor(S/2),F=S-I,_=Math.floor(T/2),A=T-_,O=Math.floor($/2),B=$-O;p={top:_,bottom:A,left:O,right:B,front:I,back:F,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:d,outWidth:b}}function Me(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function En(e){const[t,n,s]=Ge(e);return t===1&&n===1&&s===1}function ne(e,t){return En(e)||En(t)}function Oe(e){return Ge(e).every(t=>t>0)}function Kh(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function Dt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")g(xe(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{g(xe(r),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hh(e,t){const s={x:m(e,"x","reshape","string_or_numeric")},r={shape:t};return N.runKernel(ic,s,r)}const E=w({reshape_:Hh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(e,t,n,s,r){const a=m(e,"x","avgPool","float32"),o=1;g(ne(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,u=!1;a.rank===3&&(u=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Dt("avgPool",s,r);const c={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r};let p=N.runKernel(Si,c,h);return p=et(p,a.dtype),u?E(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Ba=w({avgPool_:Xh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(e,t,n,s,r,a="NDHWC"){const o=m(e,"x","avgPool3d","float32");let i=o,u=!1;o.rank===4&&(u=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),g(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),g(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Dt("avgPool3d",s,r);const c={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:a};let p=N.runKernel($i,c,h);return p=et(p,i.dtype),u?E(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Yh=w({avgPool3d_:Jh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zh(e,t=0){g(e.length>=1,()=>"Pass at least one tensor to concat");const n=We(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return Ht(n[0]);const s=n,r={axis:t};return N.runKernel(Fi,s,r)}const pt=w({concat_:Zh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(e,t,n=!1,s=!1){let r=m(e,"a","matMul"),a=m(t,"b","matMul");[r,a]=Q(r,a);const o={a:r,b:a},i={transposeA:n,transposeB:s};return N.runKernel(vi,o,i)}const G=w({matMul_:Qh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(e){const n={x:m(e,"x","sigmoid","float32")};return N.runKernel($c,n)}const Ee=w({sigmoid_:tp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ep(e,t,n){const s=m(e,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},a={begin:t,size:n};return N.runKernel(wc,r,a)}const K=w({slice_:ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(e){const n={x:m(e,"x","tanh","float32")};return N.runKernel(qc,n)}const ms=w({tanh_:np});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sp(e,t,n,s,r,a){const o=m(e,"forgetBias","basicLSTMCell"),i=m(t,"lstmKernel","basicLSTMCell"),u=m(n,"lstmBias","basicLSTMCell"),c=m(s,"data","basicLSTMCell"),h=m(r,"c","basicLSTMCell"),p=m(a,"h","basicLSTMCell"),f=pt([c,p],1),d=G(f,i),b=L(d,u),S=b.shape[0],T=b.shape[1]/4,$=[S,T],I=K(b,[0,0],$),F=K(b,[0,T],$),_=K(b,[0,T*2],$),A=K(b,[0,T*3],$),O=L(D(Ee(I),ms(F)),D(h,Ee(L(o,_)))),B=D(ms(O),Ee(A));return[O,B]}const rp=w({basicLSTMCell_:sp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ap(e,t,n){const s=m(e,"x","batchToSpaceND"),r=t.reduce((i,u)=>i*u);g(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),g(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),g(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const a={x:s},o={blockShape:t,crops:n};return N.runKernel(ki,a,o)}const Pa=w({batchToSpaceND_:ap});function op(e){let t;return e.rank===0||e.rank===1?t=E(e,[1,1,1,e.size]):e.rank===2?t=E(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(e,t,n,s,r,a){a==null&&(a=.001);const o=m(e,"x","batchNorm"),i=m(t,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;r!=null&&(c=m(r,"scale","batchNorm"));let h;s!=null&&(h=m(s,"offset","batchNorm")),g(i.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:op(o),scale:c,offset:h,mean:i,variance:u},d={varianceEpsilon:a},b=N.runKernel(lu,f,d);return E(b,o.shape)}const Ln=w({batchNorm_:ip});function up(e,t,n,s,r,a){const o=m(e,"x","batchNorm"),i=m(t,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;r!=null&&(c=m(r,"scale","batchNorm"));let h;return s!=null&&(h=m(s,"offset","batchNorm")),g(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),g(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),g(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),h!=null&&g(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Ln(o,i,u,h,c,a)}const cp=w({batchNorm2d_:up});function lp(e,t,n,s,r,a){const o=m(e,"x","batchNorm"),i=m(t,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;r!=null&&(c=m(r,"scale","batchNorm"));let h;return s!=null&&(h=m(s,"offset","batchNorm")),g(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),g(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),g(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),h!=null&&g(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Ln(o,i,u,h,c,a)}const hp=w({batchNorm3d_:lp});function pp(e,t,n,s,r,a){const o=m(e,"x","batchNorm"),i=m(t,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;r!=null&&(c=m(r,"scale","batchNorm"));let h;return s!=null&&(h=m(s,"offset","batchNorm")),g(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),g(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),g(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),h!=null&&g(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Ln(o,i,u,h,c,a)}const fp=w({batchNorm4d_:pp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mp(e,t,n){const s=m(e,"x","bincount"),r=m(t,"weights","bincount");g(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const a={x:s,weights:r},o={size:n};return N.runKernel(Ei,a,o)}const La=w({bincount_:mp});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dp(e,t){const n=m(e,"x","bitwiseAnd"),s=m(t,"y","bitwiseAnd");if(!Rt(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const r={a:n,b:s};return N.runKernel(_i,r)}const gp=w({bitwiseAnd_:dp});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(e,t){const n=m(e,"s0","broadcastArgs","int32"),s=m(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const r={s0:n,s1:s};return N.runKernel(xi,r)}const bp=w({broadcastArgs_:yp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(e,t){let n=m(e,"broadcastTo","x");const s=n.shape;if(Nt(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const c=n.shape.slice();for(;c.length<t.length;)c.unshift(1);n=E(n,c)}const r=n.shape,a=Array.from(t);for(let c=t.length-1;c>=0;c--)if(r[c]===t[c])a[c]=1;else if(n.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(a.map((c,h)=>c>1?h:-1).filter(c=>c>=0).length===0)return Ht(n);const i={x:n},u={reps:a};return N.runKernel(aa,i,u)}const pn=w({broadcastTo_:wp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(e){const n={x:m(e,"x","ceil","float32")};return N.runKernel(Ii,n)}const Tp=w({ceil_:Np});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sn(e,t,n){Nt(e),n=n||Qe(t);const s={shape:e,value:t,dtype:n};return N.runKernel(ou,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(e,t,n){const s=m(e,"x","clipByValue");if(g(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return sn(s.shape,t,s.dtype);const r={x:s},a={clipValueMin:t,clipValueMax:n};return N.runKernel(Ai,r,a)}const $p=w({clipByValue_:Sp});function vp(e){return pt(e,0)}const kp=w({concat1d_:vp});function Ep(e,t){return pt(e,t)}const _p=w({concat2d_:Ep});function xp(e,t){return pt(e,t)}const Ip=w({concat3d_:xp});function Ap(e,t){return pt(e,t)}const Dp=w({concat4d_:Ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Op(e,t,n,s,r="NHWC",a=[1,1],o){const i=m(e,"x","conv2d","float32"),u=m(t,"filter","conv2d","float32");let c=i,h=!1;i.rank===3&&(h=!0,c=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),g(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Dt("conv2d",s,o);const p=r==="NHWC"?c.shape[3]:c.shape[1];g(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),g(ne(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),g(Oe(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),g(Oe(n),()=>"Error in conv2D: Strides should be larger than 0.");const f={x:c,filter:u},d={strides:n,pad:s,dataFormat:r,dilations:a,dimRoundingMode:o},b=N.runKernel(Ci,f,d);return h?E(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const zn=w({conv2d_:Op});function Fp(e,t,n,s,r="NWC",a=1,o){const i=m(e,"x","conv1d"),u=m(t,"filter","conv1d");let c=i,h=!1;i.rank===2&&(h=!0,c=E(i,[1,i.shape[0],i.shape[1]])),g(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),g(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Dt("conv1d",s,o),g(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),g(ne(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),g(Oe(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),g(Oe(n),()=>"Error in conv1D: Stride should be larger than 0."),g(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const p=E(u,[1,u.shape[0],u.shape[1],u.shape[2]]),f=E(c,[c.shape[0],1,c.shape[1],c.shape[2]]),T=zn(f,p,[1,n],s,"NHWC",[1,a],o);return h?E(T,[T.shape[2],T.shape[3]]):E(T,[T.shape[0],T.shape[2],T.shape[3]])}const Cp=w({conv1d_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(e,t,n,s,r,a="NHWC",o){g(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,u=t,c=!1;t.rank===3&&(c=!0,u=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),g(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),g(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),g(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=a==="NHWC"?i[3]:i[1],p=a==="NHWC"?u.shape[3]:u.shape[1];g(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),g(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),Dt("conv2dDerInput",r,o);const f={dy:u,filter:n},d={strides:s,pad:r,dataFormat:a,dimRoundingMode:o,inputShape:i},b=N.runKernel(Bi,f,d);return c?E(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const za=w({conv2DBackpropInput_:Rp});function Bp(e,t,n,s,r,a){const o=m(e,"x","conv2dTranspose"),i=m(t,"filter","conv2dTranspose");return za(n,o,i,s,r,"NHWC",a)}const Pp=w({conv2dTranspose_:Bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(e,t,n,s,r="NDHWC",a=[1,1,1]){const o=m(e,"x","conv3d"),i=m(t,"filter","conv3d");let u=o,c=!1;o.rank===4&&(c=!0,u=E(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),g(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),g(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),g(ne(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),g(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),g(Oe(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),g(Oe(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:u,filter:i},p={strides:n,pad:s,dataFormat:r,dilations:a},f=N.runKernel(Pi,h,p);return c?E(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const zp=w({conv3d_:Lp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(e,t,n,s,r){g(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,i=!1;t.rank===4&&(i=!0,o=E(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);const u=a[4],c=o.shape[4];g(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),g(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),g(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),g(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),g(c===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${n.shape[4]}.`);const h={dy:o,filter:n},p={pad:r,strides:s,inputShape:a},f=N.runKernel(Li,h,p);return i?E(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Up=w({conv3DBackpropInput_:Vp});function jp(e,t,n,s,r){const a=m(e,"x","conv3dTranspose"),o=m(t,"filter","conv3dTranspose");return Up(n,a,o,s,r)}const qp=w({conv3dTranspose_:jp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wp(e){const n={x:m(e,"x","cos","float32")};return N.runKernel(zi,n)}const Gp=w({cos_:Wp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(e){const n={x:m(e,"x","cosh","float32")};return N.runKernel(Vi,n)}const Kp=w({cosh_:Mp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(e,t=0,n=!1,s=!1){const a={x:m(e,"x","cumprod")},o={axis:t,exclusive:n,reverse:s};return N.runKernel(Ui,a,o)}const Xp=w({cumprod_:Hp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jp(e,t=0,n=!1,s=!1){const a={x:m(e,"x","cumsum")},o={axis:t,exclusive:n,reverse:s};return N.runKernel(ji,a,o)}const Yp=w({cumsum_:Jp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(e,t,n,s=!1){const r=m(e,"x","denseBincount"),a=m(t,"weights","denseBincount");g(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),g(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(a.size===r.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${a.shape}.`);const o={x:r,weights:a},i={size:n,binaryOutput:s};return N.runKernel(Wi,o,i)}const Qp=w({denseBincount_:Zp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(e,t,n="NHWC"){const s=m(e,"x","depthToSpace","float32"),r=n==="NHWC"?s.shape[1]:s.shape[2],a=n==="NHWC"?s.shape[2]:s.shape[3],o=n==="NHWC"?s.shape[3]:s.shape[1];g(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),g(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),g(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${s.shape}`),g(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${s.shape}`);const i={x:s},u={blockSize:t,dataFormat:n};return N.runKernel(Gi,i,u)}const ef=w({depthToSpace_:tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(e,t,n,s,r="NHWC",a=[1,1],o){const i=m(e,"x","depthwiseConv2d","float32"),u=m(t,"filter","depthwiseConv2d","float32");let c=i,h=!1;i.rank===3&&(h=!0,c=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),g(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=r==="NHWC"?c.shape[3]:c.shape[1];g(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Dt("depthwiseConv2d",s,o);const f={x:c,filter:u},d={strides:n,pad:s,dataFormat:r,dilations:a,dimRoundingMode:o},b=N.runKernel(Mi,f,d);return h?E(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const Vs=w({depthwiseConv2d_:nf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sf(e){const n={x:m(e,"x","diag")};return N.runKernel(Xi,n)}const rf=w({diag_:sf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(e,t,n,s,r=[1,1],a="NHWC"){const o=m(e,"x","dilation2d"),i=m(t,"filter","dilation2d");g(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),g(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),g(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let u=o,c=!1;o.rank===3&&(u=E(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=!0),g(u.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${i.shape[2]}`);const h={x:u,filter:i},p={strides:n,pad:s,dilations:r},f=N.runKernel(Ji,h,p);return c?E(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const of=w({dilation2d_:af});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(e,t){const n=e.length,s=[];for(let r=0;r<n;r++){const a=n-1-r,o=e[a]||1;(t[t.length-1-r]||1)>1&&o===1&&s.unshift(a)}return s}function Va(e,t){const n=[];for(let s=0;s<t.length;s++){const r=e[e.length-s-1],a=t.length-s-1,o=t[a];(r==null||r===1&&o>1)&&n.unshift(a)}return n}function rt(e,t){const n=Math.max(e.length,t.length),s=new Array(n);for(let r=0;r<n;r++){let a=e[e.length-r-1];a==null&&(a=1);let o=t[t.length-r-1];if(o==null&&(o=1),a===1)s[n-r-1]=o;else if(o===1)s[n-r-1]=a;else if(a!==o){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else s[n-r-1]=a}return s}const kN=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:rt,getBroadcastDims:uf,getReductionAxes:Va},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(e,t){let n=m(e,"a","equal","string_or_numeric"),s=m(t,"b","equal","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(eu,r)}const Ua=w({equal_:cf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lf(e,t,n){const s=m(t,"a","where"),r=m(n,"b","where"),a=m(e,"condition","where","bool"),o=rt(rt(a.shape,s.shape),r.shape),i=pn(a,o),u=pn(s,o),c=pn(r,o),h={condition:i,t:u,e:c};return N.runKernel(yc,h)}const Xt=w({where_:lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(e){const n={x:m(e,"x","zerosLike")};return N.runKernel(Xc,n)}const $t=w({zerosLike_:hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pf(e,t){let n=m(e,"a","div"),s=m(t,"b","div");[n,s]=Q(n,s);const r=X(n,s),a=$t(r),o=Ua(s,a);return Xt(o,a,r)}const ff=w({divNoNan_:pf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(e,t){const n=m(e,"t1","dot"),s=m(t,"t2","dot");g((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const r=n.rank===1?n.size:n.shape[1],a=s.rank===1?s.size:s.shape[0];if(g(r===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${a}.`),n.rank===1&&s.rank===1){const o=E(n,[1,-1]),i=E(s,[-1,1]),u=G(o,i);return E(u,[])}else if(n.rank===1&&s.rank===2){const o=E(n,[1,-1]),i=E(s,[s.shape[0],s.shape[1]]),u=G(o,i);return E(u,[u.size])}else if(n.rank===2&&s.rank===1){const o=E(s,[-1,1]),i=G(n,o);return E(i,[i.size])}else{const o=E(s,[s.shape[0],s.shape[1]]);return G(n,o)}}const df=w({dot_:mf});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(e,...t){const n=t.map((r,a)=>m(r,`tensors${a}`,"einsum")),s={equation:e};return N.runKernel(Zi,n,s)}const $e=w({einsum_:gf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(e){const n={x:m(e,"x","elu","float32")};return N.runKernel(Qi,n)}const ja=w({elu_:yf});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(e,t){const n=m(e,"x","ensureShape","string_or_numeric");if(!Wr(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const wf=w({ensureShape_:bf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nf(e){let t=m(e,"x","erf");g(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=et(t,"float32"));const n={x:t};return N.runKernel(tu,n)}const Tf=w({erf_:Nf});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qa(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Sf(e,t,n){const s=e.length+t.length,r=[];let a=0,o=0;for(let i=0;i<s;i++)n.indexOf(i)===-1?r.push(e[a++]):r.push(t[o++]);return r}function EN(e,t){const n=[],s=e.length;for(let a=0;a<s;a++)t.indexOf(a)===-1&&n.push(e[a]);const r=t.map(a=>e[a]);return[n,r]}function Vn(e,t){const n=t.map(s=>1);return Sf(e,n,t)}function _N(e,t,n){g(qa(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function xN(e,t){if(qa(e,t))return null;const n=[];for(let s=0;s<t;++s)e.indexOf(s)===-1&&n.push(s);return e.forEach(s=>n.push(s)),n}function IN(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function AN(e,t){const n=[];for(let s=t-e;s<t;++s)n.push(s);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(e,t=null,n=!1){const r={x:m(e,"x","max")},a={reductionIndices:t,keepDims:n};return N.runKernel(Au,r,a)}const _e=w({max_:$f});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vf(e,t=null,n=!1){const r={x:m(e,"x","min")},a={axis:t,keepDims:n};return N.runKernel(Bu,r,a)}const ds=w({min_:vf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(e,t){let n=m(e,"base","pow"),s=m(t,"exp","pow");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(Yu,r)}const Ke=w({pow_:kf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j(e,t){if((vt(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&vt(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ee(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(e){const n={x:m(e,"x","sqrt","float32")};return N.runKernel(kc,n)}const Vt=w({sqrt_:Ef});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _f(e){const t=m(e,"x","square"),n={};return N.runKernel("Square",{x:t},n)}const It=w({square_:_f});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xf(e,t=null,n=!1){let s=m(e,"x","sum");s.dtype==="bool"&&(s=et(s,"int32"));const r={x:s},a={axis:t,keepDims:n};return N.runKernel(Ec,r,a)}const H=w({sum_:xf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function If(e,t="euclidean",n=null,s=!1){e=m(e,"x","norm");const r=Wa(e,t,n);let a=r.shape;if(s){const o=Ze(n,e.shape);a=Vn(r.shape,o)}return E(r,a)}function Wa(e,t,n=null){if(e.rank===0)return St(e);if(e.rank!==1&&n===null)return Wa(E(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return H(St(e),n);if(t===1/0)return _e(St(e),n);if(t===-1/0)return ds(St(e),n);if(t==="euclidean"||t===2)return Vt(H(Ke(St(e),j(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return _e(H(St(e),n[0]),n[1]-1);if(t===1/0)return _e(H(St(e),n[1]),n[0]);if(t===-1/0)return ds(H(St(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Vt(H(It(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Un=w({norm_:If});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Af(e,t=null,n=!1){return Un(e,"euclidean",t,n)}const Df=w({euclideanNorm_:Af});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Of(e){const n={x:m(e,"x","exp")};return N.runKernel(nu,n)}const me=w({exp_:Of});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(e,t=0){const n=m(e,"x","expandDims","string_or_numeric");g(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:t};return N.runKernel(su,s,r)}const Wt=w({expandDims_:Ff});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(e){const n={x:m(e,"x","expm1")};return N.runKernel(ru,n)}const Rf=w({expm1_:Cf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bf(e,t){const n=m(e,"x","tile","string_or_numeric");g(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},r={reps:t};return N.runKernel(aa,s,r)}const Ve=w({tile_:Bf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(e,t,n,s="float32"){t==null&&(t=e);const r=zt([e,t],s),a=e<=t?e:t;for(let i=0;i<a;++i)r.set(1,i,i);const o=E(r.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Ve(Wt(o,0),[n[0],1,1]);if(n.length===2)return Ve(Wt(Wt(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Ve(Wt(Wt(Wt(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Ga=w({eye_:Pf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(e){const n={x:m(e,"x","floor","float32")};return N.runKernel(uu,n)}const Ma=w({floor_:Lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(e,t,n=0,s=0){const r=m(e,"x","gather"),a=m(t,"indices","gather","int32"),o={x:r,indices:a},i={axis:n,batchDims:s};return N.runKernel(hu,o,i)}const Ka=w({gather_:zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(e,t){let n=m(e,"a","greater","string_or_numeric"),s=m(t,"b","greater","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(fu,r)}const jn=w({greater_:Vf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uf(e,t){let n=m(e,"a","greaterEqual","string_or_numeric"),s=m(t,"b","greaterEqual","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(mu,r)}const Ha=w({greaterEqual_:Uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(e){const n={input:m(e,"input","imag")};return N.runKernel(gu,n)}const qn=w({imag_:jf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qf(e){const n={x:m(e,"x","isFinite")};return N.runKernel(yu,n)}const Wf=w({isFinite_:qf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(e){const n={x:m(e,"x","isInf")};return N.runKernel(bu,n)}const Mf=w({isInf_:Gf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kf(e){const n={x:m(e,"x","isNaN")};return N.runKernel(wu,n)}const Hf=w({isNaN_:Kf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xf(e,t=.2){const s={x:m(e,"x","leakyRelu")},r={alpha:t};return N.runKernel(Nu,s,r)}const Xa=w({leakyRelu_:Xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(e,t){let n=m(e,"a","less","string_or_numeric"),s=m(t,"b","less","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(Tu,r)}const gs=w({less_:Jf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yf(e,t){let n=m(e,"a","lessEqual","string_or_numeric"),s=m(t,"b","lessEqual","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(Su,r)}const Us=w({lessEqual_:Yf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:e,stop:t,num:n};return N.runKernel($u,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(e,t=5,n=1,s=1,r=.5){const a=m(e,"x","localResponseNormalization");g(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),g(xe(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=E(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:o},c={depthRadius:t,bias:n,alpha:s,beta:r},h=N.runKernel(Iu,u,c);return i?E(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const tm=w({localResponseNormalization_:Qf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(e){const n={x:m(e,"x","log","float32")};return N.runKernel(vu,n)}const He=w({log_:em});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(e){const n={x:m(e,"x","log1p")};return N.runKernel(ku,n)}const Ja=w({log1p_:nm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DN(e){return g(Jt(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const s=m(t,"x","tf.grad","string_or_numeric"),r=n!=null?m(n,"dy","tf.grad"):null;return N.tidy(()=>{const{value:a,grads:o}=N.gradients(()=>e(s),[s],r);return r!=null&&ft(a.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Wn(o),o[0]})}}function ON(e){return g(Jt(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{g(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=We(t,"args","tf.grads","string_or_numeric"),r=n!=null?m(n,"dy","tf.grads"):null;return N.tidy(()=>{const{value:a,grads:o}=N.gradients(()=>e(...s),s,r);return r!=null&&ft(a.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Wn(o),o})}}function FN(e){return g(Jt(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{g(t instanceof st,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),g(n==null||n instanceof st,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=N.gradients(()=>e(t),[t],n);return Wn(s),{grad:s[0],value:r}}}function CN(e){return g(Jt(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{g(Array.isArray(t)&&t.every(r=>r instanceof st),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),g(n==null||n instanceof st,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=N.gradients(()=>e(...t),t,n);return n!=null&&ft(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Wn(s.grads),s}}function sm(e,t){g(Jt(e),()=>"The f passed in variableGrads(f) must be a function"),g(t==null||Array.isArray(t)&&t.every(c=>c instanceof vn),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const c in N.registeredVariables)t.push(N.registeredVariables[c])}const s=n?t.filter(c=>!c.trainable):null,r=t.length;t=t.filter(c=>c.trainable),g(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const a=!0,{value:o,grads:i}=N.gradients(e,t,null,a);g(i.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),g(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const u={};return t.forEach((c,h)=>{i[h]!=null&&(u[c.name]=i[h])}),s?.forEach(c=>u[c.name]=null),{value:o,grads:u}}function Ut(e){return N.customGrad(e)}function Wn(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(e){const n={x:m(e,"x","neg")};return N.runKernel(ju,n)}const Ct=w({neg_:rm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(e){const n={x:m(e,"x","softplus")};return N.runKernel(vc,n)}const Ya=w({softplus_:am});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(e){const t=m(e,"x","logSigmoid");return Ut(s=>({value:Ct(Ya(Ct(s))),gradFunc:o=>D(o,Ee(Ct(s)))}))(t)}const im=w({logSigmoid_:om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(e,t){let n=m(e,"a","sub"),s=m(t,"b","sub");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(Uc,r)}const U=w({sub_:um});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(e,t=-1){const n=m(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Ut((r,a)=>{const i=_e(r,t,!0),u=U(r,i),c=U(et(u,"float32"),He(H(me(u),t,!0)));return a([c]),{value:c,gradFunc:(p,f)=>{const[d]=f,b=!0,S=me(d);return U(p,D(H(p,t,b),S))}}})(n)}const lm=w({logSoftmax_:cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(e,t=null,n=!1){const s=m(e,"x","logSumExp"),r=Ze(t,s.shape),a=_e(s,r,!0),o=U(s,a),i=me(o),u=H(i,r),c=He(u),h=L(E(a,c.shape),c);if(n){const p=Vn(h.shape,r);return E(h,p)}return h}const Za=w({logSumExp_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pm(e,t){const n=m(e,"a","logicalAnd","bool"),s=m(t,"b","logicalAnd","bool");rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(Eu,r)}const _n=w({logicalAnd_:pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(e){const n={x:m(e,"x","logicalNot","bool")};return N.runKernel(_u,n)}const Qa=w({logicalNot_:fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(e,t){const n=m(e,"a","logicalOr","bool"),s=m(t,"b","logicalOr","bool");rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(xu,r)}const to=w({logicalOr_:mm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(e,t){const n=m(e,"a","logicalXor","bool"),s=m(t,"b","logicalXor","bool");return rt(n.shape,s.shape),_n(to(e,t),Qa(_n(e,t)))}const gm=w({logicalXor_:dm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const un=2147483648;function ym(e,t,n="left"){const s=m(e,"sortedSequence","searchSorted"),r=m(t,"values","searchSorted"),a=s.shape[s.shape.length-1],o=r.shape[r.shape.length-1],i=E(s,[-1,a]),u=E(r,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Z(u.shape)>=un)throw new Error(`values tensor size must less than ${un}`);if(i.shape[1]>=un)throw new Error(`trailing dim_size must less than ${un} for int32 output type, was ${i.shape[1]}`);const c={sortedSequence:i,values:u},h={side:n};return N.runKernel(gc,c,h)}const js=w({searchSorted_:ym});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(e,t){return js(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(e,t,n,s,r){const a=m(e,"x","maxPool"),o=1;let i=a,u=!1;a.rank===3&&(u=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),g(ne(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Dt("maxPool",s,r);const c={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r},p=N.runKernel(Ou,c,h);return u?E(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const eo=w({maxPool_:wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nm(e,t=[1,1,1],n,s,r,a="NDHWC"){const o=m(e,"x","maxPool3d");let i=o,u=!1;o.rank===4&&(u=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),g(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Dt("maxPool3d",s,r);const c={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:a},p=N.runKernel(Fu,c,h);return u?E(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Tm=w({maxPool3d_:Nm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sm(e,t,n,s,r=!1){const o={x:m(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:s,includeBatchInIndex:r},u=N.runKernel(Cu,o,i);return{result:u[0],indexes:u[1]}}const $m=w({maxPoolWithArgmax_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vm(e,t){let n=m(e,"a","maximum"),s=m(t,"b","maximum");[n,s]=Q(n,s),n.dtype==="bool"&&(n=et(n,"int32"),s=et(s,"int32")),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(Du,r)}const no=w({maximum_:vm});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(e,t=null,n=!1){const r={x:m(e,"x","mean")},a={axis:t,keepDims:n};return N.runKernel(Ru,r,a)}const xn=w({mean_:km});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fe(e,t="float32"){if(Nt(e),t==="complex64"){const s=Fe(e,"float32"),r=Fe(e,"float32");return Zt(s,r)}const n=Rn(Z(e),t);return N.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(e,t="float32"){if(Nt(e),t==="complex64"){const s=ce(e,"float32"),r=Fe(e,"float32");return Zt(s,r)}const n=Os(Z(e),t);return N.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Em(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let s=m(e,"x","meshgrid",e instanceof st?e.dtype:"float32");if(t===void 0)return[s];let r=m(t,"y","meshgrid",t instanceof st?t.dtype:"float32");const a=Z(s.shape),o=Z(r.shape);return n==="xy"?(s=E(s,[1,-1]),r=E(r,[-1,1]),[G(ce([o,1],s.dtype),s),G(r,ce([1,a],r.dtype))]):(s=E(s,[-1,1]),r=E(r,[1,-1]),[G(s,ce([1,o],s.dtype)),G(ce([a,1],r.dtype),r)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _m(e,t){let n=m(e,"a","minimum"),s=m(t,"b","minimum");[n,s]=Q(n,s),n.dtype==="bool"&&(n=et(n,"int32"),s=et(s,"int32")),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(Pu,r)}const In=w({minimum_:_m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(e,t,n){g(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=m(e,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");g(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=n==="reflect"?1:0;for(let i=0;i<s.rank;i++)g(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),g(t[i][0]>=0&&t[i][0]<=s.shape[i]-r&&t[i][1]>=0&&t[i][1]<=s.shape[i]-r,()=>`Padding in dimension ${i} cannot be greater than or equal to ${s.shape[i]-r} or less than 0 for input of shape ${s.shape}`);const a={paddings:t,mode:n},o={x:s};return N.runKernel(Lu,o,a)}const Im=w({mirrorPad_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(e,t){let n=m(e,"a","mod"),s=m(t,"b","mod");[n,s]=Q(n,s);const r={a:n,b:s};return N.runKernel(zu,r)}const Dm=w({mod_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(e,t=null,n=!1){e=m(e,"x","moments");const s=Ze(t,e.shape),r=xn(e,s,n);let a=r.shape;n||(a=Vn(r.shape,s));const o=It(U(et(e,"float32"),E(r,a))),i=xn(o,s,n);return{mean:r,variance:i}}const Fm=w({moments_:Om});function Cm(e,t,n,s){const r=m(t,"data","multiRNNCell"),a=We(n,"c","multiRNNCell"),o=We(s,"h","multiRNNCell");let i=r;const u=[];for(let p=0;p<e.length;p++){const f=e[p](i,a[p],o[p]);u.push(f[0]),u.push(f[1]),i=f[1]}const c=[],h=[];for(let p=0;p<u.length;p+=2)c.push(u[p]),h.push(u[p+1]);return[c,h]}const Rm=w({multiRNNCell_:Cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(e,t,n,s=!1){const r=m(e,"logits","multinomial"),a=r.size,o=r.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const u={logits:o===1?E(r,[1,-1]):r},c={numSamples:t,seed:n,normalized:s},h=N.runKernel(Vu,u,c);return o===1?E(h,[h.size]):h}const Pm=w({multinomial_:Bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(e,t){let n=m(e,"a","notEqual","string_or_numeric"),s=m(t,"b","notEqual","string_or_numeric");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s};return N.runKernel(qu,r)}const so=w({notEqual_:Lm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(e,t,n=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:m(e,"indices","oneHot","int32")},i={dtype:r,depth:t,onValue:n,offValue:s};return N.runKernel(Hu,o,i)}const Vm=w({oneHot_:zm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Um(e){const n={x:m(e,"x","onesLike")};return N.runKernel(Ku,n)}const jm=w({onesLike_:Um});function qm(e,t){const n=m(e,"v1","outerProduct"),s=m(t,"v2","outerProduct");g(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const r=E(n,[-1,1]),a=E(s,[1,-1]);return G(r,a)}const Wm=w({outerProduct_:qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(e,t,n=0){const s=m(e,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:n},a={x:s};return N.runKernel(Ju,a,r)}const rn=w({pad_:Gm});function Mm(e,t,n=0){return g(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),rn(e,[t],n)}const Km=w({pad1d_:Mm});function Hm(e,t,n=0){return g(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(e,t,n)}const Xm=w({pad2d_:Hm});function Jm(e,t,n=0){return g(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(e,t,n)}const Ym=w({pad3d_:Jm});function Zm(e,t,n=0){return g(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(e,t,n)}const Qm=w({pad4d_:Zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(e,t,n){const s=m(e,"x","spaceToBatchND");g(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),g(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),g(s.shape.reduce((o,i,u)=>u>0&&u<=t.length?o&&(i+n[u-1][0]+n[u-1][1])%t[u-1]===0:o,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},a={blockShape:t,paddings:n};return N.runKernel(_c,r,a)}const ro=w({spaceToBatchND_:td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(e,t,n,s,r,a,o){r==null&&(r=[1,1]),a==null&&(a=1),s===0&&(s="valid");const i=m(e,"x","maxPool");let u=i,c=!1;i.rank===3&&(c=!0,u=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(ne(a,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${r}'`);const h=Uh(u.shape,t,a,r,s),p=[h.dilationHeight,h.dilationWidth];let f;s==="same"?f=sd([h.filterHeight,h.filterWidth],p):f=[[0,0],[0,0]];const d=p[0]===1&&p[1]===1,[b,S]=nd([h.inHeight,h.inWidth],p,f),T=d?s:"valid",$=d?u:ro(u,p,b),F=(n==="avg"?()=>Ba($,t,a,T,o):()=>eo($,t,a,T,o))(),_=d?F:Pa(F,p,S);return c?E(_,[_.shape[1],_.shape[2],_.shape[3]]):_}function nd(e,t,n){const s=n.map(h=>h[0]),r=n.map(h=>h[1]),a=e.concat(s,r),o=t.map((h,p)=>(h-a[p]%h)%h),i=r.map((h,p)=>h+o[p]),u=t.map((h,p)=>[s[p],i[p]]),c=t.map((h,p)=>[0,o[p]]);return[u,c]}function sd(e,t){const s=e.map((o,i)=>o+(o-1)*(t[i]-1)).map(o=>o-1),r=s.map(o=>Math.floor(o/2)),a=s.map((o,i)=>o-r[i]);return s.map((o,i)=>[r[i],a[i]])}const rd=w({pool_:ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(e,t){const n=m(e,"x","prelu"),s=m(t,"alpha","prelu"),r={x:n,alpha:s};return N.runKernel(Zu,r)}const ao=w({prelu_:ad});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(e,t=null,n=!1){let s=m(e,"x","prod");s.dtype==="bool"&&(s=et(s,"int32"));const r={x:s},a={axis:t,keepDims:n};return N.runKernel(Qu,r,a)}const id=w({prod_:od});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(e,t,n,s){const r=e.map((h,p)=>m(h,`tensors${p}`,"raggedGather","int32")),a=m(t,"paramsDenseValues","raggedGather"),o=m(n,"indices","raggedGather","int32"),i={paramsNestedSplits:r,paramsDenseValues:a,indices:o},u={outputRaggedRank:s},c=N.runKernel(tc,i,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const cd=w({raggedGather_:ud});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ld(e,t,n){const s=m(e,"starts","raggedRange"),r=m(t,"limits","raggedRange",s.dtype),a=m(n,"deltas","raggedRange",s.dtype),o={starts:s,limits:r,deltas:a},i=N.runKernel(ec,o);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const hd=w({raggedRange_:ld});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(e,t,n,s,r){const a=m(e,"shape","raggedTensorToTensor","int32"),o=m(t,"values","raggedTensorToTensor"),i=m(n,"defaultValue","raggedTensorToTensor",o.dtype),u=s.map((p,f)=>m(p,`tensors${f}`,"raggedTensorToTensor","int32")),c={shape:a,values:o,defaultValue:i,rowPartitionTensors:u},h={rowPartitionTypes:r};return N.runKernel(nc,c,h)}const fd=w({raggedTensorToTensor_:pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(e,t,n){Nt(e);const s=Z(e);let r=null;if(n==null||n==="float32")r=new Float32Array(s);else if(n==="int32")r=new Int32Array(s);else if(n==="bool")r=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<s;a++)r[a]=t();return N.makeTensor(r,e,n)}const dd=w({rand_:md});var fn={exports:{}},gd=fn.exports,Tr;function yd(){return Tr||(Tr=1,(function(e){(function(t,n,s){function r(u){var c=this,h=i();c.next=function(){var p=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=p|0)},c.c=1,c.s0=h(" "),c.s1=h(" "),c.s2=h(" "),c.s0-=h(u),c.s0<0&&(c.s0+=1),c.s1-=h(u),c.s1<0&&(c.s1+=1),c.s2-=h(u),c.s2<0&&(c.s2+=1),h=null}function a(u,c){return c.c=u.c,c.s0=u.s0,c.s1=u.s1,c.s2=u.s2,c}function o(u,c){var h=new r(u),p=c&&c.state,f=h.next;return f.int32=function(){return h.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,p&&(typeof p=="object"&&a(p,h),f.state=function(){return a(h,{})}),f}function i(){var u=4022871197,c=function(h){h=String(h);for(var p=0;p<h.length;p++){u+=h.charCodeAt(p);var f=.02519603282416938*u;u=f>>>0,f-=u,f*=u,u=f>>>0,f-=u,u+=f*4294967296}return(u>>>0)*23283064365386963e-26};return c}n&&n.exports?n.exports=o:this.alea=o})(gd,e)})(fn)),fn.exports}var mn={exports:{}},bd=mn.exports,Sr;function wd(){return Sr||(Sr=1,(function(e){(function(t,n,s){function r(i){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},i===(i|0)?u.x=i:c+=i;for(var h=0;h<c.length+64;h++)u.x^=c.charCodeAt(h)|0,u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u}function o(i,u){var c=new r(i),h=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,b=(f+d)/(1<<21);while(b===0);return b},p.int32=c.next,p.quick=p,h&&(typeof h=="object"&&a(h,c),p.state=function(){return a(c,{})}),p}n&&n.exports?n.exports=o:this.xor128=o})(bd,e)})(mn)),mn.exports}var dn={exports:{}},Nd=dn.exports,$r;function Td(){return $r||($r=1,(function(e){(function(t,n,s){function r(i){var u=this,c="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,i===(i|0)?u.x=i:c+=i;for(var h=0;h<c.length+64;h++)u.x^=c.charCodeAt(h)|0,h==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u.v=i.v,u.d=i.d,u}function o(i,u){var c=new r(i),h=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,b=(f+d)/(1<<21);while(b===0);return b},p.int32=c.next,p.quick=p,h&&(typeof h=="object"&&a(h,c),p.state=function(){return a(c,{})}),p}n&&n.exports?n.exports=o:this.xorwow=o})(Nd,e)})(dn)),dn.exports}var gn={exports:{}},Sd=gn.exports,vr;function $d(){return vr||(vr=1,(function(e){(function(t,n,s){function r(i){var u=this;u.next=function(){var h=u.x,p=u.i,f,d;return f=h[p],f^=f>>>7,d=f^f<<24,f=h[p+1&7],d^=f^f>>>10,f=h[p+3&7],d^=f^f>>>3,f=h[p+4&7],d^=f^f<<7,f=h[p+7&7],f=f^f<<13,d^=f^f<<9,h[p]=d,u.i=p+1&7,d};function c(h,p){var f,d=[];if(p===(p|0))d[0]=p;else for(p=""+p,f=0;f<p.length;++f)d[f&7]=d[f&7]<<15^p.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],h.x=d,h.i=0,f=256;f>0;--f)h.next()}c(u,i)}function a(i,u){return u.x=i.x.slice(),u.i=i.i,u}function o(i,u){i==null&&(i=+new Date);var c=new r(i),h=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,b=(f+d)/(1<<21);while(b===0);return b},p.int32=c.next,p.quick=p,h&&(h.x&&a(h,c),p.state=function(){return a(c,{})}),p}n&&n.exports?n.exports=o:this.xorshift7=o})(Sd,e)})(gn)),gn.exports}var yn={exports:{}},vd=yn.exports,kr;function kd(){return kr||(kr=1,(function(e){(function(t,n,s){function r(i){var u=this;u.next=function(){var h=u.w,p=u.X,f=u.i,d,b;return u.w=h=h+1640531527|0,b=p[f+34&127],d=p[f=f+1&127],b^=b<<13,d^=d<<17,b^=b>>>15,d^=d>>>12,b=p[f]=b^d,u.i=f,b+(h^h>>>16)|0};function c(h,p){var f,d,b,S,T,$=[],I=128;for(p===(p|0)?(d=p,p=null):(p=p+"\0",d=0,I=Math.max(I,p.length)),b=0,S=-32;S<I;++S)p&&(d^=p.charCodeAt((S+32)%p.length)),S===0&&(T=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,S>=0&&(T=T+1640531527|0,f=$[S&127]^=d+T,b=f==0?b+1:0);for(b>=128&&($[(p&&p.length||0)&127]=-1),b=127,S=512;S>0;--S)d=$[b+34&127],f=$[b=b+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,$[b]=d^f;h.w=T,h.X=$,h.i=b}c(u,i)}function a(i,u){return u.i=i.i,u.w=i.w,u.X=i.X.slice(),u}function o(i,u){i==null&&(i=+new Date);var c=new r(i),h=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,b=(f+d)/(1<<21);while(b===0);return b},p.int32=c.next,p.quick=p,h&&(h.X&&a(h,c),p.state=function(){return a(c,{})}),p}n&&n.exports?n.exports=o:this.xor4096=o})(vd,e)})(yn)),yn.exports}var bn={exports:{}},Ed=bn.exports,Er;function _d(){return Er||(Er=1,(function(e){(function(t,n,s){function r(i){var u=this,c="";u.next=function(){var p=u.b,f=u.c,d=u.d,b=u.a;return p=p<<25^p>>>7^f,f=f-d|0,d=d<<24^d>>>8^b,b=b-p|0,u.b=p=p<<20^p>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^b,u.a=b-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,i===Math.floor(i)?(u.a=i/4294967296|0,u.b=i|0):c+=i;for(var h=0;h<c.length+20;h++)u.b^=c.charCodeAt(h)|0,u.next()}function a(i,u){return u.a=i.a,u.b=i.b,u.c=i.c,u.d=i.d,u}function o(i,u){var c=new r(i),h=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,b=(f+d)/(1<<21);while(b===0);return b},p.int32=c.next,p.quick=p,h&&(typeof h=="object"&&a(h,c),p.state=function(){return a(c,{})}),p}n&&n.exports?n.exports=o:this.tychei=o})(Ed,e)})(bn)),bn.exports}var wn={exports:{}};const xd={},Id=Object.freeze(Object.defineProperty({__proto__:null,default:xd},Symbol.toStringTag,{value:"Module"})),Ad=Co(Id);var Dd=wn.exports,_r;function Od(){return _r||(_r=1,(function(e){(function(t,n,s){var r=256,a=6,o=52,i="random",u=s.pow(r,a),c=s.pow(2,o),h=c*2,p=r-1,f;function d(_,A,O){var B=[];A=A==!0?{entropy:!0}:A||{};var C=$(T(A.entropy?[_,F(n)]:_??I(),3),B),k=new b(B),v=function(){for(var y=k.g(a),x=u,R=0;y<c;)y=(y+R)*r,x*=r,R=k.g(1);for(;y>=h;)y/=2,x/=2,R>>>=1;return(y+R)/x};return v.int32=function(){return k.g(4)|0},v.quick=function(){return k.g(4)/4294967296},v.double=v,$(F(k.S),n),(A.pass||O||function(y,x,R,P){return P&&(P.S&&S(P,k),y.state=function(){return S(k,{})}),R?(s[i]=y,x):y})(v,C,"global"in A?A.global:this==s,A.state)}function b(_){var A,O=_.length,B=this,C=0,k=B.i=B.j=0,v=B.S=[];for(O||(_=[O++]);C<r;)v[C]=C++;for(C=0;C<r;C++)v[C]=v[k=p&k+_[C%O]+(A=v[C])],v[k]=A;(B.g=function(y){for(var x,R=0,P=B.i,V=B.j,q=B.S;y--;)x=q[P=p&P+1],R=R*r+q[p&(q[P]=q[V=p&V+x])+(q[V]=x)];return B.i=P,B.j=V,R})(r)}function S(_,A){return A.i=_.i,A.j=_.j,A.S=_.S.slice(),A}function T(_,A){var O=[],B=typeof _,C;if(A&&B=="object")for(C in _)try{O.push(T(_[C],A-1))}catch{}return O.length?O:B=="string"?_:_+"\0"}function $(_,A){for(var O=_+"",B,C=0;C<O.length;)A[p&C]=p&(B^=A[p&C]*19)+O.charCodeAt(C++);return F(A)}function I(){try{var _;return f&&(_=f.randomBytes)?_=_(r):(_=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(_)),F(_)}catch{var A=t.navigator,O=A&&A.plugins;return[+new Date,t,O,t.screen,F(n)]}}function F(_){return String.fromCharCode.apply(0,_)}if($(s.random(),n),e.exports){e.exports=d;try{f=Ad}catch{}}else s["seed"+i]=d})(typeof self<"u"?self:Dd,[],Math)})(wn)),wn.exports}var Zn,xr;function Fd(){if(xr)return Zn;xr=1;var e=yd(),t=wd(),n=Td(),s=$d(),r=kd(),a=_d(),o=Od();return o.alea=e,o.xor128=t,o.xorwow=n,o.xorshift7=s,o.xor4096=r,o.tychei=a,Zn=o,Zn}var qs=Fd();/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ws{constructor(t,n,s,r,a){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=qs.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,n,s=!1;for(;!s;){let r,a,o;do r=2*this.random()-1,a=2*this.random()-1,o=r*r+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*r*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Cd{constructor(t,n,s,r){this.alpha=t,this.beta=1/n,this.dtype=s;const a=r||Math.random();this.randu=qs.alea(a.toString()),this.randn=new Ws(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,r,a,o;for(;;){do r=this.randn.nextValue(),o=1+this.c*r;while(o<=0);if(o*=o*o,t=r*r,n=1-.331*t*t,s=.5*t+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<s)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Rd{constructor(t=0,n=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=qs.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(e,t,n=1,s="float32",r){if(Nt(e),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const a=new Cd(t,n,s,r),o=zt(e,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Pd=w({randomGamma_:Bd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(e,t=0,n=1,s,r){if(Nt(e),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const a=new Ws(t,n,s,!1,r),o=zt(e,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const oo=w({randomNormal_:Ld});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return oo(e,0,1,t,n)}const Vd=w({randomStandardNormal_:zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(e,t=0,n=1,s="float32",r){Nt(e);const a=zt(e,s),o=new Rd(t,n,null,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Gs=w({randomUniform_:Ud});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(e,t,n,s){return Gs(e,t,n,"int32",s)}const qd=w({randomUniformInt_:jd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xe(e,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:e,stop:t,step:n,dtype:s};return N.runKernel(sc,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wd(e){const n={input:m(e,"input","real")};return N.runKernel(rc,n)}const Je=w({real_:Wd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(e){const n={x:m(e,"x","reciprocal")};return N.runKernel(ac,n)}const Md=w({reciprocal_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(e){const n={x:m(e,"x","relu")};return N.runKernel(oc,n)}const Gn=w({relu_:Kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e){const n={x:m(e,"x","relu6")};return N.runKernel(lc,n)}const io=w({relu6_:Hd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(e,t){const s={x:m(e,"x","reverse")},r={dims:t};return N.runKernel(hc,s,r)}const de=w({reverse_:Xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(e){const t=m(e,"x","reverse");return g(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),de(t,0)}const Yd=w({reverse1d_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(e,t){const n=m(e,"x","reverse");return g(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),de(n,t)}const Qd=w({reverse2d_:Zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(e,t){const n=m(e,"x","reverse");return g(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),de(n,t)}const eg=w({reverse3d_:tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(e,t){const n=m(e,"x","reverse");return g(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),de(n,t)}const sg=w({reverse4d_:ng});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(e){const n={x:m(e,"x","round")};return N.runKernel(pc,n)}const uo=w({round_:rg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(e){const n={x:m(e,"x","rsqrt","float32")};return N.runKernel(fc,n)}const og=w({rsqrt_:ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(e){const n={x:m(e,"x","selu")};return N.runKernel(bc,n)}const ug=w({selu_:ig});function cg(e,t,n,s,r,a=[1,1],o="NHWC"){const i=m(e,"x","separableConv2d"),u=m(t,"depthwiseFilter","separableConv2d"),c=m(n,"pointwiseFilter","separableConv2d");let h=i,p=!1;if(i.rank===3&&(p=!0,h=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),g(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),g(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),g(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),g(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const f=u.shape[2],d=u.shape[3];g(c.shape[2]===f*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*d}, but got ${c.shape[2]}.`);const b=Vs(h,u,s,r,o,a),T=zn(b,c,1,"valid",o);return p?E(T,[T.shape[1],T.shape[2],T.shape[3]]):T}const lg=w({separableConv2d_:cg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function hg(e,t){const n=m(e,"x","setdiff1d"),s=m(t,"y","setdiff1d");g(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),g(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),g(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const r=await n.data(),a=await s.data(),o=new Set(a);let i=0;for(let h=0;h<r.length;h++)o.has(r[h])||i++;const u=new rs([i],n.dtype),c=new rs([i],"int32");for(let h=0,p=0;h<r.length;h++)o.has(r[h])||(u.values[p]=r[h],c.values[p]=h,p++);return[u.toTensor(),c.toTensor()]}const pg=hg;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(e){const n={x:m(e,"x","sign")};return N.runKernel(Sc,n)}const mg=w({sign_:fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(e){const n={x:m(e,"x","sin","float32")};return N.runKernel(Nc,n)}const gg=w({sin_:dg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(e){const n={x:m(e,"x","sinh")};return N.runKernel(Tc,n)}const bg=w({sinh_:yg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(e,t,n){const s=m(e,"x","slice1d");return g(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),K(s,[t],[n])}const Ng=w({slice1d_:wg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(e,t,n){const s=m(e,"x","slice2d");return g(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),K(s,t,n)}const Sg=w({slice2d_:Tg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(e,t,n){const s=m(e,"x","slice3d");return g(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),K(s,t,n)}const vg=w({slice3d_:$g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(e,t,n){const s=m(e,"x","slice4d");return g(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),K(s,t,n)}const Eg=w({slice4d_:kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(e,t=-1){const n=m(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},r={dim:t};return N.runKernel(Ic,s,r)}const xg=w({softmax_:_g});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(e){g(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return N.runKernel(au,t)}const Ms=w({fft_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(e){g(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return N.runKernel(du,t)}const An=w({ifft_:Ag});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(e){const t=e.shape[e.shape.length-1],n=e.size/t;let s;if(t<=2){const r=E(e,[n,t]);s=An(r)}else{const r=[n,2*(t-1)],a=E(Je(e),[n,t]),o=E(qn(e),[n,t]),i=de(K(a,[0,1],[n,t-2]),1),u=D(de(K(o,[0,1],[n,t-2]),1),j(-1)),c=pt([a,i],1),h=pt([o,u],1),p=E(Zt(c,h),[r[0],r[1]]);s=An(p)}if(s=Je(s),e.rank===3&&e.shape[0]!==0){const r=s,a=e.shape[0];s=E(s,[a,s.shape[0]/a,s.shape[1]]),r.dispose()}return s}const co=w({irfft_:Dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Og(e,t,n=0){const r={x:m(e,"x","split")},a={numOrSizeSplits:t,axis:n};return N.runKernel(xc,r,a)}const Ye=w({split_:Og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(e,t){g(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const s=e.size/n;let r;if(t!=null&&t<n){const b=e.shape.map(T=>0),S=e.shape.map(T=>T);S[e.shape.length-1]=t,r=K(e,b,S),n=t}else if(t!=null&&t>n){const b=e.shape.map(S=>S);b[e.shape.length-1]=t-n,r=pt([e,Fe(b)],e.shape.length-1),n=t}else r=e;const a=$t(r),o=E(Zt(r,a),[s,n]),i=Ms(o),u=Math.floor(n/2)+1,c=Je(i),h=qn(i),p=Ye(c,[u,n-u],c.shape.length-1),f=Ye(h,[u,n-u],h.shape.length-1),d=r.shape.slice();return d[r.shape.length-1]=u,E(Zt(p[0],f[0]),d)}const Ks=w({rfft_:Fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(e,t){let n=m(e,"a","squaredDifference"),s=m(t,"b","squaredDifference");[n,s]=Q(n,s),rt(n.shape,s.shape);const r={a:n,b:s},a={};return N.runKernel(Rc,r,a)}const lo=w({squaredDifference_:Cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rg(e,t){const n=m(e,"x","squeeze","string_or_numeric");return E(n,Gr(n.shape,t).newShape)}const Hs=w({squeeze_:Rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(e,t=0){const n=We(e,"tensors","stack","string_or_numeric");g(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&g(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:t};return N.runKernel(Xu,s,r)}const jt=w({stack_:Bg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(e,t=0){const s={x:m(e,"x","step")},r={alpha:t};return N.runKernel(Jc,s,r)}const ho=w({step_:Pg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lg(e,t,n,s,r=0,a=0,o=0,i=0,u=0){const h={x:m(e,"x","stridedSlice","string_or_numeric")},p={begin:t,end:n,strides:s,beginMask:r,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return N.runKernel(Pc,h,p)}const zg=w({stridedSlice_:Lg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(e){const n={x:m(e,"x","tan","float32")};return N.runKernel(jc,n)}const Ug=w({tan_:Vg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _t(e,t){be(e);const n=te(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ee(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ue(e,t,n){if(be(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=te(e,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ee(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function po(e,t,n){if(be(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=te(e,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ee(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(e,t,n){if(be(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=te(e,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ee(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(e,t,n){if(be(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=te(e,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ee(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(e,t,n){if(be(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=te(e,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,ee(e,t,s,n)}function fo(e,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(a+` update.rank < ${r}. `);if(e.length<s+(n.rank-r))throw new Error(a+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+e.length-s)throw new Error(a+` update.rank != ${r+e.length-s}`);for(let o=0;o<r;++o)if(n.shape[o]!==t.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<n.rank-r;++o)if(n.shape[o+r]!==e[o+s])throw new Error(a+` updates.shape[${o+r}] (${n.shape[o+r]}) != shape[${o+r}] (${e[o+r]})`)}function Xs(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}fo(n,t,e)}function Gg(e,t,n){const s=t.shape.length,r=s>1?t.shape[s-1]:1,a=n.length;let o=1;for(let p=r;p<a;++p)o*=n[p];const i=r<1?1:r,u=Z(t.shape)/i,c=[...tn(n.slice(0,r)),1],h=Z(n);return{sliceRank:r,numUpdates:u,sliceSize:o,strides:c,outputSize:h}}const RN=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Gg,validateInput:Xs,validateUpdateShape:fo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(e,t,n){const s=m(e,"tensor","tensorScatterupdate"),r=m(t,"indices","tensorScatterupdate","int32"),a=m(n,"updates","tensorScatterupdate");if(Xs(a,r,s.shape),s.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${a.dtype}.`);const o={tensor:s,indices:r,updates:a},i={};return N.runKernel(dc,o,i)}const Kg=w({tensorScatterUpdate_:Mg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hg(e,t=1,n=!0){const s=m(e,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const a={x:s},o={k:t,sorted:n},[i,u]=N.runKernel(Wc,a,o);return{values:i,indices:u}}const Xg=w({topk_:Hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(e,t=0,n=1,s,r){if(Nt(e),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new Ws(t,n,s,!0,r),o=zt(e,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Yg=w({truncatedNormal_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(e,t=0){const n=m(e,"x","unique","string_or_numeric");g(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},r={axis:t},[a,o]=N.runKernel(Mc,s,r);return{values:a,indices:o}}const Qg=w({unique_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(e,t,n){const s=m(e,"x","unsortedSegmentSum"),r=m(t,"segmentIds","unsortedSegmentSum","int32");g(xe(n),()=>"numSegments must be of dtype int");const a={x:s,segmentIds:r},o={numSegments:n};return N.runKernel(Hc,a,o)}const ey=w({unsortedSegmentSum_:ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ny(e,t=0){const n=m(e,"x","unstack","string_or_numeric");g(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:t};return N.runKernel(Kc,s,r)}const we=w({unstack_:ny});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(e,t){return js(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ry(e,t=!0,n,s){return N.makeVariable(e,t,n,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(e,t){const n=[];for(let a=0;a<t.length;a++)t[a]&&n.push(a);const s=zt(e,"int32"),r=zt([n.length,e.length],"int32");for(let a=0;a<n.length;a++){const o=s.indexToLoc(n[a]),i=a*e.length;r.values.set(o,i)}return r.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function oy(e){const t=m(e,"condition","whereAsync","bool"),n=await t.data(),s=ay(t.shape,n);return e!==t&&t.dispose(),s}const mo=oy;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function iy(e,t,n){const s=m(e,"tensor","boolMask"),r=m(t,"mask","boolMask","bool"),a=n??0,o=r.rank,i=s.shape;g(o>0,()=>"mask cannot be scalar"),ft(i.slice(a,a+o),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let S=a;S<a+o;S++)u*=i[S];const c=i.slice(0,a).concat([u],i.slice(a+o)),h=E(s,c),p=E(r,[-1]),f=await mo(p),d=Hs(f,[1]),b=Ka(h,d,a);return e!==s&&s.dispose(),t!==r&&r.dispose(),d.dispose(),h.dispose(),p.dispose(),f.dispose(),b}const uy=iy;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(e,t,n){const s=m(e,"x","transpose");if(t==null&&(t=s.shape.map((o,i)=>i).reverse()),g(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(o=>{g(o>=0&&o<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},a={perm:t};return s.dtype==="complex64"?W(()=>{let o=Je(s),i=qn(s);return o=N.runKernel(Kn,{x:o},a),i=N.runKernel(Kn,{x:i},a),n&&(i=Ct(i)),Zt(o,i)}):N.runKernel(Kn,r,a)}const ys=w({transpose_:cy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(e,t,n,s,r=!0){const a=m(e,"v","movingAverage"),o=m(t,"x","movingAverage"),i=m(n,"decay","movingAverage");ga(a,o),g(Rt(a.shape,o.shape),()=>"Shape mismatch in v and x");const u=j(1),c=U(u,i);let h=D(U(o,a),c);if(r){g(s!=null,()=>"When using zeroDebias: true, step is required.");const p=m(s,"step","movingAverage");h=X(h,U(u,Ke(i,p)))}return L(a,h)}const hy=w({movingAverage_:ly});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(e,t,n){Nt(n);const s=m(e,"indices","scatterND","int32"),r=m(t,"updates","scatterND");Xs(r,s,n);const a={indices:s,updates:r},o={shape:n};return N.runKernel(mc,a,o)}const fy=w({scatterND_:py});function my(e,t,n,s){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const r=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===r))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${r}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(e,t,n,s=0){Nt(n);const r=m(e,"sparseIndices","sparseToDense","int32"),a=m(t,"sparseValues","sparseToDense","string_or_numeric"),o=m(s,"defaultValue","sparseToDense",a.dtype);my(r,a,n,o);const i={sparseIndices:r,sparseValues:a,defaultValue:o},u={outputShape:n};return N.runKernel(Cc,i,u)}const gy=w({sparseToDense_:dy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(e,t){const n=m(t,"indices","gatherND","int32"),r={params:m(e,"x","gatherND","string_or_numeric"),indices:n};return N.runKernel(pu,r)}const by=w({gatherND_:yy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(e,t){if(t==null)return e.shape.slice();if(Rt(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let s=0;s<e.shape.length;s++)t[s]==null&&e.shape[s]!=null?n.push(e.shape[s]):n.push(t[s]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(e,t,n,s){const r=m(e,"x","dropout");if(g(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),g(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof st?r.clone():r;const a=wy(r,n),o=1-t,i=X(Ma(L(Gs(a,0,1,"float32",s),o)),o);return D(r,i)}const Ty=w({dropout_:Ny});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function go(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Js(e,t,n){const s=1-e%2,r=new Float32Array(e);for(let a=0;a<e;++a){const o=2*Math.PI*a/(e+s-1);r[a]=t-n*Math.cos(o)}return _t(r,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Sy(e,t,n=1){const s=m(e,"predictions","inTopK"),r=m(t,"targets","inTopK");g(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),g(s.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${r.rank}`),ft(s.shape.slice(0,s.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=s.shape[s.shape.length-1];g(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await s.data(),i=await r.data(),[u,c]=[o.length/a,a],h=Mr("bool",u);for(let p=0;p<u;p++){const f=p*c,d=o.subarray(f,f+c),b=[];for(let S=0;S<d.length;S++)b.push({value:d[S],index:S});b.sort((S,T)=>T.value-S.value),h[p]=0;for(let S=0;S<n;S++)if(b[S].index===i[p]){h[p]=1;break}}return e!==s&&s.dispose(),t!==r&&r.dispose(),Ft(h,r.shape,"bool")}const $y=Sy;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(e,t,n,s,r,a="NHWC",o){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=E(t,[1,t.shape[0],t.shape[1],t.shape[2]])),g(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),g(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),g(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const c=a==="NHWC"?i.shape[3]:i.shape[1],h=a==="NHWC"?u.shape[3]:u.shape[1];g(c===n[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${n[2]}.`),g(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),Dt("conv2dDerFilter",r,o);const p={x:i,dy:u},f={strides:s,pad:r,dataFormat:a,dimRoundingMode:o,filterShape:n};return N.runKernel(Ri,p,f)}const ky=w({conv2DBackpropFilter_:vy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ys(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return D(e,ho(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Zs(e,t){let n=t;const s=Va(e.shape,t.shape);return s.length>0&&(n=H(n,s)),E(n,e.shape)}function Qs(e,t,n,s){if(t==="linear")return e;if(t==="relu")return Gn(e);if(t==="elu")return ja(e);if(t==="relu6")return io(e);if(t==="prelu")return ao(e,n);if(t==="leakyrelu")return Xa(e,s);if(t==="sigmoid")return Ee(e);throw new Error(`Unknown fused activation ${t}.`)}const tr=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:h}){if(u=u||"linear",tr(N.state.gradientDepth,u)===!1){g(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let O=zn(e,t,n,s,r,a,o);return i!=null&&(O=L(O,i)),Qs(O,u,c,h)}const p=m(e,"x","conv2d","float32"),f=m(t,"filter","conv2d","float32");let d=p,b=!1;p.rank===3&&(b=!0,d=E(p,[1,p.shape[0],p.shape[1],p.shape[2]])),g(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Dt("fused conv2d",s,o);const S=r==="NHWC"?d.shape[3]:d.shape[1];g(f.shape[2]===S,()=>`Error in conv2d: depth of input (${S}) must match input depth for filter ${f.shape[2]}.`),g(ne(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const T=Pn(d.shape,f.shape,n,a,s,o);let $;i!=null&&($=m(i,"bias","fused conv2d"),[$]=Q($,p),r==="NHWC"?rt(T.outShape,$.shape):(g($.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${$.shape.length}.`),g($.shape.length===0||$.shape[0]===T.outChannels||$.shape[0]===1,()=>`Error in fused conv2d: bias shape (${$.shape}) is not compatible with the number of output channels (${T.outChannels})`)));let I;if(c!=null){const O=c.shape;if(g(O.length<=1||O.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${O.length}.`),O.length===1)g(O[0]===1||O[0]===T.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${O}) is not compatible with the number of output channels (${T.outChannels}).`);else if(O.length===3)try{rt(O,T.outShape)}catch{const C=`Error in fused conv2d: PReLU activation weights (${O}) is not compatible with the output shape of the conv2d (${T.outShape}).`;throw Error(C)}I=m(c,"prelu weights","fused conv2d")}const F=(O,B)=>{g(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[C,k,v,y]=B,x=Ys(O,v,u);g(En(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const R=za(k.shape,x,C,n,s),P=ky(k,x,C.shape,n,s),V=[R,P];if(y!=null){const q=Zs(y,x);V.push(q)}return V},_={x:d,filter:f,bias:$,preluActivationWeights:I},A={strides:n,pad:s,dataFormat:r,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:h};return i==null?Ut((B,C,k)=>{let v=N.runKernel(cr,_,A);return k([C,B,v]),b&&(v=E(v,[v.shape[1],v.shape[2],v.shape[3]])),{value:v,gradFunc:F}})(d,f):Ut((B,C,k,v)=>{let y=N.runKernel(cr,_,A);return v([C,B,y,k]),b&&(y=E(y,[y.shape[1],y.shape[2],y.shape[3]])),{value:y,gradFunc:F}})(d,f,$)}const _y=w({fusedConv2d_:Ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(e,t,n,s,r,a=[1,1],o){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:i,dy:u},h={strides:s,pad:r,dimRoundingMode:o,dilations:a,filterShape:n};return N.runKernel(Ki,c,h)}const Iy=w({depthwiseConv2dNativeBackpropFilter_:xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(e,t,n,s,r,a=[1,1],o){let i=t,u=!1;t.rank===3&&(u=!0,i=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:i,filter:n},h={strides:s,pad:r,dimRoundingMode:o,dilations:a,inputShape:e},p=N.runKernel(Hi,c,h);return u?E(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Dy=w({depthwiseConv2dNativeBackpropInput_:Ay});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:h}){if(tr(N.state.gradientDepth,u)===!1){let A=Vs(e,t,n,s,r,a,o);return i!=null&&(A=L(A,i)),Qs(A,u,c,h)}const p=m(e,"x","depthwiseConv2d","float32"),f=m(t,"filter","depthwiseConv2d","float32");let d=p,b=!1;p.rank===3&&(b=!0,d=E(p,[1,p.shape[0],p.shape[1],p.shape[2]])),g(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),g(d.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),a==null&&(a=[1,1]),g(ne(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),Dt("fused depthwiseConv2d",s,o);const S=Pn(d.shape,f.shape,n,a,s,o,!0);let T;i!=null&&(T=m(i,"bias","fused conv2d"),[T]=Q(T,p),rt(S.outShape,T.shape));let $;c!=null&&($=m(c,"prelu weights","fused depthwiseConv2d"));const I=(A,O)=>{g(En(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[B,C,k,v]=O,y=Ys(A,k,u),x=Dy(C.shape,y,B,n,s,a,o),R=Iy(C,y,B.shape,n,s,a,o);if(v!=null){const P=Zs(T,y);return[x,R,P]}return[x,R]},F={x:d,filter:f,bias:T,preluActivationWeights:$},_={strides:n,pad:s,dataFormat:r,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:h};return i==null?Ut((O,B,C)=>{let k=N.runKernel(lr,F,_);return C([B,O,k]),b&&(k=E(k,[k.shape[1],k.shape[2],k.shape[3]])),{value:k,gradFunc:I}})(d,f):Ut((O,B,C,k)=>{let v=N.runKernel(lr,F,_);return k([B,O,v,C]),b&&(v=E(v,[v.shape[1],v.shape[2],v.shape[3]])),{value:v,gradFunc:I}})(d,f,T)}const Fy=w({fusedDepthwiseConv2d_:Oy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cy({a:e,b:t,transposeA:n=!1,transposeB:s=!1,bias:r,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(tr(N.state.gradientDepth,a)===!1){let y=G(e,t,n,s);return r!=null&&(y=L(y,r)),Qs(y,a,o,i)}let u=m(e,"a","fused matMul"),c=m(t,"b","fused matMul");[u,c]=Q(u,c);const h=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=s?c.shape[c.rank-1]:c.shape[c.rank-2],f=n?u.shape[u.rank-1]:u.shape[u.rank-2],d=s?c.shape[c.rank-2]:c.shape[c.rank-1],b=u.shape.slice(0,-2),S=c.shape.slice(0,-2),T=Z(b),$=Z(S);g(h===p,()=>`Error in fused matMul: inner shapes (${h}) and (${p}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${n} and transposeB=${s} must match.`);const F=rt(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([f,d]),_=n?E(u,[T,h,f]):E(u,[T,f,h]),A=s?E(c,[$,d,p]):E(c,[$,p,d]);let O;r!=null&&(O=m(r,"bias","fused matMul"),[O]=Q(O,u),rt(F,O.shape));let B;o!=null&&(B=m(o,"prelu weights","fused matMul"));const C=(y,x)=>{const[R,P,V,q]=x,J=Ys(E(y,V.shape),V,a);let at,tt;if(!n&&!s?(at=G(J,P,!1,!0),tt=G(R,J,!0,!1)):!n&&s?(at=G(J,P,!1,!1),tt=G(J,R,!0,!1)):n&&!s?(at=G(P,J,!1,!0),tt=G(R,J,!1,!1)):(at=G(P,J,!0,!0),tt=G(J,R,!0,!0)),r!=null){const nt=Zs(q,J);return[at,tt,nt]}else return[at,tt]},k={a:_,b:A,bias:O,preluActivationWeights:B},v={transposeA:n,transposeB:s,activation:a,leakyreluAlpha:i};return r==null?Ut((x,R,P)=>{const V=N.runKernel(ur,k,v);return P([x,R,V]),{value:E(V,F),gradFunc:C}})(_,A):Ut((x,R,P,V)=>{const q=N.runKernel(ur,k,v);return V([x,R,q,P]),{value:E(q,F),gradFunc:C}})(_,A,O)}const Ry=w({fusedMatMul_:Cy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const By=Object.freeze(Object.defineProperty({__proto__:null,conv2d:_y,depthwiseConv2d:Fy,matMul:Ry},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Py(e){return Js(e,.54,.46)}const Ly=w({hammingWindow_:Py});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(e){return Js(e,.5,.5)}const yo=w({hannWindow_:zy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(e,t,n,s=!1,r=0){let a=0;const o=[];for(;a+t<=e.size;)o.push(K(e,a,t)),a+=n;if(s)for(;a<e.size;){const i=a+t-e.size,u=pt([K(e,a,t-i),sn([i],r)]);o.push(u),a+=n}return o.length===0?Ue([],[0,t]):E(pt(o),[o.length,t])}const bo=w({frame_:Vy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(e,t,n,s,r=yo){s==null&&(s=go(t));const a=bo(e,t,n),o=D(a,r(t));return Ks(o,s)}const jy=w({stft_:Uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(e,t,n,s,r="bilinear",a=0){const o=m(e,"image","cropAndResize"),i=m(t,"boxes","cropAndResize","float32"),u=m(n,"boxInd","cropAndResize","int32"),c=i.shape[0];g(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),g(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${i.shape}.`),g(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${i.shape}.`),g(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),g(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),g(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const h={image:o,boxes:i,boxInd:u},p={method:r,extrapolationValue:a,cropSize:s};return N.runKernel(qi,h,p)}const Wy=w({cropAndResize_:qy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gy(e){const t=m(e,"image","flipLeftRight","float32");g(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return N.runKernel(iu,n,{})}const My=w({flipLeftRight_:Gy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ky(e){const t=m(e,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];g(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),g(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,n),r[n]=3,Ve(t,r)}const Hy=w({grayscaleToRGB_:Ky});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(e){const t=m(e,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];g(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),g(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,a=et(t,"float32"),o=_t([.2989,.587,.114]);let i;switch(t.rank){case 2:i=$e("ij,j->i",a,o);break;case 3:i=$e("ijk,k->ij",a,o);break;case 4:i=$e("ijkl,l->ijk",a,o);break;case 5:i=$e("ijklm,m->ijkl",a,o);break;case 6:i=$e("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=Wt(i,-1),et(i,r)}const Jy=w({rgbToGrayscale_:Xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(e,t,n=0,s=.5){const r=m(e,"image","rotateWithOffset","float32");g(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const a={image:r},o={radians:t,fillValue:n,center:s};return N.runKernel(Yc,a,o)}const Zy=w({rotateWithOffset_:Yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ce(e,t,n,s,r,a){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=e.shape[0];return n=Math.min(n,o),g(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),g(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),g(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),g(t.rank===1,()=>"scores must be a 1D tensor"),g(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),g(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qy(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const a=m(e,"boxes","nonMaxSuppression","float32"),o=m(t,"scores","nonMaxSuppression","float32"),i=Ce(a,o,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const u={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return N.runKernel(Wu,{boxes:a,scores:o},u)}const tb=w({nonMaxSuppression_:Qy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(e,t,n){const s=nb(e,t,n),r=s<0?-(s+1):s;e.splice(r,0,t)}function nb(e,t,n){return rb(e,t,n||sb)}function sb(e,t){return e>t?1:e<t?-1:0}function rb(e,t,n){let s=0,r=e.length,a=0,o=!1;for(;s<r;){a=s+(r-s>>>1);const i=n(t,e[a]);i>0?s=a+1:(r=a,o=!i)}return o?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ab(e,t,n,s,r){return er(e,t,n,s,r,0)}function ob(e,t,n,s,r,a){return er(e,t,n,s,r,0,!1,a,!0)}function ib(e,t,n,s,r,a){return er(e,t,n,s,r,a,!0)}function er(e,t,n,s,r,a,o=!1,i=!1,u=!1){const c=[];for(let T=0;T<t.length;T++)t[T]>r&&c.push({score:t[T],boxIndex:T,suppressBeginIndex:0});c.sort(Ir);const h=a>0?-.5/a:0,p=[],f=[];for(;p.length<n&&c.length>0;){const T=c.pop(),{score:$,boxIndex:I,suppressBeginIndex:F}=T;if($<r)break;let _=!1;for(let A=p.length-1;A>=F;--A){const O=ub(e,I,p[A]);if(O>=s){_=!0;break}if(T.score=T.score*cb(s,h,O),T.score<=r)break}T.suppressBeginIndex=p.length,_||(T.score===$?(p.push(I),f.push(T.score)):T.score>r&&eb(c,T,Ir))}const d=p.length,b=n-d;i&&b>0&&(p.push(...new Array(b).fill(0)),f.push(...new Array(b).fill(0)));const S={selectedIndices:p};return o&&(S.selectedScores=f),u&&(S.validOutputs=d),S}function ub(e,t,n){const s=e.subarray(t*4,t*4+4),r=e.subarray(n*4,n*4+4),a=Math.min(s[0],s[2]),o=Math.min(s[1],s[3]),i=Math.max(s[0],s[2]),u=Math.max(s[1],s[3]),c=Math.min(r[0],r[2]),h=Math.min(r[1],r[3]),p=Math.max(r[0],r[2]),f=Math.max(r[1],r[3]),d=(i-a)*(u-o),b=(p-c)*(f-h);if(d<=0||b<=0)return 0;const S=Math.max(a,c),T=Math.max(o,h),$=Math.min(i,p),I=Math.min(u,f),F=Math.max($-S,0)*Math.max(I-T,0);return F/(d+b-F)}function cb(e,t,n){const s=Math.exp(t*n*n);return n<=e?s:0}function Ir(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function lb(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const a=m(e,"boxes","nonMaxSuppressionAsync"),o=m(t,"scores","nonMaxSuppressionAsync"),i=Ce(a,o,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const u=await Promise.all([a.data(),o.data()]),c=u[0],h=u[1],{selectedIndices:p}=ab(c,h,n,s,r);return a!==e&&a.dispose(),o!==t&&o.dispose(),_t(p,"int32")}const hb=lb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,a=0){const o=m(e,"boxes","nonMaxSuppression"),i=m(t,"scores","nonMaxSuppression"),u=Ce(o,i,n,s,r,a);n=u.maxOutputSize,s=u.iouThreshold,r=u.scoreThreshold,a=u.softNmsSigma;const c={boxes:o,scores:i},h={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:a},p=N.runKernel(Mu,c,h);return{selectedIndices:p[0],selectedScores:p[1]}}const fb=w({nonMaxSuppressionWithScore_:pb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function mb(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,a=0){const o=m(e,"boxes","nonMaxSuppressionAsync"),i=m(t,"scores","nonMaxSuppressionAsync"),u=Ce(o,i,n,s,r,a);n=u.maxOutputSize,s=u.iouThreshold,r=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([o.data(),i.data()]),h=c[0],p=c[1],{selectedIndices:f,selectedScores:d}=ib(h,p,n,s,r,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:_t(f,"int32"),selectedScores:_t(d)}}const db=mb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,a=!1){const o=m(e,"boxes","nonMaxSuppression"),i=m(t,"scores","nonMaxSuppression"),u=Ce(o,i,n,s,r,null),c=u.maxOutputSize,h=u.iouThreshold,p=u.scoreThreshold,f={boxes:o,scores:i},d={maxOutputSize:c,iouThreshold:h,scoreThreshold:p,padToMaxOutputSize:a},b=N.runKernel(Gu,f,d);return{selectedIndices:b[0],validOutputs:b[1]}}const yb=w({nonMaxSuppressionPadded_:gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function bb(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,a=!1){const o=m(e,"boxes","nonMaxSuppressionAsync"),i=m(t,"scores","nonMaxSuppressionAsync"),u=Ce(o,i,n,s,r,null),c=u.maxOutputSize,h=u.iouThreshold,p=u.scoreThreshold,[f,d]=await Promise.all([o.data(),i.data()]),{selectedIndices:b,validOutputs:S}=ob(f,d,c,h,p,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:_t(b,"int32"),validOutputs:j(S,"int32")}}const wb=bb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(e,t,n=!1,s=!1){const r=m(e,"images","resizeBilinear");g(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),g(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=r,o=!1;r.rank===3&&(o=!0,a=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:s,size:t},c=N.runKernel(cc,i,u);return o?E(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Tb=w({resizeBilinear_:Nb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sb(e,t,n=!1,s=!1){const r=m(e,"images","resizeNearestNeighbor");g(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),g(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),g(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=r,o=!1;r.rank===3&&(o=!0,a=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:s,size:t},c=N.runKernel(uc,i,u);return o?E(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const $b=w({resizeNearestNeighbor_:Sb});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(e,t="binary",n=!1,s=.5){const r=m(e,"image","threshold"),a=.2989,o=.587,i=.114,u=r.shape[0]*r.shape[1];let c=D(_t([s]),255),h,p,f,d;if(g(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),g(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),g(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),g(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[h,p,f]=Ye(r,[1,1,1],-1);const T=D(h,a),$=D(p,o),I=D(f,i);d=L(L(T,$),I)}else d=e;if(t==="otsu"){const T=La(et(uo(d),"int32"),Ft([]),256);c=kb(T,u)}const b=n?Us(d,c):jn(d,c);return et(D(b,255),"int32")}function kb(e,t){let n=_t([-1]),s=_t([0]),r=_t([0]),a,o,i,u,c,h;for(let p=0;p<e.size-1;p++){a=K(e,0,p+1),o=K(e,p+1),c=X(H(a),t),h=X(H(o),t);const f=H(D(a,Xe(0,a.size)));i=X(f,H(a));const d=sn(o.shape,a.size),b=L(Xe(0,o.size),d),S=D(o,b);u=X(H(S),H(o));const T=U(i,u),$=U(i,u),I=D(c,h);r=D(D(I,T),$);const F=jn(r,s);s=Xt(F,r,s),n=Xt(F,_t([p]),n)}return n}const Eb=w({threshold_:vb});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(e,t,n="nearest",s="constant",r=0,a){const o=m(e,"image","transform","float32"),i=m(t,"transforms","transform","float32");g(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),g(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const u={image:o,transforms:i},c={interpolation:n,fillMode:s,fillValue:r,outputShape:a};return N.runKernel(Gc,u,c)}const xb=w({transform_:_b});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(e,t,n){const s=m(e,"a","bandPart");g(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[a,o]=s.shape.slice(-2);let i,u;typeof t=="number"?(g(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),g(t<=a,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`),i=m(t<0?a:t,"numLower","bandPart")):(g(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=Xt(gs(t,0),a,In(t,a))),typeof n=="number"?(g(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),g(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),u=m(n<0?o:n,"numUpper","bandPart")):(g(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=Xt(gs(n,0),o,In(n,o)));const c=E(Xe(0,a,1,"int32"),[-1,1]),h=Xe(0,o,1,"int32"),p=U(c,h),f=_n(Us(p,i),Ha(p,Ct(u))),d=Fe([a,o],s.dtype);return E(jt(we(E(s,[-1,a,o])).map(b=>Xt(f,b,d))),r)}const Ab=w({bandPart_:Ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(e){let t;if(Array.isArray(e)){t=!1,g(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=e[0].shape[0];for(let a=1;a<e.length;++a)g(e[a].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[a].shape[0]} vs. ${r})`)}else t=!0,e=Ye(e,e.shape[0],0).map(r=>Hs(r,[0]));g(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],s=e;for(let r=0;r<e.length;++r)n.push(N.tidy(()=>{let a=s[r];if(r>0)for(let o=0;o<r;++o){const i=D(H(D(n[o],a)),n[o]);a=U(a,i)}return X(a,Un(a,"euclidean"))}));return t?jt(n,0):n}const Ob=w({gramSchmidt_:Db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(e,t=!1){if(g(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return Ar(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((u,c)=>u*c),s=we(E(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],a=[];s.forEach(u=>{const[c,h]=Ar(u,t);r.push(c),a.push(h)});const o=E(jt(r,0),e.shape),i=E(jt(a,0),e.shape);return[o,i]}}function Ar(e,t=!1){return N.tidy(()=>{g(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],s=e.shape[1];let r=Ga(n),a=Ht(e);const o=Ue([[1]],[1,1]);let i=Ht(o);const u=n>=s?s:n;for(let c=0;c<u;++c){const h=a,p=i,f=r;[i,a,r]=N.tidy(()=>{const d=K(a,[c,c],[n-c,1]),b=Un(d),S=K(a,[c,c],[1,1]),T=Xt(jn(S,0),Ue([[-1]]),Ue([[1]])),$=U(S,D(T,b)),I=X(d,$);I.shape[0]===1?i=Ht(o):i=pt([o,K(I,[1,0],[I.shape[0]-1,I.shape[1]])],0);const F=Ct(X(G(T,$),b)),_=K(a,[c,0],[n-c,s]),A=D(F,i),O=ys(i);if(c===0)a=U(_,G(A,G(O,_)));else{const k=U(_,G(A,G(O,_)));a=pt([K(a,[0,0],[c,s]),k],0)}const B=ys(A),C=K(r,[0,c],[n,r.shape[1]-c]);if(c===0)r=U(C,G(G(C,i),B));else{const k=U(C,G(G(C,i),B));r=pt([K(r,[0,0],[n,c]),k],1)}return[i,a,r]}),dt([h,p,f])}return!t&&n>s&&(r=K(r,[0,0],[n,s]),a=K(a,[0,0],[s,s])),[r,a]})}const Cb=w({qr_:Fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var mt;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(mt||(mt={}));function Rb(e,t,n=mt.SUM_BY_NONZERO_WEIGHTS){const s=m(e,"losses","computeWeightedLoss");let r=null;t!=null&&(r=m(t,"weights","computeWeightedLoss"));const a=r==null?s:D(s,r);if(n===mt.NONE)return a;if(n===mt.SUM)return H(a);if(n===mt.MEAN){if(r==null)return xn(a);{const o=s.size/r.size,i=X(H(a),H(r));return o>1?X(i,j(o)):i}}if(n===mt.SUM_BY_NONZERO_WEIGHTS){if(r==null)return X(H(a),j(s.size));{const o=D(r,ce(s.shape)),i=et(H(so(o,j(0))),"float32");return X(H(a),i)}}throw Error(`Unknown reduction: ${n}`)}const qt=w({computeWeightedLoss_:Rb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(e,t,n,s=mt.SUM_BY_NONZERO_WEIGHTS){const r=m(e,"labels","absoluteDifference"),a=m(t,"predictions","absoluteDifference");let o=null;n!=null&&(o=m(n,"weights","absoluteDifference")),ft(r.shape,a.shape,"Error in absoluteDifference: ");const i=St(U(r,a));return qt(i,o,s)}const Pb=w({absoluteDifference_:Bb});function Lb(e,t,n,s,r=mt.SUM_BY_NONZERO_WEIGHTS){const a=m(e,"labels","cosineDistance"),o=m(t,"predictions","cosineDistance");let i=null;s!=null&&(i=m(s,"weights","cosineDistance")),ft(a.shape,o.shape,"Error in cosineDistance: ");const u=j(1),c=U(u,H(D(a,o),n,!0));return qt(c,i,r)}const zb=w({cosineDistance_:Lb});function Vb(e,t,n,s=mt.SUM_BY_NONZERO_WEIGHTS){let r=m(e,"labels","hingeLoss");const a=m(t,"predictions","hingeLoss");let o=null;n!=null&&(o=m(n,"weights","hingeLoss")),ft(r.shape,a.shape,"Error in hingeLoss: ");const i=j(1);r=U(D(j(2),r),i);const u=Gn(U(i,D(r,a)));return qt(u,o,s)}const Ub=w({hingeLoss_:Vb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(e,t,n,s=1,r=mt.SUM_BY_NONZERO_WEIGHTS){const a=m(e,"labels","huberLoss"),o=m(t,"predictions","huberLoss");let i=null;n!=null&&(i=m(n,"weights","huberLoss")),ft(a.shape,o.shape,"Error in huberLoss: ");const u=j(s),c=St(U(o,a)),h=In(c,u),p=U(c,h),f=L(D(j(.5),It(h)),D(u,p));return qt(f,i,r)}const qb=w({huberLoss_:jb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(e,t,n,s=1e-7,r=mt.SUM_BY_NONZERO_WEIGHTS){const a=m(e,"labels","logLoss"),o=m(t,"predictions","logLoss");let i=null;n!=null&&(i=m(n,"weights","logLoss")),ft(a.shape,o.shape,"Error in logLoss: ");const u=j(1),c=j(s),h=Ct(D(a,He(L(o,c)))),p=D(U(u,a),He(L(U(u,o),c))),f=U(h,p);return qt(f,i,r)}const Gb=w({logLoss_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(e,t,n,s=mt.SUM_BY_NONZERO_WEIGHTS){const r=m(e,"labels","meanSquaredError"),a=m(t,"predictions","meanSquaredError");let o=null;n!=null&&(o=m(n,"weights","meanSquaredError")),ft(r.shape,a.shape,"Error in meanSquaredError: ");const i=lo(r,a);return qt(i,o,s)}const Kb=w({meanSquaredError_:Mb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(e,t){const n=m(e,"labels","sigmoidCrossEntropyWithLogits"),s=m(t,"logits","sigmoidCrossEntropyWithLogits");ft(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=Gn(s),a=D(s,n),o=Ja(me(Ct(St(s))));return L(U(r,a),o)}function Xb(e,t,n,s=0,r=mt.SUM_BY_NONZERO_WEIGHTS){let a=m(e,"multiClassLabels","sigmoidCrossEntropy");const o=m(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=m(n,"weights","sigmoidCrossEntropy")),ft(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),s>0){const c=j(s),h=j(1),p=j(.5);a=L(D(a,U(h,c)),D(p,c))}const u=Hb(a,o);return qt(u,i,r)}const Jb=w({sigmoidCrossEntropy_:Xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Ut((r,a,o)=>{const u=Za(a,[n],!0),c=U(et(a,"float32"),u);o([r,c]);const h=Ct(D(c,r));return{value:H(h,[n]),gradFunc:(d,b)=>{const[S,T]=b,$=Vn(d.shape,[n]);return[D(E(d,$),U(et(S,"float32"),me(T))),D(E(d,$),U(me(T),et(S,"float32")))]}}})(e,t)}function Zb(e,t,n,s=0,r=mt.SUM_BY_NONZERO_WEIGHTS){let a=m(e,"onehotLabels","softmaxCrossEntropy");const o=m(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=m(n,"weights","softmaxCrossEntropy")),ft(a.shape,o.shape,"Error in softmaxCrossEntropy: "),s>0){const c=j(s),h=j(1),p=j(a.shape[1]);a=L(D(a,U(h,c)),X(c,p))}const u=Yb(a,o);return qt(u,i,r)}const Qb=w({softmaxCrossEntropy_:Zb});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(e,t,n,s){const r=m(e,"indices","sparseFillEmptyRows","int32"),a=m(t,"values","sparseFillEmptyRows"),o=m(n,"denseShape","sparseFillEmptyRows","int32"),i=m(s,"defaultValue","sparseFillEmptyRows",a.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:r,values:a,denseShape:o,defaultValue:i},c=N.runKernel(Ac,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const ew=w({sparseFillEmptyRows_:tw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(e,t,n){const s=m(e,"inputIndices","sparseReshape","int32"),r=m(t,"inputShape","sparseReshape","int32"),a=m(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:s,inputShape:r,newShape:a},i=N.runKernel(Dc,o);return{outputIndices:i[0],outputShape:i[1]}}const sw=w({sparseReshape_:nw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(e,t,n){const s=m(e,"data","sparseSegmentMean"),r=m(t,"indices","sparseSegmentMean","int32"),a=m(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:s,indices:r,segmentIds:a};return N.runKernel(Oc,o)}const aw=w({sparseSegmentMean_:rw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(e,t,n){const s=m(e,"data","sparseSegmentSum"),r=m(t,"indices","sparseSegmentSum","int32"),a=m(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:s,indices:r,segmentIds:a};return N.runKernel(Fc,o)}const iw=w({sparseSegmentSum_:ow});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw(e,t,n,s,r,a,o,i){const u=m(e,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const c=m(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:s,leftPad:r,rightPad:a,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:c},f=N.runKernel(Lc,p,h);return{nGrams:f[0],nGramsSplits:f[1]}}const cw=w({stringNGrams_:uw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(e,t,n=!0){const s=m(e,"input","stringSplit","string"),r=m(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const a={skipEmpty:n},o={input:s,delimiter:r},i=N.runKernel(zc,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const hw=w({stringSplit_:lw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(e,t){const n=m(e,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return N.runKernel(Vc,r,s)}const fw=w({stringToHashBucketFast_:pw});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(e,t,n,s=!0){const r=m(e,"input","staticRegexReplace","string"),a={pattern:t,rewrite:n,replaceGlobal:s};return N.runKernel(Bc,{x:r},a)}const dw=w({staticRegexReplace_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gw={fft:Ms,ifft:An,rfft:Ks,irfft:co},yw={hammingWindow:Ly,hannWindow:yo,frame:bo,stft:jy},bw={flipLeftRight:My,grayscaleToRGB:Hy,resizeNearestNeighbor:$b,resizeBilinear:Tb,rgbToGrayscale:Jy,rotateWithOffset:Zy,cropAndResize:Wy,nonMaxSuppression:tb,nonMaxSuppressionAsync:hb,nonMaxSuppressionWithScore:fb,nonMaxSuppressionWithScoreAsync:db,nonMaxSuppressionPadded:yb,nonMaxSuppressionPaddedAsync:wb,threshold:Eb,transform:xb},ww={bandPart:Ab,gramSchmidt:Ob,qr:Cb},Nw={absoluteDifference:Pb,computeWeightedLoss:qt,cosineDistance:zb,hingeLoss:Ub,huberLoss:qb,logLoss:Gb,meanSquaredError:Kb,sigmoidCrossEntropy:Jb,softmaxCrossEntropy:Qb},Tw={sparseFillEmptyRows:ew,sparseReshape:sw,sparseSegmentMean:aw,sparseSegmentSum:iw},Sw={stringNGrams:cw,stringSplit:hw,stringToHashBucketFast:fw,staticRegexReplace:dw};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $w=new Map,bs=new Map;class wo{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Gt{constructor(){this.classNameMap={}}static getMap(){return Gt.instance==null&&(Gt.instance=new Gt),Gt.instance}static register(t){Gt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function No(e,t,n){g(e.className!=null,()=>"Class being registered does not have the static className property defined."),g(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),g(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const s=n,r=t+">"+s;return Gt.register(e),$w.set(r,e),bs.set(e,r),e}function vw(e){return bs.has(e)?bs.get(e):e.className}const BN=Object.freeze(Object.defineProperty({__proto__:null,Serializable:wo,SerializationMap:Gt,getRegisteredName:vw,registerClass:No},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ne extends wo{minimize(t,n=!1,s){const{value:r,grads:a}=this.computeGradients(t,s);if(s!=null){const o=s.map(i=>({name:i.name,tensor:a[i.name]}));this.applyGradients(o)}else this.applyGradients(a);return dt(a),n?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return sm(t,n)}dispose(){this.iterations_!=null&&dt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:j(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Ne,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kw extends Ne{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const a=N.registeredVariables[s],o=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:W(()=>$t(a).variable(o))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:W(()=>$t(a).variable(o))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const u=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;W(()=>{const h=L(D(u,this.rho),D(It(i),1-this.rho)),p=D(X(Vt(L(c,this.epsilon)),Vt(L(u,this.epsilon))),i),f=L(D(c,this.rho),D(It(p),1-this.rho));u.assign(h),c.assign(f);const d=L(D(p,-this.learningRate),a);a.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(dt(this.accumulatedGrads.map(t=>t.variable)),dt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ew extends Ne{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const a=N.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:W(()=>sn(a.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const i=this.accumulatedGrads[r].variable;W(()=>{const u=L(i,It(o));i.assign(u);const c=L(D(X(o,Vt(L(u,N.backend.epsilon()))),-this.learningRate),a);a.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&dt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _w extends Ne{static get className(){return"Adam"}constructor(t,n,s,r=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],W(()=>{this.accBeta1=j(n).variable(),this.accBeta2=j(s).variable()}),r==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);W(()=>{const s=U(1,this.accBeta1),r=U(1,this.accBeta2);n.forEach((a,o)=>{const i=N.registeredVariables[a],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:W(()=>$t(i).variable(u))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${a}/v`,variable:W(()=>$t(i).variable(u))});const c=Array.isArray(t)?t[o].tensor:t[a];if(c==null)return;const h=this.accumulatedFirstMoment[o].variable,p=this.accumulatedSecondMoment[o].variable,f=L(D(h,this.beta1),D(c,1-this.beta1)),d=L(D(p,this.beta2),D(It(c),1-this.beta2)),b=X(f,s),S=X(d,r);h.assign(f),p.assign(d);const T=L(D(X(b,L(Vt(S),this.epsilon)),-this.learningRate),i);i.assign(T)}),this.accBeta1.assign(D(this.accBeta1,this.beta1)),this.accBeta2.assign(D(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&dt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),W(()=>{this.accBeta1.assign(Ke(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ke(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xw extends Ne{static get className(){return"Adamax"}constructor(t,n,s,r=null,a=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],W(()=>{this.iteration=j(0).variable(),this.accBeta1=j(n).variable()}),r==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);W(()=>{const s=U(1,this.accBeta1),r=X(-this.learningRate,L(D(this.iteration,this.decay),1));n.forEach((a,o)=>{const i=N.registeredVariables[a],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:$t(i).variable(u)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${a}/v`,variable:$t(i).variable(u)});const c=Array.isArray(t)?t[o].tensor:t[a];if(c==null)return;const h=this.accumulatedFirstMoment[o].variable,p=this.accumulatedWeightedInfNorm[o].variable,f=L(D(h,this.beta1),D(c,1-this.beta1)),d=D(p,this.beta2),b=St(c),S=no(d,b);h.assign(f),p.assign(S);const T=L(D(X(r,s),X(f,L(S,this.epsilon))),i);i.assign(T)}),this.iteration.assign(L(this.iteration,1)),this.accBeta1.assign(D(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&dt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class To extends Ne{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const o=N.registeredVariables[s];W(()=>{const i=L(D(this.c,a),o);o.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Ot(j(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Iw extends To{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=j(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const a=N.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:W(()=>$t(a).variable(!1))});const o=this.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[s];i!=null&&W(()=>{let u;const c=L(D(this.m,o),i);this.useNesterov?u=L(D(this.c,L(i,D(c,this.m))),a):u=L(D(this.c,c),a),o.assign(c),a.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&dt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Aw extends Ne{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,r=null,a=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,r==null&&(this.epsilon=N.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const a=N.registeredVariables[s],o=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:W(()=>$t(a).variable(o))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:W(()=>$t(a).variable(o))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:W(()=>$t(a).variable(o))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const u=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;W(()=>{const h=L(D(u,this.decay),D(It(i),1-this.decay));if(this.centered){const p=this.accumulatedMeanGrads[r].variable,f=L(D(p,this.decay),D(i,1-this.decay)),d=X(D(i,this.learningRate),Vt(U(h,L(It(f),this.epsilon)))),b=L(D(c,this.momentum),d);u.assign(h),p.assign(f),c.assign(b);const S=U(a,b);a.assign(S)}else{const p=L(D(u,this.decay),D(It(i),1-this.decay)),f=L(D(c,this.momentum),X(D(i,this.learningRate),Vt(L(p,this.epsilon))));u.assign(p),c.assign(f);const d=U(a,f);a.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&dt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&dt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&dt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dw=[kw,Ew,_w,xw,Iw,Aw,To];function Ow(){for(const e of Dw)No(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fw="model",Cw=".json",Rw=".weights.bin";function Dr(e){return new Promise(t=>setTimeout(t)).then(e)}class ge{constructor(t){if(!z().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ge.URL_SCHEME)&&(t=t.slice(ge.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Fw),this.modelJsonFileName=t+Cw,this.weightDataFileName=t+Rw}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=At.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],a=ka(t,r),o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await Dr(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=s,await Dr(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:nn(t)}}}}ge.URL_SCHEME="downloads://";class Bw{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{const a=JSON.parse(r.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const u=zs(a,c=>this.loadWeights(c));t(u)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const o of t)n.push(...o.weights),s.push(...o.paths);const r=this.checkManifestAndWeightFiles(t),a=s.map(o=>this.loadWeightsFile(o,r[o]));return Promise.all(a).then(o=>[n,o])}loadWeightsFile(t,n){return new Promise((s,r)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;s(i)},a.onerror=o=>r(`Failed to weights data from file of path '${t}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(a=>Nr(a.name)),r={};for(const a of t)a.paths.forEach(o=>{const i=Nr(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),s.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);r[o]=this.weightsFiles[s.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Pw=e=>z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ge.URL_SCHEME)?Lw(e.slice(ge.URL_SCHEME.length)):null;Y.registerSaveRouter(Pw);function Lw(e="model"){return new ge(e)}function zw(e){return new Bw(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Or(e,t,n,s){o(e),n=n??0,s=s??1,i(n,s);let r=0;const a=u=>(u.then(c=>{const h=n+ ++r/e.length*(s-n);return t(h),c}),u);function o(u){g(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function i(u,c){g(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),g(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),g(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(e.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function So(e,t){t==null&&(t={});const n=t.fetchFunc==null?z().platform.fetch:t.fetchFunc,s=e.map(p=>n(p,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(s):await Or(s,t.onProgress,0,.5)).map(p=>p.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Or(i,t.onProgress,.5,1)}function Vw(e,t){var n;const s=t.fetchFunc==null?z().platform.fetch:t.fetchFunc;let r=0,a;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async o=>{for(var i;r<e.length;){a||(a=(await s(e[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:c}=await a.read();if(u){r++,a=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,r/e.length);continue}o.enqueue(c);return}o.close()}})}async function Uw(e,t="",n,s){return $o(o=>So(o,{requestInit:s}))(e,t,n)}function $o(e){return async(t,n="",s)=>{const r=t.map(()=>!1),a={},o=s!=null?s.map(()=>!1):[],i=[];if(t.forEach((d,b)=>{let S=0;d.weights.forEach(T=>{const $="quantization"in T?T.quantization.dtype:T.dtype,I=he[$]*Z(T.shape),F=()=>{r[b]=!0,a[b]==null&&(a[b]=[]),a[b].push({manifestEntry:T,groupOffset:S,sizeBytes:I})};s!=null?s.forEach((_,A)=>{_===T.name&&(F(),o[A]=!0)}):F(),i.push(T.name),S+=I})}),!o.every(d=>d)){const d=s.filter((b,S)=>!o[S]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const u=r.reduce((d,b,S)=>(b&&d.push(S),d),[]),c=[];u.forEach(d=>{t[d].paths.forEach(b=>{const S=n+(n.endsWith("/")?"":"/")+b;c.push(S)})});const h=await e(c),p={};let f=0;return u.forEach(d=>{const b=t[d].paths.length,S=new At(h.slice(f,f+b));a[d].forEach($=>{const I=S.slice($.groupOffset,$.groupOffset+$.sizeBytes),F=Sa(I,[$.manifestEntry]);for(const _ in F)p[_]=F[_]}),f+=b}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jw="application/octet-stream",qw="application/json";class nr{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(g(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=z().platform.fetch,g(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&g(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=ka(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(r)],{type:qw}),"model.json"),t.weightData!=null){const o=At.join(t.weightData);n.body.append("model.weights.bin",new Blob([o],{type:jw}),"model.weights.bin")}const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:nn(t),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return zs(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=kn(t.weightsManifest),r=()=>Vw(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=Ww(n),a=this.weightPathPrefix||s,o=[],i=[];for(const u of t)for(const c of u.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(c)):o.push(a+c+r);return this.weightUrlConverter&&o.push(...await Promise.all(i)),o}async loadWeights(t){const n=await this.getWeightUrls(t),s=kn(t),r=await So(n,this.loadOptions);return[s,r]}}nr.URL_SCHEME_REGEX=/^https?:\/\//;function Ww(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),s=e.substring(0,t),r=n>t?e.substring(n):"";return[s+"/",r]}function ws(e){return e.match(nr.URL_SCHEME_REGEX)!=null}const vo=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(s=>ws(s)):n=ws(e),n)return sr(e,t)}return null};Y.registerSaveRouter(vo);Y.registerLoadRouter(vo);function sr(e,t){return new nr(e,t)}function Gw(e,t){return sr(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class ko{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Mw{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function Kw(e,t,n,s){const r=arguments;return new Mw(Dn(...r))}function Dn(e,t,n,s){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Qn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Qn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Qn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:s}))}function Hw(e){return new ko(e)}function Xw(e){return new ko(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eo=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:At,browserFiles:zw,browserHTTPRequest:Gw,concatenateArrayBuffers:Bl,copyModel:rh,decodeWeights:Sa,decodeWeightsStream:va,encodeWeights:Al,fromMemory:Kw,fromMemorySync:Dn,getLoadHandlers:Wl,getModelArtifactsForJSON:zs,getModelArtifactsForJSONSync:Ls,getModelArtifactsInfoForJSON:nn,getSaveHandlers:ql,getWeightSpecs:kn,http:sr,isHTTPScheme:ws,listModels:nh,loadWeights:Uw,moveModel:ah,registerLoadRouter:jl,registerSaveRouter:Ul,removeModel:sh,weightsLoaderFactory:$o,withSaveHandler:Hw,withSaveHandlerSync:Xw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let se,Fr=!1;function _o(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,r=!1,a=!1,o=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)a=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if($n(ir,N.backendName)!=null){const b={pixels:e},S={numChannels:t};return N.runKernel(ir,b,S)}const[c,h]=r?[e.videoWidth,e.videoHeight]:[e.width,e.height];let p;if(o)p=e.getContext("2d").getImageData(0,0,c,h).data;else if(s||n)p=e.data;else if(a||r||i){if(se==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")se=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else se=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});se.canvas.width=c,se.canvas.height=h,se.drawImage(e,0,0,c,h),p=se.getImageData(0,0,c,h).data}let f;if(t===4)f=new Int32Array(p);else{const b=c*h;f=new Int32Array(b*t);for(let S=0;S<b;S++)for(let T=0;T<t;++T)f[S*t+T]=p[S*4+T]}return po(f,[h,c,t],"int32")}function Jw(e){return e!=null&&e.data instanceof Uint8Array}function Yw(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function Zw(e){return e!=null&&e.width!==0&&e.height!==0}function Qw(e){return Yw()&&!(e instanceof ImageBitmap)&&Zw(e)&&!Jw(e)}async function t0(e,t=3){let n=null;if(z().getBool("WRAP_TO_IMAGEBITMAP")&&Qw(e)){let s;try{s=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===e.width&&s.height===e.height?n=s:n=e}else n=e;return _o(n,t)}function xo(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}function e0(e){const t=e?.alpha||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function n0(e,t){let n=m(e,"img","toPixels");if(!(e instanceof st)){const c=n;n=et(c,"int32"),c.dispose()}xo(n);const[s,r]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2],o=await n.data(),i=n.dtype==="float32"?255:1,u=new Uint8ClampedArray(r*s*4);for(let c=0;c<s*r;++c){const h=[0,0,0,255];for(let f=0;f<a;f++){const d=o[c*a+f];if(n.dtype==="float32"){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if(n.dtype==="int32"&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);a===1?(h[0]=d*i,h[1]=d*i,h[2]=d*i):h[f]=d*i}const p=c*4;u[p+0]=Math.round(h[0]),u[p+1]=Math.round(h[1]),u[p+2]=Math.round(h[2]),u[p+3]=Math.round(h[3])}if(t!=null){Fr||$n(sa,N.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Fr=!0),t.width=r,t.height=s;const c=t.getContext("2d"),h=new ImageData(u,r,s);c.putImageData(h,0,0)}return n!==e&&n.dispose(),u}function s0(e,t,n){let s=m(e,"img","draw");if(!(e instanceof st)){const o=s;s=et(o,"int32"),o.dispose()}xo(s),e0(n?.imageOptions);const r={image:s},a={canvas:t,options:n};N.runKernel(sa,r,a)}const r0=w({fromPixels_:_o}),PN=Object.freeze(Object.defineProperty({__proto__:null,draw:s0,fromPixels:r0,fromPixelsAsync:t0,toPixels:n0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ow();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a0=z();a0.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var bt;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(bt||(bt={}));var Cr;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(Cr||(Cr={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rr={};function LN(e,t){const n={tfOpName:e,category:"custom",inputs:[],attrs:[],customExecutor:t};rr[e]=n}function Io(e){return rr[e]}function zN(e){delete rr[e]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l(e,t,n,s,r){const a=t.inputParams[e];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd,c=i<0?t.inputNames.length+i:i;if(a.type==="tensor")return ut(t.inputNames[c],n,s,r);if(a.type==="tensors"){const f=t.inputs.slice(i,u);return t.inputNames.slice(i,u).filter((b,S)=>{var T;return((T=f[S])===null||T===void 0?void 0:T.op)!=="NoOp"}).map(b=>ut(b,n,s,r))}const h=ut(t.inputNames[c],n,s,r),p=h.dataSync();return a.type==="number"?p[0]:le(h.shape,p)}const o=t.attrParams[e];return o&&o.value}function ut(e,t,n,s){const[r,a]=wt(e,n);if(s!=null){const i=s.getHashTableHandleByName(r);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!t[On(r,i)]);return o!==void 0?t[On(r,o)][a]:void 0}function Rr(e,t,n){return t[On(e,n.currentContextId)]}function Bt(e,t){const[n,s,r]=wt(e,t);return[On(n,t&&t.currentContextId),s,r]}function On(e,t){return t?`${e}-${t}`:e}function wt(e,t){if(e==="")return["",0,void 0];const n=t!=null&&t.parseNodeNameCache!=null;if(n){const a=t.parseNodeNameCache.get(e);if(a!=null)return a}const s=e.split(":");let r;if(s.length===1)r=[e,0,void 0];else{const a=s[0],o=s.length===3?s[1]:void 0,i=Number(s[s.length-1]);r=[a,i,o]}return n&&t.parseNodeNameCache.set(e,r),r}function Nn(e,t,n){let s=l("pad",e,t,n);if(s==="explicit"){s=l("explicitPaddings",e,t,n);const r=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)r[a][0]=s[a*2],r[a][1]=s[a*2+1];return r}return s}function Pt(e){return e.kept?e:Ht(e)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o0=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],i0=Object.freeze(Object.defineProperty({__proto__:null,json:o0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u0=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],c0=Object.freeze(Object.defineProperty({__proto__:null,json:u0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l0=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],h0=Object.freeze(Object.defineProperty({__proto__:null,json:l0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p0=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],f0=Object.freeze(Object.defineProperty({__proto__:null,json:p0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m0=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],d0=Object.freeze(Object.defineProperty({__proto__:null,json:m0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g0=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],y0=Object.freeze(Object.defineProperty({__proto__:null,json:g0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b0=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],w0=Object.freeze(Object.defineProperty({__proto__:null,json:b0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N0=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],T0=Object.freeze(Object.defineProperty({__proto__:null,json:N0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S0=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],$0=Object.freeze(Object.defineProperty({__proto__:null,json:S0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v0=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],k0=Object.freeze(Object.defineProperty({__proto__:null,json:v0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E0=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],_0=Object.freeze(Object.defineProperty({__proto__:null,json:E0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x0=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],I0=Object.freeze(Object.defineProperty({__proto__:null,json:x0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A0=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],D0=Object.freeze(Object.defineProperty({__proto__:null,json:A0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O0=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],F0=Object.freeze(Object.defineProperty({__proto__:null,json:O0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C0=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],R0=Object.freeze(Object.defineProperty({__proto__:null,json:C0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B0=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],P0=Object.freeze(Object.defineProperty({__proto__:null,json:B0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L0=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],z0=Object.freeze(Object.defineProperty({__proto__:null,json:L0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V0=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],U0=Object.freeze(Object.defineProperty({__proto__:null,json:V0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j0=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],q0=Object.freeze(Object.defineProperty({__proto__:null,json:j0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Br{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[i0,c0,h0,f0,d0,y0,w0,T0,$0,k0,_0,I0,D0,F0,R0,P0,z0,U0,q0],n=[].concat(...t.map(s=>s.json));this.opMappers=n.reduce((s,r)=>(s[r.tfOpName]=r,s),{})}transformGraph(t,n={}){const s=t.node,r=[],a=[],o=[],i=s.reduce((S,T)=>(S[T.name]=this.mapNode(T),T.op.startsWith("Placeholder")?r.push(S[T.name]):T.op==="Const"?a.push(S[T.name]):(T.input==null||T.input.length===0)&&o.push(S[T.name]),S),{});let u=[];const c=[];let h={},p={};n!=null&&(h=this.mapSignatureEntries(n.inputs),p=this.mapSignatureEntries(n.outputs));const f=Object.keys(i);f.forEach(S=>{const T=i[S];T.inputNames.forEach(($,I)=>{const[F,,_]=Bt($),A=i[F];if(A.outputs!=null){const O=A.outputs.indexOf(_);if(O!==-1){const B=`${F}:${O}`;T.inputNames[I]=B}}T.inputs.push(A),A.children.push(T)})}),Object.keys(p).length===0?f.forEach(S=>{const T=i[S];T.children.length===0&&c.push(T)}):Object.keys(p).forEach(S=>{const[T]=Bt(S),$=i[T];$!=null&&($.signatureKey=p[S],c.push($))}),Object.keys(h).length>0?Object.keys(h).forEach(S=>{const[T]=Bt(S),$=i[T];$&&($.signatureKey=h[S],u.push($))}):u=r;let d={};t.library!=null&&t.library.function!=null&&(d=t.library.function.reduce((S,T)=>(S[T.signature.name]=this.mapFunction(T),S),{}));const b={nodes:i,inputs:u,outputs:c,weights:a,placeholders:r,signature:n,functions:d};return o.length>0&&(b.initNodes=o),b}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,s)=>(n[t[s].name]=s,n),{})}mapNode(t){const n=Io(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const s={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(r=>r.startsWith("^")?r.slice(1):r),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(s.inputParams=n.inputs.reduce((r,a)=>(r[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},r),{})),n.attrs!=null&&(s.attrParams=n.attrs.reduce((r,a)=>{const o=a.type;let i;switch(a.type){case"string":i=Ns(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ns(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=_s(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=_s(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Ss(t.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=Ss(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=Es(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Es(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Ts(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ts(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Is(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Is(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=ks(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=ks(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=xs(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=xs(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=$s(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=$s(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=vs(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=vs(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=Pr(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Pr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${t.op}`)}return r[a.name]={value:i,type:o},r},{})),s}mapFunction(t){const n=t.nodeDef,s=[],r=[];let a={};n!=null&&(a=n.reduce((p,f)=>(p[f.name]=this.mapNode(f),f.op==="Const"&&r.push(p[f.name]),p),{}));const o=[],i=[];t.signature.inputArg.forEach(p=>{const[f]=Bt(p.name),d={name:f,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ar(p.type),type:"dtype"}},children:[]};d.signatureKey=p.name,o.push(d),a[f]=d}),Object.keys(a).forEach(p=>{const f=a[p];f.inputNames.forEach((d,b)=>{const[S,,T]=Bt(d),$=a[S];if($.outputs!=null){const I=$.outputs.indexOf(T);if(I!==-1){const F=`${S}:${I}`;f.inputNames[b]=F}}f.inputs.push($),$.children.push(f)})});const c=t.ret;t.signature.outputArg.forEach(p=>{const[f,d]=Bt(c[p.name]),b=a[f];b!=null&&(b.defaultOutput=d,i.push(b))});const h=this.mapArgsToSignature(t);return{nodes:a,inputs:o,outputs:i,weights:r,placeholders:s,signature:h}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s),n),{}),outputs:t.signature.outputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s,t.ret),n),{})}}mapArgToTensorInfo(t,n){let s=t.name;return n!=null&&(s=n[s]),{name:s,dtype:t.type}}}function W0(e){const t=z().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Ao(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):W0(e);return t?n:n.toLowerCase()}function Ns(e,t,n,s=!1){const r=e[t];return r!=null?Ao(r.s,s):n}function Ts(e,t,n){const s=e[t];return s?s.b:n}function Ss(e,t,n){const s=e[t]||{},r=s.i!=null?s.i:s.f!=null?s.f:n;return typeof r=="number"?r:parseInt(r,10)}function ar(e){switch(typeof e=="string"&&(e=bt[e]),e){case bt.DT_FLOAT:case bt.DT_HALF:return"float32";case bt.DT_INT32:case bt.DT_INT64:case bt.DT_INT8:case bt.DT_UINT8:return"int32";case bt.DT_BOOL:return"bool";case bt.DT_DOUBLE:return"float32";case bt.DT_STRING:return"string";case bt.DT_COMPLEX64:case bt.DT_COMPLEX128:return"complex64";default:return null}}function Pr(e,t,n){const s=e[t];return s&&s.func?s.func.name:n}function $s(e,t,n){const s=e[t];return s&&s.type?ar(s.type):n}function vs(e,t,n){const s=e[t];return s&&s.list&&s.list.type?s.list.type.map(r=>ar(r)):n}function Do(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function ks(e,t,n){const s=e[t];return s&&s.shape?Do(s.shape):n}function Es(e,t,n){const s=e[t];return s?((s.list.f&&s.list.f.length?s.list.f:s.list.i)||[]).map(r=>typeof r=="number"?r:parseInt(r,10)):n}function _s(e,t,n,s=!1){const r=e[t];return r&&r.list&&r.list.s?r.list.s.map(a=>Ao(a,s)):n}function xs(e,t,n){const s=e[t];return s&&s.list&&s.list.shape?s.list.shape.map(r=>Do(r)):n}function Is(e,t,n){const s=e[t];return s&&s.list&&s.list.b?s.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class G0{constructor(t,n,s){this.node=t,this.tensorMap=n,this.context=s,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(r=>this.getInput(r)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((r,a)=>(r[a]=this.getAttr(a),r),{}))}getInput(t){return ut(t,this.tensorMap,this.context)}getAttr(t,n){const s=this.node.rawAttrs[t];if(s.tensor!=null)return ut(t,this.tensorMap,this.context);if(s.i!=null||s.f!=null)return Ss(this.node.rawAttrs,t,n);if(s.s!=null)return Ns(this.node.rawAttrs,t,n);if(s.b!=null)return Ts(this.node.rawAttrs,t,n);if(s.shape!=null)return ks(this.node.rawAttrs,t,n);if(s.type!=null)return $s(this.node.rawAttrs,t,n);if(s.list!=null){if(s.list.i!=null||s.list.f!=null)return Es(this.node.rawAttrs,t,n);if(s.list.s!=null)return _s(this.node.rawAttrs,t,n);if(s.list.shape!=null)return xs(this.node.rawAttrs,t,n);if(s.list.b!=null)return Is(this.node.rawAttrs,t,n);if(s.list.type!=null)return vs(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ct=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Ta,abs:St,acos:bh,acosh:Nh,add:L,addN:Sh,all:vh,any:Eh,argMax:xh,argMin:Ah,asin:Oh,asinh:Ch,atan:Bh,atan2:Lh,atanh:Vh,avgPool:Ba,avgPool3d:Yh,basicLSTMCell:rp,batchNorm:Ln,batchNorm2d:cp,batchNorm3d:hp,batchNorm4d:fp,batchToSpaceND:Pa,bincount:La,bitwiseAnd:gp,booleanMaskAsync:uy,broadcastArgs:bp,broadcastTo:pn,buffer:zt,cast:et,ceil:Tp,clipByValue:$p,clone:Ht,complex:Zt,concat:pt,concat1d:kp,concat2d:_p,concat3d:Ip,concat4d:Dp,conv1d:Cp,conv2d:zn,conv2dTranspose:Pp,conv3d:zp,conv3dTranspose:qp,cos:Gp,cosh:Kp,cosineWindow:Js,cumprod:Xp,cumsum:Yp,denseBincount:Qp,depthToSpace:ef,depthwiseConv2d:Vs,diag:rf,dilation2d:of,div:X,divNoNan:ff,dot:df,dropout:Ty,einsum:$e,elu:ja,enclosingPowerOfTwo:go,ensureShape:wf,equal:Ua,erf:Tf,euclideanNorm:Df,exp:me,expandDims:Wt,expm1:Rf,eye:Ga,fft:Ms,fill:sn,floor:Ma,floorDiv:Ca,fused:By,gather:Ka,gatherND:by,greater:jn,greaterEqual:Ha,ifft:An,imag:qn,image:bw,inTopKAsync:$y,irfft:co,isFinite:Wf,isInf:Mf,isNaN:Hf,leakyRelu:Xa,less:gs,lessEqual:Us,linalg:ww,linspace:Zf,localResponseNormalization:tm,log:He,log1p:Ja,logSigmoid:im,logSoftmax:lm,logSumExp:Za,logicalAnd:_n,logicalNot:Qa,logicalOr:to,logicalXor:gm,losses:Nw,lowerBound:bm,matMul:G,max:_e,maxPool:eo,maxPool3d:Tm,maxPoolWithArgmax:$m,maximum:no,mean:xn,meshgrid:Em,min:ds,minimum:In,mirrorPad:Im,mod:Dm,moments:Fm,movingAverage:hy,mul:D,multiRNNCell:Rm,multinomial:Pm,neg:Ct,norm:Un,notEqual:so,oneHot:Vm,ones:ce,onesLike:jm,op:w,outerProduct:Wm,pad:rn,pad1d:Km,pad2d:Xm,pad3d:Ym,pad4d:Qm,pool:rd,pow:Ke,prelu:ao,print:Fa,prod:id,raggedGather:cd,raggedRange:hd,raggedTensorToTensor:fd,rand:dd,randomGamma:Pd,randomNormal:oo,randomStandardNormal:Vd,randomUniform:Gs,randomUniformInt:qd,range:Xe,real:Je,reciprocal:Md,relu:Gn,relu6:io,reshape:E,reverse:de,reverse1d:Yd,reverse2d:Qd,reverse3d:eg,reverse4d:sg,rfft:Ks,round:uo,rsqrt:og,scalar:j,scatterND:fy,searchSorted:js,selu:ug,separableConv2d:lg,setdiff1dAsync:pg,sigmoid:Ee,sign:mg,signal:yw,sin:gg,sinh:bg,slice:K,slice1d:Ng,slice2d:Sg,slice3d:vg,slice4d:Eg,softmax:xg,softplus:Ya,spaceToBatchND:ro,sparse:Tw,sparseToDense:gy,spectral:gw,split:Ye,sqrt:Vt,square:It,squaredDifference:lo,squeeze:Hs,stack:jt,step:ho,stridedSlice:zg,string:Sw,sub:U,sum:H,tan:Ug,tanh:ms,tensor:Ft,tensor1d:_t,tensor2d:Ue,tensor3d:po,tensor4d:jg,tensor5d:qg,tensor6d:Wg,tensorScatterUpdate:Kg,tile:Ve,topk:Xg,transpose:ys,truncatedNormal:Yg,unique:Qg,unsortedSegmentSum:ey,unstack:we,upperBound:sy,variable:ry,where:Xt,whereAsync:mo,zeros:Fe,zerosLike:$t},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M0=(e,t,n,s=ct)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[s.add(l("a",e,t,n),l("b",e,t,n))];case"AddN":return[s.addN(l("tensors",e,t,n))];case"FloorMod":case"Mod":return[s.mod(l("a",e,t,n),l("b",e,t,n))];case"Mul":return[s.mul(l("a",e,t,n),l("b",e,t,n))];case"RealDiv":case"Div":return[s.div(l("a",e,t,n),l("b",e,t,n))];case"DivNoNan":return[s.divNoNan(l("a",e,t,n),l("b",e,t,n))];case"FloorDiv":return[s.floorDiv(l("a",e,t,n),l("b",e,t,n))];case"Sub":return[s.sub(l("a",e,t,n),l("b",e,t,n))];case"Minimum":return[s.minimum(l("a",e,t,n),l("b",e,t,n))];case"Maximum":return[s.maximum(l("a",e,t,n),l("b",e,t,n))];case"Pow":return[s.pow(l("a",e,t,n),l("b",e,t,n))];case"SquaredDifference":return[s.squaredDifference(l("a",e,t,n),l("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K0=(e,t,n,s=ct)=>{switch(e.op){case"Abs":case"ComplexAbs":return[s.abs(l("x",e,t,n))];case"Acos":return[s.acos(l("x",e,t,n))];case"Acosh":return[s.acosh(l("x",e,t,n))];case"Asin":return[s.asin(l("x",e,t,n))];case"Asinh":return[s.asinh(l("x",e,t,n))];case"Atan":return[s.atan(l("x",e,t,n))];case"Atan2":return[s.atan2(l("x",e,t,n),l("y",e,t,n))];case"Atanh":return[s.atanh(l("x",e,t,n))];case"Ceil":return[s.ceil(l("x",e,t,n))];case"Complex":return[s.complex(l("real",e,t,n),l("imag",e,t,n))];case"Cos":return[s.cos(l("x",e,t,n))];case"Cosh":return[s.cosh(l("x",e,t,n))];case"Elu":return[s.elu(l("x",e,t,n))];case"Erf":return[s.erf(l("x",e,t,n))];case"Exp":return[s.exp(l("x",e,t,n))];case"Expm1":return[s.expm1(l("x",e,t,n))];case"Floor":return[s.floor(l("x",e,t,n))];case"Log":return[s.log(l("x",e,t,n))];case"Log1p":return[s.log1p(l("x",e,t,n))];case"Imag":return[s.imag(l("x",e,t,n))];case"Neg":return[s.neg(l("x",e,t,n))];case"Reciprocal":return[s.reciprocal(l("x",e,t,n))];case"Real":return[s.real(l("x",e,t,n))];case"Relu":return[s.relu(l("x",e,t,n))];case"Round":return[s.round(l("x",e,t,n))];case"Selu":return[s.selu(l("x",e,t,n))];case"Sigmoid":return[s.sigmoid(l("x",e,t,n))];case"Sin":return[s.sin(l("x",e,t,n))];case"Sign":return[s.sign(l("x",e,t,n))];case"Sinh":return[s.sinh(l("x",e,t,n))];case"Softplus":return[s.softplus(l("x",e,t,n))];case"Sqrt":return[s.sqrt(l("x",e,t,n))];case"Square":return[s.square(l("x",e,t,n))];case"Tanh":return[s.tanh(l("x",e,t,n))];case"Tan":return[s.tan(l("x",e,t,n))];case"ClipByValue":return[s.clipByValue(l("x",e,t,n),l("clipValueMin",e,t,n),l("clipValueMax",e,t,n))];case"Relu6":return[s.relu6(l("x",e,t,n))];case"Rsqrt":return[s.rsqrt(ut(e.inputNames[0],t,n))];case"LeakyRelu":return[s.leakyRelu(l("x",e,t,n),l("alpha",e,t,n))];case"Prelu":return[s.prelu(l("x",e,t,n),l("alpha",e,t,n))];case"IsNan":return[s.isNaN(ut(e.inputNames[0],t,n))];case"IsInf":return[s.isInf(ut(e.inputNames[0],t,n))];case"IsFinite":return[s.isFinite(ut(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Et(e,t,n=""){if(!(typeof e=="number"||typeof t=="number")){g(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let s=0;s<e.length;s++){const r=e[s],a=t[s];g(r<0||a<0||r===a,()=>n+` Shapes ${e} and ${t} must match`)}}}function Lr(e){return!(typeof e=="number"||e.some(t=>t<0))}function Be(e,t,n){let s=As(e,n);const r=!Lr(s);if(r&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${s}`);if(r&&t.forEach(a=>{s=As(a.shape,s)}),!Lr(s))throw new Error(`Non-fully-defined elementShape: ${s}`);return s}function As(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let s=0;s<e.length;++s){const r=e[s],a=t[s];if(r>=0&&a>=0&&r!==a)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[s]=r>=0?r:a}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class H0{constructor(t,n,s,r,a,o,i){this.name=t,this.dtype=n,this.maxSize=s,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=j(0),Ot(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const s=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),Et(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),s.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(s.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);s.tensor=n,Ot(n),s.written=!0,this.tensors[t]=s}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((s,r)=>this.write(s,n[r]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let r=0;r<this.size();r++)t.push(r)}if(t.length===0)return Ft([],[0].concat(this.elementShape));const s=this.readMany(t);return Et(this.elementShape,s[0].shape,"TensorArray shape mismatch: "),jt(s,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return Ft([],[0].concat(this.elementShape));const n=[];for(let r=0;r<this.size();r++)n.push(r);const s=this.readMany(n);return Et(this.elementShape,s[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${s[0].shape})`),pt(s,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(!this.dynamicSize&&s>=this.maxSize)throw new Error(`Max index must be < array size (${s}  vs. ${this.maxSize})`);this.writeMany(t,we(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let s=0;const r=t.map(u=>(s+=u,s));if(s!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=s===0?0:n.size/s,o=[];W(()=>{n=E(n,[1,s,a]);for(let u=0;u<t.length;++u){const h=[0,u===0?0:r[u-1],0],p=[1,t[u],a];o[u]=E(K(n,h,p),this.elementShape)}return o});const i=[];for(let u=0;u<t.length;u++)i[u]=u;this.writeMany(i,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ye{get id(){return this.idTensor.id}constructor(t,n,s,r=-1){this.tensors=t,this.elementShape=n,this.elementDtype=s,t?.forEach(a=>{if(s!==a.dtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${a.dtype}`);Et(n,a.shape,"TensorList shape mismatch: "),Ot(a)}),this.idTensor=j(0),this.maxNumElements=r,Ot(this.idTensor)}copy(){return new ye([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,s=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(s!==-1&&this.tensors.length!==s)throw new Error(`Operation expected a list with ${s} elements but got a list with ${this.tensors.length} elements.`);Et(t,this.elementShape,"TensorList shape mismatch: ");const r=Be(this.elementShape,this.tensors,t);return W(()=>{const a=this.tensors.map(o=>E(o,r));return jt(a,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const s=Be(this.elementShape,this.tensors,t),r=this.tensors.pop();return r.kept=!1,Et(r.shape,t,"TensorList shape mismatch: "),E(r,s)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Et(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Ot(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new ye([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let s=0;s<Math.min(this.tensors.length,t);++s)n.tensors[s]=this.tensors[s];return n}getItem(t,n,s){if(s!==this.elementDtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Et(this.tensors[t].shape,n,"TensorList shape mismatch: ");const r=Be(this.elementShape,this.tensors,n);return E(this.tensors[t],r)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Et(this.elementShape,n.shape,"TensorList shape mismatch: "),Ot(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,s){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);Et(this.elementShape,s,"TensorList shape mismatch: "),t=t.slice(0,this.size());const r=Be(this.elementShape,this.tensors,s);return t.length===0?Ft([],[0].concat(r)):W(()=>{const a=t.map(o=>E(this.tensors[o],r));return jt(a,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Et(this.elementShape,n,"TensorList shape mismatch: ");const s=Be(this.elementShape,this.tensors,n);return this.size()===0?Ft([],[0].concat(s)):W(()=>{const r=this.tensors.map(a=>E(a,s));return pt(r,0)})}}function X0(e,t,n){const s=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const r=e.shape.slice(1);Et(r,t,"TensorList shape mismatch: ");const a=we(e);return new ye(a,t,s)}function J0(e,t,n,s){return new ye([],e,t,s)}function Y0(e,t,n,s){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const r=Math.max(...t);if(s!=null&&s!==-1&&r>=s)throw new Error(`Max index must be < array size (${r}  vs. ${s})`);const a=new ye([],n,e.dtype,s),o=we(e,0);return t.forEach((i,u)=>{a.setItem(i,o[u])}),a}function Z0(e,t,n){let s=0;const r=t.map(h=>(s+=h,s));if(s!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${e.shape}`);const a=e.shape.slice(1),o=As(a,n),i=s===0?0:e.size/s,u=W(()=>{const h=[];e=E(e,[1,s,i]);for(let p=0;p<t.length;++p){const d=[0,p===0?0:r[p-1],0],b=[1,t[p],i];h[p]=E(K(e,d,b),o)}return e.dispose(),h}),c=new ye([],n,e.dtype,t.length);for(let h=0;h<u.length;h++)c.setItem(h,u[h]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q0=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const s=l("thenBranch",e,t,n),r=l("elseBranch",e,t,n),a=l("cond",e,t,n),o=l("args",e,t,n);return(await a.data())[0]?n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const s=l("body",e,t,n),r=l("cond",e,t,n),a=l("args",e,t,n),o=await n.functionMap[r].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(h=>h.id);let u=await o[0].data();o.forEach(h=>{!h.kept&&i.indexOf(h.id)===-1&&h.dispose()});let c=a;for(;u[0];){const h=c;c=await n.functionMap[s].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap);const p=c.map(d=>d.id);h.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()});const f=await n.functionMap[r].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap);u=await f[0].data(),f.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()})}return c}case"LoopCond":{const s=l("pred",e,t,n);return[Pt(s)]}case"Switch":{const s=l("pred",e,t,n);let r=l("data",e,t,n);return r.kept||(r=Pt(r)),(await s.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const s=e.inputNames.find(r=>ut(r,t,n)!==void 0);if(s){const r=ut(s,t,n);return[Pt(r)]}return}case"Enter":{const s=l("frameName",e,t,n),r=l("tensor",e,t,n);return n.enterFrame(s),[Pt(r)]}case"Exit":{const s=l("tensor",e,t,n);return n.exitFrame(),[Pt(s)]}case"NextIteration":{const s=l("tensor",e,t,n);return n.nextIteration(),[Pt(s)]}case"TensorArrayV3":{const s=l("size",e,t,n),r=l("dtype",e,t,n),a=l("elementShape",e,t,n),o=l("dynamicSize",e,t,n),i=l("clearAfterRead",e,t,n),u=l("identicalElementShapes",e,t,n),c=l("name",e,t,n),h=new H0(c,r,s,a,u,o,i);return n.addTensorArray(h),[h.idTensor,j(1)]}case"TensorArrayWriteV3":{const s=l("tensorArrayId",e,t,n),r=l("index",e,t,n),a=l("tensor",e,t,n),o=n.getTensorArray(s.id);return o.write(r,a),[o.idTensor]}case"TensorArrayReadV3":{const s=l("tensorArrayId",e,t,n),r=l("index",e,t,n);return[n.getTensorArray(s.id).read(r)]}case"TensorArrayGatherV3":{const s=l("tensorArrayId",e,t,n),r=l("indices",e,t,n),a=l("dtype",e,t,n);return[n.getTensorArray(s.id).gather(r,a)]}case"TensorArrayScatterV3":{const s=l("tensorArrayId",e,t,n),r=l("indices",e,t,n),a=l("tensor",e,t,n),o=n.getTensorArray(s.id);return o.scatter(r,a),[o.idTensor]}case"TensorArrayConcatV3":{const s=l("tensorArrayId",e,t,n),r=n.getTensorArray(s.id),a=l("dtype",e,t,n);return[r.concat(a)]}case"TensorArraySplitV3":{const s=l("tensorArrayId",e,t,n),r=l("tensor",e,t,n),a=l("lengths",e,t,n),o=n.getTensorArray(s.id);return o.split(a,r),[o.idTensor]}case"TensorArraySizeV3":{const s=l("tensorArrayId",e,t,n),r=n.getTensorArray(s.id);return[j(r.size(),"int32")]}case"TensorArrayCloseV3":{const s=l("tensorArrayId",e,t,n),r=n.getTensorArray(s.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const s=l("tensorListId",e,t,n),r=l("index",e,t,n),a=l("tensor",e,t,n),o=n.getTensorList(s.id);return o.setItem(r,a),[o.idTensor]}case"TensorListGetItem":{const s=l("tensorListId",e,t,n),r=l("index",e,t,n),a=l("elementShape",e,t,n),o=l("elementDType",e,t,n);return[n.getTensorList(s.id).getItem(r,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const s=l("indices",e,t,n),r=l("tensor",e,t,n),a=l("elementShape",e,t,n),o=l("numElements",e,t,n),i=Y0(r,s,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=l("elementShape",e,t,n),r=l("elementDType",e,t,n);let a;e.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=l(a,e,t,n),i=e.op==="TensorListReserve"?-1:o,u=J0(s,r,o,i);return n.addTensorList(u),[u.idTensor]}case"TensorListGather":{const s=l("tensorListId",e,t,n),r=l("indices",e,t,n),a=l("elementShape",e,t,n),o=l("elementDType",e,t,n);return[n.getTensorList(s.id).gather(r,o,a)]}case"TensorListStack":{const s=l("tensorListId",e,t,n),r=l("elementShape",e,t,n),a=l("elementDType",e,t,n),o=l("numElements",e,t,n);return[n.getTensorList(s.id).stack(r,a,o)]}case"TensorListFromTensor":{const s=l("tensor",e,t,n),r=l("elementShape",e,t,n),a=l("elementDType",e,t,n),o=X0(s,r,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const s=l("tensorListId",e,t,n),r=n.getTensorList(s.id),a=l("dtype",e,t,n),o=l("elementShape",e,t,n);return[r.concat(a,o)]}case"TensorListPushBack":{const s=l("tensorListId",e,t,n),r=l("tensor",e,t,n),a=n.getTensorList(s.id);return a.pushBack(r),[a.idTensor]}case"TensorListPopBack":{const s=l("tensorListId",e,t,n),r=l("elementShape",e,t,n),a=l("elementDType",e,t,n);return[n.getTensorList(s.id).popBack(r,a)]}case"TensorListSplit":{const s=l("tensor",e,t,n),r=l("elementShape",e,t,n),a=l("lengths",e,t,n),o=Z0(s,a,r);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const s=l("tensorListId",e,t,n),r=n.getTensorList(s.id);return[j(r.size(),"int32")]}case"TensorListResize":{const s=l("tensorListId",e,t,n),r=l("size",e,t,n),o=n.getTensorList(s.id).resize(r);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zr(e,t,n){const[s,r]=l("fusedOps",e,t,n),a=s==="biasadd",o=!a,i=r==="prelu",u=s==="fusedbatchnorm",c=l("numArgs",e,t,n);if(a){if(i&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const h=l("strides",e,t,n),p=Nn(e,t,n),f=l("dataFormat",e,t,n).toUpperCase(),d=l("dilations",e,t,n);let[b,S]=l("args",e,t,n);o&&(S=b,b=void 0);const T=l("leakyreluAlpha",e,t,n);return{stride:h,pad:p,dataFormat:f,dilations:d,biasArg:b,preluArg:S,activationFunc:r,leakyreluAlpha:T}}const t1=(e,t,n,s=ct)=>{switch(e.op){case"Conv1D":{const r=l("stride",e,t,n),a=l("pad",e,t,n),o=l("dataFormat",e,t,n).toUpperCase(),i=l("dilation",e,t,n);return[s.conv1d(l("x",e,t,n),l("filter",e,t,n),r,a,o,i)]}case"Conv2D":{const r=l("strides",e,t,n),a=Nn(e,t,n),o=l("dataFormat",e,t,n).toUpperCase(),i=l("dilations",e,t,n);return[s.conv2d(l("x",e,t,n),l("filter",e,t,n),[r[1],r[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:r,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:c,activationFunc:h,leakyreluAlpha:p}=zr(e,t,n);return[s.fused.conv2d({x:l("x",e,t,n),filter:l("filter",e,t,n),strides:[r[1],r[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:h,preluActivationWeights:c,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:c,activationFunc:h,leakyreluAlpha:p}=zr(e,t,n);return[s.fused.depthwiseConv2d({x:l("x",e,t,n),filter:l("filter",e,t,n),strides:[r[1],r[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:h,preluActivationWeights:c,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=l("outputShape",e,t,n),a=l("strides",e,t,n),o=Nn(e,t,n);return[s.conv2dTranspose(l("x",e,t,n),l("filter",e,t,n),r,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=l("strides",e,t,n),a=Nn(e,t,n),o=l("dilations",e,t,n),i=l("dataFormat",e,t,n).toUpperCase();return[s.depthwiseConv2d(l("input",e,t,n),l("filter",e,t,n),[r[1],r[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("dataFormat",e,t,n).toUpperCase(),i=l("dilations",e,t,n);return[s.conv3d(l("x",e,t,n),l("filter",e,t,n),[r[1],r[2],r[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("kernelSize",e,t,n);return[s.avgPool(l("x",e,t,n),[o[1],o[2]],[r[1],r[2]],a)]}case"MaxPool":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("kernelSize",e,t,n);return[s.maxPool(l("x",e,t,n),[o[1],o[2]],[r[1],r[2]],a)]}case"MaxPoolWithArgmax":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("kernelSize",e,t,n),i=l("includeBatchInIndex",e,t,n),{result:u,indexes:c}=s.maxPoolWithArgmax(l("x",e,t,n),[o[1],o[2]],[r[1],r[2]],a,i);return[u,c]}case"AvgPool3D":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("kernelSize",e,t,n);return[s.avgPool3d(l("x",e,t,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],a)]}case"MaxPool3D":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("kernelSize",e,t,n);return[s.maxPool3d(l("x",e,t,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],a)]}case"Dilation2D":{const r=l("strides",e,t,n),a=l("pad",e,t,n),o=l("dilations",e,t,n),i=r[1],u=r[2],c=o[1],h=o[2];return[s.dilation2d(l("x",e,t,n),l("filter",e,t,n),[i,u],a,[c,h],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e1=(e,t,n,s=ct)=>{switch(e.op){case"Fill":{const r=l("shape",e,t,n),a=l("dtype",e,t,n),o=l("value",e,t,n);return[s.fill(r,o,a)]}case"LinSpace":{const r=l("start",e,t,n),a=l("stop",e,t,n),o=l("num",e,t,n);return[s.linspace(r,a,o)]}case"Multinomial":{const r=l("logits",e,t,n),a=l("numSamples",e,t,n),o=l("seed",e,t,n);return[s.multinomial(r,a,o)]}case"OneHot":{const r=l("indices",e,t,n),a=l("depth",e,t,n),o=l("onValue",e,t,n),i=l("offValue",e,t,n),u=l("dtype",e,t,n);return[s.oneHot(r,a,o,i,u)]}case"Ones":return[s.ones(l("shape",e,t,n),l("dtype",e,t,n))];case"OnesLike":return[s.onesLike(l("x",e,t,n))];case"RandomStandardNormal":return[s.randomStandardNormal(l("shape",e,t,n),l("dtype",e,t,n),l("seed",e,t,n))];case"RandomUniform":return[s.randomUniform(l("shape",e,t,n),l("minval",e,t,n),l("maxval",e,t,n),l("dtype",e,t,n))];case"RandomUniformInt":return[s.randomUniformInt(l("shape",e,t,n),l("minval",e,t,n),l("maxval",e,t,n),l("seed",e,t,n))];case"Range":{const r=l("start",e,t,n),a=l("stop",e,t,n),o=l("step",e,t,n);return[s.range(r,a,o,l("dtype",e,t,n))]}case"TruncatedNormal":{const r=l("shape",e,t,n),a=l("mean",e,t,n),o=l("stdDev",e,t,n),i=l("seed",e,t,n);return[s.truncatedNormal(r,a,o,l("dtype",e,t,n),i)]}case"Zeros":return[s.zeros(l("shape",e,t,n),l("dtype",e,t,n))];case"ZerosLike":return[s.zerosLike(l("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ts(e,t,n){const s=l("boxes",e,t,n),r=l("scores",e,t,n),a=l("maxOutputSize",e,t,n),o=l("iouThreshold",e,t,n),i=l("scoreThreshold",e,t,n),u=l("softNmsSigma",e,t,n);return{boxes:s,scores:r,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}const n1=async(e,t,n,s,r=ct)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c,softNmsSigma:h}=ts(e,t,n),p=await r.image.nonMaxSuppressionWithScoreAsync(a,o,i,u,c,h);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=ts(e,t,n),h=l("padToMaxOutputSize",e,t,n),p=await r.image.nonMaxSuppressionPaddedAsync(a,o,i,u,c,h);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=ts(e,t,n);return[await r.image.nonMaxSuppressionAsync(a,o,i,u,c)]}case"Where":{const a=r.cast(l("condition",e,t,n),"bool"),o=[await r.whereAsync(a)];return a.dispose(),o}case"ListDiff":return r.setdiff1dAsync(l("x",e,t,n),l("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s1=(e,t,n,s=ct)=>{switch(e.op){case"LowerBound":{const r=l("sortedSequence",e,t,n),a=l("values",e,t,n);return[s.lowerBound(r,a)]}case"TopKV2":{const r=l("x",e,t,n),a=l("k",e,t,n),o=l("sorted",e,t,n),i=s.topk(r,a,o);return[i.values,i.indices]}case"UpperBound":{const r=l("sortedSequence",e,t,n),a=l("values",e,t,n);return[s.upperBound(r,a)]}case"Unique":{const r=l("x",e,t,n),a=s.unique(r);return[a.values,a.indices]}case"UniqueV2":{const r=l("x",e,t,n),a=l("axis",e,t,n),o=s.unique(r,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r1=(e,t,n,s=ct)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const r=l("default",e,t,n);return[ut(e.name,t,n)||r];case"Placeholder":return[ut(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const h=l("x",e,t,n);return[Pt(h)]}case"IdentityN":return l("x",e,t,n).map(h=>Pt(h));case"Snapshot":const a=l("x",e,t,n);return[Pt(a)];case"Shape":return[s.tensor1d(l("x",e,t,n).shape,"int32")];case"ShapeN":return l("x",e,t,n).map(h=>s.tensor1d(h.shape));case"Size":return[s.scalar(l("x",e,t,n).size,"int32")];case"Rank":return[s.scalar(l("x",e,t,n).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":const o=l("x",e,t,n),i=l("data",e,t,n),u=l("message",e,t,n),c=l("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let h=0;h<i.length;h++)console.log(Array.prototype.slice.call(i[h].dataSync()).slice(0,c));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class a1{get id(){return this.handle.id}constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=j(0),this.tensorMap=new Map,Ot(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return j(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return this.tensorMap.forEach(r=>r.dispose()),this.tensorMap.clear(),W(()=>{const r=we(n),a=s.length,o=r.length;g(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const u=s[i],c=r[i];Ot(c),this.tensorMap.set(u,c)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return W(()=>{const r=[];for(let a=0;a<s.length;a++){const o=s[a],i=this.findWithDefault(o,n);r.push(i)}return jt(r)})}findWithDefault(t,n){const s=this.tensorMap.get(t);return s??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o1=async(e,t,n,s)=>{switch(e.op){case"HashTable":case"HashTableV2":{const r=s.getHashTableHandleByName(e.name);if(r!=null)return[r];{const a=l("keyDType",e,t,n),o=l("valueDType",e,t,n),i=new a1(a,o);return s.addHashTable(e.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const r=l("tableHandle",e,t,n,s),a=l("keys",e,t,n),o=l("values",e,t,n);return[await s.getHashTableById(r.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const r=l("tableHandle",e,t,n,s),a=l("keys",e,t,n),o=l("defaultValue",e,t,n);return[await s.getHashTableById(r.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=l("tableHandle",e,t,n,s);return[s.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i1=(e,t,n,s=ct)=>{switch(e.op){case"ResizeBilinear":{const r=l("images",e,t,n),a=l("size",e,t,n),o=l("alignCorners",e,t,n),i=l("halfPixelCenters",e,t,n);return[s.image.resizeBilinear(r,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const r=l("images",e,t,n),a=l("size",e,t,n),o=l("alignCorners",e,t,n),i=l("halfPixelCenters",e,t,n);return[s.image.resizeNearestNeighbor(r,[a[0],a[1]],o,i)]}case"CropAndResize":{const r=l("image",e,t,n),a=l("boxes",e,t,n),o=l("boxInd",e,t,n),i=l("cropSize",e,t,n),u=l("method",e,t,n),c=l("extrapolationValue",e,t,n);return[s.image.cropAndResize(r,a,o,i,u,c)]}case"ImageProjectiveTransformV3":{const r=l("images",e,t,n),a=l("transforms",e,t,n),o=l("outputShape",e,t,n),i=l("fillValue",e,t,n),u=l("interpolation",e,t,n),c=l("fillMode",e,t,n);return[s.image.transform(r,a,u.toLowerCase(),c.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u1=(e,t,n,s=ct)=>{switch(e.op){case"Equal":return[s.equal(l("a",e,t,n),l("b",e,t,n))];case"NotEqual":return[s.notEqual(l("a",e,t,n),l("b",e,t,n))];case"Greater":return[s.greater(l("a",e,t,n),l("b",e,t,n))];case"GreaterEqual":return[s.greaterEqual(l("a",e,t,n),l("b",e,t,n))];case"Less":return[s.less(l("a",e,t,n),l("b",e,t,n))];case"LessEqual":return[s.lessEqual(l("a",e,t,n),l("b",e,t,n))];case"LogicalAnd":return[s.logicalAnd(l("a",e,t,n),l("b",e,t,n))];case"LogicalNot":return[s.logicalNot(l("a",e,t,n))];case"LogicalOr":return[s.logicalOr(l("a",e,t,n),l("b",e,t,n))];case"Select":case"SelectV2":return[s.where(l("condition",e,t,n),l("a",e,t,n),l("b",e,t,n))];case"BitwiseAnd":return[s.bitwiseAnd(l("a",e,t,n),l("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c1=(e,t,n,s=ct)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul(l("a",e,t,n),l("b",e,t,n),l("transposeA",e,t,n),l("transposeB",e,t,n))];case"Einsum":return[s.einsum(l("equation",e,t,n),...l("tensors",e,t,n))];case"Transpose":return[s.transpose(l("x",e,t,n),l("perm",e,t,n))];case"_FusedMatMul":const[r,a]=l("fusedOps",e,t,n),o=r==="biasadd",i=a==="prelu",u=l("numArgs",e,t,n),c=l("leakyreluAlpha",e,t,n);if(o){if(i&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[h,p]=l("args",e,t,n);return[s.fused.matMul({a:l("a",e,t,n),b:l("b",e,t,n),transposeA:l("transposeA",e,t,n),transposeB:l("transposeB",e,t,n),bias:h,activation:a,preluActivationWeights:p,leakyreluAlpha:c})];case"MatrixBandPart":return[s.linalg.bandPart(l("a",e,t,n),l("numLower",e,t,n),l("numUpper",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l1=(e,t,n,s=ct)=>{switch(e.op){case"EuclideanNorm":return[s.euclideanNorm(l("x",e,t,n),l("axis",e,t,n),l("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[s.batchNorm(l("x",e,t,n),l("mean",e,t,n),l("variance",e,t,n),l("offset",e,t,n),l("scale",e,t,n),l("epsilon",e,t,n))];case"FusedBatchNormV3":return[s.batchNorm(l("x",e,t,n),l("mean",e,t,n),l("variance",e,t,n),l("offset",e,t,n),l("scale",e,t,n),l("epsilon",e,t,n))];case"LRN":return[s.localResponseNormalization(l("x",e,t,n),l("radius",e,t,n),l("bias",e,t,n),l("alpha",e,t,n),l("beta",e,t,n))];case"Softmax":return[s.softmax(l("x",e,t,n))];case"LogSoftmax":return[s.logSoftmax(l("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h1=(e,t,n,s=ct)=>{switch(e.op){case"RaggedGather":{const{outputNestedSplits:r,outputDenseValues:a}=s.raggedGather(l("paramsNestedSplits",e,t,n),l("paramsDenseValues",e,t,n),l("indices",e,t,n),l("outputRaggedRank",e,t,n));return r.concat(a)}case"RaggedRange":{const{rtNestedSplits:r,rtDenseValues:a}=s.raggedRange(l("starts",e,t,n),l("limits",e,t,n),l("splits",e,t,n));return[r,a]}case"RaggedTensorToTensor":return[s.raggedTensorToTensor(l("shape",e,t,n),l("values",e,t,n),l("defaultValue",e,t,n),l("rowPartitionTensors",e,t,n),l("rowPartitionTypes",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p1=(e,t,n,s=ct)=>{switch(e.op){case"Max":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.max(l("x",e,t,n),i,u)]}case"Mean":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.mean(l("x",e,t,n),i,u)]}case"Min":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.min(l("x",e,t,n),i,u)]}case"Sum":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.sum(l("x",e,t,n),i,u)]}case"All":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.all(l("x",e,t,n),i,u)]}case"Any":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.any(l("x",e,t,n),i,u)]}case"ArgMax":{const i=l("axis",e,t,n);return[s.argMax(l("x",e,t,n),i)]}case"ArgMin":{const i=l("axis",e,t,n);return[s.argMin(l("x",e,t,n),i)]}case"Prod":{const i=l("axis",e,t,n),u=l("keepDims",e,t,n);return[s.prod(l("x",e,t,n),i,u)]}case"Cumprod":{const i=l("axis",e,t,n),u=l("exclusive",e,t,n),c=l("reverse",e,t,n);return[s.cumprod(l("x",e,t,n),i,u,c)]}case"Cumsum":{const i=l("axis",e,t,n),u=l("exclusive",e,t,n),c=l("reverse",e,t,n);return[s.cumsum(l("x",e,t,n),i,u,c)]}case"Bincount":const r=l("x",e,t,n),a=l("weights",e,t,n),o=l("size",e,t,n);return[s.bincount(r,a,o)];case"DenseBincount":{const i=l("x",e,t,n),u=l("weights",e,t,n),c=l("size",e,t,n),h=l("binaryOutput",e,t,n);return[s.denseBincount(i,u,c,h)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f1=(e,t,n,s=ct)=>{switch(e.op){case"ConcatV2":case"Concat":{const r=l("n",e,t,n),a=l("axis",e,t,n);let o=l("tensors",e,t,n);return o=o.slice(0,r),[s.concat(o,a)]}case"Gather":{const r=l("x",e,t,n),a=l("indices",e,t,n);return[s.gather(r,s.cast(a,"int32"),0)]}case"GatherV2":{const r=l("axis",e,t,n),a=l("batchDims",e,t,n),o=l("x",e,t,n),i=l("indices",e,t,n);return[s.gather(o,s.cast(i,"int32"),r,a)]}case"Reverse":{const r=l("dims",e,t,n),a=[];for(let i=0;i<r.length;i++)r[i]&&a.push(i);const o=l("x",e,t,n);return[s.reverse(o,a)]}case"ReverseV2":{const r=l("axis",e,t,n),a=l("x",e,t,n);return[s.reverse(a,r)]}case"Slice":{const r=l("begin",e,t,n),a=l("size",e,t,n);return[s.slice(l("x",e,t,n),r,a)]}case"StridedSlice":{const r=l("begin",e,t,n),a=l("end",e,t,n),o=l("strides",e,t,n),i=l("beginMask",e,t,n),u=l("endMask",e,t,n),c=l("ellipsisMask",e,t,n),h=l("newAxisMask",e,t,n),p=l("shrinkAxisMask",e,t,n),f=l("x",e,t,n);return[s.stridedSlice(f,r,a,o,i,u,c,h,p)]}case"Pack":return W(()=>{const r=l("axis",e,t,n),a=l("tensors",e,t,n),o=a[0].shape,i=s.squeeze(a[0]).shape,u=a.map(c=>{const h=Rt(c.shape,o);if(!h&&!Rt(s.squeeze(c).shape,i))throw new Error("the input tensors shape does not match");return h?c:s.reshape(c,o)});return[s.stack(u,r)]});case"Unpack":{const r=l("axis",e,t,n),a=l("tensor",e,t,n);return s.unstack(a,r)}case"Tile":{const r=l("reps",e,t,n);return[s.tile(l("x",e,t,n),r)]}case"Split":case"SplitV":{const r=l("axis",e,t,n),a=l("numOrSizeSplits",e,t,n),o=l("x",e,t,n);return s.split(o,a,r)}case"ScatterNd":{const r=l("indices",e,t,n),a=l("values",e,t,n),o=l("shape",e,t,n);return[s.scatterND(r,a,o)]}case"GatherNd":{const r=l("x",e,t,n),a=l("indices",e,t,n);return[s.gatherND(r,a)]}case"SparseToDense":{const r=l("sparseIndices",e,t,n),a=l("outputShape",e,t,n),o=l("sparseValues",e,t,n),i=l("defaultValue",e,t,n);return[s.sparseToDense(r,o,a,o.dtype===i.dtype?i:s.cast(i,o.dtype))]}case"TensorScatterUpdate":{const r=l("indices",e,t,n),a=l("values",e,t,n),o=l("tensor",e,t,n);return[s.tensorScatterUpdate(o,r,a)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m1=(e,t,n,s=ct)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:r,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=s.sparse.sparseFillEmptyRows(l("indices",e,t,n),l("values",e,t,n),l("denseShape",e,t,n),l("defaultValue",e,t,n));return[r,a,o,i]}case"SparseReshape":{const{outputIndices:r,outputShape:a}=s.sparse.sparseReshape(l("inputIndices",e,t,n),l("inputShape",e,t,n),l("newShape",e,t,n));return[r,a]}case"SparseSegmentMean":return[s.sparse.sparseSegmentMean(l("data",e,t,n),l("indices",e,t,n),l("segmentIds",e,t,n))];case"SparseSegmentSum":return[s.sparse.sparseSegmentSum(l("data",e,t,n),l("indices",e,t,n),l("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d1=(e,t,n,s=ct)=>{switch(e.op){case"FFT":return[s.fft(l("x",e,t,n))];case"IFFT":return[s.ifft(l("x",e,t,n))];case"RFFT":return[s.rfft(l("x",e,t,n))];case"IRFFT":return[s.irfft(l("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g1=(e,t,n,s=ct)=>{switch(e.op){case"StaticRegexReplace":return[s.string.staticRegexReplace(l("input",e,t,n),l("pattern",e,t,n),l("rewrite",e,t,n),l("replaceGlobal",e,t,n))];case"StringNGrams":{const{nGrams:r,nGramsSplits:a}=s.string.stringNGrams(l("data",e,t,n),l("dataSplits",e,t,n),l("separator",e,t,n),l("nGramWidths",e,t,n),l("leftPad",e,t,n),l("rightPad",e,t,n),l("padWidth",e,t,n),l("preserveShortSequences",e,t,n));return[r,a]}case"StringSplit":{const{indices:r,values:a,shape:o}=s.string.stringSplit(l("input",e,t,n),l("delimiter",e,t,n),l("skipEmpty",e,t,n));return[r,a,o]}case"StringToHashBucketFast":return[s.string.stringToHashBucketFast(l("input",e,t,n),l("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y1=(e,t,n,s=ct)=>{switch(e.op){case"Cast":return[s.cast(l("x",e,t,n),l("dtype",e,t,n))];case"ExpandDims":{const r=l("axis",e,t,n);return[s.expandDims(l("x",e,t,n),r)]}case"Squeeze":{const r=l("axis",e,t,n);return[s.squeeze(l("x",e,t,n),r)]}case"Reshape":return[s.reshape(l("x",e,t,n),l("shape",e,t,n))];case"EnsureShape":return[s.ensureShape(l("x",e,t,n),l("shape",e,t,n))];case"MirrorPad":return[s.mirrorPad(l("x",e,t,n),l("padding",e,t,n),l("mode",e,t,n))];case"PadV2":case"Pad":return[s.pad(l("x",e,t,n),l("padding",e,t,n),l("constantValue",e,t,n))];case"SpaceToBatchND":{const r=l("blockShape",e,t,n),a=l("paddings",e,t,n);return[s.spaceToBatchND(l("x",e,t,n),r,a)]}case"BatchToSpaceND":{const r=l("blockShape",e,t,n),a=l("crops",e,t,n);return[s.batchToSpaceND(l("x",e,t,n),r,a)]}case"DepthToSpace":{const r=l("blockSize",e,t,n),a=l("dataFormat",e,t,n).toUpperCase();return[s.depthToSpace(l("x",e,t,n),r,a)]}case"BroadcastTo":return[s.broadcastTo(l("x",e,t,n),l("shape",e,t,n))];case"BroadcastArgs":return[s.broadcastArgs(l("s0",e,t,n),l("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vr(e,t,n,s,r=W){const a=((o,i,u)=>{switch(o.category){case"arithmetic":return r(()=>M0(o,i,u));case"basic_math":return r(()=>K0(o,i,u));case"control":return Q0(o,i,u);case"convolution":return r(()=>t1(o,i,u));case"creation":return r(()=>e1(o,i,u));case"dynamic":return n1(o,i,u);case"evaluation":return r(()=>s1(o,i,u));case"image":return r(()=>i1(o,i,u));case"graph":return r(()=>r1(o,i,u));case"logical":return r(()=>u1(o,i,u));case"matrices":return r(()=>c1(o,i,u));case"normalization":return r(()=>l1(o,i,u));case"ragged":return r(()=>h1(o,i,u));case"reduction":return r(()=>p1(o,i,u));case"slice_join":return r(()=>f1(o,i,u));case"sparse":return r(()=>m1(o,i,u));case"spectral":return r(()=>d1(o,i,u));case"string":return r(()=>g1(o,i,u));case"transformation":return r(()=>y1(o,i,u));case"hash_table":return o1(o,i,u,s);case"custom":const c=Io(o.op);if(c&&c.customExecutor)return c.customExecutor(new G0(o,i,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return Yt(a)?a.then(o=>[].concat(o)):[].concat(a)}class Ur{constructor(t={},n={},s={},r={},a){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=s,this.functionMap=r,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const s=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(s))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jr(e,t,n,s){const r=new Set,a=[];let o=null,i=null;const u=new Set,c=new Set(Object.keys(e).map(f=>wt(f)[0]));s=s||[];const h=new Set(s.map(f=>wt(f.name)[0])),p=[...t];for(;p.length>0;){const f=p.pop();if((ie(f)||k1(f)||E1(f))&&o==null&&(o=f,i=o.children.map(d=>d.name).filter(d=>r.has(d))),r.add(f.name),n[f.name]==null&&!c.has(f.name)&&!h.has(f.name)){if(f.inputs.length===0){a.push(f.name);continue}f.inputs.forEach(d=>{u.has(d.name)||(u.add(d.name),p.push(d))})}}return{inputs:e,outputs:t,usedNodes:r,missingInputs:a,dynamicNode:o,syncInputs:i}}function b1(e,t){const{usedNodes:n,inputs:s}=t,r=Object.keys(s).map(T=>wt(T)[0]).map(T=>e.nodes[T]),a=e.initNodes||[],o=T=>n.has(typeof T=="string"?T:T.name);function i(T){return[...new Map(T.map($=>[$.name,$])).values()]}const u=i([...r,...e.weights,...a]).filter(o),c=i([...u,...Object.values(e.nodes)]).filter(o),h=new Map(c.map(T=>[T.name,T])),p={};for(const T of c){p[T.name]=p[T.name]||0;for(const $ of T.children)o($)||(p[$.name]=Number.POSITIVE_INFINITY),p[$.name]=(p[$.name]||0)+1}const f=Object.entries(p).filter(([,T])=>T===0).map(([T])=>T),d=[...f];for(;f.length>0;){const T=f.pop(),$=h.get(T);for(const I of $.children.filter(o))--p[I.name]===0&&(d.push(I.name),f.push(I.name))}const b=d.map(T=>h.get(T)),S=w1(b,u);return N1(S,u),S}function w1(e,t){const n=new Map(e.map(o=>[o.name,o])),s=t.map(o=>o.name),r=new Set(s);for(;s.length>0;){const o=s.pop(),i=n.get(o);for(const u of i.children)!n.has(u.name)||r.has(u.name)||(r.add(u.name),s.push(u.name))}return e.filter(o=>r.has(o.name))}class cn extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}function N1(e,t){const n=new Map(e.map((i,u)=>[i.name,u])),s=new Set(t.map(i=>i.name)),r=i=>s.has(typeof i=="string"?i:i.name),a=new Set(e.map(i=>i.name)),o=i=>a.has(typeof i=="string"?i:i.name);for(const i of e){for(const u of i.children.filter(o)){if(!n.has(u.name))throw new cn(`Child ${u.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(u.name))throw new cn(`Node ${i.name} is scheduled to run after its child ${u.name}.`)}if(!r(i))for(const u of i.inputs){if(!n.has(u.name))throw new cn(`Input ${u.name} of node ${i.name} is unreachable.`);if(n.get(u.name)>n.get(i.name))throw new cn(`Node ${i.name} is scheduled to run before its input ${u.name}.`)}}}function T1(e){const t=new Map(e.map((i,u)=>[i.name,u])),n=Number.MAX_SAFE_INTEGER,s=e.map((i,u)=>ie(i)?n:u),r=i=>{const u=s[t.get(i.name)];return u??-1},a=e.map((i,u)=>i.children.map(r).reduce((c,h)=>Math.max(c,h),s[u])),o=new Map;for(let i=0;i<e.length;++i){const u=a[i];if(u===n)continue;const c=e[i],h=e[u];o.has(h.name)||o.set(h.name,[]),o.get(h.name).push(c)}return o}const S1=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),$1=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),v1=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function ie(e){return S1.has(e.op)}function k1(e){return $1.has(e.op)}function E1(e){return v1.has(e.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fn{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(s=>t[s].map(r=>r.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(s=>{this._functionExecutorMap[s]=new Fn(t.functions[s],this)})}getCompilationKey(t,n){const s=t.map(a=>a.name).sort(),r=n.map(a=>a.name).sort();return s.join(this.SEPARATOR)+"--"+r.join(this.SEPARATOR)}compile(t,n){const s=jr(t,n,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:o}=s;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(r.length>0){const c=n.map(p=>p.name),h=Object.keys(t);throw new Error(`Cannot compute the outputs [${c}] from the provided inputs [${h}]. Missing the following inputs: [${r}]`)}const i=b1(this.graph,s),u=T1(i);return{orderedNodes:i,nodeLiveUntilMap:u}}cloneAndKeepTensor(t){if(t==null)return null;const n=t.clone();return Ot(n),n}cloneTensorList(t){return t?t.map(s=>this.cloneAndKeepTensor(s)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([n,s])=>[n,this.cloneTensorList(s)]))}execute(t,n){this.disposeIntermediateTensors(),t=this.mapInputs(t);const s=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const r=s.map(f=>this.graph.nodes[wt(f)[0]]),a=n.map(f=>wt(f)[0]),o=new Set(a);let i=a.map(f=>this.graph.nodes[f]);i.length===0&&(i=this._outputs);const u=this.getCompilationKey(r,i);let c=this.compiledMap.get(u);c==null&&(c=this.compile(t,i),this.compiledMap.set(u,c));try{this.keepIntermediateTensors=z().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const h={},p={};return W(()=>{const f=new Ur(this.weightMap,h,p,this.functionExecutorMap,this.parseNodeNameCache),d=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach($=>{const[I,F]=wt($,f),_=[];_[F]=t[$],d[I]=_,this.keepIntermediateTensors&&(this.clonedTensorsMap[I]=this.cloneTensorList(_))});const b=this.getFrozenTensorIds(d),{orderedNodes:S,nodeLiveUntilMap:T}=c;for(const $ of S){if(d[$.name])continue;const I=Vr($,d,f,this._resourceManager);if(Yt(I))throw new Error(`The execution of the op '${$.op}' returned a promise. Please use model.executeAsync() instead.`);d[$.name]=I,this.keepIntermediateTensors&&(this.clonedTensorsMap[$.name]=this.cloneTensorList(I)),this.checkTensorForDisposalWithNodeLiveUntilInfo($,d,f,b,o,T.get($.name))}return this.parent==null&&f.dispose(b),n.map($=>ut($,d,f))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(s=>t[s]).map(s=>s.map(r=>r.id)));return new Set(n)}checkTensorForDisposal(t,n,s,r,a,o,i){if(!(ie(n)||o.has(t))){for(const u of s[t])u!=null&&(i[u.id]=(i[u.id]||0)+n.children.length);for(const u of n.inputs){if(ie(u))continue;const c=Rr(u.name,s,r);if(c!=null)for(const h of c){if(!h||h.kept||a.has(h.id))continue;const p=i[h.id];p===1?(h.dispose(),delete i[h.id]):p!=null&&i[h.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,n,s,r,a,o){function i(u){return ie(u)||a.has(u.name)}if(!(ie(t)||o==null))for(const u of o){if(i(u))continue;const c=Rr(u.name,n,s);for(const h of c)!h||h.kept||r.has(h.id)||h.dispose()}}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(const n of t)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,n,s=!1,r={},a={}){this.disposeIntermediateTensors(),s||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=z().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const o=new Ur(this.weightMap,r,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const i=await this.executeWithControlFlow(t,o,n,s),u=n.map(f=>ut(f,i,o)),c=u.map(f=>f.id),h=Object.keys(t).map(f=>t[f].id),p=new Set([...c,...h,...this.weightIds]);return Object.values(i).forEach(f=>{f.forEach(d=>{d&&!d.isDisposed&&!p.has(d.id)&&d.dispose()})}),this.parent==null&&o.dispose(p),u}async executeFunctionAsync(t,n,s){const r=t.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(r,this.outputNodes,!0,n,s)}async executeWithControlFlow(t,n,s,r){const a=Object.keys(t),o=a.map(_=>this.graph.nodes[wt(_)[0]]),i=s.map(_=>wt(_)[0]),u=new Set(i);let c=i.map(_=>this.graph.nodes[_]);c.length===0&&(c=this._outputs);const{usedNodes:h,missingInputs:p,dynamicNode:f,syncInputs:d}=jr(t,c,this.weightMap,this._initNodes),b=[...o,...this.graph.weights,...this._initNodes||[]].map(_=>({node:_,contexts:n.currentContext})),S=Object.assign({},this.weightMap);Object.keys(t).forEach(_=>{const[A,O]=wt(_),B=[];B[O]=t[_],S[A]=B});const T={},$=this.getFrozenTensorIds(S),I={};for(;b.length>0;){const _=this.processStack(o,b,n,S,I,$,u,T,h);await Promise.all(_)}f==null&&!r&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const F=c.filter(_=>!ie(_)&&!ut(_.name,S,n)).map(_=>_.name);if(F.length>0){let _="";throw f!=null&&(_=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),new Error(`Cannot compute the outputs [${F}] from the provided inputs [${a}]. Consider providing the following inputs: [${p}]. ${_}`)}return S}processStack(t,n,s,r,a,o,i,u,c){const h=[];for(;n.length>0;){const p=n.pop();s.currentContext=p.contexts;let f="";if(p.node.op==="Enter"&&l("isConstant",p.node,r,s)&&([f]=Bt(p.node.name,s)),r[p.node.name]==null){const d=Vr(p.node,r,s,this._resourceManager);f||([f]=Bt(p.node.name,s));const b=s.currentContext;Yt(d)?h.push(d.then(S=>(r[f]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(S)),s.currentContext=b,this.checkTensorForDisposal(f,p.node,r,s,o,i,u),this.processChildNodes(p.node,n,s,r,a,c),S))):(r[f]=d,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(d)),this.checkTensorForDisposal(f,p.node,r,s,o,i,u),this.processChildNodes(p.node,n,s,r,a,c))}else this.processChildNodes(p.node,n,s,r,a,c)}return h}processChildNodes(t,n,s,r,a,o){t.children.forEach(i=>{const[u]=Bt(i.name,s);a[u]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(c=>!!ut(c,r,s))&&(a[u]=!0,n.push({contexts:s.currentContext,node:i})):i.inputNames.every(c=>!!ut(c,r,s))&&(a[u]=!0,n.push({contexts:s.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const s=t[n],[r]=wt(n),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===s.shape.length&&s.shape.every((u,c)=>o[c]===-1||o[c]===u);g(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${s.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&g(s.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${s.dtype}`)})}mapInputs(t){var n,s;const r={};for(const a in t){const o=(s=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||s===void 0?void 0:s[a];o!=null?r[o.name]=t[a]:r[a]=t[a]}return r}checkInputs(t){const n=Object.keys(t).filter(s=>{const[r]=wt(s);return this.graph.nodes[r]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>{var s,r;const a=(r=(s=this._signature)===null||s===void 0?void 0:s.outputs)===null||r===void 0?void 0:r[n];return a!=null?a.name:n},{})}checkOutputs(t){t.forEach(n=>{const[s]=wt(n);if(!this.graph.nodes[s])throw new Error(`The output '${n}' is not found in the graph`)})}}class _1{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x1="?tfjs-format=file",I1="model.json";class Oo{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,n={},s=Eo){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=s,n==null&&(this.loadOptions={}),this.resourceManager=new _1}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return Yt(t)?t.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(t)}loadSync(t){const n=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,n)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await va(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,n)}loadWithWeightMap(t,n){this.artifacts=t;const s=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=r,this.version=`${s.versions.producer}.${s.versions.minConsumer}`,this.executor=new Fn(Br.Instance.transformGraph(s,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const a=Br.Instance.transformGraph(t.modelInitializer);this.initializer=new Fn(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,n){if(typeof t=="string"){const s=this.io.getSaveHandlers(t);if(s.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(s.length>1)throw new Error(`Found more than one (${s.length}) save handlers for URL '${t}'`);t=s[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const n=t instanceof st?[t]:t,s={};return n.forEach((r,a)=>s[this.structuredOutputKeys[a]]=r),s}return t}predict(t,n){const s=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(s)}async predictAsync(t,n){const s=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(s)}normalizeInputs(t){var n;if(!(t instanceof st)&&!Array.isArray(t)){const a=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(a!=null)for(const o in a){const i=a[o];i.resourceId!=null&&(t[o]=this.resourceIdToCapturedInput[i.resourceId])}return t}t=Array.isArray(t)?t:[t];const s=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+s!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-s} non-resource placeholders, while there are ${t.length} input tensors provided.`);let r=0;return this.inputNodes.reduce((a,o)=>{var i,u,c;const h=(c=(u=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||u===void 0?void 0:u[o])===null||c===void 0?void 0:c.resourceId;return h!=null?a[o]=this.resourceIdToCapturedInput[h]:a[o]=t[r++],a},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,s=Object.keys(n);for(let r=0;r<s.length;r++){const a=s[r],o=n[a];this.resourceIdToCapturedInput[o.resourceId]=t[r]}}}execute(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=this.executor.execute(t,n);return s.length>1?s:s[0]}async executeAsync(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=await this.executor.executeAsync(t,n);return s.length>1?s:s[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,s)=>(n[s]=[t[s]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&dt(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function VN(e,t={},n=Eo){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=A1(e));const s=new Oo(e,t,n);return await s.load(),s}function UN(e){if(e==null)throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");let t;if(e instanceof Array){const[s,r]=e;if(!s)throw new Error("modelJSON must be the first element of the array");if(!r||!(r instanceof ArrayBuffer))throw new Error("An ArrayBuffer of weights must be the second element of the array");if(!("modelTopology"in s))throw new Error("Model JSON is missing 'modelTopology'");if(!("weightsManifest"in s))throw new Error("Model JSON is missing 'weightsManifest'");const a=kn(s.weightsManifest),o=Ls(s,a,r);t=Dn(o)}else if("load"in e)t=e;else if("modelTopology"in e&&"weightSpecs"in e&&"weightData"in e)t=Dn(e);else throw new Error("Unknown model format");const n=new Oo(t);return n.load(),n}function A1(e){return e.endsWith("/")||(e=e+"/"),`${e}${I1}${x1}`}export{En as $,_w as A,Dt as B,Sf as C,Pn as D,N as E,jh as F,Ra as G,$N as H,EN as I,Uh as J,vN as K,Kh as L,Iw as M,ne as N,Vn as O,xN as P,uf as Q,Aw as R,To as S,Zs as T,Ys as U,AN as V,Va as W,IN as X,Z1 as Y,tr as Z,Oe as _,vt as a,ji as a$,fa as a0,Xs as a1,fo as a2,ae as a3,ab as a4,ob as a5,ib as a6,ay as a7,ci as a8,D as a9,vi as aA,ki as aB,ro as aC,R1 as aD,na as aE,Ii as aF,Ai as aG,Xt as aH,_n as aI,Ha as aJ,Us as aK,Oi as aL,Fi as aM,Ze as aN,Ye as aO,Ci as aP,ky as aQ,za as aR,Bi as aS,zn as aT,B1 as aU,Pi as aV,Up as aW,zi as aX,gg as aY,Vi as aZ,bg as a_,ho as aa,li as ab,It as ac,Vt as ad,U as ae,j as af,Ct as ag,X as ah,hi as ai,ea as aj,H as ak,E as al,pi as am,di as an,$t as ao,gi as ap,yi as aq,bi as ar,L as as,Ti as at,wi as au,Ni as av,C1 as aw,$i as ax,F1 as ay,Si as az,te as b,Xp as b$,Yp as b0,Mi as b1,Iy as b2,Dy as b3,Ji as b4,L1 as b5,P1 as b6,Qi as b7,z1 as b8,tu as b9,Du as bA,gs as bB,M1 as bC,Fu as bD,G1 as bE,Ou as bF,Ru as bG,ce as bH,Bu as bI,Pu as bJ,Lu as bK,K as bL,zu as bM,Ma as bN,Uu as bO,ju as bP,Hu as bQ,Fe as bR,Ku as bS,Xu as bT,we as bU,Ju as bV,Yu as bW,He as bX,Ke as bY,Zu as bZ,Qu as b_,me as ba,nu as bb,su as bc,ru as bd,uu as be,cu as bf,lu as bg,og as bh,Ve as bi,hu as bj,jt as bk,ey as bl,mu as bm,ra as bn,yu as bo,bu as bp,wu as bq,Nu as br,jn as bs,ku as bt,vu as bu,U1 as bv,q1 as bw,Iu as bx,Ua as by,Au as bz,Rt as c,pn as c$,Yi as c0,ac as c1,lc as c2,oc as c3,ic as c4,cc as c5,X1 as c6,uc as c7,H1 as c8,hc as c9,Ec as cA,jc as cB,qc as cC,aa as cD,Kn as cE,Kc as cF,Hc as cG,no as cH,Ka as cI,Wt as cJ,Xc as cK,Q1 as cL,pa as cM,St as cN,bh as cO,Nh as cP,vh as cQ,Eh as cR,xh as cS,Ah as cT,Oh as cU,Ch as cV,Bh as cW,Lh as cX,Vh as cY,Ba as cZ,Ln as c_,de as ca,pc as cb,fc as cc,yc as cd,Qa as ce,bc as cf,$c as cg,Sc as ch,Nc as ci,Gp as cj,Tc as ck,Kp as cl,wc as cm,rn as cn,Ic as co,vc as cp,Ee as cq,_c as cr,Pa as cs,xc as ct,pt as cu,kc as cv,J1 as cw,Rc as cx,Jc as cy,Uc as cz,m as d,Il as d$,Tp as d0,$p as d1,st as d2,Cp as d3,Pp as d4,ef as d5,Vs as d6,of as d7,ff as d8,df as d9,Dm as dA,Un as dB,so as dC,jm as dD,rd as dE,ao as dF,id as dG,Md as dH,Gn as dI,io as dJ,Tb as dK,$b as dL,Ks as dM,uo as dN,ug as dO,lg as dP,mg as dQ,xg as dR,Ya as dS,lo as dT,Hs as dU,zg as dV,Ug as dW,ms as dX,Xg as dY,Qg as dZ,qe as d_,ja as da,Tf as db,Df as dc,Rf as dd,Ms as de,Ca as df,An as dg,co as dh,Wf as di,Mf as dj,Hf as dk,Xa as dl,tm as dm,im as dn,lm as dp,Za as dq,Ja as dr,to as ds,gm as dt,eo as du,_e as dv,xn as dw,ds as dx,In as dy,Im as dz,Rs as e,ni as e$,W as e0,Eg as e1,vg as e2,Sg as e3,Ng as e4,_t as e5,oo as e6,Ry as e7,Dp as e8,Ip as e9,Sa as eA,qp as eB,bw as eC,_y as eD,zp as eE,Fm as eF,cp as eG,hp as eH,fp as eI,Tm as eJ,Yh as eK,Ft as eL,Xe as eM,Qp as eN,Yt as eO,Bs as eP,wl as eQ,qs as eR,Ue as eS,r0 as eT,ul as eU,Lo as eV,O1 as eW,pN as eX,Qo as eY,zt as eZ,Mr as e_,_p as ea,kp as eb,Ty as ec,Gs as ed,Yg as ee,Ga as ef,ww as eg,wo as eh,Gt as ei,No as ej,ry as ek,dt as el,z as em,Yr as en,Ot as eo,sn as ep,Ht as eq,Ne as er,qr as es,fN as et,ql as eu,Al as ev,Bl as ew,Wl as ex,Gw as ey,Uw as ez,Ae as f,mc as f$,ei as f0,Di as f1,Rn as f2,rc as f3,Bn as f4,Yo as f5,_i as f6,Ds as f7,eu as f8,fu as f9,le as fA,ti as fB,sa as fC,Zi as fD,au as fE,ou as fF,Qe as fG,iu as fH,cr as fI,lr as fJ,pu as fK,du as fL,$u as fM,Eu as fN,_u as fO,xu as fP,Cu as fQ,Vu as fR,Wu as fS,Gu as fT,Mu as fU,ft as fV,tc as fW,ec as fX,nc as fY,sc as fZ,Yc as f_,Tu as fa,Su as fb,ol as fc,qu as fd,rs as fe,Bc as ff,al as fg,Tn as fh,TN as fi,Jo as fj,ur as fk,fi as fl,mi as fm,Ei as fn,xi as fo,gu as fp,Ri as fq,Li as fr,qi as fs,Ui as ft,Os as fu,Wi as fv,Gi as fw,Ki as fx,Hi as fy,Xi as fz,g,bm as g$,gc as g0,Ac as g1,Dc as g2,Oc as g3,Fc as g4,Cc as g5,Pc as g6,Lc as g7,zc as g8,Vc as g9,dr as gA,mt as gB,Ut as gC,DN as gD,ON as gE,FN as gF,CN as gG,sm as gH,si as gI,Qr as gJ,Nw as gK,gw as gL,By as gM,yw as gN,Tw as gO,Sw as gP,Sh as gQ,rp as gR,La as gS,gp as gT,bp as gU,Zt as gV,rf as gW,$e as gX,wf as gY,qn as gZ,Zf as g_,dc as ga,Wc as gb,Gc as gc,Mc as gd,Zc as ge,Ko as gf,ze as gg,Uo as gh,Gr as gi,kl as gj,Xo as gk,jo as gl,Sn as gm,wa as gn,xe as go,rN as gp,ir as gq,PN as gr,Eo as gs,BN as gt,sN as gu,kN as gv,aN as gw,RN as gx,oN as gy,vn as gz,Vm as h,K1 as h$,$m as h0,Em as h1,Rm as h2,Pm as h3,Wm as h4,Km as h5,Xm as h6,Ym as h7,Qm as h8,Fa as h9,by as hA,go as hB,Js as hC,$y as hD,iN as hE,uN as hF,cN as hG,lN as hH,hN as hI,mN as hJ,dN as hK,gN as hL,yN as hM,xl as hN,bN as hO,wN as hP,NN as hQ,SN as hR,$n as hS,hr as hT,es as hU,tN as hV,eN as hW,nN as hX,V1 as hY,j1 as hZ,W1 as h_,cd as ha,hd as hb,fd as hc,dd as hd,Pd as he,Vd as hf,qd as hg,Je as hh,Yd as hi,Qd as hj,eg as hk,sg as hl,pg as hm,po as hn,jg as ho,qg as hp,Wg as hq,Kg as hr,sy as hs,mo as ht,Ta as hu,uy as hv,hy as hw,fy as hx,js as hy,gy as hz,Cn as i,Y1 as i0,Oo as i1,VN as i2,UN as i3,zN as i4,LN as i5,n0 as i6,et as j,tn as k,Vo as l,G as m,kw as n,w as o,xw as p,Ew as q,Zo as r,Z as s,ys as t,ss as u,Qs as v,rt as w,_N as x,qa as y,Gg as z};
