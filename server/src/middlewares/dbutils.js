/**
 *  @see https://node-postgres.com/api/pool#pool.connect
 */
import fs from 'fs';

const test = (client, release) => {
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    })
}

const reconnect = (pool) => {
    console.log('Database Connecting...');
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        test(client, release);
    });
}

const queryFile = (client, file) => {
    console.log(`Database updating with... ${file}`);
    const sql = fs.readFileSync(file).toString();
    client.query(sql, function (err, result) {
        // FIXME: done();
        if (err) {
            console.log('error: ', err);
        }
        console.log('Database updated');
    });
}

export { queryFile, reconnect };