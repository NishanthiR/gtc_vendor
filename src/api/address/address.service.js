const Address = require('../../models/address');

const getAddresses = function (req) {
    try {
        return Address.find(req.query);
    } catch (e) {
        return e;
    }
}

const getAddressById = function (req) {
    try {
        return Address.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveAddress = function (req) {
    try {
        var address = new Address(req.body);
        return address.save();
    } catch (e) {
        return e;
    }
}

const updateAddress = function (req) {
    try {
        return Address.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAddress = function (req) {
    try {
        return Address.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAddresses,
    getAddressById,
    saveAddress,
    updateAddress,
    deleteAddress
}