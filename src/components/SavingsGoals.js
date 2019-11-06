import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function SavingsGoals() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly savings (vacations, emergency funds, etc):</span>
      <input className='Input' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default SavingsGoals