import React, { useState } from 'react';
import { WelcomeModal, ServerStatus } from 'components';
import { MenuLayout } from 'layouts/MenuLayout';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { faCog, faQuestionCircle, faPlay, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainScreen = (props) => {

    const [isOpen, setIsOpen] = useState((localStorage.getItem('WelcomeModalHide') === 'false'));

    const toggle = () => setIsOpen(!isOpen);

    return (
        <MenuLayout>
            <div className="d-flex justify-content-center">
                <MainMenu />
            </div>
            <div className="d-flex justify-content-end align-items-end pt-5">
                <ServerStatus />
            </div>
            <WelcomeModal
                className="text-right"
                isOpen={isOpen}
                toggle={toggle} />
        </MenuLayout >
    );
}

export default MainScreen;
