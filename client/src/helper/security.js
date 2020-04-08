/**
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}

const isAuthenticated = () => fakeAuth.isAuthenticated();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

export { PrivateRoute, isAuthenticated };