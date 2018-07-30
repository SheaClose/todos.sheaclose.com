const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 8080,
  app = express(),
  path = require("path");

const { exec } = require("child_process");

exec("npm run build", (err, stdout, stderr) => {
  console.log("stderr: ", stderr);
  console.log("stdout: ", stdout);
  console.log("err: ", err);
});
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
