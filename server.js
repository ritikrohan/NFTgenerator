const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const app = express();
const fs = require("fs");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const s3Actions = require("./s3Actions");
var multer = require("multer");

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

app.get("/getFolderTree", (req, res) => {
  const uuid = req.query.uuid;
  const tree = dirTree(`src/EditingPage/layers/${uuid}`);
  res.send(JSON.stringify(tree));
});

app.get("/getTotalUsers", (req, res) => {
  const data = db.get("TotalUsers").value();
  return res.json(data);
});

app.get("/getTotalItems", (req, res) => {
  const data = db.get("TotalItems").value();
  return res.json(data);
});

const dest = `src/EditingPage/layers/`;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    if (fs.existsSync(`${dest}/${file.fieldname}`)) {
      cb(null, `${file.fieldname}/${file.originalname}`);
    } else {
      fs.mkdirSync(`${dest}/${file.fieldname}`, { recursive: true });
      cb(null, `${file.fieldname}/${file.originalname}`);
    }
  },
});

const fields = [];
var filePaths = new Set();

var upload = multer({ storage: storage }).fields(fields);

app.post("/uploadFiles", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
});

app.post("/uploadPath", (req, res) => {
  req.body.forEach((file) => {
    const filePath = file.path.split("/")[1];
    const hashKey = file.uuid;
    filePaths.add(hashKey + "/" + filePath);
  });

  filePaths.forEach((file) => {
    fields.push({ name: file });
  });
});

app.post("/deleteLocalFiles", (req, res) => {
  filePaths.forEach((fileName) => {
    fs.rmdir(`./public/UserData/${fileName}`, { recursive: true }, (err) => {
      if (err) {
        return console.log("error occurred in deleting directory", err);
      }

      console.log("Directory deleted successfully");
    });
  });
});

app.post("/uploadToS3", (req, res) => {
  const folderStructure = dirTree("public/UserData");

  folderStructure &&
    folderStructure.children &&
    folderStructure.children.forEach((items) => {
      items &&
        items.children &&
        items.children.forEach((item) => s3Actions.uploadFile(item.path));
    });
});

app.post("/submitDetails", (request, response) => {
  const data = request.body;
  const uuid = data.uuid;
  const tree = dirTree(`src/EditingPage/layers/${uuid}`);
  var startDate = new Date();

  const layerData = [];

  data &&
    data.objects.map((obj) => {
      layerData.push(obj);
    });

  // sorting based on depth
  layerData &&
    layerData.sort((a, b) => {
      return a.depth - b.depth;
    });

  var values = data.total.value;

  if (values > 10000) {
    return;
  }

  const folderLayers = tree.children;

  const finalLayers = [];

  // sorting the tree layers based on depth
  layerData.forEach((item) => {
    finalLayers.push(folderLayers.filter((obj) => obj.name === item.name)[0]);
  });

  tree.children = finalLayers;

  if (fs.existsSync(`generated/${uuid}`) === false) {
    fs.mkdirSync(`generated/${uuid}`, { recursive: true });
    console.log("Ho gya");
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
      fs.writeFileSync(__dirname + `/generated/${uuid}/${hash}.png`, buffer);

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

//s3Actions.uploadFile("uuid/src/EditingPage/layers/ball/red eye ball_sr.png");
//uploadFile("src/EditingPage/layers/ball/white eye ball.png");
//s3Actions.emptyS3Directory(process.env.BUCKET_NAME, "src/");
// tree &&
//   tree.children &&
//   tree.children.forEach((items) => {
//     items &&
//       items.children &&
//       items.children.forEach((item) => s3Actions.uploadFile(item.path));
//   });
