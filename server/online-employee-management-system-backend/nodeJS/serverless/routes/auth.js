const { createToken } = require("../secrets/token");
const { SecretCode } = require("../secrets/api-keys");
const {setModel} = require('../utils/methods');

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
            res.status(200).json({ data: data, role: loginRole, token: token });
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
        department,
        regdNo,
        email,
        password,
        confirmPassword,
        genderCode,
        secretCode
      } = req.body;
      console.log("req.body here", req.body)
      if (secretCode !== SecretCode) {
        return res.status(400).json({ error: "You are not authorized" });
      }
      try {
        const user = await setModel(loginRole).signup(
          firstName,
          lastName,
          username,
          designation,
          department,
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
            department,
            regdNo,
            email,
            genderCode,
            token,
          }
          res.status(200).json({
            data,
            role: loginRole,
            token,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Server error" });
      }
}

module.exports = {
    login,
    signup,
}