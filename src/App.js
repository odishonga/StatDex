import React, {useState} from 'react';
import { MainScreen } from './features/MainScreen';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: left;
  background-color: #d3363f;
`
const DexButton = styled.div`
  border: 3px solid black;
  border-radius: 12%;
  background-color: #5194d0;
  margin: 5%;
  padding: 5%;
  width: fit-content;
  &:hover {
    background-color: hsl(199,84.1%,34.3%);
    cursor: pointer;
  }
`
const Nav = styled.div`
  border-right: 3px solid black;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-right: 5%;
`

const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

function App() {
  const [state, setState] = useState('');
  return (
    <Container>
      <Nav>
          <DexButton onClick={() => setState('Comparison')}>Comparison</DexButton>
          <DexButton onClick={() => setState('Top Pokemon')}>Strongest Pokemon (Total)</DexButton>
          <DexButton onClick={()=> setState('HP')}>Most HP</DexButton>
          <DexButton onClick={()=> setState('attack')}>Best Attack</DexButton>
          <DexButton onClick={()=> setState('defence')}>Best Defence</DexButton>
          <DexButton onClick={()=> setState('spatk')}>Best Special Attack</DexButton>
          <DexButton onClick={()=> setState('spdef')}>Best Special Defence</DexButton>
          <DexButton onClick={()=> setState('speed')}>Fastest</DexButton>
          <DexButton onClick={()=> setState('Watch')}>Watch!</DexButton>
      </Nav>

      <ScreenContainer><MainScreen display={state}/></ScreenContainer>
    </Container>
  );
}

export default App;
