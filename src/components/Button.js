import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

function Button(props) {
  return (
    <StyledButton onClick={props.clicked}>{ props.children }</StyledButton>
  );
}

export default Button;