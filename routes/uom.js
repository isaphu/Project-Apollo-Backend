const express = require('express');
const router = express.Router();
const uomController = require('../controllers/uom');

router.post('/',uomController.createUOM)
router.get('/',uomController.getAllUom)
router.get('/:id',uomController.getUom)
router.put('/:id',uomController.updateUom)
router.delete('/:id',uomController.deleteUom)

module.exports = router