import React from 'react';
import Button from '../Button/Button';

const AddRecipients = () => {
  return (
    <div>
        <form>
            <div>
                <label>Add Recipients:</label>
                <Button
                value='Upload CSV file'
                type='email'
                />
                <p>or</p>
                <p>Drag and drop csv here</p>
            </div>
            <div>
                <label>Recipient List:</label>
                <Button
                    value='Proceed'
                    type='submit'
                />
            </div>
        </form>
    </div>   
  )
}
export default AddRecipients