import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function SavingsGoals({ salary, fixed, investments, savings, getSavings}) {
  return (
    <StyledInfoInput>
      <span className='Info'>Your monthly savings goal (vacations, emergency funds, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getSavings(salary, fixed, investments, savings)}</span>
        <span className='MoneyFont'>${savings.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default SavingsGoals