import React from 'react';
// import Button from '../../components/Button/Button';
import styles from './AddRecipients.module.css';

const AddRecipients = () => {
  return (
    <div className={styles.uploadRecipients}>
        <form>
            <div className={styles.addRecipient}>
                <label>Add Recipients:</label>
                <div className={styles.uploadFile}> 
                    <input className={styles.customSubmitBtn}
                    type='file'
                    />
                    <p>or</p>
                    <p>Drag and drop csv here</p>
                </div>
            </div>

            <div>
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
                <input className={styles.customSubmitBtn}
                    value='Proceed'
                    type='submit'
                />
                </div>
                
            </div>
        </form>
    </div>   
  )
}
export default AddRecipients