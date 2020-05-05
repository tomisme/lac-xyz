import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostedBy from "../components/PostedBy"

export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Recipes"}}}}) {
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
    <SEO title="Home" keywords={["recipes", "instant pot"]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={post.node.path}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <div style={{}}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              <PostedBy {...post.node} />
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
