const express = require('express');
const { addContactMessage, getAllContactData } = require('../controllers/contactController');
const router = express.Router();



// routes
router.post('/contact',addContactMessage)
router.get('/contacts', getAllContactData);
// router.delete('/contact/:id',);

module.exports = router;