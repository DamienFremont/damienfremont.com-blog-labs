/**
 *  @see https://node-postgres.com/api/pool#pool.connect
 */
import fs from 'fs';

const test = (client, release) => {
    console.log('[db] test...');
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    })
}

const reconnect = (pool) => {
    console.log('[db] Connecting...');
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('[db] Error acquiring client', err.stack)
        }
        test(client, release);
    });
}

const queryFile = (client, file) => {
    console.log(`[db] execute file ${file}`);
    const sql = fs.readFileSync(file).toString();
    client.query(sql, function (err, result) {
        // FIXME: done();
        if (err) {
            console.log('[db] error: ', err);
        }
        console.log('[db] executed');
    });
}

export { queryFile, reconnect };