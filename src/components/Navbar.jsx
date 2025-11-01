import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-red-500">🍽️ AR Dine Pro</h1>
    <nav className="space-x-6 text-gray-700">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">🛒 Cart</Link>
    </nav>
  </header>
);

export default Navbar;
