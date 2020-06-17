/**
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios, { post } from 'axios';
import { UserRegistration, LoginLocal } from '../shared/user';
import jwt from 'jwt-decode';

const auth = {

    isAuthenticated: null,
    user: null,

    log(token) {
        localStorage.setItem('access_token', token);
        this.user = jwt(token);
        this.isAuthenticated = true;
    },

    authenticate(data) {
        return axios
            .post('/login', new LoginLocal(data))
            .then(res => {
                const token = res.data.access_token;
                this.log(token);
            });
    },

    signout(cb) {
        localStorage.removeItem('access_token');
        this.user = null;
        this.isAuthenticated = false;
        return Promise.resolve();
    },

    signup(data) {
        return post('/registration', new UserRegistration(data));
    }
}

const userDetails = () => auth.user;

/**
 * @see https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
 */

const isLogin = () => {
    if (auth.isAuthenticated === null) {
        const token = localStorage.getItem('access_token');
        const hasJwt = !(token === null);
        if (hasJwt)
            auth.log(token);
    }
    return auth.isAuthenticated;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLogin() === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export { auth, isLogin, PrivateRoute, PublicRoute, userDetails };