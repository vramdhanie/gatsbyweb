import React from "react"
import Title from "../title"
import styles from "../../css/contact.module.css"

const Form = () => {
  return (
    <section className={styles.contact}>
      <Title title="Email" subtitle="Me" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/vramdhanie@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hi!"
            />
          </div>
          <div>
            <input type="submit" value="Send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
