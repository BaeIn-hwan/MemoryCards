const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  console.log("aa", __dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log("server on");
});
