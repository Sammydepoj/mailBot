import React, { useState } from 'react';
// import Button from '../../components/Button/Button';
import  './AddRecipients.css';
import Modal from '../../components/SuccessModal/Modal'
import { useAppContext } from '../../Context/Context';

const AddRecipients = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {handleFile, handleOnSubmit, selectedFile} = useAppContext()

    return (
        <div className='uploadRecipients'>
            <div className='form'>
                <div className='addRecipient'>
                    <label>Add Recipients:</label>
                    <div className='uploadFile'>
                        <div className='uploadInpt'>
                            <input className='customSubmitBtn'
                                type='file'
                                onChange={handleFile}
                            />
                            {/* <img src="./assets/upload.svg" alt="" /> */}
                        </div>
                        <p>or</p>
                        <p>Drag and drop csv here</p>
                    </div>
                </div>

                <div>
                    <label>Recipient List:</label>

                    <div className='recipientListContainer'>
                        {/* <div className='recipientList'>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                </div> */}

                        {/* <div className='recipientList'>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                    <p>markessien@hng.com <span>X</span></p>
                </div> */}
                    </div>
                    <div className='proceedbtn'>
                        <button
                            className={selectedFile.name === undefined ? 'customSubmit disabled'  : 'customSubmit' }
                            disabled={selectedFile.name === undefined}
                            onClick={(e) => handleOnSubmit(e)}>
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