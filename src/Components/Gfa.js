import React from 'react';
import Navbars from './Navbars';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";


function Gfa(props) {
    return (
        <div>
            <Navbars />
            <Row className="pt-5 m-5">
                <Col sm={5}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/customer_feedback.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/customer_2.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={5}>
                    <h1 className="font-weight-light">Gestion de file d'attente</h1>
                    <p className="mt-4">
                        Gestion de file d'attente
                        La gestion de file d'attente est un outil qui vous permet de gérer une file d'attente et d'accroître la qualité de votre service client.
                        Cette solution de gestion des files d'attente est très facile à installer et à configurer.
                        C'est l'outil parfait pour gérer facilement la prise de rang et l'appel dans l'ordre.
                    </p>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Gfa;