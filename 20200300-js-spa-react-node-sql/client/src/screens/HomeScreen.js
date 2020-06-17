import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MenuLayout } from 'layouts';
import { MainMenu, ServerStatus, WelcomeModal, NewsFeed } from 'components';
import { isLogin } from 'helpers/auth';

const HomeScreen = (props) => {

    const [isOpen, setIsOpen] = useState((localStorage.getItem('WelcomeModalHide') === 'false'));

    const toggle = () => setIsOpen(!isOpen);

    return (
        <MenuLayout>
            <Container>
                {isLogin() ?
                    <Row>
                        <Col sm="12">
                            <div className="d-flex justify-content-center">
                                <MainMenu />
                            </div>
                        </Col>
                    </Row>
                    :
                    <span></span>
                }
                <Row className="mt-3" >
                    <Col xs="0" md="3">
                        {' '}
                    </Col>
                    <Col xs="12" md="6" className="mt-5">
                        <NewsFeed />
                    </Col>
                    <Col xs="12" md="3" className="mt-5">
                        <ServerStatus />
                    </Col>
                </Row>
            </Container>
            <WelcomeModal
                className="text-right"
                isOpen={isOpen}
                toggle={toggle} />
        </MenuLayout >
    );
}

export default HomeScreen;
