var ye=Object.defineProperty;var Le=(s,e,t)=>e in s?ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var P=(s,e,t)=>Le(s,typeof e!="symbol"?e+"":e,t);const be=["Recast","Detour","DetourNavMeshBuilder","DetourTileCacheBuilder","NavMeshImporter","NavMeshExporter","CrowdUtils","ChunkyTriMeshUtils","RecastDebugDraw","DetourDebugDraw"],Oe=["rcConfig","rcContext","dtNavMeshParams","dtNavMeshCreateParams","RecastLinearAllocator","RecastFastLZCompressor","rcChunkyTriMesh","dtTileCacheParams","dtTileCacheLayerHeader","Vec3","BoolRef","IntRef","UnsignedIntRef","UnsignedCharRef","UnsignedShortRef","FloatRef","IntArray","UnsignedIntArray","UnsignedCharArray","UnsignedShortArray","FloatArray"],r={isNull:s=>r.Module.getPointer(s)===0,destroy:s=>{r.Module.destroy(s)}},n={},o={},Ne=async s=>{if(r.Module===void 0){{const e=(await import("./recast-navigation.wasm-compat-BsXgPnHX.js")).default;r.Module=await e()}for(const e of be)r[e]=new r.Module[e];for(const e of Oe)r[e]=r.Module[e];n.RC_BORDER_REG=r.Recast.BORDER_REG,n.RC_MULTIPLE_REGS=r.Recast.MULTIPLE_REGS,n.RC_BORDER_VERTEX=r.Recast.BORDER_VERTEX,n.RC_AREA_BORDER=r.Recast.AREA_BORDER,n.RC_CONTOUR_REG_MASK=r.Recast.CONTOUR_REG_MASK,n.RC_MESH_NULL_IDX=r.Recast.MESH_NULL_IDX,n.RC_NULL_AREA=r.Recast.NULL_AREA,n.RC_WALKABLE_AREA=r.Recast.WALKABLE_AREA,n.RC_NOT_CONNECTED=r.Recast.NOT_CONNECTED,n.RC_CONTOUR_TESS_WALL_EDGES=r.Module.RC_CONTOUR_TESS_WALL_EDGES,n.RC_CONTOUR_TESS_AREA_EDGES=r.Module.RC_CONTOUR_TESS_AREA_EDGES,n.RC_LOG_PROGRESS=r.Module.RC_LOG_PROGRESS,n.RC_LOG_WARNING=r.Module.RC_LOG_WARNING,n.RC_LOG_ERROR=r.Module.RC_LOG_ERROR,n.RC_TIMER_TOTAL=r.Module.RC_TIMER_TOTAL,n.RC_TIMER_TEMP=r.Module.RC_TIMER_TEMP,n.RC_TIMER_RASTERIZE_TRIANGLES=r.Module.RC_TIMER_RASTERIZE_TRIANGLES,n.RC_TIMER_BUILD_COMPACTHEIGHTFIELD=r.Module.RC_TIMER_BUILD_COMPACTHEIGHTFIELD,n.RC_TIMER_BUILD_CONTOURS=r.Module.RC_TIMER_BUILD_CONTOURS,n.RC_TIMER_BUILD_CONTOURS_TRACE=r.Module.RC_TIMER_BUILD_CONTOURS_TRACE,n.RC_TIMER_BUILD_CONTOURS_SIMPLIFY=r.Module.RC_TIMER_BUILD_CONTOURS_SIMPLIFY,n.RC_TIMER_FILTER_BORDER=r.Module.RC_TIMER_FILTER_BORDER,n.RC_TIMER_FILTER_WALKABLE=r.Module.RC_TIMER_FILTER_WALKABLE,n.RC_TIMER_MEDIAN_AREA=r.Module.RC_TIMER_MEDIAN_AREA,n.RC_TIMER_FILTER_LOW_OBSTACLES=r.Module.RC_TIMER_FILTER_LOW_OBSTACLES,n.RC_TIMER_BUILD_POLYMESH=r.Module.RC_TIMER_BUILD_POLYMESH,n.RC_TIMER_MERGE_POLYMESH=r.Module.RC_TIMER_MERGE_POLYMESH,n.RC_TIMER_ERODE_AREA=r.Module.RC_TIMER_ERODE_AREA,n.RC_TIMER_MARK_BOX_AREA=r.Module.RC_TIMER_MARK_BOX_AREA,n.RC_TIMER_MARK_CYLINDER_AREA=r.Module.RC_TIMER_MARK_CYLINDER_AREA,n.RC_TIMER_MARK_CONVEXPOLY_AREA=r.Module.RC_TIMER_MARK_CONVEXPOLY_AREA,n.RC_TIMER_BUILD_DISTANCEFIELD=r.Module.RC_TIMER_BUILD_DISTANCEFIELD,n.RC_TIMER_BUILD_DISTANCEFIELD_DIST=r.Module.RC_TIMER_BUILD_DISTANCEFIELD_DIST,n.RC_TIMER_BUILD_DISTANCEFIELD_BLUR=r.Module.RC_TIMER_BUILD_DISTANCEFIELD_BLUR,n.RC_TIMER_BUILD_REGIONS=r.Module.RC_TIMER_BUILD_REGIONS,n.RC_TIMER_BUILD_REGIONS_WATERSHED=r.Module.RC_TIMER_BUILD_REGIONS_WATERSHED,n.RC_TIMER_BUILD_REGIONS_EXPAND=r.Module.RC_TIMER_BUILD_REGIONS_EXPAND,n.RC_TIMER_BUILD_REGIONS_FLOOD=r.Module.RC_TIMER_BUILD_REGIONS_FLOOD,n.RC_TIMER_BUILD_REGIONS_FILTER=r.Module.RC_TIMER_BUILD_REGIONS_FILTER,n.RC_TIMER_BUILD_LAYERS=r.Module.RC_TIMER_BUILD_LAYERS,n.RC_TIMER_BUILD_POLYMESHDETAIL=r.Module.RC_TIMER_BUILD_POLYMESHDETAIL,n.RC_TIMER_MERGE_POLYMESHDETAIL=r.Module.RC_TIMER_MERGE_POLYMESHDETAIL,n.RC_MAX_TIMERS=r.Module.RC_MAX_TIMERS,o.DT_FAILURE=r.Detour.FAILURE,o.DT_SUCCESS=r.Detour.SUCCESS,o.DT_IN_PROGRESS=r.Detour.IN_PROGRESS,o.DT_STATUS_DETAIL_MASK=r.Detour.STATUS_DETAIL_MASK,o.DT_WRONG_MAGIC=r.Detour.WRONG_MAGIC,o.DT_WRONG_VERSION=r.Detour.WRONG_VERSION,o.DT_OUT_OF_MEMORY=r.Detour.OUT_OF_MEMORY,o.DT_INVALID_PARAM=r.Detour.INVALID_PARAM,o.DT_BUFFER_TOO_SMALL=r.Detour.BUFFER_TOO_SMALL,o.DT_OUT_OF_NODES=r.Detour.OUT_OF_NODES,o.DT_PARTIAL_RESULT=r.Detour.PARTIAL_RESULT,o.DT_ALREADY_OCCUPIED=r.Detour.ALREADY_OCCUPIED,o.DT_VERTS_PER_POLYGON=r.Detour.VERTS_PER_POLYGON,o.DT_NAVMESH_MAGIC=r.Detour.NAVMESH_MAGIC,o.DT_NAVMESH_VERSION=r.Detour.NAVMESH_VERSION,o.DT_NAVMESH_STATE_MAGIC=r.Detour.NAVMESH_STATE_MAGIC,o.DT_NAVMESH_STATE_VERSION=r.Detour.NAVMESH_STATE_VERSION,o.DT_TILECACHE_MAGIC=r.Detour.TILECACHE_MAGIC,o.DT_TILECACHE_VERSION=r.Detour.TILECACHE_VERSION,o.DT_TILECACHE_NULL_AREA=r.Detour.TILECACHE_NULL_AREA,o.DT_TILECACHE_WALKABLE_AREA=r.Detour.TILECACHE_WALKABLE_AREA,o.DT_TILECACHE_NULL_IDX=r.Detour.TILECACHE_NULL_IDX,o.DT_NULL_LINK=r.Detour.NULL_LINK,o.DT_NULL_LINK=r.Detour.NULL_LINK,o.DT_EXT_LINK=r.Detour.EXT_LINK,o.DT_OFFMESH_CON_BIDIR=r.Detour.OFFMESH_CON_BIDIR,o.DT_STRAIGHTPATH_START=r.Module.DT_STRAIGHTPATH_START,o.DT_STRAIGHTPATH_END=r.Module.DT_STRAIGHTPATH_END,o.DT_STRAIGHTPATH_OFFMESH_CONNECTION=r.Module.DT_STRAIGHTPATH_OFFMESH_CONNECTION,o.DT_STRAIGHTPATH_AREA_CROSSINGS=r.Module.DT_STRAIGHTPATH_AREA_CROSSINGS,o.DT_STRAIGHTPATH_ALL_CROSSINGS=r.Module.DT_STRAIGHTPATH_ALL_CROSSINGS,o.DT_FINDPATH_ANY_ANGLE=r.Module.DT_FINDPATH_ANY_ANGLE,o.DT_RAYCAST_USE_COSTS=r.Module.DT_RAYCAST_USE_COSTS,o.DT_CROWDAGENT_STATE_INVALID=r.Module.DT_CROWDAGENT_STATE_INVALID,o.DT_CROWDAGENT_STATE_WALKING=r.Module.DT_CROWDAGENT_STATE_WALKING,o.DT_CROWDAGENT_STATE_OFFMESH=r.Module.DT_CROWDAGENT_STATE_OFFMESH,o.DT_CROWDAGENT_TARGET_NONE=r.Module.DT_CROWDAGENT_TARGET_NONE,o.DT_CROWDAGENT_TARGET_FAILED=r.Module.DT_CROWDAGENT_TARGET_FAILED,o.DT_CROWDAGENT_TARGET_VALID=r.Module.DT_CROWDAGENT_TARGET_VALID,o.DT_CROWDAGENT_TARGET_REQUESTING=r.Module.DT_CROWDAGENT_TARGET_REQUESTING,o.DT_CROWDAGENT_TARGET_WAITING_FOR_QUEUE=r.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_QUEUE,o.DT_CROWDAGENT_TARGET_WAITING_FOR_PATH=r.Module.DT_CROWDAGENT_TARGET_WAITING_FOR_PATH,o.DT_CROWDAGENT_TARGET_VELOCITY=r.Module.DT_CROWDAGENT_TARGET_VELOCITY,o.DT_COMPRESSEDTILE_FREE_DATA=r.Module.DT_COMPRESSEDTILE_FREE_DATA,o.DT_TILE_FREE_DATA=r.Module.DT_TILE_FREE_DATA}};class ee{get size(){return this.raw.size}constructor(e){this.raw=e}get(e){return this.raw.get(e)}set(e,t){this.raw.set(e,t)}resize(e){this.raw.resize(e)}copy(e){this.raw.resize(e.length),this.getHeapView().set(e)}destroy(){r.destroy(this.raw)}getHeapView(){const e=this.getHeap();return new this.typedArrayClass(e.buffer,this.raw.getDataPointer(),this.size)}toTypedArray(){const e=this.getHeapView(),t=new this.typedArrayClass(this.size);return t.set(e),t}}class te extends ee{constructor(t){super(t??new r.Module.IntArray);P(this,"typedArrayClass",Int32Array)}getHeap(){return r.Module.HEAP32}static fromRaw(t){return new this(t)}}class de extends ee{constructor(t){super(t??new r.Module.UnsignedCharArray);P(this,"typedArrayClass",Uint8Array)}getHeap(){return r.Module.HEAPU8}static fromRaw(t){return new this(t)}}class pe extends ee{constructor(t){super(t??new r.Module.FloatArray);P(this,"typedArrayClass",Float32Array)}getHeap(){return r.Module.HEAPF32}static fromRaw(t){return new this(t)}}const Pe=pe,xe=te,he=de,Ge=te,E={toRaw:({x:s,y:e,z:t},a)=>a?(a.x=s,a.y=e,a.z=t,a):new r.Module.Vec3(s,e,t),fromRaw:s=>{const{x:e,y:t,z:a}=s;return{x:e,y:t,z:a}},fromArray:([s,e,t])=>({x:s,y:e,z:t}),toArray:({x:s,y:e,z:t})=>[s,e,t],lerp:(s,e,t,a={x:0,y:0,z:0})=>{a.x=s.x+(e.x-s.x)*t,a.y=s.y+(e.y-s.y)*t,a.z=s.z+(e.z-s.z)*t},copy:(s,e={x:0,y:0,z:0})=>{e.x=s.x,e.y=s.y,e.z=s.z}},A=(s,e)=>{const t=[];for(let a=0;a<e;a++)t.push(s(a));return t},_e=s=>r.Detour.statusSucceed(s),He=s=>r.Detour.statusFailed(s),Ue=s=>{if(r.Detour.statusSucceed(s))return"success";if(r.Detour.statusInProgress(s))return"in progress";if(r.Detour.statusFailed(s)){let e;const t={DT_WRONG_MAGIC:o.DT_WRONG_MAGIC,DT_WRONG_VERSION:o.DT_WRONG_VERSION,DT_OUT_OF_MEMORY:o.DT_OUT_OF_MEMORY,DT_INVALID_PARAM:o.DT_INVALID_PARAM,DT_BUFFER_TOO_SMALL:o.DT_BUFFER_TOO_SMALL,DT_OUT_OF_NODES:o.DT_OUT_OF_NODES,DT_PARTIAL_RESULT:o.DT_PARTIAL_RESULT,DT_ALREADY_OCCUPIED:o.DT_ALREADY_OCCUPIED};for(const[a,i]of Object.entries(t))if(r.Detour.statusDetail(s,i)){e=a;break}return e?`failed - ${e}`:"failed - unknown"}return"unknown"};class Be{constructor(e){this.raw=e}vertBase(){return this.raw.vertBase}triBase(){return this.raw.triBase}vertCount(){return this.raw.vertCount}triCount(){return this.raw.triCount}}class ke{constructor(e){this.raw=e}ref(){return this.raw.ref}next(){return this.raw.next}edge(){return this.raw.edge}side(){return this.raw.side}bmin(){return this.raw.bmin}bmax(){return this.raw.bmax}}class ve{constructor(e){this.raw=e}bmin(){return E.fromArray(A(e=>this.raw.get_bmin(e),3))}bmax(){return E.fromArray(A(e=>this.raw.get_bmax(e),3))}i(){return this.raw.i}}class we{constructor(e){this.raw=e}pos(e){return this.raw.get_pos(e)}rad(){return this.raw.rad}poly(){return this.raw.poly}flags(){return this.raw.flags}side(){return this.raw.side}userId(){return this.raw.userId}}class Fe{constructor(e){this.raw=e}magic(){return this.raw.magic}version(){return this.raw.version}x(){return this.raw.x}y(){return this.raw.y}layer(){return this.raw.layer}userId(){return this.raw.userId}polyCount(){return this.raw.polyCount}vertCount(){return this.raw.vertCount}maxLinkCount(){return this.raw.maxLinkCount}detailMeshCount(){return this.raw.detailMeshCount}detailVertCount(){return this.raw.detailVertCount}detailTriCount(){return this.raw.detailTriCount}bvNodeCount(){return this.raw.bvNodeCount}offMeshConCount(){return this.raw.offMeshConCount}offMeshBase(){return this.raw.offMeshBase}walkableHeight(){return this.raw.walkableHeight}walkableRadius(){return this.raw.walkableRadius}walkableClimb(){return this.raw.walkableClimb}bmin(e){return this.raw.get_bmin(e)}bmax(e){return this.raw.get_bmax(e)}bvQuantFactor(){return this.raw.bvQuantFactor}}class J{constructor(e){this.raw=e}firstLink(){return this.raw.firstLink}verts(e){return this.raw.get_verts(e)}neis(e){return this.raw.get_neis(e)}flags(){return this.raw.flags}vertCount(){return this.raw.vertCount}areaAndType(){return this.raw.get_areaAndtype()}getType(){return this.raw.getType()}}class O{constructor(e){this.raw=e}salt(){return this.raw.salt}linksFreeList(){return this.raw.linksFreeList}header(){return r.isNull(this.raw.header)?null:new Fe(this.raw.header)}polys(e){return new J(this.raw.get_polys(e))}verts(e){return this.raw.get_verts(e)}links(e){return new ke(this.raw.get_links(e))}detailMeshes(e){return new Be(this.raw.get_detailMeshes(e))}detailVerts(e){return this.raw.get_detailVerts(e)}detailTris(e){return this.raw.get_detailTris(e)}bvTree(e){return new ve(this.raw.get_bvTree(e))}offMeshCons(e){return new we(this.raw.get_offMeshCons(e))}data(e){return this.raw.get_data(e)}dataSize(){return this.raw.dataSize}flags(){return this.raw.flags}next(){return new O(this.raw.next)}}const ze=s=>{const e=r.DetourNavMeshBuilder.createNavMeshData(s.raw);return{success:e.success,navMeshData:de.fromRaw(e.navMeshData)}};class Ve{constructor(e){this.raw=e??new r.Module.dtNavMeshCreateParams}setPolyMeshCreateParams(e){r.DetourNavMeshBuilder.setPolyMeshCreateParams(this.raw,e.raw)}setPolyMeshDetailCreateParams(e){r.DetourNavMeshBuilder.setPolyMeshDetailCreateParams(this.raw,e.raw)}setOffMeshConnections(e){if(e.length<=0)return;const t=[],a=[],i=[],l=[],u=[],T=[];for(let w=0;w<e.length;w++){const R=e[w];t.push(R.startPosition.x,R.startPosition.y,R.startPosition.z),t.push(R.endPosition.x,R.endPosition.y,R.endPosition.z),a.push(R.radius),i.push(R.bidirectional?1:0),l.push(R.area??0),u.push(R.flags??1),T.push(R.userId??1e3+w)}r.DetourNavMeshBuilder.setOffMeshConnections(this.raw,e.length,t,a,i,l,u,T)}verts(e){return this.raw.get_verts(e)}setVerts(e,t){this.raw.set_verts(e,t)}vertCount(){return this.raw.vertCount}polys(e){return this.raw.get_polys(e)}setPolys(e,t){this.raw.set_polys(e,t)}polyAreas(e){return this.raw.get_polyAreas(e)}setPolyAreas(e,t){this.raw.set_polyAreas(e,t)}polyFlags(e){return this.raw.get_polyFlags(e)}setPolyFlags(e,t){this.raw.set_polyFlags(e,t)}polyCount(){return this.raw.polyCount}nvp(){return this.raw.nvp}setNvp(e){this.raw.nvp=e}detailMeshes(e){return this.raw.get_detailMeshes(e)}setDetailMeshes(e,t){this.raw.set_detailMeshes(e,t)}detailVerts(e){return this.raw.get_detailVerts(e)}setDetailVerts(e,t){this.raw.set_detailVerts(e,t)}detailVertsCount(){return this.raw.detailVertsCount}detailTris(e){return this.raw.get_detailTris(e)}setDetailTris(e,t){this.raw.set_detailTris(e,t)}detailTriCount(){return this.raw.detailTriCount}offMeshConVerts(e){return this.raw.get_offMeshConVerts(e)}offMeshConRad(e){return this.raw.get_offMeshConRad(e)}offMeshConDir(e){return this.raw.get_offMeshConDir(e)}offMeshConAreas(e){return this.raw.get_offMeshConAreas(e)}offMeshConFlags(e){return this.raw.get_offMeshConFlags(e)}offMeshConUserID(e){return this.raw.get_offMeshConUserID(e)}offMeshConCount(){return this.raw.offMeshConCount}userId(){return this.raw.userId}tileX(){return this.raw.tileX}setTileX(e){this.raw.tileX=e}tileY(){return this.raw.tileY}setTileY(e){this.raw.tileY=e}tileLayer(){return this.raw.tileLayer}setTileLayer(e){this.raw.tileLayer=e}boundsMin(){return A(e=>this.raw.get_bmin(e),3)}setBoundsMin(e){this.raw.set_bmin(0,e[0]),this.raw.set_bmin(1,e[1]),this.raw.set_bmin(2,e[2])}boundsMax(){return A(e=>this.raw.get_bmax(e),3)}setBoundsMax(e){this.raw.set_bmax(0,e[0]),this.raw.set_bmax(1,e[1]),this.raw.set_bmax(2,e[2])}walkableHeight(){return this.raw.walkableHeight}setWalkableHeight(e){this.raw.walkableHeight=e}walkableRadius(){return this.raw.walkableRadius}setWalkableRadius(e){this.raw.walkableRadius=e}walkableClimb(){return this.raw.walkableClimb}setWalkableClimb(e){this.raw.walkableClimb=e}cellSize(){return this.raw.cs}setCellSize(e){this.raw.cs=e}cellHeight(){return this.raw.ch}setCellHeight(e){this.raw.ch=e}buildBvTree(){return this.raw.buildBvTree}setBuildBvTree(e){this.raw.buildBvTree=e}}class We{constructor(e){this.raw=e}tiles(e){return new O(this.raw.get_tiles(e))}tileCount(){return this.raw.tileCount}}class Ye{constructor(e){this.raw=e}data(){return A(e=>this.raw.get_data(e),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class Ke{constructor(e){this.raw=e}tileX(){return this.raw.tileX}tileY(){return this.raw.tileY}}class Xe{constructor(e){this.raw=e}data(){return A(e=>this.raw.get_data(e),this.raw.dataSize)}dataSize(){return this.raw.dataSize}}class Q{constructor(e){this.raw=e}static create(e){const t=new r.Module.dtNavMeshParams;return t.set_orig(0,e.orig.x),t.set_orig(1,e.orig.y),t.set_orig(2,e.orig.z),t.tileWidth=e.tileWidth,t.tileHeight=e.tileHeight,t.maxTiles=e.maxTiles,t.maxPolys=e.maxPolys,new Q(t)}clone(){return Q.create({orig:{x:this.raw.get_orig(0),y:this.raw.get_orig(1),z:this.raw.get_orig(2)},tileWidth:this.raw.tileWidth,tileHeight:this.raw.tileHeight,maxTiles:this.raw.maxTiles,maxPolys:this.raw.maxPolys})}}class $e{constructor(e){this.raw=e??new r.Module.NavMesh}initSolo(e){return this.raw.initSolo(e.raw)}initTiled(e){return this.raw.initTiled(e.raw)}addTile(e,t,a){const i=new r.UnsignedIntRef,l=this.raw.addTile(e.raw,t,a,i),u=i.value;return r.destroy(i),{status:l,tileRef:u}}decodePolyId(e){const t=new r.UnsignedIntRef,a=new r.UnsignedIntRef,i=new r.UnsignedIntRef;this.raw.decodePolyId(e,t,a,i);const l=t.value;r.destroy(t);const u=a.value;r.destroy(a);const T=i.value;return r.destroy(i),{tileSalt:l,tileIndex:u,tilePolygonIndex:T}}encodePolyId(e,t,a){return this.raw.encodePolyId(e,t,a)}removeTile(e){return new Ye(this.raw.removeTile(e))}calcTileLoc(e){return new Ke(this.raw.calcTileLoc(E.toArray(e)))}getTileAt(e,t,a){const i=this.raw.getTileAt(e,t,a);return r.isNull(i)?null:new O(i)}getTilesAt(e,t,a){return new We(this.raw.getTilesAt(e,t,a))}getTileRefAt(e,t,a){return this.raw.getTileRefAt(e,t,a)}getTileRef(e){return this.raw.getTileRef(e.raw)}getTileByRef(e){const t=this.raw.getTileByRef(e);return r.isNull(t)?null:new O(t)}getMaxTiles(){return this.raw.getMaxTiles()}getTile(e){return new O(this.raw.getTile(e))}getTileAndPolyByRef(e){const t=this.raw.getTileAndPolyByRef(e),a=new O(t.tile),i=new J(t.poly);return{success:_e(t.status),status:t.status,tile:a,poly:i}}getTileAndPolyByRefUnsafe(e){const t=this.raw.getTileAndPolyByRef(e),a=new O(t.tile),i=new J(t.poly);return{tile:a,poly:i}}isValidPolyRef(e){return this.raw.isValidPolyRef(e)}getPolyRefBase(e){return this.raw.getPolyRefBase(e.raw)}getOffMeshConnectionPolyEndPoints(e,t){const a=new r.Vec3,i=new r.Vec3,l=this.raw.getOffMeshConnectionPolyEndPoints(e,t,a,i),u=E.fromRaw(a);r.destroy(a);const T=E.fromRaw(i);return r.destroy(i),{success:_e(l),status:l,start:u,end:T}}getOffMeshConnectionByRef(e){return new we(this.raw.getOffMeshConnectionByRef(e))}setPolyFlags(e,t){return this.raw.setPolyFlags(e,t)}getPolyFlags(e){const t=new r.UnsignedShortRef,a=this.raw.getPolyFlags(e,t),i=t.value;return r.destroy(t),{status:a,flags:i}}setPolyArea(e,t){return this.raw.setPolyArea(e,t)}getPolyArea(e){const t=new r.UnsignedCharRef,a=this.raw.getPolyArea(e,t),i=t.value;return r.destroy(t),{status:a,area:i}}getTileStateSize(e){return this.raw.getTileStateSize(e.raw)}storeTileState(e,t){return new Xe(this.raw.storeTileState(e.raw,t))}restoreTileState(e,t,a){return this.raw.restoreTileState(e.raw,t,a)}getDebugNavMesh(){const e=[],t=[];let a=0;const i=this.getMaxTiles();for(let l=0;l<i;l++){const u=this.getTile(l),T=u.header();if(!T)continue;const w=T.polyCount();for(let R=0;R<w;++R){const x=u.polys(R);if(x.getType()===1)continue;const k=x.vertCount(),N=u.detailMeshes(R),v=N.triBase(),F=N.triCount();for(let h=0;h<F;++h){const D=(v+h)*4;for(let f=0;f<3;++f){if(u.detailTris(D+f)<k){const g=x.verts(u.detailTris(D+f))*3;e.push(u.verts(g),u.verts(g+1),u.verts(g+2))}else{const g=(N.vertBase()+u.detailTris(D+f)-x.vertCount())*3;e.push(u.detailVerts(g),u.detailVerts(g+1),u.detailVerts(g+2))}t.push(a++)}}}}return[e,t]}destroy(){this.raw.destroy(),r.Module.destroy(this.raw)}}const Ee={borderSize:0,tileSize:0,cs:.2,ch:.2,walkableSlopeAngle:60,walkableHeight:2,walkableClimb:2,walkableRadius:.5,maxEdgeLen:12,maxSimplificationError:1.3,minRegionArea:8,mergeRegionArea:20,maxVertsPerPoly:6,detailSampleDist:6,detailSampleMaxError:1},Qe=s=>{const e={...Ee,...s},t=new r.Module.rcConfig;return t.borderSize=e.borderSize,t.tileSize=e.tileSize,t.cs=e.cs,t.ch=e.ch,t.walkableSlopeAngle=e.walkableSlopeAngle,t.walkableHeight=e.walkableHeight,t.walkableClimb=e.walkableClimb,t.walkableRadius=e.walkableRadius,t.maxEdgeLen=e.maxEdgeLen,t.maxSimplificationError=e.maxSimplificationError,t.minRegionArea=e.minRegionArea,t.mergeRegionArea=e.mergeRegionArea,t.maxVertsPerPoly=e.maxVertsPerPoly,t.detailSampleDist=e.detailSampleDist,t.detailSampleMaxError=e.detailSampleMaxError,t},je=s=>{const e=new r.Module.rcConfig;return e.set_bmin(0,s.get_bmin(0)),e.set_bmin(1,s.get_bmin(1)),e.set_bmin(2,s.get_bmin(2)),e.set_bmax(0,s.get_bmax(0)),e.set_bmax(1,s.get_bmax(1)),e.set_bmax(2,s.get_bmax(2)),e.width=s.width,e.height=s.height,e.borderSize=s.borderSize,e.tileSize=s.tileSize,e.cs=s.cs,e.ch=s.ch,e.walkableSlopeAngle=s.walkableSlopeAngle,e.walkableHeight=s.walkableHeight,e.walkableClimb=s.walkableClimb,e.walkableRadius=s.walkableRadius,e.maxEdgeLen=s.maxEdgeLen,e.maxSimplificationError=s.maxSimplificationError,e.minRegionArea=s.minRegionArea,e.mergeRegionArea=s.mergeRegionArea,e.maxVertsPerPoly=s.maxVertsPerPoly,e.detailSampleDist=s.detailSampleDist,e.detailSampleMaxError=s.detailSampleMaxError,e};class Ze{constructor(e=!0){P(this,"logs",[]);P(this,"startTimes",{});P(this,"accumulatedTimes",{});const t=new r.Module.RecastBuildContextImpl;t.log=(a,i,l)=>{if(!this.raw.logEnabled())return;const u=i,T=new Uint8Array(r.Module.HEAPU8.buffer,u,l),w=new Uint8Array(l);w.set(T);const R=new TextDecoder().decode(w);this.log(a,R)},t.resetLog=()=>{this.resetLog()},t.startTimer=a=>{this.raw.timerEnabled()&&this.startTimer(a)},t.stopTimer=a=>{this.raw.timerEnabled()&&this.stopTimer(a)},t.getAccumulatedTime=a=>this.raw.timerEnabled()?this.getAccumulatedTime(a):-1,t.resetTimers=()=>{this.raw.timerEnabled()&&(this.startTimes={},this.accumulatedTimes={})},this.raw=new r.Module.RecastBuildContext(t),this.raw.enableTimer(e),this.raw.enableLog(e),this.resetTimers()}log(e,t){this.logs.push({category:e,msg:t})}resetLog(){this.logs=[]}startTimer(e){this.startTimes[e]=performance.now()}stopTimer(e){const a=performance.now()-this.startTimes[e];this.accumulatedTimes[e]===-1?this.accumulatedTimes[e]=a:this.accumulatedTimes[e]+=a}getAccumulatedTime(e){return this.accumulatedTimes[e]}resetTimers(){for(let e=0;e<n.RC_MAX_TIMERS;e++)this.startTimes[e]=-1,this.accumulatedTimes[e]=-1}}class qe{constructor(e){this.raw=e??new r.rcChunkyTriMesh}init(e,t,a,i){return r.ChunkyTriMeshUtils.createChunkyTriMesh(e.raw,t.raw,a,i,this.raw)}getChunksOverlappingRect(e,t,a,i){return r.ChunkyTriMeshUtils.getChunksOverlappingRect(this.raw,e,t,a.raw,i)}getNodeTris(e){return te.fromRaw(r.ChunkyTriMeshUtils.getChunkyTriMeshNodeTris(this.raw,e))}nodes(e){return this.raw.get_nodes(e)}maxTrisPerChunk(){return this.raw.maxTrisPerChunk}}class B{constructor(e){this.raw=e}smin(){return this.raw.smin}smax(){return this.raw.smax}area(){return this.raw.area}next(){return r.isNull(this.raw.next)?null:new B(this.raw.next)}}class re{constructor(e){this.raw=e}next(){return r.isNull(this.raw.next)?null:new re(this.raw.next)}items(e){return new B(this.raw.get_items(e))}}class Je{constructor(e){this.raw=e}width(){return this.raw.width}height(){return this.raw.height}bmin(){return E.fromArray(A(e=>this.raw.get_bmin(e),3))}bmax(){return E.fromArray(A(e=>this.raw.get_bmax(e),3))}cs(){return this.raw.cs}ch(){return this.raw.ch}spans(e){return new B(this.raw.get_spans(e))}pools(e){return new re(this.raw.get_pools(e))}freelist(e){return new B(this.raw.get_freelist(e))}}class et{constructor(e){this.raw=e}index(){return this.raw.get_index()}count(){return this.raw.get_count()}}class tt{constructor(e){this.raw=e}y(){return this.raw.get_y()}reg(){return this.raw.get_reg()}con(){return this.raw.get_con()}h(){return this.raw.get_h()}}class rt{constructor(e){this.raw=e}width(){return this.raw.width}height(){return this.raw.height}spanCount(){return this.raw.spanCount}walkableHeight(){return this.raw.walkableHeight}walkableClimb(){return this.raw.walkableClimb}borderSize(){return this.raw.borderSize}maxDistance(){return this.raw.maxDistance}maxRegions(){return this.raw.maxRegions}bmin(){return E.fromArray(A(e=>this.raw.get_bmin(e),3))}bmax(){return E.fromArray(A(e=>this.raw.get_bmax(e),3))}cs(){return this.raw.cs}ch(){return this.raw.ch}cells(e){return new et(this.raw.get_cells(e))}spans(e){return new tt(this.raw.get_spans(e))}dist(e){return this.raw.get_dist(e)}areas(e){return this.raw.get_areas(e)}}class st{constructor(e){this.raw=e}verts(e){return this.raw.get_verts(e)}nverts(){return this.raw.nverts}rverts(e){return this.raw.get_rverts(e)}nrverts(){return this.raw.nrverts}reg(){return this.raw.reg}area(){return this.raw.area}}class at{constructor(e){this.raw=e}conts(e){return new st(this.raw.get_conts(e))}nconts(){return this.raw.nconts}bmin(){return E.fromArray(A(e=>this.raw.get_bmin(e),3))}bmax(){return E.fromArray(A(e=>this.raw.get_bmax(e),3))}cs(){return this.raw.cs}ch(){return this.raw.ch}width(){return this.raw.width}height(){return this.raw.height}borderSize(){return this.raw.borderSize}maxError(){return this.raw.maxError}}class it{constructor(e){this.raw=e}verts(e){return this.raw.get_verts(e)}polys(e){return this.raw.get_polys(e)}regs(e){return this.raw.get_regs(e)}flags(e){return this.raw.get_flags(e)}setFlags(e,t){this.raw.set_flags(e,t)}areas(e){return this.raw.get_areas(e)}setAreas(e,t){return this.raw.set_areas(e,t)}nverts(){return this.raw.nverts}npolys(){return this.raw.npolys}maxpolys(){return this.raw.maxpolys}nvp(){return this.raw.nvp}bmin(){return E.fromArray(A(e=>this.raw.get_bmin(e),3))}bmax(){return E.fromArray(A(e=>this.raw.get_bmax(e),3))}cs(){return this.raw.cs}ch(){return this.raw.ch}borderSize(){return this.raw.borderSize}maxEdgeError(){return this.raw.maxEdgeError}}class nt{constructor(e){this.raw=e}meshes(e){return this.raw.get_meshes(e)}verts(e){return this.raw.get_verts(e)}tris(e){return this.raw.get_tris(e)}nmeshes(){return this.raw.nmeshes}nverts(){return this.raw.nverts}ntris(){return this.raw.ntris}}const ot=(s,e,t)=>r.Recast.calcGridSize(s,e,t),lt=(s,e,t,a,i,l,u,T)=>r.Recast.createHeightfield(s.raw,e.raw,t,a,i,l,u,T),ut=(s,e,t,a,i,l,u)=>r.Recast.markWalkableTriangles(s.raw,e,t.raw,a,i.raw,l,u.raw),ht=(s,e,t,a,i,l,u,T=1)=>r.Recast.rasterizeTriangles(s.raw,e.raw,t,a.raw,i.raw,l,u.raw,T),_t=(s,e,t)=>r.Recast.filterLowHangingWalkableObstacles(s.raw,e,t.raw),ct=(s,e,t,a)=>r.Recast.filterLedgeSpans(s.raw,e,t,a.raw),Rt=(s,e,t)=>r.Recast.filterWalkableLowHeightSpans(s.raw,e,t.raw),Tt=(s,e,t,a,i)=>r.Recast.buildCompactHeightfield(s.raw,e,t,a.raw,i.raw),dt=(s,e,t)=>r.Recast.erodeWalkableArea(s.raw,e,t.raw),wt=(s,e)=>r.Recast.buildDistanceField(s.raw,e.raw),Et=(s,e,t,a,i)=>r.Recast.buildRegions(s.raw,e.raw,t,a,i),At=(s,e,t,a,i,l=n.RC_CONTOUR_TESS_WALL_EDGES)=>r.Recast.buildContours(s.raw,e.raw,t,a,i.raw,l),Mt=(s,e,t,a)=>r.Recast.buildPolyMesh(s.raw,e.raw,t,a.raw),gt=(s,e,t,a,i,l)=>r.Recast.buildPolyMeshDetail(s.raw,e.raw,t.raw,a,i,l.raw),Ct=()=>new Je(r.Recast.allocHeightfield()),ce=s=>r.Recast.freeHeightfield(s.raw),Dt=()=>new rt(r.Recast.allocCompactHeightfield()),Re=s=>r.Recast.freeCompactHeightfield(s.raw),It=()=>new at(r.Recast.allocContourSet()),Te=s=>r.Recast.freeContourSet(s.raw),mt=()=>new it(r.Recast.allocPolyMesh()),St=s=>r.Recast.freePolyMesh(s.raw),ft=()=>new nt(r.Recast.allocPolyMeshDetail()),yt=s=>r.Recast.freePolyMeshDetail(s.raw),Lt=(s,e)=>{const t=r.NavMeshExporter.exportNavMesh(s.raw,e==null?void 0:e.raw),a=new Uint8Array(r.Module.HEAPU8.buffer,t.dataPointer,t.size),i=new Uint8Array(t.size);return i.set(a),r.NavMeshExporter.freeNavMeshExport(t),i},bt=s=>Lt(s),Ot=(s,e)=>{const t={x:1/0,y:1/0,z:1/0},a={x:-1/0,y:-1/0,z:-1/0};for(let i=0;i<e.length;i++){const l=e[i],u=s[l*3],T=s[l*3+1],w=s[l*3+2];t.x=Math.min(t.x,u),t.y=Math.min(t.y,T),t.z=Math.min(t.z,w),a.x=Math.max(a.x,u),a.y=Math.max(a.y,T),a.z=Math.max(a.z,w)}return{bbMin:E.toArray(t),bbMax:E.toArray(a)}},Nt=s=>{let e=0,t=0;return e=+(s>65535)<<4,s>>=e,t=+(s>255)<<3,s>>=t,e|=t,t=+(s>15)<<2,s>>=t,e|=t,t=+(s>3)<<1,s>>=t,e|=t,e|=s>>1,e},pt=s=>(s--,s|=s>>1,s|=s>>2,s|=s>>4,s|=s>>8,s|=s>>16,s++,s),Pt={...Ee},xt=(s,e,t={},a=!1)=>{if(!r.Module)throw new Error('"init" must be called before using any recast-navigation-js APIs. See: https://github.com/isaac-mason/recast-navigation-js?tab=readme-ov-file#initialization');const i=new Ze,l={type:"tiled",buildContext:i,chunkyTriMesh:void 0,tileIntermediates:[]},u=new $e,T=s,w=e.length,R=new Pe;R.copy(T);const x=e,k=e.length/3,N=new xe;N.copy(x);const v=()=>{if(R.destroy(),N.destroy(),!a){for(let d=0;d<l.tileIntermediates.length;d++){const c=l.tileIntermediates[d];c.compactHeightfield&&(Re(c.compactHeightfield),c.compactHeightfield=void 0),c.heightfield&&(ce(c.heightfield),c.heightfield=void 0),c.contourSet&&(Te(c.contourSet),c.contourSet=void 0),c.polyMesh&&(St(c.polyMesh),c.polyMesh=void 0),c.polyMeshDetail&&(yt(c.polyMeshDetail),c.polyMeshDetail=void 0)}l.chunkyTriMesh&&(l.chunkyTriMesh=void 0)}},F=d=>(v(),u.destroy(),{success:!1,navMesh:void 0,intermediates:l,error:d}),h=Qe({...Pt,...t}),{bbMin:D,bbMax:f}=Ot(s,e),g=ot(D,f,h.cs);h.width=g.width,h.height=g.height,h.minRegionArea=h.minRegionArea*h.minRegionArea,h.mergeRegionArea=h.mergeRegionArea*h.mergeRegionArea,h.tileSize=Math.floor(h.tileSize),h.borderSize=h.walkableRadius+3,h.width=h.tileSize+h.borderSize*2,h.height=h.tileSize+h.borderSize*2,h.detailSampleDist=h.detailSampleDist<.9?0:h.cs*h.detailSampleDist,h.detailSampleMaxError=h.ch*h.detailSampleMaxError;const z=Math.floor(h.tileSize),se=Math.floor((g.width+z-1)/z),ae=Math.floor((g.height+z-1)/z),V=h.tileSize*h.cs,Ae=E.fromArray(D);let W=Math.min(Math.floor(Nt(pt(se*ae))),14);W>14&&(W=14);const Me=22-W,ge=1<<W,Ce=1<<Me,De=Q.create({orig:Ae,tileWidth:h.tileSize*h.cs,tileHeight:h.tileSize*h.cs,maxTiles:ge,maxPolys:Ce});if(!u.initTiled(De))return F("Could not init nav mesh for tiled use");const G=new qe;if(l.chunkyTriMesh=G,!G.init(R,N,k,256))return F("Failed to build chunky triangle mesh");const Ie=(d,c,H,U)=>{const m=M=>(i.log(n.RC_LOG_ERROR,M),{success:!1,error:M}),S={tileX:d,tileY:c};l.tileIntermediates.push(S);const _=je(h),y=[...H],L=[...U];y[0]-=_.borderSize*_.cs,y[2]-=_.borderSize*_.cs,L[0]+=_.borderSize*_.cs,L[2]+=_.borderSize*_.cs,_.set_bmin(0,y[0]),_.set_bmin(1,y[1]),_.set_bmin(2,y[2]),_.set_bmax(0,L[0]),_.set_bmax(1,L[1]),_.set_bmax(2,L[2]),i.resetTimers(),i.startTimer(n.RC_TIMER_TOTAL),i.log(n.RC_LOG_PROGRESS,`Building tile ${l.tileIntermediates.length} at x: ${d}, y: ${c}`),i.log(n.RC_LOG_PROGRESS,` - ${h.width} x ${h.height} cells`),i.log(n.RC_LOG_PROGRESS,` - ${w/1e3}fK verts, ${k/1e3}K tris`);const p=Ct();if(S.heightfield=p,!lt(i,p,_.width,_.height,y,L,_.cs,_.ch))return m("Could not create heightfield");new he().resize(G.maxTrisPerChunk());const me=[y[0],y[2]],Se=[L[0],L[2]],ie=512,j=new Ge;j.resize(ie);const ne=G.getChunksOverlappingRect(me,Se,j,ie);if(ne===0)return{success:!0};for(let M=0;M<ne;++M){const le=j.get(M),q=G.nodes(le).n,ue=G.getNodeTris(le),$=new he;$.resize(q),ut(i,_.walkableSlopeAngle,R,w,ue,q,$);const fe=ht(i,R,w,ue,$,q,p,_.walkableClimb);if($.destroy(),!fe)return m("Could not rasterize triangles")}_t(i,_.walkableClimb,p),ct(i,_.walkableHeight,_.walkableClimb,p),Rt(i,_.walkableHeight,p);const b=Dt();if(S.compactHeightfield=b,!Tt(i,_.walkableHeight,_.walkableClimb,p,b))return m("Could not build compact heightfield");if(a||(ce(S.heightfield),S.heightfield=void 0),!dt(i,_.walkableRadius,b))return m("Could not erode walkable area");if(!wt(i,b))return m("Failed to build distance field");if(!Et(i,b,_.borderSize,_.minRegionArea,_.mergeRegionArea))return m("Failed to build regions");const X=It();if(S.contourSet=X,!At(i,b,_.maxSimplificationError,_.maxEdgeLen,X,n.RC_CONTOUR_TESS_WALL_EDGES))return m("Failed to create contours");const I=mt();if(S.polyMesh=I,!Mt(i,X,_.maxVertsPerPoly,I))return m("Failed to triangulate contours");const Z=ft();if(S.polyMeshDetail=Z,!gt(i,I,b,_.detailSampleDist,_.detailSampleMaxError,Z))return m("Failed to build detail mesh");a||(Re(b),S.compactHeightfield=void 0,Te(X),S.contourSet=void 0);for(let M=0;M<I.npolys();M++)I.areas(M)==n.RC_WALKABLE_AREA&&I.setAreas(M,0),I.areas(M)==0&&I.setFlags(M,1);const C=new Ve;C.setPolyMeshCreateParams(I),C.setPolyMeshDetailCreateParams(Z),C.setWalkableHeight(_.walkableHeight),C.setWalkableRadius(_.walkableRadius),C.setWalkableClimb(_.walkableClimb),C.setCellSize(_.cs),C.setCellHeight(_.ch),C.setBuildBvTree(!0),t.offMeshConnections&&C.setOffMeshConnections(t.offMeshConnections),C.setTileX(d),C.setTileY(c);const oe=ze(C);return oe.success?(i.log(n.RC_LOG_PROGRESS,`>> Polymesh: ${I.nverts()} vertices  ${I.npolys()} polygons`),{success:!0,data:oe.navMeshData}):m("Failed to create Detour navmesh data")};i.startTimer(n.RC_TIMER_TEMP);const Y=[0,0,0],K=[0,0,0];for(let d=0;d<ae;d++)for(let c=0;c<se;c++){Y[0]=D[0]+c*V,Y[1]=D[1],Y[2]=D[2]+d*V,K[0]=D[0]+(c+1)*V,K[1]=f[1],K[2]=D[2]+(d+1)*V;const H=Ie(c,d,Y,K);if(H.success&&H.data){u.removeTile(u.getTileRefAt(c,d,0));const U=u.addTile(H.data,o.DT_TILE_FREE_DATA,0);He(U.status)&&(i.log(n.RC_LOG_WARNING,`Failed to add tile to nav mesh
	tx: ${c}, ty: ${d},status: ${Ue(U.status)} (${U.status})`),H.data.destroy())}}return i.stopTimer(n.RC_TIMER_TEMP),a||v(),{success:!0,navMesh:u,intermediates:l}};self.onmessage=async s=>{await Ne();const{positions:e,indices:t,config:a}=s.data,{success:i,navMesh:l}=xt(e,t,a);if(!i)return;const u=bt(l);self.postMessage(u,{transfer:[u.buffer]}),l.destroy()};