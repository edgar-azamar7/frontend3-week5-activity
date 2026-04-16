import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        💻 TechStore
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Catálogo
        </Link>
        <Link to="/favorites" className="nav-link">
          Wishlist
        </Link>
      </div>

      <div className="nav-actions">
        <button className="nav-button">Carrito (0)</button>
      </div>
    </nav>
  );
};

export default Navbar;
