import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  const bgColor= ()=>{

  }

  return (
    <>
    <body className='bg-white w-screen'
    style={{backgroundColor:color}}>
    <div>
      <button onClick={()=>{
        setColor('red')}
      } className='bg-red-600 text-black w-20'>Red</button>
      <button onClick={()=>{
        setColor('blue')}} className='bg-blue-600 text-black w-20'>Blue</button>
      <button onClick={()=>{
        setColor('green')}} className='bg-green-400 text-black w-20'>Green</button>
      <button onClick={()=>{
        setColor('yellow')}} className='bg-yellow-300 text-black w-20'>Yellow</button>
    </div>  
    </body>    

    </>
  )
}

export default App
