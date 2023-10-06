import React, { ReactNode, useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'


type PrivateRoutesProps = {
    children: ReactNode
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {

    const { isLogged } = useContext(AuthContext)

    return (
        isLogged ? children : <Navigate to={"/cart"} />
    )
}

export default PrivateRoutes


