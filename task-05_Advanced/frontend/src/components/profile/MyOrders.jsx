import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-4 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 border-b pb-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
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
            </div>
            
            <div className="flex-1">
              <Link to={`/product/${item.id}`} className="font-semibold text-blue-600">
                {item.title}
              </Link>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p className="text-gray-500 text-sm">Ordered on: {item.orderDate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
