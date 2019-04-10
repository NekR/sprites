const path = require("path");

const generate = require("../src");
const InkscapeConverter = require("../src/convert/InkscapeConverter");

(async () => {
  console.time("Generating sprites");

  const input = path.resolve("./input");

  const pngPath = path.resolve("./output/png");
  const svgPath = path.resolve("./output/svg");
  const cssPath = path.resolve("./output/css");

  await generate(
    input,
    {
      pngPath,
      svgPath,
      cssPath
    },
    new InkscapeConverter([2], "/opt/local/bin/inkscape"),
    {
      cssPrefix: "VK-"
    }
  );

  console.timeEnd("Generating sprites");
})();
