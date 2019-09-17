import React from "react"
import { 
    Row,
    Col,
    Container,
    Dropdown,
    Button,
    ButtonGroup,
} from "react-bootstrap";

const TopSection = () => (
    <>
        <div className='background-grey w-100 pos-abs-0'>
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
                </Row>
            </Container>
        </div>
    </>
)

export default TopSection
