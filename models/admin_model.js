
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const AdminSchema = new Schema({

    id:{
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true,
        minlength: [6, 'Password must be atleast 6 charcters long']
    }
})

//Form secure password
// AdminSchema.pre('save', function (next) {
//     const Admin = this;
//     bcrypt.genSalt(10, function (err, salt) {
//         if (err) { return next(err) }

//         bcrypt.hash(Admin.password, salt, null, function (err, hash) {
//             if (err) { return next(err) }

//             Admin.password = hash;
//             next();
//         })

//     })
// })



// decrypt your password

// AdminSchema.methods.compareAdminPassword = function (submitedPassword, callback) {
//     bcrypt.compare(submitedPassword, this.password, function (err, isMatch) {
//         if (err) { return callback(err) }

//         callback(null, isMatch)
//     });
// }



const Admin = mongoose.model('admin', AdminSchema)

module.exports = Admin;