const mongoose = require("mongoose");
const validator = require("validator");
const autoSequence = require("mongoose-sequence")(mongoose);
const {checkPassword, createPassword} = require("../utils/password-utils");


const employeeSchema = new mongoose.Schema({
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
  department: {
    type: String,
    required: true,
  },
  workExperience: {
    type: Number,
    required: true,
  },
  dateOfJoining: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  employmentType: {
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
});

employeeSchema.plugin(autoSequence, { inc_field: "employeeId" });

employeeSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  designation,
  department,
  workExperience,
  dateOfJoining,
  dob,
  employmentType,
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
    !department ||
    !workExperience ||
    !dateOfJoining ||
    !dob ||
    !employmentType ||
    !regdNo ||
    !email ||
    !genderCode
  ) {
    console.log(
      firstName,
      lastName,
      username,
      designation,
      department,
      regdNo,
      email
    );
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
    return { error: "Username already exists" };
  }

  const hashedPassword = await createPassword(password, confirmPassword);

  const employee = await this.create({
    firstName,
    lastName,
    username,
    designation,
    department,
    workExperience,
    dateOfJoining,
    dob,
    employmentType,
    regdNo,
    genderCode,
    email,
    role: "employee",
    password: hashedPassword,
  });

  return employee;
};

employeeSchema.statics.login = async function (username, password) {
  const employee = await this.findOne({ username });

  if (!employee) {
    return { error: "Employee does not exist" };
  }

  const isPasswordCorrect = await checkPassword(employee.password, password);

  if (!isPasswordCorrect.success) return { error: isPasswordCorrect.error };

  return employee;
};

// const employee = mongoose.model('Employees', employeeSchema, 'employees');

module.exports = mongoose.model("Employees", employeeSchema, "employee");
