const Resign = require("../model/resign-model");
const Employee = require("../model/employee-model");
const { sendNotification, sendNotificationToAll } = require("../utils/methods");

const addResignApplication = async (req, res) => {
  console.log(req.user);
  const { reason } = req.body;
  const user = await Employee.findById(req.user._id);
  if (user) {
    const resign = await Resign.createResignApplication(
      user.employeeId,
      user.firstName,
      user.lastName,
      user.designation,
      user.department,
      user.username,
      user.email,
      user.regdNo,
      reason
    );
    if (resign.error) {
      res.status(400).json({ error: resign.error });
    } else {
                const sendToAdmins = await sendNotificationToAll("admin", "Resign Application", "A resign application has been submitted by " + user.firstName + " " + user.lastName);
                const sendToUser = await sendNotification(user.regdNo, "Resign Application", "Your resign application has been successfully submitted");
                if (sendToAdmins.error || sendToUser.error) {
                  return res.status(400).json({ error: "Server error" });
                } else {
                  return res.status(200).json({ message: "Resign application submitted successfully" });
                }
    }
  } else {
    res.status(400).json({ error: "access denied" });
  }
};

module.exports = { addResignApplication };
