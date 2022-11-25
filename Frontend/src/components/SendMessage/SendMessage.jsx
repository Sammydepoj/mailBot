import React from 'react'
import Button from '../Button/Button'

const SendMessage = () => {
  return (
    <div>
        <form>
            <textarea rows={25} cols={50}>

            </textarea>
            <div>
                <label htmlFor="recipient list">Recipient List</label>
                <p>markeassien@hng.com</p>
                <p>markeassien@hng.com</p>
                <p>markeassien@hng.com</p>
                <p>markeassien@hng.com</p>
            </div>
            <Button 
                value={'Send Broadcast'}
                type='submit' 
            />
        </form>
    </div>
  )
}

export default SendMessage