import React, {useState} from 'react';
import logo from './logo.svg';
import { MainScreen } from './features/MainScreen';
import './App.css';

function App() {
  const [state, setState] = useState('');
  return (
    <>
      <ul>
          <li onClick={() => setState('Comparison')}>Comparison</li>
          <li>Top 10</li>
      </ul>

      <MainScreen display={state}/>
    </>
  );
}

export default App;
