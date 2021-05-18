/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    let players = serverInstance.clients || [client];
    // TODO: This is a fucking pain in the ass
    client.write("player_info", {
      action: 0,
      data: players.map((user) => ({
        UUID: user.uuid,
        name: user.username,
        gamemode: 1,
        properties: user.profile ? client.profile.properties : [],
        ping: user.latency,
      })),
    });
  });
};
