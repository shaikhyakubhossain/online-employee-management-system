const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const Employee = require("./model/employee-model");
const Admin = require("./model/admin-model");
const Leave = require("./model/leave-model");
const Notice = require("./model/notice-model");
const Notification = require("./model/notification-model");
const Resign = require("./model/resign-model");
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
    const server = app.listen(PORT, () => {
      console.log("Server is listening on PORT " + PORT);
    });

    console.log("Connected to MongoDB");
    // const emp = mongoose.connection.db.collection("employee");
    // const arr = await emp.find({ regdNo: "123" }).toArray();
    // console.log(await arr);
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/employee-login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const employee = await Employee.login(username, password);
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
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const admin = await Admin.login(username, password);
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
    username,
    designation,
    regdNo,
    email,
    password,
    confirmPassword,
    genderCode,
  } = req.body;
  try {
    const employee = await Employee.signup(
      firstName,
      lastName,
      username,
      designation,
      regdNo,
      email,
      password,
      confirmPassword,
      genderCode
    );
    if (employee.error) {
      return res.status(400).json({ error: employee.error });
    } else {
      const token = createToken(employee._id);
      const data = {
        employeeId: employee.employeeId,
        firstName,
        lastName,
        username,
        designation,
        regdNo,
        email,
        genderCode: employee.genderCode,
        token,
      }
      res.status(200).json({
        data,
        role: "employee",
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server error" });
  }
});

app.post("/admin-signup", async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    designation,
    regdNo,
    email,
    password,
    confirmPassword,
    genderCode,
  } = req.body;
  try {
    const admin = await Admin.signup(
      firstName,
      lastName,
      username,
      designation,
      regdNo,
      email,
      password,
      confirmPassword,
      genderCode
    );
    if (admin.error) {
      return res.status(400).json({ error: admin.error });
    } else {
      const token = createToken(admin._id);
      const data = {
        employeeId: admin.employeeId,
        firstName,
        lastName,
        username,
        designation,
        regdNo,
        email,
        genderCode: admin.genderCode,
        token,
      }
      res.status(200).json({
        data,
        role: "admin",
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
  const { leaveType, leaveDateFrom, leaveDateTo, additionalInfo } = req.body;

  const userDetails = await Employee.findById(req.user._id);
  // console.log("userDetails", userDetails);
  if (userDetails) {
    try {
      const leave = await Leave.applyLeave(
        userDetails.firstName,
        userDetails.lastName,
        userDetails.employeeId,
        userDetails.designation,
        userDetails.regdNo,
        userDetails.email,
        leaveType,
        leaveDateFrom,
        leaveDateTo,
        additionalInfo
      );
      if (leave.error) {
        return res.status(400).json({ error: leave.error });
      } else {
        const title = "Leave Application";
        const message =
          "Your application for " +
          leaveType +
          " leave from " +
          leaveDateFrom +
          " to " +
          leaveDateTo +
          " has been submitted successfully !";
        const notification = await Notification.createNotification(
          userDetails.regdNo,
          title,
          message
        );
        if (notification.error) {
          return res.status(400).json({ error: notification.error });
        } else {
          res
            .status(200)
            .json({
              message:
                "Your application for leave has been submitted successfully !",
            });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Server error" });
    }
  } else {
    res.status(400).json({ error: "User does not exist" });
  }
});

app.post("/add-notice", async (req, res) => {
  const { title, message } = req.body;
  const notice = await Notice.createNotice(title, message);
  if(notice.error){
    res.status(400).json({ error: notice.error });
  }else{
    res.status(200).json({ message: "Notice added successfully" });
  }
})

app.post("/add-resign", async (req, res) => {
  console.log(req.user);
  const { reason } = req.body;
  const user = await Employee.findById(req.user._id);
  if (user) {
    const resign = await Resign.createResignApplication(user.firstName, user.lastName, user.designation, user.email, user.regdNo, reason);
    if(resign.error){
      res.status(400).json({ error: resign.error });
    }else{
      res.status(200).json({ message: "Resign application submitted successfully" });
    }
  }
  else {
    res.status(400).json({ error: "User does not exist" });
  }
})

app.get("/get-all-leave-applications", async (req, res) => {
  const data = await Leave.find({});
  res.status(200).json({ data });
});

app.get("/get-all-employees", async (req, res) => {
  const employees = await Employee.find({});
  const admin = await Admin.find({});
  const combinedData = [...employees, ...admin];
  res.status(200).json({ data: combinedData });
});

app.get("/get-all-resign-applications", async (req, res) => {
  const data = await Resign.find({});
  res.status(200).json({ data });
});

app.get("/get-all-notices", async (req, res) => {
  const data = await Notice.find({});
  res.status(200).json({ data });
})

app.get("/get-all-notifications", async (req, res) => {
  let regdNo = await Admin.findById(req.user._id).select("regdNo");

  if (!regdNo) {
    regdNo = await Employee.findById(req.user._id).select("regdNo");
  }
  if (regdNo) {
    const data = await Notification.find({ regdNo: regdNo.regdNo });
    res.status(200).json({ data });
  } else {
    res.status(400).json({ error: "User does not exist" });
  }
});

app.patch("/leave-action", async (req, res) => {
  const { _id, action } = req.body;
  try {
    const leave = await Leave.findById(_id);
    if (leave) {
      leave.leaveStatus = action;
      await leave.save();
      const regdNo = await Employee.find({ regdNo: leave.regdNo }).select(
        "regdNo"
      );
      const adminName = await Admin.findById(req.user._id).select(
        "firstName lastName"
      );

      if (regdNo && adminName) {
        const notification = await Notification.createNotification(
          regdNo[0].regdNo,
          "Leave Application",
          "Your leave application has been " +
          action +
          " by " +
          adminName.firstName +
          " " +
          adminName.lastName
        );
        if (notification.error) {
          res.status(400).json({ error: notification.error });
        } else {
          res
            .status(200)
            .json({ message: action + " Leave action updated successfully" });
        }
      }

      res.status(200).json({ message: "Leave action updated successfully" });
    } else {
      res.status(400).json({ error: "Leave not found" });
    }
  } catch (error) { }
});
