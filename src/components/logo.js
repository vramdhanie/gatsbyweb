import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => {

    const logo = useStaticQuery(graphql`
  query {
    img: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
    return (
        <div className={className}>
            {/* <div className="main_Text">
                Collective
                <span className="main_highlight">Action</span>
            </div>
            <div className="sub_text">United Vision</div> */}
            <Img fluid={logo.img.childImageSharp.fluid} />
        </div>
    )
}

export default styled(Logo)`
  text-decoration: none !important;
  color: var(--primary);
  font-weight: 400;
  font-size: 2rem;
  width: 100%;

  img {
      width: 100%;
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
