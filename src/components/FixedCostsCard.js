import React from 'react'
import styled from 'styled-components'

import { numToCurrency } from '../data'

const StyledFixedCostsCard = styled.div`
  margin: 10px;
  padding: 5px;
`;

function FixedCostsCard({ fixed }) {
  return (
    <StyledFixedCostsCard>
      <div className='FixedWrapper'>{fixed}</div>
    </StyledFixedCostsCard>
  )
}

export default FixedCostsCard