import React from 'react'
import styled from 'styled-components'

import SpendingList from './SpendingList'
import SalaryCard from './SalaryCard'

const StyledCSPApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CSPApp() {
  return (
    <StyledCSPApp>
      <SpendingList />
      <div className='SalaryWrapper'>
        <SalaryCard />
      </div>
    </StyledCSPApp>
  )
}

export default CSPApp