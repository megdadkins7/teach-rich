import React from 'react'
import styled from 'styled-components'

const StyledFixedCostsCard = styled.div`
  margin: 10px;
  padding: 5px;
  margin-top: 20px;
`;

function FixedCostsCard() {
  return (
    <StyledFixedCostsCard>
      <div className='FixedWrapper'>Hello from Fixed</div>
    </StyledFixedCostsCard>
  )
}

export default FixedCostsCard