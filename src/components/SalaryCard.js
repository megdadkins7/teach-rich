import React from 'react'
import styled from 'styled-components'

import FixedCostsCard from './FixedCostsCard'

const StyledSalaryCard = styled.div`
  margin: 10px;
  padding: 10px;
  .FixedCard {
    margin-top: 10px;
  }
`;

function SalaryCard() {
  return (
    <StyledSalaryCard>
      <span>Hello from salary card</span>
      <div className='FixedCard'>
        <FixedCostsCard />
      </div>
    </StyledSalaryCard>
  )
}

export default SalaryCard