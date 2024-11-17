import { exportNavMesh, init, RecastConfig } from "@recast-navigation/core";
import { generateTiledNavMesh } from "@recast-navigation/generators";

self.onmessage = async (event: {
  data: {
    positions: Float32Array;
    indices: Uint32Array;
    config: Partial<RecastConfig>;
  };
}) => {
  await init();

  const { positions, indices, config } = event.data;

  const { success, navMesh } = generateTiledNavMesh(positions, indices, config);

  if (!success) return;

  const navMeshExport = exportNavMesh(navMesh);

  self.postMessage(navMeshExport, { transfer: [navMeshExport.buffer] });

  navMesh.destroy();
};
