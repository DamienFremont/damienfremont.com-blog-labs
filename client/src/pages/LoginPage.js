/**
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 * @see https://serverless-stack.com/chapters/create-a-login-page.html
 */
import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { fakeAuth } from '../helper/security';
import logo from './LoginPage-logo.png';
import './LoginPage.css';

const LoginPage = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isAlreadyLogged, setIsAlreadyLogged] = useState(fakeAuth.isAuthenticated);
    const intl = useIntl();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        fakeAuth.authenticate(() => setIsAlreadyLogged(true))
    }

    const renderRedirect = () => (
        <Redirect to='/' />
    )

    const renderForm = () => (
        <div className="d-flex justify-content-center">
            <Form className="login-form bg-light">
                <div className="text-center">
                    <img src={logo} width="60" height="60" className="d-inline-block mt-2" alt="" />{' '}
                </div>
                <h1 className="text-center">
                    <span className="font-weight-bold">
                        <FormattedMessage id="LoginPage.title" />
                    </span>
                </h1>
                <FormGroup>
                    <Label for="exampleEmail">
                        <FormattedMessage id="LoginPage.email" />
                    </Label>
                    <Input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'LoginPage.email.placeholder' })}
                        autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        <FormattedMessage id="LoginPage.password" />
                    </Label>
                    <Input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'LoginPage.password.placeholder' })} />
                </FormGroup>
                <Button color="primary" className="btn-lg btn-block" onClick={handleSubmit} disabled={!validateForm()}>
                    <FormattedMessage id="LoginPage.submit" />
                </Button>
                <div className="text-center">
                    <Button color="link" tag={Link} to="/signup">
                        <FormattedMessage id="LoginPage.signup" />
                    </Button>
                </div>
            </Form>
        </div>
    )

    return (
        isAlreadyLogged ?
            renderRedirect() :
            renderForm()
    );
}

export default LoginPage;
