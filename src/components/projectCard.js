import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ProjectCard = ({ className, img, name, blurb, release_date, url }) => {
    return (
        <article className={className}>
            <div className="image">
                <Image fluid={img} />
            </div>
            <div className="info">
                <div>
                    <h2>{name}</h2>
                    <h6>
                        {blurb}
                    </h6>
                    <div className="released">
                        Released:
                        {release_date}
                    </div>
                    <a href={url} className="btn-primary">
                        visit site
                    </a>
                </div>
            </div>
        </article>
    )
}

export default styled(ProjectCard)`
  margin-bottom: 2rem;
  margin-left: 2px;
  margin-right: 2px;
  background: #ffffff;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 2px 1px rgba(0,0,0,0.2); 

  .released {
      font-size: 0.8rem;
      color: var(--secondaryDark);
  }
  .info {
    padding: 1rem 0;
  }
  .info h2 {
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .info h6 {
    color: var(--primaryLight);
    text-transform: capitalize;
  }
  .info p {
    padding: 20px 0 30px 0;
    text-align: left;
  }
`
