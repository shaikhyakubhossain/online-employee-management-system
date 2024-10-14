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
});

resignSchema.plugin(autoSequence, { inc_field: "resignId" });

resignSchema.statics.createResignApplication = async function (firstName, lastName, designation, email, regdNo, reason) {
  if (!regdNo || !email || !firstName || !lastName || !designation) {
    return { error: "user not logged in" };
  }
  if (!reason) {
    return { error: "All fields must be filled" };
  }

  const resign = await this.create({
    firstName,
    lastName,
    designation,
    email,
    regdNo,
    reason,
    status: "pending",
  });

  return resign;

}

module.exports = mongoose.model("Resign", resignSchema, "resign");