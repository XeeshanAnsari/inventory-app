
const User = require('../models/user_model')
const Store = require('../models/store_model');

const config = require('../config')

//jwt function for userToken
// function tokenForUser(user) {
//     const timeStamp = new Date().getTime();
//     return jwt.encode({ sub: user.id, iat: timeStamp }, config.secrets)
// }


exports.signUp = (req, res, next) => {
    const distribution = req.body.distribution;
    const storeId = req.body.storeId;
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: "You must provide email and password" })
    }

    //see if a user with the given email exist   
    User.findOne({ storeId: storeId }, function (err, existingUser) {
        if (err) { return next(err) }
        // if doesnot exist
        if (existingUser) {
            return res.status(422).send({ error: "Store ID is in use" })
        }
        //if email does not exist , create new user
        const user = new User({
            distribution: distribution,
            storeId: storeId,
            email: email,
            password: password
        })
        console.log(user)
        user.save(function (err) {
            if (err) { return next(err) }
            //repond to request indicating the user was created
            res.json({
                user: user,
                token: config.tokenForUser(user)
            })

        })
        //     Store.findById({ _id: storeId })
        //         .then((store) => {
        //             if (store) {
        //                 user.save(function (err) {
        //                     if (err) { return next(err) }
        //                     //repond to request indicating the user was created
        //                     res.json({
        //                         user: user,
        //                         token: tokenForUser(user)
        //                     })

        //                 })
        //             }

        //         })
        //         .catch(next)

    })



}
//fro signIn 


exports.signIn = (req, res, next) => {


    //  res.send({ token: config.tokenForUser(req.body) });


    const storeId = req.body.storeId;
    const password = req.body.password;
    console.log(req.body)
    User.findOne({ storeId: storeId, password: password })
        .then((user) => {
            res.send({
                user: user,
                token: config.tokenForUser(user)
            })
        })
        .catch(err => res.status(422).send(err))
}