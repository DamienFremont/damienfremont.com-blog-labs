import React from 'react';
import { FormattedMessage } from 'react-intl';
import HelpModal from './HelpModal';
import { ModalBody, ModalHeader } from 'reactstrap';

const WelcomeModal = (props) => {

    const toggle = props.toggle;
    const isOpen = props.isOpen;

    return (
        <HelpModal settingsName="WelcomeModalHide" isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                <FormattedMessage id="WelcomeModal.title" />
            </ModalHeader>
            <ModalBody>
                <p><FormattedMessage id="WelcomeModal.text" /></p>
            </ModalBody>
        </HelpModal>
    );
}

export default WelcomeModal;
