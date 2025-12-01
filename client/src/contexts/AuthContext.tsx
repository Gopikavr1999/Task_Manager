import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/userTypes";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    user: User | null;
    token: string | null;
    login:(token:string, user: User) => void;
    logout:() => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    console.log("user",user);
    
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if(savedToken && savedUser){
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    },[]);

    const login = (token: string, user: User) =>{
        localStorage.setItem("token",token);
        localStorage.setItem("user", JSON.stringify(user));

        setToken(token);
        setUser(user);
        
        navigate("/dashboard");
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);

        navigate("/login")
    }
    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be inside AuthProvider");
    return ctx;
}