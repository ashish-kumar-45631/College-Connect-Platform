const express = require('express');
const router = express.Router();
const Club = require('../models/Club');

// Get all clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find().populate('admin', 'name');
    res.json(clubs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get club by ID
router.get('/:id', async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
      .populate('admin', 'name')
      .populate('members', 'name');
    if (!club) {
      return res.status(404).json({ msg: 'Club not found' });
    }
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create club
router.post('/', async (req, res) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update club
router.put('/:id', async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!club) {
      return res.status(404).json({ msg: 'Club not found' });
    }
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete club
router.delete('/:id', async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) {
      return res.status(404).json({ msg: 'Club not found' });
    }
    res.json({ msg: 'Club removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 