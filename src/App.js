import CanvasContainer from './containers/CanvasContainer'
import styled from 'styled-components'
import './App.css';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <StyledSection>
        <CanvasContainer />
      </StyledSection>
    </div>
  );
}

export default App;
