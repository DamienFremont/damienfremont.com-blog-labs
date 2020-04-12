/**
 * @see https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314
 * @see https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6
 * @see http://www.passportjs.org/packages/passport-jwt/
 * @see http://www.passportjs.org/packages/passport-local/
 */
import { Router } from 'express';
import passport from './authpassport';
import Users from '../service/users';
import Credentials from '../service/credentials';
import bodyParser from 'body-parser';
import { Credential, User } from '@shared/user';

const registration = async (data) => {
    Users.create(new User(data)).then(res =>
        Credentials.create(new Credential({ ...data, user_id: res.id })));
}

const registrationErrorCred = (res) => (err) => {
    console.log(err);
    if (err.message.includes('credential_pkey') && err.message.includes('unique'))
        return res.status(303).send('existing Credential');
    throw err;
}

const registrationErrorUser = (res) => (err) => {
    console.log(err);
    if (err.message.includes('user_entity_pkey') && err.message.includes('unique'))
        return res.status(303).send('existing User');
    return res.status(500).send('Unknown server error');
}

const routes = () => {
    console.log('Init Auth API...');
    let router = Router();
    router.use(bodyParser.json());

    router.post('/login',
        () => passport.authenticate('local', { failureRedirect: '/login' }),
        (req, res) => res.redirect('/'));

    router.post('/registration', (req, res) =>
        Users.create(new User(req.body))
            .then(user => Credentials
                .create(new Credential({ ...req.body, user_ID: user.id }))
                .catch(registrationErrorCred(res)))
            .then((success) => res.send(success))
            .catch(registrationErrorUser(res)));

    return router;
}

export default { routes, passport };