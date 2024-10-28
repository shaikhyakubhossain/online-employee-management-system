const jwt = require("jsonwebtoken");

const tokenSecret = "huefiweufhwwwwwwwuheufuwhfudwyf7ef8efwef8e7f8e7f8wfe5f4ew6fe646w5";

const createToken = (_id) => {
    return jwt.sign({ _id }, tokenSecret, { expiresIn: "1d" });
  };
  
module.exports = { tokenSecret, createToken }