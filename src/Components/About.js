import React from 'react';
import Navbars from './Navbars';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineCheck } from "react-icons/ai";
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';

function About(props) {
    return (
        <div className='About'>
            <Navbars page="a_propos" />
            <section className="container my-5 pt-5">
                <div className="row align-items-center">

                    {/* <!-- Image (optionnel) --> */}
                    <div className="col-md-6 mb-3 mb-md-0">
                        {/* <img src="path_to_your_image.jpg" className="img-fluid rounded-circle" alt="Votre image ou logo" /> */}
                        <Carousel controls={false} pause={false}>
                            <Carousel.Item data-bs-interval="5">
                                <img
                                    className="image d-block"
                                    src={require('../assets/Image1.png')}
                                    style={{ height: 500, width: 600 }}
                                />
                            </Carousel.Item>
                            <Carousel.Item data-bs-interval="5">
                                <img
                                    className="image d-block"
                                    src={require('../assets/File_d_attente.jpg')}
                                    style={{ height: 500, width: 600 }}
                                />
                            </Carousel.Item>
                            <Carousel.Item data-bs-interval="5">
                                <img
                                    className="image d-block"
                                    src={require('../assets/Development.jpg')}
                                    style={{ height: 500, width: 600 }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    {/* <!-- Texte de la section À propos --> */}
                    <div className="col-md-6">
                        <h2 className="mb-3">À propos de nous</h2>
                        <p className="lead">
                            Developpeur et Intégrateur de solutions informatiques
                        </p>
                        <p>
                            OXYGENE Côte d'Ivoire met à la disposition de ses clients tout son savoir-faire dans l’utilisation des nouvelles technologies, au service de l’information et de la communication.
                        </p>
                        <p>
                            Avec l’émergence des nouvelles technologies de l’information et de la communication, et conscient du fait que les entreprises, institutions, collectivités,… sont amenées à améliorer leur méthode de travail en vue d’obtenir des résultats optimaux, OXYGENE Côte d'Ivoire s’est engagée à mettre en place un système d’informations qui viendra dans un premier temps traduire électroniquement les différentes procédures de travail au sein de votre organisation, puis d'accroître votre rendement.
                        </p>
                        <p>
                            Afin d'assumer en toute sérénité les missions qu'elle s'est assignée, OXYGENE Côte d'Ivoire spécialisée dans les domaines suivants :
                        </p>
                        <Row>
                            <Col sm={3}>
                                <p><AiOutlineCheck style={{ fontSize: '20px' }} /> Affichage dynamique</p>
                            </Col>
                            <Col sm={3}>
                                <p><AiOutlineCheck style={{ fontSize: '20px' }} /> Developpement d'application</p>
                            </Col>
                            <Col sm={3}>
                                <p><AiOutlineCheck style={{ fontSize: '20px' }} /> Customer feedback</p>
                            </Col>
                            <Col sm={3}>
                                <p><AiOutlineCheck style={{ fontSize: '20px' }} /> Gestion de file d'attente</p>
                            </Col>
                        </Row>
                        {/* <a href="#" className="btn btn-primary mt-3" >En savoir plus</a> */}
                        <Button variant="outline-primary mt-3" >En savoir plus</Button>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;