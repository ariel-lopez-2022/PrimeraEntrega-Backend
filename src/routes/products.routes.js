const {Router} = require('express');
const productsController = require('../controller/products.controller')
const router =  Router();

router.get ("/",  productsController.getProducts)


module.exports = router;