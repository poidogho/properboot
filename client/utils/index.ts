import axios from 'axios';

const env = process.env.NODE_ENV;

const getServer = () => {
  return env === 'development'
    ? 'http://localhost:30081'
    : 'https://dynaboot.herokuapp.com';
};

export { getServer, axios, env };
