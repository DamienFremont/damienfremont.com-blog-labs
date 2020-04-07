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
        <Modal isOpen={isOpen} fade={false} centered={true} >
            <ModalHeader className="text-center">
                <FormattedMessage id="GameMenuModal.title" />
            </ModalHeader>
            <ModalBody className="pb-5">
                <div className="d-flex justify-content-center">
                    <div>
                        <Button color="primary" block className="pl-5 pr-5 text-left" onClick={toggle}>
                            <FontAwesomeIcon icon={faPlay} />{' '}
                            <FormattedMessage id="GameMenuModal.resume" />
                        </Button>
                        <Button color="light" block className="pl-5 pr-5 text-left" disabled>
                            <FontAwesomeIcon icon={faCog} />{' '}
                            <FormattedMessage id="GameMenuModal.settings" />
                        </Button>
                        <Button color="light" block className="pl-5 pr-5 text-left" tag={Link} to="/home/">
                            <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                            <FormattedMessage id="GameMenuModal.quit" />
                        </Button>
                    </div>
                </div>
            </ModalBody >
        </Modal >
    );
});

export default GameMenuModal;
