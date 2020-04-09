import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MenuLayout } from '../layouts';
import { MainMenu, ServerStatus, WelcomeModal } from '../components';
import News from '../components/NewsFeed';
import { fakeAuth } from '../helper/security';

const HomePage = (props) => {

    const [isOpen, setIsOpen] = useState((localStorage.getItem('WelcomeModalHide') === 'false'));

    const toggle = () => setIsOpen(!isOpen);

    const isLoggedIn = () => fakeAuth.isAuthenticated;

    return (
        <MenuLayout>
            <Container>
                {isLoggedIn() ?
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
                        <News />
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

export default HomePage;
