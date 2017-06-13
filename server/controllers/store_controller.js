const Product = require('../models/product_model');

module.exports = {

    createStore(req, res, next) {
        const storeProps = req.body;
        Store.create(storeProps)
            .then(store => res.send(store))
            .catch(next)

    },


    getStores(req, res, next) {
        Store.find({})
            .then(stores => res.send(stores))
            .catch(next)
    },


    deleteStore(req, res, next) {
        const storeId = req.params.id;
      
        Store.findByIdAndRemove({ _id: storeId})
            .then(store => res.status(204).send(store))
            .catch(next)

    },
    editStore(req, res, next) {
        const storeId = req.params.id;
        const storeProps = req.body;
        
        Store.findByIdAndUpdate({ _id: storeId} , storeProps)
            .then(store => res.send(store))
            .catch(next)

    },



}