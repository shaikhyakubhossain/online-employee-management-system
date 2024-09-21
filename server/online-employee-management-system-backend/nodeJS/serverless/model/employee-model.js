const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
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
    },
    password: {
        type: String,
        required: true,
    },
});


employeeSchema.statics.signup = async function(firstName, lastName, email, password) {

    if(!firstName || !lastName || !email){
        return {error: 'All fields must be filled'};
    }

    if(!validator.isEmail(email)){
        return {error: 'Email is not valid'};
    }

    const doesEmailExist = await this.findOne({email});
    
    if (doesEmailExist) {
        return {error: 'Email already exists'};
    }

    if(password.length <= 5) {
        return {error: 'Password must be at least 6 characters'};
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const employee = await this.create({email, password: hashedPassword});

    return employee;
}

employeeSchema.statics.login = async function(email, password) {

    const employee = await this.findOne({email});
    
    if (!employee) {
        return {error: 'Employee does not exist'};
    }

    const matchPassword = await bcrypt.compare(password, employee.password);

    if(!matchPassword){
        return {error: 'Incorrect password'};
    }

    return employee
}

// const employee = mongoose.model('Employees', employeeSchema, 'employees-data');

module.exports = mongoose.model('Employees', employeeSchema, 'employees-data')