import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Nursing.css';

const Nursing = () => {
    return (
        <>
        <section className="nursing my-5">
            <Container>
                <h2 className='my-5 text-center'>Empowering Families, Nurturing Babies</h2>
                <Row>
                    <Col lg={6}>
                        <img className='nursing-img' src="images/Chloe_Birth.jpg" alt="" />
                    </Col>
                    <Col lg={6}>
                        <p>
                        Pacifica Family Maternity Center (PFMC) is a safe place for low-risk healthy people to receive prenatal, labor/birth, and postpartum midwifery care and is a great alternative to hospital care, especially during the COVID-19 pandemic.  <br /> <br />

                        PFMC is a CABC accredited birth center, which means we abide by the highest safety standards and use evidence-based protocols appropriate for community birth. During this pandemic, we are making every effort to mitigate the spread of COVID-19 and have adopted additional prevention measures to ensure everyone's health and safety. <br /> <br />

                        We are currently accepting new clients. To find out more information about our midwifery care and the birth center, please sign up for our virtual tour and Q&A here.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
            
        </>
    );
};

export default Nursing;