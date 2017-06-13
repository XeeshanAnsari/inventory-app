const UserController = require('../controllers/user_controller');
const passportService = require('../service/passport')
const passport = require('passport')

const requireSignIn = passport.authenticate('local', { session: false })

module.exports = (app) => {

    app.post('/api/signin', UserController.signIn)
    app.post('/api/signup', UserController.signUp)
}