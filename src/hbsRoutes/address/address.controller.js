const addressService = require('../../api/address/address.service');

const getAddresses = async function (req, res) {
    try {
        var addresses = await addressService.getAddresses(req);
        res.render('address', {
            title: 'Addresses',
            addresses
        });
    } catch(e) {
        res.status(500).send("Unable to render the page");
    }
}
    // const stdObj = {
    //     name: 'Arun',
    //     age: 23
    // }

    // const nameArr = ['Sri', 'Mani', 'Ragavi', 'Dhanwin'];
    // const stdArr = [
    //     {
    //         name: 'Sri',
    //         mailId: 'msrimathi28@gmail.com'
    //     },
    //     {
    //         name: 'Abi',
    //         mailId: 'abisubu14@gmail.com'
    //     }
    // ]
const addAddress = async function (req, res) {
    try {
        var user = await addressService.getAddresses(req);
        res.render('addAddress', {
            title: "Add Address",
            btnName: 'Save',
            address
    });
    } catch (e) {
        res.status(500).send('Unable to render');
    }
}

const editAddress = async function (req, res) {
    try {
        var address = await addressService.getAddressById(req);
        res.render('addAddress', {
            title: "Edit Address",
            btnName: "Update",
            address 
        });
    } catch(e) {
        res.status(500).send("Unable to Render the page");
    }
}
        
module.exports = {
    getAddresses,
    addAddress,
    editAddress
}