import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
    <header>
      <h2>MovieCatalog</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Favoritos</Link>
        <Link to="/login">Login</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};
