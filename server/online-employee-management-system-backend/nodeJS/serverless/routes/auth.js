const Employee = require("../model/employee-model");
const Admin = require("../model/admin-model");
const Leave = require("../model/leave-model");
const Notice = require("../model/notice-model");
const Notification = require("../model/notification-model");
const Resign = require("../model/resign-model");
const { createToken } = require("../secrets/token");
const { SecretCode } = require("../secrets/api-keys");

const setModel = (modelName) => {
   switch(modelName){
     case "admin":
       return Admin;
     case "employee":
       return Employee;
    case "resign":
      return Resign;
    case "leave":
      return Leave;
    case "notice":
      return Notice;
    case "notification":
      return Notification;
     default:
       return null
   }
}

const login = async (req, res, loginRole) => {
        const { username, password } = req.body;
        console.log(username, password);
        try {
          const user = await setModel(loginRole).login(username, password)
          console.log(user);
          if (user.error) {
            return res.status(400).json({ error: user.error });
          } else {
            const token = createToken(user._id);
            const data = await setModel(loginRole).findById(user._id) 
            res.status(200).json({ data: data, role: loginRole === "admin" ? "admin" : "employee", token: token });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({ error: "Server error" });
        }
}

const signup = async (req, res, loginRole) => {
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
        secretCode
      } = req.body;
      if (secretCode !== SecretCode) {
        return res.status(400).json({ error: "You are not authorized" });
      }
      try {
        const user = await setModel(loginRole).signup(
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
        if (user.error) {
          return res.status(400).json({ error: user.error });
        } else {
          const token = createToken(user._id);
          const data = {
            employeeId: user.employeeId,
            firstName,
            lastName,
            username,
            designation,
            regdNo,
            email,
            genderCode: user.genderCode,
            token,
          }
          res.status(200).json({
            data,
            role: loginRole === "admin" ? "admin" : "employee",
            token,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Server error" });
      }
}

const simpleGet = async (req, res, dataToGetFromModel) => {
    const data = await setModel(dataToGetFromModel).find({});
    res.status(200).json({ data });
}

module.exports = {
    login,
    signup,
    simpleGet
}