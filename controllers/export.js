const db = require('../models');
const { response } = require('express');
const { Op, DATE } = require('sequelize')

exports.createExportData = async (req, res, next) => {
    try {
        const {
            export_entry_number,
            releasing_date,
            warehouse_date,
            export_by,
            departure_date,
            invoice_no
        } = req.body;
        if (!export_entry_number) {
            return res.status(400).send({ message: 'กรุณากรอกเลขที่ใบขนขาออก'})
        }
        if (!releasing_date) {
            return res.status(400).send({ message: 'กรุณาเลือกวันผ่านพิธีการ'})
        }
        if (!warehouse_date) {
            return res.status(400).send({ message: 'กรูณาเลือกวันเคลียร์สินค้า'})
        }
        if (!export_by) {
            return res.status(400).send({ message: 'กรุณากรอกส่งออกโดย'})
        }
        if (!departure_date) {
            return res.status(400).send({ message: 'กรุณาเลือกวันเรือออก'})
        }
        if (!invoice_no) {
            return res.status(400).send({ message: 'กรุณากรอกหมายเลข Invoice'})
        }
    const newExportData = await db.export_entry.create({
        export_entry: export_entry_number,
        releasing_date,
        warehouse_date,
        export_by,
        departure_date,
        invoice_no
    })
    res.status(201).send({ message: 'ข้อมูลใบขนขาออกได้ถูกบันทึกแล้ว'})
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
};


exports.getExportData = async (req, res, status) => {
    try {
        const {id} = req.params;
        const exportData = await db.export_entry.findOne({ where: {id}})
        res.status(200).send({ exportData })
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
};


exports.getAllExportData = async (req, res, next) => {
    try {
        const {
            export_entry_number,
            start_date,
            end_date
        } = req.query;

        const startDateObj = new Date(start_date);
        const endDateObj = new Date(end_date);

        let defaultQueryObject = {
            attributes: ['id', 'export_entry', 'releasing_date','warehouse_date','export_by','departure_date','invoice_no']
        }

        let exportNumberQueryObj = {};
        let startDateQueryObj = {};
        let endDateQueryObj = {};

        if (export_entry_number) {
            exportNumberQueryObj.export_entry = export_entry_number
        };

        if (start_date) {
            startDateQueryObj = {
                [Op.gte]: startDateObj
            }
        };

        if (end_date) {
            endDateQueryObj = {
                [Op.lte]: endDateObj
            }
        };

        let departure_date = {departure_date: {...startDateQueryObj,...endDateQueryObj}}

        let resultQueryObject = {...exportNumberQueryObj,...departure_date}
        let whereObj = {}

        let hasKey = false;

        for (let key in resultQueryObject) {
            hasKey = true;
            break;
        }

        if (hasKey) {
            whereObj.where = resultQueryObject
        }

        const resultQueryObj = {...defaultQueryObject, ...whereObj}
        const export_entry = await db.export_entry.findAll(resultQueryObj)
        
        res.status(200).send({ export_entry})
    } catch(err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
};


exports.updateExportData = async (req, res, next) => {
    try {
        const {id} = req.params
        const {
            export_entry_number,
            releasing_date,
            warehouse_date,
            export_by,
            departure_date,
            invoice_no
        } = req.bodyconst 
        const checkExportData = await db.export_entry.findOne({ where: {id: id}})
        if (checkExportData === id) {
            await db.export_entry.update({
                export_entry: export_entry_number,
                releasing_date,
                warehouse_date,
                export_by,
                departure_date,
                invoice_no
            }, {where: {id}});
            res.status(200).send({ message: 'Export Entry has been updated!'})
        } 
        res.stattus(400).send({ message: 'Export Entry with this ID is not found'})
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
};

exports.deleteExportData = async (req, res, next) => {
    try {
        const {id} = req.params
        await db.export_entry.destroy({ where: {id}})
        res.status(200).send()
    } catch(err) {
        res.status(500).send({ message: err.message})
    }
};
