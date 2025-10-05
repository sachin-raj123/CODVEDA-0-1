// src/routes/PublicRoutes.jsx
  import { AboutUsPage } from "../Pages/AboutUsPage";
import { ContactPage } from "../Pages/ContactPage";
import HomePage from "../Pages/HomePage"
  import Layout from "../PublicLayout/Layout";

const PublicRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },             // homepage by default
      { path: "aboutus", element: <AboutUsPage /> },  
      { path: "contact", element: <ContactPage /> },  
    ],
  },
];

export default PublicRoutes;