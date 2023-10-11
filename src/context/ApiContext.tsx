import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";

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

type ApiContextProviderProps = {
    children: ReactNode
}

const ApiContext = createContext({} as PlanetInfo[])

export function useApiContext() {
    return useContext(ApiContext)
}

export function ApiContextProvider({ children }: ApiContextProviderProps) {

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

    fetchPlanetsFromApi()

    useMemo(() => fetchPlanetsFromApi(), [fetchPlanetsFromApi])

    return (
        <ApiContext.Provider value={planets}>
            {children}
        </ApiContext.Provider>
    )
}

