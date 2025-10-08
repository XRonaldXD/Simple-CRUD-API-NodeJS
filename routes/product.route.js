const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const productController = require("../controllers/product.controller.js");

// get all products
router.get('/', productController.getProducts);
//get a product
router.get('/:id', productController.getProduct);
//create a product
router.post('/', productController.createProduct);
//update a product
router.put('/:id', productController.updateProduct);
//delete a product
router.delete('/:id',productController.deleteProduct);

module.exports = router;