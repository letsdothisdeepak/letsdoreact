import { useState, useCallback, useEffect } from 'react'

import './App.css'


function App(){
  const [length, setLength] = useState(8)
  const [numberChecked, setNumberChecked] = useState(false)
  const [charChecked, setCharChecked] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberChecked){
      str= str + "0123456789"
    }
    if(charChecked){
      str=str + "!@#$%^&*()_+"
    }

    for (let i = 1; i <=length; i++) {
     let char= Math.floor(Math.random()*str.length + 1)
       pass= pass+str.charAt(char)

      
    }
    setPassword(pass)

  },[length,numberChecked,charChecked,setPassword])

  useEffect(()=>{
    passwordGenerator()},[length,numberChecked,charChecked,passwordGenerator]
  )

  


  return (
    <>
     <div class='container'>
        <h4>Password Generator</h4>
        <div>
        <label htmlFor="text"></label>
        <input 
        type="text" 
        value={password} 
        name="text" 
        id="password" 
        placeholder='your-generated-password-is-here'
        readOnly/>
        <button>copy</button>
        </div>
        <div class='details'>
        
        <input type="range"
         id="range" 
         min="5" max="100"
         value={length}
         onChange={(e)=>{setLength(e.target.value)}} />
        <span>Length({length})</span>
        <span><input 
                type="checkbox" 
                name="Numbers"
                id="numbers"
                onChange={()=>{setNumberChecked((last)=> !last)

                }} />Numbers
        </span>
        <span><input 
                type="checkbox"
                name="Characters" 
                id="characters"
                onChange={()=>{setCharChecked((last)=> !last)

                }} />Characters
        </span>
        </div>
        
     </div>
    </>
  )
}

export default App
