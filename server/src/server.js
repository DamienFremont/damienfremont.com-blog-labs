/**
 * Main script for server
 */
import express from 'express';
import http from 'http';
import api from './api';

console.info('Get Envs Vars...');
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || 'localhost';
const publiz = process.env.NODE_PUBLIC || '../client/build';

console.info('Configure Application...');
const app = express();

console.info('Init HTTP Server...');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
http.createServer(app);

console.info(`Init Static at ${publiz}`);
app.use(express.static(publiz));

console.info('Set REST services to /api');
app.use('/api', api());

console.info('Start Application...');
app.listen(port, hostname, () => {

  console.info('Application started!');
  if (process.pid)
    console.info(`Process PID = ${process.pid}`);
  if (process.env.NODE_ENV !== 'production')
    console.debug(`Env = \'${process.env.NODE_ENV}\' (process.env.NODE_ENV not set to \'production\')`);

  console.info(`Server running at http://${hostname}:${port}/`);
  console.info(`Server running at http://${hostname}:${port}/api/`);
  console.info(`Server running at http://${hostname}:${port}/api/status/`);
  console.info(`Server running at http://${hostname}:${port}/api/status/v1`);
});
