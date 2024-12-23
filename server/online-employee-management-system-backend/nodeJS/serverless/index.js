const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const requireAuth = require("./middleware/require-auth");
const { simpleGet, getNotification, getEmployee } = require("./routes/data-fetch");
const { addResignApplication } = require("./routes/resign");
const { login, signup } = require("./routes/auth");
const { adminAction } = require("./routes/admin-action");
const { applyLeave } = require("./routes/apply-leave");
const { addNotice } = require("./routes/notice");

const corsOrigin = {
  origin: "https://employeeverse.vercel.app",
  // origin: "http://localhost:3000",
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

app.post("/add-notice", async (req, res) => addNotice(req, res));

app.post("/add-resign", async (req, res) => addResignApplication(req, res));

app.get("/get-all-employees", async (req, res) => getEmployee(req, res));

app.get("/get-all-leave-applications", async (req, res) => simpleGet(req, res, "leave"));

app.get("/get-all-resign-applications", async (req, res) => simpleGet(req, res, "resign"));;

app.get("/get-all-notices", async (req, res) => simpleGet(req, res, "notice"));

app.get("/get-all-notifications", async (req, res) => getNotification(req, res));

app.patch("/leave-action", async (req, res) => adminAction(req, res, "leave", { title: "Leave Application", message: "Your leave application has been successfully submitted" }));

app.patch("/resign-action", async (req, res) => adminAction(req, res, "resign", { title: "Resign Application", message: "Your resign application has been successfully submitted" }));