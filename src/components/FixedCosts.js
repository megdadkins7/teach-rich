import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function FixedCosts() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly bills (rent, utilities, debt, etc):</span>
      <input className='Input' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default FixedCosts