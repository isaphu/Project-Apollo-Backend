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
};

exports.resetUserPassword = (req,res,next) => {
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
};

//company details 

exports.createComDetails = (req,res,next) => {
    try {
        const {
            com_code,
            com_name_th,
            come_name_en,
            address,
            phone,
            fax,
            email,
            manager_name,
            bank_account_no,
            bank_account_name,
            bank_account_branch,
            tax_no,
            create_by,
            create_date,
            update_by,
            update_date
        } = req.body;
        db.user.findOne({where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser => {
            if (requestUser.isAdmin) {
                db.company.update({
                    com_code,
                    com_name_th,
                    come_name_en,
                    address,
                    phone,
                    fax,
                    email,
                    manager_name,
                    bank_account_no,
                    bank_account_name,
                    bank_account_branch,
                    tax_no,
                    create_by,
                    create_date,
                    update_by,
                    update_date
                }).then(result => res.status(200).send({message: 'Company details has been created!'}))
            } else res.status(401).send({message: 'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({message: 'Unauthorize Request!', err})
    }
};

exports.updateComDetails = (req,res,next) => {
    try {
        const {
            id,
            com_code,
            com_name_th,
            come_name_en,
            address,
            phone,
            fax,
            email,
            manager_name,
            bank_account_no,
            bank_account_name,
            bank_account_branch,
            tax_no,
            create_by,
            create_date,
            update_by,
            update_date
        } = req.body;
        db.user.findOne({ where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser => {
            if(requestUser.isAdmin) {
                db.company.update({
                    com_code,
                    com_name_th,
                    come_name_en,
                    address,
                    phone,
                    fax,
                    email,
                    manager_name,
                    bank_account_no,
                    bank_account_name,
                    bank_account_branch,
                    tax_no,
                    create_by,
                    create_date,
                    update_by,
                    update_date
                }, {where: {id}}).then(result => res.status(200).send({message: 'Company details has been updated!'}))
            } else res.status(401).send({message: 'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({message: 'Unauthorize Request!', err})
    }
};
exports.deleteComDetails = async (req,res,next) => {
    const {id} = req.params;
    await db.company.destroy({where: {id}});
    res.status(200).send({message: 'Delete Completed'})
};
exports.deleteComData = async (req,res,next) => {
    const {id}
}

//adding shipper
exports.createShipper = (req,res,next) => {
    try {
        const {
            shipper_code,
            shipper_name
        } = req.body;
        db.user.findOne({ where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser => {
            if (requestUser.isAdmin) {
                db.shipper.create({
                    shipper_code,
                    shipper_name
                }).then(result => res.status(200).send({message: 'Shipper has been created!'}))
            } else res.status(401).send({message: 'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({message: 'Unauthorize Request!', err})
    }
};

exports.updateShipper = (req,res,next) => {
    try {
        const {
            id,
            shipper_code,
            shipper_name
        } = req.body;
        db.user.findOne({ where: {login_name: jwtDecode(JSON.stringify(req.headers.authorization)).login_name}})
        .then(requestUser => {
            if (requestUser.isAdmin) {
                db.shipper.update({
                    shipper_code,
                    shipper_name
                }, {where: {id}}).then(result => res.status(200).send({message: 'Shipper has been update'}))
            } else res.status(401).send({message: 'Unauthorize Request!'})
        })
    } catch(err) {
        res.status(401).send({message: 'Unauthorize Request!', err})
    }

};

exports.deleteShipper = async (req,res,next) => {
    const {id} = req.params;
    await db.shipper.destroy({ where: {id}});
    res.status(200).send({message: 'Delete Completed'})
};