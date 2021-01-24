import styled from 'styled-components';

export default styled.button`
  display: block;
  outline: none;
  width: 250px;
  margin: 50px auto;
  background: ${({disabled}) => disabled ? '#eee' : '#161b21'};
  color: white;
  border: none;
  font-family: inherit;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  
  &:not(:disabled) {
    cursor: pointer;
  }
  
  &:hover:not(:disabled) {
    background: #f9d342;
    color: black;
    transition: background 0.1s ease-in, color 0.05s ease-in;   /* yes */
  }
`;