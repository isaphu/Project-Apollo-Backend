const db = require('../models');
const { response } = require('express');
const { Op } = require('sequelize')

exports.createImportData = async (req, res,next) => {
    try {
        const {
            import_entry_number,
            arriving_date,
            releasing_date,
            warehouse_date,
            releasing_no
        } = req.body;
            if (!import_entry_number) {
                    return res.status(400).send({ message: 'กรุณากรอกเลขที่ใบขนขาเข้า'})
            }
            if (!arriving_date) {
                    return res.status(400).send({ message: 'กรุณาเลือกวันเรือเข้า'})
            }
            if (!releasing_date) {
                    return res.status(400).send({ message: 'กรูณาเลือกวันผ่านพิธีการ'})
            }
            if (!warehouse_date) {
                    return res.status(400).send({ message: 'กรุณาเลือกวันเข้าคลัง'})
            }
            if (!releasing_no) {
                    return res.status(400).send({ message: 'กรุณากรอกเลขที่พิธีการ'})
            }
        const newImportData = await db.import_entry.create ({
            import_entry: import_entry_number,
            arriving_date,
            releasing_date,
            warehouse_date,
            releasing_no
        })
        res.status(201).send({ message: 'ข้อมูลใบขนขาเข้าได้ถูกบันทึกแล้ว'})
    } catch(err) {
        res.status(500).send({message: err.message})
    }
};




exports.getAllImportData = async (req, res, next) => {
    try {

    } catch(err) {
        res.status(500).send({ message: err.message })
    }
};



exports.getImportData = async (req, res, next) => {
    try {
        const {id} = req.params;
        const importData = await db.import_entry.findOne({ where: {id}, include: db.shipper})
        res.status(200).send({ importData })
    } catch(err) {
        res.status(500).send({message: err.message})
    }
};


exports.updateImportData = async (req, res, next) => {
    try {
        const {id} = req.params
        const {
            import_entry_number,
            arriving_date,
            releasing_date,
            warehouse_date,
            releasing_no
        } = req.body
        const checkImportData = await db.import_entry.findOne({ where: {id: id}})
        if (checkImportData === id) {
            await db.import_entry.update ({
                import_entry: import_entry_number,
                arriving_date,
                releasing_date,
                warehouse_date,
                releasing_no
            }, { where: {id}});
            return res.status(200).send({ message: 'Import Entry has been updated!'})
        }
        res.status(400).send({ message: 'Import Entry with this ID is not found'})
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
};

exports.deleteImportData = async (req, res, next) => {
    try {
        const { id } = req.params
        await db.import_entry.destroy({ where: {id}})
        res.status(200).send()
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
};


