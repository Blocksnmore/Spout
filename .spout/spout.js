const fs = require("fs");

/**
 *
 * @param {import("minecraft-protocol").Server} serverInstance
 */
module.exports = async function (serverInstance) {
  fs.readdir("./.spout/events", async (err, files) => {
    let events = files.filter(
      (file) =>
        file.toLowerCase().endsWith(".ts") || file.toLowerCase().endsWith(".js")
    );
    events.forEach(async (event) => {
      require("./events/" + event)(serverInstance);
    });
    console.log("Loaded " + events.length + " event(s)");
  });
};
