import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Setting = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settingsOptions = [
    {
      title: "Account Settings",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Change Username</li>
          <li>Update Email</li>
          <li>Change Password</li>
        </ul>
      ),
    },
    {
      title: "Payment Methods",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Add/Remove Credit/Debit Cards</li>
          <li>UPI & Wallets</li>
          <li>Transaction History</li>
        </ul>
      ),
    },
    {
      title: "Addresses",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Add/Remove Shipping Address</li>
          <li>Set Default Address</li>
        </ul>
      ),
    },
    {
      title: "Notifications",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Email Notifications</li>
          <li>SMS Alerts</li>
          <li>Push Notifications</li>
        </ul>
      ),
    },
    {
      title: "Wishlist Management",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>View Wishlist Items</li>
          <li>Remove Items</li>
          <li>Move to Cart</li>
        </ul>
      ),
    },
    {
      title: "Order Settings",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Track Orders</li>
          <li>Cancel/Return Orders</li>
          <li>Set Default Payment for Orders</li>
        </ul>
      ),
    },
    {
      title: "Security & Privacy",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Two-Factor Authentication</li>
          <li>Manage Devices</li>
          <li>Activity Logs</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Settings
      </h2>

      {settingsOptions.map((option, index) => (
        <div key={index} className="border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left text-gray-800 dark:text-white font-medium hover:text-primary transition"
          >
            {option.title}
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeIndex === index && (
            <div className="pb-4 pl-4">
              {option.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Setting;
