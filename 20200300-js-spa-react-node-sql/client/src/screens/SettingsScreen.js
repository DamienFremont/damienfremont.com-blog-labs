import React from 'react';
import { MenuLayout } from 'layouts';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import { faChevronRight, faTrashAlt, faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServerStatus } from 'components';

const SettingsScreen = (props) => {

    const defaultChecked = localStorage.getItem('WelcomeModalHide');

    function onChange(e) {
        localStorage.setItem('WelcomeModalHide', e.target.checked);
    }

    function restore() {
        localStorage.clear();
    }

    const pathname = () => ((window.location && window.location && window.location.href) || '');
    const activeInterface = () => pathname().includes('interface');
    const activeStatus = () => pathname().includes('status');
    const active = () => (activeInterface() || activeStatus());

    return (
        <MenuLayout>
            <Modal isOpen={true} fade={false} centered={true} size='lg'>
                <ModalHeader>
                    <FormattedMessage id="SettingsScreen.title" />
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className={`col-md-4 ${active() ? 'd-none d-md-block' : 'col-12'}`}>
                            <ListGroup>
                                <ListGroupItem disable>
                                    <b><FormattedMessage id="SettingsScreen.general" /></b>
                                </ListGroupItem>
                                <ListGroupItem tag={Link} to="/settings/interface" active={activeInterface()}>
                                    <span className="d-flex justify-content-between">
                                        <FormattedMessage id="SettingsScreen.interface" />{' '}
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem tag="a" target="_blank" href="https://PROJECTSITE.com/about/">
                                    <span className="d-flex justify-content-between">
                                        <FormattedMessage id="SettingsScreen.about" />{' '}
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem tag={Link} to="/settings/status" active={activeStatus()}>
                                    <span className="d-flex justify-content-between">
                                        <FormattedMessage id="SettingsScreen.status" />{' '}
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane fade show ${activeInterface() ? 'active' : ''}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                    <ListGroup>
                                        <ListGroupItem>
                                            <Button color="link" tag={Link} to="/settings/">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </Button>
                                            <b><FormattedMessage id="SettingsScreen.interface" /></b>
                                        </ListGroupItem>
                                        <ListGroupItem>

                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1"
                                                    defaultChecked={defaultChecked}
                                                    onChange={onChange}
                                                />
                                                <label className="custom-control-label" for="customSwitch1">
                                                    <FormattedMessage id="SettingsScreen.WelcomeModalHide" />
                                                </label>
                                            </div>

                                        </ListGroupItem>
                                    </ListGroup>

                                </div>
                                <div className={`tab-pane fade show ${activeStatus() ? 'active' : ''}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                    <ListGroup>
                                        <ListGroupItem>
                                            <Button color="link" tag={Link} to="/settings/">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </Button>
                                            <b><FormattedMessage id="SettingsScreen.status" /></b>
                                        </ListGroupItem>
                                        <ListGroupItem>

                                            <ServerStatus />

                                        </ListGroupItem>
                                    </ListGroup>

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-between">
                    <Button color="primary" tag={Link} to="/">
                        <FontAwesomeIcon icon={faHome} />{' '}
                        <FormattedMessage id="SettingsScreen.back" />
                    </Button>
                    <Button onClick={restore}>
                        <FontAwesomeIcon icon={faTrashAlt} />{' '}
                        <FormattedMessage id="SettingsScreen.default" />
                    </Button>
                </ModalFooter>
            </Modal>
        </MenuLayout >
    );
}

export default SettingsScreen;
