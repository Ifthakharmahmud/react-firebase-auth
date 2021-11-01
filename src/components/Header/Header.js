import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {name,user, logOut} = useAuth();
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className='py-5'>
                    <Container>
                     <Navbar.Brand > <img className="logo" src="images/logo-emory.png" alt="logo" /> </Navbar.Brand> 
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">          
                    <Nav className="me-auto">                    
                        <Link to='/'> Home </Link>
                        <Link to='/about'> About </Link>
                        <Link to='/contact'> Contact </Link>
                        {
                            user?.email? 
                            <Button onClick={logOut} className='btn btn-warning mx-2'>Log Out</Button>:
                            <Link to='/register' className='btn btn-warning'> Register </Link>
                        }
                        
                    </Nav>
                    {/* Signed in as */}
                    
                    
                    <Navbar.Text>
                        {user?.email? 'Signed in as:':' '} <a href="#login"> {user?.displayName} </a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;