import { StatusResponse } from '@shared/StatusModel';
import db from '../db/index';

const get = async () => {
    return Promise.all([
        db.query('SELECT COUNT(*) FROM projetmago_users WHERE enabled = $1', [true]),
        db.query('SELECT COUNT(*) FROM projetmago_users WHERE enabled = $1 AND session_active = $2', [true, true])
    ]).then(([accountsRes, playersRes]) =>
        new StatusResponse({
            status: 'ONLINE',
            database: true,
            accounts: accountsRes.rows[0].count,
            players: playersRes.rows[0].count,
            games: 0
        })
    );
}

export { get };