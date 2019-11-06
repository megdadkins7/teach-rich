import React from 'react'
import styled from 'styled-components'

import Salary from './Salary'
import FixedCosts from './FixedCosts'
import Investments from './Investments'
import SavingsGoals from './SavingsGoals'
import GuiltFree from './GuiltFree'

const StyledSpendingList = styled.div``;

function SpendingList() {
  return (
    <StyledSpendingList>
      <Salary />
      <FixedCosts />
      <Investments />
      <SavingsGoals />
      <GuiltFree />
    </StyledSpendingList>
  )
}

export default SpendingList