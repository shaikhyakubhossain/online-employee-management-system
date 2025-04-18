const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const attendanceSchema = new mongoose.Schema({
  attendanceId: {
    type: Number,
    unique: true,
  },
  employeeId: {
    type: Number,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  regdNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

attendanceSchema.plugin(autoSequence, { inc_field: "attendanceId" });

attendanceSchema.statics.addAttendance = async function (employeeId, firstName, lastName, username, designation, regdNo, email) {

    if(!employeeId || !regdNo || !email || !firstName || !username || !lastName || !designation) {
        return { error: "user not logged in" };
    }

    const addAttendance = await this.create({
        employeeId,
        firstName,
        lastName,
        username,
        designation,
        regdNo,
        email,
    });

  return addAttendance;
};


module.exports = mongoose.model("Attendance", attendanceSchema, "attendance");
