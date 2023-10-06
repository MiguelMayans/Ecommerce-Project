import "./App.css"
import NavBar from './components/NavBar/NavBar'
import CartBtn from './components/CartBtn/CartBtn'
import Footer from './components/Footer/Footer'
import { RouterPaths } from './routes/RouterPaths.routes'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import AuthProvider from "./auth/context/AuthProvider"

function App() {

  return (
    <>
      <AuthProvider>
        <ShoppingCartProvider>
          <header className="flex flex-row font-custom text-xl sticky top-0 z-10">
            <NavBar />
            <CartBtn id={0} name={''} imgUrl={''} system={''} population={0} distance={''} description={''} price={0} />
          </header>

          <body>
            <RouterPaths />
            <Footer />
          </body>
        </ShoppingCartProvider>
      </AuthProvider>
    </>

  )
}

export default App
