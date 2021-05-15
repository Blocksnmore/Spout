interface spoutCommand {
  name: String;
  aliases?: String[];
  onCommand(player: player, args?: String[]): CallableFunction;
}

interface player {
  send(message: String): CallableFunction;
  sendTitle(message: String, options?: titleOptions): CallableFunction;
  getUUID(): CallableFunction;
  getUsername(): CallableFunction;
  username: String;
  uuid: String;
}
interface titleOptions {
  fadeIn?: number;
  stay?: number;
  fadeOut?: number;
  subtitle?: String;
}
