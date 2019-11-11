import React from 'react'
import styled from 'styled-components'

import { numToCurrency } from '../data'

const StyledSalaryCard = styled.div`
  margin: 10px;
  padding: 5px;
`;

function SalaryCard({ salary }) {
  return (
    <StyledSalaryCard>
      <div className='SalaryWrapper'>{salary}</div>
    </StyledSalaryCard>
  )
}

export default SalaryCard