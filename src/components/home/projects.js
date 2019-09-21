import React from 'react'
import styled from 'styled-components'
import Title from '../title'
import { graphql, useStaticQuery } from "gatsby"
import projects from '../../constants/projects'
import ProjectCard from '../projectCard'

const getImages = graphql`
query {
    bahai: file(relativePath: { eq: "bahai_screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    debbie: file(relativePath: { eq: "debbie_screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
}
`
const Projects = ({ className }) => {
    const data = useStaticQuery(getImages)

    return (
        <section className={className}>
            <Title title="Featured" subtitle="projects" />
            <div className="featured_projects">
                {projects.map((project, index) => (
                    <ProjectCard
                        img={data[project.screenshot].childImageSharp.fluid}
                        key={index}
                        {...project}
                    />
                ))}
            </div>
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
