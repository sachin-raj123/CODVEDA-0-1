import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../CartBtn/Cartbtn";

const ProductCards = ({ selectedCategory }) => {


  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  
  // 🔹 Generate mock products
  const allProducts = useMemo(() => {
    const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"];
    const brands = ["Nike", "Adidas", "Apple", "Samsung", "Puma", "Sony"];
    const colors = ["red", "blue", "green"];
    const genders = ["Male", "Female", "Unisex"];
    const sizes = ["S", "M", "L", "XL"];
    const ageGroups = ["Kids", "Teens", "Adults"];
    const discounts = [10, 20, 30, 50];

    return Array.from({ length: 400 }).map((_, idx) => {
      const category = categories[idx % categories.length];
      const brand = brands[idx % brands.length];
      const color = colors[idx % colors.length];
      const gender = genders[idx % genders.length];
      const size = sizes[idx % sizes.length];
      const ageGroup = ageGroups[idx % ageGroups.length];
      const discountValue = discounts[idx % discounts.length];
      const priceValue = (idx + 1) * 199;

      return {
        id: idx + 1,
        category,
        brand,
        color,
        gender,
        size,
        ageGroup,
        discountValue,
        priceValue,
        name: `${brand} ${category} Product ${idx + 1}`,
        price: `₹${priceValue}`,
        originalPrice: `₹${(idx + 1) * 299}`,
        discount: `${discountValue}% off`,
        image: `https://via.placeholder.com/300?text=${brand}+${category}+${idx + 1}`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        reviews: Math.floor(Math.random() * 2000).toLocaleString(),
        delivery: "Free delivery",
        badge: ["Trending", "Bestseller", "New"][idx % 3],
        available: idx % 7 !== 0, // some out of stock
        isNew: idx % 9 === 0, // some new arrivals
      };
    });
  }, []);

  // 🔹 Filters
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    gender: "",
    sizes: [],
    ageGroups: [],
    minPrice: "",
    maxPrice: "",
    discounts: [],
    minRating: "",
    fAssured: false,
    offers: false,
    newArrivals: false,
    availability: false,
  });

  const toggleFilter = (key, value, single = false) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (single) {
        updated[key] = value;
      } else {
        const current = new Set(prev[key]);
        current.has(value) ? current.delete(value) : current.add(value);
        updated[key] = Array.from(current);
      }
      return updated;
    });
  };

  // 🔹 Apply filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
      if (filters.colors.length && !filters.colors.includes(p.color)) return false;
      if (filters.gender && p.gender !== filters.gender) return false;
      if (filters.sizes.length && !filters.sizes.includes(p.size)) return false;
      if (filters.ageGroups.length && !filters.ageGroups.includes(p.ageGroup)) return false;
      if (filters.minPrice && p.priceValue < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.priceValue > Number(filters.maxPrice)) return false;
      if (filters.discounts.length && !filters.discounts.includes(`${p.discountValue}%`)) return false;
      if (filters.minRating && p.rating < Number(filters.minRating)) return false;
      if (filters.availability && !p.available) return false;
      if (filters.newArrivals && !p.isNew) return false;
      return true;
    });
  }, [allProducts, filters, selectedCategory]);


// // 🔹 Add to Cart function
// const addToCart = (product) => {
//   // Check if product already exists
//   const exists = cart.find((item) => item.id === product.id);
//   if (exists) {
//     alert("Product already in cart!");
//     return;
//   }

//   // Add product to cart
//   const updatedCart = [...cart, { ...product, quantity: 1 }];
//   setCart(updatedCart); // update React state
//   localStorage.setItem("cart", JSON.stringify(updatedCart)); // update localStorage
//   alert("Product added to cart!");
// };


 



  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / cardsPerPage);
  const start = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredProducts.slice(start, start + cardsPerPage);

  const renderStars = (rating) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800" id="our_products">
      <div id="trending"  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing deals on top-quality products. Shop with confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar (Same UI, now functional) */}
          <aside className="w-full lg:w-1/4 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md space-y-6">
            <h3 className="text-lg font-semibold mb-4">Filter & Sort</h3>

            {/* Categories */}
            <div>
              <h4 className="font-medium mb-2">CATEGORIES</h4>
              {["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"].map((cat) => (
                <label key={cat} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(cat)}
                    onChange={() => toggleFilter("categories", cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Brand */}
            <div>
              <h4 className="font-medium mb-2">BRAND</h4>
              {["Nike", "Adidas", "Apple", "Samsung", "Puma", "Sony"].map((brand) => (
                <label key={brand} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => toggleFilter("brands", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>

            {/* Color */}
            <div>
              <h4 className="font-medium mb-2">COLOR</h4>
              {["red", "blue", "green"].map((color) => (
                <label key={color} className="inline-flex items-center mr-3">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => toggleFilter("colors", color)}
                    className="mr-1"
                  />
                  <span className={`w-4 h-4 rounded-full bg-${color}-500 border`}></span>
                </label>
              ))}
            </div>

            {/* Gender */}
            <div>
              <h4 className="font-medium mb-2">GENDER</h4>
              {["Male", "Female", "Unisex"].map((g) => (
                <label key={g} className="block text-sm">
                  <input
                    type="radio"
                    name="gender"
                    checked={filters.gender === g}
                    onChange={() => toggleFilter("gender", g, true)}
                    className="mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>

            {/* Size */}
            <div>
              <h4 className="font-medium mb-2">SIZE</h4>
              {["S", "M", "L", "XL"].map((s) => (
                <span
                  key={s}
                  onClick={() => toggleFilter("sizes", s)}
                  className={`inline-block px-2 py-1 border rounded cursor-pointer mr-2 mb-2 ${
                    filters.sizes.includes(s) ? "bg-gray-200" : ""
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Price */}
            <div>
              <h4 className="font-medium mb-2">PRICE</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => toggleFilter("minPrice", e.target.value, true)}
                  className="w-1/2 border rounded px-2 py-1"
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => toggleFilter("maxPrice", e.target.value, true)}
                  className="w-1/2 border rounded px-2 py-1"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <h4 className="font-medium mb-2">CUSTOMER RATINGS</h4>
              {[4, 3, 2].map((r) => (
                <label key={r} className="block text-sm">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === String(r)}
                    onChange={() => toggleFilter("minRating", String(r), true)}
                    className="mr-2"
                  />
                  {r}★ & above
                </label>
              ))}
            </div>

            {/* Availability */}
            <div>
              <h4 className="font-medium mb-2">AVAILABILITY</h4>
              <label className="text-sm">
                <input
                  type="checkbox"
                  checked={filters.availability}
                  onChange={() => toggleFilter("availability", !filters.availability, true)}
                  className="mr-2"
                />
                In Stock
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {currentCards.length === 0 ? (
              <p className="col-span-full text-center text-gray-600">No products found</p>
            ) : (
              currentCards.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Link to={`/shop/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded-full">{product.badge}</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded">{product.discount}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link to={`/shop/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12 dark:text-white">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between mb-3">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-green-600 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{product.delivery}</span>
                    </div>
                    <AddToCartButton product={product} cart={cart} setCart={setCart}  variant="card"/>
                  </div>
                </div>
              ))
            )}

            {/* Pagination */}
            <div className="col-span-full flex justify-center mt-6 gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-full border bg-white text-gray-700 disabled:opacity-50"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(Math.max(0, currentPage - 3), currentPage + 3)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      currentPage === page ? "bg-primary text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-full border bg-white text-gray-700 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
