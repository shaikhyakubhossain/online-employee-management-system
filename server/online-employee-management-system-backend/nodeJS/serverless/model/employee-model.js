const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
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
    genderCode: {
        type: String,
        required: true,
    },

    performanceScore: {
        type: String,
        required: true,
    },
    currentEmployeeRating: {
        type: Number,
        required: true,
    },
});