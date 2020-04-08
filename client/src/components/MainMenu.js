import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { faCog, faQuestionCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainMenu = (props) => {

    return (
        <div>
            <Button color="primary" block className="pl-5 pr-5 text-left" tag={Link} to="/game/">
                <FontAwesomeIcon icon={faPlay} />{' '}
                <FormattedMessage id="HomePage.start" />
            </Button>
            <Button color="light" block className="pl-5 pr-5 text-left" tag={Link} to="/settings/">
                <FontAwesomeIcon icon={faCog} />{' '}
                <FormattedMessage id="HomePage.settings" />
            </Button>
            <Button color="light" block className="pl-5 pr-5 text-left" target="_blank" href="https://projetmago.wordpress.com/help/">
                <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                <FormattedMessage id="HomePage.help" />
            </Button>
        </div>
    );
}

export default MainMenu;
