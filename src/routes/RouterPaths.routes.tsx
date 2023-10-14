import { Route, Routes, } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes.routes"
import { Suspense, lazy } from "react"
import Landing from "../pages/Landing/Landing"
import Checkout from "../pages/Checkout/Checkout"

const Products = lazy(() => import("../pages/Products/Products"))
const ProductDetail = lazy(() => import("../pages/ProductDetail/ProductDetail"))
const About = lazy(() => import("../pages/About/About"))
const Cart = lazy(() => import("../pages/Cart/Cart"))

export const RouterPaths = () => {

    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/travel' element={<Suspense fallback={<div className="font-custom mt-40">Loading...</div>}><Products /></Suspense>} />
            <Route path="/:name" element={<Suspense fallback={<div className="font-custom mt-40">Loading...</div>}><ProductDetail /></Suspense>} />
            <Route path='/about' element={<Suspense fallback={<div className="font-custom mt-40">Loading...</div>}><About /></Suspense>} />
            <Route path='/cart' element={<Suspense fallback={<div className="font-custom mt-40">Loading...</div>}><Cart /></Suspense>} />

            <Route path="/checkout" element={
                <PrivateRoutes>
                    <Checkout />
                </PrivateRoutes>}>
            </Route>
        </Routes>
    )
}
