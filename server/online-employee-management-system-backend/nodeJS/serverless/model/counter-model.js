const mongoose = require("mongoose");
const autoSequence = require("mongoose-sequence")(mongoose);

const counterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

counterSchema.statics.reset = async function (collectionId) {
  if(!collectionId) {
    return { error: "Collection ID is required"}
  }
  else {
    const collectionToReset = await this.find({ id: collectionId })

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



module.exports = mongoose.model("Counter", counterSchema, "counter");
