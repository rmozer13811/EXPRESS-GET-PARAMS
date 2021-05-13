// app.js
const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  console.log(req);
});

app.listen(3000, () => console.log("App listening on port 3000!"));

app.get("/users/:username", (req, res) => {
  res.send(req.params);
});
