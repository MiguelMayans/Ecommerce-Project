import { Navigate, Route, Routes, } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Products from "../pages/Products/Products"
import About from "../pages/About/About"
import Cart from "../pages/Cart/Cart"


export const RouterPaths = () => {

    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/travel' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
