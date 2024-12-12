const mongoose = require('mongoose');

// Define the JobRole schema
const jobRoleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    steps: {
        type: [String], // Array of strings to hold the steps for the role
        required: true,
    },
    resources: {
        type: [String], // Array of strings to hold resources related to the role
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company', // Reference to the Company model
        required: true,
    }
});

// Create the JobRole model
const JobRole = mongoose.model('JobRole', jobRoleSchema);

module.exports = JobRole; // Export the model for use in other files
