import React, { useState, useEffect } from 'react';
import './App.css';
import StatusApi from './status-api';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const App = (props) => {

  const [modal, setModal] = useState(true);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const interval = setInterval(getStatus, (props.statusInterval * 1000));
    return () => {
      clearInterval(interval);
    };
  });

  const getStatus = () => StatusApi.get()
    .then(res => setResponse(res))
    .catch(err => setResponse(null));

  const toggle = () => setModal(!modal);

  const serverstatusText = () => {
    const online = (response && response.status === 'ONLINE');
    const status = online ? 'success' : 'info';
    return (
      <div>
        <b><FormattedMessage id="serverstatus.text" /></b> <br />
        <div className={`text-${status}`}>
          <span><FormattedMessage id={`serverstatus.online.${status}`} /></span> <br />
          <span>{online ? <FormattedMessage id="serverstatus.accounts.text" values={response} /> : ' '}</span> <br />
          <span>{online ? <FormattedMessage id="serverstatus.players.text" values={response} /> : ' '}</span> <br />
          <span>{online ? <FormattedMessage id="serverstatus.games.text" values={response} /> : ' '}</span> <br />
        </div>
      </div>
    );
  };

  const welcomeModal = () => {
    return (
      <Modal isOpen={modal} toggle={toggle} fade={true}>
        <div className="text-light bg-dark">
          <ModalHeader toggle={toggle}>
            <FormattedMessage id="welcome.title" />
          </ModalHeader>
          <ModalBody>
            <p><FormattedMessage id="welcome.text" /></p>
            <p>{serverstatusText()}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              <FontAwesomeIcon icon={faCheck} />{' '}
              <FormattedMessage id="welcome.ok" />
            </Button>
          </ModalFooter></div>
      </Modal>
    );
  };

  return (
    <div className="App">
      {welcomeModal()}
    </div >
  );
}

export default App;
