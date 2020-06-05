/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

//styles import
import "./reset.css"
import "./styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="parent">
      <Helmet>
        <meta name="description" content="testing react helmet" />
        <meta
          name="keywords"
          content="web designer, web developer, graphics designer, cambodia, phnom penh, graphics designer cambodia, graphics designer phnom penh, web design phnom penh, web design cambodia, web developer cambodia, web developer phnom penh"
        />
      </Helmet>
      {children}
      <div className="layout-left">
        {" "}
        <div className="margins">
          <Header></Header>
        </div>
        <div className="margins-bottom">
          <div>
            <footer>
              <div>
                <p>
                  You might be interested in
                  <section>© {new Date().getFullYear()}</section>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="layout-right">
        <div className="margins"></div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
