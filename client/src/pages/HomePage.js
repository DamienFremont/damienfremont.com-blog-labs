import React, { useState } from 'react';
import WelcomeModal from '../components/WelcomeModal';
import MenuLayout from '../layouts/MenuLayout';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { faCog, faQuestionCircle, faPlay, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = (props) => {

    const refreshSec = 1;

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <MenuLayout>
            <div className="d-flex justify-content-center">
                <div>
                    <Button color="primary" block className="pl-5 pr-5 text-left" tag={Link} to="/game/">
                        <FontAwesomeIcon icon={faPlay} />{' '}
                        <FormattedMessage id="HomePage.start" />
                    </Button>
                    <Button color="light" block className="pl-5 pr-5 text-left" disabled>
                        <FontAwesomeIcon icon={faCog} />{' '}
                        <FormattedMessage id="HomePage.settings" />
                    </Button>
                    <Button color="light" block className="pl-5 pr-5 text-left" target="_blank" href="https://damienfremont.com/projetmago-help/">
                        <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                        <FormattedMessage id="HomePage.help" />
                    </Button>
                    <Button color="light" block className="pl-5 pr-5 text-left" tag={Link} to="/exit/">
                        <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                        <FormattedMessage id="HomePage.exit" />
                    </Button>
                </div>
            </div>
            <WelcomeModal
                isOpen={isOpen}
                toggle={toggle}
                refreshSec={refreshSec} />
        </MenuLayout>
    );
}

export default HomePage;
