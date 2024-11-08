const jwt = require("jsonwebtoken");
require('dotenv').config();

const tokenSecret = process.env.OEMS_JWT_VERIFY_TOKEN;

const createToken = (_id) => {
    return jwt.sign({ _id }, tokenSecret, { expiresIn: "1d" });
  };
  
module.exports = { tokenSecret, createToken }