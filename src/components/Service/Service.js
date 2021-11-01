import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
        <>
            <Col lg={4} className='single-service'>
                <div className="">
                    <img src={img} className="img-fluid" alt="" />
                    <h2 className='my-3'> {name} </h2>
                    <p> {description.slice(0,150)} </p>                    
                    <Link to={`/service/${id}`}><button className="btn btn-primary my-3">Book This Service</button></Link>
                </div>

            </Col>
        </>
    );
};

export default Service;