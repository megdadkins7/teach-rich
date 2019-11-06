import React from 'react'

import { numToCurrency } from '../data'

import { StyledInfoInput } from '../styles/InfoInput'

function SavingsGoals() {
  return (
    <StyledInfoInput>
      <span className='Info'>Your monthly savings goal (vacations, emergency funds, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{numToCurrency(0)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default SavingsGoals