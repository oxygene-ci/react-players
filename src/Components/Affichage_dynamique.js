import React from 'react';
import Navbars from './Navbars';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';

function Affichage_dynamique(props) {
    return (
        <div>
            <Navbars />
            <Row className='pt-5 m-5'>
                <Col sm={6}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/aff-dyna.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/Image_12.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D_1.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D_2.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D_3.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D_4.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/A_D_8.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={5}>
                    <h1 className="font-weight-light">AFFICHAGE DYNAMIQUE</h1>
                    <p className="mt-4">L’affichage dynamique est un outil de communication qui permet de diffuser des contenus multimédias, à distance et en temps réel, sur un réseau de supports d’affichage numérique placés dans des lieux publics.<br/>

                        8 bonnes raisons de l'utiliser<br/>
                        - Jouer les contenus multimédias 7/7 et 24/24.<br />
                        - Répercuter en temps réel une information précise où et quand vous le voulez.<br />
                        - Souplesse et réactivité.<br />
                        - Simplicité de mise en œuvre.<br />
                        - Valoriser et promouvoir efficacement vos produits et/ou services.<br />
                        - Animer un hall d’accueil et exploiter les moments d’attentes.<br />
                        - Communiquer sur des nouveautés.<br />
                        - Possibilité d’une diffusion locale ou à distance.</p>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Affichage_dynamique;