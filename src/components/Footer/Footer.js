import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    return (
        <>
            <section className="footer bg-warning py-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src="images/logo-emory.png" className="footer-logo" alt="" />
                            <p className='mt-4'>
                            Emory is a modern maternity center that combines the best of obstetrics and midwifery care to deliver an evidence-based and personalized pregnancy experience.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h3 className="mb-4">CONTACT US</h3>
                            <div>
                            HELLO@OULAHEALTH.COM <br />
                            109 MONTAGUE STREET, BROOKLYN NY <br />
                            PHONE: (718) 400-8339 <br />
                            FAX: (718) 576-3434
                            </div>
                        </Col>
                        <Col md={4}>
                        <h3 className="mb-4">SOCIAL LINKS</h3>
                        <ul className='social-links '>
                            <li> <FaFacebookF /> </li>
                            <li> <FaTwitter /> </li>
                            <li> <FaLinkedinIn /> </li>
                            <li> <FaGithub /> </li>
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Footer;