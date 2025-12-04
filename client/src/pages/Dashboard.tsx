import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const {user, logout} = useAuth();
  const [recentTasks, setRecentTasks] = useState([]);

  const fetchRecentTasks = async()=>{
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/api/task?limit=5&order=desc&sortBy=createdAt",{
        headers:{Authorization:`Bearer ${token}`}
      })
      setRecentTasks(res.data.tasks)
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  }
  useEffect(() => {
    fetchRecentTasks();
  },[])
  
  return (
     <div className="p-6">
       {/* WELCOME HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Welcome, {user?.name} 👋</h1>
        <p className="text-gray-600">Manage your daily work efficiently.</p>
      </div>
      {/* QUICK ACTIONS */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/tasks/create"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          ➕ Create Task
        </Link>

        <Link
          to="/tasks"
          className="bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          📋 View All Tasks
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

    {/* RECENT TASKS */}
      <h2 className="text-xl mb-4 font-semibold">Recent Tasks</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {recentTasks.length > 0 ? (
            recentTasks.map((task: any) => (
              <tr key={task._id} className="border-b">
                <td className="p-3">{task.title}</td>
                <td className="p-3">{task.priority}</td>
                <td className="p-3">{task.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center p-3 text-gray-500">
                No recent tasks
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default Dashboard
