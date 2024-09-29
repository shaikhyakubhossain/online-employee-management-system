const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const Employee = require("./model/employee-model");
const Admin = require("./model/admin-model");
const Leave = require("./model/leave-model");
const { tokenSecret } = require("./secrets/token");
const jwt = require("jsonwebtoken");
const requireAuth = require("./middleware/require-auth");

const createToken = (_id) => {
  return jwt.sign({ _id }, tokenSecret, { expiresIn: "1d" });
};

const corsOrigin = {
  origin: "https://driemsconnect.vercel.app",
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
    // const emp = mongoose.connection.db.collection("leave");
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
      res.status(200).json({ data, role: "employee", token });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server error" });
  }
});

app.post("/admin-login", async (req, res) => {
  const { employeeId, password } = req.body;
  console.log(employeeId, password);
  try {
    const admin = await Admin.login(employeeId, password);
    if (admin.error) {
      return res.status(400).json({ error: admin.error });
    } else {
      const token = createToken(admin._id);
      const data = await Admin.findById(admin._id);
      res.status(200).json({ data, role: "admin", token });
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

app.post("/apply-leave", async (req, res) => {
  const {
    firstName,
    lastName,
    employeeId,
    designation,
    regdNo,
    email,
    leaveType,
    leaveDateFrom,
    leaveDateTo,
    additionalInfo
  } = req.body;

  try{
    const leave = await Leave.applyLeave(firstName, lastName, employeeId, designation, regdNo, email, leaveType, leaveDateFrom, leaveDateTo, additionalInfo);
    if(leave.error){
      return res.status(400).json({error: leave.error});
    }else{
      res.status(200).json({message: "Your application for leave has been submitted successfully !"});
    }
  }catch(error){
    console.log(error);
    res.status(400).json({error: "Server error"});
  }
});

app.get("/get-all-leave-applications", async (req, res) => {
  const data = await Leave.find({});
  res.status(200).json({data});
});

app.get("/get-all-employees", async (req, res) => {
  const data = await Employee.find({});
  res.status(200).json({data});
});

