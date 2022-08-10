const service = require('./address.service');

const getAddresses = function (req, res) {
    service.getAddresses(req).then(function (addresses) {
        res.status(200).send(addresses);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const getAddressById = function (req, res) {
    service.getAddressById(req).then(function (address) {
        res.status(200).send(address);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const saveAddress = function (req, res) {
    service.saveAddress(req).then(function (address) {
        res.status(200).send("Address saved successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const updateAddress = function (req, res) {
    service.updateAddress(req).then(function (address) {
        res.status(201).send("Address updated successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const deleteAddress = function (req, res) {
    service.deleteAddress(req).then(function (address) {
        res.status(200).send("Address deleted successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getAddresses,
    getAddressById,
    saveAddress,
    updateAddress,
    deleteAddress
}