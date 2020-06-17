import React from 'react';
import { FormattedMessage } from 'react-intl';
import { UIHelpModal } from 'components';
import { ModalBody, ModalHeader } from 'reactstrap';

const WelcomeModal = (props) => {

    const toggle = props.toggle;
    const isOpen = props.isOpen;

    return (
        <UIHelpModal settingsName="WelcomeModalHide" isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                <FormattedMessage id="WelcomeModal.title" />
            </ModalHeader>
            <ModalBody>
                <p><FormattedMessage id="WelcomeModal.desc" /></p>
            </ModalBody>
        </UIHelpModal>
    );
}

export default WelcomeModal;
