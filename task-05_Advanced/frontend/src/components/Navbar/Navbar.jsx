import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import LoginButton from "../LoginButton/LoginButton";
import { FaUserCircle } from "react-icons/fa";
import CartButton from "../CartButton/CartButton";


const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Shop", link: "/shop" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", page: "/shop", sectionId: "trending" },
  { id: 2, name: "Best Selling", page: "/shop", sectionId: "best-selling" },
  { id: 3, name: "Top Rated", page: "/shop", sectionId: "top-rated" },
];

const Navbar = ({ handleOrderPopup }) => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  // Optional: Listen for login/logout events (when localStorage changes)
 useEffect(() => {
  const handleAuthChange = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  window.addEventListener("storage", handleAuthChange);
  window.addEventListener("authChanged", handleAuthChange); // 👈 custom event listener

  return () => {
    window.removeEventListener("storage", handleAuthChange);
    window.removeEventListener("authChanged", handleAuthChange);
  };
}, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };


  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false); // Mobile dropdown toggle

  const handleDropdownClick = (page, sectionId) => {
    if (location.pathname === page) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(page);
    }
    setMobileOpen(false); // close mobile menu after click
    setMobileProductsOpen(false); // close products dropdown
  };

  return (
    <div className="shadow-md bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Shopsy
          </Link>

          {/* Search, Cart, Login, DarkMode */}
          <div className="flex gap-4 items-center">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <CartButton/>
              {!isLoggedIn ?  (
            <LoginButton />
              ):(
             <div className="relative group">
            <FaUserCircle className="text-3xl cursor-pointer text-gray-700 dark:text-white" />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 shadow-md rounded-md p-2">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
              </button>
            </div>
            </div>
          
           )}
            <div className="hidden sm:block">
              <DarkMode />
            </div>

            {/* Hamburger for mobile */}
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className={`sm:flex hidden justify-center bg-white dark:bg-gray-900`}>
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="px-4 hover:text-primary">
                {item.name}
              </Link>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-1 py-2">
              Products <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-md p-2 rounded-md z-50 w-[200px] dark:text-black">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleDropdownClick(item.page, item.sectionId)}
                      className="w-full text-left p-2 rounded-md hover:bg-primary/20"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 shadow-md absolute w-full left-0 top-full z-50">
          <ul className="flex flex-col items-start gap-2 py-4 px-6">
            {Menu.map((item) => (
              <li key={item.id} className="w-full">
                <Link
                  to={item.link}
                  className="w-full block px-4 py-2 rounded-md hover:bg-primary/20"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Products dropdown */}
            <li className="w-full">
              <button
                className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-primary/20"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                Products <FaCaretDown className={`${mobileProductsOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              {mobileProductsOpen && (
                <ul className="pl-4 mt-1 flex flex-col gap-1">
                  {DropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleDropdownClick(item.page, item.sectionId)}
                        className="w-full text-left px-4 py-2 rounded-md hover:bg-primary/20"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Dark Mode inside mobile menu */}
            <li className="w-full mt-2 sm:hidden">
              <DarkMode />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
