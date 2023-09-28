import React, { useState } from 'react'
import planets from '../../assets/db/planets'

type Props = {}

const Products = (props: Props) => {


    const PlanetCard = () => planets.map(planet => {

        const [count, setCount] = useState(0)

        function decrementCount() {
            setCount(prevCount => prevCount - 1)
        }

        function incrementCount() {
            setCount(prevCount => prevCount + 1)
        }

        return (
            <>
                <div className="flex flex-wrap justify-center mx-6 my-4">
                    <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                        <div className="bg-black duration-200  pr-1 pb-1">
                            <div className=" bg-stroke-color flex items-center border-slate-900 border-2 duration-200 px-2 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                <div className=" w-[350px] h-[600px] bg-stroke-color flex flex-col font-custom text-white">
                                    <img src={planet.imgUrl} alt={planet.name} className='p-8' />
                                    <h2 className=' bg-secondary-color w-40 my-0 mx-auto mb-3 text-xl p-1'>{planet.name}</h2>
                                    <p>Population</p>
                                    <p>{planet.population} Habitants</p>
                                    <p>PRICE</p>
                                    <p>{planet.price} $</p>
                                    <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                                        <button className="w-80 bg-black duration-200 mt-6">
                                            <div className=" bg-detail-color flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                                <h4 className="duration-200 m-1 my-0 mx-auto flex flex-row">
                                                    <button onClick={decrementCount} className='bg-stroke-color w-6'>-</button>
                                                    <span className='w-9 p-1 text-center'>{count}</span>
                                                    <button onClick={incrementCount} className='bg-stroke-color w-6'>+</button>
                                                    <div className="items-center p-1">TICKETS</div>
                                                </h4>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="grid grid-cols-3 gap-14 mt-10">
                <PlanetCard />
            </div >
        </>
    )
}

export default Products