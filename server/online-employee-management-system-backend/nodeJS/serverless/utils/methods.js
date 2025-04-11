const Employee = require("../model/employee-model");
const Admin = require("../model/admin-model");
const Leave = require("../model/leave-model");
const Notice = require("../model/notice-model");
const Notification = require("../model/notification-model");
const Resign = require("../model/resign-model");
const Attendance = require("../model/attendance-model");
const Counters = require("../model/counters-model");

const setModel = (modelName) => {
  switch (modelName) {
    case "admin":
      return Admin;
    case "employee":
      return Employee;
    case "attendance":
      return Attendance;
    case "resign":
      return Resign;
    case "leave":
      return Leave;
    case "notice":
      return Notice;
    case "notification":
      return Notification;
    case "counters":
      return Counters;
    default:
      return null;
  }
};

const setGDriveFolder = (section) => {
  switch (section) {
    case "caseStudy":
      return "1RxgeOZoYDW2geOX-tVhxCZh7zraP0_bB";
    case "project":
      return "1Tje6o1_K3awW0NEWfGvw02cYgcl4zech";
    default:
      return null;
  }
};

const getCollectionLength = async (collectionName) => {
  return await setModel(collectionName).countDocuments();
};

const sendNotification = async (res, regdNo, title, message) => {
  const notification = await Notification.createNotification(
    regdNo,
    title,
    message
  );
  if (notification.error) {
    res.status(400).json({ error: notification.error });
  } else {
    res.status(200).json({ message: "successfully done" });
  }
};

module.exports = { setModel, sendNotification, getCollectionLength, setGDriveFolder };
