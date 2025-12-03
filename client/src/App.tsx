import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import { useAuth } from './contexts/AuthContext';
import UsersPage from './pages/admin/UsersPage';
import TasksPage from './pages/admin/TasksPage';
function App() {
  const {token} = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} replace />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />

      {/* Employee Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <UsersPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/tasks"
        element={
          <AdminRoute>
            <TasksPage />
          </AdminRoute>
        }
      />
    </Routes>
  )
}

export default App
