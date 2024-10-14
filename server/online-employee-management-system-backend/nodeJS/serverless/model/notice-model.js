const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const noticeSchema = new mongoose.Schema({
  noticeId: {
    type: Number,
    unique: true,
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

noticeSchema.plugin(autoSequence, { inc_field: "noticeId" });

noticeSchema.statics.createNotice = async function (
  title,
  message
){

    if(!title || !message){
      return { error: "fields cannot be empty" };
    }

    const notice = await this.create({
      title,
      message,
    });

    return notice;
}

module.exports = mongoose.model("Notice", noticeSchema, 'notice')