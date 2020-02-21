require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app = express();

const userController = require('./components/user');

app.use(bodyParser.json());

// Init MongoDB Connection
const db = mongoose.connection;
db.on('error', () => {
    console.error('Error Connection to MongoDB')
});
db.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connect(process.env.mongodb_uri, {useNewUrlParser: true});

app.use('/user', userController.router);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
