const mc = require("minecraft-protocol");
const data = require("minecraft-data")("1.16.4");
const vec3 = require("vec3");
const chunk = require("prismarine-chunk")("1.16.4");

const eula = require("./tools/eula");
const spout = require("./spout");
const block = require("./tools/block");
const plugin = require("./tools/plugin");
const config = require("./tools/config")();

var commands = new Map();

module.exports = {
  mc,
  data,
  vec3,
  chunk,

  eula,
  spout,
  block,
  plugin,

  commands,

  config,
};
