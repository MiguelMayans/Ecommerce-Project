import { Navigate, Route, Routes, } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Products from "../pages/Products/Products"
import About from "../pages/About/About"
import Checkout from "../pages/Checkout/Checkout"
import Cart from "../pages/Cart/Cart"

import PrivateRoutes from "./PrivateRoutes.routes"
import ProductDetail from "../pages/ProductDetail/ProductDetail"


export const RouterPaths = () => {

    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/travel' element={<Products />} />
            <Route path="/:name" element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />

            <Route path="/checkout" element={
                <PrivateRoutes>
                    <Checkout />
                </PrivateRoutes>}>
            </Route>
        </Routes>
    )
}
