import React from 'react';
// import AddRecipients from '../components/AddRecipients/AddRecipients';
import CustomForm from '../components/CustomForm/CustomForm';
// import SendMessage from '../components/SendMessage/SendMessage';
import Sidebar from '../components/sidebar/Sidebar';
import StepTitle from '../components/stepTitle/StepTitle';

const Verify = () => {
  return (
    <div>
        <StepTitle title ='Verify your email'/>
        <CustomForm 
          placeholder='Enter your email'
          type='email'
          value='Verify'
        />
        <Sidebar />
        {/* <AddRecipients/>
        <SendMessage/> */}

    </div>
  )
}

export default Verify