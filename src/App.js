import React from 'react';
import logo from './logo.svg';
import './App.css';

import { foo } from './lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="foo">
          foo: {foo()}
        </p>
      </header>
    </div>
  );
}

export default App;
