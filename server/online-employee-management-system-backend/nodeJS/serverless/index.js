const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const Employee = require("./model/employee-model");
const Admin = require("./model/admin-model");
const Notice = require("./model/notice-model");
const Notification = require("./model/notification-model");
const Resign = require("./model/resign-model");
const requireAuth = require("./middleware/require-auth");
const { login, signup, simpleGet } = require("./routes/data-fetch");
const { adminAction } = require("./routes/admin-action");
const { applyLeave } = require("./routes/apply-leave");

const corsOrigin = {
  // origin: "https://driemsconnect.vercel.app",
  origin: "http://localhost:3001",
};

const app = express();

app.use(cors(corsOrigin));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose.connect(MongoDBUrl).then(async () => {
    const server = app.listen(PORT, () => {
      console.log("Server is listening on PORT " + PORT);
    });
    console.log("Connected to MongoDB");
    // const emp = mongoose.connection.db.collection("admin");
    // const arr = await emp.find({}).toArray();
    // console.log(await arr);
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/employee-login", async (req, res) => login(req, res, "employee"));

app.post("/admin-login", async (req, res) => login(req, res, "admin"));

app.post("/employee-signup", async (req, res) => signup(req, res, "employee"));

app.post("/admin-signup", async (req, res) => signup(req, res, "admin"));

app.use(requireAuth);

app.post("/apply-leave", async (req, res) => applyLeave(req, res, "employee"));

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
    res.status(400).json({ error: "access denied" });
  }
})

app.get("/get-all-employees", async (req, res) => getEmployee(req, res));

app.get("/get-all-leave-applications", async (req, res) => simpleGet(req, res, "leave"));

app.get("/get-all-resign-applications", async (req, res) => simpleGet(req, res, "resign"));;

app.get("/get-all-notices", async (req, res) => simpleGet(req, res, "notice"));

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

app.patch("/leave-action", async (req, res) => adminAction(req, res, "leave", { title: "Leave Application", message: "Your leave application has been successfully submitted" }));

app.patch("/resign-action", async (req, res) => adminAction(req, res, "resign", { title: "Resign Application", message: "Your resign application has been successfully submitted" }));