const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const app = express();
const fs = require("fs");

const width = 600;
const height = 600;

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
  const data = request.body;

  const layerData = [];

  data.map((obj) => {
    layerData.push(obj);
  });

  tree.children.map((item, index) => {
    item.children.map((obj) => {
      loadImage(`./${obj.path}`).then((image) => {
        context.drawImage(
          image,
          JSON.parse(layerData[index].x),
          JSON.parse(layerData[index].y),
          JSON.parse(layerData[index].height),
          JSON.parse(layerData[index].width)
        );

        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(__dirname + `/generated/${obj.name}`, buffer);
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
