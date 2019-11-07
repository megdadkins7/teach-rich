import React from 'react'
import styled from 'styled-components'

const StyledSalaryCard = styled.div`
  margin: 10px;
  padding: 5px;
`;

function SalaryCard() {
  return (
    <StyledSalaryCard>
      <div className='SalaryWrapper'>Hello from Salary</div>
    </StyledSalaryCard>
  )
}

export default SalaryCard