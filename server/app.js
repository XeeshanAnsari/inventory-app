const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
mongoose.Promise = global.Promise




mongoose.connect('mongodb://zeeshan:zeeshan@ds127872.mlab.com:27872/inventory_app');

app.use(bodyParser.json())

// app.use(cors)
routes(app);

app.use((err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message });
})

module.exports = app