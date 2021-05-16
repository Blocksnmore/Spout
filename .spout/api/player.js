module.exports = class Player {
  /**
   *
   * @param {createPlayer} playerData
   */
  constructor(playerData) {
    this.playerData = playerData;
  }
  send(string) {
    this.playerData.write("chat", {
      message: JSON.stringify({
        translate: string,
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
          translate: options.subtitle,
        }),
      });
    this.playerData.write("title", {
      action: 0,
      text: JSON.stringify({
        translate: string,
      }),
    });
  }
  sendActionBar(string, options){
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
        translate: string,
      }),
    });
  }
  getUUID() {
    return this.playerData.uuid;
  }
  getUsername() {
    return this.playerData.username;
  }
  getRawData(){
    return this.playerData;
  }
};
