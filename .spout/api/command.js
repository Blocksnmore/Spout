var { commands } = require("../global");

module.exports = class Command {
  /**
   *
   * @param {spoutCommand} commandData
   */
  constructor(commandData) {
    commands.set(commandData.name.toLowerCase(), commandData.onCommand);
    if (commandData.aliases)
      commandData.aliases.forEach((command) => {
        commands.set(command.toLowerCase(), commandData.onCommand);
      });
  }
};
