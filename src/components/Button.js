import styled from "styled-components";

const Button = styled.button`
  background-color: #0078e7;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 400;
  border: none;
  cursor: pointer;
  
  &:active,
  &:hover {
    background-color: #265778;
  }
`

export default Button;