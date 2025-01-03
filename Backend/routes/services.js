const express = require('express');
const router = express.Router();
const Service = require('../models/Service.js');  

router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services); 
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
