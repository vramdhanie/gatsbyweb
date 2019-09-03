import React from "react"
import Title from "../title"
import FeaturedCard from "../FeaturedCard"
import styled from 'styled-components'

const Featured = ({ articles, className }) => {
  return (
    <section className={className}>
      <Title title="featured" subtitle="articles" />
      <div className="featured_articles">
        {articles.map(({ node }, index) => (
          <FeaturedCard
            article={node.frontmatter}
            excerpt={node.excerpt}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

Featured.defaultProps = {
  articles: []
}

export default styled(Featured)`

  background: rgba(150, 150, 150, 0.2);
  padding: 2rem;

  @media only screen and (min-width: 768px) {
    .featured_articles {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 1em;
      grid-column-gap: 10px;
    }
  }

`
