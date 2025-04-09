const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

counterSchema.statics.reset = async function (collectionId) {
  if(!collectionId) {
    return { error: "Collection ID is required"}
  }
  else {
    const collectionToReset = await this.findOne({ id: collectionId + "Id" });
    if(!collectionToReset){
      return { error: "Collection does not exist" }
    }
    else{
      collectionToReset.seq = 0;
      await collectionToReset.save();
    }

  }
  return {message: "Collection reset successfully"}
}

module.exports = mongoose.model("Counters", counterSchema, "counters");
