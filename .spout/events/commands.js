const { commands, config } = require("../global");
const { Player } = require("../api/spout");
/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    client.on("chat", async (data) => {
      if (!data.message.startsWith("/")) return;
      let args = data.message.toString().split(" ");
      let command = args[0].toString().toLowerCase().substring(1);
      if (!commands.has(command))
        new Player(client).send(config.messages.invalidcommand);
      else commands.get(command)(new Player(client), args);
    });
  });
};
