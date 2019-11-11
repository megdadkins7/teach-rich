import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'


function Investments({ salary, fixed, investments, getInvestments}) {
  return (
    <StyledInfoInput>
      <span className='Info'>Your monthly investments goal (401(k), Roth IRA, etc):</span>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getInvestments(salary, fixed, investments)}</span>
        <span>${investments.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default Investments