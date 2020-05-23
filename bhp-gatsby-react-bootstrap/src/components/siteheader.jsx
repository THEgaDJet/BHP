import React from "react"
import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap';
import SocialMedia from 'components/Common/SocialMedia/socialMedia';

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
                        <SocialMedia />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default SiteHeader
