const express = require('express')
const router = express.Router();
const importController = require('../controllers/import');

// import_entry
router.get('/', importController.getAllImportData)
router.get('/:id', importController.getImportData)
router.post('/', importController.createImportData)
router.put('/:id', importController.updateImportData)
router.delete('/:id',importController.deleteImportData)


module.exports = router;