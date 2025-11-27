import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";

export const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
};

export default App;
