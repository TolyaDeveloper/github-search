import React from 'react'
import { useAlert } from '../../context/Alert/AlertContext'

import styles from './Alert.module.scss'

const Alert = () => {
  const {alert, hide} = useAlert()

  if (!alert) {
    return null
  }

  return (
      <div className={`${styles.alert} ${styles[alert.type]}`} role="alert">
        <p className={styles.alertText}>{alert.text}</p>
        <button className={styles.alertButton} aria-label="close alert" onClick={hide}>&times;</button>
      </div>
  )
}

export default Alert