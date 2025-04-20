const { Parser } = require("json2csv");
const { setModel } = require("../utils/methods");

const getCSV = async (req, res, collectionName) => {
    try{
        const data = await setModel(collectionName).find({}).lean();
        const json2csv = new Parser();
        const csv = json2csv.parse(data);
        res.header("Content-Type", "text/csv");
        res.attachment(`${collectionName}.csv`);
        res.status(200).send(csv);
    }
    catch(e){
        console.log(e);
        res.status(400).json({ error: "Failed to download csv" })
    }
}

module.exports = { getCSV };