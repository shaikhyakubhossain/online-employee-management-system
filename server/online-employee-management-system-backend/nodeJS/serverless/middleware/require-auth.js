const jwt = require("jsonwebtoken");
const Employee = require("../model/employee-model");
const Admin = require("../model/admin-model");
const {tokenSecret} = require("../secrets/token");

const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"});
    }

    const token = authorization.split(" ")[1];

    try{
        const {_id} = jwt.verify(token, tokenSecret);

        let user;

        if(req.headers.role === "admin"){
            user = await Admin.findOne({ _id }).select("_id");
        }
        else if(req.headers.role === "employee"){
            user = await Employee.findOne({ _id }).select("_id");
        }
        // const user = await req.headers.role === "admin" ? Admin.findOne({ _id }).select("_id") : req.headers.role === "employee" && Employee.findOne({ _id }).select("_id");
        if(!user){
            return res.status(401).json({error: "access denied"});
        }
        else{
            req.user = user;
        }
        console.log("req.user: not null");
        next();
    }
    catch(error){
        console.log("error");
        return res.status(401).json({error: "request is not authorized"});
    }
}

module.exports = requireAuth;