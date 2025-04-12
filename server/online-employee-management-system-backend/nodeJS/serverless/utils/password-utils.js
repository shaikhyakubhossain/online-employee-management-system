const bcrypt = require("bcrypt");

const checkPassword = async (actualPassword, inputPassword) => {

    if (actualPassword.slice(0, 4) === "$2b$") {
        const matchPassword = await bcrypt.compare(inputPassword, actualPassword);
    
        if (!matchPassword) {
          return { error: "Incorrect password" };
        }
      }
      else if(actualPassword !== inputPassword){
        return { error: "Incorrect password" };
      }
    
      return { success: true }
  }
  
  const createPassword = async (inputPassword, confirmPassword) => {
    if (inputPassword.length <= 5) {
        return { error: "Password must be at least 6 characters" };
      }
      if(inputPassword !== confirmPassword){
        return { error: "Confirm password does not match with password" };
      }
    
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(inputPassword, salt);
      return hashedPassword
  }

  module.exports = { checkPassword, createPassword }