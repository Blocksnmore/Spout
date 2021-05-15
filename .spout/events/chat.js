/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    client.on("chat", async (data) => {
      if(data.message.startsWith("/")) return;
      var msg = {
        translate: "chat.type.text",
        with: [client.username, data.message],
      };

      for (let client in serverInstance.clients) {
        serverInstance.clients[client].write("chat", {
          message: JSON.stringify(msg),
          position: 0,
          sender: "0",
        });
      }
    });
  });
};
