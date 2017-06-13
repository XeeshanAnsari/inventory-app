const Store = require('../models/store_model');

module.exports = {

    createStore(req, res, next) {
        const storeProps = req.body;
        Store.create(storeProps)
            .then(store => res.send(store))
            .catch(next)

    },
    getStores(req, res ,next){
        
        Store.find({})
        .then(stores => res.send(stores))
        .catch(next)
    }

}