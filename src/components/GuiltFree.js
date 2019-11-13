import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function GuiltFree({ salary, fixed, investments, savings, spending, getSpending, spendingMax, getSpendingMax}) {
  return (
    <StyledInfoInput>
      <div className='InfoWrapper'>
        <span className='Info'>Your guilt-free spending money (dining out, concerts, movies, etc):</span>
        <span className='PercentInfo'>About 20-35% of monthly take-home-pay</span>
      </div>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getSpending(salary, fixed, investments, savings, spending)}</span>
        <span className='Dollar'>{getSpendingMax(salary, fixed, investments, savings, spendingMax)}</span>
        <span className='MoneyFont'>${spending.toFixed(2)} - ${spendingMax.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default GuiltFree