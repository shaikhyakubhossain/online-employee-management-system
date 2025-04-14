const { setGDriveFolder } = require('../utils/g-drive')
const { gDriveApiKey } = require('../secrets/api-keys')

const getPDF = async (req, res) => {
    const { section } = req.query;
    if(section){
        try{

            const folderId = setGDriveFolder(section)
            const mainUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${gDriveApiKey}`
            const response = await fetch(mainUrl)
            const data = await response.json()
            res.status(200).json({ data: data.files })
        }
        catch{
            res.status(400).json({ error: "Failed to fetch files" })
        }
    }
    else{
        res.status(400).json({ error: "Not authorized" })
    }
}

module.exports = {
    getPDF
}