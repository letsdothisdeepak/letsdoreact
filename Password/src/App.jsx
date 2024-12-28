import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberChecked, setNumberChecked] = useState(false)
  const [charChecked, setCharChecked] = useState(false)
  const [password,setPassword] = useState()

  const lengthChange=()=>{
    setLength(length)
  }



  return (
    <>
     <div class='container'>
        <h4>Password Generator</h4>
        <div>
        <label htmlFor="text"></label>
        <input type="text" name="text" id="password" placeholder='your-generated-password-is-here'/>
        <button>copy</button>
        </div>
        <div class='details'>
        
        <input type="range" id="range" min="8" max="100" />
        <span>Length({length})</span>
        <span><input type="checkbox" name="Numbers" id="numbers" />Numbers</span>
        <span><input type="checkbox" name="Characters" id="characters" />Characters</span>
        </div>
        
     </div>
    </>
  )
}

export default App
