import { Navigate, Route, Routes, } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes.routes"
import { Suspense, lazy } from "react"
import Landing from "../pages/Landing/Landing"

const Products = lazy(() => import("../pages/Products/Products"))
const ProductDetail = lazy(() => import("../pages/ProductDetail/ProductDetail"))
const About = lazy(() => import("../pages/About/About"))
const Cart = lazy(() => import("../pages/Cart/Cart"))
const Checkout = lazy(() => import("../pages/Checkout/Checkout"))
Landing

export const RouterPaths = () => {

    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/travel' element={<Suspense fallback={<div className="font-custom">Loading...</div>}><Products /></Suspense>} />
            <Route path="/:name" element={<Suspense fallback="Loading..."><ProductDetail /></Suspense>} />
            <Route path='/about' element={<Suspense fallback="Loading..."><About /></Suspense>} />
            <Route path='/cart' element={<Suspense fallback="Loading..."><Cart /></Suspense>} />

            <Route path="/checkout" element={
                <PrivateRoutes>
                    <Checkout />
                </PrivateRoutes>}>
            </Route>
        </Routes>
    )
}
