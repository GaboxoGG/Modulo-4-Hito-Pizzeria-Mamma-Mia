import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  const [view, setView] = useState("home");

  return (
    <>
      <Navbar setView={setView} />

      {view === "home" && <Home />}
      {view === "login" && <LoginPage />}
      {view === "register" && <RegisterPage />}

      <Footer />
    </>
  );
}

export default App;