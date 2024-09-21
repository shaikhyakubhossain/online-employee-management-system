const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
<<<<<<< HEAD
    employeeId: {
        type: Number,
        required: true,
        unique: true,
    },
    firstName: {
=======
    FirstName: {
>>>>>>> ce6d09fb00f702cdc4bb9ed54013c182a354a53e
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
<<<<<<< HEAD
=======
    designation: {
        type: String,
        required: true,
    },
    employeeStatus: {
        type: String,
        required: true,
    },
    employeeType: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
>>>>>>> ce6d09fb00f702cdc4bb9ed54013c182a354a53e
    genderCode: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
});


employeeSchema.statics.signup = async function(employeeId, firstName, lastName, designation, regdNo, email, password, genderCode) {

    if(!firstName || !lastName || !designation || !regdNo || !email || !genderCode) {
        return {error: 'All fields must be filled'};
    }

    if(!validator.isEmail(email)){
        return {error: 'Email is not valid'};
    }

    const doesEmailExist = await this.findOne({email});
    const doesRegdNoExist = await this.findOne({regdNo});
    
    if (doesEmailExist) {
        return {error: 'Email already exists'};
    }

    if (doesRegdNoExist) {
        return {error: 'Regd No already exists'};
    }

    if(password.length <= 5) {
        return {error: 'Password must be at least 6 characters'};
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const employee = await this.create({
        employeeId,
        firstName,
        lastName,
        designation,
        regdNo,
        genderCode,
        email,
        password: hashedPassword
    });

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

module.exports = mongoose.model('Employees', employeeSchema, 'employees')
=======

    performanceScore: {
        type: String,
        required: true,
    },
    currentEmployeeRating: {
        type: Number,
        required: true,
    },
});
>>>>>>> ce6d09fb00f702cdc4bb9ed54013c182a354a53e
