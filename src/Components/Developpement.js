import React from 'react';
import Navbars from './Navbars';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";



function Developpement(props) {
    return (
        <div>
            <Navbars />
            <Row className="pt-5 m-5">
                <Col sm={5}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/Development.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/development_1.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('../assets/developpment_2.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={5}>
                    <h1 className="font-weight-light">
                        NOUS DÉVELOPPONS VOS APPLICATIONS À VOTRE MESURE</h1>
                    <p className="mt-4">
                        Chez OXYGENE CI, Ingénieurs et chefs de projets mettent en avant leurs compétences afin de définir au mieux l'étendue du projet qui leur est confié.
                        Nous effectuons des phases d’analyses durant lesquelles on détermine les besoins et contraintes de vos environnements afin de vous proposer les solutions les plus adaptées et compatibles.
                    </p>
                    <p>
                        - Etude des besoins: Cette phase consiste en une série de séances (selon la complexité du projet) permettant de comprendre les besoins et lacunes des systèmes existants, ce que vous voulez implémenter et comment ? Les séances d’études sont conduites avec des gents maitrisant les exigences métier.<br/>
                        - Modélisation et Développement: Une fois les différents besoins déterminés, revues et approuvés par nos clients, nous passons à la modélisation technique de la solution et l’implémentation de cette dernière, durant ces phases, les clients peuvent être sollicités surtout pour les aspects interface et affichage.<br/>
                        - Tests et corrections: Un déploiement initial est fait chez nos clients leur permettant d’effectuer les tests nécessaires et commenter la solution. Suite à ces commentaires, nous adaptons et corrigeons le système pour inclure les modifications demandées.<br/>
                        - Déploiement et maintenance: Nous procédons au déploiement de nos solutions, configuration et mise en route et nous assurons également un support et maintenance de ces dernières..


                    </p>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Developpement;