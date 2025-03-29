const Resign = require("../model/resign-model");
const Employee = require("../model/employee-model");
const { sendNotification } = require("../utils/methods");

const addResignApplication = async (req, res) => {
  console.log(req.user);
  const { reason } = req.body;
  const user = await Employee.findById(req.user._id);
  if (user) {
    const resign = await Resign.createResignApplication(
      user.firstName,
      user.lastName,
      user.designation,
      user.email,
      user.regdNo,
      reason
    );
    if (resign.error) {
      res.status(400).json({ error: resign.error });
    } else {
      // res
      //   .status(200)
      //   .json({ message: "Resign application submitted successfully" });
      sendNotification(res, user.regdNo, "Resign Application", "Your resign application has been successfully submitted");
    }
  } else {
    res.status(400).json({ error: "access denied" });
  }
};

module.exports = { addResignApplication };
