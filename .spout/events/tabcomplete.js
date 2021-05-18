/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  serverInstance.on("login", async (client) => {
    // TODO: Someone needs to write better fucking docs for this
    // I am yet to find any useful documentation about this

    // client.write("declare_commands", {
    //   nodes:[

    //   ],
    //   rootIndex: 1
    // })
  });
};
