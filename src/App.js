import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import ListArray from './features/arrays/ListArray';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListArray/>
      </header>
    </div>
  );
}

export default App;
