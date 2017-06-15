const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    
    storeId: {
        type: String,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }


})

const Product = mongoose.model('product', productSchema)


module.exports = Product