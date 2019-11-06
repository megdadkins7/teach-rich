import React from 'react';

import FixedCosts from './components/FixedCosts'
import Investments from './components/Investments'
import SavingsGoals from './components/SavingsGoals'
import GuiltFree from './components/GuiltFree'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <FixedCosts />
      <Investments />
      <SavingsGoals />
      <GuiltFree />
    </>
  );
}

export default App;
