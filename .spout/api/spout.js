module.exports = {
  log: function (string, prefix) {
    console.log("[" + (prefix || "SPOUT PLUGIN") + "] " + string);
  },
  Command: require("./command"),
  Player: require("./player"),
  Chat: require("./chat")
};
