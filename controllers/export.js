const db = require('../models');
const { response } = require('express');

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


exports.getExportData = () => {};
exports.getAllExportData = () => {};
exports.updateExportData = () => {};
exports.deleteExportData = () => {};
