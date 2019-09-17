import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import TabSection from "components/tabsection"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: 'about'}} activeLink='about'>
    <SEO title="About" />
    <div style={{ height: '200px', width: '100%', backgroundColor: 'grey' }}></div>
    <TabSection />
  </Layout>
)

export default AboutPage