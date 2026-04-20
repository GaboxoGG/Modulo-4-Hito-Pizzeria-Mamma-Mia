const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between">

        {/* IZQUIERDA */}
        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand mb-0 h5">
            Pizzería Mamma Mía!
          </span>

          <a className="btn btn-outline-light btn-sm">🍕 Inicio</a>

          {token ? (
            <>
              <a className="btn btn-outline-light btn-sm">🔓 Profile</a>
              <a className="btn btn-outline-light btn-sm">🔓 Logout</a>
            </>
          ) : (
            <>
              <a className="btn btn-outline-light btn-sm">🔐 Login</a>
              <a className="btn btn-outline-light btn-sm">🔐 Register</a>
            </>
          )}
        </div>

        {/* DERECHA */}
        <div>
          <a className="btn btn-info btn-sm">
            🛒 Total: ${total.toLocaleString()}
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;