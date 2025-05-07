const { Parser } = require("json2csv");
const { setModel } = require("../utils/methods");

const getCSV = async (req, res) => {
    // const { collection } = req.query;
    const collection = "attendance";
    if(!collection) return res.status(400).json({ error: "Collection name is required" });
    try{
        const data = await setModel(collection).find({}).lean();
        const json2csv = new Parser();
        const csv = json2csv.parse(data);
        res.header("Content-Type", "text/csv");
        res.attachment(`${collection}.csv`);
        res.status(200).send(csv);
    }
    catch(e){
        console.log(e);
        res.status(400).json({ error: "Failed to download csv" })
    }
}

module.exports = { getCSV };