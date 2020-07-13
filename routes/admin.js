const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

//user and setting management 
router.get('/', adminController.listAllUser)
router.post('/', adminController.createUser)
router.put('/', adminController.updateUser)
router.post('./', adminController.resetUserPassword)
router.delete('/deleteUser', adminController.deleteUser)

//company details
router.post('/', adminController.createComDetails)
router.put('./', adminController.updateComDetails)
router.delete('/deleteComDetails', adminController.deleteComDetails)

//adding shipper 
router.post('/', adminController.createShipper)
router.put('/', adminController.updateShipper)
router.delete('/deleteShipper', adminController.deleteShipper)

//contact_us
router.post('/', adminController.updateAbout)
router.post('/', adminController.updateContact)

//Delete all data
router.delete('/deleteAllData', adminController.deleteAllData)

module.exports = router;