require('./db/config/config');

const hbs = require('hbs');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId();


var { mongoose } = require('mongoose');
var app = req.express();

var port = process.env.PORT;

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: "Home",
    welcomeMessage: "check out this dank ass website"
  });
});

app.listen(port, () => {
  console.log('Server has started on port:', port);
});