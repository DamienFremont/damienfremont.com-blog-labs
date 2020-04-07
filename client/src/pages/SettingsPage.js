import React from 'react';
import MenuLayout from '../layouts/MenuLayout';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import { faChevronLeft, faChevronRight, faTrashAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServerStatus from '../components/ServerStatus';

const SettingsPage = (props) => {

    const defaultChecked = localStorage.getItem('WelcomeModalHide');

    function onChange(e) {
        localStorage.setItem('WelcomeModalHide', e.target.checked);
    }

    function restore() {
        localStorage.clear();
    }

    const pathname = () => ((props.location && props.location && props.location.pathname) || '');
    const activeInterface = () => pathname().includes('interface');
    const activeAbout = () => pathname().includes('about');
    const active = () => (activeInterface() || activeAbout());

    return (
        <MenuLayout>
            <Modal isOpen={true} fade={false} centered={true} size='lg'>
                <ModalHeader>
                    <FormattedMessage id="SettingsPage.title" />
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className={`col-md-4 ${active() ? 'd-none d-md-block' : 'col-12'}`}>
                            <ListGroup>
                                <ListGroupItem disable>
                                    <b><FormattedMessage id="SettingsPage.general" /></b>
                                </ListGroupItem>
                                <ListGroupItem tag={Link} to="/settings/interface" active={activeInterface()}>
                                    <span className="d-flex justify-content-between">
                                        <FormattedMessage id="SettingsPage.interface" />{' '}
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem tag={Link} to="/settings/about" active={activeAbout()}>
                                    <span className="d-flex justify-content-between">
                                        <FormattedMessage id="SettingsPage.about" />{' '}
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
                                            <b><FormattedMessage id="SettingsPage.interface" /></b>
                                        </ListGroupItem>
                                        <ListGroupItem>

                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1"
                                                    defaultChecked={defaultChecked}
                                                    onChange={onChange}
                                                />
                                                <label className="custom-control-label" for="customSwitch1">
                                                    <FormattedMessage id="SettingsPage.WelcomeModalHide" />
                                                </label>
                                            </div>

                                        </ListGroupItem>
                                    </ListGroup>

                                </div>
                                <div className={`tab-pane fade show ${activeAbout() ? 'active' : ''}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                    <ListGroup>
                                        <ListGroupItem>
                                            <Button color="link" tag={Link} to="/settings/">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </Button>
                                            <b><FormattedMessage id="SettingsPage.about" /></b>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FormattedMessage id="SettingsPage.about.text" />

                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <b><FormattedMessage id="SettingsPage.status" /></b>
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
                    <Button color="primary" tag={Link} to="/home/">
                        <FontAwesomeIcon icon={faChevronLeft} />{' '}
                        <FormattedMessage id="SettingsPage.back" />
                    </Button>
                    <Button onClick={restore}>
                        <FontAwesomeIcon icon={faTrashAlt} />{' '}
                        <FormattedMessage id="SettingsPage.default" />
                    </Button>
                </ModalFooter>
            </Modal>
        </MenuLayout >
    );
}

export default SettingsPage;
