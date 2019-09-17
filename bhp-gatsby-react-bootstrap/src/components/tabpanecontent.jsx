import React from "react"
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

const TabPaneContent = ({ title, image }) => {
    return (
        <>
            <div className='pos-rel-0'>
                <div className='box-background'></div>
                <Container style={{ paddingTop: '50px', paddingBottom: '50px' }} >
                    <Row>
                        <Col className='d-flex align-items-end'>
                            <h1 className='tab-title'>{title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='tab-text text-light-background'>
                            <p>Complete garden transformations, stripping the garden bare to start again, landscaping your garden using materials you choose. We work with you to achieve a garden you will proud to show off to your friends and family</p>
                            <p><b>Title in Bold to break up text</b>
                            <br/>
                            We aim to be as cost effective as required, we try to use the finest materials for your project so the quality shines through upon completion. We operate a small team of landscapers who concentrate.
                            <br/>
                            We have said it before, we set very high standards for ourselves and expect nothing but the best. We make sure the projects we undertake are delivered on time and within budget. We are a slave to the weather but other than that, your project becomes our priority best. We make sure the projects we undertake are delivered on time and within budget. We are a slave to the weather but other than that, your project becomes our priority. Cont </p>
                        </Col>
                        <Col>
                            <img src={image} className='image-bottom' alt={title + '_image'}></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TabPaneContent
