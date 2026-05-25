import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Links */}
        <div className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/login">
            Login
          </Link>

          <Link className="nav-link text-white" to="/register">
            Register
          </Link>

          <Link className="nav-link text-white" to="/profile">
            Profile
          </Link>

          {/* Carrito */}
          <Link className="btn btn-outline-info" to="/cart">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;