const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const app = express();
const fs = require("fs");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const s3Actions = require("./s3Actions");

var path = require("path");

require("dotenv").config({ path: "./config.env" });
const dbo = require("./DB/connection");

const db = lowDb(new FileSync("./src/traffic.json"));

const width = 400;
const height = 400;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d", {
  patternQuality: "bilinear",
  quality: "bilinear",
});

var total = 0;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
const port = 8443;

const dirTree = require("directory-tree");
const tree = dirTree("src/EditingPage/layers");

app.get("/getFolderTree", (req, res) => {
  //console.log(JSON.stringify(tree));
  res.send(JSON.stringify(tree));
});

//s3Actions.uploadFile("src/EditingPage/layers/ball/red eye ball_sr.png");
//uploadFile("src/EditingPage/layers/ball/white eye ball.png");
//s3Actions.emptyS3Directory(process.env.BUCKET_NAME, "src/");
// tree &&
//   tree.children &&
//   tree.children.forEach((items) => {
//     items &&
//       items.children &&
//       items.children.forEach((item) => s3Actions.uploadFile(item.path));
//   });

app.get(
  "/.well-known/pki-validation/46ECBDC8F972F4C8A73EEFF7BE4D4D96.txt",
  (req, res) => {
    var options = {
      root: path.join(__dirname),
    };

    var fileName = "46ECBDC8F972F4C8A73EEFF7BE4D4D96.txt";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Sent:", fileName);
      }
    });
  }
);

app.get("/getTotalUsers", (req, res) => {
  const data = db.get("TotalUsers").value();
  return res.json(data);
});

app.get("/getTotalItems", (req, res) => {
  const data = db.get("TotalItems").value();
  return res.json(data);
});

app.post("/submitDetails", (request, response) => {
  var startDate = new Date();

  const data = request.body;

  const layerData = [];

  data &&
    data.objects.map((obj) => {
      layerData.push(obj);
    });

  var values = data.total.value;

  if (values > 10000) {
    return;
  }

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
        JSON.parse(layerData[index].width),
        JSON.parse(layerData[index].height)
      );
      const buffer = canvas.toBuffer("image/png", 0);
      fs.writeFileSync(__dirname + `/generated/${hash}.png`, buffer);

      if (tree.children.length === index + 1) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        hash += 1;
      }
    });
    hash += 1;
    values -= 1;
  }
  var endDate = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  console.log("The total Time Taken was : ", seconds);
  const totalUsers = db.get("TotalUsers").value() + 1;
  const totalItems = db.get("TotalItems").value();
  total = data.total.value;

  db.set("TotalUsers", totalUsers).write();
  db.set("TotalItems", data.total.value + totalItems).write();

  return response.json("Success");
  //console.log(db.get("TotalUsers").value(), db.get("TotalItems").value());
});

app.get("/deleteFiles", (req, res) => {
  let number = total;
  console.log(total);
  while (number) {
    fs.unlink(`./generated/${number}.png`, function (err) {
      if (err) throw err;
      console.log("File deleted!");
    });

    number -= 1;
  }
  return res.json("Success");
});

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
  console.log(`Example app listening at http://sickalien.store:${port}`);
});
