import { User, UserRegistration, Credential } from '@shared/user';
import db from '../middlewares/db';
import CredentialModel from './credentials';

const findOne = async (filter) => db
    .query('SELECT * FROM user_entity WHERE username = $1', [filter.username])
    .then(res => res.rows[0]);


const findOneById = async (id) => db
    .query('SELECT * FROM projetmago_users WHERE id = $1', [id])
    .then(res => res.rows[0]);

const create = (data) => {
    const sql = 'INSERT INTO user_entity (id, created_date, username, enabled) VALUES($1, $2, $3, $4)';
    let user = new User({
        ...data,
        id: require("crypto").createHash('md5').update(data.username).digest("hex"),
        created_date: Date.now(),
        enabled: true
    });
    return db.query(sql, [user.id, user.created_date, user.username, user.enabled])
        .then(res => user);
}

export default { findOne, findOneById, create };  