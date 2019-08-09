import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaReact } from "react-icons/fa"
import Hero from "../components/hero"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Banner title="Boogey Woo" info="Boo hoo yoo">
        <Link to="/articles" className="btn-white">
          explore articles
        </Link>
      </Banner>
    </Hero>
  </Layout>
)

export default IndexPage
