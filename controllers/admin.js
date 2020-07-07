const db = require('../models');
const jwtDecode = require('jwt-decode');
const { request } = require('express');
//user and setting management 

exports.listAllUser = () => {}
exports.createUser = (req, res, next) => {
    try {
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
        db.user.findOne({where: { usernmae: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser =>{
            if (requestUser.isAdmin) {
                db.user
                .create({ login_name, password: bcryptjs.hashSync(password, bcryptjs.genSaltSync(12)), firstname,lastname,email,phone,isAdmin,register_complete,status})
                .then(result => res.status(200).send({ message: 'User Created!'}))
            } else res.status(401).send({ message: 'Unauthorize Request!'})   
        })
    } catch(err) {
        res.status(401).send({ message: 'Unauthorize Request!', err});
    }
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