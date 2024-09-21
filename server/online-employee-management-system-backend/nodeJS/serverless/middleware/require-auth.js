const jwt = require("jsonwebtoken");
const Employee = require("../model/employee-model");
const {tokenSecret} = require("../secrets/token");

const requireAuth = async (req, res, next) => {

    const { authorization } = req.header;

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"});
    }

    const token = authorization.split(" ")[1];

    try{
        const {_id} = jwt.verify(token, tokenSecret);
        req.employee = await Employee.findOne({ _id }).select("_id");
        next();
    }
    catch(error){
        console.log("error");
        return res.status(401).json({error: "request is not authorized"});
    }
}

module.exports = requireAuth;