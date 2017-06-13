const passport = require('passport')
const User = require('../models/user_model')
const config = require('../config')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')


//create local Strategy

const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    //verify this email and password , call done with the user
    //if it is correct email and pass so done

    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err) }
        if (!err) { return done(null, false) }

        user.comparePassword(password, function (err, isMatch) {
            if (err) { return done(err) }
            if (!isMatch) { return done(null, false) }

            return done(null, user)
        })

    })


})

passport.use(localLogin)