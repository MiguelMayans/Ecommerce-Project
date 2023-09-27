import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'
import Landing from './components/Landing/Landing'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <header className="flex flex-row font-custom text-xl">
        <NavBar />
        <CartBtn />
      </header>
      <body>
        <Landing />
        <Products />
        <Footer />
      </body>

    </>
  )
}

export default App
