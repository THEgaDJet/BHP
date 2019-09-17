import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import Layout from "components/layout";
import SEO from "components/seo";
import QuoteForm from 'components/quoteform';

const showForm = () => {

}

const TestPage = ( ) => {
  return (
  <Layout>
    <SEO title="Test Page" />
    {/* <QuoteForm /> */}
  </Layout>
  )
}

export default TestPage