const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 8080,
  app = express(),
  path = require("path");

const { exec } = require("child_process");

exec(
  "./node_modules/react-scripts/bin/react-scripts.js build",
  (err, stdout, stderr) => {
    if (err) console.log("err: ", err);
    if (stdout) console.log("stdout: ", stdout);
    if (stderr) console.log("stderr: ", stderr);
  }
);
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
