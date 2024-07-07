import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // Write Authentication login
    // Check if token valid
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;