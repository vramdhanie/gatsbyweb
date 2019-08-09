import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import styles from "../css/contact.module.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <header className={styles.contactHeader}>
      <Banner>
        <h1>Contact Page</h1>
        <p>This is how to get in touch with me.</p>
        <Link to="/" className="btn-white">
          Go back to the homepage
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default Contact
