import React from 'react';
import video_borne from '../assets/video_borne.mp4';
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Main(props) {
    const [key, setKey] = useState('home');
    return (

        <div className='main'>
            <header>
                <div className='overlay'></div>
                <video src={video_borne} autoPlay loop muted height={400} width={500} />
                <div className="content">
                    <div className='navbar_1'>
                        <h1>Oxygene ci</h1>
                         <p style={{ fontSize: '30px' }}>Développeur et intégrateur de solutions</p>
                    </div>
                    <div>
                        <img src={require('../assets/dégradé_5.png')} style={{ width: '2000px', height: '1200px' }} />
                    </div>
                </div>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2019/11/18/02/41/autumn-leaves-4633854_960_720.jpg" alt="images not found" />
                        <div className="cover">
                            <div className="container">
                                <div className="header-content">
                                    <div className="line animated bounceInLeft"></div>
                                    <h2>Reimagine Digital Experience with</h2>
                                    <h1>Intelligent solutions</h1>
                                    <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                                <ol className="carousel-indicators tabs">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                        <figure>
                                            <img src={require('../assets/Image1.png')}
                                                style={{ height: '200px' }} className="img-fluid" alt="" />
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                        <figure>
                                            <img src={require('../assets/Image1.png')}
                                                style={{ height: '300px' }} className="img-fluid" alt="" />
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                        <figure>
                                            <img src={require('../assets/Image1.png')}
                                                style={{ height: '200px' }} className="img-fluid" alt="" />
                                        </figure>
                                    </li>
                                </ol>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <div id="carouselExampleIndicators" data-interval="false" className="carousel slide" data-ride="carousel">
                                    <h3>WHAT OUR CLIENTS SAY</h3>
                                    <h1>TESTIMONIALS</h1>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="quote-wrapper">
                                                <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                                <h3>peter lee</h3>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="quote-wrapper">
                                                <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                                <h3>peter lee</h3>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="quote-wrapper">
                                                <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                                <h3>peter lee</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <ol className="carousel-indicators indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                <div className="card d-flex position-relative flex-column">
                    <div className='imgContainer'>
                        <img src={require('../assets/Image_12.jpeg')} />
                    </div>
                    <div className="content">
                        <h2>AFFICHAGE DYNAMIQUE</h2>
                        <p>L’affichage dynamique est un outil de communication qui permet de diffuser des contenus multimédias, à distance et en temps réel, sur un réseau de supports d’affichage numérique placés dans des lieux publics.</p>
                    </div>
                </div>
                <div className="card d-flex position-relative flex-column">
                    <div className='imgContainer'>
                        <img src={require('../assets/developpement-web.jpg')} />
                    </div>
                    <div className="content">
                        <h2>APPLICATION WEB ET MOBILE</h2>
                        <p>Développer votre activité et visibilité sur Internet par la création ou la refonte de votre site web. Optimiser sa visibilité sur les périphériques mobiles. Protéger votre investissement pour maîtriser ses coûts, rester propriétaire et autonome de vos données.</p>
                    </div>
                </div>
                <div className="card d-flex position-relative flex-column">
                    <div className='imgContainer'>
                        <img src={require('../assets/Borne-ecran-file-dattente-guichet.jpg')} />
                    </div>
                    <div className="content">
                        <h2>GESTION DE FILE D'ATTENTE</h2>
                        <p>La gestion de file d'attente est un outil qui vous permet de gérer une file d'attente et d'accroître la qualité de votre service client. Cette solution de gestion des files d'attente est très facile à installer et à configurer. C'est l'outil parfait pour gérer facilement la prise de rang et l'appel dans l'ordre.</p>
                    </div>
                </div>
                <div className="card d-flex position-relative flex-column">
                    <div className='imgContainer'>
                        <img src={require('../assets/customer.jpg')} />
                    </div>
                    <div className="content">
                        <h2>CUSTOMER FEEDBACK</h2>
                        <p>Le customer feedback est un module interactif permettant de collecter le taux de satisfaction client.</p>
                    </div>
                </div>
            </div>

            <div className='onglet pt-4'>
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mx-5 mb-3"

                >
                    <Tab className='ad' eventKey="affichage_dynamique" title="Affichage dynamique">
                        <p>
                            L’affichage dynamique est un outil de communication qui permet de diffuser des contenus multimédias,
                            à distance et en temps réel, sur un réseau de supports d’affichage numérique placés dans des lieux publics.
                        </p>
                    </Tab>
                    <Tab className='cf' eventKey="customer_feedback" title="Customer feedback">
                        <p>
                            CUSTOMER FEEDBACK est un module interactif qui permet de collecter le taux de satisfaction client.
                            L’application mobile et le serveur fonctionnent en mode connecté ou en mode déconnecté.
                            Elles stockent les données localement et, dès que le terminal se connecter au réseau,
                            une synchronisation automatique permet de synchroniser les données avec la base de données centralisée.
                        </p>
                    </Tab>
                    <Tab className='gfa' eventKey="gestion_file_d'attente" title="Gestion de file d'attente">
                        <p>Diminuez les temps d’attente des clients,
                            méliorez l’efficacité de vos services et augmentez vos revenus grâce à notre solution de gestion de file d’attente .</p>
                    </Tab>
                    <Tab className='dev' eventKey="developpement" title="Developpement">
                        <p>
                            Développer votre activité et visibilité sur Internet par la création ou la refonte de votre site web.
                            Optimiser sa visibilité sur les périphériques mobiles.
                            Protéger votre investissement pour maîtriser ses coûts, rester propriétaire et autonome de vos données
                        </p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Main;