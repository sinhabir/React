import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

export default function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)  
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!$%&/()@[]"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword]);

  const copytoClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(passwordGenerator,
    [length,numberAllowed,charAllowed])

  return (
    <>
      <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick= {copytoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={e => setLength(e.target.value)}
            name="" 
            id="" />
            <label htmlFor="length">Length: {length}</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            onChange={ () => setNumberAllowed ((prev) => !prev) }
            name="" 
            id="" />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {charAllowed}
            onChange={ () => setCharAllowed ((prev) => !prev) }
            name="" 
            id="" />
            <label htmlFor="character">Character</label>
          </div>

        </div>


      </div>



    </>
  )
}


