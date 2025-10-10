import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Delete item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 dark:text-white">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="mb-4 border-b pb-2 flex justify-between items-center"
          >
            {/* Image box with link */}
            <Link to={`/shop/product/${item.id}`} className="w-24 h-24 mr-4 flex-shrink-0">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No Image</span>
                )}
              </div>
            </Link>

            {/* Product details with link */}
            <div className="flex-1">
              <Link to={`/shop/product/${item.id}`}>
                <p className="font-semibold hover:underline">{item.name}</p>
              </Link>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>

            {/* Delete button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCart;
