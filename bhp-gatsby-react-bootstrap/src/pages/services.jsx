import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import TabSection from "components/tabsection";
import { Container } from "react-bootstrap";
import SliderRow from "../components/Services/SliderRow/sliderRow";
import DescriptionRow from "../components/Services/DescriptionRow/descriptionRow";
import CaseStudyRow from "../components/Services/CaseStudyRow/caseStudyRow";
import ThreeDDrawingRow from "../components/Services/3DDrawingsRow/3dDrawingRow";

const ServicesPage = () => (
  <>
  <Layout pageInfo={{ pageName: 'services'}} activeLink='services'>
    <SEO title="Services" />
    <Container fluid className="px-0">
      <SliderRow />
      <DescriptionRow />
      <CaseStudyRow />
      <ThreeDDrawingRow />  
    </Container>
  </Layout>
  </>
)

export default ServicesPage