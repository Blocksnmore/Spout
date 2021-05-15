var mapGens = new Map();

module.exports = class Map {
  constructor() {}
  generateMap(client, size, generator) {
      if(!generator) generator = 'spout';
      
  }
  loadGenPlugin(name, func) {
    if (mapGens.has(name.toLowerCase()))
      throw new Error(
        "[SPOUT ERROR] Attempted load of an exsisting Map generator"
      );
    else {
      mapGens.set(name.toLowerCase(), func);
      console.log("[SPOUT] Loaded map generator "+name)
    }
  }
};

function loadChunk(client, chunk, location) {
  client.write("map_chunk", {
    x: location.x,
    z: location.y,
    groundUp: true,
    biomes: chunk.dumpBiomes !== undefined ? chunk.dumpBiomes() : undefined,
    heightmaps: {
      type: "compound",
      name: "",
      value: {
        MOTION_BLOCKING: {
          type: "longArray",
          value: new Array(36).fill([0, 0]),
        },
      },
    },
    bitMap: chunk.getMask(),
    chunkData: chunk.dump(),
    blockEntities: [],
  });
}
