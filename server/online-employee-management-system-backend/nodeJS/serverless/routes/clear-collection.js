const { setModel } = require("../utils/methods");

const clearCollection = async (req, res, collectionName) => {
    await setModel(collectionName).deleteMany({});
    const resetAttendanceCounter = await setModel("counters").reset(collectionName);
    res
      .status(200)
      .json({ message: collectionName + " Collection cleared successfully" });
};

module.exports = { clearCollection };
