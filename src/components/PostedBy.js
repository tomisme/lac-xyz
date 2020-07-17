import React from "react"

export default ({ categories, author, date, withBg }) => (
  <div className={withBg ? "posted-by" : "posted-by-bg"}>
    Posted in{" "}
    {categories.map(cat => console.log(cat) || (
      <a href={`${cat.path}`}>{cat.name}</a>
    ))}{" "}
    by {author.name} on {date} for the hell of it!
  </div>
)
