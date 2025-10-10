import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const WishlistButton = ({ product }) => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    let updated;
    if (isInWishlist) {
      updated = wishlist.filter((item) => item.id !== product.id);
    } else {
      updated = [...wishlist, product];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleWishlist}
      className="flex items-center justify-center p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isInWishlist ? (
        <FaHeart className="text-red-500 text-lg sm:text-xl" />
      ) : (
        <FaRegHeart className="text-gray-500 text-lg sm:text-xl" />
      )}
    </button>
  );
};

export default WishlistButton;
