import React from 'react'
import styled from 'styled-components'

const StyledSalaryCard = styled.div`
  margin: 10px;
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
        <span className='SalaryFont'>${salary}.00</span>
      </div>
    </StyledSalaryCard>
  )
}

export default SalaryCard