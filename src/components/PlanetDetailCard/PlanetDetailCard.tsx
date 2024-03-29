import { useParams } from 'react-router-dom'
import { FC } from 'react'
import { useApi } from '../../hooks/useApi'

const PlanetDetailCard: FC = () => {

    const planets = useApi()

    const { name: nameParam } = useParams()

    const productDetails = planets ? planets.find((planet) => {
        return planet.name === nameParam
    }) : undefined

    if (!productDetails) return null

    const { name, imgUrl, population, system, distance, description } = productDetails

    return (

        <>
            <div className="flex flex-wrap justify-center mt-10">
                <div className="bg-black pr-1 pb-1">
                    <div className="bg-stroke-color flex items-center border-slate-900 border-2 px-2 py-2 -translate-x-1 -translate-y-1">
                        <div className="flex flex-row w-[1000px] h-auto mx-8 bg-stroke-color font-custom text-white">

                            <img src={imgUrl} alt={name} className='p-8 w-[450px] h-[450px] my-auto' />

                            <div className='mx-auto my-0 mt-10'>
                                <h2 className='bg-secondary-color w-56 my-0 mx-auto mb-6 text-3xl p-2'>{name}</h2>
                                <p className='mb-4'>{description}</p>
                                <p className='underline mb-4 text-lg'>Population</p>
                                <p>{population.toLocaleString()} Habitants</p>
                                <p className='underline mb-4 mt-2 text-lg'>System</p>
                                <p>{system}</p>
                                <p className='underline mb-4 mt-2 text-lg'>Distance from Earth</p>
                                <p className='mb-6'>{distance}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PlanetDetailCard