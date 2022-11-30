'strict mode';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import marsRouter from './src/routes/mars.js';
import neoRouter from './src/routes/neo.js';

// const neoRouter = require('./routes/neo');
const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/mars', marsRouter);
app.use('/neo', neoRouter);

export default app;
