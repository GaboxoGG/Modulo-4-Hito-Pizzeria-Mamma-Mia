import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import Cart from "./views/Cart";
import Pizza from "./views/Pizza";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";

import { useUser } from "./context/UserContext";

function App() {

  const { token } = useUser();

  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/" />
              : <LoginPage />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            token
              ? <Navigate to="/" />
              : <RegisterPage />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Pizza dinámica */}
        <Route
          path="/pizza/:id"
          element={<Pizza />}
        />

        {/* Profile protegido */}
        <Route
          path="/profile"
          element={
            token
              ? <Profile />
              : <Navigate to="/login" />
          }
        />

        {/* 404 */}
        <Route
          path="/404"
          element={<NotFound />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;