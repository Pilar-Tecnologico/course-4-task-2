require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const marsRouter = require('./src/routes/mars');
const neoRouter = require('./src/routes/neo');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/mars', marsRouter);
app.use('/neo', neoRouter);

module.exports = app;
