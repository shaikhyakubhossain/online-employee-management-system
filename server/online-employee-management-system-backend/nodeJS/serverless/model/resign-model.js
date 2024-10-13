const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const resignSchema = new mongoose.Schema({
  resignId: {
    type: Number,
    unique: true,
  },
  regdNo: {
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

resignSchema.statics.createResignApplication = async function (regdNo, reason) {
  if (!regdNo) {
    return { error: "user not logged in" };
  }
  if (!reason) {
    return { error: "All fields must be filled" };
  }

  const resign = await this.create({
    regdNo,
    reason,
    status: "pending",
  });

  return resign;

}

module.exports = mongoose.model("Resign", resignSchema, "resign");