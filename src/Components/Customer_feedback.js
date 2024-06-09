import React from 'react';
import Navbars from './Navbars';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";

function Customer_feedback(props) {
    return (
        <div>
            <Navbars />
            <Row className="pt-5 m-5">
                <Col sm={5}>
                    <h1 className="font-weight-light">ENQUETE DE SATISFACTION</h1>
                    <p className="mt-4">L'enquête de satisfaction est un module interactif permettant de collecter le taux de satisfaction client.<br />

                        AVANTAGES<br />
                        - Il peut aider à améliorer un produit ou service<br />
                        - Il offre la meilleure façon de mesurer la satisfaction des clients<br />
                        - Il fournit un aperçu des services pour créer une meilleure expérience avec les clients<br />
                        - Il peut aider à améliorer la fidélisation des clients<br />
                        - Il fournit des données tangibles qui peuvent être utilisées pour prendre de meilleures décisions d'affaires<br />
                        - Recueillir des commentaires des clients pour améliorer votre entreprise, produit, service et expérience</p>
                </Col>
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
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/customer_1.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/customer.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Customer_feedback;