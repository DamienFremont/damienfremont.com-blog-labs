/**
 * @see https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314
 * @see https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6
 * @see http://www.passportjs.org/packages/passport-jwt/
 * @see http://www.passportjs.org/packages/passport-local/
 */
import { Router } from 'express';
import Users from '../service/users';
import { err_unique303_else_500, err_unique303_else_throw } from '../helpers/httperrors';
import Credentials from '../service/credentials';
import bodyParser from 'body-parser';
import { Credential, User, UserInfo } from '@shared/user';
import jwt from 'jsonwebtoken';
import { Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { BasicStrategy } from 'passport-http';
var passport = require('passport')

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
const jwtAlgo = process.env.JWT_ALGO || 'sha512';

const crypt = (value, algo) => (algo === null ? value : require("crypto").createHash(algo).update(value).digest("hex"));

const verifyPassword = (user, password) =>
    Credentials.findOneById(user.id).then(cred => {
        console.log(cred.credential_data);
        console.log(password);
        console.log(crypt(password, cred.algorithm));
        return (cred.credential_data === crypt(password, cred.algorithm));
    });
/*
const verifyLocalUser = (userid, password, done) =>
    Users.findOne({ username: userid }, async function (err, user) {
        console.log(`[auth] findOne ${user}`);
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (! await verifyPassword(user, password)) { return done(null, false); }
        return done(null, user);
    });

const loginAction = (req, res) => {
    const user = JSON.parse(JSON.stringify(new UserInfo(req.user)));
    const access_token = jwt.sign(user, jwtSecret);
    console.log(`[auth] authenticated user '${user.username}'`);
    res.json({ ...user, access_token });
};
*/

const loginAction = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Users.findOne({ username })
        .catch(err => res.status(500).send('Unknown server error'))
        .then(user => {
            if (!user) {
                return res.status(401).send('Wrong username or password')
            }
            return verifyPassword(user, password).then(verif => {
                if (!verif) {
                    return res.status(401).send('Wrong username or password')
                }
                const plainObject = JSON.parse(JSON.stringify(new UserInfo(user)));
                const access_token = jwt.sign(plainObject, jwtSecret);
                console.log(`[auth] authenticated user '${user.username}'`);
                return res.json({ ...plainObject, access_token });
            });
        });
};

const registrationAction = (req, res) =>
    Users.create(new User(req.body))
        .then(user => Credentials
            .create(new Credential({ credential_data: crypt(req.body.password, jwtAlgo), algorithm: jwtAlgo, user_ID: user.id }))
            .catch(err_unique303_else_throw(res)))
        .then((success) => res.send(success))
        .catch(err_unique303_else_500(res));

const login = () => {
    console.log('[auth] routes /login');
    let router = Router();
    router.use(bodyParser.json());
    router.post('/login', loginAction);
    return router;
}

const registration = () => {
    console.log('[auth] routes /registration');
    let router = Router();
    router.use(bodyParser.json());
    router.post('/registration', registrationAction);
    return router;
}

const initialize = () => {
    const init = passport.initialize();
    console.log(`[auth] Starting...`);
    console.log(`[auth] use BasicStrategy`);
    return init;
}

export default {
    passport,
    initialize,
    login,
    registration
};