import React from 'react';
import styles from './Button.module.css';

const Button = ({type,value, ...otherProps}) => {
  return (
    <div>
        <input
         className={styles.customSubmitBtn}
         type={type} 
         value={value} 
         {...otherProps} 
        /> 
    </div>
  )
}

export default Button