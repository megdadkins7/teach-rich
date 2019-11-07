import React, { useState } from 'react'
import styled from 'styled-components'

import Salary from './Salary'
import FixedCosts from './FixedCosts'
import Investments from './Investments'
import SavingsGoals from './SavingsGoals'
import GuiltFree from './GuiltFree'
import SalaryCard from './SalaryCard';
import FixedCostsCard from './FixedCostsCard';

const StyledSpendingList = styled.div`
  display: flex;
  justify-content: space-between;
`;

function SpendingList() {
  const initialSalary = 1
  const initialFixedCosts = 1
  const [salary, setSalary] = useState(initialSalary)
  const [fixed, setFixed] = useState(initialFixedCosts)

  const addSalary = money => {
    const newSalary =  money;
    setSalary(newSalary)
  }
  const addFixedCosts = money => {
    const newFixed = money;
    setFixed(newFixed)
  }
  return (
    <StyledSpendingList>
      <div className='ListWrapper'>
        <Salary salary={salary} addSalary={addSalary} />
        <FixedCosts fixed={fixed} addFixedCosts={addFixedCosts} />
        <Investments />
        <SavingsGoals />
        <GuiltFree />
      </div>
      <div className='CardWrapper'>
        <SalaryCard />
        <FixedCostsCard />
      </div>
    </StyledSpendingList>
  )
}

export default SpendingList