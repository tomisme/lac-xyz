import React from "react"

const PostedBy = ({ categories, author, date, withBg }) => (
  <div className={withBg ? "posted-by" : "posted-by-bg"}>
    Posted in{" "}
    {categories.map(cat => (
      <a href={`/${cat.slug}`}>{cat.name}</a>
    ))}{" "}
    by {author.name} on {date}
  </div>
)

export default PostedBy
