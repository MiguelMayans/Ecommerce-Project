import { NavLink } from "react-router-dom"
import { PlanetInfo } from "../../assets/db/planets"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { FC } from "react"

export const PlanetCard: FC<PlanetInfo> = ({ name, imgUrl, population, price, id }: PlanetInfo) => {

    const { increaseCartQuantity } = useShoppingCart()



    return (

        <div className="flex flex-wrap justify-center mx-6 my-4">
            <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                <div className="bg-black duration-200  pr-1 pb-1">
                    <div className="bg-stroke-color flex items-center border-slate-900 border-2 duration-200 px-2 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                        <div className="w-[350px] h-[600px] bg-stroke-color flex flex-col font-custom text-white m-1">

                            <img src={imgUrl} alt={name} className='p-8' />
                            <NavLink to={`/${name}`}>
                                <h2 className='bg-secondary-color w-40 my-0 mx-auto mb-3 text-xl p-1'>{name}</h2>
                            </NavLink>
                            <p className="underline text-lg">Population</p>
                            <p>{population.toLocaleString()} Habitants</p>
                            <p className="underline text-lg">PRICE</p>
                            <p>{formatCurrency(price)}</p>
                            <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                                <button className="w-72 bg-black duration-200 mt-6">
                                    <div className="bg-detail-color flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                        <h4 className="duration-200 m-1 my-0 mx-auto flex flex-row">
                                            <div onClick={() => increaseCartQuantity(id)} className="items-center p-1">add to cart</div>
                                        </h4>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}