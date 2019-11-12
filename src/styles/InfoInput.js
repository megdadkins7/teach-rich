import styled from 'styled-components'

export const StyledInfoInput = styled.div`
  display: flex;
  margin: 10px;
  .Info {
    margin: 10px;
    padding: 5px;
  }
  .DollarWrapper {
    margin-left: auto;
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
    margin-left: 20px;
    color: #51E3A4;
    font-weight: 500;
    font-size: 2rem;
  }
`;