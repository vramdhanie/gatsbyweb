import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => {

  const logo = useStaticQuery(graphql`
  query {
    img: file(relativePath: { eq: "vrr_logo.png" }) {
      childImageSharp {
        fixed(width: 63) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <div className={className}>
      <Img fixed={logo.img.childImageSharp.fixed} />
      <div className="text">
        <div className="main_Text">
          Vincent
                <span className="main_highlight">Ramdhanie</span>
        </div>
        <div className="sub_text">Software Developer, Teacher</div>
      </div>
    </div>
  )
}

export default styled(Logo)`
  text-decoration: none !important;
  color: var(--primary);
  font-weight: 400;
  font-size: 2rem;
  width: 100%;
  display: flex;

  .text {
    margin-left: 4px;
    padding: 4px;
  }

  .sub_text {
      font-size: 1rem;
      font-weight: 300;
      text-align: right;
      text-decoration: none;
  }

  .main_highlight {
      color: var(--secondary)
  }
`
