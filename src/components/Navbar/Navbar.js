import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.scss'

const Navbar = () => (
  <header className={styles.header}>
    <NavLink className={styles.logo} to="/">Github Search</NavLink>
    <nav>
      <ul className={styles.listInner}>
        <li className={styles.listInnerItem}>
          <NavLink className={styles.listInnerLink} to="/" exact activeClassName={styles.activeLink}>
            Main
          </NavLink>
        </li>
        <li className={styles.listInnerItem}>
          <NavLink className={styles.listInnerLink} to="/about" activeClassName={styles.activeLink}>
            Information
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar