import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { userDetails } from 'helpers/auth';
import './ProfileScreen.css';

const ProfileScreen = (props) => {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const data = userDetails();
        setUsername(data.username);
        return () => { };
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <Form className="profile-form bg-light" disabled>
                <h1 className="text-center">
                    <FormattedMessage id="ProfileScreen.title" />
                </h1>
                <FormGroup>
                    <Label for="username">
                        <FormattedMessage id="ProfileScreen.username" />
                    </Label>
                    <Input
                        type="text" disabled
                        value={username} />
                </FormGroup>
                <Button color="primary" tag={Link} to="/">
                    <FormattedMessage id="ProfileScreen.back" />
                </Button>
            </Form>
        </div>
    );
}

export default ProfileScreen;
