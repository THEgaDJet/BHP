import React from "react"
import {
    Container,
    Row, 
    Col, 
    Nav,
    Button,
} from 'react-bootstrap';
import { IconContext } from "react-icons";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

const SiteFooter = ({ siteTitle }) => {
    return (
        <>
            <div className='footer-pink background-pink text-dark-background d-flex justify-content-center align-items-center'>
                <Container className=''>
                    <Row>
                        <Col>
                            <div className='text-center'>
                                <p>Click for one of our friendly team will come by and give a FREE quote <Button>Book a free quote</Button></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-grey background-grey text-dark-background d-flex justify-content-center align-items-center'>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={3}>
                            <h1>BRP Garden Services</h1> 
                            <p>Delivering the garden you desire at an affordable price, B.R.P Garden Services Brings out the best in your garden. We take pride in offering a top quality service at a competitive rate all over the South West.</p>
                        </Col>
                        <Col lg={3}>
                            <h1>Contact Details</h1> 
                            <p>Delivering the garden you desire at an affordable price, B.R.P Garden Services Brings out the best in your garden. We take pride in offering a top quality service at a competitive rate all over the South West. </p>
                        </Col>
                        <Col lg={3} className='d-flex justify-content-end'>
                            <Nav>
                                <IconContext.Provider value={{ color: "white", style: { verticalAlign: 'middle' } }}>
                                    <Nav.Link className='p-2'>
                                            <FaFacebookF />
                                    </Nav.Link>
                                    <Nav.Item className='p-2'>
                                            <FaTwitter />
                                    </Nav.Item>
                                    <Nav.Item className='p-2'>
                                        <FaInstagram />
                                    </Nav.Item>
                                </IconContext.Provider>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SiteFooter
