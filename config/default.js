import axios from 'axios';
import 'dotenv/config';

const services = {
  apikey: process.env.NASA_API,
  API: axios.create({
    baseURL: 'https://api.nasa.gov',
  }),
};

export default services;
