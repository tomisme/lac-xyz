import he from "he"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import header from "../images/header.svg"

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
    name: "Fiction",
    slug: "fiction",
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
            padding: `1rem 2rem `,
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
            <img src={header} style={{ height: `5rem` }} />
          </Link>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.6rem 1.8rem 0.6rem 1rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            background: `#336e84ff`,
          }}
        >
          <ul>
            {menus.map(item => (
              <li key={item.slug}>
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
          <div
            style={{ lineHeight: 0 }}
            dangerouslySetInnerHTML={{
              __html: `
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="YFEU5DAU2DNZC" />
              <input type="hidden" name="currency_code" value="AUD" />
              <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
              </form>
          `,
            }}
          ></div>
        </div>
      </header>
    )}
  />
)

export default Header
