const { createToken } = require("../secrets/token");
const { SecretCode } = require("../secrets/api-keys");
const { setModel } = require("../utils/methods");

const login = async (req, res, loginRole) => {
    const { username, password } = req.body;
    // console.log(username, password);
    try {
      const user = await setModel(loginRole).login(username, password);
      // console.log(user);
      if (user.error) {
        return res.status(400).json({ error: user.error });
      } else {
        const token = createToken(user._id);
        const data = await setModel(loginRole).findById(user._id);
          // const allowedIP = '123.45.67.89';
          // const requestIP = req.ip;
          //if (requestIP === allowedIP) {
            const userAlreadyPresent = await setModel("attendance").findOne({ employeeId: user.employeeId });
            if(!userAlreadyPresent && loginRole === "employee"){ 
              await setModel("attendance").addAttendance(user.employeeId, user.firstName, user.lastName, user.designation, user.regdNo, user.email);
            }
          //}
        res.status(200).json({ data: data, role: loginRole, token: token });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Server error" });
    }
  };
  
  const signup = async (req, res, signUpRole) => {
    const {
      secretCode,
    } = req.body;
    // console.log("req.body here", req.body);
    if (secretCode !== SecretCode) {
      return res.status(400).json({ error: "You are not authorized" });
    }
    try {
      // console.log(req.body);
      const user = await setModel(signUpRole).signup(req.body);
      if (user.error) {
        return res.status(400).json({ error: user.error });
      } else {
        const token = createToken(user._id);
        const data = {
          ...user,
          token,
        };
        res.status(200).json({
          data,
          role: signUpRole,
          token,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Server error" });
    }
  };
  
  module.exports = {
    login,
    signup,
  };