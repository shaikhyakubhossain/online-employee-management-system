const {setModel} = require('../utils/methods');

const simpleGet = async (req, res, dataToGetFromModel) => {
    const data = await setModel(dataToGetFromModel).find({});
    res.status(200).json({ data });
}

module.exports = {
    simpleGet
}