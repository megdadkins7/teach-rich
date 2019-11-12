import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 10px;
  padding: 5px;
  .HeaderFont{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: #343434;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='HeaderWrapper'>
        <span className='HeaderFont'>Conscious Spending Plan</span>
      </div>
    </StyledHeader>
  )
}

export default Header