import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem } from 'reactstrap';

const NewsFeed = (props) => {

    return (
        <ListGroup >
            <ListGroupItem color="primary" className="d-flex justify-content-between align-items-center">
                <b><FormattedMessage id="NewsFeed.title" /></b>
            </ListGroupItem>
            <ListGroupItem color="primary" className="d-flex justify-content-between align-items-center">
                <span>
                    <FormattedMessage id="NewsFeed.website" />
                </span>
                <Button color="link" target="_blank" href="https://projetmago.wordpress.com/">
                    <FormattedMessage id="NewsFeed.goto" />{' '}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Button>
            </ListGroupItem>
        </ListGroup>
    );
}

export default NewsFeed;