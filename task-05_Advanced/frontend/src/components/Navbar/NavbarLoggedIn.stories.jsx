import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar/LoggedIn",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

// ✅ Static (no backend) version of logged-in Navbar
export const LoggedInNavbar = () => {
  // Simulate logged-in state
  localStorage.setItem("token", "dummy-token");
  window.dispatchEvent(new Event("storage"));

  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar handleOrderPopup={() => {}} />
      </div>
    </BrowserRouter>
  );
};
