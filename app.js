require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const indexRouter = require('./src/routes/index.router');
const marsRouter = require('./src/routes/mars.router');
const neoRouter = require('./src/routes/neo.router');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mars', marsRouter);
app.use('/neo', neoRouter);

module.exports = app;
