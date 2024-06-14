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
                        <h1 style={{ textTransform: 'uppercase', textShadow:'1px 1px 2px ligthgray'}}>Oxygene ci</h1>
                         <p style={{ fontSize: '30px' }}>Développeur et intégrateur de solutions</p>
                    </div>
                    <div>
                        <img src={require('../assets/dégradé_5.png')} style={{ width: '2000px', height: '1200px' }} />
                    </div>
                </div>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img src={require('../assets/developpement-web.jpg')} />
                        <div className="cover">
                            <div className="container">
                                <div className="header-content">
                                    <div className="line animated bounceInLeft"></div>
                                    <h2>Réimaginer l'expérience numérique avec</h2>
                                    <h1>Des solutions intelligentes</h1>
                                    <h4>Nous aidons les entrepreneurs, les start-ups et les entreprises à transformer leurs idées en produits.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/*  */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3 class="text-center">Zigzag Timeline Layout (and Cats)</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src={require('../assets/Image1.png')} style={{ height: '200px', width:'200px'}}/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Step One</h4>
                                            <h4 class="subheading">Subtitle</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src={require('../assets/Image1.png')} style={{ height: '200px', width: '200px' }} />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Step Two</h4>
                                            <h4 class="subheading">Subtitle</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src={require('../assets/Image1.png')} style={{ height: '200px', width: '200px' }} />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Step Three</h4>
                                            <h4 class="subheading">Subtitle</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src={require('../assets/Image1.png')} style={{ height: '200px', width: '200px' }} />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Step Three</h4>
                                            <h4 class="subheading">Subtitle</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src={require('../assets/Image1.png')} style={{ height: '200px', width: '200px' }} />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Bonus Step</h4>
                                            <h4 class="subheading">Subtitle</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div class="container__mag center">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/A_D_1.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/img___6.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/img___15.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/A_D_2.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/img___17.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                        <div class="col-md-2">
                            <div class="Image__mag"> <img src={require('../assets/img___20.jpeg')} className='img__0' /> <i class="fa fa-search fa-3x"><FaSearch /></i> </div>
                        </div>
                    </div>
                </div>
            </header>
                <br/>
        </div>
    );
}

export default Main;