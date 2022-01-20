const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const app = express();
const fs = require("fs");

const width = 100;
const height = 100;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
const port = 5000;

const dirTree = require("directory-tree");
const tree = dirTree("src/EditingPage/layers");

app.get("/getFolderTree", (req, res) => {
  console.log(JSON.stringify(tree));
  res.send(JSON.stringify(tree));
});

app.post("/submitDetails", (request, response) => {
  var startDate = new Date();

  const data = request.body;

  const layerData = [];

  data.map((obj) => {
    layerData.push(obj);
  });

  var values = 1000;

  while (values) {
    var hash = 0;
    // eslint-disable-next-line no-loop-func
    tree.children.forEach(async (item, index) => {
      const idx = Math.floor(Math.random() * item.children.length);
      const obj = item.children[idx];

      const image = await loadImage(`./${obj.path}`);
      context.drawImage(
        image,
        JSON.parse(layerData[index].x),
        JSON.parse(layerData[index].y),
        JSON.parse(layerData[index].height),
        JSON.parse(layerData[index].width)
      );
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(__dirname + `/generated/${hash}.png`, buffer);

      if (tree.children.length === index + 1) {
        hash += 1;
      }
    });
    hash += 1;
    values -= 1;
  }
  var endDate = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  console.log("The total Time Taken was : ", seconds);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
