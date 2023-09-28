import React from 'react'

type Props = {}

const Cart = (props: Props) => {
    return (
        <>
            <div className="bg-primary-color h-screen py-10 font-custom text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl mb-4 text-stroke-color">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className=" bg-stroke-color shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left font-semibold">
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src="./src/assets/img/Mercurio.jpeg" alt="Product image"></img>
                                                    <span className="font-semibold">Mercury</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-left">$19.99</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className=" py-2 px-4 mr-2 bg-secondary-color">-</button>
                                                    <span className="text-center w-8">1</span>
                                                    <button className=" py-2 px-4 ml-2 bg-secondary-color">+</button>
                                                </div>
                                            </td>
                                            <td className="py-4 text-left">$19.99</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="md:w-1/4">
                            <div className="bg-stroke-color shadow-md p-6">
                                <h2 className="text-lg mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$19.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$1.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span>Total</span>
                                    <span>$21.98</span>
                                </div>
                                <button className="bg-secondary-color text-white py-2 px-4 mt-4 w-full">Checkout</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart