/**
 * @see https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314
 * @see https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6
 * @see http://www.passportjs.org/packages/passport-jwt/
 * @see http://www.passportjs.org/packages/passport-local/
 */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy } from 'passport-jwt';
import User from '../service/users';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
const ExtractJwtz = ExtractJwt;

console.info('Securing Application...');
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
const jwtExpirationMs = process.env.JWT_EXPIRATION_MS || 9999999999;
console.log(`jwtSecret = ${jwtSecret}`);
console.log(`jwtExpirationMs = ${jwtSecret}`);


const verifyPassword = (passwordA, passwordB, callback) => callback(err, bcrypt.compareSync(passwordA, passwordB));

passport.use(new LocalStrategy(
    function (username, password, done) {
        findUserFunction({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!verifyPassword(password, user.password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    },
    (jwtPayload, cb) => {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

export default passport;