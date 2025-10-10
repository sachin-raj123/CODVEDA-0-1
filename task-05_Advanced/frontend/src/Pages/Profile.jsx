import React, { useState, useEffect } from "react";
import Sidebar from "../components/profile/Sidebar";
import MyCart from "../components/profile/MyCart";
import MyOrders from "../components/profile/MyOrders";
import MyProfile from "../components/profile/MyProfile";
import MyWishlist from "../components/profile/Wishlist";
import Setting from "../components/profile/Setting";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Example: decode username from localStorage or token
    const storedUser = localStorage.getItem("username") || "User";
    setUsername(storedUser);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <MyProfile />;
      case "orders":
        return <MyOrders />;
      case "cart":
        return <MyCart />;
        case "wishlist":
        return <MyWishlist />;
        case "settings":
        return <Setting />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 dark:">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Welcome, {username}! 👋
      </h2>

      <div className="flex gap-6">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Dynamic Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
