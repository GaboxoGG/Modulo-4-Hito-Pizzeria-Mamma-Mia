import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Página no encontrada</h1>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
}

export default NotFound;