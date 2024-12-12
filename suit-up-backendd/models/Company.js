const mongoose = require('mongoose');

// Define the Company schema
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    jobRoles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobRole' // Reference to the JobRole model
    }]
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

module.exports = Company; // Export the model for use in other files
