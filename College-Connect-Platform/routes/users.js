const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate('clubs', 'name')
      .populate('events', 'title date');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    const { name, interests, skills } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, interests, skills },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Join club
router.post('/join-club/:clubId', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.clubs.includes(req.params.clubId)) {
      user.clubs.push(req.params.clubId);
      await user.save();
    }
    res.json(user.clubs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Leave club
router.post('/leave-club/:clubId', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.clubs = user.clubs.filter(
      clubId => clubId.toString() !== req.params.clubId
    );
    await user.save();
    res.json(user.clubs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Register for event
router.post('/register-event/:eventId', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.events.includes(req.params.eventId)) {
      user.events.push(req.params.eventId);
      await user.save();
    }
    res.json(user.events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      name,
      email,
      password
    });

    // Save user to database
    await user.save();

    // Create JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 