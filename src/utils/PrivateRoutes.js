import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = JSON.parse(localStorage.getItem("user"))
    
    return(
        auth.token ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes