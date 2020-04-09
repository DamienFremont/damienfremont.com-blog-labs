import React from 'react';
import { Navbar, Button, NavbarBrand, } from 'reactstrap';
import avatar from 'avatar.png';
import { FormattedMessage } from 'react-intl';
import { fakeAuth } from 'helpers/security';
import { Link } from 'react-router-dom';

const MenuNavbar = (props) => {

    const isLoggedIn = () => fakeAuth.isAuthenticated;

    const renderPublicBar = () => (
        <span>
            <Button color="light" className="mr-1" tag={Link} to="/login">
                <FormattedMessage id="MenuNavbar.signin" />
            </Button>
            <Button color="primary" className="mr-1" tag={Link} to="/signup">
                <FormattedMessage id="MenuNavbar.signup" />
            </Button>
        </span>
    );

    const renderUserBar = () => (
        <Button color="secondary" disabled>
            <img src={avatar} width="30" height="30" className="d-inline-block align-top" alt="" />
        </Button>
    );

    return (
        <div>
            <Navbar>
                <NavbarBrand className="mr-auto"></NavbarBrand>
                {isLoggedIn() ?
                    renderUserBar() :
                    renderPublicBar()
                }
            </Navbar>
        </div>
    );
}

export default MenuNavbar;