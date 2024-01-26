import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import websiteLogo from "../../assets/images/BookPolisLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={websiteLogo} alt="Logo" style={{ maxWidth: '120px' }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"> Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/historybooks" className="nav-link"> History Books </Link>
            </li>
            <li className="nav-item">
              <Link to="/programmingbooks" className="nav-link">Programming Books </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          {/* Font Awesome icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faUser} /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
