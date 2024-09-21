const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const Employee = require("./model/employee-model");
const { tokenSecret } = require("./secrets/token");
const jwt = require("jsonwebtoken");
const requireAuth = require("./middleware/require-auth");

const createToken = (_id) => {
  return jwt.sign({ _id }, tokenSecret, { expiresIn: "1d" });
};

const corsOrigin = {
  origin: "http://localhost:3000",
  // origin: "http://localhost:3000",
};

const app = express();

app.use(cors(corsOrigin));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(MongoDBUrl)
  .then(async () => {
    server = app.listen(PORT, () => {
      console.log("Server is listening on PORT " + PORT);
    });

    console.log("Connected to MongoDB");
    // const emp = mongoose.connection.db.collection("employee");
    // const arr = await emp.find().toArray();
    // console.log(arr);
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/employee-login", async (req, res) => {
  const { employeeId, password } = req.body;
  console.log(employeeId, password);
  try {
    const employee = await Employee.login(employeeId, password);
    if (employee.error) {
      return res.status(400).json({ error: employee.error });
    } else {
      const token = createToken(employee._id);
      const data = await Employee.findById(employee._id);
      res.status(200).json({ data, token });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server error" });
  }
});

app.post("/employee-signup", async (req, res) => {
  const {
    firstName,
    lastName,
    designation,
    regdNo,
    email,
    password,
    genderCode,
  } = req.body;
  try {
    const employee = await Employee.signup(firstName, lastName, designation, regdNo, email, password, genderCode);
    if (employee.error) {
      return res.status(400).json({ error: employee.error });
    } else {
      const token = createToken(employee._id);
      res
        .status(200)
        .json({
          firstName,
          lastName,
          designation,
          regdNo,
          email,
          genderCode,
          token,
        });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server error" });
  }
});

app.use(requireAuth);

app.get("/", (req, res) => {
  res.send({
    message: "hello",
  });
});