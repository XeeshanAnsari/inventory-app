
const Admin = require('../models/admin_model')
const config = require('../config')


module.exports = {
  create(req, res, next) {
    const AdminProps = req.body;
    console.log(AdminProps)
    Admin.create(AdminProps)
      .then(admin => res.json(admin));
  },


  login(req, res, next) {

    // const id = req.body.id;
    // console.log(storeId)
    // Admin.find({ id: id })
    //   .then(() => {
    //     res.send({
    //       token: config.tokenForUser(user)
    //     })
    //   })
    //   .catch(err => res.status(422).send(err))

    res.send({ token: config.tokenForUser(req.body) });
  }
}