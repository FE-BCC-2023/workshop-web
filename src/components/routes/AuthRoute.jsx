import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const AuthRoute = () => {
    if (window.localStorage.getItem('token'))
        return <Navigate to="/" />

    return <Outlet />
}

export default AuthRoute;
