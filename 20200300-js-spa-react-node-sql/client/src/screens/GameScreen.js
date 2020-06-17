import React from 'react';
import { GameLayout } from 'layouts';
import { Container, Row, Col } from 'reactstrap';
import { GameSidebar, GameMap } from 'components';

const GameScreen = (props) => {

    return (
        <GameLayout>
            <Container fluid={true} className="bg-light p-0 vh-100">
                <Row noGutters={true} className="vh-100" >
                    <Col xs="6" md="8" lg="10" className="">
                        <GameMap />
                    </Col>
                    <Col xs="6" md="4" lg="2" className="">
                        <GameSidebar className="vh-100 w-100" />
                    </Col>
                </Row>
            </Container>
        </GameLayout>
    );
}

export default GameScreen;
