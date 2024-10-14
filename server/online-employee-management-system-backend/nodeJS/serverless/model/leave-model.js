const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const leaveSchema = new mongoose.Schema({
  leaveId: {
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
  employeeId: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  regdNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  leaveDateFrom: {
    type: String,
    required: true,
  },
  leaveDateTo: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});

leaveSchema.plugin(autoSequence, { inc_field: "leaveId" });

leaveSchema.statics.applyLeave = async function (
  firstName,
  lastName,
  employeeId,
  designation,
  regdNo,
  email,
  leaveType,
  leaveDateFrom,
  leaveDateTo,
  additionalInfo,
) {
  if (
    !firstName ||
    !lastName ||
    !employeeId ||
    !designation ||
    !regdNo ||
    !email
  ) {
    return { error: "user not logged in" };
  }

  if (!leaveType || !leaveDateFrom || !leaveDateTo) {
    return { error: "All fields must be filled" };
  }

  const leave = await this.create({
    firstName,
    lastName,
    employeeId,
    designation,
    regdNo,
    email,
    leaveType,
    leaveDateFrom,
    leaveDateTo,
    additionalInfo,
    status: "pending",
  });

  return leave;
};

module.exports = mongoose.model("Leave", leaveSchema, "leave");
