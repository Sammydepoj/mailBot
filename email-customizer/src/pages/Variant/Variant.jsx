import React from 'react'
import './Variant.css'

const Variant = () => {
  return (
    <div>
      <div className='compose'>
        <div className='mailBody'>
          <div className='formInput'>
            <p>From:</p>
            <input type="text" placeholder='markessin@gmail.com' />
          </div>

          <div className='hrLine'></div>

          <div className='subjectInput'>
            <p>Subject:</p>
            <input type="text" placeholder='The real estate project' />
          </div>

          <div className='hrLine'></div>

          <div className='textarea'>
            <textarea placeholder='Your message' />
          </div>
        </div>
      </div>

      <div className='variantComponent'>
        <div className="variant-btn">
          <button className='active'>Variant 1</button>
          <button>Variant 2</button>
          <button>Variant 3</button>
          <button>Variant 4</button>
          <button>Variant 5</button>
        </div>

        <div className="variant-msg">
          <p>Hello Rahman; <br /><br />

            We have another project coming up soon, the client has paid for 100 hectares of land. I will need
            you to bring your machine to the site. <br /> <br />

            We have another project coming up soon, the client has paid for 100 hectares of land. I will need
            you to bring your machine to the site.</p>
        </div>
      </div>

      <div className='btn'>
        <button>Proceed</button>
      </div>
    </div>
  )
}

export default Variant