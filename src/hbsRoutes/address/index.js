const controller = require('./address.controller');
const express = require('express');
const router = express.Router();

router.get('/add',controller.addAddress);
router.get('/edit/:id',controller.editAddress);
router.get('/',controller.getAddresses);

module.exports = router;