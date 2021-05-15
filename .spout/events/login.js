const { data, config, vec3, chunk, block } = require("../global");

const singularChunk = new chunk();
for (let x = 0; x < 16; x++) {
  for (let z = 0; z < 16; z++) {
    let pos = new vec3(x, 100, z);
    block.setBlock(singularChunk, pos, new block.Block(1));
    for (let y = 0; y < 256; y++) {
      pos = new vec3(x, y, z);
      block.setSkyLight(singularChunk, pos);
    }
  }
}

/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    let opts = config;
    let loginPacket = data.loginPacket;

    if (opts.debugmode)
      console.log(
        "[SPOUT DEBUG] Player connection occured! Username:",
        client.username,
        "UUID:",
        client.uuid
      );

    client.write("login", {
      entityId: client.id,
      isHardcore: opts.hardcore,
      gameMode: opts.defaultgamemode,
      previousGameMode: 255,
      worldNames: loginPacket.worldNames,
      dimensionCodec: loginPacket.dimensionCodec,
      dimension: loginPacket.dimension,
      worldName: "minecraft:overworld",
      hashedSeed: [0, 0],
      maxPlayers: serverInstance.maxPlayers,
      viewDistance: opts.renderDistance,
      reducedDebugInfo: false,
      enableRespawnScreen: true,
      isDebug: false,
      isFlat: false,
      levelType: "Spout",
    });

    client.write("position", {
      x: 15,
      y: 101,
      z: 15,
      yaw: 137,
      pitch: 0,
      flags: 0x00,
    });

    client.write("map_chunk", {
      x: 0,
      z: 0,
      groundUp: true,
      biomes:
        singularChunk.dumpBiomes !== undefined
          ? singularChunk.dumpBiomes()
          : undefined,
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
      bitMap: singularChunk.getMask(),
      chunkData: singularChunk.dump(),
      blockEntities: [],
    });
    client.registerChannel("minecraft:brand", ["string", []]);
    client.writeChannel("minecraft:brand", Buffer.from("Spout").toString());
  });
};
