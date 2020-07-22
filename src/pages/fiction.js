import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostedBy from "../components/PostedBy"

export const query = graphql`
  query {
    allWordpressCategory(filter: {wordpress_parent: {eq: 45}, count: {gt: 0}}) {
      edges {
        node {
          name
          description
          wordpress_parent
          count
          path
        }
      }
    }
  }
`

const FictionLayout = ({ data }) => (
  <Layout>
    <SEO title="Fiction" keywords={[]} />
    <h1>Fiction</h1>
    <ul class="post-list" style={{ listStyle: "none", margin: 0 }}>
      {data.allWordpressCategory.edges.map(category => (
        <Link
          to={category.node.path}
          style={{ display: "flex", color: "black", textDecoration: "none" }}
        >
          <li style={{
            padding: "20px",
            borderBottom: "1px solid #ccc",
            background: "aliceblue"
          }}>
            <h3
              dangerouslySetInnerHTML={{ __html: category.node.name }}
            />
            <h4 class="fiction-subheading">By Elisa</h4>
            <div dangerouslySetInnerHTML={{ __html: category.node.description }} />
          </li>
        </Link>
      ))}
    </ul>
  </Layout>
)

export default FictionLayout
