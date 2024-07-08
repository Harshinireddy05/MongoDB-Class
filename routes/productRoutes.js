const express = require('express')

const router = express.Router()

//create

router.post('/api/products', async (req, res) => {
    await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    })

    return res.status(201).json({message:"Product Created"})
})

//get route

router.get('/api/products', async (req, res) => {
    
    const allProducts = await productModel.find({isInStock:true})

    return res.json(allProducts)

})

//get product by ID

router.get('/api/products/:id', async (req, res) => {
        
    const product = await productModel.findById(req.params.id)
    
    return res.json(product)
    
})


// Update product

router.put('/api/products/:id' , async(req , res)=>{

    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id , req.body)

    return res.json(updatedProduct)
})


//Delete product

router.delete('/api/products/:id' , async(req , res)=>{

    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

    return res.json(deletedProduct)
})