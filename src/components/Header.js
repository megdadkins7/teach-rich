import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 5px;
  padding: 5px;
  .HeaderFont {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3rem;
    color: #51E3A4;
  }
  .SlashFont {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3rem;
    color: #7d7d7d;
  }
  .SpendingFont {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3rem;
    color: #343434
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='HeaderWrapper'>
        <span className='HeaderFont'>Conscious</span>
        <span className='SlashFont'>/</span>
        <span className='SpendingFont'>Spending Plan</span>
      </div>
    </StyledHeader>
  )
}

export default Header