import { Link, useLocation } from 'react-router-dom';
import { FaMagic } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <div className="logo">
          <FaMagic className="logo-icon" />
          <span>DeepEnhance AI</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/enhance" className={isActive('/enhance') ? 'active' : ''}>AI Enhance</Link>
        <Link to="/features" className={isActive('/features') ? 'active' : ''}>Features</Link>
        <Link to="/technology" className={isActive('/technology') ? 'active' : ''}>Technology</Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;