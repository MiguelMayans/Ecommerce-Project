
import planets from '../../assets/db/planets'
import { PlanetCard } from '../../components/PlanetCard/PlanetCard'

type Props = {

}

const Products = () => {

    return (
        <>
            <div className="grid grid-cols-3 gap-14 mt-10">
                {planets.map(planet =>
                    <PlanetCard {...planet} />
                )}
            </div >
        </>
    )
}

export default Products