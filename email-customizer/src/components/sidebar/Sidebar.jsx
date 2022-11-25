import React from 'react';
import styles from './steptitle.module.css';

const StepTitle = ({title}) => {
  return (
    <div className={styles.steptitle}>
        <h1>{title}</h1>
    </div>
  )
}

export default StepTitle