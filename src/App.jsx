import { useState } from 'react'
import reactLogo from './assets/react.svg'
import snake from './assets/snake.svg'
import './App.css'
import Box from './Box.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='face-top'>
        <img src={snake} className="logo" alt="Snake logo" />
        <img src={snake} className="logo" alt="Snake logo" />
        <img src={snake} className="logo" alt="Snake logo" /> 
      </div>
      <h1>SNAKE</h1>
      <Box />
      <div className='face-down'>
        <img src={snake} className="logo" alt="Snake logo" />
        <img src={snake} className="logo" alt="Snake logo" />
        <img src={snake} className="logo" alt="Snake logo" /> 
      </div>
    </>
  )
}

export default App
