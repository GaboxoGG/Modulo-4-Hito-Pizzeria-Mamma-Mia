import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();

  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <div className="container-fluid">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fs-3"
        >
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Botones */}
        <div className="d-flex align-items-center gap-2">

          {/* Inicio */}
          <Link
            to="/"
            className="btn btn-dark"
          >
            Inicio
          </Link>

          {/* Si token existe */}
          {token ? (
            <>
              <Link
                to="/profile"
                className="btn btn-dark"
              >
                Perfil
              </Link>

              <button
                className="btn btn-dark"
                onClick={logout}
              >
                Cierre de sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-dark"
              >
                Iniciar sesión
              </Link>

              <Link
                to="/register"
                className="btn btn-dark"
              >
                Registro
              </Link>
            </>
          )}

          {/* Carrito */}
          <Link
            to="/cart"
            className="btn btn-outline-info"
          >
            🛒 Total: $
            {total.toLocaleString("es-CL")}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;