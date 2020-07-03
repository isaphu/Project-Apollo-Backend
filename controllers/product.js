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
            return res.status(400).send({ message: 'product code is required'})
        }
        if (!name) {
            return res.status(400).send({ message: 'name of the product is required'})
        } 
        if (!details) {
            return res.status(400).send({ message: 'details is required'})
        }
     const newProduct = await db.product.create({
        product_code: code,
        product_name: name,
        product_detail: details,
        status: true,
        uomExportId,
        uomImportId
     })
      res.status(201).send({ message: 'product has been added'}) 
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
} 

exports.getProduct = () => {}
exports.updateProduct = () => {}
exports.deleteProduct =() => {}
