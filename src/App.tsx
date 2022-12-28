import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './views/Counter';
import CounterConnect from './connect/Counter.connect';

function App() {
  return (
    <div className="App">
      <CounterConnect></CounterConnect>
    </div>
  );
}

export default App;
