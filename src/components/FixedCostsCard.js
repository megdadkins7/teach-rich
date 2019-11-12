import React from 'react'
import styled from 'styled-components'

const StyledFixedCostsCard = styled.div`
  margin: 15px;
  padding: 5px;
  .FixedFont {
    color: #51E3A4;
    font-weight: 500;
    font-size: 2rem;
  }
`;

function FixedCostsCard({ fixed }) {
  return (
    <StyledFixedCostsCard>
      <div className='FixedWrapper'>
        <span className='FixedFont'>${parseFloat(fixed).toFixed(2)}</span>
      </div>
    </StyledFixedCostsCard>
  )
}

export default FixedCostsCard