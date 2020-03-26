import { Router } from 'express';
import { StatusResponse } from '@shared/status/model';

export default () => {
    let api = Router();

    api.get('/', (req, res) => {

        const body = new StatusResponse({
            status: 'ONLINE',
            playersCount: 0
        });
        res.send(body);

    });

    return api;
}