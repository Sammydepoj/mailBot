import React, { useState, useEffect } from 'react';
import './AddRecipients.css';
import Modal from '../../components/SuccessModal/Modal'
import { useAppContext } from '../../Context/Context';

import close from './assets/close.svg'

const AddRecipients = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleFile, handleOnSubmit, selectedFile, getLs } = useAppContext()

    useEffect(() => {
        getLs();
      }, [])

    return (
        <div className='uploadRecipients'>
            <div className='form'>
                <div className='addRecipient'>
                    <label>Add Recipients:</label>
                    <div className='uploadFile'>
                        <div className='uploadInpt'>
                            <input className='customSubmitBtn'
                                type='file'
                                name='file'
                                accept='.csv'
                                onChange={handleFile}
                            />
                        </div>
                        <p>or</p>
                        <p>Drag and drop csv here</p>
                    </div>
                </div>

                <div>
                    <label>Recipient List:</label>

                    <div className='recipientListContainer'>
                        <div className='recipientList'>
                            <p>markessien@hng.com
                                <img src={close} alt="" />
                            </p>
                            <p>markessien@hng.com
                                <img src={close} alt="close" />
                            </p>
                            <p>markessien@hng.com
                                <img src={close} alt="close" />
                            </p>
                            <p>markessien@hng.com
                                <img src={close} alt="close" />
                            </p>
                            <p>markessien@hng.com
                                <img src={close} alt="close" />
                            </p>
                            <p>markessien@hng.com
                                <img src={close} alt="close" />
                            </p>
                        </div>
                    </div>
                    <div className='proceedbtn'>
                        <button
                            className={selectedFile.name === undefined ? 'customSubmit disabled' : 'customSubmit'}
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