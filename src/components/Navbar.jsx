import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/ar">AR View</Link>
    </nav>
  );
}
