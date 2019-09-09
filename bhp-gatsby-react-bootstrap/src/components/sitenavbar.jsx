import React from "react"
import {
    Navbar,
    Nav,
    Container,
    Button,
} from 'react-bootstrap';

const SiteNavBar = ({ siteTitle }) => {
    return (
        <>
            <Navbar fixed='top' id='site-navbar-overlay' className='site-navbar-overlay' key='header' style={{ padding: 0 }}>
                <Container style={{ height: '100%' }}>
                    <div className='ml-auto' style={{ position: 'relative' }}>
                        <div className='btn-quote text--uppercase btn'>
                            Book a free quote
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Navbar fixed='top' id='site-navbar' className='site-navbar' key='header' style={{ padding: 0 }}>
                <Container style={{ height: '100%' }}>
                    <Nav>
                        <Nav.Link className='active'>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            About
                        </Nav.Link>
                        <Nav.Link>
                            Service
                        </Nav.Link>
                        <Nav.Link>
                            Showcase
                        </Nav.Link>
                        <Nav.Link>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default SiteNavBar
