import { User, UserRegistration, Credential } from '@shared/user';
import db from '../middlewares/db';
import CredentialModel from './credentials';

const findOne = async (username, password) => {
    return db
        .query('SELECT * FROM projetmago_users WHERE username = $1', [username])
        .then((result) => new User({ ...result }));
}


const findOneById = async (id) => {
    return db
        .query('SELECT * FROM projetmago_users WHERE id = $1', [id])
        .then((result) => new User({ ...result }));
}

const create = (data) => {
    const sql = 'INSERT INTO user_entity (id, created_date, email, enabled) VALUES($1, $2, $3, $4)';
    let user = new User({
        ...data,
        id: require("crypto").createHash('md5').update(data.email).digest("hex"),
        created_date: Date.now(),
        enabled: true
    });
    return db.query(sql, [user.id, user.created_date, user.email, user.enabled])
        .then(res => user);
}

export default { findOne, findOneById, create };  