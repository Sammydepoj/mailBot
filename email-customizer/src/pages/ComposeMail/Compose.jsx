import React from 'react'
import styles from './Compose.module.css'

const Compose = () => {
  return (
    <div className={styles.compose}>
        <div className={styles.mailBody}>
            <div className={styles.formInput}>
                <p>From:</p>
                <input type="text" placeholder='markessin@gmail.com'/>
            </div>

            <div className={styles.hrLine}></div>

            <div className={styles.subjectInput}>
                <p>Subject:</p>
                <input type="text" placeholder='The real estate project'/>
            </div>

            <div className={styles.hrLine}></div>

            <div className={styles.textarea}>
                <textarea placeholder='Your message' />
            </div>

            <div className={styles.btn}>
                <button>Generate Email Variants</button>
            </div>
        </div>
    </div>
  )
}

export default Compose