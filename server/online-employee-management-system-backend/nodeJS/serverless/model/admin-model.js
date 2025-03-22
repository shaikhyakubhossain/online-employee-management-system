const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const autoSequence = require("mongoose-sequence")(mongoose);

const adminSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  regdNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  genderCode: {
    type: String,
    required: true,
  }
});

// adminSchema.plugin(autoSequence, { inc_field: "employeeId" });

adminSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  designation,
  regdNo,
  email,
  password,
  confirmPassword,
  genderCode
) {
  if (
    !firstName ||
    !lastName ||
    !designation ||
    !regdNo ||
    !email ||
    !genderCode
  ) {
    return { error: "All fields must be filled" };
  }

  if (!validator.isEmail(email)) {
    return { error: "Email is not valid" };
  }

  const doesEmailExist = await this.findOne({ email });
  const doesRegdNoExist = await this.findOne({ regdNo });
  const doesUsernameExist = await this.findOne({ username });

  if (doesEmailExist) {
    return { error: "Email already exists" };
  }
  if (doesRegdNoExist) {
    return { error: "Regd No already exists" };
  }
  if (doesUsernameExist) {
    return { error: "Username No already exists" };
  }

  if (password.length <= 5) {
    return { error: "Password must be at least 6 characters" };
  }
  if(password !== confirmPassword){
    return { error: "Passwords do not match" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await this.create({
    firstName,
    lastName,
    username,
    designation,
    regdNo,
    genderCode,
    email,
    role: "admin",
    password: hashedPassword,
  });

  return admin;
};

adminSchema.statics.login = async function (username, password) {
  const admin = await this.findOne({ username });

  if (!admin) {
    return { error: "Admin does not exist" };
  }

  if (admin.password.slice(0, 4) === "$2b$") {
    const matchPassword = await bcrypt.compare(password, admin.password);

    if (!matchPassword) {
      return { error: "Incorrect password" };
    }
  }
  else if(admin.password !== password){
    return { error: "Incorrect password" };
  }

  return admin;
};

// const employee = mongoose.model('Admin', adminSchema, 'admin');

module.exports = mongoose.model("Admin", adminSchema, "admin");
