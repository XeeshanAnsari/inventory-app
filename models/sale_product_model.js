const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const SaleProductSchema = new Schema({
    
    storeId: {
        type: String,
        unique: true
    },
    productName: {
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
    unitPrice: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

const SaleProduct = mongoose.model('saleProduct', SaleProductSchema)

module.exports = SaleProduct