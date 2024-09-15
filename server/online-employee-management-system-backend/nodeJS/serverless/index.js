const mongoose = require("mongoose");
const express = require("express");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");

const app = express();

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
  res.send({
    message: "hello",
  });
});

const server = app.listen(PORT, () => {
  console.log("Server is listening on PORT " + PORT);
});
