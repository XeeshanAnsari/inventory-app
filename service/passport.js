const passport = require('passport')
const Admin = require('../models/admin_model')
const User = require('../models/user_model')
const config = require('../config')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')


//create local Strategy

const localOptions = { usernameField: 'id' }
const adminLogin = new LocalStrategy(localOptions, function (id, password, done) {
    //verify this email and password , call done with the user
    //if it is correct email and pass so done

    Admin.findOne({ id: id }, function (err, admin) {
        if (err) { return done(err) }
        //if (!admin) { return done(null, false)}
        if (admin) {
            admin.compareAdminPassword(password, function (err, isMatch) {
                if (err) { return done(err) }

                if (isMatch) {
                    done(null, admin)
                }
                else {
                    done(null,  false )
                }
            });
        } else {
            return done(null, false);
        }
    });
})



const userLogin = new LocalStrategy({ usernameField: 'storeId' }, function (storeId, password, done) {
    User.findOne({ storeId: storeId }, function (err, user) {
        if (err) { return done(err) }
        if (user) {
            user.compareUserPassword(password, function (err, isMatch) {
                if (err) { return done(err) }
                if (isMatch) { return done(null, user) }
            })
        } else {
            return done(null, false)
        }
    })
})

passport.use('admin-login', adminLogin)

passport.use('user-login', userLogin)