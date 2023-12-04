import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <Container >
                <Row className='justify-content-center align-items-center'>
                    <Col className='footerCol' xs={12} md={6} lg={4}>
                        <h3 className='headBanner'>LET'S STAY IN TOUCH</h3>
                        <p>Get updates on sale specials and more</p>
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control type='email' placeholder='Enter your email' />
                            </Form.Group>
                            <Button className='footerBtn' type='submit'>
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;
