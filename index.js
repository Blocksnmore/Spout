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
  let configuration = await config();
  spout(
    mc.createServer({
      "online-mode": true, // May be configurable in the future
      version: "1.16.4",
      port: configuration.port,
      motd: configuration.motd,
      maxPlayers: configuration.maxPlayers,
    })
  );
  console.log("Started server!");
})();
