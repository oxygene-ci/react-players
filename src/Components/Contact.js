import React from 'react';
import Navbars from './Navbars';
import Footer from './Footer';

function Contact(props) {
    return (
        <div className='Contact'>
            <Navbars page="contact" />
            <section className="container my-5 pt-5 ">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2>Contactez-nous</h2>
                        <p className="lead">
                            Avez-vous des questions, des suggestions ou souhaitez-vous en savoir plus sur nos services ?<br /> N'hésitez pas à
                            nous contacter. Notre équipe est là pour vous aider et vous guider.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <form action="your_server_script.php" method="post">
                            <div className="mb-3">
                                <label for="contactName" className="form-label">Nom complet</label>
                                <input type="text" className="form-control" id="contactName" name="name" required />
                            </div>

                            <div className="mb-3">
                                <label for="contactEmail" className="form-label">Adresse e-mail</label>
                                <input type="email" className="form-control" id="contactEmail" name="email" required />
                            </div>

                            <div className="mb-3">
                                <label for="contactMessage" className="form-label">Votre message</label>
                                <textarea className="form-control" id="contactMessage" rows="4" name="message" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Envoyer le message</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;