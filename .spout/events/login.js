const { Player } = require("../api/spout");
const { data, config, MapSystem } = require("../global");

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
      entityId: client.uuid,
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
    });

    new MapSystem().generateMap(client, 10);

    client.write("position", {
      x: 0,
      y: 61,
      z: 0,
      yaw: 137,
      pitch: 0,
      flags: 0x00,
    });

    client.registerChannel("minecraft:brand", ["string", []]);
    client.writeChannel("minecraft:brand", Buffer.from("Spout").toString());

    for (let i in serverInstance.clients) {
      new Player(serverInstance.clients[i]).send(
        client.username + " Joined the game!"
      );

    }
  });
};
