import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Home from './views/Home';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Cart from './views/Cart';
import Pizza from './views/Pizza';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;