import he from "he"
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import PostedBy from "../components/PostedBy"

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      id
      name
      path
      slug
      description
    }
    allWordpressPost(filter: {categories: {elemMatch: {wordpress_id: {eq: $id}}}}) {
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
            path
            name
            slug
            wordpress_id
          }
        }
      }
    }
  }
`

export default function({ data }) {
  const title = he.decode(data.wordpressCategory.name)
  return (
    <Layout>
      <SEO title={title} description={data.wordpressCategory.description} />
      <h1>{title}</h1>
      <div>{data.wordpressCategory.description}</div>
      <ul class="post-list" style={{ listStyle: "none" }}>
        {data.allWordpressPost.edges.map(post => (
          <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
            <Link
              to={post.node.path}
              style={{ display: "flex", color: "black", textDecoration: "none" }}
            >
              <div style={{}}>
                <h3
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
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
}
