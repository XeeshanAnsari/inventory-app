
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be atleast 6 charcters long']
    }
})

//Form secure password
UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err) }

            user.password = hash;
            next();
        })

    })
})

// decrypt your password
UserSchema.methods.comparePassword = function(candidatePasseord , callback){
    bcrypt.comparePassword(candidatePasseord , this.password , function(err , isMatch){
        if(err) { return callback(err); }
        callback(null , isMatch)
    })
}



const User = mongoose.model('user', UserSchema)

module.exports = User;