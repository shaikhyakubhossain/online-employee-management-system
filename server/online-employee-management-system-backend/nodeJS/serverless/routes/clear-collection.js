const { setModel } = require("../utils/methods");

const clearCollection = async (req, res, collectionName) => {
    await setModel(collectionName).deleteMany({});
    res
      .status(200)
      .json({ message: collectionName + " Collection cleared successfully" });
};

module.exports = { clearCollection };
