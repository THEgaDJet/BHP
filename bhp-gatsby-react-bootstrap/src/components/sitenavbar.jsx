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
        <Container fluid style={{ height: '100%' }}>
                <Row className='justify-content-center'>
                    <Col xs={7} className='p-0'>
            {/* <Navbar fixed='top' id='site-navbar' className='site-navbar p-0' key='header'> */}
                
                        <Nav defaultActiveKey='home' activeKey={activeLink} id='site-navbar' className='site-navbar p-0'>
                            <Nav.Link className='pl-0' eventKey='home' href='/'>
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
            {/* </Navbar> */}
            </Col>
                    </Row>
                </Container>
        </>
    )
}

export default SiteNavBar
