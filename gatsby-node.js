/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const CategoryPageTemplate = path.resolve("./src/templates/CategoryPage.js")

  const { errors, data } = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            path
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            link
            description
            path
            wordpress_id
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.allWordpressPost.edges.forEach(post => {
    createPage({
      path: post.node.path,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id
      }
    })
  })

  data.allWordpressPage.edges.forEach(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: PageTemplate,
      context: {
        id: page.node.wordpress_id
      }
    })
  })

  data.allWordpressCategory.edges.forEach(category => {
    createPage({
      path: category.node.path,
      component: CategoryPageTemplate,
      context: {
        id: category.node.wordpress_id
      }
    })
  })
}
