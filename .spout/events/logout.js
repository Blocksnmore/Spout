const { Player } = require("../api/spout");
const { config } = require("../global");
/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    client.on("end", async (data) => {
      let opts = config;
      if (opts.debugmode)
        console.log(
          "[SPOUT DEBUG] Player disconnect occured! Username:",
          client.username,
          "UUID:",
          client.uuid
        );
      for (let i in serverInstance.clients) {
        new Player(serverInstance.clients[i]).send(
          client.username + " Left the game!"
        );
      }
    });
  });
};
