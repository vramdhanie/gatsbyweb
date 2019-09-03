import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import styled from 'styled-components'
import Title from '../components/title'

const About = ({ data, className }) => {
    return (
        <Layout>
            <SEO title="About" />
            <Hero img={data.aboutBg.childImageSharp.fluid}>
                <Banner>
                    <h1>About</h1>
                </Banner>
            </Hero>
            <div className={className}>
                <section>
                    <Title title="What you" subtitle="get" />
                    <p>
                        This is a collection of tutorials and articles about programming and software development.

                    </p>
                </section>
                <section>
                    <Title title="Tentative" subtitle="roadmap" />
                    <p>
                        Tentatively, this is the plan. Write some articles/tutorials on these topics:
                    <ul>
                            <li>Gatsby - getting started and hosting on Firebase</li>
                            <li>Gatsby - building from scratch (same technologies used for this site)</li>
                            <li>Machine Learning - a series of articles on some algorithms</li>
                        </ul>

                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default styled(About)`
  padding: 1rem;

  p {}
`

export const query = graphql`
  query {
    aboutBg: file(relativePath: { eq: "gate_shrine.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`