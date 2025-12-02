import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import AdminDashboard from './pages/AdminDashboard';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
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
    </Routes>
  )
}

export default App
