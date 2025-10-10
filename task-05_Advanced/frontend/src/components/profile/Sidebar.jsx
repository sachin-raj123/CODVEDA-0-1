import React from "react";
import { FaUser, FaBox, FaShoppingCart, FaSignOutAlt, FaCog, FaHeart, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "profile", name: "My Profile", icon: <FaUser /> },
    { id: "orders", name: "My Orders", icon: <FaBox /> },
    { id: "cart", name: "My Cart", icon: <FaShoppingCart /> },
    { id: "settings", name: "Account Settings", icon: <FaCog /> },
    { id: "wishlist", name: "Wishlist", icon: <FaHeart /> },
    { id: "addresses", name: "Addresses", icon: <FaMapMarkerAlt /> },
    { id: "payments", name: "Payment Methods", icon: <FaCreditCard /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col gap-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`flex items-center gap-3 p-3 rounded-lg text-left text-gray-700 dark:text-gray-200 hover:bg-primary/10 transition ${
            activeSection === item.id ? "bg-primary/20 font-semibold" : ""
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          {item.name}
        </button>
      ))}

      <hr className="my-3 border-gray-300 dark:border-gray-700" />

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-100 dark:hover:bg-red-800 transition"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
