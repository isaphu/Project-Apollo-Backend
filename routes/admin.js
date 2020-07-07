const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

//user and setting management 
router.get('/', adminController.listAllUser)
router.post('/', adminController.createUser)
router.put('/', adminController.updateUser)
router.post('./', adminController.resetUserPassword)
router.delete('./', adminController.deleteUser)

//company details
router.post('/', adminController.createComDetails)
router.put('./', adminController.updateComDetails)
router.delete('./', adminController.deleteComDetails)
router.delete('./', adminController.deleteComData)

//adding shipper 
router.post('/', adminController.createShipper)
router.put('/', adminController.updateShipper)
router.delete('./', adminController.deleteShipper)

module.exports = admin;