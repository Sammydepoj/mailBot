import React from 'react';
import CustomForm from '../components/CustomForm/CustomForm';
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

    </div>
  )
}

export default Verify