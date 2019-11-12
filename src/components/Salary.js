import React, { useState } from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function Salary({ addSalary }) {
  const [value, setValue] = useState("");  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
  
    addSalary(value)
    setValue("");
  }

  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly salary (take-home-pay):</span>
      <div className='DollarWrapper'>
      <form onSubmit={handleSubmit}>
        <span className='Dollar'>$</span>
        <input 
          className='Input' 
          type='number' 
          step='.01'
          placeholder='Enter total...' 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      </div>
    </StyledInfoInput>
  )
}

export default Salary