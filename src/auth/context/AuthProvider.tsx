import { useReducer, ReactNode, useState } from "react";
import authReducer from "./AuthReducer";
import { LogActions } from "./AuthReducer";
import { AuthContext } from "./AuthContext";

const init = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    return {
        isLogged: !!user,
        user
    }
}

type AuthProviderProps = {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = "") => {
        const user = {
            id: 1,
            name,
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({ type: LogActions.login, payload: user })
    }

    const logout = () => {
        localStorage.removeItem("user")

        dispatch({ type: LogActions.logout })
    }

    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider