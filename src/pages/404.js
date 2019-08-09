import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/banner"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className={styles.error}>
      <Banner>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="btn-white">
          Home
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
