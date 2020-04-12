import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalFooter } from 'reactstrap';

const UIHelpModal = (props) => {

    const settingsName = props.settingsName;
    const toggle = props.toggle;
    const isOpen = props.isOpen;

    const defaultChecked = localStorage.getItem(settingsName === false);

    function onChange(e) {
        localStorage.setItem(settingsName, e.target.checked);
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} fade={true} centered={true}>
            {props.children}
            <ModalFooter className="d-flex justify-content-between">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                        defaultChecked={defaultChecked}
                        onChange={onChange}
                    />
                    <label className="custom-control-label" for="customSwitch1">
                        <FormattedMessage id="UIHelpModal.hide" />
                    </label>
                </div>
                <Button color="primary" onClick={toggle}>
                    <FontAwesomeIcon icon={faCheck} />{' '}
                    <FormattedMessage id="UIHelpModal.ok" />
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default UIHelpModal;
