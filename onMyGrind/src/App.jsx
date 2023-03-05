import { useState } from 'react'
import logo from '../public/coffee.png'
import BaristaForm from './Components/BaristaForm';
import './App.css'

function App() {
  return (
    <div>
      <div className="title-container">
        <h1 className="title"> <img src={logo} width={90}/>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
</div>
  )
}

export default App
