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
    this.hostname = process.env.HOSTNAME || '127.0.0.1';
    this.public = process.env.NODE_PUBLIC || '../client/build';
  }

  start() {
    console.info('Start Application...');
    this.app = express();
    this.initServer();
    this.initStatic();
    this.initServices();
    this.app.listen(this.port, this.hostname, () => {
      console.info('Application started!');
      this.logEnv();
    });
  }

  initServer() {
    console.info('initServer');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.server = http.createServer(this.app);
  }

  initStatic() {
    console.info(`initStatic at ${this.public}`);
    this.app.use(express.static(this.public));
  }

  initServices() {
    console.info('initservices at /api');
    this.app.use('/api', apiV1()); // TOUJOURS LA DERNIERE, CAR UTILISEE PAR L'APPLICATION
    this.app.use('/api/v1', apiV1()); // UTILISEE PAR D'AUTRES QUE L'APPLICATION (EX: SITES WEB, OUTILS)
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