const Chat = require("./chat");

module.exports = class Player {
  /**
   *
   * @param {createPlayer} playerData
   */
  constructor(playerData) {
    this.playerData = playerData;
  }
  send(string) {
    this.sendRaw(new Chat().translateColor(string));
  }
  sendRaw(string) {
    this.playerData.write("chat", {
      message: JSON.stringify({
        translate: "",
        extra: string,
      }),
      position: 0,
      sender: "0",
    });
  }
  sendTitle(string, options) {
    if (!options) options = {};
    this.playerData.write("title", {
      action: 3,
      fadeIn: options.fadeIn || 10,
      stay: options.stay || 20 * 5,
      fadeOut: options.fadeOut || 10,
    });
    if (options.subtitle)
      this.playerData.write("title", {
        action: 1,
        text: JSON.stringify({
          translate: "",
          extra: string,
        }),
      });
    this.playerData.write("title", {
      action: 0,
      text: JSON.stringify({
        translate: "",
        extra: string,
      }),
    });
  }
  sendActionBar(string, options) {
    if (!options) options = {};
    this.playerData.write("title", {
      action: 3,
      fadeIn: options.fadeIn || 10,
      stay: options.stay || 20 * 5,
      fadeOut: options.fadeOut || 10,
    });
    this.playerData.write("title", {
      action: 2,
      text: JSON.stringify({
        translate: "",
        extra: string,
      }),
    });
  }
  getUUID() {
    return this.playerData.uuid;
  }
  getUsername() {
    return this.playerData.username;
  }
  getRawData() {
    return this.playerData;
  }
};
