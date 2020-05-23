import React from "react"
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { IconContext } from "react-icons";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'
import SocialMedia from "./Common/SocialMedia/socialMedia";

// import BannerBackground from 'images/home/Image 491.png'

const SiteHeader = ({activeLink}) => {
    return (
        <div style={{ position: 'relative', top: 0 }}>
            <Container fluid className='home-banner'>
            <Row>
                    <Col>
                        <Nav>
                            <SocialMedia />
                        </Nav>
                    </Col>
                </Row>
                {/* <Row style={{ height: '80px'}}>
                    <Col>
                        <Navbar style={{ padding: 0, height: '100%' }}>
                            <Container style={{ height: '100%' }}>
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
                            </Container>
                        </Navbar>
                         <img src={BannerBackground} className='home-banner-background' alt='home banner'></img> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row> */}
                {/* <Row style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
                    <Col>
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
                </Row> */}
            </Container>

            {/* <Navbar fixed='top' id='site-header' className='site-header' key='header'>
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
            </Navbar> */}
        </div>
    )
}

export default SiteHeader
