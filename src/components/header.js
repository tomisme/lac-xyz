import he from "he"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg"

const menus = [
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Recipes",
    slug: "recipes",
  },
  {
    name: "About Us",
    slug: "about-us",
  },
]

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
      }
    `}
    render={data => (
      <header
        style={{
          marginTop: `1rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.8rem `,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={logo} style={{height: `5rem`}}/>
          </Link>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.6rem 1.8rem `,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            background: `#336e84ff`,
          }}
        >
          <div style={{}}>
            <ul
              style={{
                listStyle: `none`,
                display: `flex`,
                margin: 0,
                justifyContent: `space-around`,
              }}
            >
              {menus.map(item => (
                <li
                  key={item.slug}
                  style={{
                    margin: `0 0.1rem`,
                    padding: `0 1rem`,
                  }}
                >
                  <Link
                    to={`/${item.slug}`}
                    style={{
                      fontSize: `1.2rem`,
                      color: `white`,
                      textDecoration: `none`,
                      fontFamily: `sans-serif`,
                      whiteSpace: `nowrap`,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
