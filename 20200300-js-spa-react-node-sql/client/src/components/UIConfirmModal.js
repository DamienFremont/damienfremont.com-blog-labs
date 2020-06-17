import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const UIConfirmModal = (props) => {

    const [isOpen, setIsOpen] = useState(props.isOpen || false);

    const toggle = () => setIsOpen(!isOpen);

    const defaultHandle = () => setIsOpen(false);

    const handleCancel = props.handleCancel || defaultHandle;
    const handleConfirm = props.handleConfirm;

    const title = props.title || "UIConfirmModal.title";
    const desc = props.desc || "UIConfirmModal.desc";
    const cancel = props.cancel || "UIConfirmModal.cancel";
    const confirm = props.confirm || "UIConfirmModal.confirm";

    return (
        <Modal isOpen={isOpen} toggle={toggle} fade={true} centered={true}>
            <ModalHeader>
                <FormattedMessage id={title} />
            </ModalHeader>
            <ModalBody>
                <p><FormattedMessage id={desc} /></p>
            </ModalBody>
            <ModalFooter className="d-flex justify-content-between">
                <Button color="secondary" onClick={handleCancel}>
                    <FontAwesomeIcon icon={faTimes} />{' '}
                    <FormattedMessage id={cancel} />
                </Button>
                <Button color="primary" onClick={handleConfirm}>
                    <FontAwesomeIcon icon={faCheck} />{' '}
                    <FormattedMessage id={confirm} />
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default UIConfirmModal;
