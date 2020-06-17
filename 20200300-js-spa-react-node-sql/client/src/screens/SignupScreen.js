import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { auth } from 'helpers/auth';
import './SignupScreen.css';

const SignupScreen = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");

    const intl = useIntl();

    const validatePasswordInput = () =>
        (password.length > 0 && password.length > 0) &&
        (passwordconfirm.length > 0 && passwordconfirm.length > 0) &&
        (password === passwordconfirm);

    const validateForm = () =>
        (username.length > 0 && password.length > 0) &&
        validatePasswordInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signup({ username, password })
            .then(() => auth.authenticate({ username, password })
                .then(() => props.history.push('/')));
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className="login-form bg-light" onSubmit={handleSubmit}>
                <h1 className="text-center">
                    <FormattedMessage id="SignupScreen.title" />
                </h1>
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
