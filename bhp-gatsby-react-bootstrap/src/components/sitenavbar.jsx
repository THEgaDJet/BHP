import React, { useState } from "react"
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from 'react-bootstrap';

const SiteNavBar = ({ activeLink='home' }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Container style={{ height: '100%' }}>
                <Row>
                    <Col xs={7}>
            <Navbar fixed='top' id='site-navbar' className='site-navbar' key='header' style={{ padding: 0 }}>
                
                        <Nav defaultActiveKey='home' activeKey={activeLink}>
                            <Nav.Link eventKey='home' href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link eventKey='about' href='/about'>
                                About
                            </Nav.Link>
                            <Nav.Link eventKey='services' href='/services'>
                                Services
                            </Nav.Link>
                            <Nav.Link eventKey='showcase' href='/showcase'>
                                Showcase
                            </Nav.Link>
                            <Nav.Link eventKey='contact' href='/contact'>
                                Contact
                            </Nav.Link>
                        </Nav>
            </Navbar>
            </Col>
                    </Row>
                </Container>
        </>
    )
}

export default SiteNavBar
