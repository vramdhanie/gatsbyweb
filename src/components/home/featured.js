import React from "react"
import Title from "../title"
import styles from "../../css/featured.module.css"

const Featured = () => {
  return (
    <section className={styles.featured}>
      <Title title="featured" subtitle="articles" />
    </section>
  )
}

export default Featured
