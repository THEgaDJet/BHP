import React from "react"
import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap';
import { IconContext } from "react-icons";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

const SiteHeader = () => {
    return (
        <>
            <Navbar fixed='top' id='site-header' className='site-header' key='header'>
                <Container>
                    <Nav>
                        *
                        BRP | GARDEN SERVICES
                    </Nav>
                    <Nav className='ml-auto'>
                        <Navbar.Text className='mr-5'>
                            +44 7394729479
                        </Navbar.Text>
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
                </Container>
            </Navbar>
        </>
    )
}

export default SiteHeader
