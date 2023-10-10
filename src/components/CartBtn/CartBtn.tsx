import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { PlanetInfo } from "../../assets/db/planets"
import { AuthContext } from '../../auth/context/AuthContext'

type Props = {}

const CartBtn = ({ id }: PlanetInfo) => {

    const { cartQuantity } = useShoppingCart()
    const { login, logout, user, isLogged } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogout = () => {
        isLogged
        logout();
        navigate("/", {
            replace: true
        })
    }

    const onLogin = () => {
        isLogged
        login("Miguel")
        navigate("/", {
            replace: true
        })
    }

    return (
        <> {isLogged === false ?
            <div className="flex flex-row ml-72 my-2">
                <button onClick={onLogin} className="flex justify-start items-center">
                    <div className="bg-primay-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 w-full hover:bg-secondary-color">
                        <h4 className="duration-200 m-1">
                            LOGIN
                        </h4>
                    </div>
                </button>
            </div>

            : <div className="flex flex-row ml-32 my-2">
                <button onClick={onLogout}>
                    <div className="bg-primay-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 w-full hover:bg-secondary-color">
                        <h4 className="duration-200 m-1">
                            <div className="flex justify-start items-center">{`Welcome ${user && user?.name}`}</div>
                        </h4>
                    </div>
                </button>
            </div>
        }

            <div className="flex flex-row ml-auto my-2 relative">
                <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                    <NavLink to={"/cart"}>
                        <button className="w-full bg-stroke-color duration-200">
                            <div className="bg-secondary-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                <h4 className="duration-200 m-1">
                                    <div className="flex justify-start items-center gap-2"><FaShoppingCart />CART</div>
                                    <div className='text-white h-8 w-8 absolute bg-stroke-color rounded-full border-black border-2 right-0'>{cartQuantity}</div>
                                </h4>
                            </div>
                        </button>
                    </NavLink>
                </div>
            </div>
        </>

    )
}

export default CartBtn