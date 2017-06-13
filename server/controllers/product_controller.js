const Product = require('../models/product_model');

module.exports = {

    AddProduct(req, res, next) {
        const productProps = req.body;
        Product.create(productProps)
            .then(product => res.send(product))
            .catch(next)

    },


    getProducts(req, res, next) {
        Product.find({})
            .then(products => res.send(products))
            .catch(next)
    },


    deleteproduct(req, res, next) {
        const productId = req.params.id;
      
        Product.findByIdAndRemove({ _id: productId})
            .then(product => res.status(204).send(product))
            .catch(next)

    },
    editproduct(req, res, next) {
        const productId = req.params.id;
        const productProps = req.body;
        
        Product.findByIdAndUpdate({ _id: productId} , productProps)
            .then(product => res.send(product))
            .catch(next)

    },



}