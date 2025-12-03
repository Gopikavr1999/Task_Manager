import { useEffect, useState } from "react"
import API from "../../services/api";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const token = localStorage.getItem("token");
        const res = await API.get("/api/user/all",{
            headers:{ Authorization: `Bearer ${token}`}
        })
        setUsers(res.data.users);
    }

    const promoteToAdmin = async (userId: string) => {
        const token = localStorage.getItem("token");
        await API.put(`/api/user/update-role/${userId}`,
            {role : "admin"},
            {headers: {Authorization: `Bearer ${token}`}}
        );
        fetchUsers();
    }

    useEffect(() => {
        fetchUsers();
    },[])
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
            <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user:any)=>(
                <tr key={user._id} className="border-b">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                        {user.role === "employee"? (
                            <button 
                            onClick={() => promoteToAdmin(user._id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Promote to Admin
                            </button>
                        ) : (
                            <span className="text-green-700 font-semibold">Admin</span>
                        )}
                        </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
