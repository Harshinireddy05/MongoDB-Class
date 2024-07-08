const router = require('express').Router()

const productControllers = require('../controllers/productControllers') 

//create

router.post('/api/products', productControllers.createProduct);

//get route

router.get('/api/products', productControllers.getAllProducts);

//get product by ID

router.get('/api/products/:id', productControllers.getById)


// Update product

router.put('/api/products/:id' , productControllers.updateProduct)


//Delete product

router.delete('/api/products/:id' , productControllers.deleteProduct)