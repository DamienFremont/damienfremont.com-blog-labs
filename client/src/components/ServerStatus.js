import React, { useState, useEffect } from 'react';
import api from '../shared/StatusClient';
import { FormattedMessage } from 'react-intl';

const ServerStatus = (props) => {

    const refreshSec = 1;

    const [response, setResponse] = useState({});

    const getStatus = () => api.get()
        .then(res => setResponse(res))
        .catch(err => setResponse(null));

    useEffect(() => {
        const ms = refreshSec * 1000;
        const interval = setInterval(() => getStatus(), ms);
        return () => clearInterval(interval);
    }, [refreshSec]);

    const online = () => (response && response.status === 'ONLINE');
    const status = () => (online ? 'success' : 'info');

    return (
        <div className={`text-${status()} text-right`}>
            <b><FormattedMessage id="ServerStatus.text" />:</b> <br />
            <span><FormattedMessage id={`ServerStatus.online.${status()}`} /></span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.accounts.text" values={response} /> : ' '}</span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.players.text" values={response} /> : ' '}</span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.games.text" values={response} /> : ' '}</span> <br />
        </div>
    );
};

export default ServerStatus;
