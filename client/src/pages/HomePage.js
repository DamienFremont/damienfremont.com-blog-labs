import React, { useState } from 'react';
import WelcomeModal from '../components/WelcomeModal';
import MenuLayout from '../layouts/MenuLayout';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { faCog, faQuestionCircle, faPlay, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = (props) => {

    const refreshSec = 1;

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <MenuLayout>
            <div className="d-flex justify-content-center">
                <ListGroup vertical pills>
                    <ListGroupItem className="pl-5 pr-5" tag={Link} to="/game/">
                        <FontAwesomeIcon icon={faPlay} />{' '}
                        <FormattedMessage id="HomePage.start" />
                    </ListGroupItem>
                    <ListGroupItem className="pl-5 pr-5">
                        <FontAwesomeIcon icon={faCog} />{' '}
                        <FormattedMessage id="HomePage.settings" />
                    </ListGroupItem>
                    <ListGroupItem className="pl-5 pr-5">
                        <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                        <FormattedMessage id="HomePage.help" />
                    </ListGroupItem>
                    <ListGroupItem className="pl-5 pr-5" tag={Link} to="/exit/">
                        <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                        <FormattedMessage id="HomePage.exit" />
                    </ListGroupItem>
                </ListGroup>
            </div>
            <WelcomeModal
                isOpen={isOpen}
                toggle={toggle}
                refreshSec={refreshSec} />
        </MenuLayout>
    );
}

export default HomePage;
