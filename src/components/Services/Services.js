import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section className='services-area'>
            <h2 className='my-5 text-center'>Our Services</h2>
                <Container className='my-5'>                    
                    <Row>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                        </Row>
                </Container>
            </section>
        
    );
};

export default Services;