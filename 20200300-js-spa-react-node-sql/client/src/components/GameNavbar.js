import React, { useRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Nav, Navbar, Button, NavbarBrand, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
                <NavbarBrand className="mr-auto"></NavbarBrand>
                <Nav navbar>
                    <Button color="dark" className="text-uppercase" onClick={toggle} >
                        <div className="d-lg-none">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="d-none d-lg-block">
                            <FontAwesomeIcon icon={faBars} />{' '}<FormattedMessage id="GameNavbar.menu" class="d-none d-lg-block" />
                        </div>
                    </Button>
                </Nav>
            </Navbar>
            <GameMenuModal ref={modal} />
        </div>
    );
}

export default GameNavbar;