const express = require('express');
const router = express.Router();
const JobRole = require('../models/JobRole'); // Import the JobRole model
const Company = require('../models/Company'); // Import the Company model

// Create a new job role
router.post('/', async (req, res) => {
    const { roleName, description, steps, resources, companyId } = req.body; // Include companyId in the body
    const jobRole = new JobRole({
        roleName,
        description,
        steps,
        resources,
        company: companyId, // Set the company reference
    });

    try {
        const savedJobRole = await jobRole.save(); // Save the job role to the database
        res.status(201).json(savedJobRole); // Respond with the created job role
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
    }
});

// Get all job roles
router.get('/', async (req, res) => {
    try {
        const jobRoles = await JobRole.find().populate('company'); // Fetch all job roles and populate company data
        res.json(jobRoles); // Respond with the list of job roles
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

// Export the router
module.exports = router;
