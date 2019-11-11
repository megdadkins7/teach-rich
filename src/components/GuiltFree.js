import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function GuiltFree({ salary, fixed, investments, savings, spending, getSpending}) {
  return (
    <StyledInfoInput>
      <span className='Info'>Your guilt-free spending money (dining out, concerts, movies, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getSpending(salary, fixed, investments, savings, spending)}</span>
        <span>${spending.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default GuiltFree