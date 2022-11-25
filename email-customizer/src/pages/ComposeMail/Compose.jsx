import React, { useEffect } from 'react'
import styles from './Compose.module.css'
import { useAppContext } from '../../Context/Context'

const Compose = () => {
    const { data, getLs, setLs, handleChange, handlegenerateVariant } = useAppContext()
    useEffect(() => {
        getLs();
    }, [getLs])
    
  return (
    <div className={styles.compose}>
        <div className={styles.mailBody}>
            <div className={styles.formInput}>
                <p>From:</p>
                <input type="text" placeholder='markessin@gmail.com' 
                readOnly={true}
                name="email"
                defaultValue={data.email}/>
            </div>

            <div className={styles.hrLine}></div>

            <div className={styles.subjectInput}>
                <p>Subject:</p>
                <input type="text" placeholder='The real estate project'
                    onChange={(e) => {
                        handleChange(e);
                        setLs();
                    }}
                    defaultValue={data.sub}
                    name="sub"
                />
            </div>

            <div className={styles.hrLine}></div>

            <div className={styles.textarea}>
                <textarea placeholder='Your message'
                value={data.msg} name="msg" onChange={(e) => {
                        handleChange(e);
                        setLs();
                    }} />
            </div>

            <div className={styles.btn}>
                <button
                    onClick={handlegenerateVariant}
                >Generate Email Variants</button>
            </div>
        </div>
    </div>
  )
}

export default Compose