const express = require("express");
const router = express.Router();

// Simula dados vindos do smartwatch
router.get("/mock-health", (req, res) => {
    const fakeData = {
        heartRate: 82,
        steps: 3200,
        temperature: 36.5,
        spo2: 97,
        timestamp: new Date().toISOString()
    };

    res.json(fakeData);
});

module.exports = router;
