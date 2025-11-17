// controllers/healthMockController.js

exports.getHeartRate = (req, res) => {
  res.json({
    heartRate: Math.floor(Math.random() * (140 - 60 + 1)) + 60,
    timestamp: new Date().toISOString(),
  });
};

exports.getSteps = (req, res) => {
  res.json({
    steps: Math.floor(Math.random() * 12000),
    timestamp: new Date().toISOString(),
  });
};

exports.getSleep = (req, res) => {
  res.json({
    deepSleep: (Math.random() * 3).toFixed(1),
    lightSleep: (Math.random() * 5).toFixed(1),
    remSleep: (Math.random() * 2).toFixed(1),
    timestamp: new Date().toISOString(),
  });
};
