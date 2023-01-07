import styled from 'styled-components'
import Manabar from './Manabar'

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

function App() {
  return (
    <div>
      <Title> this is title</Title> hello there
      <Manabar />
    </div>
  )
}

export default App
