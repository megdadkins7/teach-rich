import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function Investments() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly investments (401(k), Roth IRA, etc):</span>
      <input className='Input' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default Investments