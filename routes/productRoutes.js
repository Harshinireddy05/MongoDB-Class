const router = require('express').Router()
const productControllers = require('../controllers/productControllers') 

//create

router.post('/', productControllers.createProduct);

//get route

router.get('/', productControllers.getAllProducts);

//get product by ID

router.get('/:id', productControllers.getById)


// Update product

router.put('/:id' , productControllers.updateProduct)


//Delete product

router.delete('/:id' , productControllers.deleteProduct)

module.exports = router;