const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
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
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }


})

const Product = mongoose.model('product', productSchema)


module.exports = Product