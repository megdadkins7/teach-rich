import React, { useState } from 'react'

import Header from './Header'
import Salary from './Salary'
import FixedCosts from './FixedCosts'
import Investments from './Investments'
import SavingsGoals from './SavingsGoals'
import GuiltFree from './GuiltFree'

function SpendingList() {
  const initialSalary = 0
  const initialFixedCosts = 0
  const initialInvestments = 0
  const initialSavings = 0
  const initialSpending = 0
  const [salary, setSalary] = useState(initialSalary)
  const [fixed, setFixed] = useState(initialFixedCosts)
  const [investments, setInvestments] = useState(initialInvestments)
  const [savings, setSavings] = useState(initialSavings)
  const [spending, setSpending] = useState(initialSpending)
  const [savingsMax, setSavingsMax] = useState(initialSavings)
  const [spendingMax, setSpendingMax] = useState(initialSpending)

  const addSalary = money => {
    const newSalary =  money;
    setSalary(newSalary)
  }
  const addFixedCosts = money => {
    const newFixed = money;
    setFixed(newFixed)
  }
  const getInvestments = (salary, fixed) => {
    const newInvestments = (salary - fixed) * .1
    setInvestments(newInvestments)  
  }
  const getSavings = (salary, fixed, investments) => {
   const newSavings = (salary - fixed - investments) * .05
   setSavings(newSavings) 
  }
  const getSavingsMax = (salary, fixed, investments) => {
    const newSavingsMax = (salary - fixed - investments) * .1
    setSavingsMax(newSavingsMax)
  }
  const getSpending = (salary, fixed, investments, savings) => {
   const newSpending = (salary - fixed - investments - savings) * .2
   setSpending(newSpending)
  }
  const getSpendingMax = (salary, fixed, investments, savings) => {
    const newSpendingMax = (salary - fixed - investments - savings) * .35
    setSpendingMax(newSpendingMax)
  }
  return (
    <>
      <Header />
      <Salary salary={salary} addSalary={addSalary} />
      <FixedCosts fixed={fixed} addFixedCosts={addFixedCosts} />
      <Investments salary={salary} fixed={fixed} investments={investments} getInvestments={getInvestments} />
      <SavingsGoals salary={salary} fixed={fixed} investments={investments} savings={savings} getSavings={getSavings} savingsMax={savingsMax} getSavingsMax={getSavingsMax} />
      <GuiltFree salary={salary} fixed={fixed} investments={investments} savings={savings} spending={spending} getSpending={getSpending} spendingMax={spendingMax} getSpendingMax={getSpendingMax} />
    </>
  )
}

export default SpendingList