import React from 'react'
import logo from './logo.svg'
import './App.css'

import api from './lib'

console.log('imported foo', api.foo)

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p id='foo'>foo: {api.foo()}</p>
      </header>
    </div>
  )
}

export default App
