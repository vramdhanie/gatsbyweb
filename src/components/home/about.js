import React from "react"
import Title from "../title"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const getImage = graphql`
  query aboutImage {
    fluid: file(relativePath: { eq: "chile_temple.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)

  return (
    <Wrapper>
      <Title title="about" subtitle="us" />
      <div className="about-center">
        <article className="about-img">
          <Img fluid={fluid} alt="Chilean Temple" />
        </article>
        <article className="about-info">
          <h4>Software and Data</h4>
          <p>A collection of articles and tutorials about software development and programming.</p>
          <p></p>
          <AniLink fade to="/about" className="btn-primary">
            Read more
        </AniLink>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  .about-center {
    width: 80vw;
    margin: 0 auto;
  }
  .about-img {
    margin: 3rem 0;
  }
  .about-info {
    margin-top: 3rem;
  }
  .about-img {
    position: relative;
  }

  .about-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .about-img div {
    box-shadow: var(--lightShadow);
  }
  .about-info h4 {
    font-size: 1.9rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .about-img,
    .about-info {
      margin: 0;
    }
    .about-img img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    .about-info p {
      width: 80%;
    }
  }
  @media screen and (min-width: 992px) {
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1200px) {
    .about-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`

export default About
