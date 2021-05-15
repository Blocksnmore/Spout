interface config {
  port: number;
  motd: String;
  hardcore: boolean;
  maxPlayers: number;
  renderDistance: number;
  debugmode: boolean;
  logwarns: boolean;
  defaultgamemode: number;
  messages: messages;
}

interface messages {
  invalidcommand: String;
}
