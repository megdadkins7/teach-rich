import React from 'react'

import { numToCurrency } from '../data'

import { StyledInfoInput } from '../styles/InfoInput'

function Investments() {
  return (
    <StyledInfoInput>
      <span className='Info'>Your monthly investments goal (401(k), Roth IRA, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{numToCurrency(0)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default Investments