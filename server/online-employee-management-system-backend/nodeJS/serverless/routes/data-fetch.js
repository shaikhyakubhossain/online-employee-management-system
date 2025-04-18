const { setModel, getCollectionLength } = require("../utils/methods");

const getAllRecords = async (req, res, dataToGetFromModel) => {
  const { page, specificSearch, shouldReverse } = req.query;
  const limit = 10;
  const data = await setModel(dataToGetFromModel)
    .find(
      specificSearch
        ? {
            $or: [
              { firstName: { $regex: specificSearch, $options: "i" } },
              { lastName: { $regex: specificSearch, $options: "i" } },
              { status: { $regex: specificSearch, $options: "i" } },
            ],
          }
        : {}
    ).sort({ _id: shouldReverse === "true" ? -1 : 1 })
    .skip(page * limit)
    .limit(limit);
    // console.log(data)
  res.status(200).json({
    data: data,
    pageCount: Math.ceil(
      (await getCollectionLength(dataToGetFromModel))
    ),
  });
};

const getNotification = async (req, res) => {
  let regdNo = await setModel("admin").findById(req.user._id).select("regdNo");

  if (!regdNo) {
    regdNo = await setModel("employee").findById(req.user._id).select("regdNo");
  }
  if (regdNo) {
    const data = await setModel("notification").find({ regdNo: regdNo.regdNo }).sort({ _id: req.query.shouldReverse === "true" ? -1 : 1 });
    res.status(200).json({ data });
  } else {
    res.status(400).json({ error: "User does not exist" });
  }
};

module.exports = {
  getAllRecords,
  getNotification,
  // getEmployee,
};
