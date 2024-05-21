import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbars({ page }) {
    const [Menu, set_Menu] = useState();
    useEffect(() => {
        set_Menu(page);
    }, [])
 
    /* const Menu='accueil';
    var Menu='accueil'; */

    const Survoler = (Menu) => {

        set_Menu(Menu);
    }

    const NoSurvoler = () => {
        set_Menu(page);
        //alert('NoSurvoler')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
            <Container fluid>
                <Navbar.Brand href="#" className="mx-5"><span style={{ color: 'blue' }}>OXYGENE</span> <span style={{ color: 'orange' }}>CI</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/"} active >
                            <span

                                className={Menu == 'accueil' ? "survol_activer" : " "}
                                onMouseEnter={() => Survoler("accueil")}
                                onMouseLeave={() => NoSurvoler()}
                            >
                                Accueil
                            </span>
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to={"/about"}
                            active
                        >
                            <span

                                className={Menu == 'a_propos' ? "survol_activer" : " "}
                                onMouseEnter={() => Survoler("a_propos")}
                                onMouseLeave={() => NoSurvoler()}
                            >
                                A propos de nous
                            </span>

                        </Nav.Link>
                        <NavDropdown title="Nos produits" active id="navbarScrollingDropdown">
                            <NavDropdown.Item
                                as={Link} to={"/affichage_dynamique"}
                            >
                                <span

                                    className={Menu == 'affichage_dynamique' ? "survol_activer" : " "}
                                    onMouseEnter={() => Survoler("affichage_dynamique")}
                                    onMouseLeave={() => NoSurvoler()}
                                >
                                    Affichage dynamique
                                </span>
                                
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link} to={"/customer_feedback"}
                            >
                                <span

                                    className={Menu == 'customer_feedback' ? "survol_activer" : " "}
                                    onMouseEnter={() => Survoler("customer_feedback")}
                                    onMouseLeave={() => NoSurvoler()}
                                >
                                    Customer feedback
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link} to={"/developpement"}
                            >
                                <span

                                    className={Menu == 'developpement' ? "survol_activer" : " "}
                                    onMouseEnter={() => Survoler("developpement")}
                                    onMouseLeave={() => NoSurvoler()}
                                >
                                    Developpement
                                </span>
                                
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item
                                as={Link} to={"/gfa"}
                            >
                                <span

                                    className={Menu == 'gfa' ? "survol_activer" : " "}
                                    onMouseEnter={() => Survoler("gfa")}
                                    onMouseLeave={() => NoSurvoler()}
                                >
                                    Gestion de file d'attente
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            as={Link} to={"/contact"}
                            active
                        >
                            <span

                                className={Menu == 'contact' ? "survol_activer" : " "}
                                onMouseEnter={() => Survoler("contact")}
                                onMouseLeave={() => NoSurvoler()}
                            >
                               Contact
                            </span>
                        </Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Recherche"
                            className="mx-4"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Recherche</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;