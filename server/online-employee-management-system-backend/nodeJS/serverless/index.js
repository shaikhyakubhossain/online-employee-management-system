require("dotenv").config();
const corsConfig = require("./middleware/cors-config");
const { MongoDBUrl, PORT } = require("./secrets/api-keys");
const mongoose = require("mongoose");
const express = require("express");
const requireAuth = require("./middleware/require-auth");
const authRouter = require("./routes/auth");
const { getAllRecords, getNotification } = require("./routes/data-fetch");
const { getCSV } = require("./routes/get-csv");
const { addResignApplication } = require("./routes/resign");
const { adminAction } = require("./routes/admin-action");
const { getPDF } = require('./routes/get-pdf')
const { applyLeave } = require("./routes/apply-leave");
const { addNotice } = require("./routes/notice");
const { clearCollection } = require("./routes/clear-collection");
const { changePassword } = require("./routes/change-password");

const app = express();

app.use(corsConfig);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/auth", authRouter);

app.use(requireAuth);

app.post("/apply-leave", async (req, res) => applyLeave(req, res, "employee"));

app.post("/add-notice", async (req, res) => addNotice(req, res));

app.post("/add-resign", async (req, res) => addResignApplication(req, res));

app.get("/get-all-employees", async (req, res) => getAllRecords(req, res, "employee"));

app.get("/get-all-leave-applications", async (req, res) => getAllRecords(req, res, "leave"));

app.get("/get-all-resign-applications", async (req, res) => getAllRecords(req, res, "resign"));;

app.get("/get-all-notices", async (req, res) => getAllRecords(req, res, "notice"));

app.get("/get-all-attendances", async (req, res) => getAllRecords(req, res, "attendance"));

app.get("/get-all-notifications", async (req, res) => getNotification(req, res));

app.get("/get-attendance-csv", async (req, res) => getCSV(req, res, "attendance"));

app.get("/get-pdf-data", async (req, res) => getPDF(req, res));

app.patch("/leave-action", async (req, res) => adminAction(req, res, "leave"));

app.patch("/resign-action", async (req, res) => adminAction(req, res, "resign"));

app.patch("/change-password", async (req, res) => changePassword(req, res));

app.delete("/clear-attendance", async (req, res) => clearCollection(req, res, "attendance"));


mongoose.connect(MongoDBUrl).then(async (db) => {
  app.listen(PORT, () => {
    console.log("Server is listening on PORT " + PORT);
  });
  console.log("Connected to MongoDB");
  // console.log(await db.connection.db.collection("admin").find({}).toArray());
})
.catch((err) => {
  console.log(err);
});