import React from 'react';
import { Nav, Navbar, Button, NavbarBrand, } from 'reactstrap';
import avatar from './MenuNavbar-avatar.png';

const MenuNavbar = (props) => {

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand className="mr-auto"></NavbarBrand>
                <Nav navbar>
                    <Button color="primary" disabled>
                        <img src={avatar} width="30" height="30" className="d-inline-block align-top" alt="" />
                    </Button>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MenuNavbar;