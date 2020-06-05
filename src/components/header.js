import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//styles import
import "./styles.css"

//fa import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

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
      <h2>Web & Graphics Design</h2>
      <p>
        Hi! I design and develop functional and beautiful webpages, and also do
        some graphic designs.
      </p>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
          <p>Portfolio</p>
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
          <p>Contact</p>
        </Link>
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
