const Notice = require("../model/notice-model");

const addNotice = async (req, res) => {
  const { title, message } = req.body;
  const notice = await Notice.createNotice(title, message);
  if (notice.error) {
    res.status(400).json({ error: notice.error });
  } else {
    res.status(200).json({ message: "Notice added successfully" });
  }
};

module.exports = { addNotice };
