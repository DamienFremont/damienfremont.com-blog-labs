import React, { useEffect } from 'react';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import MenuLayout from '../layouts/MenuLayout';
import { FormattedMessage } from 'react-intl';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ExitPage = (props) => {

    const exit = () => {
        window.top.close();
        window.close();
    };

    useEffect(() => {
        exit();
        return () => { };
    });

    return (
        <MenuLayout>
            <div className="h-100 d-flex justify-content-center align-items-center">
                <Card>
                    <CardBody>
                        <CardText>
                            <FormattedMessage id="ExitPage.text" />
                        </CardText>
                        <Button color="primary" size="lg" tag={Link} to="/">
                            <FontAwesomeIcon icon={faSignInAlt} />{' '}
                            <FormattedMessage id="ExitPage.reconnect" />
                        </Button>{' '}
                    </CardBody>
                </Card>
            </div>
        </MenuLayout>
    );
}

export default ExitPage;
