import React,{useState} from 'react';
// import Button from '../../components/Button/Button';
import styles from './AddRecipients.module.css';
import Modal from '../../components/SuccessModal/Modal'

const AddRecipients = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.uploadRecipients}>
        <div className={styles.form}>
            <div className={styles.addRecipient} style={{width:'100%'}}>
                <label>Add Recipients:</label>
                <div className={styles.uploadFile}> 
                    <input className={styles.customSubmitBtn} style={{width:'100%'}}
                    type='file'
                    />
                    <p>or</p>
                    <p>Drag and drop csv here</p>
                </div>
            </div>

            <div style={{width:'100%'}}>
                <label>Recipient List:</label>

                    <div className={styles.recipientListContainer
}>
                <div className={styles.recipientList}>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                </div>
                <div className={styles.recipientList}>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                </div>
</div>
                <div className={styles.proceedbtn}>
                <button 
                    className={styles.customSubmitBtn}
                    // type='submit'
                    onClick={()=>setIsOpen(true)}>
                        Proceed
                    </button>
                </div>
                
            </div>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>   
  )
}
export default AddRecipients