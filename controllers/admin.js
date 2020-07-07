const db = require('../models');
const jwtDecode = require('jwt-decode');
//user and setting management 

exports.listAllUser = () => {}
exports.createUser = (req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        login_name,
        password,
        isAdmin,
        register_complete,
        status
    } = req.body;


}






exports.updateUser = () => {}
exports.resetUserPassword = () => {}



//company details 

exports.createComDetails = () => {}
exports.updateComDetails = () => {}
exports.deleteComDetails = () => {}
exports.deleteComData = () => {}

//adding shipper
exports.createShipper = () => {}
exports.updateShipper = () => {}
exports.deleteShipper = () => {}