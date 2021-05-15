const { eula, mc, config, spout } = require("./.spout/global");
/**
 * @type {import("minecraft-protocol").Server}
 */

(async function () {
  console.log(
    [
      "┏━━━┓━━━━━━━━━━━━━┏┓━",
      "┃┏━┓┃━━━━━━━━━━━━┏┛┗┓",
      "┃┗━━┓┏━━┓┏━━┓┏┓┏┓┗┓┏┛",
      "┗━━┓┃┃┏┓┃┃┏┓┃┃┃┃┃━┃┃━",
      "┃┗━┛┃┃┗┛┃┃┗┛┃┃┗┛┃━┃┗┓",
      "┗━━━┛┃┏━┛┗━━┛┗━━┛━┗━┛",
      "━━━━━┃┃━━━━━━━━━━━━━━",
      "━━━━━┗┛━━━━━━━━━━━━━━",
      "Spout Minecraft Server",
      "",
      "Developed by Blocks_n_more",
      "",
      "Checking EULA",
      "",
    ].join("\n")
  );
  await eula();
  console.log("EULA verified! Loading server!");
  spout(
    mc.createServer({
      "online-mode": true, // May be configurable in the future
      version: "1.16.4",
      port: config.port,
      motd: config.motd,
      maxPlayers: config.maxPlayers,
    })
  );
  console.log("Started server!");
})();
