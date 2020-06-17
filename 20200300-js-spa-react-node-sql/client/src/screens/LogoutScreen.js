import React from 'react';
import { UIConfirmModal } from 'components';
import { auth } from 'helpers/auth';

const LogoutScreen = (props) => {

    const handleCancel = () => props.history.push('/');

    const handleConfirm = () => auth.signout().then(() => props.history.push('/'));

    return (
        <UIConfirmModal
            isOpen={true}
            title="LogoutScreen.modal.title"
            desc="LogoutScreen.modal.desc"
            confirm="LogoutScreen.modal.confirm"
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
        />
    );
}

export default LogoutScreen;
