import React, { useState, useEffect } from 'react';
import { get } from 'axios';
import { FormattedMessage } from 'react-intl';
import { ServerStatusResponse } from 'shared/status';

const ServerStatus = (props) => {

    const refreshSec = 1;

    const [response, setResponse] = useState({});

    const getStatus = () =>
        get('/api/status').then(
            ({ data }) => setResponse(new ServerStatusResponse(data)),
            err => setResponse({ status: 'OFFLINE' }));

    useEffect(() => {
        const ms = refreshSec * 1000;
        const interval = setInterval(() => getStatus(), ms);
        return () => clearInterval(interval);
    }, [refreshSec]);

    const online = () => (response && response.status === 'ONLINE');
    const status = () => (online() ? 'success' : 'info');

    return (
        <div className={`text-${status()}`}>
            <b><FormattedMessage id="ServerStatus.desc" />:</b> <br />
            <span><FormattedMessage id={`ServerStatus.online.${status()}`} /></span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.accounts.desc" values={response} /> : ' '}</span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.players.desc" values={response} /> : ' '}</span> <br />
            <span>{online() ? <FormattedMessage id="ServerStatus.games.desc" values={response} /> : ' '}</span> <br />
        </div>
    );
};

export default ServerStatus;
