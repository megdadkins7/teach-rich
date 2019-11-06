import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function FixedCosts() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly bills (rent, utilities, debt, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>$</span>
        <input className='Input' type='number' placeholder='Enter total...' />
      </div>
    </StyledInfoInput>
  )
}

export default FixedCosts