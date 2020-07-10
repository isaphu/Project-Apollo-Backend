const db = require('../models');
const { response } = require('express');
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req,res,next) => {
    const {
        login_name,
        password, 
        role
    } = req.body;
    try {
        const userInfo = await db.user.findOne({ where: { login_name }});
        const isValidUser =
         userInfo && 
            bcryptjs.compareSync(password, userInfo.password)
            // ((userInfo.isAdmin && role == "admin") || (userInfo.isUser && role == "user"));
        if (!isValidUser) {
           res.status(400).send('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } else {
            res.status(200).send({ 
                token: jwt.sign({ login_name }, process.env.JWT_SECRET_KEY, {
                    expiresIn: process.env.JWT_TOKEN_TTL,
                })
            });
        }
    } catch(err) {
        res.status(500).send({ message: 'Internal Error'})
    }
};


