import { useEffect, useState } from "react"
import API from "../../services/api";

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async() => {
        
        const token = localStorage.getItem("token");
        const res = await API.get("/api/task?limmit=0",{
            headers: {Authorization:`Bearer ${token}`}
        });
        console.log("task fetch");
        setTasks(res.data.tasks);
    };

    useEffect(() => {
        fetchTasks();
    },[]);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Status</th>
            <th className="p-3">Created By</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task: any) => (
            <tr key={task._id} className="border-b">
              <td className="p-3">{task.title}</td>
              <td className="p-3">{task.priority}</td>
              <td className="p-3">{task.status}</td>
              <td className="p-3">{task.createdBy?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksPage
