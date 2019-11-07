import React, { useState } from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function FixedCosts({ addFixedCosts }) {
  const [value, setValue] = useState("");  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
  
    addFixedCosts(value)
    setValue("");
  }
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly bills (rent, utilities, debt, etc):</span>
      <div className='DollarWrapper'>
      <form onSubmit={handleSubmit}>
        <span className='Dollar'>$</span>
        <input 
          className='Input' 
          type='number' 
          placeholder='Enter total...' 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      </div>
    </StyledInfoInput>
  )
}

export default FixedCosts