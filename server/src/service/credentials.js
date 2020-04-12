import { Credential } from '@shared/user';
import db from '../middlewares/db';

const create = (data) => {
    const sql = 'INSERT INTO credential (created_date, user_ID, credential_data) VALUES($1, $2, $3)';
    let cred = new Credential({
        ...data
    });
    return db.query(sql, [cred.created_date, cred.user_ID, cred.password])
        .then(res => cred);
}

export default { create }; 