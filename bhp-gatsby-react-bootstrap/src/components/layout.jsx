/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import SiteHeader from 'components/siteheader';
import SiteNavBar from 'components/sitenavbar';
import SiteFooter from 'components/footer';
import QuoteForm from 'components/quoteform';

const Layout = ({ children, pageInfo, activeLink, hasQuoteButton }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <SiteHeader />
      <SiteNavBar activeLink={activeLink} />
      <div style={{ position: 'relative', top: '128px' }}>
        <QuoteForm hasCollapse={hasQuoteButton} />
        {children}
        <SiteFooter />
      </div>
      </>
    )}
  />
)

export default Layout
