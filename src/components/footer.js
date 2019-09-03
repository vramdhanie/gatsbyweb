import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import social from "../constants/social"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink fade to={item.path} key={index}>
            {item.text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {social.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()}, Vincent Ramdhanie
        {` `}
      </div>
      <div className={styles.attribution}>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
