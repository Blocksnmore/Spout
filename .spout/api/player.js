/**
 * @type {player}
 */
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
        translate:string,
      }),
      position: 0,
      sender: "0",
    });
  }
};
