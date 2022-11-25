import React from 'react';
import styles from './customform.module.css';

const CustomForm = ({type,placeholder,value}) => {
  return (
    <div className={styles.customform}>
        <form>
            <input className={styles.textfield} type={type} placeholder={placeholder} />
                
            <input className={styles.customSubmitBtn} type='submit' value={value}  />  
        </form>
    </div>
  )
}

export default CustomForm