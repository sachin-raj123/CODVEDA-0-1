import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    setSuccess("");
    return;
  }

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/users/signup/", {
      username,
      email,
      password,
    });

    // Token fetch kar ke localStorage me save
    if (response.data.access && response.data.refresh) {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
    }

    setSuccess("Account created successfully! You can now log in.");
    setError("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  } catch (err) {
    setError(
      err.response?.data?.message || "Error creating account. Try again!"
    );
    setSuccess("");
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
            Create Account ✨
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Join Shopsy and start exploring today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
              Email
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
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          {success && (
            <p className="text-green-500 text-xs text-center">{success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition duration-200 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
