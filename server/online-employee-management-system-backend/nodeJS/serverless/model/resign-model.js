const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const resignSchema = new mongoose.Schema({
  resignId: {
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
  department: {
    type: String,
    required: true,
  },
  username: {
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
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
}, { timestamps: true });

resignSchema.plugin(autoSequence, { inc_field: "resignId" });

resignSchema.statics.createResignApplication = async function (employeeId, firstName, lastName, designation, department, username, email, regdNo, reason) {
  if (!employeeId || !regdNo || !email || !firstName || !lastName || !designation || !department || !username) {
    return { error: "user not logged in" };
  }
  if (!reason) {
    return { error: "All fields must be filled" };
  }

  const resign = await this.create({
    employeeId,
    firstName,
    lastName,
    designation,
    department,
    username,
    email,
    regdNo,
    reason,
    status: "pending",
  });

  return resign;

}

module.exports = mongoose.model("Resign", resignSchema, "resign");