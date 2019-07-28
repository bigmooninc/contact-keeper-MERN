const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all user's contacts
// @access      Public

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Public

router.post('/', (req, res) => {
  res.send('Add new contact');
});

// @route       PUT api/contacts/:id
// @desc        Update a contact
// @access      Public

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route       POST api/contacts
// @desc        Register a user
// @access      Public

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
