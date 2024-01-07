import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10);
  const addValue = () => setCounter(counter + 1);
  const removeValue = () => setCounter(counter - 1);

  return (
    <>
      <h1>Test React</h1>
      <h2>Default Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button><br />
      <p>Updated value after Adding {counter}</p>
      <button onClick={removeValue}>Decrease Value</button>
      <p>Updated value after Deleting {counter}</p>
    </>
  )
}

export default App
