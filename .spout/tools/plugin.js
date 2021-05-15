const fs = require("fs");
const { isDir } = require("./misc.js")
var pluginMap = new Map();

module.exports = class Plugin {
  /**
   *
   * @param {pluginData} pluginData
   */
  constructor(pluginData) {
    if (!pluginData.name || !pluginData.author || !pluginData.version)
      throw new Error(
        "[SPOUT ERROR] Attempted plugin register with invalid plugin data."
      );
    console.log("[SPOUT] Loading plugin " + pluginData.name);
    if (pluginMap.has(pluginData.name))
      throw new Error(
        "[SPOUT ERROR] Plugin register with exsisting name occured! Please check all your plugins for duplicates."
      );
    pluginMap.set(pluginData.name, pluginData);
    if (pluginData.onLoad) pluginData.onLoad();
    console.log("[SPOUT] Loaded " + pluginData.name);
  }
};

(async function () {
  if (!fs.existsSync("./plugins/")) {
    fs.mkdirSync("./plugins");
  }
  fs.writeFileSync(
    "./plugins/-spoutapi.js",
    'module.exports = { Plugin:require("../.spout/tools/plugin.js"), Spout:require("../.spout/api/spout.js") }'
  );

  fs.readdir("./plugins", async (err, files) => {
    let pluginsrc = files.filter(
      (file) =>
        !isDir("./plugins/"+file) && !file.toString().split(" ").join("").startsWith("-")
    );
    if (pluginsrc.length < 1)
      return console.log("[SPOUT] No plugins found! Why don't you add some?");
    pluginsrc.forEach((plugin) => {
      try {
        require("../../plugins/" + plugin);
      } catch (e) {
        console.log(
          "[SPOUT ERROR] An error occured while loading " +
            plugin +
            "! Provided below is the debug info."
        );
        console.log(e);
      }
    });
  });
})();
