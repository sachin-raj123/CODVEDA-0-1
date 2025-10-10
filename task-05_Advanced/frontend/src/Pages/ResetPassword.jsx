import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      // Backend endpoint for sending password reset link
      await axios.post("http://127.0.0.1:8000/api/users/reset-password/", {
        email,
      });

      setSuccess("Password reset link sent! Check your email.");
      setError("");
      setEmail("");
    } catch (err) {
      setError("Error sending reset link. Make sure the email is correct.");
      setSuccess("");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 w-[90%] max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Reset Password 🔒
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Enter your email to receive password reset instructions
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
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

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          {success && <p className="text-green-500 text-xs text-center">{success}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition duration-200 shadow-md"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
