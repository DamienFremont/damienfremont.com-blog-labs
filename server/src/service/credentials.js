import { Credential } from '@shared/user';
import db from '../middlewares/db';

const create = (value) => db
    .query('INSERT INTO credential (created_date, user_ID, credential_data, algorithm) VALUES($1, $2, $3, $4)',
        [value.created_date, value.user_ID, value.credential_data, value.algorithm])
    .then(res => value);

const findOneById = async (id) => db
    .query('SELECT * FROM credential WHERE user_id = $1',
        [id])
    .then(res => res.rows[0]);

export default { create, findOneById }; 