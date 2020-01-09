import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import styled from "styled-components"
import Title from "../components/title"

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
          <Title title="Main" subtitle="interests" />
          <p>
            The list of things that I want to learn grows faster than the speed
            at which I can learn. The purpose of this site is to curate some of
            the areas that I am taking a deep dive into, especially those areas
            that fall outside of work.
          </p>
        </section>
        <section>
          <Title title="What you" subtitle="get" />
          <p>
            This is a collection of tutorials and articles about programming and
            software development primarily. However, I will be including some
            Machine Learning and Data Science concepts and may wander into some
            Mathematics at times.
          </p>
        </section>
        <section>
          <Title title="Tentative" subtitle="roadmap" />
          <p>
            Tentatively, this is the plan. Write some articles/tutorials on
            these topics:
            <ul>
              <li>Gatsby - getting started and hosting on Firebase</li>
              <li>
                Gatsby - building from scratch (same technologies used for this
                site)
              </li>
              <li>
                Machine Learning - a series of articles on some algorithms in
                this space
              </li>
              <li>
                Algorithms - the design and analysis of algorithms in general
              </li>
            </ul>
          </p>
        </section>
        <section>
          <Title title="The" subtitle="Timeline" />
          <p>
            From past experience I am very negligent of my own website and very
            rarely post new articles. Starting in 2020 I am aiming to post at
            least one new article or tutorial per month. Then I will see if I
            can increase that velocity.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default styled(About)`
  padding: 1rem;
  width: 90vw;
  max-width: 800px;
  margin: 0 auto;
  p {
  }
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
