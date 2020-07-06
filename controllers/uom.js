const db = require('../models');
const { response } = require('express');

exports.createUOM = async (req,res,next) => {
    try {
        const {
            code,
            name
        } = req.body
        if(!code) {
            return res.status(400).send({ message: 'กรุณากรอกรหัสหน่วยสินค้า'})
        }
        if (!name) {
            return res.status(400).send({ message: 'กรุณากรอกชื่อหน่วยสินค้า'})
        }
        const newUOM = await db.uom.create ({
            uom_code: code,
            uom_name: name
        })
        res.status(201).send({ message: 'เพิ่มรายละเอียดหน่วยของสินค้าแล้ว',newUOM})
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
}

exports.getAllUom = async (req,res,next) => {
    const uoms = await db.uom.findAll( {attributes:['id','uom_code','uom_name']})
    res.status(200).send({ uoms })
}

exports.getUom = async (req,res,next) => {
    try {
        const {id} =  req.params
        const uom = await db.uom.findOne({where: {id}})
        res.status(200).send({ uom })
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
} 

exports.updateUom = async (req,res,next) => {
    try {
        const {id} = req.params
        const {
            code,
            name
        } = req.body
        const checkUom = await db.uom.findOne({ where: { id: id}});
        if (checkUom === code) {
            await db.uom.create ({
                code: name,
                name: name
            });
            return res.status(200).send({ message: 'อัพเดทรายละเอียดหน่วยของสินค้าเรียบร้อย'});
        } else {
            await db.uom.create ({
                code: code,
                name: name
            })
        }
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
}

exports.deleteUom = async (req,res,next) => {
    try {
        const {id} = req.params
        await db.uom.destroy({where: {id}})
        res.status(204).send()
    } catch(err) {
        res.status(500).send({message: err.message})
    }
}