import url from 'url';
import fs from 'fs';
import { Pool } from 'pg';
import { reconnect, queryFile } from './dbutils';

console.log('Database config...');
const params = url.parse(process.env.DATABASE_URL || 'progres://projetmago:projetmago@localhost:5432/projetmago');
const auth = params.auth.split(':');
const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: process.env.DATABASE_SSL || false
};

const updateDatabase = (client) => {
  const path = '../database';
  fs.readdirSync(path)
    .filter(fn => fn.endsWith('.sql'))
    .forEach(e => queryFile(client, `${path}/${e}`));
}

const pool = new Pool(config);
updateDatabase(pool);

pool.on('connect', (client) => {
  console.log('Database Connected');
  updateDatabase(client);
});

pool.on('error', (err, client) => {
  console.log('Database Error');
  reconnect(pool);
});

export default pool;