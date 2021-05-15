interface spoutCommand {
  name: String;
  aliases?: String[];
  onCommand(player: player, args?: String[]): CallableFunction;
}

interface player {
  send(message: String): CallableFunction;
  username: String;
  uuid: String;
}