const {setModel, sendNotification} = require('../utils/methods');
const Employee = require('../model/employee-model');
const Admin = require('../model/admin-model');

const adminAction = async (req, res, actionOnModel, notificationObject) => {
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
        sendNotification(res, regdNo[0].regdNo, notificationObject.title, notificationObject.message);
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