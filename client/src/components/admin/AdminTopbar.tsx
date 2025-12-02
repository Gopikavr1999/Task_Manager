import { useAuth } from "../../contexts/AuthContext";

const AdminTopbar = () => {
    const {user} = useAuth();

    return(
        <div className="w-full p-4 bg-gray-100 shadow-sm flex justify-between">
            <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>
            <div className="font-medium">{user?.role.toUpperCase()}</div>
        </div>
    )
};

export default AdminTopbar;