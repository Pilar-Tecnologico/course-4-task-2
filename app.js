const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const marsRouter = require('./src/routes/mars');
const neoRouter = require('./src/routes/neo');
const userRouter = require('./src/routes/user');
const app = express();
const mongoose = require ("mongoose");
const config = require('config');
const mongoConnectionString = config.get('database.connectionString');

mongoose.connect(mongoConnectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => console.log('connected to MONGODB')).catch((err) => {throw(err)});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mars', marsRouter);
app.use('/neo', neoRouter);
app.use('/user', userRouter);

module.exports = app;
