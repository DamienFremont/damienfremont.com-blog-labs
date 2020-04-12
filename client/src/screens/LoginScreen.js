/**
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 * @see https://serverless-stack.com/chapters/create-a-login-page.html
 * 
 * @see https://medium.com/@paul.allies/stateless-auth-with-express-passport-jwt-7a55ffae0a5c
 * @see https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { auth } from 'helpers/auth';
import logo from 'logo.png';
import './LoginScreen.css';

const LoginScreen = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [failed, setFailed] = useState(false);

    const intl = useIntl();

    const validateForm = () =>
        username.length > 0 && password.length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.authenticate({ username, password })
            .then((res) => props.history.push('/'))
            .catch(err => setFailed(true));
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className="login-form bg-light" onSubmit={handleSubmit}>
                <div className="text-center">
                    <img src={logo} width="60" height="60" className="d-inline-block mt-2" alt="" />{' '}
                </div>
                <h1 className="text-center">
                    <span className="font-weight-bold">
                        <FormattedMessage id="LoginScreen.title" />
                    </span>
                </h1>
                {
                    failed
                        ? <Alert color="danger"><FormattedMessage id="LoginScreen.failed" /></Alert>
                        : null
                }
                <FormGroup>
                    <Label for="username">
                        <FormattedMessage id="LoginScreen.username" />
                    </Label>
                    <Input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'LoginScreen.username.placeholder' })}
                        autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        <FormattedMessage id="LoginScreen.password" />
                    </Label>
                    <Input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'LoginScreen.password.placeholder' })} />
                </FormGroup>
                <Button color="primary" className="btn-lg btn-block" type="submit" disabled={!validateForm()}>
                    <FormattedMessage id="LoginScreen.submit" />
                </Button>
                <div className="text-center">
                    <Button color="link" tag={Link} to="/signup">
                        <FormattedMessage id="LoginScreen.signup" />
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginScreen;
