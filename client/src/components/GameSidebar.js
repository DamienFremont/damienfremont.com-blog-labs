import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroup, ListGroupItem } from 'reactstrap';
import avatar from '../App-avatar.png';

const GameSidebar = (props) => {

    return (
        <ListGroup flush={true} className="w-100 vh-100">
            <ListGroupItem className="text-center">
                <img src={avatar} width="30" height="30" className="d-inline-block align-top" alt="" />
                <FormattedMessage id="GameSidebar.username" />
            </ListGroupItem >
            <ListGroupItem>
                <FormattedMessage id="GameSidebar.resources" />
            </ListGroupItem>
            <ListGroupItem>
                <FormattedMessage id="GameSidebar.army" />
            </ListGroupItem>
        </ListGroup>
    )

}

export default GameSidebar;