const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const port = 5000;

const dirTree = require("directory-tree");
const tree = dirTree("src/layers");

app.get("/getFolderTree", (req, res) => {
  res.send(JSON.stringify(tree));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
