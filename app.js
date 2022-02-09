const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const marsRouter = require('./routes/mars');
const neoRouter = require('./routes/neo');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mars', marsRouter);
app.use('/neo', neoRouter);

module.exports = app;
