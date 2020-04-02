import { Router } from 'express';
import { get } from '../service/status';

export default () => {
    console.log('Init Status API...');
    let api = Router();
    api.get('/', (req, res) =>
        get(req).then((body) => res.send(body))
    );
    return api;
}