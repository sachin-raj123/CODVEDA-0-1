import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user info from localStorage or use default
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main Street, City, Country",
      image: "https://via.placeholder.com/150",
    };
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    alert("Profile updated!");
  };

  return (
    <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 shadow gap-24">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        My Profile
      </h3>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Left: Profile Image */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded border ${
                isEditing
                  ? "border-gray-400 focus:border-primary focus:ring focus:ring-primary/30"
                  : "border-gray-200 bg-gray-100 dark:bg-gray-700"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded border ${
                isEditing
                  ? "border-gray-400 focus:border-primary focus:ring focus:ring-primary/30"
                  : "border-gray-200 bg-gray-100 dark:bg-gray-700"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded border ${
                isEditing
                  ? "border-gray-400 focus:border-primary focus:ring focus:ring-primary/30"
                  : "border-gray-200 bg-gray-100 dark:bg-gray-700"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              name="image"
              value={user.image}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded border ${
                isEditing
                  ? "border-gray-400 focus:border-primary focus:ring focus:ring-primary/30"
                  : "border-gray-200 bg-gray-100 dark:bg-gray-700"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
