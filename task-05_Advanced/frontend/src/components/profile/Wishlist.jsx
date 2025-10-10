import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="mb-4 border-b pb-2 flex flex-col sm:flex-row gap-4 items-center"
          >
            {/* Image */}
            <Link to={`/shop/product/${item.id}`} className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
              )}
            </Link>

            {/* Product info */}
            <div className="flex-1">
              <Link to={`/product/${item.id}`} className="font-semibold text-lg hover:underline">
                {item.title}
              </Link>
              <p className="text-gray-700 dark:text-white">₹{item.price}</p>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyWishlist;
