import React from 'react'

import { StyledInfoInput } from '../styles/InfoInput'

function Investments({ salary, fixed, investments, getInvestments}) {
  return (
    <StyledInfoInput>
      <div className='InfoWrapper'>
        <span className='Info'>Your monthly investments goal (401(k), Roth IRA, etc):</span>
        <span className='PercentInfo'>About 10% of monthly take-home-pay</span>
      </div>
      <div className='DollarWrapper'>
        <span className='Dollar'>{getInvestments(salary, fixed, investments)}</span>
        <span className='MoneyFont'>${investments.toFixed(2)}</span>
      </div>
    </StyledInfoInput>
  )
}

export default Investments