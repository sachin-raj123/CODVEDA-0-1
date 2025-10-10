import React from "react";

const AddToCartButton = ({ product, cart, setCart, variant = "card" }) => {
  const addToCart = () => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Product already in cart!");
      return;
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  // Conditional Tailwind classes based on variant
  const className =
    variant === "card"
      ? "w-full bg-primary hover:bg-primary/70 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
      : variant === "detail"
      ? "flex-1 bg-primary text-white py-3 rounded font-semibold hover:bg-primary/80 transition"
      : "w-auto bg-primary text-white py-3 px-4 rounded font-semibold";

  return (
    <button onClick={addToCart} className={className}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
