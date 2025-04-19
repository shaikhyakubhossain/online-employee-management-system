const {sendNotification, sendNotificationToAll} = require("../utils/methods");
const { setModel } = require("../utils/methods");
const Leave = require("../model/leave-model");

const applyLeave = async (req, res, leaveAppliedBy) => {
    {
        const { leaveType, leaveDateFrom, leaveDateTo, additionalInfo } = req.body;
      
        const userDetails = await setModel(leaveAppliedBy).findById(req.user._id);
        console.log("userDetails", userDetails);
        if (userDetails) {
          try {
            const leave = await Leave.applyLeave(
              userDetails.firstName,
              userDetails.lastName,
              userDetails.employeeId,
              userDetails.designation,
              userDetails.department,
              userDetails.username,
              userDetails.regdNo,
              userDetails.email,
              leaveType,
              leaveDateFrom,
              leaveDateTo,
              additionalInfo
            );
            if (leave.error) {
              return res.status(400).json({ error: leave.error });
            } else {
                const sendToAdmins = await sendNotificationToAll("admin", "Leave Application", "A leave application has been submitted by " + userDetails.firstName + " " + userDetails.lastName);
                const sendToUser = await sendNotification(userDetails.regdNo, "Leave Application", "Your leave application for " + leaveType + " " + " from " + leaveDateFrom + " to " + leaveDateTo + " has been successfully submitted");
                if (sendToAdmins.error || sendToUser.error) {
                  return res.status(400).json({ error: "Server error" });
                } else {
                  return res.status(200).json({ message: "Leave application submitted successfully" });
                }
            }
          } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Server error" });
          }
        } else {
          res.status(400).json({ error: "User does not exist" });
        }
      }
}

module.exports = { applyLeave };