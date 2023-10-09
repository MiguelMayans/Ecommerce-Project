import React, { FC } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utils/formatCurrency'



type Props = {}

const Checkout: FC = (props: Props) => {

    const { cartItems } = useShoppingCart()

    return (
        <>
            <div className='font-custom text-2xl mt-10'>Thank you for your purchase!</div>

        </>

    )
}

export default Checkout