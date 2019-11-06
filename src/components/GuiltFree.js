import React from 'react'

import { numToCurrency } from '../data'

import { StyledInfoInput } from '../styles/InfoInput'

function GuiltFree() {
  return (
    <StyledInfoInput>
      <span className='Info'>Your guilt-free spending money (dining out, clothes, movies, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{numToCurrency(0)}</span>      
      </div>
    </StyledInfoInput>
  )
}

export default GuiltFree