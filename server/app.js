const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
mongoose.Promise = global.Promise




mongoose.connect('mongodb://localhost/App');

app.use(bodyParser.json())


routes(app);

app.use((err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message });
})

module.exports = app