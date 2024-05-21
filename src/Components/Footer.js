import React from 'react';
import { FaEdgeLegacy, FaFacebookF, FaGooglePlay, FaApple, FaGoogle, FaGithub } from "react-icons/fa";

function Footer(props) {
    return (
        <div>
            {/* <footer id="footer-Section">
                <div className="footer-top-layout">
                    <div className="container">
                        <div className="row">
                            <div className="OurBlog">
                                <h4>Our Blog</h4>
                                <p>BCM wins mandate for Avendus Wealth Management portal revamp</p>
                                <div className="post-blog-date">20th Oct 2016</div>
                            </div>
                            <div className=" col-lg-8 col-lg-offset-2">
                                <div className="col-sm-4">
                                    <div className="footer-col-item">
                                        <h4>Go Travel Cloud</h4>
                                        <address>
                                            501,507 your company address<br/>
                                                400015 Maharashtra, UK
                                        </address>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-col-item">
                                        <h4>Reach Us</h4>
                                        <div className="item-contact"> <a href="tel:630-885-9200"><span className="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span className="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span className="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-col-item">
                                        <h4>Sign up for Newsletter</h4>
                                        <form className="signUpNewsletter" action="" method="get">
                                            <input name="" className="gt-email form-control" placeholder="You@youremail.com" type="text"/>
                                            <input name="" className="btn-go" value="Go" type="button"/>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-layout">
                    <div className="socialMedia-footer"> <a href="#"><FaFacebookF /></a> <a href="#"><FaGooglePlay /></a> <a href="#"><FaGithub /></a> <a href="#"><FaEdgeLegacy /></a> <a href="#"><FaGoogle /></a> <a href="#"><FaApple /></a> </div>
                        <div className="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div>
                    </div>
            </footer> */}

            <footer className="section footer-classic context-dark bg-image">
                <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4">
                                <img className="brand-logo-light" src={require('../assets/Image1.png')} alt="" width="200" height="160"></img>
                                <p>OXYGENE Côte d'Ivoire met à la disposition de ses clients tout son savoir-faire dans l’utilisation des nouvelles technologies, au service de l’information et de la communication.</p>
                                {/* <!-- Rights--> */}
                                <p className="rights"><span>©  </span><span className="copyright-year">2020</span><span> </span><span>Company</span><span> - </span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5 className="pt-4">Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, New York, USA</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">infooxygeneci@gmail.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a href="tel:#">07 57 083 007</a> <span>or</span> <a href="tel:#">07 78 003 317</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5 className="pt-4">Links</h5>
                            <ul className="nav-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>Instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>Twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>Youtube</span></a></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;