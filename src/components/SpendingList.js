import React, { useState } from 'react'
import styled from 'styled-components'

import Salary from './Salary'
import FixedCosts from './FixedCosts'
import Investments from './Investments'
import SavingsGoals from './SavingsGoals'
import GuiltFree from './GuiltFree'

const StyledSpendingList = styled.div``;

function SpendingList() {

  const initialSalary = 1

  const [salary, setSalary] = useState(initialSalary)

  const addSalary = money => {
    const newSalary =  money;
    setSalary(newSalary)
  }
  return (
    <StyledSpendingList>
      <Salary salary = {salary} addSalary={addSalary} />
      <FixedCosts />
      <Investments />
      <SavingsGoals />
      <GuiltFree />
    </StyledSpendingList>
  )
}

export default SpendingList