const Employee = require("../model/employee-model");
const Admin = require("../model/admin-model");
const { createToken } = require("../secrets/token");

const setModel = (loginRole) => {
    if (loginRole === "admin") {
        return Admin;
    } else if (loginRole === "employee") {
        return Employee
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

module.exports = {
    login
}