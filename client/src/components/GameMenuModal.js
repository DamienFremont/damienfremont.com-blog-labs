import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlay, faCog } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const GameMenuModal = React.forwardRef((props, ref) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    ref.current = { toggle };

    return (
        <Modal isOpen={isOpen} fade={true} >
            <ModalHeader toggle={toggle} className="text-center">
                <FormattedMessage id="GameMenuModal.title" />
            </ModalHeader>
            <ModalBody>
                <Button color="primary" block onClick={toggle}>
                    <FontAwesomeIcon icon={faPlay} />{' '}
                    <FormattedMessage id="GameMenuModal.resume" />
                </Button>
                <Button color="light" disabled block tag={Link} to="/settings">
                    <FontAwesomeIcon icon={faCog} />{' '}
                    <FormattedMessage id="GameMenuModal.settings" />
                </Button>
                <Button color="light" block tag={Link} to="/">
                    <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                    <FormattedMessage id="GameMenuModal.quit" />
                </Button>
            </ModalBody >
        </Modal >
    );
});

export default GameMenuModal;
