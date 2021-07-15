import React from 'react'

import styles from './Jumbotron.module.scss'

const Jumbotron = () => {
  return (
    <div className="container">
      <div className={styles.jumbotron}>
        <h2 className={styles.jumbotronTitle}>Information</h2>
        <p className={styles.jumbotronText}>
          App version 1.0
        </p>
        <p className={styles.jumbotronProject}>This is an open source project, you can view it on&nbsp;
          <a className={styles.jumbotronProjectLink} href="/">Github</a>
        </p>
      </div>
    </div>
  )
}

export default Jumbotron