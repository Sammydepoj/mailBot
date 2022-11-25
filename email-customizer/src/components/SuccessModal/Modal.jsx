import React from 'react';
import styles from './Modal.module.css';
import {Link} from 'react-router-dom';
import {RiHome2Line } from 'react-icons/ri';

import {BsCheckCircle } from 'react-icons/bs';

const Modal = ({setIsOpen}) => {
  return (
    <div className ={styles.modalBackground}>
        <div className ={styles.modal}>
            <p>Message sent successfully</p>
            <BsCheckCircle style={{color: 'green', fontSize: '70px'}} />
            <div>
                <Link to='/' className ={styles.link} >
                    <RiHome2Line />
                    <span>Back home</span>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Modal