const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Failed", err);
    })

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

app.listen(8086, () => {
    console.log('Server started at port 8086')
})