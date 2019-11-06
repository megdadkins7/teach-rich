import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function GuiltFree() {
  return (
    <StyledInfoInput>
      <span className='Info'>Enter the total of your monthly spending (dining out, clothes, movies, etc):</span>
      <input className='Input' type='text' placeholder='Enter total...' />
    </StyledInfoInput>
  )
}

export default GuiltFree