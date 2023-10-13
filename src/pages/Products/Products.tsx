
import { useSearchParams } from 'react-router-dom'
import React, { FC, Suspense, lazy, startTransition, useId } from 'react'
import { useApiContext } from '../../context/ApiContext'
import CardLoader from '../../components/Loaders/CardLoader'


type Props = {

}

const Products: FC = () => {

    const PlanetCard = lazy(() => import('../../components/PlanetCard/PlanetCard'))

    const planets = useApiContext()

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") ?? ""

    const listId = useId()

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target
        startTransition(() => {
            setSearchParams({ q: value })
        })
    }

    return (
        <>
            <input className="border border-black py-2 px-3 bg-stroke-color text-white font-custom mt-8" type="search" value={query} name="filter" id="search" placeholder='Filter by Planet' onChange={handleInput} />

            <ul className="grid grid-cols-3 gap-14 mt-8">
                {planets
                    .filter(({ name }) => {
                        if (!query) return true
                        if (query) {
                            const planetNametoLowerCase = name.toLowerCase()
                            return planetNametoLowerCase.includes(query.toLowerCase())
                        }
                    })
                    .map(planet =>
                        <li key={listId + planet.name}>
                            <Suspense fallback={<CardLoader />}>
                                <PlanetCard {...planet} />
                            </Suspense>
                        </li>

                    )}
            </ul>
        </>
    )
}

export default Products