const express = require('express');

const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://harshinireddy05:ha8328431210r@cluster0.vhjqafi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
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

    
})


const app = express()

app.listen(8086, () => {
    console.log('Server started at port 8086')
})