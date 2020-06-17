import React from 'react';
import { Navbar, Button, NavbarBrand, } from 'reactstrap';
import avatar from 'avatar.png';
import { FormattedMessage } from 'react-intl';
import { isLogin } from 'helpers/auth';
import { Link } from 'react-router-dom';

const MenuNavbar = (props) => {

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
        <Button color="secondary" tag={Link} to="/profile">
            <img src={avatar} width="30" height="30" className="d-inline-block align-top" alt="" />
        </Button>
    );

    return (
        <div>
            <Navbar>
                <NavbarBrand className="mr-auto"></NavbarBrand>
                {isLogin() ?
                    renderUserBar() :
                    renderPublicBar()
                }
            </Navbar>
        </div>
    );
}

export default MenuNavbar;