const db = require('../models');
const { response } = require('express');

exports.createUOM = async (req,res,next) => {
    try {
        const {
            code,
            name
        } = req.body
        if(!code) {
            return res.status(400).send({ message: 'UOM code is required'})
        }
        if (!name) {
            return res.status(400).send({ message: 'UOM name is required'})
        }
        const newUOM = await db.uom.create ({
            uom_code: code,
            uom_name: name
        })
        res.status(201).send({ message: 'UOM has been created',newUOM})
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