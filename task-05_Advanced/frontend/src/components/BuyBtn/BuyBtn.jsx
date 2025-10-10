import React from "react";

const BuyNowButton = ({ product, quantity, selectedColor, selectedSize }) => {
  const handleBuyNow = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
      orderDate: new Date().toLocaleString(),
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("✅ Your order is confirmed!");
  };

  return (
    <button
      onClick={handleBuyNow}
      className="flex-1 bg-orange-500 text-white py-2 sm:py-3 rounded font-semibold hover:bg-orange-400 transition"
    >
      Buy Now
    </button>
  );
};

export default BuyNowButton;
