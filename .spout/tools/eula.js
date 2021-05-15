const fs = require("fs");

const eulamsg = `# Generated by Spout
# By changing the setting below to TRUE you are indicating your agreement to mojang's EULA (https://account.mojang.com/documents/minecraft_eula).
# Generated on ${new Date().toUTCString()}
eula=false`;

module.exports = async function () {
  if (
    !fs.existsSync("./eula.txt") ||
    !fs
      .readFileSync("./eula.txt", "utf-8")
      .toString()
      .toLowerCase()
      .includes("eula=true")
  ) {
    fs.writeFileSync("./eula.txt", eulamsg);
    console.log(
      "EULA has not been accepted! Please accept the EULA before continuing"
    );
    process.exit();
  }
};
