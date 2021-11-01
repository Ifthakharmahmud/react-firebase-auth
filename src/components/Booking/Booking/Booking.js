import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(
            () => {
                fetch('/services.json')
                .then(res => res.json())
                .then(data => setServiceDetails(data))
            }
        ,[]);

        useEffect(
            () =>{
              const foundServices =   serviceDetails.find(service => service.id == serviceId)
              setSingleService(foundServices);
              console.log(singleService)
            },
        
        [serviceDetails])
    return (
        <>
            
            <section className="single-service">
                <Container> 
                    <Row>
                        <Col className="text-center">
                            <h2 className="my-5"> {singleService?.name} </h2>
                            <img src={singleService?.img} className="full-image" alt="" />

                            <p className="my-3"> {singleService?.description} </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Booking;