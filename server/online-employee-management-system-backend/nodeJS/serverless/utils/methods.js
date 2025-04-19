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

const getCollectionLength = async (collectionName) => {
  return await setModel(collectionName).countDocuments();
};

const sendNotification = async (regdNo, title, message) => {
  const notification = await Notification.createNotification(
    regdNo,
    title,
    message
  );
  if (notification.error) {
    return ({ error: notification.error });
  }
  else {
    return ({ message: "successfully done" });
  }
};

const sendNotificationToAll = async (collectionName, title, message) => {
  const sendTo = await setModel(collectionName).find({}).select("regdNo");
  for (let i = 0; i < sendTo.length; i++) {
    const send = await sendNotification(sendTo[i].regdNo, title, message);
    if (send.error) {
      return ({ error: send.error });
    }
  }
  return ({ message: "successfully done" });
};



module.exports = { setModel, sendNotification, sendNotificationToAll, getCollectionLength };
