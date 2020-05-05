import he from "he"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostedBy from "../components/PostedBy"

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      categories {
        name
        slug
      }
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const post = data.wordpressPost;
  const title = he.decode(post.title)
  return (
    <Layout>
      <SEO
        title={title}
        description={data.wordpressPost.excerpt}
      />
      <h1>{title}</h1>
      <PostedBy {...post} withBg/>
      <hr></hr>
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  )
}

export default BlogPostTemplate
