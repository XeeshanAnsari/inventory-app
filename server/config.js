const jwt = require('jwt-simple')

module.exports = {
    secrets: "asfsgaggagagaasdg",
    tokenForUser: function (user) {
        const timeStamp = new Date().getTime();
        return jwt.encode({ sub: user.id, iat: timeStamp }, this.secrets)
    }

}