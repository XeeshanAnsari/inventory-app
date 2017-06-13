const UserController = require('../controllers/user_controller');
const StoreController = require('../controllers/Store_controller');
const passportService = require('../service/passport')
const passport = require('passport')

const requireSignIn = passport.authenticate('local', { session: false })

module.exports = (app) => {

    app.post('/api/signin', UserController.signIn)
    app.post('/api/signup', UserController.signUp)


    app.post('/api/store' , StoreController.createStore)
    app.get('/api/store' , StoreController.getStores)
}