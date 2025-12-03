import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type React from "react";

const ProtectedRoute = ({children}: {children: React.ReactNode}) =>{
    const {token, loadingAuth} = useAuth();

    if(loadingAuth){
        return <div className="p-6 text-center">Loading.....</div>
    }

    if(!token){
        return <Navigate to="/login" replace />
    }

    return <>{children} </>;
}

export default ProtectedRoute;