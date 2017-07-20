
const Admin = require('../models/admin_model')
const config = require('../config')


module.exports = {
  create(req, res, next) {
    const AdminProps = req.body;
    console.log(AdminProps)
    Admin.create(AdminProps)
      .then(admin => res.send(admin))
      .catch(err => res.status(422).send(err))
  },


  login(req, res, next) {



    const id = req.body.id;
    const password = req.body.password;
    console.log(req.body)
    Admin.findOne({ id: id, password: password })
      .then((user) => {
        res.send({
          token: config.tokenForAdmin(user)
        })
      })
      .catch(err => res.status(422).send(err))




    // res.send({ token: config.tokenForAdmin(req.body) });
  }
}