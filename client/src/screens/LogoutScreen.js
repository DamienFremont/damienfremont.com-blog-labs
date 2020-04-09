import React, { useState } from 'react';
import { UIConfirmModal } from 'components';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from 'helpers/security';

const LogoutScreen = (props) => {

    const [isAlreadyLogged, setIsAlreadyLogged] = useState(fakeAuth.isAuthenticated);

    const handleCancel = () => {
        props.history.push('/')
    }

    const handleConfirm = () => {
        fakeAuth.signout(() => setIsAlreadyLogged(false));
    }

    const renderLoggedOut = () => (
        <Redirect to='/' />
    )

    const renderConfirm = () => (
        <UIConfirmModal
            isOpen={true}
            title="LogoutScreen.modal.title"
            desc="LogoutScreen.modal.desc"
            confirm="LogoutScreen.modal.confirm"
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
        />
    )

    return (
        isAlreadyLogged ?
            renderConfirm() :
            renderLoggedOut()
    );
}

export default LogoutScreen;
