const { setModel, getCollectionLength } = require("../utils/methods");

const simpleGet = async (req, res, dataToGetFromModel) => {
  const data = await setModel(dataToGetFromModel).find({});
  res.status(200).json({ data });
};

const getEmployee = async (req, res) => {
  const {page} = req.query
  const limit = 10
  const employees = await setModel('employee').find({}).skip(page * limit).limit(limit);
  // const admin = await setModel('admin').find({});
  // const combinedData = [...employees, ...admin];
  // console.log(Math.ceil(await getCollectionLength('employee') / limit));
  res.status(200).json({ data: employees, pageCount: Math.ceil(await getCollectionLength('employee') / limit) });
};

const getNotification = async (req, res) => {
    let regdNo = await setModel('admin').findById(req.user._id).select("regdNo");
  
    if (!regdNo) {
      regdNo = await setModel('employee').findById(req.user._id).select("regdNo");
    }
    if (regdNo) {
      const data = await setModel('notification').find({ regdNo: regdNo.regdNo });
      res.status(200).json({ data });
    } else {
      res.status(400).json({ error: "User does not exist" });
    }
  }

module.exports = {
  simpleGet,
  getEmployee,
  getNotification
};
