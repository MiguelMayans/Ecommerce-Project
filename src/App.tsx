import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'
import Landing from './components/Landing/Landing'

function App() {

  return (
    <>
      <header className="flex flex-row font-custom text-xl">
        <NavBar />
        <CartBtn />
      </header>
      <body>
        <Landing />
      </body>
    </>
  )
}

export default App
