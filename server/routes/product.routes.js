const express = require('express');
let productController = require('../controllers/product.controller.js');
const  {validate,createProductValidation}  = require('../validations/product.validation.js');
const {verifyToken,allowTo} = require('../middlewares/auth.middleware.js')
let router = express.Router()


router.route('/:id')
    .put(verifyToken,allowTo('ADMIN'),createProductValidation,validate,productController.updateProduct)
    .delete(verifyToken,allowTo('ADMIN'),productController.deleteProduct)
router.post('/',verifyToken,allowTo('ADMIN') ,createProductValidation, validate, productController.createProduct);
router.get('/:name', productController.searchName)
router.get('/', productController.getProducts);

module.exports = router