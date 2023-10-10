
import { FC, useContext } from 'react'

import CartItem from '../../components/CartItem/CartItem'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import toast from 'react-hot-toast'
import { useApiContext } from '../../context/ApiContext'

type Props = {}

const Cart: FC = () => {

    const planets = useApiContext()

    const { cartItems } = useShoppingCart()


    const { isLogged } = useContext(AuthContext)

    const subtotal = cartItems.reduce((total, CartItem) => {
        const planet = planets.find(p => p.id === CartItem.id)
        return total + (planet?.price || 0) * CartItem.quantity
    }, 0)

    const notify = () => toast("You must be logged in to proceed to checkout")

    return (

        <> {subtotal === 0 ? <h2 className='font-custom text-2xl mt-20'>Your Cart is still empty!</h2> :
            <div className="bg-primary-color h-screen py-10 font-custom text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl mb-4 text-stroke-color">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className=" bg-stroke-color shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left font-semibold">
                                            <th>Destiny</th>
                                            <th>Price</th>
                                            <th>Tickets</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    {cartItems.map(item =>
                                        <CartItem key={item.id} {...item} />)
                                    }
                                </table>
                            </div>
                        </div>

                        <div className="md:w-1/3">
                            <div className="bg-stroke-color shadow-md p-6">
                                <h2 className="text-lg mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>{formatCurrency(subtotal / 21)}</span>
                                </div>
                                <br />
                                <div className="flex justify-between mb-2">
                                    <span>Total</span>
                                    <span>{formatCurrency(subtotal + (subtotal / 21))}</span>
                                </div>

                                <NavLink to={"/checkout"}>
                                    <div>
                                        <button onClick={isLogged === false ? notify : undefined} className="bg-secondary-color text-white py-2 px-4 mt-4 w-full" >Checkout</button>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        }
        </>

    )
}

export default Cart