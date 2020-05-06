import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostedBy from "../components/PostedBy"

export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "The Facade"}}}}) {
      edges {
        node {
          path
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          categories {
            name,
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Fiction" keywords={["fiction"]} />
    <h1>Elisa's Fiction</h1>
    <h2>The Facade</h2>
    <p>A novel about...</p>
    <p>Here are the chapters I've posted so far:</p>
    <ul>
      {data.allWordpressPost.edges.map(post => (
        <li>
          <Link
            to={post.node.path}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
              <span
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
