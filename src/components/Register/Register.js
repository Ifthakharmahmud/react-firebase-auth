//iiuc.reaz21@gmail.com used for google firebase


import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {            
           history.push(redirect_uri);
        })
        
    }
    const {
        handleGoogleSignIn, 
        
        handleNameChange, 
        handleEmailChange,
        handlePasswordChange, 
        handleRegistration, 
        toggleLogin,
        error,
        success,
        isLogin
        } = useFirebase();
    return (
        <>
            <section className='login my-5'>
                <p className='text-center'> Already Registered?  <span onClick={toggleLogin} className='btn btn-info'> Login</span> </p>
                <Container> 
                 <Row className="my-3 text-danger"> {error} </Row>
                 <Row className="my-3 text-success"> {success} </Row>
                    <Row>
                        <Col lg={6}>
                        <h2 className='my-3'>{isLogin ? 'Login' : 'Register'} Now!</h2>
                        <Form onSubmit={handleRegistration}>

                            {!isLogin && <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" />
                            </Form.Group>}

                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="submit">                                
                                
                                <button className='btn btn-info' type="submit">{isLogin? 'Login' : "Register"}</button>
                            </Form.Group>
                        </Form>
                        </Col>
                        
                        <Col lg={6}>
                            <h2 className='my-3'>Social Login!</h2>
                            <button onClick={handleGoogleSignIn} className='btn btn-warning btn-lg'> <FaGoogle></FaGoogle>  Google Sign In </button> <br /> <br />
                            {/* <button onClick={handleGithubSignIn} className='btn btn-info btn-lg'> <FaGithub></FaGithub>  Google Sign In </button> */}
                        </Col>
                    </Row>

                    
                </Container>
            </section>
        </>
    );
};

export default Register;