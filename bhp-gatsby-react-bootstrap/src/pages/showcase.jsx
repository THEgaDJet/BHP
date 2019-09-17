import React from "react"
import { 
    Row,
    Col,
    Container,
} from "react-bootstrap";


import Layout from "components/layout";
import SEO from "components/seo";
import TopSection from "components/topsection";
import TabSection from "components/tabsection";

const IndexPage = () => (
    <>
        <Layout pageInfo={{ pageName: 'showcase'}} activeLink='showcase' >
            <SEO title="Showcase" keywords={[`gardening`]} />
            <Container fluid className='w-100'>
                <Row>
                    <Col sm={7} className='image-top ml-auto'>
                    </Col>
                </Row>
            </Container>
            <TopSection />
            <TabSection />
        </Layout>
    </>
)

export default IndexPage
