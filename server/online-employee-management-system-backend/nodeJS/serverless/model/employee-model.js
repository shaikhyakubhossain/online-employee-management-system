const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const autoSequence = require("mongoose-sequence")(mongoose);

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
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
});

employeeSchema.statics.signup = async function (
  firstName,
  lastName,
  designation,
  regdNo,
  email,
  password,
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

  if (doesEmailExist) {
    return { error: "Email already exists" };
  }

  if (doesRegdNoExist) {
    return { error: "Regd No already exists" };
  }

  if (password.length <= 5) {
    return { error: "Password must be at least 6 characters" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const employee = await this.create({
    firstName,
    lastName,
    designation,
    regdNo,
    genderCode,
    email,
    password: hashedPassword,
  });

  return employee;
};

employeeSchema.statics.login = async function (employeeId, password) {
  const employee = await this.findOne({ employeeId });

  if (!employee) {
    return { error: "Employee does not exist" };
  }

  if (employee.password.slice(0, 4) === "$2b$") {
    const matchPassword = await bcrypt.compare(password, employee.password);

    if (!matchPassword) {
      return { error: "Incorrect password" };
    }
  }
  else if(employee.password !== password){
    return { error: "Incorrect password" };
  }

  return employee;
};

// const employee = mongoose.model('Employees', employeeSchema, 'employees-data');

module.exports = mongoose.model("Employees", employeeSchema, "employee");
