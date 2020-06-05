import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//styles import
import "./styles.css"
//logo import
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <h1>{data.site.siteMetadata.author}</h1>
      <p>
        Hi! I design and develop functional and beautiful webpages, and also do
        some graphic designs.
      </p>
      <nav>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
