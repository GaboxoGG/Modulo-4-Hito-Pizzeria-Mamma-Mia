import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/register">
            Register
          </Link>

          <Link className="nav-link text-white" to="/login">
            Login
          </Link>

          <Link className="nav-link text-white" to="/profile">
            Profile
          </Link>

          <Link className="btn btn-outline-info" to="/cart">
            🛒 Total: $25.000
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;