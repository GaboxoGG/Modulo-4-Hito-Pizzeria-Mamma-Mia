const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#222", color: "#fff" }}>
      <div>
        <button>🍕 Home</button>

        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔓 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )}
      </div>

      <button>🛒 Total: ${total.toLocaleString()}</button>
    </nav>
  );
};

export default Navbar;