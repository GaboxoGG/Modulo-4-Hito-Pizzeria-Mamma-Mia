import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    if (email === "prueba@prueba.com" && password === "123456") {
      alert("Authentication successful! ✅");
    } else {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-dark w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;