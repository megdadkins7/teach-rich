import React from 'react'
import styled from 'styled-components'

const StyledSalaryCard = styled.div`
  margin: 10px;
  padding: 5px;
`;

function SalaryCard({ salary }) {
  return (
    <StyledSalaryCard>
      <div className='SalaryWrapper'>${salary}.00</div>
    </StyledSalaryCard>
  )
}

export default SalaryCard