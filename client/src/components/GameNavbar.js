import React, { useRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button, NavbarBrand, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './GameNavbar-logo.png';
import GameMenuModal from './GameMenuModal';

const GameNavbar = (props) => {

    const modal = useRef(null);

    const toggle = () => modal.current.toggle();

    useEffect(() => {
        const handleEsc = (event) => (event.keyCode === 27) ? toggle() : null;
        window.addEventListener("keydown", handleEsc, false);
        return () => {
            window.removeEventListener("keydown", handleEsc, false);
        };
    }, []);

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand className="mr-auto" tag={Link} to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />{' '}
                    <FormattedMessage id="app.short_name" />
                </NavbarBrand>
                <Nav navbar>
                    <Button color="dark" className="text-uppercase" onClick={toggle} >
                        <div class="d-lg-none">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div class="d-none d-lg-block">
                            <FontAwesomeIcon icon={faBars} />{' '}<FormattedMessage id="GameNavbar.menu" class="d-none d-lg-block" />
                        </div>
                    </Button>
                </Nav>
            </Navbar>
            <GameMenuModal
                ref={modal} />
        </div>
    );
}

export default GameNavbar;