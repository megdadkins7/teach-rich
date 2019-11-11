import styled from 'styled-components'

export const StyledInfoInput = styled.div`
  display: flex;
  .Info {
    margin: 10px;
    padding: 5px;
  }
  .DollarWrapper {
    margin-left: auto;
    padding: 5px;
  }
  .Dollar {
    margin-right: 5px;
  }
  .Input {
    appearance: none;
    border: 1px solid lightgrey;
    outline: none;
    margin: 10px 10px 10px auto;
    padding: 5px;
    border-radius: 4px;
    width: 150px;
  }
  .MoneyFont{
    color: #51E3A4;
    font-weight: 500;
    font-size: 2rem;
  }
`;