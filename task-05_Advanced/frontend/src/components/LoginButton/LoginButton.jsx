// LoginButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const LoginButton = ({ onClick }) => {
  return (
    <Link to="/login">
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-[5px] flex items-center gap-2"
    >
      Login
    </button>
    </Link>
  );
};

export default LoginButton;
