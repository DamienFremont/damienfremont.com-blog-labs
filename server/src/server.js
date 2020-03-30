import express from 'express';
import http from 'http';
import apiV1 from './api/v1';
import fs from 'fs';

/**
 * Main script for server
 */
class App {

  constructor() {
    this.port = process.env.PORT || 5000;
    this.hostname = process.env.HOSTNAME || 'localhost';
    this.public = process.env.NODE_PUBLIC || '../client/build';
  }

  start() {
    console.info('Start Application...');
    const app = this.app = express();
    this.initServer(app);
    this.initStatic(app);
    this.initServices(app);
    this.app.listen(this.port, this.hostname, () => {
      console.info('Application started!');
      this.logEnv();
    });
  }

  initServer(app) {
    console.info('initServer');
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    this.server = http.createServer(app);
  }

  initStatic(app) {
    console.info(`initStatic at ${this.public}`);
    app.use(express.static(this.public));
  }

  initServices(app) {
    console.info('initservices at /api');
    app.use('/api', apiV1()); // TOUJOURS LA DERNIERE, CAR UTILISEE PAR L'APPLICATION
    app.use('/api/v1', apiV1()); // UTILISEE PAR D'AUTRES QUE L'APPLICATION (EX: SITES WEB, OUTILS)
  }

  logEnv() {
    if (process.pid)
      console.info(`Process PID = ${process.pid}`);
    if (process.env.NODE_ENV !== 'production')
      console.debug(`Env = \'${process.env.NODE_ENV}\' (process.env.NODE_ENV not set to \'production\')`);
    console.info(`Server running at http://${this.hostname}:${this.port}/`);
  }
}

var app = new App();
app.start();