var w=Object.defineProperty;var u=(i,e,s)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var n=(i,e,s)=>u(i,typeof e!="symbol"?e+"":e,s);import{G as f,F as g,S as y,P as v,C as M,R as L,V as S,W as P,a as b,A as x,D as A,M as p,B as R,b as C,L as E,c as m,d as N,O as W,i as j,e as z,g as G,f as O,N as B,r as h,j as d,h as D}from"./vendor-D1DVVxkP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const F=""+new URL("game_map-DLxz9SvN.glb",import.meta.url).href;function k(i){return new Worker(""+new URL("navmesh-worker-BP4z7qqj.js",import.meta.url).href,{type:"module",name:i==null?void 0:i.name})}const H=new f;new g;class q{constructor(e){n(this,"canvas");n(this,"renderer");n(this,"scene",new y);n(this,"camera",new v(60,window.innerWidth/window.innerHeight,.1,1e3));n(this,"mapScene");n(this,"controls");n(this,"player");n(this,"playerAgent");n(this,"navMesh");n(this,"crowd");n(this,"pathLine");n(this,"clock",new M(!0));n(this,"initNavMesh",async()=>new Promise(async e=>{console.time("init recast"),await j(),console.timeEnd("init recast");const s={cs:.2,ch:.5,tileSize:64,walkableSlopeAngle:35,walkableHeight:1,walkableClimb:1,walkableRadius:1,maxEdgeLen:12,maxSimplificationError:1.3,minRegionArea:8,mergeRegionArea:20,maxVertsPerPoly:6,detailSampleDist:6,detailSampleMaxError:1},r=new k;r.onmessage=c=>{console.timeEnd("Generate NavMesh");const l=c.data;this.navMesh=z(l).navMesh,e()};const t=[];this.mapScene.traverse(c=>{c instanceof p&&t.push(c)});const[a,o]=G(t);console.time("Generate NavMesh"),r.postMessage({positions:a,indices:o,config:s},[a.buffer,o.buffer])}));n(this,"initCrowd",async()=>{this.crowd=new O(this.navMesh,{maxAgents:10,maxAgentRadius:1});const e={x:0,y:0,z:0},s=2,r=new B(this.navMesh),{success:t,status:a,randomPolyRef:o,randomPoint:c}=r.findRandomPointAroundCircle(e,s);this.playerAgent=this.crowd.addAgent(c,{radius:.5,height:1,maxSpeed:6,maxAcceleration:20,collisionQueryRange:.5,pathOptimizationRange:0,separationWeight:1})});n(this,"onUpdate",()=>{var s;const e=this.clock.getDelta();this.renderer.render(this.scene,this.camera),(s=this.crowd)==null||s.update(e),this.playerAgent&&(this.player.position.copy(this.playerAgent.position()),this.updatePath()),this.controls.update()});this.canvas=e,this.start()}async start(){this.initScene(),await this.addMap(),await this.initNavMesh(),await this.initCrowd(),this.renderer.setAnimationLoop(this.onUpdate);const e=new L,s=new S;this.canvas.addEventListener("mousedown",r=>{if(r.button!==2)return;const{clientX:t,clientY:a}=r,o=this.canvas.getBoundingClientRect();s.x=(t-o.left)/this.canvas.offsetWidth*2-1,s.y=-((a-o.top)/this.canvas.offsetHeight)*2+1,e.setFromCamera(s,this.camera);const c=e.intersectObject(this.mapScene);if(c.length>0){const l=c[0].point;this.playerAgent.requestMoveTarget(l)}})}initScene(){const e=this.renderer=new P({canvas:this.canvas,powerPreference:"high-performance",antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0,e.shadowMap.type=b;const s=()=>{e.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()};s(),window.addEventListener("resize",s),this.camera.position.set(-10,20,15);const r=new x(16777215,2);this.scene.add(r);const t=new A(16777215,6);t.castShadow=!0,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.bias=-1e-4,t.shadow.mapSize.set(4096,4096),t.position.set(5,5,5),t.shadow.normalBias=.05,t.shadow.radius=100,t.position.set(50,200,50),this.scene.add(t),this.player=new p(new R(1,1,1),new C({color:16711680})),this.player.castShadow=!0,this.player.receiveShadow=!0,this.scene.add(this.player),this.pathLine=new E(new m,new N({color:255,linewidth:10})),this.scene.add(this.pathLine),this.controls=new W(this.camera,this.canvas),this.controls.target=this.player.position,this.controls.enableDamping=!0,this.controls.maxDistance=50,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.maxPolarAngle=Math.PI/2,this.controls.minPolarAngle=0}async addMap(){const e=await H.loadAsync(F);this.mapScene=e.scene,this.mapScene.scale.set(5,5,5),this.scene.add(e.scene),e.scene.traverse(s=>{s instanceof p&&(s.castShadow=!0,s.receiveShadow=!0)})}updatePath(){const e=[this.playerAgent.position(),...this.playerAgent.corners()];this.pathLine.geometry.dispose(),this.pathLine.geometry=new m,this.pathLine.geometry.setFromPoints(e)}destroy(){this.renderer.dispose()}}function I(){const i=h.useRef(null),e=h.useRef(null);return h.useEffect(()=>(e.current=new q(i.current),()=>{e.current.destroy()}),[]),d.jsx("div",{className:"app",children:d.jsx("canvas",{className:"gameCanvas",ref:i})})}D(document.getElementById("root")).render(d.jsx(h.StrictMode,{children:d.jsx(I,{})}));