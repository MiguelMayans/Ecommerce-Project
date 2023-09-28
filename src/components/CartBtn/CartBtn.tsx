import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CartBtn = (props: Props) => {
    return (
        <>
            <div className="flex flex-row ml-80 my-2">
                <div className=" bg-primay-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 w-full hover:bg-secondary-color">
                    <h4 className="duration-200 m-1">
                        <div className="flex justify-start items-center">LOGIN</div>
                    </h4>
                </div>
            </div>

            <div className="flex flex-row ml-auto my-2">
                <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                    <Link to={"/cart"}>
                        <button className="w-full bg-stroke-color duration-200">
                            <div className=" bg-secondary-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                <h4 className="duration-200 m-1">
                                    <div className="flex justify-start items-center">CART</div>
                                </h4>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default CartBtn