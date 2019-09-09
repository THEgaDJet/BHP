import React from "react"
import { 
    Row,
    Col,
    Container,
    Dropdown,
    Button,
    ButtonGroup,
    Navbar,
    Nav,
    Tabs,
    Tab,
} from "react-bootstrap";


import Layout from "../components/layout";
import SEO from "../components/seo";

import ImageBottom from '../images/showcase/before.png';

const IndexPage = () => (
    <>
        <Layout pageInfo={{ pageName: "showcase" }}>
            <SEO title="Showcase" keywords={[`gardening`]} />
        <Container fluid style={{ width: '100%' }}>
            <Row>
                <Col sm={7} className='image-top ml-auto'>
                </Col>
            </Row>
        </Container>
        <div className='background-grey' style={{ width: '100%', position: 'absolute', top: '0' }}>
            <Container className='page-row text-dark-background d-flex align-items-center'>
                <Row>
                    <Col sm={3}>
                        <Dropdown as={ButtonGroup} style={{ marginBottom: '60px' }} className='btn-block'>
                            <Button className='background-color-white text-color-grey combo-box-textarea'>John Lewis</Button>
                            <Dropdown.Toggle split className='background-color-blue' id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p>John Lewis</p>
                        <p>"</p>
                        <p>Ben and his team have cleared an area of our garden covered in brambles and have put patio down with fencing all around. They are extremely professional and would highly recommend them. </p>
                        <p>Lesley Williams</p>
                    </Col>
                    <Col >
                        <div style={{ height: '100%' }} className='d-flex justify-content-end align-items-end'>
                            <Nav>
                                <Navbar></Navbar>
                                <Nav.Item>The Project</Nav.Item>
                                <Nav.Item>The Process</Nav.Item>
                                <Nav.Item>The Features</Nav.Item>
                                <Nav.Item>The Result</Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row style={{ height: '50px' }}>
                <Col>
                    <h1>The Project</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Complete garden transformations, stripping the garden bare to start again, landscaping your garden using materials you choose. We work with you to achieve a garden you will proud to show off to your friends and family</p>
                    <h3>Title in Bold to break up text</h3>
                    <p>We aim to be as cost effective as required, we try to use the finest materials for your project so the quality shines through upon completion. We operate a small team of landscapers who concentrate We have said it before, we set very high standards for ourselves and expect nothing but the best. We make sure the projects we undertake are delivered on time and within budget. We are a slave to the weather but other than that, your project becomes our prioritye best. We make sure the projects we undertake are delivered on time and within budget. We are a slave to the weather but other than that, your project becomes our priority. Cont </p>
                </Col>
                <Col>
                    <img src={ImageBottom} className='image-bottom'></img>
                </Col>
            </Row>
        </Container>
        </Layout>
    </>
)

export default IndexPage
