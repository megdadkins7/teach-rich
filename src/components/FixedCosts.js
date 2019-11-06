import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function FixedCosts() {
  return (
    <StyledInfoInput>
      <span className='FixedCostsInfo'>Enter the total of your monthly bills (rent, utilities, debt, etc):</span>
      <input className='FixedCostsInput' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default FixedCosts