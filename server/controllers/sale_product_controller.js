const SaleProduct = require('../models/sale_product_model');

module.exports = {


    addSaleProduct(req, res, next) {
        const productProps = req.body;
        SaleProduct.create(productProps)
            .then(product => res.send(product))
            .catch(next)

    },
    getSales(req, res, next) {
        const storeParamsId = req.params.id;
        SaleProduct.find({ storeId: storeParamsId })
            .then(products => res.send(products))
            .catch(next)
    }




}