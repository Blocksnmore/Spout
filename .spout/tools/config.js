const fs = require("fs");

module.exports = async function () {
  if (!fs.existsSync("./properties.json")) {
    fs.writeFileSync(
      "./properties.json",
      JSON.stringify({
        port: 25565,
        motd: "A Spout minecraft server",
        hardcore: false,
        maxPlayers: 20,
        renderDistance: 10,
        debugmode: false,
        logwarns: true,
        defaultgamemode: 0,
      })
    );
  }
  return JSON.parse(fs.readFileSync("./properties.json", "utf-8"));
};
