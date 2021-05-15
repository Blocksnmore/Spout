let colorcodes = "0123456789abcdefklmnor".split("");
let colormap = {
  0: "black",
  1: "dark_blue",
  2: "dark_green",
  3: "dark_aqua",
  4: "dark_red",
  5: "dark_purple",
  6: "gold",
  7: "gray",
  8: "dark_gray",
  9: "blue",
  a: "green",
  b: "aqua",
  c: "red",
  d: "light_purple",
  e: "yellow",
  f: "white",
};

/**
 *
 * @param {String} string
 */
function translateColor(string) {
  let parts = string.split("&");
  let fullstring = { text: "", extra: [] };
  let nextformat = [];
  let currentpart = {
    text: "",
    bold: false,
    italic: false,
    underlined: false,
    strikethrough: false,
    obfuscated: false,
    color: null,
  };
  parts.forEach((part) => {
    if (colorcodes.includes(part)) nextformat.push(part);
    else {
      if (nextformat.length < 1) {
        currentpart.text = colorcodes.includes(part.substring(0, 1))
          ? part.substring(1)
          : part;
        if (
          colorcodes.includes(part.substring(0, 1)) &&
          colormap[part.substring(0, 1)]
        )
          currentpart.color = colormap[part.substring(0, 1)];
      }
    }
  });
  return fullstring;
}

module.exports = {
  translateColor,
};
