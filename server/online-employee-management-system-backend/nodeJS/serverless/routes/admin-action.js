const {setModel, sendNotification} = require('../utils/methods');
const Employee = require('../model/employee-model');
const Admin = require('../model/admin-model');

const adminAction = async (req, res, actionOnModel) => {
    const { _id, action } = req.body;
    console.log(_id, action);
  try {
    const leave = await setModel(actionOnModel).findById(_id);
    if (leave) {
      leave.status = action;
      await leave.save();
      const regdNo = await Employee.find({ regdNo: leave.regdNo }).select(
        "regdNo"
      );
      const adminName = await Admin.findById(req.user._id).select(
        "firstName lastName"
      );
      if (regdNo && adminName) {
        const notification = await sendNotification(regdNo[0].regdNo, actionOnModel === 'leave' ? "Leave" : "Resign", "Your " + actionOnModel + " has been " + action + " by " + adminName.firstName + " " + adminName.lastName);
        if (notification.error) {
          return res.status(400).json({ error: "Server error" });
        }
        else {
          return res.status(200).json({ message: "Successfully done" });
        }
      }
      console.log("hello")
    } else {
      res.status(400).json({ error: actionOnModel + " not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    adminAction
}