import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-red-500">🍽️ AR Dine Pro</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-red-500 font-medium">Home</Link>
        <Link to="/menu" className="hover:text-red-500 font-medium">Menu</Link>
      </div>
    </nav>
  );
}
