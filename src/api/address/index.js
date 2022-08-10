const controller = require('./address.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', controller.getAddressById);
router.get('/', controller.getAddresses);
router.post('/', controller.saveAddress);
router.put('/:id', controller.updateAddress);
router.delete('/:id', controller.deleteAddress);

module.exports = router;