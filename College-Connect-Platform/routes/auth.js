const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Placeholder routes
router.post('/register', (req, res) => {
  res.json({ message: 'Register route' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
});

module.exports = router; 