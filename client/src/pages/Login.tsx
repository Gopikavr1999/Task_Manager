import React, { useState } from 'react'
import API from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setSuccess("");
    try {
      const res = await API.post("/api/user/login", {
        email,
        password
      });
      console.log("data::::", res.data);
      console.log("user::::", res.data.user);

      login(res.data.token, res.data.user)
      setSuccess("Login Successfuly");

    } catch (error: any) {
      setError(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }

  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-red-500 mb-2">{success}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" type="email" className="w-full p-2 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-blue-600 text-white rounded">
          {loading ? "Loading...." : "Login"}
        </button>
        {/* Create Account Link */}
        <div className="text-center text-sm text-gray-600 mt-3">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Create one
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
