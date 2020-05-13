import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export const FacadePostList = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "The Facade"}}}}) {
          edges {
            node {
              title
              slug
              path
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.allWordpressPost.edges.map(post => (
          <li key={post.node.slug}>
            <Link to={post.node.path}>
              {post.node.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  ></StaticQuery>
)
