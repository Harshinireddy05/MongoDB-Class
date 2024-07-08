const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Failed", err);
    })


//ProductSchema

const ProductSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    isInStock:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    }


});


const productModel = mongoose.model('products', ProductSchema);

//create

app.post('/api/products', async (req, res) => {
    await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    })

    return res.status(201).json({message:"Product Created"})
})

//get route

app.get('/api/products', async (req, res) => {
    
    const allProducts = await productModel.find({isInStock:true})

    return res.json(allProducts)

})

//get product by ID

app.get('/api/products/:id', async (req, res) => {
        
    const product = await productModel.findById(req.params.id)
    
    return res.json(product)
    
})


// Update product

app.put('/api/products/:id' , async(req , res)=>{

    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id , req.body)

    return res.json(updatedProduct)
})

//Delete product

app.delete('/api/products/:id' , async(req , res)=>{

    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

    return res.json(deletedProduct)
})

app.listen(8086, () => {
    console.log('Server started at port 8086')
})