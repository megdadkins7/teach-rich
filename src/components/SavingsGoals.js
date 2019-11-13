import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function SavingsGoals({ salary, fixed, investments, savings, getSavings, savingsMax, getSavingsMax}) {
  return (
    <StyledInfoInput>
      <div className='InfoWrapper'>
        <span className='Info'>Your monthly savings goal (vacations, emergency funds, etc):</span>
        <span className='PercentInfo'>About 5-10% of monthly take-home-pay</span>
      </div>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getSavings(salary, fixed, investments, savings)}</span>
        <span className='Dollar'>{getSavingsMax(salary, fixed, investments, savingsMax)}</span>
        <span className='MoneyFont'>${savings.toFixed(2)} - ${savingsMax.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default SavingsGoals