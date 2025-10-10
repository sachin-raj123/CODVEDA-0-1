import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/users/login/", {
      email,       // <- yaha email
      password
    });
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("username", response.data.username);
    alert("Login successful!");
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("authChanged"));    // 👇 ye line add karo — Navbar turant update karega
    navigate("/");
    setError("");

  } catch (err) {
    setError("Invalid email or password");
  }
};


  


  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div
        data-aos="zoom-in"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 w-[90%] max-w-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Log in to continue exploring Shopsy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
              Username
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
