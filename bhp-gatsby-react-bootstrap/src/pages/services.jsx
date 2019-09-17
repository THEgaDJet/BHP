import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import TabSection from "components/tabsection";

const ServicesPage = () => (
  <Layout pageInfo={{ pageName: 'services'}} activeLink='services'>
    <SEO title="Services" />
    <h1>SERVICES</h1>
    <TabSection />
  </Layout>
)

export default ServicesPage