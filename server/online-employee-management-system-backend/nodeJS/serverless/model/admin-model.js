const mongoose = require("mongoose");
const validator = require("validator");
const autoSequence = require("mongoose-sequence")(mongoose);
const {checkPassword, createPassword} = require("../utils/password-utils");

const adminSchema = new mongoose.Schema({
  adminId: {
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
  },
  dob : {
    type: String,
    required: true,
  },
  dateOfJoining : {
    type: String,
    required: true,
  },
  workExperience : {
    type: Number,
    required: true,
  },
  employmentType : {
    type: String,
    required: true,
  },
});

adminSchema.plugin(autoSequence, { inc_field: "adminId" });

adminSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  designation,
  regdNo,
  email,
  password,
  confirmPassword,
  genderCode,
  dateOfJoining,
  workExperience,
  dob,
  employmentType
) {
  if (
    !firstName ||
    !lastName ||
    !designation ||
    !regdNo ||
    !email ||
    !genderCode ||
    !dateOfJoining ||
    workExperience < 0 ||
    !dob ||
    !employmentType
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

  const hashedPassword = await createPassword(password, confirmPassword);

  const admin = await this.create({
    firstName,
    lastName,
    username,
    designation,
    workExperience,
    dateOfJoining,
    dob,
    employmentType,
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

  if (!admin) return { error: "Admin does not exist" };

  const isPasswordCorrect = await checkPassword(admin.password, password);

  if(!isPasswordCorrect.success) return { error: isPasswordCorrect.error };

  return admin;
};

// const employee = mongoose.model('Admin', adminSchema, 'admin');

module.exports = mongoose.model("Admin", adminSchema, "admin");
