import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './MenuLayout.css';
import logo from './MenuLayout-logo.png';
import MenuNavbar from '../components/MenuNavbar';
const MenuLayout = (props) => {

    return (
        <div className="mainlayout vh-100">
            <header>
                <MenuNavbar />
            </header>
            <main>
                <div className="vh-100 d-flex align-items-center">
                    <Container fluid={true} className="vh-100">
                        <Row>
                            <Col>
                                <div className="d-lg-none">
                                    <h1 className="display-5 text-center mt-5 mb-5">
                                        <FormattedMessage id="app.name" /><br />
                                        <img src={logo} width="60" height="60" className="d-inline-block mt-2" alt="" />{' '}
                                    </h1>
                                </div>
                                <div className="d-none d-lg-block">
                                    <h1 className="display-1 text-center mt-5 mb-5">
                                        <FormattedMessage id="app.name" />{' '}
                                        <img src={logo} width="80" height="80" className="d-inline-block align-center" alt="" />{' '}
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </div>
    );

}
export default MenuLayout;