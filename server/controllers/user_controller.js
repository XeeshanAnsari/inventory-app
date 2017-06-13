
const User = require('../models/user_model')
const jwt = require('jwt-simple');
const config = require('../config')
//jwt function for userToken
function tokenForUser(user) {
    const timeStamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timeStamp }, config.secrets)
}


exports.signUp = (req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: "You must provide email and password" })
    }

    //see if a user with the given email exist   
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err) }
        // if doesnot exist
        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" })
        }
        //if email does not exist , create new user
        const user = new User({
            fullName: fullName,
            email: email,
            password: password
        })
        user.save(function (err) {
            if (err) { return next(err) }
            //repond to request indicating the user was created
            res.json({ 
                user:user,
                token: tokenForUser(user)
             })

        })

    })



}
//fro signIn 
exports.signIn = (req, res, next) => {
   
    const email = req.body.email;
    User.findOne({ email: email })
        .then((user) => {
            res.send({
                user: user,
                token: tokenForUser(user)
            })
        })
        .catch(err => res.status(422).send(err))
}