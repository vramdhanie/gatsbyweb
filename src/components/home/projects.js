import React from 'react'
import styled from 'styled-components'
import Title from '../title'

const Projects = ({ className }) => {
    return (
        <section className={className}>
            <Title title="Featured" subtitle="projects" />
            <div className="featured_projects"></div>
        </section>
    )
}

export default styled(Projects)`
  padding: 2rem;

@media only screen and (min-width: 768px) {
  .featured_projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1em;
    grid-column-gap: 10px;
  }
}
`
