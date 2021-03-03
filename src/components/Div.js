import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function Div(props) {
  return (
    <StyledDiv>{ props.children }</StyledDiv>
  );
}

export default Div;
