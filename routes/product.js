const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.post('/',productController.createProduct);
router.get('/',productController.getProduct);
router.put('/',productController.updateProduct);
router.delete('/',productController.deleteProduct);

module.exports = router