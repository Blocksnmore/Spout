const mc = require("minecraft-protocol");
const fs = require("fs");
const data = require("minecraft-data")("1.16.4");
const vec3 = require("vec3");
const chunk = require("prismarine-chunk")("1.16.4");

const eula = require("./tools/eula");
const config = require("./tools/config");
const spout = require("./spout");
const block = require("./tools/block");

module.exports = {
  mc,
  fs,
  data,
  vec3,
  chunk,

  eula,
  config,
  spout,
  block,
};
