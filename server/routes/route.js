const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Set GET method
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

router.get('/register', async (req, res) => {
    // try {
    //     res.status(200).json(patients);

    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // }
})

// Set POST method
router.post('/register', async (req, res) => {
    const patient = req.body;

    const newPatient = new Patient(patient);

    try {
        await newPatient.save();
        res.status(201).json(newPatient);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

module.exports = router; 