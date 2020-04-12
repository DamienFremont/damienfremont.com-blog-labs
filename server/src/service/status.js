import { ServerStatusResponse } from '@shared/status';
import db from '../middlewares/db';

const get = async () => {
    let accountsQuery = db.query('SELECT COUNT(*) FROM user_entity WHERE enabled = $1', [true]);
    let playersQuery = db.query('SELECT COUNT(*) FROM user_session', []);
    return Promise.all([accountsQuery, playersQuery]).then(([accountsResult, playersResult]) =>
        new ServerStatusResponse({
            status: 'ONLINE',
            database: true,
            accounts: accountsResult.rows[0].count,
            players: playersResult.rows[0].count,
            games: 0
        })
    );
}

export { get };