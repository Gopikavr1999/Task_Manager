import React, { useState } from 'react'
import API from '../services/api';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await API.post("/api/user/signup", {
        name,
        email,
        password
      })
      setSuccess("Account created successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      setError(error?.respose?.data?.message || "Registration failed..")
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-center text-xl font-semibold mb-4">Register</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={name} onChange={e => setName(e.target.value)} required placeholder="Name" className="w-full p-2 border rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" type="email" className="w-full p-2 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-blue-600 text-white rounded">
          {loading ? "Creating.." : "Create Account"}
        </button>
      </form>
    </div>
  )
}

export default Register
