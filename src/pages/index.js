import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Banner from "../components/banner"
import About from "../components/home/about"
import Featured from "../components/home/featured"
import Projects from '../components/home/projects'
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero home="true" img={data.homeBg.childImageSharp.fluid}>
      <Banner title="Collective Action" info="United Vision">
        <AniLink fade to="/articles" className="btn-white">
          explore articles
        </AniLink>
      </Banner>
    </Hero>
    <About />
    <Featured articles={data.featured.edges} />
    <Projects />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    homeBg: file(relativePath: { eq: "bg3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured: allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "D MMMM YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
