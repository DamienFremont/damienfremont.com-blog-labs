import url from 'url';
import { Pool } from 'pg';
import { reconnect, update } from './utils';

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

const pool = new Pool(config);
update(pool);

pool.on('connect', (client) => {
  console.log('Database Connected');
  update(client);
});

pool.on('error', (err, client) => {
  console.log('Database Error');
  reconnect(pool);
});

export default pool;