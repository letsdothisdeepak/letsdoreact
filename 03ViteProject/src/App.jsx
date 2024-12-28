import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='text-black size-30 rounded-3xl bg-green-300 text-4xl' >Tailwind | CSS</button>
      
      <Card username='Deepak' btnText='Visit me' img1='https://images.pexels.com/photos/29694048/pexels-photo-29694048/free-photo-of-elegant-black-and-white-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      <Card username='Rahul' btnText='Click me' img1='https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </>
  )
}

export default App

