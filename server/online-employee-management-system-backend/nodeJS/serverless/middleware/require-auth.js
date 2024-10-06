const jwt = require("jsonwebtoken");
const Employee = require("../model/employee-model");
const Admin = require("../model/admin-model");
const {tokenSecret} = require("../secrets/token");

const requireAuth = async (req, res, next) => {

    const { authorization, role } = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"});
    }

    const token = authorization.split(" ")[1];

    try{
        const {_id} = jwt.verify(token, tokenSecret);

        let user;

        if(role === "admin"){
            user = await Admin.findOne({ _id }).select("_id");
        }
        else if(role === "employee"){
            user = await Employee.findOne({ _id }).select("_id");
        }
        else if(role === "both"){
            user = await Admin.findOne({ _id }).select("_id");
            if(!user){
                user = await Employee.findOne({ _id }).select("_id");
            }
        }
        // const user = await role === "admin" ? Admin.findOne({ _id }).select("_id") : role === "employee" && Employee.findOne({ _id }).select("_id");
        if(!user){
            return res.status(401).json({error: "access denied"});
        }
        else{
            req.user = user;
        }
        next();
    }
    catch(error){
        // console.log("error:", error);
        if(error.message === "jwt expired"){
            return res.status(401).json({error: "token expired"});
        }
        return res.status(401).json({error: "request is not authorized"});
    }
}

module.exports = requireAuth;