import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Banner from "../components/banner"

const Article = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.articleBg.childImageSharp.fluid}>
        <Banner>
          <h1>Articles</h1>
        </Banner>
      </Hero>
      <div>This is a list of articles!</div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query {
    articleBg: file(relativePath: { eq: "collins_gate.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
