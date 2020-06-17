import { Router } from 'express';
import { get } from '../service/status';

export default () => {
    let api = Router();
    api.get('/', (req, res) =>
        get(req).then((body) => res.send(body)));
    return api;
}