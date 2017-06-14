const Product = require('../models/product_model');

module.exports = {

    addProduct(req, res, next) {
        const productProps = req.body;
        Product.create(productProps)
            .then(product => res.send(product))
            .catch(next)

    },


    getProducts(req, res, next) {
        const storeParamsId = req.params.id;
        Product.find({ storeId: storeParamsId })
            .then(products => res.send(products))
            .catch(next)
    },


    deleteProduct(req, res, next) {
        const productId = req.params.id;

        Product.findByIdAndRemove({ _id: productId })
            .then(product => res.status(204).send(product))
            .catch(next)

    },
    editProduct(req, res, next) {
        const productId = req.params.id;
        const productProps = req.body;

        Product.findByIdAndUpdate({ _id: productId }, productProps)
            .then(product => res.send(product))
            .catch(next)

    },
    UpdateProductQuantity(req, res, next) {
        const productId = req.params.id;
        const cQuantity = req.body.cQuantity;


        Product.findById({ _id: productId })
            .then((product) => {
                let pQuantity = product.quantity
                Product.findOneAndUpdate({ pQuantity: cQuantity })
                    .then(product => res.send(product))
                    .catch(next)
            })
            .catch(next)

       

    }



}