import React from 'react';
import video_borne from '../assets/video_borne.mp4';
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';

function Main(props) {
    const [key, setKey] = useState('home');
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={video_borne} autoPlay loop muted height={400} width={500} />
            {/* <div className="content">
                <h1>Fonds de Prévoyance Militaire</h1>
                <p>C'est l'effort de tous pour le bien-être de chacun.</p>
            </div> */}
            <div className="container pt-4">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form">
                            <i className="fa fa-search"><FaSearch /></i>
                            <input type="text" className="form-control form-input" placeholder="Search anything..."/>
                            <span className="left-pan"><FaMicrophone /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='onglet pt-4'>
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mx-5 mb-3"
                    color='red'
                 >
                    <Tab className='tab' eventKey="affichage_dynamique" title="Affichage dynamique">
                    <p>
                            L’affichage dynamique est un outil de communication qui permet de diffuser des contenus multimédias,
                            à distance et en temps réel, sur un réseau de supports d’affichage numérique placés dans des lieux publics.
                    </p>
                </Tab>
                <Tab className='tab' eventKey="customer_feedback" title="Customer feedback">
                    <p>
                            CUSTOMER FEEDBACK est un module interactif qui permet de collecter le taux de satisfaction client.
                            L’application mobile et le serveur fonctionnent en mode connecté ou en mode déconnecté.
                            Elles stockent les données localement et, dès que le terminal se connecter au réseau,
                            une synchronisation automatique permet de synchroniser les données avec la base de données centralisée.
                   </p>
                </Tab>
                <Tab className='tab' eventKey="gestion_file_d'attente" title="Gestion de file d'attente">
                        <p>Diminuez les temps d’attente des clients,
                            méliorez l’efficacité de vos services et augmentez vos revenus grâce à notre solution de gestion de file d’attente .</p>
                </Tab>
                <Tab className='tab' eventKey="developpement" title="Developpement">
                        <p>
                            Développer votre activité et visibilité sur Internet par la création ou la refonte de votre site web.
                            Optimiser sa visibilité sur les périphériques mobiles.
                            Protéger votre investissement pour maîtriser ses coûts, rester propriétaire et autonome de vos données
                        </p>
                </Tab>
                </Tabs>
            </div>
            <div className="Mycarousel" >
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../assets/Development.jpg')}
                            style={{ height: '600px' }}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../assets/File_d_attente.jpg')}
                            style={{ height: '600px' }}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../assets/Image1.png')}
                            style={{ height: '600px' }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Main;