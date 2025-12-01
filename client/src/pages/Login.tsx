import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async () => {

  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
      {/* {error && <div className="text-red-500 mb-2">{error}</div>} */}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" type="email" className="w-full p-2 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}

export default Login
