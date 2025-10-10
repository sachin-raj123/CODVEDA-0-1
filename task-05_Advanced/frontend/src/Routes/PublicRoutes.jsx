// src/routes/PublicRoutes.jsx
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Shop from "../Pages/Shop";
import PublicLayout from "../layout/Publiclayout"; // ✅ fixed path
import ProductDetail from "../components/shop/ProductDetail";
import ResetPassword from "../Pages/ResetPassword";
import ProfilePage from "../Pages/Profile";

const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/resetpassword", element: <ResetPassword /> },
      { path: "/signup", element: <Signup /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/product/:id", element: <ProductDetail /> },
       
    ],
  },
];


export default PublicRoutes;
