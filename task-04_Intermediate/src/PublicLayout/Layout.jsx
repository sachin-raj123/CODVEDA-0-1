// src/layouts/Layout.jsx
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { Routes, Route } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
