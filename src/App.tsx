import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'
import Landing from './components/Landing/Landing'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Checkout from './components/Checkout/Cart'
import Cart from './components/Checkout/Cart'


function App() {

  return (
    <>
      <header className="flex flex-row font-custom text-xl sticky top-0 z-10">
        <NavBar />
        <CartBtn />
      </header>

      <body>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/travel' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </body>
    </>
  )
}

export default App
