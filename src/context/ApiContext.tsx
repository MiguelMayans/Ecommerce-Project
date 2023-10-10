import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type PlanetInfo = {
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

    useEffect(() => {
        const fetchPlanetsFromApi = async () => {
            const response = await fetch(url)
            const data: PlanetInfo[] = await response.json()
            setPlanets(data)
        }
        fetchPlanetsFromApi()

    }, [url])

    return (
        <ApiContext.Provider value={planets}>
            {children}
        </ApiContext.Provider>
    )

}