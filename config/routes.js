const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phone.controller')

router.get('/', phoneController.getPhones)
module.exports = router;