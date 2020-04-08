import React from 'react';
import GameLayout from '../layouts/GameLayout';
import GameMap from '../components/GameMap';
import { Container, Row, Col } from 'reactstrap';
import GameSidebar from '../components/GameSidebar';

const GamePage = (props) => {

    return (
        <GameLayout>
            <Container fluid={true} className="bg-light p-0 w-100 vh-100 min-vw-100">
                <Row noGutters={true} className="w-100 vh-100" >
                    <Col xs="10" className="w-100">
                        <GameMap />
                    </Col>
                    <Col xs="2">
                        <GameSidebar className="w-100 vh-100" />
                    </Col>
                </Row>
            </Container>
        </GameLayout>
    );
}

export default GamePage;
