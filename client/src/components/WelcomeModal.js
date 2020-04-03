import React, { useState, useEffect, useRef } from 'react';
import api from '../shared/StatusClient';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const WelcomeModal = (props) => {

    const [response, setResponse] = useState({});
    const confirmInput = useRef(null);

    const getStatus = () => api.get()
        .then(res => setResponse(res))
        .catch(err => setResponse(null));


    useEffect(() => {
        const ms = props.refreshSec * 1000;
        const interval = setInterval(() => getStatus(), ms);
        if (confirmInput && confirmInput.current)
            confirmInput.current.focus()
        return () => clearInterval(interval);
    }, [props.refreshSec, confirmInput]);

    const renderServerstatus = () => {
        const online = (response && response.status === 'ONLINE');
        const status = online ? 'success' : 'info';
        return (
            <div>
                <b><FormattedMessage id="WelcomeModal.status.text" /></b> <br />
                <div className={`text-${status}`}>
                    <span><FormattedMessage id={`WelcomeModal.status.online.${status}`} /></span> <br />
                    <span>{online ? <FormattedMessage id="WelcomeModal.status.accounts.text" values={response} /> : ' '}</span> <br />
                    <span>{online ? <FormattedMessage id="WelcomeModal.status.players.text" values={response} /> : ' '}</span> <br />
                    <span>{online ? <FormattedMessage id="WelcomeModal.status.games.text" values={response} /> : ' '}</span> <br />
                </div>
            </div>
        );
    };

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} fade={true} centered={true}>
            <div>
                <ModalHeader toggle={props.toggle}>
                    <FormattedMessage id="WelcomeModal.title" />
                </ModalHeader>
                <ModalBody>
                    <p><FormattedMessage id="WelcomeModal.text" /></p>
                    <p>{renderServerstatus()}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle} ref={confirmInput}>
                        <FontAwesomeIcon icon={faCheck} />{' '}
                        <FormattedMessage id="WelcomeModal.ok" />
                    </Button>
                </ModalFooter></div>
        </Modal>
    );
}

export default WelcomeModal;
