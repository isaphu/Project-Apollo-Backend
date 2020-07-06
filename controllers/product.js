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
} 

exports.getProduct = async (req, res, next) => {
    const uom = await db.uom.findAll( {attributes: ['id', 'product_code', 'product_name', 'product_detail']})
    res.status(200).send({ uom })
}



exports.updateProduct = () => {}
exports.deleteProduct =() => {}
