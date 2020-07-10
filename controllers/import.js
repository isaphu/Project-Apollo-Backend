const db = require('../models');
const { response } = require('express');

// import_entry
exports.getAllImportData = () => {};


exports.getImportData = async (req,res,next) => {
    try {
        const {id} = req.params;
        const importData = await db.import_entry.findOne({ where: {id}, include: db.shipper})
        res.status(200).send({ importData })
    } catch(err) {
        res.status(500).send({message: err.message})
    }
};




exports.createImportData = () => {};
exports.updateImportData = () => {};
exports.deleteImportData = () => {};


