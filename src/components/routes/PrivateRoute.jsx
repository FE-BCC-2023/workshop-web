import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const PrivateRoute = () => {
    if(window.localStorage.getItem('token')) 
        return <Outlet/>

    return <Navigate to="/login"/>
}
 
export default PrivateRoute;
