const db = require('../models');
const { response } = require('express');
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req,res,next) => {
    const {
        login_name,
        password, 
    } = req.body;
    try {
        const userInfo = await db.user.findOne({ where: { login_name }});
        const isPasswordCorrect = await bcryptjs.compare(password, userInfo.password)
        const isValidUser =  userInfo && isPasswordCorrect
        if (!isValidUser) {
           res.status(400).send('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        } else {
            res.status(200).send({ 
                token: jwt.sign({ login_name }, process.env.JWT_SECRET_KEY, { 
                    expiresIn: process.env.JWT_EXPIRE_IN,   
                }),
                user: userInfo
            });
        }
    } catch(err) {
        console.log(err)
        res.status(500).send({ message: 'Internal Error'})
    }
};


