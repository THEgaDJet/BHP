/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import HomeBanner from 'components/homebanner';
import SiteFooter from 'components/footer';
import QuoteForm from 'components/quoteform';

const HomeLayout = ({ children }) => {
  return (
    <>
      <div style={{ position: 'relative', top: 0 }}>
        <HomeBanner />
        <QuoteForm />
        {children}
        <SiteFooter />
      </div>
    </>
  )
}

export default HomeLayout
