const exprss = require('express')
const router = express.Router();
const import_exportController = require('../controllers/import_export');

// import_entry
router.get('/', import_exportController.listImportData)
router.post('/', import_exportController.createImportData)
router.put('/'.import_exportController.updateImportData)
router.delete('/',import_exportController.deleteImportData)

// export_entry
router.get('/', import_exportController.listExportData)
router.post('/', import_exportController.createExportData)
router.put('/'.import_exportController.updateExportData)
router.delete('/',import_exportController.deleteExportData)


module.exports = import_export;