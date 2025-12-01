// import React from 'react'

import { useAuth } from "../contexts/AuthContext"

const Dashboard = () => {
  const {user, logout} = useAuth();
  
  return (
     <div className="p-6">
      <h1 className="text-2xl">Welcome, {user?.name}</h1>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
