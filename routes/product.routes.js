const express = require('express');
let productController = require('../controllers/product.controller.js');
const { createProductValidation, validate } = require('../validations/product.validation.js');

let router = express.Router()


router.route('/:id')
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)
router.post('/', createProductValidation, validate, productController.createProduct);
router.get('/:name', productController.searchName)
router.get('/', productController.getProducts);

module.exports = router