import he from "he"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { FacadePostList } from "../components/FacadePostList.js"

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`

const PageTemplate = ({ data }) => {
  const title = he.decode(data.wordpressPage.title)
  return (
    <Layout>
      <SEO title={title} description={data.wordpressPage.excerpt} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      {title === "Fiction" ? <FacadePostList /> : null}
    </Layout>
  )
}
export default PageTemplate
