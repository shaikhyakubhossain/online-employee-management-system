const {sendNotification} = require("../utils/methods");

const applyLeave = async (req, res) => {
    {
        const { leaveType, leaveDateFrom, leaveDateTo, additionalInfo } = req.body;
      
        const userDetails = await Employee.findById(req.user._id);
        // console.log("userDetails", userDetails);
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
                sendNotification(userDetails.regdNo, "Leave Application", "Your leave application has been successfully submitted");
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