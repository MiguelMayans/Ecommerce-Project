
import { useSearchParams } from 'react-router-dom'
import planets from '../../assets/db/planets'
import { PlanetCard } from '../../components/PlanetCard/PlanetCard'
import React, { FC, useId } from 'react'

type Props = {

}

const Products: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") ?? ""

    const listId = useId()

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target
        setSearchParams({ q: value })
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
                            <PlanetCard {...planet} />
                        </li>
                    )}
            </ul>
        </>
    )
}

export default Products