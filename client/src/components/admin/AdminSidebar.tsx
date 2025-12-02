import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
    return(
        <div className="w-64 bg-gray-900 text-white h-screen p-5 space-y-5">
           <h2 className="text-xl font-semibold">Admin Panel</h2>

           <nav className="space-y-3">
            <NavLink to="/admin-dashboard" className="block hover:text-blue-400">
                Dashboard
            </NavLink>
            <NavLink to="/admin/users" className="block hover:text-blue-400">
                Users
            </NavLink>
            <NavLink to="/admin/tasks" className="block hover:text-blue-400">
                Tasks
            </NavLink>
           </nav>
        </div>
    )
};

export default AdminSidebar;