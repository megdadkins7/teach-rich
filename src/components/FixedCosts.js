import React, { useState } from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function FixedCosts({ addFixedCosts, fixed }) {
  const [value, setValue] = useState("");  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
  
    addFixedCosts(value)
    setValue("");
  }
  return (
    <StyledInfoInput>
      <div className='InfoWrapper'>
        <span className='Info'>Enter the total of your monthly bills (rent, utilities, debt, etc):</span>
        <span className='PercentInfo'>Total sum of rent/mortgage, utilities, medical insurance and bills, car payments, public transportation, debt payments, groceries, clothes, internet/cable</span>
        <span className='PercentInfo'>About 50-60% of monthly take-home-pay</span>
      </div>
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
        <span className='MoneyFont'>${parseFloat(fixed).toFixed(2)}</span>
      </form>
      </div>
    </StyledInfoInput>
  )
}

export default FixedCosts