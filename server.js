const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

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
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
