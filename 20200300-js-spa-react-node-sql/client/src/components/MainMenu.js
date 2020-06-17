import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { faCog, faQuestionCircle, faPlay, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainMenu = (props) => {

    return (
        <div>
            <Button color="primary" block className="pl-5 pr-5 text-left" tag={Link} to="/game/">
                <FontAwesomeIcon icon={faPlay} />{' '}
                <FormattedMessage id="MainMenu.start" />
            </Button>
            <Button color="light" block className="pl-5 pr-5 text-left" tag={Link} to="/settings/">
                <FontAwesomeIcon icon={faCog} />{' '}
                <FormattedMessage id="MainMenu.settings" />
            </Button>
            <Button color="light" block className="pl-5 pr-5 text-left" target="_blank" href="https://PROJECTSITE.com/help/">
                <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                <FormattedMessage id="MainMenu.help" />
            </Button>
            <Button color="light" block className="pl-5 pr-5 text-left" tag={Link} to="/logout/">
                <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                <FormattedMessage id="MainMenu.logout" />
            </Button>
        </div>
    );
}

export default MainMenu;
