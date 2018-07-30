const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 8080,
  app = express(),
  path = require("path");

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/../build")));

app.get("*", (req, res) => {
  console.log("landed");
  res.sendFile(path.join(__dirname + "/../build/index.html"));
});
app.listen(port, () => {
  console.log("Server listening on port", port);
});
