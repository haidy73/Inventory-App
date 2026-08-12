const express = require('express');
let productController = require('../controllers/product.controller.js');


let router = express.Router()


router.route('/:id')
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)
router.get('/:name',productController.searchName)    

module.exports = router