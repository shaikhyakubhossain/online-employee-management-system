const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const notificationSchema = new mongoose.Schema({
  notificationId: {
    type: Number,
    unique: true,
  },
  regdNo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

notificationSchema.plugin(autoSequence, { inc_field: "notificationId" });

notificationSchema.statics.createNotification = async function (
  regdNo,
  title,
  message
) {
  if (!regdNo || !message || !title) {
    return { error: "user not logged in" };
  }

  const notification = await this.create({
    regdNo,
    title,
    message,
  });

  return notification;
};

module.exports = mongoose.model("Notification", notificationSchema, "notification");
