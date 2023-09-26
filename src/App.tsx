import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'

function App() {

  return (
    <>
      <header className="flex flex-row font-custom text-xl">
        <NavBar />
        <CartBtn />
      </header>
    </>
  )
}

export default App
