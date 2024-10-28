const {setModel, sendNotification} = require('../utils/methods');

const adminAction = async (req, res, actionOnModel, notificationObject) => {
    const { _id, action } = req.body;
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
        sendNotification(regdNo[0].regdNo, notificationObject.title, notificationObject.message);
      }
      res.status(200).json({ message: actionOnModel + " action updated successfully" });
    } else {
      res.status(400).json({ error: actionOnModel + " not found" });
    }
  } catch (error) { }
}

module.exports = {
    adminAction
}