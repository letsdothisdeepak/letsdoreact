import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [color,setColor]= useState("white")

  
  return (
    <>
    <div className='bg-white w-screen h-screen'
    style={{backgroundColor:color}}>
    
    <div className="w-screen h-20 bg-white flex justify-center gap-3" >
     <button 
     onClick={()=>{setColor("red")}}
     className=' pt-3 pb-3 pl-10 pr-10 text-2xl text-black w-36 h-16 mt-2 '
     style={{backgroundColor: "red"}}>Red
     </button>

     <button 
     onClick={()=>{setColor("green")}}
     className=' pt-3 pb-3 pl-10 pr-10 text-2xl text-black w-36 h-16 mt-2'
     style={{backgroundColor: "green"}}>Green
     </button>
     <button 
     onClick={()=>{setColor("yellow")}}
     className=' pt-3 pb-3 pl-10 pr-10 text-2xl text-black w-36 h-16 mt-2'
     style={{backgroundColor: "yellow"}}>Yellow
     </button>  

     <button 
     onClick={()=>{setColor("pink")}}
     className='pt-3 pb-3 pl-10 pr-10 text-2xl text-black w-36 h-16 mt-2'
     style={{backgroundColor: "pink"}}>Pink
     </button>         
     </div>
     
     
    </div>
    </>
    
  )
}


export default App
