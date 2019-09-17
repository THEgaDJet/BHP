import React from "react"
import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

import SEO from "components/seo";
import LayoutHome from "components/layouthome";

const HomePage = () => (
  <LayoutHome pageInfo={{ pageName: "home" }} activeLink="home">
    <SEO title="Home" />
  </LayoutHome>
)

export default HomePage
