import React, { useState } from 'react'
import { useAlert } from '../../../context/Alert/AlertContext'
import { useGithub } from '../../../context/github/githubContext'

import styles from './Search.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useAlert()
  const {search, clearUsers} = useGithub()

  const onFormSubmit = e => {
    e.preventDefault()

    if (value.trim()) {
      alert.hide()
      search(value.trim())
    } else {
      clearUsers()
      alert.show('Enter the data!', 'warning')
    }
  }

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Enter the username..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className={styles.formSubmitBtn} type="submit">GO</button>
    </form>
  )
}

export default Search