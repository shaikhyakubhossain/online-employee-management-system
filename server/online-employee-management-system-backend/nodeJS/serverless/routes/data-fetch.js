const { setModel } = require("../utils/methods");

const simpleGet = async (req, res, dataToGetFromModel) => {
  const data = await setModel(dataToGetFromModel).find({});
  res.status(200).json({ data });
};

const getEmployee = async (req, res) => {
  const employees = await Employee.find({});
  const admin = await Admin.find({});
  const combinedData = [...employees, ...admin];
  res.status(200).json({ data: combinedData });
};

module.exports = {
  simpleGet,
  getEmployee,
};
