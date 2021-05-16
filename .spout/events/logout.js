const { Player } = require("../api/spout");
/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    client.on("end", async (data) => {
      for (let i in serverInstance.clients) {
        new Player(serverInstance.clients[i]).send(
          client.username + " Left the game!"
        );
      }
    });
  });
};
