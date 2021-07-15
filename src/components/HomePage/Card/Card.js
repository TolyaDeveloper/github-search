import React from 'react'
import CardItem from './CardItem/CardItem'
import { useGithub } from '../../../context/github/githubContext'
import Loader from '../../Loader/Loader'

import styles from './Card.module.scss'

const Card = () => {
  const {loading, users} = useGithub()

  return (
    <div className={styles.cardInner}>
      {loading
        ? <Loader />
        : users.map(user => <CardItem key={user.id} user={user} />
        )}
    </div>
  )
}

export default Card