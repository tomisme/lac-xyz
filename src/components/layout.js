import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./recipe-public-modern.css"
import "./styles.css"

const license = `
  <center>
  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png">
  </a><br>
  This page is licensed under a
  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
  Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
  </a></center>
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div>
            Thanks for visiting! 😃
          </div>
          <div dangerouslySetInnerHTML={{ __html: license }} />
          <div>
            That means it's free to read, share, adapt and reproduce for non-commercial purposes, as long as any reproductions are also released under the same license, and you give credit.
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
