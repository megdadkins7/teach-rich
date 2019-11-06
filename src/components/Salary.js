import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function Salary() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly salary (take-home-pay):</span>
      <input className='Input' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default Salary