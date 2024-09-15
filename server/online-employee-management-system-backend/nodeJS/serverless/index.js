const mongoose = require("mongoose");
const express = require("express");
const { MongoDBUrl } = require("./secrets/api-keys");

const app = express();
const port = 4000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(MongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hi");
});

const server = app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
