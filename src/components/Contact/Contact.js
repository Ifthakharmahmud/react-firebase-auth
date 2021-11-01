import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <Container className='pb-5'>
                <Row>
                    <h2 className="text-center my-5">Contact Us!</h2>
                    <Col md={6} className="text-center">
                        <p>WE WOULD LOVE TO HEAR FROM YOU!</p>
                        <h2 className='my-4'>EMORY MATERNITY CENTER IS LOCATED AT:</h2>
                        <h5 className='my-4'>
                            3101 Telegraph Ave. <br />
                            Berkeley, CA 94705
                        </h5>

                        <h5 className='my-4'>email: midwives@pacificamaternity.com</h5>

                        <h5 className='my-4'> 
                            phone 1-510- 280-5543 <br />

                            fax *1-510-255-2058
                        </h5>

                        <p className='my-4'>
                        For a quicker response, please email us, as we're usually attending to clients during business hours. 


                        </p>
                    </Col>
                    <Col md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.0962572841722!2d-84.38708915461928!3d33.76951935405659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5047aa21660e3%3A0xd0c6582789cb72a2!2sEmory%20University%20Hospital%20Midtown!5e0!3m2!1sen!2sbd!4v1634528833683!5m2!1sen!2sbd" width="600" height="450" loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;