import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to='/'>MailBot</Link>
      </div>
      <div className={styles.hrLine}></div>
    </>
  )
}

export default Header