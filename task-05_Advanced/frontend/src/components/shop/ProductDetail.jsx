import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import AddToCartButton from "../CartBtn/Cartbtn";
import WishlistButton from "../WishListBtn/WishListBtn";
import BuyNowButton from "../BuyBtn/BuyBtn";

const products = Array.from({ length: 20 }).map((_, idx) => ({
  id: idx + 1,
  title: `Product ${idx + 1}`,
  img: `https://via.placeholder.com/400?text=Product+${idx + 1}`,
  price: (idx + 1) * 999,
  originalPrice: (idx + 1) * 1499,
  discount: `${10 + (idx % 50)}% off`,
  rating: (Math.random() * 2 + 3).toFixed(1),
  reviews: Math.floor(Math.random() * 2000),
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
  delivery: "Free delivery in 3 days",
  offers: ["10% off on card payment", "Buy 1 Get 1 Free"],
  colors: ["Red", "Blue", "Green"],
  sizes: ["S", "M", "L", "XL"],
  stock: Math.floor(Math.random() * 20) + 1,
  reviewsList: Array.from({ length: 5 }).map((_, i) => ({
    username: `User${i + 1}`,
    rating: Math.floor(Math.random() * 2) + 4,
    comment: "Great product! Highly recommend.",
  })),
}));

const ProductDetail = () => {

    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("cart")) || [];
    });
    


  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTotalPrice(quantity * product.price);
  }, [quantity, product.price]);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  const incrementQty = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decrementQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen py-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Image + Buttons */}
        {/* Image + Buttons */}
        <div className="flex-1 flex flex-col gap-4 w-full lg:w-auto lg:sticky lg:top-20">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-lg border"
        />
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <AddToCartButton product={product} cart={cart} setCart={setCart} variant="detail" />
          <BuyNowButton
            product={product}
            quantity={quantity}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
          <WishlistButton product={product} />
        </div>
        </div>


        {/* Product Info */}
        <div className="flex-1 flex flex-col space-y-6 overflow-auto max-h-[calc(100vh-80px)]">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} ratings)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              ₹{totalPrice}
            </span>
            <span className="line-through text-gray-500">
              ₹{product.originalPrice * quantity}
            </span>
            <span className="text-green-600 font-semibold">{product.discount}</span>
          </div>

          {/* Delivery */}
          <div className="text-sm text-gray-600">{product.delivery}</div>

          {/* Offers */}
          <div className="space-y-1">
            <h3 className="font-semibold text-sm sm:text-base">Available Offers</h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {product.offers.map((offer, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">{offer}</li>
              ))}
            </ul>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-1">Color</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-1">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-1">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementQty}
                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 dark:bg-white/20 dark:hover:bg-white/30"
              >
                -
              </button>
              <input
                type="number"
                min={1}
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center border px-2 py-1 rounded dark:text-white bg-transparent"
              />
              <button
                onClick={incrementQty}
                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 dark:bg-white/20 dark:hover:bg-white/30"
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-500 ml-2">Available: {product.stock}</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-1">Product Description</h3>
            <p className="text-gray-700 text-sm sm:text-base dark:text-gray-300">{product.description}</p>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base mb-2">Customer Reviews</h3>
            {product.reviewsList.map((rev, i) => (
              <div
                key={i}
                className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
              >
                <div className="flex items-center justify-between mb-2 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{rev.rating}★</span>
                  </div>
                  <span className="text-gray-500">{rev.username}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{rev.comment}</p>
              </div>
            ))}
          </div>

          <Link to="shop" className="text-sm sm:text-base text-blue-600 mt-4 inline-block">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
