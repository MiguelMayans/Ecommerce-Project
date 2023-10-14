import { useCallback, useMemo, useState } from "react";

export type PlanetInfo = {
    id: number;
    name: string;
    imgUrl: string;
    system: string;
    population: number;
    distance: string;
    description: string;
    price: number;
}

export function useApi() {

    const url = import.meta.env.VITE_API_BASE_URL

    const [planets, setPlanets] = useState<PlanetInfo[]>([])

    const fetchPlanetsFromApi = useCallback(async () => {
        try {
            const response = await fetch(url)
            const data: PlanetInfo[] = await response.json()
            setPlanets(data)
        }
        catch (error) {
            console.error(`Found an error fetching data from ${url}:`, error)
        }
    }, [url])

    useMemo(() => fetchPlanetsFromApi(), [fetchPlanetsFromApi])

    return planets
}

