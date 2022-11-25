import React from 'react';
import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>MailBot</h2>
      </div>
      <div className={styles.hrLine}></div>
    </>
  )
}

export default Header