import React from "react"
import {
    Nav,
    Container,
    Tab,
} from 'react-bootstrap';
import TabPaneContent from 'components/tabpanecontent';

import ImageBottom from 'images/showcase/before.png';

const TabSection = () => {
    return (
        <>
        <div className='tabscontainer'>
            <Tab.Container defaultActiveKey="project">
            <Container className='pos-rel-0 padding-0'>
                <Nav variant='tabs' className="justify-content-end align-items-end">
                    <Nav.Item>
                        <Nav.Link eventKey='project'>The Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='process'>The Process</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='features'>The Features</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='result'>The Result</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Tab.Content>
                <Tab.Pane eventKey='process'>
                    <TabPaneContent title='The Process' image={ImageBottom} />
                </Tab.Pane>
                <Tab.Pane eventKey='project'>
                    <TabPaneContent title='The Project' image={ImageBottom} />
                </Tab.Pane>
                <Tab.Pane eventKey='features'>
                    <TabPaneContent title='The Features' image={ImageBottom} />                    
                </Tab.Pane>
                <Tab.Pane eventKey='result'>
                    <TabPaneContent title='The Result' image={ImageBottom} />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
            </div>
        </>
    )
}

export default TabSection
