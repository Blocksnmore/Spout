const fs = require("fs");

module.exports = {
  isDir: function (location) {
    return fs.statSync(location).isDirectory();
  },
};
