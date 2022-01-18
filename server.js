const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const app = express();
const fs = require("fs");

const width = 1200;
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
  res.send(JSON.stringify(tree));
});

app.post("/submitDetails", (request, response) => {
  const data = request.body;

  data.map((obj) => {
    loadImage(`./src${obj.path}`).then((image) => {
      context.drawImage(
        image,
        JSON.parse(obj.x),
        JSON.parse(obj.y),
        JSON.parse(obj.height),
        JSON.parse(obj.width)
      );
    });
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./generated/image.png", buffer);
  });

  console.log(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
