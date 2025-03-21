const {sendNotification} = require("../utils/methods");
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
                sendNotification(res, userDetails.regdNo, "Leave Application", "Your leave application for " + leaveType + " " + " from " + leaveDateFrom + " to " + leaveDateTo + " has been successfully submitted");
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