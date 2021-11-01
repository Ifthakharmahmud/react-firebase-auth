import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner">
                
                <Container>
                    <Row> 
                        <Col> 
                            <h1>
                                Delivering New <br /> <span className="text-success"> Possibilities</span>
                            </h1>
                            <p>
                            Welcome to Emory Maternity Center 
                                Empowering Families, Nurturing Babies.
                            </p>
                        </Col>
                    </Row>
                </Container>
                
                        
            </section>
            
        </>
    );
};

export default Banner;