const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storeSchema =  new Schema({
     storeName:{
         type:String,
         required:true
     },
     location:{
         type:String,
         required:true
     }

})

const Store = mongoose.model('store' , storeSchema)


module.exports = Store