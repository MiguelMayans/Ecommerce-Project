import { createContext } from "react";

type AuthContextProps = {

    user: { id: number, name: string } | null;
    login: (name: string) => void;
    logout: () => void;
    isLogged: boolean
}

export const AuthContext = createContext({} as AuthContextProps);
