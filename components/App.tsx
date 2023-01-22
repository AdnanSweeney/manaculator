import styled from 'styled-components'
import { Colors } from '../theme'
import Manabar from './Manabar'

const Container = styled.div`
  background-color: ${Colors.background.main};
  height: 100vh;
  width: 100vw;
  display: grid;

  @media (min-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StyledDiv = styled.div`
  border: 1px solid ${Colors.accent.main};
  padding: 80px;
`

const Title = styled.h1`
  font-weight: 500;
  text-shadow: 0px 4px 30px rgba(0, 255, 255, 0.4);
  font-size: 50px;
  color: ${Colors.accent.main};
`

function App() {
  return (
    <Container>
      <StyledDiv>
        <Title>Manaculator</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> another text</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> afdsa is title</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> dd is title</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> sdafdsafsda is title</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> dafdsafdsa</Title>
      </StyledDiv>
      <StyledDiv>
        <Title> another</Title>
      </StyledDiv>

      <Manabar />
    </Container>
  )
}

export default App
