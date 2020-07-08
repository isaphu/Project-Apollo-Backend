const db = require('../models');
const { response } = require('express');

exports.createProduct = async (req, res, next) => {
    try {
     const {
         code,
         name,
         details,
         uomImportId,
         uomExportId
        } = req.body;
        if (!code) {
            return res.status(400).send({ message: 'กรุณากรอกรหัสสินค้า'})
        }
        if (!name) {
            return res.status(400).send({ message: 'กรุณากรอกชื่อสินค้า'})
        } 
        if (!details) {
            return res.status(400).send({ message: 'กรุณากรอกรายละเอียดของสินค้า'})
        }
     const newProduct = await db.product.create({
        product_code: code,
        product_name: name,
        product_detail: details,
        status: true,
        uomExportId,
        uomImportId
     })
      res.status(201).send({ message: 'สินค้าได้ถูกเพิ่มแล้ว'}) 
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
};

exports.getAllProduct = async (req, res, next) => {
    const product = await db.product.findAll( {attributes: ['id', 'product_code', 'product_name', 'product_detail']})
    res.status(200).send({ product })
};

exports.getProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        const product = await db.product.findOne({where: {id}})
        res.status(200).send({ product })
    } catch(err) {
        res.status(500).send({message: err.message})
    }
};

exports.updateProduct = async (req,res,next) => {
    try {
        const {id} = req.params
        const {
            code,
            name,
            details,
            uomImportId,
            uomExportId
        } = req.body
        const checkProduct = await db.product.findOne({ where: {id: id}})
        if (checkProduct === id) {
            await db.product.create ({
                product_code: code,
                product_name: name,
                product_detail: details,
                status: true,
                uomExportId,
                uomImportId
            });
            return res.status(200).send({ message: 'อัพเดทสินค้าเรียบร้อย'})
        } else {
            const {
                code,
                name,
                details,
                uomImportId,
                uomExportId
            } = req.body
            await db.product.create ({
                product_code: code,
                product_name: name,
                product_detail: details,
                status: true,
                uomExportId,
                uomImportId
            })
        }
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
};


exports.deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params
        await db.product.destroy({ where: {id}})
        res.status(200).send()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};