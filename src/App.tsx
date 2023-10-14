import "./App.css"
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'
import Footer from './components/Footer/Footer'
import { RouterPaths } from './routes/RouterPaths.routes'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import AuthProvider from "./auth/context/AuthProvider"
import { Toaster } from "react-hot-toast"
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const helmetContext = {}
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <AuthProvider>
          <ShoppingCartProvider>
            <Toaster toastOptions={{ className: "font-custom" }} />
            <header className="flex flex-row font-custom text-xl sticky top-0 z-10">
              <NavBar />
              <CartBtn id={0} name={''} imgUrl={''} system={''} population={0} distance={''} description={''} price={0} />
            </header>
            <RouterPaths />
            <Footer />
          </ShoppingCartProvider>
        </AuthProvider>
      </HelmetProvider>
    </>

  )
}

export default App
