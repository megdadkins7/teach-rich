import React from 'react'
import styled from 'styled-components'

const StyledSalaryCard = styled.div`
  margin: 15px;
  padding: 5px;
  .SalaryFont {
    color: #51E3A4;
    font-weight: 500;
    font-size: 2rem;
  }
`;

function SalaryCard({ salary }) {
  return (
    <StyledSalaryCard>
      <div className='SalaryWrapper'>
        <span className='SalaryFont'>${parseFloat(salary).toFixed(2)}</span>
      </div>
    </StyledSalaryCard>
  )
}

export default SalaryCard