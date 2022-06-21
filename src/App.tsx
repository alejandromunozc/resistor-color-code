import { useState } from 'react'
import Header from './components/Header'
import SelectMode from './components/SelectMode'

function App() {
  return (
    <div className="App">
      <Header />
      <SelectMode />
      <h1>Resistor Color Code</h1>
    </div>
  )
}

export default App
