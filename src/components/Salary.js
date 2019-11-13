import React, { useState } from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function Salary({ addSalary, salary }) {
  const [value, setValue] = useState("");  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
  
    addSalary(value)
    setValue("");
  }

  return (
    <StyledInfoInput>
      <div className='InfoWrapper'>
        <span className='Info'>Enter the total of your monthly salary (take-home-pay):</span>
        <span className='PercentInfo'>Your net pay (after taxes are taken out of your paycheck)</span>
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
        <span className='MoneyFont'>${parseFloat(salary).toFixed(2)}</span>
      </form>
      </div>
    </StyledInfoInput>
  )
}

export default Salary