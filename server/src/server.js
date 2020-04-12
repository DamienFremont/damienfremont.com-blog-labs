/**
 * Main script for server
 * @see https://github.com/jaredhanson/passport-openid/blob/master/examples/signon/app.js
 */
import express from 'express';
import passport from 'passport';
import http from 'http';
import api from './api';
import auth from './middlewares/auth';
import { nocache } from './helpers/httpheader';

console.info('[server] Get Envs Vars...');
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || 'localhost';
const publiz = process.env.NODE_PUBLIC || '../client/build';

console.info('[server] Configure Application...');
const app = express();
app.use(auth.initialize());

console.info('[server] Init HTTP Server...');
app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
http.createServer(app);

console.info(`[server] Init Static at ${publiz}`);
const options = { etag: false, maxAge: '5000' };
app.use(express.static(publiz, options));

console.info('[server] Routes...');
console.info('[server] Routes... REST services');
app.use('/api', api());
console.info('[server] Routes... SECU services');
app.post('/login', auth.login());
app.post('/registration', auth.registration());

console.info('[server] Start Application...');
app.listen(port, hostname, () => {

  console.info('[server] Application started!');
  if (process.pid)
    console.info(`[server] Process PID = ${process.pid}`);
  if (process.env.NODE_ENV !== 'production')
    console.debug(`[server] Env = \'${process.env.NODE_ENV}\' (process.env.NODE_ENV not set to \'production\')`);

  console.info(`[server] running at http://${hostname}:${port}/`);
  console.info(`[server] running at http://${hostname}:${port}/api/`);
  console.info(`[server] running at http://${hostname}:${port}/api/status/`);
  console.info(`[server] running at http://${hostname}:${port}/api/status/v1`);
});
