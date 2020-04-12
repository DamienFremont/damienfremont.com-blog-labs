import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { auth } from 'helpers/auth';
import './SignupScreen.css';
import { post } from 'axios';
import { UserRegistration } from '../shared/user';

const SignupScreen = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");
    const [email, setEmail] = useState("");

    const intl = useIntl();

    const validatePasswordInput = () =>
        (password.length > 0 && password.length > 0) &&
        (passwordconfirm.length > 0 && passwordconfirm.length > 0) &&
        (password === passwordconfirm);

    const validateForm = () =>
        (username.length > 0 && password.length > 0) &&
        validatePasswordInput() &&
        (email.length > 0 && email.length > 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new UserRegistration({ email, password });
        post('/auth/registration', data)
            .then(() => auth.authenticate(
                () => props.history.push('/')));
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className="login-form bg-light" onSubmit={handleSubmit}>
                <h1 className="text-center">
                    <FormattedMessage id="SignupScreen.title" />
                </h1>
                <FormGroup>
                    <Label for="email">
                        <FormattedMessage id="SignupScreen.email" />
                    </Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'SignupScreen.email.placeholder' })}
                        autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label for="username">
                        <FormattedMessage id="SignupScreen.username" />
                    </Label>
                    <Input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'SignupScreen.username.placeholder' })} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        <FormattedMessage id="SignupScreen.password" />
                    </Label>
                    <Input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'SignupScreen.password.placeholder' })} />
                </FormGroup>
                <FormGroup>
                    <Label for="passwordconfirm">
                        <FormattedMessage id="SignupScreen.passwordconfirm" />
                    </Label>
                    <Input type="password"
                        value={passwordconfirm}
                        onChange={e => setPasswordconfirm(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'SignupScreen.password.placeholder' })}
                        invalid={passwordconfirm.length > 0 && !validatePasswordInput()} />
                </FormGroup>
                <Button color="primary" className="btn-lg btn-block" type="submit" disabled={!validateForm()}>
                    <FormattedMessage id="SignupScreen.submit" />
                </Button>
                <div className="text-center">
                    <Button color="link" tag={Link} to="/">
                        <FormattedMessage id="SignupScreen.cancel" />
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default SignupScreen;
