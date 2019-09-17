import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Collapse } from "react-bootstrap"

const QuoteForm = ({ hasCollapse = true }) => {
  const [open, setOpen] = useState(!hasCollapse)
  const displayStyle = hasCollapse ? "inline-block" : "none"

  return (
    <div className='form-quote'>
      <Container className='row-btn-quote'>
        <Row>
          <Col className='align-self-end text-right'>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="btn-quote"
              style={{ display: displayStyle }}
            >
              Book a free quote ^
            </Button>
          </Col>
        </Row>
      </Container>
 
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div style={{ backgroundColor: "#FF4199", color: "white", marginTop: '50px' }}>
            <Container>
              <Row>
                <Col>
                  <p>
                    To arrange for us to come by and give you a FREE quote,
                    please fill in the details below and we will get back to you
                    within 24 hours
                  </p>
                  <Form className="text-center">
                    <Form.Group>
                      <Form.Control
                        data-lpignore="true"
                        type="text"
                        placeholder="Name"
                        style={{
                          backgroundColor: "#FF4199",
                          color: "white",
                          borderStyle: "none none solid",
                          borderColor: "white",
                          borderRadius: 0,
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="tel" placeholder="Phone number" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="select" placeholder="Service required">
                        <option>Service required</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Button className="btn-form">SUBMIT</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

// render(<QuoteForm  />);

export default QuoteForm
