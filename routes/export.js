const express = require('express')
const router = express.Router();
const exportController = require('../controllers/export');

// export_entry
router.get('/', exportController.getExportData)
router.get('/:id', exportController.getExportData)
router.post('/', exportController.createExportData)
router.put('/', exportController.updateExportData)
router.delete('/', exportController.deleteExportData)


module.exports = router;