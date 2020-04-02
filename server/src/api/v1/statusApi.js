import { Router } from 'express';
import { StatusResponse } from '@shared/status/model';

export default (db) => {
    let api = Router();

    api.get('/', (req, res) => {
        // TODO: cache+refresh interval
        const pAccounts = db.query('SELECT COUNT(*) FROM projetmago_users WHERE enabled = $1', [true]);
        const pPlayers = db.query('SELECT COUNT(*) FROM projetmago_users WHERE enabled = $1', [true]);
        Promise.all([pAccounts, pPlayers]).then(([rAccounts, rPlayers]) => {
            const accounts = rAccounts.rows[0].count;
            const players = rPlayers.rows[0].count;
            const games = 0;
            const body = new StatusResponse({
                status: 'ONLINE',
                database: true,
                accounts,
                players,
                games
            });
            res.send(body);
        }).catch((error) => {
            console.log('api ERROR:', error);
            const body = new StatusResponse({
                status: 'ERROR'
            });
            res.send(body);
        });
    });
    return api;
}