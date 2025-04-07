const { setModel } = require("../utils/methods");
const { AuthKey } = require("../secrets/api-keys");

const clearCollection = async (req, res, collectionName) => {
  const { secretKey } = req.headers;
  if (secretKey === AuthKey) {
    await setModel(collectionName).deleteMany({});
    res
      .status(200)
      .json({ message: collectionName + " Collection cleared successfully" });
  }
  else {
    res.status(400).json({ error: "You are not authorized" });
  }
};

module.exports = { clearCollection };
