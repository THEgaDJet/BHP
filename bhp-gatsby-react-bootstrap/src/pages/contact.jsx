import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import QuoteForm from "components/quoteform";

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact" }} activeLink="contact" hasQuoteButton={false}>
    <SEO title="Contact" />
  </Layout>
)

export default ContactPage
