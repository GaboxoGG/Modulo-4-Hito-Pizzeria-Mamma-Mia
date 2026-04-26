const Navbar = ({ setView }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between">

        {/* IZQUIERDA */}
        <div className="d-flex align-items-center gap-3">
          <span
            className="navbar-brand mb-0 h5"
            style={{ cursor: "pointer" }}
            onClick={() => setView("home")}
          >
            Pizzería Mamma Mía!
          </span>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setView("home")}
          >
            🍕 Inicio
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light btn-sm">
                🔓 Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setView("login")}
              >
                🔐 Login
              </button>

              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setView("register")}
              >
                🔐 Register
              </button>
            </>
          )}
        </div>

        {/* DERECHA */}
        <div>
          <button className="btn btn-info btn-sm">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;