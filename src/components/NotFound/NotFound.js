import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <section className='error'>
            <img className="notFound" src="images/404.jpg" alt="" />

            <Link to='/'> Home Page </Link> 
            </section>
        </>
    );
};

export default NotFound;