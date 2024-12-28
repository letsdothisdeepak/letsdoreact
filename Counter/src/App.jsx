import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let CounterPlus= ()=>{

    setCount(count+1)
  }
  let CounterMinus= ()=>{
    
    setCount(count-1)
    
  }
 

  return (
    <>
      <button onClick={CounterPlus}>Counter++</button>
      <h1>Counter value:{count}</h1>
      <br />
      <button onClick={CounterMinus} >Counter--</button>
        
    </>
  )
}

export default App
