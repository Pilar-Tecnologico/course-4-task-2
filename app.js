require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const marsRouter = require('./src/routes/mars');
const neoRouter = require('./src/routes/neo');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mars', marsRouter);
app.use('/neo', neoRouter);

console.log(process.env) // remove this after you've confirmed it working

module.exports = app;
