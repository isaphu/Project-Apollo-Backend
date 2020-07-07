const db = require('../models');
const jwtDecode = require('jwt-decode');
const { request } = require('express');


//user and setting management 

exports.listAllUser = (req,res,next) => {
    try {
        db.user.findOne({ where: jwtDecode(JSON.stringify(req.headers/authorization)).login_name})
        .then(requestUser => {
            if (requestUser.isAdmin) {
                db.user
                .findAll({ attributes: ['firstname', 'lastname', 'email', 'phone','login_name','password','isAdmin','rehister_complete','status']})
                .then(result => res.status(200).send({message: 'User Created!'}))
            } else res.status(401).send({message:'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({ message: 'Unauthorize Request!', err})
    }
};

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
};


exports.updateUser = (req, res, next) => {
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
            db.user.findOne({ where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
            .then(requestUser => {
                if (requestUser.isAdmin) {
                    db.user.update({firstname,lastname,email,phone,login_name,password,isAdmin,register_complete,status}, {where: {login_name: req.body.login_name}})
                    .then(result => res.status(200).send({message: 'User Info. has been updated!'})) 
                } else res.status(401).send({message:'Unauthorize request!'})
            })
    } catch(err) {
        res.status(401).send({message:'Unauthorize Request!', err})
    }

}

exports.resetUserPassword = () => {
    try {
        const {
            login_name,
            password
        } = req.body;
        db.user.findOne({where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser => {
            if (requestUser.isAdmin) {
                db.user.update({password: bcryptjs.hashSync(password, bcryptjs.genSaltSync(12))}, {where: {login_name}})
                .then(result => res.status(200).send({message: 'Password has been chnaged!'}))
            } else res.status(401).send({message: 'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({message: 'Unauthorize Request!', err})
    }
}



//company details 

exports.createComDetails = () => {}
exports.updateComDetails = () => {}
exports.deleteComDetails = () => {}
exports.deleteComData = () => {}

//adding shipper
exports.createShipper = () => {}
exports.updateShipper = () => {}
exports.deleteShipper = () => {}