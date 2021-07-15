import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CardItem.module.scss'

const CardItem = ({user}) => (
  <div className={styles.card}>
    <img className={styles.cardImg} src={user.avatar_url} alt={user.login} loading="lazy" />
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>{user.login}</div>
      <Link className={styles.cardLink} to={`/profile/${user.login}`}>Show profile</Link>
    </div>
  </div>
)

export default CardItem